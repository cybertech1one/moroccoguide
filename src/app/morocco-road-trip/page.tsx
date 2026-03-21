import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Car,
  Fuel,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  Mountain,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Navigation,
  Route,
  Eye,
  Sun,
  Moon,
  Shield,
  FileText,
  Compass,
  CircleDot,
  Map,
  Milestone,
  Phone,
  Gauge,
  Wrench,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Road Trip Guide 2026 | Best Routes, Car Rental & Driving Tips',
  description:
    'Plan the perfect Morocco road trip with our complete guide. Top routes from Marrakech to Sahara, Atlantic coast drives, Tizi n\'Tichka pass, car rental tips from 250 MAD/day, driving rules, fuel stations, road safety, GPS navigation, and overnight stops across Morocco.',
  keywords: [
    'Morocco road trip',
    'Morocco driving guide',
    'Marrakech to Sahara road trip',
    'Morocco car rental',
    'Tizi n Tichka pass',
    'Tizi n Test pass',
    'Morocco road conditions',
    'Atlantic coast Morocco drive',
    'Morocco scenic drives',
    'Rif Mountains road trip',
    'Imperial Cities circuit Morocco',
    'Morocco fuel stations',
    'Morocco police checkpoints',
    'Morocco road safety',
    'driving in Morocco tips',
    'Morocco GPS navigation',
    'Morocco car insurance',
    'Morocco road trip routes 2026',
    'self drive Morocco',
    'Morocco highway tolls',
  ],
  openGraph: {
    title: 'Morocco Road Trip Guide 2026 | Best Routes, Car Rental & Driving Tips',
    description:
      'Complete Morocco road trip planning guide. Best routes, car rental from 250 MAD/day, mountain passes, driving rules, fuel stops, and overnight recommendations for self-drive adventures.',
    url: `${BASE_URL}/morocco-road-trip`,
    images: [
      {
        url: `${BASE_URL}/images/hero-road-trip.webp`,
        width: 1200,
        height: 630,
        alt: 'Winding road through the Atlas Mountains of Morocco with dramatic desert landscape',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Road Trip Guide 2026 | Routes, Rental & Safety',
    description:
      'From Marrakech to the Sahara, along the Atlantic coast, and through the Rif Mountains. Complete self-drive guide for Morocco with prices, driving rules, and road conditions.',
    images: [`${BASE_URL}/images/hero-road-trip.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-road-trip` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-road-trip`,
  name: 'Morocco Road Trip Guide 2026 | Best Routes, Car Rental & Driving Tips',
  description:
    'Complete guide to road tripping Morocco. Best driving routes, car rental advice, mountain passes, fuel stations, road safety tips, and overnight stops.',
  url: `${BASE_URL}/morocco-road-trip`,
  image: `${BASE_URL}/images/hero-road-trip.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-road-trip`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Road Trip Guide', item: `${BASE_URL}/morocco-road-trip` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need an international driving permit for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco requires an International Driving Permit (IDP) alongside your valid home-country license. Rental agencies will ask for both at pickup. Get your IDP before you travel — it cannot be obtained in Morocco.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does car rental cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget cars (Dacia Logan, Renault Clio) start from 250 MAD per day. Mid-range SUVs suitable for mountain and desert roads cost from 500 MAD per day. 4x4 vehicles for off-road Sahara access start from 900 MAD per day. Prices increase during peak season (October-April).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is driving in Morocco safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has well-maintained toll highways (autoroutes) between major cities. Mountain roads and rural routes require extra caution due to sharp bends, livestock on the road, and occasional poor signage. Avoid driving at night outside cities. Overall, with sensible precautions, self-driving is a rewarding way to explore Morocco.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the speed limit in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Speed limits are 60 km/h in towns, 100 km/h on national roads, and 120 km/h on autoroutes (toll highways). Speed cameras and radar traps are common, especially near towns. Fines start from 300 MAD and are payable on the spot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I drive from Marrakech to the Sahara Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Marrakech to Merzouga (Sahara) route takes approximately 9-10 hours via the N10 through Ouarzazate, crossing the Tizi n\'Tichka pass at 2,260m. Most travelers break this into a 2-day drive, stopping overnight in Ouarzazate or Tinghir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a 4x4 for a Morocco road trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard car handles all paved roads, autoroutes, and the main routes to the desert. A 4x4 is only necessary for off-road desert tracks, remote mountain pistes, and the last stretch from Rissani to some desert camps. For the Todra and Dades gorges, paved roads are accessible by regular car.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there toll roads in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco has an excellent autoroute (highway) network with tolls. Casablanca to Marrakech costs approximately 60 MAD, Casablanca to Fes around 120 MAD, and Tangier to Casablanca about 200 MAD. Payment is cash only at most toll booths, though some now accept Jawaz electronic passes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do at a police checkpoint in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Police checkpoints are routine in Morocco and not a cause for concern. Slow down, lower your window, and have your passport, driving license, IDP, and car rental documents ready. Officers may ask where you are coming from and going. Stay calm and polite. The entire process takes under two minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find fuel stations on a Morocco road trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fuel stations are plentiful on highways and in towns (Afriquia, Shell, Total). In rural and mountain areas, stations can be 80-100 km apart. Always fill up before entering the Atlas Mountains or heading into the desert. Diesel (gasoil) costs from 11 MAD per liter and petrol (essence) from 13 MAD per liter.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ROAD TRIP ROUTES
   ═══════════════════════════════════════════════════════════════ */

const roadTripRoutes = [
  {
    name: 'Marrakech to Sahara Desert',
    icon: Sun,
    days: '3-4 days',
    distance: '560 km one way',
    difficulty: 'Moderate',
    highlights: ['Tizi n\'Tichka Pass (2,260m)', 'Ait Benhaddou Kasbah', 'Ouarzazate film studios', 'Dades Gorge', 'Todra Gorge', 'Merzouga sand dunes'],
    description:
      'The most popular road trip in Morocco. Cross the High Atlas via the Tizi n\'Tichka pass, stop at the UNESCO-listed Ait Benhaddou, explore Ouarzazate, and wind through the Dades Valley before reaching the Erg Chebbi dunes at Merzouga.',
    overnights: ['Ouarzazate or Ait Benhaddou (Night 1)', 'Tinghir or Dades Gorge (Night 2)', 'Merzouga desert camp (Night 3)'],
    bestSeason: 'October to April (avoid summer heat in the desert)',
    fuelStops: 'Marrakech, Ouarzazate, Tinghir, Errachidia, Merzouga',
    roadType: 'Paved throughout (N9, N10). No 4x4 needed on main route.',
  },
  {
    name: 'Atlantic Coast Road Trip',
    icon: Compass,
    days: '5-7 days',
    distance: '950 km (Tangier to Agadir)',
    difficulty: 'Easy',
    highlights: ['Asilah art murals', 'Rabat Kasbah des Oudaias', 'El Jadida Portuguese cistern', 'Essaouira medina', 'Taghazout surf village', 'Agadir promenade'],
    description:
      'A relaxed coastal drive from Tangier south to Agadir. The road hugs the Atlantic, passing through whitewashed towns, ancient ports, and laid-back surf spots. Flat terrain and well-paved roads make this the easiest route for first-time drivers in Morocco.',
    overnights: ['Asilah (Night 1)', 'Rabat (Night 2)', 'El Jadida (Night 3)', 'Essaouira (Nights 4-5)', 'Taghazout or Agadir (Night 6)'],
    bestSeason: 'Year-round (summer for beaches, spring/autumn for mild weather)',
    fuelStops: 'Frequent — every 30-50 km along the coast highway',
    roadType: 'Autoroute (A1/A5) and national roads. Excellent condition throughout.',
  },
  {
    name: 'Rif Mountains Loop',
    icon: Mountain,
    days: '3-4 days',
    distance: '400 km loop from Fes',
    difficulty: 'Challenging',
    highlights: ['Chefchaouen blue city', 'Akchour waterfalls', 'Talassemtane National Park', 'Ketama cedar forests', 'Rif Mountain passes', 'Ouezzane holy town'],
    description:
      'A dramatic mountain circuit starting and ending in Fes. The road climbs through the Rif range to Chefchaouen, then loops through remote Berber villages, dense cedar forests, and mountain passes above 1,800m. Tight switchbacks and narrow roads demand confident driving skills.',
    overnights: ['Chefchaouen (Nights 1-2)', 'Ketama or Al Hoceima (Night 3)', 'Return to Fes (Night 4)'],
    bestSeason: 'April to June, September to November (snow possible in winter)',
    fuelStops: 'Fes, Ouezzane, Chefchaouen, Ketama. Fill up before mountain sections.',
    roadType: 'Paved but narrow with tight switchbacks. Some sections lack guardrails.',
  },
  {
    name: 'Imperial Cities Circuit',
    icon: Star,
    days: '5-7 days',
    distance: '750 km loop',
    difficulty: 'Easy',
    highlights: ['Marrakech medina', 'Rabat Hassan Tower', 'Meknes Bab Mansour', 'Volubilis Roman ruins', 'Fes el-Bali medina', 'Casablanca Hassan II Mosque'],
    description:
      'Connect Morocco\'s four imperial capitals in one grand loop. The route follows modern autoroutes between Marrakech, Rabat, Meknes, and Fes, with a detour to Casablanca. Fast highways mean short driving days, leaving maximum time for sightseeing in each city.',
    overnights: ['Casablanca (Night 1)', 'Rabat (Night 2)', 'Meknes or Volubilis (Night 3)', 'Fes (Nights 4-5)', 'Return to Marrakech (Night 6)'],
    bestSeason: 'Year-round (spring and autumn are most pleasant)',
    fuelStops: 'Autoroute service stations every 40-60 km. No fuel concerns on this route.',
    roadType: 'Primarily autoroute (toll highway). The fastest, smoothest roads in Morocco.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MOUNTAIN PASSES
   ═══════════════════════════════════════════════════════════════ */

const mountainPasses = [
  {
    name: 'Tizi n\'Tichka',
    elevation: '2,260m',
    route: 'Marrakech to Ouarzazate (N9)',
    distance: '190 km',
    driveTime: '4-5 hours',
    description:
      'Morocco\'s highest paved mountain pass and the main gateway to the Sahara. The road was built by the French Foreign Legion in the 1930s and features over 100 hairpin turns. Stunning views of the High Atlas peaks unfold at every switchback. The descent into the arid pre-Saharan landscape on the south side is one of Morocco\'s most dramatic transitions.',
    tips: ['Start early morning to avoid afternoon cloud cover', 'Bring warm layers — temperatures drop sharply at the summit', 'Watch for slow-moving trucks on blind corners', 'Several roadside cafes at the top serve hot mint tea'],
  },
  {
    name: 'Tizi n\'Test',
    elevation: '2,092m',
    route: 'Marrakech to Taroudant (N10)',
    distance: '210 km',
    driveTime: '5-6 hours',
    description:
      'A far wilder and less-traveled alternative to Tizi n\'Tichka. This narrow, twisting road carves through the western High Atlas with precipitous drops, single-lane sections, and no guardrails in places. The scenery is raw and untouched — deep valleys, Berber villages clinging to hillsides, and distant views toward the Souss plain. Only for experienced mountain drivers.',
    tips: ['Not suitable for nervous drivers or large vehicles', 'Honk before blind corners — locals do the same', 'Allow a full day for the crossing with photo stops', 'Petrol stations are scarce — fill up in Marrakech or Taroudant'],
  },
  {
    name: 'Tizi n\'Talrhemt',
    elevation: '1,907m',
    route: 'Errachidia to Midelt (N13)',
    distance: '160 km',
    driveTime: '2.5-3 hours',
    description:
      'A high plateau crossing between the Middle Atlas and the pre-Saharan zone. Less dramatic than the other passes but offers vast, open panoramas of steppe grasslands and distant snow-capped peaks. The road is wide and well-maintained, making it an enjoyable drive for all skill levels.',
    tips: ['Strong crosswinds common on the plateau — grip the steering firmly', 'Midelt is an excellent lunch stop (known for apple orchards and trout)', 'Few facilities between towns — carry water and snacks', 'The landscape transitions from green to arid within a single hour'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CAR RENTAL PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const rentalPrices = [
  { category: 'Economy (Dacia Logan, Renault Clio)', daily: 'From 250 MAD/day', weekly: 'From 1,400 MAD/week', deposit: 'From 3,000 MAD', note: 'Best for city-to-city highway driving' },
  { category: 'Mid-Range (Dacia Duster, Hyundai Tucson)', daily: 'From 500 MAD/day', weekly: 'From 3,000 MAD/week', deposit: 'From 5,000 MAD', note: 'Ideal for mountain passes and mixed terrain' },
  { category: '4x4 (Toyota Land Cruiser, Mitsubishi Pajero)', daily: 'From 900 MAD/day', weekly: 'From 5,500 MAD/week', deposit: 'From 10,000 MAD', note: 'Required for off-road desert tracks only' },
  { category: 'Minivan (Renault Scenic, Dacia Lodgy)', daily: 'From 400 MAD/day', weekly: 'From 2,400 MAD/week', deposit: 'From 4,000 MAD', note: 'Good for families, luggage space' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DRIVING RULES
   ═══════════════════════════════════════════════════════════════ */

const drivingRules = [
  { rule: 'Drive on the Right', icon: Navigation, description: 'Morocco drives on the right side of the road. Overtake on the left. Roundabouts follow the continental European convention — give way to traffic already in the roundabout.' },
  { rule: 'Speed Limits', icon: Gauge, description: '60 km/h in urban areas, 100 km/h on national roads (routes nationales), and 120 km/h on autoroutes. Speed cameras are widespread, especially at city entrances.' },
  { rule: 'Seatbelts Mandatory', icon: ShieldCheck, description: 'Front and rear seatbelts must be worn at all times. Children under 10 must sit in the back seat. Fines for non-compliance start from 300 MAD.' },
  { rule: 'Zero Tolerance on Alcohol', icon: AlertTriangle, description: 'The legal blood alcohol limit is effectively zero (0.02%). Penalties include immediate license suspension, heavy fines, and potential imprisonment. Do not drink and drive.' },
  { rule: 'Mobile Phones Prohibited', icon: Phone, description: 'Using a handheld phone while driving is illegal. Hands-free devices are permitted. Fines start from 300 MAD. Pull over completely if you need to take a call or check maps.' },
  { rule: 'Documents Required', icon: FileText, description: 'Always carry your passport, home-country driving license, International Driving Permit (IDP), car rental contract, and insurance documents. Police can ask for all of these at checkpoints.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ROAD SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  { tip: 'Avoid Night Driving', icon: Moon, description: 'Livestock, unlit vehicles, pedestrians walking on highway shoulders, and poorly marked road works make night driving outside cities genuinely dangerous. Plan your arrival before sunset.' },
  { tip: 'Watch for Livestock', icon: AlertTriangle, description: 'Sheep, goats, donkeys, and occasionally camels wander onto roads without warning, particularly in rural and mountain areas. Slow down through villages and near farmland.' },
  { tip: 'Beware of Aggressive Overtaking', icon: Car, description: 'Local drivers often overtake on blind corners and hills. Stay alert, keep to the right, and never assume an oncoming lane is clear when rounding a bend.' },
  { tip: 'Carry Emergency Supplies', icon: Wrench, description: 'Keep a reflective triangle, first aid kit, spare tire, jack, water (minimum 3 liters per person), and a phone charger in the car. Breakdown assistance in remote areas can take hours.' },
  { tip: 'GPS Offline Maps', icon: Map, description: 'Download offline maps (Google Maps, Maps.me, or Waze) before departure. Mobile signal drops out in mountain passes and desert areas. A physical road map of Morocco is useful as backup.' },
  { tip: 'Fuel Up Early', icon: Fuel, description: 'In the Atlas Mountains and desert regions, fuel stations can be 80-100 km apart. Top off your tank whenever you pass a station. Diesel (gasoil) and unleaded petrol (essence sans plomb) are both widely available.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOLL HIGHWAY COSTS
   ═══════════════════════════════════════════════════════════════ */

const tollCosts = [
  { route: 'Casablanca to Marrakech', distance: '240 km', toll: 'From 60 MAD', time: '2.5 hours' },
  { route: 'Casablanca to Rabat', distance: '90 km', toll: 'From 20 MAD', time: '1 hour' },
  { route: 'Casablanca to Fes', distance: '290 km', toll: 'From 120 MAD', time: '3 hours' },
  { route: 'Tangier to Casablanca', distance: '340 km', toll: 'From 200 MAD', time: '3.5 hours' },
  { route: 'Rabat to Meknes', distance: '140 km', toll: 'From 50 MAD', time: '1.5 hours' },
  { route: 'Marrakech to Agadir', distance: '260 km', toll: 'From 80 MAD', time: '3 hours' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ ITEMS
   ═══════════════════════════════════════════════════════════════ */

const faqItems = [
  {
    question: 'Do I need an international driving permit for Morocco?',
    answer: 'Yes. Morocco requires an International Driving Permit (IDP) alongside your valid home-country license. Rental agencies will ask for both at pickup. Get your IDP before you travel — it cannot be obtained in Morocco. The IDP must be obtained from your home country\'s automobile association (AAA in the US, AA in the UK, CAA in Canada).',
  },
  {
    question: 'How much does car rental cost in Morocco?',
    answer: 'Budget cars (Dacia Logan, Renault Clio) start from 250 MAD per day. Mid-range SUVs suitable for mountain and desert roads cost from 500 MAD per day. 4x4 vehicles for off-road Sahara access start from 900 MAD per day. Prices increase during peak season (October-April). Book at least 2-3 weeks in advance for the best rates.',
  },
  {
    question: 'Is driving in Morocco safe for tourists?',
    answer: 'Morocco has well-maintained toll highways (autoroutes) between major cities. Mountain roads and rural routes require extra caution due to sharp bends, livestock on the road, and occasional poor signage. Avoid driving at night outside cities. With sensible precautions and defensive driving habits, self-driving is a rewarding way to explore Morocco.',
  },
  {
    question: 'What is the speed limit in Morocco?',
    answer: 'Speed limits are 60 km/h in towns, 100 km/h on national roads, and 120 km/h on autoroutes (toll highways). Speed cameras and radar traps are common, especially near towns. Fines start from 300 MAD and are payable on the spot. Always carry cash for potential fines.',
  },
  {
    question: 'Can I drive from Marrakech to the Sahara Desert?',
    answer: 'Yes. The Marrakech to Merzouga (Sahara) route takes approximately 9-10 hours via the N10 through Ouarzazate, crossing the Tizi n\'Tichka pass at 2,260m. Most travelers break this into a 2-day drive, stopping overnight in Ouarzazate or Tinghir. The entire route is paved, and a regular car handles it without problems.',
  },
  {
    question: 'Do I need a 4x4 for a Morocco road trip?',
    answer: 'A standard car handles all paved roads, autoroutes, and the main routes to the desert. A 4x4 is only necessary for off-road desert tracks, remote mountain pistes (unpaved tracks), and the final stretch from Rissani to some desert camps. For the Todra and Dades gorges, paved roads are accessible by regular car.',
  },
  {
    question: 'Are there toll roads in Morocco?',
    answer: 'Yes. Morocco has an excellent autoroute (highway) network with tolls. Casablanca to Marrakech costs approximately 60 MAD, Casablanca to Fes around 120 MAD, and Tangier to Casablanca about 200 MAD. Payment is cash only at most toll booths, though some now accept the Jawaz electronic pass. Keep dirham coins and small notes handy.',
  },
  {
    question: 'What should I do at a police checkpoint in Morocco?',
    answer: 'Police checkpoints are routine in Morocco and not a cause for concern. Slow down, lower your window, and have your passport, driving license, IDP, and car rental documents ready. Officers may ask where you are coming from and going to. Stay calm, be polite, and answer briefly. The entire process takes under two minutes in most cases.',
  },
  {
    question: 'Where can I find fuel stations on a Morocco road trip?',
    answer: 'Fuel stations (Afriquia, Shell, Total, Winxo) are plentiful on highways and in towns. In rural and mountain areas, stations can be 80-100 km apart. Always fill up before entering the Atlas Mountains or heading into the desert. Diesel (gasoil) costs from 11 MAD per liter and petrol (essence) from 13 MAD per liter. Seasonal pricing can change.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoRoadTripPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Morocco Road Trip Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center">
        <img
          src="/images/hero-road-trip.webp"
          alt="Winding mountain road through the High Atlas Mountains of Morocco with dramatic cliffs and valleys"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4 drop-shadow-lg">
            Morocco Road Trip Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-[family-name:var(--font-heading)] max-w-2xl mx-auto drop-shadow">
            The open road awaits. From Saharan dunes to Atlantic cliffs, here is everything you need to know about driving across Morocco.
          </p>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
              Why Road Trip Morocco?
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Morocco packs an extraordinary range of landscapes into a relatively compact country. A road trip lets you
              experience the full spectrum — from the green plains around Meknes to the snow-capped High Atlas, from the
              Atlantic surf breaks of Taghazout to the towering Erg Chebbi sand dunes at Merzouga. Public transport
              connects major cities well, but for the gorges, mountain passes, and hidden kasbahs, having your own wheels
              opens up an entirely different Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5 text-center">
              <Route className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                57,000+ km of Roads
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Morocco has invested heavily in its road network. The autoroute system connects every major city, while mountain routes offer unforgettable scenery.
              </p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                From 250 MAD/Day
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Car rental is affordable by international standards. Split between 2-4 travelers, it is often cheaper than trains and far more flexible.
              </p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Eye className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Hidden Gems Access
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Dozens of kasbahs, gorges, oases, and Berber villages sit well off the bus routes. A car unlocks the Morocco most tourists never see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Road Trip Routes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Road Trip Routes in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four classic itineraries covering desert, coast, mountains, and imperial history. Each route is fully drivable in a standard rental car unless noted otherwise.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roadTripRoutes.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div key={route.name} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] px-6 py-4 flex items-center gap-3">
                    <RouteIcon className="w-6 h-6 text-white" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-white">
                      {route.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded text-[var(--text-muted)]">
                        <Clock className="w-3 h-3" /> {route.days}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded text-[var(--text-muted)]">
                        <Milestone className="w-3 h-3" /> {route.distance}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded text-[var(--text-muted)]">
                        <Gauge className="w-3 h-3" /> {route.difficulty}
                      </span>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mb-4">{route.description}</p>

                    <div className="mb-4">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                        Key Stops
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5">
                        {route.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                      <div className="flex items-start gap-2">
                        <Moon className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <div><span className="font-semibold text-[var(--text-primary)]">Overnight stops:</span> {route.overnights.join(' → ')}</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sun className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <div><span className="font-semibold text-[var(--text-primary)]">Best season:</span> {route.bestSeason}</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Fuel className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <div><span className="font-semibold text-[var(--text-primary)]">Fuel stops:</span> {route.fuelStops}</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Car className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <div><span className="font-semibold text-[var(--text-primary)]">Road type:</span> {route.roadType}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mountain Passes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Iconic Mountain Passes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s High Atlas and Middle Atlas crossings rank among the most spectacular drives in North Africa. Here are the three you should know about.
          </p>

          <div className="space-y-8">
            {mountainPasses.map((pass) => (
              <div key={pass.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {pass.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">{pass.route}</p>
                  </div>
                  <div className="flex gap-3 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 rounded font-semibold">
                      <Mountain className="w-3 h-3" /> {pass.elevation}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-[var(--surface-muted)] px-2 py-1 rounded">
                      <Milestone className="w-3 h-3" /> {pass.distance}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-[var(--surface-muted)] px-2 py-1 rounded">
                      <Clock className="w-3 h-3" /> {pass.driveTime}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{pass.description}</p>

                <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                  <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                    Driving Tips
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {pass.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <Info className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Car Rental Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Car Rental in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect when renting a car for your Morocco road trip.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak months (October-April) and holiday periods, when rental costs may increase by 30-50%.
          </p>

          {/* Price Table */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Daily Rate</div>
                <div className="p-3 px-4">Weekly Rate</div>
                <div className="p-3 px-4">Best For</div>
              </div>
              {rentalPrices.map((item, i) => (
                <div
                  key={item.category}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.category}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.daily}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.weekly}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Rental Tips */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <FileText className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Insurance Options
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Basic CDW (Collision Damage Waiver) is typically included but carries a high excess (from 5,000 MAD). Upgrade to full coverage (Super CDW) for from 80 MAD/day to reduce the excess to zero. Third-party liability insurance is mandatory and always included. Check if your credit card provides rental car coverage.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Pre-Trip Inspection
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Photograph every scratch, dent, and mark on the car before leaving the lot. Check the spare tire, jack, and reflective triangle are present. Ensure the fuel tank matches the contract. Record any pre-existing damage on the rental agreement and get the agent to initial it. This protects you from false damage claims.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Where to Rent
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                International agencies (Hertz, Europcar, Sixt) have airport desks in Marrakech, Casablanca, Fes, and Agadir. Local agencies often offer lower rates but vary in quality. Book through comparison sites (Discover Cars, Rentalcars) for the best deals. Airport pickup is most convenient; medina offices can be hard to find.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Navigation className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                GPS and Navigation
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Rental GPS units cost from 50 MAD/day. Your smartphone with offline Google Maps or Maps.me works just as well and costs nothing. Buy a local SIM card (Maroc Telecom, Inwi, or Orange) for from 30 MAD with data for real-time navigation. A phone mount is essential — bring one from home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Driving Rules ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Driving Rules
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential regulations every driver must know before hitting Moroccan roads. Violations carry on-the-spot fines starting from 300 MAD.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drivingRules.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {rule.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{rule.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Road Safety Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Road Safety in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s roads are generally good, but local driving habits and rural conditions demand extra awareness. These tips will keep you safe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.tip}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Toll Highway Costs ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Autoroute Toll Costs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s toll highways (autoroutes) are fast, safe, and well-maintained. Here are the approximate costs for the main routes.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Tolls are paid in cash (MAD) at each toll booth. Keep small bills and coins ready. Seasonal pricing can change.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Route</div>
              <div className="p-3 px-4">Distance</div>
              <div className="p-3 px-4">Toll</div>
              <div className="p-3 px-4">Drive Time</div>
            </div>
            {tollCosts.map((item, i) => (
              <div
                key={item.route}
                className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.route}</div>
                <div className="p-3 px-4 text-[var(--text-secondary)]">{item.distance}</div>
                <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.toll}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Police Checkpoints ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Police Checkpoints
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Police and gendarmerie checkpoints are a normal part of driving in Morocco. Knowing what to expect removes any anxiety.
          </p>

          <div className="card-moroccan p-6 mb-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              What Happens at a Checkpoint
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Slow down and stop.</span> You will see cones, barriers, or officers waving you to pull over. Sometimes they wave you through without stopping.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Lower your window.</span> Have your passport, driving license, IDP, and rental contract accessible. Officers may glance at these or study them briefly.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Answer basic questions.</span> &quot;Where are you coming from?&quot; and &quot;Where are you going?&quot; are the standard questions. A brief, friendly response is all that is needed.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Drive on.</span> The entire interaction usually takes under two minutes. Officers are professional and accustomed to tourists. Never offer money or act nervous.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Where to Expect Checkpoints
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                City entrances and exits, near major intersections, highway on-ramps, and near the Sahara/southern regions. The area around Ketama in the Rif Mountains has frequent checkpoints. Expect 3-6 checkpoints on a Marrakech to Merzouga drive.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Important Notes
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Never try to avoid or drive through a checkpoint. Fines for traffic violations are payable on the spot in cash — always ask for a receipt. If you are fined, the officer should issue a numbered receipt. Keep all your documents together in an accessible pouch on the dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fuel & Practical Info ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Fuel className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fuel, Parking &amp; Practical Details
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The small details that make a big difference to your road trip experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Fuel className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Fuel Prices &amp; Stations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Diesel (gasoil) costs from 11 MAD per liter. Unleaded petrol (essence sans plomb) costs from 13 MAD per liter. Major brands include Afriquia, Shell, Total, and Winxo. Most stations are full-service — an attendant fills your tank. Tipping the attendant 2-5 MAD is customary. Credit cards accepted at chain stations in cities; carry cash for rural stops. Seasonal pricing can change.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Parking in Cities
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Street parking is managed by unofficial gardiens (attendants wearing hi-vis vests). Pay from 5-10 MAD for short stays, from 20 MAD for overnight. Secure car parks exist near major medinas: Marrakech (Place de Foucauld), Fes (Place R&apos;cif), Essaouira (Bab Doukkala). Hotel parking is from 30-50 MAD per night. Never leave valuables visible in the car.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Wrench className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Breakdowns &amp; Mechanics
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Roadside mechanics (vulcanisateurs for tires) exist in almost every town. Flat tire repair costs from 30-50 MAD. Your rental company should provide 24/7 breakdown assistance — save the number in your phone. In remote areas, passing drivers will often stop to help. The Royal Gendarmerie can assist on highways — dial 177.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CircleDot className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Road Conditions
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Autoroutes are excellent. National roads (N-roads) are generally good but can have potholes. Mountain roads are paved but narrow with tight switchbacks. Desert pistes (unpaved tracks) require a 4x4. After heavy rain, wadis (dry riverbeds) can flood and temporarily cut off roads — check conditions locally before mountain crossings in winter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scenic Drives ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 6 Scenic Drives
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These are the stretches where you will want the camera ready and the windows down.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                1. Dades Gorge Road (R704)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                A 25 km road climbing through the Dades Gorge with tight hairpin bends carved into red rock walls. The famous &quot;Road of a Thousand Kasbahs&quot; runs along the valley floor below. Best in late afternoon when the low sun turns the canyon walls copper and gold.
              </p>
              <div className="text-xs text-[var(--text-muted)] flex items-center gap-3">
                <span className="flex items-center gap-1"><Milestone className="w-3 h-3" /> 25 km</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 1-2 hours with stops</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                2. Tizi n&apos;Tichka (N9)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                The highest paved pass in Morocco at 2,260m. Over 100 hairpin turns take you from the lush Haouz plain to the arid pre-Saharan landscape. The transition is extraordinary — green orchards give way to barren rock in a single drive. Stop at the summit for mint tea and panoramic Atlas views.
              </p>
              <div className="text-xs text-[var(--text-muted)] flex items-center gap-3">
                <span className="flex items-center gap-1"><Milestone className="w-3 h-3" /> 190 km</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 4-5 hours</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                3. Todra Gorge Approach (R703)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                The road narrows as 300-meter limestone walls close in on both sides. At the gorge&apos;s narrowest point, the gap between the cliffs is just 10 meters wide with a river running through. Rock climbers scale the walls above as you drive through one of Morocco&apos;s most dramatic natural formations.
              </p>
              <div className="text-xs text-[var(--text-muted)] flex items-center gap-3">
                <span className="flex items-center gap-1"><Milestone className="w-3 h-3" /> 15 km from Tinghir</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 30 min + exploring time</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                4. Essaouira to Agadir Coastal Road (N1)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                A stunning 170 km coastal run past rugged Atlantic cliffs, argan tree forests (where goats climb the branches), and quiet fishing villages. The surf town of Taghazout sits midway, surrounded by point breaks and sandy coves. Early morning mist rolls off the ocean and burns away by noon.
              </p>
              <div className="text-xs text-[var(--text-muted)] flex items-center gap-3">
                <span className="flex items-center gap-1"><Milestone className="w-3 h-3" /> 170 km</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 2.5-3 hours</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                5. Chefchaouen to Al Hoceima (N2/N39)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                A remote and challenging mountain road through the heart of the Rif range. Dense cedar forests, deep valleys, and switchbacks above 1,500m. Traffic is sparse and the sense of isolation is profound. The descent to the Mediterranean coast at Al Hoceima reveals turquoise water and rocky coves.
              </p>
              <div className="text-xs text-[var(--text-muted)] flex items-center gap-3">
                <span className="flex items-center gap-1"><Milestone className="w-3 h-3" /> 220 km</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 5-6 hours</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                6. Ouarzazate to Merzouga (N10)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                The landscape shifts from kasbah-dotted valleys to flat hamada (rocky desert) and finally to the towering dunes of Erg Chebbi. The color palette changes hour by hour — ochre, rust, pink, amber. Errachidia marks the halfway point. The final approach to Merzouga, with the 150-meter dunes rising from flat ground, is unforgettable.
              </p>
              <div className="text-xs text-[var(--text-muted)] flex items-center gap-3">
                <span className="flex items-center gap-1"><Milestone className="w-3 h-3" /> 370 km</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 5-6 hours</span>
              </div>
            </div>
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
            {faqItems.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-transport-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Car className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Transport Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trains, buses, taxis, and domestic flights. All the ways to get around Morocco without a car.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/sahara-desert" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Camel treks, desert camps, stargazing, and sandboarding at Erg Chebbi and Erg Chigaga.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/atlas-mountains" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trekking, Berber villages, Toubkal summit, and valley hikes across the High, Middle, and Anti-Atlas.
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
            Ready to Hit the Road?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            Explore our city guides for detailed information on every stop along your route. From Marrakech to Merzouga, Tangier to Agadir, every destination has its own complete guide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/destinations"
              className="bg-white text-[var(--color-accent)] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Browse All Destinations
            </Link>
            <Link
              href="/morocco-budget-guide"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Morocco Budget Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

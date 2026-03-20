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
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Gem,
  Building,
  Award,
  Crown,
  Sun,
  Calendar,
  Flag,
  Mountain,
  Compass,
  Target,
  Briefcase,
  Phone,
  Globe,
  Hotel,
  Waves,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Golf in Morocco 2026 | Best 10 Courses, Royal Golf Clubs & Golf Holidays',
  description:
    'Complete guide to golf in Morocco. Play Royal Golf Marrakech (est. 1927), Amelkis, Palmeraie, Royal Golf Dar Es Salam Rabat, Mazagan, Mogador & more. Green fees from 450 MAD, course profiles, golf holiday packages, best season, equipment rental, and resort options.',
  keywords: [
    'golf morocco',
    'best golf courses morocco',
    'royal golf marrakech',
    'morocco golf holiday',
    'Royal Golf Dar Es Salam',
    'Amelkis Golf Club',
    'Palmeraie Golf Palace',
    'Mazagan Beach golf',
    'Golf du Soleil Agadir',
    'Mogador golf Essaouira',
    'Samanah Golf Club',
    'Atlas Golf Marrakech',
    'Royal Golf El Jadida',
    'Morocco golf packages',
    'golf holidays Morocco',
    'Marrakech golf courses',
    'Morocco golf green fees',
    'championship golf Morocco',
    'Morocco golf resorts',
    'Morocco golf vacation 2026',
    'Agadir golf courses',
    'Rabat golf courses',
    'Morocco golf weather',
    'Morocco golf equipment rental',
    'best golf courses Africa',
  ],
  openGraph: {
    title: 'Golf in Morocco 2026 | Best 10 Courses, Royal Golf Clubs & Golf Holidays',
    description:
      'Play Royal Golf Marrakech, Dar Es Salam Rabat, Mazagan, Amelkis & more. Green fees from 450 MAD, course profiles, holiday packages, and insider tips for Morocco\'s top 10 courses.',
    url: `${BASE_URL}/morocco-golf-courses`,
    images: [
      {
        url: `${BASE_URL}/images/hero-golf-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Lush green golf course fairway in Morocco with Atlas Mountains in the background and palm trees lining the course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golf in Morocco 2026 | Best 10 Courses & Royal Golf Clubs',
    description:
      'From Royal Golf Marrakech (1927) to the Gary Player-designed Mazagan links. Complete guide to Morocco\'s top 10 golf courses with green fees, packages, and tips.',
    images: [`${BASE_URL}/images/hero-golf-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-golf-courses` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — TravelGuide + FAQPage
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-golf-courses`,
  name: 'Golf in Morocco 2026 | Best 10 Courses, Royal Golf Clubs & Golf Holidays',
  description:
    'Complete guide to golf in Morocco. Play Royal Golf Marrakech, Amelkis, Palmeraie, Royal Golf Dar Es Salam Rabat, Mazagan, Mogador & more. Green fees, packages, and insider tips.',
  url: `${BASE_URL}/morocco-golf-courses`,
  image: `${BASE_URL}/images/hero-golf-morocco.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-golf-courses`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Golf in Morocco', item: `${BASE_URL}/morocco-golf-courses` },
    ],
  },
};

const faqJsonLdEntries = [
  { q: 'What is the best time of year to play golf in Morocco?', a: 'October to April is peak golf season for Marrakech and Rabat, with daytime temperatures of 18-25 degrees Celsius. Agadir plays well year-round. Summer golf is best on the coast at Cabo Negro, El Jadida, or Agadir where Atlantic breezes keep temperatures around 25-30 degrees Celsius.' },
  { q: 'Do I need to bring my own golf clubs to Morocco?', a: 'All major courses offer rental clubs from 200-350 MAD per round. Quality is good at Mazagan and Dar Es Salam. For trips longer than 3 rounds, bringing your own clubs is more economical. Most airlines accept golf bags as sports equipment with excess baggage fees from 30-80 EUR.' },
  { q: 'Are caddies available at Moroccan golf courses?', a: 'Caddies are available at all major courses and mandatory at Royal Golf Dar Es Salam (Red Course). Fees are from 150-250 MAD per round. A tip of 50-100 MAD is customary. Caddies are knowledgeable about local conditions and significantly improve the experience.' },
  { q: 'Can beginners play golf courses in Morocco?', a: 'Several courses welcome beginners, particularly Palmeraie Golf Palace, Golf du Soleil, and Atlas Golf Marrakech. Most courses have driving ranges and golf academies with lessons from 300-500 MAD per hour. Some courses require a minimum handicap certificate (typically 36), so check in advance.' },
  { q: 'How do Morocco golf courses compare to European courses?', a: 'Morocco offers championship-quality golf at significantly lower prices than southern Europe. Green fees from 450-1,200 MAD compare favorably to Spain, Portugal, or Turkey. Courses feature world-class designers like Robert Trent Jones Sr. and Gary Player, excellent maintenance, and dramatic settings.' },
  { q: 'What should I wear on a Moroccan golf course?', a: 'Collared polo shirts are required on all courses. Tailored shorts or trousers are mandatory; no jeans or cargo shorts. Golf shoes with soft spikes are required at most courses. Royal Golf Dar Es Salam and Royal Golf Marrakech enforce stricter dress codes. Hats and sunglasses are strongly recommended.' },
  { q: 'Can I combine golf with sightseeing in Morocco?', a: 'Marrakech offers world-class golf alongside one of Africa\'s most exciting medinas. A typical day could include a morning round followed by an afternoon in the souks, a hammam session, or a cooking class. Rabat, El Jadida, Essaouira, and Agadir all offer rich cultural experiences beyond the fairways.' },
];

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqJsonLdEntries.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 10 GOLF COURSES
   ═══════════════════════════════════════════════════════════════ */

const golfCourses = [
  {
    rank: 1,
    name: 'Royal Golf Marrakech',
    city: 'Marrakech',
    holes: 18,
    par: 72,
    founded: 1927,
    designer: 'Established 1927 under Pasha Thami El Glaoui, redesigned by Arnaud Massy',
    greenFee: 'From 700 MAD',
    description:
      'The oldest course in Morocco. Founded in 1927, this parkland layout threads through ancient olive, eucalyptus, and palm trees with the snow-capped High Atlas as a permanent backdrop. The par-5 7th is the signature -- a sweeping dogleg around centuries-old olive trees demanding precision over power. Kings, presidents, and heads of state have played here. Winston Churchill painted watercolors from the clubhouse terrace. The club retains a regal elegance that no modern resort can replicate.',
    facilities: ['Clubhouse with restaurant', 'Pro shop', 'Practice range', 'Putting green', 'Caddies available', 'Club rental'],
    icon: Crown,
  },
  {
    rank: 2,
    name: 'Royal Golf Dar Es Salam',
    city: 'Rabat',
    holes: 45,
    par: 73,
    founded: 1971,
    designer: 'Robert Trent Jones Sr. (Red & Blue courses)',
    greenFee: 'From 900 MAD',
    description:
      'The crown jewel of African golf. Spread across 440 hectares of cork oak forest outside Rabat, Dar Es Salam houses 45 holes across three courses: Red (championship), Blue, and Green. The Red Course\'s par-3 9th is one of the finest short holes in the world -- a tee shot over a lake to an island green ringed by ancient cork oaks. Host of the Hassan II Golf Trophy since 1971, this course put Moroccan golf on the international map.',
    facilities: ['45 holes across three courses', 'Grand clubhouse', 'Fine dining restaurant', 'PGA-standard pro shop', 'Extensive practice facilities', 'Caddies required on Red Course'],
    icon: Award,
  },
  {
    rank: 3,
    name: 'Amelkis Golf Club',
    city: 'Marrakech',
    holes: 27,
    par: 72,
    founded: 1995,
    designer: 'Cabell B. Robinson',
    greenFee: 'From 850 MAD',
    description:
      'Cabell B. Robinson delivered 27 holes spread across three distinct nine-hole loops, each with its own character. The course is celebrated for dramatic High Atlas panoramas and testing water features. The par-3 6th on the original 18 plays over a lake directly toward the snow-capped peaks. Fast, undulating greens reward precision putting. Well-placed bunkers guard every approach. Amelkis hosts regular European senior tour events and draws a loyal following of low-handicap visitors from France, Spain, and the UK.',
    facilities: ['27 holes (3 x 9)', 'Clubhouse and terrace restaurant', 'Practice academy', 'Swimming pool', 'Caddies and buggies', 'Pro shop'],
    icon: Star,
  },
  {
    rank: 4,
    name: 'Palmeraie Golf Palace',
    city: 'Marrakech',
    holes: 18,
    par: 72,
    founded: 1992,
    designer: 'Robert Trent Jones Sr.',
    greenFee: 'From 800 MAD',
    description:
      'Robert Trent Jones Sr. carved this layout through the legendary Palmeraie, date palms and orange trees framing every hole. Wide fairways invite aggressive tee shots, but deep bunkers and water hazards guard the greens. The par-4 14th demands a carry over a ravine to a palm-flanked fairway. The attached luxury resort with spa, three restaurants, and pool makes Palmeraie the top choice for golfers traveling with non-playing partners.',
    facilities: ['Luxury resort on-site', 'Spa and fitness center', 'Three restaurants', 'Practice facilities', 'Caddies and golf carts', 'Equipment rental'],
    icon: Gem,
  },
  {
    rank: 5,
    name: 'Golf du Soleil',
    city: 'Agadir',
    holes: 36,
    par: 72,
    founded: 1990,
    designer: 'Various (Championship & Tikida courses)',
    greenFee: 'From 600 MAD',
    description:
      'Agadir\'s premier golf address offers 36 holes near the Atlantic coast. The Championship Course has wide fairways ideal for mid-handicappers; the Tikida Course is tighter and more demanding. Eucalyptus, bougainvillea, and cactus gardens give both a distinctly Moroccan character. With 300+ days of sunshine, Agadir is Morocco\'s most reliable year-round golfing destination. The par-5 15th on the Championship layout is a risk-reward gem with water guarding the green.',
    facilities: ['36 holes (2 x 18)', 'Clubhouse with panoramic terrace', 'Golf academy', 'Practice range and putting green', 'Equipment rental', 'Buggy hire'],
    icon: Sun,
  },
  {
    rank: 6,
    name: 'Mazagan Beach & Golf Resort',
    city: 'El Jadida',
    holes: 18,
    par: 72,
    founded: 2009,
    designer: 'Gary Player',
    greenFee: 'From 1,200 MAD',
    description:
      'Gary Player called this one of his finest designs. On the Atlantic coast south of Casablanca, the links-style course plays through rolling dunes and windswept terrain. The par-4 16th runs directly toward the ocean, with a green perched on a dune above the crashing surf. Wind demands creative shot shaping and smart club selection. The five-star resort includes a casino, spa, beach club, and multiple restaurants.',
    facilities: ['Five-star resort', 'Spa and beach club', 'Casino', 'Practice range and academy', 'Caddies and buggies', 'Full equipment rental'],
    icon: Waves,
  },
  {
    rank: 7,
    name: 'Mogador Golf Club',
    city: 'Essaouira',
    holes: 18,
    par: 72,
    founded: 2009,
    designer: 'Gary Player',
    greenFee: 'From 750 MAD',
    description:
      'Another Gary Player masterpiece on the windswept Atlantic coast outside Essaouira. Native argan trees, sand dunes, and ocean views create a true links experience. Wind shifts constantly, so no two rounds play the same. The back nine offers panoramic views of Essaouira\'s medina and the Ile de Mogador. The bohemian town is 15 minutes away with fresh seafood, art galleries, and one of Morocco\'s most atmospheric medinas.',
    facilities: ['Sofitel resort on-site', 'Thalassotherapy spa', 'Ocean-view clubhouse', 'Practice facilities', 'Caddies and buggies', 'Equipment rental'],
    icon: Compass,
  },
  {
    rank: 8,
    name: 'Samanah Country Club',
    city: 'Marrakech',
    holes: 18,
    par: 72,
    founded: 2008,
    designer: 'Jack Nicklaus Design',
    greenFee: 'From 1,000 MAD',
    description:
      'The only Jack Nicklaus-designed course in North Africa. Samanah occupies a vast estate south of Marrakech with unobstructed Atlas views from every hole. Nicklaus created a strategic layout where each hole offers multiple lines of play. The par-3 8th plays across a deep ravine to a green guarded by rock outcrops. The course has hosted international tournaments and attracts serious golfers seeking a world-class Nicklaus test. Luxury villas surround the fairways.',
    facilities: ['Luxury clubhouse', 'Fine dining restaurant', 'Practice range and short game area', 'Spa and wellness center', 'Private villas', 'Concierge service'],
    icon: Crown,
  },
  {
    rank: 9,
    name: 'Royal Golf El Jadida',
    city: 'El Jadida',
    holes: 18,
    par: 72,
    founded: 1993,
    designer: 'Cabell B. Robinson',
    greenFee: 'From 500 MAD',
    description:
      'Cabell B. Robinson blended coastal and parkland styles along the Atlantic shoreline. The front nine plays through flat terrain with water features; the back nine rises into dunes with ocean panoramas. The par-3 12th is the signature -- a 180-meter shot over a ravine to a green backed by the Atlantic. Less crowded and more affordable than Marrakech courses, El Jadida is a favorite among resident expats and visiting Europeans.',
    facilities: ['Ocean-view clubhouse', 'Restaurant and lounge', 'Practice facilities', 'Putting green', 'Buggy and caddie hire', 'Pro shop'],
    icon: Flag,
  },
  {
    rank: 10,
    name: 'Atlas Golf Marrakech',
    city: 'Marrakech',
    holes: 18,
    par: 72,
    founded: 2011,
    designer: 'Various',
    greenFee: 'From 550 MAD',
    description:
      'A well-maintained course that punches above its price point. Atlas Golf sits on the southern edge of Marrakech with direct views of the Toubkal massif. The layout is forgiving enough for high-handicappers yet strategic enough for single-digit players. Wide fairways funnel toward smaller, well-defended greens. The par-4 13th is the standout -- a dogleg right around a lake with Atlas peaks framing the approach. Green fees are among the best value in Marrakech.',
    facilities: ['Modern clubhouse', 'Restaurant and bar', 'Driving range', 'Short game area', 'Equipment rental', 'Buggy hire'],
    icon: Mountain,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: GOLF REGIONS
   ═══════════════════════════════════════════════════════════════ */

const golfRegions = [
  {
    region: 'Marrakech & Surrounds',
    icon: Star,
    courseCount: '7+ courses',
    courses: ['Royal Golf Marrakech', 'Amelkis', 'Palmeraie', 'Samanah', 'Atlas Golf', 'Al Maaden', 'Assoufid'],
    climate: 'Warm and dry, 300+ sunshine days. Winter 18-22°C, summer 36-42°C. Best October to April.',
    highlights: [
      '7+ championship layouts within 30 minutes of the medina',
      'Atlas Mountain backdrops, snow-capped November to April',
      'Post-round culture: Jemaa el-Fnaa, souks, hammams, rooftop dining',
    ],
  },
  {
    region: 'Atlantic Coast (El Jadida, Essaouira)',
    icon: Waves,
    courseCount: '4+ courses',
    courses: ['Mazagan Beach', 'Royal Golf El Jadida', 'Mogador (Essaouira)', 'Golf de l\'Ocean'],
    climate: 'Mild Atlantic climate. Winter 16-19°C, summer 25-28°C. Wind 15-25 km/h at Essaouira.',
    highlights: [
      'True links-style golf on windswept dunes with ocean views',
      'Two Gary Player designs: Mazagan and Mogador',
      'Cooler summers make coastal courses ideal when Marrakech is too hot',
    ],
  },
  {
    region: 'Rabat & Meknes',
    icon: Building,
    courseCount: '3+ courses',
    courses: ['Royal Golf Dar Es Salam', 'Royal Golf Mohammedia', 'Royal Golf Meknes'],
    climate: 'Moderate Atlantic climate. Winters 15-19°C, summers 25-30°C. Rain November to March.',
    highlights: [
      'Home to Dar Es Salam -- Africa\'s most prestigious golf address (45 holes)',
      'Host of the Hassan II Golf Trophy since 1971',
      'Rabat\'s UNESCO medina and Chellah ruins 20 minutes from the course',
    ],
  },
  {
    region: 'Tangier & Tetouan (North)',
    icon: Mountain,
    courseCount: '3+ courses',
    courses: ['Cabo Negro Royal Golf Club', 'Royal Golf Tangier', 'Royal Golf de Fes'],
    climate: 'Mediterranean climate. Summers 25-30°C with sea breezes. Winters 12-16°C. Best April to October.',
    highlights: [
      'Best summer golf in Morocco -- comfortable when the south is scorching',
      'Cabo Negro: championship golf from just 450 MAD per round',
      'Rif Mountain and Mediterranean views, ferry connections to Spain',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: GOLF RESORTS WITH ON-SITE COURSES
   ═══════════════════════════════════════════════════════════════ */

const golfResorts = [
  { name: 'Mazagan Beach & Golf Resort', location: 'El Jadida', stars: '5-star',
    course: 'Gary Player 18-hole links', price: 'From 2,800 MAD per night (room + golf)',
    highlights: ['Casino & nightlife', 'Thalassotherapy spa', 'Beach club', 'Kids club'] },
  { name: 'Palmeraie Golf Palace & Resort', location: 'Marrakech (Palmeraie)', stars: '5-star',
    course: 'Robert Trent Jones Sr. 18-hole', price: 'From 2,200 MAD per night (room + golf)',
    highlights: ['On-site spa', 'Three restaurants', 'Large pool complex', 'Tennis courts'] },
  { name: 'Sofitel Mogador Golf & Spa', location: 'Essaouira', stars: '5-star',
    course: 'Gary Player 18-hole links', price: 'From 2,500 MAD per night (room + golf)',
    highlights: ['Thalassotherapy center', 'Ocean-view rooms', '15 min from medina', 'Argan oil treatments'] },
  { name: 'Samanah Country Club & Resort', location: 'Marrakech (South)', stars: '5-star villas',
    course: 'Jack Nicklaus Design 18-hole', price: 'From 3,500 MAD per night (villa + golf)',
    highlights: ['Private villas with pools', 'Atlas views', 'Fine dining', 'Exclusive'] },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: GOLF PACKAGES
   ═══════════════════════════════════════════════════════════════ */

const golfPackages = [
  { name: 'Weekend Golf Getaway', duration: '3 days / 2 nights', icon: Calendar, price: 'From 4,500 MAD per person',
    courses: ['Royal Golf Marrakech', 'Amelkis Golf Club'],
    includes: ['2 rounds with green fees', 'Buggy hire', 'Airport transfers', 'Breakfast daily'],
    description: 'Fly into Marrakech Thursday evening, play two of Morocco\'s finest courses over the weekend, fly home Sunday. Only 3-4 hours from most European cities.' },
  { name: 'Week of Golf', duration: '7 days / 6 nights', icon: Flag, price: 'From 12,000 MAD per person',
    courses: ['Royal Golf Marrakech', 'Amelkis', 'Palmeraie', 'Dar Es Salam (day trip)'],
    includes: ['4 rounds with green fees', 'Buggy hire', 'Airport transfers', 'Half-board', 'Day transfer to Rabat'],
    description: 'Three courses in Marrakech plus a day trip to Rabat for the legendary Dar Es Salam. Rest days for souks, hammams, and cooking classes.' },
  { name: 'Luxury Golf Experience', duration: '5 days / 4 nights', icon: Crown, price: 'From 25,000 MAD per person',
    courses: ['Dar Es Salam (Red)', 'Mazagan Beach links', 'Samanah (Nicklaus)'],
    includes: ['3 championship rounds', 'Private caddie each round', 'Luxury transfers', 'Full-board 5-star', 'Spa package'],
    description: 'The ultimate Moroccan golf trip. Dar Es Salam Red Course, Gary Player-designed Mazagan, Jack Nicklaus-designed Samanah. Five-star resorts, private transfers, spa treatments between rounds.' },
  { name: 'Budget Golf Holiday', duration: '5 days / 4 nights', icon: DollarSign, price: 'From 6,500 MAD per person',
    courses: ['Atlas Golf Marrakech', 'Golf du Soleil', 'Royal Golf El Jadida'],
    includes: ['3 rounds with green fees', 'Shared buggy hire', 'Airport transfers', 'Breakfast daily'],
    description: 'Great golf without the luxury price tag. Atlas Golf, Golf du Soleil, and Royal Golf El Jadida deliver championship experiences at green fees from 450-600 MAD.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is the best time of year to play golf in Morocco?',
    answer:
      'October to April is peak season for Marrakech and Rabat, with temperatures of 18-25 degrees Celsius and lush course conditions. Agadir plays well year-round. Summer (June-August) is too hot for Marrakech golf, but Atlantic coast courses (El Jadida, Essaouira) and Cabo Negro on the Mediterranean remain playable at 25-30 degrees Celsius.',
  },
  {
    question: 'Do I need to bring my own golf clubs to Morocco?',
    answer:
      'Not necessarily. All major courses offer rental clubs from 200-350 MAD per round; quality at Mazagan and Dar Es Salam is genuinely good. Serious golfers prefer their own clubs. Most airlines accept golf bags as sports equipment (excess baggage from 30-80 EUR). If you plan more than 3 rounds, bringing your own set is more economical.',
  },
  {
    question: 'Are caddies available and how much should I tip?',
    answer:
      'Caddies are available at all major courses and mandatory at Dar Es Salam\'s Red Course. Fees run from 150-250 MAD per round. Standard tip is from 50-100 MAD. Moroccan caddies know course conditions, green breaks, and wind patterns, significantly improving the experience on your first visit to any course.',
  },
  {
    question: 'Can beginners play golf courses in Morocco?',
    answer:
      'Several courses welcome beginners: Palmeraie Golf Palace, Golf du Soleil, and Atlas Golf Marrakech all have forgiving layouts with wide fairways. Most courses have driving ranges and golf academies offering lessons from 300-500 MAD per hour with PGA-trained pros. Some courses require a minimum handicap certificate (typically 36 or higher), so check before booking. Save Royal Golf Dar Es Salam\'s Red Course for when you have more experience.',
  },
  {
    question: 'How do Morocco golf courses compare to European courses?',
    answer:
      'Morocco delivers championship-quality golf at significantly lower prices than southern Europe. Green fees from 450-1,200 MAD compare favorably to equivalent courses in the Algarve, Costa del Sol, or Antalya. The courses feature world-class designers (Robert Trent Jones Sr., Gary Player, Jack Nicklaus, Cabell B. Robinson), immaculate maintenance, and dramatic natural settings that few European destinations can match.',
  },
  {
    question: 'What should I wear on a Moroccan golf course?',
    answer:
      'All courses require collared polo shirts -- no T-shirts, tank tops, or collarless shirts. Tailored shorts or trousers are mandatory; jeans and cargo shorts are not allowed. Golf shoes with soft spikes are required at most clubs. Royal Golf Dar Es Salam and Royal Golf Marrakech enforce particularly strict dress codes. A wide-brimmed hat, UV sunglasses, and SPF 50+ sunscreen are strongly recommended given Morocco\'s intense sun.',
  },
  {
    question: 'Can I combine golf with sightseeing in Morocco?',
    answer:
      'This is one of Morocco\'s greatest strengths as a golf destination. Marrakech pairs world-class courses with one of Africa\'s most exciting medinas, Jemaa el-Fnaa, the Majorelle Garden, and hundreds of restaurants. A typical golf holiday day: morning round, afternoon in the souks, evening on a rooftop terrace. Rabat, Essaouira, El Jadida, and Agadir all offer rich cultural experiences alongside the fairways.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoGolfCoursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── 1. Hero with Breadcrumbs ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-golf-morocco.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Golf in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Flag className="w-4 h-4" />
            Sport &amp; Leisure
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Golf in Morocco:
            <br className="hidden md:block" /> Best Courses, Royal Clubs &amp; Golf Holidays
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the 1927 fairways of Royal Golf Marrakech to the Atlantic links of Mazagan and Mogador.
            Play 40+ courses from 450 MAD with Atlas Mountain panoramas and year-round sunshine.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── 2. Why Golf in Morocco ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Golf in Morocco?
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco has been a golfing destination since the 1920s, when the French protectorate built
              the first courses in Rabat and Marrakech. Today the kingdom boasts over 40 courses designed
              by legends: Robert Trent Jones Sr., Gary Player, Jack Nicklaus, Cabell B. Robinson. That
              makes Morocco the undisputed golf capital of Africa and one of the most compelling golfing
              destinations within a short flight of Europe.
            </p>
            <p>
              The appeal goes beyond course quality. Green fees at championship-level courses start from
              450 MAD -- a fraction of what the Algarve or Costa del Sol charges for comparable layouts.
              Over 300 days of sunshine per year guarantee playable conditions in at least one region of
              the country in every month. And the cultural experiences between rounds -- medina souks,
              traditional hammams, rooftop dining above Jemaa el-Fnaa, fresh Atlantic seafood in Essaouira
              -- are unmatched anywhere in the golfing world.
            </p>
            <p>
              The Moroccan royal family has been a driving force behind the sport since King Hassan II
              established the Hassan II Golf Trophy at Dar Es Salam in 1971. That royal patronage continues
              today through investment in new courses, maintenance of historic clubs, and promotion of
              Morocco as a global golf destination. The result: a country where golf is part of the national
              identity, not just a tourist add-on.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="card-moroccan p-6 text-center">
              <Target className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">40+</div>
              <div className="text-sm text-[var(--text-muted)]">Golf Courses</div>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Sun className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">300+</div>
              <div className="text-sm text-[var(--text-muted)]">Sunshine Days / Year</div>
            </div>
            <div className="card-moroccan p-6 text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">450</div>
              <div className="text-sm text-[var(--text-muted)]">MAD Lowest Green Fee</div>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Globe className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">3-4h</div>
              <div className="text-sm text-[var(--text-muted)]">Flight from Europe</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Top 10 Golf Courses ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 10 Golf Courses in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From historic royal clubs founded nearly a century ago to modern championship layouts by golf&apos;s greatest architects.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Green fees shown are starting prices. Seasonal pricing applies during peak months (October-April). Rates may increase 20-40% during holidays and peak weeks.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {golfCourses.map((course) => {
              const CourseIcon = course.icon;
              return (
                <div key={course.rank} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">#{course.rank}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {course.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)] mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {course.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <CourseIcon className="w-3.5 h-3.5" />
                          {course.holes} holes
                        </span>
                        <span className="flex items-center gap-1">
                          <Flag className="w-3.5 h-3.5" />
                          Par {course.par}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          Est. {course.founded}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {course.greenFee}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                      {course.holes} holes / Par {course.par}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{course.description}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Designer / History</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{course.designer}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Facilities</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {course.facilities.map((facility, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {facility}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Golf by Region ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Golf by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each region offers a distinct golfing character, climate, and range of courses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {golfRegions.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <RegionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {region.region}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{region.courseCount}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Climate</h4>
                    <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Thermometer className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      {region.climate}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.courses.map((course, i) => (
                        <span key={i} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Highlights</h4>
                    <div className="space-y-2">
                      {region.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Green Fees & Pricing Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Green Fees &amp; Pricing Comparison
          </h2>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak months (October-April). Twilight rates often available from 14:00.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Course</div>
                <div className="p-3 px-4">Green Fee</div>
                <div className="p-3 px-4">Notes</div>
              </div>
              {[
                { course: 'Cabo Negro Royal Golf Club', fee: 'From 450 MAD', note: 'Best value championship course' },
                { course: 'Royal Golf El Jadida', fee: 'From 500 MAD', note: 'Atlantic coastal views' },
                { course: 'Atlas Golf Marrakech', fee: 'From 550 MAD', note: 'Great value, Atlas views' },
                { course: 'Golf du Soleil (Agadir)', fee: 'From 600 MAD', note: '36 holes, year-round play' },
                { course: 'Royal Golf Marrakech', fee: 'From 700 MAD', note: 'Historic, est. 1927' },
                { course: 'Mogador Golf (Essaouira)', fee: 'From 750 MAD', note: 'Gary Player links design' },
                { course: 'Palmeraie Golf Palace', fee: 'From 800 MAD', note: 'Resort package deals available' },
                { course: 'Amelkis Golf Club', fee: 'From 850 MAD', note: '27 holes, Atlas panoramas' },
                { course: 'Royal Golf Dar Es Salam', fee: 'From 900 MAD', note: 'Africa\'s most prestigious' },
                { course: 'Samanah Country Club', fee: 'From 1,000 MAD', note: 'Jack Nicklaus design' },
                { course: 'Mazagan Beach & Golf', fee: 'From 1,200 MAD', note: 'Gary Player links, 5-star resort' },
                { course: 'Buggy hire (per round)', fee: 'From 250 MAD', note: 'Shared or single occupancy' },
                { course: 'Caddie fee (per round)', fee: 'From 150 MAD', note: 'Plus tip of from 50-100 MAD' },
                { course: 'Club rental (full set)', fee: 'From 350 MAD', note: 'Per round, reserve in advance' },
                { course: 'Twilight rate discount', fee: 'From 50% off', note: 'After 14:00, selected courses' },
              ].map((item, i) => (
                <div
                  key={item.course}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.course}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.fee}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Golf Holiday Packages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Golf Holiday Packages
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Curated packages combining the best courses, accommodation, and transfers for every budget.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Package prices are starting prices per person based on double occupancy. Seasonal surcharges may apply during peak periods.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {golfPackages.map((pkg) => {
              const PkgIcon = pkg.icon;
              return (
                <div key={pkg.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <PkgIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <Clock className="w-3 h-3" />
                        {pkg.duration}
                      </div>
                    </div>
                  </div>

                  <div className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4">
                    {pkg.price}
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{pkg.description}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Courses Included</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.courses.map((course, i) => (
                        <span key={i} className="inline-block px-2 py-0.5 text-xs rounded bg-[var(--surface-muted)] text-[var(--text-muted)]">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Package Includes</h4>
                    <div className="space-y-1.5">
                      {pkg.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. Best Season for Golf in Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Season for Golf in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s diverse climate means there is always a course in perfect condition somewhere in the country.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Sun className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Peak Season: October to April
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The golden window for golf in Marrakech and Rabat. Daytime temperatures range from
                18 to 25 degrees Celsius. Courses are green and lush from autumn rains. The Atlas
                Mountains are snow-capped from November to March, creating spectacular backdrops
                from every tee box. This is also the busiest period, so book tee times 1-2 weeks
                in advance and expect peak-season green fees.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <Thermometer className="w-3 h-3 text-[var(--color-accent)]" />
                  18-25 degrees Celsius
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  Best for: Marrakech, Rabat, El Jadida
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Thermometer className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Summer: May to September
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Marrakech reaches 36-42 degrees Celsius in summer, making midday golf punishing.
                But the coast comes alive. Cabo Negro on the Mediterranean and Agadir, El Jadida,
                and Essaouira on the Atlantic offer comfortable playing temperatures of 25-30 degrees
                Celsius with refreshing sea breezes. Early morning tee times (before 08:00) are
                essential even on the coast. Green fees drop 15-25% at inland courses during summer.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <Thermometer className="w-3 h-3 text-[var(--color-accent)]" />
                  25-30 degrees Celsius (coast)
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  Best for: Agadir, Cabo Negro, Essaouira
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Star className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Year-Round: Agadir
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Agadir&apos;s microclimate makes it Morocco&apos;s most reliable year-round golfing
                base. Winter temperatures rarely drop below 18 degrees Celsius. Summer heat stays
                moderated by Atlantic breezes. Golf du Soleil and the surrounding Agadir courses
                are always in season. For golfers who want guaranteed good weather with no seasonal
                risk, Agadir is the safest bet in Morocco regardless of travel dates.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <Thermometer className="w-3 h-3 text-[var(--color-accent)]" />
                  18-30 degrees Celsius year-round
                </span>
                <span className="flex items-center gap-1">
                  <Sun className="w-3 h-3 text-[var(--color-accent)]" />
                  300+ days of sunshine
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Golf Resorts with On-Site Courses ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hotel className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Golf Resorts with On-Site Courses
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Stay where you play. These resorts have championship courses steps from your room.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {golfResorts.map((resort) => (
              <div key={resort.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {resort.name}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {resort.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[var(--color-gold)]" />
                    {resort.stars}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-1">Course</h4>
                  <p className="text-sm text-[var(--text-secondary)]">{resort.course}</p>
                </div>

                <div className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4">
                  {resort.price}
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Resort Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {resort.highlights.map((h, i) => (
                      <span key={i} className="inline-block px-2 py-0.5 text-xs rounded bg-[var(--surface-muted)] text-[var(--text-muted)]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Equipment Rental & Pro Shops ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Briefcase className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Equipment Rental &amp; Pro Shops
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Club Rental
              </h3>
              <div className="space-y-2">
                {[
                  'Full set rental (clubs, bag, shoes): from 350 MAD per round',
                  'Clubs only: from 200 MAD per round',
                  'GPS rangefinder: from 100 MAD at premium courses',
                  'Left-handed sets available but limited -- reserve in advance',
                  'Best rental fleets at Mazagan, Dar Es Salam, and Samanah',
                ].map((detail, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Pro Shops &amp; Supplies
              </h3>
              <div className="space-y-2">
                {[
                  'All top-10 courses have on-site pro shops with branded gear',
                  'Golf balls from 30 MAD per sleeve, gloves and tees at standard prices',
                  'Dar Es Salam and Amelkis offer PGA-standard fitting services',
                  'Lessons from 300 MAD per hour with qualified professionals',
                  'Sun protection essentials stocked at most pro shops',
                ].map((detail, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Tips for Visiting Golfers ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tips for Visiting Golfers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sun className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Sun Protection Is Essential
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s sun is intense on open fairways. Apply SPF 50+ before your round and
                reapply at the turn. Wear a wide-brimmed hat, UV-protective sunglasses, and lightweight
                long-sleeved layers. Carry at least 2 liters of water per round. Most courses have
                water stations at the 5th and 14th holes.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hire a Caddie
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Moroccan caddies know every break on the greens, the best lines off the tee, and
                where hidden hazards lurk. From 150 MAD per round plus tip, a caddie significantly
                improves both your experience and usually your score. Many speak French and basic
                English. Ask for a caddie who speaks your language when booking.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Carry Cash for Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Clubhouses accept credit cards, but tips for caddies, locker room attendants, and
                buggy marshals are expected in cash (Moroccan dirham). Keep small bills ready.
                Caddie tips: from 50-100 MAD per round. Locker room attendant: from 10-20 MAD.
                Halfway house staff: from 10 MAD.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Watch for Course Hazards
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Moroccan courses have unique hazards. Ancient olive trees and palms are common
                obstacles. Irrigation channels serve as water hazards. Wind is a major factor on
                coastal courses (15-25 km/h at Essaouira and El Jadida). Always check local rules
                on the scorecard for ground-under-repair and drop zone rules.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Start Early
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Book the earliest tee time available, especially from May to September. Starting at
                07:00-08:00 means you finish before the midday heat. You also get the best course
                conditions, quieter fairways, and faster pace of play. Most clubhouses serve breakfast
                from 06:30 so arrive hungry.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Phone className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Booking Strategy
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Book tee times 1-2 weeks in advance during peak season (October-April). Many courses
                offer online booking. Ask about twilight rates: from 50% off for rounds starting after
                14:00. Multi-round packages save 15-25% over individual green fees. Hotel concierges
                can often arrange preferential tee times and transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
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

      {/* ── 12. Related Guides + CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/luxury" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The finest hotels, resorts, and experiences for luxury travelers visiting Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spa-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Spa &amp; Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Recover after your round with Morocco&apos;s finest spa and hammam experiences.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-weather-monthly" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Thermometer className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Weather by Month
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Plan your golf trip around Morocco&apos;s climate. Monthly temperatures and rainfall data for every region.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* ── CTA ── */}
          <div className="mt-16 text-center card-moroccan p-10 max-w-3xl mx-auto">
            <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Ready to Tee Off in Morocco?
            </h2>
            <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
              Explore our city guides for Marrakech, Agadir, Rabat, and Essaouira to plan the rest of
              your golf holiday. Each guide includes accommodation picks, restaurant recommendations,
              and sightseeing ideas for rest days between rounds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/marrakech"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium hover:bg-[var(--color-accent)]/90 transition-colors"
              >
                Explore Marrakech <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/agadir"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-medium hover:bg-[var(--color-accent)]/5 transition-colors"
              >
                Explore Agadir <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

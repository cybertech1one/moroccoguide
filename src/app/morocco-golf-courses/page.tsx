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
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Gem,
  CircleDot,
  Building,
  Award,
  BookOpen,
  Crown,
  Sun,
  Calendar,
  Flag,
  Mountain,
  Compass,
  TreeDeciduous,
  Target,
  Briefcase,
  Phone,
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
  title: 'Morocco Golf Courses Guide 2026 | Top 8 Championship Courses & Packages',
  description:
    'Complete guide to golf in Morocco. Play Royal Golf Marrakech, Amelkis, Mazagan, and Royal Golf Dar Es Salam Rabat. Green fees from 450 MAD, course profiles, designer details, packages, regions, equipment rental, dress code, and booking tips for the top 8 golf courses.',
  keywords: [
    'Morocco golf courses',
    'golf in Morocco',
    'Royal Golf Marrakech',
    'Amelkis Golf Club',
    'Palmeraie Golf Palace',
    'Mazagan Beach golf',
    'Royal Golf Dar Es Salam Rabat',
    'Golf du Soleil Agadir',
    'Cabo Negro golf Tetouan',
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
    title: 'Morocco Golf Courses Guide 2026 | Top 8 Championship Courses & Packages',
    description:
      'Discover Morocco\'s finest golf courses. From historic Royal Golf Marrakech to the oceanside Mazagan links. Green fees, course profiles, packages, and insider tips for the top 8 courses.',
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
    title: 'Morocco Golf Courses Guide 2026 | Top 8 Championship Courses',
    description:
      'From Royal Golf Marrakech to Mazagan Beach. Complete guide to Morocco\'s best golf courses with green fees, packages, and insider tips.',
    images: [`${BASE_URL}/images/hero-golf-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-golf-courses` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-golf-courses`,
  name: 'Morocco Golf Courses Guide 2026 | Top 8 Championship Courses & Packages',
  description:
    'Complete guide to golf in Morocco. Play Royal Golf Marrakech, Amelkis, Mazagan, and Royal Golf Dar Es Salam Rabat. Green fees, course profiles, packages, regions, and practical tips.',
  url: `${BASE_URL}/morocco-golf-courses`,
  image: `${BASE_URL}/images/hero-golf-morocco.webp`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-golf-courses`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Golf Courses Guide', item: `${BASE_URL}/morocco-golf-courses` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 8 GOLF COURSES
   ═══════════════════════════════════════════════════════════════ */

const golfCourses = [
  {
    rank: 1,
    name: 'Royal Golf Marrakech',
    city: 'Marrakech',
    holes: 18,
    par: 72,
    designer: 'Established by Pasha Thami El Glaoui (1933), redesigned by Arnaud Massy & later updates',
    greenFee: 'From 700 MAD',
    description:
      'The oldest course in Morocco and one of the most storied in Africa. Founded in 1933 by the Pasha of Marrakech, this parkland course weaves through ancient olive, eucalyptus, and palm trees with the snow-capped Atlas Mountains as a backdrop. Iconic holes include the par-5 7th, a sweeping dogleg around a grove of centuries-old olive trees. Kings, presidents, and world leaders have played here, and the club retains an air of regal elegance.',
    facilities: ['Clubhouse with restaurant', 'Pro shop', 'Practice range', 'Putting green', 'Caddies available', 'Club rental'],
    bestSeason: 'October to April, when temperatures are comfortable and the Atlas snow creates a stunning backdrop',
    icon: Crown,
  },
  {
    rank: 2,
    name: 'Amelkis Golf Club',
    city: 'Marrakech',
    holes: 27,
    par: 72,
    designer: 'Cabell B. Robinson',
    greenFee: 'From 850 MAD',
    description:
      'Designed by renowned architect Cabell B. Robinson, Amelkis features 27 holes spread across three distinct nine-hole loops. The course is celebrated for its dramatic views of the High Atlas and its challenging water features. The signature hole is the par-3 6th on the original 18, which plays over a lake toward the Atlas peaks. The layout demands strategic play, with well-placed bunkers and fast, undulating greens that reward precision over power.',
    facilities: ['27 holes (3 x 9)', 'Clubhouse and terrace restaurant', 'Practice academy', 'Swimming pool', 'Caddies and buggies', 'Pro shop'],
    bestSeason: 'October to May, with spring offering wildflowers along the fairways',
    icon: Star,
  },
  {
    rank: 3,
    name: 'Palmeraie Golf Palace',
    city: 'Marrakech',
    holes: 18,
    par: 72,
    designer: 'Robert Trent Jones Sr.',
    greenFee: 'From 800 MAD',
    description:
      'Set within the legendary Palmeraie, this Robert Trent Jones Sr. design is carved through groves of date palms and fragrant orange trees. The course features wide fairways that invite aggressive play off the tee, but the greens are well-defended by deep bunkers and water hazards. The par-4 14th is a standout, with a tee shot that must carry a ravine to reach a fairway flanked by palms. The attached resort makes it ideal for a full golf holiday experience.',
    facilities: ['Luxury resort on-site', 'Spa and fitness center', 'Three restaurants', 'Practice facilities', 'Caddies and golf carts', 'Equipment rental'],
    bestSeason: 'November to April for optimal playing conditions and resort atmosphere',
    icon: TreeDeciduous,
  },
  {
    rank: 4,
    name: 'Mazagan Beach & Golf Resort',
    city: 'El Jadida',
    holes: 18,
    par: 72,
    designer: 'Gary Player',
    greenFee: 'From 1,200 MAD',
    description:
      'Gary Player himself called this one of his finest designs. Located on the Atlantic coast south of Casablanca, this links-style course plays through rolling dunes, native scrubland, and windswept terrain with ocean views from multiple holes. The par-4 16th plays directly toward the Atlantic, with a green perched on a dune above the crashing waves. Wind is a constant factor, making club selection and shot shaping essential. The resort complex includes a casino, spa, and five-star accommodation.',
    facilities: ['Five-star resort', 'Spa and beach club', 'Casino', 'Practice range and academy', 'Caddies and buggies', 'Full equipment rental'],
    bestSeason: 'March to November, with summer offering warm conditions and consistent ocean breezes',
    icon: Gem,
  },
  {
    rank: 5,
    name: 'Royal Golf Dar Es Salam',
    city: 'Rabat',
    holes: 45,
    par: 73,
    designer: 'Robert Trent Jones Sr. (Red and Blue courses)',
    greenFee: 'From 900 MAD',
    description:
      'The crown jewel of Moroccan golf and one of the most prestigious courses in Africa. Spread across 440 hectares of cork oak and eucalyptus forest on the outskirts of Rabat, Dar Es Salam boasts 45 holes across three courses: the Red (championship), Blue, and Green. The Red Course is legendary, with the par-3 9th considered one of the finest short holes in the world, playing over a lake to an island green surrounded by ancient cork oaks. Host of the Hassan II Golf Trophy since 1971.',
    facilities: ['45 holes across three courses', 'Grand clubhouse', 'Fine dining restaurant', 'Extensive practice facilities', 'PGA-standard pro shop', 'Caddies required on Red Course'],
    bestSeason: 'Year-round playable, best from October to May when the weather is mild and the forest is lush',
    icon: Crown,
  },
  {
    rank: 6,
    name: 'Golf du Soleil',
    city: 'Agadir',
    holes: 36,
    par: 72,
    designer: 'Various (Championship and Tikida courses)',
    greenFee: 'From 600 MAD',
    description:
      'Agadir\'s premier golf destination, offering 36 holes of sun-drenched golf near the Atlantic coast. The Championship Course features wide, receptive fairways ideal for mid-handicappers, while the Tikida Course is tighter and more demanding. Eucalyptus trees, bougainvillea, and cactus gardens give the courses a distinctly Moroccan character. With over 300 days of sunshine per year, Agadir is Morocco\'s most reliable year-round golfing destination. The par-5 15th on the Championship Course is a risk-reward gem with water guarding the green.',
    facilities: ['36 holes (2 x 18)', 'Clubhouse with panoramic terrace', 'Golf academy', 'Practice range and putting green', 'Equipment rental', 'Buggy hire'],
    bestSeason: 'Year-round, with Agadir\'s consistent climate making it the most reliable golf destination in Morocco',
    icon: Sun,
  },
  {
    rank: 7,
    name: 'Cabo Negro Royal Golf Club',
    city: 'Tetouan',
    holes: 18,
    par: 72,
    designer: 'Cabell B. Robinson',
    greenFee: 'From 450 MAD',
    description:
      'A hidden gem on Morocco\'s Mediterranean coast, Cabo Negro offers a dramatically different golfing experience from the courses further south. Designed by Cabell B. Robinson, the layout winds through pine forests with views of the Rif Mountains and the sparkling Mediterranean. The par-4 8th plays downhill through a corridor of pines to a green perched above the sea. The cooler Mediterranean climate makes it an excellent summer golf destination when Marrakech is too hot for comfortable play.',
    facilities: ['Mediterranean clubhouse', 'Restaurant and bar', 'Practice range', 'Putting and chipping greens', 'Caddie service', 'Club rental available'],
    bestSeason: 'May to October for Mediterranean warmth, making it the ideal summer alternative to hotter inland courses',
    icon: Mountain,
  },
  {
    rank: 8,
    name: 'Royal Golf El Jadida',
    city: 'El Jadida',
    holes: 18,
    par: 72,
    designer: 'Cabell B. Robinson',
    greenFee: 'From 500 MAD',
    description:
      'Another Cabell B. Robinson design, Royal Golf El Jadida blends coastal and parkland styles along the Atlantic shoreline. The front nine plays through flat terrain with water features, while the back nine rises into dunes with ocean panoramas. The par-3 12th is the signature hole, a 180-meter shot over a ravine to a green with the Atlantic as a backdrop. Less crowded than Marrakech courses and offering excellent value, El Jadida is a favorite among resident expat golfers and visiting Europeans seeking quality without the premium prices.',
    facilities: ['Ocean-view clubhouse', 'Restaurant and lounge', 'Practice facilities', 'Putting green', 'Buggy and caddie hire', 'Pro shop'],
    bestSeason: 'October to May for pleasant coastal weather, though playable year-round with Atlantic breezes tempering summer heat',
    icon: Flag,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: GOLF REGIONS
   ═══════════════════════════════════════════════════════════════ */

const golfRegions = [
  {
    region: 'Marrakech',
    icon: Star,
    image: '/images/art-moroccan-pattern-zellige.webp',
    courses: ['Royal Golf Marrakech', 'Amelkis Golf Club', 'Palmeraie Golf Palace', 'Assoufid Golf Club', 'Al Maaden Golf Resort', 'Samanah Golf Club'],
    climate: 'Warm and dry with over 300 days of sunshine. Winter highs of 18-22 degrees Celsius, summer highs of 36-42 degrees Celsius. Best for golf from October to April when temperatures are comfortable.',
    highlights: [
      'Highest concentration of courses in Morocco with 6+ championship layouts within 30 minutes of the city',
      'Stunning Atlas Mountain backdrops on virtually every course',
      'Excellent resort infrastructure with luxury riads, hotels, and golf villas',
      'Rich post-round culture: souks, restaurants, and hammams to complement your golf',
    ],
  },
  {
    region: 'Rabat-Casablanca',
    icon: Building,
    image: '/images/hero-casablanca-skyline.webp',
    courses: ['Royal Golf Dar Es Salam (Rabat)', 'Mazagan Beach & Golf Resort (El Jadida)', 'Royal Golf El Jadida', 'Anfa Royale Golf Club (Casablanca)', 'Royal Golf Mohammedia'],
    climate: 'Moderate Atlantic climate with mild winters (15-19 degrees Celsius) and warm summers (25-30 degrees Celsius). Coastal breezes keep conditions comfortable. Occasional rain from November to March.',
    highlights: [
      'Home to Royal Golf Dar Es Salam, the most prestigious course in Africa',
      'Coastal links-style golf at Mazagan designed by Gary Player',
      'Year-round playable conditions thanks to the Atlantic influence',
      'Easy access from Casablanca international airport for direct golf trips',
    ],
  },
  {
    region: 'Agadir & South',
    icon: Sun,
    image: '/images/hero-agadir-beach.webp',
    courses: ['Golf du Soleil', 'Golf de l\'Ocean', 'Golf Les Dunes', 'Tazegzout Golf Club'],
    climate: 'Morocco\'s most consistent climate for golf. Warm and sunny year-round with winter highs of 20-23 degrees Celsius and summer highs of 27-30 degrees Celsius. Minimal rainfall. The most reliable destination for guaranteed good weather.',
    highlights: [
      'Year-round golfing with the most consistent weather in Morocco',
      'Excellent value green fees compared to Marrakech courses',
      'Beach and golf holidays combined with Agadir\'s sandy coastline',
      'Emerging golf destination with new courses under development',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: GOLF PACKAGES
   ═══════════════════════════════════════════════════════════════ */

const golfPackages = [
  {
    name: 'Weekend Golf Getaway',
    duration: '3 days / 2 nights',
    icon: Calendar,
    price: 'From 4,500 MAD per person',
    courses: ['Royal Golf Marrakech', 'Amelkis Golf Club'],
    accommodation: '4-star hotel or riad in Marrakech with breakfast included',
    includes: ['2 rounds of 18 holes with green fees', 'Buggy hire for both rounds', 'Airport transfers', 'Breakfast daily', 'Welcome mint tea'],
    description:
      'The perfect short break for golfers based in Europe. Fly into Marrakech on Thursday evening, play two of Morocco\'s finest courses over the weekend, and fly home Sunday evening. Marrakech is only 3-4 hours from most European cities, making this an accessible and affordable weekend option.',
  },
  {
    name: 'Week of Golf',
    duration: '7 days / 6 nights',
    icon: Flag,
    price: 'From 12,000 MAD per person',
    courses: ['Royal Golf Marrakech', 'Amelkis Golf Club', 'Palmeraie Golf Palace', 'Royal Golf Dar Es Salam (day trip to Rabat)'],
    accommodation: '4-star golf resort in Marrakech with half-board',
    includes: ['4 rounds of 18 holes with green fees', 'Buggy hire for all rounds', 'Airport transfers', 'Half-board accommodation', 'Day transfer to Rabat for Dar Es Salam', 'One spa session'],
    description:
      'A full week exploring Morocco\'s best courses. Play three courses in Marrakech and take a day trip to Rabat for the legendary Dar Es Salam. Rest days allow for sightseeing, souk shopping, and spa visits. This package offers the best balance of golf, culture, and relaxation.',
  },
  {
    name: 'Luxury Golf Experience',
    duration: '5 days / 4 nights',
    icon: Crown,
    price: 'From 25,000 MAD per person',
    courses: ['Royal Golf Dar Es Salam (Red Course)', 'Mazagan Beach & Golf Resort', 'Amelkis Golf Club'],
    accommodation: '5-star luxury resort (Mazagan or La Mamounia) with full-board',
    includes: ['3 rounds on championship courses', 'Private caddie for each round', 'Luxury transfers in private vehicle', 'Full-board at 5-star resort', 'Spa treatment package', 'VIP clubhouse access'],
    description:
      'The ultimate Moroccan golf experience for those who want nothing but the best. Play the Red Course at Dar Es Salam (Africa\'s finest), the Gary Player-designed Mazagan links, and Amelkis with its Atlas views. Stay in Morocco\'s finest luxury resorts with private transfers, personal caddies, and spa treatments between rounds.',
  },
  {
    name: 'Budget Golf Holiday',
    duration: '5 days / 4 nights',
    icon: DollarSign,
    price: 'From 6,500 MAD per person',
    courses: ['Cabo Negro Royal Golf Club', 'Golf du Soleil', 'Royal Golf El Jadida'],
    accommodation: '3-star hotel with breakfast in Agadir or Tetouan',
    includes: ['3 rounds of 18 holes with green fees', 'Shared buggy hire', 'Airport transfers from Agadir', 'Breakfast daily', 'Course guide booklet'],
    description:
      'Proof that great golf in Morocco does not require a luxury budget. This package focuses on courses that offer excellent quality at more accessible prices. Cabo Negro, Golf du Soleil, and Royal Golf El Jadida all deliver championship experiences at green fees from 450-600 MAD. Combined with 3-star accommodation and Agadir\'s affordable dining, this is outstanding golf holiday value.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRACTICAL INFORMATION
   ═══════════════════════════════════════════════════════════════ */

const practicalInfo = [
  {
    title: 'Equipment Rental',
    icon: Briefcase,
    details: [
      'Full set rental (clubs, bag, shoes): from 350 MAD per round at most courses',
      'Clubs only: from 200 MAD per round',
      'Golf shoes: from 100 MAD per round (bring your own if possible for comfort)',
      'GPS rangefinder: from 100 MAD per round at premium courses',
      'Quality varies between courses; Mazagan and Dar Es Salam have the best rental fleets',
      'Right-handed and left-handed sets available, though left-handed options may be limited',
      'Reserve rental equipment in advance during peak season (October-April)',
    ],
  },
  {
    title: 'Dress Code',
    icon: ShieldCheck,
    details: [
      'Collared polo shirt required on all courses; no T-shirts, tank tops, or collarless shirts',
      'Tailored shorts or trousers; no jeans, cargo shorts, or swimwear',
      'Golf shoes with soft spikes required; some courses allow clean trainers',
      'Royal Golf Dar Es Salam and Royal Golf Marrakech enforce stricter dress codes',
      'Hats and sunglasses strongly recommended for sun protection',
      'Lightweight, breathable fabrics are essential in Moroccan heat',
      'Some clubhouses require smart casual dress for dining',
    ],
  },
  {
    title: 'Booking Tips',
    icon: Phone,
    details: [
      'Book tee times at least 1-2 weeks in advance during peak season (October-April)',
      'Many courses offer online booking via their websites or golf booking platforms',
      'Ask about twilight rates: from 50% off green fees for afternoon rounds starting after 14:00',
      'Multi-round packages offer from 15-25% savings over individual green fees',
      'Hotel concierges can often arrange preferential tee times and transport',
      'Weekend mornings fill up fastest; weekday play offers the best availability',
      'Confirm your booking 24-48 hours before play, especially in peak season',
    ],
  },
  {
    title: 'Transport & Getting There',
    icon: Compass,
    details: [
      'Most Marrakech courses are 15-30 minutes from the medina by taxi or hotel shuttle',
      'Grand taxi from Marrakech center to Royal Golf: from 80 MAD one way',
      'Mazagan is 1 hour south of Casablanca; resort offers airport shuttle from 300 MAD',
      'Royal Golf Dar Es Salam is 15 minutes from central Rabat by taxi (from 50 MAD)',
      'Golf du Soleil is 10 minutes from central Agadir by taxi (from 40 MAD)',
      'Cabo Negro is 20 minutes from Tetouan airport; limited public transport, taxi recommended',
      'Car rental (from 300 MAD per day) is the most flexible option for multi-course trips',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is the best time of year to play golf in Morocco?',
    answer:
      'October to April is the peak golf season for Marrakech and Rabat, when temperatures are comfortable (18-25 degrees Celsius) and the courses are in peak condition. Agadir is excellent year-round thanks to its consistent climate. Summer (June-August) is too hot for comfortable golf in Marrakech (35-42 degrees Celsius), though Cabo Negro on the Mediterranean coast and the Atlantic courses remain playable.',
  },
  {
    question: 'Do I need to bring my own golf clubs to Morocco?',
    answer:
      'Not necessarily. All major courses offer rental clubs from 200-350 MAD per round, and the quality at courses like Mazagan and Dar Es Salam is good. However, serious golfers will prefer their own clubs. Most airlines allow golf bags as sports equipment (check excess baggage fees). If you play more than 3 rounds, bringing your own clubs is more economical than renting.',
  },
  {
    question: 'Are caddies available and how much should I tip?',
    answer:
      'Caddies are available at all major courses and are mandatory at Royal Golf Dar Es Salam (Red Course). Caddie fees are typically from 150-250 MAD per round, depending on the course. A tip of from 50-100 MAD per round is customary for good service. Caddies are knowledgeable about course conditions, local rules, and the best lines, making them well worth the cost.',
  },
  {
    question: 'Can beginners play golf courses in Morocco?',
    answer:
      'Yes. Several courses welcome beginners, particularly Palmeraie Golf Palace and Golf du Soleil, which have forgiving layouts with wide fairways. Most courses also have driving ranges, practice greens, and golf academies offering lessons from 300-500 MAD per hour. Some courses require a minimum handicap certificate (typically 36 or higher), so check in advance. Royal Golf Dar Es Salam\'s Red Course is best reserved for experienced players.',
  },
  {
    question: 'How do Morocco golf courses compare to European courses?',
    answer:
      'Morocco offers championship-quality golf at significantly lower prices than southern Europe. Green fees from 450-1,200 MAD compare favorably to courses in Spain, Portugal, or Turkey. The courses benefit from world-class designers (Robert Trent Jones Sr., Gary Player, Cabell B. Robinson), excellent maintenance, and dramatic natural settings. The combination of quality, price, warm climate, and cultural experiences makes Morocco one of the best golf destinations accessible from Europe.',
  },
  {
    question: 'Is it possible to combine golf with sightseeing in Morocco?',
    answer:
      'Absolutely, and this is one of Morocco\'s greatest strengths as a golf destination. Marrakech offers world-class golf alongside one of the most exciting medinas in Africa. A typical day might include a morning round followed by an afternoon in the souks, a hammam, or a cooking class. The Week of Golf package specifically includes rest days for sightseeing. Rabat, El Jadida, and Agadir all have rich cultural offerings beyond the fairways.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-golf-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Golf Courses Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Flag className="w-4 h-4" />
            Sport &amp; Leisure
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Golf Courses Guide:
            <br className="hidden md:block" /> Top 8 Championship Courses
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the historic fairways of Royal Golf Marrakech to the Atlantic links of Mazagan.
            Play world-class courses from 450 MAD with Atlas Mountain panoramas and year-round sunshine.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is Africa&apos;s Premier Golf Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has been a golfing destination since the 1920s, when the French protectorate
                established the first courses in Rabat and Marrakech. Today, the kingdom boasts over
                40 courses designed by legends such as Robert Trent Jones Sr., Gary Player, and Cabell
                B. Robinson, making it the undisputed golf capital of Africa and one of the finest
                golfing destinations accessible from Europe.
              </p>
              <p>
                What sets Moroccan golf apart is the combination of championship-quality courses, dramatic
                natural landscapes, warm year-round climate, and remarkably accessible pricing. A round at
                a world-class Moroccan course costs a fraction of equivalent courses in Spain or Portugal,
                and the cultural experiences available between rounds -- from medina souks to traditional
                hammams -- are unmatched anywhere in the golfing world.
              </p>
              <p>
                Whether you are a single-digit handicapper seeking a challenge on Dar Es Salam&apos;s
                legendary Red Course, a group of friends looking for a sun-drenched golf holiday, or a
                beginner wanting to learn in beautiful surroundings, Morocco has the course, the climate,
                and the welcome for you. Green fees start from 450 MAD, and the top courses rival
                anything in Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco Golf at a Glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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

      {/* ── Top 8 Golf Courses ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 8 Golf Courses in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From historic royal clubs to modern championship layouts, these are the finest courses Morocco has to offer.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Green fees shown are starting prices. Seasonal pricing applies during peak months (October-April) and holiday periods, when rates may increase by 20-40%.
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
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Designer</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{course.designer}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Best Season</h4>
                    <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      {course.bestSeason}
                    </div>
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

      {/* ── Green Fee Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Green Fee Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay at each of Morocco&apos;s top courses, plus additional costs for a complete round.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April). Twilight rates often available from 14:00 at reduced prices.
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
                { course: 'Golf du Soleil (Agadir)', fee: 'From 600 MAD', note: '36 holes, year-round play' },
                { course: 'Royal Golf Marrakech', fee: 'From 700 MAD', note: 'Historic, since 1933' },
                { course: 'Palmeraie Golf Palace', fee: 'From 800 MAD', note: 'Resort package deals available' },
                { course: 'Amelkis Golf Club', fee: 'From 850 MAD', note: '27 holes, Atlas views' },
                { course: 'Royal Golf Dar Es Salam', fee: 'From 900 MAD', note: 'Africa\'s most prestigious course' },
                { course: 'Mazagan Beach & Golf Resort', fee: 'From 1,200 MAD', note: 'Gary Player design, links style' },
                { course: 'Buggy hire (per round)', fee: 'From 250 MAD', note: 'Most courses, shared or single' },
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

      {/* ── Golf Regions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Golf Regions of Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each region offers a distinct golfing character, climate, and range of courses.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {golfRegions.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan overflow-hidden">
                  <div className="relative h-56">
                    <img
                      src={region.image}
                      alt={`Golf region landscape of ${region.region}, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <RegionIcon className="w-6 h-6 text-white" />
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                        {region.region}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Climate</h4>
                      <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Thermometer className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        {region.climate}
                      </div>
                    </div>

                    <div className="mb-6">
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
                        {region.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Golf Packages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">Accommodation</h4>
                    <p className="text-xs text-[var(--text-secondary)]">{pkg.accommodation}</p>
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

      {/* ── Practical Information ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Information for Golfers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know before teeing off in Morocco, from equipment rental to dress codes and booking strategies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {practicalInfo.map((info) => {
              const InfoIcon = info.icon;
              return (
                <div key={info.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <InfoIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {info.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time to Play ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Play Golf in Morocco
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
                This is the golden window for golf in Marrakech and Rabat. Daytime temperatures range from
                18 to 25 degrees Celsius, courses are green and lush from autumn rains, and the Atlas
                Mountains are often snow-capped, creating spectacular backdrops. This is also the busiest
                period, so book tee times well in advance and expect peak-season green fees.
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
                Marrakech becomes very hot in summer (35-42 degrees Celsius), making midday golf
                uncomfortable. However, this is when the coastal and northern courses shine. Cabo Negro
                on the Mediterranean and Agadir on the Atlantic offer comfortable playing temperatures
                (25-30 degrees Celsius) and lower green fees. Early morning tee times (before 08:00)
                are recommended even at coastal courses.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <Thermometer className="w-3 h-3 text-[var(--color-accent)]" />
                  25-30 degrees Celsius (coast)
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  Best for: Agadir, Cabo Negro, El Jadida
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
                destination. Winter temperatures rarely drop below 18 degrees Celsius, and summer
                temperatures are moderated by Atlantic breezes. Golf du Soleil and the other Agadir
                courses are always in season. If you want guaranteed good weather for golf in Morocco,
                Agadir is the safest bet regardless of when you travel.
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

      {/* ── Tips for First-Time Golfers in Morocco ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tips for First-Time Golfers in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sun className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Sun Protection Is Essential
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s sun is intense, especially on open fairways. Apply high-SPF sunscreen before your
                round and reapply at the turn. Wear a hat with a wide brim, UV-protective sunglasses, and
                lightweight long-sleeved layers. Carry at least 2 liters of water per round.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hire a Caddie
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Moroccan caddies are knowledgeable, friendly, and excellent value. They know every break on
                the greens, the best lines off the tee, and where the hidden hazards lurk. From 150 MAD
                per round plus tip, a caddie significantly improves your experience and often your score.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Carry Cash for Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                While clubhouses accept credit cards, tips for caddies, locker room attendants, and buggy
                marshals are expected in cash (Moroccan dirham). Keep small bills ready. Caddie tips from
                50-100 MAD per round. Locker room attendant from 10-20 MAD.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Watch for Course Hazards
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Moroccan courses have unique hazards. Ancient olive trees and palms are common obstacles.
                Irrigation channels serve as water hazards. Wind is a major factor on coastal courses.
                Always check local rules on the scorecard, as some courses have special ground rules for
                these features.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Start Early
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Book the earliest tee time available, especially from May to September. Starting at 07:00-08:00
                means you finish before the midday heat. You will also enjoy the best course conditions,
                quieter fairways, and faster pace of play. Most clubhouses serve breakfast from 06:30.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Embrace the Pace
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Golf in Morocco moves at a relaxed pace. Do not rush. Enjoy the views, the birdsong, and
                the company. Stop at the halfway house for mint tea and a snack. After your round, linger
                on the clubhouse terrace. The Moroccan golf experience is about more than just the scorecard.
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

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
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
            <Link href="/activities" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Activities &amp; Adventures
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From desert treks to surf lessons, explore all the outdoor adventures Morocco offers.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

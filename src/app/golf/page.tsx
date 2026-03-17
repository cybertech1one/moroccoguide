import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Star,
  DollarSign,
  Calendar,
  Sun,
  Hotel,
  Car,
  Trophy,
  ChevronRight,
  Info,
  Clock,
  Users,
  Mountain,
  Compass,
  Shield,
  Flag,
  Home,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Golf in Morocco | Africa\'s Premier Golfing Destination | 40+ Championship Courses',
  description:
    'Discover world-class golf in Morocco. From the historic Royal Golf Marrakech (est. 1927) to Jack Nicklaus and Gary Player-designed courses, explore 40+ championship layouts across Marrakech, Rabat, Agadir, and El Jadida. Green fees, best seasons, packages, and insider tips.',
  keywords: [
    'golf morocco',
    'morocco golf courses',
    'royal golf marrakech',
    'golf dar es salam rabat',
    'amelkis golf club',
    'palmeraie golf palace',
    'mazagan golf el jadida',
    'samanah country club',
    'assoufid golf club',
    'golf du soleil agadir',
    'morocco golf holidays',
    'morocco golf packages',
    'africa golf destination',
    'morocco green fees',
    'golf marrakech',
    'cabo negro golf',
    'jack nicklaus morocco',
    'gary player morocco',
    'robert trent jones morocco',
  ],
  openGraph: {
    title: 'Golf in Morocco | Africa\'s Premier Golfing Destination',
    description:
      'Morocco offers 40+ championship golf courses designed by legends like Nicklaus, Player, and Trent Jones. Year-round sunshine, royal heritage, and green fees from 500 MAD.',
    url: 'https://citytoursmorocco.com/golf',
    images: [
      {
        url: '/images/hero-morocco-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Championship golf course in Morocco with Atlas Mountains backdrop',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/golf' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://citytoursmorocco.com/golf#webpage',
      name: 'Golf in Morocco | Africa\'s Premier Golfing Destination',
      description:
        'Comprehensive guide to golf in Morocco covering 40+ championship courses, green fees, best seasons, packages, and insider tips.',
      url: 'https://citytoursmorocco.com/golf',
      isPartOf: {
        '@type': 'WebSite',
        name: 'CityToursMaroc',
        url: 'https://citytoursmorocco.com',
      },
    },
    {
      '@type': 'TouristAttraction',
      '@id': 'https://citytoursmorocco.com/golf#guide',
      name: 'Golf Tourism in Morocco',
      description:
        'Morocco is Africa\'s premier golf destination with over 40 championship courses, royal heritage dating to 1927, and designs by Jack Nicklaus, Gary Player, Robert Trent Jones Sr., and Cabell Robinson.',
      url: 'https://citytoursmorocco.com/golf',
      touristType: ['Golf tourism', 'Sports tourism', 'Luxury travel'],
      image: '/images/hero-morocco-hero.webp',
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
          name: 'What is the best time of year to play golf in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The best golf season in Morocco is October through May, when temperatures are pleasant (18-28 degrees C). Winter months (November-February) are ideal for Marrakech and Agadir courses. Summer can exceed 40 degrees C in Marrakech, making early morning tee times essential.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much do green fees cost in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Green fees in Morocco typically range from 500 to 2,000 MAD (approximately 50 to 200 USD). Budget-friendly municipal courses start around 300-500 MAD, mid-range resort courses charge 700-1,200 MAD, and premium championship courses like Royal Golf Dar Es Salam or Samanah command 1,500-2,500 MAD.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to bring my own golf clubs to Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, you do not need to bring your own clubs. All major courses in Morocco offer club rental services, typically ranging from 200-500 MAD per round. Quality varies from basic sets at smaller courses to premium Callaway and TaylorMade sets at top resorts. However, bringing your own clubs is recommended for serious golfers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is the most famous golf course in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Royal Golf Dar Es Salam in Rabat is Morocco\'s most famous course internationally, particularly its Red Course, which has hosted the Hassan II Trophy since 1971. Royal Golf Marrakech, founded in 1927 by the Pasha of Marrakech, is the country\'s oldest and most historically significant course.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can beginners play golf in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Many Moroccan courses welcome beginners and offer professional instruction. Palmeraie Golf Palace, Golf du Soleil in Agadir, and several resort courses have practice facilities and offer individual and group lessons. Several academies offer multi-day beginner packages that combine instruction with course play.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there golf packages that include hotels in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Morocco has excellent golf-and-stay packages. Resorts like Mazagan Beach Resort, Palmeraie Golf Palace, and Samanah Country Club offer integrated packages. Tour operators such as Golf Majestic Marrakech and Morocco Golf Tours arrange custom packages combining multiple courses, luxury riads, and transfers from around 800 EUR for 3-4 nights.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Morocco a good golf destination compared to Spain or Portugal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Morocco offers several advantages over European golf destinations: significantly lower green fees (often 30-50% less than the Algarve or Costa del Sol), warmer winter weather, unique cultural experiences, and less crowded courses. The quality of top courses like Samanah, Mazagan, and Assoufid rivals the best in Europe.',
          },
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP GOLF COURSES
   ═══════════════════════════════════════════════════════════════ */

const topCourses = [
  {
    name: 'Royal Golf Marrakech',
    location: 'Marrakech',
    designer: 'Originally laid out under Pasha T\'hami El Glaoui',
    founded: 1927,
    holes: 18,
    par: 72,
    yardage: '6,706 yards',
    greenFee: '700-1,000 MAD',
    rating: 4.5,
    description:
      'The oldest golf course in Morocco and one of the most historic in Africa. Founded in 1927 during the French Protectorate by the Pasha of Marrakech, this course winds through ancient olive, eucalyptus, and palm trees. The mature vegetation creates a uniquely atmospheric round, with the Atlas Mountains forming a dramatic backdrop on clear days. Winston Churchill and Dwight Eisenhower both played here. The fairways are wide and forgiving, but the ancient trees create challenging natural obstacles. The clubhouse exudes colonial-era charm with a celebrated restaurant.',
    highlights: [
      'Oldest course in Morocco, nearly a century of history',
      'Ancient olive and eucalyptus trees line every fairway',
      'Atlas Mountain views on 12 of the 18 holes',
      'Historic clubhouse with period architecture',
      'Central Marrakech location, walkable from Hivernage district',
    ],
    bestFor: 'History lovers, mid-handicappers, those wanting a relaxed round in beautiful surroundings',
  },
  {
    name: 'Amelkis Golf Club',
    location: 'Marrakech',
    designer: 'Cabell Robinson',
    founded: 1995,
    holes: 27,
    par: 72,
    yardage: '6,658 yards (main course)',
    greenFee: '800-1,200 MAD',
    rating: 4.6,
    description:
      'Designed by the renowned Cabell Robinson, Amelkis is one of Marrakech\'s most respected courses. The layout features 27 holes arranged in three loops of nine, allowing three distinct 18-hole combinations. The course is known for its strategic bunkering, well-defended greens, and excellent conditioning. Mature palm trees and flowering bougainvillea frame the fairways, while water features come into play on several holes. The Atlas Mountains provide a stunning backdrop, particularly from the back nine of the main course. The clubhouse offers fine dining with panoramic views.',
    highlights: [
      'Cabell Robinson design with strategic bunkering',
      '27 holes offering three unique 18-hole combinations',
      'Exceptional course conditioning year-round',
      'Dramatic Atlas Mountain panoramas',
      'Upscale clubhouse with fine Moroccan-European cuisine',
    ],
    bestFor: 'Serious golfers, low-handicappers seeking a challenge, groups wanting variety',
  },
  {
    name: 'Palmeraie Golf Palace',
    location: 'Marrakech',
    designer: 'Robert Trent Jones Sr.',
    founded: 1992,
    holes: 27,
    par: 72,
    yardage: '6,775 yards',
    greenFee: '800-1,300 MAD',
    rating: 4.4,
    description:
      'Set within the famous Palmeraie palm grove on the outskirts of Marrakech, this Robert Trent Jones Sr. masterpiece offers 27 holes in a lush oasis setting. The course winds through over 100,000 palm trees, creating a truly exotic golfing experience. Jones designed wide fairways that funnel toward well-bunkered, elevated greens -- his trademark style. Water hazards feature on several holes, including the signature 9th with its island green. The adjacent five-star hotel and spa make this a complete golf resort experience. The practice facilities are among the best in North Africa.',
    highlights: [
      'Robert Trent Jones Sr. signature design',
      '27 holes through 100,000+ palm trees',
      'Island green on the signature 9th hole',
      'Five-star hotel, spa, and resort on site',
      'Extensive practice facilities and golf academy',
    ],
    bestFor: 'Resort golfers, families, beginners benefiting from the academy, those wanting luxury on-site accommodation',
  },
  {
    name: 'Royal Golf Dar Es Salam',
    location: 'Rabat',
    designer: 'Robert Trent Jones Sr.',
    founded: 1971,
    holes: 45,
    par: 73,
    yardage: '7,362 yards (Red Course)',
    greenFee: '1,200-2,000 MAD',
    rating: 4.8,
    description:
      'The crown jewel of Moroccan golf. Royal Golf Dar Es Salam is a 45-hole complex in a magnificent 440-acre cork oak forest on the outskirts of Rabat. The Red Course is internationally renowned and has hosted the Hassan II Golf Trophy since 1971, attracting legends like Billy Casper, Lee Trevino, Payne Stewart, and Nick Price. Robert Trent Jones Sr. considered it one of his finest creations. The course features dramatic elevation changes, strategic water hazards, and greens protected by deep bunkers. The cork oak forest provides both beauty and a genuine test of accuracy. The Blue Course (18 holes) and Green Course (9 holes) complete the complex.',
    highlights: [
      'Three courses: Red (18), Blue (18), Green (9) -- 45 holes total',
      'Host of the prestigious Hassan II Golf Trophy since 1971',
      'Robert Trent Jones Sr.\'s self-proclaimed masterpiece',
      'Set in a stunning 440-acre cork oak forest',
      'The Red Course is ranked among Africa\'s top 3 courses',
    ],
    bestFor: 'Serious golfers, those seeking Morocco\'s most prestigious round, low-handicappers, golf history enthusiasts',
  },
  {
    name: 'Mazagan Beach & Golf Resort',
    location: 'El Jadida',
    designer: 'Gary Player',
    founded: 2009,
    holes: 18,
    par: 72,
    yardage: '7,100 yards',
    greenFee: '1,000-1,800 MAD',
    rating: 4.7,
    description:
      'Gary Player designed this links-style course along the Atlantic coast near El Jadida, creating Morocco\'s only true seaside golf experience. The course features native dune grasses, strategically placed pot bunkers, and ocean winds that transform the challenge from hole to hole. Several holes play directly along the coastline with dramatic ocean views. Player incorporated natural sandy waste areas and indigenous vegetation to give the course an authentic links character unique in North Africa. The Mazagan resort complex includes a five-star hotel, casino, spa, and equestrian center.',
    highlights: [
      'Gary Player signature design -- Morocco\'s premier links course',
      'Atlantic Ocean coastline holes with genuine links character',
      'Wind-swept layout that changes daily with sea breezes',
      'Part of the luxury Mazagan Beach Resort complex',
      'Only true seaside golf experience in Morocco',
    ],
    bestFor: 'Links golf enthusiasts, experienced players who enjoy wind challenges, those wanting a beach-and-golf resort holiday',
  },
  {
    name: 'Samanah Country Club',
    location: 'Marrakech',
    designer: 'Jack Nicklaus',
    founded: 2008,
    holes: 18,
    par: 72,
    yardage: '7,313 yards',
    greenFee: '1,500-2,500 MAD',
    rating: 4.9,
    description:
      'The only Jack Nicklaus-designed course in North Africa, Samanah is widely regarded as Morocco\'s finest championship layout. Set against the dramatic backdrop of the snow-capped Atlas Mountains, the course features Nicklaus\'s trademark strategic design with multiple tee positions that create vastly different playing experiences. The conditioning is immaculate, with pristine bent grass greens and manicured fairways. Water features on eight holes, including a spectacular lake on the par-5 18th, test both accuracy and course management. The desert-meets-mountains landscape is unlike anything in European golf.',
    highlights: [
      'Jack Nicklaus signature design -- the only one in North Africa',
      'Ranked as Morocco\'s number one course by multiple publications',
      'Immaculate conditioning with bent grass greens',
      'Spectacular Atlas Mountain backdrop on every hole',
      'Water features on 8 of 18 holes',
    ],
    bestFor: 'Low-handicappers, those seeking Morocco\'s ultimate golf experience, Nicklaus design collectors',
  },
  {
    name: 'Golf du Soleil',
    location: 'Agadir',
    designer: 'Multiple designers',
    founded: 1990,
    holes: 27,
    par: 72,
    yardage: '6,400 yards',
    greenFee: '500-800 MAD',
    rating: 4.2,
    description:
      'Agadir\'s premier golf facility offers 27 holes in two distinct courses: the Championship Course and the shorter, more forgiving 9-hole course. Located just minutes from Agadir\'s famous beachfront, Golf du Soleil benefits from the city\'s exceptional climate -- over 300 days of sunshine per year and mild temperatures even in winter. The course features wide fairways lined with eucalyptus trees, gentle elevation changes, and well-placed bunkers. The relaxed atmosphere and competitive green fees make it an excellent choice for holiday golfers. The proximity to Agadir\'s resort hotels, restaurants, and beach makes it easy to combine golf with a seaside holiday.',
    highlights: [
      '27 holes with championship and recreational options',
      'Agadir\'s 300+ days of sunshine guarantee playable conditions',
      'Affordable green fees -- excellent value for money',
      'Minutes from Agadir beach and resort hotels',
      'Relaxed atmosphere suitable for all levels',
    ],
    bestFor: 'Holiday golfers, beginners, families combining beach and golf, budget-conscious players',
  },
  {
    name: 'Cabo Negro Royal Golf Club',
    location: 'Tetouan (North Coast)',
    designer: 'Cabell Robinson',
    founded: 1978,
    holes: 18,
    par: 72,
    yardage: '6,340 yards',
    greenFee: '500-900 MAD',
    rating: 4.3,
    description:
      'Tucked along Morocco\'s beautiful Mediterranean coastline near Tetouan, Cabo Negro offers a refreshingly different golf experience from the Marrakech courses. The Cabell Robinson redesign transformed this into a challenging yet enjoyable layout that takes full advantage of its coastal setting. Pine and eucalyptus forests frame the fairways, and the Mediterranean Sea is visible from several elevated tees. The course features undulating fairways, well-placed water hazards, and subtly contoured greens. The nearby Rif Mountains and the charming blue city of Chefchaouen make this an excellent choice for golfers wanting to explore northern Morocco.',
    highlights: [
      'Mediterranean coastal setting near Tetouan',
      'Cabell Robinson redesign with strategic layout',
      'Cooler summer temperatures than Marrakech courses',
      'Pine and eucalyptus-lined fairways',
      'Gateway to Chefchaouen and the Rif Mountains',
    ],
    bestFor: 'Golfers exploring northern Morocco, those seeking cooler summer play, travelers combining golf with Chefchaouen',
  },
  {
    name: 'Assoufid Golf Club',
    location: 'Marrakech',
    designer: 'Niall Cameron',
    founded: 2014,
    holes: 18,
    par: 72,
    yardage: '7,075 yards',
    greenFee: '1,200-1,800 MAD',
    rating: 4.7,
    description:
      'One of Morocco\'s newest and most acclaimed courses, Assoufid was designed by Scottish architect Niall Cameron to blend seamlessly into the desert landscape south of Marrakech. The course uses the natural terrain of the arid Haouz plain to create a layout that feels as though it has existed for centuries. Native grasses, olive trees, and the dramatic silhouette of the Atlas Mountains define the aesthetic. Cameron\'s design philosophy emphasizes strategic options off the tee and around the greens, with wide fairways that reward positioning over power. The minimalist clubhouse and on-course facilities maintain the sense of integration with the landscape.',
    highlights: [
      'Niall Cameron design that blends into the natural desert landscape',
      'Named among the world\'s top new courses at opening',
      'Strategic layout rewarding positioning over power',
      'Uninterrupted Atlas Mountain views from every hole',
      'Minimalist, design-forward clubhouse architecture',
    ],
    bestFor: 'Design-conscious golfers, those who appreciate links-style thinking on a desert canvas, photographers',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHY GOLF IN MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const whyMorocco = [
  {
    title: 'Royal Heritage',
    icon: Trophy,
    description:
      'Golf in Morocco has royal patronage dating back nearly a century. King Hassan II was an avid golfer who established the Hassan II Golf Trophy in 1971, attracting international champions to Rabat. King Mohammed VI continues the tradition, ensuring world-class course development and maintenance across the kingdom.',
  },
  {
    title: 'Year-Round Sunshine',
    icon: Sun,
    description:
      'Morocco enjoys 300+ days of sunshine annually. Agadir rarely drops below 20 degrees C even in winter, and Marrakech offers ideal golfing weather from October through May. When European courses close for winter, Moroccan fairways remain lush, green, and playable.',
  },
  {
    title: '40+ Championship Courses',
    icon: Flag,
    description:
      'Morocco boasts over 40 golf courses, including designs by Jack Nicklaus, Gary Player, Robert Trent Jones Sr., Cabell Robinson, and Niall Cameron. From historic royal clubs to modern championship layouts, the variety and quality rival any golf destination worldwide.',
  },
  {
    title: 'Exceptional Value',
    icon: DollarSign,
    description:
      'Green fees in Morocco are typically 30-50% lower than equivalent courses in Spain, Portugal, or the south of France. A round at a premier course costs 1,000-2,000 MAD (100-200 USD), and budget-friendly options start from 500 MAD. Caddies, dining, and accommodation offer similarly excellent value.',
  },
  {
    title: 'Stunning Landscapes',
    icon: Mountain,
    description:
      'No other golf destination offers the visual diversity of Morocco. Play with the snow-capped Atlas Mountains as your backdrop in Marrakech, alongside the Atlantic Ocean at Mazagan, through ancient palm groves at Palmeraie, or in Mediterranean pine forests at Cabo Negro.',
  },
  {
    title: 'Culture Beyond the Course',
    icon: Compass,
    description:
      'Morocco offers an unrivaled combination of golf and cultural immersion. After your round, explore the souks of Marrakech, the imperial city of Rabat, the blue streets of Chefchaouen, or the Sahara Desert. No other golf destination blends sport with such rich cultural experiences.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GREEN FEES & COSTS
   ═══════════════════════════════════════════════════════════════ */

const costBreakdown = [
  { item: 'Budget green fee (municipal/public courses)', range: '300-500 MAD', usd: '$30-50' },
  { item: 'Mid-range resort course', range: '700-1,200 MAD', usd: '$70-120' },
  { item: 'Premium championship course', range: '1,500-2,500 MAD', usd: '$150-250' },
  { item: 'Caddy fee (per round)', range: '100-200 MAD', usd: '$10-20' },
  { item: 'Club rental (full set)', range: '200-500 MAD', usd: '$20-50' },
  { item: 'Golf cart rental', range: '200-400 MAD', usd: '$20-40' },
  { item: 'Driving range bucket', range: '50-100 MAD', usd: '$5-10' },
  { item: 'Private lesson (1 hour)', range: '300-600 MAD', usd: '$30-60' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Peak Season: October - December',
    icon: Sun,
    temp: '20-28 degrees C',
    description:
      'The ideal time for golf in Morocco. Summer heat has faded, courses are in prime condition after maintenance, and the Atlas Mountains begin to receive their first snow, creating spectacular backdrops. Book well in advance as European golfers flock south.',
    rating: 'Excellent',
  },
  {
    season: 'Winter Season: January - March',
    icon: Calendar,
    temp: '15-24 degrees C',
    description:
      'Still excellent for golf, especially in Marrakech and Agadir. Mornings can be cool, but afternoons are pleasant. This period offers the best value with lower hotel rates. Occasional rain is possible but rarely disrupts play for more than a morning.',
    rating: 'Very Good',
  },
  {
    season: 'Spring Season: April - May',
    icon: Star,
    temp: '22-30 degrees C',
    description:
      'Warm but not yet oppressive. Wildflowers bloom across the countryside, and courses are lush from winter rains. An excellent time to combine golf with sightseeing. Prices begin to rise as the second high season approaches.',
    rating: 'Excellent',
  },
  {
    season: 'Summer Season: June - September',
    icon: Clock,
    temp: '35-45 degrees C',
    description:
      'Avoid midday golf in Marrakech where temperatures can exceed 40 degrees C. Early morning tee times (6:30-8:00 AM) are essential. Agadir is more bearable due to ocean breezes. Green fees drop significantly, and courses are uncrowded. The north coast around Cabo Negro offers cooler Mediterranean conditions.',
    rating: 'Fair (hot)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GOLF PACKAGES & OPERATORS
   ═══════════════════════════════════════════════════════════════ */

const golfPackages = [
  {
    name: 'Marrakech Royal Experience',
    duration: '4 nights / 3 rounds',
    courses: 'Royal Golf Marrakech, Amelkis, Palmeraie',
    accommodation: 'Luxury riad in the Medina or 5-star hotel in Hivernage',
    price: 'From 900 EUR per person',
    includes: 'Airport transfers, green fees, caddy, breakfast daily',
  },
  {
    name: 'Championship Marrakech',
    duration: '5 nights / 4 rounds',
    courses: 'Samanah, Assoufid, Amelkis, Royal Golf Marrakech',
    accommodation: '5-star resort with golf views',
    price: 'From 1,400 EUR per person',
    includes: 'All transfers, green fees, club storage, half-board dining',
  },
  {
    name: 'Atlantic Golf & Beach',
    duration: '5 nights / 3 rounds',
    courses: 'Mazagan Beach Resort, Golf du Soleil, Mogador (Essaouira)',
    accommodation: 'Mazagan Beach Resort (2 nights) + Agadir resort (3 nights)',
    price: 'From 1,100 EUR per person',
    includes: 'Transfers, green fees, resort facilities, breakfast',
  },
  {
    name: 'Grand Tour of Morocco Golf',
    duration: '8 nights / 6 rounds',
    courses: 'Dar Es Salam (Rabat), Royal Golf Marrakech, Samanah, Assoufid, Mazagan, Golf du Soleil',
    accommodation: 'Mix of luxury riads and 5-star resorts',
    price: 'From 2,200 EUR per person',
    includes: 'Private driver, all green fees, caddies, half-board, cultural excursions',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GOLF + HOTEL COMBOS
   ═══════════════════════════════════════════════════════════════ */

const hotelCombos = [
  {
    hotel: 'La Mamounia',
    location: 'Marrakech',
    stars: 5,
    nearestCourses: 'Royal Golf Marrakech (5 min), Amelkis (15 min)',
    golfArrangement: 'Dedicated golf concierge arranges tee times, transport, and caddy booking',
    priceRange: 'From 4,500 MAD/night (golf packages available)',
    highlight: 'Legendary palace hotel with direct golf course shuttle service',
  },
  {
    hotel: 'Four Seasons Resort Marrakech',
    location: 'Marrakech',
    stars: 5,
    nearestCourses: 'Royal Golf Marrakech (10 min), Amelkis (15 min), Samanah (25 min)',
    golfArrangement: 'Full-service golf coordination with premium club transport and storage',
    priceRange: 'From 5,000 MAD/night (golf packages available)',
    highlight: 'World-class luxury with a dedicated golf services team',
  },
  {
    hotel: 'Mazagan Beach Resort',
    location: 'El Jadida',
    stars: 5,
    nearestCourses: 'Mazagan Golf Course (on-site)',
    golfArrangement: 'Integrated resort with walk-to-course access and unlimited practice facilities',
    priceRange: 'From 2,500 MAD/night (golf-inclusive packages from 3,500 MAD)',
    highlight: 'Only resort in Morocco with a Gary Player course on property',
  },
  {
    hotel: 'Palmeraie Golf Palace & Resort',
    location: 'Marrakech',
    stars: 5,
    nearestCourses: 'Palmeraie Golf Palace (on-site)',
    golfArrangement: 'Step from your suite to the first tee. Robert Trent Jones Sr. course integrated with hotel',
    priceRange: 'From 2,200 MAD/night (golf-inclusive packages available)',
    highlight: 'Seamless golf resort experience with 27 holes at your doorstep',
  },
  {
    hotel: 'Fairmont Royal Palm',
    location: 'Marrakech',
    stars: 5,
    nearestCourses: 'Fairmont Royal Palm Golf (on-site), Amelkis (10 min)',
    golfArrangement: 'Private 18-hole course exclusive to hotel guests and members',
    priceRange: 'From 4,000 MAD/night',
    highlight: 'Exclusive on-site course with Atlas Mountain views and private villas',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: EQUIPMENT & TIPS
   ═══════════════════════════════════════════════════════════════ */

const equipmentTips = [
  {
    title: 'Club Rental',
    description:
      'Every major course offers rental sets. Premium courses (Samanah, Assoufid, Mazagan) provide top-brand equipment from Callaway, TaylorMade, and Titleist. Budget courses offer functional but older equipment. Expect to pay 200-500 MAD per round for a full set.',
  },
  {
    title: 'Bringing Your Own Clubs',
    description:
      'Most airlines allow golf bags as sports equipment for 30-50 EUR each way. Use a hard travel case to protect your clubs. Hotels and riads will store your bags securely. Courses have bag storage and cleaning services.',
  },
  {
    title: 'Essential Gear to Pack',
    description:
      'High-SPF sunscreen (50+), a wide-brimmed hat, UV-protection sunglasses, and plenty of water are essential. Pack lightweight, breathable golf clothing. A light windbreaker is useful for coastal courses and winter mornings. Golf shoes with soft spikes are preferred.',
  },
  {
    title: 'Caddies',
    description:
      'Local caddies are available at all major courses and are highly recommended. They know the courses intimately and can save you several strokes with their knowledge of hidden breaks and local conditions. Tip 50-100 MAD beyond the caddy fee for good service.',
  },
  {
    title: 'GPS and Rangefinders',
    description:
      'Most premium courses have GPS-equipped golf carts. Laser rangefinders are permitted and encouraged at all Moroccan courses. Some courses offer their own proprietary apps with course maps and yardage information.',
  },
  {
    title: 'Pro Shops',
    description:
      'Major courses have well-stocked pro shops with balls, gloves, tees, and branded merchandise. Prices are comparable to European pro shops. If you run out of balls, stock up before heading to more remote courses.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GOLF ETIQUETTE IN MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    title: 'Dress Code',
    description:
      'Moroccan golf clubs enforce a smart dress code. Collared shirts are required at all courses. Smart golf shorts (above-the-knee length) are accepted, but denim, swimwear, and athletic shorts are not. Golf shoes (soft spikes) are required on most championship courses.',
  },
  {
    title: 'Pace of Play',
    description:
      'A round should be completed in under 4 hours 30 minutes. Marshals on premium courses actively manage pace. If your group falls behind, allow faster groups to play through. Ready golf is encouraged rather than strict honors.',
  },
  {
    title: 'Tipping Culture',
    description:
      'Tipping is customary and expected in Morocco. Caddy tip: 50-100 MAD for a good round. Bag handler: 20-30 MAD. Locker room attendant: 10-20 MAD. Restaurant staff: 10-15% of the bill. Generous tipping ensures excellent service on return visits.',
  },
  {
    title: 'Course Care',
    description:
      'Replace divots and repair ball marks on greens. Rake bunkers after use -- most courses provide rakes in bunkers. Keep carts on paths when indicated and observe the 90-degree rule on fairways. Water conservation is taken seriously in Morocco.',
  },
  {
    title: 'Reservations',
    description:
      'Advance booking is essential during peak season (October-December and April-May). Most courses accept online reservations or bookings through hotel concierges. Weekend tee times at popular courses like Amelkis and Royal Golf Marrakech can fill weeks in advance.',
  },
  {
    title: 'Ramadan Considerations',
    description:
      'During Ramadan (dates vary annually), course operations may have adjusted hours. Clubhouse dining options may be limited during daylight hours, though courses remain open for play. Be respectful of fasting staff and avoid consuming food or drink conspicuously.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIP GOLF ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const dayTripItineraries = [
  {
    title: 'Marrakech Double: History & Championship',
    duration: 'Full day',
    description:
      'Start early at Royal Golf Marrakech for a historic morning round through ancient olive trees. Lunch at the colonial clubhouse. Afternoon tee time at Amelkis for a contrasting modern championship experience. Return to the medina for evening dining in Jemaa el-Fna.',
    courses: ['Royal Golf Marrakech (morning)', 'Amelkis Golf Club (afternoon)'],
    tip: 'Book the first tee time at Royal Golf (7:30 AM) to finish before the afternoon heat.',
  },
  {
    title: 'The Nicklaus & Cameron Experience',
    duration: 'Full day',
    description:
      'Two of Morocco\'s finest modern courses in one day. Morning round at Assoufid, where the desert-meets-mountains aesthetic is magical in early light. After lunch, tackle Jack Nicklaus\'s Samanah for the ultimate championship challenge.',
    courses: ['Assoufid Golf Club (morning)', 'Samanah Country Club (afternoon)'],
    tip: 'Hire a caddy at both courses -- the local knowledge is invaluable on these strategic layouts.',
  },
  {
    title: 'Rabat Royal Day',
    duration: 'Full day (from Rabat)',
    description:
      'Dedicate a full day to Royal Golf Dar Es Salam, Morocco\'s most prestigious complex. Play the famous Red Course in the morning, enjoy a long lunch at the clubhouse, then take on the Blue Course in the afternoon. A 45-hole facility means you will never need to leave.',
    courses: ['Royal Golf Dar Es Salam -- Red Course (morning)', 'Royal Golf Dar Es Salam -- Blue Course (afternoon)'],
    tip: 'The Red Course is significantly harder; play it first when you are fresh and focused.',
  },
  {
    title: 'El Jadida Coastal Golf & Culture',
    duration: 'Full day (from Casablanca or Marrakech)',
    description:
      'Drive to El Jadida (1.5 hours from Casablanca, 3 hours from Marrakech) for a round at Mazagan Beach Resort\'s Gary Player links course. After golf, explore the UNESCO-listed Portuguese Cistern and the charming old town of El Jadida. Fresh seafood lunch at the harbor.',
    courses: ['Mazagan Beach Resort Golf Course'],
    tip: 'Wind picks up in the afternoon -- morning tee times offer calmer conditions on this coastal links.',
  },
  {
    title: 'Agadir Golf & Beach Combo',
    duration: 'Full day',
    description:
      'Morning round at Golf du Soleil, taking advantage of the early calm and cooler temperatures. After golf, head to Agadir\'s famous crescent beach for lunch at a seafront restaurant and an afternoon of relaxation, water sports, or exploring the Souk El Had.',
    courses: ['Golf du Soleil (morning)'],
    tip: 'Agadir has the mildest climate in Morocco -- this itinerary works year-round, even in winter.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is the best time of year to play golf in Morocco?',
    answer:
      'The best golf season in Morocco is October through May, when temperatures are pleasant (18-28 degrees C). Winter months (November-February) are ideal for Marrakech and Agadir courses. Summer can exceed 40 degrees C in Marrakech, making early morning tee times essential. Agadir and northern courses remain playable year-round.',
  },
  {
    question: 'How much do green fees cost in Morocco?',
    answer:
      'Green fees typically range from 500 to 2,000 MAD (approximately 50 to 200 USD). Budget-friendly municipal courses start around 300-500 MAD, mid-range resort courses charge 700-1,200 MAD, and premium championship courses like Royal Golf Dar Es Salam or Samanah command 1,500-2,500 MAD. Multi-round packages offer significant savings.',
  },
  {
    question: 'Do I need to bring my own golf clubs to Morocco?',
    answer:
      'No, you do not need to bring your own clubs. All major courses offer rental services, typically 200-500 MAD per round. Premium courses provide Callaway, TaylorMade, and Titleist sets. However, bringing your own clubs is recommended for serious golfers. Most airlines charge 30-50 EUR each way for golf bag transport.',
  },
  {
    question: 'Which is the most famous golf course in Morocco?',
    answer:
      'Royal Golf Dar Es Salam in Rabat is Morocco\'s most internationally famous course, particularly its Red Course, which has hosted the Hassan II Trophy since 1971. Royal Golf Marrakech (est. 1927) is the most historic. Samanah Country Club, designed by Jack Nicklaus, is considered the finest modern championship course.',
  },
  {
    question: 'Can beginners play golf in Morocco?',
    answer:
      'Absolutely. Many Moroccan courses welcome beginners and offer professional instruction. Palmeraie Golf Palace, Golf du Soleil in Agadir, and Cabo Negro all have excellent practice facilities and academies. Multi-day beginner packages combining lessons with supervised course play are widely available.',
  },
  {
    question: 'Are there golf packages that include hotels in Morocco?',
    answer:
      'Yes, Morocco has excellent golf-and-stay packages. Resorts like Mazagan Beach Resort, Palmeraie Golf Palace, and Fairmont Royal Palm offer integrated packages. Tour operators such as Golf Majestic Marrakech arrange custom packages combining multiple courses, luxury accommodation, and transfers from around 800 EUR for 3-4 nights.',
  },
  {
    question: 'Is Morocco a good golf destination compared to Spain or Portugal?',
    answer:
      'Morocco offers several advantages: significantly lower green fees (30-50% less than the Algarve or Costa del Sol), warmer winter weather, unique cultural experiences, and less crowded courses. The quality of top courses like Samanah, Mazagan, and Assoufid rivals the best in Europe. The main trade-off is longer flight times from northern Europe.',
  },
  {
    question: 'What should I wear on Moroccan golf courses?',
    answer:
      'Moroccan golf clubs enforce a smart dress code similar to European clubs. Collared shirts are required. Smart golf shorts are accepted, but denim, swimwear, and athletic shorts are prohibited. Golf shoes with soft spikes are required at championship courses. Lightweight, breathable fabrics are recommended due to the warm climate.',
  },
  {
    question: 'Is it customary to use a caddy in Morocco?',
    answer:
      'Yes, caddies are available at all major courses and are highly recommended. They have intimate knowledge of course conditions, hidden breaks, and local wind patterns. Caddy fees are typically 100-200 MAD per round, and a tip of 50-100 MAD is customary for good service.',
  },
  {
    question: 'How do I get to golf courses from Marrakech hotels?',
    answer:
      'Most luxury hotels offer golf transfer services. Taxis are affordable (50-150 MAD depending on distance). Ride-hailing apps work in Marrakech. Royal Golf Marrakech is centrally located and walkable from Hivernage. Courses like Amelkis and Palmeraie are 15-20 minutes by car. Samanah and Assoufid are 25-35 minutes outside the city center.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: GolfPage
   ═══════════════════════════════════════════════════════════════ */

export default function GolfPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-morocco-hero.webp"
          alt="Championship golf course in Morocco with Atlas Mountains in the background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 container-morocco text-center text-white py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-6">
            <Trophy className="w-4 h-4 text-[#C4960C]" />
            <span>Africa&apos;s Premier Golf Destination</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold mb-6 leading-tight">
            Golf in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover 40+ championship courses designed by Jack Nicklaus, Gary Player, and Robert
            Trent Jones Sr. Year-round sunshine, royal heritage, and green fees from 500 MAD make
            Morocco the smart alternative to European golf destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#top-courses"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#C4960C] text-white font-semibold hover:bg-[#A0522D] transition-colors"
            >
              <Flag className="w-4 h-4" /> Explore Top Courses
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white/60 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <DollarSign className="w-4 h-4" /> View Golf Packages
            </a>
          </div>
        </div>
      </section>

      {/* ─── BREADCRUMB ─── */}
      <nav className="bg-[#EDE8E0] border-b border-[#EDE8E0]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[#1A1814]/60">
            <li>
              <Link href="/" className="hover:text-[#A0522D] transition-colors inline-flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li>
              <Link href="/adventure" className="hover:text-[#A0522D] transition-colors">
                Activities
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[#A0522D] font-medium">Golf</li>
          </ol>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 2: WHY GOLF IN MOROCCO
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <Trophy className="w-4 h-4" />
              <span>The Royal Sport</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Why Golf in Morocco?
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto leading-relaxed">
              From the legacy of King Hassan II to world-class designs by golf&apos;s greatest architects,
              Morocco has earned its place among the world&apos;s elite golf destinations. Here is why
              discerning golfers are choosing Morocco over traditional European options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMorocco.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="card-moroccan p-6">
                  <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
                    <Icon className="w-6 h-6 text-[#A0522D]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Royal Legacy Callout */}
          <div className="mt-12 card-moroccan p-8 border-l-4 border-l-[#C4960C] zellige-border">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="inline-flex p-3 rounded-xl bg-[#C4960C]/10 shrink-0">
                <Trophy className="w-8 h-8 text-[#C4960C]" />
              </div>
              <div>
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                  The Hassan II Golf Trophy Legacy
                </h3>
                <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                  Established in 1971 by King Hassan II at Royal Golf Dar Es Salam in Rabat, the Hassan II
                  Golf Trophy is one of the most prestigious invitational tournaments in world golf. The
                  event has attracted legends including Billy Casper, Lee Trevino, Payne Stewart, Nick Price,
                  Ernie Els, and many European Tour stars. The tournament showcases the Red Course, which
                  Robert Trent Jones Sr. considered among his finest works. This royal patronage elevated
                  Moroccan golf to international prominence and catalyzed decades of championship course
                  development across the kingdom.
                </p>
                <p className="text-[#1A1814]/70 leading-relaxed">
                  Today, King Mohammed VI continues the royal commitment to golf, supporting new course
                  developments and ensuring Morocco remains Africa&apos;s undisputed premier golf destination.
                  The kingdom&apos;s golf infrastructure includes over 40 courses, dozens of luxury golf resorts,
                  and a growing calendar of international amateur and professional events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 3: TOP COURSES
         ═══════════════════════════════════════════════════════════ */}
      <section id="top-courses" className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <Flag className="w-4 h-4" />
              <span>Championship Courses</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Top 9 Golf Courses in Morocco
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto leading-relaxed">
              From the historic fairways of Royal Golf Marrakech to Jack Nicklaus&apos;s modern masterpiece
              at Samanah, these are the courses that define Moroccan golf.
            </p>
          </div>

          <div className="space-y-8">
            {topCourses.map((course, index) => (
              <div key={course.name} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  {/* Course Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#A0522D] text-white text-sm font-bold">
                          {index + 1}
                        </span>
                        <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                          {course.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#1A1814]/60">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#A0522D]" />
                          {course.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#A0522D]" />
                          Founded {course.founded}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[#A0522D]" />
                          {course.designer}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? 'text-[#C4960C] fill-[#C4960C]'
                              : i < course.rating
                                ? 'text-[#C4960C] fill-[#C4960C]/50'
                                : 'text-[#1A1814]/20'
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-sm font-bold text-[#1A1814]">{course.rating}</span>
                    </div>
                  </div>

                  {/* Course Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    <div className="bg-[#FAF8F5] rounded-lg p-3 text-center">
                      <div className="text-xs text-[#1A1814]/50 uppercase tracking-wide mb-1">Holes</div>
                      <div className="text-lg font-bold text-[#1A1814]">{course.holes}</div>
                    </div>
                    <div className="bg-[#FAF8F5] rounded-lg p-3 text-center">
                      <div className="text-xs text-[#1A1814]/50 uppercase tracking-wide mb-1">Par</div>
                      <div className="text-lg font-bold text-[#1A1814]">{course.par}</div>
                    </div>
                    <div className="bg-[#FAF8F5] rounded-lg p-3 text-center">
                      <div className="text-xs text-[#1A1814]/50 uppercase tracking-wide mb-1">Yardage</div>
                      <div className="text-lg font-bold text-[#1A1814]">{course.yardage}</div>
                    </div>
                    <div className="bg-[#FAF8F5] rounded-lg p-3 text-center">
                      <div className="text-xs text-[#1A1814]/50 uppercase tracking-wide mb-1">Green Fee</div>
                      <div className="text-lg font-bold text-[#C4960C]">{course.greenFee}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#1A1814]/70 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[#1A1814] uppercase tracking-wide mb-3">
                      Course Highlights
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {course.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                          <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="bg-[#A0522D]/5 rounded-lg p-4">
                    <span className="text-xs font-bold text-[#A0522D] uppercase tracking-wide">Best For: </span>
                    <span className="text-sm text-[#1A1814]/70">{course.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 4: GREEN FEES & COSTS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <DollarSign className="w-4 h-4" />
              <span>Pricing Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Green Fees & Golf Costs
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto leading-relaxed">
              Morocco offers exceptional value compared to European golf destinations.
              Here is a detailed breakdown of what you can expect to spend.
            </p>
          </div>

          {/* Cost Table */}
          <div className="card-moroccan overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#A0522D] text-white">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Item</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">MAD</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Approx. USD</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((cost, index) => (
                    <tr key={cost.item} className={index % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}>
                      <td className="p-4 text-sm text-[#1A1814]">{cost.item}</td>
                      <td className="p-4 text-sm font-bold text-[#C4960C]">{cost.range}</td>
                      <td className="p-4 text-sm text-[#1A1814]/60">{cost.usd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Money-saving tips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="inline-flex p-2 rounded-lg bg-[#C4960C]/10 mb-3">
                <DollarSign className="w-5 h-5 text-[#C4960C]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">Multi-Round Discounts</h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                Most courses offer discounts for booking 3+ rounds. Golf package operators negotiate
                rates 15-25% below walk-in prices. Ask your hotel concierge about their preferred rates.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="inline-flex p-2 rounded-lg bg-[#C4960C]/10 mb-3">
                <Calendar className="w-5 h-5 text-[#C4960C]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">Twilight Rates</h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                Afternoon and twilight rates (after 2:00 PM) can save 30-40% on green fees. In summer,
                this also means cooler temperatures. Ask courses about their twilight start time and pricing.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="inline-flex p-2 rounded-lg bg-[#C4960C]/10 mb-3">
                <Clock className="w-5 h-5 text-[#C4960C]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">Low Season Value</h3>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                June through September green fees can be 20-40% lower. Combine with cheaper hotel rates
                for significant overall savings. Book early morning tee times to avoid the heat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 5: BEST SEASONS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <Sun className="w-4 h-4" />
              <span>When to Play</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Best Seasons for Golf in Morocco
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto leading-relaxed">
              Morocco is a year-round golf destination, but the sweet spot is October through May.
              Here is what to expect each season and how to plan accordingly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalGuide.map((season) => {
              const Icon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 shrink-0">
                      <Icon className="w-6 h-6 text-[#A0522D]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                          {season.season}
                        </h3>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                            season.rating === 'Excellent'
                              ? 'bg-green-500/10 text-green-700'
                              : season.rating === 'Very Good'
                                ? 'bg-blue-500/10 text-blue-700'
                                : 'bg-amber-500/10 text-amber-700'
                          }`}
                        >
                          {season.rating}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-sm text-[#C4960C] font-medium mb-3">
                        <Sun className="w-3.5 h-3.5" />
                        {season.temp}
                      </div>
                      <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                        {season.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Season Summary Callout */}
          <div className="mt-8 card-moroccan p-6 border-l-4 border-l-[#C4960C]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[#C4960C]/10 shrink-0">
                <Info className="w-5 h-5 text-[#C4960C]" />
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                  Regional Variations
                </h4>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Agadir enjoys the mildest year-round climate with oceanic influence keeping temperatures
                  moderate even in summer. Marrakech has the most dramatic seasonal swings and is best avoided
                  in July-August for golf. Rabat benefits from Atlantic breezes. The north coast (Cabo Negro,
                  Tangier) offers cooler Mediterranean summers but wetter winters. For year-round golf certainty,
                  Agadir is the safest bet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 6: GOLF PACKAGES & TOUR OPERATORS
         ═══════════════════════════════════════════════════════════ */}
      <section id="packages" className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <Car className="w-4 h-4" />
              <span>Packages & Operators</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Golf Packages & Tour Operators
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto leading-relaxed">
              Pre-arranged golf packages offer the best value and convenience. Here are four
              popular itineraries offered by specialist operators.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {golfPackages.map((pkg) => (
              <div key={pkg.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-1">
                      {pkg.name}
                    </h3>
                    <div className="inline-flex items-center gap-1 text-sm text-[#A0522D]">
                      <Clock className="w-3.5 h-3.5" />
                      {pkg.duration}
                    </div>
                  </div>
                  <span className="text-lg font-bold text-[#C4960C]">{pkg.price}</span>
                </div>
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs font-bold text-[#1A1814]/50 uppercase tracking-wide">Courses</span>
                    <p className="text-sm text-[#1A1814]/70">{pkg.courses}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1A1814]/50 uppercase tracking-wide">Accommodation</span>
                    <p className="text-sm text-[#1A1814]/70">{pkg.accommodation}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1A1814]/50 uppercase tracking-wide">Includes</span>
                    <p className="text-sm text-[#1A1814]/70">{pkg.includes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tour Operator Tips */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                Specialist Golf Tour Operators
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                  <span><strong>Golf Majestic Marrakech</strong> -- Local operator with 15+ years experience, custom packages, multilingual guides</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                  <span><strong>Morocco Golf Tours</strong> -- UK-based specialist, all-inclusive packages, ATOL-protected bookings</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                  <span><strong>Golf Maroc</strong> -- French-speaking specialist, strong Agadir and Atlantic coast focus</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                  <span><strong>Your Golf Travel</strong> -- International operator with Morocco program, competitive group rates</span>
                </li>
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                Booking Tips
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <Info className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                  <span>Book packages 2-3 months ahead for peak season (October-December) to secure preferred tee times</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <Info className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                  <span>Groups of 8+ receive the best per-person rates from most operators</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <Info className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                  <span>Compare operator prices against booking courses and hotels independently -- packages are usually 10-20% cheaper</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <Info className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                  <span>Ask about single supplement waivers if traveling solo -- some operators match singles into groups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 7: GOLF + LUXURY HOTEL COMBOS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <Hotel className="w-4 h-4" />
              <span>Stay & Play</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Golf & Luxury Hotel Combinations
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto leading-relaxed">
              Morocco&apos;s finest hotels offer seamless golf experiences with dedicated concierges,
              course transfers, and exclusive tee time access.
            </p>
          </div>

          <div className="space-y-6">
            {hotelCombos.map((combo) => (
              <div key={combo.hotel} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                        {combo.hotel}
                      </h3>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: combo.stars }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-[#C4960C] fill-[#C4960C]" />
                        ))}
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1 text-sm text-[#1A1814]/60">
                      <MapPin className="w-3.5 h-3.5 text-[#A0522D]" />
                      {combo.location}
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#C4960C]">{combo.priceRange}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-xs font-bold text-[#1A1814]/50 uppercase tracking-wide block mb-1">Nearest Courses</span>
                    <p className="text-sm text-[#1A1814]/70">{combo.nearestCourses}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1A1814]/50 uppercase tracking-wide block mb-1">Golf Arrangement</span>
                    <p className="text-sm text-[#1A1814]/70">{combo.golfArrangement}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1A1814]/50 uppercase tracking-wide block mb-1">Highlight</span>
                    <p className="text-sm text-[#1A1814]/70">{combo.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 8: EQUIPMENT RENTAL & TIPS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <Shield className="w-4 h-4" />
              <span>Gear & Preparation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Equipment Rental & Practical Tips
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about gear, rentals, caddies, and preparing
              for your Moroccan golf experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[#A0522D]/10 mb-3">
                  <Info className="w-5 h-5 text-[#A0522D]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>

          {/* Packing Checklist */}
          <div className="mt-8 card-moroccan p-6 md:p-8 zellige-border">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-6">
              Golf Trip Packing Checklist
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-sm font-bold text-[#A0522D] mb-3">On the Course</h4>
                <ul className="space-y-1.5">
                  {[
                    'Golf shoes (soft spikes)',
                    'Collared shirts (3-4)',
                    'Golf shorts or trousers',
                    'Light rain jacket',
                    'Golf glove(s)',
                    'Ball markers and tees',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#1A1814]/70">
                      <CheckCircle className="w-3.5 h-3.5 text-[#A0522D] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#A0522D] mb-3">Sun Protection</h4>
                <ul className="space-y-1.5">
                  {[
                    'SPF 50+ sunscreen',
                    'Wide-brimmed hat or cap',
                    'UV-protection sunglasses',
                    'Lip balm with SPF',
                    'After-sun lotion',
                    'Lightweight long-sleeve layer',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#1A1814]/70">
                      <CheckCircle className="w-3.5 h-3.5 text-[#A0522D] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#A0522D] mb-3">Hydration & Nutrition</h4>
                <ul className="space-y-1.5">
                  {[
                    'Reusable water bottle (2L)',
                    'Electrolyte packets',
                    'Energy bars or trail mix',
                    'Fruits (buy local)',
                    'Cooling towel',
                    'Insulated bottle for hot days',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#1A1814]/70">
                      <CheckCircle className="w-3.5 h-3.5 text-[#A0522D] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#A0522D] mb-3">Travel & Tech</h4>
                <ul className="space-y-1.5">
                  {[
                    'Hard-shell travel bag',
                    'Rangefinder or GPS device',
                    'European plug adapter',
                    'Portable phone charger',
                    'Scorecard holder',
                    'Travel insurance documents',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#1A1814]/70">
                      <CheckCircle className="w-3.5 h-3.5 text-[#A0522D] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 9: GOLF ETIQUETTE IN MOROCCO
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <Users className="w-4 h-4" />
              <span>On the Course</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Golf Etiquette in Morocco
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto leading-relaxed">
              Moroccan golf culture blends international standards with local customs.
              Understanding both will enhance your experience and earn respect from staff and fellow golfers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etiquetteRules.map((rule) => (
              <div key={rule.title} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[#C4960C]/10 mb-3">
                  <Shield className="w-5 h-5 text-[#C4960C]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                  {rule.title}
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>

          {/* Cultural Note */}
          <div className="mt-8 card-moroccan p-6 border-l-4 border-l-[#A0522D]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[#A0522D]/10 shrink-0">
                <Compass className="w-5 h-5 text-[#A0522D]" />
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                  Cultural Sensitivity
                </h4>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
                  Morocco is a Muslim-majority country with a warm and welcoming culture. On the golf course,
                  behavior is largely the same as at any international club. However, a few cultural
                  considerations will help you connect better with local staff and fellow players:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                    <span>Greet caddies and staff with &quot;Salaam alaikum&quot; (peace be upon you) -- it is always appreciated</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                    <span>During Ramadan, be mindful of fasting staff and avoid eating or drinking conspicuously</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                    <span>Alcohol is served at most clubhouses, but excessive consumption at the bar is frowned upon</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                    <span>French is the primary second language; basic French phrases will help more than English at some courses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 10: DAY TRIP GOLF ITINERARIES
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <Car className="w-4 h-4" />
              <span>Plan Your Day</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Day Trip Golf Itineraries
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto leading-relaxed">
              Five carefully planned day trips that maximize your time on Morocco&apos;s finest courses,
              with practical tips for each excursion.
            </p>
          </div>

          <div className="space-y-6">
            {dayTripItineraries.map((trip, index) => (
              <div key={trip.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A0522D] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                        {trip.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#A0522D] bg-[#A0522D]/10 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3" />
                        {trip.duration}
                      </span>
                    </div>
                    <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-4">
                      {trip.description}
                    </p>

                    <div className="mb-3">
                      <span className="text-xs font-bold text-[#1A1814]/50 uppercase tracking-wide">Courses</span>
                      <ul className="mt-1 space-y-1">
                        {trip.courses.map((course) => (
                          <li key={course} className="flex items-center gap-2 text-sm text-[#1A1814]/70">
                            <Flag className="w-3.5 h-3.5 text-[#A0522D] shrink-0" />
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#C4960C]/5 rounded-lg p-3">
                      <span className="text-xs font-bold text-[#C4960C] uppercase tracking-wide">Pro Tip: </span>
                      <span className="text-sm text-[#1A1814]/70">{trip.tip}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 11: FAQ
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A0522D] mb-4">
              <Info className="w-4 h-4" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto leading-relaxed">
              Everything first-time golf visitors ask about playing in Morocco.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         GOLF IN MOROCCO - FEATURE IMAGE
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] group">
            <img src="/images/hero-golf.webp" alt="Lush championship golf course in Morocco with palm trees and Atlas Mountain backdrop" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6">
              <p className="text-white font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold">
                World-Class Golf in the Kingdom
              </p>
              <p className="text-white/80 text-sm md:text-base mt-1">
                Morocco is home to over 40 courses designed by legends like Robert Trent Jones, Jack Nicklaus, and Colin Montgomerie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         CTA SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco text-center">
          <Trophy className="w-10 h-10 text-[#A0522D] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
            Ready to Tee Off in Morocco?
          </h2>
          <p className="text-lg text-[#1A1814]/70 max-w-xl mx-auto mb-8">
            From royal courses steeped in history to championship layouts designed by golf&apos;s
            greatest architects, Morocco offers a golfing experience unlike any other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#A0522D] text-white font-semibold hover:bg-[#8B4513] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Destinations
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[#A0522D] text-[#A0522D] font-semibold hover:bg-[#A0522D] hover:text-white transition-colors"
            >
              <Calendar className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 12: EXPLORE MORE
         ═══════════════════════════════════════════════════════════ */}
      <ExploreMore />
    </>
  );
}

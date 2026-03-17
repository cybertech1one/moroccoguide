import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Mountain,
  Waves,
  Wind,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Calendar,
  CheckCircle,
  Compass,
  Flame,
  TrendingUp,
  AlertTriangle,
  ThermometerSun,
  Shield,
  Bike,
  Snowflake,
  Sun,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adventure Morocco | Surfing, Trekking, Rock Climbing, Desert Sports & More',
  description:
    'Discover Morocco\'s best adventure sports. Surfing in Taghazout, trekking Toubkal, rock climbing Todra Gorge, sandboarding Erg Chebbi, paragliding, canyoning, kitesurfing Dakhla, skiing Oukaimeden, hot air ballooning, and more.',
  keywords: [
    'adventure morocco',
    'surfing morocco taghazout',
    'trekking toubkal',
    'rock climbing todra gorge',
    'sandboarding morocco',
    'kitesurfing dakhla',
    'morocco adventure sports',
    'paragliding morocco',
    'canyoning akchour',
    'mountain biking morocco',
    'skiing oukaimeden',
    'hot air balloon marrakech',
    'via ferrata morocco',
    'camel trekking sahara',
    'rafting morocco',
    'quad biking agafay',
  ],
  openGraph: {
    title: 'Adventure Morocco | Surfing, Trekking, Rock Climbing, Desert Sports & More',
    description:
      'Morocco\'s ultimate adventure guide. 20 activities from Atlantic surf to Saharan sandboarding, with seasons, costs, and difficulty ratings.',
    url: 'https://citytoursmorocco.com/adventure',
    images: [
      {
        url: '/images/hero-trekking.webp',
        width: 1200,
        height: 630,
        alt: 'Adventure trekking in the Atlas Mountains Morocco',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAction',
  name: 'Adventure Travel in Morocco',
  description:
    'A comprehensive guide to 20+ adventure sports and outdoor activities in Morocco, including surfing, trekking, rock climbing, desert sports, skiing, and hot air ballooning.',
  url: 'https://citytoursmorocco.com/adventure',
  location: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

/* ─── Top 20 Adventure Activities ─── */

const adventureActivities = [
  {
    title: 'Surfing',
    icon: Waves,
    description:
      'Morocco\'s Atlantic coast is one of the world\'s top surfing destinations, with consistent swells from September to April and warm water year-round. From beginner-friendly beach breaks to world-class point breaks, there is something for every level.',
    spots: [
      {
        name: 'Taghazout',
        detail: 'Morocco\'s surf capital. Home to legendary breaks like Anchor Point (long right-hand point break), Killer Point, Hash Point, and Panoramas. Dozens of surf camps and hostels line the village. Board rental is everywhere.',
      },
      {
        name: 'Imsouane',
        detail: 'Home to one of the longest right-hand waves in Africa. The bay offers perfect beginner waves, while "The Cathedral" delivers world-class walls for experienced surfers. A quieter, more bohemian alternative to Taghazout.',
      },
      {
        name: 'Essaouira',
        detail: 'Windy and wild. Ideal for windsurfing and kitesurfing, with surfable waves for beginners at Moulay Bouzerktoune and more advanced spots nearby. The town itself is an atmospheric base.',
      },
      {
        name: 'Sidi Kaouki',
        detail: 'A laid-back beach village south of Essaouira with consistent beach breaks, fewer crowds, and a backpacker atmosphere. Great for intermediate surfers wanting uncrowded waves.',
      },
    ],
    bestSeason: 'September - April (peak: November - February)',
    cost: 'Surf lessons: $25-40/session. Board rental: $10-15/day. Surf camp packages: $300-600/week all-inclusive.',
    difficulty: 'All levels. Beginners welcome at beach breaks; advanced surfers at point breaks.',
    image: '/images/hero-surfing.webp',
  },
  {
    title: 'Trekking - High Atlas',
    icon: Mountain,
    description:
      'The High Atlas Mountains offer North Africa\'s finest trekking, from day hikes through Berber villages to multi-day summit expeditions. Jebel Toubkal, at 4,167 meters, is the crown jewel, but the range offers routes for every level.',
    spots: [
      {
        name: 'Jebel Toubkal (4,167m)',
        detail: 'North Africa\'s highest peak. A challenging but non-technical 2-3 day trek from Imlil. The summit offers panoramic views across the Sahara on clear days. Refuge du Toubkal (3,207m) provides overnight accommodation.',
      },
      {
        name: 'M\'Goun Massif (4,071m)',
        detail: 'A more remote and less crowded alternative to Toubkal. The M\'Goun traverse through the Rose Valley is one of Morocco\'s most spectacular multi-day treks (5-7 days). True wilderness experience.',
      },
      {
        name: 'Ourika Valley',
        detail: 'An easy day trip from Marrakech (1 hour drive). Gentle hikes through terraced valleys, past Setti Fatma waterfalls, and through traditional Berber villages. Suitable for all fitness levels.',
      },
      {
        name: 'Imlil to Azzaden Valley',
        detail: 'A stunning 3-day loop trek passing through walnut groves, across high passes, and through remote villages. Moderate difficulty with mountain gite accommodation.',
      },
    ],
    bestSeason: 'April - June, September - November. Toubkal summer only (June-September). Winter requires crampons and ice axes.',
    cost: 'Day hike with guide: $30-60. Multi-day trek: $50-100/day (guide, mule, food). Toubkal summit: $150-300 for 2-day package.',
    difficulty: 'Day hikes: Easy-Moderate. Toubkal/M\'Goun: Strenuous. No technical climbing required for standard routes.',
    image: '/images/hero-trekking.webp',
  },
  {
    title: 'Trekking - Rif Mountains',
    icon: Mountain,
    description:
      'The Rif Mountains in northern Morocco offer a completely different trekking experience: lush Mediterranean forests, dramatic gorges, and the famous blue city of Chefchaouen as a base. Less visited and more verdant than the Atlas.',
    spots: [
      {
        name: 'Talassemtane National Park',
        detail: 'A protected forest of rare Moroccan fir (Abies marocana). Multi-day treks through dense cedar and oak forests with stunning ridge walks and views over the Mediterranean.',
      },
      {
        name: 'Akchour Waterfalls',
        detail: 'A popular day hike from Chefchaouen. Two spectacular waterfalls reached via a canyon trail, plus the remarkable God\'s Bridge natural rock arch. Swimming in turquoise pools.',
      },
      {
        name: 'Jebel Lakraa (2,159m)',
        detail: 'The highest peak in the western Rif. A challenging day hike or overnight trip from Chefchaouen through ancient forests. Far fewer trekkers than the Atlas.',
      },
    ],
    bestSeason: 'March - June, September - November. Can be rainy in winter. Summer is warm but manageable at altitude.',
    cost: 'Day hike with guide: $25-50. Multi-day trek: $40-80/day. Chefchaouen-based treks are very affordable.',
    difficulty: 'Easy to Moderate. Akchour: Easy. Jebel Lakraa: Moderate-Strenuous.',
    image: '/images/hero-chefchaouen.webp',
  },
  {
    title: 'Trekking - Anti-Atlas',
    icon: Mountain,
    description:
      'The Anti-Atlas is Morocco\'s least-visited mountain range, offering surreal granite landscapes, ancient rock formations, and Berber villages that feel untouched by time. For adventurers who want to get truly off the beaten path.',
    spots: [
      {
        name: 'Jebel El Kest (2,376m)',
        detail: 'A multi-day traverse through the heart of the Anti-Atlas. Dramatic granite peaks, palm-filled gorges, and traditional Amazigh villages. Very few other trekkers.',
      },
      {
        name: 'Tafraoute Circuit',
        detail: 'Day hikes and multi-day routes through the Ameln Valley. Giant granite boulders, painted rocks by Jean Verame, and spectacular almond blossom in February.',
      },
      {
        name: 'Ait Mansour Gorge',
        detail: 'A dramatic palm-lined canyon near Tafraoute. An easy-to-moderate day walk through a stunning desert gorge with seasonal waterfalls.',
      },
    ],
    bestSeason: 'October - April. Too hot in summer. February for almond blossom in Tafraoute.',
    cost: 'Day hike with local guide: $20-40. Multi-day: $40-70/day. Very affordable region.',
    difficulty: 'Moderate. Navigation can be challenging; a local guide is recommended.',
    image: '/images/hero-desert.webp',
  },
  {
    title: 'Rock Climbing',
    icon: TrendingUp,
    description:
      'Morocco\'s limestone gorges and granite walls offer outstanding rock climbing. The Todra Gorge is internationally famous, while Tafraoute provides world-class bouldering in a surreal landscape.',
    spots: [
      {
        name: 'Todra Gorge',
        detail: 'Morocco\'s premier climbing destination. Over 400 bolted routes on 300-meter limestone walls. Grades from 4a to 8c. The gorge is narrow and dramatic, with routes on both sides. "Pilier du Couchant" is the classic multi-pitch.',
      },
      {
        name: 'Tafraoute',
        detail: 'Granite bouldering paradise in the Anti-Atlas. Hundreds of boulder problems from V0 to V12. The famous "Painted Rocks" area and Ameln Valley offer excellent trad climbing on solid granite.',
      },
      {
        name: 'Dades Gorge',
        detail: 'Less developed than Todra but with excellent potential. Multi-pitch routes on red sandstone with fewer crowds and dramatic scenery. Pioneering new routes is still possible.',
      },
      {
        name: 'Zaouiat Ahansal',
        detail: 'Remote climbing area in the central High Atlas. Limestone towers and gorges with a growing collection of bolted and traditional routes. Best for experienced climbers seeking adventure.',
      },
    ],
    bestSeason: 'October - April (hot in summer). Todra Gorge: October - May. Tafraoute: November - March.',
    cost: 'Guide: $40-80/day. Gear rental: $15-25/day. Climbing course: $60-120/day.',
    difficulty: 'Routes from 4a to 8c. Beginner-friendly with a guide; advanced climbers find world-class challenges.',
    image: '/images/hero-climbing.webp',
  },
  {
    title: 'Kitesurfing',
    icon: Wind,
    description:
      'Morocco\'s Atlantic coast offers world-class wind conditions for kitesurfing. Dakhla, in the deep south, is consistently ranked among the world\'s top 5 kitesurfing destinations by every major kite publication.',
    spots: [
      {
        name: 'Dakhla Lagoon',
        detail: 'A vast, shallow lagoon with flat water, consistent 20-30 knot winds, and warm temperatures year-round. Butter-flat water is perfect for freestyle. Numerous kite camps: Dakhla Attitude, Westpoint, Ocean Vagabond, and PK25.',
      },
      {
        name: 'Essaouira',
        detail: 'Known as the "Wind City of Africa." Strong, reliable winds from April to September. More accessible than Dakhla with the charming medina to explore. ION CLUB Essaouira and Explora Watersports are top schools.',
      },
      {
        name: 'Moulay Bousselham',
        detail: 'A lagoon north of Rabat with good conditions for beginners. Less developed than Dakhla but budget-friendly and easy to reach from Rabat or Tangier.',
      },
    ],
    bestSeason: 'Dakhla: Year-round (peak April-October). Essaouira: April - September.',
    cost: 'Lessons: $60-100/session. Week-long kite camp (Dakhla): $500-1,200 (accommodation + lessons). Gear rental: $50-80/day.',
    difficulty: 'Requires lessons. Dakhla lagoon is excellent for beginners (flat water, consistent wind).',
    image: '/images/hero-water-sports.webp',
  },
  {
    title: 'Desert Adventures - 4x4 & Camel Trekking',
    icon: Compass,
    description:
      'The Sahara Desert is Morocco\'s most iconic landscape. From short sunset camel rides to multi-day 4x4 expeditions into the deep desert, the range of experiences is vast. The two major erg (sand sea) systems offer distinct experiences.',
    spots: [
      {
        name: 'Erg Chebbi (Merzouga)',
        detail: 'Morocco\'s most accessible dunes, reaching 150 meters high. Camel treks from 1 hour to 3 days. Luxury desert camps (Merzouga Luxury Desert Camp, Erg Chebbi Luxury Camp) and budget bivouacs. Sunrise from the dune crests is unforgettable.',
      },
      {
        name: 'Erg Chigaga (M\'Hamid)',
        detail: 'More remote and pristine dunes in the deep Sahara. Requires a 4x4 (50km from M\'Hamid). Fewer tourists, higher dunes in some areas, and a true wilderness feeling. Multi-day camel treks with Nomad guides.',
      },
      {
        name: 'Draa Valley 4x4 Circuit',
        detail: 'A 3-5 day 4x4 route from Ouarzazate through the Draa Valley to M\'Hamid, crossing vast hamada (stone desert), ancient kasbahs, and oasis villages. Morocco\'s answer to the Paris-Dakar.',
      },
    ],
    bestSeason: 'October - April (summer is extremely hot: 50+ degrees C). Best conditions: November - March.',
    cost: 'Sunset camel ride: $25-50. Overnight desert camp: $50-150. Multi-day 4x4 expedition: $150-300/day. Luxury camp: $200-500/night.',
    difficulty: 'Camel rides: Easy (anyone can do it). 4x4 expeditions: Easy (you ride). Multi-day camel treks: Moderate (physical endurance needed).',
    image: '/images/hero-desert.webp',
  },
  {
    title: 'Sandboarding',
    icon: Wind,
    description:
      'The towering orange dunes of the Sahara are a natural playground for sandboarding. Erg Chebbi\'s dunes reach 150 meters in height, providing thrilling descents on fine, soft sand. A unique alternative to snowboarding.',
    spots: [
      {
        name: 'Erg Chebbi (Merzouga)',
        detail: 'Morocco\'s tallest dunes, with multiple faces offering different angles and difficulties. Most desert camps include sandboarding boards. The steep face near the main tourist entry is the most popular run.',
      },
      {
        name: 'Erg Chigaga (M\'Hamid)',
        detail: 'Bigger dunes with zero crowds. Bring your own board or arrange through a desert camp operator. The isolation makes it feel like you have the entire Sahara to yourself.',
      },
    ],
    bestSeason: 'October - April (summer is too hot). Best conditions early morning or late afternoon when sand is cooler and firmer.',
    cost: 'Usually included with desert tours ($50-150). Standalone: $15-30 with board rental.',
    difficulty: 'Easy to learn. Similar to snowboarding but slower. No experience needed. Walking back up the dune is the hard part.',
    image: '/images/hero-sahara-sunrise.webp',
  },
  {
    title: 'Paragliding',
    icon: Wind,
    description:
      'Morocco\'s diverse geography creates excellent thermals and launch conditions for paragliding. Fly over ancient kasbahs, dramatic gorges, and the meeting point of desert and mountains.',
    spots: [
      {
        name: 'Aguergour (near Marrakech)',
        detail: 'The most popular paragliding launch site near Marrakech. Atlas foothills with views of the Haouz plain and the city. Regular tandem flights available through Marrakech Tandem (established operator).',
      },
      {
        name: 'Agadir / Legzira',
        detail: 'Coastal soaring along dramatic cliffs south of Agadir. The famous red arches of Legzira Beach provide a stunning backdrop. Sea thermals create reliable lift.',
      },
      {
        name: 'Dades Valley',
        detail: 'Spectacular flying over the Valley of Roses and dramatic gorge scenery. Strong thermals in the afternoon. More suitable for experienced pilots with their own equipment.',
      },
      {
        name: 'Imi n\'Ifri (Demnate)',
        detail: 'A natural rock bridge near Demnate creates unique thermal conditions. Growing paragliding community with organized flights from the surrounding hills.',
      },
    ],
    bestSeason: 'Year-round. Best thermals: March - October. Calmest conditions: September - November.',
    cost: 'Tandem flight (20-30 min): $80-150. Full day course: $150-250. Multi-day pilot course: $500-1,000.',
    difficulty: 'Tandem flights require no experience. Solo flying requires certification.',
    image: '/images/hero-sahara-sunrise.webp',
  },
  {
    title: 'Mountain Biking',
    icon: Bike,
    description:
      'Morocco\'s diverse terrain offers exceptional mountain biking, from Atlas Mountain singletrack to desert piste riding. A growing network of trails and local guides makes the sport increasingly accessible.',
    spots: [
      {
        name: 'Atlas Mountains (Imlil/Ouirgane)',
        detail: 'Singletrack through Berber villages, across mountain passes (Tizi n\'Test, Tizi n\'Tichka), and along river valleys. Technical descents with stunning scenery. Several operators run guided trips.',
      },
      {
        name: 'Dades & Todra Gorges',
        detail: 'Ride through dramatic gorge scenery on dirt tracks and pistes. Multi-day routes connect the two gorges through remote valleys. The "Route of 1000 Kasbahs" is a classic cycling route.',
      },
      {
        name: 'Amizmiz to Imlil',
        detail: 'A classic day ride or 2-day route through the foothills of the High Atlas. Mix of tarmac and dirt with spectacular views and Berber hospitality along the way.',
      },
      {
        name: 'Anti-Atlas (Tafraoute)',
        detail: 'Remote and rugged terrain. Granite landscapes, palm-filled valleys, and ancient Berber trails create a unique biking experience. Best for adventure riders seeking isolation.',
      },
    ],
    bestSeason: 'October - May. Avoid summer heat in lower elevations. Higher altitude trails are rideable June-September.',
    cost: 'Guided day ride: $50-100. Multi-day tour: $80-150/day (guide, accommodation, meals). Bike rental: $25-50/day for a quality hardtail.',
    difficulty: 'Moderate to Advanced. Some trails suitable for fit beginners with guide.',
    image: '/images/hero-trekking.webp',
  },
  {
    title: 'Canyoning',
    icon: Waves,
    description:
      'Morocco\'s mountain gorges and hidden valleys offer exciting canyoning adventures. Rappel down waterfalls, swim through natural pools, jump off cliffs, and scramble through narrow slot canyons in spectacular settings.',
    spots: [
      {
        name: 'Akchour (near Chefchaouen)',
        detail: 'Two spectacular waterfalls in the Rif Mountains with natural pools and a canyon trail. The God\'s Bridge natural rock arch is a highlight. Full canyoning routes with rappelling available through guides in Chefchaouen.',
      },
      {
        name: 'Paradise Valley (near Agadir)',
        detail: 'A stunning canyon with natural swimming pools, small waterfalls, and palm-lined gorges. Accessible for beginners with jumping (3-10 meters), swimming, and scrambling. Very popular in summer.',
      },
      {
        name: 'Ourika Valley (Seven Waterfalls)',
        detail: 'Seven cascading falls with guided canyoning routes through pools and rock formations. Easy access from Marrakech (1 hour). The lower falls are easy; the upper ones require scrambling.',
      },
      {
        name: 'Immouzer Ida Outanane',
        detail: 'A dramatic gorge between Agadir and Essaouira with seasonal waterfalls and deep pools. Less visited than Paradise Valley and more adventurous.',
      },
    ],
    bestSeason: 'April - October (water levels are best). Paradise Valley: Year-round (best May-September).',
    cost: 'Guided canyoning trip: $40-80/person. Half-day Paradise Valley tour from Agadir: $30-50.',
    difficulty: 'Beginner to Intermediate. Swimming ability required. Some routes involve rappelling and 5-10 meter cliff jumps.',
    image: '/images/hero-todra-gorge.webp',
  },
  {
    title: 'Quad Biking',
    icon: Compass,
    description:
      'Tear through palm groves, desert landscapes, and rocky terrain on a quad bike. One of Morocco\'s most popular adrenaline activities, with tours available from most major cities. No license or experience required.',
    spots: [
      {
        name: 'Agafay Desert (near Marrakech)',
        detail: 'Rocky desert landscape 30 minutes from Marrakech. More dramatic terrain than the Palmeraie, with canyons, dry river beds, and panoramic Atlas Mountain views. Several luxury camps combine quad biking with dinner and stargazing.',
      },
      {
        name: 'Marrakech Palmeraie',
        detail: 'The most popular quad biking location. Tours run through the palm groves and surrounding desert landscape. Easy to organize on short notice from any Marrakech riad.',
      },
      {
        name: 'Merzouga Desert',
        detail: 'Quad biking on and around the Erg Chebbi dunes. More challenging terrain with sand dunes and rocky desert pistes. Often combined with sunset camel rides.',
      },
    ],
    bestSeason: 'Year-round. Cooler months (October-April) are more comfortable. Avoid midday in summer.',
    cost: '2-hour tour: $30-60. Half-day Agafay: $60-100. Full-day desert quad expedition: $100-200.',
    difficulty: 'No experience needed. Tours accommodate all levels. Minimum age typically 16.',
    image: '/images/hero-overlanding.webp',
  },
  {
    title: 'Via Ferrata',
    icon: Mountain,
    description:
      'Morocco\'s newest adventure offering combines climbing, hiking, and exposure on fixed steel rungs and cables bolted into cliff faces. A thrilling way to experience the mountains without technical climbing skills.',
    spots: [
      {
        name: 'Todra Gorge Via Ferrata',
        detail: 'A via ferrata route developed on the gorge walls, offering a unique perspective of the dramatic limestone canyon. Multiple routes vary from K2 (easy) to K4 (demanding). Spectacular exposure above the gorge floor.',
      },
      {
        name: 'Tazaroualt (Anti-Atlas)',
        detail: 'Newer via ferrata routes in the Anti-Atlas mountains. Less visited and more adventurous than Todra. Combine with trekking and bouldering in the Tafraoute area.',
      },
    ],
    bestSeason: 'October - April. Avoid summer heat on exposed rock faces.',
    cost: '$50-100/person with guide and equipment. Half-day activity.',
    difficulty: 'Moderate. No climbing experience needed but a reasonable head for heights is required. Harness and helmet provided.',
    image: '/images/hero-climbing.webp',
  },
  {
    title: 'Hot Air Ballooning',
    icon: Sun,
    description:
      'Floating silently over the Moroccan landscape at sunrise is one of the country\'s most magical experiences. Balloon flights operate near Marrakech, offering views of the Atlas Mountains, Agafay Desert, and the palm groves.',
    spots: [
      {
        name: 'Marrakech (Ciel d\'Afrique)',
        detail: 'Morocco\'s original balloon operator, flying since 1990. Sunrise flights over the Jbilet hills and palm groves with Atlas Mountain panoramas. Flights last approximately 1 hour, followed by a traditional Berber breakfast.',
      },
      {
        name: 'Agafay Desert',
        detail: 'Some operators launch from the rocky desert west of Marrakech, providing dramatic views over the barren Agafay landscape with the snow-capped Atlas as backdrop. A more dramatic landscape than the palm groves.',
      },
    ],
    bestSeason: 'Year-round (weather permitting). Best conditions: October - May with clear skies and calm winds.',
    cost: '$150-250 per person. Includes hotel pickup, flight (approx. 1 hour), and breakfast. Book 2-3 days ahead in peak season.',
    difficulty: 'Easy. No physical fitness required. Suitable for all ages including children.',
    image: '/images/hero-marrakech-koutoubia.webp',
  },
  {
    title: 'Skiing & Snowboarding',
    icon: Snowflake,
    description:
      'Yes, you can ski in Africa. Oukaimeden, at 2,600 meters in the High Atlas just 75 kilometers from Marrakech, is Africa\'s highest ski resort. The season is short and conditions are variable, but the novelty factor is unbeatable.',
    spots: [
      {
        name: 'Oukaimeden (2,600m)',
        detail: 'Africa\'s highest ski resort with 7 runs, a chairlift, and several T-bars. The terrain is mostly beginner to intermediate. Ski rental is available on-site. Snow cover varies wildly; check conditions before going.',
      },
      {
        name: 'Michlifen (near Ifrane)',
        detail: 'A smaller ski area in the Middle Atlas near the "Switzerland of Morocco." Cedar forests surround the slopes. More reliable snow than Oukaimeden in some years. Very basic facilities.',
      },
    ],
    bestSeason: 'January - March (dependent on snowfall). Snow is not guaranteed; check local reports.',
    cost: 'Lift pass: $10-20/day. Ski rental: $15-25/day. A fraction of European ski resort prices.',
    difficulty: 'Beginner to Intermediate runs. No challenging terrain. The experience is more about novelty than serious skiing.',
    image: '/images/hero-atlas.webp',
  },
  {
    title: 'White Water Rafting',
    icon: Waves,
    description:
      'Morocco\'s mountain rivers offer seasonal white water rafting, particularly during the spring snowmelt. While not on the scale of Nepal or Colorado, the Atlas rivers provide fun Grade II-III rapids in spectacular mountain settings.',
    spots: [
      {
        name: 'Ourika River',
        detail: 'Accessible from Marrakech, the Ourika offers gentle rapids (Grade II) in spring. Ideal for beginners and families. Half-day trips combine rafting with lunch at a riverside restaurant.',
      },
      {
        name: 'Ahansal River',
        detail: 'The best white water in Morocco. Grade III-IV rapids through the Cathedral Canyon of Ahansal near Azilal. Requires a guide from a specialist operator. Multi-day trips available.',
      },
      {
        name: 'Oum er Rbia (near Khenifra)',
        detail: 'Morocco\'s longest river offers Grade II-III rapids in its upper stretches. The Aguelmam Azigza lake area provides beautiful scenery. Spring is the only reliable season.',
      },
    ],
    bestSeason: 'March - May (spring snowmelt). Water levels are too low in summer and autumn for most rivers.',
    cost: 'Half-day rafting: $40-80. Full-day with transport from Marrakech: $80-150.',
    difficulty: 'Beginner to Intermediate. Grade II-III rapids. Swimming ability required.',
    image: '/images/hero-todra-gorge.webp',
  },
  {
    title: 'Horseback Riding',
    icon: Compass,
    description:
      'Morocco has a deep equestrian tradition, and horseback riding is one of the most atmospheric ways to experience the landscape. Ride through olive groves, along Atlantic beaches, or across the desert on Barb and Arab-Barb horses.',
    spots: [
      {
        name: 'Essaouira Beach',
        detail: 'Gallop along miles of empty Atlantic beach at sunset. Several stables near the town offer 1-3 hour rides. Ranch de Diabat and Equi Evasion are established operators.',
      },
      {
        name: 'Atlas Mountains (Ouirgane)',
        detail: 'Multi-day horse treks through the foothills of the High Atlas. Ride through Berber villages, across rivers, and over mountain passes. La Roseraie hotel organizes excellent rides.',
      },
      {
        name: 'Agafay Desert',
        detail: 'Desert horseback riding with Atlas Mountain views. A dramatic alternative to camel rides. Several stables operate from luxury camps in the Agafay.',
      },
    ],
    bestSeason: 'Year-round. Autumn and spring are most comfortable. Beach rides are beautiful at any time.',
    cost: '1-hour ride: $20-40. Half-day with lunch: $60-100. Multi-day trek: $100-200/day.',
    difficulty: 'Beginner to Advanced. Most operators offer gentle horses for novices. Multi-day treks require basic riding ability.',
    image: '/images/hero-overlanding.webp',
  },
  {
    title: 'Windsurfing',
    icon: Wind,
    description:
      'Essaouira is one of the windiest cities in the world, making it a legendary windsurfing destination. Consistent trade winds from April to September create ideal conditions for intermediate to advanced sailors.',
    spots: [
      {
        name: 'Essaouira Main Beach',
        detail: 'Strong side-shore winds and flat-to-choppy water. Multiple rental shops and schools along the beachfront. Moulay Bouzerktoune (25km south) offers wave sailing for experts.',
      },
      {
        name: 'Dakhla Lagoon',
        detail: 'Flat water and strong thermal winds make Dakhla perfect for speed sailing and freestyle. Less crowded than the kite spots. Several centers offer equipment.',
      },
    ],
    bestSeason: 'Essaouira: April - September (strongest winds June-August). Dakhla: Year-round.',
    cost: 'Equipment rental: $40-60/day. Lessons: $50-80/session. Week course: $250-400.',
    difficulty: 'Intermediate to Advanced in Essaouira (strong winds). Dakhla is more forgiving for beginners.',
    image: '/images/hero-water-sports.webp',
  },
  {
    title: 'Coasteering & Cliff Jumping',
    icon: Waves,
    description:
      'Morocco\'s rugged Atlantic coastline offers natural coasteering routes where you can combine cliff jumping, rock scrambling, and swimming through sea caves. An emerging activity that is growing in popularity.',
    spots: [
      {
        name: 'Legzira (near Sidi Ifni)',
        detail: 'Dramatic red sandstone cliffs and natural arches. Jump from 3-8 meter ledges into deep pools. The coastline is raw and beautiful. Best explored with a local guide.',
      },
      {
        name: 'Paradise Valley (inland)',
        detail: 'Natural rock pools with cliff jumps from 3-10 meters. The most popular jumping spot in Morocco, especially with Moroccan youth in summer. Test depth before jumping.',
      },
    ],
    bestSeason: 'May - October (warm water). Paradise Valley is best June - September.',
    cost: 'Guided coasteering: $40-70/person. Paradise Valley is free (transport extra).',
    difficulty: 'Moderate. Swimming ability essential. Heights from 3-10 meters.',
    image: '/images/hero-todra-gorge.webp',
  },
  {
    title: 'Stargazing & Astro-Tourism',
    icon: Star,
    description:
      'The Sahara Desert offers some of the darkest skies in the world. Far from any light pollution, the Milky Way stretches across the sky in breathtaking detail. Luxury desert camps increasingly offer telescopes and guided stargazing sessions.',
    spots: [
      {
        name: 'Merzouga / Erg Chebbi',
        detail: 'Sleep under the stars at a desert camp. Several operators (Luxury Desert Camps Merzouga, Kam Kam Dunes) include guided stargazing with telescopes. The silence and darkness are absolute.',
      },
      {
        name: 'M\'Hamid / Erg Chigaga',
        detail: 'Even less light pollution than Merzouga. Multi-day camel treks into the dunes with overnight bivouacs offer the ultimate stargazing experience. Zero artificial light.',
      },
      {
        name: 'Zagora',
        detail: 'The gateway to the desert. Some hotels and camps on the outskirts offer excellent sky conditions. The famous road sign "Timbuktu 52 Days" reminds you how deep into the desert you are.',
      },
    ],
    bestSeason: 'Year-round (clear skies most nights). New moon periods are best. October - March for cooler nights.',
    cost: 'Desert camp with stargazing: $50-200/night (budget to luxury). Telescope sessions: Often included.',
    difficulty: 'Easy. No physical activity required. Just look up.',
    image: '/images/hero-stargazing.webp',
  },
];

/* ─── Season Matrix ─── */

const seasonMatrix = [
  { activity: 'Surfing (Atlantic Coast)', jan: true, feb: true, mar: true, apr: true, may: false, jun: false, jul: false, aug: false, sep: true, oct: true, nov: true, dec: true },
  { activity: 'High Atlas Trekking', jan: false, feb: false, mar: false, apr: true, may: true, jun: true, jul: true, aug: true, sep: true, oct: true, nov: true, dec: false },
  { activity: 'Toubkal Summit', jan: false, feb: false, mar: false, apr: false, may: false, jun: true, jul: true, aug: true, sep: true, oct: false, nov: false, dec: false },
  { activity: 'Rock Climbing (Todra)', jan: true, feb: true, mar: true, apr: true, may: true, jun: false, jul: false, aug: false, sep: false, oct: true, nov: true, dec: true },
  { activity: 'Kitesurfing (Dakhla)', jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sep: true, oct: true, nov: true, dec: true },
  { activity: 'Desert Camel Trekking', jan: true, feb: true, mar: true, apr: true, may: false, jun: false, jul: false, aug: false, sep: false, oct: true, nov: true, dec: true },
  { activity: 'Sandboarding', jan: true, feb: true, mar: true, apr: true, may: false, jun: false, jul: false, aug: false, sep: false, oct: true, nov: true, dec: true },
  { activity: 'Paragliding', jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sep: true, oct: true, nov: true, dec: true },
  { activity: 'Mountain Biking', jan: true, feb: true, mar: true, apr: true, may: true, jun: false, jul: false, aug: false, sep: false, oct: true, nov: true, dec: true },
  { activity: 'Canyoning', jan: false, feb: false, mar: false, apr: true, may: true, jun: true, jul: true, aug: true, sep: true, oct: true, nov: false, dec: false },
  { activity: 'Hot Air Ballooning', jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sep: true, oct: true, nov: true, dec: true },
  { activity: 'Skiing (Oukaimeden)', jan: true, feb: true, mar: true, apr: false, may: false, jun: false, jul: false, aug: false, sep: false, oct: false, nov: false, dec: false },
  { activity: 'White Water Rafting', jan: false, feb: false, mar: true, apr: true, may: true, jun: false, jul: false, aug: false, sep: false, oct: false, nov: false, dec: false },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/* ─── Safety & Guide Requirements ─── */

const safetyTips = [
  {
    title: 'Hire Certified Guides',
    description: 'For trekking above 3,000m, rock climbing, and canyoning, always use certified guides. The Moroccan government requires licensed mountain guides for Toubkal and other major peaks. Ask to see credentials.',
  },
  {
    title: 'Altitude Awareness',
    description: 'Toubkal (4,167m) and M\'Goun (4,071m) are high enough for altitude sickness. Acclimatize properly: spend a night at the refuge, ascend slowly, stay hydrated, and descend immediately if symptoms worsen.',
  },
  {
    title: 'Desert Precautions',
    description: 'Carry at least 3 liters of water per person per day in the desert. Use high-SPF sunscreen and cover exposed skin. Never venture into the Sahara without a guide or GPS. Sandstorms can occur without warning.',
  },
  {
    title: 'Ocean Safety',
    description: 'Morocco\'s Atlantic coast has strong currents and rips. Surf only at established breaks and heed local advice. Taghazout and Imsouane are generally safer than unmarked beaches. Wear a wetsuit (3/2mm) from November to April.',
  },
  {
    title: 'Travel Insurance',
    description: 'Ensure your travel insurance covers adventure sports specifically. Many standard policies exclude rock climbing, paragliding, and skiing. World Nomads and SafetyWing are popular choices that cover adventure activities.',
  },
  {
    title: 'Emergency Services',
    description: 'Morocco\'s emergency number is 19 (police) or 15 (ambulance). Mountain rescue exists but response times can be slow in remote areas. Carry a basic first aid kit and know the location of the nearest hospital.',
  },
];

/* ─── Itineraries ─── */

const surfTrekItinerary = [
  { day: 1, title: 'Arrive in Agadir/Taghazout', desc: 'Settle into a surf camp in Taghazout. Afternoon beach session to assess conditions and warm up. Sunset dinner at one of the village restaurants.' },
  { day: 2, title: 'Surf Day - Taghazout', desc: 'Full day surfing. Morning session at Panorama or Hash Point. Afternoon at Anchor Point or Banana Beach depending on conditions and your level.' },
  { day: 3, title: 'Surf + Paradise Valley', desc: 'Morning surf session. Afternoon canyoning trip to Paradise Valley for swimming in natural pools and cliff jumping. Return for sunset.' },
  { day: 4, title: 'Transfer to Imlil', desc: 'Drive to the Atlas Mountains (4 hours). Afternoon arrival in Imlil (1,740m). Settle into a mountain gite. Evening briefing for Toubkal trek.' },
  { day: 5, title: 'Trek to Toubkal Refuge', desc: 'Trek from Imlil through the Mizane Valley to the Refuge du Toubkal (3,207m). 5-6 hours of trekking through dramatic mountain scenery.' },
  { day: 6, title: 'Summit Toubkal (4,167m)', desc: 'Pre-dawn start (4am) for the summit. 3-4 hours up, 2-3 hours down. Descend to Imlil by afternoon. Celebrate with a tagine feast and hammam visit.' },
  { day: 7, title: 'Return to Coast/Depart', desc: 'Transfer back to Agadir for departure or extend with more surf days. Optional stop at Imsouane for one final session at the legendary bay.' },
];

const fullAdventureItinerary = [
  { day: 1, title: 'Arrive Marrakech', desc: 'Explore the medina and prepare gear. Evening quad bike tour through the Agafay desert at sunset. Dinner under the stars at a desert camp.' },
  { day: 2, title: 'Hot Air Balloon + Atlas', desc: 'Pre-dawn hot air balloon flight over the palm groves. Drive to Imlil. Afternoon mountain biking through Berber villages. Evening at mountain lodge.' },
  { day: 3, title: 'Toubkal Trek Day 1', desc: 'Trek to the Toubkal Refuge (3,207m) via the Mizane Valley. Acclimatize at altitude. Evening meal and stargazing at the refuge.' },
  { day: 4, title: 'Summit & Transfer', desc: 'Pre-dawn Toubkal summit (4,167m). Descend to Imlil. Afternoon transfer toward Dades Gorge. Evening in gorge accommodation.' },
  { day: 5, title: 'Todra Gorge Climbing', desc: 'Full day rock climbing in Todra Gorge. Routes from 4a to 7a with a guide. Optional via ferrata in the afternoon. Evening in gorge accommodation.' },
  { day: 6, title: 'Sahara Desert', desc: 'Drive to Merzouga (3 hours). Afternoon sandboarding on Erg Chebbi dunes. Sunset camel ride into the desert. Night in luxury desert camp with stargazing.' },
  { day: 7, title: 'Desert Adventures', desc: 'Sunrise from the dune crest. Morning quad biking across the hamada. Afternoon 4x4 tour to Khamlia village for Gnawa music. Second night at camp.' },
  { day: 8, title: 'Transfer to Coast', desc: 'Long drive to Essaouira (10 hours) or fly from Errachidia to Agadir. Settle into surf accommodation in Taghazout.' },
  { day: 9, title: 'Surf + Canyoning', desc: 'Morning surf at Taghazout. Afternoon trip to Paradise Valley for swimming and canyoning. Evening seafood dinner on the beach.' },
  { day: 10, title: 'Final Surf + Departure', desc: 'Final morning surf session at Anchor Point or Imsouane bay. Transfer to Agadir airport for departure.' },
];

const beginnerItinerary = [
  { day: 1, title: 'Arrive Marrakech', desc: 'Check in and explore the medina. Evening hot air balloon flight (or schedule for dawn of day 2). Dinner at a rooftop restaurant overlooking Jemaa el-Fnaa.' },
  { day: 2, title: 'Ourika Valley Day Hike', desc: 'Easy day hike to the Setti Fatma waterfalls in the Ourika Valley. Lunch at a riverside restaurant. Return to Marrakech by evening. Suitable for all fitness levels.' },
  { day: 3, title: 'Quad Biking & Camel Ride', desc: 'Morning quad biking in the Agafay Desert. Afternoon sunset camel ride in the Palmeraie. No experience required for either activity.' },
  { day: 4, title: 'Transfer to Essaouira', desc: 'Drive to Essaouira (3 hours). Afternoon beginner surf lesson on the main beach. Walk the medina and explore the ramparts.' },
  { day: 5, title: 'Essaouira Activities', desc: 'Morning horseback ride along the beach. Afternoon windsurfing or kitesurfing taster lesson. Evening exploring the harbor and seafood market.' },
];

export default function AdventurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/hero-trekking.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Adventure</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Flame className="w-4 h-4 text-orange-400" />
            20 Adventure Activities
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Adventure Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Surf Atlantic waves, summit North Africa&apos;s highest peak, climb limestone
            gorges, ski in the Atlas, balloon over Marrakech, and sandboard the Sahara &mdash;
            all in one extraordinary country.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Quick Stats */}
      <section className="py-10 gradient-moroccan">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">20+</div>
              <div className="text-sm text-white/70 mt-1">Adventure Activities</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">4,167m</div>
              <div className="text-sm text-white/70 mt-1">Jebel Toubkal Summit</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">400+</div>
              <div className="text-sm text-white/70 mt-1">Climbing Routes (Todra)</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">365</div>
              <div className="text-sm text-white/70 mt-1">Days of Wind (Dakhla)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco: The World&apos;s Most Versatile Adventure Playground
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco packs an astonishing variety of adventure terrain into a country smaller
                than Texas. Within a few hours&apos; drive, you can transition from world-class
                Atlantic surf breaks to the 4,000-meter peaks of the High Atlas, through dramatic
                limestone gorges, and into the vast golden dunes of the Sahara desert. Add the
                lush Rif Mountains in the north, the surreal granite landscapes of the Anti-Atlas
                in the south, and 3,500 kilometers of Atlantic coastline, and you have a country
                that rivals any on earth for outdoor adventure diversity.
              </p>
              <p>
                The adventure infrastructure has grown rapidly in recent years. Professional surf
                camps line the coast from Taghazout to Essaouira. Certified mountain guides lead
                treks up Toubkal and through the M&apos;Goun massif. Over 400 bolted climbing routes
                in the Todra Gorge attract climbers from around the world. The Dakhla lagoon
                has become one of the planet&apos;s top five kitesurfing destinations. And you can
                even ski in Africa at Oukaimeden, just 75 kilometers from Marrakech.
              </p>
              <p>
                Whether you are a hardcore athlete seeking world-class challenges or a casual
                adventurer looking for your first taste of outdoor sports, Morocco delivers
                exceptional experiences at a fraction of the cost of comparable destinations.
                A week of guided adventure here costs less than many single-day experiences in
                Europe or North America. A full day of rock climbing with a guide in Todra Gorge
                costs $50-80 &mdash; the same experience in Chamonix or Yosemite would be $300+.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4 text-center">
            Jump to Activity
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {adventureActivities.map((activity) => (
              <a
                key={activity.title}
                href={`#${activity.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="text-xs px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border-light)] text-[var(--text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {activity.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Top 20 Adventure Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Detailed guides to Morocco&apos;s best adventure sports, with locations, seasons, costs,
            and difficulty ratings.
          </p>

          <div className="space-y-12">
            {adventureActivities.map((activity, index) => (
              <div key={activity.title} id={activity.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-24">
                <div className={`card-moroccan overflow-hidden flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-2/5 relative h-64 md:h-auto min-h-[300px]">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
                      <activity.icon className="w-4 h-4" />
                      {activity.title}
                    </div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8">
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-5">{activity.description}</p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                      <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-1">
                          <Calendar className="w-3 h-3" /> Best Season
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{activity.bestSeason}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1">
                          <DollarSign className="w-3 h-3" /> Cost
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{activity.cost}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-green)] uppercase tracking-wider mb-1">
                          <TrendingUp className="w-3 h-3" /> Difficulty
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{activity.difficulty}</p>
                      </div>
                    </div>

                    {/* Best Spots */}
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3">Best Spots</h4>
                    <div className="space-y-3">
                      {activity.spots.map((spot) => (
                        <div key={spot.name} className="border-l-2 border-[var(--color-primary)]/30 pl-3">
                          <h5 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-[var(--color-primary)]" />{spot.name}
                          </h5>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{spot.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Season Matrix */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <ThermometerSun className="w-4 h-4" />
              <span>Plan by Season</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Seasons for Each Activity
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Green indicates the recommended season. Plan your trip around the activities
              that matter most to you.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[800px]">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)] sticky left-0 bg-[var(--surface-muted)] z-10">Activity</th>
                    {months.map((m) => (
                      <th key={m} className="px-2 py-3 text-xs font-semibold text-[var(--text-secondary)] text-center w-12">{m}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {seasonMatrix.map((row) => (
                    <tr key={row.activity} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                      <td className="px-4 py-2 text-sm font-medium text-[var(--text-primary)] sticky left-0 bg-[var(--surface)] z-10">{row.activity}</td>
                      {[row.jan, row.feb, row.mar, row.apr, row.may, row.jun, row.jul, row.aug, row.sep, row.oct, row.nov, row.dec].map((active, i) => (
                        <td key={i} className="px-2 py-2 text-center">
                          <div className={`w-6 h-6 rounded-full mx-auto flex items-center justify-center ${active ? 'bg-green-500/20' : 'bg-[var(--surface-muted)]'}`}>
                            {active && <CheckCircle className="w-3.5 h-3.5 text-green-600" />}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Guide Requirements */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Shield className="w-4 h-4" />
              <span>Stay Safe</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Safety & Guide Requirements
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is generally safe for adventure sports, but preparation is essential.
              Follow these guidelines for a safe trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                  <AlertTriangle className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{tip.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>

          {/* Guide requirement callout */}
          <div className="mt-8 card-moroccan p-6 border-l-4 border-l-[var(--color-secondary)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-secondary)]/10 shrink-0">
                <CheckCircle className="w-5 h-5 text-[var(--color-secondary)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">When You Need a Licensed Guide</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  Morocco requires licensed guides for certain activities. Here is the breakdown:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="text-sm">
                    <span className="font-bold text-[var(--text-primary)]">Required by law:</span>
                    <span className="text-[var(--text-secondary)]"> High Atlas trekking above 3,000m, Toubkal, M&apos;Goun</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-[var(--text-primary)]">Strongly recommended:</span>
                    <span className="text-[var(--text-secondary)]"> Rock climbing, canyoning, desert treks, Rif trekking</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-[var(--text-primary)]">Optional but helpful:</span>
                    <span className="text-[var(--text-secondary)]"> Mountain biking, Anti-Atlas trekking, paragliding sites</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-[var(--text-primary)]">Not needed:</span>
                    <span className="text-[var(--text-secondary)]"> Surfing, quad biking tours, hot air ballooning, horseback riding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itineraries by Difficulty */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Compass className="w-4 h-4" />
              <span>Plan Your Adventure</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Adventure Itineraries by Difficulty
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Three itineraries for three types of adventurers. Choose your level and start planning.
            </p>
          </div>

          {/* Beginner: 5-Day */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-700 text-sm font-bold">Beginner</span>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                5-Day Gentle Adventure (No experience needed)
              </h3>
            </div>
            <div className="space-y-3">
              {beginnerItinerary.map((day) => (
                <div key={day.day} className="card-moroccan p-5 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <span className="text-green-700 font-bold text-xs">Day {day.day}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] mb-1">{day.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Intermediate: 7-Day Surf + Trek */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-bold">Intermediate</span>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                7-Day Surf & Trekking (Good fitness required)
              </h3>
            </div>
            <div className="space-y-3">
              {surfTrekItinerary.map((day) => (
                <div key={day.day} className="card-moroccan p-5 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <span className="text-[var(--color-accent)] font-bold text-xs">Day {day.day}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] mb-1">{day.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced: 10-Day Full Adventure */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold">Advanced</span>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                10-Day Full Adventure (Experienced adventurers)
              </h3>
            </div>
            <div className="space-y-3">
              {fullAdventureItinerary.map((day) => (
                <div key={day.day} className="card-moroccan p-5 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-moroccan flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Day {day.day}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] mb-1">{day.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         ADVENTURE GALLERY
         ===================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A1814' }}>
              Adventure Activities Gallery
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco offers an incredible range of outdoor thrills -- from mountain summits to desert circuits.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/hero-paragliding.webp', alt: 'Paragliding over the dramatic landscapes of Morocco with mountain and valley views' },
              { src: '/images/hero-zip-line.webp', alt: 'Zip-lining across a canyon in the Atlas Mountains of Morocco' },
              { src: '/images/hero-go-kart.webp', alt: 'Go-karting on a professional circuit track in Marrakech' },
              { src: '/images/hero-climbing.webp', alt: 'Rock climbing on the limestone cliffs of the Todra Gorge' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-[3/4] group">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-2 left-2 right-2 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <Mountain className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready for Adventure?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Morocco is waiting to challenge and inspire you. From beginner-friendly beach
            activities to world-class mountaineering, your adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Destinations
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Clock className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

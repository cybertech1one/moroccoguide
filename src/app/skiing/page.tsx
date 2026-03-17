import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Snowflake,
  Mountain,
  Star,
  Sun,
  Calendar,
  MapPin,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Shield,
  Compass,
  Thermometer,
  Wind,
  Clock,
  Users,
  Car,
  Info,
  Lightbulb,
  ArrowRight,
  TreePine,
  Sparkles,
  Camera,
  Footprints,
  TrendingUp,
  Ticket,
  Backpack,
  CloudSnow,
  MountainSnow,
  Glasses,
  Layers,
  Route,
  Gem,
  Globe,
  Phone,
  Navigation,
  CircleDollarSign,
  Award,
  Waves,
  Heart,
  BookOpen,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Skiing & Winter Sports in Morocco | Oukaimeden, Michlifen, Atlas Mountains Guide',
  description:
    'Complete guide to skiing and winter sports in Morocco. Oukaimeden ski resort near Marrakech, Michlifen near Ifrane, Jebel Bou Iblane backcountry, snowshoeing, cross-country skiing, equipment rental, season guide December-March, and practical tips. Africa\'s surprising winter playground.',
  keywords: [
    'Morocco skiing',
    'Oukaimeden ski resort',
    'Michlifen ski resort',
    'Ifrane skiing',
    'Atlas Mountains skiing',
    'Morocco winter sports',
    'Morocco snowboarding',
    'Morocco snowshoeing',
    'Jebel Bou Iblane skiing',
    'Morocco ski season',
    'Morocco snow',
    'Africa skiing',
    'Morocco cross-country skiing',
    'ski Morocco Marrakech',
    'Morocco ski pass',
    'Morocco ski rental',
    'Toubkal snowshoeing',
    'Morocco winter trekking',
  ],
  openGraph: {
    title: 'Skiing & Winter Sports in Morocco | Africa\'s Winter Playground',
    description:
      'Yes, you can ski in Morocco. Complete guide to Oukaimeden, Michlifen, backcountry skiing, snowshoeing, and winter sports across the Atlas Mountains. Season, costs, and practical tips.',
    url: 'https://citytoursmorocco.com/skiing',
    images: [
      {
        url: '/images/hero-skiing-morocco.webp',
        width: 1200,
        height: 630,
        alt: 'Skier on the slopes of Oukaimeden with the Atlas Mountains in the background, Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/skiing' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      '@id': 'https://citytoursmorocco.com/skiing#guide',
      name: 'Skiing & Winter Sports in Morocco',
      description:
        'Complete guide to skiing, snowboarding, snowshoeing, and winter sports in Morocco. Covering Oukaimeden, Michlifen, Jebel Bou Iblane, and Atlas Mountains winter activities.',
      url: 'https://citytoursmorocco.com/skiing',
      touristType: ['Skiing', 'Snowboarding', 'Snowshoeing', 'Winter sports', 'Cross-country skiing'],
      image: '/images/hero-skiing-morocco.webp',
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
          name: 'Can you really ski in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Morocco has several ski resorts in the Atlas Mountains. Oukaimeden, just 75 km from Marrakech at 2,600-3,200m altitude, is the primary resort with 5 lifts and 10 runs. Michlifen near Ifrane in the Middle Atlas offers additional skiing. The season runs from December to March, with the best snow conditions typically in January and February.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does skiing cost in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Skiing in Morocco is extremely affordable compared to European resorts. A day lift pass at Oukaimeden costs 150-200 MAD (roughly 15-20 USD). Equipment rental is 200-300 MAD per day. A ski lesson costs around 200-400 MAD. You can enjoy a full day of skiing including transport from Marrakech, lift pass, and rental gear for under 100 USD.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best month for skiing in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'January and February typically offer the most reliable snow coverage at both Oukaimeden and Michlifen. December can be hit or miss depending on early season snowfall. March sometimes extends the season at higher elevations, but conditions become increasingly unreliable. Always check local snow reports before planning a trip.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you ski and visit Marrakech on the same trip?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Oukaimeden is just 75 km (about 1.5 hours by car) from Marrakech. You can spend the morning skiing and be back in Marrakech for a late lunch in the medina. This combination of winter sports and North African culture is one of Morocco\'s most unique travel experiences. Some visitors even manage to ski in the morning and reach the Atlantic coast by afternoon.',
          },
        },
      ],
    },
  ],
};

/* ===================================================================
   SKI RESORT DATA
   =================================================================== */

interface SkiResort {
  name: string;
  location: string;
  altitude: string;
  lifts: number;
  runs: number;
  liftPass: string;
  rentalCost: string;
  season: string;
  skiableArea: string;
  description: string;
  highlights: string[];
  access: string;
  accommodation: string;
  dining: string;
  suitableFor: string[];
  snowReliability: string;
}

const skiResorts: SkiResort[] = [
  {
    name: 'Oukaimeden',
    location: 'High Atlas, 75 km south of Marrakech',
    altitude: '2,600m base - 3,258m summit (Jebel Oukaimeden)',
    lifts: 5,
    runs: 10,
    liftPass: '150-200 MAD/day (approx. $15-20 USD)',
    rentalCost: '200-300 MAD/day for full ski or snowboard set',
    season: 'December to March (peak: January-February)',
    skiableArea: 'Approximately 300 hectares of skiable terrain',
    description:
      'Oukaimeden is Morocco\'s premier ski resort and the highest ski area in Africa. Nestled in the High Atlas Mountains at 2,600 meters, it sits in a natural bowl that collects snow from Atlantic weather systems crossing the mountains. The resort has been operating since the 1930s when the French protectorate built the first ski infrastructure here. Today it features 5 lifts including a chairlift and several T-bars, serving around 10 marked runs that range from gentle beginner slopes to more challenging intermediate terrain. The setting is spectacular: on clear days you can see from the snow-covered peaks all the way to the haze above Marrakech on the plains below. The resort has a unique atmosphere where Moroccan families, Marrakech weekenders, and international visitors mix on slopes that would feel familiar to any European skier, albeit with notably less infrastructure. The village at the base has several cafes, equipment rental shops, and a handful of hotels. Ancient petroglyphs (rock carvings dating back thousands of years) dot the landscape around the resort, adding a layer of historical depth absent from any Alpine resort.',
    highlights: [
      'Highest ski resort in Africa at 3,258m summit',
      'Just 75 km from Marrakech (1.5 hours drive)',
      'Affordable lift passes at 150-200 MAD/day',
      'Ancient petroglyphs scattered around the resort',
      'Spectacular Atlas Mountain panoramas',
      'Operating since the 1930s (French colonial era)',
      'Natural snow bowl that collects Atlantic weather systems',
      'Mix of beginner and intermediate terrain',
      'Several cafes and restaurants at the base',
      'Ski school with French and Arabic-speaking instructors',
    ],
    access:
      'From Marrakech: 75 km south via the S513 road through the Ourika Valley. The drive takes approximately 1.5 hours via paved road, though the final section is winding mountain road. Grand taxis from Marrakech can be hired for the day (500-800 MAD round trip). Several tour operators in Marrakech offer day trips including transport, equipment, and lift pass. In winter, snow chains may be required for the final stretch, and the road can occasionally close in heavy snowfall.',
    accommodation:
      'Hotel Chez JuJu (the classic resort hotel, from 400 MAD/night). CAF Refuge (Club Alpin Francais, from 150 MAD/night for members). A handful of smaller guesthouses in the village (200-500 MAD/night). Most visitors stay in Marrakech and day-trip to the resort. For multi-day stays, booking in advance during peak weekends (January-February) is advisable.',
    dining:
      'Several cafes at the base serve Moroccan staples: tagine, harira soup, grilled meats, and mint tea. Chez JuJu has a full restaurant. Prices are reasonable (50-120 MAD for a meal). There are no fine-dining options; the atmosphere is casual and hearty.',
    suitableFor: ['Beginners', 'Intermediate skiers', 'Families', 'Day trippers from Marrakech', 'Snowboarders', 'Cultural travelers'],
    snowReliability:
      'Variable. The resort relies entirely on natural snow from Atlantic weather systems. Good years see consistent coverage from mid-December through March with base depths of 30-80 cm. Poor years may have only intermittent coverage with weeks of bare ground between storms. There is no artificial snowmaking. January and February are the most reliable months. The north-facing aspect and high altitude help preserve snow once it falls. Always check local conditions before making the trip.',
  },
  {
    name: 'Michlifen',
    location: 'Middle Atlas, near Ifrane (18 km)',
    altitude: '1,800m base - 2,036m summit (Jebel Michlifen)',
    lifts: 3,
    runs: 5,
    liftPass: '100-150 MAD/day (approx. $10-15 USD)',
    rentalCost: '150-250 MAD/day for basic ski equipment',
    season: 'December to February (shorter, less reliable than Oukaimeden)',
    skiableArea: 'Approximately 50 hectares of skiable terrain',
    description:
      'Michlifen is Morocco\'s second ski area, located in the Middle Atlas Mountains near the town of Ifrane, sometimes called "Morocco\'s Switzerland" for its European-style architecture and cedar forests. The resort sits on Jebel Michlifen, a dormant volcanic crater that creates a natural amphitheater for skiing. At a lower altitude than Oukaimeden (peaking at 2,036m versus 3,258m), Michlifen receives less snow and has a shorter, less reliable season. The infrastructure is more basic, with just a few drag lifts serving gentle slopes. However, the setting is beautiful: Barbary macaque monkeys inhabit the surrounding cedar forests, and the nearby town of Ifrane offers a surprisingly Alpine atmosphere with its red-roofed chalets and manicured gardens. Michlifen is particularly popular with families from Fes and Meknes (both about 1.5-2 hours away) for weekend snow days. Cross-country skiing through the surrounding Middle Atlas cedar forests is arguably a bigger draw than the downhill skiing here, offering peaceful routes through pristine forest populated by Barbary macaques.',
    highlights: [
      'Volcanic crater setting (natural amphitheater)',
      'Near Ifrane, "Morocco\'s Switzerland"',
      'Cedar forests with Barbary macaque monkeys',
      'Popular with families from Fes and Meknes',
      'Cross-country skiing through cedar forests',
      'Most affordable skiing in Morocco',
      'Gentle slopes ideal for beginners and children',
      'Michlifen Ifrane Suites & Spa luxury hotel nearby',
    ],
    access:
      'From Fes: approximately 80 km south (1.5 hours drive) via Ifrane. From Meknes: approximately 70 km (1.5 hours). From Marrakech: approximately 450 km (5-6 hours, not practical for a day trip). The road from Ifrane to Michlifen is paved but can require chains in winter. Ifrane itself is well-connected by road from northern Morocco.',
    accommodation:
      'Michlifen Ifrane Suites & Spa (luxury, from 2,000 MAD/night). Hotels in Ifrane town (18 km away) from 300-800 MAD/night. Ifrane has a good range of accommodation from budget to upscale. Azrou (30 km) offers cheaper options from 150 MAD/night.',
    dining:
      'Limited facilities at the resort itself (basic snack stands). Ifrane town has a range of restaurants including Moroccan, French, and pizza. The Michlifen resort hotel has upscale dining. Street food vendors at the ski area sell roasted corn, hot tea, and snacks on busy weekends.',
    suitableFor: ['Beginners', 'Children', 'Families from Fes/Meknes', 'Cross-country skiers', 'Nature lovers', 'Those combining with Ifrane visit'],
    snowReliability:
      'Less reliable than Oukaimeden due to lower altitude. Good snow coverage is possible from December to February, but the season is shorter and more dependent on individual storms. Some winters see very little snow. The volcanic crater shape helps retain snow when it falls. Cross-country routes in the forests may have coverage even when the resort slopes are thin.',
  },
  {
    name: 'Jebel Bou Iblane',
    location: 'Middle Atlas, near Taza (80 km south)',
    altitude: '2,000m base area - 3,190m summit',
    lifts: 1,
    runs: 2,
    liftPass: '50-100 MAD/day (when operational)',
    rentalCost: 'Very limited rental available; bring your own equipment',
    season: 'January to February (very short, snow dependent)',
    skiableArea: 'Backcountry; no formally groomed area',
    description:
      'Jebel Bou Iblane is Morocco\'s most remote and least developed ski destination, and for adventurous skiers it offers the most exciting potential. Rising to 3,190 meters in the eastern Middle Atlas near Taza, Bou Iblane receives heavy snowfall from Mediterranean weather systems that the more western resorts miss. The mountain has a single old drag lift that operates intermittently (frequently broken down), but the real appeal is backcountry skiing: the upper reaches of Bou Iblane offer wide, open snowfields and couloirs that see virtually no other skiers. On a powder day after a Mediterranean storm, Bou Iblane offers skiing that would be recognizable to anyone who has toured in the European Alps, but in complete solitude. The mountain is remote, the infrastructure is minimal, and self-sufficiency is essential. Local shepherds sometimes act as informal guides. There is a small ski club (Club Alpin de Taza) that maintains some presence on the mountain, but do not expect organized services. For experienced backcountry skiers willing to accept the logistical challenges, Bou Iblane represents genuine frontier skiing in Africa.',
    highlights: [
      'Heaviest snowfall in Morocco (Mediterranean storms)',
      'Backcountry powder potential',
      'Complete solitude (almost no other skiers)',
      'Summit at 3,190m with wide open snowfields',
      'Couloirs for advanced skiing',
      'True frontier skiing experience',
      'Local ski club presence (Club Alpin de Taza)',
      'Untouched terrain for ski touring',
    ],
    access:
      'From Fes: approximately 120 km east to Taza, then 80 km south on mountain roads to the base area. The drive from Fes takes about 3-4 hours total. Roads beyond Taza are unpaved and can be impassable in winter without a 4x4. From Oujda: approximately 200 km west. No public transport to the mountain; a 4x4 vehicle is essential.',
    accommodation:
      'Very basic. A small refuge near the base area may or may not be open. Most visitors camp or stay in Taza (80 km away, hotels from 200 MAD). Some local homes near the mountain may offer informal hospitality. Self-sufficiency is key.',
    dining:
      'No formal dining facilities on the mountain. Bring all food and supplies. Taza has basic restaurants. Local villages in the valley below may have small shops for essentials.',
    suitableFor: ['Experienced backcountry skiers', 'Ski tourers', 'Adventure seekers', 'Self-sufficient winter mountaineers'],
    snowReliability:
      'Paradoxically the most snow-reliable area in Morocco due to its position catching Mediterranean weather systems. Heavy snowfalls can deposit 50-100 cm in a single storm. However, the lack of grooming means conditions vary from powder to windblown crust. The season is short but can be excellent when conditions align.',
  },
];

/* ===================================================================
   OTHER SKI SPOTS DATA
   =================================================================== */

interface MinorSkiSpot {
  name: string;
  location: string;
  altitude: string;
  description: string;
  bestFor: string;
  access: string;
}

const minorSkiSpots: MinorSkiSpot[] = [
  {
    name: 'Jebel Hebri',
    location: 'Middle Atlas, near Azrou',
    altitude: '2,104m',
    description:
      'A small peak in the Middle Atlas cedar forests near Azrou and Ifrane. Jebel Hebri receives enough snow in good years for informal skiing and snowshoeing through the cedar forests. There are no lifts or formal infrastructure, but the forested slopes offer pleasant cross-country touring and snowshoeing. The Barbary macaque population in the area makes for unique wildlife encounters while skiing through the trees. Local forest tracks provide natural ski touring routes.',
    bestFor: 'Cross-country skiing, snowshoeing, nature walks in snow',
    access: 'From Azrou: approximately 20 km south. 4x4 recommended in winter conditions.',
  },
  {
    name: 'Tichka Pass Area',
    location: 'High Atlas, Tizi n\'Tichka (N9 highway)',
    altitude: '2,260m at the pass, higher on surrounding peaks',
    description:
      'The Tizi n\'Tichka pass on the main Marrakech-Ouarzazate highway crosses the High Atlas at 2,260 meters. In winter, the pass and surrounding peaks receive regular snowfall that sometimes closes the road. The terrain around the pass offers informal ski touring on the slopes above the road. This is not a resort and there is no infrastructure, but for ski tourers passing through on the way to or from the Sahara, it can provide an unexpected snow experience. The slopes above the pass reach over 3,000 meters and can hold good snow into March.',
    bestFor: 'Ski touring, impromptu snow stops on the Marrakech-Ouarzazate route',
    access: 'On the N9 highway between Marrakech and Ouarzazate. The pass is approximately 100 km from Marrakech (2 hours drive). The road is paved but chains may be required in winter.',
  },
  {
    name: 'Jebel Ayachi',
    location: 'Eastern High Atlas, near Midelt',
    altitude: '3,747m summit',
    description:
      'Jebel Ayachi is one of the highest mountains in Morocco at 3,747 meters and the dominant peak of the eastern High Atlas. The mountain receives substantial snowfall and retains snow cover well into spring at higher elevations. There is no ski resort infrastructure, but the wide, open slopes above the treeline offer excellent ski touring terrain for experienced mountaineers. The approach from Midelt is long (full day approach to base camp) but the reward is vast, untracked snowfields with views across the Moulouya plain. Some international ski touring groups have started including Ayachi in their Morocco itineraries.',
    bestFor: 'Ski mountaineering, ski touring, winter summiting',
    access: 'From Midelt: approximately 30 km south to trailhead, then full day approach on foot/mule. 4x4 required to trailhead. Remote and requires full mountaineering self-sufficiency.',
  },
];

/* ===================================================================
   CROSS-COUNTRY SKIING DATA
   =================================================================== */

interface CrossCountryRoute {
  name: string;
  location: string;
  distance: string;
  difficulty: string;
  description: string;
  highlights: string[];
}

const crossCountryRoutes: CrossCountryRoute[] = [
  {
    name: 'Michlifen Cedar Forest Loop',
    location: 'Middle Atlas, near Ifrane',
    distance: '8-15 km (variable depending on route)',
    difficulty: 'Easy to moderate',
    description:
      'The cedar forests surrounding Michlifen and Ifrane offer Morocco\'s best cross-country skiing when snow conditions permit. Well-spaced Atlas cedar trees (Cedrus atlantica) create natural corridors through the forest, and the relatively gentle Middle Atlas terrain provides rolling routes that are manageable for intermediate cross-country skiers. The forest is home to Barbary macaques, and skiing past a troop of monkeys huddled in snow-dusted cedars is one of Morocco\'s most surreal winter experiences.',
    highlights: [
      'Atlas cedar forest setting',
      'Barbary macaque encounters',
      'Rolling, manageable terrain',
      'Multiple route options',
      'Beautiful forest photography',
    ],
  },
  {
    name: 'Oukaimeden Plateau Circuit',
    location: 'High Atlas, Oukaimeden',
    distance: '5-10 km',
    difficulty: 'Moderate',
    description:
      'Above the ski resort, the Oukaimeden plateau extends across a high-altitude tableland at around 2,800-3,000 meters. When snow coverage is good, this plateau offers Nordic-style touring with dramatic mountain views in every direction. The terrain is more exposed than the Michlifen forests, so wind can be a factor, but the views of Jebel Toubkal and the High Atlas ridge are extraordinary. The altitude means this route is physically demanding despite the gentle gradients.',
    highlights: [
      'High-altitude plateau at 2,800-3,000m',
      'Panoramic Atlas Mountain views',
      'Views toward Jebel Toubkal (4,167m)',
      'Above the ski resort for solitude',
      'Ancient petroglyphs along the route',
    ],
  },
  {
    name: 'Azrou Forest Trails',
    location: 'Middle Atlas, near Azrou',
    distance: '5-20 km (multiple trails)',
    difficulty: 'Easy',
    description:
      'The protected cedar forests around Azrou, part of the Cedre Gouraud forest, provide gentle, well-shaded terrain for cross-country skiing after snowfall. The famous cedar tree "Cedre Gouraud" (a massive 800-year-old Atlas cedar) marks the heart of this forest. Trails follow forest roads and tracks that are used by hikers and mountain bikers in other seasons. The canopy provides wind protection and the flat to gently rolling terrain is suitable for beginners.',
    highlights: [
      '800-year-old Cedre Gouraud cedar tree',
      'Protected forest ecosystem',
      'Gentle terrain suitable for beginners',
      'Forest road network for easy navigation',
      'Possible Barbary macaque sightings',
    ],
  },
  {
    name: 'Middle Atlas Moonlight Skiing',
    location: 'Michlifen or Azrou forests',
    distance: '3-8 km',
    difficulty: 'Easy to moderate',
    description:
      'An unforgettable experience for those willing to venture out after dark. On clear nights with a full or near-full moon, the snow-covered cedar forests of the Middle Atlas glow with an ethereal silver light. The silence is total except for the swish of skis and occasional owl call. This is not an organized activity but rather something that adventurous cross-country skiers arrange independently. Headlamps are essential as backup, and familiarity with the route in daylight is strongly recommended. The best months for moonlight skiing are January and February when snow cover is deepest and cold, clear nights are common.',
    highlights: [
      'Moonlit cedar forest experience',
      'Total silence and solitude',
      'Silver-lit snowscapes',
      'January-February full moon dates ideal',
      'Truly unique Moroccan winter experience',
    ],
  },
];

/* ===================================================================
   SNOWSHOEING DATA
   =================================================================== */

interface SnowshoeRoute {
  name: string;
  location: string;
  duration: string;
  difficulty: string;
  startingPoint: string;
  description: string;
  highlights: string[];
  guideCost: string;
}

const snowshoeRoutes: SnowshoeRoute[] = [
  {
    name: 'Imlil to Armed Village Winter Trek',
    location: 'Toubkal National Park, High Atlas',
    duration: '4-6 hours round trip',
    difficulty: 'Moderate',
    startingPoint: 'Imlil (1,740m)',
    description:
      'Imlil, the gateway village to Jebel Toubkal, transforms in winter into a snowshoeing base camp. The trail from Imlil up the Mizane Valley to the village of Armed (also spelled Aremd or Aroumd) at 1,940 meters is one of Morocco\'s most accessible and beautiful snowshoe treks. The path winds through terraced walnut orchards buried under snow, past Berber villages with smoke rising from flat rooftops, and alongside the frozen river valley with Toubkal\'s massive white flanks looming above. The village of Armed itself is a traditional Berber settlement where life continues through the winter months largely as it has for centuries. Local guides from Imlil know the terrain intimately and can adjust routes based on conditions.',
    highlights: [
      'Gateway to North Africa\'s highest peak',
      'Snow-covered Berber villages',
      'Terraced walnut orchards under snow',
      'Views of Jebel Toubkal (4,167m)',
      'Traditional Berber mountain culture',
      'Professional guides available in Imlil',
    ],
    guideCost: '400-600 MAD/day for a licensed mountain guide, plus snowshoe rental 100-200 MAD/day',
  },
  {
    name: 'Toubkal Refuge Winter Approach',
    location: 'Toubkal National Park, High Atlas',
    duration: '2 days (overnight at refuge)',
    difficulty: 'Challenging',
    startingPoint: 'Imlil (1,740m)',
    description:
      'For experienced winter hikers, the snowshoe approach to the Refuge du Toubkal at 3,207 meters is a serious but rewarding undertaking. The trail gains nearly 1,500 meters of elevation through increasingly alpine terrain, from the village of Imlil through Armed and up the Mizane Valley past the shrine of Sidi Chamharouch (2,310m) to the refuge. In winter, this is a full mountaineering day requiring snowshoes, possibly crampons for icy sections, and proper winter clothing. The refuge (run by the CAF - Club Alpin Francais) is heated and serves meals, providing a warm base for the night. The winter summit of Toubkal from the refuge requires ice axe and crampons and is a serious mountaineering objective, not a snowshoe trip.',
    highlights: [
      'Approach to 3,207m refuge',
      'Serious winter mountaineering environment',
      'Heated CAF refuge with meals',
      'Shrine of Sidi Chamharouch at 2,310m',
      'Gateway to winter Toubkal summit attempt',
      'Nearly 1,500m of elevation gain',
    ],
    guideCost: '600-800 MAD/day for a licensed mountain guide (mandatory for Toubkal in winter), refuge overnight 200-350 MAD including dinner and breakfast',
  },
  {
    name: 'Oukaimeden to Tacheddirt Valley',
    location: 'High Atlas, south of Marrakech',
    duration: '5-7 hours',
    difficulty: 'Moderate to challenging',
    startingPoint: 'Oukaimeden (2,600m)',
    description:
      'Starting from the Oukaimeden ski resort, this snowshoe route crosses a high pass (Tizi n\'Eddi at approximately 3,000m) and descends into the remote Tacheddirt Valley. The route traverses alpine terrain above the treeline with expansive views of the High Atlas ridge. The village of Tacheddirt (2,314m) on the far side is a traditional Berber settlement that sees very few winter visitors. The descent into the valley through snow-covered fields with the village appearing below is one of the most photogenic winter scenes in Morocco. A vehicle pick-up from Tacheddirt or a return over the pass is needed to complete the day.',
    highlights: [
      'High pass crossing at 3,000m',
      'Remote Tacheddirt Valley',
      'Traditional Berber village in winter',
      'Expansive High Atlas panoramas',
      'Connects two valleys',
      'Photogenic descent into snow-covered valley',
    ],
    guideCost: '500-700 MAD/day for a licensed mountain guide, transport arrangements additional',
  },
  {
    name: 'Ifrane National Park Winter Walk',
    location: 'Middle Atlas, Ifrane',
    duration: '2-4 hours',
    difficulty: 'Easy',
    startingPoint: 'Ifrane town',
    description:
      'The easiest and most accessible snowshoe experience in Morocco. Ifrane National Park, immediately adjacent to the town, offers flat to gently rolling terrain through atlas cedar and oak forests. After a snowfall, the park transforms into a winter wonderland that looks more like the Swiss Alps than North Africa. Well-maintained trails and the proximity to Ifrane\'s hotels and cafes make this ideal for families and those new to snowshoeing. Barbary macaques are active year-round and are often easier to spot against the white snow. The famous carved stone lion of Ifrane is a popular snow-covered photo stop.',
    highlights: [
      'Flat, accessible terrain',
      'Cedar and oak forest setting',
      'Barbary macaque encounters',
      'Family-friendly',
      'Adjacent to Ifrane town amenities',
      'Famous stone lion photo opportunity',
    ],
    guideCost: 'Not required for park trails. Snowshoe rental in Ifrane from 100-150 MAD/day (limited availability, bring your own if possible)',
  },
];

/* ===================================================================
   EQUIPMENT & RENTAL DATA
   =================================================================== */

interface EquipmentCategory {
  item: string;
  availableLocally: boolean;
  quality: string;
  rentalCost: string;
  recommendation: string;
}

const equipmentGuide: EquipmentCategory[] = [
  {
    item: 'Skis & Bindings',
    availableLocally: true,
    quality: 'Basic to intermediate. Rental fleet is aging but functional. Mostly older models from European resorts.',
    rentalCost: '150-250 MAD/day at Oukaimeden, 100-200 MAD at Michlifen',
    recommendation: 'Acceptable for casual skiing. Serious skiers should bring their own. Check bindings carefully before heading to the slopes.',
  },
  {
    item: 'Snowboard & Bindings',
    availableLocally: true,
    quality: 'Limited selection. A few rental shops at Oukaimeden have snowboards but choice is very restricted.',
    rentalCost: '200-300 MAD/day at Oukaimeden',
    recommendation: 'Bring your own if snowboarding is important to you. Local selection is limited and sizes may not match.',
  },
  {
    item: 'Ski Boots',
    availableLocally: true,
    quality: 'Variable. Some well-maintained boots, some worn out. Size range can be limited for larger feet.',
    rentalCost: 'Usually included with ski rental',
    recommendation: 'Bring your own boots if you have them. Ill-fitting rental boots are the most common complaint. Try several pairs.',
  },
  {
    item: 'Ski Poles',
    availableLocally: true,
    quality: 'Basic but functional.',
    rentalCost: 'Usually included with ski rental',
    recommendation: 'Rental poles are fine. Not worth packing your own unless you are particular about grip and length.',
  },
  {
    item: 'Helmet',
    availableLocally: false,
    quality: 'Not commonly available for rent.',
    rentalCost: 'N/A',
    recommendation: 'Bring your own. Helmets are not standard at Moroccan resorts and are rarely available for rent. Strongly recommended, especially for children.',
  },
  {
    item: 'Goggles & Sunglasses',
    availableLocally: false,
    quality: 'Basic sunglasses available in resort shops. Proper ski goggles rarely available for rent.',
    rentalCost: 'Purchase only: 50-200 MAD for basic sunglasses',
    recommendation: 'Bring your own ski goggles. The Atlas sun at altitude is intense and proper UV protection is essential. Snow blindness is a real risk.',
  },
  {
    item: 'Ski Clothing',
    availableLocally: false,
    quality: 'Not available for rent.',
    rentalCost: 'N/A',
    recommendation: 'Bring all your own ski clothing. Waterproof jacket, ski pants, thermal layers, gloves, and a warm hat are essential. Marrakech markets sell warm clothing but not technical ski gear.',
  },
  {
    item: 'Snowshoes',
    availableLocally: true,
    quality: 'Limited availability. Some guides in Imlil have snowshoes for clients. Ifrane has very limited rental.',
    rentalCost: '100-200 MAD/day where available',
    recommendation: 'Bring your own for guaranteed availability and proper fit. If booking with a guide in Imlil, confirm snowshoe provision in advance.',
  },
  {
    item: 'Cross-Country Skis',
    availableLocally: false,
    quality: 'Not available for rent anywhere in Morocco.',
    rentalCost: 'N/A',
    recommendation: 'Must bring your own. Cross-country skiing in Morocco is entirely a bring-your-own-equipment activity.',
  },
  {
    item: 'Touring Skis & Skins',
    availableLocally: false,
    quality: 'Not available for rent.',
    rentalCost: 'N/A',
    recommendation: 'Must bring your own. Backcountry skiing at Bou Iblane or Ayachi requires full self-sufficiency in equipment.',
  },
];

/* ===================================================================
   EUROPEAN COMPARISON DATA
   =================================================================== */

interface ResortComparison {
  category: string;
  morocco: string;
  europeBudget: string;
  europePopular: string;
}

const resortComparisons: ResortComparison[] = [
  {
    category: 'Day Lift Pass',
    morocco: '150-200 MAD ($15-20)',
    europeBudget: 'EUR 30-50 ($33-55)',
    europePopular: 'EUR 55-75 ($60-83)',
  },
  {
    category: 'Equipment Rental (Full Day)',
    morocco: '200-300 MAD ($20-30)',
    europeBudget: 'EUR 25-40 ($28-44)',
    europePopular: 'EUR 35-55 ($39-61)',
  },
  {
    category: 'Ski Lesson (2 hours)',
    morocco: '200-400 MAD ($20-40)',
    europeBudget: 'EUR 40-60 ($44-66)',
    europePopular: 'EUR 60-100 ($66-110)',
  },
  {
    category: 'On-Mountain Lunch',
    morocco: '50-120 MAD ($5-12)',
    europeBudget: 'EUR 12-20 ($13-22)',
    europePopular: 'EUR 15-30 ($17-33)',
  },
  {
    category: 'Budget Hotel (per night)',
    morocco: '200-500 MAD ($20-50)',
    europeBudget: 'EUR 50-80 ($55-88)',
    europePopular: 'EUR 80-200 ($88-220)',
  },
  {
    category: 'Crowd Levels',
    morocco: 'Low to moderate (weekends busier)',
    europeBudget: 'Moderate',
    europePopular: 'High to very high',
  },
  {
    category: 'Number of Lifts',
    morocco: '5 (Oukaimeden)',
    europeBudget: '10-30',
    europePopular: '50-200+',
  },
  {
    category: 'Groomed Runs',
    morocco: 'Minimal grooming',
    europeBudget: 'Well-groomed',
    europePopular: 'Immaculately groomed',
  },
  {
    category: 'Snow Reliability',
    morocco: 'Variable (natural snow only)',
    europeBudget: 'Moderate (some snowmaking)',
    europePopular: 'High (extensive snowmaking)',
  },
  {
    category: 'Apres-Ski Scene',
    morocco: 'Mint tea and tagine',
    europeBudget: 'Local bars and restaurants',
    europePopular: 'Extensive nightlife and dining',
  },
  {
    category: 'Cultural Experience',
    morocco: 'Unique: Berber culture, medinas, desert nearby',
    europeBudget: 'Alpine village charm',
    europePopular: 'Well-developed resort culture',
  },
  {
    category: 'Overall Daily Cost',
    morocco: '$50-100 (all-in from Marrakech)',
    europeBudget: '$120-200',
    europePopular: '$200-400+',
  },
];

/* ===================================================================
   MONTHLY SNOW DATA
   =================================================================== */

interface MonthlySnow {
  month: string;
  oukaimeden: string;
  michlifen: string;
  bouIblane: string;
  overall: string;
}

const monthlySnowData: MonthlySnow[] = [
  {
    month: 'November',
    oukaimeden: 'Rare early snow possible above 3,000m',
    michlifen: 'Very unlikely',
    bouIblane: 'Possible at summit',
    overall: 'Too early for most years',
  },
  {
    month: 'December',
    oukaimeden: 'Season opens if snow arrives. Hit or miss.',
    michlifen: 'Possible opening in good years',
    bouIblane: 'Snow accumulating at altitude',
    overall: 'Early season, check conditions',
  },
  {
    month: 'January',
    oukaimeden: 'Best month. Most reliable snow coverage.',
    michlifen: 'Best chance for snow coverage',
    bouIblane: 'Peak snow depth potential',
    overall: 'Prime skiing month',
  },
  {
    month: 'February',
    oukaimeden: 'Strong month. Good accumulation.',
    michlifen: 'Good coverage in strong years',
    bouIblane: 'Excellent backcountry potential',
    overall: 'Prime skiing month',
  },
  {
    month: 'March',
    oukaimeden: 'Declining but sometimes good. Spring storms possible.',
    michlifen: 'Season ending. Patchy.',
    bouIblane: 'Late season possible at altitude',
    overall: 'Late season, unpredictable',
  },
  {
    month: 'April',
    oukaimeden: 'Rare. Only at highest elevations.',
    michlifen: 'Season over',
    bouIblane: 'Remnant snow at summit only',
    overall: 'Season effectively over',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function SkiingMoroccoPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-end pb-16 md:pb-20">
        <img
          src="/images/hero-skiing-morocco.webp"
          alt="Skier descending the slopes of Oukaimeden with panoramic Atlas Mountain views, Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-1.5 text-sm text-white/70 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/adventure" className="hover:text-white transition-colors">
              Adventure
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Skiing</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              <Snowflake className="w-4 h-4" />
              December - March Season
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4 leading-tight">
              Skiing in Morocco: Africa&apos;s Surprising Winter Playground
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              Snow-capped Atlas peaks, affordable lift passes, and the most unlikely ski destination on the continent. Yes, you can ski in Morocco, and it is an experience like no other.
            </p>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
                Yes, You Can Ski in Morocco
              </h2>
              <div className="w-16 h-1 bg-[#A0522D] mx-auto mb-6 rounded-full" />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="card-moroccan p-8 md:p-10 mb-8">
                <p className="text-[#1A1814]/80 leading-relaxed mb-6">
                  When people think of Morocco, they picture sun-baked medinas, sweeping sand dunes, and Atlantic surf breaks. Snow-covered
                  mountains rarely enter the picture. But the Atlas Mountains, stretching 2,500 kilometers across Morocco, Algeria, and Tunisia,
                  regularly receive heavy snowfall from December through March, transforming the highest peaks into a genuine winter sports
                  destination. Morocco is home to the highest ski resort in Africa, and the Atlas Mountains offer everything from groomed resort
                  runs to untouched backcountry powder.
                </p>
                <p className="text-[#1A1814]/80 leading-relaxed mb-6">
                  The skiing is not world-class by Alpine standards. The infrastructure is modest, the lift systems are aging, snowmaking is
                  nonexistent, and conditions are dependent entirely on natural snowfall. But that honesty is part of the appeal. What Morocco
                  offers is something no European resort can: the chance to ski above the Sahara, to descend runs with views stretching from
                  snow-covered peaks to desert plains, and to finish the day with a tagine and mint tea in a Berber village. You can ski in the
                  morning and be wandering the souks of Marrakech by afternoon. In an ambitious day, you can even ski and reach the Atlantic
                  coast before sunset.
                </p>
                <p className="text-[#1A1814]/80 leading-relaxed">
                  Morocco&apos;s ski season runs from December to March, with January and February offering the most reliable conditions.
                  The main resort, Oukaimeden, sits at 2,600 meters in the High Atlas just 75 kilometers from Marrakech and has been operating
                  since the 1930s. A second resort at Michlifen in the Middle Atlas near Ifrane serves the northern cities of Fes and Meknes.
                  Beyond the resorts, backcountry skiers are beginning to discover the untouched potential of peaks like Jebel Bou Iblane and
                  Jebel Ayachi, where powder days rival anything in the Alps but with zero crowds.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Mountain, label: 'Highest Resort', value: '3,258m (Oukaimeden)' },
                  { icon: Calendar, label: 'Season', value: 'December - March' },
                  { icon: DollarSign, label: 'Day Pass', value: '150-200 MAD ($15-20)' },
                  { icon: Car, label: 'From Marrakech', value: '75 km (1.5 hours)' },
                ].map((stat, i) => (
                  <div key={i} className="card-moroccan p-5 text-center">
                    <stat.icon className="w-6 h-6 text-[#A0522D] mx-auto mb-2" />
                    <p className="text-xs text-[#1A1814]/60 uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ski Resorts ── */}
      {skiResorts.map((resort, index) => (
        <section key={resort.name} className={`py-16 md:py-20 ${index % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-[var(--surface-muted)]'}`}>
          <div className="container-morocco">
            <div className="max-w-5xl mx-auto">
              {/* Resort Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#A0522D]/10 flex items-center justify-center shrink-0">
                  <MountainSnow className="w-6 h-6 text-[#A0522D]" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-1">
                    {resort.name}
                  </h2>
                  <p className="text-[#A0522D] font-medium">{resort.location}</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                <div className="card-moroccan p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-[#A0522D]" />
                    <span className="text-xs text-[#1A1814]/60 uppercase tracking-wider">Altitude</span>
                  </div>
                  <p className="font-bold text-sm text-[#1A1814]">{resort.altitude}</p>
                </div>
                <div className="card-moroccan p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Ticket className="w-4 h-4 text-[#A0522D]" />
                    <span className="text-xs text-[#1A1814]/60 uppercase tracking-wider">Lifts / Runs</span>
                  </div>
                  <p className="font-bold text-sm text-[#1A1814]">{resort.lifts} lifts / {resort.runs} runs</p>
                </div>
                <div className="card-moroccan p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <CircleDollarSign className="w-4 h-4 text-[#A0522D]" />
                    <span className="text-xs text-[#1A1814]/60 uppercase tracking-wider">Lift Pass</span>
                  </div>
                  <p className="font-bold text-sm text-[#1A1814]">{resort.liftPass}</p>
                </div>
                <div className="card-moroccan p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-[#A0522D]" />
                    <span className="text-xs text-[#1A1814]/60 uppercase tracking-wider">Season</span>
                  </div>
                  <p className="font-bold text-sm text-[#1A1814]">{resort.season}</p>
                </div>
              </div>

              {/* Description */}
              <div className="card-moroccan p-6 md:p-8 mb-8">
                <p className="text-[#1A1814]/80 leading-relaxed">{resort.description}</p>
              </div>

              {/* Highlights */}
              <div className="card-moroccan p-6 md:p-8 mb-8">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#C4960C]" />
                  Highlights
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {resort.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#1A1814]/80">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Details Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
                    <Car className="w-5 h-5 text-[#A0522D]" />
                    Getting There
                  </h3>
                  <p className="text-sm text-[#1A1814]/80 leading-relaxed">{resort.access}</p>
                </div>
                <div className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#A0522D]" />
                    Accommodation
                  </h3>
                  <p className="text-sm text-[#1A1814]/80 leading-relaxed">{resort.accommodation}</p>
                </div>
                <div className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
                    <Gem className="w-5 h-5 text-[#A0522D]" />
                    Dining
                  </h3>
                  <p className="text-sm text-[#1A1814]/80 leading-relaxed">{resort.dining}</p>
                </div>
                <div className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
                    <CloudSnow className="w-5 h-5 text-[#A0522D]" />
                    Snow Reliability
                  </h3>
                  <p className="text-sm text-[#1A1814]/80 leading-relaxed">{resort.snowReliability}</p>
                </div>
              </div>

              {/* Suitable For */}
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#A0522D]" />
                  Best For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resort.suitableFor.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#A0522D]/10 text-[#A0522D] text-sm rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Equipment Rental Note */}
              <div className="mt-6 card-moroccan p-5 border-l-4 border-[#A0522D]">
                <div className="flex items-start gap-3">
                  <Layers className="w-5 h-5 text-[#A0522D] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-sm text-[#1A1814] mb-1">Equipment Rental</p>
                    <p className="text-sm text-[#1A1814]/70">{resort.rentalCost}. {resort.name === 'Jebel Bou Iblane'
                      ? 'This is a backcountry destination. Bring all your own equipment, safety gear, and supplies.'
                      : 'Rental shops are located at the base area. Arrive early on weekends for the best selection.'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Other Ski Spots ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
                Other Skiing & Touring Spots
              </h2>
              <div className="w-16 h-1 bg-[#A0522D] mx-auto mb-4 rounded-full" />
              <p className="text-[#1A1814]/70 max-w-2xl mx-auto">
                Beyond the established resorts, Morocco&apos;s mountains offer scattered opportunities for ski touring, backcountry exploration,
                and impromptu snow experiences. None of these have formal resort infrastructure, but each offers something unique.
              </p>
            </div>

            <div className="space-y-6">
              {minorSkiSpots.map((spot, i) => (
                <div key={i} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C4960C]/10 flex items-center justify-center shrink-0">
                      <Compass className="w-5 h-5 text-[#C4960C]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-xl">{spot.name}</h3>
                      <p className="text-sm text-[#A0522D]">{spot.location} | {spot.altitude}</p>
                    </div>
                  </div>
                  <p className="text-[#1A1814]/80 leading-relaxed mb-4">{spot.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#A0522D]" />
                      <span className="text-[#1A1814]/70"><span className="font-medium text-[#1A1814]">Best for:</span> {spot.bestFor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-[#A0522D]" />
                      <span className="text-[#1A1814]/70"><span className="font-medium text-[#1A1814]">Access:</span> {spot.access}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cross-Country Skiing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
                Cross-Country Skiing
              </h2>
              <div className="w-16 h-1 bg-[#A0522D] mx-auto mb-4 rounded-full" />
              <p className="text-[#1A1814]/70 max-w-2xl mx-auto">
                Morocco&apos;s Middle Atlas cedar forests and High Atlas plateaus offer a setting for cross-country skiing that is unlike
                anything in Europe. No groomed tracks, no trail fees, just you, the snow, and an ancient forest inhabited by Barbary macaques.
                Bring your own equipment; there is no rental infrastructure for cross-country skiing in Morocco.
              </p>
            </div>

            <div className="space-y-6">
              {crossCountryRoutes.map((route, i) => (
                <div key={i} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-xl mb-1">{route.name}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[#1A1814]/60">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {route.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Route className="w-3.5 h-3.5" />
                          {route.distance}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${
                      route.difficulty === 'Easy'
                        ? 'bg-green-100 text-green-700'
                        : route.difficulty === 'Moderate'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-orange-100 text-orange-700'
                    }`}>
                      {route.difficulty}
                    </span>
                  </div>
                  <p className="text-[#1A1814]/80 leading-relaxed mb-4">{route.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {route.highlights.map((hl, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <TreePine className="w-3.5 h-3.5 text-[#A0522D]" />
                        <span className="text-[#1A1814]/70">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Snowshoeing ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
                Snowshoeing in the Atlas Mountains
              </h2>
              <div className="w-16 h-1 bg-[#A0522D] mx-auto mb-4 rounded-full" />
              <p className="text-[#1A1814]/70 max-w-2xl mx-auto">
                Snowshoeing is arguably the most accessible and rewarding winter activity in Morocco. The High Atlas villages around Toubkal
                and the Middle Atlas forests near Ifrane offer guided and independent snowshoe treks through landscapes that combine
                winter beauty with living Berber culture.
              </p>
            </div>

            <div className="space-y-8">
              {snowshoeRoutes.map((route, i) => (
                <div key={i} className="card-moroccan overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-xl mb-1">{route.name}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-[#1A1814]/60">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {route.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {route.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Navigation className="w-3.5 h-3.5" />
                            Start: {route.startingPoint}
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${
                        route.difficulty === 'Easy'
                          ? 'bg-green-100 text-green-700'
                          : route.difficulty === 'Moderate'
                            ? 'bg-yellow-100 text-yellow-700'
                            : route.difficulty === 'Challenging'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-red-100 text-red-700'
                      }`}>
                        {route.difficulty}
                      </span>
                    </div>

                    <p className="text-[#1A1814]/80 leading-relaxed mb-5">{route.description}</p>

                    <div className="grid sm:grid-cols-2 gap-2 mb-5">
                      {route.highlights.map((hl, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <Footprints className="w-3.5 h-3.5 text-[#A0522D]" />
                          <span className="text-[#1A1814]/70">{hl}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-start gap-2 bg-[#C4960C]/5 border border-[#C4960C]/20 rounded-lg p-4">
                      <CircleDollarSign className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                      <p className="text-sm text-[#1A1814]/80">{route.guideCost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipment & Rentals ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
                Equipment & Rentals
              </h2>
              <div className="w-16 h-1 bg-[#A0522D] mx-auto mb-4 rounded-full" />
              <p className="text-[#1A1814]/70 max-w-2xl mx-auto">
                Be honest with yourself about what you need to bring. Morocco&apos;s rental infrastructure is functional for basic
                downhill skiing at Oukaimeden, but limited for everything else. Here is a straightforward assessment of
                what is available locally and what you must bring from home.
              </p>
            </div>

            {/* Warning Banner */}
            <div className="card-moroccan p-5 border-l-4 border-[#C4960C] mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#C4960C] mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-sm text-[#1A1814] mb-1">Equipment Reality Check</p>
                  <p className="text-sm text-[#1A1814]/70">
                    If you are a casual skier visiting Oukaimeden for a day trip from Marrakech, rental equipment will do the job.
                    If you are planning cross-country skiing, backcountry touring, snowshoeing, or multi-day winter activities,
                    bring your own equipment. Morocco does not have the rental infrastructure for specialized winter sports.
                  </p>
                </div>
              </div>
            </div>

            {/* Equipment Table */}
            <div className="card-moroccan overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1A1814]">
                      <th className="text-left p-4 text-white font-[family-name:var(--font-heading)]">Equipment</th>
                      <th className="text-center p-4 text-white font-[family-name:var(--font-heading)]">Available Locally</th>
                      <th className="text-left p-4 text-white font-[family-name:var(--font-heading)]">Quality</th>
                      <th className="text-left p-4 text-white font-[family-name:var(--font-heading)]">Rental Cost</th>
                      <th className="text-left p-4 text-white font-[family-name:var(--font-heading)]">Our Recommendation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipmentGuide.map((item, i) => (
                      <tr key={i} className={`border-t border-[#EDE8E0] ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}`}>
                        <td className="p-4 font-medium text-[#1A1814]">{item.item}</td>
                        <td className="p-4 text-center">
                          {item.availableLocally ? (
                            <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-[#1A1814]/70">{item.quality}</td>
                        <td className="p-4 text-[#1A1814]/70">{item.rentalCost}</td>
                        <td className="p-4 text-[#1A1814]/70">{item.recommendation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Packing Essentials */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
                  <Backpack className="w-5 h-5 text-[#A0522D]" />
                  Must Bring From Home
                </h3>
                <ul className="space-y-2">
                  {[
                    'Ski goggles with UV protection (essential at altitude)',
                    'Helmet (not available for rent)',
                    'Waterproof ski jacket and pants',
                    'Thermal base layers (merino wool recommended)',
                    'Ski gloves (warm, waterproof)',
                    'Warm hat and neck gaiter',
                    'Sunscreen SPF 50+ (Atlas sun is fierce)',
                    'Cross-country skis (if planning Nordic skiing)',
                    'Snowshoes (if planning snowshoeing, limited local rental)',
                    'Touring equipment (if backcountry skiing)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#1A1814]/80">
                      <CheckCircle className="w-3.5 h-3.5 text-[#A0522D] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#C4960C]" />
                  Fine to Rent Locally
                </h3>
                <ul className="space-y-2">
                  {[
                    'Downhill skis and bindings (basic but functional at Oukaimeden)',
                    'Ski boots (try several pairs for fit)',
                    'Ski poles (included with ski rental)',
                    'Snowboard (limited selection at Oukaimeden only)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#1A1814]/80">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-[#EDE8E0]">
                  <h4 className="font-bold text-[#1A1814] text-sm mb-2">Pro Tips for Rental</h4>
                  <ul className="space-y-2">
                    {[
                      'Arrive early (before 9 AM) for the best equipment selection',
                      'Inspect ski bindings before heading to the slopes',
                      'Negotiate rental prices, especially for groups or multi-day',
                      'Check boot buckles and soles for excessive wear',
                      'Ask for a slightly shorter ski if the conditions are icy',
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#1A1814]/80">
                        <Info className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Guide ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
                Practical Guide
              </h2>
              <div className="w-16 h-1 bg-[#A0522D] mx-auto mb-4 rounded-full" />
              <p className="text-[#1A1814]/70 max-w-2xl mx-auto">
                Everything you need to plan a skiing trip to Morocco, from the best months for snow to driving in winter conditions
                and combining skiing with a Marrakech city trip.
              </p>
            </div>

            {/* Monthly Snow Chart */}
            <div className="card-moroccan overflow-hidden mb-10">
              <div className="bg-[#1A1814] p-4">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-white text-lg flex items-center gap-2">
                  <CloudSnow className="w-5 h-5" />
                  Monthly Snow Conditions
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#EDE8E0]">
                      <th className="text-left p-3 font-[family-name:var(--font-heading)] text-[#1A1814]">Month</th>
                      <th className="text-left p-3 font-[family-name:var(--font-heading)] text-[#1A1814]">Oukaimeden</th>
                      <th className="text-left p-3 font-[family-name:var(--font-heading)] text-[#1A1814]">Michlifen</th>
                      <th className="text-left p-3 font-[family-name:var(--font-heading)] text-[#1A1814]">Bou Iblane</th>
                      <th className="text-left p-3 font-[family-name:var(--font-heading)] text-[#1A1814]">Overall</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlySnowData.map((row, i) => (
                      <tr key={i} className={`border-t border-[#EDE8E0] ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}`}>
                        <td className="p-3 font-medium text-[#1A1814]">{row.month}</td>
                        <td className="p-3 text-[#1A1814]/70">{row.oukaimeden}</td>
                        <td className="p-3 text-[#1A1814]/70">{row.michlifen}</td>
                        <td className="p-3 text-[#1A1814]/70">{row.bouIblane}</td>
                        <td className="p-3 font-medium text-[#A0522D]">{row.overall}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Practical Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Best Months */}
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#A0522D]" />
                  Best Months to Visit
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded shrink-0">BEST</span>
                    <p className="text-sm text-[#1A1814]/80">
                      <span className="font-medium text-[#1A1814]">January - February:</span> Most reliable snow coverage at all areas.
                      Deepest snowpack, coldest temperatures, and the longest continuous skiing windows. If you can only come once,
                      come in mid-January.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-bold rounded shrink-0">GOOD</span>
                    <p className="text-sm text-[#1A1814]/80">
                      <span className="font-medium text-[#1A1814]">December:</span> Season opening, but snow is not guaranteed. Some years
                      see excellent early coverage; others do not see significant snow until late December or January.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-bold rounded shrink-0">LATE</span>
                    <p className="text-sm text-[#1A1814]/80">
                      <span className="font-medium text-[#1A1814]">March:</span> Season winding down. Spring storms can bring fresh snow
                      but coverage is increasingly patchy. Warm afternoons cause rapid melt. Best for late-season ski touring at higher elevations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Snow Reports */}
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#A0522D]" />
                  Snow Reports & Information
                </h3>
                <div className="space-y-3 text-sm text-[#1A1814]/80">
                  <p>
                    Morocco does not have a centralized ski report system like European countries. Here is how to check conditions:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Social media: Search "Oukaimeden" or "Michlifen" on Instagram and Facebook for recent photos from visitors',
                      'Local contacts: Hotels at the resorts can report conditions by phone',
                      'Weather forecasts: Check mountain weather forecasts for the Atlas Mountains (above 2,500m)',
                      'Webcams: Oukaimeden occasionally has webcam feeds, but reliability varies',
                      'Tour operators: Marrakech-based ski tour operators monitor conditions and can advise',
                      'Satellite imagery: Snow cover maps can show general accumulation at altitude',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#A0522D] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Driving in Winter */}
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
                  <Car className="w-5 h-5 text-[#A0522D]" />
                  Driving in Winter Conditions
                </h3>
                <div className="space-y-3 text-sm text-[#1A1814]/80">
                  <p className="font-medium text-[#1A1814]">Snow chains are essential. Here is what you need to know:</p>
                  <ul className="space-y-2">
                    {[
                      'Snow chains are required on the road to Oukaimeden when there is snow above 2,000m. Police enforce this and will turn you back without chains.',
                      'Chains can be purchased in Marrakech hardware stores (150-300 MAD) or rented at the entrance to the Oukaimeden road.',
                      'The Tizi n\'Tichka pass (Marrakech to Ouarzazate) can close in heavy snowfall. Check conditions before crossing.',
                      'The road to Ifrane and Michlifen from Fes/Meknes is generally kept clear but chains are advisable.',
                      '4x4 vehicles with all-terrain tires are strongly recommended for reaching Jebel Bou Iblane.',
                      'Moroccan rental car companies may not allow chains on their vehicles. Check your rental agreement.',
                      'Road conditions can change rapidly. A clear morning drive can become an icy return in the afternoon.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Accommodation Near Resorts */}
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#A0522D]" />
                  Where to Stay
                </h3>
                <div className="space-y-4 text-sm text-[#1A1814]/80">
                  <div>
                    <p className="font-medium text-[#1A1814] mb-1">For Oukaimeden:</p>
                    <p>
                      Most visitors base in Marrakech and day-trip. If staying at the resort: Hotel Chez JuJu (from 400 MAD/night) is the
                      classic choice. CAF Refuge (from 150 MAD/night) for budget mountaineers. A few basic guesthouses offer rooms from 200 MAD.
                      Book ahead for January/February weekends.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A1814] mb-1">For Michlifen:</p>
                    <p>
                      Stay in Ifrane (18 km away). The town has hotels ranging from budget (300 MAD) to the luxury Michlifen Ifrane Suites
                      and Spa (from 2,000 MAD). Azrou (30 km) offers cheaper alternatives. Fes is feasible for a day trip but it is 1.5 hours each way.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A1814] mb-1">Combining with Marrakech:</p>
                    <p>
                      The ideal trip combines 3-4 nights in Marrakech with 1-2 day trips to Oukaimeden. This gives you the cultural experience
                      of the medina, the souks, and Moroccan cuisine alongside the unique experience of skiing in the Atlas Mountains. Many
                      riads in Marrakech can arrange ski day trips including transport.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Section */}
            <div className="card-moroccan p-6 md:p-8">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#A0522D]" />
                Safety Considerations
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-[#1A1814] text-sm">On the Slopes</h4>
                  <ul className="space-y-2 text-sm text-[#1A1814]/80">
                    {[
                      'No ski patrol at Moroccan resorts. You are responsible for your own safety.',
                      'No avalanche control. Backcountry skiers must assess avalanche risk independently.',
                      'Medical facilities are basic. The nearest hospital to Oukaimeden is in Marrakech (1.5 hours).',
                      'Altitude sickness is possible at Oukaimeden (2,600-3,258m). Allow time to acclimatize.',
                      'The Atlas sun is intense at altitude. Sunscreen, lip balm, and goggles are essential.',
                      'Lift infrastructure is older. Exercise caution on T-bars and drag lifts.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-[#1A1814] text-sm">Winter Trekking & Snowshoeing</h4>
                  <ul className="space-y-2 text-sm text-[#1A1814]/80">
                    {[
                      'Licensed mountain guides are mandatory for Toubkal in winter (and strongly recommended everywhere).',
                      'Weather can change rapidly in the Atlas Mountains. Carry warm layers even on sunny mornings.',
                      'Rivers and streams swell with snowmelt and can be dangerous to cross.',
                      'Mobile phone signal is unreliable in mountain valleys. Carry a map and compass.',
                      'Travel insurance with mountain rescue coverage is essential for backcountry activities.',
                      'Inform your accommodation of your planned route and expected return time.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Shield className="w-3.5 h-3.5 text-[#A0522D] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ski Morocco, Beach by Afternoon ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
                Ski Morocco, Beach by Afternoon
              </h2>
              <div className="w-16 h-1 bg-[#C4960C] mx-auto mb-4 rounded-full" />
              <p className="text-[#1A1814]/70 max-w-2xl mx-auto">
                One of Morocco&apos;s most extraordinary travel claims: the possibility of skiing in the morning and reaching the Atlantic
                coast by afternoon. It is tight, it requires planning, and it is not relaxing, but it is genuinely possible, and it makes
                for an unforgettable story.
              </p>
            </div>

            <div className="card-moroccan p-6 md:p-8 mb-8">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C4960C]" />
                The Ski-to-Beach Itinerary
              </h3>
              <div className="space-y-4">
                {[
                  {
                    time: '7:00 AM',
                    activity: 'Depart Marrakech',
                    detail: 'Leave your riad early and drive south toward Oukaimeden (75 km, approximately 1.5 hours).',
                  },
                  {
                    time: '8:30 AM',
                    activity: 'Arrive at Oukaimeden',
                    detail: 'Rent equipment, purchase lift pass, and begin skiing. The slopes are usually quietest in the early morning.',
                  },
                  {
                    time: '8:30 - 11:30 AM',
                    activity: 'Ski the Atlas',
                    detail: 'Three hours of skiing on snow-covered Atlas Mountain slopes at 2,600-3,258 meters altitude.',
                  },
                  {
                    time: '11:30 AM',
                    activity: 'Return equipment and depart',
                    detail: 'Return rental gear and head back down the mountain road toward Marrakech.',
                  },
                  {
                    time: '1:00 PM',
                    activity: 'Quick stop in Marrakech (optional)',
                    detail: 'Grab lunch at a roadside restaurant or continue straight to the coast. Marrakech to Essaouira is approximately 190 km (2.5-3 hours).',
                  },
                  {
                    time: '3:30 - 4:00 PM',
                    activity: 'Arrive at the Atlantic coast',
                    detail: 'Reach Essaouira or the beaches between Essaouira and Agadir. Walk on the beach, feel the sand. You were skiing six hours ago.',
                  },
                  {
                    time: '4:00 PM onward',
                    activity: 'Beach time and sunset',
                    detail: 'Watch the Atlantic sunset from the ramparts of Essaouira or a beach bar in Taghazout. Consider that this morning you were at 3,000 meters in snow.',
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-20 shrink-0 text-right">
                      <span className="text-sm font-bold text-[#A0522D]">{step.time}</span>
                    </div>
                    <div className="w-px bg-[#A0522D]/30 relative shrink-0">
                      <div className="absolute top-1 -left-1 w-2.5 h-2.5 rounded-full bg-[#A0522D]" />
                    </div>
                    <div className="pb-4">
                      <p className="font-bold text-[#1A1814] text-sm">{step.activity}</p>
                      <p className="text-sm text-[#1A1814]/70">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="card-moroccan p-5 text-center">
                <Mountain className="w-6 h-6 text-[#A0522D] mx-auto mb-2" />
                <p className="font-bold text-[#1A1814] text-sm">Morning</p>
                <p className="text-xs text-[#1A1814]/60">Skiing at 3,000m+ in the Atlas</p>
              </div>
              <div className="card-moroccan p-5 text-center">
                <Car className="w-6 h-6 text-[#C4960C] mx-auto mb-2" />
                <p className="font-bold text-[#1A1814] text-sm">Midday</p>
                <p className="text-xs text-[#1A1814]/60">Drive through Marrakech plains</p>
              </div>
              <div className="card-moroccan p-5 text-center">
                <Waves className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <p className="font-bold text-[#1A1814] text-sm">Afternoon</p>
                <p className="text-xs text-[#1A1814]/60">Atlantic beach and sunset</p>
              </div>
            </div>

            <div className="mt-6 card-moroccan p-5 border-l-4 border-[#C4960C]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#C4960C] mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-sm text-[#1A1814] mb-1">Reality Check</p>
                  <p className="text-sm text-[#1A1814]/70">
                    This itinerary is more of a bucket-list adventure than a relaxing day. The total driving time is roughly 5-6 hours.
                    You will not get a full day of skiing or a full day at the beach. But you will have done something almost no one else
                    has done: gone from snow to sand in a single day in Africa. The surfing version (ski in the morning, surf in the
                    afternoon in Taghazout) is even more ambitious but has been done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison with European Resorts ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
                Morocco vs. European Ski Resorts
              </h2>
              <div className="w-16 h-1 bg-[#A0522D] mx-auto mb-4 rounded-full" />
              <p className="text-[#1A1814]/70 max-w-2xl mx-auto">
                An honest comparison. Morocco is not trying to compete with the Alps. It offers a fundamentally different experience
                at a fraction of the cost. Here is how the numbers compare.
              </p>
            </div>

            <div className="card-moroccan overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1A1814]">
                      <th className="text-left p-4 text-white font-[family-name:var(--font-heading)]">Category</th>
                      <th className="text-left p-4 text-white font-[family-name:var(--font-heading)]">
                        <span className="flex items-center gap-1">
                          <Snowflake className="w-3.5 h-3.5" />
                          Morocco
                        </span>
                      </th>
                      <th className="text-left p-4 text-white font-[family-name:var(--font-heading)]">Europe (Budget)</th>
                      <th className="text-left p-4 text-white font-[family-name:var(--font-heading)]">Europe (Popular)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resortComparisons.map((row, i) => (
                      <tr key={i} className={`border-t border-[#EDE8E0] ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}`}>
                        <td className="p-4 font-medium text-[#1A1814]">{row.category}</td>
                        <td className="p-4 text-[#A0522D] font-medium">{row.morocco}</td>
                        <td className="p-4 text-[#1A1814]/70">{row.europeBudget}</td>
                        <td className="p-4 text-[#1A1814]/70">{row.europePopular}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Honest Assessment */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Where Morocco Wins
                </h3>
                <ul className="space-y-2">
                  {[
                    'Cost: 3-5 times cheaper than European resorts for everything',
                    'Crowds: Almost never crowded, even on peak weekends',
                    'Uniqueness: No other destination offers this cultural-skiing combination',
                    'Cultural depth: Berber villages, medinas, desert within easy reach',
                    'Food: Moroccan cuisine is world-class and incredibly affordable',
                    'Climate diversity: Ski and beach in the same country (same day)',
                    'Warmth: Base temperatures often milder than European Alps',
                    'Adventure factor: Raw, unpolished experience that feels authentic',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#1A1814]/80">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#C4960C]" />
                  Where Europe Wins
                </h3>
                <ul className="space-y-2">
                  {[
                    'Infrastructure: Modern lifts, groomed runs, snowmaking, ski patrol',
                    'Snow reliability: Artificial snowmaking guarantees coverage',
                    'Terrain variety: Hundreds of runs versus a handful',
                    'Safety: Professional ski patrol and mountain rescue',
                    'Equipment rental: Modern, well-maintained gear',
                    'Apres-ski: Extensive dining, nightlife, and entertainment',
                    'Ski schools: Multilingual, professional instruction programs',
                    'Accessibility: Easy to reach from major European cities',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#1A1814]/80">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 card-moroccan p-6 bg-[#A0522D]/5 border border-[#A0522D]/20">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#A0522D]" />
                The Bottom Line
              </h3>
              <p className="text-sm text-[#1A1814]/80 leading-relaxed">
                Do not come to Morocco expecting Val d&apos;Isere or Verbier. Come expecting a warm, affordable, culturally rich experience
                that happens to include skiing. The slopes are a bonus on top of a Morocco trip, not the reason for the trip. If you adjust
                your expectations accordingly, you will have an extraordinary time. The best approach is to plan a Morocco holiday that includes
                a ski day or two, rather than a ski holiday that happens to be in Morocco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#A0522D] mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Can you really ski in Morocco?',
                a: 'Yes. Morocco has been a skiing destination since the 1930s. Oukaimeden in the High Atlas is the primary resort, with 5 lifts and 10 runs at 2,600-3,258 meters altitude, just 75 km from Marrakech. Michlifen near Ifrane in the Middle Atlas is the second resort. The season runs from December to March, depending entirely on natural snowfall. The skiing is modest by European standards but genuine, affordable, and set against spectacular mountain scenery.',
              },
              {
                q: 'Is it worth going to Oukaimeden if I am an advanced skier?',
                a: 'Honestly, probably not for the on-piste skiing alone. Oukaimeden has mostly beginner and intermediate terrain with limited vertical. However, the surrounding mountains offer ski touring potential above the resort, and the cultural experience of skiing in Africa combined with a Marrakech trip can make it worthwhile. Advanced skiers looking for challenging terrain should consider backcountry ski touring on Jebel Bou Iblane or Jebel Ayachi instead.',
              },
              {
                q: 'Do I need to book a ski trip in advance?',
                a: 'For Oukaimeden day trips from Marrakech, no advance booking is usually necessary outside of peak weekends (January-February Saturdays). Equipment rental is first-come-first-served. For accommodation at the resort or guided backcountry trips, booking in advance is recommended, especially during the short peak season.',
              },
              {
                q: 'Can I snowboard at Oukaimeden?',
                a: 'Yes. Snowboarding is allowed on all runs. A few rental shops at the base have snowboards available, though the selection is more limited than skis. If you are particular about your board or bindings, bring your own. The terrain is best suited to beginner and intermediate snowboarders.',
              },
              {
                q: 'Is there artificial snowmaking at Moroccan ski resorts?',
                a: 'No. Neither Oukaimeden nor Michlifen has snowmaking equipment. The resorts rely entirely on natural snowfall. This means conditions are unpredictable, and there will be winters (or weeks within a winter) with little to no skiable snow. Always check conditions before making the trip.',
              },
              {
                q: 'How does altitude affect skiing at Oukaimeden?',
                a: 'At 2,600-3,258 meters, altitude sickness is a possibility, especially if you fly into Marrakech (at 450 meters) and drive up to the resort the same day. Symptoms include headache, nausea, and shortness of breath. Take it easy on your first runs, drink plenty of water, and descend if you feel unwell. Most people acclimatize quickly at these altitudes, but it is worth being aware of.',
              },
              {
                q: 'Can I take ski lessons at Oukaimeden?',
                a: 'Yes. The resort has a ski school with instructors who speak French and Arabic (some speak English). Group and private lessons are available at reasonable prices (200-400 MAD for a private lesson). The gentle beginner slopes at the base are well-suited for learning. Quality of instruction varies, but the gentle terrain is forgiving for beginners.',
              },
              {
                q: 'What about ski insurance and mountain rescue?',
                a: 'There is no organized mountain rescue service at Moroccan ski resorts. Travel insurance with winter sports coverage and emergency evacuation is strongly recommended. For backcountry skiing, mountaineering-grade insurance with helicopter evacuation coverage is essential. The nearest hospitals to Oukaimeden and Michlifen are in Marrakech and Ifrane respectively, both at least 1.5 hours away.',
              },
              {
                q: 'Is the road to Oukaimeden safe in winter?',
                a: 'The road is paved but narrow and winding in the upper sections. Snow chains are required when there is snow (police check at a checkpoint). The road can close temporarily in heavy snowfall. Drive carefully, especially on the descent when ice forms in the afternoon shade. Grand taxis and tour operators from Marrakech are experienced with the winter road conditions.',
              },
              {
                q: 'Can I combine skiing with a Sahara desert trip?',
                a: 'Absolutely, and this is one of Morocco\'s unique travel propositions. A 7-10 day itinerary could include: Marrakech (2-3 nights), ski day trip to Oukaimeden, drive over the Atlas via Tizi n\'Tichka to Ouarzazate and Merzouga (2-3 nights for desert and dunes), return to Marrakech or continue to Fes. In January-February, you could experience snow in the Atlas and mild desert sunshine in the Sahara on the same trip.',
              },
              {
                q: 'How do locals react to skiing in Morocco?',
                a: 'Skiing at Oukaimeden is popular with Moroccan families from Marrakech, especially on weekends. Many Moroccans from the mountains grew up playing in the snow and are comfortable in winter conditions. The resort has a festive, family atmosphere on busy weekends, with children sledding, families picnicking in the snow, and a generally warm, welcoming vibe. You will not be the only person on the slopes.',
              },
              {
                q: 'What is the best base for a skiing holiday in Morocco?',
                a: 'Marrakech is the best base for Oukaimeden (75 km away). You get world-class cultural experiences, dining, and accommodation combined with easy day-trip access to the slopes. For Michlifen, Ifrane is the closest base (18 km), with Fes (80 km) as a larger city alternative offering more cultural attractions. For backcountry skiing at Bou Iblane, Taza is the nearest town.',
              },
            ].map((faq, i) => (
              <div key={i} className="card-moroccan p-5">
                <h3 className="font-bold text-[#1A1814] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUKAIMEDEN FEATURE IMAGE ── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] group">
            <img src="/images/hero-ski-oukaimeden.webp" alt="Skiers on the slopes of Oukaimeden, Africa highest ski resort in the Atlas Mountains of Morocco" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6">
              <p className="text-white font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold">
                Oukaimeden -- Africa&apos;s Highest Ski Resort
              </p>
              <p className="text-white/80 text-sm md:text-base mt-1">
                At 3,200 meters in the High Atlas, just 80 km from Marrakech. Season runs December through March.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Plan Your Morocco Winter Adventure
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Combine Atlas Mountain skiing with Marrakech&apos;s medinas, Saharan dunes, and Atlantic surf. No other destination on earth
            offers this range of experiences in a single trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trekking"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-4 h-4" />
              Atlas Trekking
            </Link>
            <Link
              href="/surfing"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Waves className="w-4 h-4" />
              Surfing Guide
            </Link>
            <Link
              href="/adventure"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Compass className="w-4 h-4" />
              All Adventures
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

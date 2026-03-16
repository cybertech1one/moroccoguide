import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Mountain,
  MapPin,
  Clock,
  Star,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Thermometer,
  Footprints,
  Compass,
  Sun,
  CloudSnow,
  Users,
  Tent,
  Heart,
  Backpack,
  Landmark,
  Shield,
  TreePine,
  Snowflake,
  Lightbulb,
  ArrowUp,
  Route,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Atlas Mountains Guide Morocco | Toubkal, Trekking, Gorges & Day Trips',
  description:
    'Explore the Atlas Mountains of Morocco. Complete trekking guide for Toubkal, M\'Goun, Jebel Saghro, Dades & Todra Gorges, Ouzoud Falls, Rif Mountains, with routes, guides, Berber villages, and day trips from Marrakech.',
  openGraph: {
    title: 'Atlas Mountains Complete Guide - Morocco',
    description:
      'From the summit of Toubkal to the gorges of Todra. Trekking routes, mountain villages, ski resorts, and practical tips for every level.',
    url: 'https://citytoursmorocco.com/mountains',
    images: [
      {
        url: '/images/hero-atlas.webp',
        width: 1200,
        height: 630,
        alt: 'Atlas Mountains landscape with snow-capped peaks and Berber village',
      },
    ],
  },
};

const mountainRanges = [
  {
    name: 'High Atlas',
    nameArabic: 'Idraren Draren',
    description:
      'The backbone of Morocco, stretching 1,000 km from the Atlantic coast near Agadir to northeastern Morocco. Home to North Africa\'s highest peak, Jebel Toubkal (4,167m), and dozens of peaks above 3,000m. The High Atlas divides Morocco into Mediterranean and Saharan climate zones, creating dramatically different landscapes on each side. This is where you will find the most popular trekking routes, the deepest gorges, and the most spectacular mountain scenery in North Africa.',
    highlights: ['Jebel Toubkal (4,167m)', 'Dramatic gorges and valleys', 'Traditional Berber villages', 'Snow in winter, wildflowers in spring'],
    bestTime: 'April-June, September-November',
    keyAreas: 'Toubkal region, Dades Valley, Todra Gorge, M\'Goun massif, Ourika Valley',
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Middle Atlas',
    nameArabic: 'Idraren n Wammas',
    description:
      'The lush, green heart of Morocco. The Middle Atlas is covered in cedar, oak, and pine forests and is home to the endangered Barbary macaque (the only African primate north of the Sahara). The region includes natural lakes, waterfalls, and the town of Ifrane, sometimes called "Little Switzerland" for its chalet-style French colonial architecture. Less dramatic than the High Atlas but more accessible, the Middle Atlas offers a gentler mountain experience with excellent wildlife viewing.',
    highlights: ['Cedar forests & Barbary macaques', 'Ifrane & Azrou forests', 'Ouzoud Waterfalls', 'Natural lakes (Aguelmame Azigza, Dayet Aoua)'],
    bestTime: 'Year-round (skiing Dec-Mar, hiking Apr-Nov)',
    keyAreas: 'Ifrane, Azrou, Ouzoud, Beni Mellal, Taza',
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Anti-Atlas',
    nameArabic: 'Idraren n Dern',
    description:
      'The oldest mountain range in Morocco, with rocks dating back over 2 billion years to the Precambrian era. The Anti-Atlas rises south of the High Atlas and extends toward the Sahara, creating a surreal landscape of volcanic rock formations, painted gorges, and oasis valleys. Less visited than the High Atlas, it offers extraordinary geology, the famous almond blossoms of Tafraoute (February), and some of the most otherworldly terrain in Africa.',
    highlights: ['Ancient geological formations', 'Tafraoute painted rocks', 'Almond blossoms (February)', 'Ameln Valley'],
    bestTime: 'October-April (too hot in summer)',
    keyAreas: 'Tafraoute, Ameln Valley, Ait Mansour Gorge, Jebel Lkest',
    image: '/images/hero-trekking.webp',
  },
  {
    name: 'Rif Mountains',
    nameArabic: 'Idurar n Arif',
    description:
      'The northernmost mountain range in Morocco, running along the Mediterranean coast from Tangier to the Algerian border. The Rif reaches 2,456m at Jebel Tidiquin and is best known as the home of Chefchaouen, the famous blue city. The western Rif is lush and green with thick forests, while the eastern Rif is more arid. The Talassemtane National Park near Chefchaouen offers excellent hiking through fir forests and past the dramatic Akchour waterfalls.',
    highlights: ['Chefchaouen (Blue City)', 'Talassemtane National Park', 'Akchour Waterfalls', 'God\'s Bridge natural arch'],
    bestTime: 'March-June, September-November',
    keyAreas: 'Chefchaouen, Akchour, Talassemtane, Al Hoceima',
    image: '/images/hero-chefchaouen.webp',
  },
];

const trekkingRoutes = [
  {
    name: 'Toubkal Summit',
    altitude: '4,167m',
    difficulty: 'Moderate-Challenging',
    duration: '2-3 days',
    distance: '~30 km round trip',
    description:
      'The crown jewel of Moroccan trekking and the highest peak in North Africa. The standard route from Imlil (1,740m) follows the Mizane Valley through walnut groves to the village of Aremd (1,900m), then climbs steeply to the Toubkal Refuge (Les Mouflons) at 3,207m. Day two is the summit push: a demanding 960m ascent over scree and boulder fields to the top. On a clear day, you can see the Sahara to the south and the Atlantic to the west.',
    highlights: ['Highest peak in North Africa', 'Panoramic summit views', 'Toubkal Refuge overnight', 'Accessible from Marrakech (90 min to Imlil)'],
    detailedRoute: 'Day 1: Imlil (1,740m) to Toubkal Refuge (3,207m), 10 km, 5-6 hours. Follow the Mizane Valley past Aremd and Sidi Chamharouch shrine. Day 2: Refuge to Summit (4,167m) and back to Imlil, 20 km, 8-10 hours total. Depart 5-6am for the summit via the south cirque route. The final 500m is loose scree requiring careful footing.',
    guideMandatory: true,
    season: 'April-June, September-November (winter summit requires crampons, ice axes, and alpine experience)',
    price: '2,000-4,000 MAD for guided 2-day trek (includes guide, mule, meals, refuge)',
    image: '/images/hero-trekking.webp',
  },
  {
    name: "M'Goun Traverse",
    altitude: '4,071m',
    difficulty: 'Challenging',
    duration: '5-7 days',
    distance: '70-100 km',
    description:
      'Morocco\'s second-highest peak and one of the most rewarding multi-day treks in the country. The M\'Goun Traverse crosses the High Atlas from north to south, passing through the spectacular M\'Goun Gorge (the "Grand Canyon of Morocco" with walls 300m high), traditional Berber villages of the Ait Bouguemez Valley (the "Happy Valley"), and high alpine meadows above 3,500m. Less crowded than Toubkal and more of a true wilderness experience.',
    highlights: ['M\'Goun Gorge (Morocco\'s Grand Canyon)', 'Ait Bouguemez "Happy Valley"', 'Alpine meadows and wild camping', 'Remote Berber villages'],
    detailedRoute: 'Classic route: Start from Tabant in the Ait Bouguemez Valley. Day 1-2: Trek through the valley to Tarkeddit Plateau (3,200m). Day 3: Summit M\'Goun (4,071m) via the north ridge, camp at Ouillim. Day 4-5: Descend through the M\'Goun Gorge (wading through knee-deep river). Day 6-7: Exit via El Kelaa M\'Gouna (the Valley of Roses).',
    guideMandatory: true,
    season: 'June-September (higher altitude means later snow melt; gorge requires low water levels)',
    price: '3,000-6,000 MAD for guided 5-day trek (includes guide, mule team, all meals, camping)',
    image: '/images/hero-trekking.webp',
  },
  {
    name: 'Jebel Saghro',
    altitude: '2,712m',
    difficulty: 'Moderate',
    duration: '3-6 days',
    distance: '40-80 km',
    description:
      'A spectacular volcanic massif between the High Atlas and the Sahara. Jebel Saghro offers dramatic pinnacles, basalt towers, and canyon landscapes that look like they belong on another planet. The trek passes through semi-nomadic Ait Atta Berber territory, and you camp wild among extraordinary rock formations. This is the best winter trek in Morocco because the lower altitude and southern exposure keep it warm when the High Atlas is snowbound.',
    highlights: ['Volcanic rock formations', 'Nomadic Berber camps', 'Best winter trek in Morocco', 'Otherworldly landscapes'],
    detailedRoute: 'Most popular circuit: Tagdilt N\'Bour to Bab n\'Ali (the famous twin rock towers). Day 1: Tagdilt to Igli camp (1,800m). Day 2: Igli to Bab n\'Ali (2,200m), the iconic gateway rock. Day 3-4: Cross the plateau of Kouaouch, visiting nomad camps. Day 5: Descend to N\'Kob or Boumalne Dades.',
    guideMandatory: false,
    season: 'October-April (the ideal winter alternative to High Atlas; too hot May-September)',
    price: '1,500-3,500 MAD for guided multi-day trek',
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Azzaden Valley',
    altitude: '3,500m max',
    difficulty: 'Easy-Moderate',
    duration: '2-4 days',
    distance: '25-50 km',
    description:
      'A gentler alternative to the Toubkal summit that explores the beautiful Azzaden Valley south of Imlil. The trek winds through terraced fields, walnut groves, and Berber villages connected by ancient mule tracks. Stay in village gites (guesthouses) and experience authentic mountain hospitality with home-cooked tagines and fresh bread baked in communal ovens. Perfect for those who want the Atlas experience without the high-altitude challenge.',
    highlights: ['Berber village homestays', 'Terraced agriculture', 'Gentler terrain', 'Cultural immersion'],
    detailedRoute: 'Day 1: Imlil to Tinerhourhine (2,200m), 5 hours, through walnut forests. Day 2: Tinerhourhine to Azib Tamsoult (2,500m), 4 hours, past seasonal shepherd camps. Day 3: Optional climb to Tizi n\'Mzik (3,489m) for views, then return to Imlil via a different valley.',
    guideMandatory: false,
    season: 'March-November (lower altitude means a longer season)',
    price: '1,200-3,000 MAD for guided 3-day trek',
    image: '/images/hero-chefchaouen.webp',
  },
];

const gorgesAndFalls = [
  {
    name: 'Todra Gorge',
    location: 'Near Tinghir, High Atlas',
    description: 'Morocco\'s most dramatic gorge: a 300m-deep slot canyon with sheer limestone walls just 10 meters apart at their narrowest point. The gorge is a world-class rock climbing destination with over 150 bolted routes (grades 4 to 8b French scale). For non-climbers, the 600m walk through the canyon floor is stunning, and several cafes sit at the gorge entrance. The morning light (9-11am) illuminates the canyon walls most dramatically.',
    activities: ['Rock climbing (150+ routes, all grades)', 'Canyon walk (30-60 min)', 'Photography (morning light is best)', 'Swimming in spring (seasonal river pools)'],
    gettingThere: 'From Tinghir: 14 km (20 min drive). From Marrakech: 9 hours via Ouarzazate. From Merzouga: 3.5 hours.',
    practicalTip: 'Climbing gear can be rented in Tinghir or from guides at the gorge entrance (100-200 MAD/day). Experienced climbing guides charge 400-600 MAD/day. Visit early morning to avoid tour bus crowds.',
    image: '/images/hero-todra-gorge.webp',
  },
  {
    name: 'Dades Gorge',
    location: 'Near Boumalne Dades, High Atlas',
    description: 'A winding 25 km gorge carved through red and orange rock formations over millions of years. The lower gorge features the famous "monkey fingers" rock formations (eroded conglomerate pillars), while the upper gorge narrows dramatically with overhanging cliffs. The road through the gorge includes hairpin bends so tight they have become an Instagram sensation. Several excellent guesthouses perch on cliff edges with dizzying valley views.',
    activities: ['Scenic driving (25 km gorge road)', 'Hiking side canyons', 'Rock climbing (developing scene)', 'Mountain biking', 'Photography (monkey fingers formations)'],
    gettingThere: 'From Boumalne Dades: 0 km (gorge starts at the town edge). From Ouarzazate: 115 km (1.5 hours). From Marrakech: 7-8 hours.',
    practicalTip: 'Stay overnight in the gorge for sunrise views. Auberge Le Festival and Chez Pierre are excellent mid-range options. The upper gorge road is unpaved and requires a 4x4 or sturdy walking legs.',
    image: '/images/hero-dades-gorge.webp',
  },
  {
    name: 'Ouzoud Waterfalls',
    location: 'Middle Atlas, near Beni Mellal',
    description: 'The highest waterfalls in North Africa at 110 meters, cascading in three tiers into a gorge of red rock and olive trees. Wild Barbary macaques swing in the trees, and a permanent rainbow forms in the mist on sunny days. Take a small boat to the base (20 MAD) for the full experience. The area is a popular weekend escape for Moroccan families, creating a lively, festive atmosphere.',
    activities: ['Waterfall viewing (multiple vantage points)', 'Boat ride at the base (20 MAD)', 'Barbary macaque spotting', 'Natural swimming pools', 'Hike the canyon rim trail (2-3 hours loop)'],
    gettingThere: 'From Marrakech: 150 km (2.5-3 hours via Beni Mellal). From Fes: 350 km (5 hours). No direct public transport; join a tour or hire a private driver.',
    practicalTip: 'Visit on a weekday to avoid weekend crowds. The trails down to the base are steep and slippery when wet. Wear proper shoes. Do not feed the macaques. Morning light creates the best rainbow effect in the mist.',
    image: '/images/hero-national-parks.webp',
  },
];

const mountainVillages = [
  {
    name: 'Imlil',
    altitude: '1,740m',
    description: 'The main gateway to Toubkal and the most popular mountain village in Morocco. A bustling little hub with guesthouses, cafes, equipment hire shops, and the Bureau des Guides. The starting point for most Atlas treks. Despite its popularity, the village retains its Berber character with stone houses and terraced gardens.',
    fromMarrakech: '90 minutes by car (60 km via Asni)',
    mustDo: 'Stay at Kasbah du Toubkal, a stunning hilltop lodge built on the ruins of a former kasbah with panoramic Toubkal views',
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Aremd (Aroumd)',
    altitude: '1,900m',
    description: 'A traditional Berber village perched above Imlil with breathtaking views of the Toubkal massif. More authentic and quieter than Imlil, it is the last permanent settlement on the Toubkal trail. Stone houses cascade down the hillside amid walnut and cherry trees. The village is car-free and reached by a 45-minute uphill walk from Imlil or a shorter mule ride.',
    fromMarrakech: '2 hours (90 min drive + 45 min walk from Imlil)',
    mustDo: 'Overnight in a family-run gite, share a home-cooked tagine dinner, and wake to views of snow-capped Toubkal',
    image: '/images/hero-trekking.webp',
  },
  {
    name: 'Setti Fatma',
    altitude: '1,290m',
    description: 'Located in the Ourika Valley, Setti Fatma is famous for its seven waterfalls and is one of the easiest Atlas experiences to access from Marrakech. On weekends, Moroccan families picnic along the river. The village hosts an annual moussem (festival) in August attracting pilgrims from across the region. The lower waterfalls are accessible to most fitness levels.',
    fromMarrakech: '60 minutes by car (60 km)',
    mustDo: 'Hike to the seven waterfalls with a local guide (50-100 MAD, 2-3 hours round trip) and swim in the natural pools',
    image: '/images/hero-national-parks.webp',
  },
  {
    name: 'Ifrane & Azrou',
    altitude: '1,665m / 1,250m',
    description: 'Ifrane is Morocco\'s "Little Switzerland," a clean, orderly town with red-roofed chalets built during the French Protectorate. It holds the African cold record (-23.9C in 1935). Nearby Azrou is a more traditional Berber market town sitting at the edge of a magnificent cedar forest. The forest between the two towns is the best place in Morocco to see wild Barbary macaques, the only primate species native to Africa\'s north.',
    fromMarrakech: '5.5 hours via Beni Mellal (350 km). More commonly visited from Fes (75 km, 1 hour)',
    mustDo: 'Walk the Azrou Cedar Forest (Foret de Cedres) to spot Barbary macaques. The cedars here are centuries old, with some specimens reaching 40m tall.',
    image: '/images/hero-national-parks.webp',
  },
];

const dayTrips = [
  {
    name: 'Ourika Valley',
    duration: 'Half day - Full day',
    description: 'The closest Atlas escape from Marrakech. A fertile valley with a rushing river, Berber villages, and the Setti Fatma waterfalls. Visit a saffron farm (Safran de l\'Ourika, 30 MAD entry), an argan oil cooperative, or a traditional Berber garden. The Monday souk in the lower valley is one of the most authentic mountain markets in the region.',
    distance: '60 km from Marrakech',
    highlights: ['Setti Fatma waterfalls', 'Saffron farm visit', 'Traditional Berber market (Monday)', 'River-side lunch'],
    price: '300-800 MAD (guided); free if self-driving',
  },
  {
    name: 'Ouzoud Waterfalls',
    duration: 'Full day',
    description: 'The highest waterfalls in North Africa at 110 meters, cascading in three tiers into a gorge of red rock and olive trees. Wild Barbary macaques swing in the trees, and a rainbow forms in the mist on sunny days. Take a small boat to the base (20 MAD) for the full experience. Allow 3-4 hours for the complete canyon walk and boat ride.',
    distance: '150 km from Marrakech (2.5 hours)',
    highlights: ['110m cascading waterfalls', 'Barbary macaques', 'Boat ride at the base', 'Natural swimming pools', 'Canyon rim hiking trail'],
    price: '500-1,200 MAD (guided)',
  },
  {
    name: 'Tizi n\'Tichka Pass & Ait Benhaddou',
    duration: 'Full day',
    description: 'The highest road pass in Morocco at 2,260m, connecting Marrakech to the Sahara-side. The drive itself is the attraction: hairpin bends through ever-changing landscapes, from green valleys to barren mountain plateaus. Usually combined with a visit to the UNESCO-listed Ait Benhaddou kasbah, one of the best-preserved examples of traditional Moroccan earthen architecture.',
    distance: '200 km to Ait Benhaddou',
    highlights: ['Dramatic mountain pass (2,260m)', 'Ait Benhaddou UNESCO site', 'Argan tree-climbing goats (seasonal)', 'Ouarzazate film studios'],
    price: '600-1,500 MAD (guided)',
  },
  {
    name: 'Oukaimeden Ski & Hike',
    duration: 'Full day',
    description: 'Africa\'s highest ski resort at 2,600-3,258m, just 75 km from Marrakech. In winter (December-March), basic ski lifts operate when snow conditions allow. Equipment rental is available on-site (150-250 MAD/day). In summer, the area transforms into an excellent hiking zone with alpine meadows, petroglyphs (Bronze Age rock carvings), and wildflowers. The road up from Ourika Valley is scenic.',
    distance: '75 km from Marrakech (1.5 hours)',
    highlights: ['Africa\'s highest ski resort', 'Bronze Age petroglyphs', 'Summer wildflower meadows', 'Panoramic High Atlas views'],
    price: 'Self-drive + lift pass (100-200 MAD) or guided trip (500-1,000 MAD)',
  },
];

const altitudeSicknessTips = [
  {
    title: 'What is Altitude Sickness?',
    description: 'Acute Mountain Sickness (AMS) can affect anyone above 2,500m, regardless of fitness. Symptoms include headache, nausea, dizziness, fatigue, and shortness of breath. On Toubkal (4,167m) and M\'Goun (4,071m), AMS is a real concern because the typical 2-day itinerary involves rapid altitude gain.',
  },
  {
    title: 'Prevention',
    description: 'Ascend slowly when possible. Spend an extra night at the Toubkal Refuge (3,207m) to acclimatize before the summit push. Drink 3-4 liters of water per day. Avoid alcohol and sleeping pills. Eat carbohydrate-rich meals. Consider prophylactic Acetazolamide (Diamox, 125mg twice daily), available over the counter in Moroccan pharmacies for about 30 MAD per box. Start the day before ascent.',
  },
  {
    title: 'Warning Signs',
    description: 'Mild AMS (headache, tiredness) is common and usually manageable. Descend immediately if symptoms worsen to include confusion, severe headache that does not respond to painkillers, persistent vomiting, difficulty breathing at rest, or loss of coordination (ataxia). These indicate potentially life-threatening HACE (High Altitude Cerebral Edema) or HAPE (High Altitude Pulmonary Edema).',
  },
  {
    title: 'The Golden Rule',
    description: 'If you feel unwell at altitude, assume it is AMS until proven otherwise. The treatment is always descent. Never ascend further with symptoms. Your guide should carry a basic first aid kit and know the fastest descent routes. On Toubkal, the nearest medical facility is in Asni (1.5-2 hours from the refuge by mule).',
  },
];

const berberVillageStays = [
  {
    aspect: 'Accommodation',
    description: 'Gites (guesthouses) are family homes with guest rooms. Expect mattresses on the floor with heavy blankets, shared squat toilets (sometimes Western), and hot water from a bucket or solar heater. Rooms are clean and basic. Most gites can accommodate 4-12 guests.',
    price: '150-400 MAD/night including dinner and breakfast',
  },
  {
    aspect: 'Meals',
    description: 'Home-cooked Berber food is one of the highlights. Expect vegetable tagine with preserved lemons, freshly baked bread from the communal oven (tandir), harira soup, seasonal salads, couscous on Fridays, and endless mint tea. Meals are communal and eaten on the floor from a shared dish. The food is simple, fresh, and delicious.',
    price: 'Included in gite price or 50-100 MAD separately',
  },
  {
    aspect: 'Etiquette',
    description: 'Remove shoes before entering a home. Accept mint tea when offered (it is rude to refuse). Eat with your right hand. Ask before photographing people. Dress modestly (cover shoulders and knees). A small gift for the family is appreciated: school supplies for children, fruit, sugar, or tea are always welcome.',
    price: 'Bring a small gift (not money for children)',
  },
  {
    aspect: 'What to Expect',
    description: 'Mountain village life revolves around agriculture, animals, and the seasons. You may be invited to help with farming tasks, watch bread being made, or join a family for an evening of tea and conversation. Electricity is available in most villages but is unreliable. Wifi is rare. Mobile signal is patchy to nonexistent. This is the appeal: genuine disconnection.',
    price: 'Priceless',
  },
];

const chefchaouenHiking = [
  {
    trail: 'Akchour Waterfalls',
    distance: '11 km round trip',
    duration: '4-5 hours',
    difficulty: 'Moderate',
    description: 'A beautiful river trail through Talassemtane National Park to the Big Waterfall (Cascade d\'Akchour, 100m). The trail follows the Oued Farda river through forested gorges with swimming holes. A side trail leads to the extraordinary God\'s Bridge (Pont de Dieu), a natural rock arch spanning the canyon 25m above the river.',
  },
  {
    trail: 'Jebel El Kelaa',
    distance: '8 km round trip',
    duration: '3-4 hours',
    difficulty: 'Moderate',
    description: 'The mountain directly above Chefchaouen, topped with the ruins of a Spanish mosque. The trail starts from the southeast corner of the medina and climbs steadily through pine forest. The summit (1,616m) offers a stunning bird\'s-eye view of the blue city below and the Rif Mountains stretching to the horizon.',
  },
  {
    trail: 'Talassemtane Forest Loop',
    distance: '15-20 km',
    duration: 'Full day',
    difficulty: 'Moderate-Challenging',
    description: 'A full-day circuit through the Moroccan fir (Abies marocana) forests of Talassemtane National Park. This rare endemic tree species survives only in the western Rif. The trail passes through dense forest, crosses mountain streams, and reaches viewpoints above 2,000m. Hire a guide from Chefchaouen (300-500 MAD/day).',
  },
];

const oukaimeden = {
  name: 'Oukaimeden',
  altitude: '2,600-3,258m',
  description: 'The highest ski resort in Africa and one of only two in Morocco (the other being Michlifen near Ifrane). Located 75 km south of Marrakech in the High Atlas, Oukaimeden has been a winter sports destination since the 1940s when French colonists built the first lifts. Today it has 7 ski runs served by a chairlift and several T-bar lifts. The season is short and snow-dependent (December-March), and the infrastructure is basic by European standards, but the novelty of skiing in Africa with Atlas panoramas is hard to beat.',
  winterInfo: {
    season: 'December - March (snow dependent, often only January-February)',
    liftPass: '100-200 MAD/day',
    rental: '150-250 MAD/day for full equipment',
    runs: '7 runs: 2 green, 3 blue, 2 red. Longest run ~3 km.',
    facilities: 'Basic cafes, equipment rental shops, small hotels. No fancy apres-ski.',
  },
  summerInfo: {
    activities: 'Hiking, mountain biking, rock climbing, wildflower viewing, paragliding',
    petroglyphs: 'Bronze Age rock carvings (2,000-3,000 years old) scattered across the plateau, depicting weapons, animals, and hunting scenes. Free to visit, follow signs from the village.',
    highlight: 'The hike to Jebel Oukaimeden summit (3,258m) takes 2-3 hours from the village and offers 360-degree views of the High Atlas, including Toubkal on clear days.',
  },
};

const packingList = [
  { category: 'Footwear', items: ['Broken-in hiking boots with ankle support (essential for Toubkal)', 'Trail sandals for camp/village evenings', 'Moisture-wicking hiking socks (2-3 pairs)', 'Gaiter sleeves for scree slopes (Toubkal summit)'] },
  { category: 'Clothing', items: ['Moisture-wicking base layers (merino wool ideal)', 'Insulating fleece or down jacket', 'Waterproof shell jacket (Gore-Tex or similar)', 'Hiking trousers (zip-off preferred for versatility)', 'Sun hat and warm beanie', 'Insulated gloves for altitude (Toubkal/M\'Goun)', 'Buff or neck gaiter (sun and wind protection)'] },
  { category: 'Gear', items: ['30-40L daypack with hip belt', 'Trekking poles (highly recommended for scree and descents)', 'Headlamp with extra batteries', 'Sleeping bag: 3-season for summer, 4-season for winter or Toubkal', 'Water bottles or hydration bladder (2L minimum)', 'Water purification tablets or Steripen', 'Sunglasses (Category 3-4 UV protection)'] },
  { category: 'Health & Safety', items: ['Sunscreen SPF 50+ (reapply frequently at altitude)', 'First aid kit with blister plasters (Compeed)', 'Altitude sickness medication (Acetazolamide/Diamox)', 'Personal medications (sufficient supply + prescription copy)', 'Electrolyte sachets for hydration', 'Lip balm with SPF', 'Toilet paper and hand sanitizer (mountain toilets are basic)'] },
];

const trekDifficultyGuide = [
  {
    level: 'Easy',
    color: 'var(--color-green)',
    examples: 'Ourika Valley, Setti Fatma waterfalls, Ouzoud Falls',
    fitness: 'Any reasonable fitness. Suitable for families with children 6+.',
    altitude: 'Below 2,000m',
    terrain: 'Well-marked paths, some uneven ground, occasional steps',
    guide: 'Optional but helpful for navigation and cultural context',
  },
  {
    level: 'Moderate',
    color: 'var(--color-accent)',
    examples: 'Azzaden Valley, Jebel Saghro, Akchour Waterfalls',
    fitness: 'Regular exercise recommended. You should be comfortable walking 6-8 hours per day with a daypack.',
    altitude: '2,000-3,500m',
    terrain: 'Mountain paths, some steep sections, river crossings, uneven terrain',
    guide: 'Recommended for multi-day treks. Optional for day hikes near villages.',
  },
  {
    level: 'Challenging',
    color: 'var(--color-primary)',
    examples: 'Toubkal summit, M\'Goun Traverse',
    fitness: 'Good cardiovascular fitness required. You should be able to hike 8-10 hours over steep terrain with altitude effects.',
    altitude: '3,500m+',
    terrain: 'Scree slopes, boulder fields, snow/ice in winter, high passes, some scrambling',
    guide: 'Mandatory for Toubkal and M\'Goun. Essential for safety at altitude and route-finding.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Atlas Mountains Morocco',
  description: 'Complete guide to the Atlas Mountains including trekking routes, gorges, mountain villages, ski resorts, and day trips.',
  url: 'https://citytoursmorocco.com/mountains',
  touristType: ['Adventure tourism', 'Hiking', 'Nature tourism', 'Rock climbing'],
  geo: { '@type': 'GeoCoordinates', latitude: 31.0601, longitude: -7.9118 },
  image: '/images/hero-atlas.webp',
};

export default function MountainsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/hero-atlas.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Mountains</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            The Atlas Mountains
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            North Africa&apos;s rooftop. Trek to the summit of Toubkal, explore Berber villages hidden in high valleys, climb the gorges of Todra, and discover landscapes that shift from alpine meadows to Saharan foothills.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco&apos;s Mountain Kingdom
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Most visitors come to Morocco for the medinas, the desert, and the coast. But the Atlas Mountains, rising to over 4,000 meters just 90 minutes from Marrakech, offer an entirely different Morocco &mdash; one of snow-capped peaks, terraced valleys, rushing rivers, and ancient Berber villages where life has changed little in centuries.
              </p>
              <p>
                Morocco has four distinct mountain ranges. The <strong>High Atlas</strong> is the dramatic heart, home to North Africa&apos;s highest peak (Toubkal, 4,167m) and the most popular trekking routes. The <strong>Middle Atlas</strong> is the green, forested interior with cedar groves, lakes, and Barbary macaques. The <strong>Anti-Atlas</strong> is the oldest and most geologically fascinating, with landscapes that would not look out of place on Mars. And the <strong>Rif Mountains</strong> in the north shelter the famous blue city of Chefchaouen amid lush forested peaks.
              </p>
              <p>
                Whether you are a serious trekker aiming for the summit of Toubkal, a rock climber drawn to the walls of Todra Gorge, a casual hiker looking for a day trip from Marrakech, or a cultural traveler wanting to experience traditional Berber hospitality in a mountain village, Morocco&apos;s mountains have something extraordinary to offer at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Ranges */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Four Mountain Ranges
          </h2>
          <div className="space-y-8">
            {mountainRanges.map((range) => (
              <div key={range.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
                    <img src={range.image} alt={range.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="lg:col-span-3 p-8">
                    <div className="flex items-baseline gap-3 mb-3">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {range.name}
                      </h3>
                      <span className="text-sm text-[var(--text-muted)] italic">{range.nameArabic}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{range.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {range.highlights.map((h) => (
                        <span key={h} className="tag tag-primary">{h}</span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-[var(--text-muted)]">
                      <span>
                        <Clock className="w-3.5 h-3.5 inline mr-1" />
                        Best time: {range.bestTime}
                      </span>
                      <span>
                        <MapPin className="w-3.5 h-3.5 inline mr-1" />
                        Key areas: {range.keyAreas}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trekking Routes */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Top Trekking Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From two-day summit pushes to week-long traverses, the Atlas offers trekking for every level and ambition.
          </p>
          <div className="space-y-10">
            {trekkingRoutes.map((route) => (
              <div key={route.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img src={route.image} alt={route.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="tag tag-accent">{route.altitude}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {route.name}
                      </h3>
                      {route.guideMandatory && (
                        <span className="tag tag-primary">Guide mandatory</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] mb-4">
                      <span><Footprints className="w-3.5 h-3.5 inline mr-1" />{route.difficulty}</span>
                      <span><Clock className="w-3.5 h-3.5 inline mr-1" />{route.duration}</span>
                      <span><Compass className="w-3.5 h-3.5 inline mr-1" />{route.distance}</span>
                      <span><DollarSign className="w-3.5 h-3.5 inline mr-1" />{route.price}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{route.description}</p>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                        <Route className="w-4 h-4 text-[var(--color-primary)]" />
                        Detailed Route
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{route.detailedRoute}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {route.highlights.map((h) => (
                        <span key={h} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-3 py-1 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      <Sun className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                      <strong>Best season:</strong> {route.season}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty Guide */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Footprints className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Trekking Difficulty Levels
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding what each difficulty level means in practice, so you can choose the right trek for your fitness and experience.
          </p>
          <div className="space-y-6">
            {trekDifficultyGuide.map((level) => (
              <div key={level.level} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: level.color }} />
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{level.level}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">Examples</p>
                    <p className="text-[var(--text-secondary)]">{level.examples}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">Fitness Required</p>
                    <p className="text-[var(--text-secondary)]">{level.fitness}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">Altitude</p>
                    <p className="text-[var(--text-secondary)]">{level.altitude}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">Terrain</p>
                    <p className="text-[var(--text-secondary)]">{level.terrain}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">Guide</p>
                    <p className="text-[var(--text-secondary)]">{level.guide}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gorges & Waterfalls */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Gorges & Waterfalls
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s mountains are carved by water into some of the most dramatic canyon landscapes in North Africa.
          </p>
          <div className="space-y-8">
            {gorgesAndFalls.map((gorge, index) => (
              <div key={gorge.name} className="card-moroccan overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-0 ${index % 2 === 1 ? '' : ''}`}>
                  <div className={`relative h-64 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img src={gorge.image} alt={gorge.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="tag tag-accent">{gorge.location}</span>
                    </div>
                  </div>
                  <div className={`lg:col-span-2 p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                      {gorge.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{gorge.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {gorge.activities.map((a) => (
                        <span key={a} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-3 py-1 rounded-full">
                          {a}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-[var(--text-primary)] mb-1">
                          <MapPin className="w-3.5 h-3.5 inline mr-1" />Getting There
                        </p>
                        <p className="text-[var(--text-secondary)]">{gorge.gettingThere}</p>
                      </div>
                      <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                        <p className="text-[var(--text-muted)] leading-relaxed">
                          <Lightbulb className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                          <strong>Tip:</strong> {gorge.practicalTip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chefchaouen & Rif Hiking */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white text-center mb-4">
            Rif Mountains: Chefchaouen Area Hiking
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
            The blue city is not just for photos. The surrounding Rif Mountains offer some of Morocco&apos;s best day hikes through forests, gorges, and to cascading waterfalls.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chefchaouenHiking.map((trail) => (
              <div key={trail.trail} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{trail.trail}</h3>
                <div className="flex flex-wrap gap-3 text-sm text-[var(--text-muted)] mb-3">
                  <span><Compass className="w-3.5 h-3.5 inline mr-1" />{trail.distance}</span>
                  <span><Clock className="w-3.5 h-3.5 inline mr-1" />{trail.duration}</span>
                  <span><Footprints className="w-3.5 h-3.5 inline mr-1" />{trail.difficulty}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{trail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cedar Forests & Barbary Macaques */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TreePine className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Cedar Forests of the Middle Atlas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Home to ancient cedars and Morocco&apos;s most charismatic wildlife: the Barbary macaque.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Azrou Cedar Forest (Foret de Cedres)</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                The most accessible Barbary macaque habitat in Morocco. Located 4 km south of Azrou on the road to Midelt, the forest is home to several troops of semi-wild macaques who are accustomed to visitors. The cedar trees here are magnificent, with some specimens reaching 40m tall and over 800 years old. The famous Gouraud Cedar (Cedre Gouraud) is a single tree with a 9m trunk circumference.
              </p>
              <div className="bg-[var(--surface-muted)] rounded-lg p-3 mb-3">
                <p className="text-xs text-[var(--text-muted)]">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  75 km from Fes (1 hour). Often combined with an Ifrane visit. Free entry.
                </p>
              </div>
              <div className="bg-[var(--color-accent)]/5 rounded-lg p-3">
                <p className="text-xs text-[var(--text-muted)]">
                  <AlertTriangle className="w-3 h-3 inline mr-1 text-[var(--color-accent-dark)]" />
                  Do not feed the macaques. They are wild animals and can bite. Keep food hidden. Do not make direct eye contact or show teeth, which they interpret as aggression.
                </p>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Ifrane National Park</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                A 500 km2 protected area of cedar and holm oak forest, wetlands, and natural lakes. The park supports populations of Barbary macaques, Barbary stag (reintroduced), wild boar, golden jackal, and over 200 bird species. The lake of Dayet Aoua is an important birdwatching site, particularly for migratory species in spring and autumn. The park has marked hiking trails ranging from 2 to 20 km.
              </p>
              <div className="bg-[var(--surface-muted)] rounded-lg p-3 mb-3">
                <p className="text-xs text-[var(--text-muted)]">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  Park headquarters in Ifrane. 60 km from Fes. Small entry fee (20 MAD).
                </p>
              </div>
              <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                <p className="text-xs text-[var(--text-muted)]">
                  <Snowflake className="w-3 h-3 inline mr-1 text-blue-500" />
                  Ifrane holds the African cold temperature record: -23.9C in February 1935. Winters are harsh with regular snowfall. Bring warm clothing even in autumn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oukaimeden Ski Resort */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Snowflake className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Oukaimeden: Africa&apos;s Highest Ski Resort
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            {oukaimeden.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <CloudSnow className="w-5 h-5 text-[var(--color-primary)]" />
                Winter Season
              </h3>
              <ul className="space-y-3">
                {Object.entries(oukaimeden.winterInfo).map(([key, value]) => (
                  <li key={key} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                    <span><strong className="text-[var(--text-primary)] capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5 text-[var(--color-accent)]" />
                Summer Season
              </h3>
              <ul className="space-y-3">
                {Object.entries(oukaimeden.summerInfo).map(([key, value]) => (
                  <li key={key} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                    <span><strong className="text-[var(--text-primary)] capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Best Time for Trekking
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Atlas Mountains have distinct seasons that dramatically affect trekking conditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { season: 'Spring (Apr-Jun)', icon: Sun, temp: '15-25C', desc: 'Ideal. Wildflowers bloom, snow melts on high passes, rivers are full. The best time for Toubkal and M\'Goun. Ourika Valley is lush and green.', rating: 5 },
              { season: 'Autumn (Sep-Nov)', icon: Compass, temp: '12-22C', desc: 'Excellent. Clear skies, comfortable temperatures, harvest season in valleys. Second-best window for high-altitude treks. October is peak tourist season.', rating: 5 },
              { season: 'Winter (Dec-Mar)', icon: CloudSnow, temp: '-5 to 15C', desc: 'Cold with snow above 2,000m. Toubkal requires full winter gear (crampons, ice axes). Jebel Saghro and Anti-Atlas are excellent alternatives. Ski season at Oukaimeden.', rating: 3 },
              { season: 'Summer (Jul-Aug)', icon: Thermometer, temp: '25-40C', desc: 'Hot at lower altitudes but pleasant above 2,500m. High passes are snow-free. Best for M\'Goun and the highest routes. Lower valleys (Ourika, Dades) can be sweltering.', rating: 3 },
            ].map((s) => (
              <div key={s.season} className="card-moroccan p-6 text-center">
                <s.icon className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-3" />
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{s.season}</h3>
                <p className="text-sm text-[var(--color-primary)] font-semibold mb-2">{s.temp}</p>
                <div className="flex justify-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < s.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--border)]'}`} />
                  ))}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Altitude Sickness */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ArrowUp className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Altitude Sickness: What You Need to Know
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential reading for anyone planning to trek above 3,000m, particularly for Toubkal and M&apos;Goun.
          </p>
          <div className="space-y-6">
            {altitudeSicknessTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                  {tip.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Guides */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Hiring a Mountain Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A licensed guide is mandatory for Toubkal and M&apos;Goun, and strongly recommended for all multi-day treks.
          </p>
          <div className="space-y-6">
            {[
              {
                title: 'Licensed Guides',
                description: 'Morocco requires mountain guides to be licensed by the Ministry of Tourism. Licensed guides carry an official ID card (ask to see it), have first aid and mountain rescue training, and speak at least French and Arabic (many speak English, Spanish, or German). Expect to pay 400-600 MAD per day for a licensed guide. The Bureau des Guides in Imlil is the most established outfit for the Toubkal region.',
              },
              {
                title: 'Mule Handlers (Muletiers)',
                description: 'For multi-day treks, a mule carries your heavy gear, food, and camping equipment. A mule and handler costs approximately 200-300 MAD per day. This is standard practice and makes the trek significantly more enjoyable. Mule handlers are typically local Berbers with extraordinary knowledge of the mountains, often more than the guides themselves.',
              },
              {
                title: 'Where to Hire',
                description: 'Guides can be hired through the Bureau des Guides in Imlil (for High Atlas), through your riad or hotel, or through certified trekking agencies such as Toubkal Guide, Discover Morocco Trekking, or Mountain Voyage. Avoid unlicensed guides who approach you on the street in Imlil. The best guides are often booked 2-4 weeks in advance during peak season (April-May, October).',
              },
              {
                title: 'What Is Included',
                description: 'A full-service guided trek typically includes the guide, mule support, all meals on the trail (breakfast, lunch, dinner, snacks), camping equipment (tents, mats, sleeping bags), cooking equipment, and refuge fees. You need to bring your own clothing, daypack, water, and personal items. Always confirm inclusions and price in writing before departure.',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berber Village Stays */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white text-center mb-4">
            Berber Village Stays
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
            Spending a night in a Berber mountain village is one of Morocco&apos;s most authentic and rewarding experiences. Here is what to know.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {berberVillageStays.map((item) => (
              <div key={item.aspect} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{item.aspect}</h3>
                  <span className="text-xs font-semibold text-[var(--color-primary)]">{item.price}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mountain Villages */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Mountain Villages & Bases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mountainVillages.map((village) => (
              <div key={village.name} className="card-moroccan overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img src={village.image} alt={village.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-[var(--text-primary)]">
                    <Mountain className="w-3 h-3 inline mr-1" />{village.altitude}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{village.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{village.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-[var(--text-muted)]">
                      <MapPin className="w-3.5 h-3.5 inline mr-1" />{village.fromMarrakech}
                    </p>
                    <p className="text-[var(--text-secondary)]">
                      <Heart className="w-3.5 h-3.5 inline mr-1 text-[var(--color-primary)]" />
                      <strong>Must do:</strong> {village.mustDo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Mountain Accommodation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: 'Mountain Gites',
                price: '150-400 MAD/night (dinner + breakfast included)',
                description: 'Basic but charming village guesthouses, often family-run. Shared rooms with mattresses on the floor, communal meals, and extraordinary Berber hospitality. The most authentic mountain experience. Found in every trekking village.',
                icon: Tent,
              },
              {
                type: 'Kasbah Hotels',
                price: '800-3,000 MAD/night',
                description: 'Restored kasbahs (fortified houses) converted into boutique hotels. The finest is Kasbah du Toubkal in Imlil (1,200-2,500 MAD), a stunning hilltop lodge with Toubkal views. Kasbah Tamadot (Richard Branson\'s property) offers ultra-luxury above Imlil.',
                icon: Landmark,
              },
              {
                type: 'Mountain Refuges',
                price: '100-200 MAD/night',
                description: 'Basic refuges on trekking routes. The CAF (Club Alpin Francais) Toubkal Refuge ("Les Mouflons") at 3,207m is the most famous: bunk beds, communal kitchen, basic meals available, and spectacular views. Book ahead in peak season. Essential for Toubkal summit attempts.',
                icon: Mountain,
              },
              {
                type: 'Wild Camping',
                price: 'Free - 100 MAD/night',
                description: 'Wild camping is generally permitted in the mountains above the village line. Organized campsites exist near popular trailheads. Your guide will know the best spots with water sources and wind protection. Multi-day treks like M\'Goun and Saghro rely on wild camping.',
                icon: Star,
              },
            ].map((acc) => (
              <div key={acc.type} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <acc.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{acc.type}</h3>
                <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">{acc.price}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{acc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day Trips */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Day Trips from Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            You do not need to be a trekker to enjoy the Atlas. These day trips offer stunning mountain scenery without an overnight commitment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dayTrips.map((trip) => (
              <div key={trip.name} className="card-moroccan p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{trip.name}</h3>
                <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mb-3">
                  <span><Clock className="w-3.5 h-3.5 inline mr-1" />{trip.duration}</span>
                  <span><MapPin className="w-3.5 h-3.5 inline mr-1" />{trip.distance}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{trip.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {trip.highlights.map((h) => (
                    <span key={h} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-1 rounded-full border border-[var(--border-light)]">{h}</span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-[var(--color-primary)]">
                  <DollarSign className="w-3.5 h-3.5 inline mr-1" />{trip.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing List */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            What to Pack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packingList.map((category) => (
              <div key={category.category} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                  <Backpack className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore the Atlas?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Browse guided treks, day trips from Marrakech, and mountain accommodation options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-4 h-4" /> Mountain Treks
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

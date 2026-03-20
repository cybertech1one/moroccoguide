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
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Mountain,
  Compass,
  Car,
  Fuel,
  Sun,
  Camera,
  Globe,
  AlertTriangle,
  Phone,
  Thermometer,
  Route,
  Calendar,
  Navigation,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Morocco Road Trips 2026 | Self-Drive Itineraries, Routes & Driving Guide',
  description:
    'Plan your Morocco road trip with 6 epic self-drive itineraries covering the Atlantic Coast, Atlas Mountains, Imperial Cities, Sahara Desert, Northern Morocco, and Draa Valley. Distances, drive times, fuel costs, road conditions, and day-by-day stops.',
  keywords: [
    'morocco road trip',
    'best road trips morocco',
    'morocco self drive itinerary',
    'morocco driving route',
    'road trip morocco 10 days',
    'morocco road trip itinerary',
    'driving in morocco',
    'morocco self drive',
    'atlantic coast morocco road trip',
    'morocco desert road trip',
    'imperial cities morocco driving',
    'atlas mountains road trip',
    'morocco road conditions',
    'morocco car rental',
    'northern morocco road trip',
    'draa valley driving route',
    'morocco fuel costs',
    'morocco road trip planning',
    'morocco scenic drives',
    'best driving routes morocco 2026',
  ],
  openGraph: {
    title: 'Best Morocco Road Trips 2026 | Self-Drive Itineraries & Routes',
    description:
      'Six epic self-drive itineraries across Morocco with day-by-day stops, distances, fuel costs, road conditions, and local tips for the Atlantic Coast, Atlas Mountains, Imperial Cities, and Sahara Desert.',
    url: `${BASE_URL}/morocco-road-trips`,
    images: [
      {
        url: `${BASE_URL}/images/hero-road-trips.webp`,
        width: 1200,
        height: 630,
        alt: 'Winding road through the Atlas Mountains of Morocco with dramatic mountain scenery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Morocco Road Trips 2026 | Self-Drive Itineraries & Routes',
    description:
      'Six epic road trip routes across Morocco. Day-by-day itineraries, distances, drive times, fuel costs, and essential driving tips for a self-drive adventure.',
    images: [`${BASE_URL}/images/hero-road-trips.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-road-trips` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-road-trips`,
  name: 'Best Morocco Road Trips 2026 | Self-Drive Itineraries, Routes & Driving Guide',
  description:
    'Plan your Morocco road trip with 6 epic self-drive itineraries covering the Atlantic Coast, Atlas Mountains, Imperial Cities, Sahara Desert, Northern Morocco, and Draa Valley.',
  url: `${BASE_URL}/morocco-road-trips`,
  image: `${BASE_URL}/images/hero-road-trips.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-road-trips`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Road Trips', item: `${BASE_URL}/morocco-road-trips` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need an international driving permit to drive in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco requires an International Driving Permit (IDP) alongside your home country license. Rental agencies at airports usually check for both. The IDP costs around $20 USD and is available from your local automobile association. Police checkpoints along major routes also ask for documentation, so carry both permits and your passport at all times.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to rent a car in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic economy car (Dacia Logan or Renault Clio) costs from 250 MAD per day. Mid-range SUVs (Dacia Duster) start from 450 MAD per day. A 4x4 suitable for desert tracks runs from 700 MAD per day. Book online in advance for better rates. Full insurance (CDW plus theft protection) adds from 80-150 MAD per day. Always photograph the car before and after pickup.',
      },
    },
    {
      '@type': 'Question',
      name: 'What side of the road do you drive on in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco drives on the right side of the road, same as continental Europe and the United States. Speed limits are generally 60 km/h in towns, 100 km/h on national roads, and 120 km/h on autoroutes (motorways). Speed cameras and radar traps are common, especially on the approaches to towns. Fines start from 300 MAD and are payable on the spot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are roads in Morocco safe for self-driving?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major highways (autoroutes) between Tangier, Rabat, Casablanca, and Marrakech are modern toll roads in excellent condition. National roads (N-routes) connecting smaller cities are paved but often narrow, with sharp bends in mountain sections. Drive defensively: expect donkeys, cyclists, and pedestrians on rural roads. Avoid night driving outside cities, as unlit vehicles and animals on the road create hazards.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does fuel cost in Morocco in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Diesel costs approximately 12-14 MAD per liter and unleaded petrol (gasoline) around 14-16 MAD per liter. Prices fluctuate monthly. Most rental cars in Morocco are diesel. Fill up before entering mountainous or desert regions, where stations can be 100+ km apart. Credit cards are accepted at chain stations (Afriquia, Shell, Total) but carry cash for rural pumps.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take a rental car from Morocco into the Sahara Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard rental agreements cover paved roads only. The road to Merzouga (Erg Chebbi) is fully paved via the N13, so any car can reach the desert edge. The road to Erg Chigaga near M Hamid requires a 4x4 or guided tour for the final 50 km of piste (dirt track). Check your rental contract for off-road restrictions. Some agencies charge a surcharge for desert areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a Morocco road trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'March to May and September to November offer the most comfortable driving conditions across all regions. Summer (June-August) is scorching in the desert and interior, though the coast stays pleasant. Winter (December-February) brings snow to mountain passes like Tizi n Test (2,092m) and Tizi n Tichka (2,260m), sometimes closing roads for days. The Atlantic Coast is driveable year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do I need for a Morocco road trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused route like the Atlantic Coast or Imperial Cities Loop works well in 5-7 days. The Grand Atlas Circuit or Desert Explorer routes need 8-10 days minimum to avoid exhausting daily drives. A comprehensive Morocco road trip combining multiple routes requires 14-21 days. Avoid packing too many kilometers into a single day. Mountain and desert roads are slow, averaging 40-60 km/h despite short distances on the map.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ROAD TRIP ROUTES
   ═══════════════════════════════════════════════════════════════ */

const roadTripRoutes = [
  {
    name: 'The Atlantic Coast Run',
    tagline: 'Tangier to Essaouira along Morocco\'s ocean edge',
    icon: Compass,
    totalDistance: '950 km',
    totalDays: '5-7 days',
    bestSeason: 'Year-round (best Apr-Jun & Sep-Nov)',
    fuelEstimate: 'From 900 MAD (diesel, one way)',
    difficulty: 'Easy',
    image: '/images/hero-essaouira.webp',
    days: [
      {
        day: 'Day 1',
        route: 'Tangier to Asilah to Larache',
        distance: '120 km',
        driveTime: '1.5 hours',
        highlights: 'Explore Tangier\'s Kasbah and Petit Socco in the morning. Drive south along the N1 to Asilah, a whitewashed Atlantic town famous for its annual mural festival. Walk the ramparts, photograph the painted medina walls. Continue 40 km south to Larache for the night. Visit the ruins of Lixus, an ancient Phoenician settlement overlooking the Loukkos River.',
        stay: 'Riad in Larache medina from 350 MAD/night',
      },
      {
        day: 'Day 2',
        route: 'Larache to Rabat',
        distance: '200 km',
        driveTime: '2.5 hours',
        highlights: 'Morning detour to Moulay Bousselham lagoon, one of Morocco\'s prime birdwatching sites. Pink flamingos and marsh harriers feed here October through March. Rejoin the motorway to Rabat. Spend the afternoon at the Hassan Tower, the Kasbah of the Udayas, and the Chellah necropolis. Rabat\'s restaurants are cheaper and less touristy than Marrakech.',
        stay: 'Hotel in Rabat from 500 MAD/night',
      },
      {
        day: 'Day 3',
        route: 'Rabat to El Jadida',
        distance: '200 km',
        driveTime: '2 hours',
        highlights: 'Take the A1 autoroute south past Casablanca (stop for the Hassan II Mosque if time allows). Continue to El Jadida. The Portuguese Cistern, an underground chamber with a shallow pool reflecting stone columns, is one of Morocco\'s most photogenic sites. Walk the 16th-century Portuguese ramparts at sunset.',
        stay: 'Hotel in El Jadida from 400 MAD/night',
      },
      {
        day: 'Day 4',
        route: 'El Jadida to Oualidia to Safi',
        distance: '160 km',
        driveTime: '2.5 hours (coastal road)',
        highlights: 'Oualidia is Morocco\'s oyster capital. Stop at the lagoon for fresh oysters (from 60 MAD per dozen) and a swim in the sheltered tidal pool. The R301 coastal road south to Safi passes salt flats and empty beaches. Safi is known for its pottery workshops in the medina hill. Watch artisans shape and glaze ceramics in wood-fired kilns.',
        stay: 'Riad in Safi from 300 MAD/night',
      },
      {
        day: 'Day 5-7',
        route: 'Safi to Essaouira',
        distance: '130 km',
        driveTime: '1.5 hours',
        highlights: 'Arrive in Essaouira by late morning. Two or three days here is not too many. The medina is UNESCO-listed. Explore the ramparts, Skala du Port, the fish grill market (lunch from 50 MAD), and the thuya wood workshops. Afternoon wind makes this a world-class kitesurfing spot. Day trip to the argan forest to visit a women\'s cooperative.',
        stay: 'Riad in Essaouira medina from 400 MAD/night',
      },
    ],
    roadConditions: 'Autoroute and well-paved national roads for the entire route. The coastal section between El Jadida and Safi is a two-lane road with occasional slow trucks. No mountain passes. Suitable for any rental car.',
  },
  {
    name: 'The Grand Atlas Circuit',
    tagline: 'Over the highest passes and through Morocco\'s deepest gorges',
    icon: Mountain,
    totalDistance: '1,200 km',
    totalDays: '8-10 days',
    bestSeason: 'April to June & September to October',
    fuelEstimate: 'From 1,400 MAD (diesel, loop from Marrakech)',
    difficulty: 'Moderate to challenging',
    image: '/images/hero-atlas-mountains.webp',
    days: [
      {
        day: 'Day 1',
        route: 'Marrakech to Ait Benhaddou via Tizi n\'Tichka',
        distance: '185 km',
        driveTime: '3.5 hours',
        highlights: 'The N9 climbs from Marrakech through olive groves and into the High Atlas. Tizi n\'Tichka pass tops out at 2,260 meters with sweeping views. Detour 20 km off the main road to visit Kasbah Telouet, the crumbling palace of the Glaoui lords, with intact zellige mosaics inside. Descend to Ait Benhaddou, the UNESCO-listed ksar used in Gladiator and Game of Thrones.',
        stay: 'Guesthouse facing Ait Benhaddou from 350 MAD/night',
      },
      {
        day: 'Day 2',
        route: 'Ait Benhaddou to Skoura via Ouarzazate',
        distance: '90 km',
        driveTime: '1.5 hours',
        highlights: 'Morning in Ouarzazate: visit the Atlas Film Studios (from 50 MAD entry), then the Kasbah Taourirt. Continue east on the N10 to Skoura, a palm oasis with over 700,000 date palms. Walk or cycle through the palmery to Kasbah Amridil, one of Morocco\'s best-preserved kasbahs, featured on the old 50-dirham note.',
        stay: 'Kasbah guesthouse in Skoura from 500 MAD/night',
      },
      {
        day: 'Day 3',
        route: 'Skoura to Dades Gorge',
        distance: '110 km',
        driveTime: '2 hours',
        highlights: 'Drive through the Valley of Roses (the rose harvest in May fills the air for kilometers). At Boumalne Dades, turn north into the Dades Gorge. The road twists through dramatic red rock formations, including the famous "monkey fingers" rock pillars. Drive 30 km up the gorge; the road narrows and the cliff walls close in.',
        stay: 'Hotel in Dades Gorge from 300 MAD/night',
      },
      {
        day: 'Day 4',
        route: 'Dades Gorge to Todra Gorge to Tinghir',
        distance: '75 km',
        driveTime: '1.5 hours',
        highlights: 'Backtrack to the N10, drive east to Tinghir. Todra Gorge is a 300-meter-deep canyon that narrows to just 10 meters wide at its base. Arrive early morning when sunlight floods the canyon floor. Rock climbers tackle the sheer walls (200+ routes graded 5a to 8b). Walk 2 km upstream past the narrow section to quieter pools.',
        stay: 'Hotel at Todra Gorge entrance from 250 MAD/night',
      },
      {
        day: 'Day 5-6',
        route: 'Tinghir to Merzouga (Erg Chebbi)',
        distance: '230 km',
        driveTime: '3.5 hours',
        highlights: 'The N10 then R702 crosses vast hammada (rocky desert plateau) before the dunes of Erg Chebbi appear on the horizon. Merzouga sits at the base of 150-meter-high sand dunes that shift color from gold to orange to pink depending on the light. Camel trek into the dunes (from 350 MAD), spend a night in a desert camp, wake for sunrise over the Sahara.',
        stay: 'Desert camp from 400 MAD/night (includes dinner and breakfast); hotel in Merzouga from 300 MAD',
      },
      {
        day: 'Day 7-8',
        route: 'Merzouga to Midelt via Ziz Gorge',
        distance: '300 km',
        driveTime: '5 hours',
        highlights: 'The N13 north passes through Errachidia and into the Ziz Gorge, a dramatic canyon lined with ksour and palm oases. Stop at the Ziz Valley overlook (signposted) for the best panorama. Blue Gate of Errachidia marks the transition from desert to mountain. Midelt sits between the High and Middle Atlas at 1,500m altitude. Buy local apples and fossils.',
        stay: 'Hotel in Midelt from 300 MAD/night',
      },
      {
        day: 'Day 8-10',
        route: 'Midelt to Marrakech via Beni Mellal',
        distance: '420 km',
        driveTime: '6 hours (split over 2 days)',
        highlights: 'Cross the Middle Atlas via Azrou, where Barbary macaques live in the cedar forests (stop at the Cedre Gouraud area). Drive through Beni Mellal with a detour to Ouzoud Falls, Morocco\'s highest waterfalls at 110 meters. Macaques swing through the mist at the base. Return to Marrakech via the N8.',
        stay: 'Ouzoud area guesthouse from 300 MAD/night',
      },
    ],
    roadConditions: 'Tizi n\'Tichka is well-paved but steep with hairpin turns. Dades and Todra Gorge roads are paved but narrow with no guardrails in places. The N10 between gorges is flat and fast. Road to Merzouga is fully paved. Middle Atlas section can have fog. A standard car handles this route, but an SUV adds comfort on gorge roads.',
  },
  {
    name: 'The Imperial Cities Loop',
    tagline: 'Four royal capitals connected by autoroute and history',
    icon: Route,
    totalDistance: '900 km',
    totalDays: '7-9 days',
    bestSeason: 'March to May & October to November',
    fuelEstimate: 'From 800 MAD (diesel, loop)',
    difficulty: 'Easy',
    image: '/images/hero-fes.webp',
    days: [
      {
        day: 'Day 1-2',
        route: 'Casablanca to Rabat',
        distance: '90 km',
        driveTime: '1 hour (autoroute)',
        highlights: 'Start in Casablanca with the Hassan II Mosque (from 130 MAD guided tour), the largest mosque in Africa. Its minaret stands 210 meters tall. Drive north on the A1 to Rabat. In the capital: the medieval Chellah ruins, the 12th-century Hassan Tower and its 200 columns, and the Kasbah of the Udayas overlooking the Bou Regreg river. The Mohammed VI Museum of Modern Art is Morocco\'s best contemporary gallery.',
        stay: 'Hotel in Rabat from 500 MAD/night',
      },
      {
        day: 'Day 3-4',
        route: 'Rabat to Meknes to Volubilis',
        distance: '140 km',
        driveTime: '1.5 hours',
        highlights: 'Meknes, Sultan Moulay Ismail\'s 17th-century capital, has massive Bab Mansour gate, the Heri es-Souani (royal granaries with underground irrigation), and a less-hectic medina than Fes. Drive 30 km north to Volubilis, the best-preserved Roman ruins in North Africa. Mosaics, triumphal arches, and a basilica stand amid rolling wheat fields. Arrive early to avoid tour groups.',
        stay: 'Riad in Meknes medina from 350 MAD/night',
      },
      {
        day: 'Day 5-7',
        route: 'Meknes to Fes',
        distance: '60 km',
        driveTime: '45 minutes',
        highlights: 'Fes el-Bali is the world\'s largest car-free urban area, a 9th-century medina with 9,400 lanes. Spend a full two days here. The Chouara tanneries, Bou Inania medersa, Al-Qarawiyyin university (founded 859 AD), and the Nejjarine Museum of Wooden Arts are essential. Hire a local guide (from 300 MAD for a half day) to navigate the medina. Evening: rooftop dinner overlooking the medina lights.',
        stay: 'Riad in Fes medina from 450 MAD/night',
      },
      {
        day: 'Day 7-9',
        route: 'Fes to Marrakech',
        distance: '530 km',
        driveTime: '5 hours (autoroute via Beni Mellal)',
        highlights: 'The A2 autoroute runs south through the Saiss plain. Break the drive at Ifrane, a Middle Atlas town that looks like a Swiss village at 1,665m altitude. The cedar forests around Azrou hold Barbary macaque troops. Continue to Beni Mellal, then Marrakech. In the Red City: Jemaa el-Fnaa square, Ben Youssef Medersa, Bahia Palace, and the Saadian Tombs. The souks are Morocco\'s largest.',
        stay: 'Riad in Marrakech medina from 500 MAD/night',
      },
    ],
    roadConditions: 'Almost entirely on autoroute (toll motorway) or well-maintained national roads. The A2 between Fes and Beni Mellal crosses the Middle Atlas with gentle gradients. Toll costs for the full loop run approximately 250 MAD. This is Morocco\'s easiest road trip, suitable for any vehicle and first-time visitors.',
  },
  {
    name: 'The Desert Explorer',
    tagline: 'Marrakech to the Sahara and back through the Draa Valley',
    icon: Sun,
    totalDistance: '1,100 km',
    totalDays: '8-10 days',
    bestSeason: 'October to April (avoid summer heat)',
    fuelEstimate: 'From 1,200 MAD (diesel, loop from Marrakech)',
    difficulty: 'Moderate',
    image: '/images/hero-desert.webp',
    days: [
      {
        day: 'Day 1',
        route: 'Marrakech to Ouarzazate via Tizi n\'Tichka',
        distance: '195 km',
        driveTime: '4 hours',
        highlights: 'Cross the High Atlas on the N9 over Tizi n\'Tichka (2,260m). Stop at the Taddert village for a glass of fresh orange juice with Atlas views. Ouarzazate is the "Hollywood of Africa," with Atlas Studios and CLA Studios nearby. The Kasbah Taourirt anchors the old town.',
        stay: 'Hotel in Ouarzazate from 350 MAD/night',
      },
      {
        day: 'Day 2',
        route: 'Ouarzazate to Agdz to Zagora',
        distance: '170 km',
        driveTime: '3 hours',
        highlights: 'The N9 south plunges into the Draa Valley, Morocco\'s longest river valley. The road descends from Tizi n\'Tinififft pass (1,660m) into a world of date palms, ksour, and golden sand. Agdz has a striking kasbah and a palmery walkable in an hour. At Tamnougalt, explore the 16th-century ksar. Zagora marks the old caravan departure point: a famous sign reads "Tombouctou 52 Jours" (52 days by camel to Timbuktu).',
        stay: 'Riad in Zagora from 350 MAD/night',
      },
      {
        day: 'Day 3',
        route: 'Zagora to M\'Hamid to Erg Chigaga',
        distance: '95 km paved + 50 km piste',
        driveTime: '2 hours paved + 2.5 hours off-road',
        highlights: 'Continue south through Tamegroute, famous for its green-glazed pottery and a library of ancient manuscripts. The road ends at M\'Hamid el Ghizlane, the last settlement before open desert. A 4x4 transfer (from 600 MAD per person round trip) reaches Erg Chigaga, a vast untouristy dune field 40 km wide. Far fewer visitors than Merzouga.',
        stay: 'Desert camp at Erg Chigaga from 500 MAD/night (dinner and breakfast included)',
      },
      {
        day: 'Day 4',
        route: 'Erg Chigaga back to M\'Hamid',
        distance: '50 km piste',
        driveTime: '2.5 hours',
        highlights: 'Morning sunrise over the dunes. Sandboard down the slip faces if your camp offers boards. After breakfast, the 4x4 returns to M\'Hamid. Spend the afternoon at the Monday souk (if timing aligns) or visit the old ksar. The Iriki salt lake south of town is a shimmering mirage in the heat.',
        stay: 'Riad in M\'Hamid from 300 MAD/night or head to Zagora',
      },
      {
        day: 'Day 5-6',
        route: 'Zagora to Nkob to Todra Gorge',
        distance: '280 km',
        driveTime: '5 hours',
        highlights: 'Take the N12 east through Tazzarine. Nkob has 45 kasbahs packed into one small town. Continue north to Tinghir and into Todra Gorge. The 300-meter canyon walls catch morning light spectacularly. Walk upstream 2 km to where the gorge opens into irrigated gardens. Rock climbing routes range from beginner to elite.',
        stay: 'Hotel at Todra Gorge from 250 MAD/night',
      },
      {
        day: 'Day 6-8',
        route: 'Todra Gorge to Dades Gorge to Ouarzazate',
        distance: '180 km',
        driveTime: '3.5 hours',
        highlights: 'Drive west to Boumalne Dades, turn north into Dades Gorge for the serpentine road and monkey finger rock formations. Return to the N10 and pass through the Valley of Roses (visit a rosewater distillery if here in April-May, from 20 MAD entry). Ouarzazate makes a convenient overnight before the return to Marrakech.',
        stay: 'Hotel in Ouarzazate from 350 MAD/night',
      },
      {
        day: 'Day 8-10',
        route: 'Ouarzazate to Marrakech via Tizi n\'Test (alternate return)',
        distance: '270 km',
        driveTime: '5 hours',
        highlights: 'Instead of repeating Tizi n\'Tichka, take the longer Tizi n\'Test route (N10 west through Tazenakht, then R203 north). Tizi n\'Test pass peaks at 2,092m on one of Morocco\'s most dramatic roads: single-lane in places, sheer drops, and views that justify every white-knuckle turn. Stop at the 12th-century Tin Mal Mosque, the last Almohad monument standing. Descend into the Souss Valley and back to Marrakech.',
        stay: 'Riad in Marrakech from 500 MAD/night',
      },
    ],
    roadConditions: 'Paved roads throughout except the 50 km piste to Erg Chigaga (4x4 mandatory). Tizi n\'Test is fully paved but extremely narrow and winding with no guardrails. Not recommended in wet weather or at night. The N12 between Zagora and Nkob has long stretches with no services. Fill up at every fuel station.',
  },
  {
    name: 'Northern Morocco Discovery',
    tagline: 'The Rif Mountains, blue Chefchaouen, and the Mediterranean coast',
    icon: Navigation,
    totalDistance: '700 km',
    totalDays: '5-7 days',
    bestSeason: 'April to June & September to November',
    fuelEstimate: 'From 700 MAD (diesel, one way Tangier to Fes)',
    difficulty: 'Moderate (mountain roads)',
    image: '/images/hero-chefchaouen.webp',
    days: [
      {
        day: 'Day 1',
        route: 'Tangier to Chefchaouen',
        distance: '115 km',
        driveTime: '2 hours',
        highlights: 'Leave Tangier on the N2 south through rolling countryside. Chefchaouen rises against the Rif Mountains, its medina painted in every shade of blue. Settle in, then walk to the Plaza Uta el-Hammam for dinner with kasbah views. The Ras el-Maa waterfall at the medina\'s edge is where locals gather to wash wool.',
        stay: 'Riad in Chefchaouen medina from 350 MAD/night',
      },
      {
        day: 'Day 2',
        route: 'Day trip: Akchour Waterfalls',
        distance: '30 km each way',
        driveTime: '45 minutes each way',
        highlights: 'Drive northeast to Akchour in Talassemtane National Park. Hike to the small waterfall (45 minutes, easy) or continue to the big waterfall (2.5 hours round trip, moderate). The God\'s Bridge natural rock arch spans 25 meters over the river. Pack lunch; facilities are minimal. Return to Chefchaouen.',
        stay: 'Second night in Chefchaouen',
      },
      {
        day: 'Day 3',
        route: 'Chefchaouen to Al Hoceima',
        distance: '215 km',
        driveTime: '4.5 hours',
        highlights: 'One of Morocco\'s most spectacular drives. The N2/N39 winds through the heart of the Rif Mountains: hairpin bends, deep valleys, and terraced hillsides of cannabis fields (cultivation is legal in this region under controlled conditions). The road demands full attention. Al Hoceima sits on a bay with clear Mediterranean water and Penon de Alhucemas, a Spanish islet, visible offshore.',
        stay: 'Hotel in Al Hoceima from 400 MAD/night',
      },
      {
        day: 'Day 4',
        route: 'Al Hoceima to Saïdia (Mediterranean coast)',
        distance: '230 km',
        driveTime: '4 hours',
        highlights: 'The coastal N16 hugs the Mediterranean with views of coves, fishing villages, and rocky headlands. Stop at Cala Iris for a seafood lunch (fresh fish from 60 MAD). Nador is the Rif\'s commercial hub; continue east to Saïdia, Morocco\'s easternmost beach resort, with 14 km of sand along the Algerian border. The marina has restaurants and watersport rentals.',
        stay: 'Hotel in Saïdia from 450 MAD/night',
      },
      {
        day: 'Day 5-7',
        route: 'Saïdia to Fes via Taza',
        distance: '310 km',
        driveTime: '4 hours',
        highlights: 'Head south through Oujda if you want to explore Morocco\'s eastern capital (excellent Andalusian-style medina). The N6 west passes Taza, gateway to the Tazekka National Park. The Friouato Caves, 22 km south of Taza, are among the deepest in Africa at 271 meters. Continue west to Fes through the Taza Gap, a strategic corridor between the Rif and Middle Atlas.',
        stay: 'Riad in Fes medina from 450 MAD/night',
      },
    ],
    roadConditions: 'The Rif Mountain roads between Chefchaouen and Al Hoceima are paved but narrow, with steep grades and tight switchbacks. Take it slow. The Mediterranean coastal road is in good condition. The A2 autoroute connects Oujda to Fes for a fast finish. Morning fog is common in the Rif. Not recommended during heavy rain.',
  },
  {
    name: 'The Draa Valley and Anti-Atlas Loop',
    tagline: 'Southern Morocco\'s least-visited treasures between mountains and desert',
    icon: Camera,
    totalDistance: '1,050 km',
    totalDays: '7-9 days',
    bestSeason: 'November to March (cooler desert temps)',
    fuelEstimate: 'From 1,100 MAD (diesel, loop from Marrakech)',
    difficulty: 'Moderate',
    image: '/images/hero-morocco.webp',
    days: [
      {
        day: 'Day 1',
        route: 'Marrakech to Taroudant',
        distance: '230 km',
        driveTime: '3 hours',
        highlights: 'Take the A7 autoroute southwest through Chichaoua, then the N10 to Taroudant. Surrounded by 7.5 km of intact red mud walls, Taroudant is called "little Marrakech" but with a fraction of the tourists. Two souks: the Arab souk for spices and the Berber souk for leather and pottery. The nearby Tioute oasis has a 400-year-old kasbah overlooking palm groves.',
        stay: 'Riad in Taroudant from 400 MAD/night',
      },
      {
        day: 'Day 2',
        route: 'Taroudant to Tafraout',
        distance: '145 km',
        driveTime: '3 hours',
        highlights: 'The R105 climbs into the Anti-Atlas through the Ait Baha region. Granite boulders the size of buildings stack against pink-hued mountains. Tafraout sits in an amphitheater of these formations. February brings the almond blossom festival when pink and white petals carpet the valley. Nearby, Belgian artist Jean Verame painted a cluster of boulders in vivid blues, reds, and purples in 1984. Visit Ameln Valley\'s hilltop Berber villages on foot.',
        stay: 'Hotel in Tafraout from 300 MAD/night',
      },
      {
        day: 'Day 3',
        route: 'Tafraout to Tiznit',
        distance: '105 km',
        driveTime: '2 hours',
        highlights: 'Head south through the R104 into increasingly arid terrain. Tiznit is Morocco\'s silver capital. The jewelers\' souk sells hand-hammered Berber fibulas, necklaces, and talismanic pendants from 150 MAD. The town\'s 5 km of ramparts are intact and walkable. A source (spring) feeds an old public washhouse inside the medina.',
        stay: 'Riad in Tiznit from 300 MAD/night',
      },
      {
        day: 'Day 4',
        route: 'Tiznit to Sidi Ifni to Guelmim',
        distance: '180 km',
        driveTime: '3 hours',
        highlights: 'Sidi Ifni, a former Spanish enclave on the coast, retains art deco buildings and a melancholy beauty. The Atlantic batters its seafront promenade. Continue to Guelmim, historically called the "Gateway to the Sahara" and the site of a famous Saturday camel market (reduced today but still worth visiting). Blue-robed Sahrawi traders dominate the region.',
        stay: 'Hotel in Guelmim from 250 MAD/night',
      },
      {
        day: 'Day 5-6',
        route: 'Guelmim to Zagora via Foum Zguid',
        distance: '350 km',
        driveTime: '5.5 hours',
        highlights: 'The N12 crosses true desert landscape east of Guelmim. Foum Zguid is a small oasis town at the western edge of the Draa. The drive crosses hammada plains and passes Iriki Lake (usually dry, sometimes a mirage). At Zagora, follow the Draa Valley north. Date palm oases stretch for kilometers along the riverbed, punctuated by ancient ksour.',
        stay: 'Riad in Zagora from 350 MAD/night',
      },
      {
        day: 'Day 6-7',
        route: 'Zagora to Ouarzazate via the Draa Valley',
        distance: '170 km',
        driveTime: '3 hours',
        highlights: 'The N9 north follows the Draa Valley through its finest section. Tamegroute\'s Zaouia Naciria library holds manuscripts dating to the 13th century; its pottery cooperative produces the distinctive green ceramics. Agdz has a pleasant palm-lined central boulevard and kasbah. Cross Tizi n\'Tinififft back to Ouarzazate.',
        stay: 'Hotel in Ouarzazate from 350 MAD/night',
      },
      {
        day: 'Day 7-9',
        route: 'Ouarzazate to Marrakech via Ait Benhaddou',
        distance: '195 km',
        driveTime: '4 hours',
        highlights: 'Stop at Ait Benhaddou for the morning golden hour. Cross the river to the ksar and climb to the fortified granary at the summit for views across the valley. Then cross Tizi n\'Tichka one final time, stopping at Taddert for a roadside tagine (from 50 MAD) on a terrace overlooking the Atlas.',
        stay: 'Riad in Marrakech from 500 MAD/night',
      },
    ],
    roadConditions: 'Anti-Atlas roads are paved but winding and mostly empty. The N12 between Guelmim and Foum Zguid is isolated with very few fuel stops; fill up at both ends. Strong crosswinds can affect handling in open desert. Standard car is fine for all paved sections. The route avoids off-road driving entirely.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ESSENTIAL DRIVING TIPS
   ═══════════════════════════════════════════════════════════════ */

const drivingTips = [
  {
    title: 'Fuel Up Early and Often',
    icon: Fuel,
    text: 'Fill your tank whenever you see a station outside major cities. In mountain and desert areas, gaps of 100-150 km between pumps are common. Diesel runs from 12-14 MAD/liter; unleaded from 14-16 MAD/liter. Chain stations (Afriquia, Shell, Total) accept credit cards; rural pumps often require cash.',
  },
  {
    title: 'Police Checkpoints',
    icon: ShieldCheck,
    text: 'Expect gendarmerie checkpoints on major routes, especially near cities and in southern regions. Slow down, greet the officer, and hand over your license, IDP, passport, and rental contract when asked. These are routine and brief. Speed cameras and radar guns are widespread. Fines start from 300 MAD.',
  },
  {
    title: 'Road Hazards After Dark',
    icon: AlertTriangle,
    text: 'Avoid driving at night outside cities. Unlit donkey carts, pedestrians in dark clothing, stray livestock, and broken-down trucks without hazard lights are genuine dangers. If you must drive after sunset, reduce speed to 60 km/h maximum on rural roads.',
  },
  {
    title: 'Mountain Pass Strategy',
    icon: Mountain,
    text: 'Atlas passes are slow. Budget 40-50 km/h average on mountain roads, regardless of what GPS estimates. Tizi n\'Tichka, Tizi n\'Test, and Rif Mountain roads have tight switchbacks. Use low gear on descents to save your brakes. Pull into turnouts to let faster traffic pass.',
  },
  {
    title: 'Parking and City Driving',
    icon: Car,
    text: 'Moroccan cities are intense. Park outside the medina and walk in. Official parking attendants (gardiens) wear reflective vests and charge from 5 MAD for surface parking, from 10 MAD for overnight guarded lots. Never leave valuables visible in your car.',
  },
  {
    title: 'Toll Roads (Autoroutes)',
    icon: DollarSign,
    text: 'Morocco\'s autoroute network connects Tangier, Rabat, Casablanca, Marrakech, Fes, and Oujda. Tolls are cheap: Casablanca to Marrakech costs about 70 MAD. Pay in cash or by Jawaz transponder (available from post offices). Motorways are well-maintained with rest stops every 50-80 km.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MUST-HAVE ITEMS
   ═══════════════════════════════════════════════════════════════ */

const mustHaveItems = [
  'International Driving Permit (IDP) plus home license',
  'Passport and rental contract copies (in glove box)',
  'Offline maps (Maps.me or Google Maps downloaded)',
  'Dash cam (useful for insurance disputes)',
  'First aid kit and basic medications',
  'Spare tire check before departure (and know where the jack is)',
  '5 liters of water per person per day for desert routes',
  'Sunglasses, sunscreen, and a wide-brim hat',
  'Phone charging cable and a car adapter',
  'Cash in small denominations (20 and 50 MAD notes)',
  'Snacks for long desert and mountain stretches',
  'Emergency triangles and reflective vest (required by law)',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: EMERGENCY CONTACTS
   ═══════════════════════════════════════════════════════════════ */

const emergencyContacts = [
  { name: 'Police', number: '19', note: 'Within cities' },
  { name: 'Gendarmerie', number: '177', note: 'Rural areas and highways' },
  { name: 'Ambulance / Fire', number: '15', note: 'National emergency' },
  { name: 'Highway Emergency', number: '5050', note: 'ADM autoroute assistance' },
  { name: 'Tourist Police', number: '+212 524 384 601', note: 'Marrakech line' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoRoadTripsPage() {
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
          style={{ backgroundImage: 'url(/images/hero-atlas-mountains.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Road Trips</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Car className="w-4 h-4" />
            Self-Drive Adventures
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Morocco Road Trips:
            <br className="hidden md:block" /> Self-Drive Itineraries &amp; Routes
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl font-[family-name:var(--font-heading)]">
            Six tried-and-tested driving routes across Morocco, from the Atlantic coast to the Sahara.
            Day-by-day stops, real distances, fuel estimates, and road conditions for every kilometer.
          </p>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4 font-[family-name:var(--font-heading)]">
              Morocco packs an absurd amount of geography into a country the size of California.
              Within a single day&apos;s drive you can move from Atlantic surf beaches to 2,000-meter
              mountain passes to Saharan dune fields. The road network has improved dramatically over
              the past decade, with autoroutes linking major cities and paved national roads reaching
              deep into the Atlas and desert regions.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-[family-name:var(--font-heading)]">
              Self-driving gives you freedom that bus schedules and tour groups cannot.
              Stop at a roadside stand selling fresh prickly pear. Pull over at a pass when the light
              hits the mountains right. Spend an extra night in a village that grabs you. These six
              routes cover the country&apos;s highlights and several places most visitors never reach.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="card-moroccan p-4 text-center">
                <Car className="w-6 h-6 text-[#A0522D] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">6</div>
                <div className="text-sm text-gray-600">Epic Routes</div>
              </div>
              <div className="card-moroccan p-4 text-center">
                <Route className="w-6 h-6 text-[#A0522D] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">5,900+</div>
                <div className="text-sm text-gray-600">Total km Covered</div>
              </div>
              <div className="card-moroccan p-4 text-center">
                <MapPin className="w-6 h-6 text-[#A0522D] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">60+</div>
                <div className="text-sm text-gray-600">Stops &amp; Destinations</div>
              </div>
              <div className="card-moroccan p-4 text-center">
                <DollarSign className="w-6 h-6 text-[#A0522D] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">250</div>
                <div className="text-sm text-gray-600">MAD/Day Car Rental</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Road Trip Routes ── */}
      {roadTripRoutes.map((route, idx) => (
        <section key={idx} className={`py-12 md:py-16 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}`}>
          <div className="container-morocco">
            <div className="max-w-5xl mx-auto">
              {/* Route Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#A0522D]/10 flex items-center justify-center shrink-0">
                  <route.icon className="w-6 h-6 text-[#A0522D]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-gray-900">
                    {idx + 1}. {route.name}
                  </h2>
                  <p className="text-gray-600 font-[family-name:var(--font-heading)] mt-1">
                    {route.tagline}
                  </p>
                </div>
              </div>

              {/* Route Stats */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                <div className="card-moroccan p-3 text-center">
                  <Route className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{route.totalDistance}</div>
                  <div className="text-xs text-gray-500">Total Distance</div>
                </div>
                <div className="card-moroccan p-3 text-center">
                  <Calendar className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{route.totalDays}</div>
                  <div className="text-xs text-gray-500">Duration</div>
                </div>
                <div className="card-moroccan p-3 text-center">
                  <Sun className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900 text-[11px]">{route.bestSeason}</div>
                  <div className="text-xs text-gray-500">Best Season</div>
                </div>
                <div className="card-moroccan p-3 text-center">
                  <Fuel className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{route.fuelEstimate}</div>
                  <div className="text-xs text-gray-500">Fuel Estimate</div>
                </div>
                <div className="card-moroccan p-3 text-center col-span-2 md:col-span-1">
                  <Compass className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{route.difficulty}</div>
                  <div className="text-xs text-gray-500">Difficulty</div>
                </div>
              </div>

              {/* Day-by-Day Itinerary */}
              <div className="space-y-4">
                {route.days.map((day, dayIdx) => (
                  <div key={dayIdx} className="card-moroccan p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#A0522D] text-white text-sm font-bold">
                        {dayIdx + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                          {day.day}: {day.route}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Route className="w-3.5 h-3.5" /> {day.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> {day.driveTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      {day.highlights}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#A0522D]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="font-medium">{day.stay}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Road Conditions */}
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-amber-900 text-sm mb-1">Road Conditions</h4>
                    <p className="text-sm text-amber-800">{route.roadConditions}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Essential Driving Tips ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-3">
                Essential Driving Tips for Morocco
              </h2>
              <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
                Practical advice from thousands of kilometers behind the wheel on Moroccan roads.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {drivingTips.map((tip, idx) => (
                <div key={idx} className="card-moroccan p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#A0522D]/10 flex items-center justify-center shrink-0">
                      <tip.icon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-1">
                        {tip.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{tip.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Must-Have Items ── */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-8 text-center">
              Road Trip Packing Checklist
            </h2>
            <div className="card-moroccan p-6">
              <div className="grid md:grid-cols-2 gap-3">
                {mustHaveItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency Contacts ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-8 text-center">
              Emergency Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {emergencyContacts.map((contact, idx) => (
                <div key={idx} className="card-moroccan p-4 text-center">
                  <Phone className="w-5 h-5 text-[#A0522D] mx-auto mb-2" />
                  <div className="font-bold text-gray-900 text-lg">{contact.number}</div>
                  <div className="font-semibold text-gray-700 text-sm">{contact.name}</div>
                  <div className="text-xs text-gray-500">{contact.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Car Rental Cost Breakdown ── */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-8 text-center">
              Car Rental Costs in Morocco (2026)
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="card-moroccan p-5 text-center">
                <Car className="w-8 h-8 text-[#A0522D] mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-2">Economy</h3>
                <div className="text-2xl font-bold text-[#A0522D] mb-1">from 250 MAD</div>
                <div className="text-sm text-gray-500 mb-3">per day</div>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" /> Dacia Logan / Renault Clio</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" /> Good for highways and cities</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" /> Best fuel economy</li>
                </ul>
              </div>
              <div className="card-moroccan p-5 text-center border-2 border-[#A0522D]">
                <Star className="w-8 h-8 text-[#C4960C] mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-2">SUV / Crossover</h3>
                <div className="text-2xl font-bold text-[#A0522D] mb-1">from 450 MAD</div>
                <div className="text-sm text-gray-500 mb-3">per day</div>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" /> Dacia Duster / Hyundai Tucson</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" /> Mountain and gorge roads</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" /> Most popular for road trips</li>
                </ul>
              </div>
              <div className="card-moroccan p-5 text-center">
                <Mountain className="w-8 h-8 text-[#A0522D] mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-2">4x4</h3>
                <div className="text-2xl font-bold text-[#A0522D] mb-1">from 700 MAD</div>
                <div className="text-sm text-gray-500 mb-3">per day</div>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" /> Toyota Land Cruiser / Pajero</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" /> Desert pistes and rough tracks</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" /> Required for Erg Chigaga</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              Prices reflect 2026 high-season rates. Booking online 2-4 weeks ahead typically saves 20-30%.
              Full insurance (CDW + theft) adds from 80-150 MAD per day. Seasonal pricing can change.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((faq, idx) => (
                <div key={idx} className="card-moroccan p-5">
                  <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-2 flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#A0522D] shrink-0 mt-0.5" />
                    {faq.name}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed ml-7">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides / Cross-Links ── */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-8 text-center">
              Related Morocco Travel Guides
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <Link href="/morocco-desert-tours" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <Globe className="w-6 h-6 text-[#A0522D] mb-3" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-1 group-hover:text-[#A0522D] transition-colors">
                  Morocco Desert Tours
                </h3>
                <p className="text-sm text-gray-600">Sahara camping, camel treks, and dune experiences from Merzouga to Erg Chigaga.</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#A0522D] mt-2 font-medium">
                  Read guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link href="/atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <Mountain className="w-6 h-6 text-[#A0522D] mb-3" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-1 group-hover:text-[#A0522D] transition-colors">
                  Atlas Mountains Guide
                </h3>
                <p className="text-sm text-gray-600">Hiking, trekking, and mountain passes through the High, Middle, and Anti-Atlas ranges.</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#A0522D] mt-2 font-medium">
                  Read guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link href="/budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <DollarSign className="w-6 h-6 text-[#A0522D] mb-3" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-1 group-hover:text-[#A0522D] transition-colors">
                  Morocco Budget Travel
                </h3>
                <p className="text-sm text-gray-600">Save money on accommodation, food, transport, and activities across the country.</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#A0522D] mt-2 font-medium">
                  Read guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link href="/morocco-safety" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <ShieldCheck className="w-6 h-6 text-[#A0522D] mb-3" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-1 group-hover:text-[#A0522D] transition-colors">
                  Morocco Safety Guide
                </h3>
                <p className="text-sm text-gray-600">Scam awareness, health tips, solo travel safety, and emergency information.</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#A0522D] mt-2 font-medium">
                  Read guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link href="/best-time-visit-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <Thermometer className="w-6 h-6 text-[#A0522D] mb-3" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-1 group-hover:text-[#A0522D] transition-colors">
                  Best Time to Visit Morocco
                </h3>
                <p className="text-sm text-gray-600">Month-by-month weather, festivals, and crowd levels to plan your trip timing.</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#A0522D] mt-2 font-medium">
                  Read guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link href="/camping" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <Compass className="w-6 h-6 text-[#A0522D] mb-3" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-1 group-hover:text-[#A0522D] transition-colors">
                  Camping in Morocco
                </h3>
                <p className="text-sm text-gray-600">Wild camping, established sites, and bivouac spots for road trip overnights.</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#A0522D] mt-2 font-medium">
                  Read guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-12 md:py-16 moroccan-pattern">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-4">
            Start Planning Your Morocco Road Trip
          </h2>
          <p className="text-lg text-gray-600 font-[family-name:var(--font-heading)] mb-8 max-w-2xl mx-auto">
            Pick your route, book a rental car, and hit the road. Morocco rewards the traveler
            who takes the slower path and follows the road around one more bend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#A0522D] text-white rounded-lg hover:bg-[#8B4726] transition-colors font-medium"
            >
              <MapPin className="w-4 h-4" />
              Explore Destinations
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#A0522D] border border-[#A0522D] rounded-lg hover:bg-[#A0522D]/5 transition-colors font-medium"
            >
              <Compass className="w-4 h-4" />
              Browse Activities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

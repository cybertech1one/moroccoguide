import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Car,
  MapPin,
  Clock,
  Fuel,
  Shield,
  AlertTriangle,
  CheckCircle,
  Mountain,
  Compass,
  Route,
  Gauge,
  FileText,
  Coffee,
  Sun,
  Eye,
  Navigation,
  CircleDollarSign,
  Thermometer,
  Snowflake,
  Leaf,
  Camera,
  Bed,
  UtensilsCrossed,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Morocco Road Trips Guide | 8 Epic Routes, Driving Tips & Car Rental',
  description:
    'Plan the ultimate Morocco road trip. 8 epic driving routes with day-by-day itineraries, real distances, drive times, essential driving tips, car rental guide, fuel stops, and road safety for self-drive travel in Morocco.',
  keywords: [
    'morocco road trip',
    'driving in morocco',
    'morocco car rental',
    'morocco road trip itinerary',
    'atlantic coast morocco drive',
    'sahara route marrakech merzouga',
    'imperial cities road trip',
    'morocco driving tips',
    'morocco self drive',
    'morocco road conditions',
    'rif mountains road trip',
    'kasbahs route morocco',
    'southern coast morocco',
    'grand morocco loop',
    'middle atlas drive',
    'tizi n tichka pass',
    'dades gorge drive',
  ],
  openGraph: {
    title: 'Morocco Road Trips Guide | 8 Epic Driving Routes',
    description:
      'Drive Morocco your way. 8 incredible road trip routes with detailed day-by-day itineraries, car rental advice, driving tips, and everything you need for the open road.',
    url: 'https://citytoursmorocco.com/road-trips',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1548018560-c7196e66aca2?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Winding mountain road through the Atlas Mountains in Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/road-trips' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAction',
  name: 'Morocco Road Trips Guide',
  description:
    'Complete guide to road trips in Morocco including 8 epic routes, driving tips, car rental information, and road safety advice.',
  url: 'https://citytoursmorocco.com/road-trips',
  location: { '@type': 'Country', name: 'Morocco' },
};

/* ===================================================================
   WHY ROAD TRIP
   =================================================================== */

const whyRoadTrip = [
  {
    icon: Compass,
    title: 'Total Freedom',
    description:
      'Go where you want, when you want. Discover hidden villages, stop at panoramic viewpoints, and change plans on a whim. No tour schedules or group compromises.',
  },
  {
    icon: Mountain,
    title: 'Diverse Landscapes',
    description:
      'Within a single day you can drive from Atlantic beaches through cedar forests, over snow-capped mountain passes, and into Saharan desert. No country this size packs in more variety.',
  },
  {
    icon: CircleDollarSign,
    title: 'Affordable Rentals',
    description:
      'Car rental in Morocco starts from 200-300 MAD/day ($20-30). Fuel is reasonable at 12-14 MAD/liter for diesel, and even toll roads are cheap. A road trip for two often costs less than organized tours.',
  },
  {
    icon: Camera,
    title: 'Endless Photo Stops',
    description:
      'Morocco is impossibly photogenic. Every bend in the road reveals a new scene: kasbahs glowing at sunset, palm-lined gorges, turquoise coastlines, and vast desert panoramas you cannot reach by bus.',
  },
];

/* ===================================================================
   8 EPIC ROAD TRIP ROUTES
   =================================================================== */

const roadTripRoutes = [
  {
    id: 'sahara-route',
    name: 'The Sahara Route',
    subtitle: 'Marrakech to Ouarzazate to Merzouga',
    duration: '3 days',
    distance: '560 km one-way',
    difficulty: 'Moderate',
    difficultyColor: '#C4960C',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    description:
      'Morocco\'s most iconic road trip. Cross the High Atlas via the legendary Tizi n\'Tichka pass at 2,260m, stop at the UNESCO-listed Ait Benhaddou kasbah, then drive through the rose-scented Dades Valley and on to the towering Erg Chebbi dunes of Merzouga. This is the route that defines Moroccan adventure travel.',
    highlights: [
      'Tizi n\'Tichka pass (2,260m)',
      'Ait Benhaddou UNESCO kasbah',
      'Ouarzazate Atlas Studios',
      'Valley of the Roses',
      'Erg Chebbi sand dunes',
      'Sahara desert camp',
    ],
    roadConditions: 'N9 is fully paved and well-maintained but winding with steep switchbacks through the Atlas. East of Ouarzazate, the N10 is straight and flat. Some sections between Rissani and Merzouga are sandy at the edges.',
    fuelStops: 'Fill up in Marrakech. Stations at Ait Ourir, Ouarzazate, Boumalne Dades, Tinghir, Errachidia, and Rissani. No stations between Rissani and Merzouga (30 km).',
    itinerary: [
      { day: 1, stop: 'Marrakech to Ouarzazate', distance: '200 km', driveTime: '4-5 hours', desc: 'Cross the Tizi n\'Tichka pass with breathtaking switchbacks and views. Stop at the Tichka summit for photos and fresh orange juice from roadside vendors. Detour 20 km to Ait Benhaddou for the iconic kasbah. Arrive in Ouarzazate by late afternoon.', eat: 'Lunch at Chez Dimitri in Ouarzazate (established 1928). Dinner at Douyria restaurant.', sleep: 'Le Berbere Palace (luxury, from 1,200 MAD) or Dar Kamar (mid-range, 500 MAD).' },
      { day: 2, stop: 'Ouarzazate to Merzouga', distance: '260 km', driveTime: '5-6 hours', desc: 'Drive the Dades Valley through the Road of a Thousand Kasbahs. Stop at the Dades Gorge for a short hike. Continue through Tinghir and the spectacular Todra Gorge with 300m limestone walls. Push on through Errachidia and Rissani to reach Merzouga by sunset.', eat: 'Lunch at a roadside restaurant in Tinghir. Dinner included at your desert camp.', sleep: 'Luxury desert camp at Erg Chebbi (Merzouga Luxury Desert Camp, from 1,500 MAD). Budget option: Riad Madu (400 MAD).' },
      { day: 3, stop: 'Merzouga (Sahara day)', distance: '0 km (or return)', driveTime: 'Flexible', desc: 'Wake before dawn for sunrise over the dunes. Optional camel trek (150-300 MAD), quad biking (400 MAD/hour), or sandboarding. Visit a Gnaoua music village and the seasonal Dayet Srji lake. Begin the return drive or continue north to Fes via the Ziz Valley (320 km, 5 hours).', eat: 'Breakfast in the desert. Lunch in Rissani at a local street food market (famous for Medfouna, Berber pizza).', sleep: 'Second night at the camp, or drive to Midelt/Fes.' },
    ],
  },
  {
    id: 'rif-mountains',
    name: 'The Rif Mountains',
    subtitle: 'Tangier to Chefchaouen to Fes',
    duration: '3 days',
    distance: '400 km',
    difficulty: 'Moderate',
    difficultyColor: '#C4960C',
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800',
    description:
      'Wind through Morocco\'s dramatic northern mountains from the cosmopolitan port city of Tangier to the famous blue-painted medina of Chefchaouen and onward through the Rif to the ancient imperial city of Fes. Mountain roads are narrow and winding but the scenery of pine forests, hidden waterfalls, and terraced hillsides is spectacular.',
    highlights: [
      'Tangier Kasbah and Cafe Hafa',
      'Chefchaouen blue medina',
      'Akchour waterfalls',
      'God\'s Bridge natural arch',
      'Talassemtane National Park',
      'Ouazzane olive groves',
    ],
    roadConditions: 'The N2 from Tangier to Chefchaouen is a good two-lane road through rolling hills. The route from Chefchaouen to Fes via Ouazzane uses the N13 and N4, well-paved but with tight mountain curves. Allow extra time for slow trucks on mountain sections.',
    fuelStops: 'Frequent stations in Tangier and along the N2. Fill up in Chefchaouen before heading south. Stations in Ouazzane, then frequent along the N4 approaching Fes.',
    itinerary: [
      { day: 1, stop: 'Tangier to Chefchaouen', distance: '115 km', driveTime: '2-2.5 hours', desc: 'Leave Tangier after exploring the Kasbah and the legendary Cafe Hafa with its views of Spain. Drive south through green Rif foothills. Arrive in Chefchaouen by lunchtime. Spend the afternoon wandering the blue-washed medina, shopping for woven blankets, and sipping mint tea in Plaza Uta el-Hammam.', eat: 'Lunch at Casa Aladdin (terrace with medina views). Dinner at Bab Ssour for traditional Riffian dishes.', sleep: 'Lina Ryad & Spa (luxury, 1,000 MAD) or Dar Echchaouen (mid-range, 450 MAD).' },
      { day: 2, stop: 'Chefchaouen (full day)', distance: '40 km round trip to Akchour', driveTime: '1 hour round trip', desc: 'Morning hike to Akchour waterfalls and God\'s Bridge, a stunning natural rock arch in Talassemtane National Park (allow 3-4 hours for the full hike). Return to Chefchaouen for a late lunch. Afternoon: explore the Ras el-Maa waterfall at the edge of the medina, visit the kasbah museum, and watch sunset from the Spanish Mosque viewpoint.', eat: 'Lunch at Cafe Clock Chefchaouen (camel burger). Dinner at Aladdin restaurant.', sleep: 'Same hotel as night 1.' },
      { day: 3, stop: 'Chefchaouen to Fes', distance: '210 km', driveTime: '3.5-4 hours', desc: 'Drive south through the western Rif via Ouazzane, a pretty hillside town known for olive oil production. Stop for fresh-pressed olive oil tastings. Continue south on the N4 through agricultural plains. Arrive in Fes by early afternoon. Head straight to a medina rooftop terrace to take in the spectacle of Fes el-Bali from above.', eat: 'Lunch en route in Ouazzane. Dinner at The Ruined Garden in Fes medina.', sleep: 'Riad Fes (luxury, 2,000 MAD) or Dar Roumana (mid-range, 700 MAD).' },
    ],
  },
  {
    id: 'atlantic-coast',
    name: 'The Atlantic Coast',
    subtitle: 'Casablanca to El Jadida to Essaouira to Agadir',
    duration: '4 days',
    distance: '630 km',
    difficulty: 'Easy',
    difficultyColor: '#2d8a4e',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    description:
      'Morocco\'s easiest and most relaxing road trip follows the Atlantic seaboard south from Casablanca. Pass through the Portuguese fortress town of El Jadida, the oyster village of Oualidia, the wind-swept ramparts of Essaouira, and the surf paradise of Taghazout before ending at the beach resort of Agadir. Flat, well-maintained highways with ocean views throughout.',
    highlights: [
      'El Jadida Portuguese cistern (UNESCO)',
      'Oualidia oyster lagoon',
      'Safi ceramics workshops',
      'Essaouira ramparts and harbor',
      'Taghazout surf village',
      'Agadir beach promenade',
    ],
    roadConditions: 'Excellent throughout. The A3 autoroute from Casablanca to El Jadida is fast and modern. The N1 coastal road from El Jadida to Essaouira is well-paved two-lane. South from Essaouira to Agadir, the N1 is smooth and scenic.',
    fuelStops: 'Very frequent along the entire coastal route. No need to worry about fuel availability. All major brands (Shell, Total, Afriquia) represented.',
    itinerary: [
      { day: 1, stop: 'Casablanca to El Jadida to Oualidia', distance: '190 km', driveTime: '2.5 hours', desc: 'Leave Casablanca on the A3 autoroute. Stop in El Jadida to explore the UNESCO-listed Portuguese cistern, an underground chamber with hauntingly beautiful light reflections. Walk the ramparts of the old Portuguese city. Continue south to Oualidia, Morocco\'s oyster capital, a tranquil lagoon village.', eat: 'Lunch at L\'Araignee Gourmande in Oualidia (fresh oysters from 80 MAD/dozen). Dinner at Ostrea II.', sleep: 'La Sultana Oualidia (luxury, 2,500 MAD) or L\'Hippocampe (mid-range, 600 MAD).' },
      { day: 2, stop: 'Oualidia to Essaouira', distance: '200 km', driveTime: '3 hours', desc: 'Drive south through Safi, famous for its ceramics and sardine industry. Stop to visit a traditional pottery cooperative. Continue along the coastal road to Essaouira. Arrive in the wind city by early afternoon. Walk the 18th-century ramparts, explore the vibrant fishing port, and feast on grilled fish at the harbor stalls.', eat: 'Lunch at the Essaouira port fish stalls (choose your fish, grilled to order, 50-80 MAD). Dinner at Triskala.', sleep: 'Heure Bleue Palais (luxury, 1,800 MAD) or Riad Chbanate (mid-range, 500 MAD).' },
      { day: 3, stop: 'Essaouira (full day)', distance: '30 km for day trips', driveTime: 'Minimal', desc: 'Full day in Essaouira. Morning visit to an argan oil cooperative to learn about Morocco\'s liquid gold. Optional surfing at Sidi Kaouki beach (20 min south). Afternoon: explore the medina galleries, shop for thuya wood crafts, and watch the sunset from Moulay Hassan square with the fishing boats.', eat: 'Lunch at Caravane Cafe. Dinner at La Table by Madada (rooftop, fine dining).', sleep: 'Same hotel as night 2.' },
      { day: 4, stop: 'Essaouira to Taghazout to Agadir', distance: '180 km', driveTime: '2.5 hours', desc: 'Drive south along the scenic coastal N1. Stop at Taghazout, Morocco\'s surf capital perched on cliffs above the Atlantic. Watch the surfers from Panorama Point. Continue to Agadir. Visit the hilltop Kasbah ruins for panoramic views of the city and coast. Relax on Agadir\'s wide beach promenade.', eat: 'Lunch at Cafe Mustapha in Taghazout (fresh fish tagine). Dinner at Pure Passion in Agadir.', sleep: 'Sofitel Agadir Royal Bay (luxury, 1,500 MAD) or Riad Villa Blanche (mid-range, 700 MAD).' },
    ],
  },
  {
    id: 'middle-atlas',
    name: 'The Middle Atlas',
    subtitle: 'Fes to Ifrane to Azrou to Beni Mellal',
    duration: '2 days',
    distance: '320 km',
    difficulty: 'Easy',
    difficultyColor: '#2d8a4e',
    image: 'https://images.unsplash.com/photo-1545071677-2df608f54e72?q=80&w=800',
    description:
      'A refreshing escape into Morocco\'s green heart. The Middle Atlas is a world away from the desert and medinas, with cedar forests sheltering Barbary macaques, alpine lakes, ski resorts, and the Swiss-style town of Ifrane. This short route is perfect as a 2-day side trip from Fes, combining mountain scenery, wildlife encounters, and Amazigh highland culture.',
    highlights: [
      'Ifrane "Switzerland of Morocco"',
      'Azrou cedar forest and macaques',
      'Aguelmame Azigza lake',
      'Ain Leuh waterfalls',
      'Beni Mellal Ain Asserdoun springs',
      'Amazigh highland villages',
    ],
    roadConditions: 'Excellent paved roads throughout. The N8 from Fes to Ifrane is a smooth, wide highway through forested hills. The N13 from Azrou south is well-maintained. Mountain roads can be icy in winter (December-February); check conditions and carry chains.',
    fuelStops: 'Stations in Fes, Ifrane, Azrou, Khenifra, and Beni Mellal. Adequate coverage for this route.',
    itinerary: [
      { day: 1, stop: 'Fes to Ifrane to Azrou', distance: '90 km', driveTime: '1.5 hours', desc: 'Leave Fes heading south on the N8 through green hills. Arrive in Ifrane, a startlingly European-looking town built by the French, famous for its manicured gardens and stone lion sculpture. Continue 17 km to Azrou and the Cedre Gouraud forest. Stop to see the wild Barbary macaques (the only primates north of the Sahara in Africa) living among enormous ancient cedars.', eat: 'Lunch at Restaurant Chamonix in Ifrane (French-Moroccan cuisine). Dinner at your hotel in Azrou.', sleep: 'Le Chateau d\'Ifrane (from 800 MAD) or Gite Chez Abdou in Azrou (budget, 300 MAD).' },
      { day: 2, stop: 'Azrou to Beni Mellal', distance: '230 km', driveTime: '3.5 hours', desc: 'Drive south through the heart of the Middle Atlas. Optional detour to the volcanic lake Aguelmame Azigza (stunning blue-green waters surrounded by oak forest). Pass through Khenifra and the traditional Amazigh market town of Kasbah Tadla. Arrive in Beni Mellal and visit the Ain Asserdoun springs and the old kasbah overlooking the Tadla plain.', eat: 'Lunch in Khenifra at a local tagine stop. Dinner at Restaurant Al Bassatine in Beni Mellal.', sleep: 'Hotel Ouzoud (mid-range, 450 MAD). Optional day 3 extension: drive 1.5 hours to the spectacular Ouzoud Waterfalls.' },
    ],
  },
  {
    id: 'kasbahs-route',
    name: 'The Kasbahs Route',
    subtitle: 'Marrakech to Tizi n\'Tichka to Ait Ben Haddou to Dades to Todra',
    duration: '4 days',
    distance: '480 km',
    difficulty: 'Moderate',
    difficultyColor: '#C4960C',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=800',
    description:
      'The definitive kasbahs and gorges route, taking the most spectacular section of southern Morocco at a leisurely pace. Unlike the Sahara Route which rushes through, this itinerary gives you time to hike into the gorges, explore crumbling kasbahs, walk through rose fields, and truly absorb the dramatic landscapes of the Draa-Tafilalet region.',
    highlights: [
      'Tizi n\'Tichka pass (2,260m)',
      'Ait Ben Haddou UNESCO site',
      'Skoura palm oasis',
      'Valley of the Roses (Kelaat M\'Gouna)',
      'Dades Gorge switchbacks',
      'Todra Gorge (300m walls)',
    ],
    roadConditions: 'The N9 over Tizi n\'Tichka is paved with many switchbacks. The N10 east of Ouarzazate along the Dades Valley is good tarmac. The road into Dades Gorge is paved for the first 25 km then becomes rough piste. Todra Gorge road is paved to the narrows.',
    fuelStops: 'Stations in Marrakech, Ait Ourir, Ouarzazate, Skoura, Kelaat M\'Gouna, Boumalne Dades, and Tinghir.',
    itinerary: [
      { day: 1, stop: 'Marrakech to Ait Ben Haddou', distance: '185 km', driveTime: '3.5-4 hours', desc: 'Cross the High Atlas via Tizi n\'Tichka (2,260m), stopping at the summit for panoramic photos and the artisan cooperatives selling fossils and minerals. Descend to Ait Ben Haddou, the UNESCO-listed ksar (fortified village) used as a filming location for Gladiator, Game of Thrones, and Lawrence of Arabia. Cross the river on foot and climb to the top for sunset views.', eat: 'Lunch at Kasbah Ait Ben Haddou restaurant (terrace with ksar views). Dinner at your riad.', sleep: 'Riad Caravane (overlooking the ksar, 800 MAD) or Dar Mouna (budget, 350 MAD).' },
      { day: 2, stop: 'Ait Ben Haddou to Dades Gorge', distance: '180 km', driveTime: '3 hours', desc: 'Drive through Ouarzazate (optional stop at Atlas Studios, the world\'s largest film studio). Continue east along the N10, the legendary Road of a Thousand Kasbahs. Pass through the Skoura palm oasis (stop at Kasbah Amridil, one of the best-preserved kasbahs in Morocco). Continue through the Valley of the Roses at Kelaat M\'Gouna (visit during the Rose Festival in May). Arrive at Dades Gorge.', eat: 'Lunch in Skoura. Dinner at Chez Pierre in Dades Gorge (excellent French-Moroccan).', sleep: 'Auberge Le Festival (gorge views, 500 MAD) or Kasbah des Roses (350 MAD).' },
      { day: 3, stop: 'Dades Gorge to Todra Gorge', distance: '65 km', driveTime: '1.5 hours (plus hiking)', desc: 'Morning hike into the Dades Gorge narrows, past the famous "Monkey Fingers" rock formations and the tight serpentine road with its dramatic switchbacks. Drive to Tinghir and continue into Todra Gorge, where 300-meter limestone walls rise vertically on either side of a narrow riverbed. Walk through the gorge narrows. Watch rock climbers on the famous walls.', eat: 'Lunch at Auberge Le Festival du Todra (at the gorge mouth). Dinner at your hotel.', sleep: 'Dar Ayour Todra (mid-range, 450 MAD) or Hotel Amazir (budget, 250 MAD).' },
      { day: 4, stop: 'Todra Gorge to Marrakech (return)', distance: '380 km', driveTime: '6-7 hours', desc: 'Long return day back through the Dades Valley and over Tizi n\'Tichka. Alternatively, break the journey in Ouarzazate. Or, continue east from Todra to Merzouga (160 km, 2.5 hours) to extend into the Sahara Route. The return through Tichka at sunset is magical.', eat: 'Lunch stop in Ouarzazate. Dinner in Marrakech at Nomad (rooftop views of the medina).', sleep: 'Back in Marrakech. Royal Mansour (ultra-luxury) or Riad Joya (mid-range, 800 MAD).' },
    ],
  },
  {
    id: 'southern-coast',
    name: 'The Southern Coast',
    subtitle: 'Agadir to Tiznit to Mirleft to Sidi Ifni to Tan-Tan',
    duration: '3 days',
    distance: '370 km',
    difficulty: 'Easy-Moderate',
    difficultyColor: '#C4960C',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e66aca2?q=80&w=800',
    description:
      'Morocco\'s undiscovered south coast is a revelation. Leave the tourist trail behind and explore wild Atlantic beaches, Art Deco towns built by the Spanish, silver-working artisan villages, and dramatic cliffs plunging into the ocean. This route gets quieter and more dramatic the further south you go, ending at the frontier-feel town of Tan-Tan, gateway to the Saharan coast.',
    highlights: [
      'Tiznit silver market and ramparts',
      'Mirleft clifftop beaches',
      'Legzira natural stone arches',
      'Sidi Ifni Art Deco architecture',
      'Plage Blanche (wild beach)',
      'Tan-Tan camel market',
    ],
    roadConditions: 'The N1 from Agadir to Tiznit is fast and well-paved. South of Tiznit, the R104 coast road to Mirleft and Sidi Ifni is narrower but in good condition. The N1 from Sidi Ifni to Tan-Tan passes through semi-arid landscape with good tarmac but very little traffic.',
    fuelStops: 'Stations in Agadir, Tiznit, Mirleft (limited), Sidi Ifni, Guelmim, and Tan-Tan. Fill up in Tiznit before heading to the coast.',
    itinerary: [
      { day: 1, stop: 'Agadir to Tiznit to Mirleft', distance: '140 km', driveTime: '2 hours', desc: 'Drive south on the N1 to Tiznit, a walled town famous for its silver jewelry souk. Explore the old medina and buy handcrafted Amazigh silver bracelets and fibulas at artisan prices. Continue to Mirleft, a laid-back surfing village perched on cliffs above wild beaches. Watch the sunset from the cliff path.', eat: 'Lunch in Tiznit medina (grilled sardines, 20 MAD). Dinner at Cafe-Restaurant Aftas in Mirleft.', sleep: 'Aftas Beach Guest House (cliffside, 400 MAD) or Hotel Atlas Mirleft (250 MAD).' },
      { day: 2, stop: 'Mirleft to Sidi Ifni', distance: '40 km', driveTime: '45 minutes (plus exploration)', desc: 'Short drive south along the coast road. Stop at the famous Legzira beach with its dramatic natural stone arches carved by the ocean. Continue to Sidi Ifni, a surreal town with pastel Art Deco architecture from its time as a Spanish enclave (returned to Morocco in 1969). Explore the abandoned Spanish consulate, the old airstrip, and the crumbling port.', eat: 'Lunch at Nomad Sidi Ifni (seafood tagine). Dinner at Hotel Bellevue terrace overlooking the ocean.', sleep: 'Hotel Bellevue (ocean views, 350 MAD) or Dar Ifni (riad, 450 MAD).' },
      { day: 3, stop: 'Sidi Ifni to Tan-Tan', distance: '190 km', driveTime: '2.5 hours', desc: 'Drive inland to Guelmim, historically known as the "Gateway to the Sahara" and famous for its Saturday camel market (still active, go early morning). Continue south to Tan-Tan, where the landscape turns fully desert. The town hosts the annual Tan-Tan Moussem, a UNESCO-recognized festival of Saharan nomadic tribes. From Tan-Tan, the adventurous can continue to Tan-Tan Plage and the wild Saharan coast.', eat: 'Lunch in Guelmim (traditional camel meat tagine at Cafe Sahara). Dinner in Tan-Tan.', sleep: 'Hotel Al Madina Tan-Tan (basic but clean, 250 MAD). Return to Agadir next day (370 km, 4.5 hours) or continue south to Tarfaya and Laayoune.' },
    ],
  },
  {
    id: 'imperial-cities',
    name: 'Imperial Cities Circuit',
    subtitle: 'Rabat to Meknes to Fes to Marrakech',
    duration: '5 days',
    distance: '750 km',
    difficulty: 'Easy',
    difficultyColor: '#2d8a4e',
    image: 'https://images.unsplash.com/photo-1545071677-2df608f54e72?q=80&w=800',
    description:
      'Visit all four of Morocco\'s imperial cities on well-maintained autoroutes. This cultural circuit connects Rabat\'s refined capital charm, Meknes\'s grandiose Moulay Ismail legacy, the unrivaled medieval medina of Fes, and the vibrant energy of Marrakech. The easiest road trip in Morocco with excellent signage and fast toll highways throughout.',
    highlights: [
      'Rabat Kasbah des Oudayas',
      'Meknes Bab Mansour gate',
      'Volubilis Roman ruins',
      'Fes el-Bali medina (9,000+ alleys)',
      'Al-Qarawiyyin University',
      'Marrakech Jemaa el-Fnaa',
    ],
    roadConditions: 'Autoroute all the way. The A2 from Rabat to Meknes/Fes is fast dual carriageway (120 km/h limit). The A7 from Fes area to Marrakech is excellent. Toll booths accept cash and some accept cards. Total tolls for this route: approximately 200 MAD.',
    fuelStops: 'Abundant along the autoroute with full-service rest areas including cafes, shops, and clean restrooms every 40-60 km.',
    itinerary: [
      { day: 1, stop: 'Rabat', distance: '0 km (arrival day)', driveTime: 'Exploring', desc: 'Explore Morocco\'s capital. Visit the Kasbah des Oudayas with its Andalusian gardens overlooking the Atlantic, the Hassan Tower and Mohammed V Mausoleum, and the Chellah necropolis with its storks and Roman ruins. Walk along the Bou Regreg river corniche. Rabat is one of Morocco\'s most walkable and relaxed cities.', eat: 'Lunch at Le Dhow (floating restaurant on the river). Dinner at Dar Zaki in the medina.', sleep: 'Sofitel Rabat Jardin des Roses (luxury, 1,500 MAD) or Riad Dar El Kebira (mid-range, 600 MAD).' },
      { day: 2, stop: 'Rabat to Meknes', distance: '140 km', driveTime: '1.5 hours', desc: 'Short drive east on the A2 to Meknes, the "Versailles of Morocco." Explore the massive Bab Mansour gate (the finest gate in North Africa), the vast Heri es-Souani royal granaries, and the underground prison of Kara. Stroll the lively Place el-Hedim, Meknes\'s answer to Marrakech\'s Jemaa el-Fnaa but without the crowds.', eat: 'Lunch at Restaurant Riad (traditional menu in a restored riad). Dinner at Aisha restaurant.', sleep: 'Riad Lahboul (charming medina riad, 500 MAD) or Hotel Transatlantique (300 MAD).' },
      { day: 3, stop: 'Meknes day trip to Volubilis and Moulay Idriss', distance: '60 km round trip', driveTime: '1 hour round trip', desc: 'Drive 30 minutes to Volubilis, the best-preserved Roman ruins in North Africa with stunning mosaics, triumphal arches, and a basilica set against a backdrop of olive groves. Continue 5 km to the holy town of Moulay Idriss Zerhoun, perched on two hills. This is Morocco\'s most sacred town and was closed to non-Muslims until 2005. Walk the winding streets and enjoy panoramic views.', eat: 'Lunch at Cafe-Restaurant Moulay Idriss (terrace with town views). Dinner back in Meknes.', sleep: 'Same hotel as night 2, or drive to Fes (1 hour) for early start.' },
      { day: 4, stop: 'Meknes to Fes', distance: '60 km', driveTime: '1 hour', desc: 'Short drive to Fes, the intellectual and spiritual capital of Morocco. Plunge into the world\'s largest car-free urban area: Fes el-Bali with its 9,000+ alleys. Hire a local guide (half-day from 300 MAD) to navigate the tanneries, Al-Qarawiyyin University (founded 859 AD, the world\'s oldest university), and the Bou Inania Medersa. Visit the Merenid tombs at sunset for the best views over the medina.', eat: 'Lunch at Cafe Clock (famous camel burger). Dinner at Dar Roumana (contemporary Moroccan fine dining).', sleep: 'Riad Fes (luxury, 2,200 MAD) or Dar Seffarine (mid-range, 600 MAD, right on the medina\'s quietest square).' },
      { day: 5, stop: 'Fes to Marrakech', distance: '530 km', driveTime: '5-5.5 hours via autoroute', desc: 'Long but easy drive on the A2/A7 autoroute. Break the journey at Beni Mellal or Khouribga for lunch. Arrive in Marrakech by mid-afternoon. Head straight to the Jemaa el-Fnaa square to experience the evening spectacle of musicians, storytellers, and food stalls. Alternatively, split this drive over 2 days with a night in Beni Mellal and a detour to Ouzoud Waterfalls.', eat: 'Lunch at a roadside autoroute restaurant. Dinner at the Jemaa el-Fnaa food stalls (quintessential Marrakech experience, 40-80 MAD for a full meal).', sleep: 'Royal Mansour (ultra-luxury, from 5,000 MAD), La Mamounia (iconic, from 3,500 MAD), or Riad BE (mid-range, 700 MAD).' },
    ],
  },
  {
    id: 'grand-loop',
    name: 'The Grand Morocco Loop',
    subtitle: '2-Week Epic: North to South and Back',
    duration: '14 days',
    distance: '3,200 km',
    difficulty: 'Moderate-Challenging',
    difficultyColor: '#A0522D',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    description:
      'The ultimate Moroccan road trip. Two weeks covering the country from Mediterranean to Sahara, Atlantic to mountains. This grand loop combines the best of every region: imperial cities, blue mountain villages, ancient kasbahs, towering sand dunes, dramatic gorges, wild coastline, and everything in between. This is the trip of a lifetime for those with the time to do Morocco justice.',
    highlights: [
      'Tangier to Chefchaouen (blue medina)',
      'Fes medina and Volubilis ruins',
      'Middle Atlas cedar forests',
      'Merzouga Sahara dunes',
      'Todra and Dades gorges',
      'Ait Ben Haddou kasbah',
      'Marrakech medina',
      'Essaouira coast',
      'Atlas Mountain passes',
    ],
    roadConditions: 'Varies enormously. Autoroutes in the north and between major cities. Mountain passes through the High Atlas. Desert roads in the southeast. Coastal highways in the southwest. At least 70% is on excellent paved roads. Remaining 30% is well-paved national roads with occasional rough patches.',
    fuelStops: 'Plan fuel stops carefully in the southeast (Merzouga area) and deep south. Elsewhere, stations every 30-50 km. Budget approximately 3,500-4,500 MAD for fuel for the entire loop in a diesel vehicle.',
    itinerary: [
      { day: 1, stop: 'Casablanca to Rabat', distance: '90 km', driveTime: '1 hour', desc: 'Pick up your rental car. Drive to Rabat. Explore Kasbah des Oudayas, Hassan Tower, and the Chellah.', eat: 'Dinner at Le Dhow, Rabat.', sleep: 'Riad in Rabat medina.' },
      { day: 2, stop: 'Rabat to Tangier', distance: '250 km', driveTime: '2.5 hours', desc: 'Drive north on the autoroute to Tangier. Explore the Kasbah, Grand Socco, and Cafe Hafa.', eat: 'Dinner at El Morocco Club.', sleep: 'Hotel Continental or Nord-Pinus Tangier.' },
      { day: 3, stop: 'Tangier to Chefchaouen', distance: '115 km', driveTime: '2 hours', desc: 'South through the Rif to the blue city. Afternoon in the medina and sunset at Spanish Mosque.', eat: 'Dinner at Bab Ssour.', sleep: 'Dar Echchaouen.' },
      { day: 4, stop: 'Chefchaouen to Fes', distance: '210 km', driveTime: '3.5 hours', desc: 'Through the Rif via Ouazzane to Fes. Afternoon exploring Fes el-Bali with a guide.', eat: 'Dinner at The Ruined Garden.', sleep: 'Riad Fes.' },
      { day: 5, stop: 'Fes (full day)', distance: '60 km round trip to Volubilis', driveTime: '1 hour round trip', desc: 'Morning: Volubilis Roman ruins and Moulay Idriss. Afternoon: tanneries, Al-Qarawiyyin, medersas.', eat: 'Lunch at Cafe Clock, dinner at Dar Roumana.', sleep: 'Same riad.' },
      { day: 6, stop: 'Fes to Ifrane to Midelt', distance: '240 km', driveTime: '3.5 hours', desc: 'South through the Middle Atlas. Stop in Ifrane and Azrou for cedar forests and macaques. Night in Midelt.', eat: 'Lunch in Ifrane.', sleep: 'Hotel Kasbah Asmaa, Midelt (400 MAD).' },
      { day: 7, stop: 'Midelt to Merzouga', distance: '260 km', driveTime: '4 hours', desc: 'Through the Ziz Gorges and the Tafilalet oasis. Arrive at Erg Chebbi for sunset. Camel trek into the dunes.', eat: 'Dinner at desert camp.', sleep: 'Luxury desert camp (from 1,200 MAD).' },
      { day: 8, stop: 'Merzouga to Tinghir (Todra)', distance: '160 km', driveTime: '2.5 hours', desc: 'Sunrise over the dunes. Drive west to Tinghir and Todra Gorge. Afternoon hike through the narrows.', eat: 'Lunch at gorge restaurant.', sleep: 'Dar Ayour Todra (450 MAD).' },
      { day: 9, stop: 'Todra to Dades Gorge', distance: '65 km', driveTime: '1.5 hours', desc: 'Drive through the Dades Valley. Hike the Dades Gorge switchbacks and Monkey Fingers rock formations.', eat: 'Lunch and dinner at Chez Pierre.', sleep: 'Auberge Le Festival (gorge views, 500 MAD).' },
      { day: 10, stop: 'Dades to Ouarzazate to Ait Ben Haddou', distance: '170 km', driveTime: '3 hours', desc: 'Road of a Thousand Kasbahs west. Optional Atlas Studios stop. Arrive Ait Ben Haddou for afternoon exploration.', eat: 'Dinner at your kasbah.', sleep: 'Riad Caravane (800 MAD).' },
      { day: 11, stop: 'Ait Ben Haddou to Marrakech', distance: '185 km', driveTime: '3.5 hours', desc: 'Cross Tizi n\'Tichka back over the High Atlas. Arrive Marrakech. Evening at Jemaa el-Fnaa.', eat: 'Dinner at Nomad rooftop.', sleep: 'Riad in the medina.' },
      { day: 12, stop: 'Marrakech (full day)', distance: '0 km', driveTime: 'Exploring', desc: 'Full day: Bahia Palace, Saadian Tombs, Majorelle Garden, souk shopping. Hammam in the evening.', eat: 'Lunch at Terrasse des Epices, dinner at Al Fassia.', sleep: 'Same riad.' },
      { day: 13, stop: 'Marrakech to Essaouira', distance: '185 km', driveTime: '2.5 hours', desc: 'Drive to the Atlantic coast. Argan oil cooperative stop. Afternoon on Essaouira ramparts and at the port.', eat: 'Lunch at port fish stalls, dinner at Triskala.', sleep: 'Heure Bleue Palais (1,800 MAD).' },
      { day: 14, stop: 'Essaouira to Casablanca', distance: '350 km', driveTime: '4 hours', desc: 'Return north via the coastal road and autoroute. Stop in El Jadida for the Portuguese cistern. Drop off car in Casablanca.', eat: 'Lunch in El Jadida.', sleep: 'Depart or stay in Casablanca.' },
    ],
  },
];

/* ===================================================================
   DRIVING TIPS
   =================================================================== */

const drivingTips = [
  {
    icon: Gauge,
    title: 'Speed Limits & Cameras',
    tip: 'Urban areas: 40-60 km/h. National roads: 80-100 km/h. Autoroutes: 120 km/h. Speed cameras are extremely common and well-hidden. On-the-spot fines start at 300 MAD and go up to 1,400 MAD. Many locals use Waze for speed camera alerts.',
  },
  {
    icon: Shield,
    title: 'Police Checkpoints',
    tip: 'Routine gendarmerie checkpoints are common, especially near cities, at regional borders, and in southern Morocco. Keep your passport, driving license, and rental contract within easy reach. Slow down, greet officers politely, and you will be waved through quickly.',
  },
  {
    icon: Route,
    title: 'Road Quality',
    tip: 'Autoroutes are world-class. N-roads (national roads) range from excellent to potholed. Mountain passes are paved but narrow with steep switchbacks. Rural pistes (tracks) may require 4x4. After rain, watch for flash flooding across roads in the south.',
  },
  {
    icon: Navigation,
    title: 'Navigation Apps',
    tip: 'Google Maps works well for major routes. Download offline maps before entering mountains or desert where signal drops completely. Waze is very popular with Moroccan drivers for live traffic and speed camera locations. Maps.me is excellent for offline rural navigation.',
  },
  {
    icon: Fuel,
    title: 'Fuel Strategy',
    tip: 'Fuel stations are frequent on main roads (every 30-50 km). Fill up before entering mountains or desert. Diesel costs 12-14 MAD/liter, gasoline 14-16 MAD/liter. Most stations accept cash only. Shell and Afriquia stations in cities sometimes accept cards. Always carry cash for at least a full tank.',
  },
  {
    icon: Car,
    title: 'Local Driving Style',
    tip: 'Expect assertive driving. Overtaking on blind corners, pedestrians on highways, donkeys, and stray animals are all normal. Drive defensively and use your horn at blind mountain bends. Flashing headlights from oncoming cars usually means "police checkpoint ahead."',
  },
  {
    icon: Sun,
    title: 'Night Driving',
    tip: 'Strongly avoid driving at night. Unlit vehicles, pedestrians in dark clothing, animals on the road, poorly maintained road edges, and other drivers without headlights make night driving extremely risky. Plan your days so you arrive before sunset.',
  },
  {
    icon: AlertTriangle,
    title: 'Parking',
    tip: 'Use official "gardien" parking attendants found everywhere (5-10 MAD daytime, 10-20 MAD overnight). In cities, park in supervised lots (10-20 MAD). Never leave valuables visible in the car. Medina parking can be chaotic; park at designated lots outside the walls.',
  },
  {
    icon: FileText,
    title: 'Toll Roads (Autoroutes)',
    tip: 'Autoroutes have toll booths at entry and exit. Keep your ticket. Casablanca to Marrakech: ~80 MAD. Casablanca to Fes: ~120 MAD. Tangier to Casablanca: ~150 MAD. Jawaz electronic pass available for frequent users. Tolls are worth every dirham for the time saved and road quality.',
  },
  {
    icon: Eye,
    title: 'Scenic Stops & Photos',
    tip: 'Morocco\'s roads are lined with pull-offs and viewpoints, especially through mountain passes and along the coast. Budget extra time for spontaneous stops. The journey is as important as the destination. Do not stop on blind corners or narrow mountain sections.',
  },
];

/* ===================================================================
   CAR RENTAL GUIDE
   =================================================================== */

const carRentalGuide = {
  prices: [
    { type: 'Economy (Dacia Logan, Renault Clio)', price: '200-350 MAD/day ($20-35)', best: 'City trips and autoroute highways' },
    { type: 'Compact SUV (Dacia Duster)', price: '400-700 MAD/day ($40-70)', best: 'Mountain passes and desert edges. Most popular choice.' },
    { type: 'Premium 4x4 (Toyota Land Cruiser)', price: '800-1,500 MAD/day ($80-150)', best: 'Deep desert tracks (Erg Chigaga) and serious off-road' },
    { type: 'Minivan (Dacia Dokker, Renault Kangoo)', price: '300-500 MAD/day ($30-50)', best: 'Families or groups of 4-6 with luggage' },
  ],
  documents: [
    'Valid driving license from your home country (international driving permit recommended but not always required)',
    'Passport or national ID card',
    'Credit card for deposit (typically 3,000-5,000 MAD hold; debit cards rarely accepted)',
    'Minimum age 21 years (25 for some agencies and premium/4x4 vehicles)',
    'Minimum 1-2 years of driving experience (varies by company)',
  ],
  companies: [
    { name: 'International chains (Europcar, Hertz, Avis, Sixt)', note: 'Higher prices (400-800 MAD/day) but newer vehicles, better insurance, roadside assistance, and the option to pick up in one city and drop off in another. Book online in advance for best rates.' },
    { name: 'Local agencies (Medlocauto, AutoHall, Dollar Morocco)', note: 'Often 30-50% cheaper (200-500 MAD/day). Quality varies significantly; inspect the car thoroughly and photograph all existing damage. Some offer excellent service, others not.' },
    { name: 'Airport vs. city pickup', note: 'Airport offices charge premiums of 50-100 MAD/day. Walking to a city office, taking a taxi from the airport, or booking through your hotel can save significant money.' },
    { name: 'Online booking platforms', note: 'Discovercars.com and Localrent.com aggregate local and international agencies for comparison. Book 2-4 weeks ahead for best selection and prices, especially in peak season (March-May, September-November).' },
  ],
  insurance: [
    'CDW (Collision Damage Waiver) is essential. Included in most bookings but verify the excess (franchise) amount, which can be 5,000-15,000 MAD.',
    'Check if your credit card provides rental car insurance internationally. Visa Premier and Mastercard Gold often do, saving you 50-100 MAD/day.',
    'Theft protection is recommended, especially for premium vehicles parked in cities.',
    'Tire and windshield damage are often excluded from basic CDW. Ask about "super CDW" or "full coverage" for complete peace of mind (add 50-100 MAD/day).',
    'Take photos and video of ALL existing damage before driving off. Insist the agent notes every scratch on the rental agreement. This is the most important step.',
    'Personal accident insurance is usually included. Check your travel insurance for overlap to avoid paying twice.',
  ],
};

/* ===================================================================
   FUEL & REST STOPS
   =================================================================== */

const fuelGuide = [
  {
    title: 'Fuel Prices',
    content: 'Diesel (gasoil): 12-14 MAD/liter. Gasoline (essence/super): 14-16 MAD/liter. Prices are largely uniform nationwide as they are government-influenced. Diesel is significantly cheaper and most rental cars run on it. A full tank in a Dacia Duster costs about 500-600 MAD and covers 600-700 km.',
  },
  {
    title: 'Station Frequency',
    content: 'Every 30-50 km on national roads and autoroutes. Scarce in the deep south and remote mountain areas. Atlas mountain passes can have 80-100+ km gaps without stations. Rule of thumb: never let your tank drop below a quarter in rural areas.',
  },
  {
    title: 'Payment',
    content: 'Cash is king at most fuel stations. Shell and Afriquia stations in cities sometimes accept cards (Visa/Mastercard). Always carry enough cash for at least a full tank (500-600 MAD). Attendants pump your fuel for you; a 2-5 MAD tip is appreciated.',
  },
  {
    title: 'Roadside Cafes & Rest Stops',
    content: 'Moroccan road stops are an experience in themselves. Look for busy truck stops (routier) for the best tagine and couscous at honest prices (30-50 MAD for a full meal). Mint tea breaks every 2 hours are a local tradition. Autoroute rest areas have clean restrooms, shops, and fast food. Most rural stops have basic toilets (carry tissue).',
  },
];

/* ===================================================================
   ROAD CONDITIONS BY SEASON
   =================================================================== */

const seasonalConditions = [
  {
    icon: Sun,
    season: 'Spring (March - May)',
    conditions: 'The best time for road trips. Roads are clear, the landscape is green, wildflowers bloom across the Atlas foothills, and temperatures are comfortable (20-30C). Mountain passes are fully open. Some flash flooding risk in April.',
    rating: 'Excellent',
    ratingColor: '#2d8a4e',
  },
  {
    icon: Thermometer,
    season: 'Summer (June - August)',
    conditions: 'Very hot in the south and interior (40-50C in the Sahara and desert regions). Coastal and mountain routes are pleasant. Night driving becomes tempting to avoid heat but is dangerous. Carry extra water and ensure your car\'s A/C works. Roads are generally dry and clear.',
    rating: 'Good (coast/mountains), Challenging (desert)',
    ratingColor: '#C4960C',
  },
  {
    icon: Leaf,
    season: 'Autumn (September - November)',
    conditions: 'Excellent for road trips, similar to spring. September can still be hot but October and November are ideal. Date harvest season in the oases. Occasional heavy rain in October/November, particularly in the north, with risk of flash flooding in wadis.',
    rating: 'Excellent',
    ratingColor: '#2d8a4e',
  },
  {
    icon: Snowflake,
    season: 'Winter (December - February)',
    conditions: 'Mountain passes (Tizi n\'Tichka, Tizi n\'Test, Middle Atlas) can be closed by snow for days at a time. Always check conditions before crossing. Carry snow chains if heading to the Atlas. The coast and desert are pleasant and uncrowded. Sahara nights are very cold (near 0C).',
    rating: 'Variable (check mountain passes)',
    ratingColor: '#A0522D',
  },
];

/* ===================================================================
   SAFETY RULES
   =================================================================== */

const safetyRules = [
  'Always wear seatbelts. It is a legal requirement and fines are 300+ MAD per person.',
  'Carry a reflective vest and warning triangle in the car. These are mandatory by law and checked at some gendarmerie stops.',
  'Do not drink and drive. Morocco has near-zero tolerance (0.02% limit) and the penalties are severe, including jail time.',
  'Mountain roads require low gears on descents. Engine braking saves your brakes and your life on long downhill stretches like Tizi n\'Tichka.',
  'Beware of flash floods in wadis (dry riverbeds) during autumn and spring. Never camp in a wadi and do not drive through flowing water.',
  'In the desert, carry extra water (5+ liters per person), a charged phone, and share your route plan with someone. Cell service disappears in many areas.',
  'Roundabouts are common. Vehicles inside the roundabout have priority, though this rule is often ignored in practice. Enter cautiously.',
  'Pedestrians, cyclists, donkeys, mopeds, and sheep share national roads. Expect the unexpected, especially near villages and on market days.',
  'If you have an accident, do not move the vehicles until police arrive. Call 177 (gendarmerie) or 190 (police). Get a police report (constat) for insurance claims.',
  'Children and animals can appear suddenly from behind parked vehicles or walls. Slow to 20-30 km/h when passing through villages.',
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function RoadTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1548018560-c7196e66aca2?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Road Trips</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Car className="w-4 h-4 text-[var(--color-accent)]" />
            Self-Drive Adventures
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Road Trips
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Eight epic driving routes from Atlantic coast highways to Saharan desert tracks. Day-by-day itineraries with real distances, drive times, and where to eat and sleep.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ============================================================
          WHY ROAD TRIP MOROCCO
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Why Road Trip Morocco?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is one of the world&apos;s great road trip countries. Here is why the open road is the best way to explore it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyRoadTrip.map((reason) => (
              <div key={reason.title} className="card-moroccan p-8 text-center">
                <div className="inline-flex p-4 rounded-2xl bg-[var(--color-primary)]/10 mb-5">
                  <reason.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{reason.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          8 EPIC ROUTES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            8 Epic Road Trip Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From easy coastal cruises to challenging desert crossings. Each route includes day-by-day stops with real distances, drive times, and recommendations for where to eat and sleep.
          </p>

          <div className="space-y-16">
            {roadTripRoutes.map((route, index) => (
              <div key={route.id} id={route.id} className="scroll-mt-24">
                {/* Route Header Card */}
                <div className="card-moroccan overflow-hidden">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Image */}
                    <div className="lg:w-2/5 relative h-64 lg:h-auto min-h-[320px]">
                      <img
                        src={route.image}
                        alt={`${route.name} road trip route in Morocco`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
                          <Clock className="w-3.5 h-3.5" /> {route.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
                          <Route className="w-3.5 h-3.5" /> {route.distance}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span
                          className="px-3 py-1 rounded-full text-white text-xs font-bold"
                          style={{ backgroundColor: route.difficultyColor }}
                        >
                          {route.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="lg:w-3/5 p-6 lg:p-8">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                        {route.name}
                      </h3>
                      <p className="text-sm font-medium text-[var(--color-primary)] mb-4">{route.subtitle}</p>
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-5">{route.description}</p>

                      {/* Highlights */}
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wider">Must-See Highlights</h4>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {route.highlights.map((h) => (
                          <span key={h} className="tag tag-primary">
                            <MapPin className="w-3 h-3 mr-1" />
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Road Conditions & Fuel */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                          <h5 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Route className="w-3 h-3" /> Road Conditions
                          </h5>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{route.roadConditions}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                          <h5 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Fuel className="w-3 h-3" /> Fuel Stops
                          </h5>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{route.fuelStops}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Day-by-Day Itinerary */}
                  <div className="border-t border-[var(--border-light)] p-6 lg:p-8">
                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                      <Compass className="w-5 h-5 text-[var(--color-primary)]" />
                      Day-by-Day Itinerary
                    </h4>
                    <div className="space-y-4">
                      {route.itinerary.map((day) => (
                        <div key={day.day} className="p-4 rounded-lg bg-[var(--surface-muted)]">
                          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-moroccan flex items-center justify-center">
                              <span className="text-white font-bold text-sm">D{day.day}</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-3 mb-2">
                                <h5 className="font-bold text-[var(--text-primary)]">{day.stop}</h5>
                                {day.distance && (
                                  <span className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] bg-[var(--color-primary)]/5 px-2 py-0.5 rounded-full">
                                    <Route className="w-3 h-3" /> {day.distance}
                                  </span>
                                )}
                                {day.driveTime && (
                                  <span className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] bg-[var(--color-primary)]/5 px-2 py-0.5 rounded-full">
                                    <Clock className="w-3 h-3" /> {day.driveTime}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{day.desc}</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {day.eat && (
                                  <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                                    <UtensilsCrossed className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                                    <span>{day.eat}</span>
                                  </div>
                                )}
                                {day.sleep && (
                                  <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                                    <Bed className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                                    <span>{day.sleep}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
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

      {/* ============================================================
          DRIVING TIPS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Essential Driving Tips for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know before getting behind the wheel in Morocco.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {drivingTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{tip.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CAR RENTAL GUIDE
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Car Rental Guide
          </h2>

          {/* Prices */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <CircleDollarSign className="w-5 h-5 text-[var(--color-primary)]" /> Rental Prices
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {carRentalGuide.prices.map((p) => (
                <div key={p.type} className="card-moroccan p-6 text-center">
                  <h4 className="font-bold text-[var(--text-primary)] mb-2 text-sm">{p.type}</h4>
                  <p className="text-lg font-semibold text-[var(--color-primary)] mb-2">{p.price}</p>
                  <p className="text-xs text-[var(--text-muted)]">{p.best}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[var(--color-primary)]" /> Documents Needed
            </h3>
            <div className="card-moroccan p-6">
              <ul className="space-y-3">
                {carRentalGuide.documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Companies */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-[var(--color-primary)]" /> Rental Companies
            </h3>
            <div className="space-y-3">
              {carRentalGuide.companies.map((c) => (
                <div key={c.name} className="card-moroccan p-5 flex gap-4">
                  <div className="flex-shrink-0 w-2 h-auto rounded-full bg-[var(--color-primary)]" />
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)]">{c.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance */}
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[var(--color-primary)]" /> Insurance
            </h3>
            <div className="card-moroccan p-6">
              <ul className="space-y-3">
                {carRentalGuide.insurance.map((ins) => (
                  <li key={ins} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <AlertTriangle className="w-4 h-4 text-[var(--color-accent-dark)] mt-0.5 shrink-0" />
                    {ins}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FUEL & REST STOPS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Fuel &amp; Rest Stops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fuelGuide.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10 mb-3">
                  {item.title === 'Fuel Prices' ? <Fuel className="w-5 h-5 text-[var(--color-accent-dark)]" /> :
                   item.title === 'Roadside Cafes & Rest Stops' ? <Coffee className="w-5 h-5 text-[var(--color-accent-dark)]" /> :
                   <MapPin className="w-5 h-5 text-[var(--color-accent-dark)]" />}
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          ROAD CONDITIONS BY SEASON
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Road Conditions by Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            When you drive matters almost as much as where you drive. Each season brings different conditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalConditions.map((s) => (
              <div key={s.season} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <s.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)]">{s.season}</h3>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: s.ratingColor }}
                    >
                      {s.rating}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.conditions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          ROAD SAFETY
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Road Safety Rules
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s roads demand attention and respect. Follow these rules for a safe journey.
          </p>
          <div className="space-y-4">
            {safetyRules.map((rule, index) => (
              <div key={index} className="card-moroccan p-5 flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-secondary)]/10 shrink-0">
                  <span className="text-xs font-bold text-[var(--color-secondary)]">{index + 1}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <Car className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Explore our destination guides, plan your route, and start your Moroccan road trip adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Destinations
            </Link>
            <Link
              href="/transport"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Navigation className="w-4 h-4" /> Transport Guide
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Clock className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

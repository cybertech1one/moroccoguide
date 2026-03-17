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
  CheckCircle,
  AlertTriangle,
  Fuel,
  Mountain,
  Navigation,
  Camera,
  Thermometer,
  Car,
  Route,
  Shield,
  Compass,
  Sun,
  CloudSun,
  Bed,
  Eye,
  Milestone,
  CircleDot,
  DollarSign,
  BookOpen,
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
  title: 'Morocco Road Trip Routes 2026 | 6 Epic Driving Itineraries with Maps & Stops',
  description:
    'Complete guide to Morocco\'s best road trip routes. From the Marrakech-Essaouira coastal drive to the epic Sahara crossing via Ait Benhaddou. Distances, drive times, fuel costs, road conditions, best stops, and accommodation for 6 unforgettable routes.',
  keywords: [
    'Morocco road trip',
    'Morocco driving routes',
    'Marrakech to Essaouira drive',
    'Fes to Chefchaouen road trip',
    'Marrakech to Merzouga route',
    'Morocco Atlantic coast drive',
    'Dades Gorge road trip',
    'Atlas Mountains driving',
    'Tizi n\'Tichka pass',
    'Morocco road conditions',
    'Morocco fuel costs',
    'Morocco self-drive',
    'Morocco driving itinerary 2026',
    'Ait Benhaddou drive',
    'Todra Gorge route',
    'Morocco road trip planner',
    'Morocco car rental road trip',
    'Tangier to Agadir coast',
    'Ouarzazate loop',
    'Morocco scenic drives',
  ],
  openGraph: {
    title: 'Morocco Road Trip Routes 2026 | 6 Epic Driving Itineraries',
    description:
      'Discover Morocco\'s most spectacular road trip routes. 6 detailed itineraries with distances, fuel costs from 200 MAD, road conditions, and the best stops along the way.',
    url: `${BASE_URL}/morocco-road-trip-routes`,
    images: [
      {
        url: `${BASE_URL}/images/hero-dades-valley-road.webp`,
        width: 1200,
        height: 630,
        alt: 'Winding road through the Dades Valley with dramatic rock formations and lush valley scenery in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Road Trip Routes 2026 | 6 Epic Driving Itineraries',
    description:
      'From coastal cruises to Sahara crossings and mountain passes. 6 detailed Morocco road trip routes with fuel costs, stops, and road conditions.',
    images: [`${BASE_URL}/images/hero-dades-valley-road.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-road-trip-routes` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-road-trip-routes`,
  name: 'Morocco Road Trip Routes 2026 | 6 Epic Driving Itineraries with Maps & Stops',
  description:
    'Complete guide to Morocco\'s best road trip routes. 6 detailed itineraries covering coastal drives, mountain passes, desert crossings, and gorge loops with distances, fuel costs, and accommodation.',
  url: `${BASE_URL}/morocco-road-trip-routes`,
  image: `${BASE_URL}/images/hero-dades-valley-road.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-road-trip-routes`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Road Trip Routes', item: `${BASE_URL}/morocco-road-trip-routes` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ROAD TRIP ROUTES
   ═══════════════════════════════════════════════════════════════ */

const roadTripRoutes = [
  {
    id: 1,
    name: 'Marrakech to Essaouira',
    subtitle: 'The Coastal Argan Road',
    icon: Waves,
    image: '/images/hero-essaouira-ramparts.webp',
    distance: '175 km',
    driveTime: '2.5 hours',
    fuelCost: 'From 200 MAD',
    roadCondition: 'Excellent',
    roadConditionDetail: 'Well-maintained two-lane highway (N8). Smooth asphalt throughout. Some slow-moving trucks on uphill sections. No tolls.',
    bestSeason: 'Year-round, but spring (March-May) for wildflowers. Summer can be windy in Essaouira.',
    description:
      'One of Morocco\'s most popular and accessible road trips. The route from Marrakech to Essaouira takes you through the argan country of the Souss region, where you will see the famous tree-climbing goats perched in argan branches. The landscape transitions from the arid Haouz plain to rolling hills dotted with argan trees before revealing the Atlantic coast. This is a perfect half-day drive with plenty of stops.',
    stops: [
      {
        name: 'Argan Oil Cooperative',
        km: '55 km from Marrakech',
        description: 'Several women\'s cooperatives along the road offer demonstrations of traditional argan oil production. Watch the entire process from nut to oil. Buy genuine cosmetic or culinary argan oil directly from the producers.',
        tip: 'Prices are fixed at cooperatives, no bargaining needed. Cosmetic-grade argan oil from 150 MAD per 100ml.',
      },
      {
        name: 'Goats in Argan Trees',
        km: '80-100 km from Marrakech',
        description: 'The iconic sight of goats perched in argan trees. While some roadside setups are staged by herders for tips, genuine scenes are common in the argan forests. The goats eat the argan fruit and spit out the nut, which is collected for oil production.',
        tip: 'If herders place goats in trees for photos, they expect from 10-20 MAD. Genuine wild scenes are found further from the main road.',
      },
      {
        name: 'Sidi Kaouki',
        km: '25 km south of Essaouira',
        description: 'A sleepy beach village with some of Morocco\'s best surfing and windsurfing. Long, empty beach backed by dunes. A handful of surf camps, cafes, and guesthouses. Perfect for a sunset stop or overnight before continuing to Essaouira.',
        tip: 'Surf lessons from 300 MAD per session. The village is quieter and more affordable than Essaouira.',
      },
      {
        name: 'Essaouira',
        km: '175 km (destination)',
        description: 'The walled coastal city of Essaouira is the reward. Explore the ramparts, the fishing port, the medina (UNESCO World Heritage), and the beach. Famous for fresh seafood, Gnawa music, and a distinctly relaxed atmosphere.',
        tip: 'Stay at least one night. The medina is compact and walkable. Budget riads from 350 MAD per night.',
      },
    ],
    accommodation: [
      { type: 'Budget', option: 'Hostel in Essaouira medina', price: 'From 120 MAD per night' },
      { type: 'Mid-range', option: 'Riad in Essaouira medina', price: 'From 450 MAD per night' },
      { type: 'Luxury', option: 'Heure Bleue Palais or Villa Maroc', price: 'From 1,500 MAD per night' },
    ],
  },
  {
    id: 2,
    name: 'Fes to Chefchaouen',
    subtitle: 'Into the Blue Rif Mountains',
    icon: Mountain,
    image: '/images/hero-chefchaouen-blue.webp',
    distance: '200 km',
    driveTime: '3.5 hours',
    fuelCost: 'From 250 MAD',
    roadCondition: 'Good to Moderate',
    roadConditionDetail: 'N13 highway to Ouazzane is good. The mountain road from Ouazzane to Chefchaouen (P28) is winding with hairpin turns. Narrow in places. Drive slowly and use horn on blind corners.',
    bestSeason: 'Spring (March-May) for green hillsides and wildflowers. Autumn (September-November) for mild temperatures. Winter can bring fog and occasional ice on mountain passes.',
    description:
      'A stunning mountain drive from the imperial city of Fes into the heart of the Rif Mountains, ending at the iconic blue-washed city of Chefchaouen. The route climbs through fertile farmland into increasingly dramatic mountain scenery. The final descent into Chefchaouen, with the blue medina nestled between two peaks, is one of Morocco\'s most memorable arrivals.',
    stops: [
      {
        name: 'Ouazzane',
        km: '130 km from Fes',
        description: 'A hillside town known as the "holy city" of northern Morocco. Home to important zaouias (religious lodges) and a bustling souk. A good rest stop with authentic restaurants where you can find traditional rfissa and harira.',
        tip: 'Stop for lunch here. Local restaurants serve hearty mountain food from 40 MAD per meal.',
      },
      {
        name: 'Rif Mountain Viewpoints',
        km: '160-180 km from Fes',
        description: 'As the road climbs through the Rif, several pull-off points offer panoramic views of terraced cannabis fields (legal under recent reforms for regulated use), cedar forests, and deep valleys. The air becomes noticeably cooler and fresher.',
        tip: 'Stop frequently for photos on the mountain road. Morning light is best for photography.',
      },
      {
        name: 'Akchour Waterfalls',
        km: '30 km from Chefchaouen',
        description: 'A side trip to the stunning waterfalls of Akchour in Talassemtane National Park. The hike to the small falls takes 45 minutes; the large falls take 2 hours. Crystal-clear natural pools for swimming in summer.',
        tip: 'Go early to avoid crowds. Bring water and sturdy shoes. Entry from 20 MAD.',
      },
      {
        name: 'Chefchaouen',
        km: '200 km (destination)',
        description: 'The famous Blue Pearl of Morocco. The entire medina is painted in shades of blue and white, creating one of the most photogenic towns in North Africa. Wander the narrow lanes, visit the kasbah, and absorb the mountain atmosphere.',
        tip: 'Stay at least 2 nights. Best photography at dawn before the crowds. Riads from 300 MAD per night.',
      },
    ],
    accommodation: [
      { type: 'Budget', option: 'Hostel in Chefchaouen medina', price: 'From 100 MAD per night' },
      { type: 'Mid-range', option: 'Riad with terrace views', price: 'From 400 MAD per night' },
      { type: 'Luxury', option: 'Lina Ryad & Spa or Casa Hassan', price: 'From 1,200 MAD per night' },
    ],
  },
  {
    id: 3,
    name: 'Marrakech to Merzouga',
    subtitle: 'The Great Sahara Crossing',
    icon: Sun,
    image: '/images/hero-ait-benhaddou.webp',
    distance: '560 km',
    driveTime: '9 hours (2-3 days recommended)',
    fuelCost: 'From 600 MAD',
    roadCondition: 'Good',
    roadConditionDetail: 'N9 over Tizi n\'Tichka is well-maintained but winding with steep gradients (2,260m summit). N10 through Ouarzazate to Tinghir is flat and straight. N13/R702 to Merzouga is good. Occasional sandstorms near the desert.',
    bestSeason: 'October-April for comfortable desert temperatures. Avoid June-August when Sahara temperatures exceed 45C. Spring (March-April) is ideal with moderate heat and green oases.',
    description:
      'Morocco\'s most epic road trip. This route crosses the High Atlas via the legendary Tizi n\'Tichka pass, passes through the Hollywood of Africa at Ouarzazate, winds through the Dades Valley, penetrates the Todra Gorge, and ends at the towering sand dunes of Erg Chebbi in the Sahara. It is the quintessential Moroccan adventure and should be done over 2-3 days to appreciate every stop.',
    stops: [
      {
        name: 'Tizi n\'Tichka Pass',
        km: '100 km from Marrakech',
        description: 'At 2,260 meters, this is the highest paved road pass in North Africa. The winding road crosses the spine of the High Atlas with stunning views of terraced valleys, Berber villages, and snow-capped peaks in winter. The road was built by the French in 1936.',
        tip: 'Stop at the summit for photos. Roadside vendors sell fossils and minerals from 20 MAD. Verify authenticity before buying.',
      },
      {
        name: 'Ait Benhaddou',
        km: '185 km from Marrakech',
        description: 'A UNESCO World Heritage ksar (fortified village) built of red clay and straw. Featured in Gladiator, Game of Thrones, and Lawrence of Arabia. Cross the river on foot or by donkey to explore the winding alleys that climb to a granary at the summit.',
        tip: 'Visit in the morning for the best light on the clay walls. A local guide from 100 MAD adds context. Free entry to the ksar.',
      },
      {
        name: 'Ouarzazate',
        km: '200 km from Marrakech',
        description: 'The "Door of the Desert" and Morocco\'s film capital. Visit Atlas Film Studios where movies from The Mummy to Kingdom of Heaven were filmed. The Kasbah Taourirt in town is worth an hour\'s exploration.',
        tip: 'Atlas Studios entry from 60 MAD. Ouarzazate is the last major town for supplies before the desert.',
      },
      {
        name: 'Todra Gorge',
        km: '420 km from Marrakech',
        description: 'A dramatic canyon where 300-meter limestone cliffs narrow to just 10 meters apart. The road passes through the gorge floor alongside a river. Rock climbers come from around the world for the sheer walls. Walk into the gorge for the most dramatic section.',
        tip: 'Visit in the morning when sunlight illuminates the gorge walls. Hotels inside the gorge from 250 MAD per night.',
      },
      {
        name: 'Erg Chebbi (Merzouga)',
        km: '560 km (destination)',
        description: 'The grand finale. Erg Chebbi\'s sand dunes rise to 150 meters, glowing orange at sunrise and sunset. Camel treks into the dunes, overnight in desert camps, sandboarding, and stargazing in some of the clearest skies on Earth.',
        tip: 'Book a desert camp in advance. Budget camps from 350 MAD, luxury camps from 1,500 MAD per person including dinner, camel ride, and breakfast.',
      },
    ],
    accommodation: [
      { type: 'Budget', option: 'Desert camp at Erg Chebbi', price: 'From 350 MAD per person' },
      { type: 'Mid-range', option: 'Riad in Ouarzazate or Tinghir', price: 'From 500 MAD per night' },
      { type: 'Luxury', option: 'Luxury desert camp (Merzouga Luxury Camp)', price: 'From 2,500 MAD per person' },
    ],
  },
  {
    id: 4,
    name: 'Tangier to Agadir',
    subtitle: 'The Full Atlantic Coast',
    icon: Compass,
    image: '/images/hero-coastal.webp',
    distance: '900 km',
    driveTime: '10-12 hours (4-7 days recommended)',
    fuelCost: 'From 900 MAD',
    roadCondition: 'Excellent',
    roadConditionDetail: 'Mostly autoroute (toll motorway) from Tangier to El Jadida. Good national roads from El Jadida south. Well-maintained throughout. Toll costs from Tangier to Casablanca approximately 200 MAD.',
    bestSeason: 'Year-round. Summer (June-September) for beach weather. Spring and autumn for milder temperatures and fewer crowds. Winter is mild along the coast.',
    description:
      'The grand coastal odyssey of Morocco. This route follows the entire Atlantic seaboard from the Strait of Gibraltar to the Souss coast, passing through some of Morocco\'s most diverse and historically rich cities. From the cosmopolitan energy of Tangier to the whitewashed arts town of Asilah, the political capital Rabat, the Portuguese fortress of El Jadida, the bohemian port of Essaouira, and finally the sun-drenched resort of Agadir. Do this over a week for the full experience.',
    stops: [
      {
        name: 'Asilah',
        km: '45 km from Tangier',
        description: 'A charming whitewashed coastal town with Portuguese ramparts, colorful murals, and a peaceful medina. Famous for its annual arts festival. The beach stretches for kilometers north of town. A quieter, more artistic alternative to Tangier.',
        tip: 'Visit the murals inside the medina walls. Seafood restaurants on the ramparts from 70 MAD per meal.',
      },
      {
        name: 'Rabat',
        km: '280 km from Tangier',
        description: 'Morocco\'s capital and a UNESCO World Heritage city. Visit the Kasbah of the Udayas with its blue-and-white Andalusian streets, the Hassan Tower, the Mohammed V Mausoleum, and the ancient ruins of Chellah. A cultured, clean, and often-overlooked city.',
        tip: 'The Kasbah of the Udayas is free to enter. Allow half a day minimum. Rabat has excellent modern restaurants.',
      },
      {
        name: 'El Jadida',
        km: '420 km from Tangier',
        description: 'A coastal city with a stunning Portuguese cistern (UNESCO World Heritage), a fortress old town, and a long sandy beach. The underground cistern, with its vaulted ceiling reflected in shallow water, is one of Morocco\'s most photographed interiors.',
        tip: 'Portuguese Cistern entry from 20 MAD. Visit in the morning for the best light reflections. Beach hotels from 400 MAD.',
      },
      {
        name: 'Essaouira',
        km: '750 km from Tangier',
        description: 'The windy city of Essaouira is a highlight of any Moroccan coastal trip. The fortified port, the bustling fish market, the Gnawa music scene, and the wide sandy beach make it a must-stop. The medina is compact and easily explored on foot.',
        tip: 'Eat fresh grilled fish at the port from 50 MAD per plate. Stay at least 2 nights to appreciate the atmosphere.',
      },
      {
        name: 'Agadir',
        km: '900 km (destination)',
        description: 'Morocco\'s premier beach resort city. Rebuilt after the devastating 1960 earthquake, Agadir is modern, sunny (300+ days per year), and beachfront-focused. The long crescent beach, the marina, and the nearby Souk El Had make it a comfortable end point.',
        tip: 'Visit the hilltop Agadir Oufella for sunset views over the city and bay. Beachfront hotels from 600 MAD per night.',
      },
    ],
    accommodation: [
      { type: 'Budget', option: 'Hostels in each city', price: 'From 100 MAD per night' },
      { type: 'Mid-range', option: 'Riads and coastal hotels', price: 'From 500 MAD per night' },
      { type: 'Luxury', option: 'Sofitel Agadir or boutique riads en route', price: 'From 2,000 MAD per night' },
    ],
  },
  {
    id: 5,
    name: 'Ouarzazate to Dades & Todra Gorges',
    subtitle: 'The Valley of a Thousand Kasbahs',
    icon: Route,
    image: '/images/hero-dades-gorge.webp',
    distance: '300 km loop',
    driveTime: '5-6 hours driving (2-3 days recommended)',
    fuelCost: 'From 350 MAD',
    roadCondition: 'Good to Moderate',
    roadConditionDetail: 'N10 from Ouarzazate to Tinghir is good asphalt. Roads into Dades and Todra gorges are narrower with some tight curves. The loop road between the gorges is paved but less maintained. No toll roads.',
    bestSeason: 'March-May for the Valley of Roses in bloom. October-November for mild temperatures. Summer is very hot (40C+). Winter is cold at night but pleasant during the day.',
    description:
      'A spectacular loop through Morocco\'s most dramatic canyon country. Starting from Ouarzazate, the route follows the Road of a Thousand Kasbahs along the Dades River valley, climbs into the Dades Gorge with its serpentine switchbacks, continues to the towering Todra Gorge, and returns through the Draa Valley. In spring, the Valley of Roses near Kelaat M\'Gouna explodes in pink blooms. This is the heart of Morocco\'s pre-Saharan landscape.',
    stops: [
      {
        name: 'Skoura & Kasbah Amridil',
        km: '40 km from Ouarzazate',
        description: 'An oasis town with a magnificent palm grove (palmerie) containing some of the finest kasbahs in Morocco. Kasbah Amridil, featured on the 50 MAD banknote, is a beautifully preserved fortress. Explore the palmerie on foot or by bicycle.',
        tip: 'Kasbah Amridil entry from 30 MAD. Rent a bicycle in Skoura from 100 MAD per day to explore the palmerie.',
      },
      {
        name: 'Kelaat M\'Gouna (Valley of Roses)',
        km: '95 km from Ouarzazate',
        description: 'The center of Morocco\'s rose industry. In April and May, the valley is carpeted in Damask roses harvested for rose water and essential oils. The annual Rose Festival in May is a major celebration. Rose products are sold year-round at cooperatives.',
        tip: 'Visit in May for the Rose Festival. Rose water from 30 MAD per bottle. Rose oil from 200 MAD per small vial.',
      },
      {
        name: 'Dades Gorge',
        km: '120 km from Ouarzazate',
        description: 'A canyon carved by the Dades River with extraordinary rock formations known as "monkey fingers." The road climbs through switchbacks that are among the most photographed in Morocco. The gorge is 25 km deep with soaring red cliffs on both sides.',
        tip: 'Drive slowly on the switchbacks. Stop at the famous "snake road" viewpoint. Guesthouses in the gorge from 250 MAD per night.',
      },
      {
        name: 'Todra Gorge',
        km: '180 km from Ouarzazate',
        description: 'The narrowest point of this gorge squeezes to just 10 meters between 300-meter vertical limestone walls. Walk into the gorge on the flat road for the most dramatic views. Rock climbers scale the walls year-round. A river runs through the canyon floor.',
        tip: 'Morning is best for photos when the sun enters the gorge. There are several cafes at the gorge entrance. Climbing guides from 500 MAD per day.',
      },
      {
        name: 'Tinghir',
        km: '170 km from Ouarzazate',
        description: 'A sprawling oasis town and the gateway to Todra Gorge. The old Jewish quarter (mellah) and the vast palmerie are worth exploring. From the hillside road above town, the view of the green palm oasis against the barren desert mountains is breathtaking.',
        tip: 'Walk through the palmerie at sunset. The town has good restaurants serving Amazigh cuisine from 50 MAD per meal.',
      },
    ],
    accommodation: [
      { type: 'Budget', option: 'Guesthouses in Dades or Todra gorges', price: 'From 200 MAD per night' },
      { type: 'Mid-range', option: 'Kasbah hotel in Skoura or Tinghir', price: 'From 500 MAD per night' },
      { type: 'Luxury', option: 'Dar Ahlam (Skoura) or kasbah boutique hotels', price: 'From 3,000 MAD per night' },
    ],
  },
  {
    id: 6,
    name: 'Atlas Mountains Loop',
    subtitle: 'Two Passes, Two Worlds',
    icon: Mountain,
    image: '/images/hero-atlas.webp',
    distance: '350 km',
    driveTime: '7-8 hours driving (2-3 days recommended)',
    fuelCost: 'From 400 MAD',
    roadCondition: 'Moderate to Challenging',
    roadConditionDetail: 'Tizi n\'Test (R203) is narrow, winding, and steep with hairpin bends and occasional landslide debris. Not for nervous drivers. Tizi n\'Tichka (N9) is wider and better maintained. The Taroudant-Marrakech leg via Tizi n\'Tichka is the easier section.',
    bestSeason: 'April-June and September-November. Winter can bring snow closures on both passes. Summer is hot in Taroudant but pleasant at altitude. Check road conditions before departing in winter.',
    description:
      'A thrilling loop that crosses the High Atlas twice via two of Morocco\'s most dramatic mountain passes. The route heads south from Marrakech over the wild and narrow Tizi n\'Test pass (2,092m), through Berber villages and past the ancient Tin Mal Mosque, descends into the Souss Valley to the walled city of Taroudant, then returns north over the more famous Tizi n\'Tichka pass (2,260m). This loop showcases the full grandeur of the Atlas range and the contrast between its northern and southern faces.',
    stops: [
      {
        name: 'Tizi n\'Test Pass',
        km: '130 km from Marrakech',
        description: 'One of Morocco\'s most dramatic and least-traveled mountain passes. The narrow road clings to the mountainside with sheer drops and hairpin bends. At the summit (2,092m), views stretch across the High Atlas in every direction. The road was Morocco\'s first trans-Atlas route, built by the French in the 1920s.',
        tip: 'Start early to cross the pass in good light. Drive slowly and use your horn on blind corners. Not recommended for large vehicles.',
      },
      {
        name: 'Tin Mal Mosque',
        km: '100 km from Marrakech',
        description: 'A 12th-century mosque built by the Almohad dynasty founder Ibn Tumart. One of only two mosques in Morocco that non-Muslims can enter (the other being Hassan II in Casablanca). The ruined but still magnificent building sits in a remote valley surrounded by mountains.',
        tip: 'Entry from 20 MAD. A caretaker will open the mosque and give a basic explanation. Bring water as there are no facilities.',
      },
      {
        name: 'Taroudant',
        km: '230 km from Marrakech (via Tizi n\'Test)',
        description: 'Known as "Little Marrakech" for its red-clay ramparts encircling a bustling medina. Far less touristy than Marrakech with a genuine Amazigh character. Two excellent souks: the Arab souk for crafts and the Berber souk for daily goods. The surrounding Souss Valley produces saffron, argan, and citrus.',
        tip: 'Walk the complete ramparts by calash (horse-drawn carriage) from 100 MAD. The tanneries are smaller but less overwhelming than Fes.',
      },
      {
        name: 'Tizi n\'Tichka Pass',
        km: '250 km into the loop',
        description: 'The highest major road pass in North Africa at 2,260 meters. Wider and better-maintained than Tizi n\'Test. The descent toward Marrakech offers spectacular views of the Haouz plain stretching to the horizon. In winter, the summit may have snow.',
        tip: 'Mineral and fossil sellers line the summit. Genuine fossils from 50 MAD. The pass is on the main Marrakech-Ouarzazate highway.',
      },
      {
        name: 'Berber Villages',
        km: 'Throughout the route',
        description: 'Both passes are lined with traditional Berber villages clinging to hillsides. Adobe houses with flat roofs, terraced fields of barley and walnut, and stone-walled enclosures for livestock. Some villages offer homestay experiences and guided walks.',
        tip: 'Ask before photographing people. Homestays from 200 MAD per person including dinner and breakfast. A genuine cultural experience.',
      },
    ],
    accommodation: [
      { type: 'Budget', option: 'Berber homestay or guesthouse', price: 'From 200 MAD per person' },
      { type: 'Mid-range', option: 'Riad in Taroudant', price: 'From 500 MAD per night' },
      { type: 'Luxury', option: 'Dar Zitoune or La Gazelle d\'Or (Taroudant)', price: 'From 2,500 MAD per night' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DRIVING TIPS
   ═══════════════════════════════════════════════════════════════ */

const drivingTips = [
  {
    title: 'International Driving Permit',
    icon: BookOpen,
    description:
      'You need your home driving licence and an International Driving Permit (IDP) to legally drive in Morocco. Obtain your IDP before traveling. Rental agencies will ask for both at pickup.',
  },
  {
    title: 'Fuel Stations & Costs',
    icon: Fuel,
    description:
      'Fuel stations are plentiful on main routes but scarce in desert and mountain areas. Fill up whenever you can. Diesel from 12 MAD per liter, petrol from 14 MAD per liter. Most stations accept cash only outside cities.',
  },
  {
    title: 'Speed Limits & Police',
    icon: Shield,
    description:
      'Speed limits: 60 km/h in towns, 100 km/h on national roads, 120 km/h on autoroutes. Police checkpoints are frequent. Always carry your licence, IDP, and rental documents. Speeding fines from 300 MAD payable on the spot.',
  },
  {
    title: 'Road Conditions',
    icon: AlertTriangle,
    description:
      'Main highways (autoroutes) are excellent. National roads (N-roads) are generally good. Mountain roads can be narrow and winding. Watch for livestock, donkeys, and pedestrians, especially in rural areas and at night.',
  },
  {
    title: 'Car Rental Advice',
    icon: Car,
    description:
      'Rent from international agencies (Hertz, Europcar, Sixt) at airports for better insurance and support. Budget from 300 MAD per day for a small car, from 600 MAD for an SUV. Full insurance is strongly recommended for mountain routes.',
  },
  {
    title: 'Mountain Driving',
    icon: Mountain,
    description:
      'Atlas passes require careful driving. Use low gear on descents, sound your horn on blind corners, and give way to uphill traffic. Check weather conditions before crossing passes in winter. Snow chains may be needed December-February.',
  },
  {
    title: 'Navigation',
    icon: Navigation,
    description:
      'Download offline maps (Google Maps or Maps.me) before your trip. Mobile data coverage is patchy in mountains and desert. GPS is reliable on main routes. Road signs are in Arabic and French.',
  },
  {
    title: 'Night Driving',
    icon: Eye,
    description:
      'Avoid driving at night outside cities. Unlit vehicles, livestock on roads, and pedestrians in dark clothing make night driving dangerous. Plan your route to arrive at your destination before sunset.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ROUTE COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════ */

const routeComparison = [
  { route: 'Marrakech - Essaouira', distance: '175 km', time: '2.5h', difficulty: 'Easy', days: '1-2 days', fuel: 'From 200 MAD' },
  { route: 'Fes - Chefchaouen', distance: '200 km', time: '3.5h', difficulty: 'Moderate', days: '1-2 days', fuel: 'From 250 MAD' },
  { route: 'Marrakech - Merzouga', distance: '560 km', time: '9h', difficulty: 'Moderate', days: '2-3 days', fuel: 'From 600 MAD' },
  { route: 'Tangier - Agadir', distance: '900 km', time: '10-12h', difficulty: 'Easy', days: '4-7 days', fuel: 'From 900 MAD' },
  { route: 'Ouarzazate Gorge Loop', distance: '300 km', time: '5-6h', difficulty: 'Moderate', days: '2-3 days', fuel: 'From 350 MAD' },
  { route: 'Atlas Mountains Loop', distance: '350 km', time: '7-8h', difficulty: 'Challenging', days: '2-3 days', fuel: 'From 400 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COST BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const costBreakdown = [
  { item: 'Car rental (economy)', price: 'From 300 MAD per day', note: 'International agencies at airports' },
  { item: 'Car rental (SUV/4x4)', price: 'From 600 MAD per day', note: 'Recommended for mountain and desert routes' },
  { item: 'Full insurance (CDW + theft)', price: 'From 100 MAD per day', note: 'Strongly recommended for all routes' },
  { item: 'Diesel fuel', price: 'From 12 MAD per liter', note: 'Prices vary slightly by region' },
  { item: 'Petrol fuel', price: 'From 14 MAD per liter', note: 'Most rental cars run on diesel' },
  { item: 'Autoroute tolls (Tangier-Casablanca)', price: 'From 200 MAD one way', note: 'Paid at toll booths in cash or card' },
  { item: 'Autoroute tolls (Casablanca-Marrakech)', price: 'From 100 MAD one way', note: 'Shorter toll section' },
  { item: 'Parking in cities', price: 'From 5 MAD per hour', note: 'Unofficial attendants expect from 10-20 MAD' },
  { item: 'Roadside breakdown assistance', price: 'From 500 MAD per call', note: 'Included with some rental insurance' },
  { item: 'Budget accommodation (per night)', price: 'From 150 MAD', note: 'Hostels, basic guesthouses' },
  { item: 'Mid-range accommodation (per night)', price: 'From 500 MAD', note: 'Riads, kasbah hotels' },
  { item: 'Meals on the road', price: 'From 40 MAD per meal', note: 'Roadside restaurants and cafes' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March-May)',
    icon: Sun,
    description: 'The ideal season for road trips. Wildflowers blanket the Atlas foothills, the Valley of Roses blooms in April-May, desert temperatures are comfortable, and daylight hours are long. Roads are clear of winter snow. The best overall time for all 6 routes.',
    bestRoutes: ['All 6 routes', 'Valley of Roses in April-May', 'Desert routes before summer heat'],
  },
  {
    season: 'Summer (June-August)',
    icon: Thermometer,
    description: 'Desert and inland routes become extremely hot (45C+). Coastal routes are pleasant with cooling Atlantic breezes. Mountain passes are snow-free but hot at lower elevations. Essaouira is famously windy and cool in summer.',
    bestRoutes: ['Tangier-Agadir coast', 'Marrakech-Essaouira', 'Avoid desert routes'],
  },
  {
    season: 'Autumn (September-November)',
    icon: CloudSun,
    description: 'Temperatures cool to comfortable levels across the country. Desert routes become viable again from October. Fewer tourists than spring. Date harvest season in oases. An excellent time for the Sahara crossing.',
    bestRoutes: ['Marrakech-Merzouga', 'Ouarzazate gorge loop', 'All routes from October'],
  },
  {
    season: 'Winter (December-February)',
    icon: Mountain,
    description: 'Mountain passes may close temporarily due to snow. Tizi n\'Test is most affected. Desert nights are cold (near 0C) but days are sunny. Coastal routes remain pleasant. Check road conditions before any mountain crossing.',
    bestRoutes: ['Coastal routes', 'Avoid mountain passes without checking conditions'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoRoadTripRoutesPage() {
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
            backgroundImage: 'url(/images/hero-dades-valley-road.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Road Trip Routes</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Car className="w-4 h-4" />
            Road Trips &amp; Driving
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Road Trip Routes:
            <br className="hidden md:block" /> 6 Epic Driving Itineraries
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From coastal cruises to Sahara crossings and mountain passes. Complete route guides
            with distances, fuel costs from 200 MAD, road conditions, and the best stops.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is One of the World&apos;s Greatest Road Trip Destinations
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco offers a diversity of landscapes that few countries can match, and
                the best way to experience them is behind the wheel. In a single week of driving,
                you can cross the High Atlas through mountain passes above 2,000 meters, follow
                winding gorges through red-clay canyons, cruise along the Atlantic coast, and
                arrive at the towering sand dunes of the Sahara.
              </p>
              <p>
                The road network has improved dramatically in recent years. Modern autoroutes
                connect the major cities, while well-maintained national roads thread through
                mountain passes and desert valleys. Morocco is one of the easiest countries in
                Africa to self-drive, with clear signage in French and Arabic, plentiful fuel
                stations on main routes, and a growing infrastructure of roadside services.
              </p>
              <p>
                These six routes represent the very best of Moroccan road-tripping. Whether you
                have two days or two weeks, whether you want a relaxed coastal cruise or an
                adrenaline-fueled mountain crossing, there is a route here for you. Each includes
                detailed distances, drive times, fuel costs, road conditions, the best stops,
                and accommodation at every budget level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Route Comparison Table ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Route Comparison at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Compare all six routes side by side to find the perfect road trip for your schedule and skill level.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All fuel costs are estimates based on a mid-size diesel vehicle. Seasonal pricing applies during peak tourist months (October-April) when car rental rates may increase by 20-30%.
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="hidden md:grid grid-cols-6 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Route</div>
                <div className="p-3 px-4">Distance</div>
                <div className="p-3 px-4">Drive Time</div>
                <div className="p-3 px-4">Difficulty</div>
                <div className="p-3 px-4">Recommended</div>
                <div className="p-3 px-4">Fuel Cost</div>
              </div>
              {routeComparison.map((item, i) => (
                <div
                  key={item.route}
                  className={`grid grid-cols-2 md:grid-cols-6 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)] col-span-2 md:col-span-1">{item.route}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">
                    <span className="md:hidden text-xs text-[var(--text-muted)]">Distance: </span>{item.distance}
                  </div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">
                    <span className="md:hidden text-xs text-[var(--text-muted)]">Time: </span>{item.time}
                  </div>
                  <div className="p-3 px-4">
                    <span className="md:hidden text-xs text-[var(--text-muted)]">Difficulty: </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      item.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      item.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {item.difficulty}
                    </span>
                  </div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">
                    <span className="md:hidden text-xs text-[var(--text-muted)]">Days: </span>{item.days}
                  </div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.fuel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Detailed Route Cards ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            6 Detailed Road Trip Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each route includes distances, drive times, road conditions, must-see stops, and accommodation at every budget.
          </p>

          <div className="space-y-16">
            {roadTripRoutes.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div key={route.id} className="card-moroccan overflow-hidden" id={`route-${route.id}`}>
                  {/* Route Header with Image */}
                  <div className="relative h-64 md:h-80">
                    <img
                      src={route.image}
                      alt={`${route.name} road trip route through Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                        <RouteIcon className="w-4 h-4" />
                        Route {route.id} of 6
                      </div>
                      <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-1">
                        {route.name}
                      </h3>
                      <p className="text-white/80 text-sm">{route.subtitle}</p>
                    </div>
                  </div>

                  {/* Route Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-b border-[var(--border-primary)]">
                    <div className="p-4 text-center border-r border-[var(--border-primary)]">
                      <Milestone className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-1" />
                      <div className="text-sm font-bold text-[var(--text-primary)]">{route.distance}</div>
                      <div className="text-xs text-[var(--text-muted)]">Distance</div>
                    </div>
                    <div className="p-4 text-center border-r border-[var(--border-primary)]">
                      <Clock className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-1" />
                      <div className="text-sm font-bold text-[var(--text-primary)]">{route.driveTime}</div>
                      <div className="text-xs text-[var(--text-muted)]">Drive Time</div>
                    </div>
                    <div className="p-4 text-center border-r border-[var(--border-primary)]">
                      <Fuel className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-1" />
                      <div className="text-sm font-bold text-[var(--color-accent)]">{route.fuelCost}</div>
                      <div className="text-xs text-[var(--text-muted)]">Fuel Cost</div>
                    </div>
                    <div className="p-4 text-center">
                      <Shield className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-1" />
                      <div className="text-sm font-bold text-[var(--text-primary)]">{route.roadCondition}</div>
                      <div className="text-xs text-[var(--text-muted)]">Road Quality</div>
                    </div>
                  </div>

                  {/* Route Description & Details */}
                  <div className="p-6 md:p-8">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">{route.description}</p>

                    {/* Road Condition Detail */}
                    <div className="flex items-start gap-3 p-4 bg-[var(--surface-muted)] rounded-lg mb-6">
                      <Car className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-[var(--text-primary)]">Road Conditions: </span>
                        <span className="text-sm text-[var(--text-secondary)]">{route.roadConditionDetail}</span>
                      </div>
                    </div>

                    {/* Best Season */}
                    <div className="flex items-start gap-3 p-4 bg-[var(--surface-muted)] rounded-lg mb-8">
                      <Sun className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-[var(--text-primary)]">Best Season: </span>
                        <span className="text-sm text-[var(--text-secondary)]">{route.bestSeason}</span>
                      </div>
                    </div>

                    {/* Stops */}
                    <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                      <Camera className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                      Best Stops Along the Route
                    </h4>
                    <div className="space-y-4 mb-8">
                      {route.stops.map((stop, i) => (
                        <div key={i} className="border border-[var(--border-primary)] rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                              <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                              {stop.name}
                            </h5>
                            <span className="text-xs text-[var(--text-muted)] shrink-0 ml-3">{stop.km}</span>
                          </div>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{stop.description}</p>
                          <div className="flex items-start gap-2 p-2 bg-[var(--surface-muted)] rounded">
                            <Info className="w-3 h-3 text-[var(--color-gold)] mt-0.5 shrink-0" />
                            <p className="text-xs text-[var(--text-muted)]">
                              <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {stop.tip}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Accommodation */}
                    <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                      <Bed className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                      Where to Stay
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {route.accommodation.map((acc, i) => (
                        <div key={i} className="bg-[var(--surface-muted)] p-4 rounded-lg">
                          <div className="text-xs font-semibold text-[var(--color-accent)] uppercase mb-1">{acc.type}</div>
                          <div className="text-sm font-medium text-[var(--text-primary)] mb-1">{acc.option}</div>
                          <div className="text-xs text-[var(--color-accent)] font-semibold">{acc.price}</div>
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

      {/* ── Cost Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Road Trip Cost Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Budget your Morocco road trip with this comprehensive breakdown of driving, accommodation, and meal costs.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods, when car rental rates may increase by 20-30%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {costBreakdown.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Seasonal Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CloudSun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Season for Each Route
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a year-round road trip destination, but each season favors different routes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {seasonalGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{season.description}</p>
                  <div className="space-y-1.5">
                    {season.bestRoutes.map((route, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {route}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Driving Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Driving Tips for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know to drive safely and confidently on Moroccan roads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {drivingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco Road Trip Scenery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-dades-valley-road.webp"
                alt="Winding road through the Dades Valley with dramatic rock formations in Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Dades Valley Road</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-ait-benhaddou.webp"
                alt="The UNESCO World Heritage kasbah of Ait Benhaddou with its distinctive clay towers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Ait Benhaddou</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-atlas.webp"
                alt="High Atlas Mountains road pass with panoramic views of peaks and valleys in Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Atlas Mountain Pass</p>
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
                Is it safe to drive in Morocco as a tourist?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Morocco is generally safe for self-driving tourists. The main highways are well-maintained and
                clearly signposted in French and Arabic. The biggest hazards are aggressive driving by some locals,
                livestock on rural roads, and narrow mountain passes. Drive defensively, avoid night driving outside
                cities, and you will have a safe and enjoyable experience.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a 4x4 for these road trip routes?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                All six routes are doable in a standard car. However, an SUV or 4x4 (from 600 MAD per day)
                provides more comfort on mountain passes and rough sections. For the Atlas Mountains Loop
                (Route 6) and the Ouarzazate gorge loop (Route 5), higher ground clearance is appreciated
                but not essential if you stick to paved roads.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the minimum age for renting a car in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                You must be at least 21 years old to rent a car in Morocco, and some agencies require you to
                be 25 for larger vehicles. You need a valid driving licence held for at least one year, plus an
                International Driving Permit. A credit card is required for the security deposit (from 3,000 MAD hold).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much should I budget for a week-long road trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A budget road trip (economy car, hostels, street food) costs from 5,000 MAD for a week excluding car
                rental. Mid-range (SUV, riads, restaurants) costs from 12,000 MAD. Luxury (4x4, boutique hotels,
                fine dining) from 25,000 MAD. Car rental from 2,100 MAD per week for economy, from 4,200 MAD for
                an SUV. Fuel costs vary by route from 200 to 900 MAD per route.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I pick up a rental car in one city and drop it off in another?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, most international agencies allow one-way rentals between major cities (Marrakech, Fes,
                Casablanca, Agadir, Tangier). A one-way fee applies, typically from 500-1,500 MAD depending
                on distance. This is ideal for the Tangier-to-Agadir coastal route or the Marrakech-to-Merzouga
                Sahara crossing if you plan to fly out from a different city.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What happens if my car breaks down on a remote road?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ensure your rental includes roadside assistance (most international agencies include this).
                Save the agency emergency number in your phone. Mobile coverage exists along all main routes
                but may be patchy in deep gorges and remote mountain areas. Locals are generally very helpful
                and will stop to assist. Carry water, snacks, and a phone charger for any remote route.
              </p>
            </div>
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
            <Link href="/overlanding" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Overlanding Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Take your road trip off-road with our complete guide to overlanding and 4x4 adventures across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/sahara" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know about visiting the Sahara, from camel treks to luxury desert camps.
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
                Explore the High Atlas, Middle Atlas, and Anti-Atlas with our trekking, village, and adventure guide.
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

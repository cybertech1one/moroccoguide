import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  TreePine,
  Bird,
  Camera,
  MapPin,
  Calendar,
  Star,
  Eye,
  Binoculars,
  Shield,
  Heart,
  Compass,
  Clock,
  CheckCircle,
  Sun,
  Mountain,
  Thermometer,
  AlertTriangle,
  ArrowRight,
  Leaf,
  Footprints,
  Tent,
  Ruler,
  Info,
  Users,
  Flower2,
  CircleDot,
  BookOpen,
  Waypoints,
  Sunrise,
  CloudSun,
  Snowflake,
  Droplets,
  Trees,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'National Parks & Nature Reserves Morocco | Complete Guide to Protected Areas',
  description:
    'Explore Morocco\'s 11 national parks and nature reserves. Toubkal, Ifrane, Souss-Massa, Talassemtane, Al Hoceima, Khenifiss, Tazekka, Iriqui. Trails, wildlife, permits, best seasons, endemic species, and conservation.',
  keywords: [
    'morocco national parks',
    'toubkal national park',
    'ifrane national park',
    'souss massa national park',
    'talassemtane national park',
    'al hoceima national park',
    'khenifiss national park',
    'tazekka national park',
    'iriqui national park',
    'haut atlas oriental national park',
    'morocco nature reserves',
    'morocco hiking trails',
    'morocco endemic species',
    'morocco conservation',
    'morocco wildlife photography',
    'morocco camping parks',
    'morocco guided nature tours',
    'morocco cedar forests',
    'morocco argan trees',
    'morocco biodiversity',
  ],
  openGraph: {
    title: 'National Parks & Nature Reserves Morocco | Complete Protected Areas Guide',
    description:
      'Comprehensive guide to Morocco\'s 11 national parks, nature reserves, endemic species, trails, permits, and conservation programs.',
    url: 'https://citytoursmorocco.com/national-parks',
    images: [
      {
        url: '/images/hero-desert.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Toubkal National Park in the High Atlas Mountains of Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/national-parks' },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      name: 'Morocco National Parks & Nature Reserves Guide',
      description:
        'Complete guide to Morocco\'s 11 national parks and numerous nature reserves, covering trails, endemic species, permits, conservation, and responsible tourism.',
      url: 'https://citytoursmorocco.com/national-parks',
      touristType: ['Ecotourism', 'Hiking', 'Wildlife tourism', 'Nature photography'],
      image: '/images/hero-desert.webp',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.0600,
        longitude: -7.9100,
      },
    },
    {
      '@type': 'ItemList',
      name: 'Morocco National Parks',
      description: 'The national parks of Morocco protecting diverse ecosystems from alpine peaks to Saharan wetlands.',
      numberOfItems: 10,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Toubkal National Park' },
        { '@type': 'ListItem', position: 2, name: 'Ifrane National Park' },
        { '@type': 'ListItem', position: 3, name: 'Souss-Massa National Park' },
        { '@type': 'ListItem', position: 4, name: 'Talassemtane National Park' },
        { '@type': 'ListItem', position: 5, name: 'Al Hoceima National Park' },
        { '@type': 'ListItem', position: 6, name: 'Khenifiss National Park' },
        { '@type': 'ListItem', position: 7, name: 'Haut Atlas Oriental National Park' },
        { '@type': 'ListItem', position: 8, name: 'Tazekka National Park' },
        { '@type': 'ListItem', position: 9, name: 'Iriqui National Park' },
        { '@type': 'ListItem', position: 10, name: 'Toubkal Extensions & Buffer Zones' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need a permit to enter Moroccan national parks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Moroccan national parks do not charge an entry fee, but some require registration at a park office. Toubkal National Park requires a small fee for the summit trail. Hiring a licensed guide is mandatory in certain zones.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best national park in Morocco for wildlife?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Souss-Massa National Park is the best for wildlife, hosting the critically endangered northern bald ibis, Dorcas gazelles, and over 250 bird species along 65 km of wild Atlantic coast.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I camp in Moroccan national parks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wild camping is generally permitted in designated areas within Moroccan national parks, especially at altitude in the High Atlas. Some parks have official campsites or refuge huts. Always check with local park authorities for current regulations.',
          },
        },
      ],
    },
  ],
};

/* ================================================================
   NATIONAL PARKS DATA
   ================================================================ */

interface NationalPark {
  name: string;
  region: string;
  established: number;
  area: string;
  elevation: string;
  highlights: string;
  bestFor: string;
  description: string;
  detailedDescription: string;
  keySpecies: string[];
  bestTrails: string[];
  permits: string;
  bestSeason: string;
  image: string;
  coordinates: { lat: number; lng: number };
}

const nationalParks: NationalPark[] = [
  {
    name: 'Toubkal National Park',
    region: 'High Atlas Mountains',
    established: 1942,
    area: '380 km\u00B2',
    elevation: '1,800m - 4,167m',
    highlights: 'North Africa\'s highest peak, Berber villages, alpine flora, Barbary sheep, dramatic gorges',
    bestFor: 'Mountaineering, trekking, alpine botany, cultural encounters',
    description: 'Morocco\'s oldest and most celebrated national park, established in 1942, centers on Jebel Toubkal, the highest peak in North Africa at 4,167 meters. The park protects a rugged high-altitude landscape of deep valleys, permanent snowfields, and over 900 plant species.',
    detailedDescription: 'Toubkal National Park is the crown jewel of Moroccan conservation. Sprawling across 380 square kilometers of the central High Atlas, it encompasses a world of extremes: scorching summer valleys that give way to snow-clad peaks, alpine lakes that freeze solid in winter, and scree slopes that burst with wildflowers in spring. The summit of Jebel Toubkal draws thousands of trekkers annually, but the park\'s true riches lie in its less-visited corners. The Azzaden Valley offers multi-day treks through Berber villages where traditional agriculture has shaped the landscape for centuries. Barbary sheep navigate impossible cliff faces on the eastern ridges, while golden eagles circle overhead. The park has been at the center of Morocco\'s ibex reintroduction program, and sightings of these agile mountain goats are increasingly common. The Imlil Valley serves as the primary gateway, with a network of mountain refuges and guesthouses making extended treks accessible. Spring brings a spectacular wildflower season, with over 100 species blooming above the treeline.',
    keySpecies: ['Barbary sheep', 'Golden eagle', 'Atlas day gecko', 'Barbary partridge', 'Levaillant\'s woodpecker', 'North African ibex (reintroduced)'],
    bestTrails: ['Toubkal Summit via Imlil (2 days)', 'Azzaden Valley Circuit (3-4 days)', 'Lac d\'Ifni Trek (2 days)', 'Tizi n\'Ouanoums Pass', 'Around Toubkal Circuit (5-6 days)'],
    permits: 'Small entry fee at Imlil trailhead. Licensed guide required for summit in winter. Mountain refuge reservations recommended.',
    bestSeason: 'April to June, September to November. Summit accessible June to October without technical gear.',
    image: '/images/hero-desert.webp',
    coordinates: { lat: 31.0600, lng: -7.9100 },
  },
  {
    name: 'Ifrane National Park',
    region: 'Middle Atlas Mountains',
    established: 2004,
    area: '500 km\u00B2',
    elevation: '1,600m - 2,400m',
    highlights: 'Ancient cedar forests, Barbary macaques, mountain lakes, Barbary stag, endemic flora',
    bestFor: 'Primate watching, forest walks, birdwatching, autumn colors',
    description: 'Protecting the magnificent Atlas cedar forests of the Middle Atlas, Ifrane National Park is the best place in Morocco to observe Barbary macaques in their natural habitat. The park encompasses ancient forests, volcanic lakes, and a rich understory teeming with wildlife.',
    detailedDescription: 'Ifrane National Park is a realm of mist-draped cedar forests, tranquil mountain lakes, and troops of Barbary macaques swinging through ancient trees. The park\'s 500 square kilometers protect the largest remaining stands of Atlas cedar in Morocco, some specimens exceeding 800 years of age and towering 40 meters above the forest floor. The cedar forests around Azrou are the undisputed highlight: here, habituated troops of 20 to 50 macaques go about their daily lives largely unconcerned by quiet human observers. Males are notably involved in infant care, and spring brings a wave of tiny babies clinging to their mothers. Beyond the primates, the park harbors the reintroduced Barbary stag (also called Atlas deer), making it the only place in North Africa where wild deer roam. The volcanic lake of Dayet Aoua attracts crested coots, marbled teal, and dozens of other waterbird species, particularly in spring and early summer. The 800-year-old Gouraud Cedar, a single massive tree near the Azrou-Ifrane road, has become an iconic landmark. In autumn, the cedar and oak forests turn spectacular shades of gold and amber, rivaling any European forest for color.',
    keySpecies: ['Barbary macaque', 'Atlas cedar', 'Barbary stag', 'Booted eagle', 'Crested coot', 'Marbled teal', 'Levaillant\'s woodpecker'],
    bestTrails: ['Azrou Cedar Forest Walk (2-3 hours)', 'Dayet Aoua Lake Circuit (half day)', 'Ras el Ma Spring Trail', 'Tizi n\'Tretten Ridge', 'Michliffen Forest Loop'],
    permits: 'No entry fee. Local guides available at Azrou and Ifrane. Vehicles restricted on some forest roads.',
    bestSeason: 'March to June for macaque babies and wildflowers. October to November for autumn colors. Snow possible December to February.',
    image: '/images/hero-atlas.webp',
    coordinates: { lat: 33.4000, lng: -5.1500 },
  },
  {
    name: 'Souss-Massa National Park',
    region: 'Atlantic Coast, south of Agadir',
    established: 1991,
    area: '340 km\u00B2',
    elevation: '0m - 300m',
    highlights: 'Northern bald ibis colony, flamingos, Dorcas gazelles, 65 km wild coastline, argan forest',
    bestFor: 'Birdwatching, wildlife photography, coastal walks, conservation tourism',
    description: 'The last stronghold of the critically endangered northern bald ibis, Souss-Massa National Park stretches along 65 km of wild Atlantic coastline south of Agadir. The park encompasses estuaries, sand dunes, argan woodland, and coastal cliffs that shelter over 250 bird species.',
    detailedDescription: 'Souss-Massa is Morocco\'s most important park for wildlife conservation and arguably its finest for birdwatching. The 340-square-kilometer reserve protects a diverse mosaic of coastal habitats: windswept Atlantic cliffs where northern bald ibises nest, brackish estuaries where flamingos wade in pink-tinged shallows, and inland argan forests where Dorcas gazelles browse beneath gnarled trees. The northern bald ibis story is one of conservation\'s greatest victories. In the 1990s, fewer than 100 individuals survived worldwide, virtually all of them here. Through decades of nest-site protection, community engagement with local farmers, and satellite tracking, the population has recovered to approximately 700 wild birds. Watching these glossy-black birds with their distinctive bare red faces launch from cliff nests at dawn is an unforgettable experience. The Massa river estuary is a migration hotspot, drawing hundreds of species of waders, raptors, and waterfowl. Guided walks reveal tracks of golden jackals, footprints of Saharan hares, and the unmistakable slides of Egyptian cobras. The park also protects significant argan woodland, where goats famously climb the trees to eat fruit.',
    keySpecies: ['Northern bald ibis', 'Dorcas gazelle', 'Greater flamingo', 'Golden jackal', 'Moussier\'s redstart', 'Egyptian cobra', 'Barbary ground squirrel'],
    bestTrails: ['Oued Massa Estuary Walk (half day)', 'Northern Bald Ibis Cliff Trail (2-3 hours)', 'Coastal Dune Path to Sidi Rbat (full day)', 'Argan Forest Circuit (3 hours)', 'Tifnit Beach to Massa (full day)'],
    permits: 'Small entry fee at main gates. Guide strongly recommended for ibis viewing sites. 4WD useful for remote sections.',
    bestSeason: 'Year-round. October to March for peak waterbird numbers. Northern bald ibis visible year-round, best at dawn.',
    image: '/images/hero-coastal.webp',
    coordinates: { lat: 30.0500, lng: -9.6500 },
  },
  {
    name: 'Talassemtane National Park',
    region: 'Rif Mountains, near Chefchaouen',
    established: 2004,
    area: '580 km\u00B2',
    elevation: '500m - 2,159m',
    highlights: 'Endemic Moroccan fir, Akchour waterfalls, dramatic gorges, near Chefchaouen, rare raptors',
    bestFor: 'Endemic botany, trekking, waterfall visits, birdwatching',
    description: 'Home to the last stands of Moroccan fir, a species found nowhere else on Earth, Talassemtane protects some of the most dramatic mountain scenery in the Rif range. Deep gorges, cascading waterfalls, and dense forests create a world apart from the Mediterranean coast below.',
    detailedDescription: 'Talassemtane National Park is a botanical treasure trove set amid the wild, rugged landscapes of the Rif Mountains. Its 580 square kilometers shelter the last surviving populations of the Moroccan fir (Abies maroccana), a relic species that has clung to these misty mountain ridges since the last ice age. The fir forests grow at elevations above 1,500 meters, often shrouded in cloud, creating an atmosphere more reminiscent of Scandinavia than North Africa. Below the fir belt, dense forests of Barbary oak, cork oak, and maritime pine clothe the steep slopes. The park is most accessible from Chefchaouen, Morocco\'s famous blue city, and the Akchour waterfalls have become a celebrated hiking destination. The Grand Cascade drops over 100 meters, while the smaller Cascade of the Gorge is framed by dramatic canyon walls. Raptors are a highlight: Bonelli\'s eagle, peregrine falcon, and short-toed eagle all breed within the park. The rare Barbary leopard was historically reported here, though no confirmed sightings have occurred in decades. The park connects to the proposed Bouhachem National Park, creating a vital wildlife corridor through the Rif. Cannabis cultivation in surrounding areas poses ongoing challenges for conservation management.',
    keySpecies: ['Moroccan fir (endemic)', 'Bonelli\'s eagle', 'Peregrine falcon', 'Barbary macaque', 'Otter', 'Fire salamander', 'Barbary oak'],
    bestTrails: ['Akchour Waterfalls Trail (half day)', 'God\'s Bridge Natural Arch (3 hours)', 'Moroccan Fir Ridge Walk (full day)', 'Jebel Lakraa Summit (2 days)', 'Chefchaouen to Akchour (full day)'],
    permits: 'No formal entry fee. Small parking fee at Akchour trailhead. Licensed guide recommended for remote trails.',
    bestSeason: 'March to June for wildflowers. September to November for clear weather. Waterfalls best after winter rains (February to April).',
    image: '/images/hero-coastal.webp',
    coordinates: { lat: 35.1400, lng: -5.1600 },
  },
  {
    name: 'Al Hoceima National Park',
    region: 'Mediterranean Coast',
    established: 2004,
    area: '480 km\u00B2',
    elevation: '0m - 600m',
    highlights: 'Mediterranean marine park, osprey colony, dolphins, pristine coves, underwater ecosystems',
    bestFor: 'Marine wildlife, diving, coastal scenery, raptor watching',
    description: 'Morocco\'s premier Mediterranean marine and terrestrial park combines dramatic coastal cliffs with crystal-clear waters, hosting the largest osprey colony on the Mediterranean and rich underwater ecosystems featuring dolphins, sea turtles, and thriving coral communities.',
    detailedDescription: 'Al Hoceima National Park is where the Rif Mountains plunge dramatically into the Mediterranean Sea, creating a coastline of staggering beauty. The park encompasses both terrestrial and marine zones, protecting 480 square kilometers of cliff-lined shores, hidden coves accessible only by boat, and underwater ecosystems of exceptional clarity. The jewel of the park is its osprey colony, the largest on the Mediterranean, with over 30 breeding pairs nesting on sea stacks and cliff ledges. Watching these magnificent fish-hunting raptors dive into the turquoise waters below is one of Morocco\'s great wildlife spectacles. Bottlenose dolphins are resident in the park waters, and loggerhead sea turtles nest on remote beaches. The underwater world is equally impressive: Posidonia seagrass meadows shelter seahorses, octopus, and grouper, while rocky reefs are encrusted with corals and sponges. The park\'s terrestrial side features maquis-covered slopes, with Audouin\'s gull colonies and Eleonora\'s falcon sightings during breeding season. The town of Al Hoceima serves as a base, though the most pristine sections are reached by boat. Sustainable fishing practices within the park have led to a remarkable recovery of marine life, serving as a model for Mediterranean conservation.',
    keySpecies: ['Osprey', 'Bottlenose dolphin', 'Loggerhead sea turtle', 'Audouin\'s gull', 'Grouper', 'Moray eel', 'Posidonia seagrass'],
    bestTrails: ['Cala Iris Coastal Path (half day)', 'Bades Peninsula Circuit (3 hours)', 'Torres de Alcala Trail (full day)', 'Jebel Tidiquin Approach (2 days)', 'Marine Snorkeling Route (boat required)'],
    permits: 'No entry fee for terrestrial areas. Boat permits required for marine zones. Diving requires authorization from park authority.',
    bestSeason: 'May to October for marine activities and diving. April to June for osprey nesting. Year-round for coastal walks.',
    image: '/images/hero-coastal.webp',
    coordinates: { lat: 35.2500, lng: -3.9300 },
  },
  {
    name: 'Khenifiss National Park',
    region: 'Atlantic Coast, south of Tan-Tan',
    established: 2006,
    area: '1,850 km\u00B2',
    elevation: '0m - 150m',
    highlights: 'Saharan lagoon, flamingos, monk seal habitat, dunes, desert-meets-ocean, Ramsar wetland',
    bestFor: 'Remote birding, desert ecology, solitude, photography',
    description: 'Where the Sahara meets the Atlantic, Khenifiss National Park protects one of Morocco\'s most remote and extraordinary landscapes. The park\'s centerpiece is a vast coastal lagoon, a Ramsar wetland of international importance that attracts thousands of migratory flamingos and wading birds.',
    detailedDescription: 'Khenifiss National Park is a place of haunting, otherworldly beauty where golden Saharan dunes slide into the cold Atlantic and a vast turquoise lagoon shimmers beneath an enormous sky. At 1,850 square kilometers, it is one of Morocco\'s largest parks, yet among its least visited. The Khenifiss lagoon is a Ramsar wetland of international significance, one of the most important stopover sites on the East Atlantic Flyway. Thousands of greater flamingos, spoonbills, and wading birds gather here, particularly during winter migration. The contrast of pink flamingos against golden dunes and blue ocean creates photography opportunities found nowhere else in Morocco. Inland, the park protects classic Saharan ecosystems: sand cat, fennec fox, and desert hedgehog inhabit the dunes and rocky hamada. The coast supports a small population of Mediterranean monk seals, one of the world\'s rarest marine mammals. Access requires a sturdy 4WD vehicle and careful planning, as facilities are nonexistent. The nearest town, Akhfenir, offers basic supplies. This remoteness is precisely the park\'s appeal: visitors who make the effort are rewarded with genuine wilderness solitude. The transition from Saharan desert to Atlantic coast, compressed into just a few kilometers, creates one of the planet\'s most dramatic ecological gradients.',
    keySpecies: ['Greater flamingo', 'Sand cat', 'Fennec fox', 'Mediterranean monk seal', 'Eurasian spoonbill', 'Desert hedgehog', 'Cream-colored courser'],
    bestTrails: ['Lagoon Shoreline Walk (half day)', 'Dune Ridge to Ocean (3 hours)', 'Flamingo Observation Points (varies)', 'Coastal Cliff Path South (full day)', 'Desert Interior Drive Circuit (4WD, full day)'],
    permits: 'Registration required at park entrance. 4WD essential. No facilities within the park. Self-sufficient equipment necessary.',
    bestSeason: 'October to March for peak bird numbers. Year-round for desert landscapes. Avoid June to August due to extreme heat.',
    image: '/images/hero-sahara-sunrise.webp',
    coordinates: { lat: 28.0500, lng: -12.2500 },
  },
  {
    name: 'Haut Atlas Oriental National Park',
    region: 'Eastern High Atlas',
    established: 2004,
    area: '490 km\u00B2',
    elevation: '1,200m - 3,077m',
    highlights: 'Barbary sheep, junipers, raptors, M\'Goun massif, remote wilderness, traditional villages',
    bestFor: 'Remote trekking, wildlife photography, cultural immersion, solitude',
    description: 'A wild and seldom-visited park protecting the eastern High Atlas ecosystems. High-altitude junipers, significant raptor populations, and Barbary sheep inhabit rugged terrain that offers genuine wilderness experiences far removed from tourist trails.',
    detailedDescription: 'Haut Atlas Oriental National Park is arguably Morocco\'s most authentic wilderness experience. Spanning 490 square kilometers of the eastern High Atlas, it protects a landscape of soaring ridgelines, deep-cut gorges, and ancient juniper forests that most visitors to Morocco never see. The M\'Goun massif, at 3,077 meters, anchors the western boundary. This is sheep and raptor country: Barbary sheep traverse impossible cliff faces at dawn, while overhead, lanner falcons, Egyptian vultures, and golden eagles ride the thermals. The park\'s juniper forests are among the oldest in North Africa, with gnarled specimens estimated at over 1,000 years old. In spring, the meadows below the ridgelines explode with wildflowers, including numerous species found nowhere else. Traditional Berber villages dot the valleys, where centuries-old agricultural practices continue largely unchanged. The Ait Bouguemez Valley, sometimes called the Happy Valley, provides the most accessible entry point, with a handful of guesthouses and local guides offering multi-day treks deep into the park. Unlike Toubkal, you may walk for an entire day without seeing another trekker. The park faces challenges from overgrazing and drought, but community-based conservation programs are showing promising results.',
    keySpecies: ['Barbary sheep', 'Lanner falcon', 'Egyptian vulture', 'Golden eagle', 'Juniper forests', 'Atlas mountain viper', 'Tristram\'s warbler'],
    bestTrails: ['M\'Goun Summit Trek (3-4 days)', 'Ait Bouguemez to Zawyat Ahansal (4 days)', 'Cathedral Rocks Circuit (full day)', 'Agouti Valley Walk (half day)', 'Tessaout Gorge Trek (2-3 days)'],
    permits: 'No entry fee. Licensed mountain guide strongly recommended for multi-day treks. Mule hire available in villages.',
    bestSeason: 'May to October for trekking. June for wildflowers. September to November for clearest skies and raptor migration.',
    image: '/images/hero-atlas.webp',
    coordinates: { lat: 31.5000, lng: -6.4500 },
  },
  {
    name: 'Tazekka National Park',
    region: 'Middle Atlas, near Taza',
    established: 1950,
    area: '680 km\u00B2',
    elevation: '500m - 1,980m',
    highlights: 'Waterfalls, Friouato Cave, oak forests, scenic drives, Dayat Chiker seasonal lake',
    bestFor: 'Caving, waterfall visits, forest walks, scenic driving',
    description: 'One of Morocco\'s oldest parks, Tazekka protects dense oak and cedar forests on the flanks of Jebel Tazekka. The park is famous for the Friouato Cave system, spectacular waterfalls, and a scenic road that loops through some of the Middle Atlas\'s most beautiful forest landscapes.',
    detailedDescription: 'Tazekka National Park is a hidden gem of the Middle Atlas, just 15 kilometers from the historic city of Taza. Established in 1950, it is Morocco\'s second-oldest national park, recently expanded to 680 square kilometers to protect a wider range of habitats. Jebel Tazekka rises to 1,980 meters, clothed in dense forests of holm oak, cork oak, and Atlas cedar. The park\'s star attraction is the Gouffre du Friouato, one of the deepest cave systems in North Africa, plunging to a depth of 271 meters. The entrance chamber alone is immense, and guided descents reveal chambers decorated with stalactites and stalagmites formed over millions of years. Above ground, the Cascades de Ras el Oued tumble through mossy gorges, and the seasonal lake of Dayat Chiker fills after autumn rains, attracting waterbirds to an otherwise forested landscape. A paved scenic road loops through the park, making it accessible to those who prefer driving to hiking. The forests support wild boar, Barbary macaques in the cedar zones, and an impressive variety of raptors including short-toed eagle and booted eagle. The park\'s proximity to the Taza Gap, a natural corridor between the Rif and Middle Atlas, gives it biogeographic significance as a meeting point for species from both mountain ranges.',
    keySpecies: ['Wild boar', 'Barbary macaque', 'Short-toed eagle', 'Booted eagle', 'Holm oak', 'Cork oak', 'Cave-dwelling bats'],
    bestTrails: ['Friouato Cave Descent (half day, guided)', 'Jebel Tazekka Summit Trail (full day)', 'Cascades de Ras el Oued Walk (2 hours)', 'Scenic Loop Road (driving, 3 hours)', 'Dayat Chiker Lake Circuit (2 hours)'],
    permits: 'Small fee for Friouato Cave entry. Guide required for cave descent. No fee for park trails.',
    bestSeason: 'March to June for waterfalls and wildflowers. October to November for autumn colors. Cave accessible year-round.',
    image: '/images/hero-todra-gorge.webp',
    coordinates: { lat: 34.0800, lng: -4.0100 },
  },
  {
    name: 'Iriqui National Park',
    region: 'Saharan edge, between Ouarzazate and Zagora',
    established: 1994,
    area: '1,230 km\u00B2',
    elevation: '400m - 900m',
    highlights: 'Seasonal desert lake, Saharan fauna, gazelles, migratory birds when water present',
    bestFor: 'Desert ecology, Saharan wildlife, remote exploration, photography',
    description: 'Centered on a seasonal lake that fills after rains and transforms the surrounding desert, Iriqui National Park protects a vast swathe of Saharan-edge habitat. When the lake appears, flamingos and waterfowl arrive in an otherwise arid landscape, creating one of Morocco\'s most surreal natural spectacles.',
    detailedDescription: 'Iriqui National Park is Morocco\'s most enigmatic protected area. Sprawling across 1,230 square kilometers of the pre-Saharan zone between Ouarzazate and Zagora, it encompasses a landscape that shifts dramatically with the rains. At the park\'s heart lies Iriqui Lake, which in dry years is nothing more than a vast, cracked clay pan shimmering with heat mirages. But when winter rains are generous, the lake fills to create a shallow inland sea that attracts thousands of flamingos, marbled ducks, and migratory waders to the middle of the desert. This transformation from barren wasteland to teeming wetland is one of Morocco\'s most remarkable natural phenomena. In the surrounding stony desert and scrubland, adapted Saharan fauna persists: Dorcas gazelles, rarely seen but present, move in small family groups. Desert monitors bask on rocky outcrops. At night, the desert comes alive with jerboas, sand vipers, and the occasional caracal. The park is crossed by the ancient caravan route between Ouarzazate and Zagora, and nomadic herders still move through with their flocks. Accessibility is challenging, with only rough pistes penetrating the interior. This remoteness preserves the park\'s wild character but means visitors should come prepared with sufficient water, fuel, and navigation tools. The night skies are among the darkest in Morocco, making Iriqui an emerging destination for astrotourism.',
    keySpecies: ['Dorcas gazelle', 'Greater flamingo (seasonal)', 'Desert monitor', 'Cream-colored courser', 'Egyptian nightjar', 'Saharan horned viper', 'Jerboa'],
    bestTrails: ['Lake Bed Walk (varies with water levels)', 'Eastern Hammada Drive (4WD, full day)', 'Nomad Route Ouarzazate-Zagora (2 days)', 'Desert Dawn Wildlife Circuit (early morning)', 'Clay Pan Photography Walk (2-3 hours)'],
    permits: 'No formal entry system. 4WD essential. Self-sufficient travel required. GPS navigation recommended.',
    bestSeason: 'November to March for cooler temperatures. Lake most likely to fill December to February. Avoid June to August.',
    image: '/images/hero-sahara-sunrise.webp',
    coordinates: { lat: 30.2500, lng: -6.3500 },
  },
  {
    name: 'Toubkal Extensions & Buffer Zones',
    region: 'Greater High Atlas',
    established: 2008,
    area: '800+ km\u00B2 (total protected area)',
    elevation: '1,000m - 4,167m',
    highlights: 'Expanded conservation corridors, Ourika Valley, Oukaimeden, connecting habitats',
    bestFor: 'Extended treks, wildlife corridors, diverse altitude zones, sustainable tourism',
    description: 'The expanded Toubkal protected area encompasses buffer zones and biological corridors that connect the original national park to surrounding habitats. These extensions protect migration routes for Barbary sheep, safeguard watersheds, and support community-based conservation across the greater High Atlas.',
    detailedDescription: 'Recognizing that the original 380-square-kilometer Toubkal National Park was insufficient to protect the full range of species that depend on the High Atlas ecosystem, Morocco has progressively expanded the protected area through buffer zones and biological corridors. These extensions, totaling over 800 square kilometers of protected landscape, connect the core park to the Ourika Valley, the Oukaimeden plateau, and the upper Nfis Valley. The Oukaimeden area, at 2,600 meters, is Morocco\'s principal ski resort in winter but transforms into a botanical paradise in summer, with rock carvings dating back thousands of years. The Ourika Valley provides a critical altitudinal gradient, from 1,000 meters at its entrance to over 3,000 meters at its head, supporting an extraordinary range of habitats within a short distance. Community-managed protected areas within these extensions involve local villages in conservation decisions and benefit-sharing from tourism. Guesthouses, mule trails, and local guide cooperatives create economic incentives for habitat protection. The corridor approach has been particularly important for Barbary sheep, whose populations need connected territories to maintain genetic diversity. These extensions represent a modern, integrated approach to conservation that balances ecological needs with the livelihoods of the Berber communities who have stewarded these mountains for millennia.',
    keySpecies: ['Barbary sheep', 'North African ibex', 'Golden eagle', 'Barbary partridge', 'Atlas mountain viper', 'Endemic alpine flora', 'Dipper'],
    bestTrails: ['Ourika Valley to Setti Fatma Waterfalls (half day)', 'Oukaimeden Plateau Circuit (full day)', 'Nfis Valley Trek (3-4 days)', 'Tizi n\'Test Pass Drive (scenic drive)', 'Rock Art Trail at Oukaimeden (2 hours)'],
    permits: 'No specific permits for buffer zones. Local guide cooperatives offer services in most valleys. Trekking permits may be required for certain corridors.',
    bestSeason: 'Year-round, varying by altitude. Oukaimeden: June to September for walking, December to March for skiing. Ourika: March to November.',
    image: '/images/hero-atlas.webp',
    coordinates: { lat: 31.2000, lng: -7.8600 },
  },
];

/* ================================================================
   NATURE RESERVES & SIBE SITES DATA
   ================================================================ */

interface NatureReserve {
  name: string;
  type: string;
  region: string;
  significance: string;
}

const natureReserves: NatureReserve[] = [
  { name: 'Merja Zerga', type: 'Ramsar Wetland / SIBE', region: 'Atlantic Coast, Moulay Bousselham', significance: 'Morocco\'s most important wetland for migratory birds. Over 400 species recorded, including globally significant populations of flamingos, spoonbills, and marbled teal.' },
  { name: 'Aguelmam Sidi Ali', type: 'SIBE / Mountain Lake', region: 'Middle Atlas', significance: 'Highest natural lake in Morocco at 2,080 meters. Important site for breeding waterbirds and endemic amphibians. Surrounded by old-growth cedar and juniper forests.' },
  { name: 'Oued Loukkos Marshes', type: 'Ramsar Wetland', region: 'Northern Morocco, near Larache', significance: 'Critical breeding site for marbled teal and crested coot. One of the last remaining large freshwater marshes in North Africa.' },
  { name: 'Tamri Cliffs', type: 'SIBE / Coastal', region: 'Atlantic Coast, between Agadir and Essaouira', significance: 'Secondary nesting site for northern bald ibis. Dramatic coastal cliffs with raptor nesting sites and endemic coastal flora.' },
  { name: 'M\'Sabih Talaa Reserve', type: 'Wildlife Reserve', region: 'Marrakech-Safi', significance: 'Captive breeding and release center for Dorcas gazelle, addax, and scimitar-horned oryx. Part of Morocco\'s ungulate recovery programs.' },
  { name: 'Sidi Boughaba Lake', type: 'Ramsar Wetland / SIBE', region: 'Near Kenitra', significance: 'Freshwater lake surrounded by forest. Important wintering site for European and African migratory species. Accessible nature trail and visitor center.' },
  { name: 'Cap des Trois Fourches', type: 'SIBE / Mediterranean', region: 'Near Nador', significance: 'Dramatic Mediterranean promontory with important seabird colonies, endemic plant species, and traditional fishing communities.' },
  { name: 'Oued Massa Estuary', type: 'SIBE / Coastal Wetland', region: 'Within Souss-Massa NP', significance: 'One of the richest estuarine ecosystems in Morocco. Key feeding ground for northern bald ibis and hundreds of migratory wader species.' },
];

/* ================================================================
   ENDEMIC SPECIES DATA
   ================================================================ */

interface EndemicSpecies {
  name: string;
  scientific: string;
  type: string;
  habitat: string;
  description: string;
}

const endemicSpecies: EndemicSpecies[] = [
  { name: 'Moroccan Fir', scientific: 'Abies maroccana', type: 'Tree', habitat: 'Talassemtane NP, Rif Mountains above 1,500m', description: 'The only fir species in Africa, surviving as a relic population of approximately 5,000 hectares in the high Rif. Threatened by climate change and deforestation.' },
  { name: 'Atlas Cedar', scientific: 'Cedrus atlantica', type: 'Tree', habitat: 'Middle Atlas, Rif, High Atlas (1,300-2,600m)', description: 'Morocco\'s most iconic tree, forming ancient forests that support entire ecosystems. Some individuals exceed 900 years. Climate change causing significant dieback at lower elevations.' },
  { name: 'Barbary Macaque', scientific: 'Macaca sylvanus', type: 'Mammal', habitat: 'Cedar and oak forests of the Middle Atlas and Rif', description: 'The only macaque outside Asia and the only non-human primate in North Africa. Approximately 8,000 individuals remain in Morocco, down from millions historically.' },
  { name: 'Atlas Day Gecko', scientific: 'Quedenfeldtia trachyblepharus', type: 'Reptile', habitat: 'High Atlas above 2,500m, rocky terrain', description: 'A tiny, remarkable gecko adapted to extreme altitude conditions. Active during the day unlike most geckos, and can tolerate freezing temperatures at high elevation.' },
  { name: 'Moroccan Spiny-Tailed Lizard', scientific: 'Uromastyx nigriventris', type: 'Reptile', habitat: 'Anti-Atlas and pre-Saharan arid zones', description: 'A large herbivorous lizard up to 40 cm long with an armored tail used for defense. Basking specialist adapted to extreme heat.' },
  { name: 'Atlas Mountain Viper', scientific: 'Vipera monticola', type: 'Reptile', habitat: 'High Atlas and Middle Atlas mountains, rocky habitats', description: 'Morocco\'s only endemic viper, a small and rarely seen species of high mountain rocky areas. Venomous but extremely shy and non-aggressive.' },
  { name: 'Argan Tree', scientific: 'Argania spinosa', type: 'Tree', habitat: 'Souss Valley, Anti-Atlas, endemic to southwestern Morocco', description: 'UNESCO Biosphere Reserve tree endemic to Morocco. Produces the prized argan oil. Roots stabilize soil against desertification. Traditionally climbed by goats.' },
  { name: 'Moroccan Magpie', scientific: 'Pica mauritanica', type: 'Bird', habitat: 'Widespread in forests and gardens across Morocco', description: 'Recently recognized as a distinct species from the European magpie. Found only in North Africa, distinguished by a blue eye patch and different vocalizations.' },
];

/* ================================================================
   FLORA GUIDE DATA
   ================================================================ */

interface FloraEntry {
  name: string;
  scientific: string;
  habitat: string;
  significance: string;
  bestLocations: string;
}

const floraGuide: FloraEntry[] = [
  { name: 'Argan Tree', scientific: 'Argania spinosa', habitat: 'Semi-arid plains and hills of the Souss Valley and Anti-Atlas', significance: 'UNESCO-designated Biosphere Reserve species. Produces argan oil, prized in cosmetics and cuisine. Roots prevent soil erosion and desertification. Cooperatives employ thousands of women in oil production.', bestLocations: 'Souss Valley between Agadir and Essaouira, Taroudant foothills, Anti-Atlas slopes' },
  { name: 'Atlas Cedar', scientific: 'Cedrus atlantica', habitat: 'Mountain forests between 1,300 and 2,600 meters in the Middle Atlas, Rif, and High Atlas', significance: 'Morocco\'s most majestic tree. Ancient specimens reach 40 meters tall and 800+ years old. The cedar forests are critical habitat for Barbary macaques, raptors, and hundreds of other species. Severely threatened by drought and climate change.', bestLocations: 'Azrou and Ifrane National Park, Tazekka, Rif Mountains, High Atlas passes' },
  { name: 'Thuya Tree', scientific: 'Tetraclinis articulata', habitat: 'Dry hillsides and coastal regions of northern and central Morocco', significance: 'Prized for its aromatic, beautifully figured wood used in traditional Moroccan craftsmanship, particularly in Essaouira. The root burls are carved into boxes, chess sets, and decorative objects. Conservation concerns due to overharvesting.', bestLocations: 'Essaouira region, Khemisset forests, northern Morocco hillsides' },
  { name: 'Cork Oak', scientific: 'Quercus suber', habitat: 'Humid regions of the Mamora Forest, Rif, and Middle Atlas foothills', significance: 'The Mamora Forest near Rabat is one of the world\'s largest cork oak forests. Cork is harvested sustainably every 9 years without killing the tree. The forest supports wild boar, raptors, and a rich understory.', bestLocations: 'Mamora Forest near Rabat, Rif foothills, Ben Slimane Forest' },
  { name: 'Atlas Pistachio', scientific: 'Pistacia atlantica', habitat: 'Semi-arid zones of the High Atlas and Anti-Atlas, gorges and dry valleys', significance: 'A drought-adapted tree that provides vital shade and resources in arid landscapes. Its small fruits feed wildlife and can be pressed for oil. Ancient specimens with massive trunks dot the landscape around Dades and Todra Gorges.', bestLocations: 'Dades Gorge, Todra Gorge, Anti-Atlas valleys, road to Ouarzazate' },
];

/* ================================================================
   CONSERVATION PROGRAMS DATA
   ================================================================ */

interface ConservationProgram {
  name: string;
  focus: string;
  description: string;
  howToHelp: string;
}

const conservationPrograms: ConservationProgram[] = [
  { name: 'Northern Bald Ibis Recovery', focus: 'Species conservation', description: 'A multi-decade effort to save the critically endangered northern bald ibis from extinction. Nest-site protection, farmer engagement, satellite tracking, and captive breeding have increased the wild population from fewer than 100 to approximately 700 birds.', howToHelp: 'Visit Souss-Massa with licensed guides (fees support conservation), volunteer with GREPOM birdwatching surveys, sponsor nest monitoring equipment.' },
  { name: 'Atlas Cedar Reforestation', focus: 'Habitat restoration', description: 'Over 10 million cedar seedlings have been planted since 2005 across the Middle Atlas, replacing forests lost to drought, overgrazing, and illegal logging. New drought-resistant varieties are being developed.', howToHelp: 'Join community planting events organized through Ifrane National Park, support local cooperatives that manage sustainable forest resources.' },
  { name: 'Barbary Macaque Protection', focus: 'Anti-poaching', description: 'Combating the illegal pet trade that removes infant macaques from wild troops. Awareness campaigns, ranger patrols, and rehabilitation centers work together to protect remaining populations.', howToHelp: 'Never photograph macaques being displayed as props in Jemaa el-Fna or other tourist areas. Report illegal trade. Support Barbary Macaque Awareness & Conservation.' },
  { name: 'Saharan Ungulate Breeding', focus: 'Reintroduction programs', description: 'Captive breeding facilities at M\'Sabih Talaa and R\'Mila produce Dorcas gazelles, addax, and scimitar-horned oryx for release into wild habitats. Over 500 gazelles have been returned to the wild.', howToHelp: 'Support ecotourism in Souss-Massa where gazelle revenues fund breeding programs. Volunteer with monitoring surveys during release programs.' },
  { name: 'Marine Protected Areas', focus: 'Ocean conservation', description: 'Al Hoceima National Park\'s marine zone has demonstrated how fishing restrictions can restore Mediterranean ecosystems. Expanding the model to other coastal sites along both Atlantic and Mediterranean coastlines.', howToHelp: 'Choose sustainable seafood when dining in coastal Morocco. Support diving operators who follow conservation protocols. Report illegal fishing in protected zones.' },
  { name: 'Community Conservation Cooperatives', focus: 'Sustainable livelihoods', description: 'Programs that link conservation to economic benefits for local communities. Guesthouses, guide cooperatives, and handicraft projects create incentives for habitat protection in and around national parks.', howToHelp: 'Stay in community-run guesthouses, hire local guides through cooperatives, purchase locally made handicrafts, and choose tour operators that employ local staff.' },
];

/* ================================================================
   PHOTOGRAPHY OPPORTUNITIES DATA
   ================================================================ */

interface PhotoOpportunity {
  location: string;
  subject: string;
  bestTime: string;
  tips: string;
}

const photoOpportunities: PhotoOpportunity[] = [
  { location: 'Toubkal Summit at Dawn', subject: 'Alpine panorama, sunrise over the Atlas', bestTime: 'June to October, 5:00-6:00 AM', tips: 'Overnight at the Toubkal Refuge. Start the summit push at 3:00 AM to reach the top for sunrise. The 360-degree view extends to the Sahara on clear mornings.' },
  { location: 'Azrou Cedar Forest', subject: 'Barbary macaques, ancient cedars', bestTime: 'Year-round, early morning', tips: 'Use a 70-200mm lens and maintain 3-5 meters distance. Spring brings babies clinging to mothers. The mist filtering through 800-year-old cedars creates ethereal light.' },
  { location: 'Souss-Massa Ibis Cliffs', subject: 'Northern bald ibis colonies', bestTime: 'Dawn, year-round', tips: 'Position on the cliff tops above nesting sites. A 400mm lens is ideal. The birds launch at dawn to forage, creating dramatic silhouettes against the ocean.' },
  { location: 'Khenifiss Lagoon', subject: 'Flamingos against Saharan dunes', bestTime: 'October to March, golden hour', tips: 'The juxtaposition of pink flamingos, turquoise water, and golden dunes is unique to this location. Wide-angle captures the full scene; telephoto for individual birds.' },
  { location: 'Akchour Waterfalls', subject: 'Cascading water, gorge landscapes', bestTime: 'February to April after winter rains', tips: 'Arrive early to avoid crowds. A tripod and neutral density filter create silky water effects. The surrounding green forest provides excellent framing.' },
  { location: 'Al Hoceima Osprey Dives', subject: 'Osprey hunting, Mediterranean coast', bestTime: 'April to June, midday', tips: 'Position on cliff edges overlooking osprey territories. Use a fast shutter speed (1/2000s minimum) and continuous autofocus to capture the diving sequence.' },
];

/* ================================================================
   CAMPING DATA
   ================================================================ */

interface CampingSite {
  name: string;
  park: string;
  type: string;
  description: string;
  facilities: string;
}

const campingSites: CampingSite[] = [
  { name: 'Toubkal Mountain Refuges', park: 'Toubkal NP', type: 'Mountain refuge', description: 'The French Alpine Club (CAF) maintains refuges at key points on the Toubkal circuit. Neltner Refuge at 3,207m is the base for summit attempts. Basic bunks, cooking facilities, and extraordinary views.', facilities: 'Bunks, blankets, cooking area, water source, guardian' },
  { name: 'Lac d\'Ifni Wild Camp', park: 'Toubkal NP', type: 'Wild camping', description: 'Wild camping is permitted at this stunning high-altitude lake at 2,312 meters. The reflection of Toubkal\'s peaks in the still waters at dawn is unforgettable. Carry all supplies and leave no trace.', facilities: 'None. Bring all equipment, water purification, and waste bags.' },
  { name: 'Azrou Forest Campsites', park: 'Ifrane NP', type: 'Designated campsite', description: 'Several designated camping areas within the cedar forests near Azrou. Wake to the sound of macaques moving through the canopy above your tent. Accessible by car.', facilities: 'Flat ground, some fire pits, nearby water. No electricity.' },
  { name: 'Souss-Massa Coastal Camp', park: 'Souss-Massa NP', type: 'Designated area', description: 'Camping permitted at designated sites along the coastal trail. Fall asleep to the sound of Atlantic surf and wake for dawn ibis-watching. Basic but magical.', facilities: 'Flat ground only. Bring water, food, and shelter.' },
  { name: 'Ait Bouguemez Valley Gites', park: 'Haut Atlas Oriental NP', type: 'Community guesthouse', description: 'While not camping per se, village guesthouses in the Happy Valley offer rooftop sleeping under the stars. Home-cooked Berber food and genuine hospitality.', facilities: 'Bedding, meals, hot water (sometimes), traditional toilets' },
  { name: 'Tazekka Forest Camp', park: 'Tazekka NP', type: 'Wild camping', description: 'Wild camping under cork and holm oaks in Tazekka\'s ancient forests. Multiple clearings along the scenic loop road make ideal pitches. Bring all supplies.', facilities: 'None. Bring all equipment. Water from seasonal streams (purify).' },
];

/* ================================================================
   GUIDED TOURS DATA
   ================================================================ */

interface NatureTour {
  name: string;
  duration: string;
  price: string;
  description: string;
  difficulty: string;
}

const natureTours: NatureTour[] = [
  { name: 'Toubkal Summit Expedition', duration: '2-3 days from Marrakech', price: '$120-200 per person', description: 'Guided ascent of North Africa\'s highest peak. Overnight at mountain refuge, summit at dawn for spectacular views. Licensed mountain guides, mules for luggage, meals included.', difficulty: 'Challenging' },
  { name: 'Ifrane Macaque & Cedar Experience', duration: 'Full day from Fes', price: '$60-90 per person', description: 'Visit the cedar forests of Azrou to observe Barbary macaques with a naturalist guide. Walk through ancient groves, visit the 800-year-old Gouraud Cedar, and explore Dayet Aoua lake for waterbirds.', difficulty: 'Easy' },
  { name: 'Souss-Massa Ibis & Wildlife Tour', duration: '2 days from Agadir', price: '$150-250 per person', description: 'Expert-led birdwatching tour focused on the critically endangered northern bald ibis. Visit nesting cliffs, Massa estuary, and argan forests. Spotting scopes provided.', difficulty: 'Moderate' },
  { name: 'Rif Mountains Fir Forest Trek', duration: '4-5 days from Chefchaouen', price: '$300-500 per person', description: 'Multi-day trek through Talassemtane National Park to see the endemic Moroccan fir, Akchour waterfalls, and dramatic Rif scenery. Botanist and ornithologist guides available.', difficulty: 'Challenging' },
  { name: 'Al Hoceima Marine Discovery', duration: '2 days from Al Hoceima', price: '$120-180 per person', description: 'Boat-based exploration of the Mediterranean marine park. Osprey viewing, dolphin watching, snorkeling in pristine coves, and coastal cliff walks. Marine biologist guide.', difficulty: 'Easy-Moderate' },
  { name: 'M\'Goun Wilderness Trek', duration: '5-7 days from Marrakech', price: '$350-600 per person', description: 'Deep trek into the eastern High Atlas through the Happy Valley and beyond. Summit M\'Goun at 3,077 meters. Traditional Berber village stays. True wilderness experience.', difficulty: 'Challenging' },
  { name: 'Khenifiss Desert-Ocean Safari', duration: '3 days from Tan-Tan', price: '$200-350 per person', description: 'Expedition to the remote Saharan lagoon park. 4WD journey through desert landscapes, flamingo observation, coastal dune walks, and camping under pristine dark skies.', difficulty: 'Moderate' },
  { name: 'Tazekka Cave & Forest Adventure', duration: 'Full day from Fes or Taza', price: '$50-80 per person', description: 'Explore the Friouato Cave system with experienced guides, then walk through oak and cedar forests. Visit waterfalls and the scenic loop road. Accessible family-friendly option.', difficulty: 'Easy-Moderate' },
];

/* ================================================================
   QUICK STATS
   ================================================================ */

const quickStats = [
  { icon: <TreePine className="w-5 h-5" />, label: 'National Parks', value: '11', detail: 'Protected areas' },
  { icon: <Ruler className="w-5 h-5" />, label: 'Protected Land', value: '26,000+ km\u00B2', detail: 'Total coverage' },
  { icon: <Mountain className="w-5 h-5" />, label: 'Highest Point', value: '4,167m', detail: 'Jebel Toubkal' },
  { icon: <Leaf className="w-5 h-5" />, label: 'Plant Species', value: '4,500+', detail: '20% endemic' },
  { icon: <Bird className="w-5 h-5" />, label: 'Bird Species', value: '480+', detail: 'In protected areas' },
  { icon: <Calendar className="w-5 h-5" />, label: 'Est. First Park', value: '1942', detail: 'Toubkal NP' },
];

/* ================================================================
   SEASONAL GUIDE DATA
   ================================================================ */

const seasonalGuide = [
  { season: 'Spring', months: 'March - May', icon: <Flower2 className="w-4 h-4" />, parks: 'Toubkal (wildflowers), Ifrane (macaque babies), Talassemtane (waterfalls), Tazekka (cascades)', conditions: 'Ideal temperatures for hiking. Wildflower season in the Atlas. Waterfalls at peak flow. Green landscapes. Some high passes still snowy in March.' },
  { season: 'Summer', months: 'June - August', icon: <Sun className="w-4 h-4" />, parks: 'Toubkal (summit season), Al Hoceima (marine), Haut Atlas Oriental (high altitude)', conditions: 'Best for high-altitude trekking and summit attempts. Hot in lowlands and desert parks. Excellent for marine parks. Avoid Khenifiss and Iriqui due to extreme heat.' },
  { season: 'Autumn', months: 'September - November', icon: <Leaf className="w-4 h-4" />, parks: 'Ifrane (autumn colors), Souss-Massa (birds return), Khenifiss (migration), all parks excellent', conditions: 'Arguably the best overall season. Pleasant temperatures across all elevations. Autumn colors in cedar forests. Migratory birds arriving at coastal parks. Clear mountain skies.' },
  { season: 'Winter', months: 'December - February', icon: <Snowflake className="w-4 h-4" />, parks: 'Souss-Massa (peak birds), Khenifiss (flamingos), Iriqui (possible lake), Tazekka (cave)', conditions: 'High Atlas parks snow-covered above 2,000m. Excellent for coastal and desert-edge parks. Peak waterbird numbers at wetlands. Cool but sunny days ideal for lowland walks.' },
];

/* ================================================================
   PAGE COMPONENT (Server Component)
   ================================================================ */

export default function NationalParksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ──────────────────────────── BREADCRUMB ──────────────────────────── */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">National Parks &amp; Nature Reserves</li>
        </ol>
      </nav>

      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1A1814] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-national-parks.webp"
            alt="Panoramic view of Toubkal National Park in the High Atlas Mountains of Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <TreePine className="w-4 h-4 text-emerald-400" />
              Protected Wilderness
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              National Parks &amp; Nature Reserves
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From the snow-capped summit of Toubkal to the flamingo-filled lagoons of the Saharan coast,
              Morocco&apos;s 11 national parks protect some of the most diverse and dramatic landscapes
              in all of Africa. Discover trails, wildlife, permits, and the conservation stories that
              make each park extraordinary.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ──────────────────────────── QUICK STATS ──────────────────────────── */}
      <section className="container-morocco -mt-8 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="card-moroccan p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                {stat.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">{stat.label}</p>
              <p className="font-heading font-semibold text-sm text-text-primary leading-tight">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────────────────── OVERVIEW INTRODUCTION ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Protected Wilderness
            </h2>
          </div>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco established its first national park, Toubkal, in 1942 &mdash; decades before most
              African nations gained independence, let alone began conservation programs. Since then, the
              country has built a network of 11 national parks and dozens of nature reserves protecting
              over 26,000 square kilometers of wildly diverse terrain, from alpine peaks above 4,000
              meters to Saharan wetlands at sea level.
            </p>
            <p>
              What makes Moroccan national parks exceptional is their ecological range. Within a single
              day&apos;s drive, you can traverse ancient cedar forests where Barbary macaques swing through
              misty canopies, descend through juniper-studded gorges patrolled by golden eagles, cross
              high passes with views stretching to the Sahara, and arrive at coastal lagoons where
              flamingos wade in pink-tinged shallows. No other country in the Mediterranean basin
              offers this concentration of ecosystems in such close proximity.
            </p>
            <p>
              Morocco&apos;s parks also tell remarkable conservation stories. The recovery of the northern
              bald ibis from fewer than 100 birds to approximately 700 is one of the great species
              comebacks. The reintroduction of Dorcas gazelles, the replanting of millions of Atlas
              cedars, and the protection of the world&apos;s largest Mediterranean monk seal colony are
              all testaments to Morocco&apos;s growing commitment to its natural heritage.
            </p>
            <p>
              For visitors, the parks offer everything from challenging multi-day treks to gentle
              forest walks, from world-class birdwatching to marine snorkeling, from mountain refuge
              camping to luxury ecolodge stays. Unlike many national park systems, most Moroccan
              parks have minimal entry fees and bureaucracy, making access straightforward for
              independent travelers and guided groups alike.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { value: '11', label: 'National Parks', sub: 'Established since 1942' },
              { value: '40+', label: 'SIBE Reserves', sub: 'Additional protection' },
              { value: '26,000+', label: 'km\u00B2 Protected', sub: '3.6% of Morocco' },
              { value: '6', label: 'Ecosystems', sub: 'Desert to alpine' },
            ].map((stat) => (
              <div key={stat.label} className="card-moroccan p-4 text-center">
                <div className="text-2xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                <div className="text-sm font-semibold text-[var(--text-primary)]">{stat.label}</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── DETAILED PARK GUIDES ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Mountain className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Complete Park Guides
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              In-depth profiles of every major national park in Morocco, with trails, species,
              permits, and the best time to visit each one.
            </p>
          </div>

          <div className="space-y-10">
            {nationalParks.map((park, index) => (
              <div key={park.name} className="card-moroccan overflow-hidden">
                {/* Park Header with Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={park.image}
                    alt={`${park.name} in the ${park.region} of Morocco`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814]/80 via-[#1A1814]/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#C4960C] uppercase tracking-wider mb-1">
                      <TreePine className="w-3.5 h-3.5" />
                      {park.region}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-white">
                      {park.name}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-bold">
                    Est. {park.established}
                  </div>
                </div>

                {/* Park Details */}
                <div className="p-6">
                  {/* Quick Info Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                      <span>{park.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <Mountain className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                      <span>{park.elevation}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <Calendar className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                      <span>{park.bestSeason.split('.')[0]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <Compass className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                      <span>{park.bestFor.split(',')[0]}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    {park.description}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {park.detailedDescription}
                  </p>

                  {/* Highlights Bar */}
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)] mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1">
                      <Star className="w-3 h-3" /> Key Highlights
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{park.highlights}</p>
                  </div>

                  {/* Two-column: Trails and Species */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Best Trails */}
                    <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-1.5">
                        <Footprints className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        Best Trails
                      </h4>
                      <ul className="space-y-1.5">
                        {park.bestTrails.map((trail) => (
                          <li key={trail} className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                            <CheckCircle className="w-3 h-3 text-[var(--color-primary)] shrink-0 mt-0.5" />
                            {trail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Species */}
                    <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        Key Species
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {park.keySpecies.map((sp) => (
                          <span key={sp} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-primary)]/5 text-xs text-[var(--color-primary)] font-medium">
                            <Leaf className="w-3 h-3" />
                            {sp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Permits and Season Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg border border-[var(--color-primary)]/15">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] mb-1">
                        <Info className="w-3 h-3" /> Entry &amp; Permits
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{park.permits}</p>
                    </div>
                    <div className="p-3 rounded-lg border border-[var(--color-primary)]/15">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] mb-1">
                        <Sun className="w-3 h-3" /> Best Season
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{park.bestSeason}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── NATURE RESERVES & SIBE SITES ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Nature Reserves &amp; SIBE Sites
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Beyond national parks, Morocco protects critical habitats through a network of Sites of
              Biological and Ecological Interest (SIBE) and Ramsar wetlands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {natureReserves.map((reserve) => (
              <div key={reserve.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <CircleDot className="w-4 h-4 text-[var(--color-primary)]" />
                    {reserve.name}
                  </h3>
                  <span className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-2 py-0.5 rounded-full shrink-0">
                    {reserve.type}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-2">
                  <MapPin className="w-3 h-3" />
                  {reserve.region}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {reserve.significance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── ENDEMIC SPECIES ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Binoculars className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Endemic Species of Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Species found only in Morocco or North Africa, many of which depend entirely on the
              national park network for their survival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {endemicSpecies.map((species) => (
              <div key={species.name} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    {species.type === 'Tree' ? <Trees className="w-4 h-4 text-[var(--color-primary)]" /> :
                     species.type === 'Mammal' ? <Eye className="w-4 h-4 text-[var(--color-primary)]" /> :
                     species.type === 'Bird' ? <Bird className="w-4 h-4 text-[var(--color-primary)]" /> :
                     <Leaf className="w-4 h-4 text-[var(--color-primary)]" />}
                  </div>
                  <span className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider">{species.type}</span>
                </div>
                <h3 className="text-base font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-0.5">
                  {species.name}
                </h3>
                <p className="text-xs italic text-[var(--text-muted)] mb-2">{species.scientific}</p>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-primary)] font-medium mb-2">
                  <MapPin className="w-3 h-3" />
                  {species.habitat}
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {species.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── FLORA GUIDE ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Flower2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Flora Guide: Morocco&apos;s Iconic Trees
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Five tree species that define Morocco&apos;s landscapes and play vital ecological,
              economic, and cultural roles.
            </p>
          </div>

          <div className="space-y-6">
            {floraGuide.map((flora, index) => (
              <div key={flora.name} className={`card-moroccan overflow-hidden flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/3 p-6 bg-[var(--surface-muted)] flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-2">
                    <Trees className="w-3.5 h-3.5" />
                    Flora Guide
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                    {flora.name}
                  </h3>
                  <p className="text-xs italic text-[var(--text-muted)] mb-3">{flora.scientific}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <Mountain className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{flora.habitat}</span>
                    </div>
                    <div className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{flora.bestLocations}</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {flora.significance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── CONSERVATION PROGRAMS ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Heart className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Conservation &amp; Volunteering
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              How Morocco is protecting its natural heritage and how visitors can contribute
              to conservation efforts across the national park network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conservationPrograms.map((program) => (
              <div key={program.name} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider">{program.focus}</span>
                </div>
                <h3 className="text-base font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {program.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {program.description}
                </p>
                <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] mb-1">
                    <Users className="w-3 h-3" /> How You Can Help
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">{program.howToHelp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── PHOTOGRAPHY OPPORTUNITIES ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Photography Opportunities
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              The most photogenic locations across Morocco&apos;s national parks, with practical tips
              for capturing each scene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photoOpportunities.map((photo, index) => (
              <div key={photo.location} className="card-moroccan p-5">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0 font-bold text-sm font-[family-name:var(--font-display)]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                      {photo.location}
                    </h3>
                    <p className="text-xs text-[var(--color-primary)] font-medium mb-1 flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {photo.subject}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mb-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {photo.bestTime}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {photo.tips}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── CAMPING IN NATIONAL PARKS ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Tent className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Camping in National Parks
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From mountain refuges to wild camping under the stars, Morocco&apos;s parks offer
              overnight experiences that connect you to the landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campingSites.map((site) => (
              <div key={site.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Tent className="w-4 h-4 text-[var(--color-primary)]" />
                    {site.name}
                  </h3>
                  <span className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-2 py-0.5 rounded-full shrink-0">
                    {site.type}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-2">
                  <TreePine className="w-3 h-3" />
                  {site.park}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {site.description}
                </p>
                <div className="p-2 rounded bg-[var(--surface-muted)]">
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-bold text-[var(--text-primary)]">Facilities:</span> {site.facilities}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Camping Tips */}
          <div className="card-moroccan p-6 mt-8">
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[var(--color-primary)]" />
              Essential Camping Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Equipment</h4>
                <ul className="space-y-1">
                  {['3-season tent (4-season above 3,000m)', 'Sleeping bag rated to -5\u00B0C minimum', 'Water purification system', 'Headlamp with spare batteries', 'Cooking stove and fuel'].map((item) => (
                    <li key={item} className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-[var(--color-primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Safety</h4>
                <ul className="space-y-1">
                  {['Tell someone your route and expected return', 'Carry sufficient water (3L minimum/day)', 'Check weather forecasts before departing', 'Store food away from sleeping area', 'Know basic first aid'].map((item) => (
                    <li key={item} className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-[var(--color-primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Leave No Trace</h4>
                <ul className="space-y-1">
                  {['Pack out all rubbish, including food scraps', 'Use established fire rings only', 'Camp on durable surfaces', 'Bury human waste 200m from water', 'Respect wildlife and other visitors'].map((item) => (
                    <li key={item} className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-[var(--color-primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── GUIDED NATURE TOURS ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Waypoints className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Guided Nature Tours
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Expert-led expeditions into Morocco&apos;s national parks, from single-day wildlife walks
              to multi-day wilderness treks with licensed mountain guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {natureTours.map((tour) => (
              <div key={tour.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[var(--text-primary)] text-base">{tour.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ml-2 ${
                    tour.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    tour.difficulty === 'Moderate' ? 'bg-amber-100 text-amber-700' :
                    tour.difficulty === 'Easy-Moderate' ? 'bg-lime-100 text-lime-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {tour.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Clock className="w-3 h-3" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[var(--color-primary)] font-medium">
                    <Star className="w-3 h-3" />
                    {tour.price}
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {tour.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── SEASONAL VISITING GUIDE ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Season for Each Park
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              When to visit Morocco&apos;s national parks for the best weather, wildlife, and trail
              conditions in each season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalGuide.map((s) => (
              <div key={s.season} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)]">{s.season}</h3>
                    <p className="text-xs text-[var(--text-muted)]">{s.months}</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[var(--surface-muted)] mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] mb-1">
                    <TreePine className="w-3 h-3" /> Best Parks
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">{s.parks}</p>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {s.conditions}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── RESPONSIBLE NATURE TOURISM ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Responsible Nature Tourism
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              How to enjoy Morocco&apos;s national parks while contributing positively to conservation
              and local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Hire Local Guides', detail: 'Licensed local guides know the parks intimately and their fees support families in mountain and rural communities. For specialist birding, botanizing, or photography, seek guides with specific expertise rather than general tour operators. Guide cooperatives in most park gateway towns ensure fair wages and professional standards.' },
              { title: 'Stay in Community Accommodation', detail: 'Guesthouses (gites) in villages adjacent to parks keep tourism revenue in local hands. In the High Atlas, Rif, and Middle Atlas, community-run gites offer authentic hospitality, home-cooked meals, and an economic incentive for habitat protection. Book directly rather than through large tour companies when possible.' },
              { title: 'Minimize Your Impact', detail: 'Stay on marked trails to prevent erosion. Pack out all waste including biodegradable items. Never remove plants, rocks, or archaeological artifacts. Keep noise levels low, especially near wildlife. Camp only in designated areas or on durable surfaces. Use existing fire rings and avoid cutting vegetation for fuel.' },
              { title: 'Report Wildlife Crime', detail: 'If you witness illegal hunting, trapping, or the sale of protected species products, report it to park authorities or the national forestry agency (HCEFLCD). The illegal pet trade in Barbary macaques and the poaching of raptors and gazelles remain serious threats that visitor reports can help combat.' },
              { title: 'Choose Ethical Operators', detail: 'Select tour operators who employ local staff, contribute to conservation projects, and follow responsible tourism guidelines. Ask about their environmental policies and community engagement. The best operators limit group sizes, avoid wildlife disturbance, and invest in habitat protection.' },
              { title: 'Support Conservation Directly', detail: 'Many parks accept donations or offer volunteer opportunities. GREPOM (the Moroccan ornithological society) welcomes volunteer bird counters. Tree-planting events in the Middle Atlas accept international participants. Purchasing handicrafts from park-adjacent cooperatives supports conservation-friendly livelihoods.' },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5">
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── CTA SECTION ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#1A1814] text-white moroccan-pattern-dark">
        <div className="container-morocco text-center max-w-3xl">
          <TreePine className="w-10 h-10 text-[#C4960C] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Explore Morocco&apos;s Protected Wilderness
          </h2>
          <p className="text-lg text-white/80 mb-8">
            From the summit of Toubkal to the flamingo lagoons of Khenifiss, Morocco&apos;s national
            parks offer some of the most diverse and rewarding nature experiences in the
            Mediterranean. Start planning your park adventure today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/wildlife" className="btn-primary">
              Wildlife Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/trekking" className="btn-ghost !text-white !border-white/30 hover:!bg-white/10">
              Trekking Routes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

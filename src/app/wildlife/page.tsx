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
  DollarSign,
  Eye,
  Binoculars,
  Waves,
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
  Aperture,
  Focus,
  Sunrise,
  Moon,
  Fish,
  Bug,
  Leaf,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wildlife & Nature Guide Morocco | Animals, National Parks & Birdwatching',
  description:
    'Explore Morocco\'s incredible biodiversity. Barbary macaques, fennec foxes, flamingos, national parks from Toubkal to Souss Massa, birdwatching spots with 400+ species, marine life, and wildlife photography tips.',
  keywords: [
    'morocco wildlife',
    'barbary macaque morocco',
    'morocco national parks',
    'birdwatching morocco',
    'morocco animals',
    'fennec fox sahara',
    'souss massa national park',
    'morocco nature',
    'northern bald ibis morocco',
    'morocco safari tours',
    'morocco biodiversity',
    'ifrane national park',
    'toubkal national park',
    'morocco marine life',
    'morocco flamingos',
    'morocco endangered species',
    'morocco whale watching',
    'morocco desert wildlife',
    'morocco bird migration',
    'morocco wildlife photography',
  ],
  openGraph: {
    title: 'Wildlife & Nature Guide Morocco | Animals, Parks & Birdwatching',
    description:
      'Discover Morocco\'s diverse ecosystems, iconic wildlife, national parks, birdwatching spots, and nature tours.',
    url: 'https://cityguide.ma/wildlife',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Barbary macaque in the Atlas Mountains of Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/wildlife' },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      name: 'Morocco Wildlife & Nature Guide',
      description:
        'Comprehensive guide to Morocco\'s wildlife, national parks, birdwatching, marine life, and nature experiences across diverse ecosystems from the Sahara to the Atlas Mountains.',
      url: 'https://cityguide.ma/wildlife',
      touristType: ['Wildlife tourism', 'Birdwatching', 'Ecotourism', 'Nature photography'],
      image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1200',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.7917,
        longitude: -7.0926,
      },
    },
    {
      '@type': 'ItemList',
      name: 'Morocco Wildlife Species',
      description: 'Iconic wildlife species found across Morocco\'s diverse ecosystems.',
      numberOfItems: 16,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Barbary Macaque' },
        { '@type': 'ListItem', position: 2, name: 'Fennec Fox' },
        { '@type': 'ListItem', position: 3, name: 'Barbary Sheep (Aoudad)' },
        { '@type': 'ListItem', position: 4, name: 'Dromedary Camel' },
        { '@type': 'ListItem', position: 5, name: 'North African Hedgehog' },
        { '@type': 'ListItem', position: 6, name: 'Moroccan Spiny-Tailed Lizard' },
        { '@type': 'ListItem', position: 7, name: 'Houbara Bustard' },
        { '@type': 'ListItem', position: 8, name: 'Northern Bald Ibis' },
        { '@type': 'ListItem', position: 9, name: 'Greater Flamingo' },
        { '@type': 'ListItem', position: 10, name: 'Eleonora\'s Falcon' },
        { '@type': 'ListItem', position: 11, name: 'Striped Hyena' },
        { '@type': 'ListItem', position: 12, name: 'Wild Boar' },
        { '@type': 'ListItem', position: 13, name: 'Loggerhead Sea Turtle' },
        { '@type': 'ListItem', position: 14, name: 'Mediterranean Monk Seal' },
        { '@type': 'ListItem', position: 15, name: 'Atlas Cedar' },
        { '@type': 'ListItem', position: 16, name: 'Dorcas Gazelle' },
      ],
    },
  ],
};

/* ================================================================
   WILDLIFE SPECIES DATA
   ================================================================ */

interface WildlifeSpecies {
  name: string;
  scientific: string;
  location: string;
  status: string;
  description: string;
  image: string;
  bestViewing: string;
}

const wildlifeSpecies: WildlifeSpecies[] = [
  {
    name: 'Barbary Macaque',
    scientific: 'Macaca sylvanus',
    location: 'Azrou, Middle Atlas',
    status: 'Endangered',
    bestViewing: 'Year-round, best in spring and autumn mornings',
    description: 'The only macaque species found outside of Asia and the only primate north of the Sahara besides humans. Around 8,000 remain in Morocco, primarily in the cedar forests of the Middle Atlas near Azrou and Ifrane. These charismatic monkeys live in troops of 10-30 and are remarkably tolerant of human observers. Males are notably involved in infant care, a behavior rare among primates.',
    image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=600',
  },
  {
    name: 'Fennec Fox',
    scientific: 'Vulpes zerda',
    location: 'Sahara Desert',
    status: 'Least Concern',
    bestViewing: 'Dawn and dusk, November to March in cooler months',
    description: 'The world\'s smallest fox, weighing just 1-1.5 kg, with enormous ears that dissipate heat and detect underground prey. Nocturnal and elusive, fennec foxes inhabit the sandy deserts of southeastern Morocco. Their oversized ears can hear insects moving beneath the sand. Spotting one in the wild is rare and unforgettable.',
    image: 'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?q=80&w=600',
  },
  {
    name: 'Barbary Sheep (Aoudad)',
    scientific: 'Ammotragus lervia',
    location: 'High Atlas Mountains',
    status: 'Vulnerable',
    bestViewing: 'Early morning on rocky cliff faces, spring through autumn',
    description: 'A powerful, agile mountain ungulate with distinctive shaggy hair on its throat and forelegs. Found in the rocky terrain of the High Atlas and Anti-Atlas mountains. These sure-footed animals can navigate near-vertical cliff faces. Once widespread across North Africa, their population has declined significantly due to hunting and habitat loss.',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=600',
  },
  {
    name: 'Dromedary Camel',
    scientific: 'Camelus dromedarius',
    location: 'Sahara Desert',
    status: 'Domesticated',
    bestViewing: 'Year-round in Merzouga and Zagora desert regions',
    description: 'The single-humped camel has been the lifeline of Saharan communities for millennia. While no longer truly wild in Morocco, semi-feral populations roam the desert edges near Merzouga and Zagora. Camels can go 7-10 days without water and survive temperatures exceeding 50 degrees Celsius. Camel treks remain one of Morocco\'s most iconic experiences.',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=600',
  },
  {
    name: 'North African Hedgehog',
    scientific: 'Atelerix algirus',
    location: 'Widespread, gardens and farmland',
    status: 'Least Concern',
    bestViewing: 'After dark in gardens, riads, and oasis edges',
    description: 'A nocturnal insectivore found throughout Morocco, from coastal gardens to mountain foothills. Smaller and lighter-colored than European hedgehogs, they have a distinctive white face and forehead. Commonly encountered in riads, gardens, and at the edges of oases. They feast on insects, snails, and fallen fruit.',
    image: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?q=80&w=600',
  },
  {
    name: 'Moroccan Spiny-Tailed Lizard',
    scientific: 'Uromastyx nigriventris',
    location: 'Arid regions, Anti-Atlas',
    status: 'Near Threatened',
    bestViewing: 'Late morning when basking on rocks, March to October',
    description: 'A striking, herbivorous lizard that can grow up to 40 cm long. Their armored, spiny tails are used for defense, whipping potential predators. They inhabit rocky, arid terrain in the Anti-Atlas and pre-Saharan regions. Excellent thermoregulators, they bask on rocks at temperatures that would be lethal to most animals.',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=600',
  },
  {
    name: 'Houbara Bustard',
    scientific: 'Chlamydotis undulata',
    location: 'Eastern plains, semi-desert',
    status: 'Vulnerable',
    bestViewing: 'Spring courtship displays, early morning on open steppes',
    description: 'A large, ground-dwelling bird of the eastern Moroccan steppes and semi-arid plains. Known for the male\'s spectacular courtship display, raising white neck feathers into a dramatic ruff while performing a strutting dance. Conservation breeding programs in Morocco have been crucial to preventing extinction in the wild.',
    image: 'https://images.unsplash.com/photo-1555224371-e29aa23e4440?q=80&w=600',
  },
  {
    name: 'Northern Bald Ibis',
    scientific: 'Geronticus eremita',
    location: 'Souss Massa National Park',
    status: 'Critically Endangered',
    bestViewing: 'Year-round at Souss Massa coastal cliffs, best at dawn',
    description: 'One of the world\'s rarest birds, with Morocco hosting the last significant wild population of around 700 individuals. The Souss Massa coast south of Agadir is their stronghold. These glossy-black birds with their distinctive bare red faces nest on coastal cliffs and forage in nearby agricultural fields. A conservation success story as numbers have slowly recovered from fewer than 100 in the 1990s.',
    image: 'https://images.unsplash.com/photo-1555224371-e29aa23e4440?q=80&w=600',
  },
  {
    name: 'Greater Flamingo',
    scientific: 'Phoenicopterus roseus',
    location: 'Oualidia, Moulay Bousselham',
    status: 'Least Concern',
    bestViewing: 'October to March at coastal lagoons, golden hour',
    description: 'Thousands of greater flamingos winter in Morocco\'s coastal lagoons, creating one of the country\'s most spectacular wildlife sights. The lagoons of Oualidia, Moulay Bousselham (Merja Zerga), and Khnifiss are prime viewing spots. From October to March, flocks of hundreds can be seen wading through the shallows, filtering brine shrimp with their specialized bills.',
    image: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=600',
  },
  {
    name: 'Eleonora\'s Falcon',
    scientific: 'Falco eleonorae',
    location: 'Atlantic islands, Essaouira',
    status: 'Least Concern',
    bestViewing: 'July to October, dusk hunting flights over Essaouira',
    description: 'A graceful, dark falcon that breeds on Morocco\'s Atlantic islands, particularly the Mogador islands off Essaouira. Uniquely, they time their breeding to coincide with autumn bird migration, catching small passerines to feed their chicks. Watching them hunt at dusk over the Essaouira ramparts is one of Morocco\'s great birding experiences.',
    image: 'https://images.unsplash.com/photo-1590608897006-f82fbbf4ad64?q=80&w=600',
  },
  {
    name: 'Striped Hyena',
    scientific: 'Hyaena hyaena',
    location: 'Atlas foothills, rural areas',
    status: 'Near Threatened',
    bestViewing: 'Nocturnal; camera traps in remote Atlas foothills',
    description: 'Morocco\'s most elusive large predator. The striped hyena inhabits the foothills of the Atlas Mountains and remote rural areas. Strictly nocturnal and solitary, they are rarely seen but leave unmistakable tracks and scat. Their powerful jaws can crush bones. Camera trap studies suggest a small but stable population persists in the High Atlas and Rif regions.',
    image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=600',
  },
  {
    name: 'Wild Boar',
    scientific: 'Sus scrofa',
    location: 'Rif Mountains, forested areas',
    status: 'Least Concern',
    bestViewing: 'Dawn and dusk at forest edges and water sources',
    description: 'Morocco\'s forests harbor significant populations of wild boar, particularly in the Rif Mountains, Middle Atlas cedar forests, and cork oak woodlands. As the only wild pig in North Africa, they play an important ecological role in forest regeneration. Primarily nocturnal, they are best spotted at dawn or dusk along forest edges and near water sources.',
    image: 'https://images.unsplash.com/photo-1574068468668-a05a11f871da?q=80&w=600',
  },
  {
    name: 'Loggerhead Sea Turtle',
    scientific: 'Caretta caretta',
    location: 'Atlantic coast',
    status: 'Vulnerable',
    bestViewing: 'Summer nesting season on remote southern beaches',
    description: 'Morocco\'s Atlantic coast is an important foraging ground for loggerhead sea turtles, and some nesting still occurs on remote southern beaches. These ancient mariners can weigh up to 200 kg and dive to depths of 230 meters. Conservation efforts along the coast work to protect nesting sites and reduce bycatch in fishing nets.',
    image: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?q=80&w=600',
  },
  {
    name: 'Mediterranean Monk Seal',
    scientific: 'Monachus monachus',
    location: 'Cap Blanc (Ras Nouadhibou)',
    status: 'Endangered',
    bestViewing: 'Restricted access; conservation-focused boat trips available',
    description: 'One of the world\'s rarest marine mammals, with a colony of approximately 300 individuals at Cap Blanc on the Morocco-Mauritania border, the largest remaining population globally. These seals rest in sea caves and feed in the nutrient-rich Atlantic waters. Direct viewing is restricted to protect the colony, but their conservation is a major success story.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=600',
  },
  {
    name: 'Atlas Cedar',
    scientific: 'Cedrus atlantica',
    location: 'Middle Atlas, Ifrane region',
    status: 'Endangered',
    bestViewing: 'Year-round; autumn colors spectacular in October',
    description: 'Morocco\'s most majestic tree species, forming ancient forests in the Middle Atlas and Rif Mountains between 1,300-2,600 meters elevation. Some specimens are over 900 years old and reach 40 meters tall. The Gouraud Cedar near Azrou, estimated at 800 years old, is a landmark. These forests are critical habitat for Barbary macaques and countless other species. Climate change poses a growing threat.',
    image: 'https://images.unsplash.com/photo-1542273917363-1f3e5ce68a2c?q=80&w=600',
  },
  {
    name: 'Dorcas Gazelle',
    scientific: 'Gazella dorcas',
    location: 'Eastern plains, Saharan fringe',
    status: 'Vulnerable',
    bestViewing: 'Early morning on open plains, October to April',
    description: 'The smallest gazelle species in North Africa, perfectly adapted to survive in arid and semi-arid conditions. Dorcas gazelles can go their entire lives without drinking water, obtaining all moisture from the plants they eat. Small herds persist in the eastern Moroccan steppes and in Souss Massa National Park, where reintroduction efforts have been underway since the 1990s. Their graceful, bounding flight across desert terrain is mesmerizing.',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=600',
  },
];

/* ================================================================
   NATIONAL PARKS & RESERVES DATA
   ================================================================ */

interface NationalPark {
  name: string;
  region: string;
  established: number | string;
  area: string;
  highlights: string;
  bestFor: string;
  description: string;
  keySpecies: string[];
}

const nationalParks: NationalPark[] = [
  {
    name: 'Toubkal National Park',
    region: 'High Atlas',
    established: 1942,
    area: '380 km2',
    highlights: 'North Africa\'s highest peak (4,167m), Berber villages, alpine flora, Barbary sheep',
    bestFor: 'Trekking, mountaineering, botany',
    description: 'Morocco\'s most famous national park, centered on Jebel Toubkal. The park protects high-altitude ecosystems with over 900 plant species, including many endemics. Ibex reintroduction programs and Barbary sheep conservation make it a wildlife destination as well as a trekking mecca.',
    keySpecies: ['Barbary sheep', 'Golden eagle', 'Barbary partridge', 'Atlas day gecko'],
  },
  {
    name: 'Souss Massa National Park',
    region: 'Atlantic Coast, south of Agadir',
    established: 1991,
    area: '340 km2',
    highlights: 'Northern bald ibis, flamingos, gazelles, coastal cliffs, estuary',
    bestFor: 'Birdwatching, wildlife, coastal walks',
    description: 'The last stronghold of the critically endangered northern bald ibis. The park stretches along 65 km of wild Atlantic coast with estuaries, sand dunes, and argan forest. Home to Dorcas gazelles, jackals, and over 250 bird species.',
    keySpecies: ['Northern bald ibis', 'Dorcas gazelle', 'Golden jackal', 'Moussier\'s redstart'],
  },
  {
    name: 'Ifrane National Park',
    region: 'Middle Atlas',
    established: 2004,
    area: '500 km2',
    highlights: 'Barbary macaques, Atlas cedar forests, Barbary stag (reintroduced), lakes',
    bestFor: 'Primates, forest walks, birdwatching',
    description: 'Protecting the magnificent cedar forests of the Middle Atlas, this park is the best place to see Barbary macaques in the wild. The forests around Azrou host troops of 20-50 monkeys that are habituated to observers. Dayat Aoua lake is excellent for waterbirds.',
    keySpecies: ['Barbary macaque', 'Atlas cedar', 'Barbary stag', 'Booted eagle'],
  },
  {
    name: 'Talassemtane National Park',
    region: 'Rif Mountains',
    established: 2004,
    area: '580 km2',
    highlights: 'Moroccan fir (endemic), Rif Mountains, dramatic gorges, Akchour waterfalls',
    bestFor: 'Endemic plants, trekking, birdwatching',
    description: 'Home to the last stands of Moroccan fir (Abies maroccana), a species found nowhere else on Earth. The park encompasses dramatic Rif Mountain scenery with deep gorges, waterfalls, and diverse birdlife including Bonelli\'s eagle and peregrine falcon.',
    keySpecies: ['Moroccan fir', 'Bonelli\'s eagle', 'Peregrine falcon', 'Barbary macaque'],
  },
  {
    name: 'Khenifiss National Park',
    region: 'Atlantic Coast, south of Tan-Tan',
    established: 2006,
    area: '1,850 km2',
    highlights: 'Saharan lagoon, flamingos, monk seal habitat, desert-meets-ocean',
    bestFor: 'Remote birding, desert ecology, solitude',
    description: 'One of Morocco\'s most remote parks, where the Sahara meets the Atlantic. The Khenifiss lagoon is a Ramsar wetland of international importance, attracting thousands of migratory birds. Saharan species like the desert fox and sand cat may be encountered.',
    keySpecies: ['Greater flamingo', 'Sand cat', 'Desert fox', 'Spoonbill'],
  },
  {
    name: 'Al Hoceima National Park',
    region: 'Mediterranean Coast',
    established: 2004,
    area: '480 km2',
    highlights: 'Osprey colony, Mediterranean cliffs, dolphins, pristine coves',
    bestFor: 'Marine wildlife, coastal scenery, diving',
    description: 'Morocco\'s premier Mediterranean marine park. Dramatic cliffs plunge into crystal-clear waters. The park hosts the largest osprey colony on the Mediterranean, along with dolphins, loggerhead turtles, and important seabird nesting sites.',
    keySpecies: ['Osprey', 'Bottlenose dolphin', 'Loggerhead turtle', 'Audouin\'s gull'],
  },
  {
    name: 'Dakhla Bay',
    region: 'Southern Sahara coast',
    established: 'Proposed protected area',
    area: '400 km2 (bay area)',
    highlights: 'Flamingos, migratory shorebirds, dolphins, whale sharks (seasonal)',
    bestFor: 'Birdwatching, marine life, kitesurfing',
    description: 'The vast Dakhla Bay and lagoon system is a critical stopover for migratory birds on the East Atlantic Flyway. Thousands of flamingos, spoonbills, and shorebirds winter here. The surrounding waters support dolphins, occasional whale sharks, and important fisheries.',
    keySpecies: ['Greater flamingo', 'Eurasian spoonbill', 'Common dolphin', 'Whale shark'],
  },
  {
    name: 'Haut Atlas Oriental National Park',
    region: 'Eastern High Atlas',
    established: 2004,
    area: '490 km2',
    highlights: 'Mouflons, junipers, raptors, M\'Goun massif approaches',
    bestFor: 'Remote trekking, wildlife photography',
    description: 'A wild and less-visited park protecting the eastern High Atlas ecosystems. High-altitude junipers, significant raptor populations, and Barbary sheep inhabit the rugged terrain. The park offers genuine wilderness experiences away from tourist trails.',
    keySpecies: ['Barbary sheep', 'Lanner falcon', 'Egyptian vulture', 'Juniper forests'],
  },
  {
    name: 'Merja Zerga (Moulay Bousselham)',
    region: 'Atlantic Coast, north of Kenitra',
    established: 1978,
    area: '70 km2',
    highlights: '400+ bird species, flamingos, spoonbills, Ramsar wetland',
    bestFor: 'Birdwatching, boat trips, photography',
    description: 'Morocco\'s most important wetland for migratory birds and a globally significant Ramsar site. The lagoon hosts over 400 bird species throughout the year. Winter brings spectacular flocks of flamingos, spoonbills, avocets, and thousands of waders. Boat tours through the lagoon are the best way to see the birdlife.',
    keySpecies: ['Greater flamingo', 'Eurasian spoonbill', 'Marsh harrier', 'Marbled teal'],
  },
  {
    name: 'Iriqui National Park',
    region: 'Saharan edge, between Ouarzazate and Zagora',
    established: 1994,
    area: '1,230 km2',
    highlights: 'Desert lake (seasonal), gazelles, Saharan fauna, migratory birds',
    bestFor: 'Desert ecology, Saharan wildlife, remote exploration',
    description: 'Centered on a seasonal lake that fills after rains, attracting wildlife from the surrounding desert. When water is present, the lake draws flamingos and other waterbirds to an otherwise arid landscape. The park protects remnant populations of Dorcas gazelle and Saharan fauna adapted to extreme conditions.',
    keySpecies: ['Dorcas gazelle', 'Desert monitor', 'Cream-colored courser', 'Egyptian nightjar'],
  },
];

/* ================================================================
   BIRDWATCHING SPOTS DATA
   ================================================================ */

interface BirdwatchingSpot {
  name: string;
  species: string;
  bestSeason: string;
  highlight: string;
  difficulty: string;
}

const birdwatchingSpots: BirdwatchingSpot[] = [
  { name: 'Merja Zerga (Moulay Bousselham)', species: '400+', bestSeason: 'October - March', highlight: 'Morocco\'s premier birding lagoon. Flamingos, spoonbills, avocets, marsh harriers. Boat tours essential.', difficulty: 'Easy' },
  { name: 'Souss Massa National Park', species: '250+', bestSeason: 'Year-round', highlight: 'Northern bald ibis colony, Moussier\'s redstart, Barbary falcon, Tristram\'s warbler.', difficulty: 'Moderate' },
  { name: 'Oualidia Lagoon', species: '150+', bestSeason: 'September - April', highlight: 'Flamingos, terns, waders. Combine with oyster tasting for a perfect day trip.', difficulty: 'Easy' },
  { name: 'Dayet Aoua (Ifrane)', species: '200+', bestSeason: 'March - June', highlight: 'Atlas Mountain lake. Crested coots, marbled teal, Atlas cedar forest birds.', difficulty: 'Easy' },
  { name: 'Oued Massa Estuary', species: '300+', bestSeason: 'November - March', highlight: 'Where the Massa river meets the Atlantic. Spectacular concentrations of waders and raptors.', difficulty: 'Moderate' },
  { name: 'Ouarzazate Reservoirs', species: '180+', bestSeason: 'October - April', highlight: 'Desert-edge reservoirs attracting unexpected waterbirds. Marbled duck, white-headed duck.', difficulty: 'Moderate' },
  { name: 'Boumalne Dades Area', species: '120+', bestSeason: 'March - June', highlight: 'Desert-edge birding. Cream-colored courser, trumpeter finch, desert wheatear, Bonelli\'s eagle.', difficulty: 'Moderate' },
  { name: 'Essaouira Mogador Islands', species: '100+', bestSeason: 'April - October', highlight: 'Eleonora\'s falcon breeding colony, Audouin\'s gull, Cory\'s shearwater offshore.', difficulty: 'Easy' },
  { name: 'Strait of Gibraltar (Tangier)', species: '300+', bestSeason: 'September - November', highlight: 'Millions of raptors, storks, and passerines funnel through the strait during autumn migration. One of the greatest raptor spectacles on Earth.', difficulty: 'Easy' },
  { name: 'Middle Atlas Lakes (Aguelmame)', species: '150+', bestSeason: 'April - July', highlight: 'High-altitude crater lakes surrounded by cedar and oak forests. Excellent for breeding warblers, raptors, and Atlas endemics.', difficulty: 'Moderate' },
];

/* ================================================================
   SEASONAL WILDLIFE CALENDAR
   ================================================================ */

interface SeasonalEntry {
  season: string;
  months: string;
  wildlife: string;
  regions: string;
  conditions: string;
}

const seasonalCalendar: SeasonalEntry[] = [
  {
    season: 'Winter',
    months: 'December - February',
    wildlife: 'Peak flamingo and waterbird numbers at lagoons. Wintering raptors in mountains. Desert mammals more active in cooler temperatures. Whale watching in the Strait of Gibraltar for orcas.',
    regions: 'Merja Zerga, Oualidia, Souss Massa, Dakhla Bay',
    conditions: 'Cool and pleasant for desert wildlife viewing. Snow in Atlas Mountains. Coastal wetlands at their fullest.',
  },
  {
    season: 'Spring',
    months: 'March - May',
    wildlife: 'Return migration of raptors and songbirds. Barbary macaque babies born. Wildflower explosion attracts butterflies and insects. Breeding displays of bustards and larks on eastern steppes.',
    regions: 'Middle Atlas, Strait of Gibraltar, Souss Massa, Eastern Steppes',
    conditions: 'Ideal temperatures across all regions. Green landscapes after winter rains. Peak wildflower season.',
  },
  {
    season: 'Summer',
    months: 'June - August',
    wildlife: 'Eleonora\'s falcon breeding on Mogador Islands. Sea turtle nesting on remote beaches. Marine life active, dolphin pods at peak size. Desert species strictly dawn and dusk.',
    regions: 'Essaouira coast, Al Hoceima, Dakhla, High Atlas',
    conditions: 'Hot in interior. Best for marine wildlife and high mountain species. Avoid midday in desert and plains.',
  },
  {
    season: 'Autumn',
    months: 'September - November',
    wildlife: 'Spectacular raptor migration through Strait of Gibraltar. Millions of birds pass through. Flamingos arrive at wintering lagoons. Desert wildlife becomes more active as temperatures cool.',
    regions: 'Tangier, Merja Zerga, Oualidia, Saharan fringe',
    conditions: 'Arguably the best overall season for wildlife. Pleasant temperatures, peak migration, returning waterbirds.',
  },
];

/* ================================================================
   SAFARI & NATURE TOURS DATA
   ================================================================ */

const safariTours = [
  {
    name: 'Atlas Macaque & Cedar Forest Walk',
    duration: 'Full day from Fes',
    price: '$60-90 per person',
    description: 'Visit the cedar forests of Azrou to observe Barbary macaques in their natural habitat. Walk through ancient Atlas cedar groves with a naturalist guide. Includes a stop at the 800-year-old Gouraud Cedar.',
  },
  {
    name: 'Souss Massa Ibis & Birding Tour',
    duration: '2 days from Agadir',
    price: '$150-250 per person',
    description: 'Dedicated birdwatching tour to see the critically endangered northern bald ibis in Souss Massa National Park. Expert ornithologist guide, spotting scopes provided. Also visit the Massa estuary for waders and raptors.',
  },
  {
    name: 'Sahara Wildlife & Stargazing',
    duration: '3 days from Marrakech or Ouarzazate',
    price: '$200-350 per person',
    description: 'Desert safari combining wildlife spotting (fennec fox tracks, desert lizards, gazelles) with camel trekking and Saharan stargazing. Night drives for nocturnal species. Luxury desert camp with naturalist guide.',
  },
  {
    name: 'Merja Zerga Flamingo Boat Trip',
    duration: 'Half day from Rabat',
    price: '$40-70 per person',
    description: 'Boat tour through Morocco\'s most important wetland to see flamingos, spoonbills, and hundreds of migratory species. Local boat guides who know every corner of the lagoon. Best October to March.',
  },
  {
    name: 'Dakhla Bay Marine Safari',
    duration: '2-3 days from Dakhla',
    price: '$180-300 per person',
    description: 'Explore the vast Dakhla Bay ecosystem by boat and kayak. Flamingo colonies, dolphins, potential whale shark sightings (seasonal). Combine with kitesurfing or desert excursions for a complete nature experience.',
  },
  {
    name: 'Rif Mountains Endemic Species Trek',
    duration: '4-5 days from Chefchaouen',
    price: '$300-500 per person',
    description: 'Multi-day trek through Talassemtane National Park to see the endemic Moroccan fir, rare raptors, and diverse mountain flora. Guided by local botanists and ornithologists. Includes Akchour waterfalls.',
  },
  {
    name: 'Strait of Gibraltar Raptor Watch',
    duration: 'Full day from Tangier',
    price: '$80-120 per person',
    description: 'Join expert raptor counters during peak autumn migration to witness thousands of honey buzzards, short-toed eagles, and black kites crossing the strait. Includes spotting scopes and identification workshops.',
  },
  {
    name: 'Whale & Dolphin Watching Expedition',
    duration: 'Half day from Tangier or Tarifa',
    price: '$60-100 per person',
    description: 'Small-group boat excursion into the Strait of Gibraltar to observe fin whales, sperm whales, pilot whales, and dolphin pods. Experienced marine biologist guide. Highest sighting rates April through October.',
  },
];

/* ================================================================
   PHOTOGRAPHY TIPS DATA
   ================================================================ */

interface PhotoTip {
  tip: string;
  detail: string;
  gear: string;
}

const photoTips: PhotoTip[] = [
  {
    tip: 'Golden Hour at Merja Zerga',
    detail: 'Arrive at the lagoon before sunrise for the best flamingo shots. The warm light reflecting off the water creates magical conditions. Position yourself on the eastern shore so the rising sun illuminates the birds from behind you.',
    gear: '200-400mm telephoto lens, tripod, polarizing filter',
  },
  {
    tip: 'Barbary Macaque Etiquette',
    detail: 'Use a 70-200mm lens and keep 3-5 meters distance. Never use flash or make sudden movements. Early morning visits to Azrou yield the best behavior shots as troops forage actively. Babies cling to mothers in spring.',
    gear: '70-200mm zoom, fast aperture (f/2.8) for forest shade',
  },
  {
    tip: 'Desert Wildlife at Dawn',
    detail: 'Saharan species are most active in the first and last hours of daylight. Look for tracks in soft sand at dawn, follow them to find lizards, beetles, and if you are very lucky, fennec fox dens.',
    gear: 'Wide-angle for landscape context, macro for insects, headlamp',
  },
  {
    tip: 'Raptor Photography',
    detail: 'Morocco\'s gorges (Todra, Dades) create natural funnels for raptors. Position yourself with the sun behind you at gorge entrances in mid-morning when thermals rise. Bonelli\'s eagles are the prize.',
    gear: '400mm+ telephoto, fast shutter speed (1/2000s minimum)',
  },
  {
    tip: 'Underwater Photography',
    detail: 'Al Hoceima\'s Mediterranean waters offer the best visibility (15-25m). A GoPro in a dive housing is sufficient for most marine encounters. The rocky reefs near the Perejil Islands have the most diverse marine life.',
    gear: 'Waterproof housing, wide-angle dome port, video light',
  },
  {
    tip: 'Ethical Wildlife Photography',
    detail: 'Never bait or lure animals for photographs. Keep vehicle engines off near wildlife. Use natural hides and patience rather than pursuit. Share location data responsibly to avoid disturbing sensitive species.',
    gear: 'Patience is the most important piece of equipment',
  },
  {
    tip: 'Migration Spectacles',
    detail: 'During autumn raptor migration at the Strait of Gibraltar, shoot from elevated positions looking down as thousands of birds stream past at eye level. Overcast days keep birds lower, making for closer encounters.',
    gear: '100-400mm zoom for flexibility, fast continuous autofocus',
  },
  {
    tip: 'Night Wildlife with Camera Traps',
    detail: 'For nocturnal species like striped hyenas and fennec foxes, a camera trap placed near water sources or game trails can capture images impossible to get in person. Always obtain permits and guidance from local park authorities.',
    gear: 'Trail camera with infrared flash, SD card, patience for setup',
  },
];

/* ================================================================
   QUICK STATS
   ================================================================ */

const quickStats = [
  { icon: <TreePine className="w-5 h-5" />, label: 'National Parks', value: '10+', detail: 'Protected areas' },
  { icon: <Bird className="w-5 h-5" />, label: 'Bird Species', value: '480+', detail: 'Recorded in Morocco' },
  { icon: <Leaf className="w-5 h-5" />, label: 'Plant Species', value: '4,500+', detail: '20% endemic' },
  { icon: <Shield className="w-5 h-5" />, label: 'Conservation', value: 'Active', detail: 'Species recovery' },
  { icon: <Compass className="w-5 h-5" />, label: 'Ecosystems', value: '6 Major', detail: 'Desert to alpine' },
  { icon: <Camera className="w-5 h-5" />, label: 'Best Season', value: 'Sep-May', detail: 'Peak wildlife' },
];

/* ================================================================
   ENDANGERED SPECIES CONSERVATION DATA
   ================================================================ */

interface ConservationProject {
  species: string;
  status: string;
  threat: string;
  action: string;
  progress: string;
  organization: string;
}

const conservationProjects: ConservationProject[] = [
  {
    species: 'Northern Bald Ibis',
    status: 'Critically Endangered',
    threat: 'Habitat loss, pesticide poisoning, disturbance at nest sites',
    action: 'Nest site protection, community engagement with local farmers, captive breeding, satellite tracking of migrating birds',
    progress: 'Population recovered from fewer than 100 birds in the 1990s to approximately 700 wild individuals today. Morocco now holds 95% of the global wild population.',
    organization: 'GREPOM / BirdLife International / Souss Massa National Park',
  },
  {
    species: 'Barbary Macaque',
    status: 'Endangered',
    threat: 'Illegal pet trade, habitat fragmentation, cedar forest decline due to climate change and overgrazing',
    action: 'Forest ranger patrols, anti-poaching enforcement, habitat corridor creation, community education programs, cedar replanting',
    progress: 'Stabilized populations in key Middle Atlas sites. Illegal trade awareness campaigns have reduced infant captures by an estimated 60% since 2010.',
    organization: 'Barbary Macaque Awareness & Conservation / HCEFLCD',
  },
  {
    species: 'Mediterranean Monk Seal',
    status: 'Endangered',
    threat: 'Habitat disturbance, fisheries bycatch, pollution, cave collapse',
    action: 'Marine protected area at Cap Blanc, fishing exclusion zones, cave monitoring, cross-border cooperation between Morocco and Mauritania',
    progress: 'Colony at Cap Blanc has grown steadily to approximately 300 individuals, the largest single population in the world. A model for marine mammal conservation.',
    organization: 'CBD-Habitat / IUCN Seal Specialist Group',
  },
  {
    species: 'Atlas Cedar Forest',
    status: 'Endangered (Ecosystem)',
    threat: 'Climate change, drought, overgrazing by livestock, illegal logging',
    action: 'Massive replanting campaigns (10 million seedlings since 2005), grazing restrictions, seed bank preservation, community forest management',
    progress: 'Over 50,000 hectares replanted across the Middle Atlas. New drought-resistant seedling varieties being developed. Community cooperatives manage sustainable harvesting.',
    organization: 'HCEFLCD / GIZ Morocco / University of Fes',
  },
  {
    species: 'Dorcas Gazelle',
    status: 'Vulnerable',
    threat: 'Poaching, habitat loss, competition with livestock, vehicle collisions',
    action: 'Anti-poaching patrols, fenced breeding reserves, reintroduction into Souss Massa and M\'Sabih Talaa reserves',
    progress: 'Captive breeding program has produced over 500 gazelles for release. Souss Massa population now self-sustaining with over 200 individuals.',
    organization: 'HCEFLCD / Souss Massa National Park',
  },
  {
    species: 'Houbara Bustard',
    status: 'Vulnerable',
    threat: 'Falconry hunting pressure, habitat degradation, drought',
    action: 'Large-scale captive breeding (Emirates program), habitat restoration in eastern steppes, hunting regulation enforcement',
    progress: 'Over 30,000 captive-bred birds released in Morocco since the program began. Wild population monitoring shows stabilization in key areas.',
    organization: 'IFHC / Emirates Center for Wildlife Propagation',
  },
];

/* ================================================================
   PAGE COMPONENT (Server Component)
   ================================================================ */

export default function WildlifePage() {
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
          <li className="text-text-primary font-medium">Wildlife &amp; Nature</li>
        </ol>
      </nav>

      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1A1814] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=2800"
            alt="Barbary macaque in the ancient cedar forests of Morocco's Middle Atlas Mountains"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <TreePine className="w-4 h-4 text-emerald-400" />
              Wildlife &amp; Nature
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Wildlife &amp; Nature Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From Barbary macaques in ancient cedar forests to flamingos on Atlantic lagoons, Morocco&apos;s
              biodiversity rivals any destination in the Mediterranean. Discover 16 iconic species, 10 national
              parks, world-class birdwatching, and marine life across six distinct ecosystems.
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

      {/* ──────────────────────────── BIODIVERSITY INTRO ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Leaf className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Biodiversity
            </h2>
          </div>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco sits at a biogeographic crossroads where Europe, Africa, and the Atlantic meet,
              creating one of the most diverse ecosystems in the entire Mediterranean basin. Within its
              borders you will find snow-capped peaks topping 4,000 meters, ancient cedar forests draped
              in mist, vast Saharan dune seas, fertile coastal wetlands, and a 3,500 km coastline
              spanning two oceans.
            </p>
            <p>
              This geographic diversity translates into extraordinary biodiversity. Morocco hosts
              over 4,500 plant species (20% endemic), more than 100 mammal species, 480 bird species,
              and 98 reptile species. The country serves as a critical stopover on the East Atlantic
              Flyway, with millions of migratory birds passing through each autumn and spring.
            </p>
            <p>
              Three distinct mountain ranges &mdash; the Rif, Middle Atlas, and High Atlas &mdash; create
              altitude-driven habitat zones ranging from Mediterranean scrub to alpine meadows. The
              transition from these mountains into the Sahara produces unique desert-edge ecosystems
              found nowhere else. Meanwhile, the Atlantic and Mediterranean coastlines support
              important marine habitats including the world&apos;s largest colony of Mediterranean
              monk seals.
            </p>
            <p>
              For the wildlife traveler, Morocco offers something increasingly rare: the chance to
              see genuinely wild landscapes and species without the crowds or infrastructure of more
              established safari destinations. Whether you are a seasoned birder chasing the northern
              bald ibis, a photographer seeking the perfect macaque portrait, or a family wanting
              to introduce children to wild flamingos, Morocco&apos;s natural heritage will exceed
              your expectations.
            </p>
          </div>

          {/* Ecosystem Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { value: '4,500+', label: 'Plant Species', sub: '20% endemic' },
              { value: '480+', label: 'Bird Species', sub: 'Major flyway' },
              { value: '100+', label: 'Mammal Species', sub: 'Including primates' },
              { value: '10', label: 'National Parks', sub: 'Expanding network' },
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

      {/* ──────────────────────────── ICONIC WILDLIFE SPECIES ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Eye className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Iconic Wildlife Species
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Sixteen remarkable species that define Morocco&apos;s natural heritage, from the Atlas Mountains
              to the Sahara and along the coast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildlifeSpecies.map((species) => (
              <div key={species.name} className="card-moroccan overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={species.image}
                    alt={`${species.name} (${species.scientific}) in ${species.location}, Morocco`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      species.status === 'Critically Endangered' ? 'bg-red-500/90 text-white' :
                      species.status === 'Endangered' ? 'bg-orange-500/90 text-white' :
                      species.status === 'Vulnerable' ? 'bg-yellow-500/90 text-white' :
                      species.status === 'Near Threatened' ? 'bg-amber-400/90 text-gray-900' :
                      'bg-green-500/90 text-white'
                    }`}>
                      {species.status}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                    {species.name}
                  </h3>
                  <p className="text-xs italic text-[var(--text-muted)] mb-2">{species.scientific}</p>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-primary)] font-medium mb-2">
                    <MapPin className="w-3 h-3" />
                    {species.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-3">
                    <Calendar className="w-3 h-3" />
                    {species.bestViewing}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {species.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── NATIONAL PARKS & RESERVES ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Mountain className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              National Parks &amp; Reserves
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s network of protected areas safeguards ecosystems from Atlantic wetlands to
              Saharan desert, high mountain peaks to Mediterranean cliffs.
            </p>
          </div>

          <div className="space-y-6">
            {nationalParks.map((park, index) => (
              <div key={park.name} className={`card-moroccan overflow-hidden flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/3 p-6 bg-[var(--surface-muted)] flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-2">
                    <TreePine className="w-3.5 h-3.5" />
                    {park.region}
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {park.name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      Est. {park.established}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      {park.area}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <Compass className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      {park.bestFor}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    {park.description}
                  </p>
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)] mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1">
                      <Star className="w-3 h-3" /> Key Highlights
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{park.highlights}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {park.keySpecies.map((sp) => (
                      <span key={sp} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-primary)]/5 text-xs text-[var(--color-primary)] font-medium">
                        <Bug className="w-3 h-3" />
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── BIRDWATCHING GUIDE ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
              <Bird className="w-4 h-4" />
              480+ Species Recorded
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Birdwatching Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is one of the top birdwatching destinations in the Western Palearctic, with over
              480 species recorded. Its position on the East Atlantic Flyway makes it a critical
              migration corridor every spring and autumn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {birdwatchingSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Binoculars className="w-4 h-4 text-[var(--color-primary)]" />
                    {spot.name}
                  </h3>
                  <span className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-2 py-0.5 rounded-full shrink-0">
                    {spot.species} species
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {spot.highlight}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                    <Calendar className="w-3 h-3" />
                    Best: {spot.bestSeason}
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    spot.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {spot.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Seasonal Migration Guide */}
          <div className="card-moroccan p-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
              Seasonal Migration Guide
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              Morocco&apos;s position between Europe and Africa makes it one of the world&apos;s great migration
              bottlenecks. The Strait of Gibraltar is just 14 km wide, funneling billions of birds through
              a narrow corridor twice each year.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { season: 'Autumn (Sep-Nov)', desc: 'Peak migration. Millions of raptors, storks, and passerines cross the Strait of Gibraltar. Best time for Tangier and northern sites. Up to 300,000 honey buzzards in a single day.', icon: <Leaf className="w-3.5 h-3.5" /> },
                { season: 'Winter (Dec-Feb)', desc: 'Wintering waterbirds fill lagoons and wetlands. Flamingos, spoonbills, and ducks at their peak numbers. Excellent at Merja Zerga and Oualidia.', icon: <Thermometer className="w-3.5 h-3.5" /> },
                { season: 'Spring (Mar-May)', desc: 'Return migration plus breeding season. Songbirds in full voice, Atlas Mountain species active. Wildflowers attract insects and birds.', icon: <Sun className="w-3.5 h-3.5" /> },
                { season: 'Summer (Jun-Aug)', desc: 'Breeding specialists: Eleonora\'s falcon at Essaouira, desert species active at dawn/dusk. Quieter but rewarding for specialists.', icon: <Sunrise className="w-3.5 h-3.5" /> },
              ].map((s) => (
                <div key={s.season} className="p-4 rounded-lg bg-[var(--surface-muted)]">
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[var(--color-primary)] mb-2">
                    {s.icon}
                    {s.season}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── MARINE LIFE ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Waves className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Marine Wildlife
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Morocco&apos;s Atlantic and Mediterranean coasts support rich marine ecosystems with
              whales, dolphins, sea turtles, and the world&apos;s rarest seal.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Whale Watching (Strait of Gibraltar & Dakhla)',
                icon: Eye,
                details: 'The Strait of Gibraltar is one of the best whale-watching locations in Europe and Africa. Fin whales, sperm whales, orcas, and pilot whales are regularly seen from April to October. Dakhla\'s deep Atlantic waters also attract humpback whales during migration. Several operators run ethical, small-group whale watching tours from Tarifa (Spain) and Tangier. Orca sightings peak in July and August when they follow tuna through the strait.',
                season: 'April - October peak season',
              },
              {
                title: 'Dolphins of Morocco',
                icon: Fish,
                details: 'Common dolphins, bottlenose dolphins, and striped dolphins are frequently spotted along both coasts. The Strait of Gibraltar has one of the highest dolphin densities in the world. Off Dakhla, large pods of 50-100 dolphins are not uncommon. Even from the Essaouira ramparts, dolphins can sometimes be spotted feeding offshore. Risso\'s dolphins inhabit deeper waters and are occasionally seen on offshore boat trips.',
                season: 'Year-round, best spring and summer',
              },
              {
                title: 'Snorkeling & Diving Encounters',
                icon: Compass,
                details: 'The Mediterranean coast offers the best underwater visibility, particularly around Al Hoceima National Park and the Perejil Islands. The Atlantic coast near Dakhla has emerging dive sites with rich marine life. The waters around the Mogador Islands (Essaouira) offer snorkeling with diverse fish species and occasional turtle encounters. Grouper, moray eels, octopus, and nudibranchs are common sightings.',
                season: 'June - September for best visibility',
              },
              {
                title: 'Monk Seal Conservation',
                icon: Shield,
                details: 'The Mediterranean monk seal colony at Cap Blanc (Morocco/Mauritania border) is the world\'s largest, with about 300 individuals. While direct visits are restricted, the conservation story is remarkable. The species was once found throughout the Mediterranean but was hunted to near extinction. Morocco and Mauritania\'s joint protection efforts represent one of marine conservation\'s great success stories.',
                season: 'Restricted access; research permits only',
              },
              {
                title: 'Coastal Seabirds',
                icon: Bird,
                details: 'Morocco\'s coastline hosts significant seabird colonies. Cory\'s shearwaters breed on offshore islands and can be seen from Essaouira. Audouin\'s gulls nest along the Mediterranean coast, while the Atlantic cliffs south of Agadir host important gannet and cormorant colonies. Pelagic boat trips from Dakhla and Agadir can produce storm-petrels, skuas, and occasionally albatrosses.',
                season: 'Spring and autumn migrations, summer breeding',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                  <p className="text-xs text-[var(--color-primary)] font-medium mb-2 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.season}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── BEST SEASONS FOR WILDLIFE ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Seasons for Wildlife Viewing
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s diverse climates mean there is always something to see, but each season
              brings its own highlights and optimal regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seasonalCalendar.map((entry) => (
              <div key={entry.season} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {entry.season === 'Winter' && <Thermometer className="w-5 h-5" />}
                    {entry.season === 'Spring' && <Sun className="w-5 h-5" />}
                    {entry.season === 'Summer' && <Sunrise className="w-5 h-5" />}
                    {entry.season === 'Autumn' && <Leaf className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {entry.season}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">{entry.months}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {entry.wildlife}
                </p>
                <div className="space-y-2 pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                    <span><strong>Best regions:</strong> {entry.regions}</span>
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0 text-emerald-600 mt-0.5" />
                    <span>{entry.conditions}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── CONSERVATION EFFORTS ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 mb-4">
              <Shield className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Endangered Species Conservation
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is making significant strides in wildlife conservation. These are the key
              species recovery programs making a difference.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto mb-12">
            {conservationProjects.map((project) => (
              <div key={project.species} className="card-moroccan overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {project.species}
                    </h3>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold w-fit ${
                      project.status === 'Critically Endangered' ? 'bg-red-500/10 text-red-600' :
                      project.status === 'Endangered' || project.status === 'Endangered (Ecosystem)' ? 'bg-orange-500/10 text-orange-600' :
                      'bg-yellow-500/10 text-yellow-700'
                    }`}>
                      <AlertTriangle className="w-3 h-3" />
                      {project.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-3 rounded-lg bg-red-50">
                      <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Threats
                      </p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{project.threat}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50">
                      <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Shield className="w-3 h-3" /> Conservation Action
                      </p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{project.action}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-50">
                      <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Progress
                      </p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{project.progress}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-3 flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {project.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* How You Can Help */}
          <div className="card-moroccan p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-emerald-600" />
              How You Can Help
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Choose ecotourism operators who support local conservation',
                'Never feed or approach wild Barbary macaques',
                'Report illegal wildlife trade to local authorities',
                'Stay on marked trails in national parks',
                'Support local community-based tourism initiatives',
                'Avoid single-use plastics near coastal and wetland habitats',
                'Hire local naturalist guides for wildlife excursions',
                'Share wildlife sightings with conservation organizations',
                'Donate to GREPOM or Barbary Macaque Conservation',
                'Respect buffer zones around nesting seabird colonies',
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[var(--text-secondary)]">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── SAFARI & NATURE TOURS ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Safari &amp; Nature Tours
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Recommended wildlife experiences with expert naturalist guides, from half-day excursions
              to multi-day expeditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariTours.map((tour) => (
              <div key={tour.name} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {tour.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-grow">
                  {tour.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-primary)]">
                  <div className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                    <Clock className="w-3.5 h-3.5" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[var(--color-primary)]">
                    <DollarSign className="w-3.5 h-3.5" />
                    {tour.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Tips */}
          <div className="card-moroccan p-6 mt-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tour Booking Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { tip: 'Book specialist guides', detail: 'For birding and wildlife, a knowledgeable local guide makes an enormous difference. General tour guides rarely know the specific locations and behaviors needed for wildlife encounters.' },
                { tip: 'Bring proper optics', detail: 'Binoculars are essential for all wildlife viewing. A spotting scope is ideal for birdwatching at lagoons. Many specialist tour operators provide optics, but confirm in advance.' },
                { tip: 'Start at dawn', detail: 'Wildlife is most active in the first two hours after sunrise. Insist on early starts, even if your hotel breakfast is not served until later. A thermos and snack will serve you better than sleeping in.' },
                { tip: 'Respect the wildlife', detail: 'Maintain distances recommended by your guide. Never attempt to feed wild animals, even habituated macaques. Flash photography disturbs nocturnal species and nesting birds.' },
              ].map((item) => (
                <div key={item.tip} className="p-4 rounded-lg bg-[var(--surface-muted)]">
                  <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">{item.tip}</h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── WILDLIFE PHOTOGRAPHY TIPS ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Wildlife Photography Tips
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Practical advice for capturing Morocco&apos;s wildlife, whether you are shooting with
              a smartphone or a professional DSLR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photoTips.map((item, index) => (
              <div key={item.tip} className="card-moroccan p-5">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0 font-bold text-sm font-[family-name:var(--font-display)]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2 flex items-center gap-2">
                      <Aperture className="w-4 h-4 text-[var(--color-primary)]" />
                      {item.tip}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                      {item.detail}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                      <Focus className="w-3 h-3" />
                      Gear: {item.gear}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Essential Gear Checklist */}
          <div className="card-moroccan p-6 mt-8">
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Camera className="w-5 h-5 text-[var(--color-primary)]" />
              Essential Gear Checklist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Optics</h4>
                <ul className="space-y-1">
                  {['Binoculars (8x42 or 10x42)', 'Spotting scope (for birding)', '200-400mm telephoto lens', 'Wide-angle for landscapes'].map((item) => (
                    <li key={item} className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-[var(--color-primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Protection</h4>
                <ul className="space-y-1">
                  {['Sun hat and sunscreen', 'Dust-proof camera bag', 'Lens cleaning kit', 'Rain cover for camera'].map((item) => (
                    <li key={item} className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-[var(--color-primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Essentials</h4>
                <ul className="space-y-1">
                  {['Headlamp (red filter for night)', 'Field guide books', 'Notebook and pencil', 'Extra batteries and memory cards'].map((item) => (
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

      {/* ──────────────────────────── CTA SECTION ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#1A1814] text-white moroccan-pattern-dark">
        <div className="container-morocco text-center max-w-3xl">
          <TreePine className="w-10 h-10 text-[#C4960C] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Explore Morocco&apos;s Natural Wonders
          </h2>
          <p className="text-lg text-white/80 mb-8">
            From endangered species to ancient forests, Morocco&apos;s natural heritage is as
            extraordinary as its cultural one. Start planning your nature-focused trip today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="btn-primary">
              Browse Nature Tours <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/gardens" className="btn-ghost !text-white !border-white/30 hover:!bg-white/10">
              Moroccan Gardens <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

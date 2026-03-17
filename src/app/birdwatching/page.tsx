import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  ChevronRight,
  Home,
  Camera,
  Star,
  Compass,
  Globe,
  Shield,
  Sun,
  Calendar,
  Binoculars,
  Bird,
  TreeDeciduous,
  Mountain,
  Waves,
  Eye,
  BookOpen,
  Info,
  Clock,
  Heart,
  Navigation,
  Sunrise,
  Wind,
  Leaf,
  Telescope,
  Map,
  CloudSun,
  Feather,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ===================================================================
   SEO METADATA
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

export const metadata: Metadata = {
  title:
    'Birdwatching in Morocco 2025-2026 | Top Birding Sites, Species Guide & Migration Routes',
  description:
    'Comprehensive birdwatching guide to Morocco. 500+ species across Saharan, Mediterranean & Atlantic flyways. Northern Bald Ibis colonies, Merja Zerga flamingos, High Atlas raptors, desert specialists. Best birding sites, seasonal calendar, tour operators, equipment tips & itineraries.',
  keywords: [
    'birdwatching Morocco',
    'birding Morocco',
    'Morocco bird species',
    'Northern Bald Ibis Morocco',
    'Souss-Massa National Park birds',
    'Merja Zerga birdwatching',
    'Morocco birding tour',
    'Morocco migration flyway',
    'Oualidia lagoon birds',
    'High Atlas birds',
    'Morocco raptor watching',
    'Sahara desert birds Morocco',
    'Morocco flamingos',
    'Lammergeier Morocco',
    'Morocco birding itinerary',
    'Tagdilt Track birding',
    'Morocco ornithology',
    'bird photography Morocco',
    'Morocco birding guide',
    'Morocco endemic birds',
  ],
  openGraph: {
    title: 'Birdwatching in Morocco - Complete Birding Guide 2025-2026',
    description:
      'Discover 500+ bird species across Morocco. From critically endangered Northern Bald Ibis to Saharan desert specialists. Complete guide with top sites, species, seasons, and itineraries.',
    url: `${BASE_URL}/birdwatching`,
    images: [
      {
        url: '/images/hero-birdwatching.webp',
        width: 1200,
        height: 630,
        alt: 'Birdwatching in Morocco - flamingos at Merja Zerga lagoon with Atlantic coast backdrop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birdwatching in Morocco | 500+ Species Guide',
    description:
      'Northern Bald Ibis, flamingos, Lammergeier, desert specialists. Complete Morocco birding guide with top sites, species, and itineraries.',
  },
  alternates: { canonical: `${BASE_URL}/birdwatching` },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Birdwatching in Morocco: Complete Guide to 500+ Species, Top Birding Sites & Migration Routes',
  description:
    'Comprehensive guide to birdwatching in Morocco covering top birding sites, key species, seasonal migration calendar, tour operators, equipment, conservation, and multi-day itineraries.',
  url: `${BASE_URL}/birdwatching`,
  image: `${BASE_URL}/images/hero-birdwatching.webp`,
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
  datePublished: '2025-03-16',
  dateModified: '2026-03-16',
  mainEntityOfPage: `${BASE_URL}/birdwatching`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
};

const faqItems = [
  {
    question: 'What is the best time of year for birdwatching in Morocco?',
    answer:
      'Spring migration (March to May) is widely considered the best period, when millions of birds pass through Morocco heading north from Africa to Europe. You can see resident breeders, passage migrants, and lingering winter visitors all at once. Autumn migration (September to November) is also excellent. Winter (November to February) is ideal for wintering waterbirds, raptors, and ducks, while summer offers breeding endemics and sub-Saharan overshoots.',
  },
  {
    question: 'How many bird species can be seen in Morocco?',
    answer:
      'Morocco has recorded over 500 bird species, making it one of the richest birding destinations in the Western Palearctic. This includes around 300 regular breeding species, numerous passage migrants from three major flyways (East Atlantic, Mediterranean, and Saharan), plus winter visitors and rarities. A well-planned two-week trip during spring migration can yield 200-250 species.',
  },
  {
    question:
      'Where can I see the Northern Bald Ibis in Morocco?',
    answer:
      'The Northern Bald Ibis (Geronticus eremita) is best seen at Souss-Massa National Park, south of Agadir, which hosts the largest wild colony with around 700 individuals globally. The birds nest on coastal cliffs and feed in the semi-arid grasslands of the park. Oued Massa within the park is particularly reliable. The Tamri area north of Agadir also has a smaller colony. Visit between March and July for breeding activity.',
  },
  {
    question: 'Do I need a guide for birdwatching in Morocco?',
    answer:
      'While experienced birders can find many species independently, a local birding guide dramatically increases your chances, especially for locating skulking desert species, navigating remote sites like Tagdilt Track, and identifying calls. Guides know the precise nesting locations, seasonal movements, and access points. For your first trip, a guided tour or hiring a local bird guide is highly recommended. Expect to pay 500-1,000 MAD per day for a knowledgeable local guide.',
  },
  {
    question: 'What equipment do I need for birding in Morocco?',
    answer:
      'Essential gear includes binoculars (8x42 or 10x42 recommended), a spotting scope with 20-60x zoom for waterbirds and distant raptors, a field guide (Collins Bird Guide covers all species), sun protection (hat, sunscreen, sunglasses), and comfortable walking shoes. For photography, a 400mm+ telephoto lens is ideal. Bring layered clothing as temperatures vary greatly between coastal wetlands, mountain passes, and desert sites. A dust-proof bag is essential for Saharan sites.',
  },
  {
    question: 'Is Morocco good for bird photography?',
    answer:
      'Morocco is excellent for bird photography. The Northern Bald Ibis at Souss-Massa is remarkably approachable (sometimes within 10 meters), flamingos at Merja Zerga and Oualidia provide stunning pink-on-blue compositions, and the clear desert light at sites like Tagdilt Track and Merzouga creates exceptional conditions. Many species are less wary than their European counterparts. Golden hour photography at wetland sites is particularly rewarding.',
  },
  {
    question: 'Can I combine birdwatching with other activities in Morocco?',
    answer:
      'Absolutely. Morocco offers unmatched opportunities to combine birding with cultural experiences. You can bird at Merja Zerga in the morning and explore the medina of Moulay Bousselham in the afternoon. The drive between birding sites passes through spectacular landscapes, historic kasbahs, and vibrant souks. Many birders combine Marrakech cultural tours with High Atlas birding, or add a night in a Saharan camp near Merzouga where desert species and star-gazing complement each other perfectly.',
  },
  {
    question:
      'What are the costs of a birdwatching trip to Morocco?',
    answer:
      'Morocco offers excellent value for birding trips. Budget travelers can manage on 400-600 MAD per day (accommodation, food, local transport). A two-week guided birding tour typically costs 15,000-30,000 MAD ($1,500-3,000) including accommodation, transport, and guide fees. Independent birders with a rental car spend around 800-1,200 MAD per day. Park entry fees are minimal (20-70 MAD). The biggest expense is usually internal transport between widely spaced birding sites.',
  },
  {
    question: 'Are there any endemic bird species in Morocco?',
    answer:
      'Morocco does not have true country endemics, but it hosts several near-endemics and North African specialties found nowhere else in the Western Palearctic. These include Levaillant\'s Woodpecker, Moussier\'s Redstart, Tristram\'s Warbler, and the Atlas Flycatcher (sometimes split as a Moroccan endemic). The Northern Bald Ibis, while also found in a tiny reintroduced population in Syria, has its only self-sustaining wild population in Morocco.',
  },
  {
    question:
      'What birding field guide should I use for Morocco?',
    answer:
      'The Collins Bird Guide (Svensson et al.) is the essential field guide covering all species found in Morocco. For a Morocco-specific reference, "Where to Watch Birds in Morocco" by Patrick and Fedora Bergier is invaluable for site information. The Merlin Bird ID app by Cornell Lab is excellent for call identification in the field. eBird hotspot data for Morocco is increasingly comprehensive and helps with trip planning and recent sightings.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

/* ===================================================================
   DATA: TOP BIRDING SITES
   =================================================================== */

const birdingSites = [
  {
    name: 'Souss-Massa National Park',
    location: 'South of Agadir, Atlantic coast',
    coordinates: '30.0167 N, 9.7333 W',
    keySpecies: [
      'Northern Bald Ibis (critically endangered)',
      'Marbled Duck',
      'Greater Flamingo',
      'Audouin\'s Gull',
      'Moussier\'s Redstart',
      'Black-crowned Tchagra',
      'Stone Curlew',
    ],
    bestSeason: 'Year-round; breeding ibis March-July',
    access:
      'Drive south from Agadir (65 km) on the N1, turn west toward the coast at the park entrance. 4WD helpful but not essential. Park entry fee 20 MAD.',
    tip: 'Arrive at dawn for the best ibis viewing as they leave cliff roosts to feed in the steppe. The Oued Massa estuary is a must-visit within the park for waders and waterbirds.',
    habitat: 'Coastal cliffs, steppe, river estuary, argan woodland',
    speciesCount: '300+',
  },
  {
    name: 'Merja Zerga (Moulay Bousselham)',
    location: 'Atlantic coast, Kenitra Province',
    coordinates: '34.8667 N, 6.3167 W',
    keySpecies: [
      'Greater Flamingo',
      'Eurasian Spoonbill',
      'Slender-billed Gull',
      'Marsh Harrier',
      'Osprey',
      'Greater Spotted Eagle (winter)',
      'Marbled Duck',
    ],
    bestSeason: 'November-March for wintering birds; spring migration excellent',
    access:
      'Drive from Rabat (150 km north on N1/A1). Hire a local boatman at Moulay Bousselham harbor for a lagoon tour (150-250 MAD per boat). Best views from the eastern shore.',
    tip: 'Hire a boat for the full lagoon circuit - boatmen know where the flamingos, spoonbills, and raptors concentrate. The Ramsar-designated wetland hosts 200+ species. Check the saltpans southeast of town for waders.',
    habitat: 'Tidal lagoon, saltmarsh, sand dunes, agricultural land',
    speciesCount: '200+',
  },
  {
    name: 'Oualidia Lagoon',
    location: 'Atlantic coast, between El Jadida and Safi',
    coordinates: '32.7333 N, 9.0333 W',
    keySpecies: [
      'Greater Flamingo',
      'Kentish Plover',
      'Sandwich Tern',
      'Little Tern',
      'Audouin\'s Gull',
      'Blue Rock Thrush',
      'Little Egret',
    ],
    bestSeason: 'Year-round; peak waders August-April',
    access:
      'Easy access from the coastal road. The lagoon is visible from the village. Walk along the eastern shore for best birding. Combine with the famous oyster farms.',
    tip: 'The sheltered lagoon is a reliable flamingo site year-round. Scan the rocky headlands for Blue Rock Thrush and Barbary Falcon. The oyster restaurants here are among Morocco\'s best, making this a perfect birding-and-lunch stop.',
    habitat: 'Sheltered lagoon, rocky coast, saltpans, sand flats',
    speciesCount: '150+',
  },
  {
    name: 'Dayet Aoua',
    location: 'Middle Atlas, near Ifrane',
    coordinates: '33.7000 N, 5.0500 W',
    keySpecies: [
      'Crested Coot',
      'Marbled Duck',
      'Red-knobbed Coot',
      'Levaillant\'s Woodpecker',
      'Atlas Flycatcher',
      'Hawfinch',
      'Firecrest',
    ],
    bestSeason: 'April-June for breeding; year-round for forest birds',
    access:
      'Located 15 km south of Ifrane on the road to Azrou. The lake is roadside with good viewing from the eastern bank. Cedar forests begin just south of the lake.',
    tip: 'Water levels fluctuate dramatically with rainfall - the lake can dry out completely in drought years. When full, it is one of Morocco\'s best sites for Crested Coot and Marbled Duck. Combine with cedar forest birding at nearby Cèdre Gouraud.',
    habitat: 'Freshwater lake, cedar forest, scrubland, agricultural margins',
    speciesCount: '120+',
  },
  {
    name: 'Oued Massa',
    location: 'Within Souss-Massa National Park',
    coordinates: '30.0500 N, 9.6667 W',
    keySpecies: [
      'Northern Bald Ibis',
      'Brown-throated Martin',
      'Black-crowned Tchagra',
      'Barbary Partridge',
      'Laughing Dove',
      'Rufous-tailed Scrub Robin',
      'Sardinian Warbler',
    ],
    bestSeason: 'Year-round; spring and autumn migration peaks',
    access:
      'Enter from the village of Massa. A track follows the river to the estuary. Walking is the best way to cover the area. Allow 3-4 hours for a thorough visit.',
    tip: 'The riverbed walk from the bridge to the sea is one of Morocco\'s classic birding routes. Northern Bald Ibis feed along the river banks most mornings. Check tamarisk thickets for Black-crowned Tchagra and warblers. The estuary at the coast is excellent for waders.',
    habitat: 'River valley, tamarisk scrub, estuary, semi-arid steppe',
    speciesCount: '180+',
  },
  {
    name: 'Tagdilt Track (Boumalne Dades)',
    location: 'East of Boumalne Dades, Draa-Tafilalet',
    coordinates: '31.3667 N, 5.9667 W',
    keySpecies: [
      'Cream-colored Courser',
      'Thick-billed Lark',
      'Trumpeter Finch',
      'Desert Wheatear',
      'Red-rumped Wheatear',
      'Temminck\'s Lark',
      'Hoopoe Lark',
    ],
    bestSeason: 'October-April (cooler); spring for passage migrants',
    access:
      'The track starts just east of Boumalne Dades, heading south across the stony hamada. A 4WD or high-clearance vehicle is essential. The track is about 30 km round trip. Hire a local guide in Boumalne for precise species locations.',
    tip: 'This is Morocco\'s premier desert birding site. Drive slowly and scan the stony plains methodically. Cream-colored Coursers are masters of camouflage on the pale ground. Early morning is best before heat haze builds. Carry plenty of water and fuel.',
    habitat: 'Stony desert (hamada), semi-arid scrub, dry wadis',
    speciesCount: '80+',
  },
  {
    name: 'Oukaimeden & Toubkal (High Atlas)',
    location: 'High Atlas, south of Marrakech',
    coordinates: '31.2000 N, 7.8667 W',
    keySpecies: [
      'Lammergeier (Bearded Vulture)',
      'Alpine Accentor',
      'Crimson-winged Finch',
      'Shore Lark',
      'Alpine Chough',
      'Red-billed Chough',
      'Rock Bunting',
    ],
    bestSeason: 'May-October for high altitude species; winter for Lammergeier',
    access:
      'Oukaimeden is 75 km south of Marrakech via the Ourika Valley road. Paved road to the ski station at 2,650m. Toubkal requires trekking from Imlil. Local guides available.',
    tip: 'Oukaimeden ski station is the easiest place in Morocco to see Crimson-winged Finch and Alpine Accentor. Scan the cliff faces for Lammergeier soaring on thermals, especially mid-morning. The endemic Moroccan race of Shore Lark (atlas) breeds above 3,000m. Combine with Toubkal trekking for the ultimate mountain birding experience.',
    habitat: 'Alpine meadow, rocky scree, cliff faces, high altitude scrub',
    speciesCount: '70+',
  },
  {
    name: 'Ifrane National Park',
    location: 'Middle Atlas',
    coordinates: '33.5333 N, 5.1167 W',
    keySpecies: [
      'Levaillant\'s Woodpecker',
      'Atlas Flycatcher',
      'Coal Tit (atlas subspecies)',
      'Firecrest',
      'Short-toed Treecreeper',
      'Long-eared Owl',
      'Booted Eagle',
    ],
    bestSeason: 'April-June for breeding; year-round for residents',
    access:
      'Ifrane is 60 km south of Fes via the N8. The national park and Cèdre Gouraud (famous ancient cedar) are easily accessible by car. Walking trails through the forest.',
    tip: 'The cedar forests around Cèdre Gouraud are the best spot for Levaillant\'s Woodpecker - listen for its distinctive drumming in early morning. The area is also home to Barbary Macaques, which can help locate mixed bird flocks. Atlas Flycatcher breeds in the park from April to July.',
    habitat: 'Cedar forest, oak woodland, freshwater streams, meadows',
    speciesCount: '120+',
  },
  {
    name: 'Khnifiss Lagoon',
    location: 'Southern Atlantic coast, Tan-Tan Province',
    coordinates: '28.0333 N, 12.2833 W',
    keySpecies: [
      'Greater Flamingo',
      'Western Reef Heron',
      'Cream-colored Courser',
      'Bar-tailed Lark',
      'Desert Sparrow',
      'Brown-necked Raven',
      'Osprey',
    ],
    bestSeason: 'November-March for wintering birds; year-round for residents',
    access:
      'Remote location between Tan-Tan and Tarfaya on the N1. 4WD essential for access tracks to the lagoon. Bring all supplies including fuel and water. Allow a full day.',
    tip: 'One of Morocco\'s most remote and rewarding birding sites. The lagoon is a Ramsar site hosting thousands of flamingos and waders. The surrounding desert holds Bar-tailed Lark and Desert Sparrow. Combine with the nearby Saharan coastal habitats for a unique desert-meets-ocean birding experience.',
    habitat: 'Coastal lagoon, desert steppe, sand dunes, rocky shore',
    speciesCount: '160+',
  },
  {
    name: 'Merzouga Lake (Dayet Srij)',
    location: 'Erg Chebbi, southeastern Morocco',
    coordinates: '31.0833 N, 4.0167 W',
    keySpecies: [
      'Greater Flamingo (when flooded)',
      'Fulvous Babbler',
      'Desert Sparrow',
      'Blue-cheeked Bee-eater',
      'Pharaoh Eagle-Owl',
      'African Desert Warbler',
      'Spotted Sandgrouse',
    ],
    bestSeason: 'March-May (if winter rains have filled the lake); year-round for desert species',
    access:
      'Drive to Merzouga village (35 km south of Erfoud). The seasonal lake forms west of the Erg Chebbi dunes after good rains. 4WD helpful. Many desert lodges offer birding excursions.',
    tip: 'When winter rains fill Dayet Srij, it creates the surreal sight of flamingos against Saharan sand dunes - one of Morocco\'s most iconic birding images. Even when dry, the desert around Merzouga holds Pharaoh Eagle-Owl (check rocky outcrops at dusk), Fulvous Babbler, and Desert Sparrow. Ask locally about water levels before visiting.',
    habitat: 'Seasonal desert lake, sand dunes, rocky desert, oasis palms',
    speciesCount: '100+',
  },
  {
    name: 'Middle Atlas Cedar Forests',
    location: 'Between Azrou and Midelt',
    coordinates: '33.3500 N, 5.1000 W',
    keySpecies: [
      'Levaillant\'s Woodpecker',
      'Atlas Flycatcher',
      'African Blue Tit',
      'Moussier\'s Redstart',
      'Great Spotted Woodpecker (mauritanus)',
      'Bonelli\'s Eagle',
      'Egyptian Vulture',
    ],
    bestSeason: 'April-June for breeding birds; autumn for passage',
    access:
      'The N13 between Azrou and Midelt passes through extensive cedar forests. Several stopping points along the road. The forest near Ain Leuh is particularly good.',
    tip: 'The extensive cedar forests of the Middle Atlas are Morocco\'s richest woodland birding habitat. Drive slowly along forest roads, stopping frequently to listen. Mixed flocks in spring can yield Levaillant\'s Woodpecker, Atlas Flycatcher, Firecrest, and Short-toed Treecreeper in a single encounter. The Barbary Macaques here are accustomed to visitors.',
    habitat: 'Atlas cedar forest, oak woodland, mountain streams, rocky outcrops',
    speciesCount: '130+',
  },
];

/* ===================================================================
   DATA: KEY SPECIES SPOTLIGHT
   =================================================================== */

const keySpecies = [
  {
    name: 'Northern Bald Ibis',
    scientificName: 'Geronticus eremita',
    status: 'Critically Endangered',
    statusColor: 'bg-red-100 text-red-800',
    description:
      'Morocco\'s signature bird and one of the world\'s rarest. This glossy black ibis with its distinctive bald red head and long curved bill was once found across Europe, the Middle East, and North Africa. Today, only around 700 survive in the wild, virtually all in Morocco\'s Souss-Massa region. They nest colonially on coastal cliffs and feed in semi-arid steppe, probing for insects and lizards. Morocco\'s conservation efforts have been a rare success story, with numbers slowly increasing.',
    whereToSee: 'Souss-Massa National Park, Oued Massa, Tamri',
    bestTime: 'March-July (breeding); year-round at roost sites',
  },
  {
    name: 'Greater Flamingo',
    scientificName: 'Phoenicopterus roseus',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-800',
    description:
      'Thousands of Greater Flamingos grace Morocco\'s wetlands and lagoons year-round. These iconic pink birds are found at every major coastal wetland from Merja Zerga to Khnifiss, and even appear at desert lake Dayet Srij near Merzouga after winter rains - creating one of Morocco\'s most surreal wildlife spectacles. Morocco is a critical non-breeding site for Western Mediterranean and West African populations.',
    whereToSee:
      'Merja Zerga, Oualidia, Khnifiss Lagoon, Merzouga (seasonal)',
    bestTime: 'Year-round; largest flocks November-March',
  },
  {
    name: 'Moussier\'s Redstart',
    scientificName: 'Phoenicurus moussieri',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-800',
    description:
      'A stunning North African near-endemic and one of the most sought-after species for visiting birders. The male is unmistakable with his black head, white wing patch, and brilliant orange-red underparts. Found in scrubby hillsides, forest edges, and rocky terrain across Morocco from sea level to 3,000m. Relatively confiding and approachable, making it a favorite for photographers. Found only in Morocco, Algeria, and Tunisia.',
    whereToSee:
      'Widespread; reliable at Oukaimeden, Souss-Massa, Middle Atlas',
    bestTime: 'Year-round resident; most vocal February-May',
  },
  {
    name: 'Tristram\'s Warbler',
    scientificName: 'Curruca deserticola',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-800',
    description:
      'A North African specialty found in arid scrubland with dwarf palms and thorny bushes. This small, active warbler has a distinctive rufous-edged wing and pale eye-ring. Named after the Reverend Henry Baker Tristram, it is one of the key target species for birders visiting Morocco. Often found in the same habitat as Spectacled Warbler and Subalpine Warbler, requiring careful identification.',
    whereToSee: 'Oukaimeden road, Souss-Massa, Anti-Atlas scrubland',
    bestTime: 'Year-round; easiest to find when singing February-April',
  },
  {
    name: 'Levaillant\'s Woodpecker',
    scientificName: 'Picus vaillantii',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-800',
    description:
      'The only green woodpecker in North Africa and a much-wanted species for Western Palearctic listers. This striking bird with its green upperparts, red crown, and dark face mask is the North African counterpart of the European Green Woodpecker. Found in cedar, oak, and pine forests of the Atlas Mountains, it drums loudly and has a distinctive laughing call that echoes through the forests.',
    whereToSee: 'Ifrane National Park, Cèdre Gouraud, Middle Atlas forests',
    bestTime: 'Year-round; most vocal and visible March-May',
  },
  {
    name: 'Eleonora\'s Falcon',
    scientificName: 'Falco eleonorae',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-800',
    description:
      'This elegant, long-winged falcon breeds late in the year to take advantage of autumn bird migration, feeding its chicks on exhausted migrants crossing the Mediterranean. Morocco\'s Atlantic islands and cliff coasts host breeding colonies. Both dark and light morphs occur. Named after Eleonora d\'Arborea, a Sardinian judge who enacted early bird protection laws in the 14th century.',
    whereToSee: 'Essaouira (Mogador Island), Atlantic coast cliffs',
    bestTime: 'July-October (breeding season)',
  },
  {
    name: 'Barbary Falcon',
    scientificName: 'Falco pelegrinoides',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-800',
    description:
      'Sometimes treated as a subspecies of Peregrine Falcon, this desert-adapted raptor is paler and more rufous-naped than its cosmopolitan relative. It hunts over desert and semi-arid terrain, taking prey in spectacular high-speed stoops. Morocco is one of the most accessible places in the world to observe this bird, particularly around gorges and rocky outcrops in the south.',
    whereToSee: 'Todra Gorge, Dades Gorge, Oualidia cliffs, southern gorges',
    bestTime: 'Year-round; nesting February-May',
  },
  {
    name: 'Cream-colored Courser',
    scientificName: 'Cursorius cursor',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-800',
    description:
      'A true desert specialist and master of camouflage on stony hamada plains. This elegant, sandy-colored bird with its distinctive black-and-white eye stripe runs swiftly across open ground, pausing to pick insects. Its cryptic plumage makes it nearly invisible against the desert substrate. The Tagdilt Track near Boumalne Dades is the classic site for this species in Morocco.',
    whereToSee: 'Tagdilt Track, southern plains, Merzouga area',
    bestTime: 'Year-round; easiest October-April when cooler',
  },
  {
    name: 'Desert Sparrow',
    scientificName: 'Passer simplex',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-800',
    description:
      'A pale, ghostly sparrow of the true Sahara - quite unlike the familiar House Sparrow. Males are striking with their black bib, pale sandy plumage, and white wing bars. Found in small groups around desert oases, palm groves, and desert settlements. In Morocco, the best sites are in the deep south around Merzouga, Zagora, and the oasis towns of the Draa Valley.',
    whereToSee: 'Merzouga, Rissani, Zagora, Draa Valley oases',
    bestTime: 'Year-round resident',
  },
  {
    name: 'Thick-billed Lark',
    scientificName: 'Ramphocoris clotbey',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-800',
    description:
      'One of the most impressive larks in the world, with a massive, heavy bill and boldly spotted breast. This North African and Middle Eastern specialty is found on stony desert plains in Morocco\'s southeast. Despite its size, it can be surprisingly difficult to spot on the ground. When flushed, its flight is heavy and direct with conspicuous white outer tail feathers.',
    whereToSee: 'Tagdilt Track, Midelt plain, southeastern hamada',
    bestTime: 'October-April (cooler months); sings in spring',
  },
  {
    name: 'Lammergeier (Bearded Vulture)',
    scientificName: 'Gypaetus barbatus',
    status: 'Near Threatened',
    statusColor: 'bg-yellow-100 text-yellow-800',
    description:
      'One of the world\'s most spectacular raptors with a wingspan of nearly 3 meters. The adult is unmistakable with its orange breast (stained from iron-rich mud baths), diamond-shaped tail, and the distinctive black "beard" of feathers. Morocco\'s High Atlas population is the last stronghold in North Africa, with perhaps 10-15 breeding pairs. It feeds primarily on bones, dropping them from height to crack them open - hence its alternative name "Bone-breaker."',
    whereToSee: 'Oukaimeden, Toubkal massif, Tichka Pass, Dades Gorge',
    bestTime: 'Year-round; best November-May at nesting sites',
  },
  {
    name: 'Black-crowned Tchagra',
    scientificName: 'Tchagra senegalus',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-800',
    description:
      'A striking bushshrike with a bold black crown, white supercilium, and rich rufous wings. Its beautiful, liquid song is one of the most characteristic sounds of Moroccan scrubland. Despite its striking appearance, this skulking bird can be frustratingly difficult to observe as it moves through dense vegetation. Patient waiting near a singing bird is usually rewarded with good views.',
    whereToSee: 'Souss-Massa, Oued Massa, Agadir region scrubland',
    bestTime: 'Year-round; most vocal and visible March-June',
  },
];

/* ===================================================================
   DATA: SEASONAL CALENDAR
   =================================================================== */

const seasonalCalendar = [
  {
    season: 'Spring (March - May)',
    icon: Leaf,
    highlights: [
      'Peak migration period - millions of birds pass through Morocco heading north',
      'Breeding Northern Bald Ibis active at cliff colonies',
      'Spectacular raptor migration over the Strait of Gibraltar',
      'Wetlands bustling with passage waders, terns, and herons',
      'Wildflowers create stunning birding backdrops',
      'Saharan overshoot migrants possible at coastal sites',
    ],
    topSites: 'All sites excellent; Strait of Gibraltar for raptor passage, wetlands for waders',
    weather: 'Pleasant 18-28 C, occasional rain in north, wildflowers in bloom',
    rating: 5,
  },
  {
    season: 'Summer (June - August)',
    icon: Sun,
    highlights: [
      'Breeding season for resident species in full swing',
      'High Atlas alpine specialists most accessible',
      'Eleonora\'s Falcon arrives at breeding colonies',
      'Early autumn wader passage begins in August',
      'Quieter at most sites - fewer visiting birders',
      'Desert sites extremely hot - focus on mountains and coast',
    ],
    topSites: 'Oukaimeden for alpine birds, Essaouira for Eleonora\'s Falcon, coast for respite',
    weather: 'Hot 30-45 C inland, 22-28 C on coast, dry everywhere',
    rating: 3,
  },
  {
    season: 'Autumn (September - November)',
    icon: Wind,
    highlights: [
      'Southbound migration brings European birds through Morocco',
      'Raptor passage over Gibraltar peaks in September-October',
      'Wetlands fill with arriving winter visitors',
      'Desert sites become accessible again as temperatures drop',
      'Eleonora\'s Falcon feeding young on migrant passerines',
      'First wintering raptors arrive (Greater Spotted Eagle, Hen Harrier)',
    ],
    topSites: 'Gibraltar strait, Merja Zerga, Tagdilt Track, Oualidia',
    weather: 'Warm 20-35 C, cooling through the season, first rains in November',
    rating: 4,
  },
  {
    season: 'Winter (December - February)',
    icon: CloudSun,
    highlights: [
      'Massive concentrations of wintering waterbirds at wetlands',
      'Greater Spotted Eagle and other rare raptors present',
      'Desert birding at its best - cool temperatures, active birds',
      'Flamingo flocks at peak numbers',
      'Lammergeier most visible at nesting cliffs',
      'Jebel Saghro (Anti-Atlas) trekking and birding season',
    ],
    topSites: 'Merja Zerga, Oualidia, Tagdilt Track, Khnifiss, Merzouga',
    weather: 'Cool 8-20 C, rain possible in north, snow in Atlas above 2,000m',
    rating: 4,
  },
];

/* ===================================================================
   DATA: TOUR OPERATORS
   =================================================================== */

const tourOperators = [
  {
    name: 'Moroccan Birding',
    specialty: 'Dedicated Morocco birding tours with expert local guides',
    duration: '7-14 day set itineraries and custom tours',
    price: 'From 15,000 MAD per person (group tours)',
    highlights: [
      'Locally owned and operated',
      'Guides know all key sites intimately',
      'Small groups (max 8)',
      'All habitats covered',
    ],
  },
  {
    name: 'Naturetrek',
    specialty: 'UK-based nature tour company with regular Morocco departures',
    duration: '8-10 day structured tours',
    price: 'From 20,000 MAD per person (inc. flights from UK)',
    highlights: [
      'Expert British and Moroccan co-leaders',
      'Well-established itineraries',
      'Comfortable accommodation',
      'Detailed trip reports published',
    ],
  },
  {
    name: 'Birdquest',
    specialty: 'Premium birding tours for experienced birders',
    duration: '14-day comprehensive Morocco tour',
    price: 'From 35,000 MAD per person',
    highlights: [
      'Maximum species lists',
      'All major habitats',
      'Top international leaders',
      'Trip report tradition since 1981',
    ],
  },
  {
    name: 'Local Freelance Guides',
    specialty: 'Independent Moroccan bird guides for custom trips',
    duration: 'Flexible - hire by the day',
    price: '500-1,000 MAD per day',
    highlights: [
      'Personalized itineraries',
      'Unmatched local knowledge',
      'Flexible scheduling',
      'Support local communities',
    ],
  },
];

/* ===================================================================
   DATA: ITINERARIES
   =================================================================== */

const oneWeekItinerary = [
  {
    day: 'Day 1',
    title: 'Arrive Agadir - Souss-Massa',
    description:
      'Arrive at Agadir airport. Afternoon birding at Oued Souss estuary for flamingos, waders, and gulls. Drive south toward Souss-Massa National Park. Settle into accommodation near the park.',
    keyBirds: 'Greater Flamingo, Audouin\'s Gull, Moussier\'s Redstart',
  },
  {
    day: 'Day 2',
    title: 'Souss-Massa & Oued Massa',
    description:
      'Full day in Souss-Massa National Park. Dawn visit to Northern Bald Ibis cliff colony, then walk the Oued Massa from bridge to estuary. Afternoon scan coastal cliffs and steppe habitats.',
    keyBirds:
      'Northern Bald Ibis, Black-crowned Tchagra, Barbary Partridge, Stone Curlew',
  },
  {
    day: 'Day 3',
    title: 'Drive to Ouarzazate via Tizi n\'Test',
    description:
      'Scenic drive over the High Atlas via Tizi n\'Test pass (2,092m). Birding stops en route for mountain species. Arrive Ouarzazate by late afternoon. Optional visit to Ait Benhaddou kasbah.',
    keyBirds:
      'Bonelli\'s Eagle, Blue Rock Thrush, Black Wheatear, Tristram\'s Warbler',
  },
  {
    day: 'Day 4',
    title: 'Tagdilt Track & Boumalne Dades',
    description:
      'Early morning on the famous Tagdilt Track for desert specialists. Drive slowly across the stony hamada scanning for coursers, larks, and wheatears. Afternoon explore Dades Gorge for cliff-nesting raptors.',
    keyBirds:
      'Cream-colored Courser, Thick-billed Lark, Trumpeter Finch, Barbary Falcon',
  },
  {
    day: 'Day 5',
    title: 'Merzouga & Erg Chebbi',
    description:
      'Drive to Merzouga. Check Dayet Srij for flamingos (seasonal). Explore desert edges for Desert Sparrow and Fulvous Babbler. Dusk scan for Pharaoh Eagle-Owl at rocky outcrops. Overnight desert camp.',
    keyBirds:
      'Desert Sparrow, Fulvous Babbler, Blue-cheeked Bee-eater, Pharaoh Eagle-Owl',
  },
  {
    day: 'Day 6',
    title: 'Drive to Marrakech via Ouarzazate',
    description:
      'Long drive back to Marrakech with birding stops along the way. Cross the High Atlas via Tizi n\'Tichka pass (2,260m) scanning for Lammergeier. Arrive Marrakech evening.',
    keyBirds: 'Lammergeier, Long-legged Buzzard, Egyptian Vulture, Alpine Chough',
  },
  {
    day: 'Day 7',
    title: 'Oukaimeden & Departure',
    description:
      'Early morning drive to Oukaimeden (2,650m) for High Atlas specialties. Search for Crimson-winged Finch, Alpine Accentor, and Shore Lark above the ski station. Return to Marrakech for departure.',
    keyBirds:
      'Crimson-winged Finch, Alpine Accentor, Shore Lark, Red-billed Chough',
  },
];

const twoWeekItinerary = [
  {
    day: 'Days 1-2',
    title: 'Merja Zerga & Moulay Bousselham',
    description:
      'Arrive Casablanca or Rabat. Drive north to Moulay Bousselham. Two full days exploring Merja Zerga lagoon by boat and foot. Scan for wintering raptors, flamingos, spoonbills, and passage migrants.',
    keyBirds: 'Greater Spotted Eagle, Eurasian Spoonbill, Marsh Harrier, Slender-billed Gull',
  },
  {
    day: 'Days 3-4',
    title: 'Middle Atlas: Ifrane & Azrou',
    description:
      'Drive to Ifrane. Cedar forest birding at Cèdre Gouraud and Ifrane National Park. Visit Dayet Aoua lake for waterbirds. Explore oak woodland around Azrou.',
    keyBirds: 'Levaillant\'s Woodpecker, Atlas Flycatcher, Crested Coot, Firecrest',
  },
  {
    day: 'Days 5-6',
    title: 'Oualidia & Atlantic Wetlands',
    description:
      'Drive to the Atlantic coast. Oualidia lagoon for flamingos and waders. Explore the coastal wetlands south toward Safi. Enjoy legendary oysters between birding sessions.',
    keyBirds: 'Greater Flamingo, Kentish Plover, Audouin\'s Gull, Blue Rock Thrush',
  },
  {
    day: 'Day 7',
    title: 'Marrakech & Oukaimeden',
    description:
      'Morning drive to Oukaimeden for High Atlas specialties. Afternoon cultural visit to Marrakech medina and Jemaa el-Fnaa. Rest day for birders needing recovery.',
    keyBirds: 'Crimson-winged Finch, Alpine Accentor, Shore Lark',
  },
  {
    day: 'Days 8-9',
    title: 'Souss-Massa & Agadir Coast',
    description:
      'Drive or fly to Agadir. Two days dedicated to Souss-Massa National Park and Oued Massa. Northern Bald Ibis cliff colony, estuary birding, and argan woodland species.',
    keyBirds: 'Northern Bald Ibis, Black-crowned Tchagra, Brown-throated Martin',
  },
  {
    day: 'Days 10-11',
    title: 'Boumalne Dades & Tagdilt Track',
    description:
      'Cross the Anti-Atlas to Ouarzazate and Boumalne Dades. Full day on Tagdilt Track for desert specialists. Explore Dades and Todra gorges for cliff-nesting raptors and rock-dwelling species.',
    keyBirds: 'Cream-colored Courser, Thick-billed Lark, Trumpeter Finch, Barbary Falcon',
  },
  {
    day: 'Days 12-13',
    title: 'Merzouga & Saharan Edge',
    description:
      'Explore Erg Chebbi and surroundings. Check Dayet Srij lake. Desert oases for Desert Sparrow. Rocky outcrops for Pharaoh Eagle-Owl at dusk. Optional camel trek into the dunes at dawn for Hoopoe Lark.',
    keyBirds: 'Desert Sparrow, Pharaoh Eagle-Owl, Fulvous Babbler, Spotted Sandgrouse',
  },
  {
    day: 'Day 14',
    title: 'Return to Marrakech & Departure',
    description:
      'Drive back across the High Atlas via Tizi n\'Tichka, with final raptor scanning at the pass. Departure from Marrakech. A two-week Morocco birding trip typically yields 200-250 species.',
    keyBirds: 'Lammergeier, Long-legged Buzzard, final trip ticks',
  },
];

/* ===================================================================
   DATA: ACCOMMODATION
   =================================================================== */

const accommodationSites = [
  {
    area: 'Souss-Massa / Agadir',
    options: [
      'Budget guesthouses in Massa village (150-300 MAD)',
      'Mid-range hotels in Agadir with park access (400-800 MAD)',
      'Eco-lodges near the park boundary (500-1,200 MAD)',
    ],
    tip: 'Stay in Massa village for dawn access to the ibis colony without a long drive.',
  },
  {
    area: 'Moulay Bousselham / Merja Zerga',
    options: [
      'Simple guesthouses in the village (150-300 MAD)',
      'Hotel Villamaris overlooking the lagoon (400-700 MAD)',
      'Traditional riads (300-500 MAD)',
    ],
    tip: 'Book a lagoon-view room to watch flamingos from your terrace at sunrise.',
  },
  {
    area: 'Ifrane / Middle Atlas',
    options: [
      'Hotel Chamonix in Ifrane (300-600 MAD)',
      'Mountain lodges near Azrou (250-500 MAD)',
      'Guesthouses in Ain Leuh (150-300 MAD)',
    ],
    tip: 'Ifrane has the most comfortable accommodation; Azrou is closer to the best forests.',
  },
  {
    area: 'Boumalne Dades',
    options: [
      'Kasbah-style hotels in Boumalne (200-500 MAD)',
      'Dades Gorge guesthouses (150-400 MAD)',
      'Hotel Xaluca Dades (600-1,000 MAD)',
    ],
    tip: 'Stay in Boumalne town for the earliest start on the Tagdilt Track.',
  },
  {
    area: 'Merzouga',
    options: [
      'Desert camps and bivouacs (200-500 MAD)',
      'Hotel Yasmina (300-600 MAD)',
      'Luxury desert lodges (800-2,000 MAD)',
    ],
    tip: 'A desert camp near Dayet Srij lake gives you dawn birding at the water\'s edge.',
  },
  {
    area: 'Marrakech (base for Oukaimeden)',
    options: [
      'Budget riads in the medina (200-400 MAD)',
      'Mid-range hotels in Gueliz (400-800 MAD)',
      'Luxury riads (1,000-3,000 MAD)',
    ],
    tip: 'Oukaimeden is a 90-minute drive from Marrakech - an early start is essential.',
  },
];

/* ===================================================================
   COMPONENT: PAGE
   =================================================================== */

export default function BirdwatchingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#FAF8F5]">
        {/* ============================================================
            HERO SECTION
            ============================================================ */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <img
            src="/images/hero-birdwatching.webp"
            alt="Birdwatching in Morocco - flamingos wading in a coastal lagoon with golden sunrise light"
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          {/* Nature-themed gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814] via-[#1A1814]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-transparent to-teal-950/20" />

          <div className="container-morocco relative z-10 pb-16 pt-32">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-1.5 text-sm text-white/70"
            >
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white font-medium">Birdwatching</span>
            </nav>

            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200 backdrop-blur-sm border border-emerald-400/20">
                  <Binoculars className="h-3.5 w-3.5" />
                  500+ Species
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-200 backdrop-blur-sm border border-amber-400/20">
                  <Bird className="h-3.5 w-3.5" />
                  3 Migration Flyways
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-display)] leading-tight">
                Birdwatching in Morocco
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/85 max-w-2xl font-[family-name:var(--font-heading)]">
                Where the Atlantic, Mediterranean, and Sahara converge to create
                one of the Western Palearctic&apos;s richest birding
                destinations. Over 500 species across deserts, mountains,
                wetlands, and ancient forests.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#birding-sites"
                  className="inline-flex items-center gap-2 rounded-full bg-[#A0522D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8B4726] transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  Top Birding Sites
                </a>
                <a
                  href="#key-species"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <Feather className="h-4 w-4" />
                  Key Species
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            INTRO: WHY MOROCCO IS A BIRDING PARADISE
            ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A0522D] mb-3">
                  <Globe className="h-4 w-4" />
                  Introduction
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                  Why Morocco Is a Birding Paradise
                </h2>
              </div>

              <div className="prose-custom space-y-6 text-[#1A1814]/80 leading-relaxed font-[family-name:var(--font-heading)]">
                <p className="text-lg">
                  Morocco sits at one of the world&apos;s great ornithological
                  crossroads. Positioned at the northwestern tip of Africa, just
                  14 kilometers from Europe across the Strait of Gibraltar, this
                  kingdom straddles three major bird migration flyways: the{' '}
                  <strong>East Atlantic Flyway</strong>, the{' '}
                  <strong>Mediterranean Flyway</strong>, and the{' '}
                  <strong>Saharan Flyway</strong>. Twice each year, hundreds of
                  millions of birds funnel through this narrow bottleneck
                  between continents, making Morocco a front-row seat to one of
                  nature&apos;s greatest spectacles.
                </p>

                <p>
                  With over <strong>500 recorded species</strong>, Morocco ranks
                  among the richest birding destinations in the entire Western
                  Palearctic region. This extraordinary diversity stems from the
                  country&apos;s remarkable range of habitats compressed into a
                  relatively compact area: Atlantic and Mediterranean coastlines,
                  tidal lagoons and freshwater marshes, ancient cedar forests,
                  alpine meadows above 3,000 meters, arid steppe and stony
                  desert (hamada), sand dune systems of the Sahara, river
                  valleys and oases, and agricultural plains.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="bg-[#FAF8F5] rounded-2xl p-6 text-center border border-[#EDE8E0]">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 mb-3">
                      <Bird className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                      500+
                    </div>
                    <div className="text-sm text-[#1A1814]/60 mt-1">
                      Recorded Species
                    </div>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-2xl p-6 text-center border border-[#EDE8E0]">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 mb-3">
                      <Navigation className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                      3
                    </div>
                    <div className="text-sm text-[#1A1814]/60 mt-1">
                      Migration Flyways
                    </div>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-2xl p-6 text-center border border-[#EDE8E0]">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-700 mb-3">
                      <Map className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                      24
                    </div>
                    <div className="text-sm text-[#1A1814]/60 mt-1">
                      Ramsar Wetland Sites
                    </div>
                  </div>
                </div>

                <p>
                  What makes Morocco particularly special for birders is the
                  unique combination of Palearctic and Afrotropical species.
                  European birds familiar from gardens and parks occur alongside
                  true African species at the northern edge of their range.
                  Desert specialists from the Sahara meet mountain birds of the
                  High Atlas. Seabirds from the Atlantic overlap with
                  Mediterranean species. This meeting of biogeographic zones
                  creates birding experiences found nowhere else.
                </p>

                <p>
                  The country is also home to one of the world&apos;s rarest
                  birds: the <strong>Northern Bald Ibis</strong> (
                  <em>Geronticus eremita</em>), classified as Critically
                  Endangered with only around 700 individuals surviving in the
                  wild, virtually all in Morocco. Seeing this prehistoric-looking
                  bird at its coastal cliff colony is a bucket-list experience
                  for birders worldwide.
                </p>

                <p>
                  Beyond the birds themselves, Morocco offers practical
                  advantages that make it an ideal birding destination: short
                  flight times from Europe (2-3 hours), excellent road
                  infrastructure connecting all major birding sites, affordable
                  accommodation and food, a welcoming culture, and landscapes of
                  breathtaking beauty that provide a stunning backdrop to every
                  birding outing. Whether you are a seasoned lister aiming for
                  Western Palearctic specialties or a beginner drawn to
                  flamingos and raptors, Morocco delivers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            TOP BIRDING SITES
            ============================================================ */}
        <section
          id="birding-sites"
          className="py-16 md:py-20 bg-[#FAF8F5]"
        >
          <div className="container-morocco">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A0522D] mb-3">
                <MapPin className="h-4 w-4" />
                Where to Go
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                Top Birding Sites in Morocco
              </h2>
              <p className="mt-3 text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                From Atlantic wetlands to Saharan desert, these are the
                essential birding locations every visitor should consider.
              </p>
            </div>

            <div className="space-y-8">
              {birdingSites.map((site, idx) => (
                <div
                  key={site.name}
                  className="bg-white rounded-2xl border border-[#EDE8E0] overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Number badge */}
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                          <span className="text-lg font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                            {idx + 1}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <h3 className="text-xl md:text-2xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                            {site.name}
                          </h3>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-[#A0522D] bg-[#A0522D]/8 rounded-full px-2.5 py-1 w-fit">
                            <Bird className="h-3 w-3" />
                            {site.speciesCount} species
                          </span>
                        </div>

                        {/* Location & Coordinates */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[#1A1814]/60 mb-4">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {site.location}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Compass className="h-3.5 w-3.5" />
                            {site.coordinates}
                          </span>
                        </div>

                        {/* Habitat */}
                        <p className="text-sm text-[#1A1814]/50 mb-4 italic">
                          Habitat: {site.habitat}
                        </p>

                        {/* Key Species */}
                        <div className="mb-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1814]/40 mb-2">
                            Key Species
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {site.keySpecies.map((species) => (
                              <span
                                key={species}
                                className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-800 rounded-full px-2.5 py-1 border border-emerald-100"
                              >
                                <Feather className="h-3 w-3" />
                                {species}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Details grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div className="bg-[#FAF8F5] rounded-xl p-4">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1814]/40 mb-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              Best Season
                            </div>
                            <p className="text-sm text-[#1A1814]/80">
                              {site.bestSeason}
                            </p>
                          </div>
                          <div className="bg-[#FAF8F5] rounded-xl p-4">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1814]/40 mb-1.5">
                              <Navigation className="h-3.5 w-3.5" />
                              Access
                            </div>
                            <p className="text-sm text-[#1A1814]/80">
                              {site.access}
                            </p>
                          </div>
                        </div>

                        {/* Tip */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                          <div className="flex items-start gap-2">
                            <Star className="h-4 w-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-bold uppercase tracking-wider text-[#C4960C]">
                                Birding Tip
                              </span>
                              <p className="text-sm text-[#1A1814]/80 mt-1">
                                {site.tip}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            KEY SPECIES SPOTLIGHT
            ============================================================ */}
        <section id="key-species" className="py-16 md:py-20 bg-white">
          <div className="container-morocco">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A0522D] mb-3">
                <Bird className="h-4 w-4" />
                Species Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                Key Species of Morocco
              </h2>
              <p className="mt-3 text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                The most sought-after and iconic birds that draw birders from
                around the world to Morocco.
              </p>
            </div>

            {/* Featured species: Northern Bald Ibis */}
            <div className="mb-12 bg-gradient-to-br from-[#1A1814] to-[#2D2520] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <img
                    src="/images/photo-northern-bald-ibis.webp"
                    alt="Northern Bald Ibis (Geronticus eremita) - critically endangered bird with glossy black plumage and red bald head at Souss-Massa National Park, Morocco"
                    className="h-full w-full object-cover"
                    width={800}
                    height={600}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      <Shield className="h-3 w-3" />
                      Critically Endangered
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C4960C] mb-2">
                    Morocco&apos;s Signature Bird
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-display)] mb-1">
                    Northern Bald Ibis
                  </h3>
                  <p className="text-sm text-white/50 italic mb-4">
                    Geronticus eremita
                  </p>
                  <p className="text-white/80 leading-relaxed mb-6 font-[family-name:var(--font-heading)]">
                    {keySpecies[0].description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1">
                        Where to See
                      </div>
                      <p className="text-sm text-white/70">
                        {keySpecies[0].whereToSee}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1">
                        Best Time
                      </div>
                      <p className="text-sm text-white/70">
                        {keySpecies[0].bestTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flamingo feature image */}
            <div className="mb-12 relative rounded-2xl overflow-hidden">
              <img
                src="/images/photo-merja-zerga-flamingos.webp"
                alt="Greater Flamingos wading in the shallow waters of Merja Zerga lagoon at sunrise, Moulay Bousselham, Morocco"
                className="w-full h-64 md:h-80 object-cover"
                width={1200}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814]/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold font-[family-name:var(--font-heading)]">
                  Greater Flamingos at Merja Zerga Lagoon
                </p>
                <p className="text-white/70 text-sm mt-1">
                  Thousands gather at Morocco&apos;s Ramsar wetlands from
                  November to March
                </p>
              </div>
            </div>

            {/* Species grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keySpecies.slice(1).map((species) => (
                <div
                  key={species.name}
                  className="bg-[#FAF8F5] rounded-2xl border border-[#EDE8E0] p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                        {species.name}
                      </h3>
                      <p className="text-xs text-[#1A1814]/50 italic">
                        {species.scientificName}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center text-[10px] font-bold rounded-full px-2 py-0.5 ${species.statusColor}`}
                    >
                      {species.status}
                    </span>
                  </div>

                  <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-4 line-clamp-4">
                    {species.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#EDE8E0]">
                    <div className="flex items-start gap-2 text-xs text-[#1A1814]/60">
                      <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-[#A0522D]" />
                      <span>{species.whereToSee}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-[#1A1814]/60">
                      <Calendar className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-[#A0522D]" />
                      <span>{species.bestTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SEASONAL BIRDING CALENDAR
            ============================================================ */}
        <section className="py-16 md:py-20 bg-[#FAF8F5]">
          <div className="container-morocco">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A0522D] mb-3">
                <Calendar className="h-4 w-4" />
                When to Go
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                Seasonal Birding Calendar
              </h2>
              <p className="mt-3 text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Morocco offers year-round birding, but each season brings
                different highlights and specialties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seasonalCalendar.map((season) => {
                const SeasonIcon = season.icon;
                return (
                  <div
                    key={season.season}
                    className="bg-white rounded-2xl border border-[#EDE8E0] overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                          <SeasonIcon className="h-5 w-5 text-[#A0522D]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                            {season.season}
                          </h3>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < season.rating
                                    ? 'text-[#C4960C] fill-[#C4960C]'
                                    : 'text-[#EDE8E0]'
                                }`}
                              />
                            ))}
                            <span className="text-xs text-[#1A1814]/50 ml-1">
                              {season.rating}/5
                            </span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {season.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-[#1A1814]/70"
                          >
                            <Feather className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-2 pt-4 border-t border-[#EDE8E0]">
                        <div className="flex items-start gap-2 text-xs text-[#1A1814]/60">
                          <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-[#A0522D]" />
                          <span>
                            <strong>Top sites:</strong> {season.topSites}
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-[#1A1814]/60">
                          <CloudSun className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-[#A0522D]" />
                          <span>
                            <strong>Weather:</strong> {season.weather}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            BIRDING TOUR OPERATORS
            ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-morocco">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A0522D] mb-3">
                <Compass className="h-4 w-4" />
                Expert Guidance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                Birding Tour Operators &amp; Guides
              </h2>
              <p className="mt-3 text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Whether you prefer a fully guided tour or a local expert for a
                few days, these operators specialize in Morocco&apos;s birdlife.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tourOperators.map((operator) => (
                <div
                  key={operator.name}
                  className="bg-[#FAF8F5] rounded-2xl border border-[#EDE8E0] p-6 md:p-8 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-2">
                    {operator.name}
                  </h3>
                  <p className="text-sm text-[#1A1814]/70 mb-4">
                    {operator.specialty}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white rounded-xl p-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#1A1814]/40 mb-1">
                        Duration
                      </div>
                      <p className="text-sm text-[#1A1814]/80">
                        {operator.duration}
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#1A1814]/40 mb-1">
                        Price
                      </div>
                      <p className="text-sm text-[#1A1814]/80">
                        {operator.price}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-1.5">
                    {operator.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-[#1A1814]/70"
                      >
                        <Star className="h-3 w-3 text-[#C4960C] flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            EQUIPMENT & PREPARATION
            ============================================================ */}
        <section className="py-16 md:py-20 bg-[#FAF8F5]">
          <div className="container-morocco">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A0522D] mb-3">
                <Binoculars className="h-4 w-4" />
                Be Prepared
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                Equipment &amp; Preparation
              </h2>
              <p className="mt-3 text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                What to bring and how to prepare for a successful birding trip
                to Morocco.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Optics */}
              <div className="bg-white rounded-2xl border border-[#EDE8E0] p-6">
                <div className="h-10 w-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center mb-4">
                  <Telescope className="h-5 w-5 text-[#A0522D]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-3">
                  Optics
                </h3>
                <ul className="space-y-2 text-sm text-[#1A1814]/70">
                  <li className="flex items-start gap-2">
                    <Eye className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Binoculars:</strong> 8x42 or 10x42 are ideal.
                      Waterproof and fog-proof essential for coastal sites.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Spotting scope:</strong> 20-60x zoom highly
                      recommended for wetlands and open desert. Lightweight
                      tripod.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Camera:</strong> 400mm+ telephoto for bird
                      photography. Dust protection for desert sites is critical.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Field Guides */}
              <div className="bg-white rounded-2xl border border-[#EDE8E0] p-6">
                <div className="h-10 w-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-5 w-5 text-[#A0522D]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-3">
                  Field Guides &amp; Apps
                </h3>
                <ul className="space-y-2 text-sm text-[#1A1814]/70">
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Collins Bird Guide</strong> (Svensson et al.) -
                      the essential Western Palearctic field guide covering all
                      Morocco species.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Where to Watch Birds in Morocco</strong> (Bergier)
                      - invaluable site guide with maps and directions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Merlin Bird ID app</strong> (free) - excellent for
                      call identification. Download Morocco pack before travel.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>eBird</strong> - check hotspot data and recent
                      sightings for all Moroccan sites.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Clothing */}
              <div className="bg-white rounded-2xl border border-[#EDE8E0] p-6">
                <div className="h-10 w-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center mb-4">
                  <Shield className="h-5 w-5 text-[#A0522D]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-3">
                  Clothing &amp; Protection
                </h3>
                <ul className="space-y-2 text-sm text-[#1A1814]/70">
                  <li className="flex items-start gap-2">
                    <Sun className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Layers:</strong> Temperatures range from near
                      freezing at High Atlas dawn to 40 C+ in the desert. Dress
                      in layers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sun className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Sun protection:</strong> Wide-brimmed hat,
                      high-SPF sunscreen, quality sunglasses. The Moroccan sun
                      is intense.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Mountain className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Footwear:</strong> Sturdy walking boots for
                      mountain sites, lighter shoes for wetlands. Waterproof for
                      coastal birding.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wind className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Dust protection:</strong> Buff/scarf for face,
                      sealed bags for optics in desert and windy conditions.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ETHICS & CONSERVATION
            ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-morocco">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A0522D] mb-3">
                <Heart className="h-4 w-4" />
                Responsible Birding
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                Ethics &amp; Conservation
              </h2>
              <p className="mt-3 text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Morocco&apos;s birdlife faces real threats. As birders, we have a
                responsibility to minimize our impact and support conservation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Northern Bald Ibis recovery */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-3">
                      Northern Bald Ibis Recovery: A Conservation Success
                    </h3>
                    <div className="space-y-3 text-sm text-[#1A1814]/80 leading-relaxed font-[family-name:var(--font-heading)]">
                      <p>
                        The Northern Bald Ibis was once widespread from Central
                        Europe to the Middle East and North Africa. By the
                        1990s, hunting, habitat loss, and pesticide use had
                        reduced the wild population to fewer than 250 birds, all
                        in Morocco. It was considered one of the world&apos;s
                        most endangered birds.
                      </p>
                      <p>
                        Thanks to dedicated conservation efforts by
                        Morocco&apos;s Haut Commissariat aux Eaux et Forets,
                        BirdLife International, the RSPB, and local NGOs,
                        numbers have gradually recovered to around 700
                        individuals. Key measures include protection of nesting
                        cliffs, anti-poaching patrols, pesticide management in
                        feeding areas, and community engagement programs that
                        give local people a stake in the ibis&apos;s survival.
                      </p>
                      <p>
                        Birding tourism plays a direct role in conservation.
                        Visitor spending supports local communities near
                        Souss-Massa, demonstrating the economic value of
                        protecting the ibis and its habitat. Every birder who
                        visits contributes to the case for continued
                        conservation funding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsible birding guidelines */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#FAF8F5] rounded-2xl border border-[#EDE8E0] p-6">
                  <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-4">
                    Responsible Birding Code
                  </h3>
                  <ul className="space-y-3 text-sm text-[#1A1814]/70">
                    <li className="flex items-start gap-2">
                      <Leaf className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Keep a respectful distance from nesting birds,
                        especially Northern Bald Ibis cliff colonies. Use your
                        scope rather than approaching.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Do not use playback or tape luring near breeding birds
                        or rare species. This is especially important for
                        skulking species like Tchagra and desert warblers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Stay on established tracks and paths, particularly in
                        national parks and Ramsar sites. Off-track driving
                        damages fragile desert and wetland habitats.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Take all litter with you. Desert environments are
                        particularly slow to recover from waste.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#FAF8F5] rounded-2xl border border-[#EDE8E0] p-6">
                  <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-4">
                    How Birders Can Help
                  </h3>
                  <ul className="space-y-3 text-sm text-[#1A1814]/70">
                    <li className="flex items-start gap-2">
                      <Heart className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Submit eBird checklists:</strong> Your sighting
                        data contributes directly to conservation science and
                        helps monitor population trends.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Hire local guides:</strong> Direct economic
                        benefit to communities living alongside bird habitats
                        incentivizes protection.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Support conservation:</strong> Consider donating
                        to SEO/BirdLife, GREPOM (Moroccan ornithological
                        society), or BirdLife International&apos;s Morocco
                        projects.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Report rare sightings:</strong> Notify GREPOM of
                        any rare bird records. Your observations may contribute
                        to protection of important bird areas.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Ramsar sites */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <Waves className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-2">
                      Morocco&apos;s Ramsar Wetland Sites
                    </h4>
                    <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                      Morocco has designated 24 Ramsar Sites of International
                      Importance, protecting critical wetland habitats for
                      waterbirds. Key birding Ramsar sites include Merja Zerga,
                      Merja Sidi Boughaba, Khnifiss Lagoon, Barrage Al Massira,
                      and the Moulouya estuary. These protected areas form the
                      backbone of Morocco&apos;s wetland bird conservation
                      strategy and are among the country&apos;s most productive
                      birding locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            BIRDING ITINERARIES
            ============================================================ */}
        <section className="py-16 md:py-20 bg-[#FAF8F5]">
          <div className="container-morocco">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A0522D] mb-3">
                <Map className="h-4 w-4" />
                Plan Your Trip
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                Birding Itineraries
              </h2>
              <p className="mt-3 text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Suggested routes to maximize your species count and birding
                experiences across Morocco&apos;s diverse habitats.
              </p>
            </div>

            {/* One Week Itinerary */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-[#A0522D] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">7</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                    One-Week Itinerary: Southern Morocco Circuit
                  </h3>
                  <p className="text-sm text-[#1A1814]/60">
                    Agadir - Souss-Massa - High Atlas - Desert - Marrakech |
                    Expected: 150-180 species
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {oneWeekItinerary.map((day) => (
                  <div
                    key={day.day}
                    className="bg-white rounded-xl border border-[#EDE8E0] p-5 flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-10 w-16 rounded-lg bg-[#A0522D]/10 text-sm font-bold text-[#A0522D]">
                        {day.day}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-heading)] mb-1">
                        {day.title}
                      </h4>
                      <p className="text-sm text-[#1A1814]/70 mb-2">
                        {day.description}
                      </p>
                      <div className="flex items-start gap-1.5 text-xs text-emerald-700">
                        <Bird className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Key birds:</strong> {day.keyBirds}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Two Week Itinerary */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-[#C4960C] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">14</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                    Two-Week Itinerary: Grand Morocco Birding Tour
                  </h3>
                  <p className="text-sm text-[#1A1814]/60">
                    North to South: Wetlands - Forests - Mountains - Desert |
                    Expected: 200-250 species
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {twoWeekItinerary.map((day) => (
                  <div
                    key={day.day}
                    className="bg-white rounded-xl border border-[#EDE8E0] p-5 flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-10 w-20 rounded-lg bg-[#C4960C]/10 text-sm font-bold text-[#C4960C]">
                        {day.day}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-heading)] mb-1">
                        {day.title}
                      </h4>
                      <p className="text-sm text-[#1A1814]/70 mb-2">
                        {day.description}
                      </p>
                      <div className="flex items-start gap-1.5 text-xs text-emerald-700">
                        <Bird className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Key birds:</strong> {day.keyBirds}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            COMBINING BIRDING WITH CULTURE
            ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-morocco">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A0522D] mb-3">
                <Globe className="h-4 w-4" />
                Beyond the Birds
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                Combining Birding with Culture
              </h2>
              <p className="mt-3 text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Morocco&apos;s birding routes pass through some of the
                country&apos;s most fascinating cultural landscapes. Here is how
                to make the most of both.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#FAF8F5] rounded-2xl border border-[#EDE8E0] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#A0522D]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                      Marrakech &amp; the High Atlas
                    </h3>
                  </div>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                    Base yourself in a Marrakech riad and alternate between
                    morning birding at Oukaimeden and afternoon exploration of
                    the medina, souks, and Jemaa el-Fnaa. The Menara Gardens
                    within the city host White Storks on the old walls and
                    Little Owls at dusk. The drive to Oukaimeden through the
                    Ourika Valley is scenically stunning with birding stops
                    along the river.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] rounded-2xl border border-[#EDE8E0] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                      <TreeDeciduous className="h-5 w-5 text-[#A0522D]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                      Fes &amp; the Middle Atlas
                    </h3>
                  </div>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                    Combine the medieval medina of Fes - the world&apos;s largest
                    car-free urban area - with cedar forest birding at Ifrane
                    and Azrou. The leather tanneries, theological schools, and
                    artisan workshops of Fes are just an hour from some of
                    Morocco&apos;s best woodland birding. Ifrane itself has a
                    charming European feel and excellent restaurants.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] rounded-2xl border border-[#EDE8E0] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                      <Sunrise className="h-5 w-5 text-[#A0522D]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                      Saharan Kasbahs &amp; Desert
                    </h3>
                  </div>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                    The route from Ouarzazate to Merzouga passes through some of
                    Morocco&apos;s most spectacular scenery: the UNESCO-listed
                    Ait Benhaddou kasbah, the Dades and Todra gorges, and the
                    Ziz Valley palm oases. Bird the Tagdilt Track in the
                    morning, explore Todra Gorge at midday, and spend the night
                    in a traditional desert camp under the stars near Merzouga.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] rounded-2xl border border-[#EDE8E0] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                      <Waves className="h-5 w-5 text-[#A0522D]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                      Atlantic Coast Towns
                    </h3>
                  </div>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                    Essaouira&apos;s windswept medina and harbor host Eleonora&apos;s
                    Falcons on Mogador Island in late summer. Oualidia offers
                    flamingo watching followed by world-class oysters. Moulay
                    Bousselham&apos;s Merja Zerga lagoon is surrounded by a
                    relaxed fishing village with excellent seafood. These
                    coastal towns combine birding with authentic Moroccan
                    seaside culture.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-[#C4960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-2">
                      Traveling with Non-Birders
                    </h4>
                    <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                      Morocco is one of the best destinations for couples or
                      groups where not everyone is a birder. While the keen
                      birder is up at dawn, non-birding companions can enjoy
                      hammam and spa experiences, cooking classes, souk shopping,
                      or simply relax by the pool. By mid-morning, everyone
                      regroups for cultural activities and sightseeing. The
                      Sahara desert camp experience is magical for birders and
                      non-birders alike.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACCOMMODATION NEAR BIRDING SITES
            ============================================================ */}
        <section className="py-16 md:py-20 bg-[#FAF8F5]">
          <div className="container-morocco">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A0522D] mb-3">
                <Home className="h-4 w-4" />
                Where to Stay
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                Accommodation Near Birding Sites
              </h2>
              <p className="mt-3 text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Practical accommodation options at each major birding area,
                from budget guesthouses to comfortable lodges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accommodationSites.map((site) => (
                <div
                  key={site.area}
                  className="bg-white rounded-2xl border border-[#EDE8E0] p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-3">
                    {site.area}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {site.options.map((option) => (
                      <li
                        key={option}
                        className="flex items-start gap-2 text-sm text-[#1A1814]/70"
                      >
                        <Home className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-[#EDE8E0]">
                    <div className="flex items-start gap-2">
                      <Star className="h-3.5 w-3.5 text-[#C4960C] flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-[#1A1814]/60 italic">
                        {site.tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FAQ SECTION
            ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-morocco">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A0522D] mb-3">
                <Info className="h-4 w-4" />
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                Birdwatching in Morocco FAQ
              </h2>
              <p className="mt-3 text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Answers to the most frequently asked questions about birding in
                Morocco.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] rounded-2xl border border-[#EDE8E0] overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-base md:text-lg font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-3 flex items-start gap-3">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#A0522D]/10 flex items-center justify-center text-xs font-bold text-[#A0522D]">
                        {idx + 1}
                      </span>
                      {item.question}
                    </h3>
                    <p className="text-sm text-[#1A1814]/70 leading-relaxed pl-9 font-[family-name:var(--font-heading)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FINAL CTA
            ============================================================ */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#1A1814] to-[#2D2520]">
          <div className="container-morocco text-center">
            <Binoculars className="h-12 w-12 text-[#C4960C] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
              Ready to Discover Morocco&apos;s Birdlife?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
              From the critically endangered Northern Bald Ibis to flamingos in
              the Sahara, Morocco offers birding experiences found nowhere else
              on Earth. Start planning your trip today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/first-time"
                className="inline-flex items-center gap-2 rounded-full bg-[#A0522D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8B4726] transition-colors"
              >
                <Compass className="h-4 w-4" />
                Plan Your Morocco Trip
              </Link>
              <Link
                href="/atlas-mountains"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Mountain className="h-4 w-4" />
                Atlas Mountains Guide
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            EXPLORE MORE
            ============================================================ */}
        <ExploreMore
          currentCategory="activities"
          currentHref="/birdwatching"
          title="Continue Exploring Morocco"
        />
      </main>
    </>
  );
}

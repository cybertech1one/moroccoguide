import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Eye,
  Clock,
  Info,
  ArrowRight,
  Camera,
  ShieldCheck,
  Calendar,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Mountain,
  Binoculars,
  Compass,
  TreeDeciduous,
  Sun,
  CloudRain,
  Feather,
  Globe,
  BookOpen,
  Sunrise,
  Leaf,
  Map,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Birdwatching Guide 2026 | Top 12 Birding Sites, Key Species & Tours',
  description:
    'Complete guide to birdwatching in Morocco. Discover 12+ top birding sites including Souss-Massa, Merja Zerga, Oualidia Lagoon, and Sahara oases. Spot the Northern Bald Ibis, Eleonora\'s Falcon, Moussier\'s Redstart, and 480+ species. Migration seasons, guided tours, equipment, and ethical birding tips.',
  keywords: [
    'Morocco birdwatching',
    'birding Morocco',
    'Morocco bird species',
    'Northern Bald Ibis Morocco',
    'Souss-Massa birdwatching',
    'Merja Zerga birding',
    'Oualidia lagoon birds',
    'Morocco bird tours',
    'Eleonora\'s Falcon Morocco',
    'Moussier\'s Redstart',
    'Morocco migration birds',
    'Atlas Mountains birding',
    'Sahara birds Morocco',
    'Morocco birding guide 2026',
    'birdwatching tours Morocco',
    'Morocco ornithology',
    'Barbary Falcon Morocco',
    'Levaillant\'s Woodpecker',
    'flamingos Morocco',
    'Morocco bird habitats',
    'ethical birdwatching Morocco',
    'Morocco wildlife',
  ],
  openGraph: {
    title: 'Morocco Birdwatching Guide 2026 | Top 12 Birding Sites, Key Species & Tours',
    description:
      'Discover Morocco\'s extraordinary birding diversity. From the critically endangered Northern Bald Ibis to Saharan desert specialists, explore 480+ species across 12 world-class birding sites.',
    url: `${BASE_URL}/morocco-birdwatching`,
    images: [
      {
        url: `${BASE_URL}/images/hero-birdwatching.webp`,
        width: 1200,
        height: 630,
        alt: 'Birdwatcher scanning flamingos at a Moroccan lagoon with Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Birdwatching Guide 2026 | 480+ Species Across 12 Sites',
    description:
      'Morocco hosts 480+ bird species across wetlands, mountains, deserts, and coasts. Complete guide to birding sites, key species, tours, and seasonal highlights.',
    images: [`${BASE_URL}/images/hero-birdwatching.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-birdwatching` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-birdwatching`,
  name: 'Morocco Birdwatching Guide 2026 | Top 12 Birding Sites, Key Species & Tours',
  description:
    'Complete guide to birdwatching in Morocco covering 12+ top birding sites, 480+ species, migration seasons, guided tours, equipment, and ethical birding practices.',
  url: `${BASE_URL}/morocco-birdwatching`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-birdwatching`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Birdwatching Guide', item: `${BASE_URL}/morocco-birdwatching` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best time of year for birdwatching in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers year-round birding. Spring migration (March to May) is peak season with hundreds of species passing through. Autumn migration (September to November) is also excellent. Winter brings large populations of waterfowl and overwintering raptors. Summer is best for breeding desert specialists and seabirds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I see the Northern Bald Ibis in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Northern Bald Ibis breeds at Souss-Massa National Park south of Agadir, which holds the majority of the global wild population. A smaller colony exists near Tamri, north of Agadir. The birds are most visible at their cliff-face nesting sites between February and July.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a guide for birdwatching in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A local birding guide is highly recommended, especially for first-time visitors. Moroccan birding guides know exact territories of rare species, can navigate remote desert and mountain tracks, and often have relationships with local landowners that grant access to private sites. Guided day trips start from 800 MAD per person.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many bird species can be found in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has recorded over 480 bird species. This includes around 200 breeding residents, 150+ regular passage migrants, 80+ winter visitors, and numerous rare vagrants. The country\'s position at the crossroads of Europe, Africa, and the Atlantic/Mediterranean makes it one of the richest birding destinations in the Western Palearctic.',
      },
    },
    {
      '@type': 'Question',
      name: 'What equipment should I bring for birdwatching in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential gear includes binoculars (8x42 or 10x42), a spotting scope with tripod for wetland sites, a field guide (Collins Bird Guide covers all Moroccan species), sun protection, and sturdy walking shoes. A camera with a 400mm+ telephoto lens is ideal for bird photography. Bring dust protection for equipment in desert areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is birdwatching in Morocco safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Birdwatching in Morocco is very safe. The main considerations are practical: sun protection, adequate water supply (especially in desert areas), and awareness of terrain when walking near cliff edges or in rocky gorges. Remote sites benefit from a 4x4 vehicle and a knowledgeable driver. National parks have marked trails and sometimes ranger stations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I combine birdwatching with other activities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Many birding sites overlap with cultural and adventure travel. You can combine Merja Zerga with Moulay Bousselham\'s fishing village, Oualidia with its famous oyster farms, Atlas birding with trekking, and Sahara birding with a desert camping experience. Most birding tours incorporate cultural stops and local cuisine.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the costs for a birdwatching trip in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget birders can explore accessible sites independently for minimal cost. National park entry fees range from 20 to 70 MAD. Guided birding day trips start from 800 MAD per person. Multi-day guided birding tours (7-14 days) cost from 12,000 MAD per person including accommodation, transport, and guide fees. Premium specialist tours with international leaders range from 25,000 to 45,000 MAD.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP BIRDING SITES
   ═══════════════════════════════════════════════════════════════ */

const birdingSites = [
  {
    rank: 1,
    name: 'Souss-Massa National Park',
    region: 'South of Agadir',
    habitat: 'Coastal cliffs, river estuary, scrubland',
    icon: Feather,
    bestSeason: 'Year-round (breeding: Feb-Jul)',
    keySpecies: ['Northern Bald Ibis', 'Marbled Teal', 'Audouin\'s Gull', 'Black-crowned Tchagra', 'Moussier\'s Redstart', 'Barbary Partridge'],
    speciesCount: '275+',
    access: 'Paved road from Agadir (65 km south). Entry from 20 MAD. 4x4 recommended for interior tracks.',
    description:
      'The crown jewel of Moroccan birding. This 33,800-hectare park protects the largest remaining wild population of the critically endangered Northern Bald Ibis, with around 600 individuals nesting on coastal cliffs. The Oued Souss estuary attracts thousands of waders and waterfowl, while the arid scrubland hosts a strong population of resident North African endemics.',
  },
  {
    rank: 2,
    name: 'Merja Zerga (Moulay Bousselham)',
    region: 'Atlantic Coast, north of Rabat',
    habitat: 'Tidal lagoon, saltmarsh, mudflats',
    icon: Compass,
    bestSeason: 'October-March (winter)',
    keySpecies: ['Greater Flamingo', 'Slender-billed Gull', 'Marsh Harrier', 'Osprey', 'Eurasian Spoonbill', 'Black-tailed Godwit'],
    speciesCount: '200+',
    access: 'Paved road from Rabat (150 km). Local boatmen offer lagoon trips from 150 MAD per boat.',
    description:
      'Morocco\'s premier wetland birding site and a Ramsar-designated wetland of international importance. This 7,000-hectare tidal lagoon on the Atlantic coast hosts tens of thousands of wintering waterbirds. At peak winter, flocks of 15,000+ flamingos paint the shallows pink. The mudflats teem with waders during migration, and marsh harriers quarter the reed beds throughout winter.',
  },
  {
    rank: 3,
    name: 'Oualidia Lagoon',
    region: 'Atlantic Coast, between El Jadida and Safi',
    habitat: 'Sheltered lagoon, salt pans, dunes',
    icon: Eye,
    bestSeason: 'September-April',
    keySpecies: ['Greater Flamingo', 'Kentish Plover', 'Sandwich Tern', 'Little Egret', 'Caspian Tern', 'Ruddy Shelduck'],
    speciesCount: '150+',
    access: 'Coastal road from El Jadida (80 km) or Safi (70 km). Freely accessible along the lagoon shore.',
    description:
      'A sheltered Atlantic lagoon famous for its oyster farms and equally rewarding for birders. The calm, shallow waters attract flamingos, terns, and waders in good numbers. The surrounding salt pans are productive for plovers and stilts. Oualidia is an easy half-day stop on a coastal road trip, and the combination of birding and fresh oyster lunches (from 80 MAD per plate) makes it a memorable excursion.',
  },
  {
    rank: 4,
    name: 'Ifrane National Park & Cedar Forests',
    region: 'Middle Atlas Mountains',
    habitat: 'Cedar forest, oak woodland, lakes',
    icon: TreeDeciduous,
    bestSeason: 'April-June (breeding), September-October',
    keySpecies: ['Levaillant\'s Woodpecker', 'Atlas Horned Lark', 'African Crimson-winged Finch', 'Coal Tit (atlas)', 'Firecrest', 'Short-toed Treecreeper'],
    speciesCount: '200+',
    access: 'Paved road from Fes (60 km) or Meknes (65 km). Park entry from 20 MAD. Well-maintained forest trails.',
    description:
      'The ancient cedar forests around Ifrane are the best location in Morocco for Levaillant\'s Woodpecker, a scarce North African endemic. These towering Atlas cedars, some over 800 years old, support a rich woodland bird community that feels more European than African. Barbary macaques share the canopy, and the mountain lakes (dayet) nearby add waterfowl to the day list.',
  },
  {
    rank: 5,
    name: 'Dayet Aoua & Dayet Ifrah',
    region: 'Middle Atlas, near Ifrane',
    habitat: 'Mountain lakes, wet meadows, scrub',
    icon: Binoculars,
    bestSeason: 'March-May, September-November',
    keySpecies: ['Crested Coot', 'Red-knobbed Coot', 'Ferruginous Duck', 'Marsh Harrier', 'Great Crested Grebe', 'Ruddy Shelduck'],
    speciesCount: '130+',
    access: 'Minor road south of Ifrane (15 km). Accessible by car; lake edges walkable. Water levels vary seasonally.',
    description:
      'A pair of freshwater lakes in the Middle Atlas that provide critical habitat for breeding and wintering waterbirds. Dayet Aoua is especially important as one of the few Moroccan breeding sites for the globally threatened Crested Coot. When water levels are good, the surrounding wet meadows attract pipits, wagtails, and hunting raptors. Combine with a visit to the Ifrane cedar forests for a full day of highland birding.',
  },
  {
    rank: 6,
    name: 'Todra Gorge & Dades Valley',
    region: 'Eastern High Atlas',
    habitat: 'Rocky gorge, cliff faces, oasis gardens',
    icon: Mountain,
    bestSeason: 'March-May, September-November',
    keySpecies: ['Bonelli\'s Eagle', 'Barbary Falcon', 'Tristram\'s Warbler', 'Blue Rock Thrush', 'Rock Bunting', 'Crag Martin'],
    speciesCount: '100+',
    access: 'Paved road from Tinghir (15 km to gorge). Drive into the gorge; walking trails beyond the road end.',
    description:
      'The 300-metre limestone walls of Todra Gorge create a dramatic backdrop for scanning cliff-nesting raptors. Bonelli\'s Eagles and Barbary Falcons patrol the upper crags, while Blue Rock Thrushes and Rock Buntings forage on the lower ledges. The palm-lined oasis gardens at the gorge entrance hold Bulbul, Moussier\'s Redstart, and migrant warblers in season. The nearby Dades Valley extends the habitat diversity with its juniper slopes and cultivated terraces.',
  },
  {
    rank: 7,
    name: 'Tamri & Taghazout Coast',
    region: 'Atlantic Coast, north of Agadir',
    habitat: 'Coastal cliffs, river mouth, argan scrub',
    icon: Sun,
    bestSeason: 'Year-round',
    keySpecies: ['Northern Bald Ibis', 'Eleonora\'s Falcon (passage)', 'Barbary Falcon', 'Cream-colored Courser', 'Moussier\'s Redstart', 'Black Wheatear'],
    speciesCount: '120+',
    access: 'Coastal road from Agadir (40 km north). Freely accessible cliffs. No entry fee.',
    description:
      'A secondary Northern Bald Ibis colony exists on the sea cliffs near Tamri, where the birds can often be spotted feeding in the fields at close range. The Tamri river mouth attracts gulls and waders, while the surrounding argan woodland is one of the most accessible spots for Moussier\'s Redstart and Black Wheatear. During autumn migration, Eleonora\'s Falcons pass along this coastline heading to their breeding islands.',
  },
  {
    rank: 8,
    name: 'Oukaimeden & High Atlas Passes',
    region: 'High Atlas, south of Marrakech',
    habitat: 'Alpine meadow, scree slopes, cliff faces',
    icon: Mountain,
    bestSeason: 'May-September (snow-free months)',
    keySpecies: ['Crimson-winged Finch', 'Alpine Accentor', 'Shore Lark (atlas)', 'Seerin', 'Lammergeier', 'Golden Eagle'],
    speciesCount: '80+',
    access: 'Paved mountain road from Marrakech (75 km). Accessible by car to 2,600m. Cable car to 3,200m.',
    description:
      'At 2,600 metres, the ski resort of Oukaimeden becomes a premier alpine birding destination during the snow-free months. The rocky slopes above the treeline are the most reliable spot in Morocco for the stunning Crimson-winged Finch, with flocks feeding on seeds among the scree. Alpine Accentors hop around the ski-lift station, and Lammergeiers cruise the thermals over the surrounding peaks. This is the highest birding site easily reachable by road in the Atlas.',
  },
  {
    rank: 9,
    name: 'Erg Chebbi & Merzouga Oases',
    region: 'Eastern Sahara, near Erfoud',
    habitat: 'Sand dunes, desert scrub, oasis lakes',
    icon: Sun,
    bestSeason: 'March-May, October-November',
    keySpecies: ['Desert Sparrow', 'Egyptian Nightjar', 'Spotted Sandgrouse', 'Cream-colored Courser', 'Fulvous Babbler', 'Hoopoe Lark'],
    speciesCount: '120+',
    access: 'Paved road from Erfoud (50 km). 4x4 needed for dune edges. Dayet Srji lake accessible on foot from Merzouga.',
    description:
      'The great sand dunes of Erg Chebbi and the surrounding hamada (stony desert) host a suite of true desert specialists found nowhere else in Morocco. Desert Sparrows inhabit the oasis palms, Egyptian Nightjars roost on sandy ground by day, and Spotted Sandgrouse visit water points at dawn. After rare winter rains, Dayet Srji fills to become a temporary lake that attracts flamingos and hundreds of migrant waders to the edge of the Sahara.',
  },
  {
    rank: 10,
    name: 'Tagdilt Track & Boumalne du Dades',
    region: 'Pre-Saharan steppe, southeast Morocco',
    habitat: 'Stony desert plain, dry wadis',
    icon: Compass,
    bestSeason: 'March-May (spring migration)',
    keySpecies: ['Cream-colored Courser', 'Thick-billed Lark', 'Temminck\'s Lark', 'Red-rumped Wheatear', 'Trumpeter Finch', 'Houbara Bustard'],
    speciesCount: '80+',
    access: 'Dirt track south of Boumalne du Dades. High-clearance vehicle essential. Local guide strongly recommended.',
    description:
      'The famous Tagdilt Track is a rough piste through flat, stony desert that is the single best location in Morocco for desert larks and wheatears. The Thick-billed Lark, a North African specialty, breeds here alongside Temminck\'s Lark and Bar-tailed Lark. Cream-colored Coursers sprint across the gravel, and with luck, the elusive Houbara Bustard may flush from a shallow depression. Early morning visits in spring offer the best chances.',
  },
  {
    rank: 11,
    name: 'Khenifiss National Park & Lagoon',
    region: 'Southern Atlantic Coast',
    habitat: 'Coastal lagoon, desert shore, sabkha',
    icon: Globe,
    bestSeason: 'November-March',
    keySpecies: ['Greater Flamingo', 'Royal Tern', 'Western Reef Heron', 'Audouin\'s Gull', 'Bar-tailed Godwit', 'Eurasian Curlew'],
    speciesCount: '160+',
    access: 'From Tan-Tan (120 km south on N1). 4x4 recommended for park access. Entry from 20 MAD.',
    description:
      'Morocco\'s southernmost major wetland, this remote 185,000-hectare park protects a pristine coastal lagoon where the Sahara meets the Atlantic. The isolation means fewer visitors but extraordinary concentrations of waterbirds. Winter flocks of flamingos can exceed 20,000 birds. The sabkha (salt flat) margins attract desert-edge specialists, creating a unique overlap of wetland and Saharan species.',
  },
  {
    rank: 12,
    name: 'Moulouya River Estuary',
    region: 'Mediterranean Coast, near Nador',
    habitat: 'River estuary, saltmarsh, dunes',
    icon: Leaf,
    bestSeason: 'April-May, September-October',
    keySpecies: ['Purple Swamphen', 'Marbled Teal', 'Little Bittern', 'Black-winged Kite', 'Greater Short-toed Lark', 'Spectacled Warbler'],
    speciesCount: '190+',
    access: 'From Nador or Saida (20 km). Accessible by car on dirt tracks. No formal entry fee.',
    description:
      'Where Morocco\'s longest river meets the Mediterranean, this Important Bird Area supports breeding colonies of Purple Swamphen and the globally threatened Marbled Teal. The reed beds are extensive and productive for warblers and herons. During migration, the estuary funnels large numbers of raptors, storks, and passerines crossing between Europe and Africa. The adjacent dunes hold Spectacled Warbler and Thekla\'s Lark.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: KEY SPECIES
   ═══════════════════════════════════════════════════════════════ */

const keySpecies = [
  {
    name: 'Northern Bald Ibis',
    scientific: 'Geronticus eremita',
    status: 'Critically Endangered',
    icon: Feather,
    where: 'Souss-Massa NP, Tamri coast',
    season: 'Year-round (breeding Feb-Jul)',
    description:
      'Morocco guards the last significant wild population of this ancient species, once widespread across Europe and the Middle East. Around 600 birds nest on coastal cliffs and feed in nearby agricultural fields. Their glossy black plumage, bare red face, and curved bill make them unmistakable. Conservation efforts since the 1990s have stabilized the population after decades of decline.',
  },
  {
    name: 'Eleonora\'s Falcon',
    scientific: 'Falco eleonorae',
    status: 'Least Concern',
    icon: Eye,
    where: 'Atlantic islands (Essaouira), coastal passage',
    season: 'May-October (breeds late summer)',
    description:
      'This elegant, long-winged falcon breeds on Atlantic islands off the Moroccan coast, timing its nesting to coincide with autumn passerine migration. Both dark and pale morphs occur. Breeding colonies are best observed by boat from Essaouira. During migration, birds can be spotted along the entire Atlantic coast hawking insects and small birds over the waves.',
  },
  {
    name: 'Barbary Falcon',
    scientific: 'Falco pelegrinoides',
    status: 'Least Concern',
    icon: Mountain,
    where: 'Todra Gorge, Anti-Atlas, desert cliffs',
    season: 'Year-round resident',
    description:
      'The desert cousin of the Peregrine Falcon, smaller and paler with a distinctive rufous nape. Barbary Falcons inhabit arid gorges and desert cliff faces throughout southern Morocco. Todra Gorge offers some of the most reliable sightings, where pairs nest on high ledges and hunt pigeons and larks over the surrounding desert. Their high-speed stoops along the gorge walls are a memorable spectacle.',
  },
  {
    name: 'Moussier\'s Redstart',
    scientific: 'Phoenicurus moussieri',
    status: 'Least Concern',
    icon: Star,
    where: 'Widespread in scrub and forest edges',
    season: 'Year-round resident',
    description:
      'A North African endemic and one of Morocco\'s most attractive birds. Males sport striking orange underparts, a black head, and a bold white wing patch. Found from sea level to 2,500 metres in open scrub, forest edges, and rocky hillsides. Particularly easy to spot along the Souss-Massa coast and in the argan woodland around Taroudant. Confiding and photogenic, this species is a trip highlight for visiting birders.',
  },
  {
    name: 'Levaillant\'s Woodpecker',
    scientific: 'Picus vaillantii',
    status: 'Least Concern',
    icon: TreeDeciduous,
    where: 'Ifrane cedar forests, Middle Atlas',
    season: 'Year-round resident',
    description:
      'A large, handsome green woodpecker restricted to the forests of North Africa. Males have an entirely red crown and moustache, while females show a black crown. The cedar and oak forests of the Middle Atlas around Ifrane are the most reliable location. Listen for their loud, laughing call echoing through the ancient cedars before scanning tree trunks and fallen logs. Early morning visits to mature forest stands offer the best chances.',
  },
  {
    name: 'Greater Flamingo',
    scientific: 'Phoenicopterus roseus',
    status: 'Least Concern',
    icon: Sunrise,
    where: 'Merja Zerga, Oualidia, Khenifiss, Dayet Srji',
    season: 'October-April (peak winter)',
    description:
      'Large flocks of Greater Flamingos overwinter at Morocco\'s coastal and inland wetlands, sometimes numbering in the tens of thousands. Merja Zerga and Khenifiss National Park host the largest concentrations. The sight of thousands of flamingos filtering the shallows at sunrise, with the Atlas Mountains as a backdrop, is one of Morocco\'s great wildlife spectacles. Some birds remain through summer, though numbers are much reduced.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March-May)',
    icon: Leaf,
    highlights: [
      'Peak spring migration through Morocco\'s flyways',
      'Desert species in breeding plumage and song',
      'Wildflower bloom in the Atlas Mountains',
      'Northern Bald Ibis at active nest sites',
      'Warblers, flycatchers, and shrikes in passage',
    ],
    rating: 'Peak Season',
  },
  {
    season: 'Summer (June-August)',
    icon: Sun,
    highlights: [
      'Eleonora\'s Falcon at breeding colonies',
      'Alpine species at Oukaimeden (snow-free)',
      'Breeding desert specialists active at dawn',
      'Seabird movements along the Atlantic',
      'Fewer birders means quieter sites',
    ],
    rating: 'Good for Specialists',
  },
  {
    season: 'Autumn (September-November)',
    icon: CloudRain,
    highlights: [
      'Southbound migration in full flow',
      'Raptors streaming through Strait of Gibraltar',
      'Eleonora\'s Falcons hunting passage migrants',
      'Waders building at coastal wetlands',
      'First winter visitors arriving at lagoons',
    ],
    rating: 'Excellent',
  },
  {
    season: 'Winter (December-February)',
    icon: Mountain,
    highlights: [
      'Massive flamingo flocks at Merja Zerga',
      'Wintering raptors across the plains',
      'Waterfowl concentrations at Atlas lakes',
      'Desert birding comfortable in mild temperatures',
      'Great Bustard on agricultural plains',
    ],
    rating: 'Very Good',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: EQUIPMENT GUIDE
   ═══════════════════════════════════════════════════════════════ */

const equipmentGuide = [
  {
    item: 'Binoculars (8x42 or 10x42)',
    icon: Binoculars,
    priority: 'Essential',
    description: 'Your primary birding tool. 8x42 for wider field of view in forests; 10x42 for extra reach in open desert and wetlands. Waterproof models withstand Morocco\'s dust and occasional rain.',
    priceRange: 'Quality pairs from 2,000 MAD; premium from 8,000 MAD',
  },
  {
    item: 'Spotting Scope & Tripod',
    icon: Eye,
    priority: 'Highly Recommended',
    description: 'Critical for wetland birding where distances are long. A 20-60x zoom scope on a stable tripod transforms your lagoon and estuary visits. Essential for identifying distant waders and raptors.',
    priceRange: 'Compact scopes from 3,500 MAD; quality tripod from 1,500 MAD',
  },
  {
    item: 'Field Guide',
    icon: BookOpen,
    priority: 'Essential',
    description: 'Collins Bird Guide (Svensson et al.) covers all Moroccan species and is the standard reference. For North African specialties, supplement with "Where to Watch Birds in Morocco" by Patrick and Fedora Bergier.',
    priceRange: 'From 350 MAD per guide book',
  },
  {
    item: 'Camera & Telephoto Lens',
    icon: Camera,
    priority: 'Optional',
    description: 'A DSLR or mirrorless camera with a 400mm+ lens for bird photography. Morocco\'s clear light and confiding species make it excellent for bird photography. Bring dust protection for desert work.',
    priceRange: 'Entry telephoto setups from 8,000 MAD',
  },
  {
    item: 'Sun Protection & Clothing',
    icon: Sun,
    priority: 'Essential',
    description: 'Wide-brimmed hat, SPF 50 sunscreen, lightweight long-sleeved shirts. Khaki or olive colors help you blend in. Layered clothing for Atlas highlands where temperatures drop sharply.',
    priceRange: 'From 200 MAD for basics',
  },
  {
    item: 'Notebook & Bird Recording App',
    icon: BookOpen,
    priority: 'Recommended',
    description: 'A waterproof field notebook for on-the-spot notes. eBird (free app) is excellent for logging sightings and contributing to citizen science. Merlin Bird ID helps with identification of unfamiliar species.',
    priceRange: 'Free apps; notebook from 30 MAD',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ETHICAL BIRDING GUIDELINES
   ═══════════════════════════════════════════════════════════════ */

const ethicalGuidelines = [
  {
    rule: 'Maintain Distance from Nests',
    icon: ShieldCheck,
    description: 'Stay at least 50 metres from active nests. The Northern Bald Ibis is extremely sensitive to disturbance during breeding. Use your scope rather than approaching. National park wardens enforce buffer zones around key nesting sites.',
  },
  {
    rule: 'Avoid Playback in Sensitive Areas',
    icon: AlertTriangle,
    description: 'Playing recorded bird calls to attract species can cause stress and disrupt breeding. This practice is particularly harmful for territorial species during nesting season. If you use playback at all, limit it to brief, low-volume use away from nest sites.',
  },
  {
    rule: 'Stay on Established Trails',
    icon: Map,
    description: 'Stick to paths and tracks in national parks and protected areas. Off-trail walking damages fragile desert crust, wetland margins, and alpine vegetation. Many birding sites have designated observation points positioned for optimal viewing without disturbance.',
  },
  {
    rule: 'Share Sightings Responsibly',
    icon: Globe,
    description: 'Log your sightings on eBird to support conservation science. However, avoid publicizing exact nest locations of rare species on social media. Share general site names rather than precise GPS coordinates for sensitive species.',
  },
  {
    rule: 'Support Local Communities',
    icon: Users,
    description: 'Hire local guides and stay in locally-owned accommodations near birding sites. This ensures birdwatching generates income for communities living alongside the birds, creating economic incentives for habitat protection.',
  },
  {
    rule: 'Leave No Trace',
    icon: Leaf,
    description: 'Carry out all waste, especially in remote desert and mountain sites. Avoid leaving food scraps that attract non-native predators to sensitive habitats. Park in designated areas to avoid compacting soil and damaging vegetation.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: GUIDED TOUR OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const tourOptions = [
  {
    type: 'Self-Guided Day Trips',
    icon: Compass,
    price: 'From 200 MAD (transport + entry)',
    duration: 'Flexible',
    description: 'Accessible sites like Oualidia, Merja Zerga, and Ifrane forests can be visited independently with a rental car. Download eBird hotspot maps before your trip. Best for experienced birders familiar with North African species.',
    includes: ['Your own pace', 'Flexible schedule', 'Lower cost'],
  },
  {
    type: 'Guided Day Excursions',
    icon: Users,
    price: 'From 800 MAD per person',
    duration: '6-10 hours',
    description: 'A local birding guide takes you to the best spots in a specific area. Guides know exact territories of key species and save hours of searching. Available from Marrakech (Atlas), Agadir (Souss-Massa), and Fes (Middle Atlas).',
    includes: ['Expert local guide', 'Transport included', 'Species identification help'],
  },
  {
    type: 'Multi-Day Birding Tours (7-10 Days)',
    icon: Calendar,
    price: 'From 12,000 MAD per person',
    duration: '7-10 days',
    description: 'Comprehensive tours covering multiple habitats from coast to desert to mountains. Typically Marrakech to Sahara and back, or a grand loop including the Middle Atlas, Todra Gorge, Merzouga, and the Souss-Massa coast. Group sizes usually 6-12 participants.',
    includes: ['Accommodation', 'All transport', 'Expert guide', 'Meals'],
  },
  {
    type: 'Premium Specialist Tours',
    icon: Star,
    price: 'From 25,000 MAD per person',
    duration: '10-14 days',
    description: 'Led by international bird tour leaders with deep Morocco expertise. Small groups of 6-8, premium accommodation, and intensive birding targeting 250+ species. These tours often include pelagic trips for seabirds and night drives for owls and nightjars.',
    includes: ['International leader + local guide', 'Premium lodging', 'Pelagic trips', 'Night drives'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoBirdwatchingPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Breadcrumb ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Morocco Birdwatching Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-birdwatching.webp"
          alt="Flock of flamingos at a Moroccan coastal lagoon during golden hour with dunes in the background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 text-white/90 text-sm font-[family-name:var(--font-heading)] tracking-wide uppercase mb-4">
            <Binoculars className="w-4 h-4" /> Wildlife &amp; Nature
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco Birdwatching Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-[family-name:var(--font-heading)] max-w-3xl mx-auto leading-relaxed">
            From the critically endangered Northern Bald Ibis on Atlantic cliffs to desert specialists in the Sahara,
            Morocco hosts over 480 bird species across some of the most diverse habitats in the Western Palearctic.
          </p>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
            Why Morocco Is a World-Class Birding Destination
          </h2>
          <div className="prose max-w-none text-[var(--text-secondary)] space-y-4">
            <p className="text-base leading-relaxed">
              Morocco sits at the crossroads of three biogeographic regions: the Western Palearctic, the Afrotropical,
              and the Saharan-Arabian. This position, combined with habitats ranging from 4,000-metre mountain peaks
              to coastal wetlands, ancient forests to the world&apos;s largest hot desert, gives the country an
              extraordinary avifauna of over 480 recorded species.
            </p>
            <p className="text-base leading-relaxed">
              For European birders, Morocco offers familiar migrants alongside genuine African and desert species
              impossible to see further north. For North American visitors, every bird is new and exciting. The country
              is also the last stronghold of the Northern Bald Ibis, a critically endangered species that has disappeared
              from everywhere else except a reintroduction project in Spain.
            </p>
            <p className="text-base leading-relaxed">
              Practical factors make Morocco especially appealing: short flights from Europe, well-maintained roads
              connecting key sites, affordable accommodation and food, a growing network of skilled local birding guides,
              and a tourism infrastructure that makes multi-site itineraries straightforward. A focused 10-day trip
              can realistically record 200+ species.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="card-moroccan p-4 text-center">
              <Feather className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">480+</p>
              <p className="text-xs text-[var(--text-muted)]">Recorded Species</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <MapPin className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">12+</p>
              <p className="text-xs text-[var(--text-muted)]">Major Birding Sites</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Globe className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">24</p>
              <p className="text-xs text-[var(--text-muted)]">IBAs (Important Bird Areas)</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Calendar className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">12</p>
              <p className="text-xs text-[var(--text-muted)]">Months of Birding</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top 12 Birding Sites ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 12 Birding Sites in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From Atlantic lagoons to Saharan oases, these are the sites that every serious birder should prioritize
            on a Morocco trip.
          </p>

          <div className="space-y-8">
            {birdingSites.map((site) => {
              const SiteIcon = site.icon;
              return (
                <div key={site.rank} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-sm">
                      {site.rank}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <SiteIcon className="w-5 h-5 text-[var(--color-accent)]" />
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {site.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[var(--color-accent)]" /> {site.region}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[var(--color-gold)]" /> {site.bestSeason}
                        </span>
                        <span className="flex items-center gap-1">
                          <Feather className="w-3 h-3 text-[var(--color-accent)]" /> {site.speciesCount} species
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{site.description}</p>

                  <div className="mb-3">
                    <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wide">
                      Key Species
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {site.keySpecies.map((species) => (
                        <span
                          key={species}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--surface-muted)] text-xs text-[var(--text-secondary)] border border-[var(--border-primary)]"
                        >
                          <CheckCircle className="w-3 h-3 text-[var(--color-accent)]" />
                          {species}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-primary)]">
                    <Compass className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[var(--text-primary)]">Access:</strong> {site.access}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Key Species Profiles ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Feather className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Key Species to Find in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These six species represent Morocco&apos;s most sought-after birds, from critically endangered icons
            to colorful North African endemics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keySpecies.map((species) => {
              const SpeciesIcon = species.icon;
              return (
                <div key={species.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <SpeciesIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {species.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] italic">{species.scientific}</p>
                    </div>
                    <span className={`ml-auto text-xs px-2.5 py-1 rounded-full font-medium ${
                      species.status === 'Critically Endangered'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {species.status}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{species.description}</p>

                  <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)]" /> {species.where}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[var(--color-gold)]" /> {species.season}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Seasonal Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            When to Go: Seasonal Birding Calendar
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco delivers rewarding birding in every month. Spring migration is the undisputed peak, but each season
            brings its own specialties and highlights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                      <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                      {season.rating}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {season.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Equipment Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Binoculars className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Birding Equipment
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The right gear transforms a good birding trip into a great one. Here is what to pack for Morocco.
          </p>

          <div className="space-y-5">
            {equipmentGuide.map((gear) => {
              const GearIcon = gear.icon;
              return (
                <div key={gear.item} className="card-moroccan p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center flex-shrink-0">
                      <GearIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {gear.item}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          gear.priority === 'Essential'
                            ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                            : gear.priority === 'Highly Recommended'
                            ? 'bg-[var(--color-gold)]/10 text-[var(--color-gold)]'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {gear.priority}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-2 leading-relaxed">{gear.description}</p>
                      <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-[var(--color-accent)]" /> {gear.priceRange}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Guided Tours ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Guided Birding Tours
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From independent day trips to fully guided expeditions, there is an option for every budget and experience
            level. Seasonal pricing may vary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourOptions.map((tour) => {
              const TourIcon = tour.icon;
              return (
                <div key={tour.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TourIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {tour.type}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-3">
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" /> {tour.price}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[var(--color-gold)]" /> {tour.duration}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{tour.description}</p>

                  <div className="pt-3 border-t border-[var(--border-primary)]">
                    <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      Includes:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tour.includes.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-secondary)]"
                        >
                          <CheckCircle className="w-3 h-3 text-[var(--color-accent)]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ethical Birding ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ethical Birdwatching Practices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Responsible birding protects the species and habitats that make Morocco such a remarkable destination.
            Follow these guidelines to minimize your impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicalGuidelines.map((guideline) => {
              const GuidelineIcon = guideline.icon;
              return (
                <div key={guideline.rule} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <GuidelineIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {guideline.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{guideline.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Birders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sunrise className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Start at Dawn
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Bird activity peaks in the first two hours after sunrise. In desert areas, this is also when
                sandgrouse visit water points. Set your alarm and be at your birding site by first light. Many
                species become much harder to find after 10 AM, especially in summer.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Compass className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hire a Local Driver
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                For remote desert tracks like Tagdilt, a local driver with a 4x4 saves time and reduces
                risk. Drivers from Boumalne or Merzouga know the tracks and can spot Desert Sparrows and
                coursers from the vehicle. Day rates start from 500 MAD including fuel.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Protect Your Gear
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Saharan dust is fine and pervasive. Store optics in sealed cases when not in use. Bring lens
                cloths and a blower brush for sensor cleaning. In coastal areas, salt spray can damage lens
                coatings, so wipe down equipment each evening.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Carry Small Bills
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                National park entry fees, boatmen at Merja Zerga, and tips for local guides all require
                small denomination MAD notes. ATMs are scarce near remote birding sites. Carry enough cash
                for 2-3 days when heading to desert or mountain areas.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Study Before You Go
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Familiarize yourself with the key species using your field guide before arriving. Learn the
                calls of target species using apps like Merlin or xeno-canto. Knowing what to listen for
                doubles your detection rate, especially in dense scrub and forest habitats.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Stay Hydrated
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Carry at least 3 litres of water per person per day in desert and mountain areas. Dehydration
                reduces concentration and can make you careless near cliff edges and uneven terrain. Pack
                electrolyte sachets for hot-weather birding sessions lasting more than 4 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-wildlife-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Feather className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Wildlife Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover Morocco&apos;s diverse wildlife beyond birds, from Barbary macaques to desert foxes and marine life.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-nature-tours" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <TreeDeciduous className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Nature Tours
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Guided nature excursions through national parks, forests, and protected areas across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-photography-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Camera className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Photography Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Tips, locations, and gear recommendations for capturing Morocco&apos;s landscapes, wildlife, and culture.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-hiking-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Hiking Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trail guides for Atlas Mountains trekking, gorge hikes, and coastal walks that pair well with birding.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-sahara-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Sahara Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Sahara desert experiences including Erg Chebbi, Merzouga, and desert camping.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-camping-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Camping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Where and how to camp across Morocco, from Atlas Mountains to desert bivouacs near birding hotspots.
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

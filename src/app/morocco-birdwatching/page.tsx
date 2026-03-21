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
  MessageCircleQuestion,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-birdwatching`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Birdwatching Guide 2026 | Top Birding Sites, Key Species & Migration Seasons',
  description:
    'Complete guide to birdwatching in Morocco. Top birding sites including Souss-Massa, Merja Zerga, Oualidia Lagoon, Todra Gorge, High Atlas, and Ifrane. Northern Bald Ibis colonies, Eleonora\'s Falcon, Moussier\'s Redstart, Barbary Falcon, Saharan desert specialists. Migration seasons, guided tours from 800 MAD, photography tips, species checklist, and equipment.',
  keywords: [
    'Morocco birdwatching guide',
    'birding Morocco 2026',
    'Morocco bird species',
    'Northern Bald Ibis Morocco',
    'Souss-Massa birdwatching',
    'Merja Zerga birding',
    'Oualidia lagoon birds',
    'Morocco bird tours',
    'Eleonora\'s Falcon Morocco',
    'Moussier\'s Redstart',
    'Barbary Falcon Todra Gorge',
    'Morocco migration birds',
    'Atlas Mountains birding',
    'Sahara birds Morocco',
    'birdwatching tours Morocco',
    'Morocco ornithology',
    'Ifrane cedar forest birds',
    'Oued Massa birding',
    'Tamri Northern Bald Ibis',
    'bird photography Morocco',
  ],
  openGraph: {
    title: 'Morocco Birdwatching Guide 2026 | Top Birding Sites, Key Species & Migration Seasons',
    description:
      'Morocco hosts 480+ bird species across wetlands, mountains, deserts, and coastlines. From the critically endangered Northern Bald Ibis to Saharan desert specialists, explore the best birding sites, migration seasons, guided tours, and photography tips.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-birdwatching.webp`,
        width: 1200,
        height: 630,
        alt: 'Birdwatcher scanning flamingos at a Moroccan coastal lagoon with Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Birdwatching Guide 2026 | 480+ Species Across Top Birding Sites',
    description:
      'Top birding sites, key species, migration seasons, guided tours from 800 MAD, photography tips, and equipment for birdwatching in Morocco.',
    images: [`${BASE_URL}/images/hero-birdwatching.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the best time of year for birdwatching in Morocco?',
    a: 'Spring migration (March to May) is peak season, with hundreds of Palearctic species passing through on their way north. Autumn (September to November) brings the return southbound migration and raptor passage through the Strait of Gibraltar. Winter is best for waterfowl at wetlands like Merja Zerga. Summer is quieter but ideal for breeding desert specialists and Eleonora\'s Falcon colonies.',
  },
  {
    q: 'Where can I see the Northern Bald Ibis in Morocco?',
    a: 'The Northern Bald Ibis breeds at Souss-Massa National Park, 65 km south of Agadir, which holds approximately 600 individuals -- the majority of the global wild population. A smaller colony exists near Tamri, 40 km north of Agadir. The birds are most visible at their cliff-face nesting sites between February and July, and they feed in nearby agricultural fields year-round.',
  },
  {
    q: 'Do I need a guide for birdwatching in Morocco?',
    a: 'A local birding guide is strongly recommended, especially for first-time visitors. Moroccan guides know the exact territories of scarce species, can navigate remote desert and mountain tracks safely, and often have access to private land near key sites. Guided day trips start from 800 MAD per person. Independent birders can visit accessible sites like Oualidia, Merja Zerga, and Ifrane without a guide.',
  },
  {
    q: 'How many bird species can be found in Morocco?',
    a: 'Morocco has recorded over 480 bird species, including around 200 breeding residents, 150+ regular passage migrants, 80+ winter visitors, and numerous rare vagrants. The country sits at the crossroads of Europe, Africa, and the Atlantic and Mediterranean flyways, making it one of the richest birding destinations in the Western Palearctic region.',
  },
  {
    q: 'What equipment should I bring for birdwatching in Morocco?',
    a: 'Essential gear includes binoculars (8x42 or 10x42), a field guide (Collins Bird Guide covers all Moroccan species), sun protection, and sturdy walking shoes. A spotting scope with tripod is highly recommended for wetland sites. For bird photography, bring a camera with a 400mm+ telephoto lens. Carry dust protection for optics in desert areas and at least 3 litres of water per person per day.',
  },
  {
    q: 'Is birdwatching in Morocco safe?',
    a: 'Birdwatching in Morocco is very safe. The main practical considerations are sun protection, adequate water supply in desert areas, and awareness of terrain when walking near cliff edges or in rocky gorges. Remote sites like Tagdilt Track benefit from a 4x4 vehicle and a knowledgeable driver. National parks have marked trails and ranger stations at major entry points.',
  },
  {
    q: 'Can I combine birdwatching with other activities in Morocco?',
    a: 'Many birding sites overlap with cultural and adventure travel. You can combine Merja Zerga with Moulay Bousselham\'s fishing village, Oualidia birding with its famous oyster farms (from 80 MAD per plate), Atlas birding with trekking to Toubkal, and Sahara birding with a desert camping experience at Erg Chebbi. Most multi-day birding tours incorporate cultural stops and local cuisine.',
  },
  {
    q: 'What are the costs for a birdwatching trip in Morocco?',
    a: 'Budget birders can explore accessible sites independently for minimal cost. National park entry fees range from 20 to 70 MAD. Guided birding day trips start from 800 MAD per person. Multi-day guided tours (7-14 days) cost from 12,000 MAD per person including accommodation, transport, and guide fees. Premium specialist tours with international leaders range from 25,000 to 45,000 MAD. Seasonal pricing can change during peak months.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Birdwatching Guide 2026',
  description:
    'Complete guide to birdwatching in Morocco covering top birding sites, 480+ species, migration seasons, guided tours, photography tips, equipment, and species checklist.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-birdwatching.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Birdwatching Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: TOP BIRDING SITES
   ================================================================ */

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
      'The crown jewel of Moroccan birding. This 33,800-hectare park protects the largest remaining wild population of the critically endangered Northern Bald Ibis, with around 600 individuals nesting on coastal cliffs. The Oued Souss and Oued Massa estuaries attract thousands of waders and waterfowl, while the arid scrubland hosts resident North African endemics including Black-crowned Tchagra and Moussier\'s Redstart.',
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
      'Morocco\'s premier wetland birding site and a Ramsar-designated wetland of international importance. This 7,000-hectare tidal lagoon on the Atlantic coast hosts tens of thousands of wintering waterbirds. At peak winter, flocks of 15,000+ flamingos fill the shallows. The mudflats support dense concentrations of waders during migration, and Marsh Harriers hunt over the reed beds throughout winter.',
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
    name: 'Todra Gorge & Dades Valley',
    region: 'Eastern High Atlas',
    habitat: 'Rocky gorge, cliff faces, oasis gardens',
    icon: Mountain,
    bestSeason: 'March-May, September-November',
    keySpecies: ['Bonelli\'s Eagle', 'Barbary Falcon', 'Tristram\'s Warbler', 'Blue Rock Thrush', 'Rock Bunting', 'Crag Martin'],
    speciesCount: '100+',
    access: 'Paved road from Tinghir (15 km to gorge). Drive into the gorge; walking trails beyond the road end.',
    description:
      'The 300-metre limestone walls of Todra Gorge create a dramatic backdrop for scanning cliff-nesting raptors. Bonelli\'s Eagles and Barbary Falcons patrol the upper crags, while Blue Rock Thrushes and Rock Buntings forage on the lower ledges. The palm-lined oasis gardens at the gorge entrance hold Bulbul, Moussier\'s Redstart, and migrant warblers in season. The nearby Dades Valley extends the habitat diversity with juniper slopes and cultivated terraces.',
  },
  {
    rank: 5,
    name: 'Oukaimeden & High Atlas Passes',
    region: 'High Atlas, south of Marrakech',
    habitat: 'Alpine meadow, scree slopes, cliff faces',
    icon: Mountain,
    bestSeason: 'May-September (snow-free months)',
    keySpecies: ['Crimson-winged Finch', 'Alpine Accentor', 'Shore Lark (atlas)', 'Lammergeier', 'Golden Eagle', 'Alpine Chough'],
    speciesCount: '80+',
    access: 'Paved mountain road from Marrakech (75 km). Accessible by car to 2,600m. Cable car to 3,200m.',
    description:
      'At 2,600 metres, the ski resort of Oukaimeden becomes a premier alpine birding destination during snow-free months. The rocky slopes above the treeline are the most reliable spot in Morocco for the Crimson-winged Finch, with flocks feeding on seeds among the scree. Alpine Accentors hop around the ski-lift station, and Lammergeiers cruise the thermals over the surrounding peaks. This is the highest birding site easily reachable by road in the Atlas.',
  },
  {
    rank: 6,
    name: 'Ifrane National Park & Cedar Forests',
    region: 'Middle Atlas Mountains',
    habitat: 'Cedar forest, oak woodland, lakes',
    icon: TreeDeciduous,
    bestSeason: 'April-June (breeding), September-October',
    keySpecies: ['Levaillant\'s Woodpecker', 'Atlas Horned Lark', 'African Crimson-winged Finch', 'Coal Tit (atlas)', 'Firecrest', 'Short-toed Treecreeper'],
    speciesCount: '200+',
    access: 'Paved road from Fes (60 km) or Meknes (65 km). Park entry from 20 MAD. Well-maintained forest trails.',
    description:
      'The ancient cedar forests around Ifrane are the best location in Morocco for Levaillant\'s Woodpecker, a scarce North African endemic. These towering Atlas cedars, some over 800 years old, support a rich woodland bird community. Barbary macaques share the canopy, and the mountain lakes (dayet) nearby add waterfowl to the day list. The surrounding oak woodland holds different species again, making this a full-day birding area.',
  },
  {
    rank: 7,
    name: 'Oued Massa & Tamri Coast',
    region: 'Atlantic Coast, near Agadir',
    habitat: 'River estuary, coastal cliffs, argan scrub',
    icon: Sun,
    bestSeason: 'Year-round',
    keySpecies: ['Northern Bald Ibis', 'Eleonora\'s Falcon (passage)', 'Barbary Falcon', 'Cream-colored Courser', 'Moussier\'s Redstart', 'Black Wheatear'],
    speciesCount: '180+',
    access: 'Coastal road from Agadir (40 km to Tamri, 65 km to Oued Massa). Freely accessible cliffs. No entry fee at Tamri.',
    description:
      'The Oued Massa river mouth within Souss-Massa NP is a birding hotspot in its own right, with waders, egrets, and terns feeding in the estuary. Tamri, 40 km north of Agadir, hosts a secondary Northern Bald Ibis colony where the birds feed in open fields at close range. The argan woodland between the two sites is one of the most accessible areas for Moussier\'s Redstart and Black Wheatear. During autumn, Eleonora\'s Falcons pass along this coastline.',
  },
  {
    rank: 8,
    name: 'Erg Chebbi & Merzouga Oases',
    region: 'Eastern Sahara, near Erfoud',
    habitat: 'Sand dunes, desert scrub, oasis lakes',
    icon: Sun,
    bestSeason: 'March-May, October-November',
    keySpecies: ['Desert Sparrow', 'Egyptian Nightjar', 'Spotted Sandgrouse', 'Cream-colored Courser', 'Fulvous Babbler', 'Hoopoe Lark'],
    speciesCount: '120+',
    access: 'Paved road from Erfoud (50 km). 4x4 needed for dune edges. Dayet Srji lake accessible on foot from Merzouga.',
    description:
      'The sand dunes of Erg Chebbi and the surrounding hamada host true desert specialists found nowhere else in Morocco. Desert Sparrows inhabit the oasis palms, Egyptian Nightjars roost on sandy ground by day, and Spotted Sandgrouse visit water points at dawn. After rare winter rains, Dayet Srji fills to become a temporary lake that draws flamingos and migrant waders to the edge of the Sahara -- one of Morocco\'s most surreal birding experiences.',
  },
] as const;

/* ================================================================
   DATA: KEY SPECIES
   ================================================================ */

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
      'This elegant, long-winged falcon breeds on Atlantic islands off the Moroccan coast, timing its nesting to coincide with autumn passerine migration so it can feed small birds to its chicks. Both dark and pale morphs occur. Breeding colonies are best observed by boat from Essaouira. During migration, birds can be spotted along the Atlantic coast hawking insects and small birds over the waves.',
  },
  {
    name: 'Moussier\'s Redstart',
    scientific: 'Phoenicurus moussieri',
    status: 'Least Concern',
    icon: Star,
    where: 'Widespread in scrub and forest edges',
    season: 'Year-round resident',
    description:
      'A North African endemic and one of Morocco\'s most attractive birds. Males sport striking orange underparts, a black head, and a bold white wing patch. Found from sea level to 2,500 metres in open scrub, forest edges, and rocky hillsides. Particularly easy to spot along the Souss-Massa coast and in argan woodland around Taroudant. Confiding and photogenic, this species is a consistent trip highlight for visiting birders.',
  },
  {
    name: 'Barbary Falcon',
    scientific: 'Falco pelegrinoides',
    status: 'Least Concern',
    icon: Mountain,
    where: 'Todra Gorge, Anti-Atlas, desert cliffs',
    season: 'Year-round resident',
    description:
      'The desert cousin of the Peregrine Falcon, smaller and paler with a distinctive rufous nape. Barbary Falcons inhabit arid gorges and desert cliff faces throughout southern Morocco. Todra Gorge offers some of the most reliable sightings, where pairs nest on high ledges and hunt pigeons and larks over the surrounding desert. Their high-speed stoops along the gorge walls are a spectacle worth the trip alone.',
  },
  {
    name: 'Levaillant\'s Woodpecker',
    scientific: 'Picus vaillantii',
    status: 'Least Concern',
    icon: TreeDeciduous,
    where: 'Ifrane cedar forests, Middle Atlas',
    season: 'Year-round resident',
    description:
      'A large, handsome green woodpecker restricted to the forests of North Africa. Males have an entirely red crown and moustache, while females show a black crown. The cedar and oak forests of the Middle Atlas around Ifrane are the most reliable location. Listen for their loud, laughing call echoing through the ancient cedars, then scan tree trunks and fallen logs. Early morning visits to mature forest stands offer the best chances.',
  },
  {
    name: 'Greater Flamingo',
    scientific: 'Phoenicopterus roseus',
    status: 'Least Concern',
    icon: Sunrise,
    where: 'Merja Zerga, Oualidia, Khenifiss, Dayet Srji',
    season: 'October-April (peak winter)',
    description:
      'Large flocks of Greater Flamingos overwinter at Morocco\'s coastal and inland wetlands, sometimes numbering in the tens of thousands. Merja Zerga and Khenifiss National Park host the largest concentrations. The sight of thousands of flamingos filtering the shallows at sunrise, with the Atlas Mountains as a backdrop, is one of Morocco\'s great wildlife spectacles.',
  },
] as const;

/* ================================================================
   DATA: SEASONAL CALENDAR
   ================================================================ */

const seasonalGuide = [
  {
    season: 'Spring (March-May)',
    icon: Leaf,
    highlights: [
      'Peak spring migration through Morocco\'s Atlantic and Mediterranean flyways',
      'Desert species in breeding plumage and full song',
      'Wildflower bloom across the Atlas Mountains',
      'Northern Bald Ibis at active nest sites with chicks',
      'Warblers, flycatchers, and shrikes in passage',
    ],
    rating: 'Peak Season',
  },
  {
    season: 'Summer (June-August)',
    icon: Sun,
    highlights: [
      'Eleonora\'s Falcon at breeding colonies off Essaouira',
      'Alpine species at Oukaimeden above the snowline',
      'Breeding desert specialists active at dawn and dusk',
      'Seabird movements along the Atlantic coast',
      'Fewer birders at all sites means quieter observation',
    ],
    rating: 'Good for Specialists',
  },
  {
    season: 'Autumn (September-November)',
    icon: CloudRain,
    highlights: [
      'Southbound migration in full flow across all habitats',
      'Thousands of raptors streaming through Strait of Gibraltar',
      'Eleonora\'s Falcons actively hunting passage migrants',
      'Wader numbers building rapidly at coastal wetlands',
      'First winter visitors arriving at lagoons and estuaries',
    ],
    rating: 'Excellent',
  },
  {
    season: 'Winter (December-February)',
    icon: Mountain,
    highlights: [
      'Massive flamingo flocks at Merja Zerga and Khenifiss',
      'Wintering raptors across agricultural plains',
      'Waterfowl concentrations at Middle Atlas lakes',
      'Desert birding comfortable in mild daytime temperatures',
      'Great Bustard on the Doukkala and Tadla plains',
    ],
    rating: 'Very Good',
  },
] as const;

/* ================================================================
   DATA: EQUIPMENT GUIDE
   ================================================================ */

const equipmentGuide = [
  {
    item: 'Binoculars (8x42 or 10x42)',
    icon: Binoculars,
    priority: 'Essential',
    description: 'Your primary birding tool. 8x42 models give wider field of view for forest birding; 10x42 offer extra reach in open desert and wetlands. Waterproof construction withstands Morocco\'s dust and coastal salt spray.',
    priceRange: 'Quality pairs from 2,000 MAD; premium from 8,000 MAD',
  },
  {
    item: 'Spotting Scope & Tripod',
    icon: Eye,
    priority: 'Highly Recommended',
    description: 'Critical for wetland birding where distances are long. A 20-60x zoom scope on a stable tripod transforms your experience at Merja Zerga, Oualidia, and Dayet Srji. Indispensable for identifying distant waders and raptors soaring overhead.',
    priceRange: 'Compact scopes from 3,500 MAD; quality tripod from 1,500 MAD',
  },
  {
    item: 'Field Guide',
    icon: BookOpen,
    priority: 'Essential',
    description: 'Collins Bird Guide (Svensson et al.) covers all Moroccan species and is the standard reference. For site-specific information, supplement with "Where to Watch Birds in Morocco" by Patrick and Fedora Bergier, which details access routes and seasonal timings.',
    priceRange: 'From 350 MAD per guide book',
  },
  {
    item: 'Camera & Telephoto Lens',
    icon: Camera,
    priority: 'Optional',
    description: 'A DSLR or mirrorless camera with a 400mm+ telephoto lens for bird photography. Morocco\'s clear light and often confiding species make it an outstanding destination for bird photography. Bring lens hoods and dust protection for desert fieldwork.',
    priceRange: 'Entry telephoto setups from 8,000 MAD',
  },
  {
    item: 'Sun Protection & Clothing',
    icon: Sun,
    priority: 'Essential',
    description: 'Wide-brimmed hat, SPF 50 sunscreen, lightweight long-sleeved shirts. Khaki or olive colors help you blend into scrub habitats. Layer for Atlas highlands where temperatures drop sharply after sunset, even in summer.',
    priceRange: 'From 200 MAD for basics',
  },
  {
    item: 'Notebook & Bird Recording App',
    icon: BookOpen,
    priority: 'Recommended',
    description: 'A waterproof field notebook for sketches and on-the-spot notes. eBird (free app) is the standard for logging sightings and contributing to citizen science. Merlin Bird ID helps with identification when you encounter unfamiliar species away from your scope.',
    priceRange: 'Free apps; notebook from 30 MAD',
  },
] as const;

/* ================================================================
   DATA: PHOTOGRAPHY TIPS
   ================================================================ */

const photographyTips = [
  {
    tip: 'Golden Hour Light',
    icon: Sunrise,
    description: 'Morocco\'s latitude delivers extended golden hours. The first and last 90 minutes of daylight provide warm, directional light that flatters plumage colors. Flamingos at Merja Zerga and ibis at Souss-Massa are most photogenic in the low-angle dawn light.',
  },
  {
    tip: 'Shoot Into Open Shade',
    icon: Camera,
    description: 'Midday Moroccan sun creates harsh shadows on birds. Position yourself so subjects are in open shade -- cliff overhangs in gorges, canopy edges in forests. This fills in feather detail and reduces contrast that blows highlights.',
  },
  {
    tip: 'Digiscoping at Wetlands',
    icon: Eye,
    description: 'Attach your smartphone to your spotting scope for surprisingly sharp images of distant flamingos and waders. Phone adapters cost from 200 MAD and work with most scope models. This eliminates the need for heavy telephoto lenses at lagoon sites.',
  },
  {
    tip: 'Protect Gear from Dust',
    icon: ShieldCheck,
    description: 'Saharan dust is ultra-fine and penetrates seals on equipment. Store lenses rear-cap-down in sealed bags. Carry a blower brush and lens cloths. Clean sensor and contacts each evening. In coastal areas, wipe down equipment to prevent salt corrosion.',
  },
  {
    tip: 'Camouflage and Hides',
    icon: Leaf,
    description: 'A lightweight camouflage net draped over you and your tripod lets you photograph wary species at closer range. At desert water points, arriving before dawn and waiting in a makeshift hide produces frame-filling shots of sandgrouse and coursers.',
  },
  {
    tip: 'Burst Mode for Raptors',
    icon: Feather,
    description: 'Set your camera to continuous autofocus and high-speed burst when shooting Barbary Falcons and Bonelli\'s Eagles at Todra Gorge. These birds move fast against complex backgrounds. A rate of 10+ frames per second significantly improves your keeper rate.',
  },
] as const;

/* ================================================================
   DATA: SPECIES CHECKLIST (REGIONAL)
   ================================================================ */

const checklistRegions = [
  {
    region: 'Atlantic Wetlands',
    icon: Compass,
    sites: 'Merja Zerga, Oualidia, Khenifiss',
    targetSpecies: ['Greater Flamingo', 'Eurasian Spoonbill', 'Osprey', 'Marsh Harrier', 'Slender-billed Gull', 'Audouin\'s Gull', 'Sandwich Tern', 'Black-tailed Godwit', 'Kentish Plover', 'Purple Swamphen'],
  },
  {
    region: 'Souss-Massa Coast',
    icon: Feather,
    sites: 'Souss-Massa NP, Tamri, Oued Massa',
    targetSpecies: ['Northern Bald Ibis', 'Moussier\'s Redstart', 'Black-crowned Tchagra', 'Barbary Partridge', 'Black Wheatear', 'Marbled Teal', 'Cream-colored Courser', 'Laughing Dove', 'Little Swift', 'Sardinian Warbler'],
  },
  {
    region: 'Middle Atlas Forests',
    icon: TreeDeciduous,
    sites: 'Ifrane NP, Dayet Aoua, Azrou cedars',
    targetSpecies: ['Levaillant\'s Woodpecker', 'Atlas Horned Lark', 'African Crimson-winged Finch', 'Short-toed Treecreeper', 'Firecrest', 'Coal Tit', 'Hawfinch', 'Crested Coot', 'Great Spotted Woodpecker', 'Long-eared Owl'],
  },
  {
    region: 'High Atlas & Gorges',
    icon: Mountain,
    sites: 'Oukaimeden, Todra Gorge, Dades Valley',
    targetSpecies: ['Crimson-winged Finch', 'Lammergeier', 'Bonelli\'s Eagle', 'Barbary Falcon', 'Alpine Accentor', 'Blue Rock Thrush', 'Tristram\'s Warbler', 'Rock Bunting', 'Alpine Chough', 'Crag Martin'],
  },
  {
    region: 'Saharan Desert',
    icon: Sun,
    sites: 'Erg Chebbi, Tagdilt Track, Merzouga',
    targetSpecies: ['Desert Sparrow', 'Egyptian Nightjar', 'Spotted Sandgrouse', 'Hoopoe Lark', 'Thick-billed Lark', 'Cream-colored Courser', 'Red-rumped Wheatear', 'Fulvous Babbler', 'Trumpeter Finch', 'Desert Warbler'],
  },
] as const;

/* ================================================================
   DATA: GUIDED TOUR OPTIONS
   ================================================================ */

const tourOptions = [
  {
    type: 'Self-Guided Day Trips',
    icon: Compass,
    price: 'From 200 MAD (transport + entry)',
    duration: 'Flexible',
    description: 'Accessible sites like Oualidia, Merja Zerga, and Ifrane can be visited independently with a rental car. Download eBird hotspot maps before your trip and study the field guide. Best for experienced birders familiar with Western Palearctic species.',
    includes: ['Your own pace', 'Flexible schedule', 'Lower cost'],
  },
  {
    type: 'Guided Day Excursions',
    icon: Users,
    price: 'From 800 MAD per person',
    duration: '6-10 hours',
    description: 'A local birding guide takes you to the best spots in a specific area. Guides know exact territories of key species and save hours of searching. Available from Marrakech (High Atlas), Agadir (Souss-Massa), and Fes (Middle Atlas forests).',
    includes: ['Expert local guide', 'Transport included', 'Species identification help'],
  },
  {
    type: 'Multi-Day Birding Tours (7-10 Days)',
    icon: Calendar,
    price: 'From 12,000 MAD per person',
    duration: '7-10 days',
    description: 'Comprehensive tours covering multiple habitats from coast to desert to mountains. Typical routes run from Marrakech through the High Atlas to the Sahara and back via the Souss-Massa coast. Group sizes of 6-12 participants. Seasonal pricing can change.',
    includes: ['Accommodation', 'All transport', 'Expert guide', 'Most meals'],
  },
  {
    type: 'Premium Specialist Tours',
    icon: Star,
    price: 'From 25,000 MAD per person',
    duration: '10-14 days',
    description: 'Led by international bird tour leaders with deep Morocco expertise. Small groups of 6-8 participants, premium accommodation, and intensive birding targeting 250+ species. Often include pelagic boat trips for seabirds off Essaouira and night drives for owls and nightjars.',
    includes: ['International leader + local guide', 'Premium lodging', 'Pelagic trips', 'Night drives'],
  },
] as const;

/* ================================================================
   DATA: ETHICAL BIRDING GUIDELINES
   ================================================================ */

const ethicalGuidelines = [
  {
    rule: 'Maintain Distance from Nests',
    icon: ShieldCheck,
    description: 'Stay at least 50 metres from active nests. The Northern Bald Ibis is extremely sensitive to disturbance during breeding season. Use your scope from a distance rather than approaching. National park wardens enforce buffer zones around key nesting sites and can fine violators.',
  },
  {
    rule: 'Limit Playback Use',
    icon: AlertTriangle,
    description: 'Playing recorded bird calls to attract species causes stress and disrupts breeding. This practice is especially harmful for territorial species during nesting season. If you use playback, limit it to brief, low-volume use well away from nest sites, and never for rare or endangered species.',
  },
  {
    rule: 'Stay on Established Trails',
    icon: Map,
    description: 'Stick to marked paths and vehicle tracks in national parks and protected areas. Walking off-trail damages fragile desert crust, wetland margins, and alpine vegetation. Many birding sites have designated observation points positioned for optimal viewing without causing disturbance.',
  },
  {
    rule: 'Share Sightings Responsibly',
    icon: Globe,
    description: 'Log your sightings on eBird to support conservation science and help future birders. However, avoid publicizing exact nest locations of rare species on social media. Share general site names rather than precise GPS coordinates for breeding pairs of sensitive species.',
  },
  {
    rule: 'Support Local Communities',
    icon: Users,
    description: 'Hire local guides, eat at village restaurants, and stay in locally-owned guesthouses near birding sites. This ensures birdwatching generates income for communities living alongside the birds, creating direct economic incentives for habitat protection and species conservation.',
  },
  {
    rule: 'Leave No Trace',
    icon: Leaf,
    description: 'Carry out all waste, especially in remote desert and mountain sites. Do not leave food scraps that attract non-native predators to sensitive nesting habitats. Park vehicles in designated areas to prevent soil compaction and vegetation damage around key birding zones.',
  },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoBirdwatchingPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 hero-overlay">
        <img
          src="/images/hero-birdwatching.webp"
          alt="Flock of flamingos at a Moroccan coastal lagoon during golden hour with dunes and Atlas Mountains in the background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Birdwatching Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Binoculars className="w-4 h-4" />
            Wildlife &amp; Nature
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Birdwatching
            <br className="hidden md:block" /> Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the critically endangered Northern Bald Ibis on Atlantic cliffs to Saharan
            desert specialists at Erg Chebbi, explore 480+ species across the Western Palearctic&apos;s
            most diverse birding destination.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Morocco Ranks Among the World&apos;s Best Birding Destinations
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco sits at the junction of three biogeographic zones: the Western Palearctic,
              the Afrotropical, and the Saharan-Arabian. Habitats range from 4,000-metre alpine
              peaks to coastal wetlands, ancient cedar forests to the northern fringe of the world&apos;s
              largest hot desert. That diversity of terrain, compressed into a country smaller than
              Texas, produces an avifauna of over 480 recorded species.
            </p>
            <p>
              For European birders, Morocco delivers familiar migrants alongside genuine African and
              desert species that are impossible to see further north. For North American visitors,
              every species is unfamiliar and the learning curve is half the thrill. The country is
              also the last stronghold of the Northern Bald Ibis, a critically endangered species
              that has disappeared from everywhere else on earth outside a small reintroduction
              project in southern Spain.
            </p>
            <p>
              Practical factors reinforce Morocco&apos;s appeal: short flights from European capitals,
              well-maintained roads connecting major birding sites, a growing network of skilled local
              birding guides, affordable accommodation and food, and a tourism infrastructure that
              makes multi-habitat itineraries straightforward. A focused 10-day trip covering coast,
              mountains, and desert can realistically record 200+ species.
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
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">24</p>
              <p className="text-xs text-[var(--text-muted)]">Important Bird Areas</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Globe className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">3</p>
              <p className="text-xs text-[var(--text-muted)]">Major Flyways</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Calendar className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">12</p>
              <p className="text-xs text-[var(--text-muted)]">Months of Birding</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top 8 Birding Sites ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Birding Sites in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From Atlantic lagoons teeming with flamingos to Saharan oases where sandgrouse drink at
            dawn, these sites define a Morocco birding trip.
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
            These six species represent Morocco&apos;s most sought-after birds, from a critically
            endangered icon to colorful North African endemics that draw birders from around the world.
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
            When to Go: Migration Seasons &amp; Birding Calendar
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco delivers rewarding birding in every month. Spring migration is the undisputed
            peak, but each season brings its own specialties and highlights.
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

      {/* ── Species Checklist by Region ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Regional Species Checklist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Use this checklist to plan your itinerary around target species. Each region offers a
            distinct set of birds tied to its habitat and elevation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklistRegions.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <RegionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {region.region}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mb-3">
                    <MapPin className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                    {region.sites}
                  </p>
                  <ul className="space-y-1.5">
                    {region.targetSpecies.map((species) => (
                      <li key={species} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3 h-3 text-[var(--color-gold)] flex-shrink-0" />
                        {species}
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Binoculars className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Birding Equipment
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The right gear transforms a good birding trip into a great one. Here is what to pack
            for Morocco.
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

      {/* ── Photography Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Bird Photography Tips for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s clear light, diverse habitats, and often confiding species make it a
            standout destination for bird photography at every skill level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
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
            From independent day trips to fully guided expeditions, there is an option for every
            budget and experience level. Seasonal pricing may vary.
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
            Responsible birding protects the species and habitats that make Morocco such a
            remarkable destination. Follow these guidelines to minimize your impact.
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
            Practical Tips for Birders in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sunrise className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Start at Dawn
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Bird activity peaks in the first two hours after sunrise. In desert areas, this is
                when sandgrouse visit water points and larks are in full song. Set your alarm and be
                at your birding site by first light. Many species become much harder to find after
                10 AM, especially during summer months.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Compass className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hire a Local Driver for Remote Sites
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                For remote desert tracks like Tagdilt, a local driver with a 4x4 saves time and
                reduces risk. Drivers from Boumalne or Merzouga know the pistes and can spot coursers
                and larks from the moving vehicle. Day rates start from 500 MAD including fuel.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Carry Small Bills
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                National park entry fees, boatmen at Merja Zerga, and tips for local guides all
                require small denomination MAD notes. ATMs are scarce near remote birding sites.
                Carry enough cash for 2-3 days when heading to desert or mountain areas.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Study Before You Go
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Familiarize yourself with key target species using your field guide before arriving.
                Learn the calls of priority species using Merlin or xeno-canto. Knowing what to
                listen for doubles your detection rate, especially in dense scrub and forest habitats
                where many birds are heard before they are seen.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Stay Hydrated
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Carry at least 3 litres of water per person per day in desert and mountain areas.
                Dehydration reduces concentration and can make you careless near cliff edges and
                uneven terrain. Pack electrolyte sachets for hot-weather birding sessions lasting more
                than 4 hours.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Log Sightings on eBird
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                eBird is the global standard for recording bird observations. Your checklists
                contribute to conservation science and help future birders plan their Morocco trips.
                Download offline maps for Morocco before you travel, as mobile data coverage is
                patchy at many remote birding sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions from birders planning a trip to Morocco.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Wildlife Guide',
                description: 'Discover Morocco\'s diverse wildlife beyond birds, from Barbary macaques to desert foxes and marine life.',
                href: '/morocco-wildlife-guide',
                icon: Feather,
              },
              {
                title: 'Morocco Hiking Guide',
                description: 'Trail guides for Atlas Mountains trekking, gorge hikes, and coastal walks that pair well with birding.',
                href: '/morocco-hiking-guide',
                icon: Mountain,
              },
              {
                title: 'Morocco Photography Guide',
                description: 'Tips, locations, and gear for capturing Morocco\'s landscapes, wildlife, and architectural details.',
                href: '/morocco-photography-guide',
                icon: Camera,
              },
              {
                title: 'Morocco Camping Guide',
                description: 'Where and how to camp across Morocco, from Atlas bivouacs to desert sites near birding hotspots.',
                href: '/morocco-camping-guide',
                icon: Compass,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#A0522D] to-[#7a3e22]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Plan Your Morocco Birding Trip
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Whether you are targeting the Northern Bald Ibis at Souss-Massa, scanning for raptors
            at Todra Gorge, or photographing flamingos at Merja Zerga, Morocco offers birding
            experiences found nowhere else. Start planning your trip today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#A0522D] font-bold py-3 px-8 rounded-full hover:bg-white/90 transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/birdwatching"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors"
            >
              Browse Birding Tours <Binoculars className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Bird,
  Mountain,
  Trees,
  Fish,
  Camera,
  Info,
  ArrowRight,
  ShieldCheck,
  Sun,
  Binoculars,
  Compass,
  Leaf,
  Globe,
  TreeDeciduous,
  Eye,
  Calendar,
  CircleDot,
  Award,
  BookOpen,
  Footprints,
  CloudSun,
  Sunrise,
  Tent,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Wildlife & Nature Guide 2026 | National Parks, Birdwatching & Eco Tourism',
  description:
    'Explore Morocco\'s wildlife and nature — 500+ bird species, 6 national parks, Barbary macaques, bald ibis colonies, desert fennec foxes, and whale watching in the Strait of Gibraltar. Complete guide with best seasons, parks, and eco-tourism tips.',
  keywords: [
    'morocco wildlife',
    'morocco national parks',
    'birdwatching morocco',
    'morocco nature tourism',
    'morocco eco tourism',
    'Toubkal national park',
    'Souss-Massa national park',
    'Ifrane national park',
    'morocco bird species',
    'bald ibis morocco',
    'Barbary macaque morocco',
    'morocco whale watching',
    'Merja Zerga birdwatching',
    'morocco desert wildlife',
    'morocco marine wildlife',
    'Atlas mountains wildlife',
    'fennec fox morocco',
    'morocco nature photography',
    'morocco wildlife safari',
    'morocco conservation',
  ],
  openGraph: {
    title: 'Morocco Wildlife & Nature Guide 2026 | National Parks, Birdwatching & Eco Tourism',
    description:
      'Discover Morocco\'s extraordinary biodiversity — from Atlas Mountain Barbary macaques to Saharan fennec foxes, 500+ bird species, whale watching, and 6 spectacular national parks.',
    url: `${BASE_URL}/morocco-wildlife-nature`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Morocco national park landscape with Atlas Mountains and diverse wildlife habitat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Wildlife & Nature Guide 2026 | Parks, Birds & Eco Tourism',
    description:
      'Complete guide to Morocco\'s wildlife — 500+ bird species, 6 national parks, whale watching, Barbary macaques, and eco-tourism across mountains, desert, and coast.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-wildlife-nature` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-wildlife-nature`,
  name: 'Morocco Wildlife & Nature Guide 2026 | National Parks, Birdwatching & Eco Tourism',
  description:
    'Complete guide to Morocco\'s wildlife, national parks, birdwatching hotspots, marine life, and eco-tourism opportunities across mountain, desert, and coastal ecosystems.',
  url: `${BASE_URL}/morocco-wildlife-nature`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-wildlife-nature`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Wildlife & Nature Guide', item: `${BASE_URL}/morocco-wildlife-nature` },
    ],
  },
};

const faqItems = [
  {
    question: 'What is the best time of year to see wildlife in Morocco?',
    answer:
      'Spring (March to May) is the prime season for birdwatching as migratory species pass through. Autumn (September to November) brings a second migration wave. Winter is best for waterfowl at wetlands like Merja Zerga. Summer works well for high Atlas Mountain treks and marine wildlife in the Strait of Gibraltar.',
  },
  {
    question: 'Where can I see Barbary macaques in Morocco?',
    answer:
      'The cedar forests of Ifrane National Park and the Middle Atlas near Azrou hold the largest populations of Barbary macaques. The Rif Mountains, particularly around Talassemtane National Park, also host troops. These are the only wild primates in Africa north of the Sahara.',
  },
  {
    question: 'Is whale watching possible in Morocco?',
    answer:
      'Yes. The Strait of Gibraltar between Tarifa (Spain) and Tangier offers reliable sightings of common dolphins, striped dolphins, pilot whales, and orcas. Boat trips depart from Tarifa, and between July and September, orcas follow bluefin tuna through the strait. Fin whales pass through in spring.',
  },
  {
    question: 'Do I need a guide to visit Morocco\'s national parks?',
    answer:
      'A licensed guide is mandatory for trekking in Toubkal National Park. Other parks like Souss-Massa and Ifrane can be explored independently, though a local guide dramatically improves your chances of spotting wildlife. Guides cost from 300 MAD to 800 MAD per day depending on the park and group size.',
  },
  {
    question: 'How many bird species can be found in Morocco?',
    answer:
      'Morocco hosts over 500 recorded bird species, making it one of the richest birding destinations in the Western Palearctic. Key species include the critically endangered northern bald ibis (found only at Souss-Massa), Eleonora\'s falcon, Moussier\'s redstart, Levaillant\'s woodpecker, and Tristram\'s warbler.',
  },
  {
    question: 'Are there any dangerous animals in Morocco?',
    answer:
      'Large predators were historically present but the Barbary lion and Atlas bear are now extinct in the wild. Visitors should watch for scorpions (especially the fat-tailed scorpion) in desert areas, and several viper species inhabit rocky terrain. Snakebites are rare, and medical facilities in major cities handle envenomation cases.',
  },
  {
    question: 'What conservation challenges does Morocco face?',
    answer:
      'Key challenges include habitat loss from expanding agriculture, overgrazing by livestock, illegal hunting, water scarcity affecting wetlands, and climate change shrinking the snow line in the Atlas. Organizations like GREPOM (BirdLife Morocco), the Haut Commissariat aux Eaux et Forets, and international NGOs run active conservation programs.',
  },
];

const jsonLdFaq = {
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

/* ═══════════════════════════════════════════════════════════════
   DATA: NATIONAL PARKS
   ═══════════════════════════════════════════════════════════════ */

const nationalParks = [
  {
    name: 'Toubkal National Park',
    region: 'High Atlas',
    established: 1942,
    area: '38,000 hectares',
    icon: Mountain,
    elevation: '4,167 m (Jebel Toubkal)',
    entry: 'From 20 MAD (guide mandatory for summit trek)',
    description:
      'North Africa\'s highest peak anchors this park south of Marrakech. Deep gorges, alpine meadows above 3,000 m, and Berber villages define the landscape. The Toubkal massif shelters Barbary sheep (aoudad), golden eagles, and the rare Moroccan rock lizard.',
    wildlife: ['Barbary sheep', 'Golden eagle', 'Booted eagle', 'Atlas day gecko', 'Moroccan rock lizard'],
  },
  {
    name: 'Souss-Massa National Park',
    region: 'Souss Plains (south of Agadir)',
    established: 1991,
    area: '33,800 hectares',
    icon: Bird,
    elevation: 'Sea level to 300 m',
    entry: 'From 20 MAD',
    description:
      'The last wild refuge of the northern bald ibis. Coastal cliffs, sand dunes, the Souss and Massa river estuaries, and argan woodland create a mosaic of habitats. Over 275 bird species have been recorded here, and a captive breeding program has boosted bald ibis numbers above 700 worldwide.',
    wildlife: ['Northern bald ibis', 'Marbled teal', 'Ruddy shelduck', 'Wild boar', 'Egyptian mongoose'],
  },
  {
    name: 'Ifrane National Park',
    region: 'Middle Atlas',
    established: 2004,
    area: '53,800 hectares',
    icon: TreeDeciduous,
    elevation: '1,600–2,400 m',
    entry: 'Free access (guided walks from 300 MAD)',
    description:
      'Dense Atlas cedar forests — some trees over 800 years old — blanket these Middle Atlas highlands. Morocco\'s most accessible Barbary macaque habitat sits along the road between Ifrane and Azrou. In winter, the region receives heavy snowfall, and the park doubles as a cross-country ski area.',
    wildlife: ['Barbary macaque', 'Atlas cedar forests', 'Barbary stag (reintroduced)', 'Eurasian sparrowhawk', 'Short-toed treecreeper'],
  },
  {
    name: 'Talassemtane National Park',
    region: 'Rif Mountains (near Chefchaouen)',
    established: 2004,
    area: '58,950 hectares',
    icon: Trees,
    elevation: '500–2,159 m',
    entry: 'Free access',
    description:
      'The last remaining Moroccan fir (Abies maroccana) forests grow only here, making this park globally significant for botanical conservation. The God\'s Bridge natural rock arch spans the Farda River gorge. Chefchaouen, 30 minutes away, makes a convenient base.',
    wildlife: ['Moroccan fir (endemic)', 'Barbary macaque', 'Golden jackal', 'Bonelli\'s eagle', 'Algerian nuthatch'],
  },
  {
    name: 'Al Hoceima National Park',
    region: 'Mediterranean Coast (Rif)',
    established: 2004,
    area: '48,460 hectares',
    icon: Fish,
    elevation: 'Sea level to 600 m',
    entry: 'From 10 MAD',
    description:
      'Sea cliffs plunge 600 m into the Mediterranean at Cala Iris. The marine section protects posidonia seagrass beds, osprey nesting sites, and one of the Mediterranean\'s last breeding colonies of Audouin\'s gull. Bottlenose dolphins patrol the bay year-round.',
    wildlife: ['Osprey', 'Audouin\'s gull', 'Bottlenose dolphin', 'Monk seal (rare)', 'Eleonora\'s falcon'],
  },
  {
    name: 'Khenifiss National Park',
    region: 'Atlantic Sahara (south of Tan-Tan)',
    established: 2006,
    area: '185,000 hectares',
    icon: Sun,
    elevation: 'Sea level to 200 m',
    entry: 'From 10 MAD',
    description:
      'Morocco\'s largest national park stretches across a vast coastal lagoon, Saharan dunes, and hamada (rocky desert). The Khenifiss lagoon is a Ramsar wetland hosting thousands of greater flamingos, spoonbills, and waders during winter. Dorcas gazelles roam the sandy interior.',
    wildlife: ['Greater flamingo', 'Spoonbill', 'Dorcas gazelle', 'Cream-coloured courser', 'Desert monitor lizard'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BIRDWATCHING HOTSPOTS
   ═══════════════════════════════════════════════════════════════ */

const birdwatchingSpots = [
  {
    name: 'Merja Zerga (Moulay Bousselham)',
    region: 'Atlantic Coast, north of Kenitra',
    bestSeason: 'November–March',
    keySpecies: 'Greater flamingo, slender-billed gull, marsh harrier, marbled teal, glossy ibis',
    description:
      'This 7,000-hectare coastal lagoon is Morocco\'s premier wintering ground for Palearctic waterbirds. Tens of thousands of waders, ducks, and flamingos gather between November and March. Local boatmen ferry birdwatchers across the lagoon for from 200 MAD per boat.',
  },
  {
    name: 'Oualidia Lagoon',
    region: 'Atlantic Coast, between El Jadida and Safi',
    bestSeason: 'Year-round (peak: October–April)',
    keySpecies: 'Greater flamingo, Kentish plover, osprey, little egret, sandwich tern',
    description:
      'A sheltered tidal lagoon famous for its oyster farms and birdlife. The calm, nutrient-rich waters attract flamingos, plovers, and terns. A walk along the lagoon edge at low tide puts you within 20 metres of feeding shorebirds. Oyster tastings at nearby farms cost from 80 MAD.',
  },
  {
    name: 'Souss-Massa Estuary',
    region: 'South of Agadir',
    bestSeason: 'Year-round',
    keySpecies: 'Northern bald ibis, Audouin\'s gull, Barbary falcon, brown-throated martin, blue-cheeked bee-eater',
    description:
      'The Massa river mouth is the single most reliable site on Earth to see wild northern bald ibis. A colony of roughly 120 breeding pairs nests on the coastal cliffs. Early morning visits (before 08:00) offer the best light and the birds are most active feeding in adjacent agricultural fields.',
  },
  {
    name: 'Oukaimeden Plateau',
    region: 'High Atlas (75 km from Marrakech)',
    bestSeason: 'May–October',
    keySpecies: 'Crimson-winged finch, alpine accentor, Atlas horned lark, shore lark, lammergeier',
    description:
      'At 2,600 m elevation, this ski-resort-turned-summer-meadow hosts high-altitude specialists that birders travel from across Europe to find. The crimson-winged finch feeds around the ski lift pylons. Lammergeiers (bearded vultures) patrol the ridgelines. A grand taxi from Marrakech runs from 400 MAD return.',
  },
  {
    name: 'Moulouya Estuary',
    region: 'Mediterranean Coast (near Nador)',
    bestSeason: 'March–May, September–November',
    keySpecies: 'Audouin\'s gull, greater flamingo, purple heron, little bittern, Montagu\'s harrier',
    description:
      'Where the Moulouya River empties into the Mediterranean, freshwater marshes, salt pans, and sand dunes form a critical stopover for trans-Saharan migrants. Spring and autumn bring waves of warblers, raptors, and shorebirds. The area remains little-visited, offering solitude rare at European birding sites.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL WILDLIFE CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March–May)',
    icon: Sunrise,
    highlights: [
      'Peak northward bird migration — warblers, raptors, and shorebirds pass through in enormous numbers',
      'Wildflowers blanket the Middle Atlas and Rif Mountains',
      'High Atlas snow melts, opening trails above 3,000 m by late April',
      'Fin whales transit the Strait of Gibraltar',
      'Best time for Oukaimeden high-altitude endemics',
    ],
  },
  {
    season: 'Summer (June–August)',
    icon: Sun,
    highlights: [
      'Orca pods follow bluefin tuna through the Strait of Gibraltar (July–September)',
      'Eleonora\'s falcons breed on Mediterranean islands off Al Hoceima',
      'Desert temperatures exceed 45 °C — avoid Saharan parks',
      'Atlas Mountain trails fully accessible, Barbary macaques active at dawn',
      'Sea turtles (loggerhead) nest along southern Atlantic beaches',
    ],
  },
  {
    season: 'Autumn (September–November)',
    icon: Leaf,
    highlights: [
      'Southbound migration peaks — raptors, storks, and passerines funnel through Tangier',
      'Merja Zerga and Khenifiss lagoons fill with arriving waterbirds',
      'Comfortable Saharan temperatures return, ideal for desert wildlife',
      'Barbary sheep rut in the High Atlas (October–November)',
      'Mushroom season in the Middle Atlas cedar forests',
    ],
  },
  {
    season: 'Winter (December–February)',
    icon: CloudSun,
    highlights: [
      'Tens of thousands of waterfowl winter at Moroccan wetlands',
      'Greater flamingo flocks peak at Merja Zerga and Khenifiss',
      'Snow covers the Middle and High Atlas — Ifrane macaques in snow are a classic sight',
      'Desert nights drop below freezing but stargazing is extraordinary',
      'Sperm whales occasionally sighted in the Strait of Gibraltar',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photoTips = [
  {
    title: 'Gear for Moroccan Conditions',
    icon: Camera,
    tips: [
      'Bring a 100–400 mm telephoto for birds and a wide-angle for landscapes — the scenery demands both.',
      'Carry a lens cloth and sealed bags. Saharan sand and Atlas dust will find every gap in your gear.',
      'A bean bag works better than a tripod for shooting from vehicles at Souss-Massa.',
      'Batteries drain fast in cold Atlas mornings. Keep spares in an inside pocket close to your body.',
    ],
  },
  {
    title: 'Light & Timing',
    icon: Sunrise,
    tips: [
      'Golden hour in Morocco lasts longer than northern Europe — the low-angle light between 06:00–08:00 and 16:00–18:00 is exceptional.',
      'Midday light at Saharan sites is brutally harsh. Shoot before 09:00 or after 16:00.',
      'Overcast days at Merja Zerga eliminate glare on water and improve waterfowl portraits.',
      'The blue hour over the Atlas produces dramatic silhouette shots of raptors returning to roost.',
    ],
  },
  {
    title: 'Wildlife Etiquette',
    icon: ShieldCheck,
    tips: [
      'Never feed Barbary macaques. Habituated troops at Azrou already beg — food handouts worsen aggression.',
      'Keep 50 m distance from nesting bald ibis at Souss-Massa. Wardens enforce this strictly.',
      'Avoid flash photography near roosting birds at lagoon sites, especially at dusk.',
      'Hire local guides — they know animal routines, and the income funds conservation directly.',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoWildlifeNaturePage() {
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

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#2d5016] via-[#3a6b1e] to-[#1a3a0a] hero-overlay">
        <div className="absolute inset-0 moroccan-pattern opacity-10" />
        <div className="container-morocco relative z-10 text-center py-20">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-white/70 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" /> Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Morocco Wildlife &amp; Nature Guide</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] text-white mb-6 leading-tight">
            Morocco Wildlife &amp; Nature
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-[family-name:var(--font-heading)] mb-8">
            National Parks, Birdwatching Hotspots &amp; Eco-Tourism Across Mountains, Desert &amp; Coast
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Bird className="w-4 h-4" /> 500+ Bird Species
            </span>
            <span className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Mountain className="w-4 h-4" /> 6 National Parks
            </span>
            <span className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Globe className="w-4 h-4" /> 3 Ecosystems
            </span>
            <span className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Leaf className="w-4 h-4" /> Eco-Tourism
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          INTRO — MOROCCO'S BIODIVERSITY
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-[#A0522D]" />
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                Morocco&apos;s Extraordinary Biodiversity
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 font-[family-name:var(--font-heading)] space-y-4">
              <p>
                Morocco sits at the crossroads of Europe, Africa, and the Atlantic — a geographic position that has produced
                one of the most biologically diverse countries in the Mediterranean basin. The numbers tell the story:
                over <strong>500 bird species</strong>, more than <strong>105 mammal species</strong>, roughly <strong>100 reptile
                species</strong>, and an estimated <strong>3,500+ vascular plant species</strong>, of which 900 are endemic
                to North Africa.
              </p>
              <p>
                Three distinct mountain ranges — the Rif, Middle Atlas, and High Atlas — create altitude gradients from
                sea level to 4,167 m in under 100 km. Add 3,500 km of coastline split between the Atlantic and
                Mediterranean, the western edge of the Sahara, fertile river plains, and ancient cedar forests, and you
                get a country where a single week of travel can take you from snow-capped peaks to sand dunes, from
                coastal lagoons to alpine meadows.
              </p>
              <p>
                For wildlife travellers, Morocco offers something rare: African megafauna heritage meets European
                accessibility. Flights from London, Paris, or Madrid land in three hours. Roads are paved to every
                national park entrance. English-speaking guides work at all major sites. Yet the animals —
                Barbary macaques, bald ibis, fennec foxes, orcas — belong firmly to another continent.
              </p>
            </div>

            {/* Biodiversity Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                { label: 'Bird Species', value: '500+', icon: Bird },
                { label: 'Mammal Species', value: '105+', icon: Footprints },
                { label: 'Plant Species', value: '3,500+', icon: Leaf },
                { label: 'National Parks', value: '6', icon: Trees },
              ].map((stat) => (
                <div key={stat.label} className="card-moroccan p-5 text-center">
                  <stat.icon className="w-8 h-8 text-[#A0522D] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-display)]">{stat.value}</p>
                  <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          NATIONAL PARKS
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Trees className="w-8 h-8 text-[#A0522D]" />
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
              Morocco&apos;s National Parks
            </h2>
          </div>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-3xl mb-10">
            Six national parks protect Morocco&apos;s most critical habitats. Each occupies a different ecological niche,
            from Mediterranean cliffs to Saharan lagoons. Entry fees are minimal — the real cost is getting there, and the
            reward is landscapes empty of crowds that would fill a European equivalent.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {nationalParks.map((park) => (
              <div key={park.name} className="card-moroccan p-6">
                <div className="flex items-start gap-3 mb-3">
                  <park.icon className="w-7 h-7 text-[#A0522D] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900">{park.name}</h3>
                    <p className="text-sm text-[#A0522D] font-[family-name:var(--font-heading)]">{park.region}</p>
                  </div>
                </div>
                <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm mb-3">{park.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {park.area}</span>
                  <span className="flex items-center gap-1"><Mountain className="w-3 h-3" /> {park.elevation}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Est. {park.established}</span>
                  <span className="flex items-center gap-1"><CircleDot className="w-3 h-3" /> {park.entry}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {park.wildlife.map((species) => (
                    <span key={species} className="bg-[#FAF8F5] text-gray-700 text-xs px-2 py-1 rounded-full border border-gray-200">
                      {species}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BIRDWATCHING HOTSPOTS
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Binoculars className="w-8 h-8 text-[#A0522D]" />
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
              Top 5 Birdwatching Hotspots
            </h2>
          </div>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-3xl mb-10">
            Morocco ranks among the top birding destinations in the Western Palearctic. The combination of wetlands, mountains,
            desert edges, and two coastlines creates habitat for resident, breeding, wintering, and passage species that few
            countries can match. Birding tours from the UK and Europe run year-round.
          </p>

          <div className="space-y-6">
            {birdwatchingSpots.map((spot, idx) => (
              <div key={spot.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A0522D] text-white flex items-center justify-center font-bold font-[family-name:var(--font-display)]">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900">{spot.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-[family-name:var(--font-heading)] mb-2">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {spot.region}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {spot.bestSeason}</span>
                    </div>
                    <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm mb-2">{spot.description}</p>
                    <p className="text-xs text-[#A0522D] font-medium">
                      <strong>Key species:</strong> {spot.keySpecies}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MARINE WILDLIFE
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Fish className="w-8 h-8 text-[#A0522D]" />
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
              Marine Wildlife
            </h2>
          </div>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-3xl mb-10">
            The Strait of Gibraltar funnels marine life between the Atlantic and Mediterranean. Morocco&apos;s 3,500 km
            of coastline hosts dolphins, whales, sea turtles, and one of the world&apos;s rarest marine mammals — the
            Mediterranean monk seal.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#A0522D]" /> Strait of Gibraltar — Whale &amp; Dolphin Watching
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm mb-3">
                The 14 km strait between Morocco and Spain is a motorway for cetaceans. Common dolphins, striped dolphins,
                and long-finned pilot whales are resident year-round. Between July and September, pods of Atlantic orcas
                (an estimated 50 individuals) enter the strait to hunt bluefin tuna. Fin whales — the second-largest animal
                on Earth — transit in spring and autumn.
              </p>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                <strong>Access:</strong> Most boat trips depart from Tarifa (Spain), 35 minutes by ferry from Tangier.
                Moroccan operators out of Tangier are growing. Trips run from 450 MAD per person for a 2-hour excursion.
                Seasonal pricing applies — summer orca trips cost more.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#A0522D]" /> Mediterranean Monk Seal
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm mb-3">
                Fewer than 800 Mediterranean monk seals survive worldwide. Morocco&apos;s Atlantic coast near Cap Blanc
                (on the Mauritanian border) hosts one of the largest colonies, with an estimated 300 individuals. A smaller
                population persists around the caves of Al Hoceima National Park on the Mediterranean coast.
              </p>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                Sightings at Al Hoceima are rare but increasing as the park&apos;s marine protections take hold. Fishermen
                occasionally report seals near Cala Iris. Do not approach caves — disturbance at pupping sites is the
                primary threat to this species.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#A0522D]" /> Sea Turtles
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm mb-3">
                Loggerhead and green sea turtles occur along both coasts. Loggerheads nest sporadically on southern Atlantic
                beaches, while greens are more common in Mediterranean waters. Leatherback turtles pass through offshore
                during migrations. Several rescue centres along the coast rehabilitate turtles caught in fishing nets.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                <Fish className="w-5 h-5 text-[#A0522D]" /> Coastal Dolphins
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm mb-3">
                Bottlenose dolphins patrol the bay at Al Hoceima, often visible from shore. Atlantic spotted dolphins appear
                off Essaouira and Agadir between April and October. Common dolphins form superpods of 500+ individuals in
                the Alboran Sea. Fishing boats out of Essaouira sometimes encounter them — ask at the port for informal
                boat trips from 300 MAD per person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ATLAS MOUNTAIN WILDLIFE
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="w-8 h-8 text-[#A0522D]" />
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
              Atlas Mountain Wildlife
            </h2>
          </div>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-3xl mb-10">
            The Atlas ranges form a 2,500 km barrier across North Africa, isolating species and driving endemism. Altitude
            and moisture gradients pack multiple biomes into short distances — oak woodland, cedar forest, alpine scrub,
            and bare rock follow each other in rapid succession.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 zellige-border">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">Barbary Macaques</h3>
              <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm mb-3">
                Africa&apos;s only primate north of the Sahara. An estimated 8,000 remain in the wild, split between
                Morocco&apos;s Middle Atlas and Algeria&apos;s Kabylie region. The most accessible troops live along the
                N13 road between Ifrane and Azrou, where they forage on cedar seeds, acorns, and caterpillars.
              </p>
              <p className="text-xs text-gray-500">
                <strong>Where:</strong> Ifrane National Park, Azrou cedar forest, Talassemtane NP
              </p>
            </div>

            <div className="card-moroccan p-6 zellige-border">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">Barbary Sheep (Aoudad)</h3>
              <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm mb-3">
                Stocky, shaggy-maned wild sheep that navigate near-vertical cliffs with uncanny agility. They inhabit
                the High Atlas above 2,500 m and scattered rocky massifs in the eastern Anti-Atlas. Dawn and dusk are
                the best times — they rest in shade during midday heat.
              </p>
              <p className="text-xs text-gray-500">
                <strong>Where:</strong> Toubkal NP, Jebel Saghro, eastern High Atlas
              </p>
            </div>

            <div className="card-moroccan p-6 zellige-border">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">Raptors &amp; Eagles</h3>
              <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm mb-3">
                Golden eagles patrol the High Atlas ridgelines. Bonelli&apos;s eagles hunt pigeons along cliff faces in the
                Todra and Dades gorges. Lammergeiers (bearded vultures) — with 2.8 m wingspans — specialize in dropping bones
                from height to crack them open. Griffon vultures circle thermals above the Tizi n&apos;Test pass.
              </p>
              <p className="text-xs text-gray-500">
                <strong>Where:</strong> Toubkal NP, Oukaimeden, Todra Gorge, Dades Gorge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DESERT WILDLIFE
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="w-8 h-8 text-[#A0522D]" />
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
              Desert &amp; Saharan Wildlife
            </h2>
          </div>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-3xl mb-10">
            The Sahara covers Morocco&apos;s eastern and southern flanks. Life here is sparse but specialized — animals
            have evolved to endure temperature swings of 40 °C between day and night, conserve water, and avoid predators
            across open terrain. Most desert species are nocturnal, so guided night walks offer the best sightings.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-moroccan p-5 text-center">
              <div className="w-14 h-14 rounded-full bg-[#FAF8F5] flex items-center justify-center mx-auto mb-3">
                <Star className="w-7 h-7 text-[#C4960C]" />
              </div>
              <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">Fennec Fox</h3>
              <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                The world&apos;s smallest fox, weighing barely 1.5 kg. Enormous ears radiate heat and detect prey underground.
                Found in the Erg Chebbi dunes near Merzouga and across the hamada south of Errachidia. Strictly nocturnal —
                desert camp guides sometimes spot them at the edge of firelight.
              </p>
            </div>

            <div className="card-moroccan p-5 text-center">
              <div className="w-14 h-14 rounded-full bg-[#FAF8F5] flex items-center justify-center mx-auto mb-3">
                <Eye className="w-7 h-7 text-[#C4960C]" />
              </div>
              <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">Desert Hedgehog</h3>
              <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                Smaller and lighter than European hedgehogs, the desert hedgehog (Paraechinus aethiopicus) roams stony
                desert and oasis edges. It eats scorpions, insects, and small snakes. Seen regularly on night walks near
                Zagora and in the Draa Valley. Active from dusk.
              </p>
            </div>

            <div className="card-moroccan p-5 text-center">
              <div className="w-14 h-14 rounded-full bg-[#FAF8F5] flex items-center justify-center mx-auto mb-3">
                <Footprints className="w-7 h-7 text-[#C4960C]" />
              </div>
              <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">Dorcas Gazelle</h3>
              <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                Once common across the Sahara, the dorcas gazelle now survives in fragmented populations in Morocco&apos;s
                eastern desert and Khenifiss NP. Herds of 5–15 animals browse on acacia and drought-resistant shrubs. They
                can survive without drinking water, obtaining all moisture from plants.
              </p>
            </div>

            <div className="card-moroccan p-5 text-center">
              <div className="w-14 h-14 rounded-full bg-[#FAF8F5] flex items-center justify-center mx-auto mb-3">
                <Award className="w-7 h-7 text-[#C4960C]" />
              </div>
              <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">Addax &amp; Oryx Reintroduction</h3>
              <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                Morocco&apos;s Royal Society for the Protection of Nature runs reintroduction programs for the addax and
                scimitar-horned oryx — both extinct in the Moroccan wild since the 1970s. Breeding enclosures at
                M&apos;Sabih Talaa near Guelmim hold growing herds. The goal: free-ranging populations in fenced desert
                reserves within the next decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ECO-TOURISM & CONSERVATION
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-8 h-8 text-[#A0522D]" />
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
              Eco-Tourism &amp; Conservation
            </h2>
          </div>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-3xl mb-10">
            Morocco&apos;s eco-tourism sector is maturing fast. Community-run guesthouses, wildlife sanctuaries, and
            conservation-linked tour operators offer authentic experiences that channel income directly to habitat
            protection and local livelihoods.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                <Tent className="w-5 h-5 text-[#A0522D]" /> Community-Based Tourism
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2">
                  <CircleDot className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <span><strong>Ait Bougmez Valley (High Atlas):</strong> Berber-run gîtes d&apos;étape charge from 250 MAD per night including meals. Trekking guides are local men trained by the national park. Revenue stays in the village.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleDot className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <span><strong>Immouzer des Ida Outanane:</strong> Cooperative-managed paradise valley hikes and honey farms. Day trips from Agadir cost from 350 MAD including transport and lunch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleDot className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <span><strong>Moulay Bousselham:</strong> Local fishermen double as birdwatching guides at Merja Zerga. Their knowledge of bird movements — learned over lifetimes of net-casting — surpasses formal ornithological training.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#A0522D]" /> Wildlife Sanctuaries &amp; Programs
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2">
                  <CircleDot className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <span><strong>GREPOM (BirdLife Morocco):</strong> Runs citizen-science bird counts, manages Important Bird Areas (IBAs), and coordinates bald ibis monitoring at Souss-Massa. Volunteers can join annual census efforts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleDot className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <span><strong>Barbary Macaque Awareness &amp; Conservation:</strong> Works with Ifrane communities to reduce human-macaque conflict. Runs education programs in local schools. Tourist donations from 50 MAD support feeding station alternatives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleDot className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <span><strong>Haut Commissariat aux Eaux et Forêts:</strong> Morocco&apos;s forestry agency manages all national parks and runs anti-poaching patrols, reforestation projects, and the addax/oryx breeding program. Park entry fees fund operations directly.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6 md:col-span-2">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#A0522D]" /> How to Travel Responsibly
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Hire local guides — direct income is the most effective conservation tool in rural Morocco.
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Stay in community-run guesthouses rather than chain hotels in gateway towns.
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Never buy wildlife products — tortoiseshell, reptile skins, and taxidermy appear in some souks.
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Carry reusable water bottles. Plastic litter is a serious issue at many Moroccan nature sites.
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Report wildlife crime (poaching, illegal capture) to park wardens or local gendarmerie.
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Donate to GREPOM or the Barbary Macaque Conservation project — even small amounts fund fieldwork.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BEST TIME FOR WILDLIFE VIEWING
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-[#A0522D]" />
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
              Best Time for Wildlife Viewing
            </h2>
          </div>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-3xl mb-10">
            Morocco offers year-round wildlife watching, but each season brings different species and conditions.
            Spring and autumn migrations make those months unbeatable for birders. Summer belongs to marine life.
            Winter rewards patience with massive waterfowl concentrations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {seasonalGuide.map((s) => (
              <div key={s.season} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="w-6 h-6 text-[#C4960C]" />
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">{s.season}</h3>
                </div>
                <ul className="space-y-2">
                  {s.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                      <CircleDot className="w-3 h-3 text-[#A0522D] mt-1.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PHOTOGRAPHY TIPS
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-[#A0522D]" />
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
              Photography Tips for Nature in Morocco
            </h2>
          </div>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-3xl mb-10">
            Morocco&apos;s light, landscapes, and wildlife make it a paradise for nature photographers. But the
            conditions — dust, heat, extreme altitude — demand preparation. Here is what works.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {photoTips.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-4">
                  <section.icon className="w-6 h-6 text-[#A0522D]" />
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                      <CircleDot className="w-3 h-3 text-[#C4960C] mt-1.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-8 h-8 text-[#A0522D]" />
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-3xl mb-10">
            Common questions about wildlife travel in Morocco, answered with practical detail.
          </p>

          <div className="max-w-3xl space-y-6">
            {faqItems.map((faq, idx) => (
              <div key={idx} className="card-moroccan p-6">
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#A0522D] text-white text-sm flex items-center justify-center">
                    {idx + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm ml-10">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          RELATED GUIDES
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-[#A0522D]" />
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
              Related Guides
            </h2>
          </div>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-3xl mb-10">
            Continue planning your Morocco nature trip with these detailed guides.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Morocco Camping Guide', href: '/morocco-camping-guide', desc: 'Wild camping, desert bivouacs, and mountain campsites across Morocco.' },
              { title: 'Morocco Stargazing Guide', href: '/morocco-stargazing-guide', desc: 'Dark sky sites in the Sahara and Atlas Mountains for astronomy lovers.' },
              { title: 'Morocco Hiking & Trekking', href: '/morocco-hiking-trekking', desc: 'Atlas summit treks, gorge walks, and coastal trails with difficulty ratings.' },
              { title: 'Things to Do in Agadir', href: '/things-to-do-agadir', desc: 'Gateway city to Souss-Massa NP — beaches, surfing, and day trip options.' },
              { title: 'Morocco Budget Travel', href: '/morocco-budget-travel', desc: 'How to explore Morocco on 300–500 MAD per day including park fees.' },
              { title: 'Morocco Weather Guide', href: '/morocco-weather-guide', desc: 'Monthly climate data for every region to plan your wildlife timing.' },
              { title: 'Morocco Photography Guide', href: '/morocco-photography-guide', desc: 'Camera gear, permissions, and the best locations for landscape and wildlife shots.' },
              { title: 'Morocco Safety Tips', href: '/morocco-safety-tips', desc: 'Health, wildlife hazards, and practical safety advice for outdoor travel.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 group-hover:text-[#A0522D] transition-colors mb-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">{guide.desc}</p>
                <span className="text-[#A0522D] text-sm font-medium flex items-center gap-1">
                  Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-[#2d5016] via-[#3a6b1e] to-[#1a3a0a] py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-white mb-4">
            Ready to Explore Morocco&apos;s Wild Side?
          </h2>
          <p className="text-white/80 font-[family-name:var(--font-heading)] max-w-2xl mx-auto mb-8">
            From Barbary macaques in snow-dusted cedar forests to flamingos on Saharan lagoons,
            Morocco packs extraordinary wildlife into a country smaller than Texas. Start planning your
            nature-focused trip today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-travel-planning"
              className="bg-white text-[#2d5016] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-[family-name:var(--font-heading)]"
            >
              Plan Your Trip
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-[family-name:var(--font-heading)]"
            >
              Explore All Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
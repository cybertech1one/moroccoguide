import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Leaf,
  TreePine,
  Mountain,
  MapPin,
  Star,
  Heart,
  Shield,
  Compass,
  Clock,
  CheckCircle,
  Sun,
  Droplets,
  AlertTriangle,
  ArrowRight,
  Users,
  Tent,
  Globe,
  Recycle,
  HandHeart,
  Sprout,
  Bird,
  Fish,
  Footprints,
  BadgeCheck,
  Lightbulb,
  Coins,
  BookOpen,
  Bike,
  Waves,
  CircleDot,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ShoppingBag,
  Flower2,
  GlassWater,
  Home as HomeIcon,
  Wheat,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eco-Tourism in Morocco | Sustainable Travel, Eco-Lodges & Responsible Tourism Guide',
  description:
    'Plan sustainable travel in Morocco. Eco-lodges, argan oil cooperatives, women\'s cooperatives, responsible trekking, national parks, community-based tourism, plastic-free initiatives, and carbon offset options. Real prices in MAD.',
  keywords: [
    'morocco eco tourism',
    'sustainable travel morocco',
    'morocco eco lodges',
    'kasbah du toubkal',
    'dar ahlam',
    'argan oil cooperatives morocco',
    'responsible trekking morocco',
    'morocco national parks',
    'community based tourism morocco',
    'morocco women cooperatives',
    'morocco plastic free',
    'morocco sustainable souvenirs',
    'morocco organic farms',
    'morocco carbon offset',
    'morocco water conservation',
    'morocco local artisans',
    'toubkal national park',
    'souss massa national park',
    'ifrane national park',
    'al hoceima marine park',
  ],
  openGraph: {
    title: 'Eco-Tourism in Morocco | Sustainable Travel & Responsible Tourism Guide',
    description:
      'Comprehensive guide to eco-friendly travel in Morocco. Eco-lodges, cooperatives, national parks, community tourism, and responsible travel practices with real prices.',
    url: 'https://citytoursmorocco.com/eco-tourism',
    images: [
      {
        url: '/images/hero-atlas-village.webp',
        width: 1200,
        height: 630,
        alt: 'A traditional Berber village nestled in the Atlas Mountains of Morocco surrounded by green terraced fields',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/eco-tourism' },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      name: 'Morocco Eco-Tourism & Sustainable Travel Guide',
      description:
        'Comprehensive guide to eco-friendly and sustainable travel in Morocco, including eco-lodges, women\'s cooperatives, argan oil cooperatives, responsible trekking, national parks, and community-based tourism.',
      url: 'https://citytoursmorocco.com/eco-tourism',
      touristType: ['Ecotourism', 'Sustainable travel', 'Community tourism', 'Responsible trekking'],
      image: '/images/hero-atlas-village.webp',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.7917,
        longitude: -7.0926,
      },
    },
    {
      '@type': 'ItemList',
      name: 'Morocco Eco-Lodges',
      description: 'Top eco-friendly accommodations across Morocco committed to sustainability and community development.',
      numberOfItems: 8,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Kasbah du Toubkal' },
        { '@type': 'ListItem', position: 2, name: 'Dar Ahlam' },
        { '@type': 'ListItem', position: 3, name: 'Kasbah Bab Ourika' },
        { '@type': 'ListItem', position: 4, name: 'Sawadi Desert Camp' },
        { '@type': 'ListItem', position: 5, name: 'Lalla Abouch Eco-Lodge' },
        { '@type': 'ListItem', position: 6, name: 'Atlas Kasbah Ecolodge' },
        { '@type': 'ListItem', position: 7, name: 'Ecolodge Bab El Oued' },
        { '@type': 'ListItem', position: 8, name: 'Dar Itrane' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is eco-tourism expensive in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eco-tourism in Morocco ranges from budget to luxury. Community guesthouses start at 250-400 MAD per night, while premium eco-lodges like Kasbah du Toubkal range from 1,800-4,500 MAD. Many sustainable options cost the same as conventional tourism while delivering greater local benefit.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I ensure my trip benefits local communities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stay in locally owned accommodations, hire local guides directly, buy directly from artisan cooperatives, eat at family-run restaurants, and choose operators who employ local staff. Ask about community benefit programs before booking.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are argan oil cooperatives and can I visit them?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Argan oil cooperatives are women-run organizations that produce argan oil using traditional methods. Most are located between Essaouira and Agadir. Visitors are welcome to observe the production process and purchase directly. Cooperative visits typically last 30-60 minutes and are free, though purchases are encouraged.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there plastic-free travel options in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Morocco banned single-use plastic bags in 2016 with its Zero Mika campaign. Many eco-lodges provide filtered water stations, reusable bottles, and biodegradable toiletries. Bring a refillable water bottle and tote bags. Several cities now have bulk food shops and zero-waste stores.',
          },
        },
      ],
    },
  ],
};

/* ================================================================
   ECO-LODGE DATA
   ================================================================ */

interface EcoLodge {
  name: string;
  location: string;
  region: string;
  priceRange: string;
  ecoFeatures: string[];
  communityImpact: string;
  description: string;
  image: string;
  bestFor: string;
}

const ecoLodges: EcoLodge[] = [
  {
    name: 'Kasbah du Toubkal',
    location: 'Imlil, High Atlas',
    region: 'Atlas Mountains',
    priceRange: '1,800 - 4,500 MAD/night',
    ecoFeatures: ['Solar hot water', 'Local stone construction', 'Organic garden', 'Zero single-use plastic', 'Rainwater harvesting'],
    communityImpact: '5% of revenue funds the Education For All boarding houses for rural girls. Employs 85 local staff from surrounding Berber villages. Built and maintained entirely by local craftsmen.',
    description: 'Perched at 1,800 meters on a rocky outcrop overlooking the Imlil Valley, this award-winning eco-lodge occupies a restored kasbah that once belonged to a feudal chief. The lodge pioneered community-based tourism in the High Atlas and remains the gold standard. Rooms feature traditional Berber design with hand-carved cedar woodwork, tadelakt walls, and wool blankets woven in the village below. The panoramic terrace offers jaw-dropping views of Jebel Toubkal.',
    image: '/images/hero-atlas-village.webp',
    bestFor: 'Trekking base, cultural immersion, mountain luxury',
  },
  {
    name: 'Dar Ahlam',
    location: 'Skoura, Ouarzazate Province',
    region: 'Draa Valley',
    priceRange: '6,500 - 12,000 MAD/night',
    ecoFeatures: ['Solar energy system', 'Heritage restoration', 'Organic kitchen garden', 'Natural pool filtration', 'Zero-waste kitchen policy'],
    communityImpact: 'Restored a crumbling 200-year-old kasbah that would have been lost. Employs 60 local staff with above-market wages. Funds a village school and medical dispensary. Sources all produce from local organic farms within 20 km.',
    description: 'A restored 19th-century kasbah surrounded by 12 hectares of palm groves, rose gardens, and olive orchards. Dar Ahlam (House of Dreams) operates as a luxury maison d\'hotes with just 14 suites, ensuring minimal environmental footprint despite its high-end positioning. Each day brings a surprise excursion planned by the staff: a picnic in the Skoura palmery, dinner in the desert dunes, or breakfast at a hidden oasis. The kitchen champions local, seasonal cuisine.',
    image: '/images/hero-desert.webp',
    bestFor: 'Luxury sustainable travel, heritage conservation, immersive experiences',
  },
  {
    name: 'Kasbah Bab Ourika',
    location: 'Ourika Valley, High Atlas',
    region: 'Atlas Mountains',
    priceRange: '2,200 - 5,000 MAD/night',
    ecoFeatures: ['Solar panels', 'Greywater recycling', 'Organic permaculture garden', 'LED lighting throughout', 'Locally sourced construction materials'],
    communityImpact: 'Built by 150 local artisans over three years. Funds a village hammam and communal bread oven. Employs 40 staff from surrounding douars. Purchases all food from Ourika Valley farmers.',
    description: 'A contemporary eco-lodge built into the hillside above the Ourika Valley using traditional pisé (rammed earth) construction. The 16 rooms blend seamlessly with the landscape, each offering private terraces with Atlas views. The lodge runs a permaculture garden that supplies the restaurant with herbs, vegetables, and fruits. Cooking classes teach guests traditional Berber cuisine using garden ingredients.',
    image: '/images/hero-atlas-village.webp',
    bestFor: 'Day trips from Marrakech, cooking classes, permaculture',
  },
  {
    name: 'Sawadi Desert Camp',
    location: 'Erg Chebbi, Merzouga',
    region: 'Sahara Desert',
    priceRange: '1,200 - 3,500 MAD/night',
    ecoFeatures: ['Solar-powered lighting', 'Composting toilets', 'Minimal footprint tents', 'No permanent structures on dunes', 'Biodegradable cleaning products'],
    communityImpact: 'Operated entirely by local Amazigh families from Merzouga and Hassilabied. Camel handlers own their own animals and receive fair wages. A portion of revenue funds desert clean-up campaigns removing trash from dune areas.',
    description: 'A low-impact luxury camp set among the towering dunes of Erg Chebbi. Unlike permanent desert hotels that scar the landscape, Sawadi uses removable tented structures that leave zero trace. Each tent features hand-woven Saharan textiles, solar-powered lanterns, and traditional carpets. The camp relocates seasonally to prevent sand compaction. Evening meals are cooked in underground sand ovens, a traditional Saharan technique.',
    image: '/images/hero-desert.webp',
    bestFor: 'Authentic desert experience, stargazing, zero-trace camping',
  },
  {
    name: 'Lalla Abouch Eco-Lodge',
    location: 'Ait Bougmez Valley, Central High Atlas',
    region: 'Atlas Mountains',
    priceRange: '400 - 800 MAD/night',
    ecoFeatures: ['Straw-bale insulation', 'Solar water heating', 'Composting system', 'Traditional pisé construction', 'Wood-fired heating from pruned orchards'],
    communityImpact: 'A community-owned lodge where profits go directly to the village cooperative. Funded construction of a village bridge and irrigation canal. Trains local youth as trekking guides and hospitality staff.',
    description: 'Nestled in the remote Ait Bougmez Valley, known as the Happy Valley, this community-owned eco-lodge represents grassroots sustainable tourism at its finest. The lodge was built by villagers using traditional techniques and local materials. Rooms are simple but comfortable, heated by wood stoves in winter and cooled by thick earthen walls in summer. Meals are prepared by village women using produce from the valley\'s walnut orchards and vegetable gardens.',
    image: '/images/hero-atlas-village.webp',
    bestFor: 'Budget eco-travel, authentic village life, off-the-beaten-path trekking',
  },
  {
    name: 'Atlas Kasbah Ecolodge',
    location: 'Agadir outskirts, Souss Region',
    region: 'Souss-Massa',
    priceRange: '900 - 2,000 MAD/night',
    ecoFeatures: ['Certified Green Key eco-label', 'Solar energy 80% of power', 'Organic argan grove', 'Natural swimming pool', 'Greywater irrigation system'],
    communityImpact: 'Partners with local argan oil cooperative for guest visits. Employs 25 staff from surrounding villages. Funds environmental education programs in local schools. Supports Souss-Massa National Park conservation.',
    description: 'The first certified eco-lodge in southern Morocco, set among argan trees on a hillside overlooking the Atlantic. The lodge was built entirely from local stone and reclaimed materials, with thick walls that maintain comfortable temperatures year-round without air conditioning. The natural swimming pool is filtered by aquatic plants rather than chemicals. Guests can join argan harvesting during season or take guided walks in Souss-Massa National Park.',
    image: '/images/hero-coastal.webp',
    bestFor: 'Argan experiences, coastal nature, eco-certification',
  },
  {
    name: 'Ecolodge Bab El Oued',
    location: 'Agdz, Draa Valley',
    region: 'Draa-Tafilalet',
    priceRange: '600 - 1,400 MAD/night',
    ecoFeatures: ['Adobe construction', 'Solar electricity', 'Organic date palm garden', 'Water recycling', 'Natural ventilation design'],
    communityImpact: 'Built by local craftsmen using ancestral adobe techniques. Employs 15 local staff. Supports a village women\'s literacy program and cooperates with local date farmers to market their produce to guests.',
    description: 'An intimate adobe lodge on the edge of the Draa palmery, designed to demonstrate that luxury and sustainability are not mutually exclusive even on a modest budget. The eight rooms are built in traditional Draa Valley style with thick mud-brick walls, palm-wood ceilings, and tadelakt bathrooms. The rooftop terrace surveys an endless carpet of date palms stretching to the desert horizon. The lodge runs sunset kayak trips on the Draa River.',
    image: '/images/hero-desert.webp',
    bestFor: 'Draa Valley exploration, date harvest season, desert edge landscapes',
  },
  {
    name: 'Dar Itrane',
    location: 'Toubkal National Park, Aremd Village',
    region: 'High Atlas',
    priceRange: '500 - 1,100 MAD/night',
    ecoFeatures: ['Stone and timber construction', 'Solar panels', 'Spring water supply', 'Organic terrace garden', 'Wood-burning hammam'],
    communityImpact: 'Family-run by a local Berber family for three generations. Funds maintained hiking trails and water channels in Aremd village. Trains village youth as mountain guides through a mentorship program.',
    description: 'A traditional Berber guesthouse in the village of Aremd, the last settlement before the Toubkal summit trail. The lodge is built into the mountainside using local stone and walnut timber, exactly as Berber houses have been constructed for centuries. The terrace garden grows mint, thyme, and vegetables used in the family kitchen. The wood-fired hammam uses water from a mountain spring and is heated with pruned walnut branches.',
    image: '/images/hero-atlas-village.webp',
    bestFor: 'Toubkal trekking, authentic mountain homestay, budget-friendly',
  },
];

/* ================================================================
   COOPERATIVES DATA
   ================================================================ */

interface Cooperative {
  name: string;
  location: string;
  type: string;
  members: string;
  products: string[];
  visitInfo: string;
  priceRange: string;
  description: string;
}

const cooperatives: Cooperative[] = [
  {
    name: 'Cooperative Amal',
    location: 'Marrakech',
    type: 'Women\'s culinary training',
    members: '40+ women trainees annually',
    products: ['Traditional Moroccan meals', 'Cooking classes', 'Catering services'],
    visitInfo: 'Open daily for lunch 12:00-15:00. Cooking classes available Mon-Sat, 350 MAD per person. Reservations recommended.',
    priceRange: '80-350 MAD',
    description: 'A non-profit restaurant and training center that provides disadvantaged women with professional culinary skills. Founded by a Moroccan-American social entrepreneur, Amal (which means Hope) trains women from difficult backgrounds in restaurant service, Moroccan cuisine, and business management. Guests enjoy authentic, home-style Moroccan food while directly funding job training programs.',
  },
  {
    name: 'Cooperative Tamounte',
    location: 'Between Essaouira and Agadir',
    type: 'Argan oil production',
    members: '60 women',
    products: ['Culinary argan oil', 'Cosmetic argan oil', 'Amlou (argan and almond spread)', 'Argan soap'],
    visitInfo: 'Open daily 8:30-17:00. Free guided tours of the production process. No appointment needed for groups under 10.',
    priceRange: '150-400 MAD per liter',
    description: 'One of the original women\'s argan cooperatives, established in the early 2000s as part of a UNESCO Biosphere Reserve initiative. Watch the entire argan oil extraction process, from cracking the incredibly hard nuts by hand (a skill requiring years of practice) to cold-pressing the kernels. The cooperative provides fair wages, health insurance, and literacy classes to its members.',
  },
  {
    name: 'Cooperative Tiguemine',
    location: 'Tidzi, between Essaouira and Agadir',
    type: 'Argan oil and saffron',
    members: '45 women',
    products: ['Virgin argan oil', 'Saffron', 'Prickly pear seed oil', 'Natural cosmetics'],
    visitInfo: 'Open Mon-Sat 9:00-17:00. Group demonstrations available. Call ahead for English-speaking guide.',
    priceRange: '120-500 MAD per product',
    description: 'A Fair Trade-certified cooperative that has expanded beyond argan oil to produce saffron and prickly pear seed oil, one of the world\'s most expensive cosmetic oils. The cooperative\'s members have used their earnings to send daughters to university, build homes, and gain financial independence in a traditionally patriarchal rural society.',
  },
  {
    name: 'Al Kawtar Cooperative',
    location: 'Marrakech Medina',
    type: 'Women\'s embroidery and textiles',
    members: '30 women',
    products: ['Hand-embroidered table linens', 'Cushion covers', 'Traditional caftans', 'Custom orders'],
    visitInfo: 'Showroom open Mon-Sat 9:00-18:00. Watch artisans at work. Custom orders take 2-4 weeks.',
    priceRange: '200-3,000 MAD per item',
    description: 'A cooperative of hearing-impaired and disadvantaged women who create exquisite hand-embroidered textiles using traditional Fessi and Marrakchi patterns. Each piece takes days or weeks to complete. The cooperative provides sign language instruction, healthcare access, and a supportive community for women who often face social marginalization.',
  },
  {
    name: 'Cooperative Afous',
    location: 'Tiznit, Anti-Atlas',
    type: 'Silver jewelry',
    members: '25 artisans',
    products: ['Traditional Amazigh silver jewelry', 'Fibulas', 'Hand of Fatima pendants', 'Custom silverwork'],
    visitInfo: 'Workshop visits available Mon-Fri 9:00-16:00. Demonstrations of traditional engraving techniques.',
    priceRange: '150-5,000 MAD per piece',
    description: 'Tiznit has been the capital of Moroccan silver jewelry for centuries. This cooperative preserves ancestral Amazigh silversmithing techniques that are at risk of being lost. Master artisans use hand tools and traditional methods to create intricate filigree, engraving, and enameling. Each piece tells a story through Amazigh symbols representing fertility, protection, and the natural world.',
  },
  {
    name: 'Imi N\'Tanoute Women\'s Saffron Cooperative',
    location: 'Taliouine, Anti-Atlas',
    type: 'Saffron production',
    members: '50 women',
    products: ['Pure Moroccan saffron', 'Saffron honey', 'Saffron cosmetics', 'Saffron tea blends'],
    visitInfo: 'Harvest visits October-November only. Off-season showroom open daily. Saffron field tours 100 MAD per person.',
    priceRange: '40-120 MAD per gram of saffron',
    description: 'Taliouine produces some of the world\'s finest saffron, rivaling Iranian varieties. This cooperative manages the entire process from planting the crocus bulbs to the delicate hand-harvesting of stigmas at dawn during the brief October-November season. Each gram requires 150-200 flowers. The cooperative has transformed what was traditionally unpaid women\'s work into a fair-wage enterprise with profit sharing.',
  },
];

/* ================================================================
   NATIONAL PARKS FOR ECO-TOURISM
   ================================================================ */

interface EcoPark {
  name: string;
  region: string;
  area: string;
  ecoActivities: string[];
  keyFeatures: string;
  entryInfo: string;
  bestSeason: string;
  description: string;
}

const ecoParksList: EcoPark[] = [
  {
    name: 'Toubkal National Park',
    region: 'High Atlas Mountains',
    area: '380 km\u00B2',
    ecoActivities: ['Responsible trekking with local guides', 'Berber village homestays', 'Botanical walks', 'Mountain clean-up treks'],
    keyFeatures: 'North Africa\'s highest peak (4,167m), alpine meadows, endemic flora, Berber villages',
    entryInfo: 'Park fee 20 MAD. Licensed guide mandatory above 3,000m. Guide fee 400-600 MAD/day.',
    bestSeason: 'April to June, September to November',
    description: 'Morocco\'s flagship national park and a model for community-based mountain tourism. The park authority works with local villages to ensure trekking revenue benefits communities directly. Mule handlers, guides, and guesthouse operators are all sourced from the Imlil and Aremd valleys. Recent trail restoration projects have addressed erosion caused by increased foot traffic on the Toubkal summit route.',
  },
  {
    name: 'Souss-Massa National Park',
    region: 'Atlantic Coast, south of Agadir',
    area: '340 km\u00B2',
    ecoActivities: ['Birdwatching with local ornithologist guides', 'Northern bald ibis observation', 'Coastal nature walks', 'Argan forest education trails'],
    keyFeatures: 'Critically endangered northern bald ibis, wild Atlantic coast, argan woodland, estuary habitats',
    entryInfo: 'Free entry. Guided birdwatching tours 300-500 MAD per person.',
    bestSeason: 'Year-round; October to March for migratory birds',
    description: 'The last stronghold of the critically endangered northern bald ibis, with Morocco hosting 95% of the global wild population. The park stretches along 65 km of wild, undeveloped Atlantic coastline. Eco-tourism here directly funds conservation: entrance fees and guided tour revenue support ranger patrols, nest site protection, and community education programs that have helped the ibis population recover from fewer than 100 to over 700 birds.',
  },
  {
    name: 'Ifrane National Park',
    region: 'Middle Atlas',
    area: '500 km\u00B2',
    ecoActivities: ['Cedar forest walks', 'Barbary macaque observation', 'Birdwatching at Dayet Aoua', 'Tree planting volunteer programs'],
    keyFeatures: 'Ancient Atlas cedar forests, Barbary macaques, mountain lakes, endemic flora',
    entryInfo: 'Free entry. Guide recommended for macaque observation, 200-400 MAD.',
    bestSeason: 'March to November; autumn for cedar colours',
    description: 'Home to Morocco\'s most magnificent cedar forests, some trees over 800 years old. The park is central to conservation efforts for the endangered Barbary macaque. Eco-visitors can participate in tree planting programs that have replanted over 50,000 hectares of degraded cedar forest across the Middle Atlas. The park demonstrates how tourism can fund reforestation: a portion of guide fees goes directly to nurseries growing cedar seedlings.',
  },
  {
    name: 'Al Hoceima National Park',
    region: 'Mediterranean Coast, Rif Mountains',
    area: '480 km\u00B2',
    ecoActivities: ['Marine wildlife snorkeling', 'Coastal hiking', 'Osprey colony observation', 'Sustainable fishing village visits'],
    keyFeatures: 'Mediterranean marine park, osprey colony, dolphins, pristine coves, dramatic cliffs',
    entryInfo: 'Free entry. Boat tours to osprey cliffs 400-700 MAD per group.',
    bestSeason: 'May to October for marine life; March to June for osprey nesting',
    description: 'Morocco\'s premier Mediterranean marine park, where the Rif Mountains plunge into crystal-clear waters. The park protects the largest breeding colony of ospreys on the Mediterranean, along with dolphins, sea turtles, and important seabird nesting sites. A community-managed sustainable fishing program allows traditional fishing while protecting marine ecosystems. Eco-tourism boat trips provide income for fishermen who might otherwise overfish.',
  },
];

/* ================================================================
   SUSTAINABLE PRACTICES DATA
   ================================================================ */

interface SustainablePractice {
  title: string;
  icon: string;
  actions: string[];
  impact: string;
}

const sustainablePractices: SustainablePractice[] = [
  {
    title: 'Reduce Plastic Waste',
    icon: 'recycle',
    actions: [
      'Carry a refillable water bottle with a filter (LifeStraw or SteriPen)',
      'Bring reusable shopping bags for souk purchases',
      'Refuse single-use plastic bags (banned since 2016)',
      'Choose eco-lodges that provide filtered water stations',
      'Pack solid shampoo and soap bars instead of liquid bottles',
    ],
    impact: 'Morocco\'s Zero Mika campaign banned plastic bags in 2016, removing an estimated 26 billion bags annually. Tourists can support this by reducing personal plastic use.',
  },
  {
    title: 'Conserve Water',
    icon: 'droplets',
    actions: [
      'Take short showers (Morocco faces severe water stress)',
      'Reuse hotel towels and linens',
      'Avoid hotels with large swimming pools in arid regions',
      'Support accommodations with greywater recycling',
      'Report water leaks or waste to management',
    ],
    impact: 'Morocco is among the most water-stressed countries globally. The average tourist uses 300-800 liters per day compared to the local average of 50-80 liters.',
  },
  {
    title: 'Support Local Economy',
    icon: 'coins',
    actions: [
      'Buy directly from artisan cooperatives, not middlemen',
      'Eat at locally owned restaurants and food stalls',
      'Hire local guides rather than international tour operators',
      'Stay in family-run riads and guesthouses',
      'Pay fair prices: aggressive haggling harms artisan livelihoods',
    ],
    impact: 'When you buy from a cooperative, 70-90% of the price goes to the artisan. Through middlemen or souk shops, artisans may receive as little as 10-20%.',
  },
  {
    title: 'Responsible Trekking',
    icon: 'footprints',
    actions: [
      'Always hire a licensed local guide (legally required in national parks)',
      'Carry out all trash, including organic waste above treeline',
      'Stay on marked trails to prevent erosion',
      'Use established campsites rather than creating new ones',
      'Respect wildlife distances: 10m minimum for all animals',
    ],
    impact: 'The Toubkal summit trail receives over 50,000 trekkers annually. Trail erosion and litter have become serious concerns, making responsible practices essential.',
  },
  {
    title: 'Cultural Sensitivity',
    icon: 'heart',
    actions: [
      'Ask permission before photographing people',
      'Dress modestly in rural and religious areas',
      'Learn basic Arabic or Amazigh greetings',
      'Respect Ramadan: avoid eating or drinking publicly during daylight hours',
      'Accept tea invitations graciously (refusing can be considered rude)',
    ],
    impact: 'Cultural respect builds genuine connections and ensures tourism remains welcome in communities. Many villages have closed to tourists due to disrespectful visitor behavior.',
  },
  {
    title: 'Carbon-Conscious Travel',
    icon: 'globe',
    actions: [
      'Use trains between major cities (ONCF rail network is efficient)',
      'Share grand taxis rather than hiring private cars',
      'Choose direct flights where possible to reduce emissions',
      'Offset remaining carbon through verified programs',
      'Walk or cycle within cities and towns',
    ],
    impact: 'A Marrakech-Fes train journey produces 80% less CO2 per passenger than driving the same route. Morocco\'s rail network connects most major cities.',
  },
];

/* ================================================================
   COMMUNITY-BASED TOURISM EXPERIENCES
   ================================================================ */

interface CommunityExperience {
  name: string;
  location: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
}

const communityExperiences: CommunityExperience[] = [
  {
    name: 'Berber Village Homestay',
    location: 'Imlil or Ait Bougmez Valley',
    duration: '1-3 nights',
    price: '250-500 MAD per person per night',
    description: 'Stay with a Berber family in a traditional mountain home. Share meals cooked on a wood fire, help in the terrace gardens, and learn about daily life in a culture that has remained largely unchanged for centuries. Families receive the full payment directly.',
    includes: ['Accommodation in family home', 'All meals (breakfast, lunch, dinner)', 'Tea ceremonies', 'Optional guided village walk'],
  },
  {
    name: 'Organic Farm Stay & Harvest Experience',
    location: 'Ourika Valley or Draa Valley',
    duration: '1-2 days',
    price: '400-700 MAD per person per day',
    description: 'Work alongside local farmers during harvest season: picking olives in November, harvesting saffron in October, or gathering roses in May. Learn traditional agricultural techniques that have sustained these valleys for generations. Includes hands-on cooking with your harvest.',
    includes: ['Farm work experience', 'Traditional lunch', 'Cooking class', 'Take-home produce or products'],
  },
  {
    name: 'Nomad Camp Experience',
    location: 'M\'Hamid el Ghizlane, Sahara edge',
    duration: '2-3 days',
    price: '800-1,500 MAD per person per day',
    description: 'Join a semi-nomadic family at their seasonal desert camp. Learn to prepare bread baked in sand, navigate by stars, and understand the complex social customs of Saharan nomadic life. All revenue goes directly to the nomad families, supporting a way of life increasingly threatened by modernization.',
    includes: ['Desert camp accommodation', 'All meals', 'Camel transport', 'Guided desert walks', 'Stargazing sessions'],
  },
  {
    name: 'Fishing Village Day with Artisanal Fishermen',
    location: 'Moulay Bousselham or Sidi Ifni',
    duration: 'Full day',
    price: '300-500 MAD per person',
    description: 'Join local fishermen at dawn for a traditional fishing trip using ancestral techniques. Return to the village to prepare your catch with a local family. Learn about sustainable fishing practices and the challenges facing Morocco\'s small-scale fishing communities.',
    includes: ['Boat trip with fishermen', 'Fish preparation lesson', 'Traditional seafood lunch', 'Village walking tour'],
  },
  {
    name: 'Carpet Weaving Workshop',
    location: 'Ain Leuh, Middle Atlas',
    duration: 'Half day to full day',
    price: '200-400 MAD per person',
    description: 'Learn the art of Amazigh carpet weaving from master weavers in Ain Leuh, a village renowned for its distinctive Middle Atlas carpet tradition. Each pattern encodes Amazigh symbols representing fertility, protection, and tribal identity. Proceeds fund the women\'s weaving cooperative.',
    includes: ['Weaving instruction', 'Materials provided', 'Mint tea and pastries', 'Cooperative visit'],
  },
  {
    name: 'Pottery Village of Tamegroute',
    location: 'Tamegroute, near Zagora',
    duration: 'Half day',
    price: '150-300 MAD per person',
    description: 'Visit the centuries-old pottery workshops of Tamegroute, famous for their distinctive green glaze derived from local minerals. Try your hand at the potter\'s wheel under guidance of master craftsmen whose families have practiced the art for generations. Also visit the ancient Koranic library with manuscripts dating to the 11th century.',
    includes: ['Pottery demonstration', 'Hands-on pottery lesson', 'Koranic library visit', 'Mint tea'],
  },
];

/* ================================================================
   SUSTAINABLE SOUVENIRS DATA
   ================================================================ */

interface SustainableSouvenir {
  item: string;
  where: string;
  price: string;
  whySustainable: string;
}

const sustainableSouvenirs: SustainableSouvenir[] = [
  {
    item: 'Cooperative Argan Oil',
    where: 'Women\'s cooperatives between Essaouira and Agadir',
    price: '150-400 MAD per liter',
    whySustainable: 'Fair-trade certified, women-empowering, supports UNESCO Biosphere Reserve. Buying from cooperatives rather than middlemen ensures 70-90% goes to the women producers.',
  },
  {
    item: 'Hand-woven Amazigh Carpet',
    where: 'Weaving cooperatives in Ain Leuh, Azrou, or Taznakht',
    price: '800-8,000 MAD depending on size',
    whySustainable: 'Made from locally sourced wool using vegetable dyes. Each carpet takes weeks to months to weave. Preserves ancestral patterns and techniques. Cooperative purchases ensure fair wages.',
  },
  {
    item: 'Tamegroute Pottery',
    where: 'Tamegroute village workshops near Zagora',
    price: '50-500 MAD per piece',
    whySustainable: 'Made from local clay with mineral glazes, using wood-fired kilns. A centuries-old tradition that requires no imported materials. Purchasing directly from workshops supports artisan families.',
  },
  {
    item: 'Handmade Leather Goods',
    where: 'Tannery cooperatives in Fes or Marrakech',
    price: '200-2,000 MAD',
    whySustainable: 'When bought from traditional tanneries using vegetable tanning (not chrome), these goods are produced using ancient, low-chemical methods. Look for the Fes tannery cooperative stamp.',
  },
  {
    item: 'Saffron from Taliouine',
    where: 'Taliouine cooperatives, Anti-Atlas',
    price: '40-120 MAD per gram',
    whySustainable: 'Hand-harvested by women\'s cooperatives. No pesticides, rain-fed irrigation, and traditional cultivation methods. The world\'s most labor-intensive spice, supporting rural employment.',
  },
  {
    item: 'Thuya Wood Crafts',
    where: 'Essaouira woodworking shops',
    price: '100-3,000 MAD',
    whySustainable: 'Made from sustainably harvested thuya root burls (the trees are not felled). Look for the Essaouira artisan collective certification. Avoid unmarked vendors who may use unsustainably sourced wood.',
  },
  {
    item: 'Rose Water from Kelaat M\'Gouna',
    where: 'Rose cooperatives in Dades Valley',
    price: '50-200 MAD per bottle',
    whySustainable: 'Distilled from hand-picked Damascene roses during the May harvest. No synthetic additives. Women\'s cooperatives manage the entire production chain from field to bottle.',
  },
  {
    item: 'Natural Beldi Soap (Savon Noir)',
    where: 'Local hammams and herbal shops throughout Morocco',
    price: '30-80 MAD per jar',
    whySustainable: 'Made from olive oil and eucalyptus, completely biodegradable, zero plastic packaging when bought in bulk. A traditional product that replaces multiple synthetic body care items.',
  },
];

/* ================================================================
   CARBON OFFSET & TRANSPORT OPTIONS
   ================================================================ */

interface TransportOption {
  mode: string;
  route: string;
  co2PerPerson: string;
  price: string;
  note: string;
}

const transportOptions: TransportOption[] = [
  { mode: 'Train (ONCF)', route: 'Marrakech to Fes', co2PerPerson: '~8 kg CO2', price: '200-340 MAD', note: 'Air-conditioned, scenic. Al Boraq high-speed train connects Tangier to Casablanca in 2h10m.' },
  { mode: 'Shared Grand Taxi', route: 'Marrakech to Essaouira', co2PerPerson: '~12 kg CO2', price: '80-100 MAD', note: 'Shared with 5 other passengers. Much lower emissions per person than private hire.' },
  { mode: 'CTM/Supratours Bus', route: 'Marrakech to Ouarzazate', co2PerPerson: '~6 kg CO2', price: '80-120 MAD', note: 'Modern coaches with AC. Most efficient motorized transport for the Atlas crossing.' },
  { mode: 'Private Car Hire', route: 'Marrakech to Fes', co2PerPerson: '~45 kg CO2', price: '1,500-2,500 MAD', note: 'Highest emissions per person. Consider if group of 4+ to lower per-person impact.' },
  { mode: 'Domestic Flight', route: 'Casablanca to Ouarzazate', co2PerPerson: '~90 kg CO2', price: '600-1,200 MAD', note: 'Highest carbon option. Rarely necessary given Morocco\'s compact geography.' },
  { mode: 'Bicycle', route: 'City exploration', co2PerPerson: '0 kg CO2', price: '100-200 MAD/day rental', note: 'Marrakech, Essaouira, and Meknes have growing cycling infrastructure. E-bike tours available.' },
];

/* ================================================================
   ORGANIC FARMS DATA
   ================================================================ */

interface OrganicFarm {
  name: string;
  location: string;
  specialty: string;
  visitPrice: string;
  description: string;
}

const organicFarms: OrganicFarm[] = [
  {
    name: 'Le Jardin des Douars',
    location: 'Essaouira region',
    specialty: 'Permaculture garden, medicinal herbs, organic vegetables',
    visitPrice: '200-400 MAD per person (includes lunch)',
    description: 'A permaculture showcase property that grows over 200 varieties of herbs, fruits, and vegetables without any chemical inputs. The gardens supply the on-site restaurant and local markets. Guided permaculture walks explain companion planting, water harvesting, and soil-building techniques adapted to Morocco\'s climate.',
  },
  {
    name: 'Bio Organic Olive Farm',
    location: 'Meknes region, Saiss Plain',
    specialty: 'Certified organic olive oil, olive varieties',
    visitPrice: '150-300 MAD per person (includes tasting)',
    description: 'One of Morocco\'s first certified organic olive farms, cultivating seven traditional Moroccan olive varieties. The farm uses no pesticides, practicing integrated pest management with companion planting and beneficial insects. Visitors can tour the ancient stone press, walk the groves, and taste oils from different varieties.',
  },
  {
    name: 'Saffron Fields of Taliouine',
    location: 'Taliouine, Anti-Atlas',
    specialty: 'Organic saffron, honey, almonds',
    visitPrice: '100-200 MAD per person',
    description: 'The saffron terraces of Taliouine produce what many chefs consider the finest saffron in the world. These rain-fed, pesticide-free fields have been cultivated for over 1,000 years. Visit during the October-November harvest to witness the pre-dawn picking of crocus flowers and the painstaking separation of stigmas.',
  },
  {
    name: 'Agafay Permaculture Project',
    location: 'Agafay Desert, near Marrakech',
    specialty: 'Desert permaculture, drought-resistant crops, solar irrigation',
    visitPrice: '250-500 MAD per person (includes workshop)',
    description: 'A pioneering project demonstrating how to grow food in arid conditions using permaculture principles. Solar-powered drip irrigation, swales, and mulching techniques produce surprising yields of vegetables, fruits, and herbs in the Agafay stone desert. Workshops teach techniques applicable to home gardens.',
  },
  {
    name: 'Rose Valley Organic Farms',
    location: 'Kelaat M\'Gouna, Dades Valley',
    specialty: 'Damascene roses, rose water, rose cosmetics',
    visitPrice: '100-250 MAD per person',
    description: 'The Dades Valley grows millions of Damascene roses organically across thousands of hectares. The roses are planted as hedgerows between other crops, providing natural pest barriers. Visit during the May harvest festival to see the fields in full bloom and watch the traditional copper-still distillation process.',
  },
];

/* ================================================================
   FAQ DATA
   ================================================================ */

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Is eco-tourism expensive in Morocco?',
    answer: 'Eco-tourism in Morocco spans every budget. Community guesthouses in the Atlas Mountains cost 250-400 MAD per night including meals. Mid-range eco-lodges like Ecolodge Bab El Oued run 600-1,400 MAD. Luxury options like Kasbah du Toubkal start at 1,800 MAD. Many sustainable travel choices, such as taking trains, eating at local restaurants, and buying from cooperatives, actually cost the same or less than conventional tourist options while delivering far greater local benefit.',
  },
  {
    question: 'How can I ensure my trip benefits local communities?',
    answer: 'Stay in locally owned accommodations rather than international chains. Hire local guides directly or through village cooperatives rather than city-based agencies. Buy directly from artisan cooperatives where 70-90% of revenue goes to the producer. Eat at family-run restaurants. Choose tour operators who employ and train local staff. Ask about community benefit programs before booking. Even small choices matter: buying water from a village shop rather than a supermarket chain keeps money circulating locally.',
  },
  {
    question: 'What are argan oil cooperatives and can I visit them?',
    answer: 'Argan oil cooperatives are women-run organizations that produce argan oil using traditional hand-pressing methods. Most are located in the Souss region between Essaouira and Agadir, within the UNESCO Argan Biosphere Reserve. Visitors are welcome to observe the entire production process: cracking the incredibly hard argan nuts with stones, grinding the kernels, and cold-pressing the oil. Visits are typically free, though purchases are encouraged and appreciated. Cooperatives sell culinary and cosmetic argan oil at fair prices, usually 150-400 MAD per liter.',
  },
  {
    question: 'Are there plastic-free travel options in Morocco?',
    answer: 'Morocco banned single-use plastic bags in 2016 with its ambitious Zero Mika campaign, removing an estimated 26 billion bags per year from circulation. Many eco-lodges now provide filtered water stations, reusable bottles, and biodegradable toiletries. Bring a refillable water bottle with a built-in filter (LifeStraw or SteriPen) to avoid buying plastic bottles. Several cities including Marrakech and Casablanca now have bulk food shops and zero-waste stores. Traditional shopping at souks using your own bags is inherently low-waste.',
  },
  {
    question: 'Is tap water safe to drink in Morocco?',
    answer: 'Tap water in major cities like Marrakech, Fes, and Casablanca is technically treated and safe, but the high mineral content can cause stomach upset for visitors. Rather than buying plastic bottles, invest in a refillable bottle with a carbon filter or UV purifier. Many eco-lodges provide filtered water stations. In rural areas, always filter or purify water. Spring water in the Atlas Mountains is generally safe but should still be treated as a precaution.',
  },
  {
    question: 'How do I offset my flight carbon emissions to Morocco?',
    answer: 'Several verified carbon offset programs operate in Morocco. The country\'s Noor-Ouarzazate solar complex is one of the world\'s largest, and offset credits fund expansion of renewable energy. Gold Standard and Verra-certified projects include clean cookstove distribution in rural areas, reforestation programs in the Atlas Mountains, and solar energy projects. A return flight from Europe generates approximately 500-800 kg of CO2. Offsetting costs roughly 100-200 MAD through platforms like Gold Standard or myclimate.',
  },
  {
    question: 'Can I volunteer with conservation projects?',
    answer: 'Yes, but choose carefully. Legitimate volunteer programs include tree planting with the High Atlas Foundation, marine conservation monitoring at Al Hoceima National Park, and teaching English at rural schools through established NGOs. Avoid voluntourism operations that charge high fees for unskilled work that displaces local employment. A good rule: if the organization charges more than your accommodation would cost, and the work could be done by a local employee, reconsider. Responsible programs are typically run by Moroccan NGOs with international partnerships.',
  },
  {
    question: 'What is the best season for eco-tourism in Morocco?',
    answer: 'Spring (March-May) and autumn (September-November) are ideal for most eco-tourism activities. Spring brings wildflowers, pleasant temperatures for trekking, and the rose harvest in the Dades Valley. Autumn offers comfortable weather, the saffron harvest in Taliouine, olive harvest in the north, and peak bird migration. Summer is best for marine eco-tourism in Al Hoceima and high-altitude trekking. Winter brings snow to the Atlas Mountains and excellent birdwatching at coastal wetlands.',
  },
  {
    question: 'How do I identify genuine cooperatives versus tourist traps?',
    answer: 'Genuine cooperatives typically display their official cooperative registration number (usually starting with the province code). They have multiple women working on-site, not just a salesroom. Look for Fair Trade or IGP (Indication Geographique Protegee) certification. Real cooperatives welcome you to watch the production process. They do not have touts outside recruiting tourists from the road. If a "cooperative" is staffed primarily by men and located on a major tourist road, it may be a commercial operation masquerading as a cooperative.',
  },
  {
    question: 'Are there eco-friendly desert experiences that avoid animal exploitation?',
    answer: 'Yes. Look for desert camps that own their camels and treat them as working partners, not commodities. Healthy camels should be well-fed, not emaciated, with no visible saddle sores. Limit camel rides to 1-2 hours maximum. Several operators now offer desert trekking on foot, mountain biking, or 4x4 experiences as alternatives. Ask about camel welfare policies before booking. The best operators, like those in Merzouga, employ traditional nomadic camel handlers who have lifelong relationships with their animals.',
  },
];

/* ================================================================
   QUICK STATS
   ================================================================ */

const quickStats = [
  { icon: <Leaf className="w-5 h-5" />, label: 'Eco-Lodges', value: '50+', detail: 'Across Morocco' },
  { icon: <Users className="w-5 h-5" />, label: 'Cooperatives', value: '1,200+', detail: 'Women-led organizations' },
  { icon: <TreePine className="w-5 h-5" />, label: 'National Parks', value: '10+', detail: 'Protected areas' },
  { icon: <Recycle className="w-5 h-5" />, label: 'Plastic Ban', value: '2016', detail: 'Zero Mika campaign' },
  { icon: <Sun className="w-5 h-5" />, label: 'Solar Energy', value: 'Noor', detail: 'World\'s largest solar farm' },
  { icon: <Globe className="w-5 h-5" />, label: 'UNESCO Sites', value: '9', detail: 'Cultural heritage' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function EcoTourismPage() {
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
          <li className="text-text-primary font-medium">Eco-Tourism &amp; Sustainable Travel</li>
        </ol>
      </nav>

      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1A1814] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-atlas-village.webp"
            alt="A traditional Berber village nestled in the Atlas Mountains of Morocco surrounded by green terraced fields"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Leaf className="w-4 h-4 text-emerald-400" />
              Sustainable Travel
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Eco-Tourism in Morocco: Travel Responsibly
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From solar-powered eco-lodges in the Atlas Mountains to women&apos;s argan cooperatives
              on the Atlantic coast, Morocco offers a wealth of sustainable travel experiences that
              protect the environment, preserve culture, and empower local communities.
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

      {/* ──────────────────────────── INTRODUCTION ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sprout className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Why Eco-Tourism Matters in Morocco
            </h2>
          </div>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco welcomed over 14 million tourists in 2023, a number the government aims to grow to
              26 million by 2030 under its national tourism strategy. This growth brings both opportunity
              and risk. Eco-tourism offers a path that generates economic benefit while protecting the
              country&apos;s extraordinary natural and cultural heritage for future generations.
            </p>
            <p>
              The kingdom is already a global leader in several sustainability areas. The Noor-Ouarzazate
              solar complex is one of the world&apos;s largest concentrated solar power plants. Morocco&apos;s
              2016 ban on single-use plastic bags was one of the most ambitious in Africa. Over 1,200
              women&apos;s cooperatives across the country produce argan oil, saffron, carpets, and crafts
              using traditional methods that have sustained communities for centuries.
            </p>
            <p>
              Yet challenges remain. Water stress is severe, particularly in the south. Plastic pollution
              persists despite the bag ban. Over-tourism threatens fragile ecosystems in popular destinations
              like the Erg Chebbi dunes and the Toubkal summit trail. Choosing eco-conscious travel options
              is not just a feel-good decision &mdash; it is a material contribution to preserving what makes
              Morocco remarkable.
            </p>
            <p>
              This guide covers everything you need to plan a sustainable trip: eco-lodges that give back to
              communities, cooperatives where your purchase directly empowers women, national parks where your
              visit funds conservation, and practical steps to minimize your environmental footprint while
              maximizing your positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── ECO-LODGES ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Tent className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Eco-Lodges &amp; Sustainable Accommodation
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s best eco-lodges combine authentic experiences, environmental responsibility,
              and meaningful community impact. Every property listed here has been selected for its
              verified sustainability practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ecoLodges.map((lodge) => (
              <div key={lodge.name} className="card-moroccan overflow-hidden flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={lodge.image}
                    alt={`${lodge.name} eco-lodge in ${lodge.location}, Morocco`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1A1814]/80 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {lodge.region}
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-700/80 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1.5">
                    <Coins className="w-3 h-3" />
                    {lodge.priceRange}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                    {lodge.name}
                  </h3>
                  <p className="text-sm text-[var(--color-accent)] font-medium mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {lodge.location}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-grow">
                    {lodge.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                      Eco Features
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {lodge.ecoFeatures.map((feature) => (
                        <span key={feature} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-200">
                          <CheckCircle className="w-2.5 h-2.5" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-primary)]">
                    <p className="text-xs font-bold text-[var(--text-primary)] mb-1 flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      Community Impact
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {lodge.communityImpact}
                    </p>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] mt-3 flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-[#C4960C]" />
                    Best for: {lodge.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Accommodation Booking Tips */}
          <div className="card-moroccan p-6 mt-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#C4960C]" />
              How to Choose an Eco-Lodge
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { tip: 'Check for certifications', detail: 'Look for Green Key, Travelife, or EarthCheck certification. In Morocco, the Clef Verte (Green Key) label is the most common eco-certification for accommodations.' },
                { tip: 'Ask about community benefit', detail: 'Genuine eco-lodges can tell you exactly how they benefit the local community: employment numbers, educational programs funded, percentage of revenue shared.' },
                { tip: 'Verify local ownership', detail: 'Locally owned lodges keep more revenue in the community. Ask who owns and operates the property. Many excellent eco-lodges are family-run Moroccan businesses.' },
                { tip: 'Review energy and water practices', detail: 'Solar hot water, LED lighting, greywater recycling, and rainwater harvesting are baseline eco-practices. If a lodge cannot describe its environmental systems, be skeptical.' },
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

      {/* ── Argan Ecosystem Visual ── */}
      <div className="container-morocco py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/photo-argan-trees.webp"
              alt="Ancient argan trees dotting the dry landscape of southwestern Morocco, a UNESCO Biosphere Reserve"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover"
            />
            <p className="text-sm text-[var(--text-muted)] mt-2 text-center">Argan trees in the Souss Valley -- a UNESCO-protected biosphere</p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/art-argan-botanical.webp"
              alt="Botanical illustration of the argan tree showing its fruit, nut, leaves, and the oil extraction process"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover"
            />
            <p className="text-sm text-[var(--text-muted)] mt-2 text-center">The argan tree -- Morocco's liquid gold and a pillar of sustainable rural livelihoods</p>
          </div>
        </div>
      </div>

      {/* ──────────────────────────── COOPERATIVES ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HandHeart className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Women&apos;s &amp; Artisan Cooperatives
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Visiting cooperatives is one of the most impactful things you can do as an eco-tourist in
              Morocco. Your purchase directly supports women&apos;s economic empowerment and preserves
              ancestral craft traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cooperatives.map((coop) => (
              <div key={coop.name} className="card-moroccan p-6 flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {coop.name}
                    </h3>
                    <p className="text-xs text-[var(--color-accent)]">{coop.type}</p>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-grow">
                  {coop.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    {coop.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <Users className="w-3.5 h-3.5 shrink-0" />
                    {coop.members}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    {coop.visitInfo}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {coop.products.map((product) => (
                      <span key={product} className="inline-flex items-center px-2 py-0.5 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-xs border border-[var(--color-primary)]/20">
                        {product}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[var(--border-primary)]">
                    <p className="text-xs font-bold text-[var(--color-primary)] flex items-center gap-1.5">
                      <Coins className="w-3.5 h-3.5" />
                      Price range: {coop.priceRange}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── NATIONAL PARKS ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <TreePine className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              National Parks &amp; Protected Areas
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s national parks protect ecosystems from alpine peaks to Saharan wetlands.
              Visiting these parks funds conservation and supports surrounding communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecoParksList.map((park) => (
              <div key={park.name} className="card-moroccan p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <Mountain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {park.name}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)]">{park.region} &middot; {park.area}</p>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {park.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2">
                    Key Features
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{park.keyFeatures}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <Leaf className="w-3 h-3 text-emerald-600" />
                    Eco Activities
                  </p>
                  <ul className="space-y-1">
                    {park.ecoActivities.map((activity) => (
                      <li key={activity} className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-primary)]">
                  <div>
                    <p className="text-xs font-bold text-[var(--text-primary)] mb-0.5 flex items-center gap-1">
                      <Coins className="w-3 h-3 text-[#C4960C]" />
                      Entry &amp; Guides
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">{park.entryInfo}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--text-primary)] mb-0.5 flex items-center gap-1">
                      <Sun className="w-3 h-3 text-[#C4960C]" />
                      Best Season
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">{park.bestSeason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── COMMUNITY-BASED TOURISM ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Community-Based Tourism Experiences
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Immersive experiences where tourism revenue goes directly to local families and communities.
              These are not tourist performances &mdash; they are genuine invitations into daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityExperiences.map((exp) => (
              <div key={exp.name} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-base font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {exp.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-grow">
                  {exp.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)]">
                    <Coins className="w-3.5 h-3.5 shrink-0" />
                    {exp.price}
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-primary)]">
                  <p className="text-xs font-bold text-[var(--text-primary)] mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {exp.includes.map((item) => (
                      <li key={item} className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-[var(--color-primary)] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── SUSTAINABLE PRACTICES ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Recycle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Sustainable Travel Practices
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Practical, actionable steps to minimize your environmental impact and maximize your
              positive contribution while traveling in Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sustainablePractices.map((practice) => {
              const iconMap: Record<string, React.ReactNode> = {
                recycle: <Recycle className="w-5 h-5" />,
                droplets: <Droplets className="w-5 h-5" />,
                coins: <Coins className="w-5 h-5" />,
                footprints: <Footprints className="w-5 h-5" />,
                heart: <Heart className="w-5 h-5" />,
                globe: <Globe className="w-5 h-5" />,
              };
              return (
                <div key={practice.title} className="card-moroccan p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      {iconMap[practice.icon]}
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {practice.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 mb-4 flex-grow">
                    {practice.actions.map((action) => (
                      <li key={action} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                    <p className="text-xs text-emerald-800 leading-relaxed flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span><strong>Impact:</strong> {practice.impact}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── SUSTAINABLE SOUVENIRS ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Sustainable Souvenirs &amp; Ethical Shopping
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Every purchase tells a story. Choose souvenirs that support artisans, preserve traditions,
              and are made from sustainable materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sustainableSouvenirs.map((souvenir) => (
              <div key={souvenir.item} className="card-moroccan p-5 flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C4960C]/10 text-[#C4960C] shrink-0">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                    {souvenir.item}
                  </h3>
                  <p className="text-xs text-[var(--color-accent)] mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {souvenir.where}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                    {souvenir.whySustainable}
                  </p>
                  <p className="text-xs font-bold text-[var(--color-primary)] flex items-center gap-1">
                    <Coins className="w-3 h-3" />
                    {souvenir.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── CARBON & TRANSPORT ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Globe className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Carbon-Conscious Transport &amp; Offsets
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Compare the carbon footprint of different transport options within Morocco and make
              informed choices about how you move around the country.
            </p>
          </div>

          {/* Transport Comparison Table */}
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1A1814] text-white">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Transport Mode</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Example Route</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">CO2 / Person</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Price</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {transportOptions.map((option, index) => (
                    <tr key={option.mode} className={index % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 font-bold text-[var(--text-primary)]">
                        <span className="flex items-center gap-2">
                          {option.mode === 'Bicycle' && <Bike className="w-4 h-4 text-emerald-600" />}
                          {option.mode === 'Train (ONCF)' && <Compass className="w-4 h-4 text-blue-600" />}
                          {option.mode.includes('Bus') && <ArrowRight className="w-4 h-4 text-blue-500" />}
                          {option.mode.includes('Taxi') && <ArrowRight className="w-4 h-4 text-yellow-600" />}
                          {option.mode.includes('Car') && <AlertTriangle className="w-4 h-4 text-orange-500" />}
                          {option.mode.includes('Flight') && <AlertTriangle className="w-4 h-4 text-red-500" />}
                          {option.mode}
                        </span>
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">{option.route}</td>
                      <td className="p-4 text-[var(--text-secondary)] font-mono">{option.co2PerPerson}</td>
                      <td className="p-4 text-[var(--color-primary)] font-bold">{option.price}</td>
                      <td className="p-4 text-xs text-[var(--text-muted)]">{option.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Carbon Offset Info */}
          <div className="card-moroccan p-6 mt-8">
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-emerald-600" />
              Carbon Offset Programs in Morocco
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-[#C4960C]" />
                  Solar Energy Credits
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Morocco&apos;s Noor-Ouarzazate solar complex generates 580 MW of clean energy. Gold
                  Standard-certified offset credits fund expansion of solar infrastructure across the country.
                  Cost: approximately 100-150 MAD per tonne of CO2.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-1.5">
                  <TreePine className="w-4 h-4 text-emerald-600" />
                  Reforestation Projects
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  The High Atlas Foundation has planted over 4 million trees across Morocco. Offset programs
                  fund nurseries growing Atlas cedar, argan, olive, and almond trees. Each tree sequesters an
                  average of 22 kg of CO2 per year over its lifetime.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-1.5">
                  <Flower2 className="w-4 h-4 text-[var(--color-accent)]" />
                  Clean Cookstove Programs
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Verra-certified projects distribute improved cookstoves to rural families, reducing wood
                  fuel consumption by 50-70%. Each stove prevents approximately 3 tonnes of CO2 annually while
                  improving indoor air quality and reducing deforestation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── ORGANIC FARMS ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Wheat className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Organic Farms &amp; Agricultural Experiences
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s agricultural heritage spans millennia. These farms welcome visitors to
              experience traditional and innovative organic farming practices firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organicFarms.map((farm, index) => (
              <div key={farm.name} className="card-moroccan p-6 flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 shrink-0 font-bold text-sm font-[family-name:var(--font-display)]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {farm.name}
                    </h3>
                    <p className="text-xs text-[var(--color-accent)]">{farm.location}</p>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-grow">
                  {farm.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-[var(--border-primary)]">
                  <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                    <Sprout className="w-3 h-3" />
                    <strong>Specialty:</strong> {farm.specialty}
                  </p>
                  <p className="text-xs font-bold text-[var(--color-primary)] flex items-center gap-1.5">
                    <Coins className="w-3 h-3" />
                    {farm.visitPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── WATER CONSERVATION ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Droplets className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Water Conservation: Morocco&apos;s Critical Challenge
            </h2>
          </div>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p className="text-sm">
                  Morocco faces one of the most severe water crises in the Mediterranean region. Annual rainfall
                  has decreased by 20% over the past three decades, and per-capita water availability has dropped
                  from 2,600 cubic meters in 1960 to under 600 cubic meters today &mdash; well below the
                  internationally recognized threshold of 1,000 cubic meters for water stress.
                </p>
                <p className="text-sm">
                  Tourism accounts for a significant portion of water consumption in popular destinations.
                  A typical luxury hotel uses 800-1,500 liters per guest per night, compared to the national
                  average household consumption of 50-80 liters per person per day. The contrast is stark
                  and the environmental toll is real.
                </p>
                <p className="text-sm">
                  As a responsible traveler, your water choices matter. Every short shower, every reused towel,
                  and every decision to choose a water-conscious accommodation contributes to a sustainable future
                  for the communities you visit.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'What You Can Do',
                  items: [
                    'Take 5-minute showers instead of baths',
                    'Reuse hotel towels and linens',
                    'Carry a reusable water bottle with filter',
                    'Choose accommodations with greywater systems',
                    'Report leaking taps or running toilets',
                    'Avoid hotels with decorative fountains or large pools in dry regions',
                  ],
                },
                {
                  title: 'Morocco\'s Water Innovations',
                  items: [
                    'Fog-catching nets in the Anti-Atlas harvest water from clouds',
                    'Traditional khettaras (underground irrigation channels) still function in oases',
                    'Desalination plants serve Agadir and Dakhla',
                    'Treated wastewater irrigates golf courses and green spaces',
                    'Drip irrigation replaces flood irrigation in modern farms',
                    'Rainwater harvesting mandated in new eco-tourism developments',
                  ],
                },
              ].map((section) => (
                <div key={section.title} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-blue-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── RESPONSIBLE TREKKING ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Footprints className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Responsible Trekking in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s mountains are a trekking paradise, but increased foot traffic demands
              responsible practices to protect these fragile environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Leave No Trace Principles',
                icon: <Shield className="w-5 h-5" />,
                items: [
                  'Carry out all trash including food waste, orange peels, and tissue',
                  'Use established trails and campsites to prevent erosion',
                  'Bury human waste at least 30 cm deep and 70 m from water sources',
                  'Never pick wildflowers or disturb plants, especially above treeline',
                  'Minimize campfire impact: use a camping stove when possible',
                  'Leave what you find: rocks, artifacts, and natural features stay in place',
                ],
              },
              {
                title: 'Supporting Local Guides',
                icon: <Users className="w-5 h-5" />,
                items: [
                  'Hire licensed local guides (required by law in national parks)',
                  'Ensure mule handlers are paid fair wages (minimum 200 MAD/day)',
                  'Tip guides and porters appropriately (50-100 MAD/day standard)',
                  'Choose operators that provide insurance for their staff',
                  'Request village-based accommodation over imported camping gear',
                  'Learn about guide qualifications: CFAMM certification is the gold standard',
                ],
              },
              {
                title: 'Trekking Route Conditions',
                icon: <AlertTriangle className="w-5 h-5" />,
                items: [
                  'Toubkal summit trail: heavily trafficked, trail restoration underway',
                  'M\'Goun traverse: less crowded, excellent community guesthouses',
                  'Jebel Saghro: winter alternative, semi-arid landscapes, uncrowded',
                  'Ait Bougmez Valley: gentle trekking, superb village-to-village routes',
                  'Rif Mountains: Talassemtane park offers pristine forest trekking',
                  'Report trail damage or litter issues to park authorities',
                ],
              },
              {
                title: 'Mountain Safety & Ethics',
                icon: <Mountain className="w-5 h-5" />,
                items: [
                  'Acclimatize properly: spend one night at 3,000m before going higher',
                  'Carry adequate water (minimum 2 liters per person per day in summer)',
                  'Check weather conditions with local guides before departure',
                  'Travel with a group of at least two people above 3,000m',
                  'Respect village customs: dress modestly, ask before photographing',
                  'Support mountain rescue services with a voluntary contribution',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <span className="text-[var(--color-primary)]">{section.icon}</span>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── FAQ ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know about traveling sustainably in Morocco.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#C4960C] shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── RELATED PAGES ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Your Sustainable Journey
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Explore more guides to plan your responsible Morocco adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'National Parks', href: '/national-parks', icon: <TreePine className="w-5 h-5" />, desc: 'Protected areas and conservation' },
              { title: 'Trekking Guide', href: '/trekking', icon: <Mountain className="w-5 h-5" />, desc: 'Atlas Mountain trail routes' },
              { title: 'Wildlife & Nature', href: '/wildlife', icon: <Bird className="w-5 h-5" />, desc: 'Species, birdwatching, marine life' },
              { title: 'Argan Oil Guide', href: '/argan-oil', icon: <Leaf className="w-5 h-5" />, desc: 'Cooperatives and production' },
              { title: 'Camping in Morocco', href: '/camping', icon: <Tent className="w-5 h-5" />, desc: 'Outdoor adventures and campsites' },
              { title: 'Budget Travel', href: '/budget-travel', icon: <Coins className="w-5 h-5" />, desc: 'Affordable sustainable options' },
              { title: 'Cooking Classes', href: '/cooking-classes', icon: <Flower2 className="w-5 h-5" />, desc: 'Farm-to-table experiences' },
              { title: 'Crafts & Artisans', href: '/crafts', icon: <Sparkles className="w-5 h-5" />, desc: 'Traditional Moroccan craftsmanship' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-moroccan p-4 flex items-start gap-3 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors shrink-0">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── ECO-TOURISM INFOGRAPHIC ──────────────────────────── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco max-w-3xl">
          <div className="text-center mb-8">
            <Leaf className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-3" />
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold" style={{ color: '#1A1814' }}>
              Eco-Tourism in Morocco at a Glance
            </h2>
            <p className="text-[var(--text-secondary)] mt-2">
              Key facts, figures, and impact data about sustainable travel in Morocco.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img src="/images/infographic-eco-tourism.webp" alt="Infographic showing Morocco eco-tourism statistics including national parks, endangered species, renewable energy targets, and sustainable accommodation options" loading="lazy" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ──────────────────────────── CTA SECTION ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#1A1814] text-white moroccan-pattern-dark">
        <div className="container-morocco text-center max-w-3xl">
          <Leaf className="w-10 h-10 text-[#C4960C] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Travel Morocco Responsibly
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Every choice you make as a traveler shapes the future of the places you visit. By choosing
            eco-lodges, supporting cooperatives, and practicing sustainable habits, you help preserve
            Morocco&apos;s extraordinary heritage for generations to come.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="btn-primary">
              Browse Eco Tours <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/national-parks" className="btn-ghost !text-white !border-white/30 hover:!bg-white/10">
              Explore National Parks <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

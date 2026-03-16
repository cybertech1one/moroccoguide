import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Mountain,
  Languages,
  Building,
  Paintbrush,
  Music,
  CalendarDays,
  UtensilsCrossed,
  MapPin,
  Users,
  Compass,
  Star,
  ArrowRight,
  Shield,
  Lightbulb,
  Camera,
  Heart,
  Clock,
  CheckCircle,
  AlertTriangle,
  Globe,
  Gem,
  Landmark,
  Footprints,
  Mic,
  HandCoins,
  Sparkles,
  Sun,
  Backpack,
  MessageCircle,
  HelpCircle,
  Info,
  TreePine,
  Scissors,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Berber (Amazigh) Culture Guide | History, Traditions, Language & Heritage in Morocco',
  description:
    'Comprehensive guide to Amazigh (Berber) culture in Morocco. Discover 3,000+ years of indigenous heritage including Tamazight language, Tifinagh script, traditional architecture, carpet weaving, music, festivals like Imilchil and Yennayer, cuisine, and responsible tourism tips for visiting Berber communities.',
  keywords: [
    'Berber culture Morocco',
    'Amazigh heritage',
    'Tamazight language',
    'Tifinagh script',
    'Berber tribes Morocco',
    'Imilchil marriage festival',
    'Yennayer Amazigh New Year',
    'Berber carpet weaving',
    'Beni Ourain rugs',
    'Azilal carpets',
    'Boucherouite rugs',
    'Berber music ahwash',
    'Berber architecture kasbahs',
    'Ait Ben Haddou',
    'Atlas Mountains Berber',
    'Rif Berbers',
    'Tuareg Morocco',
    'Souss Berbers',
    'Berber cuisine tagine',
    'Tamegroute pottery',
    'Tiznit silver jewelry',
    'IRCAM Morocco',
    'Berber homestay',
    'responsible tourism Morocco',
    'Amazigh culture guide',
    'Berber village tours',
    'Atlas trekking Berber guides',
  ],
  openGraph: {
    title: 'Amazigh (Berber) Culture Guide - CityGuide Morocco',
    description:
      'Explore 3,000+ years of indigenous Amazigh heritage in Morocco. From Tamazight language and Tifinagh script to traditional kasbahs, carpet weaving, music festivals, and authentic village experiences.',
    url: 'https://citytoursmorocco.com/berber-culture',
    images: [
      {
        url: '/images/hero-atlas-village.webp',
        width: 1200,
        height: 630,
        alt: 'Traditional Berber village nestled in the Atlas Mountains of Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazigh (Berber) Culture Guide | Morocco Heritage',
    description:
      'Discover the indigenous Amazigh people of Morocco: 3,000+ years of language, architecture, arts, music, festivals, and living traditions in the Atlas Mountains and beyond.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/berber-culture' },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/berber-culture#guide',
      headline: 'Complete Guide to Amazigh (Berber) Culture in Morocco',
      description:
        'Comprehensive guide to the indigenous Amazigh people of Morocco covering 3,000+ years of history, Tamazight language, Tifinagh script, traditional architecture, arts and crafts, music, festivals, cuisine, and responsible tourism.',
      url: 'https://citytoursmorocco.com/berber-culture',
      publisher: {
        '@type': 'Organization',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://citytoursmorocco.com/berber-culture',
      name: 'Amazigh (Berber) Culture Guide',
      url: 'https://citytoursmorocco.com/berber-culture',
      isPartOf: {
        '@type': 'WebSite',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
      about: {
        '@type': 'Country',
        name: 'Morocco',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
          { '@type': 'ListItem', position: 2, name: 'Berber Culture', item: 'https://citytoursmorocco.com/berber-culture' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://citytoursmorocco.com/berber-culture#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between Berber and Amazigh?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amazigh is the preferred self-designation of the indigenous people of North Africa, meaning "free people." The term Berber originates from the Greek word "barbaros" and was historically imposed by outsiders. Today, Amazigh is increasingly used in official and cultural contexts, though Berber remains widely understood internationally.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of Morocco population is Berber?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Estimates vary, but approximately 60% or more of Morocco population has Amazigh (Berber) ancestry. About 26-40% of Moroccans speak a Tamazight language as their mother tongue, with three main dialect groups: Tarifit in the Rif, Tamazight in the Middle Atlas, and Tashelhit in the Souss and High Atlas.',
          },
        },
        {
          '@type': 'Question',
          name: 'When is the best time to visit Berber communities in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Spring (April-May) and autumn (September-October) offer the best weather for visiting Atlas Mountain communities. September brings the famous Imilchil Marriage Festival. January 13 is Yennayer, the Amazigh New Year. Summer is good for high-altitude trekking, while winter can bring snow to mountain passes above 2,000 meters.',
          },
        },
      ],
    },
  ],
};

/* =====================================================================
   AMAZIGH REGIONS & TRIBES DATA
   ===================================================================== */

interface AmazighRegion {
  name: string;
  tribes: string;
  language: string;
  geography: string;
  image: string;
  description: string;
  keyLocations: string[];
  traditions: string;
}

const amazighRegions: AmazighRegion[] = [
  {
    name: 'Rif Berbers (Irifiyen)',
    tribes: 'Rifian confederations including Ait Waryaghar, Igzennayen, Ait Touzine, Temsamane',
    language: 'Tarifit (Riffian)',
    geography: 'Rif Mountains of northern Morocco, Mediterranean coast',
    image: '/images/hero-chefchaouen.webp',
    description:
      'The Rif Berbers inhabit the rugged mountains of northern Morocco, from Tangier to the Algerian border. Historically fiercely independent, they resisted Spanish colonial rule under the legendary Abd el-Krim, who founded the short-lived Republic of the Rif (1921-1926). The Rif region is known for its dramatic mountain landscapes, the iconic blue-washed town of Chefchaouen, and a strong sense of regional identity. Rifians speak Tarifit, a distinct Amazigh language with its own literary tradition.',
    keyLocations: ['Chefchaouen', 'Al Hoceima', 'Nador', 'Ketama', 'Tetouan'],
    traditions:
      'Rifian women are renowned for their distinctive striped skirts (foutas) and elaborate broad-brimmed straw hats decorated with pompoms and tassels. Traditional Rifian music features the gasba (reed flute) and the adjoun (frame drum). The region is known for its fine fig and olive cultivation, beekeeping, and distinctive red-and-white pottery.',
  },
  {
    name: 'Atlas Berbers (Imazighen n Waṭlas)',
    tribes: 'Ait Atta, Ait Hadiddou, Ait Sokhman, Ait Merghad, Ait Ouaouzguite, Zayane',
    language: 'Central Tamazight',
    geography: 'Middle Atlas, High Atlas, and eastern High Atlas plateaus',
    image: '/images/hero-atlas-village.webp',
    description:
      'The heartland of Amazigh culture, the Atlas Mountains shelter communities that have maintained their traditions for millennia. The Middle Atlas is home to semi-nomadic pastoral groups like the Zayane, who move their herds between summer and winter pastures. The High Atlas communities, such as the Ait Atta confederation, built the iconic kasbahs and fortified villages that define the southern Moroccan landscape. These communities practice terraced agriculture, growing barley, walnuts, almonds, and apples in the fertile mountain valleys.',
    keyLocations: ['Imlil', 'Ait Ben Haddou', 'Dades Valley', 'Todra Gorge', 'Azrou', 'Imilchil', 'Ouarzazate'],
    traditions:
      'Atlas Berbers are the custodians of ahidous and ahwash dance traditions, performed at community gatherings and festivals. Women are master carpet weavers, producing the famous Beni Ourain, Azilal, and Boucherouite rugs. The annual Imilchil Marriage Festival draws the Ait Hadiddou tribe for a celebration of betrothal and community. Communal grain storage in fortified agadirs (granaries) reflects the cooperative social organization of Atlas communities.',
  },
  {
    name: 'Souss Berbers (Ishelhin)',
    tribes: 'Chleuh confederations including Haha, Ida Ou Tanane, Ait Baamrane, Ammeln',
    language: 'Tashelhit (Shilha)',
    geography: 'Anti-Atlas, Souss Valley, western High Atlas, Agadir region',
    image: '/images/hero-agadir-beach.webp',
    description:
      'The Chleuh (Souss Berbers) are the largest Amazigh group in Morocco, spanning from the western High Atlas through the Souss Valley to the Anti-Atlas mountains and the Atlantic coast around Agadir. Historically, they were renowned merchants and traders whose commercial networks extended throughout Morocco and beyond. The Souss Valley is one of Morocco most agriculturally productive regions, famous for its argan trees, saffron cultivation in Taliouine, and citrus orchards. Tashelhit has the richest literary tradition of any Amazigh language in Morocco.',
    keyLocations: ['Agadir', 'Taroudant', 'Tiznit', 'Tafraout', 'Taliouine', 'Tafraoute', 'Ait Mansour'],
    traditions:
      'The Anti-Atlas is Morocco center of silver jewelry craftsmanship, particularly in Tiznit, where Berber and Jewish silversmiths developed distinctive filigree and enamel techniques. The region produces amlou, a prized almond and argan oil spread. Painted adobe granaries (agadirs) in the Anti-Atlas, some perched on dramatic cliff faces, represent remarkable communal architecture. The harvest festivals of the Souss celebrate almonds, dates, and roses with communal feasting and ahwash performances.',
  },
  {
    name: 'Saharan Berbers & Tuareg',
    tribes: 'Ait Khebbach, Ait Isfoul, Drawa, and Tuareg groups in the far southeast',
    language: 'Various Amazigh dialects, Hassaniya Arabic in some areas',
    geography: 'Draa Valley, Tafilalet, Erg Chebbi, southeastern oases, Saharan borderlands',
    image: '/images/hero-sahara-camp.webp',
    description:
      'The Saharan Berbers inhabit the vast pre-Saharan zone from the Draa Valley through the Tafilalet oasis region to the sand seas of Erg Chebbi and Erg Chigaga. This includes settled oasis communities who developed sophisticated irrigation systems (khettaras) and the semi-nomadic groups who traded across the Sahara. The Tuareg, famous as the "blue people" for their indigo-dyed garments, maintain a small but culturally significant presence in Morocco southeastern borderlands. The region legendary ksour (fortified villages) and kasbahs were built along ancient caravan routes connecting sub-Saharan Africa to Mediterranean ports.',
    keyLocations: ['Merzouga', 'Zagora', 'Rissani', 'Tata', 'M\'Hamid', 'Erfoud', 'Tinghir'],
    traditions:
      'Saharan Berber culture revolves around the oasis economy of date palms, henna, and subsistence farming. The guedra is a mesmerizing trance dance performed by women kneeling before a clay pot drum, unique to the Saharan region. Hospitality is sacred in the desert, where offering tea and shelter to travelers is a fundamental moral obligation. The region is also known for its distinctive architectural style: tall, multi-story earthen towers (tighremts) decorated with geometric patterns in raised adobe.',
  },
];

/* =====================================================================
   COMMON TAMAZIGHT PHRASES
   ===================================================================== */

interface TamazightPhrase {
  tamazight: string;
  tifinagh: string;
  english: string;
  context: string;
}

const tamazightPhrases: TamazightPhrase[] = [
  { tamazight: 'Azul', tifinagh: 'ⴰⵣⵓⵍ', english: 'Hello', context: 'Universal greeting, used across all regions' },
  { tamazight: 'Azul fellawen', tifinagh: 'ⴰⵣⵓⵍ ⴼⵍⵍⴰⵡⵏ', english: 'Hello to you (plural)', context: 'Greeting a group of people' },
  { tamazight: 'Tanemmirt', tifinagh: 'ⵜⴰⵏⵎⵎⵉⵔⵜ', english: 'Thank you', context: 'Essential polite expression' },
  { tamazight: 'Ieh / Yah', tifinagh: 'ⵢⴰⵀ', english: 'Yes', context: 'Affirmative response' },
  { tamazight: 'Uhu / La', tifinagh: 'ⵓⵀⵓ', english: 'No', context: 'Negative response' },
  { tamazight: 'Manzakin?', tifinagh: 'ⵎⴰⵏⵣⴰⴽⵉⵏ', english: 'How are you?', context: 'Common greeting follow-up' },
  { tamazight: 'Labas', tifinagh: 'ⵍⴰⴱⴰⵙ', english: 'I am fine / No problem', context: 'Response to "how are you"' },
  { tamazight: 'Mshta iga?', tifinagh: 'ⵎⵛⵜⴰ ⵉⴳⴰ', english: 'How much is it?', context: 'Essential for shopping in souks' },
  { tamazight: 'Ayyuz', tifinagh: 'ⴰⵢⵢⵓⵣ', english: 'Bravo / Well done', context: 'Expression of appreciation' },
  { tamazight: 'Ar tufat', tifinagh: 'ⴰⵔ ⵜⵓⴼⴰⵜ', english: 'See you tomorrow', context: 'Farewell until the next day' },
  { tamazight: 'Bslama', tifinagh: 'ⴱⵙⵍⴰⵎⴰ', english: 'Goodbye', context: 'Common farewell (shared with Darija)' },
  { tamazight: 'Aman', tifinagh: 'ⴰⵎⴰⵏ', english: 'Water', context: 'Useful in rural areas and trekking' },
];

/* =====================================================================
   TRADITIONAL ARCHITECTURE DATA
   ===================================================================== */

interface ArchitectureType {
  name: string;
  amazighName: string;
  description: string;
  location: string;
  features: string[];
}

const architectureTypes: ArchitectureType[] = [
  {
    name: 'Kasbah',
    amazighName: 'Tighremt',
    description:
      'A kasbah (tighremt in Tamazight) is a fortified residence built from rammed earth (pise) and sun-dried mud brick. Typically four stories tall with corner towers, kasbahs served as the strongholds of local chieftains and wealthy families. The walls are thick for insulation, with small windows on lower floors for defense and larger openings above for light and ventilation. The exteriors are often decorated with geometric relief patterns created by protruding and recessed bricks. The Draa Valley alone contains over a thousand kasbahs, many dating to the 17th-19th centuries.',
    location: 'Draa Valley, Dades Valley, Ouarzazate region',
    features: [
      'Rammed earth (pise) and adobe construction, 3-4 stories',
      'Corner watchtowers with crenellated parapets',
      'Geometric decorative patterns on upper facades',
      'Interior courtyard with communal living spaces',
      'Ground floor for livestock and storage, upper floors for family',
    ],
  },
  {
    name: 'Ksar (plural: Ksour)',
    amazighName: 'Ighrem',
    description:
      'A ksar is a fortified village, essentially a collective version of the kasbah. Surrounded by high defensive walls with watchtowers at intervals, a ksar contains densely packed houses, narrow alleys, a mosque, a communal bread oven, and a central open space for gatherings. The most famous ksar in Morocco is Ait Ben Haddou, a UNESCO World Heritage Site near Ouarzazate, which has appeared in films including "Gladiator," "Game of Thrones," and "Lawrence of Arabia." The Tafilalet region around Rissani and Erfoud contains some of the largest and oldest ksour in Morocco.',
    location: 'Southern Morocco, particularly Draa-Tafilalet region',
    features: [
      'Fortified perimeter walls with defensive towers',
      'Single main entrance gate (bab) for security',
      'Narrow, shaded alleys to minimize heat exposure',
      'Communal facilities: mosque, bread oven, grain storage',
      'UNESCO-listed examples: Ait Ben Haddou, Ksar of Rissani',
    ],
  },
  {
    name: 'Agadir (Communal Granary)',
    amazighName: 'Agadir / Igherm',
    description:
      'An agadir is a fortified communal granary where families in a village stored their harvest, valuables, and important documents in individually locked chambers. Often built on hilltops or cliff faces for defensive advantage, these structures represent a remarkable system of communal trust and resource management. Each family held a key to their own storage cell but the entire building was managed collectively. Some agadirs in the Anti-Atlas, such as Agadir Id Aissa near Amtoudi and Agadir Inoumar near Tafraout, are perched on seemingly inaccessible rock outcrops and are centuries old.',
    location: 'Anti-Atlas, western High Atlas, Souss region',
    features: [
      'Hilltop or cliff-face positioning for natural defense',
      'Hundreds of individual locked storage cells (rooms)',
      'Communal management under elected guardian (amin)',
      'Some examples are 400-800+ years old',
      'Notable sites: Amtoudi, Inoumar, Tizourgane, Ait Kine',
    ],
  },
  {
    name: 'Taddart (Traditional House)',
    amazighName: 'Taddart',
    description:
      'The taddart is the traditional Amazigh family home, built from locally available materials: stone in the mountains, adobe in the valleys, and rammed earth throughout. The design is adapted to the harsh climate, with thick walls providing insulation against both summer heat and winter cold. Most taddarts have a central courtyard open to the sky, with rooms arranged around it on multiple levels. The ground floor typically houses livestock and grain storage, while the family lives on the upper floors. Flat rooftops serve as additional living and working space where grain is dried, carpets are woven, and families sleep during hot summer nights.',
    location: 'Throughout Amazigh regions of Morocco',
    features: [
      'Thick stone or adobe walls for thermal insulation',
      'Central open courtyard for light and ventilation',
      'Multi-level: animals below, family above',
      'Flat rooftop used for drying, weaving, and sleeping',
      'Minimal windows on ground floor for security and climate control',
    ],
  },
];

/* =====================================================================
   ARTS & CRAFTS DATA
   ===================================================================== */

interface BerberCraft {
  name: string;
  icon: typeof Gem;
  description: string;
  priceRange: string;
  buyingTip: string;
  regions: string;
}

const berberCrafts: BerberCraft[] = [
  {
    name: 'Beni Ourain Carpets',
    icon: Sparkles,
    description:
      'The most internationally sought-after Moroccan carpet style, Beni Ourain rugs originate from the Beni Ourain tribe of the Middle Atlas mountains. Characterized by thick, plush ivory wool with bold black or dark brown geometric diamond patterns, these carpets were traditionally woven by women for use as sleeping mats and blankets in cold mountain homes. Each rug tells a personal story through its symbols: diamonds represent femininity and protection, zigzag lines symbolize water or mountains, and X-shapes ward off evil spirits. The wool comes from the region indigenous sheep and is hand-spun and hand-knotted on traditional looms.',
    priceRange: '2,000-8,000 MAD for small (1.5x2m); 5,000-15,000 MAD for large (2x3m+)',
    buyingTip:
      'Authentic Beni Ourain rugs use undyed natural wool in cream and brown/black only. If it has bright colors, it is not a true Beni Ourain. Feel the pile: genuine rugs have a deep, soft pile of at least 2-3 cm. Buy from cooperatives in Azrou or Khemisset for the best prices and authenticity.',
    regions: 'Middle Atlas (Azrou, Khemisset, Ifrane region)',
  },
  {
    name: 'Azilal Carpets',
    icon: Paintbrush,
    description:
      'Azilal rugs from the central High Atlas are a joyful explosion of color and abstract design. Unlike the restrained palette of Beni Ourain, Azilal carpets feature vibrant reds, yellows, blues, and greens woven into freeform geometric and figurative motifs on a cream or white background. Many Azilal rugs include representations of human figures, animals, eyes, and architectural elements, making each one a unique artistic narrative. These rugs have gained enormous popularity with contemporary interior designers who prize their bold, modernist aesthetic.',
    priceRange: '1,500-6,000 MAD for small; 4,000-12,000 MAD for large',
    buyingTip:
      'Look for hand-spun wool with natural irregularities in the weave, a sign of authentic handcraft. The best selection is found in Azilal town itself and in curated cooperatives in Marrakech. Beware of factory copies with overly uniform patterns.',
    regions: 'Azilal province, central High Atlas',
  },
  {
    name: 'Boucherouite Rugs',
    icon: Scissors,
    description:
      'Boucherouite (from the Arabic "bu sherwit," meaning torn cloth) rugs are made from recycled fabric strips rather than wool. Born from necessity in communities where wool was scarce or expensive, these textiles are woven from scraps of old clothing, cotton, nylon, and synthetic materials into dazzling patchworks of color and pattern. No two boucherouite rugs are alike. Once considered humble domestic textiles, they have been embraced by the international art world as outsider art, with some exceptional examples exhibited in galleries and museums.',
    priceRange: '500-3,000 MAD for small; 2,000-8,000 MAD for large vintage pieces',
    buyingTip:
      'Vintage boucherouite rugs (30+ years old) are more valuable and have softer, more faded colors. New productions tend to use brighter synthetic materials. Check the density of the weave: tighter is better. Marrakech souks have the widest selection.',
    regions: 'High Atlas, particularly Ourika Valley and Azilal',
  },
  {
    name: 'Tamegroute Green Pottery',
    icon: Gem,
    description:
      'The village of Tamegroute, near Zagora in the Draa Valley, produces pottery with a distinctive green glaze that has become synonymous with Moroccan artisan craft. The unique green color comes from a combination of manganese, copper oxide, and silica applied to earthenware before firing in traditional wood-burning kilns. The glaze naturally crazes (develops fine surface cracks) over time, creating a prized antique appearance. Tamegroute pottery ranges from simple bowls and cups to elaborate candle holders, vases, and decorative tiles. The craft has been practiced in the village for generations, associated with the nearby Nassiriyya Sufi zaouia.',
    priceRange: '30-100 MAD for small bowls; 100-500 MAD for larger pieces; 50-200 MAD for candle holders',
    buyingTip:
      'Buy directly from the potters workshops in Tamegroute village for the best prices and widest selection. The pieces are fragile, so pack carefully. The green glaze will naturally develop more crazing over time, which is considered desirable, not a defect.',
    regions: 'Tamegroute village, Draa Valley (near Zagora)',
  },
  {
    name: 'Tiznit Silver Jewelry',
    icon: Gem,
    description:
      'The Anti-Atlas town of Tiznit is the undisputed capital of Berber silver jewelry. For centuries, Jewish and Amazigh silversmiths worked side by side in Tiznit creating bold, geometric pieces rich in symbolic meaning. The tradition includes massive fibulae (tizerzai) used to pin garments, chunky bangles and cuffs, ornate headpieces and forehead chains, Hand of Fatima (khamsa) pendants, and elaborate pectoral necklaces incorporating coral, amber, amazonite, and colored enamel. Each piece encodes tribal identity: specific patterns identify the wearer community, marital status, and social standing.',
    priceRange: '100-500 MAD for simple bangles; 500-3,000 MAD for necklaces; 2,000-10,000+ MAD for antique or museum-quality pieces',
    buyingTip:
      'The silver souk in Tiznit (near the central mechouar) has the best prices and selection. Test for real silver by checking for a hallmark or using a magnet (silver is not magnetic). Antique pieces command premium prices. Be aware that many new pieces are silver-plated over base metal. A reputable dealer will guarantee the silver content.',
    regions: 'Tiznit, Anti-Atlas, southern Morocco',
  },
  {
    name: 'Berber Woodwork',
    icon: TreePine,
    description:
      'Amazigh woodworking encompasses a wide range of functional and decorative objects carved from local woods including cedar, walnut, olive, and argan. Traditional items include ornate wooden doors with iron stud decorations, carved ceiling beams in kasbahs, kitchen utensils (large communal couscous bowls, ladles, butter churns), and furniture. The town of Essaouira is famous for its thuya burl wood marquetry, while High Atlas villages produce carved doors and chests decorated with symbolic geometric patterns that mirror carpet motifs.',
    priceRange: '50-200 MAD for utensils; 200-1,500 MAD for carved boxes; 1,000-5,000+ MAD for doors and chests',
    buyingTip:
      'In mountain villages, look for hand-carved items with tool marks that indicate genuine handcraft rather than machine production. Cedar items should have a fragrant scent. In Essaouira, buy thuya items from the cooperative near the port for fair prices.',
    regions: 'High Atlas, Essaouira, Anti-Atlas',
  },
];

/* =====================================================================
   MUSIC & DANCE DATA
   ===================================================================== */

interface MusicStyle {
  name: string;
  region: string;
  description: string;
  instruments: string[];
  when: string;
}

const musicStyles: MusicStyle[] = [
  {
    name: 'Ahwash',
    region: 'High Atlas & Souss Valley (Tashelhit-speaking areas)',
    description:
      'Ahwash is the great communal performance tradition of the Shilha (Tashelhit-speaking) Berbers of southern Morocco. Performed at weddings, festivals, and harvest celebrations, ahwash features large groups of men and women arranged in opposing lines or semicircles. The performance begins with poetry recitation by a lead poet (amyaz), followed by rhythmic clapping and swaying that gradually builds in intensity. Drums (bendirs and tallunt) drive the rhythm while the group responds in complex call-and-response patterns. Ahwash can last hours, building through successive phases of increasing speed and intensity until reaching an ecstatic climax. The performance under moonlight in a mountain village is one of Morocco most profound cultural experiences.',
    instruments: ['Bendir (large frame drum)', 'Tallunt (cylindrical drum)', 'Hand clapping', 'Voice/chanting'],
    when: 'Weddings, harvest festivals, community celebrations, especially summer and autumn',
  },
  {
    name: 'Ahidous',
    region: 'Middle Atlas (Central Tamazight-speaking areas)',
    description:
      'Ahidous is the signature musical tradition of the Middle Atlas Berbers, performed by the Zayane, Ait Merghad, and other central Amazigh groups. Men and women stand shoulder to shoulder in a tight line or circle, swaying rhythmically while stamping their feet in unison. The poetry is improvised by a lead singer (izli), with the group responding in powerful chorus. The bendir frame drums provide a hypnotic, driving pulse. Ahidous is both entertainment and social cohesion ritual, reinforcing community bonds and providing a rare context for interaction between young men and women. The dance is performed at moussems, weddings, and national celebrations.',
    instruments: ['Bendir (frame drum)', 'Voice (call-and-response)', 'Foot stamping', 'Hand clapping'],
    when: 'Moussems, weddings, national holidays, Imilchil Festival',
  },
  {
    name: 'Guedra',
    region: 'Saharan south (Draa-Tafilalet, Guelmim-Oued Noun)',
    description:
      'The guedra is a mesmerizing trance dance unique to the Saharan Berber communities of southern Morocco. Named after the clay pot (guedra) that serves as a drum, the performance centers on a single female dancer who kneels before the drum, gradually entering a state of trance. Beginning with subtle finger movements and gentle swaying, the dancer builds in intensity, whipping her hair and moving her hands in intricate patterns as the drumming accelerates. The guedra is traditionally performed at celebrations and has deep spiritual significance, considered a prayer expressed through movement. The audience sits in a circle around the dancer, clapping and chanting in support.',
    instruments: ['Guedra (clay pot drum covered with skin)', 'Hand clapping', 'Chanting'],
    when: 'Celebrations, weddings, cultural festivals in the south',
  },
  {
    name: 'Rwais (Rwayes)',
    region: 'Souss Valley and Anti-Atlas (Tashelhit-speaking areas)',
    description:
      'The rwais are professional itinerant musician-poets of the Shilha Berber tradition, comparable to West African griots or European troubadours. Traveling in small groups, rwais perform at festivals, weddings, and markets, singing extended poetic narratives that address love, politics, morality, and current events. The lead performer (arrays) is accompanied by a small ensemble. The rwais tradition produced legendary artists like Rais Lhaj Belaid, whose recordings from the 1920s-30s are considered national treasures. The tradition continues today, with rwais performing at moussems and cultural festivals throughout the Souss region.',
    instruments: ['Lotar (4-stringed lute)', 'Ribab (single-string fiddle)', 'Naqus (metal percussion)', 'Voice'],
    when: 'Festivals, weddings, moussems, cultural events',
  },
  {
    name: 'Gnaoua (Gnawa) Berber-African Fusion',
    region: 'Essaouira, Marrakech, and nationwide',
    description:
      'While Gnaoua music has Sub-Saharan African roots, it has deeply intertwined with Amazigh culture over centuries of shared geography in Morocco. Gnaoua masters (maalems) play the guembri, a three-stringed bass lute, accompanied by iron castanets (qraqeb) and chanting. The music is central to spiritual healing ceremonies called lilas that can last all night, invoking various spiritual entities through specific rhythmic patterns and melodies. UNESCO inscribed Gnaoua practices on the Representative List of the Intangible Cultural Heritage of Humanity in 2019. The annual Gnaoua World Music Festival in Essaouira draws international audiences.',
    instruments: ['Guembri (3-stringed bass lute)', 'Qraqeb (iron castanets)', 'Tbel (large drum)', 'Voice/chanting'],
    when: 'Year-round; Gnaoua Festival in Essaouira (June); lilas throughout the year',
  },
];

/* =====================================================================
   FESTIVALS & CELEBRATIONS DATA
   ===================================================================== */

interface BerberFestival {
  name: string;
  timing: string;
  location: string;
  description: string;
  practicalInfo: string;
}

const berberFestivals: BerberFestival[] = [
  {
    name: 'Imilchil Marriage Festival (Moussem of Betrothal)',
    timing: 'September (usually mid-to-late September, dates vary)',
    location: 'Imilchil, High Atlas (Ait Hadiddou tribal territory)',
    description:
      'The most famous Amazigh festival in Morocco, the Imilchil Marriage Festival is an annual gathering of the Ait Hadiddou tribe where young men and women choose their spouses. According to legend, the festival originated from the story of two lovers from rival clans, Isli and Tislit, whose parents forbade their union. The lovers wept so copiously that their tears formed two lakes (Isli and Tislit) near Imilchil. Moved by their grief, the elders decreed that henceforth, young people could freely choose their partners at an annual festival. Today, the moussem combines genuine marriage ceremonies with a lively souk, ahidous performances, horse riding, and feasting. While increasingly touristic, the core tradition remains alive.',
    practicalInfo:
      'Imilchil is remote: allow a full day to drive from Marrakech or Fes via winding mountain roads. Accommodation is limited; most visitors camp or stay in basic guesthouses. Book guides in advance. The festival dates are set according to the agricultural calendar and local tribal council, so confirm dates before traveling. Expect cold nights at 2,100m altitude.',
  },
  {
    name: 'Yennayer (Amazigh New Year)',
    timing: 'January 13 each year',
    location: 'Celebrated nationwide, especially in Atlas Mountains, Rif, and Souss',
    description:
      'Yennayer marks the first day of the Amazigh agrarian calendar, corresponding to January 13 in the Gregorian calendar (the calendar year 2975 in the Amazigh calendar began on January 13, 2025). Recognized as an official national holiday in Morocco since 2023, Yennayer is celebrated with communal feasts featuring special dishes like couscous with seven vegetables, tagine with dried fruits, and urkimen (a hearty grain porridge). Families gather, homes are cleaned and decorated, and communities organize music and dance performances. In some regions, children receive small gifts and new clothes. Yennayer celebrations carry a strong dimension of cultural affirmation and Amazigh identity.',
    practicalInfo:
      'As a newly recognized national holiday, Yennayer celebrations are growing in visibility every year. Major cities like Rabat and Agadir hold public events. The most authentic celebrations are in Atlas Mountain villages and Souss Valley communities. Some riads and cultural centers in Marrakech host Yennayer dinners open to tourists.',
  },
  {
    name: 'Moussem of Tan-Tan (UNESCO)',
    timing: 'May-June (varies annually)',
    location: 'Tan-Tan, Guelmim-Oued Noun region, southern Morocco',
    description:
      'Inscribed on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity, the Moussem of Tan-Tan is a massive annual gathering of nomadic peoples from across the Saharan region. Originally a commercial fair and religious pilgrimage, the moussem features camel racing, fantasia (horse riding displays), guedra dancing, poetry contests, and a vast souk. The gathering celebrates the oral traditions, music, and social practices of the nomadic and semi-nomadic communities of the southwest Saharan borderlands. After a period of decline in the 1970s-90s, the moussem was revived with UNESCO support and has become a major cultural event.',
    practicalInfo:
      'Tan-Tan is a long drive from Agadir (about 6 hours) or can be reached via domestic flight to Guelmim plus a 2-hour drive. Accommodation options are limited during the festival. The event draws large crowds. Bring sun protection and layers for cool desert evenings.',
  },
  {
    name: 'Almond Blossom Festival',
    timing: 'Late January to mid-February',
    location: 'Tafraout, Anti-Atlas',
    description:
      'When the almond trees of the Anti-Atlas burst into delicate pink and white blossoms against the dramatic red granite landscape of the Ameln Valley, the town of Tafraout celebrates with a week-long festival of music, dance, and community gathering. Ahwash performances, traditional song competitions, and almond-themed culinary events fill the program. The visual spectacle of blooming almond orchards set against the painted rocks of Tafraout and the towering red cliffs of the surrounding valley is extraordinary. The festival also features a souk selling local almonds, amlou (almond-argan butter), and regional crafts.',
    practicalInfo:
      'Tafraout is accessible from Agadir (about 3-4 hours by road). The town has a good selection of small hotels and guesthouses. Book ahead during festival week. The exact dates depend on the almond bloom, which varies with winter weather. Mid-February is usually peak bloom.',
  },
  {
    name: 'Rose Festival',
    timing: 'May (usually first or second weekend)',
    location: 'Kelaat M\'gouna (El Kelaa des Mgouna), Dades Valley',
    description:
      'The Dades Valley around Kelaat M\'gouna is known as the "Valley of Roses" for the millions of Damask roses cultivated there to produce rosewater and rose essential oil. The annual Rose Festival celebrates the harvest with a three-day program of ahwash and music performances, a parade through town featuring the election of a "Rose Queen," souk stalls selling rose products, and communal feasting. The festival coincides with the peak rose harvest when the valley air is heavy with fragrance and rose petals are spread to dry on rooftops throughout the town. Local cooperatives sell rosewater, rose oil, rose cream, and rose soap at excellent prices.',
    practicalInfo:
      'Kelaat M\'gouna is located between Ouarzazate and Tinghir on the main N10 highway. Accommodation is available in town and at nearby kasbahs. The festival draws large crowds from across Morocco. Rose products purchased directly from cooperatives during the festival cost a fraction of prices in Marrakech or international markets.',
  },
  {
    name: 'Date Festival (Moussem of Dates)',
    timing: 'October (usually third week)',
    location: 'Erfoud, Tafilalet region',
    description:
      'The Tafilalet oasis is the heart of Morocco date palm cultivation, and the annual harvest is celebrated in Erfoud with a three-day festival featuring exhibitions of over 30 date varieties, agricultural shows, fantasia horse displays, Gnawa music, and cultural performances. The region produces the prized Medjool date (dating back to the original "Medjool" mother palms) along with other varieties like Bouskri, Jihl, and Boufeggous. The festival is a genuine agricultural celebration, deeply rooted in the oasis economy, and offers visitors a chance to taste date varieties not found outside the region.',
    practicalInfo:
      'Erfoud is accessible from Fes (about 8 hours) or from Ouarzazate (about 5 hours via the Dades Valley). Hotels fill up during the festival, so book early. The nearby village of Rissani has additional accommodation and a famous twice-weekly souk. Combine with a visit to the Erg Chebbi sand dunes at Merzouga, just 50 km away.',
  },
];

/* =====================================================================
   TRADITIONAL CUISINE DATA
   ===================================================================== */

interface BerberDish {
  name: string;
  description: string;
  region: string;
}

const berberCuisine: BerberDish[] = [
  {
    name: 'Tagine (Origin Story)',
    description:
      'The tagine is perhaps Morocco most iconic dish, and it is fundamentally a Berber invention. Named after the conical earthenware pot in which it is cooked, the tagine was developed by nomadic and semi-nomadic Amazigh peoples who needed a portable, fuel-efficient cooking method. The conical lid traps steam and returns condensation to the dish, creating a slow-braised, intensely flavored stew using minimal water, perfect for arid regions. Traditional Berber tagines are simpler than the elaborate versions found in urban restaurants: a base of onions, tomatoes, and olive oil with seasonal vegetables, preserved lemons, olives, and whatever protein is available (chicken, lamb, or beef).',
    region: 'Originated with Atlas and Saharan Berber communities, now nationwide',
  },
  {
    name: 'Couscous (Friday Tradition)',
    description:
      'Couscous is the quintessential Berber grain dish, hand-rolled from semolina wheat and steamed in a special two-tiered pot called a couscoussier. In Morocco, Friday couscous lunch is a near-sacred family tradition: after the communal midday prayer, families gather to eat couscous with seven vegetables and lamb or chicken, served on a large communal platter. The preparation of couscous is a ritual in itself, with the semolina grains being rolled by hand, steamed three times, and fluffed with butter between steamings. In mountain communities, barley couscous (tchicha) is more traditional than the wheat variety, served with buttermilk (lben) or topped with caramelized onions and raisins.',
    region: 'Universal across all Amazigh communities',
  },
  {
    name: 'Tangia (Marrakchi Bachelor Pot)',
    description:
      'The tangia is a distinctive Marrakech slow-cooked dish with Berber roots, traditionally prepared by bachelors and working men. Chunks of lamb or beef are placed in a tall urn-shaped clay pot (the tangia) with preserved lemons, garlic, cumin, saffron, and smen (aged preserved butter). The sealed pot is taken to the local hammam and buried in the hot ashes of the furnace that heats the bathwater, where it slow-cooks for 6-8 hours. The result is meltingly tender meat in a rich, concentrated sauce. In Marrakech, the tradition continues: you can drop your tangia pot at specific hammams in the morning and collect your cooked meal in the evening.',
    region: 'Marrakech and surrounding areas',
  },
  {
    name: 'Mechoui (Whole Roasted Lamb)',
    description:
      'Mechoui is the Berber tradition of slow-roasting a whole lamb in an underground earthen oven (tafarnoute) or over a wood fire pit. Reserved for major celebrations: weddings, religious holidays, tribal gatherings, and the feast of Eid al-Adha. The lamb is rubbed with butter, cumin, and salt, then roasted for hours until the meat falls from the bone at the slightest touch. The most prized portions are the tender shoulder meat, which guests pull apart with their hands. Mechoui is often the centerpiece of large communal feasts serving dozens or even hundreds of people in Atlas Mountain villages.',
    region: 'Widespread across all Amazigh regions, particularly Atlas Mountains',
  },
  {
    name: 'Amlou (Amazigh Almond Butter)',
    description:
      'Amlou is a rich, sweet spread made from ground roasted almonds, argan oil, and honey, sometimes described as the "Berber Nutella." Originating in the Souss Valley and Anti-Atlas where all three ingredients grow abundantly, amlou is traditionally served at breakfast with fresh bread (khobz) or msemen (layered flatbread). The preparation involves roasting almonds over a charcoal fire, grinding them in a stone mortar, then blending with argan oil and local honey. The best amlou has a coarse, slightly chunky texture and a deeply nutty, sweet flavor. It is rich in healthy fats, protein, and vitamin E.',
    region: 'Souss Valley, Anti-Atlas, Essaouira region',
  },
  {
    name: 'Tchicha (Barley Couscous)',
    description:
      'In the High Atlas and Middle Atlas, where wheat was historically less available, barley couscous (tchicha) was the traditional staple grain. Coarser than wheat couscous, tchicha has a nuttier flavor and more substantial texture. It is typically served with buttermilk (lben) poured over the top, or with a simple stew of root vegetables and dried meat. During winter months, mountain communities prepare a thick tchicha porridge called tagella, cooked with olive oil, herbs, and sometimes dried figs. Tchicha represents the original Berber grain tradition before wheat couscous became dominant in Morocco.',
    region: 'High Atlas and Middle Atlas mountain communities',
  },
  {
    name: 'Mint Tea Ceremony',
    description:
      'While mint tea (atay) is universal across Morocco, the elaborate ceremony of its preparation has deep Amazigh roots tied to hospitality culture. Gunpowder green tea is steeped with fresh spearmint (or wormwood in the south) and generous amounts of sugar, then poured from a height into small glasses to create a frothy surface. A minimum of three glasses is offered to guests (the Berber proverb says: "the first glass is gentle like life, the second is strong like love, the third is bitter like death"). In Atlas Mountain villages, tea preparation is an art form and a negotiation ritual: no business, sale, or discussion begins without tea.',
    region: 'Universal across Morocco, ceremonial origins in Amazigh hospitality traditions',
  },
  {
    name: 'Khobz n Tafarnout (Amazigh Bread)',
    description:
      'Traditional Amazigh bread is baked in a clay oven (tafarnout) or on a flat stone over coals. Several varieties exist: khobz (round loaf bread), tafarnout (flatbread cooked directly on embers), batbout (steamed bread), and harcha (semolina griddle bread). In mountain villages, bread-baking remains a daily ritual, with the dough prepared in the morning and baked fresh. Many villages have a communal oven (ferran) where families bring their loaves. Bread is treated with deep respect in Amazigh culture; it is never placed upside down, never thrown away, and stale bread is given to animals rather than discarded.',
    region: 'Throughout Amazigh communities, with regional variations',
  },
];

/* =====================================================================
   VISITING BERBER COMMUNITIES DATA
   ===================================================================== */

interface TourExperience {
  title: string;
  description: string;
  location: string;
  priceRange: string;
  duration: string;
}

const tourExperiences: TourExperience[] = [
  {
    title: 'Atlas Mountain Homestay',
    description:
      'Stay with a Berber family in a traditional village home in the High Atlas. Experience daily life firsthand: help prepare meals, learn to bake bread in a clay oven, walk to the local souk with your host family, and sit on the roof terrace under the stars with mint tea. Most homestays include home-cooked meals featuring recipes passed down through generations. Villages around Imlil, the Ourika Valley, and the Ait Bougmez Valley offer some of the most authentic and well-organized homestay programs, with proceeds directly supporting local families and community infrastructure.',
    location: 'Imlil, Ourika Valley, Ait Bougmez Valley, Setti Fatma',
    priceRange: '200-500 MAD per person per night including meals',
    duration: '1-3 nights recommended',
  },
  {
    title: 'Guided Village & Valley Trek',
    description:
      'Explore the Atlas Mountains on foot with a local Amazigh guide who knows every trail, village, and story in the landscape. Multi-day treks traverse mountain passes, descend into hidden valleys, and pass through Berber villages where life has changed little in centuries. The classic Toubkal Circuit (3-4 days) takes you around North Africa highest peak. The less-traveled Ait Bougmez to Mgoun Valley trek (5-7 days) traverses the "Happy Valley" through some of the most pristine Berber communities in Morocco. Mules carry your luggage while you walk, and nights are spent in village guesthouses or mountain refuges.',
    location: 'Toubkal region, Mgoun Valley, Ait Bougmez, Jebel Saghro',
    priceRange: '400-800 MAD per person per day (guide, meals, accommodation, mule)',
    duration: '2-7 days depending on route',
  },
  {
    title: 'Carpet Weaving Workshop',
    description:
      'Visit a women carpet weaving cooperative in the Atlas Mountains and learn the basics of traditional loom weaving. Watch master weavers create intricate patterns from memory, learn about the symbolism encoded in Berber carpet motifs, and try your hand at weaving a small piece to take home. Several cooperatives in the Ourika Valley and around Azrou offer half-day or full-day workshops. These visits directly support women artisans and help preserve traditional weaving knowledge that is at risk as younger generations migrate to cities.',
    location: 'Ourika Valley, Azrou, Ait Ben Haddou area',
    priceRange: '150-350 MAD per person for a half-day workshop',
    duration: 'Half day (3-4 hours)',
  },
  {
    title: 'Saharan Desert Camp Experience',
    description:
      'Ride camels into the Erg Chebbi dunes near Merzouga or the remote Erg Chigaga near M\'Hamid, arriving at a Berber desert camp as the sun sets over the Sahara. Dine on traditional desert cuisine (tagine, mechoui, desert bread baked in sand), listen to Gnawa drumming around the campfire, and sleep under a canopy of stars. Many camps are family-run operations led by Saharan Berbers who share stories of nomadic life, desert navigation, and the changing climate. Sunrise over the dunes from your tent is an unforgettable experience.',
    location: 'Merzouga (Erg Chebbi), M\'Hamid (Erg Chigaga), Zagora',
    priceRange: '500-1,500 MAD per person per night (standard camp); 2,000-5,000 MAD (luxury camp)',
    duration: '1-2 nights (longer desert treks available)',
  },
  {
    title: 'Berber Cooking Class',
    description:
      'Learn to prepare authentic Amazigh dishes with a local family or at a community-run kitchen. Start with a visit to the village souk or family garden to gather fresh ingredients, then learn to roll couscous by hand, prepare a traditional tagine, bake bread in a clay oven, and make amlou (almond-argan spread). Meals are eaten communally, seated on cushions around a low table, in the traditional Berber manner. Classes in the Ourika Valley and Imlil area are particularly popular, offering stunning mountain scenery alongside culinary education.',
    location: 'Imlil, Ourika Valley, Ait Ben Haddou, Todra Gorge area',
    priceRange: '200-500 MAD per person including meal',
    duration: 'Half day (4-5 hours)',
  },
  {
    title: 'Kasbah & Ksar Heritage Tour',
    description:
      'Explore the monumental earthen architecture of southern Morocco with a guide who can explain the history, construction techniques, and social organization of kasbahs and ksour. The Draa Valley between Ouarzazate and Zagora contains the greatest concentration of kasbahs in Morocco, while Ait Ben Haddou (UNESCO World Heritage Site) is the most spectacular individual ksar. The Skoura palm oasis contains several impressive kasbahs including the restored Amridil Kasbah. Many kasbahs have been converted into guesthouses, allowing visitors to sleep within these extraordinary structures.',
    location: 'Ait Ben Haddou, Draa Valley, Skoura, Ouarzazate, Tamnougalt',
    priceRange: '100-300 MAD for guided tour; 400-1,200 MAD per night for kasbah guesthouses',
    duration: 'Half day to full day for tours; overnight for kasbah stays',
  },
];

/* =====================================================================
   RESPONSIBLE TOURISM TIPS
   ===================================================================== */

const responsibleTips = [
  {
    icon: Heart,
    title: 'Support Local Communities Directly',
    description:
      'Choose locally owned guesthouses and homestays over international chains. Hire local guides rather than using agencies that send guides from cities. Buy crafts directly from artisans and cooperatives. Your money has the greatest impact when it stays in the community you visit.',
  },
  {
    icon: Camera,
    title: 'Ask Before Photographing',
    description:
      'Always ask permission before photographing people, especially women, children, and elders. Many Berber communities feel strongly about photography. If someone says no, respect their wishes immediately. Consider offering to share photos via messaging apps or to send prints.',
  },
  {
    icon: MessageCircle,
    title: 'Learn a Few Amazigh Words',
    description:
      'Even simple greetings in Tamazight ("Azul" for hello, "Tanemmirt" for thank you) demonstrate respect and create immediate warmth. Your hosts will be delighted and impressed. It acknowledges that their language and culture matter.',
  },
  {
    icon: Shield,
    title: 'Respect Cultural Boundaries',
    description:
      'Dress modestly in rural communities (cover shoulders and knees). Remove shoes before entering homes. Accept tea when offered. Do not enter mosques or sacred spaces unless invited. Follow your guide instructions regarding sacred sites and community protocols.',
  },
  {
    icon: HandCoins,
    title: 'Pay Fair Prices',
    description:
      'While bargaining is expected in souks, remember that artisans need fair compensation for their work. A carpet that took months to weave deserves a fair price. Ask cooperatives about fair trade pricing. Tipping guides and hosts 10-15% is customary and appreciated.',
  },
  {
    icon: Globe,
    title: 'Minimize Environmental Impact',
    description:
      'Mountain and desert communities have fragile ecosystems. Carry out all trash (including on treks). Use water sparingly, as many villages rely on limited water sources. Stay on marked trails to prevent erosion. Support eco-lodges and sustainable tourism initiatives.',
  },
];

/* =====================================================================
   PRACTICAL INFO DATA
   ===================================================================== */

const practicalCards = [
  {
    icon: Sun,
    title: 'Best Time to Visit',
    items: [
      'Spring (April-May): Ideal weather, wildflowers blooming, pleasant trekking',
      'Autumn (Sep-Oct): Warm days, cool nights, Imilchil Festival, harvest season',
      'Summer (Jun-Aug): Hot in valleys but good for high-altitude treks above 2,500m',
      'Winter (Nov-Mar): Cold in mountains (snow above 2,000m), clear Saharan skies, Yennayer celebrations in January',
    ],
  },
  {
    icon: Backpack,
    title: 'What to Bring',
    items: [
      'Layers: temperatures swing 20-30 degrees Celsius between day and night in mountains',
      'Sturdy walking shoes or hiking boots for village paths and mountain trails',
      'Headlamp/flashlight: many villages have limited or no street lighting',
      'Small gifts: school supplies, tea, or sugar are appreciated when visiting families',
      'Cash in small denominations (20-50 MAD notes): ATMs are scarce in remote areas',
      'Sun protection: hat, sunscreen, sunglasses (UV is intense at altitude)',
    ],
  },
  {
    icon: Users,
    title: 'Cultural Etiquette',
    items: [
      'Greet everyone you pass on village paths: "Azul" or "Salam alaykum"',
      'Accept mint tea when offered; refusal can be seen as rude',
      'Use your right hand for eating, giving, and receiving',
      'Remove shoes before entering homes and some guesthouses',
      'Women should cover shoulders and knees in traditional communities',
      'Ask permission before entering cemeteries or shrines',
    ],
  },
  {
    icon: Camera,
    title: 'Photography Tips',
    items: [
      'Always ask before photographing people, especially women and children',
      'Some families will happily pose; others will firmly decline. Respect both.',
      'Offering to show people their photo on your screen builds goodwill',
      'Avoid photographing military installations or border areas',
      'Golden hour light in the Atlas and desert is extraordinary; plan sunrise/sunset shoots',
      'Consider bringing a Polaroid or portable printer to give instant prints as gifts',
    ],
  },
];

/* =====================================================================
   FAQ DATA
   ===================================================================== */

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is the difference between "Berber" and "Amazigh"?',
    answer:
      'Amazigh (plural: Imazighen) is the indigenous self-designation, meaning "free people" or "noble people." The term "Berber" derives from the Greek "barbaros" (foreigner) and was applied by outside conquerors. Today, Amazigh is the officially preferred term in Morocco, used in the constitution and by cultural institutions like IRCAM. However, "Berber" remains widely used internationally and is not considered offensive in most contexts. Many Amazigh people use both terms interchangeably.',
  },
  {
    question: 'Can I visit Berber villages independently or do I need a guide?',
    answer:
      'While it is possible to visit some Berber villages independently, hiring a local guide is strongly recommended. A guide provides cultural context, helps navigate language barriers (many villagers speak only Tamazight), ensures you follow local customs, and contributes directly to the community economy. For trekking in the mountains, a guide is essential for safety and navigation. In villages near tourist hubs like Imlil or Ourika Valley, you can arrange guides locally. For remote areas, arrange through your accommodation or a Marrakech-based agency that employs local Berber guides.',
  },
  {
    question: 'Is it safe to travel to remote Berber communities?',
    answer:
      'Yes, Morocco Berber communities are among the safest places to travel in the country. Rural Amazigh communities have extremely low crime rates, and the cultural tradition of hospitality to travelers (diyafa) means visitors are treated as honored guests. The main safety considerations are practical: mountain weather can change rapidly, roads to remote villages may be unpaved or flooded in spring, and medical facilities are limited. Travel with a guide, inform your accommodation of your plans, and ensure you have adequate water and supplies.',
  },
  {
    question: 'What language should I use when visiting Berber areas?',
    answer:
      'In tourist-facing areas (Imlil, Ourika, Ait Ben Haddou), most guides and guesthouse owners speak French and often some English, in addition to Arabic and Tamazight. In more remote villages, Tamazight may be the only language spoken, though most younger men also speak Darija (Moroccan Arabic) from school and military service. Learning a few Tamazight greetings (Azul, Tanemmirt) is deeply appreciated. French is more useful than English in most situations outside major tourist centers.',
  },
  {
    question: 'How much should I budget for a Berber village experience?',
    answer:
      'Budget travelers can experience Berber hospitality for 200-400 MAD per person per day, covering basic homestay accommodation and home-cooked meals. Mid-range travelers should budget 500-1,000 MAD per day for comfortable guesthouses, guided excursions, and meals. A multi-day guided trek with mules, guide, cook, and accommodation costs 400-800 MAD per person per day. Luxury kasbah stays and upscale desert camps run 2,000-5,000+ MAD per night. Craft purchases, tips, and transport are additional.',
  },
  {
    question: 'What is the best way to buy an authentic Berber carpet?',
    answer:
      'For the most authentic experience and fairest prices, buy from women weaving cooperatives in the Atlas Mountains (Azrou, Ourika Valley, Ait Bougmez). Examine the back: handmade rugs have slight irregularities, while machine-made rugs are perfectly uniform. Ask about the wool origin (local sheep is best), dye type (natural dyes from plants vs. synthetic), and the time to make (a quality rug takes 2-6 months). For Beni Ourain rugs, expect to pay 2,000-8,000 MAD for small sizes and 5,000-15,000+ MAD for large ones. Always negotiate, but remember that the weaver deserves fair compensation for months of labor.',
  },
  {
    question: 'Is Tamazight a written language?',
    answer:
      'Yes. Tamazight has been written in the Tifinagh script for over 2,000 years, making it one of the oldest writing systems still in use. The modern standardized version, Neo-Tifinagh, was adopted by Morocco Royal Institute of Amazigh Culture (IRCAM) in 2003 and is now taught in schools and used on official signage, currency, and public buildings. Historically, Tamazight was also written in Arabic script and Latin characters depending on the region. Today, you will see Tifinagh characters on Moroccan banknotes, road signs, government buildings, and increasingly in digital communication.',
  },
  {
    question: 'Can women travel safely to Berber communities?',
    answer:
      'Yes, women can travel very safely in Berber areas, and many women report feeling more comfortable in rural Amazigh communities than in large Moroccan cities. Berber culture places high value on respect for guests regardless of gender. However, modest dress is important: cover shoulders and knees. In some communities, interaction between unmarried men and women is limited by custom, so a female guide or host family member may facilitate interactions. Solo female travelers should still exercise standard precautions and ideally travel with a guide in remote areas.',
  },
];

/* =====================================================================
   PAGE COMPONENT (Server)
   ===================================================================== */

export default function BerberCulturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-atlas-village.webp"
            alt="Traditional Berber village nestled in the Atlas Mountains of Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Berber Culture</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Indigenous Heritage
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Amazigh Heritage: Morocco&apos;s Indigenous Culture
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Over 3,000 years before the Arab conquest, before the Romans, before the Phoenicians, the Amazigh people
              called North Africa home. Their language, art, architecture, and traditions remain the living bedrock of
              Moroccan identity &mdash; a heritage that continues to shape the kingdom today.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ================================================================
          WHO ARE THE AMAZIGH / BERBERS
          ================================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Who Are the Amazigh?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The indigenous people of North Africa whose civilization predates every other on the continent.
            </p>
          </div>

          <div className="space-y-5 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              The Amazigh (singular: Amazigh; plural: Imazighen) are the indigenous peoples of North Africa, with a
              continuous presence in the region stretching back at least 10,000 years. The name <strong>Amazigh</strong> means
              &ldquo;free people&rdquo; or &ldquo;noble people&rdquo; in Tamazight, the collective term for the family of
              Amazigh languages. The word &ldquo;Berber,&rdquo; derived from the Greek <em>barbaros</em> (foreigner), was
              historically applied by outside conquerors but remains widely used internationally.
            </p>
            <p>
              In Morocco, the Amazigh are not a minority &mdash; they are the demographic majority. Estimates suggest that
              <strong> 60% or more of Morocco&apos;s 37 million people</strong> have Amazigh ancestry, with approximately 26-40%
              speaking a Tamazight language as their mother tongue. Three major dialect groups exist: <strong>Tarifit</strong> in
              the Rif Mountains of the north, <strong>Central Tamazight</strong> in the Middle and eastern High Atlas, and
              <strong> Tashelhit</strong> (Shilha) in the western High Atlas, Souss Valley, and Anti-Atlas.
            </p>
            <p>
              The Amazigh predate every other civilization in North Africa. They were present when the Phoenicians founded
              Carthage, when the Romans built Volubilis, when Islam arrived in the 7th century, and when the French established
              their protectorate in 1912. Through all of these seismic changes, the Amazigh maintained their languages,
              customs, and identity &mdash; often retreating to mountain and desert strongholds where they could live on their
              own terms. The Almohad and Almoravid dynasties that once ruled an empire spanning from Spain to Senegal were
              themselves Amazigh in origin.
            </p>
            <p>
              Since Morocco&apos;s independence in 1956, the Amazigh identity movement has grown steadily. A watershed moment came
              in <strong>2011</strong>, when a constitutional amendment recognized Tamazight as an official language alongside
              Arabic. The <strong>Royal Institute of Amazigh Culture (IRCAM)</strong>, founded in 2001 in Rabat, works to
              standardize the language, develop educational materials, and promote Amazigh cultural heritage. In
              <strong> 2023</strong>, Morocco declared <strong>Yennayer</strong> (the Amazigh New Year, January 13) an official
              national holiday &mdash; a powerful symbolic recognition of the country&apos;s indigenous heritage.
            </p>
          </div>

          {/* Key Facts Card */}
          <div className="mt-10 card-moroccan p-6 md:p-8 bg-[var(--surface-muted)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                <Info className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                Key Facts About the Amazigh
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Population in Morocco', value: '60%+ of 37 million (ancestry)' },
                { label: 'Native Speakers', value: '10-15 million Tamazight speakers' },
                { label: 'Written Script', value: 'Tifinagh (2,000+ years old)' },
                { label: 'Official Status', value: 'Constitutional language since 2011' },
                { label: 'Geographic Spread', value: 'Morocco to Egypt, Sahel to Mediterranean' },
                { label: 'Major Dynasties', value: 'Almoravids, Almohads, Marinids (all Amazigh origin)' },
                { label: 'UNESCO Recognition', value: 'Multiple Amazigh traditions inscribed' },
                { label: 'National Holiday', value: 'Yennayer (Jan 13) since 2023' },
              ].map((fact) => (
                <div key={fact.label} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">{fact.label}:</span>{' '}
                    <span className="text-[var(--text-secondary)]">{fact.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          AMAZIGH REGIONS & TRIBES
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Mountain className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Amazigh Regions &amp; Tribal Groups
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s Amazigh communities span from the Mediterranean Rif to the Saharan borderlands,
              each with distinct languages, traditions, and cultural identities.
            </p>
          </div>

          <div className="space-y-8">
            {amazighRegions.map((region) => (
              <div key={region.name} className="card-moroccan overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 relative">
                    <img
                      src={region.image}
                      alt={region.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/5">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                      {region.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold">
                        <Languages className="w-3 h-3" /> {region.language}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold">
                        <MapPin className="w-3 h-3" /> {region.geography}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                      {region.description}
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                      <strong className="text-[var(--text-primary)]">Tribes:</strong> {region.tribes}
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                      <strong className="text-[var(--text-primary)]">Traditions:</strong> {region.traditions}
                    </p>
                    <div>
                      <strong className="text-[var(--text-primary)] text-sm">Key Locations:</strong>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {region.keyLocations.map((loc) => (
                          <span key={loc} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[var(--surface-muted)] text-[var(--text-secondary)] text-xs">
                            <MapPin className="w-3 h-3" /> {loc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          BERBER LANGUAGE & SCRIPT
          ================================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Languages className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tamazight Language &amp; Tifinagh Script
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              One of Africa&apos;s oldest living languages, now an official language of Morocco with its own ancient script.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed mb-10">
              <p>
                Tamazight belongs to the Afroasiatic language family and has been spoken in North Africa for thousands of
                years. In Morocco, three main dialect groups exist: <strong>Tarifit</strong> (approximately 4 million speakers
                in the Rif), <strong>Central Tamazight</strong> (approximately 5 million speakers in the Middle and High Atlas),
                and <strong>Tashelhit</strong> (approximately 8 million speakers in the Souss, western High Atlas, and Anti-Atlas).
                While mutually intelligible to varying degrees, these dialects have distinct vocabularies and phonological features.
              </p>
              <p>
                The <strong>Tifinagh script</strong> is one of the oldest writing systems in the world, with inscriptions found
                across the Sahara and North Africa dating back over 2,000 years. The script is thought to be derived from ancient
                Libyan alphabets and is unique to the Amazigh people. In 2003, Morocco&apos;s Royal Institute of Amazigh Culture
                (IRCAM) adopted a standardized version called <strong>Neo-Tifinagh</strong> as the official script for writing
                Tamazight. The distinctive geometric characters of Tifinagh now appear on Moroccan banknotes, passports, road signs,
                government buildings, and school textbooks.
              </p>
              <p>
                The <strong>Royal Institute of Amazigh Culture (IRCAM)</strong>, established by royal decree in Rabat in 2001,
                is the primary institution responsible for the promotion and standardization of Tamazight. IRCAM develops
                educational curricula, publishes dictionaries and grammars, creates digital tools and fonts for Tifinagh, and
                conducts research into Amazigh history and culture. Since 2003, Tamazight has been introduced into public
                schools, and the number of Tifinagh-literate Moroccans is growing steadily.
              </p>
            </div>

            {/* Phrase Table */}
            <div className="card-moroccan overflow-hidden">
              <div className="p-6 md:p-8 border-b border-[var(--border-primary)]">
                <div className="flex items-center gap-3">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                    <MessageCircle className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                    Essential Tamazight Phrases
                  </h3>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[var(--surface-muted)]">
                      <th className="px-6 py-3 text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">Tamazight</th>
                      <th className="px-6 py-3 text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">Tifinagh</th>
                      <th className="px-6 py-3 text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">English</th>
                      <th className="px-6 py-3 text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider hidden md:table-cell">Context</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-primary)]">
                    {tamazightPhrases.map((phrase) => (
                      <tr key={phrase.tamazight} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                        <td className="px-6 py-3 font-semibold text-[var(--text-primary)]">{phrase.tamazight}</td>
                        <td className="px-6 py-3 text-lg">{phrase.tifinagh}</td>
                        <td className="px-6 py-3 text-[var(--text-secondary)]">{phrase.english}</td>
                        <td className="px-6 py-3 text-[var(--text-secondary)] text-sm hidden md:table-cell">{phrase.context}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tifinagh Tip Box */}
            <div className="mt-8 card-moroccan p-6 md:p-8 border-l-4 border-l-[var(--color-accent)]">
              <div className="flex items-start gap-4">
                <div className="inline-flex p-2.5 rounded-xl bg-amber-100 shrink-0">
                  <Lightbulb className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)] mb-2">
                    Recognizing Tifinagh Script
                  </h4>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                    Tifinagh characters are distinctive geometric shapes: circles, dots, lines, and angles. You will see
                    them on Moroccan banknotes (look below the Arabic text), road signs (the third line after Arabic and
                    French), and government buildings. The script reads left to right and has 33 characters in its modern
                    standardized form. The letters <strong>ⵣ</strong> (yaz) and <strong>ⵜ</strong> (yat) are among the
                    most recognizable. The Amazigh flag, a horizontal tricolor of blue, green, and yellow with a red
                    Tifinagh &ldquo;yaz&rdquo; character (ⵣ) in the center, is increasingly visible at cultural events
                    and on buildings across Morocco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          TRADITIONAL ARCHITECTURE
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Traditional Amazigh Architecture
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From soaring kasbahs to cliff-perched granaries, Berber architecture represents one of the world&apos;s
              great earth-building traditions.
            </p>
          </div>

          <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto mb-12">
            <p>
              Amazigh architecture is a masterclass in building with the land. Using rammed earth (<em>pise</em>),
              sun-dried mud brick (adobe), stone, and timber from local forests, Berber builders created structures
              that are perfectly adapted to Morocco&apos;s extreme climate: thick walls insulate against both scorching
              summer heat and freezing mountain winters, small windows minimize heat gain while maximizing defense, and
              flat rooftops provide additional living space for drying grain, weaving, and sleeping under the stars.
            </p>
            <p>
              The most iconic Amazigh structures are found in southern Morocco, along the ancient caravan routes of
              the Draa Valley, Dades Valley, and Tafilalet region. Here, the landscape is punctuated by towering
              kasbahs and fortified ksour that rise from the red earth like organic extensions of the terrain.
              <strong> Ait Ben Haddou</strong>, a UNESCO World Heritage Site near Ouarzazate, is the most spectacular
              example: a fortified village of interlocking kasbahs climbing a hillside above the Ounila River, inhabited
              continuously for centuries and now famous as a film location for productions including
              &ldquo;Gladiator,&rdquo; &ldquo;Game of Thrones,&rdquo; and &ldquo;Lawrence of Arabia.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {architectureTypes.map((arch) => (
              <div key={arch.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                    <Landmark className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {arch.name}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] font-medium">
                      Tamazight: {arch.amazighName}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  {arch.description}
                </p>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  <strong className="text-[var(--text-primary)]">Location:</strong> {arch.location}
                </p>
                <ul className="space-y-2">
                  {arch.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Ait Ben Haddou Highlight */}
          <div className="mt-10 card-moroccan overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 relative">
                <img
                  src="/images/hero-ait-benhaddou.webp"
                  alt="The fortified ksar of Ait Ben Haddou, a UNESCO World Heritage Site"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 md:w-3/5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-3">
                  <Star className="w-3 h-3" /> UNESCO World Heritage Site
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  Ait Ben Haddou: Crown Jewel of Berber Architecture
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  Located 30 km from Ouarzazate on the former caravan route between Marrakech and the Sahara, Ait Ben
                  Haddou is the finest surviving example of a southern Moroccan ksar. The fortified village consists of
                  a collection of earthen buildings surrounded by high walls, with corner and above-wall towers. The site
                  has been inscribed as a UNESCO World Heritage Site since 1987 and remains partially inhabited. A handful
                  of families still live within the ksar walls, maintaining the structures using traditional building
                  techniques. The village has served as a filming location for over 20 major productions, bringing
                  international attention to Amazigh architectural heritage.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="text-sm">
                    <span className="font-semibold text-[var(--text-primary)]">Entry:</span>{' '}
                    <span className="text-[var(--text-secondary)]">Free (donations appreciated)</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-[var(--text-primary)]">Guide:</span>{' '}
                    <span className="text-[var(--text-secondary)]">100-200 MAD recommended</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-[var(--text-primary)]">From Ouarzazate:</span>{' '}
                    <span className="text-[var(--text-secondary)]">30 min drive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          ARTS & CRAFTS
          ================================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Paintbrush className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Amazigh Arts &amp; Crafts
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From world-famous carpets to ancient silver jewelry, Berber artisans produce some of the most
              sought-after handcrafts on the planet.
            </p>
          </div>

          <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto mb-12">
            <p>
              Amazigh arts and crafts are not merely decorative &mdash; they are a living language. Every motif woven
              into a carpet, hammered into a silver bracelet, or painted onto a pot carries meaning: protection against
              the evil eye, prayers for fertility, markers of tribal identity, or records of family history. For
              Berber women, weaving is both artistic expression and cultural communication, with patterns serving as
              a visual vocabulary passed from mother to daughter across generations. For men, metalwork, woodcarving,
              and leatherwork encode equally rich symbolic traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {berberCrafts.map((craft) => (
              <div key={craft.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                    <craft.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {craft.name}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  {craft.description}
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong className="text-[var(--text-primary)]">Regions:</strong>{' '}
                    <span className="text-[var(--text-secondary)]">{craft.regions}</span>
                  </p>
                  <p>
                    <strong className="text-[var(--text-primary)]">Price Range:</strong>{' '}
                    <span className="text-[var(--color-accent)] font-medium">{craft.priceRange}</span>
                  </p>
                  <div className="mt-3 p-3 rounded-lg bg-[var(--surface-muted)]">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        <strong className="text-[var(--text-primary)]">Buying Tip:</strong> {craft.buyingTip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          MUSIC & DANCE
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Music className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Amazigh Music &amp; Dance
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Communal performance traditions that unite poetry, rhythm, and movement in celebrations
              that can last from dusk until dawn.
            </p>
          </div>

          <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto mb-12">
            <p>
              Music is inseparable from Amazigh identity. Unlike the solo performer traditions of Arabic music,
              Berber music is fundamentally communal: it is performed by groups, for groups, and as a form of
              social bonding that reinforces community ties. The core instruments are the <strong>bendir</strong> (a
              large frame drum made from a wooden hoop and goatskin), the <strong>lotar</strong> (a four-stringed
              lute), the <strong>ribab</strong> (a single-string bowed instrument), and the <strong>guembri</strong> (a
              three-stringed bass lute central to Gnaoua music). Hand clapping, foot stamping, and call-and-response
              chanting form the rhythmic foundation of most Amazigh performance traditions.
            </p>
          </div>

          <div className="space-y-6">
            {musicStyles.map((style) => (
              <div key={style.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10 shrink-0">
                    <Mic className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                        {style.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold">
                        <MapPin className="w-3 h-3" /> {style.region}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                      {style.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <strong className="text-[var(--text-primary)]">Instruments:</strong>{' '}
                        <span className="text-[var(--text-secondary)]">{style.instruments.join(', ')}</span>
                      </div>
                      <div>
                        <strong className="text-[var(--text-primary)]">When:</strong>{' '}
                        <span className="text-[var(--text-secondary)]">{style.when}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FESTIVALS & CELEBRATIONS
          ================================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CalendarDays className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Festivals &amp; Celebrations
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the legendary Imilchil Marriage Festival to the Amazigh New Year, Berber celebrations are
              among Morocco&apos;s most authentic and vibrant cultural events.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {berberFestivals.map((festival) => (
              <div key={festival.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10 shrink-0">
                    <Star className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {festival.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] font-medium">
                        <Clock className="w-3 h-3" /> {festival.timing}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                        <MapPin className="w-3 h-3" /> {festival.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  {festival.description}
                </p>
                <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      <strong className="text-[var(--text-primary)]">Practical Info:</strong> {festival.practicalInfo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          TRADITIONAL CUISINE
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Traditional Amazigh Cuisine
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The original cuisine of Morocco &mdash; earthy, communal, and deeply connected to the land,
              the seasons, and the mountain harvest.
            </p>
          </div>

          <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto mb-12">
            <p>
              Much of what the world knows as &ldquo;Moroccan cuisine&rdquo; has its deepest roots in Amazigh culinary
              traditions. The tagine, couscous, mint tea ceremony, and communal eating style all originated in Berber
              culture before being adopted and elaborated upon in the urban kitchens of Fes, Marrakech, and Meknes.
              Traditional Amazigh cooking emphasizes simplicity, fresh seasonal ingredients, and the communal sharing
              of food from a single dish &mdash; a reflection of the collective values at the heart of Berber society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {berberCuisine.map((dish) => (
              <div key={dish.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <UtensilsCrossed className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {dish.name}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-3">
                  {dish.description}
                </p>
                <p className="text-sm text-[var(--color-accent)] font-medium">
                  <MapPin className="w-3.5 h-3.5 inline mr-1" />
                  {dish.region}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          VISITING BERBER COMMUNITIES
          ================================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Visiting Berber Communities
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Authentic experiences that connect you with living Amazigh culture &mdash; from mountain
              homestays to desert camps, guided treks to artisan workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourExperiences.map((exp) => (
              <div key={exp.title} className="card-moroccan p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4 flex-1">
                  {exp.description}
                </p>
                <div className="space-y-2 text-sm border-t border-[var(--border-primary)] pt-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{exp.location}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <HandCoins className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="text-[var(--color-accent)] font-medium">{exp.priceRange}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[var(--text-secondary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{exp.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          RESPONSIBLE TOURISM
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Heart className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Responsible Tourism
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              How to visit Amazigh communities in a way that respects their culture, supports their
              economy, and preserves their heritage for future generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responsibleTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6 md:p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <tip.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)] mb-3">
                  {tip.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>

          {/* Responsible Tourism Callout */}
          <div className="mt-10 card-moroccan p-6 md:p-8 border-l-4 border-l-amber-500">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2.5 rounded-xl bg-amber-100 shrink-0">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)] mb-2">
                  A Note on &ldquo;Berber Shows&rdquo; and Staged Experiences
                </h4>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  Some tourism operators in Morocco offer &ldquo;Berber shows&rdquo; or &ldquo;Berber dinners&rdquo; that
                  are commercially staged performances with little connection to authentic Amazigh culture. While these can
                  be entertaining, they should not be confused with genuine cultural engagement. For authentic experiences,
                  seek out community-based tourism initiatives, family-run guesthouses in actual Berber villages, and
                  cooperatives run by local artisans. A good test: if the experience is in a tourist hotel rather than a
                  village, it is likely staged. The real thing requires traveling to where Amazigh people actually live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PRACTICAL INFORMATION CARDS
          ================================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Backpack className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Practical Information
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know before visiting Amazigh communities in Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalCards.map((card) => (
              <div key={card.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                    <card.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)] text-[15px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ SECTION
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Common questions about visiting Berber communities and experiencing Amazigh culture in Morocco.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <div className="inline-flex p-1.5 rounded-lg bg-[var(--color-primary)]/10 shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)] mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          RELATED PAGES CTA
          ================================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dive deeper into the traditions, landscapes, and experiences connected to Amazigh heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: '/atlas-mountains',
                icon: Mountain,
                title: 'Atlas Mountains',
                description: 'Trekking, villages, and stunning landscapes in the heartland of Amazigh culture.',
              },
              {
                href: '/crafts',
                icon: Paintbrush,
                title: 'Moroccan Crafts',
                description: 'Complete guide to 16 traditional crafts, master artisans, and workshops.',
              },
              {
                href: '/cooking-classes',
                icon: UtensilsCrossed,
                title: 'Cooking Classes',
                description: 'Learn to prepare authentic tagines, couscous, and traditional Berber dishes.',
              },
              {
                href: '/trekking',
                icon: Footprints,
                title: 'Trekking Guide',
                description: 'Multi-day treks through Berber villages with local Amazigh guides.',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-moroccan p-6 md:p-8 group hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <link.icon className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)] mb-2">
                  {link.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                  {link.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[var(--color-primary)] font-semibold text-sm group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <div className="card-moroccan p-8 md:p-12 gradient-moroccan text-white inline-block w-full max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold mb-4">
                Experience Amazigh Heritage Firsthand
              </h3>
              <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Book a guided journey through Atlas Mountain villages, stay in a traditional Berber homestay,
                or join the celebrations at an ancient festival.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/atlas-mountains"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
                >
                  <Mountain className="w-4 h-4" /> Explore the Atlas
                </Link>
                <Link
                  href="/tours"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  <Compass className="w-4 h-4" /> Browse Cultural Tours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

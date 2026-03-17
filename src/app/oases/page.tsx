import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  TreePine,
  Camera,
  MapPin,
  Calendar,
  Star,
  Eye,
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
  Droplets,
  Bike,
  Footprints,
  Sunrise,
  Sunset,
  CloudSun,
  BookOpen,
  Users,
  Building,
  Wheat,
  Waypoints,
  Info,
  Layers,
  Route,
  Flower2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oases & Palm Groves of Morocco | Draa Valley, Ziz, Skoura, Figuig Guide',
  description:
    'Discover Morocco\'s magnificent oases and palm groves. Draa Valley, Ziz Gorges, Skoura, Figuig, Tinghir, Tata, Zagora, Rissani. Khettara irrigation, date harvesting, oasis agriculture, kasbah accommodation, and desert tours.',
  keywords: [
    'morocco oases',
    'draa valley morocco',
    'ziz valley morocco',
    'skoura palm grove',
    'figuig oasis',
    'tinghir oasis',
    'morocco palm groves',
    'morocco dates',
    'khettara irrigation',
    'morocco kasbah',
    'zagora morocco',
    'rissani morocco',
    'morocco desert oasis',
    'tata oasis morocco',
    'morocco date harvest',
    'oasis cycling morocco',
    'morocco desertification',
    'alnif oasis morocco',
    'morocco oasis agriculture',
    'morocco oasis photography',
  ],
  openGraph: {
    title: 'Oases & Palm Groves of Morocco | Complete Guide',
    description:
      'Explore Morocco\'s spectacular oases: Draa Valley, Ziz Gorges, Skoura, Figuig, Tinghir, and more. Ancient irrigation, date harvests, kasbah stays, and oasis-to-desert adventures.',
    url: 'https://citytoursmorocco.com/oases',
    images: [
      {
        url: '/images/poster-oasis.webp',
        width: 1200,
        height: 630,
        alt: 'Lush palm grove oasis in the Draa Valley of southern Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/oases' },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      name: 'Morocco Oases & Palm Groves Guide',
      description:
        'Comprehensive guide to Morocco\'s oases and palm groves including the Draa Valley, Ziz Gorges, Skoura, Figuig, ancient khettara irrigation, date harvesting, and oasis-to-desert experiences.',
      url: 'https://citytoursmorocco.com/oases',
      touristType: ['Cultural tourism', 'Ecotourism', 'Adventure travel', 'Photography'],
      image: '/images/poster-oasis.webp',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.3200,
        longitude: -5.8400,
      },
    },
    {
      '@type': 'ItemList',
      name: 'Major Oases of Morocco',
      description: 'The principal oases and palm groves of southern and eastern Morocco.',
      numberOfItems: 9,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Draa Valley' },
        { '@type': 'ListItem', position: 2, name: 'Ziz Valley & Gorges' },
        { '@type': 'ListItem', position: 3, name: 'Skoura Palm Grove' },
        { '@type': 'ListItem', position: 4, name: 'Figuig Oasis' },
        { '@type': 'ListItem', position: 5, name: 'Tinghir Oasis' },
        { '@type': 'ListItem', position: 6, name: 'Tata Palm Grove' },
        { '@type': 'ListItem', position: 7, name: 'Zagora & Beyond' },
        { '@type': 'ListItem', position: 8, name: 'Alnif Oasis' },
        { '@type': 'ListItem', position: 9, name: 'Rissani Palm Grove' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When is date harvesting season in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Date harvesting season in Morocco runs from late September through November, with October being the peak month. The harvest is accompanied by festivals and celebrations in oasis communities.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a khettara in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A khettara is an ancient underground irrigation channel that taps into groundwater tables and uses gravity to transport water to oasis settlements. Similar to the Persian qanat system, some Moroccan khettaras are over 1,000 years old.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best time to visit Moroccan oases?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The best time to visit Moroccan oases is October to April, when temperatures are pleasant (20-30 degrees Celsius). October is ideal as it coincides with the date harvest. Avoid June to August when temperatures can exceed 45 degrees Celsius.',
          },
        },
      ],
    },
  ],
};

/* ================================================================
   MAJOR OASES DATA
   ================================================================ */

interface Oasis {
  name: string;
  region: string;
  palmCount: string;
  keyFeature: string;
  description: string;
  detailedDescription: string;
  highlights: string[];
  bestTime: string;
  accommodation: string;
  image: string;
}

const majorOases: Oasis[] = [
  {
    name: 'Draa Valley',
    region: 'Ouarzazate to Zagora, southeastern Morocco',
    palmCount: '1 million+ date palms',
    keyFeature: '200 km of continuous palm groves along Morocco\'s longest river',
    description: 'The Draa Valley is Morocco\'s most spectacular oasis landscape, stretching for over 200 kilometers from the Mansour Eddahbi Dam near Ouarzazate to the desert edge beyond Zagora. Fed by the Draa River, Morocco\'s longest, the valley supports over one million date palms and dozens of fortified ksour (villages) and kasbahs.',
    detailedDescription: 'Driving the Draa Valley is one of Morocco\'s most iconic road journeys. From the moment you descend through the Anti-Atlas foothills and the first date palms appear, an endless ribbon of green unfolds between red-ochre cliffs and the barren hamada desert. The valley\'s six major palm groves, known as palmeraies, follow the Draa River as it winds southward: Mezguita, Tinzouline, Ternata, Fezouata, Ktaoua, and M\'hamid. Each has its own character, its own cluster of fortified villages, and its own microclimate. The Agdz area, at the valley\'s northern end, offers some of the most photogenic kasbah ruins in Morocco, with crumbling towers silhouetted against palm crowns and dramatic mesa formations. Further south, Tamnougalt\'s 16th-century kasbah was once the seat of the Mezguita chieftains and is now partially restored as a cultural heritage site. The village of Tamegrout is famous for its ancient Koranic library and distinctive green-glazed pottery workshops. Beyond Zagora, the valley becomes increasingly wild as the palms thin and the Sahara begins to assert itself, eventually reaching M\'hamid el Ghizlane, the last settlement before the dunes. The Draa was historically one of the great trans-Saharan caravan routes, connecting Marrakech to Timbuktu, and this heritage is still palpable in the architecture and traditions of its communities.',
    highlights: ['200 km continuous palm grove', 'Dozens of historic kasbahs and ksour', 'Tamnougalt heritage kasbah', 'Tamegrout library and pottery', 'Gateway to M\'hamid dunes', 'Trans-Saharan caravan heritage'],
    bestTime: 'October to April. October for date harvest. Avoid June to August (extreme heat exceeding 45 degrees Celsius).',
    accommodation: 'Kasbahs and guesthouses in Agdz, Zagora, and throughout the valley. Luxury options at Dar Ahlam near Skoura. Desert camps beyond M\'hamid.',
    image: '/images/poster-oasis.webp',
  },
  {
    name: 'Ziz Valley and Gorges',
    region: 'Errachidia to Erfoud, eastern High Atlas to Tafilalet',
    palmCount: '800,000+ date palms',
    keyFeature: 'Spectacular canyon oasis with dramatic gorge entry from the Atlas Mountains',
    description: 'The Ziz Valley is one of Morocco\'s most dramatic natural spectacles: a deep canyon carved through the eastern High Atlas that opens into a vast plain of palm groves stretching from Errachidia to Erfoud and beyond. The entrance through the Ziz Gorges, with sheer cliff walls towering hundreds of meters above the river, is among the most impressive drives in North Africa.',
    detailedDescription: 'The Ziz River rises in the High Atlas near Midelt and carves a course through some of Morocco\'s most spectacular geology before spreading out across the Tafilalet plain. The Ziz Gorges section, between Rich and Errachidia, is a masterpiece of natural sculpture: towering limestone walls, occasionally barely wide enough for the road and the river to share the canyon floor, open suddenly onto balcony viewpoints where the valley spreads below in a carpet of green palms against red desert. The Hassan Addakhil Dam, built in the 1970s, regulates the river flow and has transformed the lower valley\'s agriculture, though it has also reduced the seasonal flooding that historically recharged the water table. Below the dam, the palm groves intensify. Errachidia serves as the regional capital and a practical base, but the real magic lies further south toward Erfoud and Rissani. The Blue Springs of Meski, where a natural spring creates a swimming oasis in the desert, have been a traveler\'s rest stop for centuries. The valley produces some of Morocco\'s finest dates, particularly the prized Majhoul variety, which fetches premium prices in international markets. During the October harvest, the entire valley hums with activity as families gather to collect, sort, and dry the year\'s crop.',
    highlights: ['Ziz Gorges dramatic canyon drive', 'Blue Springs of Meski', 'Hassan Addakhil Dam viewpoint', 'Majhoul date production', 'Gateway to Erg Chebbi dunes', 'Ancient fortified villages'],
    bestTime: 'October to April. The gorges are spectacular year-round but most comfortable in cooler months. October for harvest festivals.',
    accommodation: 'Hotels and guesthouses in Errachidia and Erfoud. Oasis camps near Meski. Luxury desert camps at Merzouga (Erg Chebbi).',
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Skoura Palm Grove',
    region: 'Between Ouarzazate and Dades Gorge, Ouarzazate Province',
    palmCount: '700,000+ palms',
    keyFeature: 'UNESCO tentative list site with the highest concentration of kasbahs in Morocco',
    description: 'The Skoura palm grove is one of Morocco\'s most beautiful and historically significant oases, sheltering an extraordinary collection of kasbahs and fortified granaries beneath a canopy of over 700,000 palms. The grove has been nominated for UNESCO World Heritage status.',
    detailedDescription: 'Skoura is the oasis that most visitors dream of when they imagine Morocco. A vast carpet of date palms, olive trees, almond groves, and fig orchards spreads across the valley floor, punctuated by dozens of honey-colored kasbahs in various states of magnificence and decay. The most celebrated is the Kasbah Amridil, a 17th-century fortress that once graced the 50-dirham banknote and has been partially restored as a museum. But it is the lesser-known kasbahs, discovered on foot or bicycle along the irrigation channels that crisscross the grove, that truly enchant. The oasis follows the traditional three-tier agriculture system: date palms form the upper canopy, olive and fruit trees create a middle layer, and vegetables, alfalfa, and cereal crops grow at ground level. This layered approach maximizes productivity in a limited water supply and creates a shaded microclimate several degrees cooler than the surrounding desert. The old khettara channels still function in parts of the grove, though many have been supplemented or replaced by motorized pumps. Walking through Skoura at dawn, when mist hangs in the palm crowns and the kasbahs glow pink in the first light, is one of southern Morocco\'s most magical experiences. The grove is also home to over 100 bird species, making it an excellent birdwatching destination.',
    highlights: ['Kasbah Amridil (17th century)', 'UNESCO tentative list nomination', 'Three-tier oasis agriculture', 'Over 100 bird species', 'Traditional khettara channels', 'Sunrise photography paradise'],
    bestTime: 'Year-round, but October to April is most comfortable. March for almond blossoms. October for date harvest. Dawn and dusk for photography.',
    accommodation: 'Several restored kasbahs offer luxury accommodation. Dar Ahlam is one of Morocco\'s finest boutique hotels. Family-run guesthouses available.',
    image: '/images/hero-kasbahs.webp',
  },
  {
    name: 'Figuig Oasis',
    region: 'Far eastern Morocco, near the Algerian border',
    palmCount: '200,000+ palms',
    keyFeature: 'Remote eastern oasis with seven distinct ksour and ancient water management',
    description: 'Figuig is Morocco\'s most remote and culturally distinctive oasis, huddled against the Algerian border in the far east of the country. Seven fortified ksour (villages) share the waters of a natural spring system that has sustained life here for at least two millennia.',
    detailedDescription: 'Reaching Figuig is itself an adventure: the oasis lies 370 kilometers east of Errachidia across a vast, empty steppe landscape that feels like driving to the edge of the world. But those who make the journey discover one of Morocco\'s most authentic and least-touristed communities. The seven ksour of Figuig, each historically self-governing, share an elaborate system of natural springs and irrigation channels that divide the water according to agreements centuries old. The architecture is extraordinary: dense, labyrinthine lanes of pisé (rammed earth) buildings, watchtowers, fortified gateways, and hidden gardens. The palm grove spreads across a shallow depression surrounded by barren mountains, creating a vivid contrast of green and ochre. Figuig\'s dates are considered among Morocco\'s finest, and the oasis produces olives, pomegranates, and apricots. The community has maintained a fierce independence throughout its history, and traditional social structures still govern much of daily life. The closure of the Algerian border in 1994 severed Figuig from its natural trading partners and has contributed to economic challenges, but the oasis is slowly developing sustainable tourism. A new road from Bouarfa has improved access. Visitors are welcomed with genuine warmth and curiosity, and a local guide is essential for navigating the ksour and understanding their complex social geography.',
    highlights: ['Seven historic ksour', 'Ancient spring water system', 'Extraordinary pisé architecture', 'Among Morocco\'s finest dates', 'Genuine off-the-beaten-path destination', 'Complex traditional water rights'],
    bestTime: 'October to April. Spring is ideal for pleasant temperatures. Avoid summer when temperatures regularly exceed 45 degrees Celsius.',
    accommodation: 'A handful of simple but welcoming guesthouses within the ksour. No luxury options. This is authentic, community-level tourism.',
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Tinghir Oasis',
    region: 'Southern High Atlas, gateway to Todra Gorge',
    palmCount: '500,000+ palms',
    keyFeature: 'Stunning oasis panorama at the entrance to the Todra Gorge',
    description: 'Tinghir\'s magnificent palm grove spreads at the feet of the High Atlas Mountains, providing a lush gateway to the famous Todra Gorge. The panoramic viewpoint overlooking the oasis, with its geometric patchwork of palm gardens framed by red cliffs and snow-capped peaks, is one of the most photographed scenes in Morocco.',
    detailedDescription: 'Tinghir occupies a privileged position where the Todra River emerges from the High Atlas and its waters fan out across a broad, fertile valley. The result is one of Morocco\'s most visually stunning oases: a geometric mosaic of palm gardens, vegetable plots, and orchard terraces that extends for kilometers, bounded on all sides by the stark, eroded formations of the surrounding desert. The famous viewpoint above the town, accessible by a short drive or walk, reveals the oasis in all its glory. From above, the irrigation channels create a fine network of silver lines threading through the green, while the red-brown walls of traditional houses and the white minarets of mosques punctuate the canopy. The Todra Gorge itself, just 15 kilometers upstream, is a slot canyon of extraordinary proportions: 300-meter walls separated by as little as 10 meters at the narrowest point. Rock climbers come from around the world for the gorge\'s multi-pitch routes. But the oasis itself deserves equal attention. Walking through the palm gardens reveals a self-contained world of donkey paths, irrigation sluices, and family orchards where the traditional three-tier agriculture system (palms, fruit trees, ground crops) persists as it has for centuries. The Jewish mellah (quarter) of Tinghir, now largely depopulated, bears witness to the oasis\'s once-diverse community.',
    highlights: ['Panoramic oasis viewpoint', 'Gateway to Todra Gorge', 'Rock climbing world destination', 'Traditional Jewish mellah', 'Three-tier palm garden agriculture', 'Spectacular photography location'],
    bestTime: 'October to May. March to April for wildflowers in the gorge. Rock climbing best in spring and autumn. October for dates.',
    accommodation: 'Range from budget to mid-range in Tinghir town. Guesthouses with terrace views over the oasis. Hotels at the entrance to Todra Gorge.',
    image: '/images/hero-todra-gorge.webp',
  },
  {
    name: 'Tata Palm Grove',
    region: 'Anti-Atlas, southwestern Morocco',
    palmCount: '200,000+ palms',
    keyFeature: 'Isolated Anti-Atlas oasis with prehistoric rock carvings and traditional Berber culture',
    description: 'The Tata oasis nestles in a valley of the Anti-Atlas Mountains, one of Morocco\'s least-visited regions. The palm grove is surrounded by extraordinary desert landscapes dotted with prehistoric rock carvings, abandoned ksour, and natural springs that emerge from the barren mountainsides.',
    detailedDescription: 'Tata is the oasis that time forgot. Located deep in the Anti-Atlas, far from any major tourist circuit, it preserves a way of life that has changed little in centuries. The palm grove follows a watercourse through a broad valley, with traditional irrigation channels feeding terraced gardens of dates, henna, almonds, and vegetables. The surrounding desert is dotted with remarkable prehistoric rock engravings, some dating back over 5,000 years, depicting elephants, giraffes, and other animals that once roamed a much greener Sahara. The engravings at Foum el Hisn, Akka, and Ait Herbil are among the finest in North Africa, though they remain largely unknown to international visitors. The Tata area is also known for its natural springs, particularly the hot springs at Ait Ouabelli, where warm mineral water bubbles up from the desert floor into simple bathing pools. The local Berber communities maintain strong traditions of hospitality, music, and crafts, particularly the distinctive Anti-Atlas silver jewelry. From Tata, adventurous travelers can explore the remarkable Igherm to Tata road, which crosses one of Morocco\'s most desolate and beautiful mountain passes. The oasis serves as a staging point for expeditions into the deeper Anti-Atlas and the western approaches to the Sahara.',
    highlights: ['Prehistoric rock carvings (5,000+ years)', 'Ait Ouabelli hot springs', 'Traditional Berber silver crafts', 'Igherm to Tata mountain road', 'Virtually no tourists', 'Ancient henna cultivation'],
    bestTime: 'October to April. November to March for mildest temperatures. The surrounding desert is dangerously hot in summer.',
    accommodation: 'Simple guesthouses in Tata town and a few in surrounding villages. No luxury options. Basic but authentic hospitality.',
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Zagora and Beyond',
    region: 'Southern Draa Valley, gateway to the Sahara',
    palmCount: '300,000+ palms',
    keyFeature: 'Historic caravan staging post with the famous "Timbuktu 52 days" sign',
    description: 'Zagora marks the point where the Draa Valley begins to surrender to the Sahara. This historic caravan town, famous for its "Timbuktu 52 days" road sign, serves as the gateway to the M\'hamid dunes and the vast Saharan emptiness beyond.',
    detailedDescription: 'Zagora sits at a crossroads that has defined its character for a millennium: the intersection of the Draa Valley\'s agricultural wealth with the trans-Saharan caravan routes that once connected Morocco to the empires of West Africa. The town\'s iconic directional sign reading "Tombouctou 52 Jours" (Timbuktu 52 days by camel) captures this dual identity perfectly. The palm groves around Zagora are extensive and productive, producing the Boufeggous date variety that is considered one of Morocco\'s finest. The souk on Wednesdays and Sundays is a vibrant affair where desert nomads, oasis farmers, and traders mingle. Jebel Zagora, the flat-topped mountain overlooking the town, offers a sunrise hike with 360-degree views across the palm sea to the desert horizon. South of Zagora, the road continues through increasingly sparse palm groves to Tamegroute, M\'hamid, and ultimately the beginning of the Erg Chigaga dunes, the most remote and dramatic sand sea accessible from the Draa Valley. The journey from Zagora to M\'hamid el Ghizlane (55 km) tracks the gradual transition from cultivated oasis to raw desert, a ecological gradient compressed into an hour\'s drive. Beyond M\'hamid, the paved road ends and the Sahara begins in earnest. Camel treks and 4WD expeditions into Erg Chigaga offer multi-day desert immersions starting from this final oasis outpost.',
    highlights: ['Famous Timbuktu 52 days sign', 'Jebel Zagora sunrise hike', 'Gateway to Erg Chigaga', 'Boufeggous date variety', 'Wednesday and Sunday souks', 'Oasis-to-desert transition'],
    bestTime: 'October to April for comfortable temperatures. October for date festival. Full moon nights for desert atmosphere.',
    accommodation: 'Hotels and kasbahs in Zagora town. Luxury tented camps in Erg Chigaga (3 hours south). Desert bivouacs near M\'hamid.',
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Alnif Oasis',
    region: 'Eastern Anti-Atlas, between Tinghir and Rissani',
    palmCount: '50,000+ palms',
    keyFeature: 'Fossil capital of Morocco with a modest but authentic oasis community',
    description: 'Alnif is a small, unassuming oasis town that sits at the heart of one of the world\'s richest fossil deposits. While the palm grove is modest compared to the great valley oases, Alnif offers an authentic glimpse of oasis life far from the tourist trail, combined with the unique experience of fossil hunting in the surrounding desert.',
    detailedDescription: 'Alnif occupies a crossroads position between the Anti-Atlas Mountains and the Saharan hamada, on the road between Tinghir and Rissani. Its modest palm grove supports a small agricultural community, but the town\'s real claim to fame lies beneath the surface. The limestone plateau surrounding Alnif contains one of the world\'s most prolific deposits of Paleozoic fossils, particularly trilobites dating back 500 million years. Fossil workshops line the main road, where local artisans clean, prepare, and sell specimens ranging from tiny trilobites to massive orthoceras plates. The legitimate fossil trade provides a significant income for the community, though the market also includes reconstructions that visitors should learn to distinguish. Beyond the fossil trade, Alnif is a place of quiet authenticity. The palm grove is worked by families who have farmed here for generations, and the weekly souk brings together communities from surrounding hamlets. The surrounding desert landscape is stark and magnificent: flat-topped mesas, wind-sculpted rock formations, and vast open spaces that stretch to every horizon. For visitors traveling between the Dades-Todra corridor and the Tafilalet, Alnif offers a genuine oasis stop where the pace of the desert sets the rhythm of the day.',
    highlights: ['World-class fossil deposits', 'Trilobite specimens 500 million years old', 'Authentic oasis community', 'Fossil preparation workshops', 'Strategic road-trip stop', 'Dramatic desert plateau scenery'],
    bestTime: 'October to April for comfortable temperatures. The oasis is small enough to explore in a few hours as part of a longer journey.',
    accommodation: 'A handful of simple guesthouses. Alnif is best experienced as a day stop rather than a multi-night destination.',
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Rissani Palm Grove',
    region: 'Tafilalet Plain, gateway to Merzouga',
    palmCount: '400,000+ palms',
    keyFeature: 'Ancient Sijilmasa capital and gateway to the Erg Chebbi dunes',
    description: 'Rissani sits at the heart of the historic Tafilalet, once the site of the great medieval trading city of Sijilmasa and the cradle of Morocco\'s Alaouite dynasty. The extensive palm grove surrounding the town has sustained communities for over a millennium, and Rissani remains the commercial hub of the oasis region.',
    detailedDescription: 'The Tafilalet was once the most prosperous oasis in the Sahara, and Rissani was its beating heart. The medieval city of Sijilmasa, founded in 757 AD, was one of the wealthiest trading centers in the Islamic world, controlling the northern terminus of the trans-Saharan gold trade. Caravans of up to 10,000 camels would arrive from Timbuktu and beyond, laden with gold, slaves, and ivory, departing northward with salt, textiles, and manufactured goods. Today, Sijilmasa is mostly ruins, its monumental gates and wall fragments visible on the outskirts of modern Rissani, but the trading tradition continues in what is arguably Morocco\'s most atmospheric souk. The Rissani market, held on Tuesdays, Thursdays, and Sundays, is a chaotic, thrilling immersion in Saharan commerce. Berber nomads, Haratine farmers, and Arab traders buy and sell everything from livestock to dates, spices to secondhand clothing. The palm grove itself is vast and productive, centered on the Ziz River and its distributary channels. Rissani\'s dates, particularly the Majhoul variety, are exported worldwide. The town also holds importance as the ancestral home of the Alaouite dynasty, which has ruled Morocco since the 17th century. Several royal mausoleums are open to visitors. From Rissani, it is just 35 kilometers to the towering dunes of Erg Chebbi at Merzouga, making this the last major oasis before the great sand sea.',
    highlights: ['Ruins of medieval Sijilmasa', 'Cradle of the Alaouite dynasty', 'Morocco\'s most atmospheric souk', 'Gateway to Erg Chebbi dunes', 'Majhoul date production', 'Royal mausoleums'],
    bestTime: 'October to April. Tuesday, Thursday, and Sunday for souk days. October for the date harvest festival in the Tafilalet.',
    accommodation: 'Basic hotels and guesthouses in Rissani. Most visitors stay in desert camps and hotels in nearby Merzouga (35 km).',
    image: '/images/hero-desert.webp',
  },
];

/* ================================================================
   KHETTARA DATA
   ================================================================ */

const khettaraInfo = {
  title: 'The Khettara: Ancient Underground Channels',
  introduction: 'The khettara is one of the most ingenious water management systems ever devised. Similar to the Persian qanat, these underground channels tap into the water table at the base of mountains and use gravity to transport water over distances of up to 20 kilometers to oasis settlements. Some Moroccan khettaras are over 1,000 years old.',
  howItWorks: 'A khettara consists of a gently sloping underground tunnel that intersects the water table at its upper end. Groundwater seeps into the tunnel and flows downhill by gravity alone, requiring no pumps or external energy. Vertical shafts at regular intervals allow access for maintenance. The tunnel terminates at the oasis, where the water emerges into a seguia (open channel) that distributes it to individual gardens according to a complex, time-based allocation system.',
  significance: 'At their peak, the Tafilalet region alone had over 400 functioning khettaras serving the palm groves around Rissani and Erfoud. These systems made large-scale oasis agriculture possible in one of the driest environments on Earth, supporting populations of hundreds of thousands.',
  decline: 'Today, fewer than 50 khettaras remain operational in the Tafilalet, victims of declining water tables caused by motorized well pumping, drought, and climate change. The deeper wells extract water faster than the aquifer can recharge, lowering the water table below the level of the khettara tunnels. This represents not just a loss of water infrastructure but the disappearance of an intangible cultural heritage.',
  restoration: 'International and Moroccan organizations are working to restore and preserve remaining khettaras, both for their practical water-delivery function and their cultural significance. Restored khettaras near Erfoud and Rissani are open to visitors, offering a glimpse into this remarkable engineering tradition.',
};

/* ================================================================
   DATE VARIETIES DATA
   ================================================================ */

interface DateVariety {
  name: string;
  region: string;
  characteristics: string;
  season: string;
}

const dateVarieties: DateVariety[] = [
  { name: 'Majhoul (Medjool)', region: 'Tafilalet (Erfoud, Rissani), Draa Valley', characteristics: 'The king of dates. Large, soft, caramel-rich flavor. Morocco\'s premium export variety. Fetches the highest prices internationally. Best eaten fresh in October.', season: 'October harvest, available dried year-round' },
  { name: 'Boufeggous', region: 'Draa Valley, particularly Zagora', characteristics: 'Semi-soft with a honey-like sweetness. Slightly elongated shape. Considered the finest Draa Valley variety. Excellent for both fresh eating and cooking.', season: 'Late September to October' },
  { name: 'Bouskri', region: 'Zagora and M\'hamid', characteristics: 'Small, dark, and intensely sweet. One of the earliest varieties to ripen. Often dried and stored for winter consumption. Important in local cuisine.', season: 'September, earliest harvest' },
  { name: 'Jihel', region: 'Widespread across oasis regions', characteristics: 'Medium-sized, amber-colored, firm texture. Good for drying and long-term storage. The workhorse date of Moroccan oases, reliable and abundant.', season: 'October' },
  { name: 'Aziza Bouzid', region: 'Errachidia and Ziz Valley', characteristics: 'A delicate, light-colored variety with a subtle flavor. Less commercially important but prized locally. Often served with mint tea during celebrations.', season: 'Late October' },
  { name: 'Bousthammi Noire', region: 'Tafilalet and Ziz Valley', characteristics: 'Dark-skinned, dense flesh, almost toffee-like flavor. Excellent keeper that improves with drying. Traditional staple date of Saharan communities.', season: 'October to November' },
];

/* ================================================================
   OASIS AGRICULTURE DATA
   ================================================================ */

const oasisCrops = [
  { name: 'Dates', icon: <TreePine className="w-4 h-4" />, description: 'The primary crop of every oasis. Morocco produces approximately 130,000 tonnes annually from over 6 million date palms. The date palm provides far more than fruit: its trunk is used for construction, fronds for roofing and weaving, and the fibrous sheath for rope and fuel.' },
  { name: 'Olives', icon: <Leaf className="w-4 h-4" />, description: 'The second tier of oasis agriculture. Olive trees grow beneath the date palm canopy, benefiting from the filtered light and shared water. Moroccan olive oil from oasis regions has a distinctive, robust flavor.' },
  { name: 'Almonds', icon: <TreePine className="w-4 h-4" />, description: 'Almond trees thrive in the semi-arid conditions of Morocco\'s oases, blooming spectacularly in late February and early March. The Tafraout region of the Anti-Atlas is famous for its almond festival.' },
  { name: 'Henna', icon: <Leaf className="w-4 h-4" />, description: 'Many oases, particularly Tata and the Draa Valley, cultivate henna for use in traditional body art and hair dyeing. The leaves are dried, ground, and sold in souks across Morocco. Henna cultivation has deep cultural significance.' },
  { name: 'Cereals and Vegetables', icon: <Wheat className="w-4 h-4" />, description: 'The ground level of the three-tier system supports barley, wheat, alfalfa for livestock, and a variety of vegetables including carrots, turnips, onions, and legumes. These crops feed the oasis community directly.' },
  { name: 'Roses', icon: <Flower2 className="w-4 h-4" />, description: 'The Dades Valley near Kelaat M\'Gouna is famous for its damask rose cultivation. Each spring, the rose harvest supports a thriving essential oil industry and is celebrated with the annual Festival of Roses in May.' },
];

/* ================================================================
   ECOLOGICAL CHALLENGES DATA
   ================================================================ */

interface EcologicalChallenge {
  challenge: string;
  description: string;
  impact: string;
  response: string;
}

const ecologicalChallenges: EcologicalChallenge[] = [
  { challenge: 'Desertification', description: 'The Sahara is advancing northward at an estimated rate of several kilometers per decade in some areas. Sand encroachment buries palm groves, irrigation channels, and agricultural land.', impact: 'Loss of productive agricultural land. Abandonment of peripheral oasis communities. Reduced palm grove extent in the Draa, Ziz, and Tafilalet valleys.', response: 'Green Morocco Plan includes massive tree-planting programs. Palm grove restoration using date palm barriers. Community-based sand stabilization using local plant species.' },
  { challenge: 'Water Scarcity', description: 'Declining rainfall, increased evaporation due to rising temperatures, and the proliferation of motorized wells are depleting aquifers faster than they can recharge.', impact: 'Water tables dropping by 1-2 meters per year in some areas. Traditional khettara systems failing. Salinization of remaining water sources. Reduced date palm productivity.', response: 'Dam construction and water management programs. Drip irrigation technology replacing flood irrigation. Regulation of well drilling. International cooperation on climate adaptation.' },
  { challenge: 'Bayoud Disease', description: 'A devastating fungal disease (Fusarium oxysporum) specific to date palms that has destroyed an estimated two-thirds of Morocco\'s Bayoud-susceptible palm varieties since its appearance in the early 20th century.', impact: 'Loss of millions of date palms, particularly the prized Majhoul and Boufeggous varieties. Destruction of genetic diversity. Economic devastation of oasis communities.', response: 'Development of Bayoud-resistant date palm varieties. Quarantine protocols to prevent spread. Research into biological controls. Replanting programs with resistant cultivars.' },
  { challenge: 'Rural Exodus', description: 'Young people are leaving oasis communities for cities, drawn by education and employment opportunities. This drains the labor force needed to maintain irrigation systems and traditional agriculture.', impact: 'Abandoned khettaras and irrigation channels. Collapsed kasbahs and traditional buildings. Loss of intangible cultural heritage and traditional knowledge.', response: 'Sustainable tourism development creating local employment. Cultural heritage preservation programs. Agricultural cooperatives offering fair prices. Government investment in rural infrastructure.' },
];

/* ================================================================
   QUICK STATS
   ================================================================ */

const quickStats = [
  { icon: <TreePine className="w-5 h-5" />, label: 'Date Palms', value: '6 Million+', detail: 'Across Morocco' },
  { icon: <Droplets className="w-5 h-5" />, label: 'Major Oases', value: '15+', detail: 'Valley systems' },
  { icon: <Wheat className="w-5 h-5" />, label: 'Date Production', value: '130,000t', detail: 'Annually' },
  { icon: <Layers className="w-5 h-5" />, label: 'Agriculture Tiers', value: '3', detail: 'Palm-tree-ground' },
  { icon: <Calendar className="w-5 h-5" />, label: 'Harvest Month', value: 'October', detail: 'Date season' },
  { icon: <Building className="w-5 h-5" />, label: 'Historic Kasbahs', value: '1,000+', detail: 'In oasis valleys' },
];

/* ================================================================
   OASIS ACCOMMODATION DATA
   ================================================================ */

interface OasisAccommodation {
  name: string;
  type: string;
  oasis: string;
  description: string;
  priceRange: string;
}

const oasisAccommodation: OasisAccommodation[] = [
  { name: 'Restored Kasbahs', type: 'Heritage Hotel', oasis: 'Skoura, Draa Valley, Rissani', description: 'Ancient fortified mansions converted into atmospheric hotels. Thick pisé walls keep rooms cool in summer. Rooftop terraces overlook palm groves. Often family-owned with multi-generational history.', priceRange: '$50-300 per night' },
  { name: 'Oasis Guesthouses (Gites)', type: 'Community Stay', oasis: 'Throughout all oasis regions', description: 'Family-run homes offering simple rooms and authentic home-cooked meals. The best way to experience daily oasis life. Often includes garden tours, cooking lessons, and tea ceremonies.', priceRange: '$15-50 per night, meals included' },
  { name: 'Luxury Desert Camps', type: 'Glamping', oasis: 'M\'hamid, Merzouga, Erg Chigaga', description: 'Upscale tented camps at the desert edge where palm groves give way to dunes. Four-poster beds, private bathrooms, fine Moroccan cuisine, and stargazing from your tent terrace.', priceRange: '$150-500 per night' },
  { name: 'Boutique Riad Hotels', type: 'Boutique', oasis: 'Zagora, Erfoud, Tinghir', description: 'Intimate properties designed with local materials and traditional aesthetics. Pools, spas, and curated excursions. Often owned by international couples who fell in love with the oasis.', priceRange: '$80-250 per night' },
  { name: 'Farm Stays (Fermes d\'Hote)', type: 'Agritourism', oasis: 'Draa Valley, Skoura, Tata', description: 'Working date farms that welcome guests. Participate in harvest activities, learn about irrigation, meet farming families. Ultra-authentic with minimal tourist infrastructure.', priceRange: '$20-60 per night' },
];

/* ================================================================
   CYCLING AND WALKING TOURS DATA
   ================================================================ */

interface OasisTour {
  name: string;
  type: string;
  duration: string;
  difficulty: string;
  description: string;
}

const oasisTours: OasisTour[] = [
  { name: 'Skoura Palm Grove Bicycle Loop', type: 'Cycling', duration: 'Half day (3-4 hours)', difficulty: 'Easy', description: 'Pedal through the heart of the Skoura palm grove on quiet dirt tracks between irrigation channels. Visit Kasbah Amridil, cross ancient bridges, and stop at family orchards for fresh fruit and mint tea.' },
  { name: 'Draa Valley Village Walk', type: 'Walking', duration: 'Full day (6-7 hours)', difficulty: 'Moderate', description: 'Walk between fortified villages along the Draa River. Visit Tamnougalt kasbah, cross palm gardens on footbridges, and watch potters at work in Tamegrout. Lunch in a family home.' },
  { name: 'Tinghir Oasis Dawn Walk', type: 'Walking', duration: '2-3 hours', difficulty: 'Easy', description: 'Begin before sunrise at the panoramic viewpoint above Tinghir. Descend through the palm gardens as the first light paints the kasbah walls gold. Follow irrigation channels to the river.' },
  { name: 'Ziz Valley Road Cycling', type: 'Cycling', duration: '2-3 days', difficulty: 'Challenging', description: 'Multi-day cycling journey through the Ziz Gorges from Rich to Erfoud. Dramatic canyon scenery, palm grove oases, and desert landscapes. Support vehicle recommended for luggage.' },
  { name: 'Figuig Ksour Walking Tour', type: 'Walking', duration: 'Full day', difficulty: 'Easy-Moderate', description: 'Guided walk through the seven ksour of Figuig with a local guide who explains the water rights, architecture, and social structures. Enter hidden gardens and climb watchtowers for panoramic views.' },
  { name: 'M\'hamid Desert Edge Trek', type: 'Walking/Camel', duration: '2-3 days', difficulty: 'Moderate', description: 'Start in the last palm groves of M\'hamid and trek into the Sahara by foot and camel. Watch the transition from oasis to desert. Camp under stars in Erg Chigaga dunes.' },
  { name: 'Rissani Heritage Cycle', type: 'Cycling', duration: 'Half day', difficulty: 'Easy', description: 'Cycle from Rissani through the palm grove to the ruins of Sijilmasa and the royal mausoleums. Visit the souk if timing allows. Flat terrain suitable for all abilities.' },
  { name: 'Tata to Akka Oasis Ride', type: 'Cycling', duration: 'Full day', difficulty: 'Moderate', description: 'Ride between two Anti-Atlas oases on quiet roads. Pass through dramatic mountain scenery and stop at prehistoric rock carving sites. Lunch in Akka oasis.' },
];

/* ================================================================
   PAGE COMPONENT (Server Component)
   ================================================================ */

export default function OasesPage() {
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
          <li className="text-text-primary font-medium">Oases &amp; Palm Groves</li>
        </ol>
      </nav>

      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1A1814] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/poster-oasis.webp"
            alt="Lush palm grove oasis stretching through the Draa Valley in southern Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <TreePine className="w-4 h-4 text-emerald-400" />
              Oases &amp; Palm Groves
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Oases &amp; Palm Groves of Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Ribbons of emerald green threading through a landscape of red rock and golden sand.
              Morocco&apos;s oases are living monuments to human ingenuity &mdash; where ancient irrigation
              channels sustain millions of date palms, fortified kasbahs guard fertile valleys, and
              communities have thrived at the edge of the Sahara for over a thousand years.
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

      {/* ──────────────────────────── WHAT MAKES OASES UNIQUE ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <TreePine className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What Makes Moroccan Oases Unique
            </h2>
          </div>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Moroccan oases are not merely clumps of palm trees in the desert. They are
              sophisticated agricultural systems, architectural marvels, and living cultural
              landscapes that have sustained human communities at the edge of the Sahara for
              over a millennium. What sets them apart is the combination of scale, beauty,
              and the ingenuity of the water management systems that make them possible.
            </p>
            <p>
              The great valley oases of the Draa and Ziz follow river courses for hundreds
              of kilometers, creating ribbons of intense green that contrast dramatically
              with the surrounding barren landscape. Within these valleys, a three-tier
              agricultural system maximizes every drop of water: date palms form an upper
              canopy that shades olive and fruit trees below, which in turn shelter ground-level
              crops of cereals, vegetables, and forage plants. This layered approach creates
              a microclimate several degrees cooler than the surrounding desert and supports
              a biodiversity that would otherwise be impossible.
            </p>
            <p>
              The architecture of Moroccan oases is equally remarkable. Fortified villages
              (ksour) and family compounds (kasbahs) built from local pisé (rammed earth)
              rise above the palm canopy like organic extensions of the landscape. These
              buildings are marvels of passive climate design: thick walls absorb heat
              during the day and release it slowly at night, while narrow lanes channel
              cooling breezes. The most elaborate kasbahs feature towers, courtyards,
              granaries, and decorative plasterwork that rivals anything in Morocco&apos;s
              imperial cities.
            </p>
            <p>
              But perhaps the most extraordinary feature of Moroccan oases is the khettara
              system: underground channels that tap into mountain aquifers and deliver water
              across kilometers of desert without pumps or external energy. These ancient
              engineering works, some over 1,000 years old, represent one of humanity&apos;s
              most elegant solutions to the challenge of arid-land agriculture.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { value: '6M+', label: 'Date Palms', sub: 'Across all oases' },
              { value: '200 km', label: 'Draa Valley', sub: 'Longest palm corridor' },
              { value: '1,000+', label: 'Years Old', sub: 'Oldest khettaras' },
              { value: '150+', label: 'Date Varieties', sub: 'Cultivated in Morocco' },
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

      {/* ──────────────────────────── MAJOR OASES GUIDE ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Major Oases &amp; Palm Groves
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Detailed guides to Morocco&apos;s most magnificent oases, from the 200-kilometer
              Draa Valley to the remote fortress oasis of Figuig.
            </p>
          </div>

          <div className="space-y-10">
            {majorOases.map((oasis) => (
              <div key={oasis.name} className="card-moroccan overflow-hidden">
                {/* Oasis Header */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={oasis.image}
                    alt={`${oasis.name} palm grove and oasis in ${oasis.region}, Morocco`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814]/80 via-[#1A1814]/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#C4960C] uppercase tracking-wider mb-1">
                      <TreePine className="w-3.5 h-3.5" />
                      {oasis.region}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-white">
                      {oasis.name}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-bold">
                    {oasis.palmCount}
                  </div>
                </div>

                {/* Oasis Content */}
                <div className="p-6">
                  {/* Key Feature */}
                  <div className="p-3 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/15 mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] mb-1">
                      <Star className="w-3 h-3" /> Defining Feature
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] font-medium">{oasis.keyFeature}</p>
                  </div>

                  {/* Descriptions */}
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                    {oasis.description}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {oasis.detailedDescription}
                  </p>

                  {/* Highlights and Practical Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        Highlights
                      </h4>
                      <ul className="space-y-1.5">
                        {oasis.highlights.map((h) => (
                          <li key={h} className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                            <ArrowRight className="w-3 h-3 text-[var(--color-primary)] shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg border border-[var(--color-primary)]/15">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] mb-1">
                          <Sun className="w-3 h-3" /> Best Time to Visit
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{oasis.bestTime}</p>
                      </div>
                      <div className="p-3 rounded-lg border border-[var(--color-primary)]/15">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] mb-1">
                          <Building className="w-3 h-3" /> Accommodation
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{oasis.accommodation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── KHETTARA IRRIGATION SYSTEM ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Droplets className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              {khettaraInfo.title}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {khettaraInfo.introduction}
            </p>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Waypoints className="w-5 h-5 text-[var(--color-primary)]" />
                How a Khettara Works
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {khettaraInfo.howItWorks}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-moroccan p-5">
                <h4 className="text-base font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[var(--color-primary)]" />
                  Historical Significance
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {khettaraInfo.significance}
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h4 className="text-base font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Decline and Threat
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {khettaraInfo.decline}
                </p>
              </div>
            </div>

            <div className="card-moroccan p-5 border-l-4 border-[var(--color-primary)]">
              <h4 className="text-base font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-[var(--color-primary)]" />
                Restoration Efforts
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {khettaraInfo.restoration}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── DATE VARIETIES ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
              <TreePine className="w-4 h-4" />
              October Harvest Season
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Date Varieties of Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco cultivates over 150 varieties of dates. Here are the six most celebrated,
              each with its own flavor profile, texture, and regional identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dateVarieties.map((variety) => (
              <div key={variety.name} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                  {variety.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-primary)] font-medium mb-2">
                  <MapPin className="w-3 h-3" />
                  {variety.region}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {variety.characteristics}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                  <Calendar className="w-3 h-3" />
                  {variety.season}
                </div>
              </div>
            ))}
          </div>

          {/* Harvest Festival Note */}
          <div className="card-moroccan p-6 mt-8">
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
              Date Harvest Season
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
              The date harvest season runs from late September through November, with October being the
              peak month. This is one of the most rewarding times to visit Morocco&apos;s oases: the palm
              groves are alive with activity as families work together to collect, sort, and dry the
              year&apos;s crop. Men climb the palms using rope harnesses or modern ladders to cut the heavy
              date clusters, which are lowered to women and children who spread them on rooftop terraces
              and ground mats to dry in the sun.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Several oasis communities celebrate the harvest with festivals featuring music, dance,
              and date-tasting competitions. The Erfoud Date Festival, usually held in late October,
              is the largest, attracting visitors from across Morocco and featuring exhibitions, camel
              races, and traditional Gnaoua music performances.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── OASIS AGRICULTURE ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Wheat className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Oasis Agriculture
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              The three-tier agricultural system that turns a trickle of water into a
              productive garden capable of feeding entire communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {oasisCrops.map((crop) => (
              <div key={crop.name} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                    {crop.icon}
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)]">{crop.name}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {crop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── ECOLOGICAL CHALLENGES ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <AlertTriangle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Ecological Challenges
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s oases face serious threats from desertification, water scarcity, disease,
              and population decline. Understanding these challenges is essential for responsible tourism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecologicalChallenges.map((item) => (
              <div key={item.challenge} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                  {item.challenge}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="space-y-2">
                  <div className="p-2 rounded bg-red-50 dark:bg-red-950/20">
                    <p className="text-xs text-red-700 dark:text-red-400">
                      <span className="font-bold">Impact:</span> {item.impact}
                    </p>
                  </div>
                  <div className="p-2 rounded bg-green-50 dark:bg-green-950/20">
                    <p className="text-xs text-green-700 dark:text-green-400">
                      <span className="font-bold">Response:</span> {item.response}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── OASIS ACCOMMODATION ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Oasis Accommodation
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From restored kasbahs to desert glamping, Morocco&apos;s oases offer accommodation that
              is integral to the experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {oasisAccommodation.map((acc) => (
              <div key={acc.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[var(--text-primary)]">{acc.name}</h3>
                  <span className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-2 py-0.5 rounded-full shrink-0 ml-2">
                    {acc.type}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-primary)] font-medium mb-2">
                  <MapPin className="w-3 h-3" />
                  {acc.oasis}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {acc.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium">
                  <Star className="w-3 h-3 text-[var(--color-primary)]" />
                  {acc.priceRange}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── CYCLING & WALKING TOURS ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Route className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Oasis Cycling &amp; Walking Tours
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The best way to experience an oasis is on foot or by bicycle, moving at a pace
              that allows the landscape to reveal its details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {oasisTours.map((tour) => (
              <div key={tour.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                    {tour.type === 'Cycling' ? <Bike className="w-4 h-4 text-[var(--color-primary)]" /> :
                     tour.type === 'Walking' ? <Footprints className="w-4 h-4 text-[var(--color-primary)]" /> :
                     <Compass className="w-4 h-4 text-[var(--color-primary)]" />}
                    {tour.name}
                  </h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ml-2 ${
                    tour.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    tour.difficulty === 'Moderate' ? 'bg-amber-100 text-amber-700' :
                    tour.difficulty === 'Easy-Moderate' ? 'bg-lime-100 text-lime-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {tour.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Clock className="w-3 h-3" />
                    {tour.duration}
                  </div>
                  <span className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-2 py-0.5 rounded-full">
                    {tour.type}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {tour.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── PHOTOGRAPHY IN OASES ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Photography in Oases
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Moroccan oases offer extraordinary photographic opportunities, from the play
              of light through palm fronds to the dramatic contrast of green and desert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Dawn Light on Kasbahs', icon: Sunrise, time: 'First light, 6:00-7:30 AM', tip: 'The warm first light turns pisé walls from dull brown to glowing gold and pink. Position yourself on a rooftop or elevated viewpoint to capture kasbahs rising from the palm canopy. The mist that often hangs in palm groves at dawn adds a magical atmosphere. Skoura and Tinghir are the most photogenic locations for this shot.' },
              { title: 'Palm Grove Canopy Patterns', icon: Eye, time: 'Midday (harsh light is an advantage here)', tip: 'The dense canopy of date palms creates extraordinary patterns of light and shadow. Look for the geometric lines of irrigation channels cutting through dappled shade. The strong midday sun, usually avoided by photographers, creates the most dramatic contrast in the deep shade of the palm grove. A wide-angle lens captures the cathedral-like scale.' },
              { title: 'Oasis-Desert Contrast', icon: Layers, time: 'Late afternoon, 4:00-6:00 PM', tip: 'The most powerful oasis photographs capture the stark boundary between the cultivated green and the barren desert. Find elevated positions where this edge is visible. Late afternoon sidelight emphasizes the texture of both palm crowns and desert surface. The Tinghir panoramic viewpoint and Ziz Gorges overlooks are ideal.' },
              { title: 'Golden Hour Portraits', icon: Sunset, time: 'Last hour before sunset', tip: 'Always ask permission before photographing people. The golden light of late afternoon is flattering and evokes the warmth of oasis life. Farmers returning from gardens, women carrying water vessels, and children playing in irrigation channels make compelling subjects. Offer to share the images.' },
              { title: 'Night Sky Photography', icon: Star, time: 'After 10:00 PM, new moon preferred', tip: 'Oasis regions have some of Morocco\'s darkest skies. Frame the Milky Way above a kasbah silhouette or palm grove outline. A fast wide-angle lens (f/1.4 to f/2.8) and tripod are essential. 15-25 second exposures at ISO 3200-6400 capture stunning star fields. M\'hamid and Khenifiss offer the darkest conditions.' },
              { title: 'Water and Reflections', icon: Droplets, time: 'Early morning when irrigation channels are full', tip: 'Khettara outlets, seguia channels, and garden pools create reflective surfaces that double the visual impact of palms and buildings. Get low to maximize reflections. After rain, puddles on kasbah terraces create perfect mirror images of the sky.' },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                    <p className="text-xs text-[var(--color-primary)] font-medium mb-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── BEST TIME TO VISIT ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Thermometer className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Time to Visit Each Oasis
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Seasonal temperatures vary dramatically in Morocco&apos;s oasis regions. Timing
              your visit correctly makes the difference between paradise and ordeal.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--color-primary)]/10">
              {[
                { season: 'Autumn', months: 'Sep - Nov', icon: <Leaf className="w-4 h-4" />, description: 'The ideal season. Date harvest in October brings festivals and activity. Temperatures drop from summer extremes to a pleasant 25-35 degrees Celsius. The landscape is at its most productive. Every oasis is at its best.', rating: 'Peak Season' },
                { season: 'Winter', months: 'Dec - Feb', icon: <CloudSun className="w-4 h-4" />, description: 'Excellent for oasis visits. Daytime temperatures of 18-25 degrees Celsius are perfect for walking and cycling. Nights can be cold (5-10 degrees Celsius). The palm groves are peaceful and tourist numbers are low.', rating: 'Excellent' },
                { season: 'Spring', months: 'Mar - May', icon: <Flower2 className="w-4 h-4" />, description: 'Wonderful conditions through March and April. Almond blossoms in early March. Temperatures rising but manageable. By May, the heat begins to intensify in lower-elevation oases. Best for Figuig and higher valleys.', rating: 'Very Good' },
                { season: 'Summer', months: 'Jun - Aug', icon: <Sun className="w-4 h-4" />, description: 'Extremely hot in all oasis regions, regularly exceeding 45 degrees Celsius. Only recommended for heat-adapted travelers. Activity limited to early morning and late evening. Many accommodations close.', rating: 'Avoid if possible' },
              ].map((s) => (
                <div key={s.season} className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--text-primary)] text-sm">{s.season}</h3>
                      <p className="text-xs text-[var(--text-muted)]">{s.months}</p>
                    </div>
                  </div>
                  <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mb-2 ${
                    s.rating === 'Peak Season' ? 'bg-green-100 text-green-700' :
                    s.rating === 'Excellent' ? 'bg-blue-100 text-blue-700' :
                    s.rating === 'Very Good' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {s.rating}
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── CULTURAL SIGNIFICANCE ──────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Cultural Significance &amp; Oasis Communities
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Moroccan oases are far more than agricultural landscapes. They are complex social
              worlds with deep cultural traditions and remarkable resilience.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { title: 'Water Rights and Social Order', detail: 'The distribution of water in an oasis is governed by ancient, codified systems that predate modern law. In the Tafilalet, water from khettaras is allocated by time: each family receives a specific number of hours of flow on a rotating schedule. These water rights are inherited, traded, and fiercely defended. A community elder or water master (amin n\'waman) oversees the system, settling disputes and managing maintenance. Understanding this social infrastructure is essential to understanding oasis communities.' },
              { title: 'Kasbah and Ksar Architecture', detail: 'The fortified architecture of Moroccan oases evolved in response to both climate and conflict. Kasbahs (family fortresses) and ksour (fortified villages) are built from pisé, a mixture of earth, straw, and water rammed into timber forms. This material provides extraordinary insulation, keeping interiors cool in summer and warm in winter. The decorative elements, including geometric patterns, blind arches, and corner towers, reveal Berber, Arab, and sub-Saharan influences that reflect the oases\' position on trans-Saharan trade routes.' },
              { title: 'Multi-ethnic Communities', detail: 'Moroccan oases have historically been meeting points for diverse peoples: Berber farmers, Arab traders, Haratine agriculturalists, and Jewish craftsmen. This diversity created unique cultural fusions visible in music, cuisine, architecture, and language. While many Jewish families departed after 1948, their mellahs (quarters) remain architecturally significant. The Gnaoua music tradition, with its roots in sub-Saharan Africa, is particularly strong in oasis communities like Zagora and Rissani.' },
              { title: 'Living Heritage', detail: 'Despite the challenges of modernity, many oasis traditions persist. Women weave palm fronds into baskets, mats, and fans. Men maintain ancient irrigation channels using techniques passed down through generations. The date harvest remains a communal event that strengthens social bonds. Festivals celebrating the harvest, the Islamic calendar, and local saints punctuate the year. Visiting an oasis during such events offers a window into a culture that has adapted but not surrendered to the modern world.' },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[var(--color-primary)]" />
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── OASIS-TO-DESERT TRANSITION ──────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sunrise className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Oasis-to-Desert Transition Experiences
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              The journey from lush palm grove to open Sahara is one of Morocco&apos;s most
              powerful travel experiences.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { route: 'Zagora to Erg Chigaga', duration: '5-6 hours by 4WD or 3 days by camel', description: 'The classic oasis-to-desert journey follows the Draa Valley south from Zagora, passing through increasingly sparse palm groves at M\'hamid before entering the open hamada (stone desert). The final approach to Erg Chigaga reveals enormous dunes rising 300 meters from the flat desert floor. Camel treks from M\'hamid offer a slower, more immersive transition.' },
              { route: 'Rissani to Erg Chebbi (Merzouga)', duration: '35 km, 45 minutes by car', description: 'The shortest and most dramatic transition: from the bustling oasis town of Rissani, the road crosses a flat stone reg before the towering orange dunes of Erg Chebbi appear on the horizon. The dunes reach 150 meters in height and their color shifts from gold to orange to deep red depending on the light.' },
              { route: 'Tinghir through Todra Gorge', duration: '15 km to gorge entrance, full day exploration', description: 'While not a desert entry, the transition from Tinghir\'s lush palm oasis into the narrow slot of Todra Gorge is equally dramatic. The 300-meter canyon walls close in as the palm gardens thin, creating an experience of moving from abundance into awe-inspiring geological drama.' },
              { route: 'Draa Valley: Ouarzazate to M\'hamid', duration: '365 km, full day drive', description: 'This is the longest continuous oasis-to-desert gradient in Morocco. The journey begins in the relatively urbanized Ouarzazate area, passes through six distinct palm groves, and ends at the last settlement before the open Sahara. Each grove is slightly drier, slightly more sparse than the last, creating a slow, meditative diminuendo from green to gold.' },
            ].map((item) => (
              <div key={item.route} className="card-moroccan p-5 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.route}</h3>
                  <p className="text-xs text-[var(--color-primary)] font-medium mb-2 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.duration}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
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
            Discover Morocco&apos;s Oasis Heritage
          </h2>
          <p className="text-lg text-white/80 mb-8">
            From the 200-kilometer ribbon of the Draa Valley to the remote fortress oasis of Figuig,
            Morocco&apos;s palm groves are landscapes of extraordinary beauty and cultural depth.
            Plan your oasis journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/desert" className="btn-primary">
              Sahara Desert Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/kasbahs" className="btn-ghost !text-white !border-white/30 hover:!bg-white/10">
              Kasbahs &amp; Ksour <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

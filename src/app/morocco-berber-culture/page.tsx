import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Mountain,
  Music,
  Paintbrush,
  Globe,
  Landmark,
  HandHeart,
  Calendar,
  Utensils,
  Languages,
  Tent,
  Compass,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Berber Culture Guide 2026 | Amazigh Heritage, Traditions & Villages',
  description:
    'Complete guide to Berber (Amazigh) culture in Morocco. Explore Amazigh identity, Tifinagh script, Berber languages (Tashelhit, Tamazight, Tarifit), traditional villages like Imlil and Ait Benhaddou, kasbah architecture, Berber cuisine, Ahwash music, carpet weaving, Imilchil Marriage Festival, and Yennayer celebrations.',
  keywords: [
    'berber culture morocco',
    'amazigh heritage',
    'amazigh culture morocco',
    'berber villages morocco',
    'tifinagh script',
    'tashelhit language',
    'tamazight language',
    'tarifit language',
    'berber traditions morocco',
    'amazigh new year yennayer',
    'imilchil marriage festival',
    'berber carpet weaving',
    'moroccan kasbahs',
    'ksour morocco',
    'berber music ahwash',
    'ahidous dance',
    'berber food tagine',
    'amlou berber nutella',
    'imlil village morocco',
    'ait benhaddou unesco',
    'berber jewelry silverwork',
    'nomadic berber traditions',
    'berber architecture morocco',
    'community based tourism morocco',
  ],
  openGraph: {
    title: 'Morocco Berber Culture Guide 2026 | Amazigh Heritage, Traditions & Villages',
    description:
      'Explore the living heritage of Morocco\'s Amazigh (Berber) people. From Tifinagh script and Atlas Mountain villages to carpet weaving, kasbahs, traditional cuisine, and ancient festivals.',
    url: `${BASE_URL}/morocco-berber-culture`,
    images: [
      {
        url: `${BASE_URL}/images/hero-berber-culture.webp`,
        width: 1200,
        height: 630,
        alt: 'Berber village with traditional mud-brick architecture in the Atlas Mountains of Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Berber Culture Guide 2026 | Amazigh Heritage & Traditions',
    description:
      'Amazigh (Berber) heritage in Morocco: ancient traditions, mountain villages, crafts, music, cuisine, and ethical tourism experiences.',
    images: [`${BASE_URL}/images/hero-berber-culture.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-berber-culture` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-berber-culture`,
  name: 'Morocco Berber Culture Guide 2026 | Amazigh Heritage, Traditions & Villages',
  description:
    'Complete guide to Berber (Amazigh) culture in Morocco. Amazigh identity, Tifinagh script, Berber languages, traditional villages, kasbah architecture, cuisine, music, carpet weaving, festivals, and community-based tourism.',
  url: `${BASE_URL}/morocco-berber-culture`,
  image: `${BASE_URL}/images/hero-berber-culture.webp`,
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
  dateModified: '2026-03-21',
  mainEntityOfPage: `${BASE_URL}/morocco-berber-culture`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Berber Culture Guide', item: `${BASE_URL}/morocco-berber-culture` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between Berber and Amazigh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both terms refer to the same indigenous people of North Africa. "Amazigh" (plural: Imazighen), meaning "free people," is the self-designation. "Berber" derives from the Greek and Roman "barbaros." Both terms are widely used in Morocco, though Amazigh is increasingly preferred in official and cultural contexts since the 2011 constitutional recognition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit Berber villages independently or do I need a guide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can visit well-known villages like Imlil independently, as they have guesthouses, restaurants, and marked trails. For more remote areas like the Ait Bougmez Valley, Todra Gorge, or Anti-Atlas villages, a local guide is strongly recommended. Guides provide cultural context, help with language, and ensure your visit benefits the community. Expect to pay from 300 MAD per day for a local guide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What languages do Berber people speak in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Amazigh people speak Tamazight, which has three main regional variants in Morocco: Tashelhit (south and High Atlas, about 8 million speakers), Tamazight (Middle Atlas, about 5 million speakers), and Tarifit (Rif Mountains, about 4 million speakers). Since 2011, Tamazight is an official language alongside Arabic. Most Amazigh Moroccans also speak Darija (Moroccan Arabic), and many in tourist areas speak French and some English.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Berber villages in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (April to May) and autumn (September to October) are ideal for visiting mountain villages. The weather is good for hiking, wildflowers bloom in spring, and harvest season in autumn brings celebrations. Summer can be very hot in valleys, while winter snow makes some High Atlas villages harder to reach. January is special for Yennayer (Amazigh New Year) celebrations on the 13th.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I buy authentic Berber carpets without getting scammed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Buy directly from weaving cooperatives in villages like Ait Bougmez or Tazenakht for fair prices and guaranteed authenticity. Look for hand-knotted construction, natural wool, and slight irregularities that indicate handmade work. Cooperatives typically charge from 800 MAD for small rugs and from 3,000 MAD for larger carpets. Avoid middlemen in tourist areas who may charge three to five times the fair price.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it appropriate to take photos of Berber people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Always ask permission before photographing people, especially women and elders. Many Berber communities are welcoming but value their privacy. Respect anyone who declines. Showing the photo on your screen is a good gesture. In some tourist areas, people may expect a small tip (from 5 to 10 MAD) for photos.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Yennayer and when is it celebrated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yennayer is the Amazigh New Year, celebrated on January 13. It marks the start of the agrarian calendar and has been observed for thousands of years. Since 2018, it is an official public holiday in Morocco. Families gather for communal meals featuring couscous with seven vegetables, dried fruits, nuts, and seasonal dishes. Celebrations include music, poetry, and bonfires in rural communities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Imilchil Marriage Festival?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Imilchil Marriage Festival (Moussem) takes place in September in the Middle Atlas Mountains. Traditionally, young Ait Hadiddou Berbers gathered here to choose their partners freely, sometimes completing marriages in a single day. Today it functions as a cultural festival and regional market, drawing visitors from across Morocco. The festival features traditional music, dance, horse parades, and trade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Berber nomads still exist in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Semi-nomadic Amazigh communities still exist, though their numbers have decreased. In the High Atlas, some families move livestock between summer alpine pastures and winter valley camps. Saharan groups maintain seasonal migration routes between oases and pastureland. You can visit nomadic camps in the Middle Atlas and eastern High Atlas, often through guided treks. Many families now combine seasonal movement with permanent village homes.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TRADITIONAL CRAFTS
   ═══════════════════════════════════════════════════════════════ */

const traditionalCrafts = [
  {
    name: 'Carpet Weaving',
    icon: Paintbrush,
    description:
      'Berber carpets rank among the most sought-after textiles worldwide. Each region has distinctive patterns: Beni Ourain carpets from the Middle Atlas feature geometric black-on-white designs, while Azilal carpets burst with color. Women weave on upright looms, encoding family stories and protective symbols into every knot. A single carpet can take weeks to months to complete.',
    where: 'Tazenakht, Ait Bougmez, Azrou, Chefchaouen cooperatives',
    price: 'From 800 MAD for small rugs, from 3,000 MAD for large carpets',
  },
  {
    name: 'Pottery & Ceramics',
    icon: Gem,
    description:
      'Amazigh pottery predates the Arab arrival by millennia. Rif Mountain women create unglazed terracotta vessels decorated with geometric motifs using natural pigments. Each symbol carries meaning: triangles represent femininity, diamonds signify the eye for protection, and zigzag lines symbolize water and life. Tamegroute near Zagora produces distinctive green-glazed pottery.',
    where: 'Rif Mountains, Tamegroute, Ourika Valley cooperatives',
    price: 'From 50 MAD for small pieces, from 200 MAD for decorative bowls',
  },
  {
    name: 'Silverwork & Jewelry',
    icon: Crown,
    description:
      'Amazigh silversmiths craft fibulas (tizerzai) that hold garments together, elaborate bridal headdresses, and talismanic pendants inscribed with Tifinagh characters. Unlike Arab-Moroccan goldwork, Berber jewelry favors silver, often set with amber, coral, or amazonite. The fibula cross of the south, known as the Croix du Sud, is an iconic design recognized worldwide.',
    where: 'Tiznit (silver capital), Essaouira, High Atlas villages',
    price: 'From 150 MAD for simple pendants, from 1,000 MAD for bridal pieces',
  },
  {
    name: 'Leather & Woodwork',
    icon: HandHeart,
    description:
      'Amazigh artisans produce intricately carved cedarwood items, from utensils to furniture, using techniques unchanged for centuries. Thuya wood from Essaouira is shaped into decorative boxes and chess sets. Leather goods including bags, belts, and shoes are tanned using traditional methods with natural dyes from pomegranate, saffron, and indigo.',
    where: 'Essaouira (thuya), Azrou (cedar), Fes medina tanneries',
    price: 'From 100 MAD for small carved items, from 300 MAD for leather bags',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BERBER ARCHITECTURE
   ═══════════════════════════════════════════════════════════════ */

const architectureTypes = [
  {
    name: 'Kasbahs (Fortified Residences)',
    icon: Landmark,
    description:
      'Kasbahs are fortified homes of prominent Amazigh families, built from pise (rammed earth) and featuring ornate geometric decorations on towers and facades. Ait Benhaddou, a UNESCO World Heritage Site near Ouarzazate, is the most famous example. Kasbahs served as both residences and defensive structures, with thick walls, corner towers, and narrow interior passages designed to confuse intruders.',
    examples: 'Ait Benhaddou (UNESCO), Kasbah Telouet, Kasbah Taourirt (Ouarzazate)',
  },
  {
    name: 'Ksour (Fortified Villages)',
    icon: Building,
    description:
      'A ksar (plural: ksour) is a fortified village of connected homes surrounded by a defensive wall, reflecting the Amazigh communal ethos. The Draa and Dades valleys contain the finest examples. Built from local earth, stone, and palm wood, these structures stay cool in summer and warm in winter through passive thermal regulation.',
    examples: 'Ksar of Ait Benhaddou, Tamnougalt, Tinejdad, Nkob',
  },
  {
    name: 'Agadirs (Communal Granaries)',
    icon: Mountain,
    description:
      'Fortified communal granaries perched on hilltops, where communities stored grain, oil, documents, and valuables. Each family had chambers secured with unique wooden locks. These structures reflect deep communal trust and sophisticated resource management. Many date back 500 years or more. The collective agadir system functioned as both a bank and a social contract.',
    examples: 'Agadir Id Aissa (Amtoudi), Agadir Ikounka, Agadir Inoumar',
  },
  {
    name: 'Tighremts (Tower Houses)',
    icon: Star,
    description:
      'Tall tower-like family homes rising three to four stories in the Dades and Todra valleys. Ground floors house livestock, middle floors are living quarters, and open-sky top floors serve as terraces for drying food and socializing. Mud-brick walls feature intricate geometric reliefs that distinguish each family and clan.',
    examples: 'Dades Valley, Todra Gorge area, Skoura oasis',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MUSIC & DANCE
   ═══════════════════════════════════════════════════════════════ */

const musicDance = [
  {
    name: 'Ahwash',
    region: 'High Atlas & Souss',
    icon: Music,
    description:
      'A collective performance where men and women form facing lines or a circle, clapping, chanting, and dancing in unison. Drums (bendir and tallunt) build gradually over hours, reaching ecstatic intensity. Inscribed on UNESCO\'s Intangible Cultural Heritage list, Ahwash embodies the communal spirit of Amazigh life.',
  },
  {
    name: 'Ahidous',
    region: 'Middle Atlas',
    icon: Music,
    description:
      'Men and women stand shoulder to shoulder, swaying and singing in call-and-response while drummers set an accelerating rhythm. Poetry covers themes of love, nature, honor, and community. Performances often last through the entire night, marking weddings, harvests, and seasonal celebrations.',
  },
  {
    name: 'Guedra',
    region: 'Saharan South',
    icon: Music,
    description:
      'A hypnotic trance dance from near Guelmim. A single woman kneels at the center while musicians play a clay pot drum (the guedra). She moves only her hands, fingers, and upper body in increasingly ecstatic patterns, sometimes entering trance. Considered a blessing ritual that channels spiritual energy.',
  },
  {
    name: 'Taskiwin',
    region: 'Western High Atlas',
    icon: Music,
    description:
      'A martial dance from the Tata and Taroudant provinces. Men hold decorated horn-shaped powder flasks, mimicking warriors preparing for battle with controlled, rhythmic movements. Inscribed on UNESCO\'s Intangible Cultural Heritage list in 2017, Taskiwin preserves ancient warrior traditions.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BERBER FOOD
   ═══════════════════════════════════════════════════════════════ */

const berberFood = [
  {
    name: 'Tagine',
    icon: Utensils,
    description:
      'The conical clay tagine is quintessentially Berber. Slow-cooked over charcoal, Berber tagines differ from city versions: simpler, heartier, and deeply flavored. Village tagines use seasonal produce, preserved lemons, olives, and whatever meat is available. Chicken with preserved lemons, lamb with prunes and almonds, and vegetable tagine with argan oil are staple dishes.',
    price: 'From 40 MAD in villages, from 80 MAD in tourist restaurants',
  },
  {
    name: 'Couscous Friday',
    icon: Utensils,
    description:
      'Friday couscous is sacred across Morocco, but its origins are Amazigh. Hand-rolled from semolina flour, steamed three times in a couscoussier, and topped with a stew of seven vegetables, chickpeas, and meat. In Berber homes, everyone eats communally from a single large dish using the right hand. The ritual of preparation is as important as the meal itself.',
    price: 'From 35 MAD in local restaurants, from 80 MAD in tourist spots',
  },
  {
    name: 'Amlou (Berber Nutella)',
    icon: Utensils,
    description:
      'A rich spread made from argan oil, roasted almonds, and honey, ground together in a stone mortar. Often called "Berber Nutella," amlou is served at breakfast with bread. It originates from the Souss region where argan trees grow. Quality depends on using pure argan oil rather than the diluted versions sold in tourist areas.',
    price: 'From 60 MAD for a jar at cooperatives',
  },
  {
    name: 'Berber Bread & Mint Tea',
    icon: Utensils,
    description:
      'Tafernout is a thick flatbread baked in clay ovens or over embers, the foundation of every village meal. Equally essential is mint tea, affectionately called "Berber Whiskey." Gunpowder green tea, fresh spearmint, and generous sugar are poured from height to create froth. The tea ritual involves three glasses: "the first is gentle like life, the second is strong like love, the third is bitter like death."',
    price: 'Bread from 3 MAD; tea from 10 MAD in cafes, free in homes',
  },
  {
    name: 'Tafarnout & Berkoukes',
    icon: Utensils,
    description:
      'Beyond the well-known dishes, Berber cuisine includes hearty mountain fare. Berkoukes is a thick, hand-rolled pasta cooked in a spiced broth with vegetables and meat, perfect for cold Atlas winters. Rfissa, layered shredded msemen bread soaked in lentil and chicken broth flavored with fenugreek, is served to new mothers and at celebrations.',
    price: 'From 30 MAD in village homes, from 70 MAD in restaurants',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: VILLAGE EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const villageExperiences = [
  {
    name: 'Imlil & Aroumd',
    region: 'High Atlas',
    icon: Mountain,
    image: '/images/hero-atlas-village.webp',
    description:
      'The gateway to Jebel Toubkal, North Africa\'s highest peak. Imlil is a Berber village at 1,740m altitude, just 90 minutes from Marrakech. Stay in a traditional guesthouse, hike to the walnut-shaded village of Aroumd (Aremd), and experience mountain hospitality. Mule treks, guided walks to the Azzaden Valley, and overnight stays in Berber homes are all possible.',
    highlights: ['90 minutes from Marrakech', 'Gateway to Toubkal', 'Traditional guesthouses', 'Guided mule treks'],
    guide: 'From 300 MAD per day for a local guide',
  },
  {
    name: 'Ait Bougmez Valley',
    region: 'Central High Atlas',
    icon: Mountain,
    image: '/images/art-atlas-mountain-village.webp',
    description:
      'Known as the "Happy Valley," Ait Bougmez is one of Morocco\'s most beautiful and culturally rich valleys. Terraced fields, walnut orchards, ancient granaries, and mud-brick villages dot the landscape. Less visited than Imlil, it offers a more immersive experience. Community-run guesthouses, women\'s cooperatives, and seasonal festivals make this a highlight of any Morocco trip.',
    highlights: ['Less touristy than Imlil', 'Ancient communal granaries', 'Women\'s weaving cooperatives', 'Seasonal harvest festivals'],
    guide: 'From 350 MAD per day for a local guide',
  },
  {
    name: 'Ait Benhaddou',
    region: 'Ouarzazate Province',
    icon: Landmark,
    image: '/images/hero-kasbahs.webp',
    description:
      'This UNESCO World Heritage ksar along the former caravan route between the Sahara and Marrakech is the most photographed fortified village in Morocco. Used as a film location for Gladiator, Game of Thrones, and Lawrence of Arabia, it remains a living settlement. Families still inhabit the lower sections, and local guides share stories passed down through generations of Amazigh residents.',
    highlights: ['UNESCO World Heritage Site', 'Active film location', 'Living Berber settlement', 'Sunset views from hilltop'],
    guide: 'From 100 MAD for a guided tour',
  },
  {
    name: 'Tafraout & Anti-Atlas',
    region: 'Anti-Atlas',
    icon: Globe,
    image: '/images/art-berber-portrait.webp',
    description:
      'The heartland of Tashelhit-speaking Amazigh culture. Tafraout sits surrounded by rose-granite boulders, known for almond blossoms in February and some of Morocco\'s finest Amazigh architecture. Off the main tourist trail, it offers a quieter, more authentic encounter with Berber life. The surrounding villages preserve some of the oldest communal granaries in the country.',
    highlights: ['February almond blossom festival', 'Rose granite landscapes', 'Authentic Tashelhit culture', 'Off the beaten path'],
    guide: 'From 250 MAD per day for a local guide',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MUSEUMS & CULTURAL SITES
   ═══════════════════════════════════════════════════════════════ */

const museumsAndSites = [
  {
    name: 'Musee Amazigh (Agadir)',
    type: 'Museum',
    description: 'Dedicated to Amazigh heritage with traditional clothing, jewelry, carpets, tools, and musical instruments. Well-curated displays explain Berber cultural diversity across regions.',
    price: 'From 20 MAD entry',
  },
  {
    name: 'Musee Berbere (Marrakech)',
    type: 'Museum',
    description: 'Within the Jardin Majorelle, housing over 600 artifacts spanning Berber culture from the Rif to the Sahara. Textiles, jewelry, weapons, and ceramics beautifully displayed.',
    price: 'From 30 MAD entry (separate from garden)',
  },
  {
    name: 'Tiskiwin Museum (Marrakech)',
    type: 'Museum',
    description: 'Founded by anthropologist Bert Flint, tracing the trans-Saharan caravan route through 50 years of collected artifacts. Each room represents a region from Marrakech to Timbuktu.',
    price: 'From 25 MAD entry',
  },
  {
    name: 'Kasbah Telouet',
    type: 'Historic Kasbah',
    description: 'The crumbling palace of the Glaoui lords. Stunning zellige tilework and painted cedarwood ceilings inside, while the exterior slowly returns to the earth from which it was built.',
    price: 'From 30 MAD entry',
  },
  {
    name: 'Tifinagh Rock Carvings (Tata)',
    type: 'Archaeological Site',
    description: 'Ancient rock engravings featuring Tifinagh script and hunting scenes dating back thousands of years, providing direct evidence of deep Amazigh roots in North Africa.',
    price: 'Free (local guide from 100 MAD recommended)',
  },
  {
    name: 'IRCAM (Rabat)',
    type: 'Cultural Institute',
    description: 'The Royal Institute of Amazigh Culture, responsible for standardizing Tifinagh script and promoting Amazigh language and culture. Houses a research library and hosts exhibitions.',
    price: 'Free entry to exhibitions',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const festivals = [
  {
    name: 'Yennayer (Amazigh New Year)',
    month: 'January 13',
    description: 'Celebrating the start of the agrarian calendar, observed for thousands of years. Families gather for communal meals with couscous, dried fruits, and nuts. Since 2018, January 13 is an official public holiday in Morocco. Rural communities light bonfires, recite poetry, and perform music through the night.',
  },
  {
    name: 'Imilchil Marriage Festival',
    month: 'September',
    description: 'A legendary Middle Atlas gathering where Ait Hadiddou Berbers traditionally arranged marriages. Young men and women chose partners freely, sometimes completing engagements in a single day. Today it functions as a cultural festival and regional market with traditional music, dance, and horse parades.',
  },
  {
    name: 'Timitar Festival (Agadir)',
    month: 'July',
    description: 'One of Morocco\'s largest music festivals celebrating Amazigh music alongside international acts. Free outdoor concerts attract hundreds of thousands over four days. The festival showcases the global reach of Amazigh musical traditions.',
  },
  {
    name: 'Almond Blossom Festival (Tafraout)',
    month: 'February',
    description: 'When almond trees blanket the Anti-Atlas in pink and white blossoms, Tafraout celebrates with traditional music, dance, feasting, and fresh almond products from local cooperatives. A spectacular time to visit the region.',
  },
  {
    name: 'Boujloud / Bilmawen',
    month: 'After Eid al-Adha',
    description: 'A pre-Islamic Amazigh tradition where men dress in animal skins and masks, dancing through villages to ward off evil spirits. This carnivalesque celebration has survived for millennia and reveals the depth of pre-Islamic cultural layers in Moroccan life.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: NOMADIC TRADITIONS
   ═══════════════════════════════════════════════════════════════ */

const nomadicTraditions = [
  {
    title: 'Transhumance Routes',
    icon: Compass,
    text: 'Semi-nomadic Amazigh herders still follow ancient seasonal routes, moving livestock between summer alpine pastures (agdal) and winter valley camps. In the Central High Atlas, families spend May through October in high pastures above 2,500 meters, then descend to lower villages when snow arrives. These routes have been maintained for centuries.',
  },
  {
    title: 'Nomadic Camp Life',
    icon: Tent,
    text: 'Traditional Berber tents (akhiam) are woven from goat and camel hair, providing insulation against both heat and cold. Inside, hand-woven carpets cover the ground, and families gather around a central hearth. Visitors to the Middle Atlas and eastern High Atlas can arrange overnight stays in active nomadic camps through local guides.',
  },
  {
    title: 'Saharan Amazigh Groups',
    icon: Globe,
    text: 'The Ait Atta, one of the largest Amazigh confederations, historically controlled vast territories from the Saghro Mountains to the Saharan fringe. Their descendants maintain semi-nomadic patterns near Zagora and Merzouga. Some families now combine seasonal movement with permanent village homes, adapting ancient rhythms to modern realities.',
  },
  {
    title: 'Oral Tradition & Poetry',
    icon: BookOpen,
    text: 'Without a widely used written language until recently, Amazigh culture preserved its history, law, and values through oral poetry. Elders (amghar) recited genealogies and tribal codes. Professional poets (imedyazen) traveled between communities, spreading news and moral lessons through verse. This tradition continues at festivals and family gatherings.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoBerberCulturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-berber-culture.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Berber Culture Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Globe className="w-4 h-4" />
            Culture &amp; Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Berber Culture:
            <br className="hidden md:block" /> Amazigh Heritage &amp; Traditions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Discover the living heritage of the Amazigh, North Africa&apos;s indigenous people.
            From Tifinagh script and mountain villages to carpet weaving, ancient kasbahs, and communal festivals.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: Who Are the Amazigh? ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Who Are the Amazigh? Morocco&apos;s Indigenous People
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Amazigh, commonly known as Berbers, are the indigenous people of North Africa.
                Their presence predates the Arab conquest of the 7th century by thousands of years.
                Archaeological evidence, including rock carvings in the Sahara and Atlas Mountains,
                traces Amazigh civilization back over 9,000 years, making them one of the oldest
                continuously inhabited cultures on Earth. The word &quot;Amazigh&quot; means &quot;free
                people&quot; in their own language, Tamazight, while &quot;Berber&quot; derives from the
                Greek and Roman &quot;barbaros.&quot;
              </p>
              <p>
                Today, an estimated 40 to 50 percent of Morocco&apos;s population identifies as Amazigh,
                and their cultural influence permeates every aspect of Moroccan life: architecture, cuisine,
                music, agriculture, and hospitality. In 2011, Tamazight was recognized as an official
                language alongside Arabic in the Moroccan constitution. The Tifinagh script is now taught
                in schools and displayed on public buildings, road signs, and banknotes across the country.
              </p>
              <p>
                The Amazigh are not a single homogeneous group. They comprise dozens of tribes and
                confederations spread across Morocco&apos;s mountains, valleys, coasts, and desert edges.
                The Rifians of the north, the Shluh of the south, and the Imazighen of the Middle Atlas
                each maintain distinct dialects, customs, and artistic traditions, all united by a shared
                sense of identity as &quot;free people.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tifinagh Script & Language ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Languages className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tifinagh Script &amp; Berber Languages
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One of Africa&apos;s oldest writing systems, Tifinagh has been in continuous use for over 2,000 years.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Tifinagh Alphabet
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Tifinagh is a consonantal alphabet rooted in ancient Libyan script. Each character
                uses simple geometric shapes: circles, lines, and dots. The Tuareg of the Sahara
                preserved Tifinagh through centuries when other Amazigh groups adopted Arabic script.
                In 2003, Morocco adopted standardized Neo-Tifinagh for official use. Look for it on
                road signs, public buildings, and banknotes throughout the country. The Royal Institute
                of Amazigh Culture (IRCAM) in Rabat oversees its standardization and promotion.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Three Regional Languages
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Tamazight has three main variants in Morocco, each tied to a geographic region.
                Despite vocabulary differences, speakers share deep cultural kinship and common origins.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Tashelhit</strong> -- Souss, High Atlas, Anti-Atlas (approx. 8 million speakers). The most widely spoken Berber language in Morocco.</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Tamazight</strong> -- Middle Atlas, eastern High Atlas (approx. 5 million speakers). Gives its name to the broader language family.</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Tarifit</strong> -- Rif Mountains, northern Morocco (approx. 4 million speakers). Closest to the Kabyle dialect spoken in Algeria.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Traditional Crafts ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Paintbrush className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Amazigh Crafts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Centuries-old artisanal traditions that carry meaning, identity, and beauty in every piece.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices at cooperatives. Seasonal pricing and tourist-area markups may apply.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {traditionalCrafts.map((craft) => {
              const CraftIcon = craft.icon;
              return (
                <div key={craft.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CraftIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {craft.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{craft.description}</p>
                  <div className="space-y-2 text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{craft.where}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{craft.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Berber Architecture ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Architecture: Built from the Earth
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Kasbahs, ksour, agadirs, and tighremts: Morocco&apos;s most iconic structures are Amazigh creations
            built from rammed earth, stone, and palm wood.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {architectureTypes.map((arch) => {
              const ArchIcon = arch.icon;
              return (
                <div key={arch.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ArchIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {arch.name}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{arch.description}</p>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3 text-[var(--color-gold)]" />
                        <span><strong>Notable examples:</strong> {arch.examples}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Music & Dance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Music &amp; Dance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Communal performances that have bound communities together for millennia, from Atlas peaks to Saharan oases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {musicDance.map((art) => {
              const ArtIcon = art.icon;
              return (
                <div key={art.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ArtIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {art.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{art.region}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{art.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Berber Food ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Cuisine: Food of the Mountains
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Simple, hearty, and deeply flavorful. Berber food forms the backbone of Moroccan cuisine.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices vary by location and season. Village restaurants offer the most authentic flavors at the lowest prices.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {berberFood.map((food) => {
              const FoodIcon = food.icon;
              return (
                <div key={food.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FoodIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {food.name}
                        </h3>
                        <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">
                          {food.price}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{food.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Village Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Berber Village Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Step into living Amazigh communities where traditions have been maintained for centuries.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {villageExperiences.map((village) => {
              const VillageIcon = village.icon;
              return (
                <div key={village.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={village.image}
                      alt={`${village.name} Berber village in the ${village.region} region of Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <VillageIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                        {village.name}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 px-2 py-0.5 text-xs font-medium rounded bg-white/20 backdrop-blur-sm text-white">
                      {village.region}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{village.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {village.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--color-accent)] font-semibold">
                      <DollarSign className="w-3 h-3" />
                      {village.guide}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Nomadic Traditions ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nomadic &amp; Semi-Nomadic Traditions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Amazigh nomadic life has adapted over millennia, but seasonal migration and oral traditions persist
            in the mountains and desert margins.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {nomadicTraditions.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Museums & Cultural Sites ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Berber Museums &amp; Cultural Sites
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Learn about Amazigh history through curated collections and preserved heritage sites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {museumsAndSites.map((site) => (
              <div key={site.name} className="card-moroccan p-5">
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                  {site.type}
                </div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {site.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{site.description}</p>
                <div className="flex items-center gap-1 text-xs text-[var(--color-accent)] font-semibold">
                  <DollarSign className="w-3 h-3" />
                  {site.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Festivals & Celebrations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Festivals &amp; Celebrations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the Amazigh New Year to marriage moussems, these celebrations reveal the living spirit of Berber culture.
          </p>

          <div className="space-y-6">
            {festivals.map((festival) => (
              <div key={festival.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {festival.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0 ml-4">
                    <Clock className="w-3 h-3" />
                    {festival.month}
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{festival.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ethical Tourism ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandHeart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ethical &amp; Community-Based Tourism
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to visit Berber communities respectfully and ensure your tourism benefits the people who call these places home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Hire Local Guides', text: 'Hire guides from the local community rather than city agencies. Local guides provide deeper cultural insight, and your payment goes directly to village economies. From 300 MAD per day.' },
              { icon: ShieldCheck, title: 'Respect Boundaries', text: 'Ask before entering homes or photographing people. Dress modestly in rural areas. Remove shoes when entering homes. Non-Muslims cannot enter mosques.' },
              { icon: Award, title: 'Buy from Cooperatives', text: 'Women\'s cooperatives for carpets, argan oil, and pottery ensure fair wages. Cooperatives in Ait Bougmez, Tazenakht, and the Ourika Valley offer authentic crafts at fair prices.' },
              { icon: Heart, title: 'Community Guesthouses', text: 'Community-run gites keep revenue local. Simple, comfortable accommodation with home-cooked meals from 200 MAD per night including dinner and breakfast.' },
              { icon: Sparkles, title: 'Learn Basic Tamazight', text: '"Azul" (hello), "Tanmirt" (thank you), "Manzakin?" (how are you?). Small efforts show respect and open doors to deeper connections.' },
              { icon: Globe, title: 'Leave No Trace', text: 'Carry out all trash, use reusable bottles, and respect shared water sources (seguias). Water is precious in mountain and desert communities.' },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Amazigh Heritage in Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/art-berber-carpet-weaving.webp', alt: 'Berber woman weaving a traditional carpet on an upright loom in a Moroccan village', label: 'Traditional Carpet Weaving' },
              { src: '/images/hero-kasbahs.webp', alt: 'Ancient kasbah fortress with mud-brick towers in the Draa Valley of Morocco', label: 'Kasbah Architecture' },
              { src: '/images/art-atlas-mountain-village.webp', alt: 'Berber village with terraced fields in the High Atlas Mountains of Morocco', label: 'Atlas Mountain Village' },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.label}</p>
              </div>
            ))}
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
            {[
              { q: 'What is the difference between Berber and Amazigh?', a: 'Both terms refer to the same indigenous people of North Africa. "Amazigh" (plural: Imazighen), meaning "free people," is the self-designation. "Berber" derives from the Greek and Roman "barbaros." Both terms are widely used in Morocco, though Amazigh is increasingly preferred in official and cultural contexts since the 2011 constitutional recognition.' },
              { q: 'Can I visit Berber villages independently or do I need a guide?', a: 'Well-known villages like Imlil are accessible independently, with guesthouses and marked trails. For remote areas like Ait Bougmez, the Todra Gorge, or Anti-Atlas villages, a local guide (from 300 MAD per day) is recommended for cultural context, language help, and ensuring your visit benefits the community.' },
              { q: 'What languages do Berber people speak in Morocco?', a: 'Amazigh people speak Tamazight, with three main variants: Tashelhit (south and High Atlas), Tamazight (Middle Atlas), and Tarifit (Rif Mountains). Since 2011, Tamazight is an official language alongside Arabic. Most Amazigh also speak Darija (Moroccan Arabic), and many in tourist areas speak French and English.' },
              { q: 'When is the best time to visit Berber villages?', a: 'Spring (April to May) and autumn (September to October) are ideal. Pleasant hiking weather, wildflowers in spring, and harvest celebrations in autumn. Winter brings snow to the High Atlas, limiting access. January is special for Yennayer (Amazigh New Year) celebrations on the 13th.' },
              { q: 'How can I buy authentic Berber carpets?', a: 'Buy directly from weaving cooperatives in Ait Bougmez or Tazenakht for fair prices. Look for hand-knotted construction, natural wool, and slight irregularities that signal handmade work. Cooperatives charge from 800 MAD for small rugs and from 3,000 MAD for larger pieces. Avoid tourist-area middlemen who charge three to five times the fair price.' },
              { q: 'Is it appropriate to photograph Berber people?', a: 'Always ask permission first, especially with women and elders. Most communities are welcoming but value privacy. Respect anyone who declines. Showing the photo on your screen is appreciated. In tourist areas, a small tip (from 5 to 10 MAD) may be expected for photos.' },
              { q: 'What is Yennayer and when is it celebrated?', a: 'Yennayer is the Amazigh New Year, celebrated on January 13. It marks the start of the agrarian calendar and has been observed for thousands of years. Since 2018, it is an official public holiday in Morocco. Families gather for communal meals of couscous with seven vegetables, dried fruits, and nuts. Rural celebrations include bonfires, poetry recitals, and music.' },
              { q: 'What is the Imilchil Marriage Festival?', a: 'The Imilchil Marriage Festival takes place in September in the Middle Atlas. Traditionally, young Ait Hadiddou Berbers gathered here to choose partners freely, sometimes completing engagements in a single day. Today it functions as a cultural festival and regional market with traditional music, dance, horse parades, and trade.' },
              { q: 'Do Berber nomads still exist in Morocco?', a: 'Semi-nomadic Amazigh communities persist, though their numbers have decreased. In the High Atlas, some families move livestock between summer alpine pastures and winter valley camps. Saharan groups maintain seasonal migration routes. You can visit nomadic camps in the Middle Atlas through guided treks. Many families now combine seasonal movement with permanent village homes.' },
            ].map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hiking, trekking, and mountain experiences across the High, Middle, and Anti-Atlas ranges.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-carpet-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Paintbrush className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Carpet Buying Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know about buying authentic Moroccan carpets and avoiding scams.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From street food to fine dining, a complete guide to Moroccan cuisine and regional dishes.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-wedding-traditions" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Wedding Traditions
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover the elaborate multi-day wedding celebrations of Moroccan and Berber culture.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience Amazigh Culture?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From Atlas Mountain villages to Saharan oases, the Amazigh heritage of Morocco spans
            millennia of living tradition. Plan your cultural journey through one of the world&apos;s
            oldest civilizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-5 h-5" />
              Explore the Atlas Mountains
            </Link>
            <Link
              href="/morocco-cooking-classes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Utensils className="w-5 h-5" />
              Try Berber Cooking Classes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

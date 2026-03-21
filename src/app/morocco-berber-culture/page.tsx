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
  AlertTriangle,
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
  Calendar,
  Languages,
  Tent,
  Compass,
  Scissors,
  Shield,
  MessageCircleQuestion,
  UtensilsCrossed,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-berber-culture`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title:
    'Morocco Berber Culture Guide 2026 | Amazigh Heritage, Languages, Villages & Traditions',
  description:
    'Complete guide to Amazigh (Berber) culture in Morocco. History spanning 9,000+ years, Tamazight languages (Tashelhit, Tarifit), Tifinagh script, traditional villages, kasbah and ksar architecture, Ahwash music, Imilchil Festival, Berber cuisine, clothing, jewelry, tattoo symbols, nomadic traditions, and how to visit communities respectfully.',
  keywords: [
    'berber culture morocco',
    'amazigh heritage morocco',
    'amazigh culture guide',
    'berber villages morocco',
    'tifinagh script morocco',
    'tashelhit language',
    'tamazight language',
    'tarifit rif mountains',
    'berber traditions morocco 2026',
    'imilchil marriage festival',
    'amazigh new year yennayer',
    'berber carpet weaving',
    'moroccan kasbahs ksour',
    'ahwash dance morocco',
    'ahidous middle atlas',
    'berber food tagine couscous',
    'amlou berber nutella',
    'berber jewelry silverwork',
    'berber tattoo symbols amazigh',
    'berber clothing handira',
    'nomadic berber traditions',
    'community based tourism morocco',
    'berber architecture rammed earth',
    'imlil village atlas mountains',
    'ait benhaddou unesco',
  ],
  openGraph: {
    title:
      'Morocco Berber Culture Guide 2026 | Amazigh Heritage, Languages, Villages & Traditions',
    description:
      'Explore the living heritage of Morocco\'s Amazigh (Berber) people. From Tifinagh script and Atlas Mountain villages to ancient kasbahs, communal festivals, traditional clothing, symbolic tattoos, and 9,000 years of unbroken civilization.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-berber-culture.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Berber village with mud-brick architecture against the Atlas Mountains of Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Morocco Berber Culture Guide 2026 | Amazigh Heritage & Traditions',
    description:
      'Amazigh (Berber) heritage: 9,000 years of history, three living languages, kasbahs, ksour, Ahwash music, Imilchil Festival, Berber cuisine, traditional clothing, symbolic tattoos, and responsible village tourism.',
    images: [`${BASE_URL}/images/hero-berber-culture.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the difference between Berber and Amazigh?',
    a: 'Both terms refer to the same indigenous people of North Africa. "Amazigh" (plural: Imazighen) means "free people" in Tamazight and is the self-designation. "Berber" derives from the Greek and Roman "barbaros." Both terms are widely used in Morocco, though Amazigh is increasingly preferred in official and academic contexts since the 2011 constitutional recognition of Tamazight as an official language.',
  },
  {
    q: 'Can I visit Berber villages independently or do I need a guide?',
    a: 'Well-known villages like Imlil have guesthouses, restaurants, and marked trails, so you can visit independently. For remote areas like Ait Bougmez Valley, Anti-Atlas villages, or nomadic camps in the Middle Atlas, a local guide is strongly recommended. Guides provide cultural context, help with language barriers, and ensure your visit benefits the community directly. Expect to pay from 300 MAD per day for a local guide.',
  },
  {
    q: 'What languages do Berber people speak in Morocco?',
    a: 'Amazigh people speak Tamazight, which has three main regional variants: Tashelhit (Souss, High Atlas, Anti-Atlas, approximately 8 million speakers), Tamazight (Middle Atlas, approximately 5 million speakers), and Tarifit (Rif Mountains, approximately 4 million speakers). Since 2011, Tamazight is an official language alongside Arabic. Most Amazigh Moroccans also speak Darija (Moroccan Arabic), and many in tourist areas speak French and some English.',
  },
  {
    q: 'When is the best time to visit Berber villages in Morocco?',
    a: 'Spring (April to May) and autumn (September to October) offer the best conditions. Spring brings wildflowers and pleasant hiking temperatures. Autumn coincides with harvest celebrations and the Imilchil Festival in September. Summer can be extremely hot in the valleys. Winter snow makes some High Atlas passes impassable. January 13 is special for Yennayer (Amazigh New Year) celebrations.',
  },
  {
    q: 'How can I buy authentic Berber carpets without overpaying?',
    a: 'Buy directly from weaving cooperatives in villages like Ait Bougmez, Tazenakht, or Azrou for fair prices and guaranteed authenticity. Look for hand-knotted construction, natural wool, and slight irregularities that indicate handmade work. Cooperatives typically charge from 800 MAD for small rugs and from 3,000 MAD for larger carpets. Tourist-area middlemen often charge three to five times the cooperative price.',
  },
  {
    q: 'Is it appropriate to take photos of Berber people?',
    a: 'Always ask permission before photographing anyone, particularly women and elders. Most Amazigh communities are welcoming, but respect anyone who declines. Showing the photo on your camera screen afterward is a kind gesture. In some tourist-frequented areas, people may expect a small tip of from 5 to 10 MAD for photos. Never photograph someone from a distance with a telephoto lens to avoid asking.',
  },
  {
    q: 'What is Yennayer and when is it celebrated?',
    a: 'Yennayer is the Amazigh New Year, celebrated on January 13. It marks the beginning of the agrarian calendar and has been observed for thousands of years. Since 2018, January 13 is an official public holiday in Morocco. Families gather for communal meals featuring couscous with seven vegetables, dried fruits, and nuts. In rural communities, celebrations include bonfires, poetry recitals, and music through the night.',
  },
  {
    q: 'Do Berber nomads still exist in Morocco?',
    a: 'Semi-nomadic Amazigh communities persist, particularly in the High Atlas and eastern desert margins. Families still move livestock between summer alpine pastures (agdal) above 2,500 meters and winter valley camps. Some Saharan Amazigh groups maintain seasonal migration routes between oases. You can visit active nomadic camps through guided treks in the Middle Atlas and eastern High Atlas. Many families now combine seasonal movement with permanent village homes.',
  },
  {
    q: 'What do traditional Berber tattoos mean?',
    a: 'Amazigh facial and hand tattoos carry deep cultural significance. Common motifs include the "aza" (free man symbol, shaped like a Y), diamond patterns for protection against the evil eye, triangles representing femininity and fertility, and zigzag lines symbolizing water and life. Tattooing was traditionally done at coming-of-age, marriage, or after illness. The practice has declined since the mid-20th century, but elderly women in rural areas still bear these markings. Today, younger Amazigh people sometimes adopt the symbols in modern tattoo styles as cultural pride.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Berber Culture Guide 2026',
  description:
    'Complete guide to Berber (Amazigh) culture in Morocco covering 9,000 years of history, Tamazight languages, Tifinagh script, kasbah architecture, traditional crafts, music and festivals, cuisine, clothing, symbolic tattoos, and responsible tourism.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-berber-culture.webp`,
  author: {
    '@type': 'Organization',
    name: 'City Tours Morocco',
    url: BASE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'City Tours Morocco',
    url: BASE_URL,
  },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Morocco Berber Culture Guide',
        item: PAGE_URL,
      },
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
   DATA: BERBER LANGUAGES
   ================================================================ */

const berberLanguages = [
  { name: 'Tashelhit (Shilha)', region: 'Souss, High Atlas, Anti-Atlas', speakers: 'Approximately 8 million', notes: 'The most widely spoken Amazigh language in Morocco. Dominant in the Agadir region, throughout the Anti-Atlas, and across the western High Atlas. Tashelhit has a rich oral literary tradition, with professional poets (rways) performing at festivals and celebrations. Many Tashelhit speakers are also fluent in Darija and French.' },
  { name: 'Tamazight (Central Atlas)', region: 'Middle Atlas, eastern High Atlas', speakers: 'Approximately 5 million', notes: 'Gives its name to the broader Amazigh language family. Spoken in the cedar forests and highland plateaus of the Middle Atlas. Tamazight has the strongest state support, as the standardized form used by IRCAM (Royal Institute of Amazigh Culture) draws heavily on this variant. Closely associated with the Ahidous musical tradition.' },
  { name: 'Tarifit (Riffian)', region: 'Rif Mountains, northern Morocco', speakers: 'Approximately 4 million', notes: 'Spoken in the mountainous Rif region from Nador to Al Hoceima and Chefchaouen. Linguistically closest to the Kabyle dialect spoken in Algeria. The Rif region has a strong tradition of independence and cultural preservation. Tarifit is less mutually intelligible with Tashelhit and Tamazight than those two are with each other.' },
];

/* ================================================================
   DATA: ARCHITECTURE TYPES
   ================================================================ */

const architectureTypes = [
  { name: 'Kasbahs (Fortified Residences)', icon: Landmark, description: 'Fortified homes of prominent Amazigh families, built from pise (rammed earth) with ornate geometric decorations on towers and facades. Thick walls, corner watchtowers, and narrow interior passages served both defensive and climatic purposes, keeping interiors cool in summer and warm in winter. Ait Benhaddou near Ouarzazate, a UNESCO World Heritage Site, is the most photographed example.', examples: 'Ait Benhaddou (UNESCO), Kasbah Telouet, Kasbah Taourirt (Ouarzazate), Kasbah Amridil (Skoura)' },
  { name: 'Ksour (Fortified Villages)', icon: Building, description: 'A ksar (plural: ksour) is a fortified village of connected homes surrounded by a communal defensive wall. This reflects the Amazigh communal ethos: individual families share walls, gates, and granary space. The Draa and Dades valleys contain the finest surviving examples. Built from local earth, stone, and palm wood, these structures achieve passive thermal regulation without any modern technology.', examples: 'Ksar of Ait Benhaddou, Tamnougalt, Tinejdad, Nkob, Rissani' },
  { name: 'Agadirs (Communal Granaries)', icon: Mountain, description: 'Fortified communal granaries perched on hilltops where communities stored grain, olive oil, documents, and valuables. Each family had individual chambers secured with unique carved wooden locks. The agadir system functioned as both a bank and a social contract: the elected amine (guardian) managed access, and the collective storage protected against drought, war, and theft. Many surviving examples are 500 years old or older.', examples: 'Agadir Id Aissa (Amtoudi), Agadir Ikounka, Agadir Inoumar, Agadir n Ouzrou' },
  { name: 'Tighremts (Tower Houses)', icon: Star, description: 'Tall tower-like family homes rising three to four stories in the Dades and Todra valleys. Ground floors house livestock, middle floors contain living quarters, and open-sky top floors function as terraces for drying food and socializing during warm evenings. Mud-brick walls feature intricate geometric reliefs that distinguish each family and clan, turning domestic architecture into a form of identity declaration.', examples: 'Dades Valley, Todra Gorge area, Skoura oasis, Kelaat M\'Gouna' },
];

/* ================================================================
   DATA: MUSIC & DANCE TRADITIONS
   ================================================================ */

const musicDance = [
  { name: 'Ahwash', region: 'High Atlas & Souss', description: 'A collective performance where men and women form facing lines or a circle, clapping, chanting, and dancing in unison. Drums (bendir and tallunt) drive a rhythm that builds gradually over hours, reaching ecstatic intensity. Inscribed on UNESCO\'s Intangible Cultural Heritage list, Ahwash embodies the communal spirit of Amazigh life. Performances happen at weddings, harvests, and religious holidays.' },
  { name: 'Ahidous', region: 'Middle Atlas', description: 'Men and women stand shoulder to shoulder, swaying and singing in call-and-response while drummers set an accelerating beat. Poetry delivered during Ahidous covers themes of love, nature, honor, and community memory. Performances can last through an entire night, marking weddings, seasonal transitions, and collective celebrations.' },
  { name: 'Guedra', region: 'Saharan South (Guelmim)', description: 'A hypnotic trance dance performed by a single woman who kneels while musicians play a clay pot drum called the guedra. She moves only her hands, fingers, and upper body in increasingly ecstatic patterns, sometimes entering trance. The guedra is considered a blessing ritual that channels spiritual energy toward the assembled audience.' },
  { name: 'Taskiwin', region: 'Western High Atlas (Tata, Taroudant)', description: 'A martial dance where men hold decorated horn-shaped powder flasks, mimicking warriors preparing for battle with controlled, rhythmic movements. Inscribed on UNESCO\'s Intangible Cultural Heritage list in 2017. The choreography preserves ancient military formations, and performers spend years mastering the precise, synchronized steps.' },
];

/* ================================================================
   DATA: BERBER CUISINE
   ================================================================ */

const berberFood = [
  { name: 'Tagine', description: 'The conical clay tagine is quintessentially Berber. Slow-cooked over charcoal embers, village tagines are simpler and heartier than city versions: seasonal produce, preserved lemons, olives, and whatever meat is available. Classic preparations include chicken with preserved lemons and olives, lamb with prunes and almonds, and vegetable tagine finished with argan oil.', price: 'From 40 MAD in villages, from 80 MAD in tourist restaurants' },
  { name: 'Couscous Friday', description: 'Friday couscous is sacred across Morocco, but its origins are Amazigh. Hand-rolled from semolina flour and steamed three times in a couscoussier, the grains are topped with a stew of seven vegetables, chickpeas, and meat. In Berber homes, everyone eats communally from a single large dish using the right hand. The preparation ritual, which takes hours, is as important as the meal.', price: 'From 35 MAD in local restaurants, from 80 MAD in tourist spots' },
  { name: 'Amlou (Berber Nutella)', description: 'A rich spread made from argan oil, roasted almonds, and honey, ground together by hand in a stone mortar. Served at breakfast with khobz (bread), amlou originates from the Souss region where argan trees grow wild. Quality depends on pure, hand-pressed argan oil rather than the diluted versions sold in tourist shops.', price: 'From 60 MAD for a jar at cooperatives' },
  { name: 'Berber Bread (Tafernout) & Mint Tea', description: 'Tafernout is a thick flatbread baked in clay ovens or directly over embers, the foundation of every village meal. Equally essential is mint tea, often called "Berber Whiskey." Gunpowder green tea, fresh spearmint, and generous sugar are poured from height to create froth. The tea ritual involves three glasses: "the first is gentle like life, the second is strong like love, the third is bitter like death."', price: 'Bread from 3 MAD; tea from 10 MAD in cafes, free in homes' },
  { name: 'Berkoukes & Rfissa', description: 'Mountain-specific dishes for cold weather. Berkoukes is hand-rolled pasta cooked in a spiced broth with root vegetables and dried meat, filling and warming after a day of physical work. Rfissa layers shredded msemen bread soaked in lentil-and-chicken broth flavored with fenugreek, traditionally served to new mothers and at celebrations to restore strength.', price: 'From 30 MAD in village homes, from 70 MAD in restaurants' },
];

/* ================================================================
   DATA: TRADITIONAL CLOTHING
   ================================================================ */

const traditionalClothing = [
  { name: 'Handira (Berber Wedding Cape)', description: 'A heavy, hand-woven wool cape decorated with sequins, metallic threads, and sometimes coins. Brides wear the handira during wedding ceremonies across the High Atlas. Each handira takes weeks to complete and is often passed down through generations. The sequins are believed to deflect the evil eye and bring light to the marriage.', region: 'High Atlas, Middle Atlas' },
  { name: 'Taharuyt (Draped Dress)', description: 'A large rectangular cloth wrapped and pinned at the shoulders with fibulas (tizerzai), forming an elegant draped dress. The fabric is typically dark wool or cotton, often with stripes or geometric borders. The style of draping and the choice of fabric indicate regional origin, marital status, and sometimes clan affiliation.', region: 'Souss, Anti-Atlas, Saharan south' },
  { name: 'Djellaba & Burnous', description: 'The hooded djellaba worn across Morocco has Amazigh origins. Berber versions tend to be made of heavier hand-woven wool, often in natural brown, black, or white. The burnous (selham) is a heavier hooded cloak worn over the djellaba in cold mountain weather, woven from undyed wool that repels rain naturally.', region: 'Worn across all Amazigh regions' },
  { name: 'Headwraps & Turbans', description: 'Amazigh men in the south wear turbans (tagelmust or cheche) that protect against sun, sand, and cold. The indigo-dyed tagelmust of the Tuareg-related groups leaves blue traces on the skin, earning them the name "Blue People." Women wear elaborate headscarves and head wraps, with styles varying dramatically between regions and marking tribal identity.', region: 'Saharan south, Anti-Atlas, Rif Mountains' },
];

/* ================================================================
   DATA: SYMBOLS & TATTOOS
   ================================================================ */

const berberSymbols = [
  { symbol: 'Aza (Yaz) -- Free Man', meaning: 'Shaped like the letter Y or a standing human figure with raised arms, the aza is the most recognized Amazigh symbol. It represents "free man" (amazigh) and has become a pan-Amazigh identity marker. You will see it on flags, jewelry, bumper stickers, and as the logo of cultural organizations across North Africa.' },
  { symbol: 'Diamond (Eye of Protection)', meaning: 'The diamond or lozenge shape appears on carpets, pottery, tattoos, and architecture. It represents the protective eye that deflects the evil eye (al-ayn). Concentric diamonds amplify the protection. This motif is among the oldest continuous decorative traditions in the world, appearing on Amazigh artifacts dating back thousands of years.' },
  { symbol: 'Triangle (Femininity & Fertility)', meaning: 'Inverted triangles represent the feminine principle. They appear frequently on women\'s tattoos, woven into carpets, and painted on pottery. In some regional traditions, a triangle with internal lines represents a tent, and by extension, the family and domestic sphere that women historically governed.' },
  { symbol: 'Zigzag Lines (Water & Life)', meaning: 'Wavy or zigzag horizontal lines symbolize water, the most precious resource in arid North Africa. On carpets and ceramics, these lines often border other motifs, representing the life-giving force that sustains communities. In tattoo traditions, water symbols on the chin or forehead were believed to bring agricultural abundance.' },
  { symbol: 'Cross & Plus Sign (Crossroads, Balance)', meaning: 'The Amazigh cross (distinct from the Christian cross) represents the meeting of cardinal directions, the balance of opposing forces, and the crossroads of decision. The southern "Croix du Sud" cross is a well-known jewelry design from Tiznit and Essaouira, each regional variant subtly different from the others.' },
  { symbol: 'Fibula Pattern (Connection & Unity)', meaning: 'The fibula brooch shape, used to pin garments, appears as a decorative motif across all Amazigh art forms. It symbolizes connection, binding, and the unity of family and community. Pairs of fibulas linked by a chain represent the bond between spouses or between mother and daughter.' },
];

/* ================================================================
   DATA: VILLAGE EXPERIENCES
   ================================================================ */

const villageExperiences = [
  {
    name: 'Imlil & Aroumd',
    region: 'High Atlas',
    image: '/images/hero-atlas-village.webp',
    description:
      'The gateway to Jebel Toubkal, North Africa\'s highest peak. Imlil is a Berber village at 1,740m altitude, just 90 minutes from Marrakech. Stay in a traditional guesthouse, hike to the walnut-shaded village of Aroumd (Aremd), and eat communal meals cooked by local families. Mule treks, guided walks to the Azzaden Valley, and homestays are all arranged through village cooperatives.',
    highlights: [
      '90 minutes from Marrakech',
      'Gateway to Toubkal',
      'Traditional guesthouses',
      'Guided mule treks',
    ],
    guide: 'From 300 MAD per day for a local guide',
  },
  {
    name: 'Ait Bougmez Valley',
    region: 'Central High Atlas',
    image: '/images/art-atlas-mountain-village.webp',
    description:
      'Called the "Happy Valley," Ait Bougmez is one of Morocco\'s most culturally rich destinations. Terraced fields, walnut orchards, ancient communal granaries, and mud-brick villages fill a wide alpine valley. Less visited than Imlil, it rewards travelers with genuine immersion. Community-run guesthouses, women\'s weaving cooperatives, and seasonal harvest festivals make this a standout cultural experience.',
    highlights: [
      'Less touristy than Imlil',
      'Ancient communal granaries',
      'Women\'s weaving cooperatives',
      'Seasonal harvest festivals',
    ],
    guide: 'From 350 MAD per day for a local guide',
  },
  {
    name: 'Ait Benhaddou',
    region: 'Ouarzazate Province',
    image: '/images/hero-kasbahs.webp',
    description:
      'This UNESCO World Heritage ksar along the former caravan route between the Sahara and Marrakech is the most photographed fortified village in Morocco. Featured in Gladiator, Game of Thrones, and Lawrence of Arabia, it remains a living settlement. Families still inhabit the lower sections, and local guides share histories passed down through generations of Amazigh residents.',
    highlights: [
      'UNESCO World Heritage Site',
      'Active film location',
      'Living Berber settlement',
      'Sunset views from hilltop',
    ],
    guide: 'From 100 MAD for a guided tour',
  },
  {
    name: 'Tafraout & Anti-Atlas',
    region: 'Anti-Atlas',
    image: '/images/art-berber-portrait.webp',
    description:
      'The heartland of Tashelhit-speaking Amazigh culture. Tafraout sits surrounded by rose-granite boulders, famous for almond blossoms in February and some of Morocco\'s finest Amazigh architecture. Far from the main tourist trail, this region offers quiet, authentic encounters with Berber life. Surrounding villages preserve some of the oldest communal granaries in the country.',
    highlights: [
      'February almond blossom festival',
      'Rose granite landscapes',
      'Authentic Tashelhit culture',
      'Off the beaten path',
    ],
    guide: 'From 250 MAD per day for a local guide',
  },
];

/* ================================================================
   DATA: FESTIVALS
   ================================================================ */

const festivals = [
  { name: 'Yennayer (Amazigh New Year)', month: 'January 13', description: 'Marking the start of the agrarian calendar, Yennayer has been observed for thousands of years across North Africa. Since 2018, January 13 is an official public holiday in Morocco. Families gather for communal meals of couscous with seven vegetables, dried fruits, and nuts. Rural communities light bonfires, recite poetry, and perform music through the night. Urban celebrations now include concerts and cultural exhibitions.' },
  { name: 'Imilchil Marriage Festival (Moussem)', month: 'September', description: 'A legendary Middle Atlas gathering of the Ait Hadiddou people, traditionally a place where young Berbers chose their partners freely, sometimes completing engagements in a single day. The festival\'s origin story involves two star-crossed lovers from rival clans whose tears formed the twin lakes of Isli and Tislit. Today it functions as a cultural festival and regional market with traditional music, dance, horse parades, and trade.' },
  { name: 'Timitar Festival (Agadir)', month: 'July', description: 'One of Morocco\'s largest music festivals, celebrating Amazigh music alongside international acts. Free outdoor concerts attract hundreds of thousands over four days. Timitar showcases the diversity and global reach of Amazigh musical traditions, from traditional Rways poets to contemporary fusion artists blending Tamazight lyrics with modern genres.' },
  { name: 'Almond Blossom Festival (Tafraout)', month: 'February', description: 'When almond trees blanket the Anti-Atlas in pink and white, Tafraout hosts celebrations with traditional music, competitive dance performances, feasting, and fresh almond products from local cooperatives. The festival draws visitors from across southern Morocco and is a rare window into the Tashelhit cultural sphere.' },
  { name: 'Boujloud / Bilmawen', month: 'After Eid al-Adha', description: 'A pre-Islamic Amazigh tradition where men dress in animal skins and handmade masks, dancing through villages to ward off evil spirits and celebrate the cycle of nature. This carnivalesque festival has survived for millennia, revealing cultural layers that predate Islam in Morocco. UNESCO has recognized it as part of the country\'s intangible heritage.' },
];

/* ================================================================
   DATA: NOMADIC TRADITIONS
   ================================================================ */

const nomadicTraditions = [
  { title: 'Transhumance Routes', icon: Compass, text: 'Semi-nomadic Amazigh herders follow ancient seasonal routes, moving livestock between summer alpine pastures (agdal) above 2,500 meters and winter valley camps. In the Central High Atlas, families spend May through October in high pastures, then descend when snow arrives. These routes have been maintained for centuries, governed by communal agreements about grazing rights and water access.' },
  { title: 'Nomadic Camp Life', icon: Tent, text: 'Traditional Berber tents (akhiam) are woven from goat and camel hair, providing insulation against both heat and cold. Inside, hand-woven carpets cover the ground, and families gather around a central hearth for meals and storytelling. Visitors to the Middle Atlas and eastern High Atlas can arrange overnight stays in active nomadic camps through local guides, sharing meals and observing daily pastoral routines.' },
  { title: 'Saharan Amazigh Groups', icon: Globe, text: 'The Ait Atta, one of the largest Amazigh confederations, historically controlled vast territories from the Saghro Mountains to the Saharan fringe. Their descendants maintain semi-nomadic patterns near Zagora and Merzouga. Some families combine seasonal movement with permanent village homes, adapting millennia-old rhythms to the realities of modern infrastructure, schooling, and employment.' },
  { title: 'Oral Tradition & Poetry', icon: BookOpen, text: 'Without a widely used written language until recently, Amazigh culture preserved its history, law, and moral values through oral poetry. Elders (amghar) recited genealogies and tribal codes from memory. Professional poets (imedyazen) traveled between communities, spreading news and lessons through verse. This tradition continues at festivals, weddings, and family gatherings across Morocco.' },
];

/* ================================================================
   DATA: CRAFTS
   ================================================================ */

const traditionalCrafts = [
  { name: 'Carpet Weaving', icon: Paintbrush, description: 'Berber carpets rank among the most sought-after textiles worldwide. Each region produces distinctive patterns: Beni Ourain carpets from the Middle Atlas feature geometric black-on-white designs, while Azilal carpets burst with color. Women weave on upright looms, encoding family stories and protective symbols into every knot. A single carpet can take weeks to months to complete.', where: 'Tazenakht, Ait Bougmez, Azrou, Chefchaouen cooperatives', price: 'From 800 MAD for small rugs, from 3,000 MAD for large carpets' },
  { name: 'Silverwork & Jewelry', icon: Crown, description: 'Amazigh silversmiths craft fibulas (tizerzai) that hold garments together, elaborate bridal headdresses, and talismanic pendants inscribed with Tifinagh characters. Unlike Arab-Moroccan goldwork, Berber jewelry favors silver, often set with amber, coral, or amazonite. The fibula cross of the south, the Croix du Sud, is an iconic design recognized internationally.', where: 'Tiznit (silver capital), Essaouira, High Atlas villages', price: 'From 150 MAD for simple pendants, from 1,000 MAD for bridal pieces' },
  { name: 'Pottery & Ceramics', icon: Gem, description: 'Amazigh pottery predates the Arab arrival by millennia. Rif Mountain women create unglazed terracotta vessels decorated with geometric motifs using natural pigments. Each symbol carries meaning: triangles for femininity, diamonds for protection, zigzag lines for water. Tamegroute near Zagora produces distinctive green-glazed pottery using centuries-old techniques.', where: 'Rif Mountains, Tamegroute, Ourika Valley cooperatives', price: 'From 50 MAD for small pieces, from 200 MAD for decorative bowls' },
  { name: 'Leather & Woodwork', icon: Scissors, description: 'Amazigh artisans produce intricately carved cedarwood items using techniques unchanged for centuries. Thuya wood from Essaouira is shaped into decorative boxes and chess sets. Leather goods including bags, belts, and shoes are tanned using traditional methods with natural dyes from pomegranate, saffron, and indigo.', where: 'Essaouira (thuya), Azrou (cedar), Fes medina tanneries', price: 'From 100 MAD for small carved items, from 300 MAD for leather bags' },
];

/* ================================================================
   DATA: MUSEUMS & CULTURAL SITES
   ================================================================ */

const museumsAndSites = [
  { name: 'Musee Amazigh (Agadir)', type: 'Museum', description: 'Dedicated to Amazigh heritage with traditional clothing, jewelry, carpets, tools, and instruments. Well-curated displays explain the cultural diversity of Berber groups across regions.', price: 'From 20 MAD entry' },
  { name: 'Musee Berbere (Marrakech)', type: 'Museum', description: 'Within the Jardin Majorelle, housing over 600 artifacts spanning Berber culture from the Rif to the Sahara. Textiles, jewelry, weapons, and ceramics beautifully arranged.', price: 'From 30 MAD entry (separate from garden)' },
  { name: 'Tiskiwin Museum (Marrakech)', type: 'Museum', description: 'Founded by anthropologist Bert Flint, tracing the trans-Saharan caravan route through 50 years of collected artifacts. Each room represents a region from Marrakech to Timbuktu.', price: 'From 25 MAD entry' },
  { name: 'Kasbah Telouet', type: 'Historic Kasbah', description: 'The crumbling palace of the Glaoui lords. Stunning zellige tilework and painted cedarwood ceilings inside contrast the slowly dissolving rammed-earth exterior.', price: 'From 30 MAD entry' },
  { name: 'Tifinagh Rock Carvings (Tata)', type: 'Archaeological Site', description: 'Ancient rock engravings featuring Tifinagh script and hunting scenes dating back thousands of years, providing direct evidence of deep Amazigh roots in North Africa.', price: 'Free (local guide from 100 MAD recommended)' },
  { name: 'IRCAM (Rabat)', type: 'Cultural Institute', description: 'The Royal Institute of Amazigh Culture standardizes Tifinagh script and promotes Amazigh language education. Houses a research library and hosts public exhibitions.', price: 'Free entry to exhibitions' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoBerberCulturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-berber-culture.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
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
            Morocco Berber Culture Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            9,000 years of Amazigh civilization: languages, architecture,
            music, cuisine, clothing, symbols, and how to experience Berber
            heritage respectfully.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Who Are the Amazigh? Morocco&apos;s Indigenous People
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              The Amazigh, commonly known as Berbers, are the indigenous people
              of North Africa. Archaeological evidence -- rock carvings in the
              Sahara, cave art in the Atlas Mountains, and stone tools across
              the Maghreb -- traces their continuous presence back over 9,000
              years, making theirs one of the oldest living civilizations on
              Earth. The word &quot;Amazigh&quot; means &quot;free people&quot;
              in Tamazight, the collective name for their languages.
            </p>
            <p>
              An estimated 40 to 50 percent of Morocco&apos;s population
              identifies as Amazigh, and their cultural fingerprint is on every
              aspect of Moroccan life: the tagine and couscous are Amazigh
              inventions, the kasbahs and ksour that define the southern
              landscape are Amazigh architecture, and the communal hospitality
              that travelers praise is rooted in Amazigh social codes. In 2011,
              the Moroccan constitution recognized Tamazight as an official
              language alongside Arabic. The Tifinagh script now appears on road
              signs, public buildings, banknotes, and school textbooks
              nationwide.
            </p>
            <p>
              The Amazigh are not one homogeneous group. Dozens of tribes and
              confederations span Morocco&apos;s mountains, valleys, coasts, and
              desert edges. The Rifians of the north, the Shluh of the south,
              and the Imazighen of the Middle Atlas each maintain distinct
              dialects, customs, and artistic traditions -- all connected by a
              shared identity as &quot;free people&quot; and a deep attachment
              to the land.
            </p>
          </div>
        </div>
      </section>

      {/* ── Languages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Languages className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tamazight: Three Languages, One Heritage
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tifinagh, one of Africa&apos;s oldest writing systems, has been in
            continuous use for over 2,000 years. Today it is the official script
            for all three Moroccan Amazigh languages.
          </p>

          <div className="space-y-6">
            {berberLanguages.map((lang) => (
              <div key={lang.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {lang.name}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)] shrink-0 ml-4 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {lang.region}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-2">
                  {lang.notes}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  <Users className="w-3 h-3 inline mr-1" />
                  {lang.speakers}
                </p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-8">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <Sparkles className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
              Useful Tamazight Phrases
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--text-secondary)]">
              <span><strong>Azul</strong> -- Hello</span>
              <span><strong>Tanmirt</strong> -- Thank you</span>
              <span><strong>Manzakin?</strong> -- How are you?</span>
              <span><strong>Labas</strong> -- Fine / No problem</span>
              <span><strong>Ih / Uhu</strong> -- Yes / No</span>
              <span><strong>Ar tufat</strong> -- Goodbye (see you tomorrow)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Architecture ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Architecture: Built from the Earth
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Kasbahs, ksour, agadirs, and tighremts: Morocco&apos;s most iconic
            structures are Amazigh creations built from rammed earth, stone, and
            palm wood.
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
                      <p className="text-sm text-[var(--text-secondary)] mb-3">
                        {arch.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3 text-[var(--color-gold)]" />
                        <span>
                          <strong>Notable examples:</strong> {arch.examples}
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

      {/* ── Music & Dance ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Music &amp; Dance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Communal performances that have bound communities together for
            millennia, from Atlas peaks to Saharan oases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {musicDance.map((art) => (
              <div key={art.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                    <Music className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {art.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      {art.region}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  {art.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cuisine ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Cuisine: Food of the Mountains
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Simple, hearty, and deeply flavorful -- Berber food forms the
            backbone of Moroccan cuisine.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices vary by location and season. Village restaurants offer the
            most authentic flavors at the lowest prices.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {berberFood.map((food) => (
              <div key={food.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <UtensilsCrossed className="w-5 h-5 text-[var(--color-accent)]" />
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
                    <p className="text-sm text-[var(--text-secondary)]">
                      {food.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Traditional Clothing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scissors className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Amazigh Clothing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Garments that encode identity, region, and social status in every
            fold, weave, and decorative detail.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traditionalClothing.map((item) => (
              <div key={item.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <MapPin className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>{item.region}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Symbols & Tattoos ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Berber Symbols &amp; Tattoo Traditions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Geometric motifs that appear on carpets, pottery, architecture,
            jewelry, and traditional facial and hand tattoos. Each carries
            specific protective or symbolic meaning.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <AlertTriangle className="w-3.5 h-3.5 inline mr-1" />
            Traditional tattooing has largely ceased. Elderly women in rural
            areas are the last generation bearing these markings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {berberSymbols.map((item) => (
              <div key={item.symbol} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.symbol}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Crafts & Jewelry ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Paintbrush className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Crafts &amp; Jewelry
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Centuries-old artisanal traditions where every piece carries meaning,
            identity, and protection.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices at cooperatives. Seasonal pricing
            and tourist-area markups may apply.
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
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    {craft.description}
                  </p>
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

      {/* ── Village Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Berber Village Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Step into living Amazigh communities where traditions have been
            maintained across generations.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {villageExperiences.map((village) => (
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
                    <Mountain className="w-5 h-5 text-white" />
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                      {village.name}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 px-2 py-0.5 text-xs font-medium rounded bg-white/20 backdrop-blur-sm text-white">
                    {village.region}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    {village.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {village.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]"
                      >
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
            ))}
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
            Amazigh nomadic life has adapted over millennia, but seasonal
            migration, oral poetry, and pastoral rhythms persist in the
            mountains and desert margins.
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
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.text}
                  </p>
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
            Learn about Amazigh history through curated collections and
            preserved heritage sites across Morocco.
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
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                  {site.description}
                </p>
                <div className="flex items-center gap-1 text-xs text-[var(--color-accent)] font-semibold">
                  <DollarSign className="w-3 h-3" />
                  {site.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Festivals ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Festivals &amp; Celebrations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the Amazigh New Year to marriage moussems, these celebrations
            reveal the living spirit of Berber culture.
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
                <p className="text-sm text-[var(--text-secondary)]">
                  {festival.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ethical Tourism ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visiting Berber Communities Respectfully
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to engage with Amazigh communities in a way that is respectful,
            reciprocal, and beneficial to the people who live there.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Hire Local Guides',
                text: 'Hire guides from the local community rather than city agencies. Local guides provide deeper cultural insight, and your payment goes directly to village economies. From 300 MAD per day.',
              },
              {
                icon: ShieldCheck,
                title: 'Respect Boundaries',
                text: 'Ask before entering homes or photographing anyone. Dress modestly in rural areas. Remove shoes when entering homes. Non-Muslims cannot enter mosques.',
              },
              {
                icon: Award,
                title: 'Buy from Cooperatives',
                text: "Women's cooperatives for carpets, argan oil, and pottery ensure fair wages and preserve traditional skills. Cooperatives in Ait Bougmez, Tazenakht, and the Ourika Valley offer authentic crafts at fair prices.",
              },
              {
                icon: Heart,
                title: 'Community Guesthouses',
                text: 'Community-run gites keep revenue local. Simple, comfortable accommodation with home-cooked meals from 200 MAD per night including dinner and breakfast.',
              },
              {
                icon: Sparkles,
                title: 'Learn Basic Tamazight',
                text: '"Azul" (hello), "Tanmirt" (thank you), "Manzakin?" (how are you?). Small efforts show respect and open doors to deeper connections.',
              },
              {
                icon: Globe,
                title: 'Leave No Trace',
                text: 'Carry out all trash, use reusable water bottles, and respect shared water sources (seguias). Water is precious in mountain and desert communities.',
              },
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
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Amazigh Heritage in Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: '/images/art-berber-carpet-weaving.webp',
                alt: 'Berber woman weaving a traditional carpet on an upright loom in a Moroccan village',
                label: 'Traditional Carpet Weaving',
              },
              {
                src: '/images/hero-kasbahs.webp',
                alt: 'Ancient kasbah fortress with mud-brick towers in the Draa Valley of Morocco',
                label: 'Kasbah Architecture',
              },
              {
                src: '/images/art-atlas-mountain-village.webp',
                alt: 'Berber village with terraced fields in the High Atlas Mountains of Morocco',
                label: 'Atlas Mountain Village',
              },
            ].map((img) => (
              <div
                key={img.label}
                className="relative h-72 rounded-xl overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                  {img.label}
                </p>
              </div>
            ))}
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
            Answers to common questions about visiting Berber communities and
            understanding Amazigh culture.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.a}
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
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Atlas Mountains Guide',
                description:
                  'Hiking, trekking, and mountain encounters across the High, Middle, and Anti-Atlas ranges.',
                href: '/morocco-atlas-mountains',
                icon: Mountain,
              },
              {
                title: 'Moroccan Food Guide',
                description:
                  'From street food to fine dining, a full guide to Moroccan cuisine and regional dishes.',
                href: '/morocco-food-guide',
                icon: UtensilsCrossed,
              },
              {
                title: 'Carpet Buying Guide',
                description:
                  'Everything you need to know about buying authentic Moroccan carpets and avoiding scams.',
                href: '/morocco-carpet-guide',
                icon: Paintbrush,
              },
              {
                title: 'Morocco Etiquette Guide',
                description:
                  'Dress code, tipping customs, greetings, and social norms for respectful travel.',
                href: '/etiquette',
                icon: ShieldCheck,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-5 hover:shadow-lg transition-shadow group"
                >
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {guide.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
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
            From Atlas Mountain villages to Saharan oases, the Amazigh heritage
            of Morocco spans millennia of living tradition. Plan your cultural
            journey through one of the world&apos;s oldest civilizations.
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
              <UtensilsCrossed className="w-5 h-5" />
              Try Berber Cooking Classes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

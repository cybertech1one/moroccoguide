import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  Globe,
  CheckCircle,
  Clock,
  BookOpen,
  Users,
  Lightbulb,
  Sparkles,
  MapPin,
  Compass,
  Heart,
  Landmark,
  Shield,
  Mountain,
  Music,
  Utensils,
  HandHeart,
  Star,
  Calendar,
  MessageCircle,
  Languages,
  Tent,
  Brush,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Berber Culture Morocco Guide 2026 | Amazigh People, Villages & Traditions',
  description:
    'Complete guide to Berber (Amazigh) culture in Morocco for 2026. Discover Berber villages, traditional crafts, cuisine, music, festivals like the Imilchil Marriage Festival, Tifinagh script, homestay experiences, and etiquette tips for visiting Amazigh communities.',
  keywords: [
    'Berber culture Morocco',
    'Amazigh people Morocco',
    'Berber village visit',
    'Berber traditions Morocco',
    'Amazigh language Morocco',
    'Tifinagh script',
    'Berber rugs Morocco',
    'Berber cuisine',
    'Imilchil marriage festival',
    'Gnawa music Morocco',
    'Ahwash dance Morocco',
    'Berber homestay Morocco',
    'Atlas Mountains Berber villages',
    'Amazigh culture guide',
    'Berber pottery Morocco',
    'Morocco indigenous people',
  ],
  openGraph: {
    title: 'Berber Culture Morocco Guide 2026 | Amazigh People, Villages & Traditions',
    description:
      'Discover the Amazigh (Berber) people of Morocco: their ancient languages, mountain villages, traditional crafts, cuisine, music, festivals, and how to visit respectfully. A complete cultural guide for travelers.',
    url: `${BASE_URL}/morocco-berber-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Berber village nestled in the Atlas Mountains of Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berber Culture Morocco Guide 2026 | Amazigh Villages & Traditions',
    description:
      'Amazigh (Berber) culture in Morocco: languages, villages, crafts, cuisine, music, festivals, homestays & etiquette. Complete traveler guide with FAQ.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-berber-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-berber-guide`,
  name: 'Berber Culture Morocco Guide 2026 | Amazigh People, Villages & Traditions',
  description:
    'Complete guide to Berber (Amazigh) culture in Morocco covering the Amazigh people, Tamazight languages and Tifinagh script, Berber villages to visit, traditional crafts including rugs and pottery, Berber cuisine, music traditions like Gnawa and Ahwash, festivals such as the Imilchil Marriage Festival, homestay experiences, and etiquette for visiting Amazigh communities.',
  url: `${BASE_URL}/morocco-berber-guide`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-berber-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Berber Culture Guide', item: `${BASE_URL}/morocco-berber-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who are the Berbers of Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Berbers, who call themselves Amazigh (meaning "free people"), are the indigenous inhabitants of North Africa. They have lived in Morocco for thousands of years, long before the Arab conquest in the 7th century. Today, approximately 40% of Moroccans identify as Amazigh, and Berber culture is deeply woven into the country\'s identity, from architecture and cuisine to music and language. The 2011 Moroccan constitution officially recognized Tamazight as an official language alongside Arabic.',
      },
    },
    {
      '@type': 'Question',
      name: 'What languages do the Berbers speak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan Berbers speak three main Tamazight language varieties: Tarifit (spoken in the Rif Mountains of northern Morocco), Tamazight (spoken in the Middle Atlas and parts of the High Atlas), and Tashelhit (spoken in the Souss region and western High Atlas). These are distinct enough that speakers of one may not understand another. The Amazigh also have their own ancient alphabet called Tifinagh, which has been revived and is now taught in Moroccan schools and appears on official signage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit a Berber village in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many Berber villages in the Atlas Mountains and southern Morocco welcome visitors. Popular villages include Imlil (a trekking base near Mount Toubkal), Aroumd, Ait Bougmez valley, and villages in the Dades and Todra gorges. The best way to visit is with a local Amazigh guide who can introduce you to families, explain customs, and ensure your visit is respectful. Many villages offer homestay experiences where you can share meals, learn about daily life, and participate in traditional activities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Imilchil Marriage Festival?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Imilchil Marriage Festival (Moussem) is an annual gathering held in September near the village of Imilchil in the High Atlas Mountains. Traditionally, young Amazigh men and women from surrounding tribes would meet, choose partners, and marry during the festival. While the event has become more of a cultural celebration and tourist attraction in recent years, it still features traditional music, dancing, and ceremonies. The festival is rooted in the legend of two star-crossed lovers from rival tribes whose tears formed the nearby lakes of Isli and Tislit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are traditional Berber crafts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional Amazigh crafts include hand-woven rugs and carpets (each region has distinctive patterns and colors), pottery (especially from the Rif Mountains), silver jewelry with geometric Berber symbols, leather goods, basketry, and woodcarving. Berber rugs are particularly famous: Beni Ourain rugs (cream with dark geometric patterns) from the Middle Atlas, Azilal rugs (colorful and abstract), and Kilim flat-weave rugs are highly sought after by collectors worldwide. Each pattern tells a story or carries symbolic meaning related to fertility, protection, or tribal identity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Berber cuisine like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Berber cuisine is hearty, seasonal, and deeply connected to the land. Staples include tagine (slow-cooked stew with vegetables, meat, and spices), couscous (traditionally served on Fridays), amlou (a spread of argan oil, almonds, and honey), tafarnout (Berber bread baked in a clay oven or under hot embers), and mint tea prepared with fresh spearmint and generous sugar. Mountain Berber dishes often feature lamb, root vegetables, and preserved foods suited to cold winters. Seasonal ingredients like figs, dates, olives, and argan oil are central to the diet.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Tifinagh script?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tifinagh is the ancient alphabetic script used by the Amazigh (Berber) people. Its origins trace back over 2,000 years to the Libyan script used by ancient Numidians. After centuries of decline, Tifinagh was revived in the 20th century by Amazigh cultural movements. In 2003, Morocco\'s Royal Institute of Amazigh Culture (IRCAM) adopted a standardized Neo-Tifinagh script. Today, Tifinagh appears on Moroccan banknotes, government buildings, street signs, and is taught in schools. The script consists of geometric symbols — circles, lines, and dots — that give it a distinctive and visually striking appearance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What music traditions do the Berbers have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Amazigh music is rich and diverse. Key traditions include Ahwash (a collective dance and song performed at festivals in the High Atlas), Ahidous (a similar tradition from the Middle Atlas featuring poetry and rhythmic clapping), and Gnawa music (a spiritual tradition blending sub-Saharan African, Berber, and Sufi elements with hypnotic rhythms and trance-inducing chanting). Instruments include the bendir (frame drum), the guembri (three-stringed bass lute), the lothar (one-stringed fiddle), and metal castanets (qraqeb). The annual Gnaoua World Music Festival in Essaouira celebrates these traditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What etiquette should I follow when visiting a Berber village?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When visiting Amazigh villages, always greet people warmly (a simple "salaam" or "azul" in Tamazight is appreciated). Accept offers of mint tea, as refusing can be considered rude. Ask permission before photographing people or their homes. Dress modestly, covering shoulders and knees. Remove shoes before entering a home. Bring a small gift such as tea, sugar, or school supplies rather than money. Hire a local guide rather than wandering into villages unannounced. Respect privacy and avoid treating the village as a spectacle. If invited to share a meal, eat with your right hand as is the local custom.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: AMAZIGH LANGUAGES
   ═══════════════════════════════════════════════════════════════ */

const amazighLanguages = [
  {
    name: 'Tarifit',
    region: 'Rif Mountains (Northern Morocco)',
    speakers: 'Approx. 4 million',
    detail: 'Spoken by the Riffian Berbers of northern Morocco, Tarifit has a distinctive phonology and vocabulary influenced by centuries of contact with Spanish and Arabic. The Rif region has a strong tradition of oral poetry and resistance history, including the legendary Abd el-Krim who fought Spanish and French colonialism.',
    icon: Globe,
  },
  {
    name: 'Tamazight (Central Atlas)',
    region: 'Middle Atlas & High Atlas',
    speakers: 'Approx. 5 million',
    detail: 'The most widely spoken Berber variety in Morocco, Central Atlas Tamazight is the basis for the standardized Amazigh taught in schools. Speakers inhabit the mountainous heartland of Morocco, maintaining pastoral traditions of herding sheep and goats across high-altitude pastures.',
    icon: Mountain,
  },
  {
    name: 'Tashelhit',
    region: 'Souss, Western High Atlas, Anti-Atlas',
    speakers: 'Approx. 8 million',
    detail: 'The largest Berber language group in Morocco, Tashelhit (also called Shilha) is spoken across the Souss plain, the western High Atlas, and the Anti-Atlas. Tashelhit speakers have a rich literary tradition and are known for the Amarg musical style. The city of Agadir is the informal capital of the Tashelhit-speaking world.',
    icon: Globe,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BERBER VILLAGES TO VISIT
   ═══════════════════════════════════════════════════════════════ */

const berberVillages = [
  { name: 'Imlil', location: 'High Atlas, near Marrakech', description: 'The main trailhead for climbing Mount Toubkal (4,167m), Imlil is a Berber village at 1,740m altitude surrounded by walnut groves and terraced fields. Stone and mud-brick houses line the valley, and local families offer guesthouse accommodations. The village is a 90-minute drive from Marrakech.', icon: Mountain },
  { name: 'Aroumd (Armed)', location: 'High Atlas, above Imlil', description: 'A traditional Amazigh village perched at 1,940m, reachable by a one-hour hike or mule ride from Imlil. Aroumd offers an authentic glimpse of mountain Berber life with its flat-roofed stone houses, communal threshing floors, and stunning views of Toubkal. Several family-run guesthouses welcome hikers.', icon: MapPin },
  { name: 'Ait Bougmez Valley', location: 'Central High Atlas', description: 'Known as the "Happy Valley," Ait Bougmez is a remote Berber farming community famous for its carved dinosaur footprints, ancient granaries (agadirs), and vibrant green terraces. The valley remains relatively untouched by tourism and offers immersive homestay experiences with local Amazigh families.', icon: Heart },
  { name: 'Todra Gorge Villages', location: 'Eastern High Atlas', description: 'Villages like Tamtatouchte and Ait Hani sit at the edges of the spectacular Todra Gorge, where 300m limestone canyon walls tower overhead. Berber communities here maintain traditions of carpet weaving and date palm cultivation along the river oasis.', icon: MapPin },
  { name: 'Dades Valley Villages', location: 'Road of a Thousand Kasbahs', description: 'The Dades Valley between Ouarzazate and Tinghir is dotted with Amazigh villages built around crumbling kasbahs and rose gardens. The village of Kelaa M\'gouna hosts the annual Rose Festival each May. Traditional pisé (rammed earth) architecture blends seamlessly with the ochre landscape.', icon: Landmark },
  { name: 'Tafraout', location: 'Anti-Atlas', description: 'Nestled in an amphitheater of pink granite boulders, Tafraout is the cultural heart of the Ammeln Valley. The surrounding Amazigh villages are known for almond orchards, painted rocks by Belgian artist Jean Verame, and the February Almond Blossom Festival. The region produces distinctive Tashelhit silver jewelry.', icon: Star },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TRADITIONAL CRAFTS
   ═══════════════════════════════════════════════════════════════ */

const traditionalCrafts = [
  { name: 'Berber Rugs & Carpets', detail: 'Each Amazigh tribe produces rugs with distinctive patterns. Beni Ourain rugs (Middle Atlas) feature cream wool with bold geometric lines. Azilal rugs use vibrant colors and abstract designs. Boucherouite rugs recycle fabric scraps into colorful compositions. Women weave these on vertical looms, often encoding symbols of fertility, protection, and tribal identity into the patterns.', icon: Brush },
  { name: 'Pottery & Ceramics', detail: 'Riffian women in northern Morocco produce distinctive hand-shaped pottery without a wheel, decorated with geometric motifs in red, black, and white. These designs have remained virtually unchanged for centuries and carry symbolic meaning. The village of Tamgrout in the Draa Valley is famous for its green-glazed pottery fired in traditional kilns.', icon: Sparkles },
  { name: 'Silver Jewelry', detail: 'Amazigh silver jewelry features bold geometric designs, fibulae (cloak brooches), talismanic hands of Fatima, crescent moons, and triangular motifs symbolizing femininity. Unlike Arab goldsmiths who favor gold, Berber artisans traditionally worked in silver. Tiznit in southern Morocco is the historical capital of Berber silver craftsmanship.', icon: Star },
  { name: 'Leatherwork & Basketry', detail: 'Berber leatherworkers produce babouche slippers, bags, and poufs using traditional vegetable-tanned leather. Basketry is equally important: palm-leaf and doum-fiber baskets serve everyday purposes from bread storage to grain carrying. The souk of Taroudant is renowned for its Berber leather goods.', icon: HandHeart },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BERBER CUISINE
   ═══════════════════════════════════════════════════════════════ */

const berberCuisine = [
  { dish: 'Tagine', description: 'The iconic slow-cooked stew prepared in a conical clay pot. Berber tagines use seasonal vegetables, lamb or chicken, preserved lemons, olives, and aromatic spices like cumin, turmeric, and saffron. Each region has signature variations, from the almond-and-prune lamb tagine of Fes to the seven-vegetable tagine of the Atlas.', icon: Utensils },
  { dish: 'Couscous', description: 'Hand-rolled semolina grains steamed in a couscoussier over a bubbling vegetable and meat broth. Traditionally served on Fridays after mosque, communal couscous is the centerpiece of Berber hospitality. Families gather around a single large platter and eat with their right hands.', icon: Users },
  { dish: 'Amlou', description: 'A rich Amazigh spread made from crushed almonds, argan oil, and honey. Often called "Berber Nutella," amlou is served at breakfast with bread and is a specialty of the Souss region. The quality depends on locally pressed argan oil and hand-roasted almonds.', icon: Heart },
  { dish: 'Tafarnout (Berber Bread)', description: 'Flatbread traditionally baked in a clay oven (ferrah) or under hot embers and sand. Known as "khobz taferrant" in the mountains, this dense, chewy bread is the staple accompaniment to every Berber meal. In villages, women still bake it fresh each morning.', icon: Utensils },
  { dish: 'Mint Tea (Atay)', description: 'Moroccan mint tea is integral to Berber hospitality. Prepared with Chinese gunpowder green tea, fresh spearmint, and generous sugar, it is poured from a height to create a frothy top. Refusing tea in a Berber home is considered impolite. Three glasses are customary — the saying goes: "The first glass is gentle as life, the second is strong as love, the third is bitter as death."', icon: Heart },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MUSIC & FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const musicAndFestivals = [
  { name: 'Ahwash', type: 'Music & Dance', detail: 'A collective performance tradition from the High Atlas where men and women form opposing lines or circles, chanting poetry accompanied by rhythmic clapping and bendir frame drums. Ahwash performances mark weddings, harvests, and religious celebrations. The synchronized movements and call-and-response vocals create a mesmerizing communal experience.', icon: Music },
  { name: 'Ahidous', type: 'Music & Dance', detail: 'The Middle Atlas counterpart to Ahwash, Ahidous features mixed-gender lines swaying shoulder-to-shoulder while singing improvised poetry. The bendir drum drives the rhythm, and performances can last through the night. Ahidous songs often address themes of love, nature, and tribal pride.', icon: Music },
  { name: 'Gnawa Music', type: 'Spiritual Tradition', detail: 'A syncretic musical tradition blending sub-Saharan African, Amazigh, and Sufi Islamic elements. Gnawa ceremonies (lilas) use the guembri bass lute and qraqeb metal castanets to induce trance states for spiritual healing. The annual Gnaoua World Music Festival in Essaouira draws international audiences every June.', icon: Music },
  { name: 'Imilchil Marriage Festival', type: 'Festival (September)', detail: 'Held annually near Imilchil in the High Atlas, this moussem traditionally allowed young people from different tribes to meet and marry. Rooted in the legend of two lovers whose tears formed Lakes Isli and Tislit, the festival features traditional dress, music, dancing, and a vibrant market. While it has evolved into more of a cultural event, it remains a window into Amazigh communal life.', icon: Calendar },
  { name: 'Almond Blossom Festival', type: 'Festival (February)', detail: 'Held in Tafraout in the Anti-Atlas when the almond trees bloom, this festival celebrates the arrival of spring with Amazigh music, dance, and regional cuisine. The pink and white blossoms against the granite landscape create one of Morocco most photogenic scenes.', icon: Star },
  { name: 'Rose Festival', type: 'Festival (May)', detail: 'The Moussem des Roses in Kelaa M\'gouna in the Dades Valley celebrates the annual rose harvest. Berber communities gather for music, processions, the crowning of a Rose Queen, and the distillation of rosewater and rose oil. Over 4,000 tonnes of Damascene roses are harvested each year.', icon: Heart },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HOMESTAY & ETIQUETTE TIPS
   ═══════════════════════════════════════════════════════════════ */

const homestayTips = [
  'Always greet your hosts warmly. In Tamazight, "Azul" is a universal greeting. Placing your hand over your heart while greeting shows respect and sincerity.',
  'Accept offers of mint tea graciously. Tea is the cornerstone of Amazigh hospitality, and declining is considered impolite. Expect at least three glasses per sitting.',
  'Ask permission before photographing people, especially women and children. Some villagers may not want their photo taken, and this must be respected without argument.',
  'Dress modestly when visiting villages. Cover your shoulders and knees as a sign of respect. This applies to both men and women.',
  'Remove your shoes before entering a Berber home. You will typically be seated on floor cushions or low banquettes around a shared table.',
  'Eat with your right hand when sharing a communal meal. Bread replaces utensils in traditional Berber dining. Tear a piece and use it to scoop food from the shared platter.',
  'Bring a small gift for your host family: tea, sugar, fresh fruit, or school supplies are all appreciated. Avoid giving money directly as it can feel transactional.',
  'Hire a local Amazigh guide rather than arriving unannounced. A guide ensures your visit benefits the community and helps bridge language and cultural gaps.',
  'Learn a few Tamazight phrases: "Barakallahufik" (thank you/bless you), "Is tskert awal s Tamazight?" (Do you speak Tamazight?), and "Manzakin?" (How are you?).',
  'Respect the pace of village life. Mountain communities operate on a different rhythm. Be patient, be present, and enjoy the hospitality without rushing.',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BERBER HISTORY MILESTONES
   ═══════════════════════════════════════════════════════════════ */

const berberHistory = [
  {
    era: '10,000+ BC',
    title: 'Ancient Origins',
    detail: 'The Amazigh have inhabited North Africa since the Upper Paleolithic era. Rock carvings in the High Atlas and Saharan regions depict hunting scenes and spiritual symbols that archaeologists attribute to proto-Berber communities. These are among the oldest known artistic expressions in Africa.',
    icon: Globe,
  },
  {
    era: '3rd Century BC',
    title: 'Numidian Kingdoms',
    detail: 'Amazigh leaders established powerful kingdoms across North Africa. King Masinissa unified Numidia (modern Algeria and Tunisia) and allied with Rome against Carthage. These kingdoms demonstrated sophisticated political organization, agriculture, and military prowess long before Arab or European contact.',
    icon: Shield,
  },
  {
    era: '7th Century AD',
    title: 'Resistance to Arab Conquest',
    detail: 'When Arab armies arrived in the Maghreb, Amazigh resistance was fierce. The legendary Kahina (Dihya), a Berber queen, led one of the most significant campaigns against the Umayyad conquest. Though Islam was eventually adopted, the Amazigh retained their languages, customs, and distinct identity.',
    icon: Shield,
  },
  {
    era: '11th-13th Century',
    title: 'Berber Empires',
    detail: 'The Almoravid and Almohad dynasties — both Berber in origin — built empires spanning from Senegal to Spain. The Almoravids founded Marrakech, while the Almohads constructed the Koutoubia Mosque and Hassan Tower. These were among the most powerful states in the medieval world.',
    icon: Landmark,
  },
  {
    era: '1921-1926',
    title: 'The Rif Republic',
    detail: 'Abd el-Krim, a Riffian Berber leader, established the short-lived Republic of the Rif and inflicted devastating defeats on Spanish colonial forces. His guerrilla tactics influenced anti-colonial movements worldwide, including Ho Chi Minh and Che Guevara.',
    icon: Star,
  },
  {
    era: '2011',
    title: 'Constitutional Recognition',
    detail: 'The new Moroccan constitution officially recognized Tamazight as a national language alongside Arabic, a landmark victory for the Amazigh cultural movement. IRCAM (Royal Institute of Amazigh Culture) continues to promote Amazigh language education, media, and cultural preservation.',
    icon: CheckCircle,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHERE TO BUY AUTHENTIC CRAFTS
   ═══════════════════════════════════════════════════════════════ */

const craftMarkets = [
  { name: 'Ensemble Artisanal (Multiple Cities)', detail: 'Government-run craft cooperatives found in Marrakech, Fes, Ouarzazate, and other cities. Prices are fixed (no haggling), quality is guaranteed, and artisans receive fair wages. An excellent place to understand fair pricing before visiting the souks.', icon: CheckCircle },
  { name: 'Cooperative Feminine (Atlas Villages)', detail: 'Women-run weaving cooperatives in villages like Ait Khebbach, Tamegroute, and throughout the High Atlas produce authentic Berber rugs and textiles. Buying directly from cooperatives ensures the maximum benefit goes to the women weavers.', icon: HandHeart },
  { name: 'Tiznit Silver Souk', detail: 'The historic silver souk in Tiznit, southern Morocco, is the traditional center of Amazigh silver jewelry making. Artisans in tiny workshops produce fibulae, rings, bracelets, and talismanic pendants using techniques passed down through generations.', icon: Star },
  { name: 'Souk el-Had, Agadir', detail: 'One of the largest markets in North Africa with over 3,000 stalls. The craft sections feature Tashelhit Berber goods including argan oil, amlou, woven baskets, embroidered textiles, and leather goods from the Souss region at local prices.', icon: MapPin },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: AMAZIGH IDENTITY IN MODERN MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const modernAmazighIdentity = [
  { title: 'IRCAM & Language Policy', detail: 'The Royal Institute of Amazigh Culture (IRCAM), established in 2001, develops standardized Tamazight for education, media, and public life. Tamazight is now taught in primary schools, broadcast on the 8th national TV channel (Tamazight TV), and used in parliamentary proceedings. Street signs in major cities display both Arabic and Tifinagh script.', icon: BookOpen },
  { title: 'Amazigh New Year (Yennayer)', detail: 'Celebrated on January 13, Yennayer marks the Amazigh agricultural new year. In 2023, Morocco officially recognized Yennayer as a national holiday, a historic step acknowledging Amazigh heritage at the state level. Families celebrate with traditional dishes like tagine, couscous with seven vegetables, and dried fruits.', icon: Calendar },
  { title: 'Contemporary Amazigh Art', detail: 'A new generation of Amazigh artists is blending traditional motifs with contemporary media. Painters, musicians, filmmakers, and fashion designers draw on Berber geometric patterns, Tifinagh script, and ancestral symbolism to create works that speak to both heritage and modernity. Galleries in Marrakech and Casablanca increasingly showcase Amazigh-inspired contemporary art.', icon: Sparkles },
  { title: 'Amazigh Flag & Symbols', detail: 'The Amazigh flag features horizontal stripes of blue (sea), green (mountains), and yellow (desert) with a red Tifinagh "aza" (free person) symbol at the center. Widely displayed at cultural events and protests, the flag has become a powerful symbol of pan-Amazigh identity across North Africa and the diaspora.', icon: Globe },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/berber-culture',
    title: 'Berber Culture Overview',
    description: 'A focused look at Amazigh traditions, identity, and the cultural heritage that has shaped Morocco for millennia.',
    icon: Users,
  },
  {
    href: '/culture',
    title: 'Moroccan Culture Guide',
    description: 'Deep dive into Moroccan traditions, festivals, arts, music, and the rich cultural mosaic of Arab, Amazigh, and African influences.',
    icon: Globe,
  },
  {
    href: '/atlas-mountains',
    title: 'Atlas Mountains Guide',
    description: 'Explore the High Atlas, Middle Atlas, and Anti-Atlas ranges: trekking routes, mountain villages, and outdoor adventures.',
    icon: Mountain,
  },
  {
    href: '/morocco-atlas-guide',
    title: 'Atlas Mountains Travel Guide',
    description: 'Practical tips for visiting the Atlas Mountains including transport, accommodation, best seasons, and trekking logistics.',
    icon: Compass,
  },
  {
    href: '/morocco-history-guide',
    title: 'History of Morocco Guide',
    description: 'From prehistoric origins to the modern kingdom: 3,000 years of dynasties, conquests, and the sites that tell Morocco story.',
    icon: BookOpen,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoBerberGuidePage() {
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
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Berber Culture Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Users className="w-4 h-4" />
            Culture &amp; Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Berber Culture Morocco
            <br className="hidden md:block" /> Complete Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Discover the Amazigh people &mdash; Morocco&apos;s indigenous inhabitants, their languages,
            villages, crafts, cuisine, music, and how to experience their extraordinary culture respectfully.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Free People of North Africa
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Long before the Arab conquest, long before the Romans built Volubilis, the Amazigh
                &mdash; the &ldquo;free people&rdquo; &mdash; inhabited the mountains, valleys, and
                deserts of North Africa. Known to the outside world as Berbers (from the Greek
                &ldquo;barbaroi&rdquo;), the Amazigh are Morocco&apos;s indigenous population, and
                their culture is the bedrock upon which the kingdom was built.
              </p>
              <p>
                Today, approximately 40% of Moroccans identify as Amazigh, and their influence
                permeates every aspect of Moroccan life: from the tagines simmering in every kitchen
                to the geometric patterns adorning every mosque, from the haunting rhythms of Gnawa
                music to the snow-capped villages of the High Atlas where ancient traditions endure.
                The 2011 constitution officially recognized Tamazight as a national language, and the
                Tifinagh script now appears on banknotes, street signs, and government buildings.
              </p>
              <p>
                For travelers, engaging with Amazigh culture is one of Morocco&apos;s most
                rewarding experiences. Whether you share mint tea with a mountain family, watch women
                weave a Beni Ourain rug on a centuries-old loom, or lose yourself in the trance rhythms
                of an Ahwash performance under the stars, you are connecting with a civilization that
                has thrived here for millennia.
              </p>
              <p>
                This guide covers everything you need to know: who the Amazigh are and how their
                identity has evolved, the three main Tamazight languages and the revived Tifinagh
                script, the best Berber villages to visit across the Atlas Mountains, traditional
                crafts from hand-woven rugs to silver jewelry, hearty mountain cuisine, vibrant
                music and dance traditions, annual festivals, and practical advice for homestay
                experiences and cultural etiquette.
              </p>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  A Note on Terminology
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  The word &ldquo;Berber&rdquo; comes from the Greek &ldquo;barbaros&rdquo; (foreigner) and
                  was applied by outsiders. The people themselves use &ldquo;Amazigh&rdquo; (plural: Imazighen),
                  meaning &ldquo;free people.&rdquo; Both terms are used in this guide for SEO accessibility,
                  but &ldquo;Amazigh&rdquo; is the preferred and respectful term. When speaking with locals,
                  using &ldquo;Amazigh&rdquo; demonstrates cultural awareness and is always appreciated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Culture at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential facts about the Berber people and their place in modern Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Population', value: '~40%', detail: 'Of Moroccans identify as Amazigh', icon: Users },
              { label: 'Languages', value: '3 Main Varieties', detail: 'Tarifit, Tamazight, Tashelhit', icon: Languages },
              { label: 'Official Status', value: 'Since 2011', detail: 'Tamazight is a constitutional official language', icon: Shield },
              { label: 'Script', value: 'Tifinagh', detail: 'Ancient alphabet revived and taught in schools', icon: BookOpen },
            ].map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <FactIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {fact.value}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{fact.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{fact.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Berber History Timeline ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh History: From Ancient Origins to Modern Recognition
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key milestones in the long history of the Berber people and their fight for cultural recognition.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {berberHistory.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.era} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.title}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {item.era}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Amazigh Languages & Tifinagh ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Languages className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Languages &amp; the Tifinagh Script
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three living language traditions and an ancient alphabet experiencing a modern revival.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {amazighLanguages.map((lang) => {
              const LangIcon = lang.icon;
              return (
                <div key={lang.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <LangIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {lang.name}
                      </h3>
                      <p className="text-xs font-semibold text-[var(--color-gold)]">{lang.speakers}</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3 inline-block">
                    {lang.region}
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{lang.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  The Tifinagh Revival
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Tifinagh traces its roots to the ancient Libyan script used by Numidians over 2,000 years ago.
                  After centuries of decline, Amazigh cultural movements revived the alphabet in the 20th century.
                  In 2003, Morocco&apos;s Royal Institute of Amazigh Culture (IRCAM) standardized Neo-Tifinagh,
                  and it is now visible on banknotes, government buildings, and road signs across the kingdom.
                  The script&apos;s geometric beauty &mdash; circles, lines, triangles, and dots &mdash; has also
                  inspired contemporary Moroccan art and design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Berber Villages to Visit ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Berber Villages to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Authentic Amazigh communities in the Atlas Mountains and beyond that welcome respectful visitors.
          </p>

          <div className="space-y-4">
            {berberVillages.map((village) => {
              const VillageIcon = village.icon;
              return (
                <div key={village.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <VillageIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {village.name}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {village.location}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{village.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Best Time to Visit Berber Villages
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Spring (April&ndash;May) and autumn (September&ndash;October) offer the most comfortable
                  conditions for visiting Atlas Mountain villages. Summers can be hot in lower valleys, while
                  winters bring snow to passes above 2,000m. The Imilchil Marriage Festival (September) and
                  the Almond Blossom Festival in Tafraout (February) are excellent reasons to time your visit
                  around a cultural event. Always check road conditions in winter, as mountain passes may close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Traditional Crafts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Brush className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Amazigh Crafts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Centuries-old artisan traditions that encode Berber identity, spirituality, and tribal heritage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traditionalCrafts.map((craft) => {
              const CraftIcon = craft.icon;
              return (
                <div key={craft.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CraftIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {craft.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{craft.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Where to Buy Authentic Crafts ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy Authentic Berber Crafts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Trusted markets and cooperatives where your purchase directly supports Amazigh artisans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {craftMarkets.map((market) => {
              const MarketIcon = market.icon;
              return (
                <div key={market.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <MarketIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {market.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{market.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Berber Cuisine ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Berber Cuisine
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Hearty, seasonal dishes rooted in the land &mdash; the flavors that define Amazigh hospitality.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {berberCuisine.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.dish} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.dish}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Music & Festivals ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Music &amp; Festivals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the trance rhythms of Gnawa to the communal dances of the Atlas &mdash; Amazigh musical heritage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {musicAndFestivals.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-[var(--color-gold)]">{item.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Homestay & Etiquette Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Homestay Experiences &amp; Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to visit Amazigh communities respectfully and make the most of your cultural immersion.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {homestayTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Responsible Tourism in Berber Communities
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  The best way to ensure your visit benefits the community is to book through locally
                  owned guesthouses and hire Amazigh guides from the village itself. This keeps tourism
                  revenue within the community rather than flowing to external tour operators. Several
                  organizations, including the Imlil-based Association Bassins d&apos;Imlil, work to
                  develop sustainable, community-led tourism that preserves traditions while improving
                  local livelihoods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Amazigh Identity in Modern Morocco ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amazigh Identity in Modern Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How Berber culture is being celebrated, preserved, and revitalized in contemporary Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modernAmazighIdentity.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about Berber culture and visiting Amazigh communities in Morocco.
          </p>

          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Morocco Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue exploring Moroccan heritage, mountains, and culture with these essential guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="group">
                  <div className="card-moroccan p-5 h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors mt-2">
                        {guide.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{guide.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                      Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <Users className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Experience the Living Culture of the Amazigh
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            From the snow-capped peaks of the High Atlas to the rose-scented valleys of the Dades,
            from the trance rhythms of Gnawa to the quiet hospitality of a mountain homestay &mdash;
            Berber culture is not a museum exhibit. It is alive, vibrant, and waiting to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/berber-culture"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Explore Berber Culture
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/atlas-mountains"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              Atlas Mountains Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3 h-3 inline mr-1" />
            Cultural details reflect widely accepted scholarship as of March 2026.
            Village accessibility and homestay availability may vary by season. Seasonal pricing can vary.
            Always arrange visits through local guides or community associations.
          </p>
        </div>
      </section>
    </>
  );
}

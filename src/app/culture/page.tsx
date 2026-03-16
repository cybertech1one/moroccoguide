import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Moon,
  Mountain,
  BookOpen,
  Building2,
  Flower2,
  Star,
  Palette,
  Music,
  Drum,
  CalendarDays,
  ThumbsUp,
  ThumbsDown,
  ArrowRight,
  Users,
  Compass,
  Film,
  Shirt,
  Gem,
  Mic,
  Theater,
  Sparkles,
  Heart,
  Globe,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Moroccan Culture & Traditions | CityGuide',
  description:
    'Explore the rich cultural heritage of Morocco. Discover Islamic traditions, Berber heritage, Andalusian influences, traditional arts and crafts, music, festivals, clothing, literature, cinema, and cultural experiences for visitors.',
  keywords: [
    'Moroccan culture',
    'Morocco traditions',
    'Berber heritage',
    'Moroccan arts and crafts',
    'zellige tilework',
    'Moroccan music',
    'Gnaoua',
    'Moroccan festivals',
    'Morocco etiquette',
    'Islamic culture Morocco',
    'Moroccan calligraphy',
    'Moroccan carpet weaving',
    'Moroccan clothing',
    'djellaba',
    'kaftan',
    'Moroccan literature',
    'Moroccan cinema',
    'Gnawa music',
    'Chaabi music',
    'Berber jewelry',
    'Halqa storytelling',
    'Moroccan family life',
  ],
  openGraph: {
    title: 'Moroccan Culture & Traditions - CityGuide',
    description:
      'Discover the vibrant tapestry of Moroccan culture, from ancient Berber traditions and Islamic art to Gnaoua music, traditional clothing, literature, and living craftsmanship.',
    url: 'https://citytoursmorocco.com/culture',
    images: [
      {
        url: '/images/hero-berber-culture.webp',
        width: 1200,
        height: 630,
        alt: 'Intricate Moroccan zellige tilework in vivid geometric patterns',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Culture & Traditions | CityGuide',
    description:
      'Berber heritage, Islamic art, Gnaoua music, zellige tilework, traditional clothing, and cultural experiences in Morocco.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/culture' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://citytoursmorocco.com/culture',
  name: 'Moroccan Culture & Traditions',
  description:
    'Comprehensive guide to Moroccan culture covering Islamic heritage, Berber traditions, arts and crafts, music, traditional clothing, literature, cinema, festivals, and cultural experiences for visitors.',
  url: 'https://citytoursmorocco.com/culture',
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
      { '@type': 'ListItem', position: 2, name: 'Culture & Traditions', item: 'https://citytoursmorocco.com/culture' },
    ],
  },
};

/* ===================================================================
   CULTURAL PILLARS DATA
   =================================================================== */

const culturalPillars = [
  {
    icon: Moon,
    title: 'Islam & Spirituality',
    description:
      'Islam is the cornerstone of Moroccan identity. The melodious call to prayer echoes across cities five times daily from thousands of mosques, the most iconic being the Hassan II Mosque in Casablanca. Ramadan transforms the country into a month of communal fasting, prayer, and celebration, while Sufi zawiyas (shrines) dot the landscape as centers of spiritual devotion and community gathering.',
  },
  {
    icon: Mountain,
    title: 'Berber / Amazigh Heritage',
    description:
      'The Amazigh (Berber) people are the original inhabitants of North Africa, with a presence in Morocco dating back thousands of years. Their ancient traditions endure in the Atlas Mountains and the Sahara, expressed through the Tifinagh script, vibrant festivals like Imilchil&apos;s marriage moussem, distinctive architecture of kasbahs and ksour, and a deep connection to the land that has survived centuries of change.',
  },
  {
    icon: BookOpen,
    title: 'Arab Influence',
    description:
      'The Arab conquest of the 7th century brought Islam, the Arabic language, and a profound artistic tradition to Morocco. Arabic calligraphy adorns mosques, madrasas, and public spaces as a sacred art form. Andalusian music, Arabic poetry, and the rich oral storytelling tradition of the halqa (street performers) in Jemaa el-Fnaa remain vibrant pillars of Moroccan cultural life.',
  },
  {
    icon: Building2,
    title: 'French Colonial Legacy',
    description:
      'The French Protectorate (1912-1956) left an indelible mark on Morocco. French remains widely spoken alongside Arabic and Amazigh. The ville nouvelle districts of Casablanca, Rabat, and other cities showcase Art Deco and Modernist architecture. French-influenced patisseries, bistro culture, and a tradition of fine dining coexist seamlessly with traditional Moroccan culinary traditions.',
  },
  {
    icon: Flower2,
    title: 'Andalusian Heritage',
    description:
      'When the Moors were expelled from Spain, they brought a refined Andalusian culture to Moroccan cities, particularly Fes, Tetouan, and Chefchaouen. This legacy lives on in the riad courtyard gardens with their fountains and orange trees, the haunting melodies of Andalusian classical music, the delicate art of pastilla-making, and the geometric splendor of zellij tilework.',
  },
  {
    icon: Globe,
    title: 'Sub-Saharan African Heritage',
    description:
      'Morocco&apos;s connections to West and Sub-Saharan Africa run deep, forged over centuries through trans-Saharan trade routes. This influence is most visibly celebrated in Gnawa music, which originated among the descendants of enslaved West Africans and has become one of Morocco&apos;s most recognized cultural treasures. The vibrant colors, rhythms, and spiritual practices of Sub-Saharan Africa are woven into the fabric of Moroccan culture, from the indigo-dyed robes of Saharan traders to the culinary spice traditions of the south.',
  },
  {
    icon: Star,
    title: 'Jewish Heritage',
    description:
      'Morocco&apos;s Jewish community, one of the oldest in the world, has coexisted with Muslims for over 2,000 years. The mellahs (Jewish quarters) of Fes, Marrakech, and Essaouira contain synagogues, cemeteries, and historic homes that testify to this shared heritage. The Museum of Moroccan Judaism in Casablanca is the only Jewish museum in the Arab world, and annual pilgrimages to saints&apos; tombs continue to this day.',
  },
];

/* ===================================================================
   RELIGIOUS LIFE
   =================================================================== */

const religiousLife = [
  {
    title: 'Islam in Daily Life',
    description:
      'Morocco is a Sunni Muslim country following the Maliki school of jurisprudence. Islam permeates daily life, shaping greetings ("Salam alaykum"), meal rituals ("Bismillah" before eating, "Hamdullah" after), business practices, family law, and the weekly rhythm centered on Friday communal prayer. The King holds the title Amir al-Mu\'minin (Commander of the Faithful), positioning the monarchy as a religious as well as political institution. Morocco practices a moderate, tolerant form of Islam that embraces Sufi mysticism and venerates local saints.',
  },
  {
    title: 'Mosques & Sacred Architecture',
    description:
      'Morocco is home to some of the world\'s most stunning mosques. The Koutoubia in Marrakech, the Hassan Tower in Rabat, and the Kairaouine in Fes (founded in 859 CE and often cited as the world\'s oldest university) represent pinnacles of Islamic architecture. The Hassan II Mosque in Casablanca, completed in 1993, is the largest mosque in Africa and one of the few in Morocco open to non-Muslim visitors. Every neighborhood has its mosque, and the minaret is the defining feature of every Moroccan skyline.',
  },
  {
    title: 'The Call to Prayer',
    description:
      'Five times each day, the adhan rings out from mosque minarets across Morocco: at dawn (Fajr), midday (Dhuhr), afternoon (Asr), sunset (Maghrib), and nightfall (Isha). The adhan is chanted live by a muezzin and is one of the most evocative sounds of Moroccan life. Many visitors find it hauntingly beautiful, especially the dawn call that breaks the silence of sleeping cities. During the call, it is respectful to lower your voice and refrain from loud music.',
  },
  {
    title: 'Ramadan',
    description:
      'Ramadan, the ninth month of the Islamic calendar, is the most significant spiritual period in Moroccan life. Muslims fast from sunrise to sunset, abstaining from food, drink, and smoking. The country\'s rhythm transforms: days are quieter, businesses keep shorter hours, and the pace slows. Then, as the cannon fires at sunset, Morocco erupts with life. Families gather for iftar (the breaking of the fast) around tables laden with harira soup, dates, chebakia pastries, and fresh juices. The evenings become festive, social, and joyful, with streets bustling past midnight.',
  },
  {
    title: 'Sufi Traditions & Moussems',
    description:
      'Morocco has a deep Sufi tradition. Zawiyas (Sufi lodges) across the country serve as centers for spiritual practice, education, and community gathering. The veneration of local saints (marabouts) is a distinctly Moroccan form of devotion, and their green- or white-domed tombs dot the landscape. Moussems are annual pilgrimages and festivals held at these shrines, combining religious devotion with music, feasting, horsemanship (fantasia), and trade. The Moussem of Moulay Idriss in Zerhoun and the Moussem of Tan-Tan are among the most renowned.',
  },
];

/* ===================================================================
   FAMILY & SOCIAL STRUCTURE
   =================================================================== */

const familySocial = [
  {
    title: 'The Centrality of Family',
    description:
      'The family is the bedrock of Moroccan society. Extended families often live together or in close proximity, with grandparents, aunts, uncles, and cousins forming a tight-knit support network. Elders are deeply respected and consulted on important decisions. Family loyalty takes precedence over individual ambition, and maintaining family honor is a core value. Friday couscous lunch is a sacred family gathering that brings multiple generations together around a single communal dish.',
  },
  {
    title: 'Hospitality (Diyafa)',
    description:
      'Moroccan hospitality is legendary and deeply codified. Guests are considered a blessing, and hosts will go to extraordinary lengths to provide food, tea, and comfort. Refusing hospitality is a serious social faux pas. A "quick tea" can easily become a three-hour feast. The concept of diyafa (hospitality) is both a social obligation and a genuine expression of warmth. Visitors to Morocco frequently cite the generosity and kindness of ordinary Moroccans as the most memorable aspect of their trip.',
  },
  {
    title: 'Gender & Generational Change',
    description:
      'Moroccan society is undergoing rapid transformation. In major cities like Casablanca and Rabat, women work in every profession, from banking to parliament. The 2004 Moudawana (family code) reform granted women significantly expanded rights in marriage, divorce, and child custody. However, gender roles in rural areas remain more traditional. Younger Moroccans are increasingly connected to global culture through social media, creating a dynamic tension between tradition and modernity that defines contemporary Moroccan society.',
  },
  {
    title: 'Community & Neighborhood Life',
    description:
      'The derb (neighborhood alley) in the medina is a microcosm of Moroccan social life. Neighbors know each other intimately, share celebrations and sorrows, and maintain an informal system of mutual aid. The hammam (public bath), the local mosque, and the neighborhood cafe are the three pillars of community life. In rural areas, the jmaa (village assembly) makes collective decisions about land use, water rights, and community projects. This communal spirit extends to travelers, who are often warmly absorbed into local life.',
  },
  {
    title: 'Celebrations & Milestones',
    description:
      'Weddings, births, and religious holidays are celebrated with enormous communal joy. A Moroccan wedding can last three to seven days and involve hundreds of guests, elaborate clothing changes for the bride, live music, feasting, and the ritual of the amariya (bridal palanquin). The birth of a child is marked by the aqiqa ceremony on the seventh day. Circumcision celebrations can rival weddings in their scale. Eid al-Fitr and Eid al-Adha are the two great religious holidays, bringing families together from across the country.',
  },
];

/* ===================================================================
   ARTS & CRAFTS DATA
   =================================================================== */

const artsCrafts = [
  {
    name: 'Zellige (Tilework)',
    image: '/images/detail-zellige-mosaic.webp',
    description:
      'Hand-cut geometric mosaic tiles assembled into dazzling patterns that adorn mosques, palaces, fountains, and homes. Each tiny piece is individually chiseled from glazed terracotta, then fitted together like a jigsaw puzzle. The art originated in 10th-century Fes and remains a hallmark of Moroccan architecture. A single square meter of zellige can contain over 1,000 individual pieces.',
  },
  {
    name: 'Tadelakt (Plasterwork)',
    image: '/images/hero-hammam-interior.webp',
    description:
      'A waterproof lime plaster technique unique to Morocco, used for centuries in hammams, riads, and palaces. Polished with river stones and treated with olive oil soap, tadelakt produces a luminous, marble-like finish in rich earth tones. Marrakech is the historic center of this craft.',
  },
  {
    name: 'Carpet Weaving',
    image: '/images/art-berber-carpet-weaving.webp',
    description:
      'Moroccan carpets are world-renowned, ranging from the thick, plush pile rugs of the Middle Atlas to the flat-woven kilims of the High Atlas. Each tribal group has distinctive motifs and color palettes. Berber women weave stories, blessings, and protective symbols into every knot, making each carpet a unique work of art.',
  },
  {
    name: 'Leather Work',
    image: '/images/card-leather.webp',
    description:
      'The tanneries of Fes, dating back to the 9th century, are among the oldest in the world. Using traditional methods with natural dyes derived from saffron, poppy, indigo, and mint, artisans produce the supple leather used for babouches (slippers), bags, poufs, and bookbinding that Morocco is famous for.',
  },
  {
    name: 'Pottery & Ceramics',
    image: '/images/photo-ceramics-pottery.webp',
    description:
      'Each Moroccan city has its own pottery tradition. Fes is known for its blue-and-white ceramics, Safi for its multicolored glazed ware, and Tamegroute for its distinctive green pottery. From ornate tagine pots to intricately painted plates, Moroccan ceramics blend function with breathtaking artistry.',
  },
  {
    name: 'Metalwork',
    image: '/images/hero-souk-lamps.webp',
    description:
      'Moroccan metalworkers hammer, engrave, and pierce brass, copper, and silver into lanterns, tea sets, trays, and door knockers. The rhythmic clanging of hammers fills the metalworking souks of Marrakech and Fes, where artisans create the iconic pierced metal lanterns that cast mesmerizing shadow patterns.',
  },
  {
    name: 'Wood Carving',
    image: '/images/art-berber-carpet-weaving.webp',
    description:
      'Cedarwood and thuya burl wood are the prized materials for Moroccan woodworkers. Essaouira is the center for aromatic thuya marquetry, while Fes artisans carve elaborate cedar screens, doors, and furniture. The muqarnas (honeycomb vaulting) and mashrabiya (lattice screens) in mosques and palaces represent the pinnacle of the craft.',
  },
  {
    name: 'Calligraphy',
    image: '/images/art-moroccan-calligraphy.webp',
    description:
      'Arabic calligraphy is revered in Morocco as the highest art form, inseparable from the spiritual beauty of the Quran. The Maghrebi script style is uniquely Moroccan, with sweeping curves and distinctive letter forms. Calligraphy adorns mosque walls, madrasa interiors, coins, and official documents, and modern artists continue to push its boundaries.',
  },
];

/* ===================================================================
   TRADITIONAL CLOTHING
   =================================================================== */

const traditionalClothing = [
  {
    name: 'Djellaba',
    description:
      'The djellaba is Morocco\'s iconic outer garment, worn by both men and women in daily life. This long, loose-fitting robe with a pointed hood (qob) is made from wool in winter and cotton or synthetic fabric in summer. Men\'s djellabas tend to be in earth tones (brown, gray, cream), while women\'s come in a vibrant spectrum of colors. The djellaba is simultaneously practical (protection from sun and cold), modest (covering the body fully), and elegant. Seeing a sea of djellabas in a medina is one of the defining visual experiences of Morocco.',
  },
  {
    name: 'Kaftan & Takchita',
    description:
      'The kaftan is Morocco\'s formal dress for women, worn at weddings, religious celebrations, and official occasions. Made from sumptuous fabrics (silk, brocade, velvet) and adorned with elaborate embroidery, beading, and sfifa (braided trim), a quality kaftan can take months to make and represents one of Morocco\'s highest textile arts. The takchita is a two-piece variant: an under-dress topped by a sheer, heavily embroidered over-robe cinched with a wide belt (mdamma). Moroccan women may change kaftans multiple times during a wedding celebration, each one more spectacular than the last.',
  },
  {
    name: 'Babouche (Slippers)',
    description:
      'These soft, backless leather slippers are ubiquitous in Morocco. Yellow babouches are the traditional choice for men, while women\'s come in every color and are often embellished with embroidery, sequins, or metallic thread. Babouches are designed to be slipped on and off easily, essential in a culture where shoes are removed before entering homes and mosques. The leather is tanned in traditional tanneries and the slippers are handstitched in the souks. Every visitor to Morocco brings home at least one pair.',
  },
  {
    name: 'Berber Jewelry',
    description:
      'Amazigh jewelry is among the most distinctive in the world. Crafted primarily in silver (gold being associated with urban Arab culture), Berber jewelry features bold geometric designs, colored enamel, amber, coral, and amazonite stones. Each piece carries symbolic meaning: fibulas (tizerzai) pin garments and represent femininity and protection, headpieces mark tribal identity, and hand-of-Fatima pendants ward off the evil eye. The most elaborate pieces come from the Anti-Atlas, Draa Valley, and Rif regions. Antique Berber jewelry is highly sought after by collectors worldwide.',
  },
  {
    name: 'Selham (Burnous)',
    description:
      'The selham is a heavy, hooded cloak traditionally worn over the djellaba during cold weather or for formal occasions. Made from fine wool, often in white or cream, the selham is associated with dignity and authority. In the Rif Mountains and Middle Atlas, shepherds wear heavier versions made from coarse, undyed wool for protection against mountain weather. The garment has ancient roots and appears in descriptions of Moroccan dress dating back centuries.',
  },
  {
    name: 'Haik',
    description:
      'The haik is a large, draped cloth worn by women as an outer covering, historically common across Morocco and still seen in some regions, particularly in Essaouira and parts of the Sahara. White in northern cities and indigo-dyed among Saharan communities, the haik is wrapped around the body and held in place by hand, creating an elegant silhouette. Though less common today as younger women opt for modern styles, the haik remains a powerful symbol of traditional Moroccan femininity and modesty.',
  },
];

/* ===================================================================
   MUSIC & DANCE DATA
   =================================================================== */

const musicStyles = [
  {
    name: 'Gnawa',
    image: '/images/art-gnawa-music.webp',
    description:
      'A hypnotic fusion of Sub-Saharan African, Berber, and Sufi spiritual traditions, Gnawa music features the deep, resonant tones of the guembri (three-stringed bass lute), metal castanets called qraqeb, and call-and-response chanting. Originating from the descendants of enslaved West Africans, Gnawa music was historically used in spiritual healing ceremonies called lilas that could last all night. Recognized by UNESCO as Intangible Cultural Heritage in 2019, the annual Gnaoua World Music Festival in Essaouira has brought global recognition to this profound art form.',
  },
  {
    name: 'Andalusian Classical (Al-Ala)',
    image: '/images/art-gnawa-music.webp',
    description:
      'Also known as al-Ala, this refined musical tradition traces its roots to the courts of Moorish Spain. Performed by orchestras using traditional instruments including the oud, rabab, nay, and violin, Andalusian music follows complex modal systems called nubat. Fes and Tetouan are the principal centers of this tradition, where conservatories preserve the eleven surviving nubat that represent one of the great classical music traditions of the Islamic world. A complete nuba performance can last up to seven hours and moves through distinct rhythmic phases from meditative to ecstatic.',
  },
  {
    name: 'Chaabi',
    image: '/images/hero-jemaa-elfna-night.webp',
    description:
      'The popular music of Morocco, Chaabi (meaning "of the people") is the soundtrack to celebrations, weddings, and festivals across the country. Characterized by driving rhythms, accordion, banjo, and passionate vocals, Chaabi draws on the Moroccan dialect of Arabic (Darija) to tell stories of love, joy, and everyday life. The late Nass El Ghiwane, often called "the Rolling Stones of Africa," pioneered a socially conscious form of Chaabi that became the voice of a generation. Today, Chaabi remains the most accessible and widely loved musical form in Morocco.',
  },
  {
    name: 'Amazigh Music (Ahidous & Ahwash)',
    image: '/images/hero-berber-culture.webp',
    description:
      'Amazigh musical traditions are among the oldest in North Africa. Ahidous, from the Middle Atlas, features men and women standing shoulder to shoulder in rows, swaying and stamping in unison to the driving rhythms of bendirs (frame drums) and communal chanting. Ahwash, its southern counterpart from the High Atlas and Souss Valley, involves intricate call-and-response poetry, clapping, and group movement under moonlight. These communal performances are both artistic expression and social bonding ritual, reinforcing tribal identity and community ties during festivals, harvests, and celebrations.',
  },
  {
    name: 'Rai',
    image: '/images/art-gnawa-music.webp',
    description:
      'Though rai originated in Algeria, it has a passionate following in northeastern Morocco, particularly in Oujda and the Oriental region. This genre blends traditional North African melodies with Western pop, rock, and electronic elements. Rai lyrics often address love, freedom, and social issues in the language of everyday life. The genre crossed borders and gained international fame through artists like Cheb Khaled, and Moroccan rai musicians continue to innovate, fusing the genre with hip-hop, reggae, and electronic dance music.',
  },
  {
    name: 'Malhoun',
    description:
      'Malhoun is a poetic and musical art form that blends sophisticated Arabic verse with melodic compositions. Born in the artisan guilds of Meknes, Fes, and Marrakech, Malhoun poems address everything from divine love and moral philosophy to the beauty of craftsmanship and the joys of tea. Traditionally performed by small ensembles with oud, violin, and percussion, Malhoun is considered Morocco\'s literary music, bridging the worlds of poetry and song. UNESCO recognized it as part of Morocco\'s intangible cultural heritage.',
    image: '/images/photo-mint-tea-pouring.webp',
  },
];

/* ===================================================================
   LITERATURE & STORYTELLING
   =================================================================== */

const literatureData = [
  {
    title: 'Oral Tradition & the Halqa',
    description:
      'Morocco has one of the world\'s richest oral storytelling traditions. For centuries before widespread literacy, knowledge, history, and moral instruction were transmitted through spoken word. The halqa (circle) is the quintessential Moroccan performance space: a ring of spectators gathered around a storyteller, musician, or performer in a public square. Jemaa el-Fnaa in Marrakech is the most famous halqa site in the world, where poets, comedians, herbalists, and storytellers have drawn crowds for over a thousand years. UNESCO recognized the square\'s oral traditions as a Masterpiece of the Oral and Intangible Heritage of Humanity in 2001.',
  },
  {
    title: 'Classical Arabic Literature',
    description:
      'Morocco has produced distinguished figures in Arabic literature. Ibn Battuta (1304-1369), the great Tangier-born traveler, dictated one of history\'s most remarkable travel accounts, the Rihla, documenting his 75,000-mile journey across the Islamic world, China, and beyond. Al-Idrisi created one of the most advanced maps of the medieval world. Leo Africanus, born in Fes, wrote a groundbreaking description of Africa that shaped European understanding of the continent for centuries. The tradition of Arabic literary scholarship continues in Morocco\'s universities and literary salons.',
  },
  {
    title: 'Modern Moroccan Literature',
    description:
      'Contemporary Moroccan literature flourishes in Arabic, French, and Amazigh. Tahar Ben Jelloun, winner of the Prix Goncourt (France\'s most prestigious literary prize), writes novels exploring identity, immigration, and Moroccan society. Driss Chraibi\'s "The Simple Past" (1954) was a groundbreaking critique of patriarchal tradition. Fatema Mernissi\'s feminist scholarship on Islam and women\'s rights gained international recognition. Leila Slimani, a Franco-Moroccan novelist, won the Prix Goncourt in 2016. Writing in multiple languages remains a defining feature of Moroccan literary identity.',
  },
  {
    title: 'Poetry & Proverbs',
    description:
      'Poetry holds a place of supreme honor in Moroccan culture. From the classical qasida to Berber oral poetry and the sung verses of Malhoun, poetry permeates Moroccan life. Proverbs and sayings (amthal) are used constantly in daily conversation: "The guest is a gift from God," "Patience is the key to relief," and "A friend in the market is better than gold in the pocket" reflect deep cultural values. The poetic tradition spans from the sublime verse of medieval Andalusian courts to the street wisdom of Darija-language spoken word.',
  },
];

/* ===================================================================
   CINEMA
   =================================================================== */

const cinemaData = [
  {
    title: 'The Moroccan Film Industry',
    description:
      'Morocco has a vibrant domestic film industry supported by the Centre Cinematographique Marocain (CCM) and an annual national film festival in Tangier. Directors like Nabil Ayouch ("Horses of God," "Casablanca Beats"), Laila Marrakchi ("Marock"), and Faouzi Bensaidi push creative boundaries, addressing themes from urban poverty and radicalization to women\'s independence and the tension between tradition and modernity. The Marrakech International Film Festival, championed by King Mohammed VI, has become one of Africa\'s most prestigious cinema events, attracting global stars and directors.',
  },
  {
    title: 'International Filming Location',
    description:
      'Morocco\'s extraordinary landscapes, reliable sunshine, diverse architecture, and experienced local crews have made it one of the world\'s premier filming locations. Ouarzazate, known as the "Hollywood of Africa," is home to Atlas Studios, one of the largest film studios in the world. The nearby ksour and desert landscapes have served as backdrops for "Gladiator," "Game of Thrones," "Lawrence of Arabia," "The Mummy," "Kingdom of Heaven," and dozens of other major productions. Essaouira, Ait Benhaddou, Fes, and the Sahara dunes are all frequently seen on screen.',
  },
  {
    title: 'Documentary & Independent Film',
    description:
      'A new generation of Moroccan documentary filmmakers is gaining international recognition. Films exploring Gnawa culture, Amazigh identity, women\'s rights, migration, and urban transformation have screened at festivals from Cannes to Sundance. The rise of affordable digital filmmaking has democratized the industry, and Casablanca and Marrakech have become hubs for independent production companies and film schools. Morocco\'s documentary tradition provides an intimate window into a society in rapid transformation.',
  },
];

/* ===================================================================
   CULTURAL EXPERIENCES FOR TOURISTS
   =================================================================== */

const culturalExperiences = [
  {
    title: 'Moroccan Cooking Class',
    description:
      'Learn to prepare classic dishes like tagine, couscous, pastilla, and Moroccan salads alongside a local chef. Most classes include a trip to the market to select fresh ingredients, an education in Moroccan spices, and a communal meal around the dishes you\'ve prepared. Available in every major city, these classes are one of the most rewarding cultural experiences Morocco offers.',
    location: 'Available in Marrakech, Fes, Essaouira, Chefchaouen',
  },
  {
    title: 'Traditional Hammam Experience',
    description:
      'The hammam (public bathhouse) is a cornerstone of Moroccan social and physical well-being. A traditional hammam visit involves moving through rooms of increasing heat, followed by a vigorous scrub with a kessa (exfoliating glove) and black soap (savon beldi). The experience is both deeply cleansing and profoundly social. Local hammams cost as little as 10-20 MAD, while luxury spa hammams offer a more pampered experience. Separate sessions or facilities for men and women.',
    location: 'Every city and town has public and private hammams',
  },
  {
    title: 'Artisan Workshop Visits',
    description:
      'Visit the workshops of zellige tilecutters in Fes, leather tanners in the Chouara Tannery, thuya wood marquetry artists in Essaouira, or carpet weavers in the High Atlas. Many artisans welcome visitors and will demonstrate their techniques. Some offer hands-on workshops where you can try your hand at tilecutting, pottery painting, or weaving. These encounters provide context for the crafts you see in the souks and support artisan livelihoods directly.',
    location: 'Fes, Marrakech, Essaouira, Safi, Ouarzazate',
  },
  {
    title: 'Tea Ceremony & Home Visit',
    description:
      'Being invited into a Moroccan home for tea is one of travel\'s great privileges. Several tour operators and community tourism initiatives facilitate home visits with local families, where you can experience Moroccan hospitality, share stories, and learn about daily life over glasses of mint tea and homemade pastries. These encounters are often the most meaningful and memorable part of a Morocco trip.',
    location: 'Available through community tourism initiatives nationwide',
  },
  {
    title: 'Music & Performance',
    description:
      'Attend a Gnawa lila (all-night healing ceremony) in Essaouira or Marrakech, enjoy Andalusian classical music at a cultural center in Fes, or simply sit in Jemaa el-Fnaa as the evening halqa performers draw their circles. Annual festivals like the Gnaoua World Music Festival (Essaouira), the Fes Festival of World Sacred Music, and the Mawazine Festival (Rabat) offer world-class performances. Many riads and restaurants also feature live traditional music in the evenings.',
    location: 'Essaouira, Fes, Marrakech, Rabat',
  },
  {
    title: 'Calligraphy & Art Workshops',
    description:
      'Several cultural centers and artisans in Fes and Marrakech offer calligraphy workshops where you can learn the basics of Arabic script and the distinctive Maghrebi style. Longer workshops cover the preparation of traditional inks, reed pen cutting, and the meditative practice of writing. Henna art workshops, pottery painting in Safi, and zellige tilecutting classes offer additional creative immersion.',
    location: 'Fes, Marrakech, Safi',
  },
  {
    title: 'Desert Camps & Nomadic Culture',
    description:
      'Spend a night in a traditional Berber camp in the Sahara (Erg Chebbi near Merzouga or Erg Chigaga near M\'Hamid), ride camels across the dunes at sunset, dine under an impossibly starry sky, and listen to Berber drumming around the campfire. Many camps are operated by families from nomadic traditions who share stories of desert life. For a deeper experience, some operators offer multi-day treks visiting nomadic families in the desert interior.',
    location: 'Merzouga, M\'Hamid, Zagora',
  },
  {
    title: 'Festival Participation',
    description:
      'Morocco\'s calendar overflows with festivals. The Gnaoua World Music Festival (Essaouira, June), the Fes Festival of World Sacred Music (June), the Rose Festival (Kelaat M\'gouna, May), the Date Festival (Erfoud, October), and the Imilchil Marriage Festival (September) are among the most accessible to visitors. Attending a moussem or local festival in a smaller town offers an even more authentic experience of Moroccan communal celebration.',
    location: 'Various cities throughout the year',
  },
];

/* ===================================================================
   ETIQUETTE DO'S AND DON'TS
   =================================================================== */

const etiquetteDos = [
  'Dress modestly when visiting mosques, medinas, and rural areas. Cover shoulders and knees.',
  'Remove your shoes before entering someone&apos;s home or a mosque.',
  'Accept mint tea when offered &mdash; it is a sign of friendship and hospitality.',
  'Use your right hand for eating, greeting, and giving/receiving items.',
  'Learn a few words of Arabic or Amazigh &mdash; even "Salam" and "Shukran" are deeply appreciated.',
  'Ask permission before photographing people, especially women and in rural areas.',
  'Haggle respectfully in souks &mdash; it is expected and part of the cultural exchange.',
  'Show respect during the call to prayer and especially during Ramadan.',
];

const etiquetteDonts = [
  'Do not eat, drink, or smoke in public during Ramadan daylight hours.',
  'Do not enter mosques unless you are Muslim (except Hassan II Mosque and a few others).',
  'Do not point the soles of your feet at people or place bread upside down.',
  'Do not discuss religion or the monarchy in a critical or disrespectful manner.',
  'Avoid public displays of affection &mdash; Morocco is conservative in this regard.',
  'Do not refuse hospitality or food offered by a Moroccan host without a polite reason.',
  'Do not take photos of military installations, police, or official buildings.',
  'Avoid wearing revealing clothing in traditional neighborhoods and rural areas.',
];

/* ===================================================================
   PAGE COMPONENT (Server)
   =================================================================== */

export default function CulturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-berber-culture.webp"
            alt="Intricate Moroccan zellige tilework in vivid geometric patterns"
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
            <span className="text-white">Culture &amp; Traditions</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Heritage &amp; Identity
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Culture &amp; Traditions
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Discover the living tapestry of Moroccan culture &mdash; a vibrant blend of Berber, Arab, Andalusian,
              Sub-Saharan African, and French traditions that has evolved over millennia into something utterly unique.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco sits at one of the world&apos;s great cultural crossroads, a place where Africa, the Arab world,
              and Europe have mingled for millennia. The result is a civilization of extraordinary depth and
              richness &mdash; one that has absorbed wave after wave of influence while retaining a fierce and
              distinctive identity all its own. From the ancient Amazigh peoples who first inhabited this land to the
              Arab dynasties that built its imperial cities, from the Moors expelled from Andalusia to the French and
              Spanish colonial powers, from the traders of the Trans-Saharan caravan routes to the artisans of
              Andalusian courts, each chapter has added new threads to the Moroccan cultural tapestry.
            </p>
            <p>
              What makes Morocco truly remarkable is that these layers of heritage do not merely coexist &mdash; they
              have fused into something greater than the sum of their parts. You can hear it in the haunting strains of
              Gnawa music that blend Sub-Saharan rhythms with Sufi mysticism. You can see it in the zellige tilework
              that translates mathematical perfection into breathtaking beauty. You can taste it in a cuisine that
              marries the simplicity of Berber cooking with the sophistication of Andalusian palace kitchens. You can
              feel it in the warmth of a family inviting a stranger to share couscous on a Friday afternoon.
            </p>
            <p>
              For travelers, understanding Moroccan culture is the key to unlocking a deeper, more meaningful experience
              of this extraordinary country. Beyond the stunning landscapes and vibrant souks lies a society built on
              hospitality, spiritual devotion, artistic excellence, and a profound sense of community. This guide is
              your introduction to the cultural forces that have shaped Morocco and continue to define it today.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cultural Pillars ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Cultural Pillars of Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Seven foundational influences have shaped Moroccan identity over the centuries, each leaving an indelible
              mark on the nation&apos;s language, art, architecture, and way of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalPillars.map((pillar) => (
              <div key={pillar.title} className="card-moroccan p-6 md:p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <pillar.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Religious Life ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Moon className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Religious Life in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Islam shapes the rhythm of daily life in Morocco, from the five daily calls to prayer
              to the communal spirit of Ramadan. Understanding this spiritual foundation is essential
              to appreciating Moroccan culture.
            </p>
          </div>

          <div className="space-y-6">
            {religiousLife.map((item) => (
              <div key={item.title} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Family & Social Structure ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Family &amp; Social Structure
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The family is the foundation of Moroccan society. Understanding these social structures
              helps explain the warmth, generosity, and communal spirit that visitors encounter everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {familySocial.map((item) => (
              <div key={item.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Arts & Crafts ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Palette className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Traditional Arts &amp; Crafts
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is one of the world&apos;s great living workshops, where artisanal traditions passed down for
              centuries continue to thrive in bustling souks and quiet ateliers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artsCrafts.map((craft) => (
              <article key={craft.name} className="card-moroccan overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={craft.image}
                    alt={craft.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                    {craft.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {craft.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Traditional Clothing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Shirt className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Traditional Clothing &amp; Adornment
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Moroccan dress is an art form in itself &mdash; functional, beautiful, and laden with cultural meaning.
              From the everyday djellaba to the spectacular wedding kaftan, clothing tells a story of identity,
              occasion, and regional belonging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traditionalClothing.map((item) => (
              <div key={item.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Gem className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.name}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Music & Dance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Music className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Music &amp; Dance
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the trance-inducing rhythms of Gnawa to the refined melodies of Andalusian classical music,
              Morocco&apos;s musical heritage is as diverse as its people.
            </p>
          </div>

          <div className="space-y-8">
            {musicStyles.map((style, index) => (
              <div
                key={style.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={style.image}
                    alt={`${style.name} music performance`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <Drum className="w-5 h-5 text-[var(--color-primary)]" />
                    <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                      Musical Tradition
                    </span>
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {style.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Literature & Storytelling ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Literature &amp; Storytelling
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s literary tradition spans millennia, from the ancient oral traditions of Berber poets
              to the halqa storytellers of Jemaa el-Fnaa to Prix Goncourt-winning novelists of the modern era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {literatureData.map((item) => (
              <div key={item.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Mic className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cinema ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Film className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Moroccan Cinema
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the "Hollywood of Africa" in Ouarzazate to the Marrakech International Film Festival,
              Morocco has a thriving cinematic culture both as a filmmaking nation and as one of the world&apos;s
              most sought-after filming locations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cinemaData.map((item) => (
              <div key={item.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Theater className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Festivals & Celebrations ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <div className="inline-flex p-3 rounded-xl bg-white/10 mb-4">
            <CalendarDays className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Festivals &amp; Celebrations
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
            Morocco&apos;s calendar overflows with vibrant festivals that bring music, art, and tradition to life.
            From the Fes Festival of World Sacred Music to the Rose Festival of Kelaat M&apos;gouna, from the
            moussems (pilgrimages) honoring local saints to the exuberant celebrations of Eid al-Fitr and Eid al-Adha,
            there is always something extraordinary happening somewhere in Morocco.
          </p>
          <p className="text-white/70 mb-8">
            Explore our complete events calendar to plan your visit around Morocco&apos;s most memorable cultural experiences.
          </p>
          <Link
            href="/events"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
          >
            <CalendarDays className="w-4 h-4" /> View Events Calendar
          </Link>
        </div>
      </section>

      {/* ── Cultural Experiences for Tourists ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Cultural Experiences for Visitors
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s culture is not something you observe from a distance &mdash; it is something you participate in.
              These are the most rewarding ways to immerse yourself in Moroccan heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturalExperiences.map((item) => (
              <div key={item.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-3">
                  {item.description}
                </p>
                <p className="text-sm text-[var(--color-primary)] font-medium">
                  {item.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Etiquette Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Cultural Etiquette for Visitors
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A little cultural awareness goes a long way in Morocco. Follow these guidelines to show respect and
              connect more meaningfully with the people you meet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Do's */}
            <div className="card-moroccan p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2.5 rounded-xl bg-green-100">
                  <ThumbsUp className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Do&apos;s
                </h3>
              </div>
              <ul className="space-y-3">
                {etiquetteDos.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-[var(--text-secondary)] text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts */}
            <div className="card-moroccan p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2.5 rounded-xl bg-red-100">
                  <ThumbsDown className="w-5 h-5 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Don&apos;ts
                </h3>
              </div>
              <ul className="space-y-3">
                {etiquetteDonts.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-700 text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-[var(--text-secondary)] text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/etiquette"
              className="inline-flex items-center justify-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
            >
              Read the complete Etiquette Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Immerse Yourself in Moroccan Culture
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Experience Morocco&apos;s living heritage firsthand. Explore upcoming festivals, learn essential
            phrases, or connect with a certified local guide for a deeper cultural journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <CalendarDays className="w-4 h-4" /> Explore Events
            </Link>
            <Link
              href="/language"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Language Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Calendar,
  MapPin,
  Music,
  Film,
  Flower2,
  Star,
  Moon,
  Heart,
  Users,
  Globe,
  Ticket,
  Clock,
  Info,
  Car,
  BedDouble,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Mountain,
  Drumstick,
  Paintbrush,
  PenTool,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Guide to Morocco\'s 15 Best Festivals | In-Depth Profiles & Tips',
  description:
    'Deep-dive guides to Morocco\'s top 15 festivals. Gnaoua, Mawazine, Fes Sacred Music, Rose Festival, Marrakech Film Festival, Imilchil Marriage Festival, and more. History, practical tips, accommodation, transport, and what to expect.',
  keywords: [
    'Morocco festivals guide',
    'Gnaoua Festival guide',
    'Mawazine Festival guide',
    'Fes Sacred Music Festival',
    'Rose Festival Morocco',
    'Marrakech Film Festival',
    'Imilchil Marriage Festival',
    'Morocco cultural festivals',
    'Morocco music festivals guide',
    'Timitar Festival Agadir',
    'Tan-Tan Moussem UNESCO',
    'Cherry Festival Sefrou',
    'Morocco festival tips',
    'attend Morocco festivals',
  ],
  openGraph: {
    title: 'Complete Guide to Morocco\'s 15 Best Festivals - CityGuide',
    description:
      'In-depth profiles of Morocco\'s greatest festivals. Music, film, culture, religious celebrations, and traditional moussems with practical advice for attending each one.',
    url: 'https://cityguide.ma/festivals',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Moroccan festival with traditional musicians and dancers',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/festivals' },
};

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

interface Festival {
  id: string;
  name: string;
  location: string;
  region: string;
  month: string;
  monthNum: number;
  dates: string;
  category: 'Music' | 'Cultural' | 'Religious' | 'Film' | 'Traditional';
  founded: string;
  attendance: string;
  cost: string;
  description: string;
  history: string;
  whatToExpect: string;
  practicalInfo: {
    tickets: string;
    accommodation: string;
    transport: string;
    tips: string;
  };
  images: string[];
  icon: typeof Music;
  highlight?: boolean;
  mapPosition?: { label: string };
}

/* ═══════════════════════════════════════════════════════════════
   FESTIVAL DATA -- 15 DETAILED PROFILES
   ═══════════════════════════════════════════════════════════════ */

const festivals: Festival[] = [
  {
    id: 'gnaoua',
    name: 'Gnaoua World Music Festival',
    location: 'Essaouira',
    region: 'Atlantic Coast',
    month: 'June',
    monthNum: 6,
    dates: 'Late June (3-4 days)',
    category: 'Music',
    founded: '1998',
    attendance: '500,000+',
    cost: 'Free (all concerts)',
    description:
      'The crown jewel of Moroccan music festivals. Founded in 1998, the Gnaoua World Music Festival celebrates Gnaoua music, a spiritual art form rooted in sub-Saharan African traditions brought to Morocco by enslaved people centuries ago. Gnaoua master musicians (maallems) perform alongside international jazz, blues, and world music artists, creating extraordinary fusion collaborations on open-air stages overlooking the Atlantic Ocean. The festival has grown into one of Africa\'s most important cultural events, recognized by UNESCO as a vital force in preserving Gnaoua heritage. Each year, the festival selects a handful of maallems to headline evening concerts, pairing them with international artists for one-of-a-kind collaborative performances that rehearse for days and are never repeated. The result is a unique musical dialogue that bridges continents and centuries. The festival takes place across multiple stages in Essaouira\'s medina, along the ramparts, and at the port, transforming the entire fortified city into one vast open-air concert hall.',
    history:
      'Gnaoua music traces its origins to the spiritual practices of sub-Saharan Africans who were brought to Morocco as part of the trans-Saharan slave trade. Over centuries, their ritual music fused with Berber and Arab Sufi traditions, creating a unique art form centered on trance-inducing rhythms played on the guembri (a three-stringed bass lute), iron castanets (qraqeb), and call-and-response chanting. The festival was founded in 1998 by Neila Tazi and a group of Moroccan cultural entrepreneurs who recognized that Gnaoua music, while deeply revered in Morocco, was little known internationally. From its first edition, the festival\'s concept of pairing maallems with international musicians proved revolutionary. In 2019, Gnaoua music was inscribed on UNESCO\'s Representative List of the Intangible Cultural Heritage of Humanity, a recognition that the festival played a significant role in achieving.',
    whatToExpect:
      'Multiple stages throughout the medina and along the ramparts host free concerts from afternoon until late at night. Headline evening concerts draw enormous crowds and feature the unique fusion collaborations. During the day, intimate "lila" ceremonies (traditional all-night Gnaoua trance rituals) take place in private houses and small venues around the medina. Street performances erupt spontaneously everywhere. Art exhibitions, film screenings, and panel discussions complement the music program. The entire city transforms into one massive celebration, with restaurants and cafes packed, rooftop terraces alive with music, and the aroma of grilled sardines and Moroccan pastries filling the salt air.',
    practicalInfo: {
      tickets: 'All concerts are completely free. No tickets or passes required. Arrive early for the best spots at headline shows as crowds can be enormous.',
      accommodation: 'Book 2-3 months in advance. Essaouira fills completely during the festival. Riads in the medina offer the most atmospheric experience. Budget travelers can find hostels or camp at nearby sites. Expect prices to double or triple during festival dates.',
      transport: 'Essaouira is 2.5 hours from Marrakech by bus (Supratours or CTM) or private transfer. Many Marrakech accommodations organize day trips. The small airport has limited domestic flights. Book return transport in advance.',
      tips: 'Bring layers -- Essaouira is windy even in June. Comfortable shoes are essential for cobblestone streets. Carry a water bottle. Explore beyond the main stages for intimate performances. The port area and Moulay Hassan square are the best spots for people-watching between sets.',
    },
    images: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800',
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800',
    ],
    icon: Music,
    highlight: true,
    mapPosition: { label: 'Essaouira' },
  },
  {
    id: 'mawazine',
    name: 'Mawazine Festival',
    location: 'Rabat',
    region: 'Capital Region',
    month: 'June',
    monthNum: 6,
    dates: 'Mid-June (9 days)',
    category: 'Music',
    founded: '2001',
    attendance: '2,500,000+',
    cost: 'Mostly free (some VIP areas)',
    description:
      'One of the largest music festivals in the world by attendance, Mawazine routinely draws over 2.5 million visitors across nine extraordinary days in Morocco\'s capital city. The festival features two main stages -- OLM Souissi for international pop, rock, and hip-hop acts, and the Nahda stage for Arabic and Moroccan music superstars -- plus a string of smaller venues across Rabat hosting jazz, classical, world music, and emerging Moroccan talent. The scale is staggering: single headline concerts regularly attract crowds exceeding 200,000 people. Past headliners read like a who\'s-who of global music: Rihanna, Shakira, Stevie Wonder, Elton John, Christina Aguilera, Mariah Carey, David Guetta, and Whitney Houston have all graced the Mawazine stages. The festival is organized under the patronage of King Mohammed VI and represents Morocco\'s ambition to position itself as a global cultural capital. What makes Mawazine particularly remarkable is that approximately 90% of all concerts are completely free, making world-class entertainment accessible to millions of Moroccans.',
    history:
      'Mawazine (meaning "Rhythms" in Arabic) was founded in 2001 by the Maroc Cultures association, chaired by Mounir Majidi, a close advisor to King Mohammed VI. The festival was conceived as a vehicle for cultural diplomacy and urban renewal in Rabat, which had long played second fiddle to Casablanca and Marrakech in terms of cultural offerings. From modest beginnings, the festival grew rapidly, and by 2013 it was recognized by the International Festivals and Events Association as one of the biggest music festivals in the world. Mawazine has not been without controversy -- some have criticized the cost of booking international superstars in a developing country -- but its supporters point to the enormous free access it provides and its role in boosting Rabat\'s tourism economy and cultural prestige.',
    whatToExpect:
      'Massive headline concerts at OLM Souissi (international) and Nahda (Arabic) stages, plus smaller intimate venues across the city. The atmosphere is pure celebration, with families, young people, and international visitors mingling freely. Street food vendors line the routes between stages. The city buzzes with energy from early afternoon until late at night. Expect long waits for popular acts -- some fans arrive hours early to secure good positions.',
    practicalInfo: {
      tickets: 'Most concerts are free. Some VIP areas and certain premium stages may require passes, available through the official Mawazine website. Check the lineup and stage assignments in advance.',
      accommodation: 'Rabat has a good range of hotels, riads, and hostels. The city is less expensive than Marrakech. The Ville Nouvelle has modern hotels; the medina has character-filled riads. Book at least a month ahead for festival dates.',
      transport: 'Rabat is connected to Casablanca by the Al Boraq high-speed train (45 minutes). The tramway connects key festival venues. Taxis are abundant but surge during peak concert times. The Rabat-Sale airport has domestic and some international flights.',
      tips: 'Arrive very early for headline international acts as crowds are enormous. Bring a portable phone charger. The Bouregreg waterfront area between Rabat and Sale offers excellent dining between sets. Explore the Kasbah of the Udayas and Chellah during daytime hours.',
    },
    images: [
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800',
    ],
    icon: Music,
    highlight: true,
    mapPosition: { label: 'Rabat' },
  },
  {
    id: 'fes-sacred',
    name: 'Fes Festival of World Sacred Music',
    location: 'Fes',
    region: 'Middle Atlas',
    month: 'May-June',
    monthNum: 5,
    dates: 'Late May - Early June (9 days)',
    category: 'Music',
    founded: '1994',
    attendance: '100,000+',
    cost: '300-800 MAD for main concerts; many events free',
    description:
      'One of the most prestigious world music festivals on the planet, held in the spiritual capital of Morocco since 1994. The Fes Festival of World Sacred Music brings together sacred music traditions from every corner of the world: Sufi chanting, Gospel choirs, Hindu devotional music, Buddhist monks, Gregorian chants, Andalusian orchestras, Jewish cantors, and more. Performances take place in the extraordinary setting of Bab Makina, a palatial square within the Royal Palace grounds, as well as in intimate venues throughout the ancient medina. The festival is more than a concert series -- it is a profound exercise in interfaith dialogue, using the universal language of music to bridge civilizations and promote understanding. UNESCO has endorsed the festival as a vital cultural event, and it has attracted luminaries from around the world, including the Dalai Lama, who attended in 2013. The nine-day program includes not only evening concerts but also daytime seminars, philosophical debates, Sufi culture workshops, and a parallel "Festival in the City" with free performances in the medina.',
    history:
      'The festival was founded in 1994 by Faouzi Skali, a Moroccan writer, anthropologist, and Sufi scholar. Skali conceived the festival as a response to the growing clash-of-civilizations narrative of the 1990s. By bringing together sacred music traditions from Islam, Christianity, Judaism, Hinduism, Buddhism, and indigenous spiritual practices, the festival aimed to demonstrate the common spiritual thread running through all human cultures. Fes itself was the perfect setting: a city founded in the 9th century as a center of Islamic learning, home to the world\'s oldest university (Al-Qarawiyyin), and a place where Jewish, Muslim, and Christian communities have coexisted for over a millennium. The festival quickly gained international recognition and has been praised by world leaders, religious figures, and cultural critics as one of the most important cultural events in the Islamic world.',
    whatToExpect:
      'Evening concerts in the Bab Makina palace grounds are the main draw, featuring world-renowned sacred music performers. Afternoon talks and debates at the Dar Tazi garden explore themes of spirituality, peace, and cultural dialogue. Free "Sufi Nights" in the medina feature Moroccan Sufi brotherhoods performing ecstatic dhikr ceremonies. The "Festival in the City" brings free performances to public squares and historic sites. The atmosphere is contemplative yet electric, attracting an international audience of culturally engaged music lovers, spiritual seekers, and curious travelers.',
    practicalInfo: {
      tickets: 'Evening Bab Makina concerts: 300-800 MAD. Festival passes available. Sufi Nights and many daytime events are free. Book tickets online in advance as popular concerts sell out.',
      accommodation: 'Fes has hundreds of riads in the medina, from budget to ultra-luxury. The Fes el-Bali medina is most atmospheric. Book early as the festival attracts a dedicated international following. Expect moderate price increases.',
      transport: 'Fes has a well-connected airport with domestic and international flights. Trains from Casablanca (3.5 hours), Rabat (2.5 hours), and Marrakech (7 hours). The medina is best explored on foot -- taxis can reach the medina gates.',
      tips: 'Do not miss the free Sufi Nights -- they are among the most powerful musical experiences in Morocco. The medina comes alive during the festival; explore its 9,000 alleyways during the day. Combine your visit with Fes sightseeing: tanneries, medersas, and the world\'s oldest university.',
    },
    images: [
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=800',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    ],
    icon: Music,
    highlight: true,
    mapPosition: { label: 'Fes' },
  },
  {
    id: 'marrakech-film',
    name: 'Marrakech International Film Festival',
    location: 'Marrakech',
    region: 'Marrakech-Safi',
    month: 'November-December',
    monthNum: 11,
    dates: 'Late November (6-8 days)',
    category: 'Film',
    founded: '2001',
    attendance: '200,000+ (including free screenings)',
    cost: 'Festival passes from 500 MAD; free outdoor screenings',
    description:
      'Founded by King Mohammed VI in 2001, the Marrakech International Film Festival has become one of the most important film festivals in Africa and the Arab world, and an increasingly influential event on the global cinema calendar. Held in the Palais des Congres and historic cinemas around the Red City, the festival screens over 100 international and Moroccan films, hosts master classes with legendary filmmakers, and attracts Hollywood celebrities alongside the best of African, Arab, and international cinema. What sets the Marrakech festival apart is its commitment to open-air cinema: every evening during the festival, a film is projected on a giant screen in Jemaa el-Fnaa square, one of the most famous public spaces on Earth, bringing world cinema to thousands of ordinary Marrakchis for free. The festival has paid tribute to some of cinema\'s greatest figures, including Martin Scorsese, Francis Ford Coppola, Abbas Kiarostami, and many others. Its program balances prestige screenings with a strong focus on emerging African and Arab filmmakers.',
    history:
      'The festival was created in 2001 under the High Patronage of King Mohammed VI, who has served as its president since inception. Morocco has a long relationship with cinema -- its spectacular landscapes have served as backdrops for countless films from Lawrence of Arabia to Gladiator -- and the festival was conceived to build on this heritage. The Moroccan film industry itself has grown significantly since the festival\'s founding, with Moroccan films now competing at Cannes, Venice, and Berlin. The festival has also played a diplomatic role, using cinema as a bridge between cultures in the same way that the Fes Sacred Music Festival uses music.',
    whatToExpect:
      'Red carpet premieres at the Palais des Congres, tributes to legendary filmmakers, competition screenings of international and Moroccan films, master classes, and the nightly open-air screenings in Jemaa el-Fnaa. The festival brings a glamorous energy to Marrakech\'s already buzzing winter season. Celebrity sightings are common in the medina and at the city\'s luxury hotels. Film industry professionals, journalists, and cinephiles from around the world create a cosmopolitan atmosphere.',
    practicalInfo: {
      tickets: 'Festival passes and individual screening tickets available online and at the Palais des Congres box office. The Jemaa el-Fnaa outdoor screenings are free and open to all -- just show up with a warm layer.',
      accommodation: 'December is high season in Marrakech. Book well in advance and expect premium pricing. The medina riads offer the most atmospheric experience; the Gueliz district has modern hotels. The festival area is centered around the Palais des Congres and Jemaa el-Fnaa.',
      transport: 'Marrakech Menara airport has extensive international connections. The city is connected by train to Casablanca (2.5 hours) and Rabat (4 hours). Taxis and horse-drawn carriages (caleches) are plentiful. The medina is best explored on foot.',
      tips: 'The open-air Jemaa el-Fnaa screenings are a quintessential Marrakech experience -- bring a warm jacket as December evenings are cool. Use the festival as an excuse to explore the medina, Majorelle Garden, and the Saadian Tombs. The festival\'s official parties at venues like La Mamounia are legendary.',
    },
    images: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=800',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    ],
    icon: Film,
    highlight: true,
    mapPosition: { label: 'Marrakech' },
  },
  {
    id: 'rose-festival',
    name: 'Rose Festival (Moussem des Roses)',
    location: "Kelaat M'Gouna",
    region: 'Dades Valley, High Atlas',
    month: 'May',
    monthNum: 5,
    dates: 'Mid-May (3-4 days)',
    category: 'Traditional',
    founded: '1960s',
    attendance: '20,000-40,000',
    cost: 'Free',
    description:
      'Every May, the Dades Valley between the High Atlas Mountains and the edge of the Sahara erupts in millions of pink Damascene roses, and the town of Kelaat M\'Gouna celebrates the harvest with one of Morocco\'s most photogenic and fragrant festivals. The Rose Festival is a sensory overload: the air is thick with the intoxicating scent of roses, the streets are showered with petals, and the town comes alive with music, dancing, and the crowning of a Rose Queen. The festival celebrates the economic backbone of the region -- the distillation of rose water and rose essential oil, which are exported worldwide and used in cosmetics, perfumes, and Moroccan cuisine. Kelaat M\'Gouna and the surrounding Valley of Roses produce an estimated 4,000 tonnes of rose petals annually. The festival is a genuine community celebration, far less commercialized than the big city events, and offers visitors a rare window into rural Berber life in one of Morocco\'s most spectacular landscapes. The parade through town with floats covered in roses is the highlight, accompanied by traditional Berber ahidous dancing, folk music played on flutes and drums, and a vibrant market selling rose products at a fraction of the prices found in Marrakech.',
    history:
      'The Damascene rose (Rosa damascena) was introduced to the Dades Valley by French colonists in the early 20th century, and the region\'s unique microclimate -- hot days, cool nights, and snow-melt irrigation from the Atlas -- proved ideal for cultivation. By the 1960s, the rose harvest had become central to the local economy, and the festival emerged organically as a celebration of the harvest and a showcase for the region\'s products. Today, there are dozens of cooperatives and distilleries in the valley, many run by women\'s cooperatives, producing rose water, rose oil, rose creams, and rose-scented soaps. The festival has grown but retains its authentic community character.',
    whatToExpect:
      'A colorful parade through town with floats covered in roses, traditional Berber music and dance performances, market stalls selling rose products at excellent prices, visits to rose fields in bloom and distilleries in operation, the crowning of the Rose Queen, and a festive atmosphere that is distinctly rural and Berber. The surrounding landscape of kasbahs, date palms, and snow-capped mountains adds to the magic.',
    practicalInfo: {
      tickets: 'Free to attend. No advance booking required for the festival itself.',
      accommodation: 'Simple hotels and guesthouses in Kelaat M\'Gouna and nearby Boumalne Dades. More options in Ouarzazate (1.5 hours). Some visitors stay in kasbahs along the Dades Gorge. Book ahead during festival dates as options are limited.',
      transport: 'Located on the N10 between Ouarzazate and Tinghir along the Route of a Thousand Kasbahs. Most visitors come as part of a desert tour or drive from Ouarzazate. No direct public transport -- a rental car or organized tour is recommended.',
      tips: 'Visit a rose distillery to see the production process. Buy rose water and rose oil directly from cooperatives for the best quality and prices. The Dades Gorge and Todra Gorge are nearby and worth combining with your visit. The harvest depends on weather, so exact festival dates can shift.',
    },
    images: [
      'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?q=80&w=800',
      'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?q=80&w=800',
      'https://images.unsplash.com/photo-1504387828636-abeb50778c0c?q=80&w=800',
    ],
    icon: Flower2,
    mapPosition: { label: "Kelaat M'Gouna" },
  },
  {
    id: 'imilchil',
    name: 'Imilchil Marriage Festival',
    location: 'Imilchil',
    region: 'High Atlas Mountains',
    month: 'September',
    monthNum: 9,
    dates: 'Late September (3-5 days)',
    category: 'Traditional',
    founded: 'Centuries old',
    attendance: '10,000-30,000',
    cost: 'Free',
    description:
      'One of the most fascinating cultural events in Morocco, the Imilchil Marriage Festival (Moussem des Fiances) is an ancient Berber gathering held in a remote High Atlas village at an altitude of over 2,000 meters. Traditionally, this moussem is where young men and women of the Ait Haddidou tribe choose their spouses in a matchmaking ceremony that has endured for centuries. According to local legend, the festival commemorates two star-crossed lovers from rival tribes -- Isli and Tislit -- whose tears of sorrow created the nearby twin lakes that bear their names. The elders, moved by the tragedy, decreed that young people should be free to choose their own partners at an annual gathering. While modernization has changed the matchmaking aspect, the festival remains a stunning display of Berber culture. Tribes from across the region converge in their finest traditional dress -- women in elaborate silver jewelry, embroidered capes, and colorful headscarves. The moussem features folk music with bendir drums and Berber flutes, ahidous circle dancing, livestock trading, a vast outdoor market, and the formal betrothal ceremonies that give the festival its name.',
    history:
      'The Ait Haddidou are a Berber tribe of the Ait Yafelman confederation who have inhabited the central High Atlas for centuries. Their moussem at Imilchil is one of the oldest continuously held cultural gatherings in Morocco. The marriage market tradition allowed young people from scattered mountain villages to meet potential spouses in a region where travel was difficult and communities were isolated. Colonial-era French ethnographers documented the festival extensively, bringing it to international attention. Today, while many young Berbers meet partners through modern means, the festival retains its cultural significance as a celebration of Berber identity, community bonds, and the preservation of ancient traditions.',
    whatToExpect:
      'A vibrant gathering of Berber tribes in traditional dress with extraordinarily intricate silver jewelry. Music and dancing throughout the day. Livestock markets where sheep, goats, and mules are traded. A vast souk selling handicrafts, textiles, and mountain produce. Formal betrothal ceremonies (though increasingly symbolic for tourism). The setting is extraordinary: a high plateau surrounded by barren mountains, with the twin lakes of Isli and Tislit visible nearby. The atmosphere is festive, colorful, and deeply rooted in a living tradition.',
    practicalInfo: {
      tickets: 'Free to attend. No tickets or registration required.',
      accommodation: 'Very limited. Basic guesthouses in Imilchil village, plus camping is common. Some tour operators set up temporary camp facilities. The town of Rich (2-3 hours away) has more options. This is a remote mountain experience, not a luxury event.',
      transport: 'Imilchil is very remote. Accessible by mountain road from Rich (east, 3-4 hours) or from Beni Mellal (west, 4-5 hours). A 4x4 vehicle is strongly recommended as roads can be rough. Several tour operators in Marrakech and Fes organize all-inclusive festival trips.',
      tips: 'Be prepared for cold nights at altitude, even in September. Bring warm layers, sturdy shoes, and sun protection. Respect the privacy of participants -- always ask before photographing people. A local guide is invaluable for understanding the ceremonies and navigating the area.',
    },
    images: [
      'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800',
      'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?q=80&w=800',
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    ],
    icon: Heart,
    highlight: true,
    mapPosition: { label: 'Imilchil' },
  },
  {
    id: 'tan-tan',
    name: 'Moussem of Tan-Tan',
    location: 'Tan-Tan',
    region: 'Southern Morocco',
    month: 'May-June',
    monthNum: 5,
    dates: 'Late May - Early June',
    category: 'Cultural',
    founded: 'Ancient (revived 2004)',
    attendance: '30,000+',
    cost: 'Free',
    description:
      'Inscribed on UNESCO\'s Representative List of the Masterpieces of the Oral and Intangible Heritage of Humanity in 2005, the Moussem of Tan-Tan is an annual gathering of nomadic peoples from across the Saharan region that celebrates the traditions of the great camel caravans. Thousands of nomads from more than thirty tribes of southwestern Morocco and the wider Saharan belt converge on Tan-Tan for a spectacular display of Saharan culture. The moussem recreates the historic meeting points of trans-Saharan trade routes, where nomadic tribes would gather to trade camels, exchange news, settle disputes, arrange marriages, and celebrate their shared heritage. Today, the festival features camel races and parades, traditional Hassani music and poetry, guedra trance dancing (a women\'s dance performed on the knees), handicraft displays, and a vast tent encampment that evokes the desert camps of centuries past. The moussem is a vital cultural lifeline for communities whose nomadic way of life is under threat from urbanization and climate change.',
    history:
      'The Moussem of Tan-Tan has ancient roots in the gatherings of nomadic tribes at seasonal watering points and trade crossroads in the pre-Saharan region. It was suppressed during periods of political instability but was revived in 2004 with support from the Moroccan government and UNESCO. The UNESCO inscription in 2005 recognized the moussem as a vital expression of the oral and intangible heritage of Saharan nomadic peoples, encompassing music, poetry, dance, camel lore, and the social customs that held together a vast, mobile civilization. The revival has been a success, drawing increasing numbers of visitors and helping to preserve traditions that might otherwise be lost.',
    whatToExpect:
      'Camel races and parades through the town, traditional Saharan tent encampments where tribes display their way of life, Hassani music performed on the tidinit lute and tbal drum, guedra trance dancing, poetry recitals in the Hassaniya dialect, handicraft displays featuring leatherwork, silver jewelry, and woven textiles, and a buzzing souk atmosphere. The gathering recreates the social dynamics of the old caravan routes and provides a rare window into Saharan nomadic culture.',
    practicalInfo: {
      tickets: 'Free to attend. No advance booking required.',
      accommodation: 'Tan-Tan has basic hotels. Guesthouses and riads are limited. Some visitors camp or stay in Guelmim (1 hour north). This is an off-the-beaten-path experience.',
      transport: 'Tan-Tan is on the Atlantic coast, approximately 5-6 hours south of Agadir by road (N1). The town has a small airport with limited service. Best combined with a southern Morocco road trip that includes Tiznit, Mirleft, and Sidi Ifni.',
      tips: 'The dates can vary year to year -- check with the Moroccan tourism office before planning. Bring sun protection and plenty of water. Learn a few words of greeting in Hassaniya Arabic. The surrounding coastline south of Tan-Tan is stunningly beautiful and nearly empty.',
    },
    images: [
      'https://images.unsplash.com/photo-1564227901-6b1d20bebe9d?q=80&w=800',
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
      'https://images.unsplash.com/photo-1504387828636-abeb50778c0c?q=80&w=800',
    ],
    icon: Globe,
    mapPosition: { label: 'Tan-Tan' },
  },
  {
    id: 'timitar',
    name: 'Timitar Festival',
    location: 'Agadir',
    region: 'Souss-Massa',
    month: 'July',
    monthNum: 7,
    dates: 'Mid-July (4 days)',
    category: 'Music',
    founded: '2004',
    attendance: '400,000+',
    cost: 'Free (all concerts)',
    description:
      'Timitar -- meaning "signs" in the Amazigh (Berber) language -- is Agadir\'s flagship music festival and one of the most important celebrations of Amazigh culture in Morocco. Founded in 2004, the festival brings together Berber musicians from across North Africa with international artists over four days of free concerts, promoting cultural exchange through music, dance, and the Amazigh language. The festival typically features two main stages: one dedicated to Amazigh and Moroccan music, and one hosting international acts. Past performers have included Youssou N\'Dour, Khaled, Amadou & Mariam, and dozens of top Moroccan artists. With attendance regularly exceeding 400,000, Timitar has become a powerful platform for Amazigh cultural expression and a symbol of Morocco\'s recognition of its Berber heritage. The festival takes place in Agadir\'s warm summer climate, with stages set up along the beach and in public squares, creating a festive atmosphere that blends music with the resort city\'s relaxed coastal vibe.',
    history:
      'Timitar was founded in 2004 amid a broader revival of Amazigh (Berber) cultural expression in Morocco. The Amazigh people are the indigenous inhabitants of North Africa, and their language, music, and traditions have experienced a renaissance since Morocco officially recognized Amazigh as a national language in the 2011 constitution. Timitar was one of the first major festivals explicitly dedicated to celebrating Amazigh culture in a contemporary format, blending traditional Berber music with international genres. The festival is organized by the Timitar Association with support from the Souss-Massa region and has played a significant role in bringing Amazigh music to international audiences.',
    whatToExpect:
      'Free concerts on multiple stages from late afternoon until midnight. The Amazigh stage features Berber music from the Souss, Rif, and Atlas regions, while the international stage hosts world music, African, and pop acts. Traditional ahwach dancing, artisan markets, art exhibitions, and cultural workshops complement the music. The atmosphere is relaxed and family-friendly, reflecting Agadir\'s easygoing coastal character.',
    practicalInfo: {
      tickets: 'All concerts are completely free. No tickets or passes required.',
      accommodation: 'Agadir has the best hotel infrastructure in southern Morocco, from beach resorts to budget hostels. Prices are moderate by Moroccan standards. The beachfront area and Talborjt district are convenient for festival venues.',
      transport: 'Agadir Al Massira airport has domestic and international flights. The city is 3 hours south of Marrakech by road. CTM and Supratours buses connect Agadir to Marrakech, Essaouira, and Tiznit.',
      tips: 'Combine the festival with Agadir\'s beach and nearby Paradise Valley for a perfect summer trip. The Souss-Massa National Park is excellent for birdwatching. Evening temperatures are pleasant, but afternoons can be very hot -- plan accordingly.',
    },
    images: [
      'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?q=80&w=800',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800',
    ],
    icon: Music,
    mapPosition: { label: 'Agadir' },
  },
  {
    id: 'cherry-festival',
    name: 'Cherry Festival',
    location: 'Sefrou',
    region: 'Middle Atlas',
    month: 'June',
    monthNum: 6,
    dates: 'Mid-June (3 days)',
    category: 'Traditional',
    founded: '1920',
    attendance: '15,000-25,000',
    cost: 'Free',
    description:
      'One of Morocco\'s oldest and most charming festivals, the Cherry Festival of Sefrou has been celebrating the cherry harvest since the 1920s, making it one of the longest-running annual festivals in the country. The small town of Sefrou, nestled in the foothills of the Middle Atlas just 28 kilometers south of Fes, is the cherry capital of Morocco, and every June its orchards produce a bountiful crop of sweet cherries. The festival is a genuine community celebration: a colorful parade winds through the town center with floats decorated in cherry motifs, bands play traditional Amazigh and Andalusian music, folk dancers perform in the streets, and the highlight is the crowning of the Cherry Queen, selected from among the young women of the town. Market stalls overflow with fresh cherries, cherry preserves, cherry juice, and cherry-themed crafts. The festival offers visitors a taste of small-town Moroccan life that is worlds away from the tourist bustle of Marrakech or Fes.',
    history:
      'The Cherry Festival was first organized in 1920 during the French Protectorate, making it one of the oldest organized festivals in Morocco. Sefrou was historically a diverse town with significant Jewish, Berber, and Arab communities, and the cherry harvest was a celebration that brought all groups together. The festival survived Moroccan independence and has been held nearly every year since, evolving from a colonial-era agricultural fair into a genuine expression of local identity. The crowning of the Cherry Queen is a tradition borrowed from European harvest festivals and has become the festival\'s most iconic moment.',
    whatToExpect:
      'A festive parade through Sefrou\'s compact town center, the Cherry Queen coronation ceremony, traditional music performances including Amazigh ahidous dancing and Andalusian orchestras, cherry markets with the freshest cherries in Morocco at excellent prices, and a warm, small-town atmosphere where visitors are welcomed with genuine hospitality.',
    practicalInfo: {
      tickets: 'Free to attend.',
      accommodation: 'Limited options in Sefrou itself -- a few small hotels and guesthouses. Most visitors stay in Fes (28 km away) and make a day trip.',
      transport: 'Sefrou is a 30-minute drive south of Fes. Grand taxis from Fes are cheap and frequent. It is easily combined with a day in Fes.',
      tips: 'This is one of the most authentic and least touristy festivals in Morocco -- enjoy the genuine local atmosphere. The surrounding countryside is beautiful for walks. The medina of Sefrou, though small, is one of the prettiest in Morocco.',
    },
    images: [
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=800',
      'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?q=80&w=800',
      'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?q=80&w=800',
    ],
    icon: Drumstick,
    mapPosition: { label: 'Sefrou' },
  },
  {
    id: 'popular-arts',
    name: 'National Festival of Popular Arts',
    location: 'Marrakech',
    region: 'Marrakech-Safi',
    month: 'July',
    monthNum: 7,
    dates: 'Mid to Late July (5-6 days)',
    category: 'Cultural',
    founded: '1960',
    attendance: '50,000+',
    cost: '50-200 MAD',
    description:
      'Morocco\'s oldest cultural festival, the National Festival of Popular Arts has been held annually since 1960 in the spectacular setting of the El Badi Palace, Marrakech\'s magnificent 16th-century ruined palace. Founded to preserve and promote Morocco\'s rich folk heritage, the festival brings together hundreds of performers from every region of the kingdom to showcase the dazzling diversity of Moroccan traditional arts. Over five to six days, the crumbling walls and orange-tree gardens of El Badi become a stage for Berber ahwach dancing from the High Atlas, Gnaoua trance music from Essaouira, Saharan guedra from the deep south, Rif mountain music, Arabic-Andalusian orchestras, theatrical horse charges (fantasia), snake charmers, acrobats, storytellers, and more. The festival is essentially a living encyclopedia of Moroccan folk culture, presented in one of the most atmospheric venues imaginable. Performances take place both in the afternoon heat and under the cool evening sky, when the palace walls glow amber in the floodlights.',
    history:
      'The festival was established in 1960, just four years after Morocco\'s independence, as part of a national effort to preserve and celebrate the cultural heritage that had been marginalized during the colonial period. Marrakech was chosen as the host city because of its historical role as a crossroads between Saharan Africa, the Atlas Mountains, and the Mediterranean world. The El Badi Palace, built by Sultan Ahmad al-Mansur in the 16th century to celebrate his victory over Portugal, provides a fittingly grand setting. The festival has run nearly continuously for over six decades, making it one of the longest-running cultural festivals in Africa.',
    whatToExpect:
      'Afternoon and evening performances in the El Badi Palace courtyards. Berber dance troupes from every region, Gnaoua ceremonies, fantasia horse charges, Saharan music, storytelling, and acrobatics. The setting is extraordinary -- open sky above, ancient walls around, orange trees and storks overhead. The audience is a mix of Moroccans and international visitors. Evening performances are the most atmospheric.',
    practicalInfo: {
      tickets: 'Tickets sold at the El Badi Palace entrance, typically 50-200 MAD depending on the performance.',
      accommodation: 'Marrakech has accommodation at every price point. The medina riads are closest to El Badi Palace. July is hot but is shoulder season for tourism, so prices are moderate.',
      transport: 'El Badi Palace is in the heart of the medina, easily reached on foot from most riad accommodation. Taxis can drop you at the Bab Berrima gate nearby.',
      tips: 'July in Marrakech is very hot -- attend the evening performances when the temperature drops. Bring water. The El Badi Palace is worth visiting independently for its ruins and the stork colony. Combine with Marrakech sightseeing.',
    },
    images: [
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=800',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
      'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?q=80&w=800',
    ],
    icon: Paintbrush,
    mapPosition: { label: 'Marrakech' },
  },
  {
    id: 'taragalte',
    name: 'Taragalte Festival',
    location: "M'Hamid El Ghizlane",
    region: 'Draa Valley / Sahara',
    month: 'November',
    monthNum: 11,
    dates: 'Late October - Early November (3 days)',
    category: 'Music',
    founded: '2010',
    attendance: 'Few hundred (intimate)',
    cost: 'Festival passes from 500 MAD',
    description:
      'A desert music festival held on the edge of the Sahara at M\'Hamid El Ghizlane, the last oasis before the great sand sea. Founded to celebrate nomadic Saharan culture and raise awareness of desertification, Taragalte brings together Gnaoua, Tuareg, and Saharan musicians for performances under the stars on a natural sand-dune stage. It is arguably the most atmospheric music festival in Morocco, and one of the most intimate. The name "Taragalte" means "meeting place" in the local Berber dialect, and the festival lives up to its name by creating a space where Saharan nomadic traditions, desert ecology, contemporary music, and international travelers converge in a setting of extraordinary natural beauty. Audiences of just a few hundred people sleep in desert camps, share meals around campfires, and watch performances under some of the clearest skies on Earth. Between sets, there are camel treks, sand-dune walks, stargazing sessions, and workshops on desert ecology and nomadic crafts. The festival has been recognized for its commitment to sustainable tourism and cultural preservation.',
    history:
      'Taragalte was founded in 2010 by Halim Sbai, a local cultural activist from M\'Hamid. The festival emerged from concerns about the rapid desertification threatening the oasis and the disappearance of nomadic ways of life in the Draa Valley. By creating a cultural event that celebrates Saharan heritage, the festival aims to bring economic benefits to the local community while raising international awareness of the environmental challenges facing the desert. M\'Hamid was once the last stop on the great caravan routes before the Sahara crossing to Timbuktu, and the festival revives something of that historic role as a meeting place of cultures.',
    whatToExpect:
      'Music performances on a stage built in the sand dunes at sunset and under the stars. Genres include Gnaoua, Tuareg desert blues, Saharan folk, and contemporary world music. Stargazing sessions in the total darkness of the desert. Camel treks at dawn. Sand-sculpture workshops. Talks on desert ecology and nomadic heritage. Communal meals in the camp. The audience is small, creating an intimate, unforgettable experience.',
    practicalInfo: {
      tickets: 'Festival passes available online through the official website. Passes include camping accommodation in the desert camp. Book early as capacity is strictly limited.',
      accommodation: 'The festival provides desert camp accommodation (traditional Berber tents on the dunes). Some guesthouses in M\'Hamid village offer rooms. The desert camp experience is integral to the festival.',
      transport: 'M\'Hamid is remote, approximately 8 hours from Marrakech by road via Ouarzazate and Zagora. The festival organizes group transfers from Zagora and Ouarzazate. A rental car or organized tour from Marrakech is recommended.',
      tips: 'Bring very warm layers for desert nights (temperatures plummet after dark). A headlamp is essential. Bring a camera with good low-light capability for the incredible starscape. This is a digital-detox experience -- embrace the disconnection.',
    },
    images: [
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800',
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
      'https://images.unsplash.com/photo-1504387828636-abeb50778c0c?q=80&w=800',
    ],
    icon: Music,
    mapPosition: { label: "M'Hamid" },
  },
  {
    id: 'date-festival',
    name: 'Date Festival (Moussem des Dattes)',
    location: 'Erfoud',
    region: 'Tafilalet / Sahara Gateway',
    month: 'October',
    monthNum: 10,
    dates: 'Third week of October (3 days)',
    category: 'Traditional',
    founded: '1950s',
    attendance: '30,000+',
    cost: 'Free',
    description:
      'The Tafilalet oasis around Erfoud is Morocco\'s date palm capital, and every October the harvest is celebrated with a vibrant three-day festival that draws visitors from across the region. Dozens of date varieties are displayed and sold, from the prized Medjool (known locally as the "king of dates") to local varieties like Boufegous, Jihel, Bouslikhane, and Aziza. The festival combines an agricultural exhibition with Berber folklore, fantasia (traditional horse-riding displays), camel races, and a buzzing souk atmosphere. The Date Festival is a window into life in Morocco\'s pre-Saharan oases, where date palms have sustained human settlement for millennia. The Tafilalet was historically one of the most important oasis complexes in the Sahara, a crucial waypoint on the caravan routes connecting Fes and Marrakech with Timbuktu and sub-Saharan Africa. The festival preserves this heritage while celebrating the agricultural innovation that keeps the oases productive.',
    history:
      'Date cultivation in the Tafilalet oasis dates back over a thousand years. The region was the ancestral homeland of Morocco\'s ruling Alaouite dynasty, and its dates were prized throughout the kingdom. The festival emerged in the 1950s as an agricultural fair and has evolved into a cultural celebration that combines trade with tradition. In recent decades, a disease called Bayoud has destroyed millions of date palms across North Africa, making the preservation and celebration of date culture more important than ever.',
    whatToExpect:
      'An enormous date market with varieties you have never seen, traditional fantasia charges (horsemen in formation firing muskets), folk music performances, camel races, cultural exhibitions, and a festive, very local atmosphere. It is an excellent opportunity to buy high-quality dates directly from producers at far better prices than in cities. The surrounding landscape of palm groves, kasbahs, and desert is stunning.',
    practicalInfo: {
      tickets: 'Free entry to all festival events.',
      accommodation: 'Simple hotels and guesthouses in Erfoud. More options in Rissani (17 km) and near Merzouga (50 km). The festival period sees higher demand, so book ahead.',
      transport: 'Erfoud is in the pre-Saharan southeast, approximately 45 minutes from the Merzouga dunes. It is typically reached as part of a desert tour from Marrakech (8+ hours) or Fes (6+ hours). CTM buses connect to Meknes and Fes.',
      tips: 'Combine with a visit to the Erg Chebbi dunes at Merzouga for a camel trek and desert camping. Explore Erfoud\'s fossil quarries, where ancient trilobites and ammonites are extracted from the limestone. The nearby Rissani market (Sunday, Tuesday, Thursday) is one of the most authentic in Morocco.',
    },
    images: [
      'https://images.unsplash.com/photo-1504387828636-abeb50778c0c?q=80&w=800',
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
      'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?q=80&w=800',
    ],
    icon: Star,
    mapPosition: { label: 'Erfoud' },
  },
  {
    id: 'ramadan',
    name: 'Ramadan',
    location: 'Nationwide',
    region: 'All of Morocco',
    month: 'Varies (lunar calendar)',
    monthNum: 3,
    dates: 'Moves ~11 days earlier each year',
    category: 'Religious',
    founded: 'Since the 7th century',
    attendance: 'Entire nation',
    cost: 'Free',
    description:
      'The holiest month in Islam, during which Muslims fast from dawn to sunset, is not a festival in the conventional sense but is one of the most transformative experiences you can have as a visitor in Morocco. The rhythm of life changes completely during Ramadan. Streets are quiet during the day as people conserve energy, but the moment the sunset call to prayer rings out, cities erupt with activity. Families gather for iftar, the breaking of the fast, which begins with dates and milk, followed by bowls of steaming harira soup, chebakia honey pastries, fresh juices, and an array of special Ramadan foods found at no other time of year. Night markets buzz until the early hours, mosques overflow with worshippers, and the sense of community and generosity is palpable. Laylat al-Qadr (the Night of Power), believed to fall on the 27th night of Ramadan, is especially significant, with mosques remaining full through the night. Visiting Morocco during Ramadan requires adjustment -- most restaurants close during daylight hours, and it is important to be discreet about eating in public -- but for travelers willing to adapt, it offers an unparalleled window into Moroccan spiritual and social life.',
    history:
      'Ramadan is the ninth month of the Islamic lunar calendar and commemorates the month in which the Quran was first revealed to the Prophet Muhammad. The fast (sawm) is one of the Five Pillars of Islam. In Morocco, Ramadan has been observed since Islam arrived in the 7th century. Moroccan Ramadan traditions include specific foods (harira soup, chebakia, briouates), the sounding of a cannon at sunset to signal the end of the daily fast, and special Tarawih prayers in mosques. The month culminates in Eid al-Fitr, a joyous celebration of feasting and gift-giving.',
    whatToExpect:
      'Daytime quiet with many restaurants and cafes closed. Spectacular iftar spreads at sunset. Night markets and streets buzzing until late. Special Ramadan foods available everywhere. A deeply spiritual atmosphere in mosques and homes. Enhanced generosity and community spirit. Laylat al-Qadr (27th night) is the most sacred night of the year.',
    practicalInfo: {
      tickets: 'No tickets needed. Ramadan is a nationwide experience.',
      accommodation: 'Many riads and hotels serve private breakfast and lunch for non-Muslim guests. Some restaurants cater to tourists, but options are reduced. Book accommodation that confirms meal service during Ramadan.',
      transport: 'Public transport operates normally but schedules may shift. Traffic intensifies just before iftar as everyone rushes home. Avoid traveling during the iftar hour.',
      tips: 'Respect the fast: do not eat, drink, or smoke in public during daylight hours. Accept any iftar invitation you receive -- it is a generous and genuine gesture. Evening food is abundant and delicious. The pre-dawn suhoor meal is another special Ramadan experience.',
    },
    images: [
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800',
      'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=800',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    ],
    icon: Moon,
    mapPosition: { label: 'Nationwide' },
  },
  {
    id: 'tanjazz',
    name: 'Tanjazz Jazz Festival',
    location: 'Tangier',
    region: 'Northern Morocco',
    month: 'September',
    monthNum: 9,
    dates: 'Mid-September (3 days)',
    category: 'Music',
    founded: '2000',
    attendance: '15,000+',
    cost: '200-500 MAD for main concerts; some free events',
    description:
      'Tanjazz is Tangier\'s premier jazz festival and one of the most intimate and atmospheric music events in Morocco. Held across multiple venues in the cosmopolitan city where Africa meets Europe, the festival brings world-class jazz musicians to intimate settings including the Palais des Institutions Italiennes, historic hotel ballrooms, and open-air courtyards. Founded in 2000, Tanjazz celebrates Tangier\'s long history as a meeting point for cultures, artists, and bohemian spirits. The city that inspired Paul Bowles, William Burroughs, and the Rolling Stones provides a fitting backdrop for jazz, a genre born from the fusion of African and European musical traditions. The festival\'s program typically spans three days of evening concerts featuring international jazz headliners, Moroccan jazz and fusion artists, and emerging talent. The smaller scale creates an atmosphere where audiences can engage closely with musicians, and after-concert jam sessions in Tangier\'s bars and cafes extend the music long into the night.',
    history:
      'Tanjazz was founded in 2000 by Philippe Lorin, a French jazz enthusiast living in Tangier. The festival was inspired by Tangier\'s historical role as an international zone (1923-1956) where artists, writers, spies, and bohemians from around the world mingled freely. That cosmopolitan legacy makes Tangier a natural home for jazz. The festival has grown steadily, attracting increasingly prominent international artists while maintaining its intimate character. In 2024, the festival rebranded and expanded, moving to larger venues while preserving the intimate late-night jam sessions that are its trademark.',
    whatToExpect:
      'Evening concerts in atmospheric venues across Tangier, featuring a mix of international jazz headliners and Moroccan jazz fusion acts. Late-night jam sessions in Tangier\'s legendary bars and cafes. A cosmopolitan audience of jazz lovers, artists, and Tangier\'s eclectic permanent community of expats and locals. The festival coincides with September\'s perfect weather and Tangier\'s golden light.',
    practicalInfo: {
      tickets: 'Main concert tickets from 200-500 MAD. Festival passes available. Some fringe events are free. Purchase through the official website.',
      accommodation: 'Tangier has excellent accommodation ranging from luxury hotels in the Ville Nouvelle to character-filled riads in the medina. September is a pleasant month with moderate prices.',
      transport: 'Tangier Ibn Battuta airport has domestic and international flights. The city is connected to Casablanca and Rabat by the Al Boraq high-speed train (2 hours to Casablanca). Ferries connect Tangier to Spain (Tarifa, 35 minutes).',
      tips: 'Explore Tangier\'s literary heritage: the American Legation Museum, the Cafe Hafa, and the Petit Socco. The Tangier medina at night during the festival is magical. The nearby Cap Spartel and Caves of Hercules make excellent daytime excursions.',
    },
    images: [
      'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?q=80&w=800',
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800',
    ],
    icon: Music,
    mapPosition: { label: 'Tangier' },
  },
  {
    id: 'asilah-arts',
    name: 'Asilah Arts Festival',
    location: 'Asilah',
    region: 'Northern Atlantic Coast',
    month: 'August',
    monthNum: 8,
    dates: 'August (3 weeks)',
    category: 'Cultural',
    founded: '1978',
    attendance: '50,000+ over the full program',
    cost: 'Free (public murals and street art); some ticketed events',
    description:
      'The Asilah Arts Festival, officially the Asilah International Cultural Festival, is one of the longest-running arts festivals in Africa, held annually since 1978 in the picturesque Atlantic coastal town of Asilah. Founded by Mohamed Benaissa, a diplomat and the town\'s former mayor, the festival was conceived as a tool for urban regeneration and cultural diplomacy. Every year, international artists are invited to paint murals on the whitewashed walls of Asilah\'s medina, creating a constantly evolving open-air gallery that has made the town one of the most beautiful and photographed in Morocco. The three-week program extends far beyond visual art: it includes poetry readings, literary symposia, philosophical debates, musical performances, calligraphy workshops, and exhibitions. The festival has hosted Nobel laureates, world-renowned poets, African heads of state, and leading intellectuals, positioning this small fishing town as an unlikely center of international cultural dialogue. The murals painted each year attract visitors long after the festival ends, and the town\'s medina walls are a living testament to decades of artistic expression from around the world.',
    history:
      'When Mohamed Benaissa became mayor of Asilah in the 1970s, the town was dilapidated and economically depressed. He conceived the festival as a way to restore civic pride and attract investment. International artists were invited to paint murals on the crumbling medina walls, simultaneously beautifying the town and creating a cultural landmark. The strategy worked: Asilah was transformed from a forgotten fishing village into one of Morocco\'s most attractive small towns, and the festival became a model for arts-led urban regeneration studied worldwide. Benaissa later served as Morocco\'s Foreign Minister, and the festival\'s diplomatic dimension -- hosting dialogue between African, Arab, and European intellectuals -- reflects his background.',
    whatToExpect:
      'International artists painting new murals on the medina walls (usually in the first week). Poetry readings and literary events in the Palace of Culture. Musical performances in the medina. Exhibitions in converted galleries. The medina itself, with its whitewashed walls adorned with decades of murals, is the main attraction. The town\'s atmospheric Portuguese-era ramparts overlooking the Atlantic provide a stunning backdrop.',
    practicalInfo: {
      tickets: 'The mural-painting and most street events are free. Some ticketed events at the Palace of Culture. Check the program for details.',
      accommodation: 'Asilah has a growing number of riads, guesthouses, and small hotels. The medina accommodation is most atmospheric. August is popular, so book ahead.',
      transport: 'Asilah is 45 minutes south of Tangier by train or road. Regular trains connect to Tangier, Rabat, and Casablanca. The town is compact and walkable.',
      tips: 'Visit the medina early in the morning for the best light on the murals. The Crypt, a converted Portuguese cistern used for exhibitions, is a hidden gem. Asilah\'s seafood restaurants along the port are excellent and affordable.',
    },
    images: [
      'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?q=80&w=800',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=800',
    ],
    icon: PenTool,
    mapPosition: { label: 'Asilah' },
  },
];

/* ═══════════════════════════════════════════════════════════════
   QUICK-REFERENCE CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const calendarQuickRef = [
  { month: 'January', events: ['Amazigh New Year (Yennayer, Jan 13)', 'Marrakech Marathon'] },
  { month: 'February', events: ['Almond Blossom Festival (Tafraoute)', '1-54 Art Fair (Marrakech)'] },
  { month: 'March', events: ['International Nomads Festival (Sahara)', 'Spring classical concerts'] },
  { month: 'April', events: ['Marathon des Sables (Sahara)', 'SIAM Agricultural Fair (Meknes)'] },
  { month: 'May', events: ['Rose Festival (Dades Valley)', 'Fes Sacred Music Festival', 'Tan-Tan Moussem'] },
  { month: 'June', events: ['Gnaoua Festival (Essaouira)', 'Mawazine Festival (Rabat)', 'Cherry Festival (Sefrou)'] },
  { month: 'July', events: ['Timitar Festival (Agadir)', 'National Popular Arts (Marrakech)', 'Throne Day'] },
  { month: 'August', events: ['Asilah Arts Festival', 'Moulay Idriss Moussem', 'Honey Festival'] },
  { month: 'September', events: ['Imilchil Marriage Festival', 'Tanjazz (Tangier)', 'Fantasia Festival'] },
  { month: 'October', events: ['Date Festival (Erfoud)', 'Saffron Festival (Taliouine)', 'Olive Festival'] },
  { month: 'November', events: ['Marrakech Film Festival', 'Taragalte Festival (Sahara)', 'Independence Day'] },
  { month: 'December', events: ['Desert music festivals', 'New Year celebrations', 'Holiday season'] },
];

/* ═══════════════════════════════════════════════════════════════
   HELPER FUNCTIONS
   ═══════════════════════════════════════════════════════════════ */

function getCategoryColor(category: Festival['category']) {
  switch (category) {
    case 'Music': return 'tag-primary';
    case 'Cultural': return 'tag-secondary';
    case 'Religious': return 'tag-accent';
    case 'Film': return 'bg-purple-50 text-purple-700 border border-purple-200';
    case 'Traditional': return 'bg-[var(--color-green)]/10 text-[var(--color-green)] border border-[var(--color-green)]/20';
  }
}

/* ═══════════════════════════════════════════════════════════════
   JSON-LD
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Complete Guide to Morocco\'s Best Festivals',
  description: 'In-depth profiles of Morocco\'s top 15 festivals with practical information for attending.',
  url: 'https://cityguide.ma/festivals',
  numberOfItems: festivals.length,
  itemListElement: festivals.map((f, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Event',
      name: f.name,
      location: { '@type': 'Place', name: f.location, address: { '@type': 'PostalAddress', addressCountry: 'MA' } },
      description: f.description.slice(0, 300),
    },
  })),
};

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function FestivalsPage() {
  const highlighted = festivals.filter((f) => f.highlight);
  const remaining = festivals.filter((f) => !f.highlight);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Festivals</span>
          </nav>
          <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            In-Depth Festival Guides
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco&apos;s Greatest Festivals
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From ancient Berber moussems to world-class music festivals, everything you need to know to plan your visit around Morocco&apos;s most extraordinary celebrations.
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-[var(--color-accent)]">15</p>
              <p className="text-sm text-white/70">Festival Profiles</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-[var(--color-accent)]">12</p>
              <p className="text-sm text-white/70">Cities</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-[var(--color-accent)]">12</p>
              <p className="text-sm text-white/70">Months Covered</p>
            </div>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Nation That Celebrates
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is a country that loves to celebrate. From the ancient <em>moussems</em> (pilgrimages and tribal gatherings) that have brought communities together for centuries, to world-class music and film festivals that draw international audiences, there is always something happening somewhere in the kingdom.
              </p>
              <p>
                Moroccan festivals blend the sacred and the secular, the traditional and the modern. You might find yourself watching a Gnaoua master musician collaborate with a jazz saxophonist in Essaouira one week, then witnessing a centuries-old Berber marriage ceremony in a remote Atlas village the next. Religious holidays like Ramadan and Eid transform the entire country, while local harvest festivals celebrate the date palms, roses, cherries, and saffron that sustain rural communities.
              </p>
              <p>
                This guide provides detailed profiles of Morocco&apos;s 15 most important festivals, with everything you need to plan your visit: history, what to expect, ticket information, accommodation advice, transport options, and insider tips. Each profile is based on real festival information and practical travel experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Festival Locations Map Reference ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
              Festival Locations Across Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s festivals span the entire country, from the Mediterranean coast to the Sahara Desert, from Atlantic beach towns to remote Atlas mountain villages.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {festivals.map((f) => (
              <a
                key={f.id}
                href={`#festival-${f.id}`}
                className="card-moroccan p-4 hover:shadow-lg transition-all hover:border-[var(--color-primary)]/30 group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
                  <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors truncate">
                    {f.location}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] truncate">{f.name}</p>
                <p className="text-xs text-[var(--color-primary)] font-medium mt-1">{f.month}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Reference Calendar ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Festival Calendar at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A month-by-month overview of when Morocco&apos;s biggest festivals take place. Islamic holidays follow the lunar calendar and shift approximately 11 days earlier each year.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {calendarQuickRef.map((month) => (
              <div key={month.month} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
                  <h3 className="font-bold text-[var(--text-primary)]">{month.month}</h3>
                </div>
                <ul className="space-y-1.5">
                  {month.events.map((event) => (
                    <li key={event} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                      <Star className="w-3 h-3 text-[var(--color-accent)] mt-1 shrink-0" />
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlighted Festival Profiles (Full Width) ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Must-See Festivals</span>
            </div>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="space-y-16">
            {highlighted.map((festival) => (
              <article
                key={festival.id}
                id={`festival-${festival.id}`}
                className="scroll-mt-8"
              >
                <div className="card-moroccan overflow-hidden">
                  {/* Header with image */}
                  <div className="relative h-72 md:h-96 overflow-hidden">
                    <img
                      src={festival.images[0]}
                      alt={festival.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`tag ${getCategoryColor(festival.category)}`}>{festival.category}</span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-2">
                        {festival.name}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-white/80">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {festival.location}, {festival.region}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {festival.dates}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {festival.attendance}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Ticket className="w-4 h-4" />
                          {festival.cost}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-10">
                    {/* Quick facts */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-4 bg-[var(--surface-muted)] rounded-xl">
                      <div>
                        <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Founded</p>
                        <p className="text-sm font-bold text-[var(--text-primary)]">{festival.founded}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Attendance</p>
                        <p className="text-sm font-bold text-[var(--text-primary)]">{festival.attendance}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Cost</p>
                        <p className="text-sm font-bold text-[var(--text-primary)]">{festival.cost}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">When</p>
                        <p className="text-sm font-bold text-[var(--text-primary)]">{festival.month}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <Info className="w-5 h-5 text-[var(--color-primary)]" />
                        About This Festival
                      </h4>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{festival.description}</p>
                    </div>

                    {/* History */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                        History &amp; Background
                      </h4>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{festival.history}</p>
                    </div>

                    {/* What to Expect */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-[var(--color-accent)]" />
                        What to Expect
                      </h4>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{festival.whatToExpect}</p>
                    </div>

                    {/* Practical Info Grid */}
                    <div>
                      <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        Practical Information
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-[var(--surface-muted)]">
                          <div className="flex items-center gap-2 mb-2">
                            <Ticket className="w-4 h-4 text-[var(--color-primary)]" />
                            <span className="text-sm font-bold text-[var(--text-primary)]">Tickets &amp; Access</span>
                          </div>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{festival.practicalInfo.tickets}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-[var(--surface-muted)]">
                          <div className="flex items-center gap-2 mb-2">
                            <BedDouble className="w-4 h-4 text-[var(--color-primary)]" />
                            <span className="text-sm font-bold text-[var(--text-primary)]">Accommodation</span>
                          </div>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{festival.practicalInfo.accommodation}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-[var(--surface-muted)]">
                          <div className="flex items-center gap-2 mb-2">
                            <Car className="w-4 h-4 text-[var(--color-primary)]" />
                            <span className="text-sm font-bold text-[var(--text-primary)]">Getting There</span>
                          </div>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{festival.practicalInfo.transport}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-[var(--surface-muted)]">
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
                            <span className="text-sm font-bold text-[var(--text-primary)]">Insider Tips</span>
                          </div>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{festival.practicalInfo.tips}</p>
                        </div>
                      </div>
                    </div>

                    {/* Photo gallery */}
                    {festival.images.length > 1 && (
                      <div className="mt-8">
                        <div className="grid grid-cols-3 gap-3">
                          {festival.images.map((img, idx) => (
                            <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden">
                              <img
                                src={img}
                                alt={`${festival.name} - image ${idx + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Remaining Festival Profiles (Compact) ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">More Festivals</span>
            </div>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="space-y-10">
            {remaining.map((festival) => (
              <article
                key={festival.id}
                id={`festival-${festival.id}`}
                className="card-moroccan overflow-hidden scroll-mt-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Image column */}
                  <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={festival.images[0]}
                      alt={festival.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`tag ${getCategoryColor(festival.category)}`}>{festival.category}</span>
                    </div>
                    {/* Mini gallery */}
                    {festival.images.length > 1 && (
                      <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                        {festival.images.slice(1).map((img, idx) => (
                          <div key={idx} className="w-16 h-12 rounded-lg overflow-hidden border-2 border-white/50">
                            <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content column */}
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                      {festival.name}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-[var(--text-muted)] mb-4">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {festival.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {festival.dates}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {festival.attendance}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Ticket className="w-3.5 h-3.5" />
                        {festival.cost}
                      </span>
                    </div>

                    {/* Quick facts strip */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2.5 py-1 rounded-full text-[var(--text-muted)]">
                        <Clock className="w-3 h-3" /> Founded: {festival.founded}
                      </span>
                    </div>

                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-sm">
                      {festival.description.slice(0, 500)}{festival.description.length > 500 ? '...' : ''}
                    </p>

                    <details className="group mb-4">
                      <summary className="text-sm font-semibold text-[var(--color-primary)] cursor-pointer hover:underline flex items-center gap-1">
                        <ArrowRight className="w-3.5 h-3.5 group-open:rotate-90 transition-transform" />
                        Full history, what to expect &amp; practical info
                      </summary>
                      <div className="mt-4 space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">History</h4>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{festival.history}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">What to Expect</h4>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{festival.whatToExpect}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                            <p className="text-xs font-bold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                              <Ticket className="w-3 h-3 text-[var(--color-primary)]" /> Tickets
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">{festival.practicalInfo.tickets}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                            <p className="text-xs font-bold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                              <BedDouble className="w-3 h-3 text-[var(--color-primary)]" /> Accommodation
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">{festival.practicalInfo.accommodation}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                            <p className="text-xs font-bold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                              <Car className="w-3 h-3 text-[var(--color-primary)]" /> Transport
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">{festival.practicalInfo.transport}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                            <p className="text-xs font-bold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[var(--color-accent)]" /> Tips
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">{festival.practicalInfo.tips}</p>
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Festival-Going Tips ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white text-center mb-4">
            Essential Tips for Attending Festivals in Morocco
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
            Practical advice to help you get the most from Morocco&apos;s festivals, whether you are attending a massive free concert or a remote mountain moussem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Ticket,
                title: 'Book Accommodation Early',
                desc: 'Festival cities fill up fast, especially for Gnaoua, Mawazine, and the Marrakech Film Festival. Book 2-3 months ahead. Prices rise significantly during events -- budget accordingly or stay in nearby towns.',
              },
              {
                icon: Users,
                title: 'Respect Local Customs',
                desc: 'At traditional moussems and religious celebrations, dress modestly (cover shoulders and knees). Always ask before photographing people, especially women. At religious events, observe rather than participate unless specifically invited.',
              },
              {
                icon: Clock,
                title: 'Arrive Early for Big Acts',
                desc: 'Free concerts attract massive crowds. For Mawazine and Gnaoua headline shows, arrive 1-2 hours before the scheduled start time. Evening events often begin 30-60 minutes later than advertised -- this is normal in Morocco.',
              },
              {
                icon: Globe,
                title: 'Combine Festivals with Travel',
                desc: 'Many festivals happen in cities worth exploring independently. Use a festival as the anchor for a broader itinerary. The journey to remote festivals like Imilchil or Taragalte is often part of the experience.',
              },
              {
                icon: Music,
                title: 'Embrace the Unexpected',
                desc: 'The best festival moments are often unplanned: a street performance in the medina at midnight, an invitation to a family iftar during Ramadan, or a late-night Gnaoua lila ceremony in a private house.',
              },
              {
                icon: Calendar,
                title: 'Check Islamic Calendar Dates',
                desc: 'Ramadan, Eid al-Fitr, and Eid al-Adha follow the lunar calendar and shift approximately 11 days earlier each year. These periods significantly affect travel: many restaurants close during Ramadan daylight hours, and transport is very busy around Eid.',
              },
              {
                icon: Mountain,
                title: 'Prepare for Remote Festivals',
                desc: 'Imilchil, Taragalte, and M\'hamid festivals are in remote locations. Bring warm layers, sun protection, a headlamp, and essential medications. A 4x4 vehicle or organized tour is recommended for mountain festivals.',
              },
              {
                icon: Drumstick,
                title: 'Try the Festival Food',
                desc: 'Moroccan festivals always feature special food. Rose-flavored pastries at the Rose Festival, fresh cherries at Sefrou, dozens of date varieties at Erfoud, and street food at every music festival. Do not miss the iftar spreads during Ramadan.',
              },
              {
                icon: Info,
                title: 'Stay Connected',
                desc: 'Buy a Moroccan SIM card (Maroc Telecom, Orange, or Inwi) at any airport for 30-50 MAD with data. Coverage is good in cities but patchy at remote mountain and desert festivals. Download offline maps before heading to rural areas.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{tip.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Plan Your Trip Around a Festival
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Use our events calendar to find what is happening during your travel dates, or use the trip planner to build an itinerary around Morocco&apos;s best celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Full Events Calendar
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

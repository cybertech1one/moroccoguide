import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  Calendar,
  Clock,
  MapPin,
  UtensilsCrossed,
  Coffee,
  Star,
  Heart,
  Users,
  Camera,
  Eye,
  Shirt,
  Volume2,
  AlertTriangle,
  Check,
  X,
  ThumbsUp,
  ThumbsDown,
  ArrowRight,
  Sparkles,
  BookOpen,
  Building2,
  Wine,
  ShoppingBag,
  Lightbulb,
  PartyPopper,
  Gift,
  Music,
  Lamp,
  HandHeart,
  Info,
  Globe,
  Compass,
  Car,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Ramadan Travel Guide Morocco 2026-2027 | Complete Guide for Visitors',
  description:
    'Complete guide to visiting Morocco during Ramadan. Learn about iftar experiences, Ramadan dates 2026-2027, cultural etiquette, what changes, where to eat, suhoor traditions, Ramadan foods like harira and chebakia, Eid al-Fitr celebrations, photography tips, and practical advice for non-Muslim travelers.',
  keywords: [
    'Ramadan Morocco',
    'Morocco Ramadan travel guide',
    'Ramadan dates 2026',
    'Ramadan dates 2027',
    'iftar Morocco',
    'visiting Morocco during Ramadan',
    'Ramadan etiquette Morocco',
    'Eid al-Fitr Morocco',
    'Ramadan food Morocco',
    'harira soup',
    'chebakia',
    'suhoor Morocco',
    'Morocco Ramadan tips',
    'Ramadan experience Morocco',
    'should I visit Morocco during Ramadan',
    'Morocco Ramadan business hours',
    'Ramadan nightlife Morocco',
    'Fes Ramadan',
    'Marrakech Ramadan',
    'non-Muslim Ramadan Morocco',
    'Ramadan photography Morocco',
    'Ramadan dates Morocco',
    'briouats Ramadan',
    'sellou Morocco',
    'Moroccan Ramadan traditions',
  ],
  openGraph: {
    title: 'Ramadan Travel Guide Morocco - A Sacred Month of Hospitality',
    description:
      'Everything you need to know about visiting Morocco during Ramadan. Iftar experiences, cultural etiquette, Ramadan dates, food guide, and practical tips for respectful travel.',
    url: 'https://citytoursmorocco.com/ramadan',
    images: [
      {
        url: 'https://citytoursmorocco.com/images/poster-ramadan.webp',
        width: 1200,
        height: 630,
        alt: 'Ramadan in Morocco - lanterns and traditional food spread at sunset',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/ramadan' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': 'https://citytoursmorocco.com/ramadan',
  name: 'Ramadan Travel Guide Morocco',
  description:
    'Comprehensive guide to visiting Morocco during Ramadan, covering iftar experiences, cultural etiquette, Ramadan dates, food traditions, suhoor, photography tips, Eid al-Fitr celebrations, and practical advice for non-Muslim travelers.',
  url: 'https://citytoursmorocco.com/ramadan',
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
      { '@type': 'ListItem', position: 2, name: 'Ramadan Travel Guide', item: 'https://citytoursmorocco.com/ramadan' },
    ],
  },
};

/* ===================================================================
   WHAT IS RAMADAN - EXPLANATION FOR NON-MUSLIM TRAVELERS
   =================================================================== */

const ramadanExplained = [
  {
    title: 'The Five Pillars of Islam',
    description:
      'Ramadan fasting is one of the Five Pillars of Islam, the foundational acts of worship that define Muslim life. The others are the declaration of faith (shahada), prayer five times daily (salat), charitable giving (zakat), and the pilgrimage to Mecca (hajj). Fasting during Ramadan is therefore not a cultural tradition or a diet &mdash; it is a sacred religious obligation observed by approximately 1.8 billion Muslims worldwide.',
  },
  {
    title: 'Why Muslims Fast',
    description:
      'The fast is an act of devotion, self-discipline, and spiritual purification. By abstaining from food, drink, smoking, and physical pleasures from dawn to sunset, Muslims cultivate empathy for the hungry, gratitude for God\'s blessings, and a deeper connection to their faith. It is a month of heightened prayer, Quran recitation, charitable acts, and communal bonds. The fast is broken each evening with a sense of gratitude, celebration, and togetherness.',
  },
  {
    title: 'Who Fasts',
    description:
      'All healthy adult Muslims are expected to fast. Exemptions exist for children, the elderly, pregnant or nursing women, travelers on long journeys, people who are ill, and women during menstruation. Those who cannot fast are often expected to feed a person in need for each missed day (fidya) or make up the days later. In Morocco, the vast majority of the population fasts, and the communal commitment is visible and deeply felt.',
  },
  {
    title: 'The Islamic Calendar',
    description:
      'Ramadan is the ninth month of the Islamic lunar calendar, which is approximately 11 days shorter than the Gregorian solar calendar. This means Ramadan shifts earlier by about 11 days each year, cycling through all seasons over roughly 33 years. When Ramadan falls in summer, the fasting hours are longer and the heat makes the fast more challenging. In winter, the days are shorter and the fast is comparatively easier.',
  },
  {
    title: 'Ramadan in Moroccan Culture',
    description:
      'In Morocco, Ramadan is far more than a religious observance &mdash; it is the most significant cultural event of the year. The entire rhythm of the country transforms. Families reconnect, neighbors share food, streets come alive after dark, and a spirit of generosity and community pervades every city and village. For Moroccans, Ramadan is a time of spiritual renewal, family bonding, and social cohesion that rivals any holiday season in the Western world.',
  },
];

/* ===================================================================
   RAMADAN DATES
   =================================================================== */

const ramadanDates = [
  {
    year: '2026',
    start: 'February 18, 2026',
    end: 'March 19, 2026',
    eid: 'March 20, 2026',
    note: 'Falls in late winter/early spring. Shorter fasting hours (approximately 12-13 hours) and mild weather make this a comfortable period for both locals and visitors.',
  },
  {
    year: '2027',
    start: 'February 8, 2027',
    end: 'March 9, 2027',
    eid: 'March 10, 2027',
    note: 'Also in late winter. Similar conditions to 2026 with short fasting days. Pleasant temperatures for exploring cities and the Sahara.',
  },
  {
    year: '2028',
    start: 'January 28, 2028',
    end: 'February 26, 2028',
    eid: 'February 27, 2028',
    note: 'Shifts into the heart of winter. The shortest fasting hours of recent years. Cool evenings make iftar outdoors especially enjoyable.',
  },
  {
    year: '2029',
    start: 'January 16, 2029',
    end: 'February 14, 2029',
    eid: 'February 15, 2029',
    note: 'Deep winter Ramadan. Fasting hours are at their shortest. Morocco\'s mild winter climate makes this an ideal time for desert excursions and city exploration.',
  },
];

/* ===================================================================
   PROS AND CONS OF VISITING DURING RAMADAN
   =================================================================== */

const prosOfVisiting = [
  'Experience one of the most culturally rich periods in Morocco &mdash; a once-in-a-lifetime insight into Islamic life and community',
  'Moroccan hospitality reaches its peak during Ramadan. You may be invited to join families for iftar, creating unforgettable memories',
  'The evening atmosphere is magical: medinas buzz with energy, street food stalls appear everywhere, and the communal spirit is infectious',
  'Fewer tourists mean quieter attractions, better hotel deals, and more authentic interactions with locals',
  'Ramadan-specific foods like harira, chebakia, and briouats are available everywhere and are absolutely delicious',
  'The spiritual atmosphere adds a profound dimension to visiting mosques, medinas, and historic sites',
  'Eid al-Fitr celebrations at the end of Ramadan are joyous, colorful, and deeply moving to witness',
  'Prices for accommodation are often lower, especially during the first two weeks of the month',
];

const consOfVisiting = [
  'Most restaurants and cafes are closed during daylight hours. Tourist-oriented restaurants in major cities may remain open, but selection is limited',
  'Service can be slower as staff are fasting, hungry, and sometimes tired, especially in the late afternoon hours',
  'Shorter business hours for shops, banks, and government offices mean less time for practical errands',
  'Alcohol is not served in most establishments during Ramadan, though some international hotels maintain bar service for guests',
  'The hour before iftar sees intense traffic and near-empty streets as everyone rushes home to break the fast',
  'Public eating, drinking, and smoking during daylight hours is considered very disrespectful to those who are fasting',
  'Some tourist activities and excursions may have reduced schedules or be temporarily unavailable',
  'Daytime energy in cities is noticeably lower, with many people resting to conserve energy for the evening',
];

/* ===================================================================
   WHAT CHANGES DURING RAMADAN
   =================================================================== */

const whatChanges = [
  {
    icon: Clock,
    title: 'Business Hours',
    description:
      'Expect major changes to daily schedules. Government offices typically operate from 9 AM to 3 PM instead of the usual 8:30 AM to 6:30 PM. Banks close by 2 PM or 3 PM. Souks and shops in medinas may open late (around 10 AM), close by 3 PM, and reopen after iftar until midnight or later. Tourist attractions generally maintain normal hours, but some may close earlier. Supermarkets like Marjane and Carrefour keep relatively normal hours and are your best bet for daytime supplies.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Cafes',
    description:
      'The vast majority of Moroccan restaurants and street food stalls close during the day and reopen at iftar. In major tourist cities like Marrakech, Fes, and Essaouira, a handful of restaurants in tourist-heavy areas (Gueliz, Ville Nouvelle) remain open to serve visitors. International hotel restaurants always serve meals to guests throughout the day. After iftar, the food scene explodes: restaurants are packed, street vendors sell Ramadan specialties, and the atmosphere is festive. Plan your meals around this rhythm.',
  },
  {
    icon: Wine,
    title: 'Alcohol Availability',
    description:
      'Alcohol sales are restricted during Ramadan. Most Moroccan restaurants, bars, and nightclubs stop serving alcohol entirely for the month. Licensed international hotels (four and five star) generally continue to serve alcohol to guests in their bars and restaurants, but often with reduced hours. Supermarkets with alcohol licenses (Carrefour, Acima) may remove alcohol from shelves or restrict sales. If alcohol is important to your trip, book a hotel with a bar and stock up at the beginning of the month.',
  },
  {
    icon: Volume2,
    title: 'The Daily Rhythm',
    description:
      'Ramadan flips the Moroccan day upside down. Mornings are quiet and slow as people conserve energy. The streets grow progressively emptier as sunset approaches. Around 30 minutes before iftar, a palpable tension fills the air: streets clear, traffic becomes frantic, and shop owners begin closing up. Then the sunset call to prayer sounds, often accompanied by a cannon blast, and the country collectively exhales. Within minutes, streets are deserted as families gather indoors for iftar. About an hour later, the country emerges: streets fill, markets reopen, and a festive nighttime energy takes over until 2 or 3 AM.',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping & Souks',
    description:
      'The souks take on a different character during Ramadan. Morning hours are quiet and many stalls open late. The best shopping time shifts to the late afternoon (2-4 PM, before iftar) when vendors are eager to make sales before closing, and especially after iftar when the souks come alive with evening shoppers. Ramadan is actually an excellent time to shop because vendors are less aggressive and the atmosphere is more relaxed. You may find better prices as tourist footfall decreases.',
  },
  {
    icon: Car,
    title: 'Transport & Driving',
    description:
      'Public transport (trains, CTM buses) maintains regular schedules, though some local bus routes may be reduced. Grand taxis and petit taxis operate normally but can be harder to find in the hour before iftar. Traffic becomes dangerously fast and chaotic 30-60 minutes before sunset as fasting drivers race home. This is genuinely the most dangerous time to be on Moroccan roads during Ramadan. Avoid driving and stay off busy streets during this window.',
  },
];

/* ===================================================================
   IFTAR EXPERIENCE
   =================================================================== */

const iftarExperience = [
  {
    title: 'The Moment of Breaking Fast',
    description:
      'As the sunset call to prayer echoes across the city, the fast is broken with a date and a glass of water or milk, following the tradition of the Prophet Muhammad. This simple, deeply symbolic act is followed by the Maghrib prayer for observant Muslims. Then the table comes alive: bowls of steaming harira soup, plates of chebakia pastries dripping with honey, fresh-squeezed orange juice, boiled eggs, and an array of breads and pastries are shared among family and friends. The atmosphere is one of profound relief, gratitude, and joy.',
  },
  {
    title: 'The Iftar Table',
    description:
      'A typical Moroccan iftar table is a lavish spread. At its center is always harira, the iconic Ramadan soup made from tomatoes, lentils, chickpeas, and fresh herbs. Surrounding it you will find dates (a religious requirement for breaking fast), chebakia (sesame cookies in honey), briouats (savory and sweet stuffed pastries), hard-boiled eggs, msemen (layered flatbread), beghrir (spongy semolina pancakes called "thousand-hole pancakes"), fresh orange juice, and a selection of dried fruits and nuts. Each family has its own variations passed down through generations.',
  },
  {
    title: 'Where to Experience Iftar as a Visitor',
    description:
      'Many riads and hotels organize special iftar dinners for guests, often on beautiful rooftop terraces with views of the medina. This is the most accessible way for tourists to experience iftar. Some restaurants offer special Ramadan menus. In Marrakech, Jemaa el-Fnaa transforms at sunset with food stalls selling harira by the bowl. In Fes, the old medina fills with the aroma of communal cooking. The most meaningful iftar experience, however, is being invited into a Moroccan home. If this happens, accept without hesitation &mdash; it will be the highlight of your trip.',
  },
  {
    title: 'Iftar Etiquette for Guests',
    description:
      'If invited to iftar at a Moroccan home, arrive on time (just before sunset). Bring a gift: dates, pastries from a local patisserie, or fruit are all appropriate. Remove your shoes at the door. Wait for the host to begin before eating. You do not need to have fasted to participate &mdash; your presence is what matters. Express admiration for the food (Moroccans put enormous effort into Ramadan cooking). Eat generously, as your host will insist. Use your right hand. Saying "Bismillah" before eating and "Hamdullah" after shows cultural awareness.',
  },
  {
    title: 'Communal Iftar Tables',
    description:
      'Throughout Ramadan, charitable organizations, mosques, and wealthy individuals set up communal iftar tables (known as "tables de Ramadan" or "mawa\'id al-rahman") in public spaces. These long tables offer free iftar meals to anyone who needs them: the homeless, travelers, workers who cannot get home in time, and students. As a visitor, you are welcome to observe, and in many cases to sit and eat. These tables represent the spirit of Ramadan charity (sadaqa) at its most visible and beautiful.',
  },
];

/* ===================================================================
   SUHOOR - PRE-DAWN MEAL
   =================================================================== */

const suhoorInfo = [
  {
    title: 'What is Suhoor?',
    description:
      'Suhoor (also spelled sahur or sehri) is the pre-dawn meal eaten before the fast begins each day. It takes place in the quiet hours between about 3 AM and the dawn call to prayer (fajr), roughly around 5:30-6:00 AM depending on the time of year. Suhoor is considered spiritually important &mdash; the Prophet Muhammad recommended it, saying "Eat suhoor, for in suhoor there is blessing." The meal is meant to sustain the faster through the long daylight hours ahead.',
  },
  {
    title: 'What Moroccans Eat for Suhoor',
    description:
      'Suhoor in Morocco tends to be substantial and hydrating. Common foods include: msemen or harcha (griddle breads) with honey and butter, bissara (thick fava bean soup), leftover harira from iftar, eggs (scrambled, boiled, or in an omelet), amlou (a paste of almonds, argan oil, and honey), yogurt, fresh fruit, lots of water, and plenty of Moroccan mint tea. The goal is slow-release energy and hydration. Many families keep it simple, but the meal is always eaten together.',
  },
  {
    title: 'The Nafar (Town Crier)',
    description:
      'One of the most charming Ramadan traditions in Morocco is the nafar, a man who walks through neighborhoods in the pre-dawn darkness beating a drum or blowing a horn to wake people for suhoor. In some cities, the nafar calls out poetic verses or religious phrases. This tradition dates back centuries and persists in many Moroccan neighborhoods despite the availability of alarm clocks. At the end of Ramadan, families give the nafar a tip for his service. If you hear rhythmic drumming at 3 AM, that is Ramadan calling.',
  },
  {
    title: 'Experiencing Suhoor as a Visitor',
    description:
      'Most tourists sleep through suhoor, but if you are awake, it is a uniquely atmospheric experience. Some cafes and bakeries open in the very early hours to serve suhoor customers. The streets are dark and hushed, punctuated by the sound of the nafar\'s drum and quiet conversations. If staying with a Moroccan family or at a riad that offers the experience, waking for suhoor at least once during your trip is highly recommended. It reveals a side of Ramadan that daytime visitors never see.',
  },
];

/* ===================================================================
   RAMADAN FOODS
   =================================================================== */

const ramadanFoods = [
  {
    name: 'Harira',
    description:
      'The undisputed queen of Ramadan in Morocco. This rich, velvety soup is made from tomatoes, lentils, chickpeas, onions, celery, fresh coriander and parsley, and often small pieces of lamb or beef. It is thickened with flour or tedouira (a fermented flour mixture) and seasoned with ginger, cinnamon, turmeric, and pepper. Every family has their own recipe, and debates about whose mother makes the best harira are a Ramadan tradition. Served with fresh lemon wedges and dates, it is the first substantial food to hit an empty stomach at iftar.',
    category: 'Soup',
  },
  {
    name: 'Chebakia',
    description:
      'These intricate flower-shaped sesame cookies are the sweet heart of Moroccan Ramadan. The dough is flavored with anise, saffron, cinnamon, and orange blossom water, then shaped by hand into complex rosettes, deep-fried until golden, dipped in hot honey, and rolled in toasted sesame seeds. Making chebakia is a communal activity: women gather in groups days before Ramadan to produce hundreds of pieces. The process is labor-intensive and the results are extraordinary. Chebakia are paired with harira at every iftar table.',
    category: 'Pastry',
  },
  {
    name: 'Dates',
    description:
      'Dates hold deep religious significance in Ramadan. Following the Sunnah (tradition) of the Prophet Muhammad, the fast is broken with an odd number of dates (usually one or three) and water before the main meal. Morocco grows excellent dates, particularly the prized Medjool variety from the Draa-Tafilalet region and the Zagora area. During Ramadan, date vendors set up everywhere, and the markets overflow with dozens of varieties at every price point. Fresh, plump Medjool dates are the gold standard.',
    category: 'Fruit',
  },
  {
    name: 'Briouats',
    description:
      'These triangular or cigar-shaped pastries are stuffed with either savory or sweet fillings. Savory briouats contain seasoned minced meat, chicken with vermicelli, or spiced fish. Sweet versions are filled with toasted almonds, honey, and orange blossom water. The thin warqa pastry wrapper is similar to phyllo dough and becomes perfectly crispy when fried. Briouats are a classic iftar appetizer, prepared in bulk by families during Ramadan and served alongside harira and chebakia.',
    category: 'Pastry',
  },
  {
    name: 'Msemen & Beghrir',
    description:
      'These two traditional breads are Ramadan staples. Msemen is a square, flaky, layered flatbread cooked on a griddle, served with butter and honey or used to scoop harira. Beghrir, sometimes called "thousand-hole pancakes," are soft, spongy semolina crepes covered in tiny holes on one side that absorb melted butter and honey like little sponges. Both are made fresh daily during Ramadan, and the smell of msemen cooking on a griddle is one of the defining aromas of the season.',
    category: 'Bread',
  },
  {
    name: 'Sellou (Sfouf)',
    description:
      'This rich, no-bake energy mixture is unique to Moroccan Ramadan. Made from roasted flour, toasted almonds and sesame seeds, butter, honey, cinnamon, and anise, sellou is pressed into a dense, crumbly mound and served as a dessert or energy-sustaining snack. It is incredibly calorie-dense by design &mdash; a few spoonfuls provide sustained energy during fasting hours. Sellou is typically prepared in large batches before Ramadan begins and stored in the pantry throughout the month.',
    category: 'Sweet',
  },
  {
    name: 'Fresh Juices & Beverages',
    description:
      'Hydration is critical after a full day of fasting, and Moroccans take their Ramadan juices seriously. Fresh-squeezed orange juice is ubiquitous (Morocco is one of the world\'s largest orange producers). Other popular Ramadan beverages include almond milk flavored with orange blossom water, avocado smoothies, banana-date milkshakes, and a refreshing drink called chibr made from dried figs or dates soaked in water. The juice carts and stalls that appear at iftar time are a joyful sight.',
    category: 'Beverage',
  },
  {
    name: 'Regional Sweets & Specialties',
    description:
      'Beyond the classic chebakia, each region has its own Ramadan sweets. In Fes, you will find griouech, a similar honey-dipped pastry with a different shape. In the north, kaab el ghazal (gazelle horns) filled with almond paste are popular. Mhancha, the coiled "snake cake" of filo and almond, appears on Ramadan tables in Meknes. In the south, dates stuffed with almond paste and tinted green with food coloring are a specialty. Every bakery creates special Ramadan assortment boxes.',
    category: 'Sweet',
  },
];

/* ===================================================================
   CULTURAL ETIQUETTE DURING RAMADAN
   =================================================================== */

const etiquetteDos = [
  'Greet people with "Ramadan Mubarak" (Blessed Ramadan) or "Ramadan Kareem" (Generous Ramadan) &mdash; this is always warmly received',
  'Dress more conservatively than you might normally, even in tourist areas. Cover shoulders and knees as a sign of respect',
  'Be patient with slower service. Staff at hotels, restaurants, and shops are fasting and may be tired, especially in the afternoon',
  'Eat your daytime meals discreetly in your hotel room, a tourist restaurant, or away from public view',
  'Accept invitations to iftar with gratitude &mdash; refusing a Ramadan invitation is considered very rude in Moroccan culture',
  'Show genuine interest in Ramadan traditions. Moroccans love explaining their customs to respectful and curious visitors',
  'Carry water and snacks in your bag for daytime, but consume them privately and out of sight',
  'Adjust your schedule to match Ramadan rhythm: explore in the morning, rest midday, and enjoy the vibrant evenings',
  'Tip generously. Ramadan is a month of charity (sadaqa) and generosity is valued above all',
  'Express gratitude and respect. Simple phrases like "Hamdullah" and "Inshallah" show deep cultural awareness',
];

const etiquetteDonts = [
  'Do not eat, drink, or smoke in public during daylight hours. This is the single most important rule for visitors during Ramadan',
  'Do not chew gum visibly in public &mdash; it is considered equivalent to eating in front of fasting people',
  'Do not play loud music from speakers, especially near mosques or residential areas during the holy month',
  'Do not complain about closed restaurants or limited services. Embrace the rhythm rather than fighting it',
  'Do not offer food or drinks to Moroccans during fasting hours, even as a well-intentioned polite gesture',
  'Do not wear revealing clothing. Ramadan is a time of heightened modesty and spiritual focus across the country',
  'Do not schedule important meetings or business in the late afternoon when energy and patience are at their lowest',
  'Do not honk your horn aggressively in traffic before iftar &mdash; tempers are shorter than usual during fasting hours',
  'Do not assume all Muslims fast. Some have legitimate exemptions, and it is not your place to question or comment',
  'Do not take photos of people eating at iftar without permission, especially at communal charity tables',
];

/* ===================================================================
   NIGHTLIFE DURING RAMADAN
   =================================================================== */

const nightlifeDuringRamadan = [
  {
    title: 'The Transformation After Dark',
    description:
      'If daytime during Ramadan is quiet and contemplative, nighttime is its electric opposite. After iftar, Moroccan cities undergo a dramatic transformation. Streets that were deserted at sunset fill with families, children, vendors, and musicians. Shops reopen, cafes overflow with tea drinkers, and the atmosphere becomes festive and social in a way that normal nights never quite match. This energy peaks between 10 PM and 1 AM, but in major cities, activity continues until 3 or 4 AM.',
  },
  {
    title: 'Cafes & Tea Houses',
    description:
      'Cafes are the social epicenter of Ramadan nights. After iftar, Moroccans pour into their favorite cafes for mint tea, pastries, and hours of conversation. Outdoor terraces are packed, card games and backgammon boards come out, and the mood is warm and gregarious. As a tourist, sitting in a Ramadan-night cafe and soaking in the atmosphere is one of the best experiences you can have. No alcohol is served, but the social energy is intoxicating in its own right.',
  },
  {
    title: 'Street Life & Evening Markets',
    description:
      'Ramadan nights see the emergence of temporary markets and food stalls that do not exist during the rest of the year. In Marrakech, Jemaa el-Fnaa becomes even more vibrant than usual. In Fes, the Bab Boujloud area hums with activity. Vendors sell Ramadan sweets, dried fruits, nuts, freshly baked bread, and seasonal treats. Street performers, storytellers, and musicians appear. Children play in the streets well past midnight, their laughter mixing with the call of vendors and the aroma of cooking.',
  },
  {
    title: 'Tarawih Prayers',
    description:
      'After the Isha (night) prayer, mosques hold special Ramadan prayers called Tarawih. These extended prayers, during which the entire Quran is recited over the course of the month, draw large congregations. Even if you cannot enter the mosque as a non-Muslim, standing outside and listening to the recitation is a powerful experience. The voices of hundreds of worshippers, amplified softly through speakers, create an atmospheric soundscape that fills entire neighborhoods. Tarawih typically begins around 9 PM and lasts one to two hours.',
  },
  {
    title: 'Cultural Events & Entertainment',
    description:
      'During Ramadan, many Moroccan cities organize cultural programming: outdoor movie screenings, musical performances (particularly Andalusian and spiritual music), storytelling sessions, and art exhibitions. Television programming also peaks during Ramadan, with popular comedies and dramas that the entire nation watches and discusses. While nightclubs and bars are closed, the cultural entertainment scene is rich and varied. Check local event listings and ask your riad host for recommendations.',
  },
  {
    title: 'The Hours Between Midnight & Dawn',
    description:
      'The period from midnight to the pre-dawn suhoor meal has a unique atmosphere. Cafes thin out gradually, the streets grow quieter, and a contemplative stillness settles over the city. Then, around 3 AM, the nafar drummer walks through the streets, and a new cycle begins. If you are a night owl, these hours reveal a meditative side of Ramadan that contrasts beautifully with the evening energy. Some of the most atmospheric walks you can take in a Moroccan medina happen in these quiet pre-dawn hours.',
  },
];

/* ===================================================================
   BEST CITIES TO EXPERIENCE RAMADAN
   =================================================================== */

const bestCities = [
  {
    city: 'Fes',
    description:
      'The spiritual capital of Morocco and arguably the best place to experience Ramadan. The ancient medina of Fes el-Bali, a UNESCO World Heritage Site, becomes a living museum of Ramadan traditions. The narrow alleyways fill with the aroma of harira and chebakia wafting from every home. The Kairaouine Mosque, one of the oldest universities in the world, holds powerful Tarawih prayers that draw thousands. Fes has the most deeply traditional Ramadan atmosphere in Morocco: less touristy, more authentically spiritual. The Bab Boujloud area after iftar is magnificent.',
    highlights: [
      'Kairaouine Mosque Tarawih prayers &mdash; listen from outside the ancient walls',
      'Bab Boujloud evening atmosphere with food stalls and overflowing cafes',
      'Traditional Fassi iftar at a medina riad with centuries-old recipes',
      'Rcif Square evening market with Ramadan specialties and regional sweets',
      'The deeply spiritual atmosphere of the world\'s oldest continuously inhabited medina',
    ],
  },
  {
    city: 'Marrakech',
    description:
      'Marrakech offers the most accessible Ramadan experience for tourists. The city is well-equipped to host visitors year-round, so finding daytime meals at tourist restaurants is easier here than anywhere else. Jemaa el-Fnaa at sunset during Ramadan is an extraordinary spectacle: the entire square transforms as hundreds of food stalls light up simultaneously and the aroma of harira fills the air. The Koutoubia Mosque\'s call to prayer at iftar time, echoing across the square, is one of Morocco\'s most iconic sounds.',
    highlights: [
      'Jemaa el-Fnaa at sunset &mdash; the spectacular iftar transformation of the entire square',
      'Koutoubia Mosque call to prayer at Maghrib echoing across the medina',
      'Rooftop riad iftar dinners with panoramic Atlas Mountain views',
      'Evening souks in the medina after iftar &mdash; vibrant and festive',
      'Gueliz neighborhood for tourist-friendly daytime dining options',
    ],
  },
  {
    city: 'Chefchaouen',
    description:
      'The Blue City takes on an even more magical quality during Ramadan. The small-town atmosphere means the communal spirit is intimate and personal. As sunset approaches, the blue-washed alleyways empty completely, then gradually refill with neighbors greeting each other, children playing, and the sound of conversation and laughter. The main square, Place Outa el-Hammam, becomes a gathering point for evening socializing. Chefchaouen\'s compact size means you feel the pulse of Ramadan everywhere you walk.',
    highlights: [
      'Place Outa el-Hammam evening gathering with the entire community',
      'Intimate small-town Ramadan atmosphere with genuine neighborly warmth',
      'Blue medina photography in the golden evening light after iftar',
      'Mountain air and quiet mornings perfect for Rif Mountain hiking',
      'Rif Mountain hospitality and home-cooked iftar invitations',
    ],
  },
  {
    city: 'Essaouira',
    description:
      'The coastal wind city offers a relaxed, bohemian Ramadan experience. The fishing port continues to operate, and the sight of fishermen breaking fast at sunset on the harbor wall is deeply memorable. The medina\'s cafes and restaurants along the ramparts reopen after iftar with ocean views. Essaouira has a more progressive, arts-oriented community, and the Ramadan atmosphere is warm without being overwhelming. The beach remains accessible throughout, and the mild coastal climate makes daytime exploration comfortable.',
    highlights: [
      'Fishermen breaking fast at the harbor wall as the sun sets over the Atlantic',
      'Rampart-top cafes reopening after iftar with stunning ocean panoramas',
      'Relaxed, artistic medina atmosphere &mdash; less intense than larger cities',
      'Beach walks and ocean air during fasting hours for daytime exploration',
      'Gnaoua musicians performing spiritual music in the evening streets',
    ],
  },
];

/* ===================================================================
   PHOTOGRAPHY TIPS DURING RAMADAN
   =================================================================== */

const photographyTips = [
  {
    title: 'Golden Hour at Iftar',
    description:
      'The most photogenic moment of Ramadan is the minutes surrounding iftar. The warm golden light of sunset, the rush of people heading home, the empty streets, and then the sudden emergence of life make for a dramatic visual narrative. Position yourself on a rooftop terrace, a high vantage point, or in a main square 30 minutes before sunset to capture the transformation. The light quality at this time of day is superb for warm, atmospheric images.',
  },
  {
    title: 'Always Ask Permission',
    description:
      'This rule applies always in Morocco, but is especially important during Ramadan. People are engaged in religious observance, and photographing them during prayer, while breaking fast, or during moments of devotion without consent is deeply disrespectful. Ask first, accept refusals gracefully, and offer to share the photo. Photographing women and children requires particular sensitivity. A smile, a gesture toward your camera, and the word "Mumkin?" (Is it possible?) go a long way.',
  },
  {
    title: 'Food Photography',
    description:
      'Ramadan food is extraordinarily photogenic. The rich colors of harira, the intricate shapes of chebakia, the glistening dates, and the elaborate iftar spreads make for stunning images. If invited to iftar, ask your host before photographing the table. Most families are proud of their Ramadan cooking and happy to let you document it. Markets overflowing with Ramadan ingredients &mdash; mountains of dates, stacks of msemen, trays of chebakia &mdash; are also excellent subjects with wonderful colors and textures.',
  },
  {
    title: 'Night Photography',
    description:
      'Ramadan nights are a photographer\'s dream. The warm glow of lanterns, the activity of night markets, the illuminated mosques, and the social energy of cafes create images that are uniquely atmospheric. Bring a tripod or a camera with good low-light performance. The blue hour (just after sunset) combined with the warm interior lights of shops and cafes produces a beautiful contrast. Fes and Marrakech medinas at night during Ramadan are among the most photogenic scenes in all of Morocco.',
  },
  {
    title: 'Mosque Exteriors & Minarets',
    description:
      'During Ramadan, mosques are especially beautiful, often decorated with lights and banners. You cannot enter most mosques as a non-Muslim, but the exteriors and minarets are wonderful subjects. The Koutoubia in Marrakech, the Hassan Tower in Rabat, and the minarets of Fes el-Bali are all spectacular during Ramadan, especially when illuminated at night. The call to prayer at sunset, with pigeons scattering from the minaret, is a classic shot worth waiting for patiently.',
  },
  {
    title: 'Document the Quiet Moments',
    description:
      'Some of the most powerful Ramadan images capture the quiet: an empty medina alley at midday, a shopkeeper resting in the shade, an elderly man reading the Quran in a doorway, the pre-dawn darkness before suhoor. These contemplative images balance the vibrant evening scenes and tell a more complete story of the month. The contrast between daytime stillness and nighttime energy is the visual essence of Ramadan and makes for a compelling photo series.',
  },
];

/* ===================================================================
   PRACTICAL TIPS FOR NON-MUSLIM TRAVELERS
   =================================================================== */

const practicalTips = [
  {
    icon: UtensilsCrossed,
    title: 'Eating During the Day',
    description:
      'You are not expected to fast, but you should eat discreetly. Your hotel will serve meals throughout the day. In cities like Marrakech, Casablanca, and Tangier, some tourist restaurants in the Ville Nouvelle or Gueliz neighborhoods stay open during daylight hours. Pack snacks and water in your bag for when you are out exploring. Eat in your room, at your hotel, or in any open restaurant. Just do not eat or drink while walking through the streets or in direct view of fasting locals. Convenience stores (hanout) remain open and sell packaged snacks.',
  },
  {
    icon: Coffee,
    title: 'Staying Hydrated',
    description:
      'Carry a water bottle in your bag and drink when you need to, but do so discreetly. Step into a doorway, a quiet alley, or find a park bench away from crowds rather than drinking while walking through a busy souk. If Ramadan falls in warmer months, hydration is critical &mdash; do not compromise your health out of excessive politeness. Your well-being comes first. Most Moroccans understand that visitors are not fasting and will not be offended if they see you drink quietly and discreetly.',
  },
  {
    icon: Clock,
    title: 'Plan Around Iftar',
    description:
      'The single most important scheduling tip: know what time iftar is each day and plan your activities accordingly. The 30-60 minutes before iftar are the worst time to be doing anything &mdash; roads are dangerous, shops are closing, and everyone is focused on getting home. Use this window to be safely at your hotel or a restaurant. Conversely, the hour after iftar is magical: join the city as it comes alive. Structure your days to explore in the morning (9 AM to 1 PM), rest in the afternoon, and enjoy the evening transformation.',
  },
  {
    icon: Building2,
    title: 'Hotel Selection',
    description:
      'Choose your accommodation wisely during Ramadan. International chain hotels (Sofitel, Four Seasons, Marriott) will serve meals all day, often have a bar, and maintain a normal schedule for guests. Traditional riads in the medina offer a more authentic experience and many host special iftar dinners, but daytime services may be reduced. Wherever you stay, confirm in advance what meals are available during Ramadan. Some budget accommodations may reduce breakfast offerings or serve breakfast later than usual.',
  },
  {
    icon: Compass,
    title: 'Sightseeing & Activities',
    description:
      'Major attractions like the Hassan II Mosque, the Bahia Palace, the Saadian Tombs, and the Royal Palace in Fes maintain normal visiting hours during Ramadan. Museums generally stay open but may close an hour early. Guided tours still operate, though some guides may be fasting and less energetic in the afternoon. Desert excursions, trekking, and outdoor activities continue but it is respectful to choose guides and drivers who are comfortable working while fasting. Mornings are the best time for active sightseeing.',
  },
  {
    icon: ShoppingBag,
    title: 'Money & Banking',
    description:
      'ATMs operate 24/7 as usual throughout Ramadan. However, banks have reduced hours (typically closing by 2-3 PM). Currency exchange offices may also close earlier than normal. Ensure you have enough cash before the afternoon, especially if heading to remote areas. Credit cards are accepted at major hotels and tourist restaurants but many smaller businesses, particularly in medinas, are cash-only. During the first few days of Ramadan, banks and ATMs can be especially busy as people prepare financially for the month.',
  },
  {
    icon: Heart,
    title: 'Embrace the Experience',
    description:
      'The travelers who enjoy Ramadan in Morocco most are those who fully embrace the rhythm rather than fighting it. Wake early, explore in the morning, rest in the heat of the afternoon, and then join the evening festivities. Accept every iftar invitation. Try all the Ramadan foods. Stay up late and sleep in. Let go of your normal schedule and flow with the Moroccan Ramadan pace. The inconveniences are real but minor compared to the cultural richness you gain. Many visitors say Ramadan was the most memorable travel experience of their lives.',
  },
];

/* ===================================================================
   EID AL-FITR CELEBRATIONS
   =================================================================== */

const eidCelebrations = [
  {
    title: 'What is Eid al-Fitr?',
    description:
      'Eid al-Fitr (the "Festival of Breaking the Fast") marks the end of Ramadan and is one of the two most important holidays in Islam. In Morocco, it is a national holiday with one to three days off work. The celebration begins with a special morning prayer (Salat al-Eid) held in large open-air prayer grounds (musalla) or mosques. After the prayer, the day is devoted to visiting family, feasting, gift-giving, and joyous celebration. The mood is one of pure happiness, relief, and gratitude after a month of spiritual discipline.',
  },
  {
    title: 'Morning Prayer & Family Visits',
    description:
      'Eid morning begins early. Families dress in their finest clothes &mdash; often brand new outfits purchased specifically for the occasion. Men and boys head to the mosque or musalla for the Eid prayer, a short, special prayer followed by a sermon (khutba). After the prayer, the streets fill with families visiting relatives, starting with the eldest members. The greeting is "Eid Mubarak" (Blessed Eid) or in Moroccan Arabic, "Mbarak Eid" or "Saha Eidkoum." Kissing cheeks, embracing warmly, and exchanging gifts are the order of the day.',
  },
  {
    title: 'The Feast',
    description:
      'After a month of fasting, Eid al-Fitr is a celebration of food and abundance. The morning begins with traditional Moroccan breakfast pastries: msemen, baghrir, and rziza drizzled with butter and honey, alongside fresh bread, olive oil, and mint tea. The main Eid meal varies by family but often features a whole roast lamb, chicken bastilla, couscous with seven vegetables, or a special tagine prepared with care. Sweets are everywhere: mille-feuille, cornes de gazelle, ghriba cookies, and elaborate trays of assorted Moroccan pastries.',
  },
  {
    title: 'New Clothes & Gifts',
    description:
      'Buying new clothes for Eid, particularly for children, is a deeply ingrained tradition in Moroccan culture. In the weeks leading up to Eid, clothing shops are packed and tailors work overtime to fill orders. Children receive gifts, money, and sweets from relatives and neighbors. It is common for adults to give children small amounts of money (similar to Eid-iyya in other Muslim countries). If you are in Morocco during Eid, the fashion display is wonderful to observe: families in immaculate traditional djellabas and kaftans fill the streets in a riot of color.',
  },
  {
    title: 'Experiencing Eid as a Visitor',
    description:
      'Eid is a family-centered holiday, so many businesses close for one to three days. This can make logistics challenging: restaurants, shops, and tourist services operate on minimal schedules. However, the festive atmosphere more than compensates for any inconvenience. Streets are lively, people are genuinely happy, and the generosity of spirit often extends warmly to visitors. If you have Moroccan friends or hosts, you may be invited to join Eid celebrations &mdash; this is an extraordinary honor. Bring sweets or pastries as a gift.',
  },
  {
    title: 'Zakat al-Fitr',
    description:
      'Before the Eid prayer, every Muslim is required to give Zakat al-Fitr, a mandatory charitable contribution of food or its monetary equivalent. This ensures that even the poorest members of the community can celebrate Eid with a proper meal and dignity. In Morocco, the amount is typically the price of a few kilograms of grain or flour. This act of communal responsibility is the final act of Ramadan and powerfully embodies the month\'s emphasis on charity, empathy, and social solidarity.',
  },
];

/* ===================================================================
   RELATED PAGES
   =================================================================== */

const relatedPages = [
  {
    title: 'Moroccan Culture & Traditions',
    description: 'Deep dive into Islamic heritage, Berber traditions, arts, music, and the cultural tapestry of Morocco.',
    href: '/culture',
  },
  {
    title: 'Etiquette & Customs Guide',
    description: 'Essential guide to Moroccan greetings, dress code, dining traditions, tipping, and social norms.',
    href: '/etiquette',
  },
  {
    title: 'Moroccan Food & Cuisine',
    description: 'Complete guide to tagine, couscous, street food, spices, regional specialties, and dining.',
    href: '/food',
  },
  {
    title: 'Best Time to Visit Morocco',
    description: 'Month-by-month breakdown of weather, festivals, crowds, and prices to help you plan your trip.',
    href: '/best-time',
  },
  {
    title: 'Moroccan Festivals & Events',
    description: 'Guide to the top festivals including Gnaoua, Mawazine, Fes Sacred Music, and more.',
    href: '/festivals',
  },
  {
    title: 'Safety & Health in Morocco',
    description: 'Practical advice on staying safe, health precautions, emergency contacts, and travel insurance.',
    href: '/safety',
  },
];

/* ===================================================================
   PAGE COMPONENT (Server)
   =================================================================== */

export default function RamadanPage() {
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
            src="/images/poster-ramadan.webp"
            alt="Ramadan in Morocco - lanterns illuminating a traditional iftar table at sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Ramadan Travel Guide</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Sacred Month of Fasting &amp; Hospitality
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ramadan in Morocco: A Traveler&apos;s Complete Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Visiting Morocco during Ramadan is one of the most culturally immersive experiences a
              traveler can have. This guide covers everything you need to know &mdash; from iftar
              traditions and etiquette to practical tips for navigating the holy month with respect
              and wonder.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── What is Ramadan ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Moon className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What is Ramadan?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A guide for non-Muslim travelers to understand the significance, meaning, and daily
              reality of the holiest month in the Islamic calendar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {ramadanExplained.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ramadan Dates ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Ramadan Dates 2026&ndash;2029
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Ramadan follows the Islamic lunar calendar, moving approximately 11 days earlier each year.
            Exact dates are confirmed by moon sighting and may vary by a day. All dates below are
            approximate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ramadanDates.map((item) => (
              <div key={item.year} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg"
                    style={{ backgroundColor: '#A0522D', color: '#FAF8F5' }}
                  >
                    {item.year}
                  </span>
                  <p className="text-[var(--text-primary)] font-bold font-[family-name:var(--font-display)]">
                    Ramadan {item.year}
                  </p>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Sunrise className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-[var(--text-secondary)] text-sm">
                      <strong>Start:</strong> {item.start}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sunset className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-[var(--text-secondary)] text-sm">
                      <strong>End:</strong> {item.end}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PartyPopper className="w-4 h-4" style={{ color: '#C4960C' }} />
                    <span className="text-[var(--text-secondary)] text-sm">
                      <strong>Eid al-Fitr:</strong> {item.eid}
                    </span>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 border-l-4" style={{ borderLeftColor: '#C4960C' }}>
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#C4960C' }} />
              <div>
                <p className="text-[var(--text-primary)] font-bold font-[family-name:var(--font-display)] mb-1">
                  Important Note on Dates
                </p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  The Islamic calendar is based on lunar observation, not astronomical calculation. The
                  start of Ramadan is officially declared when religious authorities sight the new crescent
                  moon. This means the actual start date may differ by one day from predictions. Morocco
                  follows the announcement of the Ministry of Habous and Islamic Affairs. Final confirmation
                  typically comes the evening before Ramadan begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Should You Visit During Ramadan? ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Should You Visit Morocco During Ramadan?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The honest answer: it depends on what kind of traveler you are. Here is a balanced
              assessment to help you decide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pros Card */}
            <div className="card-moroccan p-6 md:p-8 border-l-4 border-l-green-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2.5 rounded-xl bg-green-100">
                  <ThumbsUp className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Reasons to Visit
                </h3>
              </div>
              <ul className="space-y-3">
                {prosOfVisiting.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons Card */}
            <div className="card-moroccan p-6 md:p-8 border-l-4 border-l-red-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2.5 rounded-xl bg-red-100">
                  <ThumbsDown className="w-5 h-5 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Challenges to Consider
                </h3>
              </div>
              <ul className="space-y-3">
                {consOfVisiting.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 max-w-5xl mx-auto card-moroccan p-6 md:p-8 text-center">
            <p className="text-[var(--text-primary)] font-bold font-[family-name:var(--font-display)] text-lg mb-2">
              Our Verdict
            </p>
            <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed max-w-3xl mx-auto">
              If you are a culturally curious traveler who values authentic experiences over convenience,
              Ramadan is one of the most rewarding times to visit Morocco. The temporary inconveniences are
              far outweighed by the depth of cultural immersion, the warmth of Moroccan hospitality at its
              peak, and the magical evening atmosphere. If you primarily want beach holidays, nightlife, or
              hassle-free dining, consider visiting outside of Ramadan.
            </p>
          </div>
        </div>
      </section>

      {/* ── What Changes During Ramadan ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <AlertTriangle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              What Changes During Ramadan
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Ramadan transforms nearly every aspect of daily life in Morocco. Understanding these
            changes is essential for planning a smooth, respectful trip.
          </p>

          <div className="space-y-6">
            {whatChanges.map((item) => (
              <div key={item.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                    <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Iftar Experience ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sunset className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Iftar Experience
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Breaking the fast at sunset is the emotional and social heart of Ramadan. As a visitor,
              experiencing iftar is the single most important thing you can do during this month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {iftarExperience.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <HandHeart className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Suhoor ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Sunrise className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Suhoor: The Pre-Dawn Meal
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            While iftar gets all the attention, suhoor &mdash; the meal before dawn &mdash; has its
            own quiet beauty and ritual significance in Moroccan Ramadan life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suhoorInfo.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Eat During Ramadan ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What to Eat During Ramadan
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Ramadan has its own unique culinary traditions. These are the foods that define the
              holy month in Morocco and that you absolutely must try.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ramadanFoods.map((food) => (
              <div key={food.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {food.name}
                  </h3>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: '#EDE8E0', color: '#A0522D' }}
                  >
                    {food.category}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {food.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/food"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
            >
              Explore the full Moroccan Food &amp; Cuisine Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cultural Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Eye className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Ramadan Etiquette for Visitors
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Respect is the foundation of a good Ramadan experience. These guidelines will help you
              navigate the month with sensitivity and cultural awareness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Do's Card */}
            <div className="card-moroccan p-6 md:p-8 border-l-4 border-l-green-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2.5 rounded-xl bg-green-100">
                  <Check className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Do This
                </h3>
              </div>
              <ul className="space-y-3">
                {etiquetteDos.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts Card */}
            <div className="card-moroccan p-6 md:p-8 border-l-4 border-l-red-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2.5 rounded-xl bg-red-100">
                  <X className="w-5 h-5 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Avoid This
                </h3>
              </div>
              <ul className="space-y-3">
                {etiquetteDonts.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nightlife During Ramadan ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Lamp className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Nightlife During Ramadan
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Forget clubs and cocktails. Ramadan nightlife is something entirely different and, in many
            ways, more memorable: cities come alive with communal energy, street food, music, and a
            warmth that no nightclub can replicate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nightlifeDuringRamadan.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Cities to Experience Ramadan ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Cities to Experience Ramadan
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              While Ramadan transforms every corner of Morocco, these cities offer the most memorable
              and accessible experiences for visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {bestCities.map((item) => (
              <div key={item.city} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ backgroundColor: '#A0522D', color: '#FAF8F5' }}
                  >
                    <MapPin className="w-5 h-5" />
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.city}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-4">
                  {item.description}
                </p>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">Highlights:</p>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Star className="w-3.5 h-3.5 shrink-0 mt-1" style={{ color: '#C4960C' }} />
                        <span className="text-[var(--text-secondary)] text-sm leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photography Tips ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Photography Tips During Ramadan
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Ramadan offers extraordinary photographic opportunities, but requires extra sensitivity.
            Here is how to capture the beauty of the month while respecting the sacred atmosphere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Camera className="w-4 h-4 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/photography"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
            >
              See the full Morocco Photography Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Practical Tips for Non-Muslim Travelers ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Lightbulb className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Practical Tips for Non-Muslim Travelers
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Straightforward, honest advice to help you navigate the practical realities of
              traveling in Morocco during Ramadan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {practicalTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                    <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eid al-Fitr Celebrations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <PartyPopper className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Eid al-Fitr: The Festival of Breaking the Fast
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The joyous conclusion of Ramadan is a celebration of gratitude, family, feasting, and
              new beginnings. Being in Morocco for Eid is a truly special experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {eidCelebrations.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="w-5 h-5" style={{ color: '#C4960C' }} />
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Reference: Daily Schedule ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Clock className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              A Typical Ramadan Day: Quick Reference
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                time: '3:00 - 4:00 AM',
                icon: Moon,
                event: 'Nafar Drummer',
                detail: 'The traditional town crier walks through neighborhoods drumming to wake people for suhoor.',
              },
              {
                time: '4:00 - 5:30 AM',
                icon: Coffee,
                event: 'Suhoor (Pre-Dawn Meal)',
                detail: 'Families eat the last meal before the fast begins. Hearty, hydrating foods.',
              },
              {
                time: '~5:30 - 6:00 AM',
                icon: Sunrise,
                event: 'Fajr (Dawn Prayer)',
                detail: 'The call to prayer marks the official start of the daily fast. No food, drink, or smoking from this point.',
              },
              {
                time: '9:00 AM - 1:00 PM',
                icon: Sun,
                event: 'Morning Activity',
                detail: 'Best time for sightseeing. Shops and attractions are open. Streets are quiet but functional.',
              },
              {
                time: '1:00 - 4:00 PM',
                icon: Clock,
                event: 'Afternoon Slowdown',
                detail: 'Energy drops across the country. Many shops close. Service is slow. Good time to rest at your hotel.',
              },
              {
                time: '4:00 - 5:30 PM',
                icon: AlertTriangle,
                event: 'Pre-Iftar Rush',
                detail: 'Streets empty, traffic becomes dangerous, shops close. Stay off the roads. Be at your hotel or restaurant.',
              },
              {
                time: '~5:30 - 6:30 PM',
                icon: Sunset,
                event: 'Iftar (Breaking the Fast)',
                detail: 'The cannon or call to prayer signals iftar. Streets are deserted as everyone eats. A sacred, quiet moment.',
              },
              {
                time: '7:00 - 9:00 PM',
                icon: Users,
                event: 'Post-Iftar Revival',
                detail: 'The city comes alive. Shops reopen, families stroll, cafes fill with tea drinkers, street vendors appear.',
              },
              {
                time: '9:00 - 11:00 PM',
                icon: Building2,
                event: 'Tarawih Prayers',
                detail: 'Special Ramadan prayers at mosques. The recitation fills entire neighborhoods with a beautiful atmosphere.',
              },
              {
                time: '11:00 PM - 2:00 AM',
                icon: Sparkles,
                event: 'Late Night Energy',
                detail: 'Peak social time in Morocco. Cafes, markets, and streets are bustling. The best time to explore the medina.',
              },
            ].map((slot) => (
              <div key={slot.time} className="card-moroccan p-4 md:p-5 flex items-start gap-4">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 shrink-0">
                  <slot.icon className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                    <span className="text-sm font-mono font-semibold" style={{ color: '#A0522D' }}>
                      {slot.time}
                    </span>
                    <span className="text-[var(--text-primary)] font-bold font-[family-name:var(--font-display)]">
                      {slot.event}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {slot.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Arabic Phrases for Ramadan ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Key Arabic Phrases for Ramadan
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl leading-relaxed">
            Using even a few Arabic phrases during Ramadan shows respect and will be met with warm
            appreciation. Here are the essential ones for visitors.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              {
                arabic: 'Ramadan Mubarak',
                translation: 'Blessed Ramadan',
                usage: 'The standard Ramadan greeting. Use it freely with everyone you meet throughout the month.',
              },
              {
                arabic: 'Ramadan Kareem',
                translation: 'Generous Ramadan',
                usage: 'Another common greeting, especially used when someone shares food or shows generosity.',
              },
              {
                arabic: 'Ftour Mubarak',
                translation: 'Blessed Iftar',
                usage: 'Said at the time of breaking fast. Perfect to use at an iftar gathering or dinner.',
              },
              {
                arabic: 'Bismillah',
                translation: 'In the name of God',
                usage: 'Said before eating. Shows respect and cultural awareness at the iftar table.',
              },
              {
                arabic: 'Hamdullah',
                translation: 'Praise be to God',
                usage: 'Said after eating, after sneezing, or when expressing gratitude for any blessing.',
              },
              {
                arabic: 'Saha Ftourkoum',
                translation: 'May your iftar be blessed',
                usage: 'A Moroccan-specific phrase to wish someone a good iftar. Highly appreciated by locals.',
              },
              {
                arabic: 'Eid Mubarak',
                translation: 'Blessed Eid',
                usage: 'Used at the end of Ramadan during the Eid al-Fitr celebrations.',
              },
              {
                arabic: 'Tqabbal Allah',
                translation: 'May God accept (your fasting)',
                usage: 'A respectful phrase acknowledging someone\'s religious devotion during Ramadan.',
              },
              {
                arabic: 'Allah y barek fik',
                translation: 'May God bless you',
                usage: 'A warm expression of thanks, especially after receiving hospitality or kindness.',
              },
            ].map((phrase) => (
              <div key={phrase.arabic} className="card-moroccan p-5">
                <p className="text-lg font-bold font-[family-name:var(--font-display)]" style={{ color: '#A0522D' }}>
                  {phrase.arabic}
                </p>
                <p className="text-[var(--text-primary)] font-semibold text-sm mb-2">
                  &ldquo;{phrase.translation}&rdquo;
                </p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {phrase.usage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Globe className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Your Research
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Complement your Ramadan knowledge with these related guides to make your Morocco trip
              unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-6 group hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {page.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                  Read guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

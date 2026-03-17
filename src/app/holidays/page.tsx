import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Calendar,
  CalendarDays,
  CalendarCheck,
  Star,
  Moon,
  Sun,
  Clock,
  Landmark,
  Flag,
  Users,
  ShoppingBag,
  Car,
  Train,
  Plane,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  ArrowRight,
  MapPin,
  Utensils,
  Building2,
  BookOpen,
  Heart,
  Sparkles,
  Globe,
  CircleDot,
  TrendingUp,
  Briefcase,
  Coffee,
  Gift,
  PartyPopper,
  Banknote,
  HelpCircle,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Public Holidays & Bank Holidays 2025-2026 | Complete Calendar | CityGuide',
  description:
    'Complete guide to Morocco public holidays and bank holidays for 2025-2026. Fixed national holidays, Islamic holiday dates, what closes, travel impact during Eid al-Adha, Ramadan hours, business hours, and planning tips for tourists and residents.',
  keywords: [
    'Morocco public holidays',
    'Morocco bank holidays 2025',
    'Morocco bank holidays 2026',
    'Eid al-Adha Morocco',
    'Eid al-Fitr Morocco',
    'Ramadan Morocco',
    'Morocco national holidays',
    'Morocco holiday calendar',
    'Morocco business hours',
    'Throne Day Morocco',
    'Independence Day Morocco',
    'Islamic holidays Morocco',
    'Mawlid Morocco',
    'Morocco travel holidays',
    'Morocco what closes on holidays',
    'Morocco Ramadan hours',
    'Green March Day Morocco',
    'Labour Day Morocco',
    'Morocco holiday travel tips',
    'Morocco internal travel',
  ],
  openGraph: {
    title: 'Morocco Public Holidays & Bank Holidays 2025-2026 - CityGuide',
    description:
      'Complete calendar of Morocco public holidays for 2025-2026 including fixed national holidays, Islamic holidays with approximate dates, business hours, and practical travel planning tips.',
    url: 'https://citytoursmorocco.com/holidays',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Moroccan celebration with festive decorations and traditional architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Public Holidays & Bank Holidays 2025-2026 | CityGuide',
    description:
      'Full calendar of Moroccan national and Islamic holidays, business hours, Ramadan schedules, and travel planning tips for 2025-2026.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/holidays' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://citytoursmorocco.com/holidays',
  name: 'Morocco Public Holidays & Bank Holidays 2025-2026',
  description:
    'Comprehensive guide to Morocco public holidays and bank holidays for 2025-2026, including fixed national holidays, Islamic religious holidays with approximate dates, business hours, and practical planning tips for tourists and residents.',
  url: 'https://citytoursmorocco.com/holidays',
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
      { '@type': 'ListItem', position: 2, name: 'Public Holidays', item: 'https://citytoursmorocco.com/holidays' },
    ],
  },
};

/* ===================================================================
   FIXED NATIONAL HOLIDAYS DATA
   =================================================================== */

const fixedHolidays = [
  {
    name: 'New Year\u2019s Day',
    date: 'January 1',
    arabicName: 'Ras as-Sana al-Miladia',
    description:
      'While Morocco is a Muslim-majority country, New Year\u2019s Day is an official public holiday. Banks and government offices close. Celebrations are generally low-key compared to Western countries, though major cities like Casablanca and Marrakech host gatherings in upscale hotels and restaurants. Many Moroccans treat it as a regular day off rather than a festive occasion. Tourist areas remain open and unaffected.',
    impact: 'Low',
    icon: PartyPopper,
  },
  {
    name: 'Independence Manifesto Day',
    date: 'January 11',
    arabicName: 'Dhikra Takdim Wathiqat al-Istiqlal',
    description:
      'Commemorates the signing of the Independence Manifesto on January 11, 1944, when Moroccan nationalists formally demanded independence from French and Spanish colonial rule. The document was presented to Sultan Mohammed V, marking a pivotal moment in the independence movement. Official ceremonies and flag-raising events take place across the country. Schools, banks, and government offices close.',
    impact: 'Low',
    icon: BookOpen,
  },
  {
    name: 'Labour Day',
    date: 'May 1',
    arabicName: 'Eid ash-Shughl',
    description:
      'International Workers\u2019 Day is observed as a public holiday throughout Morocco. Trade unions organize marches and rallies in major cities, particularly Casablanca and Rabat. Banks and government offices close, and some businesses may close or operate with reduced hours. Tourist-oriented businesses, restaurants in tourist areas, and medina shops generally remain open. It is a good day to explore the medina while avoiding administrative errands.',
    impact: 'Low',
    icon: Briefcase,
  },
  {
    name: 'Throne Day',
    date: 'July 30',
    arabicName: 'Eid al-Arsh',
    description:
      'Morocco\u2019s most important national holiday celebrates the anniversary of King Mohammed VI\u2019s accession to the throne in 1999. The King delivers a nationally televised speech, and festivities include parades, fireworks, concerts, and public celebrations across the country. Buildings and streets are decorated with Moroccan flags and portraits of the King. Cities come alive with music and festivities that can last several days. It is an excellent time to experience Moroccan patriotic spirit.',
    impact: 'Medium',
    icon: Star,
  },
  {
    name: 'Allegiance of Oued Eddahab Day',
    date: 'August 14',
    arabicName: 'Dhikra Istirja\u2019 Oued Eddahab',
    description:
      'Marks the return of the Oued Eddahab region (around Dakhla in the Sahara) to Morocco in 1979, when local tribal leaders pledged allegiance to King Hassan II. The holiday has particular significance in southern Morocco and the Saharan provinces. Official ceremonies are held in Dakhla and other southern cities. For most tourists, the day passes quietly with standard holiday closures.',
    impact: 'Low',
    icon: Flag,
  },
  {
    name: 'Revolution of the King and People Day',
    date: 'August 20',
    arabicName: 'Thawrat al-Malik wa ash-Sha\u2019b',
    description:
      'Commemorates the revolution of August 20, 1953, when the French colonial authorities exiled Sultan Mohammed V and the Moroccan people rose in protest. The event galvanized the independence movement and is remembered as a moment of unity between the monarchy and the people. Official ceremonies, flag displays, and patriotic events take place nationwide. Combined with Youth Day the following day, this creates a two-day holiday period.',
    impact: 'Medium',
    icon: Landmark,
  },
  {
    name: 'Youth Day',
    date: 'August 21',
    arabicName: 'Eid ash-Shabab',
    description:
      'Celebrates the birthday of King Mohammed VI, born August 21, 1963. Originally celebrated on the monarch\u2019s actual birthday, the holiday was renamed Youth Day to honor Moroccan youth. It falls the day after Revolution Day, creating a consecutive two-day holiday. Cultural and sporting events are organized for young people. Pardons for prisoners are traditionally announced. Banks and offices close.',
    impact: 'Medium',
    icon: Users,
  },
  {
    name: 'Green March Day',
    date: 'November 6',
    arabicName: 'Dhikra al-Masira al-Khadra\u2019',
    description:
      'Commemorates the Green March of November 6, 1975, when 350,000 unarmed Moroccan civilians marched into the Spanish-controlled Western Sahara carrying Moroccan flags and copies of the Quran. Organized by King Hassan II, the march led to Spain\u2019s withdrawal from the territory. The holiday is marked by patriotic speeches, flag displays, and official ceremonies. It is an important expression of Moroccan territorial identity.',
    impact: 'Low',
    icon: Flag,
  },
  {
    name: 'Independence Day',
    date: 'November 18',
    arabicName: 'Eid al-Istiqlal',
    description:
      'Morocco\u2019s most significant historical holiday marks the formal declaration of independence from France and Spain on November 18, 1956, and the return of Sultan Mohammed V from exile. Celebrations include official ceremonies, parades, and public festivities. Moroccan flags fly from every building, and cities are decorated with lights and banners. It is the closest equivalent to a "national day" and generates genuine popular enthusiasm.',
    impact: 'Medium',
    icon: Flag,
  },
];

/* ===================================================================
   ISLAMIC HOLIDAYS DATA
   =================================================================== */

const islamicHolidays = [
  {
    name: 'Eid al-Fitr',
    arabicName: 'Eid al-Fitr / Eid Sghir',
    duration: '2 days',
    dates2025: 'March 30 - 31, 2025 (approximate)',
    dates2026: 'March 20 - 21, 2026 (approximate)',
    description:
      'The "Festival of Breaking the Fast" marks the end of Ramadan, the holy month of fasting. It is one of Morocco\u2019s most joyful holidays. Families gather for a festive breakfast after a month of dawn-to-sunset fasting. New clothes are worn, especially by children. Homes are deep-cleaned and decorated. Elaborate pastries and sweets are prepared and exchanged between families, including kaab el ghazal (gazelle horns), ghriba cookies, and chebakia dipped in honey. The atmosphere is electric with relief and celebration. Streets fill with families visiting relatives and friends.',
    traditions: [
      'Morning prayer at the mosque (Salat al-Eid)',
      'New clothes for children and family visits',
      'Sweet pastries exchanged between households',
      'Zakat al-Fitr (charitable giving) before the prayer',
      'Festive meals with family, often including pastilla and couscous',
    ],
    travelImpact: 'High',
    icon: Moon,
  },
  {
    name: 'Eid al-Adha',
    arabicName: 'Eid al-Adha / Eid Kbir / L\u2019Aid',
    duration: '2 days (unofficial celebrations last up to a week)',
    dates2025: 'June 6 - 7, 2025 (approximate)',
    dates2026: 'May 26 - 27, 2026 (approximate)',
    description:
      'The "Festival of Sacrifice" is the single most important holiday in Morocco, far surpassing any other in its social, economic, and logistical impact. Every Moroccan family that can afford it purchases a live sheep (or goat) weeks in advance, keeping it at home or on the rooftop until the morning of Eid, when it is ritually sacrificed. The entire country effectively shuts down for three to five days. The meat is divided into three parts: one-third for the family, one-third for relatives and neighbors, and one-third for the poor. The aroma of grilling meat fills every neighborhood. Temporary sheep markets spring up across the country in the weeks before Eid.',
    traditions: [
      'Each family purchases and sacrifices a sheep',
      'Meat divided three ways: family, relatives, and charity',
      'Massive internal migration as families reunite',
      'Temporary livestock markets appear in every city and town',
      'First day: sacrifice and grilling. Second day: boulfaf (grilled liver wrapped in fat)',
      'Third day and beyond: slow-cooked tagines and preserved meat (khli\u2019)',
    ],
    travelImpact: 'Very High',
    icon: Star,
  },
  {
    name: 'Islamic New Year',
    arabicName: 'Ra\u2019s as-Sana al-Hijriya / Fatih Muharram',
    duration: '1 day',
    dates2025: 'June 26, 2025 (approximate)',
    dates2026: 'June 16, 2026 (approximate)',
    description:
      'Marks the first day of Muharram, the first month of the Islamic Hijri calendar. In Morocco, it is a quiet, reflective holiday rather than a festive one. There are no major public celebrations. Banks and government offices close. Some families prepare special meals or visit relatives. The holiday passes largely unnoticed by tourists. Medina shops and tourist businesses generally remain open.',
    traditions: [
      'Quiet family gatherings',
      'Some families prepare dried fruit and nut platters',
      'Children in some regions receive small gifts',
      'A day for reflection on the passage of time',
    ],
    travelImpact: 'Low',
    icon: Moon,
  },
  {
    name: 'Mawlid an-Nabi (Prophet\u2019s Birthday)',
    arabicName: 'Eid al-Mawlid an-Nabawi',
    duration: '2 days',
    dates2025: 'September 4 - 5, 2025 (approximate)',
    dates2026: 'August 24 - 25, 2026 (approximate)',
    description:
      'Celebrates the birth of the Prophet Muhammad. Morocco celebrates Mawlid with great warmth and devotion. It is one of the most beloved holidays in the country, observed over two official days. Mosques hold special prayers and recitations of the Prophet\u2019s biography (sira). Families gather for elaborate meals and exchange gifts. Children are the focus of celebrations, often receiving new clothes and sweets. In some cities, particularly Meknes (home to the shrine of Moulay Ismail) and Sale, processions with decorated candles and floats fill the streets.',
    traditions: [
      'Special prayers and Quranic recitations in mosques',
      'Candle processions in Meknes and Sale',
      'Distribution of sweets and gifts to children',
      'Family feasts with traditional dishes',
      'Stories of the Prophet\u2019s life told to children',
      'Visits to saints\u2019 shrines (zawiyas)',
    ],
    travelImpact: 'Medium',
    icon: Heart,
  },
];

/* ===================================================================
   WHAT CLOSES DATA
   =================================================================== */

const closureCategories = [
  {
    category: 'Banks & Financial Services',
    icon: Banknote,
    closedDuring: 'All public holidays',
    details:
      'Banks close on every official public holiday without exception. ATMs remain operational. During extended holidays like Eid al-Adha, banks may close for three or more consecutive days when the holiday falls near a weekend. International transfer services may experience delays. Plan cash withdrawals before major holidays. Currency exchange bureaus in tourist areas may maintain limited hours.',
  },
  {
    category: 'Government Offices & Administration',
    icon: Building2,
    closedDuring: 'All public holidays',
    details:
      'All government offices, courts, post offices, and administrative services close on every public holiday. This includes the police administrative offices (though emergency police services remain active), the wilaya (regional government), communes, and all public-facing administrative counters. If you need any official paperwork, permits, or stamps, complete these tasks before a holiday period.',
  },
  {
    category: 'Schools & Universities',
    icon: BookOpen,
    closedDuring: 'All public holidays plus extended breaks',
    details:
      'All public and most private schools close on public holidays. Extended school holidays occur around Eid al-Fitr, Eid al-Adha, and during summer. University schedules follow a separate calendar but respect all national holidays. French-system international schools follow French holiday schedules with additional Moroccan holidays.',
  },
  {
    category: 'Shops & Supermarkets',
    icon: ShoppingBag,
    closedDuring: 'Varies significantly',
    details:
      'Large supermarkets (Marjane, Carrefour, Acima, BIM) typically close on major holidays but may open with reduced hours on minor ones. Small neighborhood shops (hanout) often remain open, especially for essentials. Medina shops and souks frequently stay open during holidays, as many shopkeepers are independent artisans. Tourist-area shops almost always remain open. During Eid al-Adha, even medina shops close for the first two days.',
  },
  {
    category: 'Restaurants & Cafes',
    icon: Coffee,
    closedDuring: 'Primarily during Eid al-Adha',
    details:
      'Most restaurants remain open during standard public holidays, especially in tourist areas. During Ramadan, many local restaurants close during the day but open for iftar and suhoor. Hotel restaurants always remain open. During Eid al-Adha, finding an open restaurant can be genuinely difficult for two to three days as families feast at home. Upscale hotel restaurants are your best bet during Eid al-Adha.',
  },
  {
    category: 'Public Transport',
    icon: Train,
    closedDuring: 'Reduced service on major holidays',
    details:
      'ONCF trains run on a reduced holiday schedule during public holidays but do not stop entirely. City buses (ALSA, Stareo) may operate on Sunday/holiday schedules with fewer routes and reduced frequency. Trams in Casablanca and Rabat operate on holiday schedules. Grand taxis and petit taxis operate normally and may increase prices during holidays due to demand. CTM and Supratours intercity buses run but may sell out well in advance before Eid al-Adha and Eid al-Fitr.',
  },
  {
    category: 'Tourist Attractions & Museums',
    icon: Landmark,
    closedDuring: 'Some close on specific holidays',
    details:
      'Major tourist sites like the Bahia Palace, Saadian Tombs, and Jardin Majorelle generally remain open during holidays, sometimes with adjusted hours. Government-run museums may close. Historical sites managed by the Ministry of Culture typically close on January 1, May 1, and during the two Eids. The Hassan II Mosque tours follow their own schedule. Check individual attraction hours in advance during holiday periods.',
  },
  {
    category: 'Pharmacies',
    icon: CheckCircle,
    closedDuring: 'Rotation system ensures availability',
    details:
      'Moroccan pharmacies operate a rotation system (pharmacie de garde) ensuring at least one pharmacy in every neighborhood remains open 24/7, including all holidays and weekends. The on-duty pharmacy is posted on the doors of closed pharmacies and listed in local newspapers. In an emergency, you can always find an open pharmacy.',
  },
];

/* ===================================================================
   TRAVEL IMPACT DATA
   =================================================================== */

const travelImpactGuide = [
  {
    holiday: 'Eid al-Adha',
    severity: 'Extreme',
    icon: AlertTriangle,
    description:
      'This is the single most disruptive holiday for travel in Morocco. In the week before Eid, millions of Moroccans travel to their hometowns to be with family. Highways become gridlocked, particularly the Casablanca-Marrakech, Casablanca-Fes, and Tangier-Casablanca corridors. Train tickets sell out days in advance. The A2 (autoroute) toll booths see massive queues. During Eid itself, cities become eerily quiet as everyone is home with family. The smell of grilling sheep fills every neighborhood from morning. Very few restaurants, shops, or attractions are open for two to three days.',
    tips: [
      'Book train tickets at least one week in advance',
      'Avoid driving on highways three days before and one day after Eid',
      'Stock up on food and water before Eid begins',
      'Hotel restaurants will be your primary dining option',
      'Expect a unique cultural experience if you embrace it',
      'Consider staying put in one city rather than traveling between cities',
    ],
  },
  {
    holiday: 'Eid al-Fitr',
    severity: 'High',
    icon: AlertTriangle,
    description:
      'The end of Ramadan triggers significant internal travel as families reunite for celebrations. The last few days of Ramadan and the first day of Eid see heavy highway traffic. It is not as extreme as Eid al-Adha, but train and bus tickets sell out quickly. During Ramadan itself (the month preceding Eid al-Fitr), travel logistics change significantly: restaurants close during the day, business hours shift, and the pace of life slows in the daytime before coming alive after sunset.',
    tips: [
      'Book intercity transport in advance for travel near the end of Ramadan',
      'During Ramadan, eat discreetly during the day out of respect',
      'Enjoy the incredible iftar atmosphere at sunset',
      'Business hours shift: many places open later and close for iftar, then reopen until late',
      'Expect a festive, joyful atmosphere on Eid itself',
    ],
  },
  {
    holiday: 'Throne Day (July 30) & August Holidays',
    severity: 'Medium',
    icon: Info,
    description:
      'Throne Day kicks off a cluster of three national holidays within three weeks (July 30, August 14, August 20-21). This period coincides with peak summer vacation for Moroccan families, who traditionally head to the coast. Coastal cities like Agadir, Essaouira, Martil, M\u2019diq, and Saaidia become extremely busy. Hotel prices spike, and beach towns are packed. Meanwhile, interior cities like Marrakech and Fes are quieter (and very hot).',
    tips: [
      'Book coastal accommodations well in advance for late July through August',
      'Interior cities offer better value during this period',
      'Expect Moroccan domestic tourism energy at the coast',
      'Fireworks and celebrations on Throne Day evening, especially in Rabat',
      'The Casablanca-Tangier highway is extremely busy on weekends in August',
    ],
  },
  {
    holiday: 'Independence Day (November 18) & Green March (November 6)',
    severity: 'Low',
    icon: Info,
    description:
      'These November holidays cause minimal travel disruption. Banks and offices close, but tourist services are largely unaffected. Independence Day generates more public celebration than Green March Day. Neither holiday triggers major internal migration. November is shoulder season with pleasant weather and lower tourist numbers, making it an excellent time to visit despite these closures.',
    tips: [
      'Plan banking and administrative tasks around these dates',
      'Tourist attractions remain accessible',
      'Enjoy patriotic decorations and occasional parades',
      'November is an excellent travel month overall',
    ],
  },
];

/* ===================================================================
   CULTURAL CELEBRATIONS DATA
   =================================================================== */

const culturalCelebrations = [
  {
    holiday: 'Eid al-Adha Traditions',
    icon: Star,
    foodTraditions: [
      'Boulfaf: Grilled liver and fat wrapped in caul fat, eaten on the morning of the sacrifice',
      'Mechoui: Whole roasted lamb, a centerpiece of the celebration',
      'Mrouzia: Sweet and savory lamb tagine with raisins, almonds, and ras el hanout',
      'Khli\u2019: Preserved dried meat prepared from the remaining cuts, stored for months',
      'Tangia: Slow-cooked urn pot with lamb, preserved lemons, and spices (especially in Marrakech)',
    ],
    culturalPractices:
      'The sacrifice is performed by the head of household after the morning Eid prayer. Families spend days visiting relatives, with the eldest family members visited first as a sign of respect. Children receive new clothes and gifts. Neighbors exchange plates of meat. The holiday reinforces family bonds and charitable obligations. For many families, Eid al-Adha represents the largest single expense of the year, as a quality sheep can cost 2,000-5,000 MAD or more.',
  },
  {
    holiday: 'Eid al-Fitr Traditions',
    icon: Moon,
    foodTraditions: [
      'Kaab el ghazal: Crescent-shaped almond pastries dusted with powdered sugar',
      'Chebakia: Rose-shaped sesame cookies dipped in honey',
      'Ghriba: Crumbly almond or coconut cookies',
      'Briwat: Crispy filo triangles filled with almonds and drenched in honey',
      'Sellou (sfouf): Dense, rich mixture of roasted flour, almonds, sesame, and honey',
      'Festive mint tea served with every visit',
    ],
    culturalPractices:
      'The morning begins with Salat al-Eid, a communal prayer held in mosques and open-air prayer grounds across the country. Families then gather for a lavish breakfast that breaks the month-long fast. The day is spent visiting family and friends, with plates of homemade pastries carried between households. Children wear new clothes and receive small gifts of money. The mood is joyful and social, with an emphasis on community, forgiveness, and gratitude.',
  },
  {
    holiday: 'Mawlid an-Nabi Traditions',
    icon: Heart,
    foodTraditions: [
      'Special couscous with seven vegetables',
      'Tagine with dried fruits and nuts',
      'Sweet rfissa with lentils and fenugreek',
      'Halwa (sweets) distributed to children and neighbors',
      'Dates and milk, in honor of the Prophet\u2019s reported diet',
    ],
    culturalPractices:
      'Mosques throughout Morocco host special prayers, Quranic recitations, and readings from the sira (biography of the Prophet). In Meknes, a grand procession of candles and decorated floats winds through the old city. Sale, across the river from Rabat, holds its own celebrated procession. Families gather for meals and share stories of the Prophet\u2019s life with children. Sufi orders (tariqas) hold special dhikr ceremonies with chanting and music. The atmosphere is one of reverence, warmth, and community devotion.',
  },
  {
    holiday: 'Throne Day Traditions',
    icon: Landmark,
    foodTraditions: [
      'Festive couscous with lamb or chicken',
      'Pastilla (savory-sweet pigeon or chicken pie)',
      'Moroccan tea ceremonies with elaborate presentation',
      'Street food vendors are out in force at celebrations',
    ],
    culturalPractices:
      'The King delivers a major televised address to the nation from one of the royal palaces. Military parades are held in Rabat. Cities are decorated with Moroccan flags, lights, and portraits of the King. Public concerts, cultural performances, and fireworks displays are organized across the country, especially in Rabat and Casablanca. Many Moroccans wear traditional clothing. A royal pardon is typically granted to selected prisoners. The celebration reflects the deep connection between the monarchy and the Moroccan people.',
  },
  {
    holiday: 'Ramadan (The Holy Month)',
    icon: Moon,
    foodTraditions: [
      'Harira: Rich tomato-lentil soup, the iconic iftar starter',
      'Dates and milk: The traditional fast-breaking foods',
      'Chebakia: Honey-drenched sesame cookies, ubiquitous during Ramadan',
      'Msemen and baghrir: Moroccan flatbreads and "thousand-hole" crepes',
      'Briouats and fried pastries',
      'Fresh juices: avocado, orange, pomegranate, and mixed fruit',
      'Suhoor (pre-dawn meal): typically lighter, with bread, cheese, olives, and tea',
    ],
    culturalPractices:
      'Although Ramadan is not a public holiday itself (normal work continues with adjusted hours), it profoundly transforms daily life for an entire month. The day is quiet and slow-paced as people fast. Then, at the cannon shot or adhan signaling sunset (maghrib), the country erupts into activity. Families gather for iftar, streets come alive, cafes overflow, and the night becomes the new day. Many Moroccans stay up late for tarawih prayers and socializing, then wake for suhoor before dawn. The atmosphere of communal breaking of the fast is one of Morocco\u2019s most moving experiences.',
  },
];

/* ===================================================================
   PLANNING TIPS DATA
   =================================================================== */

const planningTips = [
  {
    title: 'Best Times to Visit (Holiday Perspective)',
    icon: CheckCircle,
    items: [
      'January-February: Minimal holiday disruption. Only New Year\u2019s Day and Independence Manifesto Day, neither of which significantly affects tourism.',
      'March-April: Potentially affected by Ramadan and Eid al-Fitr (dates shift annually). Ramadan is a unique cultural experience but requires flexibility. If Ramadan falls here, plan accordingly.',
      'May: Only Labour Day (May 1). Excellent month to visit with minimal disruption.',
      'October-November: Green March and Independence Day cause minor closures. Shoulder season with great weather and few tourists.',
      'Early December: No holidays, pleasant weather, excellent value. The holiday spike comes later in December for Christmas tourism.',
    ],
  },
  {
    title: 'Times Requiring Extra Planning',
    icon: AlertTriangle,
    items: [
      'Eid al-Adha (whenever it falls): The most impactful period. Book everything in advance, accept limited services, and embrace the cultural experience.',
      'Last week of Ramadan through Eid al-Fitr: Heavy internal travel, shifting business hours, limited daytime dining. But the iftar experience is extraordinary.',
      'Late July through August: Summer holidays combined with Throne Day and August national holidays create peak domestic travel. Coastal hotels book up fast.',
      'Mawlid an-Nabi: Moderate impact. Two-day holiday with some closures but generally manageable for tourists.',
    ],
  },
  {
    title: 'If You Are in Morocco During Eid al-Adha',
    icon: Sparkles,
    items: [
      'Consider it a rare cultural privilege. You will witness one of the most important traditions in the Islamic world up close.',
      'Accept that your itinerary will be disrupted. Plan to stay in one location and soak in the atmosphere.',
      'Stock up on groceries and water the day before. Many shops close for two to three days.',
      'Hotel restaurants are your lifeline for prepared meals.',
      'The streets are quiet but the rooftops are alive with the sounds and smells of celebration.',
      'If invited to share a meal with a Moroccan family, accept. It is an honor and an unforgettable experience.',
    ],
  },
];

/* ===================================================================
   BUSINESS HOURS DATA
   =================================================================== */

const businessHours = [
  {
    category: 'Banks',
    icon: Banknote,
    normalHours: 'Monday-Friday: 8:15 AM - 3:45 PM (some close 12:30-2:30 PM for lunch)',
    fridayHours: 'Some banks close 11:30 AM - 2:30 PM for Friday prayer',
    ramadanHours: 'Typically 9:30 AM - 3:00 PM with no lunch break',
    holidayHours: 'Closed on all public holidays. ATMs operate 24/7.',
  },
  {
    category: 'Government Offices',
    icon: Building2,
    normalHours: 'Monday-Friday: 8:30 AM - 4:30 PM',
    fridayHours: 'Close 11:30 AM - 3:00 PM for Friday prayer',
    ramadanHours: 'Typically 9:00 AM - 3:00 PM',
    holidayHours: 'Closed on all public holidays.',
  },
  {
    category: 'Post Offices (Barid al-Maghrib)',
    icon: Building2,
    normalHours: 'Monday-Friday: 8:00 AM - 4:30 PM. Saturday: 8:00 AM - 12:00 PM.',
    fridayHours: 'Reduced hours; many close 12:00 - 2:30 PM',
    ramadanHours: '9:00 AM - 3:00 PM',
    holidayHours: 'Closed on all public holidays.',
  },
  {
    category: 'Shops & Souks',
    icon: ShoppingBag,
    normalHours: 'Generally 9:00 AM - 1:00 PM and 3:00 PM - 7:00 PM (many close midday)',
    fridayHours: 'Many close for Friday prayer. Souk activity drops 12:00 - 2:30 PM.',
    ramadanHours: 'Shorter daytime hours. Many reopen after iftar until 11:00 PM or later.',
    holidayHours: 'Medina shops often open. Supermarkets may close. Independent shops vary.',
  },
  {
    category: 'Restaurants',
    icon: Utensils,
    normalHours: 'Lunch: 12:00 - 3:00 PM. Dinner: 7:00 - 11:00 PM.',
    fridayHours: 'Normal hours. Some close briefly for Friday prayer.',
    ramadanHours: 'Most local restaurants close during the day. Hotel restaurants stay open. Many open for iftar (sunset) and serve until late. Some offer special Ramadan menus.',
    holidayHours: 'Tourist restaurants generally open. Local restaurants may close on Eid al-Adha.',
  },
  {
    category: 'Tourist Attractions & Museums',
    icon: Landmark,
    normalHours: 'Generally 9:00 AM - 5:00 PM or 6:00 PM. Closed on Tuesdays (some museums).',
    fridayHours: 'Some close 11:30 AM - 2:30 PM. Check individual sites.',
    ramadanHours: 'Reduced hours, typically 9:00 AM - 3:00 PM.',
    holidayHours: 'Major sites often open with adjusted hours. Government museums may close.',
  },
];

/* ===================================================================
   INTERNAL TRAVEL TIPS DATA
   =================================================================== */

const internalTravelTips = [
  {
    title: 'Highway Congestion Peaks',
    icon: Car,
    description:
      'The worst highway congestion occurs in the days before Eid al-Adha, when millions of Moroccans drive to their hometowns. The Casablanca-Marrakech autoroute (A7), Casablanca-Fes (A2), Casablanca-Rabat (A3), and Tangier-Kenitra (A1) corridors see the heaviest traffic. Friday evenings year-round are also busy on the Casablanca-Rabat stretch as weekend commuters head home. During August, coastal highways become congested as families head to beaches.',
  },
  {
    title: 'Train Booking Strategy',
    icon: Train,
    description:
      'ONCF trains sell out during holiday periods, particularly Al Boraq (high-speed Tangier-Casablanca) and the Casablanca-Marrakech route. First-class tickets sell out first. Book online at oncf.ma as soon as tickets become available, ideally seven to ten days before travel during holiday periods. The ONCF app allows mobile ticketing. For Eid al-Adha, book two weeks in advance if possible. Consider traveling the day before the rush begins.',
  },
  {
    title: 'Bus Travel During Holidays',
    icon: Car,
    description:
      'CTM and Supratours are the premium intercity bus operators and sell out during holidays. Book online in advance. Other operators (various private companies at bus stations) usually have more availability but less comfort. Gare routiere (bus stations) in major cities become chaotic during holiday periods. Arrive early, confirm your seat, and be patient. Grand taxis are an alternative but prices increase during peak demand.',
  },
  {
    title: 'Domestic Flights',
    icon: Plane,
    description:
      'Royal Air Maroc and Air Arabia Maroc operate domestic routes connecting Casablanca with most major cities. Flights are generally not as affected by holiday demand as ground transport, but prices rise. The Casablanca-Agadir and Casablanca-Oujda routes see the most holiday demand. Book early for the best fares. Airports function normally during holidays.',
  },
  {
    title: 'When to Avoid Driving',
    icon: AlertTriangle,
    description:
      'Avoid highway driving on the two days before Eid al-Adha, the day before Eid al-Fitr, and Friday evenings on the Casablanca-Rabat corridor. The return traffic after Eid is equally heavy, typically peaking on the second or third day after the holiday. August weekends on coastal routes are also congested. During Ramadan, be cautious in the hour before iftar as fatigued, hungry drivers rush home.',
  },
];

/* ===================================================================
   HOLIDAY CALENDAR DATA
   =================================================================== */

const calendar2025 = [
  { date: 'January 1', name: 'New Year\u2019s Day', type: 'Fixed', day: 'Wednesday' },
  { date: 'January 11', name: 'Independence Manifesto Day', type: 'Fixed', day: 'Saturday' },
  { date: 'March 1', name: 'Start of Ramadan (approximate)', type: 'Islamic', day: 'Saturday' },
  { date: 'March 30-31', name: 'Eid al-Fitr (approximate)', type: 'Islamic', day: 'Sunday-Monday' },
  { date: 'May 1', name: 'Labour Day', type: 'Fixed', day: 'Thursday' },
  { date: 'June 6-7', name: 'Eid al-Adha (approximate)', type: 'Islamic', day: 'Friday-Saturday' },
  { date: 'June 26', name: 'Islamic New Year (approximate)', type: 'Islamic', day: 'Thursday' },
  { date: 'July 30', name: 'Throne Day', type: 'Fixed', day: 'Wednesday' },
  { date: 'August 14', name: 'Oued Eddahab Day', type: 'Fixed', day: 'Thursday' },
  { date: 'August 20', name: 'Revolution Day', type: 'Fixed', day: 'Wednesday' },
  { date: 'August 21', name: 'Youth Day', type: 'Fixed', day: 'Thursday' },
  { date: 'September 4-5', name: 'Mawlid an-Nabi (approximate)', type: 'Islamic', day: 'Thursday-Friday' },
  { date: 'November 6', name: 'Green March Day', type: 'Fixed', day: 'Thursday' },
  { date: 'November 18', name: 'Independence Day', type: 'Fixed', day: 'Tuesday' },
];

const calendar2026 = [
  { date: 'January 1', name: 'New Year\u2019s Day', type: 'Fixed', day: 'Thursday' },
  { date: 'January 11', name: 'Independence Manifesto Day', type: 'Fixed', day: 'Sunday' },
  { date: 'February 18', name: 'Start of Ramadan (approximate)', type: 'Islamic', day: 'Wednesday' },
  { date: 'March 20-21', name: 'Eid al-Fitr (approximate)', type: 'Islamic', day: 'Friday-Saturday' },
  { date: 'May 1', name: 'Labour Day', type: 'Fixed', day: 'Friday' },
  { date: 'May 26-27', name: 'Eid al-Adha (approximate)', type: 'Islamic', day: 'Tuesday-Wednesday' },
  { date: 'June 16', name: 'Islamic New Year (approximate)', type: 'Islamic', day: 'Tuesday' },
  { date: 'July 30', name: 'Throne Day', type: 'Fixed', day: 'Thursday' },
  { date: 'August 14', name: 'Oued Eddahab Day', type: 'Fixed', day: 'Friday' },
  { date: 'August 20', name: 'Revolution Day', type: 'Fixed', day: 'Thursday' },
  { date: 'August 21', name: 'Youth Day', type: 'Fixed', day: 'Friday' },
  { date: 'August 24-25', name: 'Mawlid an-Nabi (approximate)', type: 'Islamic', day: 'Monday-Tuesday' },
  { date: 'November 6', name: 'Green March Day', type: 'Fixed', day: 'Friday' },
  { date: 'November 18', name: 'Independence Day', type: 'Fixed', day: 'Wednesday' },
];

/* ===================================================================
   FAQ DATA
   =================================================================== */

const faqs = [
  {
    question: 'Do Islamic holiday dates change every year?',
    answer:
      'Yes. Islamic holidays follow the Hijri lunar calendar, which is approximately 11 days shorter than the Gregorian solar calendar. This means Islamic holidays shift earlier by about 11 days each year. Additionally, exact dates depend on the sighting of the new moon and are officially confirmed only one or two days in advance by Morocco\u2019s Ministry of Habous and Islamic Affairs. The dates listed in this guide are approximations based on astronomical calculations. Always check official announcements closer to the date.',
  },
  {
    question: 'Is Morocco a good place to visit during Ramadan?',
    answer:
      'Ramadan is a unique and rewarding time to visit Morocco, but it requires flexibility and cultural sensitivity. During the day, many restaurants close, business hours are shortened, and the pace of life slows. However, the evenings come alive with an energy found at no other time of year. The iftar experience at sunset is extraordinary, and the late-night atmosphere in medinas is magical. Non-Muslim visitors are not expected to fast, but eating, drinking, and smoking in public during daylight hours is considered disrespectful. Hotel restaurants remain open for guests.',
  },
  {
    question: 'What should I do if I am in Morocco during Eid al-Adha?',
    answer:
      'Embrace it as a once-in-a-lifetime cultural experience. Stock up on food and water beforehand, as most shops and restaurants close for two to three days. Rely on hotel restaurants for meals. Avoid intercity travel during the days immediately before and after Eid due to extreme traffic. The streets will be quiet, but if a Moroccan family invites you to share their Eid meal, consider it a profound honor and accept. The generosity and warmth of Moroccan hospitality shine brightest during Eid al-Adha.',
  },
  {
    question: 'Are tourist attractions open on public holidays?',
    answer:
      'Most major tourist attractions (palaces, gardens, historical sites) remain open on public holidays, sometimes with adjusted hours. Government-run museums may close on certain holidays, particularly May 1 and the two Eids. Private attractions like Jardin Majorelle, YSL Museum, and Le Jardin Secret maintain their own schedules and usually stay open. Always check ahead during Eid al-Adha, when even normally reliable attractions may close or operate on skeleton staff.',
  },
  {
    question: 'How do I know the exact dates of Islamic holidays?',
    answer:
      'The Moroccan government officially announces Islamic holiday dates one to two days before the event, based on the sighting of the new moon. The Ministry of Habous and Islamic Affairs makes the announcement, which is broadcast on national television and reported by all media outlets. For planning purposes, astronomical calculations provide reliable estimates (within one to two days). Check the website of the Moroccan embassy in your country, or follow Moroccan news sources like Hespress, Le360, or Medias24 for official announcements.',
  },
  {
    question: 'Do I get a day off if a holiday falls on a weekend?',
    answer:
      'Morocco does not have a consistent policy of substituting weekday days off when a public holiday falls on a weekend (Saturday or Sunday). In some years, the government may announce a compensatory day off, but this is decided case by case and usually announced shortly before the holiday. For employees in the private sector, policies vary by company. Tourists should not assume an extended weekend unless officially announced.',
  },
  {
    question: 'Is it harder to find accommodation during Moroccan holidays?',
    answer:
      'It depends on the holiday and location. During Eid al-Adha and the August summer holidays, many riads and hotels in popular cities are booked by Moroccan domestic tourists, especially in coastal cities. International tourism is typically lower during Ramadan, making it easier to find rooms. Throne Day and the August holidays coincide with European summer, creating double demand. Book at least two to four weeks ahead for travel during Eid al-Adha, August, and December holidays.',
  },
  {
    question: 'What is the Friday prayer break and how does it affect me as a tourist?',
    answer:
      'Friday is the Islamic holy day, and the Dhuhr (midday) prayer on Friday is a congregational obligation for Muslim men. Between approximately 12:00 PM and 2:30 PM on Fridays, many businesses close or operate with skeleton staff as employees attend the mosque. Government offices have an extended Friday lunch break. Some shops in the medina close briefly. Tourist attractions generally remain open but may be quieter during this window. Plan shopping, banking, and administrative tasks around the Friday prayer break.',
  },
  {
    question: 'Can I drink alcohol during Ramadan or other Islamic holidays?',
    answer:
      'Licensed bars and restaurants that serve alcohol typically continue to do so during Ramadan and Islamic holidays, though some may temporarily suspend alcohol service. Hotels with bars generally maintain service for non-Muslim guests. Supermarkets and liquor stores (points de vente) usually stop selling alcohol during Ramadan and may restrict sales on other Islamic holidays. Drinking alcohol in public is always prohibited in Morocco, regardless of the season. Be discreet and respectful, especially during religious holidays.',
  },
  {
    question: 'How does tipping etiquette change during holidays?',
    answer:
      'Tipping is appreciated year-round in Morocco, but during holidays, particularly Eid al-Fitr and Eid al-Adha, a small holiday tip (similar to a Christmas bonus) for regular service providers is customary. This includes your hotel housekeeper, a doorman (gardien) at your riad, regular taxi drivers, and anyone who provides you with ongoing service. A tip of 20-50 MAD per person is appropriate. This practice, called al-aidiya, is an important social custom.',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccoHolidaysPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end">
        <img
          src="/images/hero-marrakech.webp"
          alt="Vibrant Marrakech cityscape with historic architecture and celebration atmosphere"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 container-morocco pb-12 md:pb-16 pt-32">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="text-white font-medium">Public Holidays</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4 max-w-4xl">
            Morocco Public Holidays 2025&ndash;2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Complete guide to national holidays, Islamic religious holidays, bank closures, business hours,
            and practical travel planning for tourists and residents in Morocco.
          </p>
        </div>
      </section>

      {/* ── Quick Overview ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Flag, label: 'Fixed National Holidays', value: '9 per year', color: 'var(--color-primary)' },
              { icon: Moon, label: 'Islamic Holidays', value: '4 observances', color: 'var(--color-accent)' },
              { icon: Calendar, label: 'Total Paid Days Off', value: '13+ days', color: 'var(--color-primary)' },
              { icon: AlertTriangle, label: 'Highest Impact', value: 'Eid al-Adha', color: '#b91c1c' },
            ].map((stat) => (
              <div key={stat.label} className="card-moroccan p-6 text-center">
                <div className="inline-flex p-3 rounded-xl mb-3" style={{ backgroundColor: `${stat.color}15` }}>
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <p className="text-2xl font-bold font-[family-name:var(--font-display)] text-[var(--text-primary)]">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--text-secondary)] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Understanding the Lunar Calendar ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan p-8 md:p-10 zellige-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
                  <Moon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  Understanding the Islamic Lunar Calendar
                </h2>
              </div>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Morocco observes two types of public holidays: <strong className="text-[var(--text-primary)]">fixed national holidays</strong> that
                  fall on the same Gregorian date every year, and <strong className="text-[var(--text-primary)]">Islamic religious holidays</strong> that
                  follow the Hijri lunar calendar and shift approximately 11 days earlier each Gregorian year.
                </p>
                <p>
                  The Islamic calendar is based on the cycles of the moon, with each month beginning at the sighting of the new crescent moon.
                  A Hijri year contains 354 or 355 days, compared to the 365 or 366 days of the Gregorian calendar. This means that over a
                  period of roughly 33 years, Islamic holidays cycle through every season of the Gregorian calendar.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">Important:</strong> The exact dates of Islamic holidays in Morocco are not confirmed
                  until the new moon is officially sighted, typically just one to two days before the holiday. The Moroccan Ministry of Habous
                  and Islamic Affairs makes the official announcement. Dates listed in this guide are astronomical estimates and may differ by
                  one or two days from the officially declared dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fixed National Holidays ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Flag className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Fixed National Holidays
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              These nine holidays fall on the same date every year. Banks, government offices, and schools close.
              Tourist services are generally unaffected.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {fixedHolidays.map((holiday) => (
              <div key={holiday.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="flex items-center gap-4 md:w-64 shrink-0">
                    <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                      <holiday.icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                        {holiday.date}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">{holiday.arabicName}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                      {holiday.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-3">
                      {holiday.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                        Tourist impact:
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          holiday.impact === 'Low'
                            ? 'bg-green-100 text-green-700'
                            : holiday.impact === 'Medium'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {holiday.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Surf Morocco Image ── */}
      <section className="py-8 md:py-12">
        <div className="container-morocco max-w-4xl">
          <img src="/images/poster-surf-morocco.webp" alt="Surfing on Morocco's Atlantic coast, one of many outdoor activities to enjoy during Moroccan holidays and festivals" loading="lazy" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ── Islamic Holidays ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Moon className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Islamic Religious Holidays
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              These holidays follow the lunar Hijri calendar and shift approximately 11 days earlier each year.
              Dates shown are estimates &mdash; official dates are confirmed one to two days before by moon sighting.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {islamicHolidays.map((holiday) => (
              <div key={holiday.name} className="card-moroccan p-6 md:p-8 zellige-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-accent)]/10">
                    <holiday.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {holiday.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {holiday.arabicName} &middot; {holiday.duration}
                    </p>
                  </div>
                </div>

                {/* Date Badges */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-primary)]/10">
                    <CalendarDays className="w-4 h-4 text-[var(--color-primary)]" />
                    <span className="text-sm font-semibold text-[var(--color-primary)]">2025: {holiday.dates2025}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-accent)]/10">
                    <CalendarDays className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">2026: {holiday.dates2026}</span>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  {holiday.description}
                </p>

                {/* Traditions */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                    Key Traditions
                  </h4>
                  <ul className="space-y-1.5">
                    {holiday.traditions.map((tradition, index) => (
                      <li key={index} className="flex items-start gap-2 text-[var(--text-secondary)] text-[15px]">
                        <CircleDot className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-1" />
                        <span>{tradition}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Travel Impact */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                    Travel impact:
                  </span>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      holiday.travelImpact === 'Low'
                        ? 'bg-green-100 text-green-700'
                        : holiday.travelImpact === 'Medium'
                        ? 'bg-amber-100 text-amber-700'
                        : holiday.travelImpact === 'High'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {holiday.travelImpact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Closes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Clock className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What Closes on Public Holidays
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Not everything shuts down during Moroccan holidays. Here is a detailed breakdown of what closes,
              what stays open, and where to find essential services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {closureCategories.map((item) => (
              <div key={item.category} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.category}
                  </h3>
                </div>
                <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">
                  Closed: {item.closedDuring}
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Travel Impact ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Car className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Holiday Travel Impact Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              How each major holiday affects transportation, availability, and logistics. Essential reading
              for anyone planning travel within Morocco during holiday periods.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {travelImpactGuide.map((item) => (
              <div key={item.holiday} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`inline-flex p-2.5 rounded-xl ${
                      item.severity === 'Extreme'
                        ? 'bg-red-100'
                        : item.severity === 'High'
                        ? 'bg-orange-100'
                        : item.severity === 'Medium'
                        ? 'bg-amber-100'
                        : 'bg-green-100'
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        item.severity === 'Extreme'
                          ? 'text-red-700'
                          : item.severity === 'High'
                          ? 'text-orange-700'
                          : item.severity === 'Medium'
                          ? 'text-amber-700'
                          : 'text-green-700'
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {item.holiday}
                    </h3>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        item.severity === 'Extreme'
                          ? 'bg-red-100 text-red-700'
                          : item.severity === 'High'
                          ? 'bg-orange-100 text-orange-700'
                          : item.severity === 'Medium'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {item.severity} Disruption
                    </span>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  {item.description}
                </p>

                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                    Tips for Travelers
                  </h4>
                  <ul className="space-y-1.5">
                    {item.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-[var(--text-secondary)] text-[15px]">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cultural Celebrations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Heart className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Cultural Celebrations &amp; Food Traditions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Moroccan holidays are deeply tied to food, family, and communal celebration. Understanding these
              traditions enriches your experience and helps you connect with the culture.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {culturalCelebrations.map((item) => (
              <div key={item.holiday} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                    <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.holiday}
                  </h3>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-bold text-[var(--color-accent)] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Utensils className="w-4 h-4" /> Food Traditions
                  </h4>
                  <ul className="space-y-1.5">
                    {item.foodTraditions.map((food, index) => (
                      <li key={index} className="flex items-start gap-2 text-[var(--text-secondary)] text-[15px]">
                        <CircleDot className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-1" />
                        <span>{food}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Cultural Practices
                  </h4>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                    {item.culturalPractices}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Planning Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CalendarCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Planning Tips: Best &amp; Worst Times to Visit
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Use this guide to plan your Morocco trip around the holiday calendar. Some periods offer unique cultural
              experiences, while others require extra flexibility.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {planningTips.map((section) => (
              <div key={section.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`inline-flex p-2.5 rounded-xl ${
                      section.icon === CheckCircle
                        ? 'bg-green-100'
                        : section.icon === AlertTriangle
                        ? 'bg-amber-100'
                        : 'bg-[var(--color-primary)]/10'
                    }`}
                  >
                    <section.icon
                      className={`w-5 h-5 ${
                        section.icon === CheckCircle
                          ? 'text-green-700'
                          : section.icon === AlertTriangle
                          ? 'text-amber-700'
                          : 'text-[var(--color-primary)]'
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[var(--text-secondary)] text-[15px] leading-relaxed">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Business Hours ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Clock className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Business Hours Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Standard hours, Friday prayer adjustments, Ramadan schedules, and holiday closures for
              every type of service you might need.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-left text-[15px]">
              <thead>
                <tr className="border-b-2 border-[var(--color-primary)]/20">
                  <th className="py-3 px-4 font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                    Category
                  </th>
                  <th className="py-3 px-4 font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                    Normal Hours
                  </th>
                  <th className="py-3 px-4 font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                    Friday
                  </th>
                  <th className="py-3 px-4 font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                    Ramadan
                  </th>
                  <th className="py-3 px-4 font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                    Holidays
                  </th>
                </tr>
              </thead>
              <tbody>
                {businessHours.map((row, index) => (
                  <tr
                    key={row.category}
                    className={`border-b border-[var(--border-primary)] ${
                      index % 2 === 0 ? 'bg-white/50' : ''
                    }`}
                  >
                    <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">
                      <div className="flex items-center gap-2">
                        <row.icon className="w-4 h-4 text-[var(--color-accent)]" />
                        {row.category}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.normalHours}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.fridayHours}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.ramadanHours}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.holidayHours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden mt-8 space-y-4">
            {businessHours.map((row) => (
              <div key={row.category} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-3">
                  <row.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                    {row.category}
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Normal: </span>
                    <span className="text-[var(--text-secondary)]">{row.normalHours}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Friday: </span>
                    <span className="text-[var(--text-secondary)]">{row.fridayHours}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Ramadan: </span>
                    <span className="text-[var(--text-secondary)]">{row.ramadanHours}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Holidays: </span>
                    <span className="text-[var(--text-secondary)]">{row.holidayHours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Travel Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Train className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Internal Travel During Holidays
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Essential guidance for both tourists and Moroccan residents on navigating the country&apos;s
              transport network during holiday periods. Know when to book early and when to avoid the highways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {internalTravelTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Holiday Calendar 2025 ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CalendarDays className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              2025 Holiday Calendar
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              All public holidays in Morocco for 2025. Islamic holiday dates are approximate and subject to
              official moon sighting announcements.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-[15px]">
                  <thead>
                    <tr className="bg-[var(--color-primary)] text-white">
                      <th className="py-3 px-4 text-left font-[family-name:var(--font-heading)]">Date</th>
                      <th className="py-3 px-4 text-left font-[family-name:var(--font-heading)]">Day</th>
                      <th className="py-3 px-4 text-left font-[family-name:var(--font-heading)]">Holiday</th>
                      <th className="py-3 px-4 text-left font-[family-name:var(--font-heading)]">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calendar2025.map((entry, index) => (
                      <tr
                        key={entry.date}
                        className={`border-b border-[var(--border-primary)] ${
                          index % 2 === 0 ? '' : 'bg-[var(--surface-muted)]'
                        }`}
                      >
                        <td className="py-3 px-4 font-semibold text-[var(--text-primary)] whitespace-nowrap">
                          {entry.date}
                        </td>
                        <td className="py-3 px-4 text-[var(--text-secondary)] whitespace-nowrap">{entry.day}</td>
                        <td className="py-3 px-4 text-[var(--text-primary)] font-medium">{entry.name}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${
                              entry.type === 'Fixed'
                                ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                                : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                            }`}
                          >
                            {entry.type === 'Fixed' ? 'National' : 'Islamic'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Holiday Calendar 2026 ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <CalendarDays className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              2026 Holiday Calendar
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              All public holidays in Morocco for 2026. Note how Islamic holidays shift approximately 11 days
              earlier compared to 2025.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-[15px]">
                  <thead>
                    <tr className="bg-[var(--color-accent)] text-white">
                      <th className="py-3 px-4 text-left font-[family-name:var(--font-heading)]">Date</th>
                      <th className="py-3 px-4 text-left font-[family-name:var(--font-heading)]">Day</th>
                      <th className="py-3 px-4 text-left font-[family-name:var(--font-heading)]">Holiday</th>
                      <th className="py-3 px-4 text-left font-[family-name:var(--font-heading)]">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calendar2026.map((entry, index) => (
                      <tr
                        key={entry.date}
                        className={`border-b border-[var(--border-primary)] ${
                          index % 2 === 0 ? '' : 'bg-[var(--surface-muted)]'
                        }`}
                      >
                        <td className="py-3 px-4 font-semibold text-[var(--text-primary)] whitespace-nowrap">
                          {entry.date}
                        </td>
                        <td className="py-3 px-4 text-[var(--text-secondary)] whitespace-nowrap">{entry.day}</td>
                        <td className="py-3 px-4 text-[var(--text-primary)] font-medium">{entry.name}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${
                              entry.type === 'Fixed'
                                ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                                : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                            }`}
                          >
                            {entry.type === 'Fixed' ? 'National' : 'Islamic'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Answers to the most common questions about Moroccan public holidays, business closures,
              and travel during holiday periods.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card-moroccan group">
                <summary className="flex items-start gap-3 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <ChevronRight className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5 transition-transform group-open:rotate-90" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                    {faq.question}
                  </h3>
                </summary>
                <div className="px-6 pb-6 pl-14">
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Plan Your Morocco Trip Around the Calendar
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Whether you want to experience the magic of Eid al-Adha or avoid holiday closures entirely,
            timing your visit right makes all the difference. Explore our season guide and itinerary planner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/best-time"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Sun className="w-4 h-4" /> Best Time to Visit
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Trip Itineraries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

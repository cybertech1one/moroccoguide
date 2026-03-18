import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  Heart,
  Moon,
  Compass,
  Globe,
  Landmark,
  CalendarDays,
  UtensilsCrossed,
  ShoppingBag,
  Droplets,
  Camera,
  Sun,
  AlertTriangle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Halal Travel Morocco 2026 | Complete Muslim Travel Guide to Morocco',
  description:
    'The ultimate halal travel guide to Morocco for Muslim travelers. All food is halal, mosque locations, prayer times, Ramadan tips, wudu facilities, halal-certified restaurants, Islamic heritage sites, hammam etiquette, modest dress shops, and alcohol-free zones.',
  keywords: [
    'halal travel Morocco',
    'Muslim travel Morocco',
    'halal food Morocco',
    'mosques in Morocco',
    'prayer times Morocco',
    'Ramadan travel Morocco',
    'Islamic heritage Morocco',
    'halal restaurants Morocco',
    'Muslim friendly Morocco',
    'wudu facilities Morocco',
    'Qarawiyyin Mosque',
    'Hassan II Mosque',
    'modest dress Morocco',
    'Islamic art Morocco',
    'halal hotels Morocco',
    'alcohol free Morocco',
    'Muslim traveler guide Morocco',
    'Islamic holidays Morocco',
    'hammam Muslim travelers',
    'Morocco halal tourism 2026',
  ],
  openGraph: {
    title: 'Halal Travel Morocco 2026 | Complete Muslim Travel Guide',
    description:
      'Morocco is one of the world\'s most naturally Muslim-friendly destinations. Complete guide covering halal food, mosques, prayer times, Ramadan travel, Islamic heritage sites, and practical tips for Muslim travelers.',
    url: `${BASE_URL}/morocco-halal-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-hassan-ii-mosque.webp`,
        width: 1200,
        height: 630,
        alt: 'Hassan II Mosque in Casablanca at sunset with Atlantic Ocean in background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Halal Travel Morocco 2026 | Muslim Travel Guide',
    description:
      'Morocco: where all food is halal, mosques are on every corner, and Islamic heritage spans over 1,200 years. The complete guide for Muslim travelers.',
    images: [`${BASE_URL}/images/hero-hassan-ii-mosque.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-halal-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-halal-travel`,
  name: 'Halal Travel Morocco 2026 | Complete Muslim Travel Guide to Morocco',
  description:
    'The ultimate halal travel guide to Morocco for Muslim travelers. Mosque locations, prayer times, Ramadan tips, halal restaurants, Islamic heritage sites, and practical advice.',
  url: `${BASE_URL}/morocco-halal-travel`,
  image: `${BASE_URL}/images/hero-hassan-ii-mosque.webp`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-halal-travel`,
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
      { '@type': 'ListItem', position: 2, name: 'Halal Travel Morocco', item: `${BASE_URL}/morocco-halal-travel` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is all food in Morocco halal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco is a Muslim-majority country (99% Muslim) and virtually all food is halal by default. Meat is slaughtered according to Islamic law. The only exceptions are some international hotel restaurants that may serve non-halal imported meats, and certain tourist-oriented bars. When in doubt, ask, but in practice all street food, restaurants, and local eateries serve halal food.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can non-Muslims enter mosques in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In general, non-Muslims cannot enter mosques in Morocco. The one major exception is the Hassan II Mosque in Casablanca, which offers guided tours to visitors of all faiths. Muslim travelers can pray in any mosque across the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are prayer times in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prayer times in Morocco follow the standard five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha). The adhan (call to prayer) is broadcast from mosques nationwide. Morocco follows the Maliki school of Islamic jurisprudence. Prayer times vary by season and location.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it a good idea to visit Morocco during Ramadan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visiting during Ramadan is a unique and rewarding experience, but requires some planning. Most restaurants close during daylight hours, but hotels serving tourists remain open. The iftar meals at sunset are extraordinary. The atmosphere after dark is festive and vibrant. Be respectful by not eating, drinking, or smoking in public during fasting hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there alcohol-free hotels in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many riads (traditional guesthouses) and smaller hotels do not serve alcohol. The medina areas of Fes, Marrakech, and other cities have numerous alcohol-free accommodations. Some larger hotels have alcohol-free floors or sections. Traditional riads are the best option for travelers seeking alcohol-free environments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should Muslim women wear in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is moderate in dress code. Many Moroccan women wear hijab, but it is not legally required. Muslim women travelers wearing hijab will feel very comfortable. Modest dress (covering shoulders and knees) is appreciated in medinas and religious areas. Western-style clothing is common in modern districts of Casablanca, Rabat, and Tangier.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ISLAMIC HERITAGE SITES
   ═══════════════════════════════════════════════════════════════ */

const islamicHeritageSites = [
  {
    rank: 1,
    name: 'Hassan II Mosque',
    city: 'Casablanca',
    type: 'Grand Mosque',
    icon: Landmark,
    price: 'From 130 MAD guided tour',
    description:
      'The third-largest mosque in the world and the largest in Africa. Built on a promontory overlooking the Atlantic Ocean, its 210-meter minaret is the tallest in the world. The interior holds 25,000 worshippers with space for 80,000 more in the esplanade. The retractable roof opens to the sky. One of the only mosques in Morocco open to non-Muslim visitors via guided tours.',
    highlights: ['Tallest minaret in the world (210m)', 'Retractable roof', 'Open to non-Muslim visitors', 'Oceanfront location'],
  },
  {
    rank: 2,
    name: 'Al-Qarawiyyin Mosque & University',
    city: 'Fes',
    type: 'Historic Mosque & University',
    icon: BookOpen,
    price: 'Free (exterior only for non-Muslims)',
    description:
      'Founded in 859 CE by Fatima al-Fihri, Al-Qarawiyyin is recognized by UNESCO and the Guinness Book of World Records as the oldest continuously operating university in the world. The mosque can hold 20,000 worshippers. Its library, recently restored, contains manuscripts dating back to the 9th century. Muslim visitors can pray inside; the courtyard is occasionally visible from doorways.',
    highlights: ['Oldest university in the world (859 CE)', 'Founded by Fatima al-Fihri', '9th-century manuscripts', '20,000 capacity'],
  },
  {
    rank: 3,
    name: 'Tin Mal Mosque',
    city: 'High Atlas Mountains',
    type: 'Historic Mosque',
    icon: Building,
    price: 'From 20 MAD donation',
    description:
      'Built in 1156 CE, Tin Mal was the spiritual birthplace of the Almohad dynasty that would go on to rule North Africa and Spain. Located in a remote valley in the High Atlas, this partially ruined mosque is one of only two in Morocco open to non-Muslims. Its architecture influenced the great mosques of Seville, Marrakech, and Rabat.',
    highlights: ['Birthplace of Almohad dynasty', 'Open to all visitors', '12th-century architecture', 'Remote mountain setting'],
  },
  {
    rank: 4,
    name: 'Koutoubia Mosque',
    city: 'Marrakech',
    type: 'Grand Mosque',
    icon: Landmark,
    price: 'Free (exterior only)',
    description:
      'The largest mosque in Marrakech and the city\'s most iconic landmark. Its 77-meter minaret, built in 1190 CE, served as the model for the Giralda in Seville and the Hassan Tower in Rabat. The mosque holds 20,000 worshippers. The surrounding gardens are a peaceful place for reflection at any time of day.',
    highlights: ['77-meter iconic minaret', 'Model for Giralda in Seville', 'Beautiful gardens', '12th-century Almohad architecture'],
  },
  {
    rank: 5,
    name: 'Hassan Tower & Mausoleum of Mohammed V',
    city: 'Rabat',
    type: 'Historic Monument & Mausoleum',
    icon: Crown,
    price: 'Free entry',
    description:
      'The unfinished minaret of an ambitious 12th-century mosque that was intended to be the largest in the world. The 44-meter tower and 200 remaining columns stand as a testament to Almohad ambition. Adjacent is the stunning Mausoleum of Mohammed V, featuring exquisite zellige tilework, carved cedar, and marble. Open to all visitors.',
    highlights: ['12th-century Almohad tower', 'Mausoleum open to all', 'Exquisite zellige and cedar', 'UNESCO World Heritage Site'],
  },
  {
    rank: 6,
    name: 'Bou Inania Madrasa',
    city: 'Fes',
    type: 'Historic Madrasa',
    icon: BookOpen,
    price: 'From 70 MAD',
    description:
      'Built between 1351 and 1357 CE, this is the finest example of Marinid architecture in Morocco. The madrasa (Islamic school) features intricate stucco carvings, cedar wood screens, zellige tilework, and a marble courtyard with a central fountain. It is one of the few religious buildings in Fes open to visitors of all faiths.',
    highlights: ['Peak Marinid architecture', 'Intricate stucco carvings', 'Open to all visitors', 'Still functions as a mosque'],
  },
  {
    rank: 7,
    name: 'Moulay Idriss Zerhoun',
    city: 'Near Meknes',
    type: 'Holy City',
    icon: Star,
    price: 'Free (town entry)',
    description:
      'Morocco\'s holiest city, built around the tomb of Moulay Idriss I, who brought Islam to Morocco in the 8th century and founded the first Moroccan dynasty. The town perches dramatically on two hills. While the sanctuary itself is closed to non-Muslims, Muslim travelers can visit the tomb and the zaouia. The town hosts an annual moussem (pilgrimage festival) in August.',
    highlights: ['Morocco\'s holiest city', 'Tomb of Moulay Idriss I', 'Annual moussem festival', 'Dramatic hilltop setting'],
  },
  {
    rank: 8,
    name: 'Medersa Ben Youssef',
    city: 'Marrakech',
    type: 'Historic Madrasa',
    icon: BookOpen,
    price: 'From 70 MAD',
    description:
      'Once the largest Islamic college in North Africa, housing 900 students. Built in the 14th century and lavishly renovated in the 16th century under the Saadians, its courtyard is one of the most photographed spaces in Morocco. The intricate geometric patterns, carved stucco, and cedar wood ceilings represent the peak of Moroccan Islamic decorative arts.',
    highlights: ['Largest historic madrasa in North Africa', '16th-century Saadian renovation', 'Spectacular courtyard', 'Islamic geometric art'],
  },
  {
    rank: 9,
    name: 'Chellah Necropolis',
    city: 'Rabat',
    type: 'Historic Islamic Ruins',
    icon: Building,
    price: 'From 70 MAD',
    description:
      'A medieval fortified Muslim necropolis built on the site of the ancient Roman city of Sala Colonia. The Marinid rulers built a mosque, madrasa, and royal tombs here in the 13th and 14th centuries. The ruins, partially destroyed by the 1755 earthquake, are hauntingly beautiful and home to a colony of storks nesting on the minaret.',
    highlights: ['Roman and Islamic layers', 'Marinid royal tombs', 'Stork colony on minaret', 'Peaceful garden setting'],
  },
  {
    rank: 10,
    name: 'Saadian Tombs',
    city: 'Marrakech',
    type: 'Royal Islamic Mausoleum',
    icon: Crown,
    price: 'From 70 MAD',
    description:
      'A stunning 16th-century royal necropolis sealed and forgotten for centuries until its rediscovery in 1917. The main chamber, the Hall of Twelve Columns, features Italian Carrara marble columns, intricate muqarnas (honeycomb) ceilings, and zellige tilework. The tombs of 66 Saadian royals rest here in three interconnected rooms.',
    highlights: ['16th-century Saadian dynasty', 'Muqarnas honeycomb ceilings', 'Carrara marble columns', 'Rediscovered in 1917'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HALAL DINING GUIDE
   ═══════════════════════════════════════════════════════════════ */

const halalDiningGuide = [
  {
    category: 'Street Food',
    icon: UtensilsCrossed,
    description:
      'All Moroccan street food is halal. From tagine stalls to msemen vendors, everything served in the souks and medinas is prepared according to Islamic dietary law. No need to ask or verify.',
    examples: ['Tagine from 30 MAD', 'Msemen (flatbread) from 5 MAD', 'Harira (soup) from 10 MAD', 'Brochettes (kebabs) from 20 MAD', 'Bissara (fava bean soup) from 5 MAD'],
    priceRange: 'From 5 MAD to 50 MAD',
  },
  {
    category: 'Traditional Restaurants',
    icon: Building,
    description:
      'Local restaurants (called "snack" for casual or "restaurant" for sit-down) serve exclusively halal food. Family-run establishments in the medinas are the safest bet. The Friday couscous tradition is not to be missed.',
    examples: ['Couscous Friday lunch from 40 MAD', 'Pastilla (pigeon pie) from 60 MAD', 'Rfissa from 50 MAD', 'Mechoui (roasted lamb) from 80 MAD', 'Tanjia (Marrakech specialty) from 70 MAD'],
    priceRange: 'From 40 MAD to 150 MAD',
  },
  {
    category: 'Halal-Certified Restaurants',
    icon: ShieldCheck,
    description:
      'While certification is less common in Morocco (since halal is the default), some upscale restaurants and hotel dining rooms carry explicit halal certification for the extra confidence of international Muslim travelers. Look for the certification display near the entrance.',
    examples: ['Al Fassia (Marrakech) from 200 MAD', 'Dar Roumana (Fes) from 250 MAD', 'La Grande Table (Marrakech) from 400 MAD', 'Riad Fes restaurant from 300 MAD'],
    priceRange: 'From 200 MAD to 500 MAD',
  },
  {
    category: 'Riad Dining',
    icon: Heart,
    description:
      'Most riads (traditional guesthouses) include breakfast and offer dinner on request. The home-cooked meals at riads are among the best food experiences in Morocco. Entirely halal, prepared by local cooks using fresh market ingredients. Often the highlight of a trip.',
    examples: ['Riad breakfast (included) from 0 MAD', 'Riad dinner (pre-ordered) from 150 MAD', 'Cooking class from 350 MAD', 'Rooftop tea service from 30 MAD'],
    priceRange: 'From 0 MAD (breakfast) to 350 MAD',
  },
  {
    category: 'International Restaurants',
    icon: Globe,
    description:
      'International cuisine in Morocco is also overwhelmingly halal. Italian, Asian, and French restaurants in major cities use halal meat. The only caution: some upscale international hotel restaurants may import non-halal meats. When dining at five-star international hotel restaurants, simply ask if the meat is locally sourced (it almost always is, and therefore halal).',
    examples: ['International hotel dining from 200 MAD', 'Italian restaurants from 100 MAD', 'Asian fusion restaurants from 120 MAD', 'French-Moroccan bistros from 150 MAD'],
    priceRange: 'From 100 MAD to 400 MAD',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RAMADAN TRAVEL TIPS
   ═══════════════════════════════════════════════════════════════ */

const ramadanTips = [
  {
    title: 'Restaurant Hours Change',
    icon: Clock,
    description:
      'Most restaurants close during daylight hours in Ramadan. Hotels serving tourists typically remain open with discreet dining areas. Plan lunch around your hotel or stock up on snacks from supermarkets (which remain open). After sunset (iftar), restaurants reopen and the streets come alive.',
  },
  {
    title: 'Iftar is Extraordinary',
    icon: Moon,
    description:
      'The iftar meal at sunset is one of the most beautiful food experiences in Morocco. Traditional iftar includes harira soup, dates, chebakia (honey cookies), boiled eggs, and msemen. Many restaurants offer special iftar menus from 80 MAD. Riads often prepare magnificent iftar spreads for guests.',
  },
  {
    title: 'Respect the Fast',
    icon: ShieldCheck,
    description:
      'Whether fasting or not, do not eat, drink, or smoke in public during daylight hours in Ramadan. This is both a legal and cultural expectation. Eating discreetly in your hotel room is perfectly acceptable. Moroccans deeply appreciate the respect.',
  },
  {
    title: 'Night Comes Alive',
    icon: Star,
    description:
      'Ramadan nights are magical in Morocco. After iftar, families flood the streets, souks stay open late, and there is a festive atmosphere until the early hours. The tarawih (evening prayers) at mosques are especially beautiful. Some cities host Ramadan cultural festivals.',
  },
  {
    title: 'Shorter Business Hours',
    icon: CalendarDays,
    description:
      'Shops, attractions, and services may have reduced hours during Ramadan. Museums typically close 1-2 hours earlier. Government offices may close by early afternoon. Plan sightseeing for mornings and evenings. Some tour operators adjust their schedules accordingly.',
  },
  {
    title: 'Transport Adjustments',
    icon: Compass,
    description:
      'Public transport runs on adjusted schedules. Trains and buses are more crowded just before iftar as people rush home to break the fast. Avoid traveling at this time. The hour before sunset is also when roads are emptiest, as everyone is at home preparing for iftar.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MOSQUE & PRAYER INFO
   ═══════════════════════════════════════════════════════════════ */

const prayerInfo = [
  {
    city: 'Marrakech',
    icon: Star,
    majorMosques: 'Koutoubia Mosque, Ali ben Youssef Mosque, Mouassine Mosque, Kasbah Mosque',
    note: 'Mosques on every corner in the medina. The adhan from Koutoubia is the reference for the city.',
    wuduFacilities: 'All mosques have wudu facilities. Public fountains (sebils) throughout the medina.',
  },
  {
    city: 'Fes',
    icon: BookOpen,
    majorMosques: 'Al-Qarawiyyin Mosque, Bou Inania Mosque, Moulay Idriss Zaouia, Andalusian Mosque',
    note: 'The spiritual capital of Morocco with over 300 mosques in the medina alone.',
    wuduFacilities: 'Extensive wudu facilities at all major mosques. Historic fountains throughout Fes el-Bali.',
  },
  {
    city: 'Casablanca',
    icon: Landmark,
    majorMosques: 'Hassan II Mosque, Mohammed V Mosque, Omar Ibn Al-Khattab Mosque, Al-Qods Mosque',
    note: 'Hassan II Mosque is the landmark. Modern mosques serve the city\'s expanding neighborhoods.',
    wuduFacilities: 'Modern wudu facilities at Hassan II Mosque. All neighborhood mosques have ablution areas.',
  },
  {
    city: 'Rabat',
    icon: Crown,
    majorMosques: 'Hassan Tower Mosque, As-Sounna Mosque, Ahl Fes Mosque, Moulay Slimane Mosque',
    note: 'As the capital, Rabat has well-maintained mosques with generous space for worshippers.',
    wuduFacilities: 'Excellent facilities at all main mosques. As-Sounna Mosque has the largest ablution area.',
  },
  {
    city: 'Chefchaouen',
    icon: Compass,
    majorMosques: 'Grand Mosque, Masjid Tarik ibn Ziad, Spanish Mosque (hilltop viewpoint)',
    note: 'The blue city has numerous small mosques. The Spanish Mosque is a famous viewpoint, not active.',
    wuduFacilities: 'Standard wudu facilities at all active mosques. Mountain spring water fountains in the medina.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ISLAMIC HOLIDAYS IN MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const islamicHolidays = [
  {
    name: 'Ramadan',
    description: 'The holy month of fasting from dawn to sunset. Morocco transforms during Ramadan with special foods, night markets, and an atmosphere of devotion and community. Dates shift annually according to the lunar calendar.',
    travelImpact: 'Restaurants close during the day. Reduced business hours. Extraordinary iftar experiences. Vibrant night life.',
    icon: Moon,
  },
  {
    name: 'Eid al-Fitr',
    description: 'The celebration marking the end of Ramadan. Three days of feasting, family visits, and gift-giving. Moroccans dress in their finest clothes and share special sweets like kaab el ghazal and chebakia.',
    travelImpact: 'Public holiday (2-3 days). Many businesses closed. Transport is very busy. Book accommodations in advance.',
    icon: Star,
  },
  {
    name: 'Eid al-Adha',
    description: 'The Festival of Sacrifice, the most important holiday in Morocco. Families sacrifice a sheep and share the meat with neighbors and the poor. The streets are quiet in the morning and festive in the afternoon.',
    travelImpact: 'Major public holiday (3-4 days). Most businesses closed. Limited restaurant options. A deeply cultural experience if you are invited to join a family.',
    icon: Heart,
  },
  {
    name: 'Mawlid an-Nabi',
    description: 'Celebrating the birth of Prophet Muhammad (PBUH). Moroccans gather for prayers, religious songs, and special meals. Children receive sweets and gifts. Some cities host processions and cultural events.',
    travelImpact: 'Public holiday (1 day). Some businesses closed. Religious events at mosques. A warm, celebratory atmosphere.',
    icon: Sun,
  },
  {
    name: 'Islamic New Year (1st Muharram)',
    description: 'Marking the start of the Islamic (Hijri) calendar year. A more subdued celebration compared to other holidays, centered on reflection, prayer, and family gatherings.',
    travelImpact: 'Public holiday (1 day). Minimal disruption to travel plans. Mosques hold special prayers.',
    icon: CalendarDays,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HALAL HOTEL OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const halalHotelOptions = [
  {
    type: 'Traditional Riads (Best for Muslim Travelers)',
    icon: Heart,
    priceRange: 'From 400 MAD per night',
    description:
      'Traditional Moroccan guesthouses in the medinas are the most naturally Muslim-friendly accommodation. Most riads are family-owned, do not serve alcohol, and offer home-cooked halal meals. Prayer mats are often available on request. The intimate, family atmosphere aligns perfectly with Islamic values of hospitality.',
    features: ['No alcohol on premises', 'Home-cooked halal meals', 'Prayer mats available', 'Family-friendly atmosphere', 'Near mosques in the medina'],
  },
  {
    type: 'Halal-Friendly Hotels',
    icon: ShieldCheck,
    priceRange: 'From 600 MAD per night',
    description:
      'Several hotel chains and boutique properties in Morocco actively market themselves as halal-friendly. These properties ensure no alcohol in minibars, provide prayer mats and qibla direction indicators, offer halal room service, and may have gender-separated pool hours or spa facilities.',
    features: ['Qibla direction in rooms', 'Alcohol-free minibars', 'Halal room service', 'Prayer mats provided', 'Some offer separated facilities'],
  },
  {
    type: 'Luxury Halal Options',
    icon: Crown,
    priceRange: 'From 2,000 MAD per night',
    description:
      'High-end riads and boutique hotels that combine luxury with Islamic values. Properties like Riad Fes, La Sultana Marrakech, and various premium riads offer five-star service without compromising on halal requirements. Private dining, exclusive hammam access, and dedicated prayer spaces.',
    features: ['Five-star halal dining', 'Private hammam facilities', 'Dedicated prayer rooms', 'Alcohol-free or separate sections', 'Concierge for mosque visits'],
  },
  {
    type: 'Budget Halal Stays',
    icon: DollarSign,
    priceRange: 'From 150 MAD per night',
    description:
      'Budget guesthouses and small hotels throughout Morocco are inherently halal-friendly. In smaller towns and medinas, alcohol is rarely available and meals are simple, home-cooked, and halal. These offer the most authentic Moroccan experience at the lowest price.',
    features: ['Naturally alcohol-free', 'Simple halal meals', 'Family-run atmosphere', 'Close to neighborhood mosques', 'Authentic local experience'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MODEST DRESS & SHOPPING
   ═══════════════════════════════════════════════════════════════ */

const modestDressTips = [
  {
    title: 'What Moroccan Women Wear',
    icon: Users,
    description:
      'Moroccan women\'s dress varies widely. In cities like Casablanca and Rabat, you will see everything from full niqab to Western fashion. In medinas and smaller towns, modest dress is more common. About 50-60% of Moroccan women wear hijab. Djellaba (a long, hooded garment) is worn by both men and women and is perfect for modest coverage.',
  },
  {
    title: 'Where to Buy Modest Clothing',
    icon: ShoppingBag,
    description:
      'The souks of Marrakech, Fes, and other cities are filled with beautiful modest clothing options. Djellabas start from 200 MAD, kaftans from 300 MAD, and scarves from 30 MAD. The Habous Quarter in Casablanca is excellent for quality Islamic clothing. Modern modest fashion boutiques are emerging in Casablanca and Rabat.',
  },
  {
    title: 'Dress Code for Religious Sites',
    icon: Landmark,
    description:
      'When visiting mosques (as a Muslim), dress modestly: cover shoulders, knees, and ideally wear loose-fitting clothing. Women should cover their hair. Remove shoes before entering. At the Hassan II Mosque tour, modest dress is required for all visitors. Scarves are sometimes available at the entrance.',
  },
  {
    title: 'Beach Etiquette',
    icon: Sun,
    description:
      'Public beaches are mixed-gender. Moroccan women often swim in full clothing or modest swimwear. Burkini-style swimwear is common and completely accepted. Private beach clubs may be more relaxed. For the most comfortable experience, choose beaches in Agadir, Essaouira, or private resort beaches.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ISLAMIC ART & ARCHITECTURE
   ═══════════════════════════════════════════════════════════════ */

const islamicArtHighlights = [
  {
    name: 'Zellige Tilework',
    icon: Award,
    location: 'Throughout Morocco',
    description:
      'Morocco\'s signature art form: hand-cut geometric mosaic tiles arranged into mesmerizing patterns. Found in mosques, madrasas, riads, and fountains. The best examples are in Fes, where zellige masters (maallems) still work using centuries-old techniques. A single square meter can contain thousands of hand-cut pieces.',
  },
  {
    name: 'Muqarnas (Honeycomb Vaulting)',
    icon: Building,
    location: 'Fes, Marrakech, Meknes',
    description:
      'Elaborate three-dimensional ceilings carved from plaster or cedar wood, creating the illusion of stalactites. The finest examples are in the Saadian Tombs (Marrakech), Bou Inania Madrasa (Fes), and the Mausoleum of Mohammed V (Rabat). Each piece is hand-carved and assembled without modern tools.',
  },
  {
    name: 'Arabic Calligraphy',
    icon: BookOpen,
    location: 'Mosques, Madrasas, Museums',
    description:
      'Quranic verses and poetic inscriptions carved into stucco, wood, and stone throughout Morocco\'s religious architecture. The calligraphy in the Bou Inania Madrasa and Al-Qarawiyyin Mosque in Fes is considered among the finest in the Islamic world. The Museum of Moroccan Arts in Marrakech has excellent calligraphy collections.',
  },
  {
    name: 'Geometric Patterns',
    icon: Compass,
    location: 'Throughout Morocco',
    description:
      'Islamic geometric patterns adorn every surface in Morocco\'s historic buildings. Based on mathematical principles of symmetry and tessellation, these patterns reflect the infinite nature of creation. The most complex patterns are found in the Alhambra-influenced buildings of northern Morocco and the Marinid monuments of Fes.',
  },
  {
    name: 'Cedar Wood Carving',
    icon: Star,
    location: 'Fes, Marrakech, Meknes',
    description:
      'Atlas cedar (Cedrus atlantica) is carved into intricate screens (mashrabiya), ceilings, doors, and decorative panels. The woodworkers of Fes are particularly renowned. The carved cedar ceilings of the Bahia Palace (Marrakech) and the doors of the Royal Palace (Fes) are masterpieces of Islamic woodcraft.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: 'Street food meal', price: 'From 20 MAD', note: 'Tagine, harira, brochettes at market stalls' },
  { service: 'Restaurant lunch', price: 'From 50 MAD', note: 'Local sit-down restaurant in the medina' },
  { service: 'Fine dining dinner', price: 'From 250 MAD', note: 'Upscale Moroccan or international cuisine' },
  { service: 'Budget riad (per night)', price: 'From 300 MAD', note: 'Traditional guesthouse with breakfast' },
  { service: 'Mid-range riad (per night)', price: 'From 600 MAD', note: 'Beautiful riad with dinner option' },
  { service: 'Luxury riad (per night)', price: 'From 2,000 MAD', note: 'Five-star with all halal amenities' },
  { service: 'Hassan II Mosque tour', price: 'From 130 MAD', note: 'Guided tour, the only mosque open to visitors' },
  { service: 'Madrasa entrance', price: 'From 70 MAD', note: 'Bou Inania, Ben Youssef, and others' },
  { service: 'Modest djellaba', price: 'From 200 MAD', note: 'Traditional Moroccan garment from the souks' },
  { service: 'Silk scarf/hijab', price: 'From 30 MAD', note: 'Wide selection in medina shops' },
  { service: 'Hammam visit (public)', price: 'From 50 MAD', note: 'Gender-separated traditional hammam' },
  { service: 'Hammam visit (luxury spa)', price: 'From 300 MAD', note: 'Private facilities with full treatment' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HAMMAM ETIQUETTE FOR MUSLIM TRAVELERS
   ═══════════════════════════════════════════════════════════════ */

const hammamMuslimTips = [
  {
    title: 'Gender Separation is Standard',
    icon: Users,
    description:
      'All public hammams in Morocco are strictly gender-separated. Some operate different hours for men and women; others have separate sections. This aligns perfectly with Islamic modesty requirements. Women-only sessions are the norm.',
  },
  {
    title: 'Wudu-Friendly Environment',
    icon: Droplets,
    description:
      'Many Moroccans perform wudu (ablution) at the hammam before heading to the mosque, especially on Fridays. The hammam is essentially a place of purification. Hot and cold running water is always available.',
  },
  {
    title: 'Awrah Coverage',
    icon: ShieldCheck,
    description:
      'In public hammams, the navel-to-knee area remains covered for men, and women keep undergarments on. This is consistent with Islamic guidelines on awrah. Full nudity is not the custom in Moroccan hammams, unlike some Turkish or Finnish baths.',
  },
  {
    title: 'Friday Timing',
    icon: CalendarDays,
    description:
      'The hammam is busiest on Thursday evenings and Friday mornings, as Moroccans prepare for Jumu\'ah (Friday prayer). For a quieter experience, visit on weekday mornings. The hammam-then-mosque routine is a cherished Moroccan tradition.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHalalTravelPage() {
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
            backgroundImage: 'url(/images/hero-hassan-ii-mosque.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Halal Travel Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Moon className="w-4 h-4" />
            Muslim Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Halal Travel Morocco:
            <br className="hidden md:block" /> The Complete Muslim Travel Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Morocco is one of the world&apos;s most naturally Muslim-friendly destinations.
            All food is halal, mosques are on every corner, and 1,200 years of Islamic heritage
            await. Your complete guide for 2026.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco is Perfect for Muslim Travelers
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is a Muslim country where 99% of the population follows Islam. This means
                that for Muslim travelers, virtually every concern about halal food, prayer
                facilities, and religious observance is naturally addressed. You do not need to
                search for halal restaurants because all food is halal. You do not need to find a
                mosque because there is one on every other street. You do not need to worry about
                dress code because modest dress is the norm.
              </p>
              <p>
                Beyond the practical ease, Morocco offers Muslim travelers something deeper: a
                chance to connect with a rich Islamic civilization that spans over twelve centuries.
                From the world&apos;s oldest university at Al-Qarawiyyin in Fes to the awe-inspiring
                Hassan II Mosque in Casablanca, from the holy city of Moulay Idriss to the ancient
                Almohad mosques of the Atlas Mountains, Morocco&apos;s Islamic heritage is
                extraordinary.
              </p>
              <p>
                The Moroccan tradition of hospitality (diafa) is rooted in Islamic values.
                Visitors are welcomed as honored guests. Tea is offered freely. Neighbors look
                out for one another. The warmth of Moroccan people is not a tourism campaign;
                it is a lived expression of faith and culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Quick Facts for Muslim Travelers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-moroccan p-5 text-center">
              <UtensilsCrossed className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                All Food is Halal
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                99% Muslim country. All meat is slaughtered according to Islamic law. No need to
                search for halal labels.
              </p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Mosques Everywhere
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Over 50,000 mosques nationwide. The adhan (call to prayer) sounds five times daily
                from every neighborhood.
              </p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Moon className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Maliki School
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Morocco follows the Maliki school of jurisprudence. The religious practice is
                moderate, welcoming, and deeply rooted.
              </p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Arabic &amp; French Spoken
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Arabic is the official language. French is widely spoken. English is common in
                tourist areas. Darija (Moroccan Arabic) has unique expressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Halal Dining Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Halal Dining Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The good news: virtually everything you eat in Morocco is halal. Here is a breakdown by dining category.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices and may vary by location and season.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {halalDiningGuide.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.category} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.category}
                      </h3>
                      <span className="text-xs text-[var(--color-accent)] font-semibold">{item.priceRange}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.examples.map((example, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mosque & Prayer Facilities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Mosque &amp; Prayer Facilities by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco has over 50,000 mosques. You will never be far from a place to pray. The adhan
            sounds five times daily and serves as a natural clock.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Non-Muslims generally cannot enter mosques in Morocco. The exception is the Hassan II Mosque in Casablanca (guided tours available).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prayerInfo.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {city.city}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide">Major Mosques</span>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">{city.majorMosques}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-wide">Wudu Facilities</span>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">{city.wuduFacilities}</p>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] italic">{city.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Quick Reference ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Price Guide for Muslim Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to budget for a halal-friendly trip to Morocco across different categories.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Peak season (October-April) and holiday periods may see increases of 20-30%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.service}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.service}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Islamic Heritage Sites ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 10 Islamic Heritage Sites in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Over 1,200 years of Islamic civilization have left Morocco with extraordinary mosques, madrasas, and monuments.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary by season and visitor type.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {islamicHeritageSites.map((site) => {
              const SiteIcon = site.icon;
              return (
                <div key={site.rank} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">#{site.rank}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {site.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {site.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <SiteIcon className="w-3.5 h-3.5" />
                          {site.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {site.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{site.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {site.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ramadan Travel Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traveling During Ramadan
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ramadan in Morocco is a special experience. The country transforms, and with a few
            adjustments, it can be one of the most rewarding times to visit.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {ramadanTips.map((tip, index) => {
                  const TipIcon = tip.icon;
                  return (
                    <div key={tip.title} className="relative flex gap-6">
                      {/* Number circle */}
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <TipIcon className="w-5 h-5 text-white" />
                      </div>

                      <div className="card-moroccan p-6 flex-1">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                          {tip.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)]">{tip.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hammam Etiquette for Muslim Travelers ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hammam Etiquette for Muslim Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Moroccan hammam is deeply rooted in Islamic traditions of purification. Here is what
            Muslim travelers should know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {hammamMuslimTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="card-moroccan p-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hammam Pricing
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Public hammam entry starts from 50 MAD. Gommage (scrub) service from 50 MAD extra (tip the kessala from 20 MAD).
                Luxury spa hammam packages start from 300 MAD and include private facilities, gommage, clay mask, and massage.
                Gender separation is standard at all levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Islamic Art & Architecture ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Islamic Art &amp; Architecture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s Islamic decorative arts are among the finest in the world. Here are the key
            art forms you will encounter throughout the country.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {islamicArtHighlights.map((art) => {
              const ArtIcon = art.icon;
              return (
                <div key={art.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ArtIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {art.name}
                      </h3>
                      <span className="text-xs text-[var(--color-accent)] font-semibold flex items-center gap-1 mb-3">
                        <MapPin className="w-3 h-3" />
                        {art.location}
                      </span>
                      <p className="text-sm text-[var(--text-secondary)]">{art.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Modest Dress & Shopping ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Modest Dress &amp; Shopping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a comfortable destination for those who dress modestly. Here is what you need to know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {modestDressTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-moroccan p-4 text-center">
              <DollarSign className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xs font-semibold text-[var(--text-primary)]">Djellaba</p>
              <p className="text-xs text-[var(--color-accent)]">From 200 MAD</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <DollarSign className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xs font-semibold text-[var(--text-primary)]">Kaftan</p>
              <p className="text-xs text-[var(--color-accent)]">From 300 MAD</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <DollarSign className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xs font-semibold text-[var(--text-primary)]">Scarves &amp; Hijab</p>
              <p className="text-xs text-[var(--color-accent)]">From 30 MAD</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Halal Hotel Options ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Halal-Friendly Accommodation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From budget guesthouses to luxury riads, Morocco offers excellent options for Muslim travelers
            seeking alcohol-free and halal-compliant accommodation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {halalHotelOptions.map((option) => {
              const OptionIcon = option.icon;
              return (
                <div key={option.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <OptionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {option.type}
                      </h3>
                      <span className="text-xs text-[var(--color-accent)] font-semibold">{option.priceRange}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{option.description}</p>
                  <div className="space-y-2">
                    {option.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Islamic Holidays Calendar ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Islamic Holidays in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Islamic holidays are public holidays in Morocco. Understanding them helps you plan your trip.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Dates follow the Islamic lunar calendar and shift approximately 10-12 days earlier each Gregorian year.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {islamicHolidays.map((holiday) => {
              const HolidayIcon = holiday.icon;
              return (
                <div key={holiday.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <HolidayIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {holiday.name}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{holiday.description}</p>
                      <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Travel impact:</span> {holiday.travelImpact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Alcohol-Free Zones ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Alcohol-Free Zones &amp; Practical Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Building className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Medina Areas
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The medinas (old cities) of Fes, Marrakech, Chefchaouen, and other cities are largely
                alcohol-free zones. Restaurants in the medina rarely serve alcohol. Riads within the medina
                typically do not have alcohol. This is the most comfortable area for Muslim travelers.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Ville Nouvelle (New City)
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The newer parts of Moroccan cities (ville nouvelle) are where you will find bars,
                liquor stores, and restaurants that serve alcohol. These areas are more westernized.
                If you prefer to avoid alcohol entirely, stick to the medina and traditional neighborhoods.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Star className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Restaurants
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Restaurants are divided: those with an alcohol license (often in tourist areas and
                modern neighborhoods) and those without (the majority, especially in medinas and
                smaller towns). If a restaurant does not have a license, alcohol will simply not be
                available. Look for traditional Moroccan restaurants for guaranteed alcohol-free dining.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Small Towns &amp; Rural Areas
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Outside major tourist cities, alcohol is very rare. Towns like Chefchaouen, Ouarzazate,
                and most Atlas Mountain villages are almost entirely alcohol-free. The Sahara desert
                camps serve mint tea, not alcohol. Rural Morocco is the most naturally halal-friendly
                environment you can find.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hotels &amp; Riads
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                International chain hotels typically serve alcohol in bars and restaurants. Traditional
                riads in the medina generally do not. When booking, check the property description or
                contact them directly. Many riads proudly advertise as alcohol-free and can remove
                minibars from rooms on request.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Moon className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                During Ramadan
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Alcohol sales are significantly restricted during Ramadan. Many licensed restaurants
                and bars close or stop serving alcohol for the month. Supermarkets often curtain off
                the alcohol section. Ramadan is the most alcohol-free period in Morocco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is all food in Morocco halal?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Morocco is a Muslim-majority country (99% Muslim) and virtually all food is halal
                by default. Meat is slaughtered according to Islamic law. The only exceptions are some
                international hotel restaurants that may serve non-halal imported meats, and certain
                tourist-oriented bars. When in doubt, ask, but in practice all street food, restaurants,
                and local eateries serve halal food.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can non-Muslims enter mosques in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                In general, non-Muslims cannot enter mosques in Morocco. The one major exception is the
                Hassan II Mosque in Casablanca, which offers guided tours to visitors of all faiths
                (from 130 MAD). Muslim travelers, of course, can pray in any mosque across the country.
                Simply perform wudu and enter respectfully.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are prayer times in Morocco and how do I find them?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Prayer times follow the standard five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha).
                The adhan is broadcast from mosques nationwide, so you will always hear the call. Morocco
                follows the Maliki school. For exact times, use apps like Muslim Pro or Athan, or ask at
                your riad. Prayer times are also published in Moroccan newspapers and displayed at mosque
                entrances.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it a good idea to visit Morocco during Ramadan?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Visiting during Ramadan is a unique and rewarding experience, but requires some planning.
                Most restaurants close during daylight hours, but hotels serving tourists remain open. The
                iftar meals at sunset are extraordinary. The atmosphere after dark is festive and vibrant.
                Be respectful by not eating, drinking, or smoking in public during fasting hours, whether
                you are fasting or not.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are there alcohol-free hotels in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, many. Most traditional riads (guesthouses) in the medinas do not serve alcohol.
                Budget guesthouses and small hotels in smaller towns are almost always alcohol-free.
                Several boutique hotels explicitly market themselves as halal-friendly with no alcohol
                on premises. When booking, check the property description or contact them directly.
                Traditional riads starting from 400 MAD per night are the best option.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should Muslim women wear in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is moderate in dress code. Many Moroccan women wear hijab, but it is not legally
                required. Muslim women travelers wearing hijab will feel very comfortable. Modest dress
                (covering shoulders and knees) is appreciated in medinas and religious areas. Western-style
                clothing is common in modern districts of Casablanca, Rabat, and Tangier. Djellabas and
                scarves are available from 30 MAD in any souk.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where can I find wudu (ablution) facilities?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Every mosque in Morocco has wudu facilities. Since there are over 50,000 mosques
                nationwide, you will never be far from one. Additionally, many public spaces in the
                medina have traditional fountains (sebils) that can be used. Shopping malls and modern
                facilities often have prayer rooms with wudu areas. Many riads will also provide a
                private wudu area on request.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for solo Muslim women travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is generally safe, and Muslim women travelers often report feeling particularly
                comfortable due to the shared cultural and religious values. Wearing hijab can sometimes
                lead to warmer interactions with locals. Standard precautions apply: avoid walking alone
                late at night in unfamiliar areas, use reputable transport, and stay in well-reviewed
                accommodations. The medinas are busy and well-populated, adding to the sense of safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/culture" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore Morocco&apos;s rich cultural traditions, customs, and social etiquette for visitors.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spa-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Droplets className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Spa &amp; Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Morocco&apos;s best hammams and spas with prices and etiquette.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/food" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <UtensilsCrossed className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover Morocco&apos;s incredible cuisine, from street food to fine dining.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

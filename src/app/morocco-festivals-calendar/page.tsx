import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Calendar,
  Clock,
  Info,
  ArrowRight,
  Music,
  Film,
  Users,
  BookOpen,
  Ticket,
  Globe,
  Heart,
  Sun,
  Moon,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Shield,
  Compass,
  Camera,
  Utensils,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Festivals & Events Calendar 2026 | Complete Monthly Guide',
  description:
    'Full calendar of Morocco festivals and events in 2026. Month-by-month guide to Mawazine, Gnaoua Festival, Jazzablanca, Rose Festival, Ramadan dates, Eid celebrations, film festivals, and 40+ cultural events across Morocco.',
  keywords: [
    'morocco festivals 2026',
    'morocco events calendar',
    'moroccan festivals',
    'morocco music festivals',
    'mawazine festival 2026',
    'gnaoua festival essaouira',
    'jazzablanca 2026',
    'morocco ramadan 2026',
    'rose festival morocco',
    'marrakech film festival',
    'morocco cultural events',
    'eid morocco 2026',
    'timitar festival agadir',
    'oasis festival marrakech',
    'morocco festival dates',
    'moussem tan-tan',
    'date festival erfoud',
    'cherry festival sefrou',
    'morocco religious holidays 2026',
    'morocco festival travel guide',
  ],
  openGraph: {
    title: 'Morocco Festivals & Events Calendar 2026 | Complete Monthly Guide',
    description:
      'Month-by-month guide to 40+ festivals and events across Morocco in 2026. Music festivals, religious observances, cultural celebrations, and film festivals with dates, locations, and practical tips.',
    url: `${BASE_URL}/morocco-festivals-calendar`,
    images: [
      {
        url: `${BASE_URL}/images/hero-festivals.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan festival scene with traditional music performers and decorations in a historic medina setting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Festivals & Events Calendar 2026 | Monthly Guide',
    description:
      'Complete guide to 40+ Moroccan festivals in 2026. Mawazine, Gnaoua, Jazzablanca, Rose Festival, Ramadan, Eid, film festivals, and more with exact dates and locations.',
    images: [`${BASE_URL}/images/hero-festivals.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-festivals-calendar` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-festivals-calendar`,
  name: 'Morocco Festivals & Events Calendar 2026 | Complete Monthly Guide',
  description:
    'Full calendar of Morocco festivals and events in 2026. Month-by-month guide covering music festivals, religious observances, cultural celebrations, and film festivals across Morocco.',
  url: `${BASE_URL}/morocco-festivals-calendar`,
  image: `${BASE_URL}/images/hero-festivals.webp`,
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
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-festivals-calendar`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Festivals Calendar 2026', item: `${BASE_URL}/morocco-festivals-calendar` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the biggest music festivals in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The five largest music festivals in Morocco are Mawazine Rhythms of the World in Rabat (June, 2.5 million+ attendees), Gnaoua World Music Festival in Essaouira (June), Jazzablanca in Casablanca (July), Timitar Festival in Agadir (July), and Oasis Festival in Marrakech (September). Mawazine is one of the biggest music festivals on the planet by attendance.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is Ramadan in Morocco in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ramadan 2026 in Morocco is expected to begin around February 17 and end around March 18, with Eid al-Fitr celebrations on March 19-20. Exact dates depend on the sighting of the moon. During Ramadan, most restaurants close during daytime hours, but tourist areas maintain some services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Morocco festivals free to attend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many Moroccan festivals are free or have very affordable tickets. Mawazine offers free outdoor stages alongside ticketed indoor concerts (from 200 MAD). The Gnaoua Festival in Essaouira has free open-air performances. Cultural festivals like the Rose Festival in Kalaat M\'Gouna and the Date Festival in Erfoud are free to attend. The Oasis Festival and Jazzablanca require purchased tickets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book hotels early for Morocco festival dates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. During major festivals like Mawazine, Gnaoua, and the Marrakech International Film Festival, hotel prices in the host city can double or triple. Book at least 2-3 months in advance. For Eid al-Adha and Eid al-Fitr, domestic travel surges and internal flights sell out fast. Riads in popular medinas may book out entirely during peak festival weekends.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear to festivals in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is relatively relaxed about dress at music festivals, but modest clothing is appreciated. Light layers work well for outdoor events. For religious observances and cultural festivals in smaller towns, dress more conservatively: cover shoulders and knees. Comfortable walking shoes are essential since most festival venues involve standing on uneven ground. Bring a hat and sunscreen for daytime events.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to attend large festivals in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco invests heavily in security for major festivals. Events like Mawazine and the Marrakech Film Festival have visible police presence and bag checks at entrances. Standard crowd-safety precautions apply: keep valuables hidden, stay aware of your surroundings, and avoid isolated areas late at night. Pickpocketing can occur in dense crowds, so use a money belt or cross-body bag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I travel between cities during Moroccan festivals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but plan ahead. During Eid holidays, ONCF trains and CTM buses between major cities sell out days in advance. The Al Boraq high-speed train between Casablanca and Tangier is particularly busy. Domestic flights with Royal Air Maroc spike in price. Renting a car gives you the most flexibility, but expect heavier traffic on highways around Eid and national holidays.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MONTH-BY-MONTH CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const monthlyCalendar = [
  {
    month: 'January',
    icon: Moon,
    events: [
      { name: 'Amazigh New Year (Yennayer)', dates: 'January 13', location: 'Nationwide', description: 'Berber New Year celebrated across Morocco with traditional meals, music, and family gatherings. Government-recognized holiday since 2018. Couscous with seven vegetables is the traditional dish.' },
      { name: 'Marrakech Marathon', dates: 'Late January', location: 'Marrakech', description: 'International marathon through the streets of Marrakech, passing landmarks like the Koutoubia Mosque and Menara Gardens. Around 13,000 runners from 60+ countries participate. Registration from 300 MAD.' },
    ],
  },
  {
    month: 'February',
    icon: Moon,
    events: [
      { name: 'Ramadan Begins', dates: 'Around February 17', location: 'Nationwide', description: 'The holy month of fasting starts. Daily rhythms shift dramatically: restaurants close during daylight, and cities come alive after sunset with iftar meals and night markets.' },
      { name: 'Almond Blossom Festival', dates: 'Mid-February', location: 'Tafraout (Anti-Atlas)', description: 'Celebration of the almond harvest in the pink granite valley of Tafraout. Traditional Amazigh music, dance performances, and local almond products. The valley turns pink and white with blossoms.' },
    ],
  },
  {
    month: 'March',
    icon: Sun,
    events: [
      { name: 'Eid al-Fitr', dates: 'Around March 19-20', location: 'Nationwide', description: 'End of Ramadan. Three days of celebrations with family visits, special prayers, new clothes, and sweets. Shops and businesses close for 2-3 days. Expect heavy domestic travel.' },
      { name: 'SIAM (Salon International de l\'Agriculture)', dates: 'Late March', location: 'Meknes', description: 'Morocco\'s largest agricultural fair, attracting over 1 million visitors. Exhibits of regional produce, livestock, and agricultural technology. From 30 MAD entry.' },
    ],
  },
  {
    month: 'April',
    icon: Sun,
    events: [
      { name: 'Kelaat M\'Gouna Rose Harvest Begins', dates: 'Early April', location: 'Dades Valley', description: 'Rose picking season starts in the Valley of Roses. Local cooperatives begin harvesting Damascena roses at dawn. You can visit cooperatives and see the distillation process from 50 MAD.' },
      { name: 'Marathon des Sables', dates: 'April (multi-stage)', location: 'Sahara Desert (Ouarzazate region)', description: 'The world\'s toughest footrace: 250 km across the Sahara in 6 stages over 7 days. Around 1,000 runners from 50 countries. Entry from 3,500 EUR; spectators can follow from Ouarzazate.' },
    ],
  },
  {
    month: 'May',
    icon: Sun,
    events: [
      { name: 'Rose Festival (Fete des Roses)', dates: 'Mid-May (3 days)', location: 'Kalaat M\'Gouna', description: 'The biggest cultural festival in the Dades Valley. Parade of floats decorated with roses, election of the Rose Queen, folk music, and Amazigh dancing. Free to attend. Rose products sold at market stalls from 20 MAD.' },
      { name: 'Eid al-Adha', dates: 'Around May 26-27', location: 'Nationwide', description: 'The Feast of Sacrifice. Families purchase and ritually sacrifice a sheep. Streets are quieter in the morning; afternoon brings large family meals. Most businesses close for 2-3 days. Domestic travel is extremely heavy in the days before.' },
      { name: 'FICAM (Festival International du Cinema d\'Animation)', dates: 'Late May', location: 'Meknes', description: 'International animated film festival featuring screenings, workshops, and masterclasses. Free entry to most screenings. Draws animators and filmmakers from across Africa and Europe.' },
    ],
  },
  {
    month: 'June',
    icon: Sun,
    events: [
      { name: 'Mawazine Rhythms of the World', dates: 'Mid-June (6 days)', location: 'Rabat', description: 'One of the largest music festivals on Earth by attendance, regularly drawing 2.5 million+ visitors over six days. Massive international headliners on the OLM Souissi stage (past acts include Rihanna, Elton John, Maroon 5). Free outdoor stages plus ticketed indoor concerts from 200 MAD.' },
      { name: 'Gnaoua World Music Festival', dates: 'Late June (4 days)', location: 'Essaouira', description: 'Essaouira\'s signature event since 1998. Gnaoua trance musicians perform alongside international jazz, blues, and world music artists at free open-air stages along the port and ramparts. The Place Moulay Hassan transforms into a massive concert venue. Up to 500,000 attendees.' },
      { name: 'Fes Festival of World Sacred Music', dates: 'Early-Mid June (9 days)', location: 'Fes', description: 'Sufi chanting, gospel choirs, Indian ragas, and Andalusian classical music performed in the historic Bab Makina courtyard and the garden of Dar Batha Museum. Ticketed concerts from 150 MAD; free fringe events in the medina.' },
    ],
  },
  {
    month: 'July',
    icon: Sun,
    events: [
      { name: 'Jazzablanca', dates: 'Early July (3 days)', location: 'Casablanca (Anfa Hippodrome)', description: 'Morocco\'s premier jazz festival, held at the Anfa Park in Casablanca. Mix of international jazz, soul, funk, and electronic artists. Past performers include Jamiroquai, Lenny Kravitz, and Disclosure. Day passes from 350 MAD; full festival from 800 MAD.' },
      { name: 'Timitar Festival', dates: 'Mid-July (4 days)', location: 'Agadir', description: 'Free Amazigh music and world music festival in the Atlantic coast city of Agadir. Celebrates Berber culture with performances by Amazigh artists alongside international acts. Multiple stages around the city center. Draws 400,000+ attendees annually.' },
      { name: 'Moussem of Tan-Tan', dates: 'July (dates vary)', location: 'Tan-Tan', description: 'UNESCO-recognized Intangible Cultural Heritage event. Nomadic tribes from the Saharan regions gather for camel races, traditional music, poetry recitals, and trading. A rare chance to witness authentic Saharan nomadic culture. Free to attend.' },
    ],
  },
  {
    month: 'August',
    icon: Sun,
    events: [
      { name: 'Moulay Idriss Zerhoun Moussem', dates: 'August (varies)', location: 'Moulay Idriss Zerhoun', description: 'Annual pilgrimage to the tomb of Morocco\'s patron saint, Moulay Idriss I. Religious processions, Sufi music, and community feasting. Non-Muslims can observe from outside the shrine area. The hilltop town near Volubilis fills with pilgrims.' },
      { name: 'Cultural Season in Asilah', dates: 'Throughout August', location: 'Asilah', description: 'Asilah\'s medina walls become an open-air gallery as Moroccan and international artists paint murals during this annual arts season. Poetry readings, concerts, and art exhibitions. Free to wander and watch artists at work.' },
    ],
  },
  {
    month: 'September',
    icon: Sun,
    events: [
      { name: 'Oasis Festival', dates: 'Mid-September (3 days)', location: 'Marrakech (The Source)', description: 'Boutique electronic music festival at a resort venue outside Marrakech. International DJs spin house, techno, and electronica poolside. Workshops on yoga, cooking, and art. Weekend passes from 1,800 MAD; day passes from 700 MAD.' },
      { name: 'Tanjazz', dates: 'Mid-September (4 days)', location: 'Tangier', description: 'Tangier\'s jazz festival features performances at the historic Palais des Institutions Italiennes and other venues across the city. Mix of Moroccan, European, and American jazz artists. Tickets from 100 MAD per concert.' },
    ],
  },
  {
    month: 'October',
    icon: Moon,
    events: [
      { name: 'Date Festival (Festival des Dattes)', dates: 'Late October (3 days)', location: 'Erfoud', description: 'Harvest celebration in the Tafilalet oasis. Processions, folk music, Gnaoua performances, and a date market where you can taste dozens of date varieties. Free entry. Erfoud\'s streets fill with vendors selling fresh dates from 30 MAD/kg.' },
      { name: 'Sefrou Cherry Festival', dates: 'Early October', location: 'Sefrou (near Fes)', description: 'One of Morocco\'s oldest festivals, dating to 1920. Celebrates the cherry harvest with parades, traditional Amazigh music, a Cherry Queen pageant, and folk dancing. Free. The small Andalusian-style town of Sefrou is 30 km from Fes.' },
      { name: 'Visa For Music', dates: 'Late October (3 days)', location: 'Rabat', description: 'Africa and Middle East\'s leading music industry conference and showcase festival. Over 50 acts perform across Rabat\'s Theatre Mohammed V and other venues. Professional networking by day, concerts by night. Passes from 200 MAD.' },
    ],
  },
  {
    month: 'November',
    icon: Moon,
    events: [
      { name: 'Marrakech International Film Festival (FIFM)', dates: 'Late November (8 days)', location: 'Marrakech (Palais des Congres)', description: 'Morocco\'s premier cinematic event, founded by King Mohammed VI. Red carpet screenings at the Palais des Congres, with free open-air screenings on Jemaa el-Fnaa square. Past tributes: Martin Scorsese, Cate Blanchett, Robert De Niro. Screening tickets from 50 MAD.' },
      { name: 'Green Horse (Salon du Cheval d\'El Jadida)', dates: 'Mid-November (6 days)', location: 'El Jadida', description: 'Morocco\'s horse and equestrian culture on full display. Show jumping, traditional tbourida (cavalry charge) demonstrations, horse breeding exhibits, and equestrian competitions. Entry from 50 MAD. The tbourida performances alone are worth the trip.' },
    ],
  },
  {
    month: 'December',
    icon: Moon,
    events: [
      { name: 'Tan-Tan Moussem (second edition)', dates: 'December (varies)', location: 'Tan-Tan', description: 'Some years see a second gathering of nomadic tribes in the southern city of Tan-Tan. Camel markets, traditional desert music, and Sahrawi culture. Check locally for confirmed dates as this second edition is not held every year.' },
      { name: 'New Year Celebrations', dates: 'December 31', location: 'Major cities', description: 'Casablanca, Marrakech, and Tangier host New Year\'s Eve events at hotels, restaurants, and private venues. Gala dinners from 800 MAD at upscale hotels. Jemaa el-Fnaa in Marrakech draws crowds for an informal street celebration. Not an official Moroccan holiday.' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP MUSIC FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const topMusicFestivals = [
  {
    name: 'Mawazine Rhythms of the World',
    city: 'Rabat',
    month: 'June',
    attendance: '2.5 million+',
    price: 'Free outdoor stages; indoor concerts from 200 MAD',
    genre: 'Pop, Hip-Hop, Arabic, World Music',
    description: 'Founded in 2001, Mawazine has grown into one of the largest music festivals globally. The OLM Souissi stage holds 200,000 people and has hosted Shakira, The Weeknd, and Jason Derulo. The Nahda stage features Arabic and Moroccan artists. Six days of nonstop music across Rabat.',
    tip: 'Book Rabat hotels the moment dates are announced. Budget accommodations sell out months ahead.',
  },
  {
    name: 'Gnaoua World Music Festival',
    city: 'Essaouira',
    month: 'June',
    attendance: '500,000+',
    price: 'Free open-air stages; special concerts from 150 MAD',
    genre: 'Gnaoua, Jazz, Blues, World Fusion',
    description: 'The Gnaoua Festival put Essaouira on the global music map. Gnaoua master musicians (maalems) lead hypnotic trance rituals with their signature guembri bass lutes, joined by international jazz and blues artists for one-of-a-kind fusion performances. The main stage sits between the medina ramparts and the Atlantic.',
    tip: 'Arrive a day early. The medina riads fill completely during the festival, and Essaouira is small. Camp at Sidi Kaouki beach (20 km south) if accommodation is full.',
  },
  {
    name: 'Jazzablanca',
    city: 'Casablanca',
    month: 'July',
    attendance: '200,000+',
    price: 'Day passes from 350 MAD; full festival from 800 MAD',
    genre: 'Jazz, Soul, Funk, Electronic',
    description: 'Casablanca\'s answer to Montreux. Held at the Anfa Park (formerly Hippodrome), Jazzablanca features three stages with headliners from jazz, soul, and electronic scenes. The VIP village offers premium seating and catering. Past editions featured Marcus Miller, Keziah Jones, and Ibrahim Maalouf.',
    tip: 'Buy tickets online early for the best prices. The Casa Tramway runs late during festival nights.',
  },
  {
    name: 'Timitar Festival',
    city: 'Agadir',
    month: 'July',
    attendance: '400,000+',
    price: 'Free',
    genre: 'Amazigh, World Music, Reggae',
    description: 'Agadir\'s free festival is the largest celebration of Amazigh (Berber) musical culture in Morocco. Artists perform in Tashelhit, Tamazight, and Tarifit alongside international world music acts. Stages are set up along Boulevard du 20 Aout near the beach. The atmosphere mixes Souss Amazigh pride with beach-town relaxation.',
    tip: 'Combine the festival with beach time. Agadir has Morocco\'s best urban beach, and daytime is free before evening concerts.',
  },
  {
    name: 'Oasis Festival',
    city: 'Marrakech',
    month: 'September',
    attendance: '5,000 (boutique capacity)',
    price: 'Weekend passes from 1,800 MAD',
    genre: 'House, Techno, Electronica',
    description: 'A curated boutique electronic music experience in a resort setting outside Marrakech. DJs perform poolside and in desert-garden settings. The festival also hosts cooking workshops led by Moroccan chefs, yoga sessions, and art installations. Think Ibiza meets the Haouz Plain.',
    tip: 'Book the on-site accommodation packages for the full experience. Shuttle buses run from central Marrakech.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RELIGIOUS OBSERVANCES 2026
   ═══════════════════════════════════════════════════════════════ */

const religiousObservances = [
  {
    name: 'Ramadan',
    dates: 'Approx. February 17 - March 18, 2026',
    description: 'The holiest month in the Islamic calendar. Muslims fast from dawn to sunset. Daily life shifts: restaurants close during the day (tourist areas maintain limited service), shops open later, and nights come alive with iftar meals and street food markets. The pre-dawn meal (suhoor) creates a quiet buzz around 4-5 AM.',
    tips: 'Eat and drink discreetly in public during fasting hours. Experience an iftar meal at a local restaurant for a cultural highlight. The harira soup, dates, chebakia pastries, and fresh juices at sunset are memorable.',
  },
  {
    name: 'Eid al-Fitr',
    dates: 'Approx. March 19-20, 2026',
    description: 'The three-day celebration marking the end of Ramadan. Families gather for special morning prayers, wear new clothes, exchange gifts, and share festive meals of pastilla, couscous, and sweets. Streets fill with families visiting relatives.',
    tips: 'Most shops, banks, and businesses close for 2-3 days. Transport is extremely busy as Moroccans travel to see family. Book travel in advance. Markets reopen with a festive atmosphere.',
  },
  {
    name: 'Eid al-Adha',
    dates: 'Approx. May 26-27, 2026',
    description: 'The Feast of Sacrifice commemorates Ibrahim\'s willingness to sacrifice his son. Each family that can afford it purchases a sheep (from 2,000 MAD) for ritual slaughter on the morning of Eid. The meat is divided into thirds: one for the family, one for neighbors, and one for the poor.',
    tips: 'Be prepared for the sights and sounds of animal slaughter in residential areas on the morning of Eid. Many travelers choose to leave cities for the day. The following two days bring large family gatherings with grilled meat (mechoui).',
  },
  {
    name: 'Mawlid (Birthday of the Prophet)',
    dates: 'Approx. August 15, 2026',
    description: 'Celebration of the Prophet Muhammad\'s birthday. Mosques hold special prayers and Quran recitations. Families prepare traditional sweets, and children receive gifts. Sufi brotherhoods hold special dhikr ceremonies with chanting and music, particularly in cities like Fes and Meknes.',
    tips: 'Public holiday with closures. The Sufi ceremonies in the old medinas of Fes are extraordinary for respectful observers. Ask a local guide to help you find an accessible gathering.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CULTURAL FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const culturalFestivals = [
  {
    name: 'Rose Festival (Fete des Roses)',
    location: 'Kalaat M\'Gouna, Dades Valley',
    month: 'May',
    icon: Heart,
    description: 'Three days of parades, folk music, and Amazigh dancing in the Valley of Roses. Floats decorated with thousands of fresh roses wind through town. The Rose Queen is crowned. Local cooperatives sell rose water, rose oil, rose soap, and rose cream at stalls from 20 MAD.',
  },
  {
    name: 'Date Festival (Festival des Dattes)',
    location: 'Erfoud, Tafilalet Region',
    month: 'October',
    icon: Star,
    description: 'The Tafilalet oasis celebrates its date harvest with three days of processions, Gnaoua music, and a sprawling date market. Taste Medjool, Boufeggous, and Jihel dates fresh from the palm groves. Locals compete for the title of best date producer. Free entry.',
  },
  {
    name: 'Cherry Festival',
    location: 'Sefrou (30 km from Fes)',
    month: 'October',
    icon: Globe,
    description: 'One of Morocco\'s oldest festivals, launched in 1920 during the French Protectorate. Parades with the Cherry Queen, traditional Amazigh dances, cherry-throwing festivities, and a market selling fresh cherries from 40 MAD/kg. The small Andalusian-influenced town is a day trip from Fes.',
  },
  {
    name: 'Moussem of Tan-Tan',
    location: 'Tan-Tan, Southern Morocco',
    month: 'July',
    icon: Compass,
    description: 'UNESCO Intangible Cultural Heritage event since 2008. Nomadic and semi-nomadic tribes from the Saharan and Sahel regions of Morocco, Mauritania, and Mali gather for camel races, Hassani music, poetry recitals, and traditional crafts. A genuine encounter with Saharan nomadic culture.',
  },
  {
    name: 'Almond Blossom Festival',
    location: 'Tafraout, Anti-Atlas',
    month: 'February',
    icon: Sun,
    description: 'When the almond trees flower in the Anti-Atlas mountains, Tafraout hosts traditional Amazigh celebrations. Ahouach dance performances, local music, and markets selling amlou (almond, argan oil, and honey paste) from 60 MAD per jar. The pink granite landscape dotted with white blossoms is spectacular.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FILM FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const filmFestivals = [
  {
    name: 'Marrakech International Film Festival (FIFM)',
    location: 'Marrakech',
    month: 'November-December',
    description: 'Founded in 2001 under royal patronage, the FIFM has become Africa\'s most prestigious film festival. The competition showcases films from across Africa, the Arab world, and Asia. The Jemaa el-Fnaa open-air cinema screens classics for free to thousands. Past honorees include Martin Scorsese, Francis Ford Coppola, and Cate Blanchett.',
    tickets: 'Screening tickets from 50 MAD; Jemaa el-Fnaa screenings free',
  },
  {
    name: 'FICAM (Festival International du Cinema d\'Animation)',
    location: 'Meknes',
    month: 'May',
    description: 'The leading animation film festival in the MENA region. Screenings of animated shorts and features from around the world, plus workshops on animation techniques, masterclasses with industry professionals, and a children\'s program. Meknes provides a quieter, more intimate setting than Marrakech.',
    tickets: 'Most screenings free; some workshops require registration',
  },
  {
    name: 'Festival National du Film (FNF)',
    location: 'Tangier',
    month: 'Varies (usually February-March)',
    description: 'Morocco\'s national film festival spotlights domestic cinema. Moroccan directors, actors, and producers compete for the Grand Prix. An excellent window into contemporary Moroccan storytelling and social issues. Held at the Cinema Rif and other Tangier venues.',
    tickets: 'From 30 MAD per screening',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoFestivalsCalendarPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-festivals.webp"
          alt="Colorful Moroccan festival with traditional musicians performing Gnaoua music in a historic square"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 container-morocco text-center py-24">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-white/80 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Morocco Festivals Calendar 2026</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco Festivals &amp; Events Calendar 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-[family-name:var(--font-heading)]">
            Complete month-by-month guide to 40+ festivals, from the Gnaoua trance rituals in
            Essaouira to Mawazine&apos;s 2.5 million-strong crowd in Rabat. Music, culture, religion,
            film &mdash; every major event with dates, locations, and practical tips.
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-8">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            A Year of Celebration
          </h2>
          <div className="prose max-w-none text-[var(--text-secondary)]">
            <p className="text-base leading-relaxed mb-4">
              Morocco hosts over 40 major festivals annually, blending African, Arab, Amazigh, and European
              influences into an event calendar unlike anywhere else. Mawazine in Rabat regularly outdraws
              Glastonbury and Coachella combined. The Gnaoua Festival turns Essaouira&apos;s Atlantic ramparts
              into a stage for spiritual trance music. And in the Dades Valley, thousands of fresh Damascena
              roses carpet parade floats each May.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Religious observances shape the year. Ramadan transforms daily life for a full month. Eid al-Adha
              brings the entire country to a standstill as families gather. The Sufi ceremonies during Mawlid
              in Fes reveal a mystical side of Moroccan Islam that few outsiders witness.
            </p>
            <p className="text-base leading-relaxed mb-4">
              This guide covers every significant event in 2026 with specific dates (where confirmed), exact
              locations, ticket prices, and the practical details you need to plan around them. Islamic holiday
              dates are approximate and depend on lunar sightings; check locally for confirmed dates as they
              approach.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="card-moroccan p-4 text-center">
              <Music className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">5+</p>
              <p className="text-xs text-[var(--text-muted)]">Major Music Festivals</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Moon className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">4</p>
              <p className="text-xs text-[var(--text-muted)]">Religious Observances</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Globe className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">10+</p>
              <p className="text-xs text-[var(--text-muted)]">Cultural &amp; Harvest Festivals</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Film className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">3</p>
              <p className="text-xs text-[var(--text-muted)]">Film Festivals</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Month-by-Month Calendar ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            2026 Month-by-Month Festival Calendar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monthlyCalendar.map((m) => (
              <div key={m.month} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <m.icon className="w-6 h-6 text-[var(--color-gold)]" />
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {m.month}
                  </h3>
                </div>
                <div className="space-y-4">
                  {m.events.map((evt) => (
                    <div key={evt.name} className="border-l-2 border-[var(--color-accent)] pl-4">
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {evt.name}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mt-1 mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                          {evt.dates}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                          {evt.location}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {evt.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Music Festivals ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 5 Music Festivals in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco punches far above its weight in live music. These five festivals draw millions of
            attendees annually and attract headliners who play Madison Square Garden and Wembley Stadium.
          </p>

          <div className="space-y-8">
            {topMusicFestivals.map((fest, idx) => (
              <div key={fest.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                      {fest.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                        {fest.city}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[var(--color-accent)]" />
                        {fest.month}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-[var(--color-accent)]" />
                        {fest.attendance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Music className="w-3 h-3 text-[var(--color-accent)]" />
                        {fest.genre}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                      {fest.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="flex items-center gap-1 text-[var(--color-gold)] font-medium">
                        <Ticket className="w-3 h-3" />
                        {fest.price}
                      </span>
                      <span className="flex items-center gap-1 text-[var(--color-accent)]">
                        <Info className="w-3 h-3" />
                        {fest.tip}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Religious Observances ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Religious Observances &amp; Islamic Holidays 2026
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Islamic holidays follow the Hijri lunar calendar and shift earlier by roughly 10-11 days
            each Gregorian year. Dates below are estimates based on astronomical calculations. Official
            dates are confirmed by the Moroccan government 1-2 days before each observance.
          </p>

          <div className="space-y-6">
            {religiousObservances.map((obs) => (
              <div key={obs.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Moon className="w-5 h-5 text-[var(--color-gold)]" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {obs.name}
                  </h3>
                </div>
                <p className="text-xs text-[var(--color-accent)] font-medium mb-3 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {obs.dates}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {obs.description}
                </p>
                <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    <CheckCircle className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                    <strong>Traveler tip:</strong> {obs.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cultural Festivals ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural &amp; Harvest Festivals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond the big music events, Morocco&apos;s regional harvest festivals offer raw,
            unglamorous cultural encounters in small towns that rarely appear in guidebooks. Most are
            free and attract almost no international tourists.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalFestivals.map((fest) => (
              <div key={fest.name} className="card-moroccan p-6">
                <fest.icon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {fest.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                    {fest.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[var(--color-accent)]" />
                    {fest.month}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {fest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Film Festivals ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Film className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Film Festivals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s film industry has boomed. The country doubles as a filming location for Hollywood
            blockbusters (Gladiator, Game of Thrones) and produces award-winning domestic cinema. These
            festivals celebrate both traditions.
          </p>

          <div className="space-y-6">
            {filmFestivals.map((fest) => (
              <div key={fest.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Film className="w-5 h-5 text-[var(--color-gold)]" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {fest.name}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                    {fest.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[var(--color-accent)]" />
                    {fest.month}
                  </span>
                  <span className="flex items-center gap-1">
                    <Ticket className="w-3 h-3 text-[var(--color-accent)]" />
                    {fest.tickets}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {fest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Festival-Goers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Book Accommodation Early
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Hotel prices in festival host cities spike 50-200% during major events. For Mawazine
                (Rabat), Gnaoua (Essaouira), and the Marrakech Film Festival, book at least 2-3 months
                ahead. Budget travelers should check Airbnb options in neighboring towns connected by
                public transport.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Shield className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Safety at Large Events
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco maintains strong security at festivals with police checkpoints and bag searches
                at entrances. Use a cross-body bag or money belt in crowds. Pickpocketing increases
                during crowded events, especially at free outdoor concerts. Stay in well-lit areas after
                dark and keep your phone secure.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Compass className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Getting Around
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                ONCF trains and CTM buses between major cities sell out during Eid and national holidays.
                Book train tickets at oncf.ma or at stations 3-5 days early. During Mawazine, Rabat Tram
                runs extended hours. For rural festivals like the Rose Festival, rent a car or arrange a
                private transfer from the nearest city (Ouarzazate, 90 km from Kalaat M&apos;Gouna).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Budget Planning
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Many major festivals are free (Mawazine outdoor stages, Timitar, Gnaoua main stages).
                Budget from 150 MAD/day for food during festivals. ATMs at festival venues often run
                out of cash on peak nights. Withdraw money earlier in the day. Street food stalls at
                festival perimeters offer tagine and brochettes from 30 MAD.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Photography &amp; Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                At music festivals, photography is generally welcome at outdoor stages. Religious events
                require more sensitivity: always ask before photographing people during Sufi ceremonies
                or mosque gatherings. During Eid al-Adha, avoid photographing the sacrifice unless
                explicitly invited. Respect is non-negotiable.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Utensils className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Food During Festivals
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Festival food stalls range from 20 MAD for a sandwich marocain to 80 MAD for a full
                tagine plate. During Ramadan, street food vendors set up massive iftar spreads after
                sunset: harira soup (from 10 MAD), chebakia pastries, dates, and fresh juices. Outside
                Ramadan, look for vendors grilling merguez sausages and lamb brochettes near concert
                stages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Festival Season Planner ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Which Festival Season Is Right for You?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Each season in Morocco carries a different festival character. Here is a quick guide to
            help you decide when to visit based on your interests.
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sun className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Spring (March - May): Harvest Celebrations &amp; Eid
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Spring brings the Rose Festival in Kalaat M&apos;Gouna (May), Eid al-Fitr (March), and
                Eid al-Adha (late May in 2026). The weather is ideal for outdoor events: warm days
                without the punishing summer heat. The Marathon des Sables crosses the Sahara in April.
                This is the best season for combining cultural festivals with comfortable sightseeing
                weather. Expect hotel prices to rise during Eid weeks.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sun className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Summer (June - August): Music Festival Season
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                June and July form Morocco&apos;s music festival peak. Mawazine dominates Rabat in June,
                followed immediately by Gnaoua in Essaouira and the Fes Festival of Sacred Music.
                July brings Jazzablanca to Casablanca and Timitar to Agadir. Inland cities like
                Marrakech and Fes hit 40-45C in July-August, but coastal festival cities (Essaouira,
                Agadir, Casablanca) stay cooler. This is the season for music lovers willing to handle
                the heat and the crowds.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Moon className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Autumn (September - November): Film &amp; Harvest
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Autumn brings the Oasis Festival in Marrakech (September), the Date Festival in Erfoud
                and Cherry Festival in Sefrou (October), and the Marrakech International Film Festival
                (November). Temperatures cool to comfortable levels. This is the ideal season for
                travelers who want festivals without extreme heat or massive crowds. The Tafilalet oasis
                in October, when dates hang heavy from every palm, is a memorable experience.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Moon className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Winter (December - February): Quieter &amp; Spiritual
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Winter is the quietest festival season. Amazigh New Year (January 13) is a meaningful
                cultural event. The Almond Blossom Festival brightens Tafraout in February. Ramadan
                (starting mid-February in 2026) offers a profound immersion into Moroccan spiritual
                life: evening iftar meals, pre-dawn suhoor, and the electric atmosphere of cities
                waking up after sunset. Fewer tourists mean lower prices and more personal interactions.
              </p>
            </div>
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the biggest music festivals in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Mawazine Rhythms of the World in Rabat is the largest, drawing over 2.5 million attendees
                across six days in June. The Gnaoua World Music Festival in Essaouira attracts 500,000+
                visitors for its fusion of trance and jazz. Jazzablanca in Casablanca, Timitar in Agadir,
                and the Oasis Festival in Marrakech round out the top five. Mawazine and Timitar are free;
                Jazzablanca and Oasis require tickets.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is Ramadan in Morocco in 2026?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ramadan 2026 is expected to begin around February 17 and end around March 18, with
                Eid al-Fitr celebrations on approximately March 19-20. Dates depend on the official
                sighting of the crescent moon and are confirmed by the Moroccan Ministry of Habous and
                Islamic Affairs 1-2 days beforehand. During Ramadan, most restaurants close during
                daylight hours, though tourist-oriented establishments in Marrakech, Fes, and Casablanca
                maintain limited service.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are Morocco festivals free to attend?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Many are. Mawazine&apos;s massive outdoor stages are free. The entire Gnaoua Festival in
                Essaouira is free on the open-air stages. Timitar in Agadir is completely free. Cultural
                festivals like the Rose Festival, Date Festival, and Cherry Festival charge no entry fee.
                Ticketed events include Jazzablanca (day passes from 350 MAD), Oasis Festival (weekend
                passes from 1,800 MAD), and indoor concerts at Mawazine (from 200 MAD).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Should I book hotels early for Morocco festival dates?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. During Gnaoua, Essaouira&apos;s riads and hotels book out entirely weeks in
                advance. Rabat accommodation doubles in price during Mawazine. The Marrakech Film Festival
                pushes luxury riad rates up 100-200%. For Eid holidays, domestic travel surges and
                inter-city transport fills up fast. Book 2-3 months ahead for major events, or consider
                staying in a nearby city with good transport links.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I wear to festivals in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                At music festivals in Rabat, Casablanca, and Marrakech, casual clothing is fine. Light
                layers handle the temperature swings between hot days and cooler nights. For religious
                events and cultural festivals in smaller towns (Moulay Idriss, Sefrou, Kalaat M&apos;Gouna),
                dress more conservatively: cover shoulders and knees. Comfortable closed-toe shoes help on
                uneven ground. Always bring a hat and sunscreen for daytime outdoor events from May through
                September.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it safe to attend large festivals in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Morocco allocates significant security resources to major events. Mawazine and the
                Marrakech Film Festival have visible police and military presence, metal detectors, and
                bag checks. The primary concern is petty crime: keep phones in front pockets, use a
                cross-body bag, and avoid displaying expensive jewelry in dense crowds. Stick to main
                routes after dark. Emergency services are present on-site at all large events.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I travel between cities during Moroccan festivals?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, but book transport early. ONCF trains between Casablanca, Rabat, Fes, Marrakech,
                and Tangier sell out 3-5 days before Eid holidays. The Al Boraq high-speed line
                (Casablanca-Tangier) is particularly popular. CTM and Supratours buses are alternatives
                but also fill up. Domestic Royal Air Maroc flights spike in price around Eid. Renting
                a car gives flexibility but expect heavier highway traffic. Grand taxis between smaller
                cities remain available but charge more during holiday periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/best-time-visit-morocco" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Calendar className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Time to Visit Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Month-by-month weather breakdown, peak and shoulder seasons, and the ideal timing
                for every type of Moroccan trip.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/budget-travel" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to experience Morocco on a budget, from from 200 MAD/night hostels to street food
                strategies and free attractions.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/transport" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Transport Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trains, buses, grand taxis, and domestic flights. How to get between cities and navigate
                Moroccan public transport like a local.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)] text-white">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold mb-4">
            Plan Your Trip Around Morocco&apos;s Festivals
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            From the Gnaoua trance rhythms echoing off Essaouira&apos;s ramparts to the rose-draped
            floats in the Dades Valley, Morocco&apos;s festivals offer experiences you cannot find
            anywhere else. Start planning today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/best-time-visit-morocco"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Best Time to Visit
            </Link>
            <Link
              href="/cities"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Cities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

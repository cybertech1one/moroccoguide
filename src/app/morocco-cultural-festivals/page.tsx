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
  Globe,
  Landmark,
  Music,
  Calendar,
  Camera,
  PartyPopper,
  Mic2,
  Ticket,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Festivals 2026 | Gnaoua, Sacred Music, Rose Festival & Cultural Events',
  description:
    'Complete guide to festivals in Morocco 2026. Gnaoua World Music Festival in Essaouira, Fez Festival of World Sacred Music, Rose Festival in Kelaat M\'Gouna, Mawazine, Marrakech Film Festival, Imilchil Marriage Festival, Tan-Tan Moussem, and month-by-month event calendar.',
  keywords: [
    'morocco festivals',
    'festivals in morocco',
    'gnaoua festival',
    'fez festival of world sacred music',
    'morocco events 2026',
    'rose festival morocco',
    'mawazine festival rabat',
    'marrakech international film festival',
    'tan-tan moussem',
    'imilchil marriage festival',
    'morocco cultural events',
    'gnaoua music essaouira',
    'fez sufi culture festival',
    'date festival erfoud',
    'festival of amazigh culture',
    'morocco festival calendar 2026',
    'eid al fitr morocco',
    'ramadan morocco 2026',
    'morocco music festivals',
    'morocco religious festivals',
  ],
  openGraph: {
    title: 'Morocco Festivals 2026 | Gnaoua, Sacred Music, Rose Festival & Cultural Events',
    description:
      'Month-by-month guide to Morocco\'s best festivals. Gnaoua World Music Festival, Fez Sacred Music, Rose Festival, Mawazine, Marrakech Film Festival, and more cultural events across Morocco.',
    url: `${BASE_URL}/morocco-cultural-festivals`,
    images: [
      {
        url: `${BASE_URL}/images/hero-festivals.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Gnaoua musicians performing at the Essaouira World Music Festival in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Festivals 2026 | Complete Cultural Events Guide',
    description:
      'Gnaoua World Music Festival, Fez Sacred Music, Rose Festival, Mawazine, Marrakech Film Festival. Month-by-month Morocco festival calendar with dates, locations, and insider tips.',
    images: [`${BASE_URL}/images/hero-festivals.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-cultural-festivals` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-cultural-festivals`,
  name: 'Morocco Festivals 2026 | Gnaoua, Sacred Music, Rose Festival & Cultural Events',
  description:
    'Complete guide to festivals in Morocco 2026. Month-by-month event calendar covering music festivals, cultural celebrations, religious observances, and regional moussems.',
  url: `${BASE_URL}/morocco-cultural-festivals`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-cultural-festivals`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Cultural Festivals Guide', item: `${BASE_URL}/morocco-cultural-festivals` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the biggest music festival in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mawazine Rhythm of the World in Rabat is the largest music festival in Morocco and one of the biggest in the world, drawing over 2.5 million attendees across multiple stages each June. Past headliners include Rihanna, Stevie Wonder, and Elton John. Most concerts are free. For a more culturally immersive experience, the Gnaoua World Music Festival in Essaouira attracts around 500,000 visitors and focuses on Gnaoua trance music fused with jazz, blues, and world genres.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the Rose Festival in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Rose Festival (Festival des Roses) takes place in mid-May in Kelaat M\'Gouna and El Kelaâ des M\'Gouna in the Dades Valley. The exact dates shift slightly each year depending on the rose harvest. The 2026 edition is expected in the second or third week of May. The three-day festival features a rose queen pageant, street parades, Amazigh music, and stalls selling rosewater, rose oil, and rose-infused cosmetics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Gnaoua Festival free to attend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Gnaoua World Music Festival in Essaouira is largely free. The main open-air stages at Place Moulay Hassan and along the beach are free to the public. Some intimate "lila" (night ceremony) concerts and special fusion sessions may require tickets, typically priced from 100 to 300 MAD. The festival usually runs for four days in late June.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do religious festivals affect travel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During Ramadan (expected late February to late March in 2026), many restaurants close during daylight hours, and alcohol service is restricted. Eid al-Fitr and Eid al-Adha bring 3-5 day public holidays when domestic travel surges and hotels book up fast. Banks, government offices, and many shops close. Plan around these dates by booking accommodation and transport well in advance. The upside: experiencing an Eid celebration or an iftar dinner during Ramadan is a genuinely memorable cultural experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book accommodation in advance for Morocco festivals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. During major festivals, accommodation in the host city sells out weeks or months ahead. For the Gnaoua Festival in Essaouira, book at least 2-3 months in advance. For the Fez Festival of World Sacred Music, book 1-2 months ahead. Prices during festival periods can double or triple. Consider staying in nearby towns and commuting: for example, staying in Safi or El Jadida during the Essaouira festival, or in Meknes during Fez festivals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear to festivals in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco\'s festival dress code depends on the event and location. Music festivals like Gnaoua and Mawazine are relaxed: lightweight clothing, comfortable shoes, and a hat for sun protection. Religious festivals and rural moussems require more modest dress: cover shoulders and knees, and women may want a light scarf. Evening events can get cool, especially in Fez and mountain areas, so bring a jacket. Sunscreen and a refillable water bottle are essential for outdoor festivals in summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Morocco festivals safe for solo travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco\'s major festivals are generally safe, including for solo travelers. Crowds at events like Mawazine and Gnaoua are family-friendly. Standard precautions apply: watch your belongings in crowded areas, stick to well-lit streets at night, and keep valuables in a front pocket or money belt. Female solo travelers should expect some attention but rarely face serious issues at organized festival venues. Local police presence increases significantly during major festivals.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MAJOR FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const majorFestivals = [
  {
    name: 'Gnaoua World Music Festival',
    location: 'Essaouira',
    month: 'June (4 days, late June)',
    icon: Music,
    description:
      'Founded in 1998, this festival puts Gnaoua trance music center stage. Gnaoua masters (maalems) perform alongside international jazz, blues, and world music artists in fusion sessions that feel electric and unrehearsed. The main stage at Place Moulay Hassan fills with half a million people over four days. Back-street "lila" ceremonies go until dawn, with hypnotic guembri bass and iron castanets (qraqeb) driving spiritual healing rituals that predate Islam in Morocco.',
    highlights: ['Free outdoor concerts', 'Fusion jam sessions', 'All-night lila ceremonies', 'Global artist collaborations'],
    price: 'Free main stages; ticketed lilas from 100 MAD',
    website: 'festival-gnaoua.net',
  },
  {
    name: 'Fez Festival of World Sacred Music',
    location: 'Fez',
    month: 'June (9 days, early-to-mid June)',
    icon: Globe,
    description:
      'Running since 1994, this festival transforms Fez into a gathering point for sacred music traditions from every continent. Sufi qawwali singers from Pakistan share the bill with Gregorian chanters, Hindu devotional musicians, and West African griots. Performances take place inside the Bab al-Makina palace grounds and in centuries-old riads and medersas. The acoustic intimacy of a Sufi dhikr session inside Dar Batha Museum is worth the trip alone.',
    highlights: ['Bab al-Makina evening concerts', 'Sufi Night at Dar Batha', 'Interfaith dialogue panels', 'Free "Fez Encounters" daytime events'],
    price: 'From 200 MAD per concert; multi-day passes from 800 MAD',
    website: 'fesfestival.com',
  },
  {
    name: 'Rose Festival (Festival des Roses)',
    location: 'Kelaat M\'Gouna, Dades Valley',
    month: 'May (3 days, mid-May)',
    icon: Heart,
    description:
      'The Dades Valley produces thousands of tons of Damask roses each spring, and this harvest celebration has run since the 1960s. A rose queen is crowned. Berber musicians and dancers fill the streets. The air smells like rosewater. Local cooperatives sell pure rose oil (one kilogram requires four tons of petals), rosewater, creams, and soaps at prices far below what you pay in Marrakech boutiques. The parade on the final day draws farmers, floats, and costumed performers from surrounding villages.',
    highlights: ['Rose queen coronation', 'Street parades with floats', 'Amazigh music and dance', 'Rosewater and rose oil shopping'],
    price: 'Free entry; rose oil from 300 MAD per 10ml',
    website: 'N/A (check local tourism offices)',
  },
  {
    name: 'Mawazine — Rhythm of the World',
    location: 'Rabat',
    month: 'June (7 days)',
    icon: Mic2,
    description:
      'One of the planet\'s largest music festivals by attendance, Mawazine regularly pulls over 2.5 million visitors across its stages. The OLM Souissi stage hosts global headliners: past editions featured Rihanna, Maroon 5, David Guetta, and Kendrick Lamar. The Nahda stage showcases Arab and Moroccan stars. Most performances are completely free, funded by corporate sponsorship and government backing. The atmosphere is family-oriented, loud, and celebratory.',
    highlights: ['International superstars', '2.5+ million attendees', 'Multiple free stages', 'Mix of global and Moroccan acts'],
    price: 'Free for most stages; VIP from 500 MAD',
    website: 'festivalmawazine.ma',
  },
  {
    name: 'Marrakech International Film Festival',
    location: 'Marrakech',
    month: 'November-December (6 days)',
    icon: Camera,
    description:
      'Founded in 2001 under King Mohammed VI\'s patronage, this festival screens independent and art-house films from Africa, the Arab world, and beyond. Open-air screenings on Jemaa el-Fnaa draw thousands. A-list guests walk the red carpet at the Palais des Congres. The "Conversations" series pairs established directors with emerging filmmakers. Martin Scorsese, Cate Blanchett, and Guillermo del Toro have all attended.',
    highlights: ['Open-air screenings on Jemaa el-Fnaa', 'Red carpet galas', 'African and Arab cinema focus', 'Master class workshops'],
    price: 'Free outdoor screenings; cinema tickets from 50 MAD',
    website: 'festivalmarrakech.info',
  },
  {
    name: 'Tan-Tan Moussem',
    location: 'Tan-Tan, Southern Morocco',
    month: 'September (3-5 days)',
    icon: Award,
    description:
      'A UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity since 2008. This gathering of nomadic Saharan tribes from across northwest Africa revives traditions that were fading. Camel races, Hassani music, Guedra trance dance, tent markets, and poetry recitations fill the desert camp. Originally a trade and social meeting point for over thirty Saharan tribes, it remains the most authentic nomadic cultural event in Morocco.',
    highlights: ['UNESCO Intangible Heritage', 'Camel races', 'Hassani music and Guedra dance', 'Nomadic tribal gathering'],
    price: 'Free entry',
    website: 'N/A (organized by local authorities)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: REGIONAL / NICHE FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const regionalFestivals = [
  {
    name: 'Imilchil Marriage Festival (Moussem des Fiancailles)',
    location: 'Imilchil, High Atlas',
    month: 'September',
    icon: Heart,
    description:
      'Rooted in an Amazigh Romeo-and-Juliet legend about two lovers from rival clans who cried themselves into the twin lakes of Isli and Tislit, this annual gathering allows young men and women to choose their own spouses. Mass weddings take place over three days. Although increasingly touristic, the livestock market, Amazigh music, and mountain setting remain genuinely compelling.',
    price: 'Free entry',
  },
  {
    name: 'Festival of Amazigh Culture',
    location: 'Fez',
    month: 'July',
    icon: Crown,
    description:
      'A celebration of Amazigh (Berber) arts, language, and identity. Film screenings in Tamazight, academic conferences on Amazigh history, live Ahidous and Ahwash dance performances, and exhibitions of Tifinagh calligraphy. This festival gained prominence after the 2011 constitutional recognition of Tamazight as an official language.',
    price: 'Free for most events',
  },
  {
    name: 'Fez Festival of Sufi Culture',
    location: 'Fez',
    month: 'October (7 days)',
    icon: Sparkles,
    description:
      'Distinct from the Sacred Music festival, this event focuses specifically on Sufism. Whirling dervishes from Turkey, Qawwali masters from South Asia, and Moroccan Sufi brotherhoods perform in intimate medina venues. Scholarly roundtables explore the role of Sufism in contemporary Islam. Evening dhikr (chanting) sessions in candlelit courtyards are transcendent.',
    price: 'From 100 MAD per event',
  },
  {
    name: 'Date Festival (Festival des Dattes)',
    location: 'Erfoud, Draa-Tafilalet',
    month: 'October (3 days)',
    icon: PartyPopper,
    description:
      'The oasis town of Erfoud celebrates the annual date harvest with a festival that draws farmers and traders from across the Tafilalet region. Over 100 varieties of dates are displayed, judged, and sold. Folklore performances, camel parades, and a date queen competition round out the event. Stock up on premium Medjool dates at harvest prices: far cheaper than Marrakech souks.',
    price: 'Free entry; dates from 30 MAD per kilo',
  },
  {
    name: 'Timitar Festival',
    location: 'Agadir',
    month: 'July (4 days)',
    icon: Music,
    description:
      'Agadir\'s flagship music event celebrates Amazigh music alongside international acts. The name means "memory" in Tashelhit. Free open-air stages along the corniche feature Amazigh folk, Gnaoua, raï, reggae, and pop. Past performers include Jimmy Cliff and Khaled. The relaxed beach-city setting makes it one of Morocco\'s most accessible festivals.',
    price: 'Free main stages',
  },
  {
    name: 'Allegria Festival',
    location: 'Chefchaouen',
    month: 'July',
    icon: Music,
    description:
      'A small but growing arts and music festival in Morocco\'s blue city. Live music echoes through the painted medina streets, and local artists open their studios. The intimate scale and stunning backdrop make Chefchaouen a perfect festival town. Expect Andalusian-Moroccan fusion music, jazz, and acoustic sets.',
    price: 'Free for most events',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MONTHLY CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const monthlyCalendar = [
  { month: 'January', events: 'Yennayer (Amazigh New Year, Jan 13)', highlights: 'Traditional foods, bonfires, family gatherings across Amazigh communities' },
  { month: 'February', events: 'Almond Blossom Festival (Tafraout)', highlights: 'Pink and white blossoms blanket the Anti-Atlas; Amazigh music, local markets' },
  { month: 'March', events: 'Ramadan begins (dates shift yearly based on lunar calendar)', highlights: 'Spiritual month; iftar dinners at sunset, vibrant night markets, shorter business hours' },
  { month: 'April', events: 'Eid al-Fitr (end of Ramadan); Marathon des Sables', highlights: 'Celebratory feasts; ultra-marathon through the Sahara near Ouarzazate' },
  { month: 'May', events: 'Rose Festival (Kelaat M\'Gouna); Gnaoua Festival prep', highlights: 'Rose harvest in the Dades Valley; accommodation books up quickly in Essaouira' },
  { month: 'June', events: 'Gnaoua Festival (Essaouira); Fez Sacred Music; Mawazine (Rabat); Eid al-Adha (date varies)', highlights: 'Peak festival season. Book accommodation 2-3 months ahead for Essaouira and Fez.' },
  { month: 'July', events: 'Timitar (Agadir); Festival of Amazigh Culture (Fez); Allegria (Chefchaouen)', highlights: 'Hot weather; coastal and mountain festivals offer relief from the heat' },
  { month: 'August', events: 'Moussem of Moulay Abdellah (El Jadida); local moussems nationwide', highlights: 'Fantasia horse charges, religious pilgrimages, summer holiday crowds' },
  { month: 'September', events: 'Tan-Tan Moussem; Imilchil Marriage Festival; Tanjazz (Tangier)', highlights: 'Saharan cultural heritage; High Atlas Amazigh traditions; jazz on the Strait' },
  { month: 'October', events: 'Fez Sufi Culture Festival; Date Festival (Erfoud)', highlights: 'Sufi mysticism in Fez; date harvest celebrations in the oasis towns' },
  { month: 'November', events: 'Marrakech International Film Festival; Mouloud (Prophet\'s Birthday)', highlights: 'Red carpet cinema; candlelit processions and festive meals for Mouloud' },
  { month: 'December', events: 'New Year celebrations in major cities; winter festival events in Ifrane', highlights: 'Hotel prices peak for New Year; ski season begins in the Middle Atlas' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELIGIOUS FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const religiousFestivals = [
  {
    name: 'Ramadan',
    timing: 'Shifts ~11 days earlier each year (expected late Feb-late Mar 2026)',
    icon: Star,
    description:
      'The holy month of fasting transforms daily life across Morocco. From dawn to sunset, Muslims abstain from food, drink, and smoking. Restaurants in tourist areas usually stay open, but many local eateries close until iftar (the sunset meal). Night markets come alive after dark. The communal iftar experience, often shared with strangers, is one of Morocco\'s most powerful cultural moments.',
    travelerTip: 'Eat and drink discreetly in public during fasting hours. Enjoy the lively post-sunset atmosphere in medinas.',
  },
  {
    name: 'Eid al-Fitr',
    timing: 'End of Ramadan (expected late March 2026)',
    icon: PartyPopper,
    description:
      'Three days of celebration marking the end of Ramadan. Families gather for special prayers, new clothes, and lavish meals. Shops may close for 1-3 days. Streets fill with dressed-up families visiting relatives. Sweet pastries, especially chebakia and fekkas, are shared with neighbors.',
    travelerTip: 'Book transport and accommodation early. Many Moroccans travel to family homes, filling buses and trains.',
  },
  {
    name: 'Eid al-Adha',
    timing: 'Roughly 70 days after Eid al-Fitr (expected early June 2026)',
    icon: Landmark,
    description:
      'The "Festival of Sacrifice" is Morocco\'s most significant religious holiday. Families purchase a sheep (or goat) and perform a ritual sacrifice. The meat is divided: one-third for the family, one-third for relatives, and one-third for the poor. Government offices and many businesses close for up to five days. The scent of grilling meat fills every neighborhood.',
    travelerTip: 'Plan around closures. Some travelers find this period uncomfortable; others appreciate the profound cultural significance.',
  },
  {
    name: 'Mouloud (Eid al-Mawlid)',
    timing: 'Prophet Muhammad\'s birthday (expected September 2026)',
    icon: BookOpen,
    description:
      'Celebrated with candlelit processions, Quran recitations, and special meals. In Salé, near Rabat, the Moussem of Mouloud features a spectacular lantern procession through the medina. Families prepare couscous and distribute sweets. A public holiday with a festive but reverent atmosphere.',
    travelerTip: 'Salé\'s lantern procession is one of Morocco\'s most photogenic religious events. Arrive early for good views.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRACTICAL TIPS
   ═══════════════════════════════════════════════════════════════ */

const festivalTips = [
  {
    title: 'Book Accommodation Early',
    icon: Building,
    detail: 'During major festivals, host cities sell out. Essaouira during Gnaoua and Fez during Sacred Music require 2-3 months advance booking. Prices can triple. Consider nearby cities like Safi, Meknes, or Marrakech as bases.',
  },
  {
    title: 'Arrive a Day Early',
    icon: Clock,
    detail: 'Festival opening nights draw the biggest crowds. Arriving a day before lets you settle in, scout stages, and explore the city without the crush. Many festivals also hold free workshops and previews before the official start.',
  },
  {
    title: 'Watch Your Belongings',
    icon: ShieldCheck,
    detail: 'Large festival crowds attract pickpockets. Use a front pocket, money belt, or crossbody bag. Leave your passport in the hotel safe and carry a photocopy. Keep your phone in a zipped pocket during crowded performances.',
  },
  {
    title: 'Dress for the Weather',
    icon: CheckCircle,
    detail: 'Summer festivals (June-August) mean scorching heat during the day and cool evenings. Bring sunscreen, a hat, and a light jacket. For mountain festivals like Imilchil, temperatures drop sharply at night. Layers are essential.',
  },
  {
    title: 'Cash is King',
    icon: DollarSign,
    detail: 'ATMs near festival sites run out of cash quickly. Withdraw funds a day or two before the event. Street vendors, food stalls, and local transport rarely accept cards. Budget from 200-400 MAD per day for food, transport, and shopping during festivals.',
  },
  {
    title: 'Respect Religious Events',
    icon: Info,
    detail: 'At moussems and religious festivals, dress modestly (cover shoulders and knees). Ask before photographing people during prayers or ceremonies. During Ramadan, avoid eating, drinking, or smoking in public during daylight hours.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  { title: 'Berber Culture in Morocco', href: '/morocco-berber-culture', description: 'Amazigh heritage, traditions, and village experiences' },
  { title: 'Morocco Music Guide', href: '/morocco-music-guide', description: 'Gnaoua, Andalusian, Chaabi, and the Moroccan music scene' },
  { title: 'Best Time to Visit Morocco', href: '/best-time-visit-morocco', description: 'Seasonal weather, crowds, and pricing guide' },
  { title: 'Morocco Budget Travel', href: '/budget-travel', description: 'How to explore Morocco on any budget' },
  { title: 'Essaouira City Guide', href: '/essaouira', description: 'Wind city, Gnaoua heartland, and Atlantic coast' },
  { title: 'Fez City Guide', href: '/fez', description: 'The world\'s oldest medina and spiritual capital' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoCulturalFestivalsPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="min-h-screen bg-[#FAF8F5]">
        {/* ── HERO ── */}
        <section className="relative h-[55vh] min-h-[420px] flex items-end hero-overlay">
          <img
            src="/images/hero-festivals.webp"
            alt="Gnaoua musicians in white robes and colorful hats performing at the Essaouira World Music Festival"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="container-morocco relative z-10 pb-10">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-white/80 mb-4">
              <Link href="/" className="hover:text-white flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-medium">Morocco Cultural Festivals</span>
            </nav>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl">
              Morocco Festivals &amp; Cultural Events 2026
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
              From Gnaoua trance rituals in Essaouira to sacred Sufi chanting in Fez, Morocco hosts some of the most electrifying festivals on the African continent. Here is your month-by-month guide.
            </p>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="container-morocco py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold mb-6">
              Why Morocco Is a Festival Destination
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Morocco packs more cultural festivals per square kilometer than almost any country in Africa or the Middle East. The reasons run deep. This is a nation where Amazigh, Arab, Andalusian, Sub-Saharan, and French influences collide. Every collision produced a distinct musical tradition, and every tradition now has its own festival.
              </p>
              <p>
                The government has invested heavily in festival culture since the early 2000s, recognizing its power to drive tourism and preserve heritage. The result: world-class events with free admission, attracting millions of domestic and international visitors each year. June alone sees three major festivals running simultaneously in Essaouira, Fez, and Rabat.
              </p>
              <p>
                Religious observances add another layer. Ramadan reshapes daily rhythms for an entire month. Eid al-Adha shuts down the country for days. Rural moussems honor local saints with fantasia horse charges and communal feasts that feel unchanged from centuries past. Morocco does not stage culture for tourists. Visitors are simply invited to participate.
              </p>
            </div>
          </div>
        </section>

        {/* ── MONTHLY CALENDAR ── */}
        <section className="bg-white py-12">
          <div className="container-morocco">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                <Calendar className="w-4 h-4" /> Month-by-Month Calendar
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold">
                Morocco Festival Calendar 2026
              </h2>
              <p className="mt-2 text-gray-600 max-w-xl mx-auto">
                Exact dates for religious festivals shift each year based on the Islamic lunar calendar. Confirm dates closer to your travel dates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {monthlyCalendar.map((m) => (
                <div key={m.month} className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-accent)] mb-1">{m.month}</h3>
                  <p className="text-sm font-semibold text-gray-800 mb-2">{m.events}</p>
                  <p className="text-sm text-gray-600">{m.highlights}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAJOR FESTIVALS ── */}
        <section className="container-morocco py-12">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
              <Star className="w-4 h-4" /> Flagship Events
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold">
              Major Festivals You Should Not Miss
            </h2>
          </div>

          <div className="space-y-8">
            {majorFestivals.map((fest) => (
              <div key={fest.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <fest.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gray-900">{fest.name}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-600">
                      <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {fest.location}</span>
                      <span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {fest.month}</span>
                      <span className="inline-flex items-center gap-1"><Ticket className="w-3.5 h-3.5" /> {fest.price}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{fest.description}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {fest.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> {h}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── REGIONAL & NICHE FESTIVALS ── */}
        <section className="bg-white py-12">
          <div className="container-morocco">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                <Gem className="w-4 h-4" /> Regional Gems
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold">
                Regional &amp; Niche Festivals
              </h2>
              <p className="mt-2 text-gray-600 max-w-xl mx-auto">
                Beyond the headline events, Morocco&apos;s smaller festivals offer intimacy and authenticity that bigger events sometimes lack.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {regionalFestivals.map((fest) => (
                <div key={fest.name} className="card-moroccan p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center">
                      <fest.icon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900">{fest.name}</h3>
                      <p className="text-sm text-gray-500">
                        <MapPin className="w-3 h-3 inline mr-1" />{fest.location} &middot; <Calendar className="w-3 h-3 inline mr-1" />{fest.month}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">{fest.description}</p>
                  <p className="text-xs font-semibold text-[var(--color-accent)]">
                    <DollarSign className="w-3 h-3 inline mr-0.5" />{fest.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELIGIOUS FESTIVALS ── */}
        <section className="container-morocco py-12">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
              <BookOpen className="w-4 h-4" /> Religious Observances
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold">
              Religious Festivals &amp; How They Affect Travel
            </h2>
            <p className="mt-2 text-gray-600 max-w-xl mx-auto">
              Islamic holidays follow the Hijri lunar calendar and shift approximately 11 days earlier each Gregorian year. Dates below are estimates for 2026.
            </p>
          </div>

          <div className="space-y-6">
            {religiousFestivals.map((fest) => (
              <div key={fest.name} className="card-moroccan p-6 zellige-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <fest.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900">{fest.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">
                      <Clock className="w-3 h-3 inline mr-1" />{fest.timing}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">{fest.description}</p>
                    <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <Info className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-amber-800"><strong>Traveler tip:</strong> {fest.travelerTip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GNAOUA DEEP DIVE ── */}
        <section className="bg-white py-12">
          <div className="container-morocco">
            <div className="max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Music className="w-4 h-4" /> Festival Spotlight
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold mb-6">
                Inside the Gnaoua World Music Festival
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Essaouira&apos;s medina was built for this festival, even if the Portuguese who designed the ramparts in the 18th century did not know it yet. The compact walled city, open to Atlantic winds, becomes an open-air concert hall every June. Stages sprout in the main square, on the beach, and in the alleyways between whitewashed houses.
                </p>
                <p>
                  Gnaoua music traces its roots to Sub-Saharan Africa, brought by enslaved people to Morocco centuries ago. It blends spiritual healing rituals, call-and-response chanting, and the deep pulse of the guembri (a three-stringed bass lute) with metal qraqeb (castanets). A traditional lila (night ceremony) can last seven hours, cycling through seven musical suites, each associated with a different color, spirit, and incense.
                </p>
                <p>
                  The festival pairs Gnaoua maalems (masters) with international musicians for unrehearsed fusion sessions. Past collaborations include Maalem Hamid El Kasri with Marcus Miller, Maalem Mustapha Bakbou with Joachim Kuhn, and Maalem Hassan Boussou with Hindi Zahra. These collisions produce moments of genuine musical discovery that studio recordings rarely capture.
                </p>
                <p>
                  Practical details: the main stages at Place Moulay Hassan are free. Smaller lila sessions in private venues cost from 100 to 300 MAD. The festival typically runs Thursday to Sunday in the last week of June. Hotels sell out by April, but guesthouses in the surrounding countryside offer alternatives at lower prices. Budget from 500 MAD per day for accommodation, food, and transport during festival week.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEZ SACRED MUSIC DEEP DIVE ── */}
        <section className="container-morocco py-12">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Globe className="w-4 h-4" /> Festival Spotlight
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold mb-6">
              Fez Festival of World Sacred Music: A Deeper Look
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Fez is the spiritual and intellectual capital of Morocco. Its medina, the largest car-free urban area in the world, contains over 300 mosques, dozens of zaouias (Sufi lodges), and the University of Al Quaraouiyine, founded in 859 AD. The Festival of World Sacred Music, launched in 1994 by Faouzi Skali, uses this city as a stage for interfaith musical dialogue.
              </p>
              <p>
                Evening concerts at Bab al-Makina, a vast open-air arena within the royal palace grounds, seat around 3,000 people under the stars. Here you might hear the Master Musicians of Jajouka one night and a Hindustani classical ensemble the next. Tickets for Bab al-Makina sell out fastest; buy them online as soon as the program drops, usually in April.
              </p>
              <p>
                The free daytime events, branded as &quot;Fez Encounters,&quot; include roundtable discussions on peace, spirituality, and coexistence. Smaller concerts in Dar Batha Museum, Bab Boujloud square, and private riads are often more intimate and moving than the headline shows. A Sufi dhikr session in a candlelit courtyard, with fifty voices chanting in unison, will stay with you long after the plane home.
              </p>
              <p>
                Festival passes covering all nine days cost from 800 MAD. Individual concert tickets start from 200 MAD. Accommodation in the medina doubles in price during the festival. Meknes, a 40-minute train ride away, offers a budget-friendly base. Grand taxis between the two cities run until late at night.
              </p>
            </div>
          </div>
        </section>

        {/* ── ROSE FESTIVAL DEEP DIVE ── */}
        <section className="container-morocco py-12">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Heart className="w-4 h-4" /> Festival Spotlight
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold mb-6">
              The Rose Festival: Morocco&apos;s Most Fragrant Celebration
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Drive east from Ouarzazate along the N10 for about 90 kilometers and the landscape shifts. Arid rock gives way to irrigated fields. Then the roses appear. Thousands of hectares of Rosa damascena line the Dades Valley between Kelaat M&apos;Gouna and Boumalne Dades, planted originally in the 10th century by pilgrims returning from Mecca.
              </p>
              <p>
                The harvest happens in a three-week window each May, before the summer heat destroys the blooms. Entire families pick roses at dawn, when the essential oil content peaks. Workers carry enormous sacks of petals to local distilleries where copper alembic stills extract rosewater and rose oil. One kilogram of pure rose oil requires roughly four tons of petals. At harvest time, the distilleries run day and night.
              </p>
              <p>
                The festival itself lasts three days. A rose queen is selected from candidates representing different villages. On the final day, a parade winds through Kelaat M&apos;Gouna with floats decorated in roses, Amazigh musical groups, and costumed dancers. Stalls sell rosewater (from 20 MAD per bottle), rose creams, rose soap, and small bottles of pure rose oil (from 300 MAD for 10ml). Prices here are a fraction of what Marrakech boutiques charge.
              </p>
              <p>
                Getting there requires some planning. The nearest airport is Ouarzazate, with limited flights from Casablanca. Most visitors drive or take a grand taxi from Ouarzazate (from 50 MAD per person, shared). Accommodation in Kelaat M&apos;Gouna is limited to a handful of hotels and guesthouses that fill up fast. Boumalne Dades, 25 kilometers east, has more options. The Dades Gorge itself, another 30 minutes beyond, offers spectacular guesthouses perched above the canyon.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT IS A MOUSSEM ── */}
        <section className="bg-white py-12">
          <div className="container-morocco">
            <div className="max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Crown className="w-4 h-4" /> Cultural Context
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold mb-6">
                What Exactly Is a Moussem?
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  The word moussem (also spelled mawsim or moussam) comes from the Arabic for &quot;season.&quot; In Morocco, it refers to an annual gathering at the shrine of a local saint (marabout), combining religious pilgrimage with commercial trade, social networking, and cultural performance. Think county fair meets religious festival meets tribal reunion.
                </p>
                <p>
                  Hundreds of moussems take place across Morocco each year, most too small to appear on any tourist radar. The largest, like the Tan-Tan Moussem and the Moussem of Moulay Abdellah near El Jadida, draw tens of thousands. At Moulay Abdellah, the fantasia (tbourida) is the main draw: lines of horsemen in traditional dress charge at full gallop, firing muskets in perfect synchronization. The crack of gunpowder, the thunder of hooves, and the cloud of dust are unforgettable.
                </p>
                <p>
                  Moussems are not organized for tourists. They are genuine community events. That makes them rewarding for adventurous travelers but occasionally confusing. Dates shift. Signage is minimal. Asking at local cafes or calling the regional tourism office a week before is the most reliable way to confirm timing. If you attend one, bring cash, dress modestly, and follow the crowd. The hospitality is real. Strangers will invite you to share tea and food.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── GETTING AROUND DURING FESTIVALS ── */}
        <section className="container-morocco py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold mb-6">
              <Users className="w-7 h-7 inline mr-2 text-[var(--color-accent)]" />
              Getting Around During Festival Season
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Morocco&apos;s transport system strains during major festivals. Trains between Casablanca, Rabat, Fez, and Marrakech sell out on festival weekends. ONCF (the national rail operator) occasionally adds extra services, but these are not guaranteed. Book train tickets online at oncf.ma at least a week in advance for travel on festival dates.
              </p>
              <p>
                CTM and Supratours bus services also fill up quickly. The Marrakech-Essaouira route during Gnaoua Festival is particularly competitive. If you cannot find a seat, grand taxis (shared Mercedes sedans or minivans) run between most cities and do not require advance booking, though you may wait for the vehicle to fill. Expect to pay from 100 MAD for the Marrakech-Essaouira grand taxi route.
              </p>
              <p>
                Renting a car gives the most flexibility, especially for rural festivals like the Rose Festival or Imilchil Marriage Festival. Roads are generally good, though mountain routes require confidence with hairpin bends. Rental prices start from 250 MAD per day for a basic vehicle. During Eid holidays, fuel stations in rural areas sometimes run low, so fill up whenever you can.
              </p>
              <p>
                Within festival cities, walking is usually the best option. Medinas are car-free anyway. In Rabat during Mawazine, the tramway connects most concert venues along a single line. In Essaouira, everything is walkable within the medina walls. Fez is trickier: the medina is hilly and labyrinthine, so allow extra time to find venues after dark.
              </p>
            </div>
          </div>
        </section>

        {/* ── PRACTICAL TIPS ── */}
        <section className="bg-white py-12">
          <div className="container-morocco">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                <ShieldCheck className="w-4 h-4" /> Practical Advice
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold">
                Tips for Attending Festivals in Morocco
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {festivalTips.map((tip) => (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <tip.icon className="w-4.5 h-4.5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-gray-900">{tip.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{tip.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ACCOMMODATION DURING FESTIVALS ── */}
        <section className="container-morocco py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold mb-6">
              Accommodation During Festival Season
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Festival pricing in Morocco follows predictable patterns. Accommodation in the host city rises sharply, sometimes to three or four times normal rates. Smart travelers work around this in several ways.
              </p>
              <div className="card-moroccan p-5 not-prose">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900 mb-3">
                  <Building className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />Booking Strategies
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Essaouira (Gnaoua):</strong> Book 2-3 months ahead. Budget riads from 400 MAD/night surge to from 1,000 MAD. Nearby Sidi Kaouki (30 min south) or Safi (2.5 hrs north) stay cheaper.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Fez (Sacred Music):</strong> Medina riads from 500 MAD/night during the festival. Meknes (40 min by train) offers similar riads from 250 MAD. Last trains depart around 21:00, but grand taxis run later.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Rabat (Mawazine):</strong> The capital has the widest hotel range. Book 1 month ahead. Budget hotels from 300 MAD/night during the festival. The tramway connects most venues efficiently.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Kelaat M&apos;Gouna (Rose Festival):</strong> Limited accommodation. Book months ahead or stay in Ouarzazate (1.5 hrs) or Boumalne Dades (30 min). Homestays in nearby villages are a rewarding option from 200 MAD/night.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Imilchil (Marriage Festival):</strong> Very limited accommodation. Most visitors camp or stay in basic guesthouses from 150 MAD/night. Bring a sleeping bag in September as mountain nights are cold.</span>
                  </li>
                </ul>
              </div>
              <p>
                Seasonal pricing can change significantly from year to year. Always confirm current rates directly with your accommodation. Booking platforms frequently show inflated prices during peak periods; contacting riads directly via WhatsApp or email often yields better deals.
              </p>
            </div>
          </div>
        </section>

        {/* ── PHOTOGRAPHY AT FESTIVALS ── */}
        <section className="container-morocco py-12">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Camera className="w-4 h-4" /> Photography Guide
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold mb-6">
              Photographing Morocco&apos;s Festivals
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Morocco&apos;s festivals are a photographer&apos;s dream, but respect matters more than the shot. At music festivals like Gnaoua and Mawazine, you can photograph performers on public stages freely. Point your camera at the crowd, the instruments, the light. The Gnaoua musicians in their colored tasseled hats and embroidered tunics are endlessly photogenic, and they know it.
              </p>
              <p>
                Religious events demand more sensitivity. During moussems, ask before photographing anyone in prayer. At Eid celebrations, families are usually happy to pose but always ask first. A simple &quot;Mumkin sura?&quot; (Can I take a photo?) goes a long way. Show the image on your screen afterward as a courtesy. Some people, particularly older women in rural areas, will decline. Accept that gracefully.
              </p>
              <p>
                Practical gear advice: dust is your enemy at outdoor desert festivals like Tan-Tan Moussem and the Date Festival. Bring a lens cloth and a plastic bag for your camera when not shooting. At night concerts, a fast prime lens (f/1.8 or wider) outperforms any zoom. A small tripod helps for Sufi dhikr sessions in dim courtyard venues in Fez, where flash would ruin the atmosphere and annoy everyone around you.
              </p>
            </div>
          </div>
        </section>

        {/* ── FESTIVAL FOOD ── */}
        <section className="bg-white py-12">
          <div className="container-morocco">
            <div className="max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4" /> Festival Food
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold mb-6">
                What to Eat at Moroccan Festivals
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Street food defines the festival experience in Morocco. At any major gathering, rows of stalls appear selling grilled meat skewers (brochettes) from 15 MAD, merguez sausage sandwiches from 20 MAD, and freshly squeezed orange juice for 10 MAD. The aroma of cumin-spiced kefta (minced meat) on charcoal grills is the unofficial soundtrack of every Moroccan festival.
                </p>
                <p>
                  Each festival has its specialty. At the Rose Festival, expect rose-flavored pastries, rose milk drinks, and dishes garnished with edible petals. During the Date Festival in Erfoud, vendors display over 100 varieties of dates alongside date-stuffed pastries, date milkshakes, and date honey. At the Gnaoua Festival, Essaouira&apos;s seafood takes center stage: grilled sardines from 20 MAD, fried calamari, and fresh oysters from the port stalls.
                </p>
                <p>
                  During religious festivals, the food becomes ceremonial. Eid al-Fitr brings chebakia (sesame and honey pastries), briouat (stuffed pastry triangles), and sellou (a dense blend of roasted flour, almonds, and honey). Eid al-Adha is all about lamb: roasted, grilled, and slow-cooked in tagines. Mouloud celebrations feature couscous with seven vegetables shared between neighbors. Ramadan iftars start with dates, harira soup, and boiled eggs before moving to larger dishes.
                </p>
                <p>
                  Budget from 100 to 200 MAD per day for festival street food. Sit-down restaurant meals near festival venues typically cost from 80 to 150 MAD. Seasonal pricing can change depending on demand, so confirm prices before ordering at unfamiliar stalls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white py-12">
          <div className="container-morocco">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                <Info className="w-4 h-4" /> Common Questions
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqJsonLd.mainEntity.map((faq: { '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }, i: number) => (
                <div key={i} className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                    {faq.name}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed pl-6">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FESTIVAL ETIQUETTE ── */}
        <section className="container-morocco py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold mb-6">
              Festival Etiquette: Dos and Don&apos;ts
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-green-700 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Do
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-1 flex-shrink-0" /> Accept tea and food offered by locals at moussems</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-1 flex-shrink-0" /> Dress modestly at religious festivals and rural events</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-1 flex-shrink-0" /> Learn basic Arabic greetings: &quot;Salam alaikum&quot; opens every door</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-1 flex-shrink-0" /> Arrive early to secure a good spot at open-air concerts</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-1 flex-shrink-0" /> Stay for the full lila ceremony at Gnaoua if you can handle a late night</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-1 flex-shrink-0" /> Support local artisans by buying directly at festival craft stalls</li>
                </ul>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-red-700 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" /> Don&apos;t
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-500 mt-1 flex-shrink-0" /> Eat, drink, or smoke publicly during Ramadan daylight hours</li>
                  <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-500 mt-1 flex-shrink-0" /> Photograph people without asking, especially at religious events</li>
                  <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-500 mt-1 flex-shrink-0" /> Bring alcohol to moussems or religious celebrations</li>
                  <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-500 mt-1 flex-shrink-0" /> Wear revealing clothing at rural or religious festivals</li>
                  <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-500 mt-1 flex-shrink-0" /> Enter mosques or zaouias unless explicitly invited</li>
                  <li className="flex items-start gap-2"><Info className="w-3.5 h-3.5 text-red-500 mt-1 flex-shrink-0" /> Assume all festivals run on schedule; flexibility is essential</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── RELATED GUIDES ── */}
        <section className="container-morocco py-12">
          <div className="text-center mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)] font-bold">
              Related Morocco Guides
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-gray-900 group-hover:text-[var(--color-accent)] transition-colors mb-1">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)]">
                  Read guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[var(--color-accent)] py-14">
          <div className="container-morocco text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white font-bold mb-4">
              Plan Your Morocco Festival Trip
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              June is peak festival season with three major events running simultaneously. Book flights and accommodation early for Gnaoua, Sacred Music, and Mawazine.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/essaouira"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Music className="w-5 h-5" /> Explore Essaouira
              </Link>
              <Link
                href="/fez"
                className="inline-flex items-center gap-2 bg-white/10 border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                <Landmark className="w-5 h-5" /> Explore Fez
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

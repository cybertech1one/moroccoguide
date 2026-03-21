import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Music,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  Calendar,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Ticket,
  Camera,
  Sun,
  Moon,
  Flame,
  Globe,
  Film,
  Award,
  BookOpen,
  MessageCircleQuestion,
  Megaphone,
  Flower2,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-festivals-events`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Festivals & Events 2026 | Complete Calendar & Practical Guide',
  description:
    'Month-by-month guide to Morocco festivals and events in 2026. Gnaoua World Music Festival in Essaouira, Fes Festival of World Sacred Music, Mawazine in Rabat, Marrakech International Film Festival, Rose Festival in Kelaat Mgouna, cherry and date harvest festivals, moussems, Ramadan, Eid al-Fitr, Eid al-Adha, and Mawlid. Tickets, travel tips, and local insight.',
  keywords: [
    'Morocco festivals 2026',
    'Gnaoua festival Essaouira',
    'Fes Festival of World Sacred Music',
    'Mawazine festival Rabat',
    'Marrakech International Film Festival',
    'Rose Festival Morocco',
    'Morocco events calendar',
    'moussem Morocco',
    'Ramadan Morocco',
    'Eid al-Fitr Morocco',
    'Eid al-Adha Morocco',
    'cherry festival Sefrou',
    'date harvest festival Morocco',
    'Morocco cultural festivals',
    'Morocco music festivals',
    'Morocco religious holidays 2026',
    'Morocco film festival',
    'Tan-Tan moussem',
  ],
  openGraph: {
    title: 'Morocco Festivals & Events 2026 | Complete Calendar & Practical Guide',
    description:
      'Every major festival and event in Morocco: Gnaoua, Mawazine, Fes Sacred Music, Marrakech Film Festival, Rose Festival, harvest celebrations, moussems, and religious holidays. Month-by-month calendar with ticket info and travel tips.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-festivals.webp`,
        width: 1200,
        height: 630,
        alt: 'Musicians performing at a Moroccan festival with colorful stage lights and crowds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Festivals & Events 2026 | Full Calendar Guide',
    description:
      'Gnaoua, Mawazine, Fes Sacred Music, Rose Festival, Marrakech Film Festival, moussems, Ramadan, and Eid. Complete month-by-month calendar with practical tips.',
    images: [`${BASE_URL}/images/hero-festivals.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'When is the Gnaoua World Music Festival in Essaouira?',
    a: 'The Gnaoua World Music Festival typically takes place over four days in late June. Dates shift slightly each year; check the official Gnaoua Festival website starting in February for confirmed 2026 dates. Many stages are free and open-air, but ticketed indoor concerts sell out quickly.',
  },
  {
    q: 'Do I need tickets for Morocco music festivals?',
    a: 'It depends on the festival. Gnaoua in Essaouira has both free outdoor stages and ticketed indoor shows. Mawazine in Rabat is largely free admission for outdoor stages. The Fes Festival of World Sacred Music sells tickets from 200 MAD for individual concerts. The Marrakech International Film Festival has public screenings and invitation-only galas.',
  },
  {
    q: 'Is it safe to visit Morocco during Ramadan?',
    a: 'Absolutely. Morocco remains safe and welcoming during Ramadan. Tourist restaurants and hotels serve meals throughout the day. Attractions stay open, often with slightly shorter hours. Evenings after iftar become festive with street food, live music, and social gatherings. Pack patience for slower daytime service and enjoy the unique atmosphere.',
  },
  {
    q: 'What is a moussem in Morocco?',
    a: 'A moussem is a traditional Moroccan gathering that honors a local saint or celebrates a seasonal harvest. They combine religious devotion, market trading, horseback fantasias, folk music, communal feasts, and family reunions. Moussems happen across the country, often in rural areas, and last anywhere from two days to a full week.',
  },
  {
    q: 'How crowded does Essaouira get during Gnaoua Festival?',
    a: 'Very crowded. The town population can triple during the festival weekend. Book accommodation at least two to three months in advance or consider staying in nearby Safi or driving from Marrakech (2.5 hours). Restaurants fill up fast, so eat early or pre-book. The medina streets become pedestrian-only during concerts.',
  },
  {
    q: 'Can tourists attend Eid celebrations in Morocco?',
    a: 'Tourists are welcome to experience the festive atmosphere during both Eid al-Fitr and Eid al-Adha. Moroccan families are generous with invitations, and it is common to be offered sweets, tea, or even a meal. During Eid al-Adha, be prepared for animal sacrifice in public spaces if you travel to residential neighborhoods.',
  },
  {
    q: 'What should I wear to a Moroccan festival?',
    a: 'Dress comfortably for the weather and the crowd. Outdoor music festivals like Gnaoua and Mawazine are casual; bring layers because evenings get cool along the coast. For the Fes Sacred Music Festival, some concerts are held in historic venues where modest dress is appropriate. For moussems in rural areas, covering shoulders and knees shows respect.',
  },
  {
    q: 'Are Morocco festivals family-friendly?',
    a: 'Most Moroccan festivals are family events at their core. Mawazine, Gnaoua, and the harvest festivals all draw Moroccan families with children. The Rose Festival in Kelaat Mgouna features parades that children love. Only late-night concert stages at urban festivals may be less suitable for young kids due to noise and crowds.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Festivals & Events 2026 Complete Guide',
  description:
    'Comprehensive month-by-month guide to festivals, music events, film festivals, harvest celebrations, moussems, and religious holidays across Morocco.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-festivals.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Festivals & Events', item: PAGE_URL },
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
   DATA: MAJOR MUSIC FESTIVALS
   ================================================================ */

const musicFestivals = [
  {
    name: 'Gnaoua World Music Festival',
    location: 'Essaouira',
    month: 'June',
    duration: '4 days',
    icon: Music,
    price: 'Free outdoor stages; ticketed indoor shows from 300 MAD',
    description:
      'The flagship music event of Morocco and one of Africa\'s most respected world-music gatherings. Founded in 1998, Gnaoua Festival celebrates the spiritual trance tradition of the Gnaoua brotherhood, rooted in sub-Saharan African heritage. Over four days, master Gnaoua musicians (maalems) share stages with international jazz, blues, and funk artists. The result is spontaneous fusion performances along the Essaouira waterfront. Free open-air stages line the ramparts, the harbour, and Place Moulay Hassan. Indoor ticketed concerts take place at smaller venues and sell out well in advance.',
    tip: 'Arrive a day early. The medina fills up fast and the best riads are booked months ahead. Bring earplugs for sleeping since music echoes through the narrow streets until 2 AM.',
  },
  {
    name: 'Mawazine Rhythms of the World',
    location: 'Rabat',
    month: 'June',
    duration: '9 days',
    icon: Globe,
    price: 'Mostly free; VIP areas from 500 MAD',
    description:
      'Mawazine is one of the largest music festivals on the planet by attendance, regularly drawing over two million spectators across nine days. Stages are spread across Rabat, with the main OLM Souissi stage hosting headline acts that have included major international pop, hip-hop, and R&B artists. A separate stage at the Bouregreg riverfront focuses on Arabic and North African artists. The Nahda stage programs traditional Moroccan music. Admission to most outdoor stages is free, making Mawazine remarkably accessible.',
    tip: 'Use the tramway to move between stages. Traffic around OLM Souissi is gridlocked on headline nights. Arrive two hours before the artist you want to see for a decent spot.',
  },
  {
    name: 'Fes Festival of World Sacred Music',
    location: 'Fes',
    month: 'May - June',
    duration: '8 days',
    icon: Star,
    price: 'From 200 MAD per concert; passes available',
    description:
      'Founded in 1994, this festival brings together Sufi chanters, gospel choirs, Hindu devotional singers, Buddhist monks, Gregorian chanters, and classical orchestras inside the historic medina of Fes. Evening concerts are held at Bab Makina, an open-air stage set against the Royal Palace walls. Daytime forums explore the intersection of music, spirituality, and peace. The setting inside the world\'s largest car-free urban area adds a dimension no concert hall can match. Smaller free performances happen in gardens, museums, and riads across the medina.',
    tip: 'Buy a multi-concert pass for savings. The best evening seats sell out weeks ahead, but standing areas usually have space. Daytime forums and fringe events are often free.',
  },
  {
    name: 'Timitar Festival',
    location: 'Agadir',
    month: 'July',
    duration: '4 days',
    icon: Music,
    price: 'Free admission',
    description:
      'Timitar celebrates Amazigh (Berber) music alongside international acts. Held on outdoor stages along the Agadir seafront, the festival draws hundreds of thousands of spectators who come for traditional Amazigh rhythms, Gnaoua fusion, reggae, and global pop. Founded in 2004, Timitar has become the cultural heartbeat of southern Morocco each summer. All concerts are free, making it one of the best-value music experiences in the country.',
    tip: 'Agadir beach hotels book up fast during Timitar. Consider staying in Taghazout (20 minutes north) for a quieter base with good surf between concerts.',
  },
];

/* ================================================================
   DATA: FILM & ART FESTIVALS
   ================================================================ */

const filmFestivals = [
  {
    name: 'Marrakech International Film Festival (FIFM)',
    location: 'Marrakech',
    month: 'November - December',
    duration: '6 days',
    icon: Film,
    price: 'Public screenings from 50 MAD; opening gala by invitation',
    description:
      'Founded in 2001 under the patronage of King Mohammed VI, the FIFM has grown into one of Africa and the Arab world\'s premier film festivals. The main venue is the Palais des Congres, but a giant open-air screen is erected in Jemaa el-Fna, offering free public screenings to thousands every night. The festival programs feature films, shorts, and documentaries from across Africa, the Middle East, Asia, and beyond. Jury members and attending filmmakers have included Martin Scorsese, Francis Ford Coppola, and many others.',
    tip: 'The free Jemaa el-Fna screenings are the highlight for casual visitors. Grab a spot early on the square with a blanket. Films are typically screened in their original language with French or Arabic subtitles.',
  },
  {
    name: 'National Festival of Popular Arts',
    location: 'Marrakech',
    month: 'July',
    duration: '5 days',
    icon: Award,
    price: 'From 100 MAD',
    description:
      'One of the oldest cultural festivals in Morocco, running since the 1960s. The festival fills the ruins of El Badi Palace with folk dancers, acrobats, Gnaoua performers, Aissawa brotherhoods, and Amazigh troupes from every region of the country. Horse-riding fantasias take place outside the walls. The event is a living encyclopedia of Moroccan performing arts, with groups representing traditions that stretch back centuries.',
    tip: 'El Badi Palace gets extremely hot during July afternoon performances. Attend evening shows when temperatures drop and the palace ruins are dramatically lit.',
  },
];

/* ================================================================
   DATA: HARVEST & AGRICULTURAL FESTIVALS
   ================================================================ */

const harvestFestivals = [
  {
    name: 'Rose Festival (Moussem des Roses)',
    location: 'Kelaat Mgouna, Dades Valley',
    month: 'May',
    duration: '3 days',
    icon: Flower2,
    price: 'Free (street events); from 50 MAD for ticketed shows',
    description:
      'Every May, the town of Kelaat Mgouna, located in the Dades Valley between the Atlas Mountains and the Sahara, celebrates the Damask rose harvest. The valley produces thousands of tons of rose petals, distilled into rose water and essential oil exported worldwide. The festival features a parade with floats decorated in fresh roses, the crowning of the Rose Queen, folk dancing, Amazigh music, and a souk overflowing with rose products at direct-from-producer prices.',
    buyTip: 'Rose water from 30 MAD per bottle, rose oil from 80 MAD for a small vial, rose soap from 15 MAD. Buy directly from cooperatives lining the main road for the best quality and prices.',
  },
  {
    name: 'Cherry Festival (Fete des Cerises)',
    location: 'Sefrou, near Fes',
    month: 'June',
    duration: '3 days',
    icon: Sparkles,
    price: 'Free',
    description:
      'Sefrou, a small town 30 km south of Fes, has celebrated its cherry harvest since 1920, making this one of Morocco\'s oldest festivals. The highlight is the election of the Cherry Queen and a colourful parade through the medina streets. Vendors sell baskets of freshly picked cherries at rock-bottom prices. Folk music groups, fantasia performances, and artisan markets fill the town. The festival offers a genuine small-town Moroccan celebration far from the tourist trail.',
    buyTip: 'Fresh cherries from 15 MAD per kilogram during the festival. Arrive early in the morning for the best selection at the central market.',
  },
  {
    name: 'Date Festival (Moussem des Dattes)',
    location: 'Erfoud, Tafilalet region',
    month: 'October',
    duration: '3 days',
    icon: Sun,
    price: 'Free',
    description:
      'The oasis town of Erfoud celebrates its date palm harvest each October with three days of folk music, camel races, Amazigh dancing, and a bustling souk selling dates of every variety. The Tafilalet region produces some of the finest Medjool dates in the world, and the festival is the best place to buy them fresh from the grove. The event draws Amazigh communities from across the southeastern desert region, offering a rare glimpse into oasis culture.',
    buyTip: 'Premium Medjool dates from 40 MAD per kilogram. Standard varieties from 15 MAD per kilogram. Buy in bulk from farmers outside the main souk for better prices.',
  },
  {
    name: 'Olive Festival',
    location: 'Meknes region',
    month: 'November - December',
    duration: '3 days',
    icon: Award,
    price: 'Free',
    description:
      'The Meknes-Tafilalet region produces much of Morocco\'s olive oil. Local festivals celebrate the harvest with olive oil tastings, cooking demonstrations, agricultural exhibitions, and fantasia horseback shows. While less famous than the Rose or Date festivals, olive harvest celebrations provide an authentic agricultural experience and the chance to buy fresh cold-pressed olive oil directly from producers.',
    buyTip: 'Fresh cold-pressed olive oil from 50 MAD per liter. Bring an empty bottle and producers will fill it on the spot.',
  },
];

/* ================================================================
   DATA: RELIGIOUS CELEBRATIONS
   ================================================================ */

const religiousCelebrations = [
  {
    name: 'Ramadan',
    icon: Moon,
    timing: '2026: approximately late February to late March (dates depend on lunar sighting)',
    description:
      'The holy month of fasting transforms daily life across Morocco. From dawn to sunset, most Moroccans abstain from food, drink, and smoking. The pace of life slows during the day, with many shops opening later and closing earlier. The real magic happens at sunset during iftar, when families gather around tables loaded with harira soup, chebakia pastries, dates, eggs, and fresh juices. Streets come alive after dark with food stalls, cafes, and social gatherings. The night before Eid al-Fitr, families stay up decorating and preparing sweets.',
    forTourists:
      'Tourist restaurants and hotels serve meals all day. Eating, drinking, or smoking in public during fasting hours is considered disrespectful. Carry a water bottle but drink discreetly. Many cultural sites keep shorter hours. Evenings are the best time to experience local life.',
  },
  {
    name: 'Eid al-Fitr',
    icon: Star,
    timing: '2026: approximately late March (depends on Ramadan end)',
    description:
      'Eid al-Fitr marks the end of Ramadan with three days of celebration. Families dress in new clothes, attend morning prayers at the mosque, then gather for elaborate meals featuring pastilla, couscous, and tables of Moroccan pastries. Children receive gifts and money. The atmosphere is joyful, generous, and deeply communal. Many Moroccans travel to their hometown for Eid, which means intercity buses and trains are packed in the days before.',
    forTourists:
      'Book transport well in advance. Some shops and restaurants close for the first day or two. Hotels and tourist areas stay open. Accept offers of sweets and tea graciously. It is a wonderful time to experience Moroccan hospitality.',
  },
  {
    name: 'Eid al-Adha',
    icon: Flame,
    timing: '2026: approximately early June (follows Hajj calendar)',
    description:
      'The Feast of Sacrifice is the most important religious holiday in Morocco. Families purchase a sheep in the weeks before, and the animal is ritually sacrificed on the morning of Eid. The meat is divided into three portions: one for the family, one for neighbors, and one for the poor. Grills fire up across the country as families prepare mechoui (whole roasted lamb), liver skewers, and offal dishes. The celebration lasts three days.',
    forTourists:
      'The sacrifice is visible in streets and on rooftops. If you are squeamish, stay in your hotel on the first morning. After the sacrifice, the atmosphere becomes festive and families are generous with invitations. Many businesses close for two to three days. Stock up on essentials beforehand.',
  },
  {
    name: 'Mawlid an-Nabi (Prophet\'s Birthday)',
    icon: Sparkles,
    timing: '2026: approximately September (depends on Islamic calendar)',
    description:
      'Morocco celebrates the Prophet Mohammed\'s birthday with processions, recitations of the Quran, Sufi music gatherings, and community meals. In Meknes, the celebration is especially grand around the Moulay Ismail shrine. In Salé, across the river from Rabat, a candle-lit procession through the medina dates back centuries. Families prepare special sweets and children receive candy.',
    forTourists:
      'A public holiday, so government offices and some shops close. The processions in Salé and the gatherings in Meknes are atmospheric and open to respectful visitors. Photography of religious rituals requires permission.',
  },
];

/* ================================================================
   DATA: MOUSSEMS (TRADITIONAL GATHERINGS)
   ================================================================ */

const moussems = [
  {
    name: 'Moussem Tan-Tan',
    location: 'Tan-Tan (southern Morocco)',
    month: 'September',
    description:
      'A UNESCO Masterpiece of Intangible Heritage, the Tan-Tan Moussem brings together nomadic and semi-nomadic communities from across the Saharan region. Camel markets, tent encampments, poetry recitals, guedra dance, and traditional horse and camel fantasias fill the desert town for a week. It is the single best event in Morocco for experiencing Saharan nomadic culture.',
  },
  {
    name: 'Moussem Moulay Idriss',
    location: 'Moulay Idriss Zerhoun (near Meknes)',
    month: 'August - September',
    description:
      'The annual pilgrimage to the tomb of Moulay Idriss I, founder of the first Moroccan dynasty, is the country\'s most important religious moussem. Thousands of pilgrims converge on the hilltop town for prayers, Sufi brotherhood rituals, and communal feasts. Non-Muslims can observe the external festivities, markets, and fantasia displays.',
  },
  {
    name: 'Moussem of Sidi Ahmed ou Moussa',
    location: 'Tiznit (southern Morocco)',
    month: 'August',
    description:
      'This moussem honors the patron saint of acrobats. Troupes of traditional acrobats and gymnasts from across southern Morocco perform feats of balance and strength that have been passed down through generations. The event combines spiritual devotion with extraordinary physical artistry and is the origin of the famous Moroccan acrobat troupes that perform worldwide.',
  },
  {
    name: 'Imilchil Marriage Moussem',
    location: 'Imilchil (High Atlas)',
    month: 'September',
    description:
      'In the remote High Atlas village of Imilchil, an annual moussem serves as a collective wedding ceremony where young Amazigh men and women from surrounding communities meet and marry. The event includes a livestock market, Ahidous circle dances, and traditional Amazigh music. While increasingly touristic, the marriage ceremonies still take place and the mountain setting is spectacular.',
  },
];

/* ================================================================
   DATA: MONTH-BY-MONTH CALENDAR
   ================================================================ */

const monthlyCalendar = [
  { month: 'January', events: 'Marrakech Marathon. Ramadan may overlap (check Islamic calendar). Almond blossom season in Tafraout.' },
  { month: 'February', events: 'Almond Blossom Festival (Tafraout). Ramadan continues if started in late January. Carnival celebrations in some cities.' },
  { month: 'March', events: 'Eid al-Fitr (if Ramadan ends in March). Spring wildflower season in the Middle Atlas. International Women\'s Day events.' },
  { month: 'April', events: 'Jazz au Chellah (Rabat). Morocco Desert Challenge rally. Spring harvest celebrations in the Ourika Valley.' },
  { month: 'May', events: 'Rose Festival (Kelaat Mgouna). Fes Festival of World Sacred Music begins. Gardens in bloom across the north.' },
  { month: 'June', events: 'Gnaoua World Music Festival (Essaouira). Mawazine (Rabat). Cherry Festival (Sefrou). Eid al-Adha may fall in June. Fes Sacred Music concludes.' },
  { month: 'July', events: 'Timitar Festival (Agadir). National Festival of Popular Arts (Marrakech). Summer beach season at peak.' },
  { month: 'August', events: 'Moussem Moulay Idriss (near Meknes). Moussem Sidi Ahmed ou Moussa (Tiznit). Peak heat in the interior.' },
  { month: 'September', events: 'Moussem Tan-Tan. Imilchil Marriage Moussem. Mawlid an-Nabi may fall here. Taragalte Festival (desert music near Mhamid).' },
  { month: 'October', events: 'Date Festival (Erfoud). Oasis Festival (Marrakech, electronic music). Horse Festival (El Jadida, SALON DU CHEVAL).' },
  { month: 'November', events: 'Marrakech International Film Festival. Olive harvest celebrations (Meknes region). Independence Day (November 18).' },
  { month: 'December', events: 'Marrakech Film Festival continues into early December. New Year celebrations in major cities. Ski season opens in Oukaimeden.' },
];

/* ================================================================
   DATA: PRACTICAL TIPS
   ================================================================ */

const practicalTips = [
  {
    title: 'Book accommodation early',
    icon: Calendar,
    text: 'Festival towns sell out fast. For Gnaoua in Essaouira, book two to three months ahead. For the Rose Festival, riads in Kelaat Mgouna are limited, so consider staying in Ouarzazate and driving. During Eid holidays, intercity transport is packed, so book train and bus tickets a week ahead.',
  },
  {
    title: 'Check exact dates each year',
    icon: Clock,
    text: 'Islamic holidays follow the lunar calendar and shift 10 to 12 days earlier each Gregorian year. Harvest festivals depend on crop timing and can shift by weeks. Music festivals announce dates three to six months in advance. Follow official festival social media accounts for confirmed schedules.',
  },
  {
    title: 'Dress for the occasion',
    icon: Users,
    text: 'Outdoor music festivals are casual, but evenings along the coast get cool, so bring a jacket. For religious events and moussems in rural areas, cover shoulders and knees out of respect. For the film festival, smart-casual is appropriate for public screenings. Sun protection is essential at every outdoor event.',
  },
  {
    title: 'Budget for festival pricing',
    icon: DollarSign,
    text: 'Accommodation prices spike during major festivals, sometimes doubling or tripling. Food vendors near festival grounds charge more than usual. Street food remains affordable from 20 MAD. Budget from 500 MAD per day during a festival including food, transport, and basic tickets. Seasonal pricing can change depending on the event.',
  },
  {
    title: 'Protect your belongings',
    icon: AlertTriangle,
    text: 'Large crowds attract pickpockets. Use a crossbody bag worn in front, leave passport copies at your hotel, and carry only what you need. Phone theft increases at outdoor concerts after dark. Keep your phone in a zipped pocket when not using it.',
  },
  {
    title: 'Capture the moment respectfully',
    icon: Camera,
    text: 'Festivals are photogenic, but ask before photographing individuals, especially during religious events. Gnaoua maalems in trance states should not be photographed with flash. At moussems, some ceremonies are private. When in doubt, ask a local or event organizer for guidance.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoFestivalsEventsPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
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
      <section className="relative h-[55vh] min-h-[420px] flex items-end">
        <img
          src="/images/hero-festivals.webp"
          alt="Gnaoua musicians performing in Essaouira with ocean backdrop and festival crowds"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-morocco relative z-10 pb-10 text-white">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Morocco Festivals &amp; Events 2026
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl max-w-2xl opacity-95">
            Month-by-month guide to music festivals, film festivals, harvest celebrations, moussems, and religious holidays across the kingdom
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <div className="container-morocco py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#A0522D] flex items-center gap-1">
            <Home className="w-4 h-4" /> Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#A0522D] font-medium">Morocco Festivals &amp; Events</span>
        </nav>
      </div>

      {/* ── Introduction ── */}
      <section className="container-morocco py-8">
        <div className="max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-6">
            A Country That Celebrates All Year Long
          </h2>
          <div className="space-y-4 text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
            <p>
              Morocco packs more festivals into a single calendar year than most travelers expect. From world-class music festivals drawing millions of spectators to intimate rural moussems where Amazigh communities gather as they have for centuries, the country offers a festival for every month, every interest, and every budget.
            </p>
            <p>
              The festival calendar divides roughly into three layers. First, the major international events: Gnaoua in Essaouira, Mawazine in Rabat, the Fes Sacred Music Festival, and the Marrakech Film Festival. These draw global headliners and large crowds. Second, the agricultural harvest festivals: roses in the Dades Valley, cherries in Sefrou, dates in Erfoud, olives around Meknes. These are seasonal, tied to the land, and deeply local. Third, the religious calendar: Ramadan, Eid al-Fitr, Eid al-Adha, and Mawlid an-Nabi shape daily life for weeks and offer travelers a window into Moroccan spirituality and family culture.
            </p>
            <p>
              Then there are the moussems, traditional gatherings that sit at the crossroads of all three. Part pilgrimage, part market, part community reunion, moussems are uniquely Moroccan and among the most rewarding events a traveler can witness.
            </p>
            <p>
              This guide covers every major festival category with practical details: when to go, what to expect, how much it costs, and what to pack. Dates for Islamic holidays are approximate since the lunar calendar shifts each year. Harvest festival dates depend on growing conditions and are often confirmed only weeks in advance. Music and film festival dates are announced three to six months ahead on official websites and social media channels.
            </p>
          </div>
        </div>
      </section>

      {/* ── Month-by-Month Calendar ── */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-3">
          <Calendar className="w-8 h-8 inline-block mr-2 text-[#A0522D]" />
          Month-by-Month Festival Calendar
        </h2>
        <p className="text-gray-600 font-[family-name:var(--font-heading)] mb-8 max-w-3xl">
          Use this overview to plan your trip around Morocco&apos;s biggest events. Islamic holiday dates are approximate because they follow the lunar calendar and shift each year.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {monthlyCalendar.map((m) => (
            <div key={m.month} className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#A0522D] mb-2">
                {m.month}
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
                {m.events}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Major Music Festivals ── */}
      <section className="container-morocco py-10">
        <div className="zellige-border p-6 md:p-10 rounded-xl mb-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-3">
            <Music className="w-8 h-8 inline-block mr-2 text-[#A0522D]" />
            Major Music Festivals
          </h2>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] mb-8 max-w-3xl">
            Morocco&apos;s music festival scene punches far above its weight. The country hosts some of the largest and most diverse music events in Africa and the Arab world, many of them free to attend.
          </p>

          <div className="space-y-8">
            {musicFestivals.map((festival) => {
              const Icon = festival.icon;
              return (
                <div key={festival.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#A0522D]/10 shrink-0">
                      <Icon className="w-6 h-6 text-[#A0522D]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-1">
                        {festival.name}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-[#C4960C]" /> {festival.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-[#C4960C]" /> {festival.month}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-[#C4960C]" /> {festival.duration}
                        </span>
                      </div>
                      <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-3">
                        {festival.description}
                      </p>
                      <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-2">
                        <DollarSign className="w-4 h-4 inline text-[#C4960C]" /> <strong>Price:</strong> {festival.price}
                      </p>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3">
                        <p className="text-sm text-amber-800 font-[family-name:var(--font-heading)]">
                          <Info className="w-4 h-4 inline mr-1" /> <strong>Tip:</strong> {festival.tip}
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

      {/* ── Film & Art Festivals ── */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-3">
          <Film className="w-8 h-8 inline-block mr-2 text-[#A0522D]" />
          Film &amp; Art Festivals
        </h2>
        <p className="text-gray-600 font-[family-name:var(--font-heading)] mb-8 max-w-3xl">
          Morocco&apos;s long relationship with cinema, from Hollywood productions filmed in Ouarzazate to a growing local film industry, has spawned a respected festival circuit.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {filmFestivals.map((festival) => {
            const Icon = festival.icon;
            return (
              <div key={festival.name} className="card-moroccan p-6">
                <div className="p-3 rounded-full bg-[#A0522D]/10 inline-block mb-3">
                  <Icon className="w-6 h-6 text-[#A0522D]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-1">
                  {festival.name}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[#C4960C]" /> {festival.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[#C4960C]" /> {festival.month}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#C4960C]" /> {festival.duration}
                  </span>
                </div>
                <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-3">
                  {festival.description}
                </p>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-2">
                  <Ticket className="w-4 h-4 inline text-[#C4960C]" /> <strong>Price:</strong> {festival.price}
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
                  <p className="text-sm text-amber-800 font-[family-name:var(--font-heading)]">
                    <Info className="w-4 h-4 inline mr-1" /> <strong>Tip:</strong> {festival.tip}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Harvest Festivals ── */}
      <section className="container-morocco py-10">
        <div className="moroccan-pattern p-6 md:p-10 rounded-xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-3">
            <Flower2 className="w-8 h-8 inline-block mr-2 text-[#A0522D]" />
            Harvest &amp; Agricultural Festivals
          </h2>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] mb-8 max-w-3xl">
            Morocco&apos;s agricultural heartland celebrates each harvest with community festivals that blend commerce, culture, and pride in local produce. These events happen in smaller towns and offer a side of Morocco most tourists never see.
          </p>

          <div className="space-y-6">
            {harvestFestivals.map((festival) => {
              const Icon = festival.icon;
              return (
                <div key={festival.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#C4960C]/10 shrink-0">
                      <Icon className="w-6 h-6 text-[#C4960C]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-1">
                        {festival.name}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-[#C4960C]" /> {festival.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-[#C4960C]" /> {festival.month}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-[#C4960C]" /> {festival.duration}
                        </span>
                      </div>
                      <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-3">
                        {festival.description}
                      </p>
                      <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-1">
                        <DollarSign className="w-4 h-4 inline text-[#C4960C]" /> <strong>Admission:</strong> {festival.price}
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
                        <p className="text-sm text-green-800 font-[family-name:var(--font-heading)]">
                          <CheckCircle className="w-4 h-4 inline mr-1" /> <strong>Buy:</strong> {festival.buyTip}
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

      {/* ── Religious Celebrations ── */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-3">
          <Moon className="w-8 h-8 inline-block mr-2 text-[#A0522D]" />
          Religious Holidays &amp; Celebrations
        </h2>
        <p className="text-gray-600 font-[family-name:var(--font-heading)] mb-8 max-w-3xl">
          As a Muslim country, Morocco&apos;s most important holidays follow the Islamic lunar calendar. These dates shift each year. The celebrations are deeply communal and profoundly shape daily life for days or weeks at a time.
        </p>

        <div className="space-y-6">
          {religiousCelebrations.map((celebration) => {
            const Icon = celebration.icon;
            return (
              <div key={celebration.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#A0522D]/10 shrink-0">
                    <Icon className="w-6 h-6 text-[#A0522D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-1">
                      {celebration.name}
                    </h3>
                    <p className="text-sm text-[#C4960C] font-[family-name:var(--font-heading)] font-medium mb-3">
                      <Calendar className="w-4 h-4 inline mr-1" /> {celebration.timing}
                    </p>
                    <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-3">
                      {celebration.description}
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm text-blue-800 font-[family-name:var(--font-heading)]">
                        <Megaphone className="w-4 h-4 inline mr-1" /> <strong>For tourists:</strong> {celebration.forTourists}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Moussems ── */}
      <section className="container-morocco py-10">
        <div className="zellige-border p-6 md:p-10 rounded-xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-3">
            <Globe className="w-8 h-8 inline-block mr-2 text-[#A0522D]" />
            Moussems: Morocco&apos;s Traditional Gatherings
          </h2>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] mb-4 max-w-3xl">
            Moussems are uniquely Moroccan events that combine religious pilgrimage, agricultural trade, fantasia horse charges, folk music, and community reunion. They predate modern festivals by centuries and remain central to rural Moroccan identity. Most moussems are not organized for tourists, which is precisely what makes them extraordinary to witness.
          </p>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] mb-8 max-w-3xl">
            Attending a moussem requires flexibility. Dates are often announced just weeks in advance and can shift. Transport to rural locations may be limited. But the reward is an unfiltered, deeply authentic experience of Moroccan culture that no city tour can replicate.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {moussems.map((m) => (
              <div key={m.name} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-1">
                  {m.name}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[#C4960C]" /> {m.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[#C4960C]" /> {m.month}
                  </span>
                </div>
                <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fantasia Section ── */}
      <section className="container-morocco py-10">
        <div className="moroccan-pattern p-6 md:p-10 rounded-xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-3">
            <Flame className="w-8 h-8 inline-block mr-2 text-[#A0522D]" />
            Fantasia: Morocco&apos;s Horseback Spectacle
          </h2>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] mb-4 max-w-3xl">
            No guide to Moroccan festivals is complete without mentioning the fantasia (also called tbourida), a traditional equestrian charge that features at moussems, harvest festivals, and national celebrations across the country. UNESCO recognized tbourida as Intangible Cultural Heritage in 2021.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-3">
                What happens during a fantasia
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
                A group of horsemen (usually 15 to 25 riders) line up at one end of a dirt field, dressed in white djellabas and carrying long-barrelled muskets. At a signal, they charge at full gallop in tight formation, then simultaneously fire their muskets into the air in a single thunderous volley. The goal is perfect synchronization: all rifles must fire as one. The sound, dust, and spectacle are unforgettable. Between charges, musicians play and crowds cheer the best-coordinated teams.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-3">
                Where and when to see a fantasia
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed mb-3">
                The biggest fantasia competition is the annual Horse Festival (Salon du Cheval) in El Jadida each October, where hundreds of teams compete over a full week. You can also see fantasias at the Moussem Moulay Idriss near Meknes, the National Festival of Popular Arts in Marrakech, and local moussems across the countryside. Some luxury desert camps and cultural shows near Marrakech stage smaller fantasia demonstrations for tourists year-round, from 300 MAD per person.
              </p>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                <Info className="w-4 h-4 inline mr-1 text-[#C4960C]" />
                Stand well behind the barriers. The muskets are loaded with blanks but the noise is deafening at close range.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Getting to Festivals ── */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-3">
          <MapPin className="w-8 h-8 inline-block mr-2 text-[#A0522D]" />
          Getting to Morocco&apos;s Festival Towns
        </h2>
        <p className="text-gray-600 font-[family-name:var(--font-heading)] mb-8 max-w-3xl">
          Major music festivals in Essaouira, Rabat, Fes, and Marrakech are easy to reach by train, bus, or domestic flight. Harvest festivals and moussems in smaller towns require more planning.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="card-moroccan p-5">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-2">
              Essaouira (Gnaoua Festival)
            </h3>
            <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
              Supratours bus from Marrakech (2.5 hours, from 80 MAD). Grand taxi from Marrakech (from 100 MAD per seat). No train service. The small airport has limited domestic flights. During the festival, extra bus services run but sell out, so book the day before.
            </p>
          </div>
          <div className="card-moroccan p-5">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-2">
              Kelaat Mgouna (Rose Festival)
            </h3>
            <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
              Drive from Ouarzazate (1.5 hours) or take a grand taxi. No direct bus from major cities. Most visitors base in Ouarzazate or Boumalne Dades and day-trip to the festival. Rental car gives the most flexibility for exploring the Dades Valley roses.
            </p>
          </div>
          <div className="card-moroccan p-5">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-2">
              Erfoud (Date Festival)
            </h3>
            <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
              CTM or Supratours bus from Fes (8 hours) or Marrakech (10 hours). Grand taxi from Errachidia (1 hour, from 30 MAD). Many travelers combine the Date Festival with a Sahara desert trip since Merzouga is just 50 km further south.
            </p>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-3">
          <CheckCircle className="w-8 h-8 inline-block mr-2 text-[#A0522D]" />
          Practical Tips for Festival-Goers
        </h2>
        <p className="text-gray-600 font-[family-name:var(--font-heading)] mb-8 max-w-3xl">
          Attending a Moroccan festival is straightforward with a bit of planning. These tips apply across all types of events, from stadium concerts to desert moussems.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {practicalTips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div key={tip.title} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#A0522D]/10">
                    <Icon className="w-5 h-5 text-[#A0522D]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
                  {tip.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Festival Packing Essentials ── */}
      <section className="container-morocco py-10">
        <div className="moroccan-pattern p-6 md:p-10 rounded-xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-6">
            Festival Packing Essentials
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-3">
                For Outdoor Music Festivals
              </h3>
              <ul className="space-y-2 text-gray-700 font-[family-name:var(--font-heading)] text-sm">
                {[
                  'Sunscreen and a hat for daytime stages',
                  'Light jacket or hoodie for cool coastal evenings',
                  'Comfortable walking shoes (cobblestone medina streets)',
                  'Portable phone charger (charging spots are rare)',
                  'Small crossbody bag with zipper',
                  'Earplugs for sleeping in festival towns',
                  'Reusable water bottle',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-3">
                For Rural Moussems &amp; Harvest Festivals
              </h3>
              <ul className="space-y-2 text-gray-700 font-[family-name:var(--font-heading)] text-sm">
                {[
                  'Modest clothing (shoulders and knees covered)',
                  'Sturdy shoes for unpaved ground',
                  'Cash in small denominations (ATMs may be far away)',
                  'Snacks and water (vendors may be limited)',
                  'Dust scarf or buff for windy desert moussems',
                  'Camera with extra memory card',
                  'Phrase book or translation app for Darija and Tamazight',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-8">
          <MessageCircleQuestion className="w-8 h-8 inline-block mr-2 text-[#A0522D]" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-5 max-w-4xl">
          {faqItems.map((faq, idx) => (
            <div key={idx} className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-2">
                {faq.q}
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-6">
          Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              href: '/morocco-nightlife',
              title: 'Morocco Nightlife Guide',
              desc: 'Live music venues, bars, clubs, and evening entertainment across Moroccan cities.',
              icon: Music,
            },
            {
              href: '/morocco-art-galleries',
              title: 'Morocco Art Galleries',
              desc: 'Contemporary and traditional art spaces from Marrakech to Tangier.',
              icon: Award,
            },
            {
              href: '/morocco-ramadan',
              title: 'Visiting Morocco During Ramadan',
              desc: 'What to expect, how to prepare, and why Ramadan can be the best time to visit.',
              icon: Moon,
            },
            {
              href: '/morocco-best-time-visit',
              title: 'Best Time to Visit Morocco',
              desc: 'Season-by-season breakdown of weather, crowds, and prices.',
              icon: Sun,
            },
          ].map((guide) => {
            const Icon = guide.icon;
            return (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <div className="p-2 rounded-full bg-[#A0522D]/10 inline-block mb-3">
                  <Icon className="w-5 h-5 text-[#A0522D]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-2 group-hover:text-[#A0522D] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 font-[family-name:var(--font-heading)] text-sm mb-3">
                  {guide.desc}
                </p>
                <span className="text-[#A0522D] font-medium text-sm flex items-center gap-1">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="container-morocco py-12">
        <div className="bg-gradient-to-br from-[#A0522D] to-[#8B4726] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4">
            Plan Your Festival Trip to Morocco
          </h2>
          <p className="font-[family-name:var(--font-heading)] text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Time your visit around Morocco&apos;s biggest festivals and experience the country at its most alive. From Gnaoua rhythms on the Essaouira coast to the Rose Festival in the Dades Valley, every season brings something worth traveling for.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-best-time-visit"
              className="bg-white text-[#A0522D] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" /> Best Time to Visit
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

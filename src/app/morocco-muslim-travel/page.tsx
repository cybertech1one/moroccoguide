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
  Building,
  BookOpen,
  Crown,
  Globe,
  Landmark,
  Calendar,
  Moon,
  Utensils,
  HandHeart,
  Coffee,
  Shirt,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Muslim Travel Guide 2026 | Halal Food, Mosques, Islamic Heritage & Ramadan Tips',
  description:
    'Complete Muslim travel guide to Morocco. Halal food everywhere, prayer facilities, mosque visits, Islamic heritage sites like Al-Qarawiyyin and Koutoubia, Ramadan travel tips, Sufi culture, modest fashion shopping, and alcohol-free accommodations.',
  keywords: [
    'morocco halal travel',
    'muslim travel morocco',
    'halal food morocco',
    'mosques in morocco',
    'ramadan in morocco travel',
    'islamic tourism morocco',
    'halal restaurants morocco',
    'prayer times morocco',
    'islamic heritage morocco',
    'al qarawiyyin mosque fes',
    'koutoubia mosque marrakech',
    'hassan ii mosque casablanca',
    'sufi culture morocco',
    'modest fashion morocco',
    'alcohol free hotels morocco',
    'medersa ben youssef',
    'muslim friendly morocco',
    'islamic art morocco',
    'spiritual retreats morocco',
    'halal travel north africa',
  ],
  openGraph: {
    title: 'Morocco Muslim Travel Guide 2026 | Halal Food, Mosques & Islamic Heritage',
    description:
      'Morocco is a Muslim-majority country where halal food is the default, mosques mark every neighborhood, and Islamic heritage spans over 1,200 years. Your complete guide to Muslim-friendly travel.',
    url: `${BASE_URL}/morocco-muslim-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-mosque.webp`,
        width: 1200,
        height: 630,
        alt: 'Hassan II Mosque in Casablanca Morocco with ornate minaret against blue sky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Muslim Travel Guide 2026 | Halal Food, Mosques & Islamic Heritage',
    description:
      'Complete guide to Muslim travel in Morocco. Halal food, prayer facilities, Islamic heritage sites, Ramadan tips, Sufi culture, and modest fashion shopping.',
    images: [`${BASE_URL}/images/hero-mosque.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-muslim-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-muslim-travel`,
  name: 'Morocco Muslim Travel Guide 2026 | Halal Food, Mosques, Islamic Heritage & Ramadan Tips',
  description:
    'Complete Muslim travel guide to Morocco covering halal food, prayer facilities, mosque visits, Islamic heritage sites, Ramadan travel, Sufi culture, modest fashion, and alcohol-free accommodations.',
  url: `${BASE_URL}/morocco-muslim-travel`,
  image: `${BASE_URL}/images/hero-mosque.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-muslim-travel`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Muslim Travel Guide', item: `${BASE_URL}/morocco-muslim-travel` },
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
        text: 'Yes. Morocco is a Muslim-majority country (99% Muslim), and virtually all meat sold and served is halal by default. Butchers slaughter according to Islamic guidelines, and restaurants serve halal food as standard practice. The only exceptions are some international hotel chains and a few upscale restaurants in Casablanca and Marrakech that may serve pork or non-halal imported meats, but these are clearly labeled.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can non-Muslims enter mosques in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Hassan II Mosque in Casablanca is the only active mosque in Morocco open to non-Muslim visitors. It offers guided tours daily except Friday, costing from 130 MAD. All other mosques, including the Koutoubia in Marrakech and Al-Qarawiyyin in Fes, are closed to non-Muslims. However, many historic medersas (Islamic schools) like Medersa Ben Youssef and Medersa Bou Inania welcome all visitors.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are prayer times in Morocco and how do I find mosques?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco follows the Maliki school of Islamic jurisprudence. Prayer times change daily based on the sun. The adhan (call to prayer) sounds from every mosque, making it impossible to miss. Fajr is typically between 5:00-6:30 AM, Dhuhr around 1:00-1:30 PM, Asr around 4:00-5:00 PM, Maghrib at sunset, and Isha about 90 minutes after sunset. Mosques exist in every neighborhood. Apps like Muslim Pro and Athan show exact times for your location.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it a good idea to visit Morocco during Ramadan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ramadan offers a unique cultural experience but requires adjustment. Most restaurants close during daylight hours, though tourist-oriented places and hotels continue to serve food. The iftar (breaking of fast) at sunset is magical, with streets coming alive, families gathering, and special foods like harira soup and chebakia pastries everywhere. Evening markets and entertainment run late into the night. Expect shorter business hours and plan sightseeing for mornings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I find alcohol-free hotels in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many traditional riads and guesthouses do not serve alcohol, particularly in Fes, Chefchaouen, and smaller cities. Budget and mid-range accommodations rarely stock alcohol. Riad Fes, Riad Kniza in Marrakech, and most family-run guesthouses are alcohol-free. Large international chain hotels and some luxury resorts do serve alcohol in licensed bars. When booking, ask the property directly about their alcohol policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should Muslim women wear in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is moderate in dress expectations. Moroccan women wear everything from full niqab to Western-style clothing, depending on personal choice and region. For visitors, loose-fitting clothes covering shoulders and knees are comfortable and respectful. Headscarves are not required but are appreciated when visiting mosques or conservative areas like Fes medina. The djellaba (long loose robe) and hijab are widely available in souks from 150 MAD for djellabas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there halal spas or gender-separated facilities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional hammams (public bathhouses) have always been gender-separated in Morocco. Men and women use the same facilities at different times or have separate sections. Public hammams cost from 15 MAD and are found in every neighborhood. High-end hotel spas typically offer private hammam rooms. The hammam tradition predates tourism and is fully aligned with Islamic modesty requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I tip in Morocco as a Muslim traveler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tipping (called "pourboire" in French or "bakhshish" in Darija) is expected and appreciated. Restaurant servers: 10-15% of the bill or round up. Hotel porters: from 10-20 MAD per bag. Guides: from 100-200 MAD per day. Hammam attendants: from 20-50 MAD. Mosque guardians who open a medersa for you: from 10-20 MAD. Giving charity (sadaqah) is deeply valued, and Moroccans appreciate generosity toward those in need.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ISLAMIC HERITAGE SITES
   ═══════════════════════════════════════════════════════════════ */

const heritageSites = [
  {
    name: 'Al-Qarawiyyin Mosque & University (Fes)',
    icon: Landmark,
    founded: '859 CE',
    description:
      'Founded by Fatima al-Fihri in 859 CE, Al-Qarawiyyin holds the Guinness record as the oldest existing, continuously operating educational institution in the world. The mosque holds 20,000 worshippers. Non-Muslims cannot enter the mosque, but you can view the stunning courtyard through the open doors and visit the restored Al-Qarawiyyin Library, which houses manuscripts dating back to the 9th century.',
    access: 'Mosque: Muslims only. Library: open to visitors with appointment. Courtyard viewable from doors.',
    location: 'Fes Medina, near Talaa Kebira',
  },
  {
    name: 'Koutoubia Mosque (Marrakech)',
    icon: Building,
    founded: '1147 CE',
    description:
      'The Koutoubia minaret rises 77 meters and has defined the Marrakech skyline since the Almohad dynasty built it in 1147 CE. Its proportions inspired the Giralda in Seville and the Hassan Tower in Rabat. The mosque accommodates 25,000 worshippers. Non-Muslims cannot enter but the surrounding gardens are open to all. The minaret is illuminated at night and visible from across the city.',
    access: 'Mosque: Muslims only. Gardens: free and open to all.',
    location: 'Avenue Mohammed V, Marrakech',
  },
  {
    name: 'Hassan II Mosque (Casablanca)',
    icon: Star,
    founded: '1993 CE',
    description:
      'The largest mosque in Africa and the 5th largest in the world. Built on a promontory overlooking the Atlantic Ocean, it holds 25,000 worshippers inside and 80,000 in its courtyard. The 210-meter minaret is the tallest religious structure on Earth. A retractable roof opens to the sky. This is the only active mosque in Morocco that welcomes non-Muslim visitors on guided tours.',
    access: 'Guided tours for non-Muslims: daily except Friday, from 130 MAD. Muslims can pray during all five salah times.',
    location: 'Boulevard Sidi Mohammed Ben Abdallah, Casablanca',
  },
  {
    name: 'Medersa Ben Youssef (Marrakech)',
    icon: BookOpen,
    founded: '1565 CE',
    description:
      'The largest medersa (Islamic school) in Morocco, founded under the Saadian dynasty. It housed 900 students who studied the Quran, theology, law, and Arabic grammar. The interior features extraordinary carved stucco, cedarwood, and zellige tilework with Quranic inscriptions. The central marble courtyard with its reflecting pool is one of the most photographed spaces in Morocco.',
    access: 'Open to all visitors. Entry from 70 MAD.',
    location: 'Kaat Benahid, Marrakech Medina',
  },
  {
    name: 'Medersa Bou Inania (Fes)',
    icon: Crown,
    founded: '1351 CE',
    description:
      'Built by the Marinid Sultan Abou Inan Faris, this medersa is unique because it functions as both a school and a congregational mosque, complete with a minbar (pulpit). The craftsmanship represents the peak of Marinid artistry: carved plaster arabesques, zellige mosaics, and carved cedarwood muqarnas. The water clock (clepsydra) on the exterior wall, though no longer functioning, is a marvel of medieval engineering.',
    access: 'Open to all visitors. Entry from 20 MAD.',
    location: 'Talaa Kebira, Fes Medina',
  },
  {
    name: 'Hassan Tower & Mausoleum of Mohammed V (Rabat)',
    icon: Landmark,
    founded: '1195 CE (tower), 1971 (mausoleum)',
    description:
      'The unfinished Hassan Tower was intended as the minaret of the largest mosque in the western Islamic world. Construction stopped in 1199 when Sultan Yacoub al-Mansour died. The 44-meter tower stands among 348 remaining columns. Adjacent, the Mausoleum of Mohammed V showcases the finest modern Moroccan-Islamic craftsmanship: hand-carved marble, gilded mahogany, and zellige tilework by 400 master artisans.',
    access: 'Mausoleum: open to all, free entry. Hassan Tower: exterior viewing, free.',
    location: 'Boulevard Mohamed Lyazidi, Rabat',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HALAL DINING
   ═══════════════════════════════════════════════════════════════ */

const halalDining = [
  {
    city: 'Marrakech',
    restaurants: [
      { name: 'Naima Restaurant (Jemaa el-Fna)', type: 'Traditional Moroccan', price: 'From 60 MAD' },
      { name: 'Al Fassia Aguedal', type: 'Fine Moroccan cuisine, women-run', price: 'From 200 MAD' },
      { name: 'Cafe Clock Marrakech', type: 'Moroccan fusion, camel burger', price: 'From 80 MAD' },
      { name: 'Dar Zellij', type: 'Palace dining, traditional recipes', price: 'From 350 MAD' },
    ],
  },
  {
    city: 'Fes',
    restaurants: [
      { name: 'Cafe Clock Fes', type: 'Moroccan-international fusion', price: 'From 70 MAD' },
      { name: 'Restaurant Dar Hatim', type: 'Home-style cooking in a riad', price: 'From 80 MAD' },
      { name: 'The Ruined Garden', type: 'Garden dining, seasonal menu', price: 'From 120 MAD' },
      { name: 'Nur (by Najat Kaanache)', type: 'Moroccan fine dining', price: 'From 500 MAD' },
    ],
  },
  {
    city: 'Casablanca',
    restaurants: [
      { name: 'Rick\'s Cafe', type: 'Moroccan-international, Casablanca-themed', price: 'From 150 MAD' },
      { name: 'La Sqala', type: 'Moroccan in a historic bastion', price: 'From 100 MAD' },
      { name: 'Basmane', type: 'Traditional Moroccan home cooking', price: 'From 70 MAD' },
      { name: 'Blend Gourmet Burger', type: 'Halal gourmet burgers', price: 'From 90 MAD' },
    ],
  },
  {
    city: 'Chefchaouen',
    restaurants: [
      { name: 'Bab Ssour', type: 'Rooftop dining, medina views', price: 'From 60 MAD' },
      { name: 'Restaurant Beldi Bab Ssour', type: 'Traditional Riffian cuisine', price: 'From 50 MAD' },
      { name: 'Aladdin Restaurant', type: 'Moroccan tagines and grills', price: 'From 55 MAD' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RAMADAN TIPS
   ═══════════════════════════════════════════════════════════════ */

const ramadanTips = [
  {
    icon: Moon,
    title: 'Iftar Experience',
    text: 'The moment of iftar at sunset is extraordinary. Streets empty minutes before the adhan, then come alive with families breaking fast together. Traditional iftar starts with dates and harira soup, followed by chebakia (sesame pastries soaked in honey), eggs, bread, and fresh juices. Many restaurants offer special iftar menus from 80 MAD.',
  },
  {
    icon: Clock,
    title: 'Adjusted Schedules',
    text: 'During Ramadan, most shops and attractions open later (around 10 AM) and close earlier (around 3 PM), then reopen after iftar until late. Museums and monuments may reduce hours. Plan sightseeing for mornings. The souks come alive after 9 PM and stay open past midnight.',
  },
  {
    icon: Utensils,
    title: 'Eating During Daylight',
    text: 'Non-fasting travelers can eat in hotel restaurants, riads, and some tourist-oriented cafes during the day. Eating, drinking, or smoking in public during fasting hours is considered disrespectful. Carry water discreetly. Tourist cities like Marrakech and Casablanca have more daytime options than smaller towns.',
  },
  {
    icon: Calendar,
    title: 'Suhoor & Night Activities',
    text: 'Suhoor (pre-dawn meal) is served at cafes between 2-4 AM during Ramadan. Night markets, live music, and entertainment run until very late. Ramadan nights are festive, with special TV programs, family gatherings, and communal prayers (tarawih) at mosques after Isha.',
  },
  {
    icon: Heart,
    title: 'Spiritual Atmosphere',
    text: 'Ramadan in Morocco has a distinct spiritual energy. The recitation of Quran fills the air, charitable giving increases, and communities share food with neighbors. Visiting during Ramadan gives access to a side of Moroccan culture that is invisible the rest of the year. The last ten nights (especially Laylat al-Qadr) carry intense devotion.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SUFI HERITAGE
   ═══════════════════════════════════════════════════════════════ */

const sufiSites = [
  {
    name: 'Zaouia of Moulay Idriss II (Fes)',
    description:
      'The tomb of the founder of Fes and descendant of Prophet Muhammad (PBUH). One of the holiest sites in Morocco. Non-Muslims can approach the entrance and observe from outside. The brass bar at the doorway marks the boundary for non-Muslim visitors. Locals come to pray, seek blessings, and leave offerings.',
    city: 'Fes',
  },
  {
    name: 'Zaouia of Sidi Bel Abbes (Marrakech)',
    description:
      'Dedicated to Sidi Bel Abbes, the patron saint of Marrakech and one of the "Seven Saints" (Sab\'atou Rijal). This 12th-century Sufi master is revered for his charity toward the blind and disabled. The zaouia complex includes a mosque, hammam, and food distribution center that still feeds the poor daily.',
    city: 'Marrakech',
  },
  {
    name: 'Moulay Idriss Zerhoun (Holy Town)',
    description:
      'A sacred pilgrimage town 30 km from Meknes, built around the tomb of Moulay Idriss I, who brought Islam to Morocco in 788 CE. Until recently off-limits to non-Muslims overnight, the town now welcomes all visitors. The annual moussem (pilgrimage festival) in August draws thousands of devotees.',
    city: 'Near Meknes',
  },
  {
    name: 'Tamegroute Zaouia & Library (Zagora)',
    description:
      'The Zaouia Nassiriya houses one of Morocco\'s most important Islamic libraries, with over 4,000 manuscripts including works on astronomy, mathematics, Quranic sciences, and Sufi poetry. Some manuscripts date back to the 13th century. The library is open to visitors. Tamegroute is also known for its distinctive green-glazed pottery.',
    city: 'Near Zagora',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ISLAMIC ART & CALLIGRAPHY
   ═══════════════════════════════════════════════════════════════ */

const islamicArt = [
  {
    name: 'Zellige Tilework',
    icon: Sparkles,
    description:
      'Hand-cut geometric mosaic tiles arranged into complex mathematical patterns without any figurative imagery, following Islamic artistic principles. Artisans in Fes still produce zellige by hand, cutting each piece from larger glazed tiles with a hammer. A single square meter can contain over 2,000 pieces.',
    where: 'Fes (Ain Nokbi neighborhood workshops), Meknes, Marrakech medersas',
  },
  {
    name: 'Arabic Calligraphy',
    icon: BookOpen,
    description:
      'Moroccan calligraphy uses the distinctive Maghribi script, with rounded letters and bold strokes. Quranic verses adorn mosque walls, medersas, and palace interiors. The Musee Nejjarine in Fes and Medersa Ben Youssef in Marrakech display exceptional examples. Calligraphy workshops in Fes medina teach the basics from 200 MAD for a two-hour session.',
    where: 'Fes Medina workshops, Medersa Ben Youssef, Bahia Palace',
  },
  {
    name: 'Carved Stucco (Gebs)',
    icon: Crown,
    description:
      'Intricate plasterwork carved into arabesques, floral motifs, and Quranic inscriptions. Master craftsmen (maalems) carve wet plaster freehand using small knives, a skill that takes years to master. The Saadian Tombs in Marrakech and Medersa Bou Inania in Fes contain some of the finest surviving examples.',
    where: 'Saadian Tombs, Bahia Palace, medersas of Fes',
  },
  {
    name: 'Cedarwood Carving (Khashab)',
    icon: Landmark,
    description:
      'Atlas cedarwood is carved into elaborate muqarnas (honeycomb vaulting), screens, and doors. The Nejjarine Museum of Wooden Arts in Fes occupies a restored caravanserai and showcases centuries of woodworking. Cedar doors of mosques and palaces feature geometric interlace and Quranic calligraphy.',
    where: 'Nejjarine Museum (Fes), Dar Si Said Museum (Marrakech)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoMuslimTravelPage() {
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
            backgroundImage: 'url(/images/hero-mosque.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Muslim Travel Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Moon className="w-4 h-4" />
            Muslim Travel &amp; Islamic Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Muslim Travel Guide:
            <br className="hidden md:block" /> Halal Food, Mosques &amp; Islamic Heritage
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Morocco is 99% Muslim. Halal food is the default, the adhan echoes five times daily,
            and 1,200 years of Islamic civilization fill every medina. Here is everything you need to know.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: Why Morocco for Muslim Travelers ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Ranks Among the Best Destinations for Muslim Travelers
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco operates as a Muslim-majority nation where Islam shapes daily life at every level.
                The King of Morocco holds the title &quot;Amir al-Mu&apos;minin&quot; (Commander of the Faithful),
                and the Maliki school of Sunni Islam governs religious practice. For Muslim travelers,
                this translates to practical advantages that few other tourist destinations can match.
              </p>
              <p>
                Every restaurant serves halal meat by default. The adhan calls from minarets five times
                daily, making prayer times impossible to forget. Mosques stand in every neighborhood,
                and ablution facilities (wudu stations) are standard. Gender-separated hammams have
                operated for centuries. Modest dress draws zero attention because millions of Moroccan
                women dress conservatively by choice. Alcohol exists but is contained to licensed
                establishments, and many accommodations operate entirely alcohol-free.
              </p>
              <p>
                Beyond logistics, Morocco holds extraordinary Islamic heritage. The world&apos;s oldest
                university (Al-Qarawiyyin, founded 859 CE), North Africa&apos;s largest mosque (Hassan II),
                intact medieval medersas with Quranic calligraphy, and a living Sufi tradition centered
                on zaouias and moussems. This guide covers the specifics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Halal Food: The Default in Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Halal Food in Morocco: No Need to Check
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Halal is the standard in Morocco, not the exception. Butchers follow Islamic slaughter
            practices, and pork is virtually absent from Moroccan cuisine.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and vary by location and season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {halalDining.map((city) => (
              <div key={city.city} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {city.city}
                  </h3>
                </div>
                <div className="space-y-3">
                  {city.restaurants.map((r) => (
                    <div key={r.name} className="flex items-start justify-between gap-2 text-sm">
                      <div>
                        <p className="font-medium text-[var(--text-primary)]">{r.name}</p>
                        <p className="text-xs text-[var(--text-muted)]">{r.type}</p>
                      </div>
                      <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded whitespace-nowrap">
                        {r.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <div className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Street food is halal too.</strong> The grilled
                meats at Jemaa el-Fna in Marrakech, msemen (flatbread) stalls across every city, and
                snail soup (babouche) vendors in Fes all use halal ingredients. The only caution:
                a few bars and upscale international restaurants in Casablanca and Marrakech may serve
                pork or non-halal imports, but these are clearly identified.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Islamic Heritage Sites ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Islamic Heritage Sites &amp; Mosques
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the world&apos;s oldest university to Africa&apos;s largest mosque, Morocco holds over
            a millennium of Islamic architectural and scholarly achievement.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {heritageSites.map((site) => {
              const SiteIcon = site.icon;
              return (
                <div key={site.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SiteIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {site.name}
                        </h3>
                        <span className="text-xs font-semibold text-[var(--color-gold)] bg-[var(--color-gold)]/10 px-2 py-0.5 rounded">
                          Founded {site.founded}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{site.description}</p>
                      <div className="space-y-1.5 text-xs text-[var(--text-muted)]">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-3 h-3 text-[var(--color-accent)]" />
                          <span><strong>Access:</strong> {site.access}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                          <span>{site.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Prayer Facilities & Practical Info ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Prayer Times &amp; Facilities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco follows the Maliki madhab. The adhan sounds from every minaret, and mosques
            welcome Muslim travelers at all five salah times.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Approximate Prayer Times (varies by season)
              </h3>
              <div className="space-y-3">
                {[
                  { prayer: 'Fajr', time: '5:00 - 6:30 AM', note: 'Earlier in summer, later in winter' },
                  { prayer: 'Dhuhr', time: '1:00 - 1:30 PM', note: 'After the sun passes its zenith' },
                  { prayer: 'Asr', time: '4:00 - 5:00 PM', note: 'Maliki timing (later than Hanafi)' },
                  { prayer: 'Maghrib', time: 'At sunset', note: 'Exact time changes daily' },
                  { prayer: 'Isha', time: '~90 min after Maghrib', note: 'Later in summer months' },
                ].map((p) => (
                  <div key={p.prayer} className="flex items-center justify-between text-sm">
                    <div>
                      <span className="font-medium text-[var(--text-primary)]">{p.prayer}</span>
                      <span className="text-xs text-[var(--text-muted)] ml-2">{p.note}</span>
                    </div>
                    <span className="text-xs font-semibold text-[var(--color-accent)]">{p.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Practical Tips for Prayer
              </h3>
              <div className="space-y-3">
                {[
                  'Mosques are in every neighborhood. Follow the sound of the adhan.',
                  'Wudu (ablution) facilities are standard at all mosques.',
                  'Friday (Jumu\'ah) prayers draw large crowds. Arrive 20-30 minutes early.',
                  'Women\'s sections exist in most larger mosques. Ask at the entrance.',
                  'Morocco uses the Muslim Pro and Athan apps for accurate local times.',
                  'Bring a compact prayer rug for praying in parks or rest stops during travel.',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ramadan Travel ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traveling Morocco During Ramadan
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ramadan transforms Morocco. Shorter daytime hours give way to festive nights,
            communal iftar meals, and a spiritual atmosphere unlike any other time of year.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ramadanTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-5 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <div className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Ramadan dates shift each year.</strong> Ramadan
                follows the Islamic lunar calendar and moves approximately 10-11 days earlier each year.
                Check the exact dates before planning your trip. Most Moroccans welcome visitors who
                respect the fast, and joining an iftar meal with a local family is one of the most
                memorable experiences Morocco offers.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sufi Culture & Zaouias ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sufi Heritage &amp; Zaouias
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Sufism has shaped Moroccan Islam for centuries. Zaouias (Sufi lodges) serve as spiritual
            centers, community hubs, and charitable institutions across the country.
          </p>

          <div className="space-y-6">
            {sufiSites.map((site) => (
              <div key={site.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {site.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0">
                    <MapPin className="w-3 h-3" />
                    {site.city}
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{site.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5">
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <div className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Gnaoua Music &amp; Spiritual Tradition.</strong> The
                Gnaoua brotherhood blends sub-Saharan African spiritual practices with Sufi Islam. Their
                all-night lila ceremonies use metal castanets (qraqeb) and hypnotic bass rhythms for
                spiritual healing. The annual Gnaoua World Music Festival in Essaouira (June) is the
                best place to experience this tradition. Maalems (master musicians) like the late
                Mahmoud Guinea and his sons carry on centuries of sacred musical knowledge.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Islamic Art & Calligraphy ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Islamic Art &amp; Calligraphy
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan Islamic art avoids figurative representation and instead achieves extraordinary
            beauty through geometry, calligraphy, and botanical abstraction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {islamicArt.map((art) => {
              const ArtIcon = art.icon;
              return (
                <div key={art.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ArtIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {art.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{art.description}</p>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                    <span>{art.where}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Alcohol-Free Accommodations & Modest Fashion ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Muslim Travel Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Alcohol-free stays, modest fashion, family-friendly culture, and tipping etiquette.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Alcohol-Free Accommodations
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>
                  Many traditional riads do not serve alcohol, especially in Fes, Chefchaouen,
                  and conservative cities. Family-run guesthouses in the medinas are almost always
                  alcohol-free. Ask when booking.
                </p>
                <div className="space-y-2">
                  {[
                    'Riad Fes (Fes) -- luxury, alcohol-free',
                    'Most riads in Chefchaouen medina -- no alcohol',
                    'Riad Kniza (Marrakech) -- traditional, no bar',
                    'Kasbah du Toubkal (Imlil) -- mountain lodge, no alcohol',
                    'Budget guesthouses nationwide -- rarely stock alcohol',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Shirt className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Modest Fashion &amp; Shopping
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>
                  Morocco is a paradise for modest fashion shopping. The souks overflow with
                  djellabas, kaftans, hijabs, and loose-fitting traditional garments that are
                  both stylish and affordable.
                </p>
                <div className="space-y-2">
                  {[
                    'Djellabas from 150 MAD in Fes and Marrakech souks',
                    'Kaftans from 300 MAD (hand-embroidered from 800 MAD)',
                    'Hijabs and scarves from 30 MAD in textile souks',
                    'Babouche slippers from 60 MAD in every medina',
                    'Fes and Marrakech have the largest textile souks',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Family-Friendly Culture
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>
                  Moroccan culture places family at its center. Children are welcomed everywhere,
                  from restaurants to riads. Public spaces are safe and family-oriented. Moroccans
                  actively help families with children, offering seats, carrying strollers, and
                  engaging warmly with kids.
                </p>
                <div className="space-y-2">
                  {[
                    'Traditional hammams have separate hours for families',
                    'Riads often have family suites with connecting rooms',
                    'Restaurants happily accommodate children of all ages',
                    'Parks and gardens (Majorelle, Menara) are family gathering spots',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Tipping Etiquette (Bakhshish)
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>
                  Tipping is customary and expected in Morocco. It supports workers who often
                  earn modest base salaries. Sadaqah (charitable giving) is deeply respected.
                </p>
                <div className="space-y-2">
                  {[
                    'Restaurant servers: 10-15% or round up the bill',
                    'Hotel porters: from 10-20 MAD per bag',
                    'Tour guides: from 100-200 MAD per day',
                    'Hammam attendants: from 20-50 MAD',
                    'Parking attendants: from 5-10 MAD',
                    'Mosque/medersa guardians: from 10-20 MAD',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
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
                Is all food in Morocco halal?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Morocco is 99% Muslim, and virtually all meat is halal by default. Butchers
                slaughter according to Islamic guidelines, and restaurants serve halal food as standard.
                The few exceptions are some international hotel chains and upscale restaurants in
                Casablanca and Marrakech that serve pork or non-halal imported meats, always clearly labeled.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can non-Muslims enter mosques in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Hassan II Mosque in Casablanca is the only active mosque open to non-Muslim visitors,
                with guided tours daily except Friday from 130 MAD. All other mosques are closed to
                non-Muslims. Historic medersas (Al-Qarawiyyin Library, Ben Youssef, Bou Inania) welcome
                all visitors and showcase the same architectural brilliance.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are prayer times in Morocco and how do I find mosques?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco follows the Maliki school. The adhan sounds from every mosque, making prayer
                times audible throughout the day. Fajr: 5:00-6:30 AM; Dhuhr: 1:00-1:30 PM; Asr: 4:00-5:00 PM;
                Maghrib: at sunset; Isha: about 90 minutes after sunset. Mosques exist in every neighborhood.
                Muslim Pro and Athan apps show exact times for your GPS location.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it a good idea to visit Morocco during Ramadan?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ramadan offers an extraordinary cultural experience. Most restaurants close during
                daylight, but hotels and tourist-oriented places serve food. Iftar at sunset is magical:
                harira soup, chebakia pastries, dates, and fresh juices. Night markets and entertainment
                run until late. Plan sightseeing for mornings and expect shorter business hours.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I find alcohol-free hotels in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Many traditional riads and guesthouses do not serve alcohol, especially in Fes,
                Chefchaouen, and smaller cities. Riad Fes, Riad Kniza, Kasbah du Toubkal, and most
                family-run guesthouses are alcohol-free. International chain hotels and luxury resorts
                typically serve alcohol in licensed bars. Ask the property about their policy when booking.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should Muslim women wear in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is moderate in dress expectations. Local women wear everything from niqab to
                Western clothing. Loose-fitting clothes covering shoulders and knees are comfortable
                and respectful. Headscarves are appreciated near mosques and in conservative areas like
                Fes medina but are not required. Djellabas and hijabs are available in every souk from 150 MAD.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are there halal spas or gender-separated facilities?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Traditional hammams have always been gender-separated. Men and women use the same facilities
                at different times or have separate sections. Public hammams cost from 15 MAD and exist
                in every neighborhood. Hotel spas offer private hammam rooms. The tradition predates
                tourism and aligns fully with Islamic modesty requirements.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much should I tip in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Tipping is expected and called &quot;bakhshish.&quot; Restaurants: 10-15% or round up.
                Hotel porters: from 10-20 MAD. Guides: from 100-200 MAD per day. Hammam attendants:
                from 20-50 MAD. Mosque guardians who open a medersa: from 10-20 MAD. Charitable giving
                (sadaqah) is deeply valued, and generosity toward those in need is appreciated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-ramadan-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Moon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Ramadan Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In-depth guide to visiting Morocco during Ramadan, with iftar experiences and adjusted schedules.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Customs, etiquette, and social norms across Moroccan society for all travelers.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The spiritual capital of Morocco. Al-Qarawiyyin, medersas, and the world&apos;s largest car-free medina.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/moroccan-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Tagines, couscous, pastilla, and street food. A complete guide to eating across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Plan Your Muslim-Friendly Trip to Morocco
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            A country where the adhan fills the air, halal food is the norm, and 1,200 years of
            Islamic heritage await at every turn. Morocco makes Muslim travel effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-ramadan-travel"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Moon className="w-5 h-5" />
              Ramadan Travel Guide
            </Link>
            <Link
              href="/fes-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Landmark className="w-5 h-5" />
              Explore Fes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

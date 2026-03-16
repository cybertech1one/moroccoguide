import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Star,
  MapPin,
  Building2,
  BookOpen,
  Calendar,
  Globe,
  Utensils,
  Clock,
  Users,
  Landmark,
  ArrowRight,
  Info,
  Heart,
  Shield,
  Music,
  Camera,
  Compass,
  Quote,
  Plane,
  Map,
  Sun,
  HandHeart,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Jewish Heritage in Morocco | Synagogues, Mellahs & Museums | CityGuide',
  description:
    'Explore 2,000+ years of Jewish heritage in Morocco. Visit historic synagogues, mellah districts, the Museum of Moroccan Judaism, and learn about Jewish festivals, kosher options, and Morocco-Israel relations.',
  keywords: [
    'Jewish heritage Morocco',
    'Morocco synagogues',
    'mellah Morocco',
    'Ibn Danan Synagogue Fes',
    'Lazama Synagogue Marrakech',
    'Slat al-Azama Marrakech',
    'Museum of Moroccan Judaism',
    'Jewish cemetery Morocco',
    'Slat al-Azama Essaouira',
    'Hiloula Morocco',
    'kosher food Morocco',
    'Morocco Israel relations',
    'Bayt Dakira Essaouira',
    'Miara Cemetery Marrakech',
    'Jewish quarter Morocco',
    'Jewish Moroccan cuisine',
    'Mohammed V Jews WWII',
    'Jewish diaspora Morocco',
    'heritage tours Morocco',
    'Mimouna celebration',
  ],
  openGraph: {
    title: 'Jewish Heritage in Morocco - CityGuide',
    description:
      'Discover 2,000 years of Jewish-Moroccan coexistence. Explore synagogues, mellahs, cemeteries, and the only Jewish museum in the Arab world.',
    url: 'https://citytoursmorocco.com/jewish-heritage',
    images: [
      {
        url: '/images/hero-fes.webp',
        width: 1200,
        height: 630,
        alt: 'Historic synagogue interior in Morocco with ornate tilework and chandeliers',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/jewish-heritage' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://citytoursmorocco.com/jewish-heritage',
  name: 'Jewish Heritage in Morocco',
  description:
    'Comprehensive guide to Jewish heritage in Morocco covering synagogues, mellah districts, cemeteries, museums, festivals, cuisine, heritage tours, and practical visiting information.',
  url: 'https://citytoursmorocco.com/jewish-heritage',
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
      { '@type': 'ListItem', position: 2, name: 'Jewish Heritage', item: 'https://citytoursmorocco.com/jewish-heritage' },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   HISTORICAL TIMELINE DATA
   ═══════════════════════════════════════════════════════════════ */

const historicalTimeline = [
  {
    era: 'Ancient Origins',
    period: '586 BCE - 1st Century CE',
    description:
      'Jewish communities likely arrived in Morocco following the destruction of the First Temple in Jerusalem. Phoenician and Jewish traders established settlements along the Atlantic coast. The Anti-Atlas town of Ifrane de l\'Anti-Atlas holds tombstones that local tradition dates to this period, making it one of the oldest Jewish sites outside the Holy Land.',
    icon: Clock,
  },
  {
    era: 'Roman Period',
    period: '1st - 5th Century CE',
    description:
      'Under Roman Mauretania Tingitana, Jewish communities flourished in cities like Volubilis and Sala Colonia. Archaeological evidence, including oil lamps bearing menorahs and Hebrew inscriptions, confirms a well-established Jewish presence throughout Roman Morocco.',
    icon: Landmark,
  },
  {
    era: 'Islamic Golden Age',
    period: '8th - 15th Century',
    description:
      'Following the Islamic conquest, Jews were granted dhimmi (protected) status. Jewish scholars, physicians, and merchants became integral to Moroccan court life. The establishment of the first mellah in Fes in 1438, adjacent to the Royal Palace, formalized Jewish quarters under royal protection.',
    icon: Star,
  },
  {
    era: 'Iberian Expulsion Era',
    period: '1391 - 1550s',
    description:
      'Waves of Sephardic Jews expelled from Spain (1492) and Portugal (1497) found refuge in Morocco, bringing with them Andalusian culture, music, language (Ladino and Haketia), and craftsmanship. The "Megorashim" (expelled) merged with the indigenous "Toshavim" (residents), creating a uniquely rich Moroccan Jewish culture.',
    icon: Globe,
  },
  {
    era: 'Saadian & Alaouite Eras',
    period: '16th - 19th Century',
    description:
      'Jewish advisors served as diplomatic envoys and financial counselors to the sultans. The community expanded to Essaouira, Mogador, and the Atlas Mountain towns. Jews controlled much of Morocco\'s international trade, serving as intermediaries between European merchants and the Moroccan court.',
    icon: Building2,
  },
  {
    era: 'Colonial Period & WWII',
    period: '1912 - 1956',
    description:
      'Under the French Protectorate, Jews gained access to French schools (Alliance Israelite Universelle) and European-style commerce. During WWII, King Mohammed V refused to implement Vichy anti-Jewish laws, famously protecting his Jewish subjects. The community reached its peak of approximately 250,000 individuals.',
    icon: Shield,
  },
  {
    era: 'Emigration & Preservation',
    period: '1948 - Present',
    description:
      'The creation of Israel and Moroccan independence prompted mass emigration. Today approximately 2,000-3,000 Jews remain, primarily in Casablanca. King Mohammed VI has invested millions in restoring synagogues, cemeteries, and Jewish quarters, declaring Jewish heritage an inseparable part of Moroccan identity.',
    icon: Heart,
  },
];

/* ═══════════════════════════════════════════════════════════════
   HERITAGE SITES DATA
   ═══════════════════════════════════════════════════════════════ */

const heritageSites = [
  {
    city: 'Fes',
    sites: [
      {
        name: 'Ibn Danan Synagogue',
        image: '/images/hero-fes.webp',
        description:
          'Built in the 17th century and beautifully restored in 1999, the Ibn Danan Synagogue is one of the most important Jewish heritage sites in Morocco. Located in the heart of the Fes mellah, it features a subterranean mikveh (ritual bath) fed by a natural spring, an ornate Torah ark, and balconies where women once prayed. The synagogue is named after the prominent Danan rabbinical family who served the community for centuries.',
        hours: 'Daily 9:00-17:00 (closed Saturdays and Jewish holidays)',
        admission: '10 MAD',
      },
      {
        name: 'Fes Mellah',
        image: '/images/hero-fes.webp',
        description:
          'Established in 1438, the Fes mellah is the oldest Jewish quarter in Morocco and gave the word "mellah" to all subsequent Jewish districts across the country. Located adjacent to the Royal Palace (a deliberate placement that signified royal protection), the quarter once housed 250,000 Jewish residents. Its distinctive balconied architecture, with outward-facing windows unlike the inward-looking Muslim medina houses, remains a defining feature.',
        hours: 'Accessible at all times (public streets)',
        admission: 'Free',
      },
      {
        name: 'Jewish Cemetery of Fes',
        image: '/images/hero-kasbahs.webp',
        description:
          'The vast Jewish cemetery of Fes, with its rows of stark white tombs stretching across the hillside near the mellah, is one of the largest Jewish cemeteries in Morocco. Containing graves dating back centuries, it is a profoundly moving testament to the depth and longevity of Jewish life in the city. The tombs of several revered rabbis attract pilgrims to this day.',
        hours: 'Daily 8:00-18:00',
        admission: 'Free (donations appreciated)',
      },
    ],
  },
  {
    city: 'Marrakech',
    sites: [
      {
        name: 'Slat al-Azama Synagogue (Lazama)',
        image: '/images/hero-marrakech.webp',
        description:
          'Hidden behind an unassuming door in the Marrakech mellah, the Slat al-Azama Synagogue (also known as the Lazama Synagogue) is the most important and best-preserved synagogue in the city. Dating to the 16th century, it features a stunning cobalt-blue interior courtyard, intricate zellige tilework, and carved stucco that rivals the finest Islamic architecture in the city. The name "Lazama" refers to the "Megurashim" &mdash; Jews expelled from the Iberian Peninsula who founded the congregation.',
        hours: 'Sunday-Friday 9:00-18:00 (closed Saturdays)',
        admission: '20 MAD',
      },
      {
        name: 'Marrakech Mellah',
        image: '/images/hero-marrakech.webp',
        description:
          'The Marrakech mellah, established in 1558 under the Saadian dynasty, was once home to a thriving community of over 35,000 Jews. Located near the Bahia Palace and the Royal Palace, the quarter is characterized by its distinctive architecture with wooden balconies and open-fronted shops. Today, the mellah has been largely repopulated by Muslim residents, but its unique character and several synagogues survive as reminders of its heritage.',
        hours: 'Accessible at all times',
        admission: 'Free',
      },
      {
        name: 'Miara Cemetery',
        image: '/images/hero-marrakech.webp',
        description:
          'The Miara Cemetery is the principal Jewish burial ground of Marrakech, dating to at least the 16th century. Its whitewashed tombs, arranged in long rows within high walls, contain the remains of generations of Marrakech&apos;s Jewish community, including many revered rabbinical scholars. Certain tombs are believed to possess healing powers and are visited during annual Hiloula pilgrimages.',
        hours: 'Daily 7:00-18:00',
        admission: 'Free (caretaker tip of 10-20 MAD expected)',
      },
    ],
  },
  {
    city: 'Essaouira',
    sites: [
      {
        name: 'Slat al-Azama Synagogue',
        image: '/images/hero-essaouira.webp',
        description:
          'Essaouira&apos;s beautifully restored Slat al-Azama Synagogue, located in the heart of the medina, stands as a testament to the city&apos;s once-thriving Jewish community, which at its peak in the 19th century comprised nearly 40% of the city&apos;s population. The synagogue features traditional Moroccan architectural elements including carved wood, brass chandeliers, and painted tile floors.',
        hours: 'Sunday-Friday 10:00-18:00',
        admission: '30 MAD (includes Bayt Dakira)',
      },
      {
        name: 'Bayt Dakira (House of Memory)',
        image: '/images/hero-morocco.webp',
        description:
          'Opened in 2020, Bayt Dakira is a museum and cultural center dedicated to preserving the memory of Essaouira&apos;s Jewish heritage. Housed in a beautifully renovated riad adjacent to the Slat al-Azama Synagogue, the museum features exhibits on Jewish-Muslim coexistence, historical photographs, religious artifacts, and the stories of prominent Jewish families from Essaouira (formerly known as Mogador). King Mohammed VI inaugurated the museum as a symbol of Morocco&apos;s commitment to pluralism.',
        hours: 'Sunday-Friday 10:00-18:00',
        admission: '30 MAD (includes synagogue)',
      },
    ],
  },
  {
    city: 'Casablanca',
    sites: [
      {
        name: 'Museum of Moroccan Judaism',
        image: '/images/hero-morocco.webp',
        description:
          'The Museum of Moroccan Judaism in Casablanca is the only Jewish museum in the Arab world, a distinction that speaks volumes about Morocco&apos;s unique tradition of religious tolerance. Founded in 1997 in the Oasis neighborhood, the museum houses a remarkable collection of Torah scrolls, Hanukkah menorahs, traditional clothing, wedding dresses, and photographs documenting Jewish life across Morocco. The collection of antique kaftans, jewelry, and ceremonial objects is particularly striking.',
        hours: 'Monday-Friday 10:00-17:00, Sunday 11:00-15:00',
        admission: '40 MAD',
      },
      {
        name: 'Beth-El Synagogue',
        image: '/images/hero-hassan-mosque.webp',
        description:
          'The Beth-El Synagogue in the Lusitania district of Casablanca is the principal active synagogue serving the city&apos;s remaining Jewish community. Built in the 1940s, it hosts regular Shabbat services and community events. The synagogue&apos;s Art Deco-influenced architecture reflects Casablanca&apos;s mid-century cosmopolitan character. Visitors are welcome by prior arrangement with the community.',
        hours: 'By arrangement (contact Jewish community)',
        admission: 'Free',
      },
    ],
  },
  {
    city: 'Rabat',
    sites: [
      {
        name: 'Jewish Cemetery of Rabat',
        image: '/images/hero-morocco.webp',
        description:
          'The Jewish cemetery of Rabat, located near the mellah in the old city, is a well-maintained burial ground with graves dating back several centuries. Recently restored with support from the Moroccan government, the cemetery is a quiet, reflective space that honors the Jewish community&apos;s long presence in the capital city. Several notable rabbis and community leaders are buried here.',
        hours: 'Daily 8:00-17:00',
        admission: 'Free',
      },
    ],
  },
  {
    city: 'Ifrane',
    sites: [
      {
        name: 'Jewish Cemetery of Ifrane',
        image: '/images/hero-atlas.webp',
        description:
          'Not to be confused with the modern Alpine-style city of Ifrane in the Middle Atlas, the ancient Ifrane of the Anti-Atlas (Ifrane de l&apos;Anti-Atlas) is home to one of the oldest Jewish cemeteries in Morocco. Jewish tradition holds that a community has existed here since the destruction of the First Temple in Jerusalem in 586 BCE, making it potentially one of the oldest Jewish sites in the world. The cemetery contains ancient tombstones with Hebrew inscriptions that have attracted scholarly interest.',
        hours: 'Daylight hours (ask locally for access)',
        admission: 'Free',
      },
    ],
  },
  {
    city: 'Demnate',
    sites: [
      {
        name: 'Historic Jewish Quarter of Demnate',
        image: '/images/hero-berber-culture.webp',
        description:
          'The small town of Demnate, nestled at the foot of the High Atlas southeast of Marrakech, was home to one of Morocco&apos;s most significant Jewish communities until the mid-20th century. The Jewish quarter, with its narrow streets and traditional houses, still bears the marks of its former inhabitants. A historic synagogue has been restored, and the Jewish cemetery overlooking the town contains hundreds of graves. Demnate is also famous for the natural Imi n&apos;Ifri rock bridge nearby.',
        hours: 'Accessible at all times (synagogue hours vary)',
        admission: 'Free',
      },
    ],
  },
  {
    city: 'Meknes',
    sites: [
      {
        name: 'Meknes Mellah & Synagogues',
        image: '/images/hero-essaouira.webp',
        description:
          'The mellah of Meknes, established during the reign of Sultan Moulay Ismail in the late 17th century, was once home to a substantial Jewish community that served the imperial court. Several synagogues survive in varying states of preservation, and the Jewish cemetery contains the tomb of Rabbi David HaMizrachi, a pilgrimage site. The mellah&apos;s proximity to the Imperial Palace reflects the pattern of royal protection found in all Moroccan Jewish quarters.',
        hours: 'Accessible at all times (synagogues by arrangement)',
        admission: 'Free',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   FESTIVALS & PILGRIMAGE DATA
   ═══════════════════════════════════════════════════════════════ */

const festivals = [
  {
    name: 'Hiloula of Rabbi Amram Ben Diwan',
    location: 'Ouezzane',
    timing: 'Annually in spring (Lag BaOmer)',
    description:
      'The largest Jewish pilgrimage in Morocco, attracting thousands of visitors from Israel, France, Canada, and beyond. Rabbi Amram Ben Diwan, an 18th-century Palestinian emissary, is buried near Ouezzane, and his tomb is believed to have miraculous healing powers. The multi-day celebration features prayer, music, candle-lighting, and communal meals.',
    attendance: '3,000-5,000 annually',
  },
  {
    name: 'Hiloula of Rabbi Haim Pinto',
    location: 'Essaouira',
    timing: 'Annually in September (26th of Elul)',
    description:
      'Rabbi Haim Pinto, born in Morocco in 1748, was one of the most revered kabbalists in Moroccan Jewish history. His tomb in Essaouira draws hundreds of pilgrims each year for prayers, blessings, and celebration. The event is a vibrant mix of devotion and festivity.',
    attendance: '500-1,000 annually',
  },
  {
    name: 'Hiloula of Rabbi Shlomo Ben Hensh',
    location: 'Ourika Valley',
    timing: 'Varies (usually spring)',
    description:
      'Pilgrims travel to the Ourika Valley south of Marrakech to visit the tomb of Rabbi Shlomo Ben Hensh, another revered Moroccan Jewish saint. The pilgrimage is marked by traditional prayers, the lighting of candles, and shared meals in a setting of extraordinary natural beauty amid the Atlas foothills.',
    attendance: '300-500 annually',
  },
  {
    name: 'Mimouna',
    location: 'Nationwide (celebrated by Moroccan Jews worldwide)',
    timing: 'Evening after the last day of Passover',
    description:
      'Mimouna is a uniquely Moroccan Jewish celebration marking the end of Passover and symbolizing friendship between Jewish and Muslim neighbors. Traditionally, Muslim neighbors would bring flour, butter, and yeast to Jewish homes after Passover, since Jews had cleared their houses of leavened products. The celebration features a lavish table spread with symbolic sweets, mufleta (thin crepes), and fresh spring produce.',
    attendance: 'Celebrated worldwide by Moroccan Jews',
  },
  {
    name: 'Hiloula of Rabbi Nessim Ben Nessim',
    location: 'Taroudant',
    timing: 'Varies (spring)',
    description:
      'The walled city of Taroudant in the Souss Valley hosts this intimate pilgrimage to the tomb of Rabbi Nessim Ben Nessim. The event brings together families from the diaspora who trace their roots to the Souss region, with traditional music, prayers, and communal meals uniting generations.',
    attendance: '200-400 annually',
  },
  {
    name: 'Hiloula of Rabbi David ou Moshe',
    location: 'Ourika Valley (Aghbalou)',
    timing: 'Late spring / early summer',
    description:
      'One of the most popular hiloulas in the Atlas region, this pilgrimage to the tomb of Rabbi David ou Moshe near Aghbalou draws families from across the Moroccan Jewish diaspora. The three-day event includes candlelighting, communal prayers, and festive meals, set against the dramatic backdrop of the High Atlas Mountains.',
    attendance: '1,000-2,000 annually',
  },
];

/* ═══════════════════════════════════════════════════════════════
   JEWISH-MOROCCAN CUISINE DATA
   ═══════════════════════════════════════════════════════════════ */

const cuisineConnections = [
  {
    dish: 'Dafina (Skhina)',
    description:
      'The quintessential Moroccan Jewish Shabbat dish, a slow-cooked stew of meat, potatoes, chickpeas, wheat berries, and eggs that cooks overnight on low heat from Friday afternoon to Saturday lunch. Remarkably similar to the Muslim Moroccan "tanjia" and a culinary cousin of Ashkenazi cholent, dafina demonstrates the shared culinary vocabulary between communities.',
    origin: 'Originated in Iberian Jewish communities and adapted to Moroccan ingredients',
  },
  {
    dish: 'Mufleta',
    description:
      'Thin, buttery crepes made from a yeast-raised dough, served dripping with honey and butter. Mufleta is the centerpiece of the Mimouna celebration after Passover. The dough was traditionally prepared with flour gifted by Muslim neighbors, symbolizing the renewal of leavened bread after the Passover prohibition.',
    origin: 'Unique to Moroccan Jewish tradition; now popular across Israel',
  },
  {
    dish: 'Pastilla (Bastilla)',
    description:
      'While pastilla is enjoyed by all Moroccans, the Jewish version traditionally uses pigeon or chicken in a flaky pastry with almonds and cinnamon, carefully avoiding the milk-meat combination prohibited by kosher law. Jewish pastilla makers in Fes and Meknes were renowned for their exceptional skill.',
    origin: 'Andalusian origins, refined in Moroccan Jewish and Muslim kitchens alike',
  },
  {
    dish: 'Maakouda & Kefta Tagine',
    description:
      'Jewish Moroccan families perfected numerous tagine variations that adhered to kosher dietary laws: fish tagines for dairy meals, lamb or beef kefta tagines (without dairy sauces) for meat meals. Maakouda, golden potato fritters, was a staple of Jewish celebration tables.',
    origin: 'Cross-community traditions adapted to Jewish dietary requirements',
  },
  {
    dish: 'Harira (Jewish Version)',
    description:
      'The beloved Moroccan soup traditionally broken with during Ramadan has a Jewish counterpart prepared for breaking fast days like Yom Kippur. The Jewish version often includes lamb or beef instead of the harissa-rich Muslim version, and may use different spice blends passed down through families.',
    origin: 'Shared tradition with distinct adaptations for religious observance',
  },
  {
    dish: 'Mahia',
    description:
      'A potent fig or date brandy distilled exclusively by Moroccan Jews, who held a monopoly on alcohol production due to Islamic prohibition. Mahia was served at celebrations, given as gifts, and traded commercially. Its production has nearly ceased in Morocco but continues in Israel among Moroccan Jewish families.',
    origin: 'Uniquely Moroccan Jewish; production dates back centuries',
  },
];

/* ═══════════════════════════════════════════════════════════════
   HERITAGE TOUR OPERATORS DATA
   ═══════════════════════════════════════════════════════════════ */

const tourOperators = [
  {
    name: 'Morocco Jewish Tours',
    speciality: 'Comprehensive Jewish heritage itineraries',
    duration: '7-14 days',
    cities: 'Casablanca, Fes, Marrakech, Essaouira, Meknes',
    highlights: 'Synagogue visits, mellah walks, cemetery pilgrimages, meetings with local Jewish community',
  },
  {
    name: 'Private Heritage Guides',
    speciality: 'City-specific Jewish heritage walks',
    duration: 'Half-day to full-day',
    cities: 'Available in Fes, Marrakech, Essaouira, Casablanca',
    highlights: 'Deep dives into individual mellahs, synagogue interiors, hidden heritage sites with caretaker access',
  },
  {
    name: 'Hiloula Pilgrimage Tours',
    speciality: 'Organized pilgrimages to saint tombs',
    duration: '3-5 days',
    cities: 'Ouezzane, Essaouira, Ourika Valley, Taroudant',
    highlights: 'Timed to annual Hiloula dates, includes communal meals, prayers, and cultural programming',
  },
  {
    name: 'Roots Journeys',
    speciality: 'Ancestral research and family heritage trips',
    duration: '5-10 days',
    cities: 'Customized based on family origins',
    highlights: 'Genealogical research, visits to ancestral homes and synagogues, meetings with community elders',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function JewishHeritagePage() {
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
            src="/images/hero-fes.webp"
            alt="Historic synagogue in Morocco with ornate Moorish architecture"
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
            <span className="text-white">Jewish Heritage</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              2,000+ Years of Coexistence
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Jewish Heritage in Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Discover one of the world&apos;s most remarkable stories of interfaith coexistence &mdash;
              from ancient synagogues and mellah districts to the only Jewish museum in the Arab world.
            </p>
          </div>

          {/* Quick navigation pills */}
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              { label: 'History', icon: BookOpen, href: '#history' },
              { label: 'Synagogues & Sites', icon: Building2, href: '#sites' },
              { label: 'King Mohammed V', icon: Shield, href: '#wwii' },
              { label: 'Cuisine', icon: Utensils, href: '#cuisine' },
              { label: 'Festivals', icon: Calendar, href: '#festivals' },
              { label: 'Heritage Tours', icon: Compass, href: '#tours' },
            ].map((pill) => (
              <a
                key={pill.label}
                href={pill.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium hover:bg-white/20 transition-colors"
              >
                <pill.icon className="w-3 h-3" />
                {pill.label}
              </a>
            ))}
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── History of Jewish Life in Morocco ── */}
      <section id="history" className="py-16 md:py-20 scroll-mt-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Two Millennia of Jewish Life in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A story of coexistence spanning more than two thousand years, unique in the Arab and Muslim world.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Jews have lived in Morocco for over 2,000 years, making the Moroccan Jewish community one of the oldest
              and most deeply rooted in the world. Archaeological evidence suggests Jewish settlements in the region
              from as early as the 2nd century BCE, possibly dating back to the destruction of the First Temple in
              Jerusalem in 586 BCE. Some scholars believe that Phoenician and Jewish traders arrived together on
              Morocco&apos;s shores, establishing communities along the Atlantic coast and in the interior long before
              the arrival of Islam.
            </p>
            <p>
              The golden age of Moroccan Jewry flourished under the great Berber and Arab dynasties. Jewish scholars,
              physicians, merchants, and diplomats played vital roles in the courts of the Almoravids, Marinids, and
              Saadians. The mellah districts &mdash; named after the Arabic word for salt &mdash; were established
              starting in 1438 in Fes as protected quarters where Jews could live, worship, and conduct business under
              royal protection. While the mellahs were sometimes restrictive, they also fostered vibrant, self-governing
              communities with their own synagogues, schools, courts, and markets.
            </p>
            <p>
              The arrival of Sephardic Jews expelled from Spain in 1492 and Portugal in 1497 enriched Moroccan Jewish
              culture immeasurably. These "Megorashim" brought with them the intellectual, musical, and culinary
              traditions of Al-Andalus, merging with the indigenous "Toshavim" to create a uniquely vibrant community.
              The Sephardic influence is still visible in synagogue architecture, liturgical music, and family names
              across Morocco.
            </p>
            <p>
              At its peak in the 1940s, Morocco&apos;s Jewish population numbered approximately 250,000 &mdash; the
              largest Jewish community in the Arab world. Following the creation of Israel in 1948 and Moroccan
              independence in 1956, the vast majority of Moroccan Jews emigrated &mdash; primarily to Israel, France,
              and Canada. Today, approximately 2,000-3,000 Jews remain in Morocco, primarily in Casablanca, but the
              community&apos;s heritage is carefully preserved and honored by the Moroccan state. King Mohammed VI has
              invested significantly in restoring synagogues, cemeteries, and Jewish quarters across the country,
              recognizing Jewish heritage as an integral part of Moroccan identity.
            </p>
          </div>

          {/* Historical Timeline */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[var(--color-primary)]" />
              Historical Timeline
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)]/30 via-[var(--color-accent)]/30 to-[var(--color-primary)]/10" />
              <div className="space-y-6">
                {historicalTimeline.map((item) => (
                  <div key={item.era} className="relative flex gap-4">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 border-2 border-[var(--color-primary)]/20 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                    </div>
                    <div className="card-moroccan p-5 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                        <h4 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                          {item.era}
                        </h4>
                        <span className="text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2 py-0.5 rounded-full w-fit">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── King Mohammed V & WWII ── */}
      <section id="wwii" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-16">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              King Mohammed V &amp; the Protection of Jews
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A defining moment of moral courage that saved an entire community during the darkest chapter of the 20th century.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto">
            <div className="relative w-full md:w-2/5 h-72 md:h-auto shrink-0">
              <img
                src="/images/hero-essaouira.webp"
                alt="Historic view of Rabat, Morocco where King Mohammed V protected Jewish citizens"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium italic">
                  &ldquo;There are no Jews in Morocco. There are no Muslims in Morocco. There are only Moroccan subjects.&rdquo;
                </p>
                <p className="text-white/70 text-xs mt-1">&mdash; King Mohammed V, 1940</p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-[15px]">
                <p>
                  When France fell to Nazi Germany in June 1940 and the Vichy regime imposed its anti-Jewish laws on
                  French colonies, Morocco&apos;s Sultan Mohammed V faced an agonizing choice. The Vichy
                  administration demanded that Morocco implement the "Statut des Juifs" &mdash; laws that would strip
                  Jewish citizens of their property, livelihoods, and civil rights, as had been done in mainland France.
                </p>
                <p>
                  Mohammed V refused. In a series of bold acts of defiance, the sultan invited Jewish leaders to the
                  1941 throne celebration, a powerful public statement of solidarity at a time when Jews across Europe
                  and North Africa were being systematically persecuted. He insisted that the annual throne festivities
                  include Jewish guests of honor, sending an unmistakable signal to the Vichy authorities that he
                  considered all Moroccans &mdash; regardless of faith &mdash; to be under his protection.
                </p>
                <p>
                  While the Vichy laws were technically promulgated in Morocco, the sultan worked behind the scenes
                  to blunt their impact. He refused to require Jews to wear the yellow star, obstructed the
                  confiscation of Jewish property, and ensured that no Moroccan Jew was deported to European death
                  camps. Historians debate the extent of his defiance, but what is beyond dispute is that Morocco&apos;s
                  Jewish community survived the war intact &mdash; a stark contrast to the fate of Jews in other
                  Vichy-controlled territories.
                </p>
                <p>
                  This legacy of protection is not merely historical. It continues to shape Moroccan national identity
                  and the country&apos;s relationship with its Jewish diaspora. King Mohammed VI has invoked his
                  grandfather&apos;s example repeatedly in speeches promoting religious tolerance and diversity,
                  and the story is taught in Moroccan schools as a foundational narrative of the nation.
                </p>
              </div>
            </div>
          </div>

          {/* Key facts about WWII protection */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { label: 'Jews Protected', value: '~250,000', icon: Users },
              { label: 'Deportations from Morocco', value: 'Zero', icon: Shield },
              { label: 'Throne Day 1941', value: 'Jews Invited', icon: Star },
            ].map((stat) => (
              <div key={stat.label} className="card-moroccan p-5 text-center">
                <stat.icon className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
                <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Heritage Sites ── */}
      <section id="sites" className="py-16 md:py-20 moroccan-pattern scroll-mt-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Major Synagogues &amp; Heritage Sites
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Essential Jewish heritage sites across eight Moroccan cities, from ancient
              synagogues and cemeteries to the only Jewish museum in the Arab world.
            </p>
          </div>

          {heritageSites.map((cityGroup) => (
            <div key={cityGroup.city} className="mb-12 last:mb-0">
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold">
                  {cityGroup.sites.length}
                </span>
                {cityGroup.city}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityGroup.sites.map((site) => (
                  <article key={site.name} className="card-moroccan overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={site.image}
                        alt={site.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                        {site.name}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                        {site.description}
                      </p>
                      <div className="space-y-1.5 pt-3 border-t border-[var(--border-light)]">
                        <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                          <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                          <span>{site.hours}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                          <Star className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                          <span>Admission: {site.admission}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Mellah Districts ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Mellah Districts
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Understanding Morocco&apos;s historic Jewish quarters &mdash; what they were, how they shaped community
              life, and how to visit them today.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto">
            <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
              <img
                src="/images/hero-fes.webp"
                alt="Narrow street in a historic Moroccan mellah district"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-[15px]">
                <p>
                  The word "mellah" literally means "salt" in Arabic, though historians debate its exact origin.
                  Some believe it refers to the salty marshland where the first Jewish quarter in Fes was established;
                  others suggest it derives from a historical task assigned to the Jewish community. Regardless of
                  etymology, the mellah became the defining feature of Jewish urban life in Morocco for over 500 years.
                </p>
                <p>
                  Mellahs were typically located adjacent to the Royal Palace, a deliberate placement that served
                  a dual purpose: it allowed the sultan to protect his Jewish subjects (who were valued as merchants,
                  craftsmen, diplomats, and advisors) while also keeping them within easy reach for taxation.
                  Architecturally, mellah houses differ from traditional medina houses by featuring balconies and
                  outward-facing windows &mdash; a visible marker that distinguishes these quarters even today.
                </p>
                <p>
                  Today, Morocco&apos;s mellahs are largely inhabited by Muslim residents who moved in after the
                  Jewish emigration of the 1950s-1970s. However, the architectural character, synagogues, and
                  cemeteries remain. Visiting a mellah is best done with a knowledgeable local guide who can
                  point out the subtle architectural differences, locate hidden synagogues behind unmarked doors,
                  and share the stories of the families who once lived there.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Fes Mellah (1438)', 'Marrakech Mellah (1558)', 'Essaouira Mellah', 'Meknes Mellah', 'Rabat Mellah', 'Taroudant Mellah'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                  >
                    <MapPin className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Museum of Moroccan Judaism ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Museum of Moroccan Judaism
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The only Jewish museum in the entire Arab world &mdash; a powerful symbol of Morocco&apos;s commitment to
              preserving its pluralistic heritage.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden flex flex-col md:flex-row-reverse max-w-5xl mx-auto">
            <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
              <img
                src="/images/hero-morocco.webp"
                alt="Museum of Moroccan Judaism exterior in Casablanca"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-[15px]">
                <p>
                  Founded in 1997 in the Oasis neighborhood of Casablanca, the Museum of Moroccan Judaism (Musee
                  du Judaisme Marocain) occupies a former Jewish orphanage and tells the story of Jewish life in
                  Morocco through a rich collection of religious artifacts, historical documents, and personal items.
                </p>
                <p>
                  Highlights include an impressive collection of Torah scrolls and cases from synagogues across
                  Morocco, antique Hanukkah menorahs in distinctive Moroccan styles, traditional wedding costumes
                  and jewelry, historic photographs of Jewish communities in cities from Tangier to the Saharan
                  oases, and reconstructions of typical mellah workshops and living spaces.
                </p>
                <p>
                  The museum also houses a functioning synagogue and a research library with thousands of documents
                  relating to Moroccan Jewish history. The collection of antique kaftans, Berber Jewish jewelry from
                  the Atlas Mountains, and ceremonial silverware from Fes and Essaouira is particularly striking.
                  Guided tours are available in French, Arabic, English, and Hebrew. Allow at least 90 minutes for a
                  thorough visit. The museum is located at 81 Rue Chasseur Jules Gros in the Oasis district,
                  accessible by taxi from central Casablanca in about 15 minutes.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Mon-Fri 10:00-17:00, Sun 11:00-15:00</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Star className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Admission: 40 MAD</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>81 Rue Chasseur Jules Gros, Oasis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Users className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Guided tours in 4 languages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Jewish-Moroccan Cuisine Connections ── */}
      <section id="cuisine" className="py-16 md:py-20 scroll-mt-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Utensils className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Jewish-Moroccan Cuisine
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Centuries of coexistence produced a shared culinary heritage where Jewish and Muslim kitchens
              influenced one another profoundly &mdash; a legacy savored today on both sides of the Mediterranean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cuisineConnections.map((item) => (
              <article key={item.dish} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-accent)]/10">
                    <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {item.dish}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-xs text-[var(--color-primary)] font-semibold italic">
                  {item.origin}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jewish Festivals & Pilgrimages ── */}
      <section id="festivals" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Annual Pilgrimages &amp; Festivals
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Hiloula pilgrimages to the tombs of revered rabbis continue to draw thousands of visitors annually,
              keeping centuries-old traditions alive and bringing the diaspora home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {festivals.map((festival) => (
              <article key={festival.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                    <Heart className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {festival.name}
                    </h3>
                    <p className="text-xs text-[var(--color-primary)] font-semibold">
                      {festival.location} &middot; {festival.timing}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {festival.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-light)]">
                  <Users className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span>{festival.attendance}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diaspora & Heritage Tourism ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Globe className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Moroccan Jewish Diaspora
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Approximately one million people worldwide trace their ancestry to Moroccan Jewish communities &mdash;
              and many are returning to discover their roots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                <Map className="w-5 h-5 text-[var(--color-primary)]" />
                Where They Went
              </h3>
              <div className="space-y-3">
                {[
                  { country: 'Israel', population: '~700,000 of Moroccan descent', detail: 'The largest Moroccan diaspora; Moroccan culture deeply influences Israeli food, music, and traditions' },
                  { country: 'France', population: '~200,000 of Moroccan descent', detail: 'Concentrated in Paris, Marseille, and Strasbourg; maintain strong cultural associations' },
                  { country: 'Canada', population: '~50,000 of Moroccan descent', detail: 'Primarily in Montreal; vibrant Sephardic community with Moroccan synagogues' },
                  { country: 'United States', population: '~30,000 of Moroccan descent', detail: 'New York and Los Angeles; active cultural organizations and heritage societies' },
                ].map((item) => (
                  <div key={item.country} className="p-3 rounded-lg bg-[var(--surface-muted)]">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm text-[var(--text-primary)]">{item.country}</span>
                      <span className="text-xs text-[var(--color-primary)] font-semibold">{item.population}</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                <HandHeart className="w-5 h-5 text-[var(--color-primary)]" />
                Heritage Tourism Revival
              </h3>
              <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Heritage tourism has become one of the most emotionally powerful forms of travel to Morocco.
                  Second and third-generation descendants return to walk the streets their grandparents once
                  walked, pray in family synagogues, and visit ancestral graves. These journeys often produce
                  profoundly moving reunions with Muslim neighbors who still remember the Jewish families
                  who lived next door decades ago.
                </p>
                <p>
                  The Abraham Accords of December 2020, which established full diplomatic relations between
                  Morocco and Israel, have supercharged this trend. Direct flights between Tel Aviv and
                  Casablanca, Marrakech, and Rabat have made travel between the two countries easier than ever.
                  Israeli tourism to Morocco has surged, and Morocco has become one of the most popular
                  destinations for Israeli travelers seeking ancestral roots and cultural heritage.
                </p>
                <p>
                  Morocco&apos;s government actively supports heritage tourism through synagogue restorations,
                  cultural center openings (like Bayt Dakira in Essaouira), and the development of Jewish
                  heritage trails. Several Moroccan cities now include Jewish heritage sites in their official
                  tourist itineraries.
                </p>
              </div>
            </div>
          </div>

          {/* Morocco-Israel stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { label: 'Israelis of Moroccan Origin', value: '~700,000', icon: Users },
              { label: 'Abraham Accords Signed', value: 'Dec 2020', icon: Globe },
              { label: 'Direct Flight Routes', value: '3 Routes', icon: Plane },
              { label: 'Restored Heritage Sites', value: '100+', icon: Building2 },
            ].map((stat) => (
              <div key={stat.label} className="card-moroccan p-5 text-center">
                <stat.icon className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
                <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Heritage Tour Operators ── */}
      <section id="tours" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-16">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Heritage Tours &amp; Guided Experiences
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Specialized tour operators and local guides offer immersive experiences that bring
              Morocco&apos;s Jewish history to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourOperators.map((operator) => (
              <article key={operator.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {operator.name}
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-semibold mb-3">
                  {operator.speciality}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                    <span>Duration: {operator.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                    <span>{operator.cities}</span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed pt-3 border-t border-[var(--border-light)]">
                  <Star className="w-3.5 h-3.5 text-[var(--color-accent)] inline mr-1" />
                  {operator.highlights}
                </p>
              </article>
            ))}
          </div>

          {/* Sample itinerary */}
          <div className="mt-10 card-featured p-6 md:p-8">
            <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
              <Sun className="w-5 h-5 text-[var(--color-accent)]" />
              Sample 7-Day Jewish Heritage Itinerary
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { days: 'Days 1-2', city: 'Casablanca', activities: 'Museum of Moroccan Judaism, Beth-El Synagogue, Art Deco mellah walk' },
                { days: 'Days 3-4', city: 'Fes', activities: 'Ibn Danan Synagogue, Fes Mellah, Jewish Cemetery, Marinid-era sites' },
                { days: 'Day 5', city: 'Meknes', activities: 'Meknes Mellah, synagogues, Rabbi David HaMizrachi tomb' },
                { days: 'Days 6-7', city: 'Marrakech', activities: 'Slat al-Azama, mellah walk, Miara Cemetery, Essaouira day trip' },
              ].map((day) => (
                <div key={day.days} className="p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)]">
                  <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">{day.days}</span>
                  <h4 className="text-base font-bold text-[var(--text-primary)] mt-1 mb-2">{day.city}</h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{day.activities}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Visiting Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Info className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Practical Visiting Information
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know about visiting Jewish heritage sites, finding kosher food,
              observing Shabbat, and planning your heritage journey in Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                  <Utensils className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Kosher Food Options
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Casablanca has the most options, with several kosher restaurants in the Oasis and Gauthier neighborhoods near active synagogues.',
                  'Marrakech has at least one kosher restaurant (Dar Darna, also a guesthouse) and kosher catering can be arranged through the Jewish community.',
                  'In other cities, self-catering is the safest option. Moroccan markets offer abundant fresh fruits, vegetables, fish, and nuts.',
                  'Many traditional Moroccan dishes (tagines, couscous, salads) are naturally compatible with kosher dietary laws when prepared without non-kosher meat.',
                  'Contact the Jewish community in Casablanca (Communaute Israelite du Maroc) before your trip for up-to-date kosher food recommendations.',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                  <Star className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Shabbat Considerations
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Synagogues and Jewish heritage sites are closed on Saturdays and Jewish holidays. Plan visits for Sunday through Friday.',
                  'Shabbat services are held at active synagogues in Casablanca and Marrakech. Visitors are welcome &mdash; contact the community in advance.',
                  'The Beth-El Synagogue in Casablanca and the Slat al-Azama in Marrakech are the most accessible for visiting worshippers.',
                  'Jewish-run guesthouses like Dar Darna in Marrakech can arrange Shabbat meals and provide a welcoming environment for observant travelers.',
                  'Morocco&apos;s time zone and latitude mean Shabbat times vary significantly by season. Check local candle-lighting times before your trip.',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                  <Camera className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Visiting Heritage Sites
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Many synagogues are locked and require a caretaker (gardien) to open them. Ask at your hotel or hire a local guide who knows the contacts.',
                  'Dress modestly when visiting synagogues and cemeteries. Men should bring a kippah; some sites provide them.',
                  'Photography is usually permitted inside synagogues but always ask first. Cemeteries require particular sensitivity.',
                  'Tipping the caretaker (20-50 MAD) is customary and expected. They maintain these sites with minimal funding.',
                  'A specialized Jewish heritage guide can transform your experience. The Casablanca Jewish community can recommend certified guides.',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                  <Plane className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Getting There &amp; Around
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Direct flights operate between Tel Aviv and Casablanca, Marrakech, and Rabat. Royal Air Maroc and El Al serve these routes.',
                  'Jewish heritage tours are offered by specialized operators who cover Fes, Marrakech, Essaouira, and Casablanca in 7-10 day itineraries.',
                  'Hiring a private driver for a self-paced heritage tour is excellent value in Morocco (600-900 MAD per day).',
                  'The best time for Jewish heritage travel is spring (March-May) or autumn (September-November) to coincide with Hiloula seasons and comfortable weather.',
                  'Hebrew is not widely spoken, but French and increasingly English will serve you well. Many older Moroccans in mellahs understand some Judeo-Arabic (Haketia).',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Discover Morocco&apos;s Jewish Legacy
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            From the ancient mellahs of Fes to the vibrant Jewish museum in Casablanca, Morocco&apos;s Jewish
            heritage tells one of the world&apos;s most remarkable stories of coexistence. Plan your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Heritage Tours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

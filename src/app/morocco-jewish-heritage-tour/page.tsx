import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  Globe,
  CheckCircle,
  Clock,
  BookOpen,
  Users,
  Lightbulb,
  Sparkles,
  MapPin,
  Compass,
  Heart,
  Landmark,
  Shield,
  Crown,
  Building,
  Star,
  Calendar,
  MessageCircle,
  Map,
  UtensilsCrossed,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Jewish Heritage Tour 2026 | Synagogues, Mellahs & Jewish Sites',
  description:
    'Complete guide to Jewish heritage in Morocco in 2026. Explore historic mellahs, synagogues like Slat al-Fassiyyin and Lazama, Jewish museums in Casablanca and Fes, ancient cemeteries, Essaouira Jewish quarter, Hiloula pilgrimages, and curated tour itineraries.',
  keywords: [
    'Morocco Jewish heritage',
    'Jewish sites Morocco',
    'Morocco Jewish tour',
    'mellah Morocco',
    'Jewish quarter Morocco',
    'Slat al-Fassiyyin synagogue',
    'Beth-El synagogue',
    'Lazama synagogue',
    'Jewish museum Casablanca',
    'Jewish museum Fes',
    'Essaouira Jewish heritage',
    'Hiloula Morocco',
    'Jewish cemetery Morocco',
    'Morocco Israel relations',
    'Jewish Moroccan cuisine',
    'mellah Marrakech',
    'mellah Fes',
  ],
  openGraph: {
    title: 'Morocco Jewish Heritage Tour 2026 | Synagogues, Mellahs & Jewish Sites',
    description:
      'Discover 2,000 years of Jewish life in Morocco: historic mellahs, restored synagogues, Jewish museums, ancient cemeteries, Hiloula pilgrimages, Jewish-Moroccan cuisine, and complete tour itineraries.',
    url: `${BASE_URL}/morocco-jewish-heritage-tour`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Historic mellah Jewish quarter in Morocco with traditional architecture and narrow lanes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Jewish Heritage Tour 2026 | Synagogues, Mellahs & Sites',
    description:
      '2,000 years of Jewish life in Morocco: mellahs, synagogues, museums, cemeteries, Hiloula pilgrimages, Jewish-Moroccan cuisine & tour itineraries.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-jewish-heritage-tour` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-jewish-heritage-tour`,
  name: 'Morocco Jewish Heritage Tour 2026 | Synagogues, Mellahs & Jewish Sites',
  description:
    'Complete guide to Jewish heritage in Morocco covering 2,000 years of history, historic mellahs (Jewish quarters), synagogues, Jewish museums, cemeteries, Hiloula pilgrimages, Jewish-Moroccan cuisine, Morocco-Israel relations, and curated heritage tour itineraries.',
  url: `${BASE_URL}/morocco-jewish-heritage-tour`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-jewish-heritage-tour`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Jewish Heritage Tour', item: `${BASE_URL}/morocco-jewish-heritage-tour` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many Jews live in Morocco today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of 2026, approximately 2,000 to 2,500 Jews live in Morocco, primarily in Casablanca, with smaller communities in Marrakech, Fes, Tangier, and Rabat. At its peak in the 1940s, the Moroccan Jewish population numbered around 250,000 to 300,000. Most emigrated to Israel, France, and Canada after 1948, though Morocco remains one of the most welcoming Arab countries for Jewish visitors and heritage tourism.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a mellah in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mellah is the historic Jewish quarter found in many Moroccan cities. The word "mellah" derives from the Arabic word for "salt," possibly referring to the Jewish community\'s historical role in salting the heads of executed criminals, or to the salty marshland where the first mellah was built. The oldest mellah was established in Fes in 1438. Unlike European ghettos, Moroccan mellahs were often built adjacent to the royal palace, reflecting the sultan\'s protection of the Jewish community.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you visit synagogues in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, several synagogues in Morocco are open to visitors. The most notable include Slat al-Fassiyyin in Fes (restored and open as a cultural site), the Lazama Synagogue in the Marrakech mellah, the Beth-El Synagogue in Casablanca (still active), and the Slat Lkahal Synagogue in Essaouira. Many synagogues have been restored with support from King Mohammed VI and the Moroccan government. Visitors of all faiths are welcome; modest dress is recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Museum of Moroccan Judaism in Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Museum of Moroccan Judaism (Musee du Judaisme Marocain) in Casablanca is the only Jewish museum in the Arab world. Opened in 1997, it houses Torah scrolls, menorahs, traditional clothing, photographs, and artifacts documenting 2,000 years of Jewish life in Morocco. The museum is located in the Oasis neighborhood and is open to visitors Sunday through Friday. It provides essential context for understanding the role of Jews in Moroccan society, commerce, and culture.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Hiloula pilgrimage in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Hiloula (also spelled Hillula) is a Jewish pilgrimage to the tomb of a revered rabbi or saint, celebrated with prayers, candle-lighting, music, and festive meals. Morocco has dozens of Hiloula sites, with the most famous being the tomb of Rabbi Amram Ben Diwan near Ouazzane, Rabbi Shlomo Ben Lhensh in Ouarzazate, and Rabbi Haim Pinto in Essaouira. Thousands of Moroccan Jews from Israel, France, and Canada return annually for these celebrations, which blend Jewish tradition with Moroccan hospitality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for Jewish travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is widely considered one of the safest and most welcoming destinations for Jewish travelers in the Arab world. King Mohammed VI has actively protected Jewish heritage sites, restored synagogues and cemeteries, and maintained diplomatic ties with Israel. The 2020 Abraham Accords further normalized Morocco-Israel relations, with direct flights operating between the two countries. Jewish travelers regularly visit Morocco for heritage tours, Hiloula pilgrimages, and general tourism without issues.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Jewish-Moroccan cuisine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jewish-Moroccan cuisine is a distinctive culinary tradition blending Jewish dietary laws (kashrut) with Moroccan flavors and techniques. Iconic dishes include dafina (the Shabbat slow-cooked stew, similar to cholent, with meat, chickpeas, potatoes, eggs, and wheat), fish with chermoula sauce, pastilla (savory-sweet pastry), marzipan-stuffed pastries, and preserved lemons. Many dishes now considered "Moroccan classics" have Jewish origins, and the cuisine has been carried to Israel, France, and beyond by the Moroccan Jewish diaspora.',
      },
    },
    {
      '@type': 'Question',
      name: 'How did Morocco protect Jews during World War II?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During World War II, Sultan Mohammed V (grandfather of the current king) is celebrated for protecting Morocco\'s Jewish population from Vichy French deportation orders. When the Vichy regime imposed anti-Jewish laws in 1941, Mohammed V reportedly told French officials, "There are no Jews in Morocco, only Moroccan subjects." He invited Jewish leaders to the throne celebration in defiance of Vichy directives and refused to enforce the harshest anti-Jewish measures. While the full extent of protection is debated by historians, the episode remains a powerful symbol of Moroccan-Jewish solidarity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happened to the Jewish community after Moroccan independence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After Moroccan independence in 1956 and the creation of Israel in 1948, the vast majority of Moroccan Jews emigrated. Between 1948 and 1967, approximately 250,000 Jews left Morocco, primarily for Israel (through operations like Operation Yachin), France, and Canada. Factors included Zionist aspirations, economic uncertainty, and regional tensions from the Arab-Israeli conflicts. Despite this exodus, Morocco maintained warmer relations with its Jewish diaspora than most Arab nations, and King Hassan II actively encouraged Moroccan Jews to maintain ties with their homeland.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: JEWISH HISTORY TIMELINE
   ═══════════════════════════════════════════════════════════════ */

const jewishTimeline = [
  {
    era: '2nd Century BC',
    title: 'Earliest Jewish Presence',
    detail: 'Jewish traders and settlers arrived in Morocco with Phoenician and Roman trade networks. Archaeological evidence, including tombstones with Hebrew inscriptions and menorahs, dates the earliest Jewish communities in North Africa to the 2nd century BC. Some traditions claim Jewish presence even earlier, following the destruction of the First Temple in 586 BC.',
    icon: Globe,
  },
  {
    era: '7th Century',
    title: 'Arab Conquest & Dhimmi Status',
    detail: 'With the Arab conquest of Morocco, Jews became dhimmis (protected non-Muslim subjects) under Islamic law. They paid the jizya tax in exchange for protection and religious freedom. Jewish communities became integral to trade, craftsmanship, and diplomatic networks across the Maghreb, serving as intermediaries between Muslim and Christian worlds.',
    icon: Shield,
  },
  {
    era: '1391-1492',
    title: 'Arrival of Sephardic Jews',
    detail: 'Waves of Spanish and Portuguese Jews (Sephardim) fled the Iberian Peninsula following the anti-Jewish pogroms of 1391 and the 1492 Expulsion from Spain. Morocco welcomed these refugees, who brought Ladino language, Andalusian culture, and advanced knowledge of medicine, astronomy, and commerce. They joined the existing indigenous Jewish communities (Toshavim).',
    icon: Users,
  },
  {
    era: '1438',
    title: 'First Mellah Established in Fes',
    detail: 'Sultan Abu Said Uthman III created the first official mellah (Jewish quarter) in Fes in 1438, relocating the Jewish community near the royal palace. This became the model for mellahs across Morocco. While confining, the mellahs also offered royal protection, and Jews developed thriving internal economies with their own markets, synagogues, schools, and courts.',
    icon: Building,
  },
  {
    era: '16th-18th Century',
    title: 'Golden Age of Jewish Diplomacy',
    detail: 'Moroccan sultans frequently appointed Jewish advisors, ambassadors, and trade negotiators. Families like the Pallache, Toledano, and Ben Attar dynasties served as diplomatic intermediaries between Morocco and European courts. Jews monopolized the sugar trade, minted coins, and managed customs in several port cities.',
    icon: Crown,
  },
  {
    era: '1912-1956',
    title: 'French Protectorate Era',
    detail: 'The French protectorate brought modernization but also imported European antisemitism. Vichy France imposed anti-Jewish laws in 1941, though Sultan Mohammed V resisted the harshest measures. The Alliance Israelite Universelle had already established modern schools for Jewish children starting in 1862, transforming education and creating a French-speaking Jewish elite.',
    icon: BookOpen,
  },
  {
    era: '1948-1967',
    title: 'Mass Emigration to Israel',
    detail: 'Following the creation of Israel and amid regional tensions, approximately 250,000 Moroccan Jews emigrated, mostly to Israel (via Operations Yachin and Mural), France, and Canada. By 1971, the Jewish population had dropped from its peak of roughly 300,000 to under 25,000. The departure transformed both Morocco and Israeli society, where Moroccan Jews became the largest Mizrahi community.',
    icon: Globe,
  },
  {
    era: '2020',
    title: 'Abraham Accords & Normalization',
    detail: 'In December 2020, Morocco normalized relations with Israel as part of the Abraham Accords, brokered by the United States. Direct flights now connect Casablanca to Tel Aviv. The accord accelerated heritage preservation, tourism, and cultural exchange. King Mohammed VI has continued restoring Jewish sites, including synagogues, cemeteries, and mellahs across the kingdom.',
    icon: Sparkles,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MAJOR SYNAGOGUES
   ═══════════════════════════════════════════════════════════════ */

const majorSynagogues = [
  { name: 'Slat al-Fassiyyin', location: 'Fes Mellah', period: '17th Century', description: 'One of the oldest and most beautiful synagogues in Morocco, restored in 2013 with support from the Moroccan government and international donors. Features a stunning turquoise-and-white interior with carved plaster, zellige tilework, and wooden galleries. Now a cultural center and museum open to all visitors.', icon: Landmark },
  { name: 'Lazama Synagogue', location: 'Marrakech Mellah', period: '16th Century', description: 'A hidden gem in the heart of the Marrakech mellah, the Lazama Synagogue features a peaceful inner courtyard with blue-and-white tiles and a prayer hall still used for occasional services. Named after a family of wealthy Sephardic donors, it is one of the best-preserved synagogues in southern Morocco.', icon: Building },
  { name: 'Beth-El Synagogue', location: 'Casablanca', period: '1947', description: 'The largest active synagogue in Morocco, Beth-El serves Casablanca remaining Jewish community. Its modernist Art Deco architecture reflects the mid-20th century prosperity of Casablanca Jews. Regular Shabbat and holiday services are still held, and visitors are welcome on weekdays.', icon: Star },
  { name: 'Temple Beth-El', location: 'Casablanca', period: '1930s', description: 'Not to be confused with the larger Beth-El, this smaller synagogue in the old mellah area showcases the earlier architectural style of Moroccan-Jewish worship spaces, with intimate proportions and traditional decorative elements blending Moorish and Jewish artistic traditions.', icon: Building },
  { name: 'Slat Lkahal', location: 'Essaouira', period: '19th Century', description: 'Essaouira once had a Jewish population making up nearly 40% of the city. The restored Slat Lkahal synagogue, along with the nearby Simon Attias Synagogue, stands as testimony to this vibrant past. The interior features painted wooden ceilings and a beautiful women gallery overlooking the prayer hall.', icon: Heart },
  { name: 'Ibn Danan Synagogue', location: 'Fes Mellah', period: '17th Century', description: 'Nestled in the Fes mellah, the Ibn Danan Synagogue was restored in the early 2000s. Its underground mikveh (ritual bath) is one of the few surviving examples in North Africa. The synagogue features a small but beautiful prayer hall with a carved wooden Torah ark and painted decorations.', icon: Landmark },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HISTORIC MELLAHS
   ═══════════════════════════════════════════════════════════════ */

const historicMellahs = [
  { city: 'Fes', established: '1438', highlights: 'The oldest mellah in Morocco, established by Sultan Abu Said Uthman III. Located near the Royal Palace in Fes el-Jdid, it contained over 20 synagogues at its peak, plus schools, markets, a Jewish court, and distinctive architecture with balconies and wooden window grilles unique to Jewish quarters.', icon: Crown },
  { city: 'Marrakech', established: '1557', highlights: 'Created by the Saadian dynasty, the Marrakech mellah (also called the Hay Essalam quarter) was one of the largest in Morocco. It housed the Lazama Synagogue, the Miaara Jewish cemetery (one of the largest in the Islamic world), and a vibrant market. Today, spice and textile souks occupy the old quarter.', icon: MapPin },
  { city: 'Essaouira (Mogador)', established: '18th Century', highlights: 'Essaouira was unique in that Jews and Muslims lived side by side rather than in a walled-off quarter. At its peak, Jews made up 40% of the population and dominated trade. The mellah area around Rue Sidi Mohammed Ben Abdallah retains Hebrew-inscribed doorways and the restored Slat Lkahal Synagogue.', icon: Globe },
  { city: 'Meknes', established: '17th Century', highlights: 'Sultan Moulay Ismail established the Meknes mellah near his imperial palace. The community prospered as royal advisors and traders. Today, the mellah retains its narrow streets and some original architecture, though most Jewish families departed after independence.', icon: Building },
  { city: 'Rabat-Sale', established: '17th Century', highlights: 'The twin cities of Rabat and Sale each had Jewish quarters. The Rabat mellah near the Kasbah of the Udayas housed families who served as diplomatic intermediaries with European powers. The Sale mellah was home to a community of Sephardic artisans and merchants.', icon: Landmark },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOUR ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const tourItinerary = [
  { day: 'Days 1-2', city: 'Casablanca', activities: 'Visit the Museum of Moroccan Judaism, Beth-El Synagogue, the old mellah district, and the Jewish section of the Ben Msik cemetery. Evening walk along the Corniche.', icon: Building },
  { day: 'Day 3', city: 'Rabat', activities: 'Explore the Rabat mellah near the Kasbah of the Udayas, visit the Jewish cemetery, and see the Chellah necropolis for broader historical context.', icon: Landmark },
  { day: 'Days 4-5', city: 'Fes', activities: 'Full day in the Fes mellah: Slat al-Fassiyyin Synagogue, Ibn Danan Synagogue with its underground mikveh, the Jewish cemetery (Cimetiere Juif), and the Dar Batha Museum. Second day for the Fes medina itself.', icon: Star },
  { day: 'Day 6', city: 'Meknes & Volubilis', activities: 'Morning in the Meknes mellah, then visit Volubilis (Roman ruins with evidence of ancient Jewish presence in the Maghreb) and the Moulay Idriss Zerhoun pilgrimage town.', icon: Globe },
  { day: 'Days 7-8', city: 'Marrakech', activities: 'Visit the Lazama Synagogue, the Marrakech mellah quarter, the vast Miaara Jewish cemetery, and the Marrakech Museum. Evening on Jemaa el-Fna square for context on Moroccan multicultural life.', icon: Heart },
  { day: 'Days 9-10', city: 'Essaouira', activities: 'Explore the Slat Lkahal and Simon Attias Synagogues, the Jewish quarter, Haim Pinto Synagogue, the old Jewish cemetery, and the former home of the Corcos merchant family. Enjoy Essaouira seafood and the Atlantic coast.', icon: Compass },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: JEWISH-MOROCCAN CUISINE
   ═══════════════════════════════════════════════════════════════ */

const jewishMoroccanDishes = [
  { name: 'Dafina (Skhina)', detail: 'The quintessential Jewish-Moroccan Shabbat dish, slow-cooked overnight from Friday evening. Contains beef or lamb, chickpeas, whole potatoes, eggs cooked until brown, wheat berries, and warming spices like cinnamon, turmeric, and cumin. Each family had its own variation.', icon: UtensilsCrossed },
  { name: 'Fish with Chermoula', detail: 'Whole fish baked or fried with a marinade of cilantro, garlic, cumin, paprika, and preserved lemons. A Friday night staple in Moroccan Jewish homes, reflecting the Talmudic injunction to honor the Sabbath with fish. Essaouira and coastal communities were renowned for their preparations.', icon: Star },
  { name: 'Pastilla (Bastilla)', detail: 'Many food historians trace the origins of Morocco famous savory-sweet pigeon or chicken pie to the Jewish community, who may have adapted it from an Andalusian Sephardic recipe. The layers of warqa pastry, spiced meat, almonds, and powdered sugar reflect the sophisticated Judeo-Moorish culinary tradition.', icon: Heart },
  { name: 'Marzipan & Almond Pastries', detail: 'Moroccan Jewish families were renowned for their pastry-making, especially almond-based sweets for holidays like Mimouna and Purim. Macarons, cornes de gazelle filled with almond paste, and marzipan fruits are hallmarks of this confectionery tradition that traveled with emigrants to Israel and France.', icon: Sparkles },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HERITAGE TRAVELER TIPS
   ═══════════════════════════════════════════════════════════════ */

const heritageTravelerTips = [
  'Hire a specialized Jewish heritage guide, especially in Fes and Marrakech. They have keys to synagogues and cemeteries that may be locked, and can provide context that transforms a visit from sightseeing into a meaningful experience.',
  'Dress modestly when visiting synagogues and cemeteries. Men should bring a head covering (kippah) for synagogue visits. Women should cover shoulders and knees. Most synagogue caretakers can provide a kippah if needed.',
  'The best time for a Jewish heritage tour is spring (March to May) or autumn (September to November), when temperatures are comfortable and several Hiloula pilgrimages take place. Avoid planning visits to Jewish sites on Shabbat (Friday evening to Saturday evening).',
  'Photography is generally permitted in restored synagogues and museums but always ask the caretaker first. Some cemeteries may restrict photography out of respect. Never photograph active worshippers without explicit permission.',
  'Kosher food is available in Casablanca (restaurants and a kosher butcher) and can be arranged in Marrakech with advance notice. Many riads and hotels will accommodate dietary requirements if informed at booking.',
  'Small tips (20-50 MAD) for synagogue and cemetery caretakers (gardiens) are customary and appreciated. These individuals often maintain heritage sites with minimal funding and rely on visitor contributions.',
  'Combine your Jewish heritage tour with visits to nearby general historical sites for context. The Fes mellah is steps from the Royal Palace; the Marrakech mellah borders the Bahia Palace and the souks. Understanding the broader Moroccan setting enriches the Jewish heritage experience.',
  'Several tour operators specialize in Jewish heritage itineraries, including Heritage Morocco Tours and Morocco Jewish Tours. Booking through a specialist ensures access to sites that independent travelers may find difficult to enter.',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/jewish-heritage',
    title: 'Jewish Heritage in Morocco',
    description: 'Broad overview of Jewish heritage across Morocco, from synagogues and cemeteries to cultural traditions and the modern Jewish community.',
    icon: Heart,
  },
  {
    href: '/morocco-history-guide',
    title: 'History of Morocco Guide',
    description: 'Complete guide to 3,000 years of Moroccan history, from prehistoric origins and Berber dynasties to independence and modern reforms.',
    icon: BookOpen,
  },
  {
    href: '/history',
    title: 'Morocco History Overview',
    description: 'A concise overview of Moroccan history covering all major periods, dynasties, and events that shaped the kingdom.',
    icon: Globe,
  },
  {
    href: '/culture',
    title: 'Moroccan Culture Guide',
    description: 'Deep dive into Moroccan traditions, festivals, arts, music, and the rich cultural mosaic that makes the kingdom unique.',
    icon: Users,
  },
  {
    href: '/fes-guide',
    title: 'Fes City Guide',
    description: 'Explore the spiritual and intellectual capital of Morocco, home to the world oldest university, the largest medina, and a storied mellah.',
    icon: MapPin,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoJewishHeritageTourPage() {
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
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Jewish Heritage Tour</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4" />
            Jewish Heritage &amp; Culture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Jewish Heritage
            <br className="hidden md:block" /> Tour Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Two thousand years of Jewish life in Morocco &mdash; from ancient mellahs and restored
            synagogues to living traditions, Hiloula pilgrimages, and a cuisine that traveled the world.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Story of Coexistence Spanning Two Millennia
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is home to one of the oldest and most remarkable Jewish communities in the
                world. For over 2,000 years, Jews have lived, worshipped, traded, and created
                alongside their Muslim neighbors in a relationship of coexistence that has few
                parallels in the broader Middle East and North Africa. At its height in the 1940s,
                Morocco&apos;s Jewish population numbered approximately 250,000 to 300,000 &mdash;
                making it the largest Jewish community in the Arab world.
              </p>
              <p>
                Today, while only about 2,000 to 2,500 Jews remain in Morocco, the kingdom has
                emerged as a global leader in preserving Jewish heritage. Under King Mohammed VI,
                synagogues have been restored, cemeteries renovated, mellahs (Jewish quarters) revitalized,
                and Jewish history formally integrated into the national narrative. The 2020 Abraham
                Accords opened a new chapter, with direct flights between Morocco and Israel and a
                surge in heritage tourism.
              </p>
              <p>
                This guide takes you through the full story of Jewish Morocco &mdash; the history,
                the places you can visit, the food, the spiritual traditions, and a complete tour
                itinerary for experiencing this extraordinary heritage firsthand. Whether you are
                tracing family roots or simply curious about one of the world&apos;s most remarkable
                stories of interfaith coexistence, Morocco offers a journey unlike any other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Jewish Morocco at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about the Jewish heritage of Morocco that every visitor should know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Jewish Presence', value: '2,000+ Years', detail: 'Among the oldest Jewish communities in the world', icon: Globe },
              { label: 'Peak Population', value: '~300,000', detail: 'Largest Jewish community in the Arab world (1940s)', icon: Users },
              { label: 'Historic Mellahs', value: '30+ Cities', detail: 'Jewish quarters established across Morocco', icon: Building },
              { label: 'Today', value: '~2,500 Jews', detail: 'Primarily in Casablanca, with heritage sites preserved', icon: Heart },
            ].map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <FactIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {fact.value}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{fact.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{fact.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Jewish History Timeline ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Timeline of Jewish Life in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the earliest settlements to the Abraham Accords &mdash; the defining moments of Moroccan Jewish history.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {jewishTimeline.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.era} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.title}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {item.era}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Historic Mellahs ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Historic Mellahs (Jewish Quarters)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The mellahs of Morocco &mdash; walled Jewish quarters that sheltered thriving communities for centuries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {historicMellahs.map((mellah) => {
              const MellahIcon = mellah.icon;
              return (
                <div key={mellah.city} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <MellahIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        Mellah of {mellah.city}
                      </h3>
                      <p className="text-xs font-semibold text-[var(--color-gold)]">Established: {mellah.established}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{mellah.highlights}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Why &ldquo;Mellah&rdquo;?
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  The word &ldquo;mellah&rdquo; comes from the Arabic for &ldquo;salt.&rdquo; The most
                  common explanation is that the first mellah in Fes was built on a former salt marsh.
                  Another theory links it to a historical duty of the Jewish community to salt the heads
                  of executed prisoners for public display. Unlike European ghettos, mellahs were typically
                  located near the royal palace, reflecting the sultan&apos;s role as protector of the
                  Jewish community under Islamic law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Major Synagogues ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Synagogues You Can Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From beautifully restored historic synagogues to the last active houses of worship.
          </p>

          <div className="space-y-4">
            {majorSynagogues.map((synagogue) => {
              const SynIcon = synagogue.icon;
              return (
                <div key={synagogue.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SynIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {synagogue.name}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {synagogue.period}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mb-2">{synagogue.location}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{synagogue.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Jewish Museums & Cemeteries ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Jewish Museums &amp; Cemeteries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where to deepen your understanding of Jewish-Moroccan history and honor the departed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Museum of Moroccan Judaism, Casablanca', detail: 'The only Jewish museum in the Arab world, opened in 1997 in the Oasis neighborhood. Houses Torah scrolls, Hanukkah menorahs, traditional ceremonial garments, historic photographs, and documents spanning two millennia. A must-visit for anyone interested in the story of Moroccan Jews. Open Sunday through Friday.', icon: BookOpen },
              { title: 'Dar Batha Museum, Fes', detail: 'While not exclusively Jewish, this museum in a 19th-century palace contains exhibits on the multiconfessional history of Fes, including artifacts from the mellah and examples of Jewish-Moroccan decorative arts. A helpful companion to a visit to the Fes mellah and synagogues.', icon: Landmark },
              { title: 'Miaara Cemetery, Marrakech', detail: 'One of the largest Jewish cemeteries in the Islamic world, the Miaara cemetery contains thousands of whitewashed tombs dating back centuries. Located outside the mellah walls, it is a powerful and moving site. Notable graves include rabbis, community leaders, and ordinary families whose stories span generations.', icon: Heart },
              { title: 'Jewish Cemetery, Fes', detail: 'The Fes Jewish cemetery near the mellah is one of the oldest in Morocco. Its rows of white-painted tombs, many inscribed with Hebrew epitaphs, are maintained by the Moroccan government. The cemetery offers panoramic views of the mellah and the Fes el-Jdid palace walls.', icon: MapPin },
              { title: 'Jewish Cemetery, Essaouira', detail: 'Essaouira old Jewish cemetery near the medina walls contains the graves of merchants, rabbis, and community leaders who made the port city a thriving center of Jewish-Muslim commerce. Several tombs are pilgrimage destinations for Moroccan Jews during annual Hiloula celebrations.', icon: Star },
              { title: 'Bayt Dakira, Essaouira', detail: 'Also known as the House of Memory, this cultural center in a restored riad in the Essaouira mellah is dedicated to preserving the memory of Jewish life in the city. It includes exhibition spaces, a small synagogue, and community archives. Inaugurated with royal patronage as part of Morocco heritage preservation program.', icon: Globe },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Hiloula Pilgrimages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hiloula Pilgrimages &amp; Spiritual Traditions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Sacred celebrations that draw Moroccan Jews from around the world back to their ancestral homeland.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {[
                { title: 'Rabbi Amram Ben Diwan (Ouazzane)', detail: 'The most famous Hiloula in Morocco, held annually at the tomb of the 18th-century Palestinian rabbi near Ouazzane. Thousands of pilgrims from Israel, France, and Canada gather for three days of prayer, candle-lighting, and celebration. The event draws both Jewish and Muslim attendees, reflecting Morocco tradition of shared veneration.', icon: Star },
                { title: 'Rabbi Haim Pinto (Essaouira)', detail: 'The Pinto family produced several generations of revered rabbis in Essaouira. The Hiloula at the tomb of Rabbi Haim Pinto draws visitors every year to the coastal city. The Pinto Synagogue has been restored as a site of pilgrimage and cultural heritage, and the family tomb is a centerpiece of Jewish Essaouira.', icon: Heart },
                { title: 'Rabbi Shlomo Ben Lhensh (Ouarzazate)', detail: 'This Hiloula in the desert city of Ouarzazate attracts pilgrims who travel deep into southern Morocco. The celebration combines prayer at the rabbi tomb with communal meals, music, and storytelling. It represents the reach of Jewish communities even into Morocco remote interior regions.', icon: Globe },
                { title: 'Mimouna Festival', detail: 'Celebrated at the end of Passover, Mimouna is a uniquely Moroccan-Jewish holiday that has become one of Israel largest annual celebrations. In Morocco, Jewish families would open their homes to Muslim neighbors who brought flour and yeast (forbidden during Passover). The tradition of sharing sweets, mufleta crepes, and hospitality embodies the spirit of interfaith coexistence.', icon: Users },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Jewish-Moroccan Cuisine ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Jewish-Moroccan Cuisine
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A culinary tradition born from kashrut and Moroccan flavors that traveled the world with the diaspora.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jewishMoroccanDishes.map((dish) => {
              const DishIcon = dish.icon;
              return (
                <div key={dish.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DishIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {dish.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{dish.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Morocco-Israel Relations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco-Israel Relations &amp; the Abraham Accords
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How the historic ties between Moroccan Jews and their homeland shaped modern diplomacy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'King Hassan II & Secret Diplomacy', detail: 'King Hassan II maintained covert relations with Israel for decades, hosting secret Israeli-Arab negotiations and allowing Moroccan Jews to emigrate freely. His pragmatic approach laid the groundwork for future normalization. He famously met Israeli Prime Minister Shimon Peres in 1986 and facilitated the early stages of the Oslo Peace Process.', icon: Crown },
              { title: 'The Abraham Accords (December 2020)', detail: 'Morocco became the fourth Arab state to normalize relations with Israel under the US-brokered Abraham Accords. In exchange, the United States recognized Moroccan sovereignty over the Western Sahara. The agreement led to direct flights, diplomatic exchanges, trade agreements, and a major boost in heritage tourism.', icon: CheckCircle },
              { title: 'Heritage Preservation Under Mohammed VI', detail: 'King Mohammed VI has made Jewish heritage preservation a cornerstone of national cultural policy. Major restoration projects include synagogues in Fes, Marrakech, and Essaouira, cemeteries across the country, the renovation of the Casablanca mellah, and the creation of the Bayt Dakira cultural center. Jewish history is taught in Moroccan schools.', icon: Shield },
              { title: 'Diaspora Connections', detail: 'An estimated 700,000 to 1 million Israelis trace their roots to Morocco, making them the largest single-origin Jewish community in Israel. Moroccan Jews in Israel, France, and Canada maintain deep emotional ties to their homeland, returning for Hiloula pilgrimages, family visits, and heritage tours. The Moroccan-Israeli cultural exchange is one of the richest in the region.', icon: Heart },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Suggested Tour Itinerary ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            10-Day Jewish Heritage Tour Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A curated route through Morocco&apos;s most significant Jewish heritage sites, from Casablanca to Essaouira.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {tourItinerary.map((stop) => {
                const StopIcon = stop.icon;
                return (
                  <div key={stop.day} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                      <StopIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {stop.city}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {stop.day}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{stop.activities}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Tour Planning Tips
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Several specialized tour operators offer Jewish heritage itineraries in Morocco, with
                  expert guides who can arrange access to synagogues and cemeteries that may not be
                  regularly open. Book well in advance for Hiloula season (typically spring and autumn).
                  Kosher food options are available in Casablanca and Marrakech, and many hotels can
                  accommodate dietary needs with advance notice. Prices vary by season; expect from 800 MAD
                  per day for a guided heritage tour. Seasonal pricing can change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Heritage Traveler Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tips for Jewish Heritage Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice for getting the most out of your Jewish heritage tour in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {heritageTravelerTips.map((tip, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[var(--color-accent)]">{i + 1}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Essaouira Jewish Heritage ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essaouira: A Special Case of Jewish-Muslim Coexistence
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Atlantic port city where Jews made up nearly half the population and lived without walls.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Essaouira (formerly Mogador) holds a unique place in Moroccan Jewish history. Unlike other
                cities where Jews lived in walled mellahs, Essaouira&apos;s Jewish community was integrated
                into the city fabric from its founding in the 18th century by Sultan Mohammed III. He
                invited Jewish merchants (known as &ldquo;tujjar al-sultan&rdquo; or merchants of the king)
                to develop the port as a gateway for Atlantic trade.
              </p>
              <p>
                At its peak in the mid-19th century, Jews comprised approximately 40% of Essaouira&apos;s
                population. Families like the Corcos, Afriat, and Elmaleh dominated international trade,
                acting as consular agents for European powers. The city had numerous synagogues, a
                thriving mellah area (though less rigidly defined than in Fes or Marrakech), and a
                cosmopolitan culture where Hebrew, Arabic, French, and Amazigh were all spoken.
              </p>
              <p>
                The Corcos family stands out as perhaps the most influential Jewish family in
                Essaouira&apos;s history. Serving as British vice-consuls, they facilitated trade between
                Morocco and Europe for generations. Their grand residence in the medina, now partially
                restored, is a stop on the Jewish Heritage Trail. Other notable families &mdash; the
                Pinto rabbinical dynasty, the Elmaleh merchants, and the Afriat traders &mdash; each
                left architectural and cultural marks that remain visible in the city&apos;s streetscape.
              </p>
              <p>
                Today, Essaouira preserves this legacy through the restored Slat Lkahal Synagogue, the
                Bayt Dakira cultural center (House of Memory), the old Jewish cemetery overlooking the
                Atlantic, and an annual Atlantic Andalusia Festival celebrating the shared Judeo-Muslim
                musical heritage of the city. The Essaouira Jewish Heritage Trail &mdash; a self-guided
                walk connecting synagogues, the cemetery, merchant houses, and the Bayt Dakira &mdash;
                is one of the most rewarding heritage walks in all of Morocco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about Jewish heritage tourism in Morocco.
          </p>

          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Morocco Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue exploring Moroccan heritage, history, and culture with these essential guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="group">
                  <div className="card-moroccan p-5 h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors mt-2">
                        {guide.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{guide.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                      Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <Heart className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Walk Through 2,000 Years of Jewish Heritage
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            From the ancient mellahs of Fes and Marrakech to the restored synagogues of Essaouira,
            from the only Jewish museum in the Arab world to the Hiloula celebrations that draw
            thousands home each year &mdash; Morocco&apos;s Jewish heritage is not a relic of the past.
            It is a living story of coexistence, resilience, and renewal. Come and walk through it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/jewish-heritage"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Explore Jewish Heritage
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-history-guide"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              Morocco History Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3 h-3 inline mr-1" />
            Historical details are based on widely accepted scholarship as of March 2026.
            Some dates, especially for early periods, are approximate. Site opening hours, entry fees,
            and tour prices may vary by season. Seasonal pricing can change.
          </p>
        </div>
      </section>
    </>
  );
}

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
  ShieldCheck,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  MessageCircleQuestion,
  Landmark,
  ScrollText,
  CalendarDays,
  Globe,
  History,
  Compass,
  Church,
  Utensils,
  Camera,
  HandHeart,
  Lightbulb,
  Route,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-jewish-heritage`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title:
    'Morocco Jewish Heritage Guide 2026 | Mellahs, Synagogues & History',
  description:
    'Explore 2,000+ years of Jewish life in Morocco. Visit mellahs in Fes, Marrakech, and Essaouira, standing synagogues, the Museum of Moroccan Judaism in Casablanca, Hiloula pilgrimage festivals, Jewish cemeteries, and the legacy of coexistence under Mohammed V during WWII.',
  keywords: [
    'Morocco Jewish heritage',
    'Jewish history Morocco',
    'mellah Fes Morocco',
    'mellah Marrakech',
    'synagogues Morocco',
    'Museum of Moroccan Judaism Casablanca',
    'Essaouira Jewish quarter',
    'Jewish cemetery Morocco',
    'Hiloula festival Morocco',
    'Mohammed V Jews WWII',
    'Jewish Moroccan cuisine',
    'Morocco Jewish pilgrimage',
    'Slat al-Azama synagogue Marrakech',
    'Ibn Danan synagogue Fes',
    'Jewish heritage tour Morocco 2026',
    'mellah Jewish quarter Morocco',
    'Morocco interfaith history',
    'Moroccan Jewish diaspora',
  ],
  openGraph: {
    title:
      'Morocco Jewish Heritage Guide 2026 | Mellahs, Synagogues & History',
    description:
      'A comprehensive guide to Jewish heritage across Morocco: ancient mellahs, restored synagogues, the only Jewish museum in the Arab world, Hiloula pilgrimages, WWII history under Mohammed V, and 2,000+ years of shared culture.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-jewish-heritage.webp`,
        width: 1200,
        height: 630,
        alt: 'Interior of a restored Moroccan synagogue with ornate tilework and carved wooden ark',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Morocco Jewish Heritage Guide 2026 | Mellahs, Synagogues & History',
    description:
      'Discover 2,000+ years of Jewish life in Morocco: mellahs, synagogues, the Casablanca Jewish museum, Hiloula festivals, and Mohammed V\'s protection during WWII.',
    images: [`${BASE_URL}/images/hero-jewish-heritage.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   FAQ DATA
   ================================================================ */

const faqItems = [
  {
    q: 'Are Jewish heritage sites in Morocco open to all visitors?',
    a: 'Yes. Synagogues, mellahs, Jewish cemeteries, and the Museum of Moroccan Judaism in Casablanca welcome visitors of all faiths. Some synagogues may require advance contact with a local caretaker. Cemeteries are generally open during daylight hours. Respectful dress is expected at all religious sites.',
  },
  {
    q: 'How many Jews still live in Morocco today?',
    a: 'Approximately 2,000 to 3,000 Jewish Moroccans remain as of 2026, down from a peak of around 250,000 in the late 1940s. The largest community is in Casablanca, with smaller groups in Marrakech, Fes, Rabat, and Tangier. Morocco has the largest Jewish population of any Arab-majority country.',
  },
  {
    q: 'What is a mellah?',
    a: 'A mellah is a historic Jewish quarter found in Moroccan cities. The word likely derives from the Arabic for "salt," referencing one origin theory tied to salt-trading or salt-preservation duties. Mellahs were established from the 15th century onward. They typically featured narrow streets, balconied houses, synagogues, and cemeteries within or adjacent to the medina walls.',
  },
  {
    q: 'Can I attend a Hiloula festival in Morocco?',
    a: 'Yes, several Hiloula pilgrimages are open to respectful visitors. The largest gatherings occur at the tomb of Rabbi Amram ben Diwan near Ouezzane (typically in spring) and the Lag BaOmer pilgrimage at various saints\' tombs. Dates follow the Hebrew calendar. Contact the Jewish community council in Casablanca for current schedules.',
  },
  {
    q: 'Did Mohammed V protect Moroccan Jews during World War II?',
    a: 'Yes. When the Vichy French administration pressured Morocco to enforce anti-Jewish laws, Sultan Mohammed V resisted full implementation. He invited Jewish leaders to the 1941 throne celebration, publicly rejected the distinction between Jewish and Muslim subjects, and worked to limit the impact of Vichy racial statutes. No Moroccan Jews were deported to death camps.',
  },
  {
    q: 'What is the Museum of Moroccan Judaism in Casablanca?',
    a: 'The only Jewish museum in the Arab world, located in the Oasis neighborhood. It houses Torah scrolls, Hanukkah lamps, traditional clothing, photographs, and reconstructed synagogue interiors. Admission from 40 MAD. Open Sunday through Friday, closed Saturdays and Jewish holidays.',
  },
  {
    q: 'Is it safe for Jewish travelers to visit Morocco?',
    a: 'Morocco is widely considered one of the safest destinations in the Arab world for Jewish travelers. The government actively preserves Jewish heritage sites, and the 2011 constitution formally recognizes the Hebraic tributary as part of Moroccan identity. Security is present at active synagogues and community centers. Standard travel precautions apply as with any destination.',
  },
  {
    q: 'How long do I need to explore Jewish heritage sites in Morocco?',
    a: 'A focused itinerary covering Casablanca, Marrakech, Fes, and Essaouira requires 7 to 10 days. Adding Meknes, Ouezzane, and Sefrou means 12 to 14 days. Private guided heritage tours can be arranged from 2,500 MAD per day. Seasonal pricing can change.',
  },
];

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Jewish Heritage Guide 2026',
  description:
    'Comprehensive guide to 2,000+ years of Jewish heritage in Morocco covering mellahs, synagogues, cemeteries, the Museum of Moroccan Judaism, Hiloula pilgrimages, and interfaith history.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-jewish-heritage.webp`,
  author: {
    '@type': 'Organization',
    name: 'City Tours Morocco',
    url: BASE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'City Tours Morocco',
    url: BASE_URL,
  },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Morocco Jewish Heritage Guide',
        item: PAGE_URL,
      },
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
   DATA: HISTORIC MELLAHS
   ================================================================ */

const mellahs: {
  city: string;
  founded: string;
  highlights: string[];
  description: string;
  icon: typeof MapPin;
}[] = [
  {
    city: 'Fes el-Jedid (Fes)',
    founded: '1438',
    icon: Landmark,
    highlights: [
      'Oldest mellah in Morocco',
      'Ibn Danan Synagogue (restored)',
      'Habarim Jewish Cemetery',
      'Rabbi Vidal Hasserfaty Synagogue',
    ],
    description:
      'The first mellah in Morocco, established by the Marinid dynasty in 1438 adjacent to the royal palace. The quarter features distinctive balconied windows facing outward, interior courtyards, and multi-story houses. Today the mellah retains its street layout. The restored Ibn Danan Synagogue, with its mikve (ritual bath) intact in the basement, is the most visited Jewish monument in Fes.',
  },
  {
    city: 'Marrakech',
    founded: '1557',
    icon: Building,
    highlights: [
      'Slat al-Azama Synagogue',
      'Lazama Synagogue',
      'Miaara Jewish Cemetery (largest in Morocco)',
      'Spice market adjacency',
    ],
    description:
      'Established under the Saadian dynasty near Place des Ferblantiers, this grew into the largest Jewish quarter in Morocco. The Miaara cemetery holds thousands of whitewashed tombs across a hillside. The Slat al-Azama synagogue, restored with turquoise tilework and carved stucco, hosts occasional services and is open to visitors.',
  },
  {
    city: 'Essaouira (Mogador)',
    founded: '1760s',
    icon: Globe,
    highlights: [
      'Slat Lkahal Synagogue',
      'Bayt Dakira (House of Memory)',
      'Merchant houses on Rue Siaghine',
      'Jewish cemetery near the beach',
    ],
    description:
      'Sultan Mohammed III invited Jewish traders (tujjar al-sultan) to develop Essaouira in the 18th century. By the 1880s, Jews made up nearly 40 percent of the population. The mellah was more integrated than in other cities, with families often sharing streets. Bayt Dakira, inaugurated in 2020, serves as a museum preserving the city\'s Jewish-Muslim shared heritage.',
  },
  {
    city: 'Meknes',
    founded: '17th century',
    icon: Crown,
    highlights: [
      'Mellah near the Royal Granaries',
      'Historic cemetery',
      'Adjacent to Moulay Ismail complex',
    ],
    description:
      'The Meknes mellah was established during Sultan Moulay Ismail\'s reign. Located near the imperial granaries, the quarter housed artisans, jewelers, and traders. The Jewish cemetery contains graves dating back several centuries, and former synagogue structures remain identifiable by their architecture.',
  },
];

/* ================================================================
   DATA: KEY SYNAGOGUES
   ================================================================ */

const synagogues: {
  name: string;
  location: string;
  status: string;
  detail: string;
}[] = [
  {
    name: 'Slat al-Azama',
    location: 'Marrakech Mellah',
    status: 'Active for special services; open to visitors',
    detail:
      'Originally built in 1492 by Sephardic Jews expelled from Spain (the Megorashim), this synagogue was restored in the early 2000s. Its name means "Synagogue of the Exiles." The interior features turquoise and white tilework, carved cedarwood ceilings, and a central bimah. Occasional Shabbat services are held when enough community members gather. Entry from 30 MAD.',
  },
  {
    name: 'Ibn Danan Synagogue',
    location: 'Fes Mellah',
    status: 'Museum and heritage site; fully restored',
    detail:
      'Dating to the 17th century and restored in the late 1990s with support from UNESCO, this synagogue preserves an underground mikve (ritual bath), a carved wooden ark, and painted walls. It is the best-documented synagogue in Fes and provides the clearest picture of Moroccan Jewish liturgical architecture. Entry from 20 MAD.',
  },
  {
    name: 'Temple Beth-El',
    location: 'Casablanca',
    status: 'Active synagogue with regular services',
    detail:
      'The main synagogue of Casablanca\'s Jewish community, built in mid-20th-century modernist style. Beth-El holds regular Shabbat and holiday services. Contact the community office in advance for Shabbat visits.',
  },
  {
    name: 'Slat Lkahal',
    location: 'Essaouira Medina',
    status: 'Restored heritage site',
    detail:
      'Restored as part of the Bayt Dakira complex, Slat Lkahal preserves Essaouira\'s pluralistic heritage. The adjacent museum contextualizes Jewish life in Mogador with photographs, documents, and ceremonial objects. Entry from 20 MAD.',
  },
  {
    name: 'Lazama Synagogue',
    location: 'Marrakech Mellah',
    status: 'Active with regular prayer services',
    detail:
      'Founded by Megorashim (Jews expelled from Iberia), it sits behind an unassuming doorway opening onto an Andalusian courtyard. The painted wooden ceiling, carved stucco, and iron-railed bimah make it a masterpiece of Moroccan-Jewish architecture. Entry from 30 MAD.',
  },
];

/* ================================================================
   DATA: HISTORICAL TIMELINE
   ================================================================ */

const timeline: {
  year: string;
  event: string;
  detail: string;
}[] = [
  {
    year: '3rd century BCE',
    event: 'Earliest Jewish Presence',
    detail:
      'Archaeological evidence and ancient accounts suggest Jewish traders and settlers arrived in North Africa alongside Phoenician colonists. Jewish communities took root in what is now northern Morocco, predating the Arab conquest by nearly a millennium.',
  },
  {
    year: '70 CE',
    event: 'Post-Temple Diaspora',
    detail:
      'After the destruction of the Second Temple in Jerusalem by Rome, additional waves of Jewish refugees settled across North Africa, strengthening existing communities in Morocco.',
  },
  {
    year: '7th-8th century',
    event: 'Islamic Conquest & Dhimmi Status',
    detail:
      'Arab armies brought Islam to Morocco. Jewish communities gained dhimmi (protected minority) status under Islamic law, paying the jizya tax in exchange for religious freedom and communal autonomy. This framework governed Jewish-Muslim relations for centuries.',
  },
  {
    year: '1438',
    event: 'First Mellah Established in Fes',
    detail:
      'The Marinid Sultan Abu Said Uthman III relocated the Jewish community of Fes to a new quarter adjacent to the royal palace in Fes el-Jedid. This became the first formal mellah, a model later replicated across Moroccan cities.',
  },
  {
    year: '1492',
    event: 'Sephardic Expulsion from Spain',
    detail:
      'The Alhambra Decree expelled Jews from Spain. Tens of thousands of Sephardic Jews (Megorashim) fled to Morocco, joining the existing Toshavim (native Moroccan Jewish) communities. This influx brought Castilian language, Ladino liturgy, and Andalusian cultural traditions that permanently reshaped Moroccan Jewish identity.',
  },
  {
    year: '16th-18th century',
    event: 'Saadian, Alaouite & Essaouira Eras',
    detail:
      'Jewish communities expanded under the Saadian dynasty; the Marrakech mellah grew into the largest in Morocco. Under the Alaouites, Jewish advisors served in diplomatic and financial roles. In the 1760s, Sultan Mohammed III recruited Jewish merchants (tujjar al-sultan) to manage the new port of Essaouira, where Jews eventually comprised nearly 40 percent of the population.',
  },
  {
    year: '1860s-1912',
    event: 'European Influence & Alliance Schools',
    detail:
      'The Alliance Israelite Universelle established French-language schools across Morocco, offering modern education to Jewish youth. This period saw increasing Jewish participation in international trade, with families in Essaouira, Tangier, and Casablanca building commercial networks spanning Europe and the Americas.',
  },
  {
    year: '1940-1943',
    event: 'Vichy Period & Mohammed V',
    detail:
      'Under Vichy French administration, anti-Jewish statutes were formally enacted in Morocco. Sultan Mohammed V resisted the spirit of these laws, limiting their enforcement and publicly expressing solidarity with his Jewish subjects. No Moroccan Jews were deported to European death camps.',
  },
  {
    year: '1948-1967',
    event: 'Mass Emigration',
    detail:
      'Following Israeli independence in 1948, large-scale emigration began. The Jewish population dropped from roughly 250,000 to under 50,000 by the mid-1960s. Most emigrated to Israel, with others going to France, Canada, and South America.',
  },
  {
    year: '2011',
    event: 'Constitutional Recognition',
    detail:
      'The new Moroccan constitution formally recognized the Hebraic tributary as one of the streams that nourish Moroccan national identity. This constitutional acknowledgment was significant in the Arab world.',
  },
  {
    year: '2020',
    event: 'Abraham Accords & Heritage Revival',
    detail:
      'Morocco normalized relations with Israel as part of the Abraham Accords. This led to increased heritage tourism, restoration projects, and direct flights between Casablanca and Tel Aviv. Morocco invested in restoring Jewish cemeteries, synagogues, and cultural sites across the country.',
  },
];

/* ================================================================
   DATA: JEWISH-MOROCCAN CUISINE OVERLAP
   ================================================================ */

const cuisineItems: {
  dish: string;
  description: string;
  connection: string;
}[] = [
  {
    dish: 'Dafina (Skhina)',
    description:
      'A slow-cooked Shabbat stew of meat, potatoes, chickpeas, eggs, wheat berries, and spices, left on a low fire from Friday afternoon through Saturday lunch.',
    connection:
      'The direct ancestor of the Sephardic hamin/cholent tradition. Moroccan Muslims adopted a parallel dish, also called skhina, prepared for special occasions.',
  },
  {
    dish: 'Pastilla (Sephardic Origins)',
    description:
      'The flaky, layered pie combining pigeon or chicken with almonds, cinnamon, and powdered sugar originated in Andalusian kitchens.',
    connection:
      'Many food historians trace pastilla to the Sephardic Jews and Moors who arrived from Spain, blending savory and sweet in a distinctly Andalusian manner.',
  },
  {
    dish: 'Matbucha',
    description:
      'A cooked salad of tomatoes, roasted peppers, garlic, and chili, served as a mezze or spread.',
    connection:
      'A staple in both Moroccan Jewish and Muslim households, matbucha traveled with Moroccan Jews to Israel where it became a foundational dish of Mizrahi Israeli cuisine.',
  },
  {
    dish: 'Mufleta & the Mimouna',
    description:
      'Thin, buttery crepes served during the Mimouna celebration at the end of Passover, with honey and butter. Friday couscous with seven vegetables was another shared tradition.',
    connection:
      'The Mimouna festival, unique to Moroccan Jews, involved Muslim neighbors bringing flour and butter to Jewish homes after Passover. The shared Friday couscous tradition further symbolizes centuries of cultural overlap.',
  },
  {
    dish: 'Mahia (Fig Brandy)',
    description:
      'A traditional fig or date brandy distilled by Jewish families for generations, served at celebrations and Hiloula gatherings.',
    connection:
      'Spirit distillation was a predominantly Jewish trade in Morocco. Mahia production has become rare but a few Casablanca artisans still practice the craft.',
  },
];

/* ================================================================
   DATA: PILGRIMAGE SITES (HILOULA)
   ================================================================ */

const pilgrimageSites: {
  saint: string;
  location: string;
  timing: string;
  detail: string;
}[] = [
  {
    saint: 'Rabbi Amram ben Diwan',
    location: 'Ouezzane (Rif region)',
    timing: 'Lag BaOmer (spring, Hebrew calendar)',
    detail:
      'The largest annual Jewish pilgrimage in Morocco. Rabbi Amram, an 18th-century emissary from Hebron, is buried near Ouezzane. Thousands of Moroccan-Israeli and diaspora Jews return each year for prayers, candle-lighting, and communal meals at his tomb.',
  },
  {
    saint: 'Rabbi Haim Pinto',
    location: 'Essaouira',
    timing: 'Elul (late summer)',
    detail:
      'The Pinto family produced several revered rabbis in Essaouira. The Hiloula at Rabbi Haim Pinto\'s tomb draws Moroccan Jews from Israel, France, and Canada. The Pinto synagogue in the medina has been restored.',
  },
  {
    saint: 'Rabbi Shlomo ben Hensh',
    location: 'Ourika Valley, near Marrakech',
    timing: 'Spring',
    detail:
      'Located in the Atlas foothills, this pilgrimage combines religious devotion with scenic mountain landscape. The tomb sits in a village that once had a significant Jewish population.',
  },
  {
    saint: 'Rabbi David ou Moshe',
    location: 'Timzrit, Azilal Province (Atlas)',
    timing: 'Lag BaOmer',
    detail:
      'One of the most popular pilgrimage sites in southern Morocco. The annual gathering includes prayer services, music, shared meals, and a festive atmosphere. The Moroccan government has supported infrastructure improvements at the site.',
  },
];

/* ================================================================
   DATA: SUGGESTED ITINERARY
   ================================================================ */

const itinerary: {
  days: string;
  title: string;
  stops: string[];
  icon: typeof Route;
}[] = [
  {
    days: 'Days 1-2',
    title: 'Casablanca',
    icon: Building,
    stops: [
      'Museum of Moroccan Judaism (from 40 MAD)',
      'Temple Beth-El & Ettedgui Synagogue',
      'Jewish cemetery of Casablanca',
      'Kosher dining in the Oasis neighborhood',
    ],
  },
  {
    days: 'Days 3-5',
    title: 'Fes',
    icon: Landmark,
    stops: [
      'Fes el-Jedid mellah (oldest in Morocco)',
      'Ibn Danan Synagogue & underground mikve (from 20 MAD)',
      'Habarim Jewish Cemetery',
      'Mellah artisan workshops',
    ],
  },
  {
    days: 'Day 6',
    title: 'Meknes & Sefrou',
    icon: Crown,
    stops: [
      'Meknes mellah near the Royal Granaries',
      'Sefrou Jewish quarter ("Little Jerusalem")',
    ],
  },
  {
    days: 'Days 7-8',
    title: 'Marrakech',
    icon: Star,
    stops: [
      'Slat al-Azama Synagogue (from 30 MAD)',
      'Lazama Synagogue (from 30 MAD)',
      'Miaara Jewish Cemetery',
      'Mellah market and Place des Ferblantiers',
    ],
  },
  {
    days: 'Days 9-10',
    title: 'Essaouira',
    icon: Globe,
    stops: [
      'Bayt Dakira (House of Memory)',
      'Slat Lkahal Synagogue (from 20 MAD)',
      'Jewish merchant houses on Rue Siaghine',
      'Jewish cemetery near Bab Doukkala',
      'Rabbi Haim Pinto tomb',
    ],
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoJewishHeritagePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── HERO ── */}
      <section className="hero-overlay relative py-28 text-white md:py-36">
        <img
          src="/images/hero-jewish-heritage.webp"
          alt="Ornate interior of a historic Moroccan synagogue with zellige tilework and carved wooden Torah ark"
          className="absolute inset-0 h-full w-full object-cover"
          width={1400}
          height={700}
          loading="eager"
        />
        <div className="container-morocco relative z-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-200">
            Cultural Heritage
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Morocco Jewish Heritage Guide 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
            Over two thousand years of shared history, from ancient Amazigh-Jewish
            communities to the mellahs of imperial cities, standing synagogues,
            and a living legacy of coexistence.
          </p>
        </div>
      </section>

      {/* ── BREADCRUMBS ── */}
      <nav
        aria-label="Breadcrumb"
        className="container-morocco py-4 text-sm text-gray-500"
      >
        <ol className="flex flex-wrap items-center gap-1">
          <li className="flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <Link href="/" className="hover:text-[#A0522D]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
          </li>
          <li className="text-[#A0522D] font-medium">
            Morocco Jewish Heritage Guide
          </li>
        </ol>
      </nav>

      {/* ── INTRO ── */}
      <section className="container-morocco py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-6">
            A Living History Spanning Two Millennia
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Jewish presence in Morocco predates Islam by more than a thousand years.
              Archaeological traces place Jewish communities in the Maghreb as early as
              the 3rd century BCE. When the Romans destroyed the Second Temple in 70 CE,
              further waves of Jewish refugees settled across North Africa, joining
              communities already rooted in Amazigh (Berber) culture.
            </p>
            <p>
              For centuries, Jewish Moroccans served as traders, diplomats, jewelers,
              and scholars. The 1492 expulsion of Jews from Spain brought tens of
              thousands of Sephardic refugees, adding Castilian language, Andalusian
              music, and Ladino liturgical traditions. Today, Morocco preserves this
              heritage with rare dedication. The 2011 constitution recognizes the
              Hebraic tributary as part of national identity. Synagogues have been
              restored, cemeteries maintained, and the Museum of Moroccan Judaism in
              Casablanca remains the only institution of its kind in the Arab world.
            </p>
          </div>
        </div>
      </section>

      {/* ── HISTORICAL TIMELINE ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-[#A0522D]">
              <History className="h-4 w-4" />
              Historical Timeline
            </span>
            <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold text-gray-900">
              2,000+ Years of Jewish Life in Morocco
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A0522D] text-white shrink-0">
                    <ScrollText className="h-5 w-5" />
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#A0522D]/20 mt-2" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-sm font-bold text-[#C4960C] uppercase tracking-wide">
                    {item.year}
                  </p>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900 mt-1">
                    {item.event}
                  </h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MELLAHS ── */}
      <section className="container-morocco py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-[#A0522D]">
            <MapPin className="h-4 w-4" />
            Jewish Quarters
          </span>
          <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold text-gray-900">
            Historic Mellahs Across Morocco
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Morocco&apos;s mellahs are among the most architecturally distinctive
            Jewish quarters in the world. Each reflects the era, dynasty, and
            local conditions under which it was built.
          </p>
        </div>

        <div className="space-y-8">
          {mellahs.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="card-moroccan p-6 md:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A0522D]/10 text-[#A0522D] shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900">
                      {m.city}
                    </h3>
                    <p className="text-sm text-[#C4960C] font-semibold">
                      Established: {m.founded}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {m.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {m.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#A0522D] shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── MOHAMMED V & WWII ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-[#A0522D]">
                <ShieldCheck className="h-4 w-4" />
                Wartime History
              </span>
              <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold text-gray-900">
                Mohammed V and Morocco&apos;s Jews During WWII
              </h2>
            </div>

            <div className="zellige-border p-6 md:p-8 rounded-xl bg-[#FAF8F5]">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  When France fell to Nazi Germany in 1940, Morocco came under the
                  authority of the Vichy French administration. The Vichy regime
                  enacted racial laws (the Statut des Juifs) that stripped Jews of
                  civil rights, barred them from professions, and imposed quotas.
                </p>
                <p>
                  Sultan Mohammed V, grandfather of the current King Mohammed VI,
                  took a position of quiet but consistent resistance. According to
                  well-documented accounts, he told French officials: &ldquo;There are
                  no Jews in Morocco. There are only Moroccan subjects.&rdquo; In 1941,
                  he invited Jewish leaders to the throne celebration, a deliberate
                  public signal that they remained under his protection.
                </p>
                <p>
                  While historians debate the extent to which Mohammed V could
                  override Vichy edicts under the protectorate system, the
                  consensus is clear: the Sultan used what leverage he had to
                  shield his Jewish subjects. No Moroccan Jews were deported to
                  European concentration camps. His grandson, King Mohammed VI, has
                  continued this legacy through extensive synagogue and cemetery
                  restorations across the country.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-lg bg-white p-4 text-center">
                  <Crown className="h-6 w-6 text-[#C4960C] mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-lg">0</p>
                  <p className="text-sm text-gray-500">
                    Moroccan Jews deported to death camps
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 text-center">
                  <Users className="h-6 w-6 text-[#C4960C] mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-lg">~250,000</p>
                  <p className="text-sm text-gray-500">
                    Jewish population in 1940s Morocco
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 text-center">
                  <ShieldCheck className="h-6 w-6 text-[#C4960C] mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-lg">1941</p>
                  <p className="text-sm text-gray-500">
                    Throne celebration invitation to Jewish leaders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SYNAGOGUES ── */}
      <section className="container-morocco py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-[#A0522D]">
            <Church className="h-4 w-4" />
            Sacred Spaces
          </span>
          <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold text-gray-900">
            Synagogues Still Standing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Morocco maintains more than 100 identifiable synagogue structures. These
            six represent the most significant for visitors, ranging from fully
            active houses of worship to beautifully restored heritage sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {synagogues.map((s, i) => (
            <div key={i} className="card-moroccan p-5">
              <div className="flex items-center gap-3 mb-2">
                <Landmark className="h-5 w-5 text-[#A0522D] shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900">{s.name}</h3>
                  <p className="text-sm text-[#C4960C] font-semibold">{s.location}</p>
                </div>
              </div>
              <p className="text-xs text-green-700 bg-green-50 rounded-full px-3 py-1 w-fit mb-3">{s.status}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MUSEUM OF MOROCCAN JUDAISM ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-[#A0522D]">
                <BookOpen className="h-4 w-4" />
                Must-Visit
              </span>
              <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold text-gray-900">
                Museum of Moroccan Judaism, Casablanca
              </h2>
            </div>

            <div className="card-moroccan p-6 md:p-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 1997 in the Oasis neighborhood of Casablanca, the
                  Musee du Judaisme Marocain is the only Jewish museum in the
                  Arab world. The collection spans centuries through Torah scrolls,
                  Hanukkah lamps (hanukiot), ceremonial textiles, ketubot (marriage
                  contracts), photographs, and a reconstructed synagogue interior.
                  Temporary exhibitions cover themes from Amazigh-Jewish heritage
                  to contemporary art by Moroccan Jewish artists.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-[#A0522D]" />
                  <span>Open Sunday to Friday; closed Saturdays and Jewish holidays</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-[#A0522D]" />
                  <span>Rue Chasseur Jules Gros, Oasis, Casablanca</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Award className="h-4 w-4 text-[#A0522D]" />
                  <span>Admission from 40 MAD (seasonal pricing can change)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Camera className="h-4 w-4 text-[#A0522D]" />
                  <span>Photography permitted inside the museum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HILOULA PILGRIMAGES ── */}
      <section className="container-morocco py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-[#A0522D]">
            <CalendarDays className="h-4 w-4" />
            Annual Pilgrimages
          </span>
          <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold text-gray-900">
            Hiloula Festivals &amp; Sacred Tombs
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            The Hiloula (from the Aramaic for &ldquo;celebration&rdquo;) marks the
            anniversary of a revered rabbi&apos;s passing. Thousands of Moroccan Jews
            and their descendants return from Israel, France, and beyond for these
            annual gatherings at saints&apos; tombs across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pilgrimageSites.map((site, i) => (
            <div key={i} className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <Star className="h-5 w-5 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-gray-900">
                  {site.saint}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <MapPin className="h-3.5 w-3.5" />
                {site.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-[#C4960C] font-semibold mb-3">
                <CalendarDays className="h-3.5 w-3.5" />
                {site.timing}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{site.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── JEWISH-MOROCCAN CUISINE ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-[#A0522D]">
              <Utensils className="h-4 w-4" />
              Shared Cuisine
            </span>
            <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold text-gray-900">
              Jewish-Moroccan Culinary Heritage
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Moroccan Jewish and Muslim kitchens share most of the same
              ingredients, techniques, and flavor profiles. The overlap runs so
              deep that many dishes exist in nearly identical forms across both
              traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cuisineItems.map((item, i) => (
              <div key={i} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900 mb-2">
                  {item.dish}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex items-start gap-2 bg-amber-50 rounded-lg p-3">
                  <HandHeart className="h-4 w-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-600 italic">{item.connection}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUGGESTED ITINERARY ── */}
      <section className="container-morocco py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-[#A0522D]">
            <Route className="h-4 w-4" />
            Itinerary
          </span>
          <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold text-gray-900">
            10-Day Jewish Heritage Itinerary
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            A suggested route covering the major Jewish heritage sites across Morocco.
            Private guided heritage tours can be arranged from 2,500 MAD per day.
            Seasonal pricing can change during peak travel months.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {itinerary.map((leg, i) => {
            const Icon = leg.icon;
            return (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A0522D]/10 text-[#A0522D] shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#C4960C]">{leg.days}</p>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900">
                      {leg.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2 ml-14">
                  {leg.stops.map((stop, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#A0522D] shrink-0" />
                      {stop}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PRACTICAL TIPS ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-[#A0522D]">
              <Lightbulb className="h-4 w-4" />
              Practical Tips
            </span>
            <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold text-gray-900">
              Visiting Jewish Heritage Sites in Morocco
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-moroccan p-5">
              <Compass className="h-6 w-6 text-[#A0522D] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2">
                Hire a Specialist Guide
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Many heritage sites are unmarked or in residential areas. A
                specialist guide (from 500 MAD for a half day) can locate
                synagogues, explain architectural details, and share oral
                histories. Seasonal pricing can change.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <Clock className="h-6 w-6 text-[#A0522D] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2">
                Shabbat &amp; Holiday Hours
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Active synagogues and the Casablanca museum close on Saturdays
                and Jewish holidays. Plan visits for Sunday through Friday.
                Cemeteries are accessible during daylight hours daily.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <Heart className="h-6 w-6 text-[#A0522D] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2">
                Dress &amp; Photography
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cover shoulders and knees at synagogues and cemeteries. Men
                should carry a kippah. Photography is generally permitted but
                ask first at active synagogues, especially during services.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <Globe className="h-6 w-6 text-[#A0522D] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2">
                Best Time to Visit
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Spring (March-May) and autumn (September-November) offer
                comfortable weather and coincide with Hiloula festivals. Contact
                the Jewish Community Council of Casablanca for current schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSTITUTIONAL RECOGNITION ── */}
      <section className="container-morocco py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-[#A0522D]">
              <ScrollText className="h-4 w-4" />
              Modern Legacy
            </span>
            <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold text-gray-900">
              Constitutional Recognition &amp; Heritage Preservation
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Morocco&apos;s 2011 constitution includes language unique in the Arab
              world, stating that Moroccan identity is &ldquo;nourished and enriched
              by its African, Andalusian, Hebraic, and Mediterranean
              tributaries.&rdquo; Since 2010, King Mohammed VI has directed the
              restoration of more than 170 Jewish cemeteries, dozens of
              synagogues, and several mellah quarters. The Bayt Dakira in
              Essaouira, inaugurated in 2020, is among the most prominent results.
            </p>
            <p>
              Following the 2020 Abraham Accords normalization with Israel,
              heritage tourism surged. Direct flights between Casablanca and Tel
              Aviv brought tens of thousands of Israeli visitors, many of
              Moroccan descent, seeking family roots. Tour operators now offer
              dedicated Jewish heritage circuits across the country.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-[#A0522D]">
              <MessageCircleQuestion className="h-4 w-4" />
              FAQ
            </span>
            <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="group card-moroccan overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-[family-name:var(--font-heading)] font-semibold text-gray-900 marker:[font-size:0]">
                  <span>{faq.q}</span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-[#A0522D] transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED GUIDES ── */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 text-center mb-10">
          Related Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { href: '/fes', title: 'Fes City Guide', desc: 'Imperial city with the oldest mellah in Morocco', icon: MapPin },
            { href: '/marrakech', title: 'Marrakech City Guide', desc: 'Home to the largest Jewish cemetery in Morocco', icon: MapPin },
            { href: '/essaouira', title: 'Essaouira Guide', desc: 'Port city where Jews once comprised 40% of residents', icon: MapPin },
            { href: '/cuisine', title: 'Moroccan Cuisine Guide', desc: 'Shared culinary roots across traditions', icon: Utensils },
          ].map((guide) => {
            const GIcon = guide.icon;
            return (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group">
                <GIcon className="h-5 w-5 text-[#A0522D] mb-2" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 group-hover:text-[#A0522D] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{guide.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#A0522D] mt-3 font-semibold">
                  Read guide <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="moroccan-pattern py-20">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 md:text-4xl">
            Explore Morocco&apos;s Jewish Heritage
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Walk through ancient mellahs, stand inside restored synagogues, and
            discover a story of coexistence that spans more than two thousand
            years. Private heritage tours available from 2,500 MAD per day.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#A0522D] px-8 py-3.5 font-semibold text-white shadow-lg transition-colors hover:bg-[#8B4726]"
            >
              Plan Your Heritage Tour
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#A0522D] px-8 py-3.5 font-semibold text-[#A0522D] transition-colors hover:bg-[#A0522D] hover:text-white"
            >
              Browse All Activities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

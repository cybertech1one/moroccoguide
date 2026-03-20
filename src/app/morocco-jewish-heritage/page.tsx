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
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  Landmark,
  History,
  Globe,
  CalendarDays,
  Utensils,
  Scroll,
  Map,
  Compass,
  Music,
  Camera,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Jewish Heritage in Morocco 2026 | Mellahs, Synagogues & Cultural Tours',
  description:
    'Complete guide to Jewish heritage in Morocco. Explore 2,000+ years of history across the mellahs of Fes, Marrakech, Essaouira, and Meknes. Visit the Ibn Danan and Slat al-Azama synagogues, the Museum of Moroccan Judaism, and Hiloula pilgrimage sites. Guided tour prices from 300 MAD.',
  keywords: [
    'jewish heritage morocco',
    'morocco jewish history',
    'mellah morocco',
    'jewish tour morocco',
    'synagogues morocco',
    'Ibn Danan synagogue Fes',
    'Slat al-Azama Marrakech',
    'Lazama synagogue',
    'Beth-El Casablanca',
    'Museum of Moroccan Judaism',
    'mellah Fes',
    'mellah Marrakech',
    'mellah Essaouira',
    'mellah Meknes',
    'Jewish cemetery Morocco',
    'Hiloula pilgrimage Morocco',
    'King Mohammed V Jews WWII',
    'Jewish Moroccan cuisine dafina',
    'Andre Azoulay Morocco',
    'Samy Elmaghribi',
    'Bayt Dakira Essaouira',
    'Jewish quarter Fes medina',
    'morocco interfaith heritage',
  ],
  openGraph: {
    title: 'Jewish Heritage in Morocco 2026 | Mellahs, Synagogues & Cultural Tours',
    description:
      'Discover 2,000+ years of Jewish life in Morocco. Ancient mellahs, restored synagogues, the only Jewish museum in the Arab world, and guided heritage tours from 300 MAD.',
    url: `${BASE_URL}/morocco-jewish-heritage`,
    images: [
      {
        url: `${BASE_URL}/images/hero-fes-medina.webp`,
        width: 1200,
        height: 630,
        alt: 'Historic mellah quarter in Fes, Morocco with traditional balconied architecture and narrow streets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jewish Heritage in Morocco 2026 | Mellahs & Synagogues',
    description:
      'Explore Morocco&apos;s Jewish heritage: ancient mellahs, restored synagogues, the Museum of Moroccan Judaism, Hiloula pilgrimages, and King Mohammed V&apos;s WWII protection of 250,000 Jews.',
    images: [`${BASE_URL}/images/hero-fes-medina.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-jewish-heritage` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-jewish-heritage`,
  name: 'Jewish Heritage in Morocco 2026 | Mellahs, Synagogues & Cultural Tours',
  description:
    'Complete guide to Jewish heritage in Morocco. Explore 2,000+ years of history across mellahs, synagogues, museums, and guided cultural tours.',
  url: `${BASE_URL}/morocco-jewish-heritage`,
  image: `${BASE_URL}/images/hero-fes-medina.webp`,
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
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-jewish-heritage`,
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
      { '@type': 'ListItem', position: 2, name: 'Jewish Heritage in Morocco', item: `${BASE_URL}/morocco-jewish-heritage` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you visit Jewish heritage sites in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco actively preserves its Jewish heritage sites. Synagogues, mellahs, cemeteries, and the Museum of Moroccan Judaism in Casablanca are open to visitors. Entry fees range from 20 to 40 MAD. Guided heritage tours run in Fes, Marrakech, Essaouira, and Casablanca from 300 MAD per person.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a mellah in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mellah is a historic Jewish quarter found in Moroccan cities. The term comes from the Arabic word for salt. The first mellah was established in Fes in 1438 under the Marinid dynasty. Mellahs feature distinctive architecture with exterior balconies and larger windows. Major mellahs exist in Fes, Marrakech, Essaouira, and Meknes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How did King Mohammed V protect Moroccan Jews during WWII?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the Vichy French regime demanded Morocco hand over its Jewish citizens during World War II, King Mohammed V refused. He reportedly declared "There are no Jews in Morocco. There are only Moroccan subjects." He continued inviting Jewish leaders to royal events and resisted enforcement of anti-Jewish laws, helping protect approximately 250,000 Moroccan Jews.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there still Jews living in Morocco today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco has the largest Jewish community in the Arab world, with an estimated 2,000 to 3,000 residents. Most live in Casablanca, with smaller communities in Marrakech, Fes, Rabat, and Tangier. The community operates synagogues, schools, a rabbinical court, and cultural institutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is dafina, the Jewish-Moroccan Shabbat dish?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dafina (also called skhina) is a slow-cooked stew prepared on Friday before Shabbat and left to cook overnight. It contains beef, chickpeas, potatoes, whole eggs in their shells, wheat berries, and warm spices like cinnamon and turmeric. It is the Moroccan-Jewish equivalent of Ashkenazi cholent and remains popular in Israel among Moroccan-origin families.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Hiloula pilgrimage in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Hiloula is an annual Jewish pilgrimage to the tombs of venerated rabbis and saints in Morocco. Moroccan Jews from Israel, France, and other countries return each year to light candles, pray, and celebrate. Major sites include Rabbi Amram Ben Diwan near Ouezzane, Rabbi Haim Pinto in Essaouira, and Rabbi David ou Moshe in the Atlas Mountains.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Jewish heritage tour in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Half-day walking tours of individual mellahs start from 300 MAD per person in Essaouira and from 400 MAD in Fes. Full multi-city heritage circuits covering Casablanca, Marrakech, Essaouira, and Fes over 5-7 days start from 12,000 MAD per person, including a specialist guide, transport, and site entry fees.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MELLAHS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const mellahsByCity = [
  {
    city: 'Fes',
    icon: Landmark,
    image: '/images/hero-fes-medina.webp',
    established: '1438',
    description:
      'The oldest mellah in Morocco and among the oldest in the world. Founded under the Marinid dynasty, it occupies a section of Fes el-Jdid near the Royal Palace. At its height, the Fes mellah housed tens of thousands of residents and served as the spiritual capital of Moroccan Jewry. The quarter has distinctive balconied houses, interior courtyards, and narrow passages. The Aben Danan and Slat al-Fassiyyin synagogues stand here, along with the Habarim Cemetery containing thousands of whitewashed tombs.',
    highlights: ['Oldest mellah in Morocco (1438)', 'Aben Danan Synagogue', 'Slat al-Fassiyyin Synagogue', 'Habarim Cemetery with medieval tombstones'],
  },
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/hero-marrakech-medina.webp',
    established: '1558',
    description:
      'Established by the Saadian dynasty, the Marrakech mellah sits southeast of the Royal Palace within the medina. It once held over 35,000 Jewish residents and was a center of trade, goldsmithing, and sugar refining. The architecture differs from Muslim quarters: houses have exterior balconies and larger windows facing the street. The Lazama Synagogue and Slat al-Azama remain active. The Miaara Cemetery, one of the largest Jewish burial grounds in the Islamic world, spreads across a hillside adjacent to the quarter.',
    highlights: ['Lazama Synagogue (16th century)', 'Slat al-Azama Synagogue', 'Miaara Jewish Cemetery', 'Mellah spice market and fondouks'],
  },
  {
    city: 'Essaouira',
    icon: Globe,
    image: '/images/hero-essaouira-ramparts.webp',
    established: '1764',
    description:
      'Essaouira holds a singular place in Moroccan-Jewish history. When Sultan Mohammed III built the port city in 1764, he recruited Jewish merchants and diplomats — the Tujjar al-Sultan (merchants of the king) — to run its international trade. Jews eventually comprised nearly 40% of the population. Unlike other mellahs, the Jewish quarter here was integrated into the medina rather than walled off, reflecting unusually close Muslim-Jewish relations. The Slat Lkahal and Simon Attias synagogues have been restored, and the Bayt Dakira cultural center preserves this history.',
    highlights: ['Jews comprised 40% of population', 'Slat Lkahal Synagogue', 'Simon Attias Synagogue', 'Bayt Dakira (House of Memory)'],
  },
  {
    city: 'Meknes',
    icon: Crown,
    image: '/images/hero-meknes.webp',
    established: '17th century',
    description:
      'The Meknes mellah grew under Sultan Moulay Ismail, who employed Jewish craftsmen, merchants, and diplomats during his ambitious building campaigns. Located near the imposing Bab Mansour gate, the mellah featured a synagogue, market, and residential blocks organized around internal courtyards. Though smaller than the Fes or Marrakech quarters, the Meknes mellah played a key role in Moroccan-Jewish commercial life, particularly in the textile trade between the Saharan interior and Mediterranean ports.',
    highlights: ['Built under Moulay Ismail', 'Near Bab Mansour gate', 'Key textile trade hub', 'Courtyard residential architecture'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: KEY SYNAGOGUES
   ═══════════════════════════════════════════════════════════════ */

const keySynagogues = [
  {
    name: 'Ibn Danan Synagogue',
    city: 'Fes',
    icon: Landmark,
    century: '17th century',
    price: 'From 20 MAD entry',
    description:
      'The most visited synagogue in Fes, restored in 1996 with UNESCO support. Built on multiple levels, it has a women&apos;s gallery above and a mikveh (ritual bath) in the basement. The interior blends Hispano-Moorish architecture with Jewish religious motifs — carved cedarwood, painted plaster, and zellige tilework produced by the same Muslim artisans who decorated the city&apos;s mosques and madrasas. Named after the Aben Danan rabbinical dynasty.',
    features: ['UNESCO-supported restoration', 'Multi-level with underground mikveh', 'Hispano-Moorish carved cedarwood', 'Latticed women&apos;s gallery'],
  },
  {
    name: 'Slat al-Azama Synagogue',
    city: 'Marrakech',
    icon: Star,
    century: '16th century',
    price: 'From 30 MAD entry',
    description:
      'Named after the Sephardic Jews who arrived from the "great" (al-Azama) communities of Castile and Aragon after 1492, this synagogue stands at the heart of the Marrakech mellah. The blue-and-white interior tilework, carved stucco, and painted ceiling display a synthesis of Iberian Jewish and Moroccan decorative traditions. An active place of worship during holidays, Slat al-Azama has been restored with support from the Moroccan government.',
    features: ['Named after Castilian Sephardim', 'Blue-and-white zellige tilework', 'Active during Jewish holidays', 'Government-funded restoration'],
  },
  {
    name: 'Lazama Synagogue',
    city: 'Marrakech',
    icon: Scroll,
    century: '16th century',
    price: 'From 30 MAD entry',
    description:
      'The most significant synagogue in Marrakech, founded by Megorashim (Jews expelled from Iberia). It sits in the mellah&apos;s core, behind an unassuming doorway that opens onto a peaceful Andalusian courtyard with a central fountain. The painted wooden ceiling, carved stucco arabesques, and iron-railed bimah make it one of the finest examples of Moroccan-Jewish religious architecture still in use.',
    features: ['Active with regular prayer services', 'Andalusian courtyard and fountain', 'Painted wooden ceiling', 'Iron-railed bimah (reading platform)'],
  },
  {
    name: 'Beth-El Synagogue',
    city: 'Casablanca',
    icon: Building,
    century: '20th century',
    price: 'Free (donations welcome)',
    description:
      'The largest active synagogue in Morocco, built in the Art Deco style during the French Protectorate era. Beth-El serves Casablanca&apos;s Jewish community of approximately 2,000 people with Shabbat services every Friday evening and Saturday morning. The building also functions as a community center hosting educational programs, cultural events, and holiday celebrations.',
    features: ['Art Deco architecture', 'Weekly Shabbat services', 'Community center and event space', 'Largest active synagogue in Morocco'],
  },
  {
    name: 'Slat Lkahal Synagogue',
    city: 'Essaouira',
    icon: Globe,
    century: '19th century',
    price: 'From 20 MAD entry',
    description:
      'Part of the Bayt Dakira (House of Memory) cultural center, Slat Lkahal has been restored to reveal its original Star of David motifs, Hebrew inscriptions, and Moroccan-Jewish decorative elements. The surrounding complex houses exhibitions on Jewish life in Essaouira and the port city&apos;s multicultural trading past. The synagogue hosted the city&apos;s Sephardic community for over a century.',
    features: ['Part of Bayt Dakira complex', 'Star of David decorative motifs', 'Hebrew and Arabic inscriptions', 'Exhibitions on Jewish-Mogador life'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HISTORICAL TIMELINE
   ═══════════════════════════════════════════════════════════════ */

const historicalTimeline = [
  { year: '1st century CE', event: 'Jewish communities appear in Morocco. Some historians trace the presence to King Solomon&apos;s era; archaeological evidence confirms settlement by the Roman period.' },
  { year: '7th-8th century', event: 'Jewish-Berber tribes coexist in the Atlas and Draa regions. Under early Islamic rule, Jews receive dhimmi (protected) status with guaranteed religious freedom.' },
  { year: '1438', event: 'The first mellah is established in Fes under the Marinid dynasty, setting the model for Jewish quarters across Morocco.' },
  { year: '1492', event: 'Tens of thousands of Sephardic Jews flee the Spanish Inquisition to Morocco. They bring Iberian scholarly traditions, the Haketia language, and new trade networks.' },
  { year: '1558', event: 'The Saadian dynasty creates the Marrakech mellah, which grows into one of North Africa&apos;s largest Jewish quarters.' },
  { year: '1672-1727', event: 'Sultan Moulay Ismail employs Jewish merchants as trade envoys and diplomats to European courts, expanding commerce.' },
  { year: '1764', event: 'Sultan Mohammed III recruits Jewish merchants (Tujjar al-Sultan) to manage the new port of Essaouira, where Jews eventually reach 40% of the population.' },
  { year: '1912-1956', event: 'Under the French Protectorate, Jewish life modernizes rapidly. Many families move from traditional mellahs to European-style neighborhoods in Casablanca, Rabat, and Tangier.' },
  { year: '1940-1945', event: 'King Mohammed V refuses Vichy demands to deport Moroccan Jews, protecting approximately 250,000 people.' },
  { year: '1948-1960s', event: 'Large-scale emigration to Israel and France reduces the Jewish population from 250,000 to roughly 50,000.' },
  { year: '2011', event: 'The new Moroccan constitution recognizes the "Hebraic" tributary as part of Morocco&apos;s national identity.' },
  { year: '2020s', event: 'King Mohammed VI funds synagogue renovations, cemetery restorations, and the Bayt Dakira cultural center in Essaouira.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: JEWISH-MOROCCAN CUISINE
   ═══════════════════════════════════════════════════════════════ */

const jewishMoroccanDishes = [
  { name: 'Dafina (Skhina)', description: 'The Shabbat stew. Prepared Friday afternoon and slow-cooked overnight in a communal oven or on low heat. Contains beef, chickpeas, potatoes, whole eggs (which turn brown in their shells), wheat berries, and spices like cinnamon, cumin, and turmeric. The Moroccan-Jewish answer to Ashkenazi cholent.', price: 'From 50 MAD at local eateries' },
  { name: 'Pastilla au Poisson', description: 'A kosher adaptation of the classic pigeon or chicken pastilla. This fish version layers vermicelli noodles, white fish, herbs, and a dusting of cinnamon inside crispy warqa pastry. The dish reflects how Jewish cooks adapted iconic Moroccan recipes to kosher dietary laws.', price: 'From 80 MAD at restaurants' },
  { name: 'Maacouda', description: 'Crispy potato fritters seasoned with cumin, turmeric, and fresh cilantro, then fried golden. A staple of Jewish-Moroccan home cooking that became a standard street food across Morocco and later a beloved dish in Israel.', price: 'From 15 MAD (street vendors)' },
  { name: 'Matbucha', description: 'A cooked salad of roasted peppers and tomatoes, slow-simmered with garlic, chili, and olive oil until thick. Moroccan-Jewish families brought this recipe to Israel, where it became a national staple.', price: 'From 25 MAD as a starter' },
  { name: 'Mimouna Sweets', description: 'The post-Passover Mimouna features mufleta (thin pancakes with butter and honey), dates, almonds, dried figs, and nougat. A uniquely Moroccan-Jewish tradition now celebrated nationwide in Israel.', price: 'From 30 MAD at bakeries' },
  { name: 'Mahia', description: 'A traditional fig or date brandy distilled by Jewish families for generations. Clear and strong, mahia was served at celebrations and Hiloula gatherings. Production has become rare, but a few artisans in Casablanca still make it.', price: 'From 100 MAD (specialty shops)' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: NOTABLE MOROCCAN JEWS
   ═══════════════════════════════════════════════════════════════ */

const notableFigures = [
  { name: 'Andre Azoulay', role: 'Senior Advisor to King Mohammed VI', icon: Crown, description: 'Born in Essaouira in 1941, Azoulay has served as a senior advisor to both King Hassan II and King Mohammed VI. He is the driving force behind Morocco&apos;s Jewish heritage preservation programs and the co-founder of the Essaouira Gnaoua and World Music Festival. He exemplifies the continuing place of Jews in Moroccan public life.' },
  { name: 'Samy Elmaghribi', role: 'Singer & Cultural Icon (1922-2008)', icon: Music, description: 'Born Salomon Amzallag in Rabat, Samy Elmaghribi was Morocco&apos;s most celebrated Jewish musician. He sang in Arabic, Haketia, and French, blending Andalusian, Amazigh, and Arab musical traditions. His recordings of malhun poetry and popular songs remain iconic in Morocco decades after his emigration to Canada.' },
  { name: 'Edmond Amran El Maleh', role: 'Novelist & Intellectual (1917-2010)', icon: BookOpen, description: 'A Safi-born writer whose French-language novels drew on the rhythms of Moroccan Jewish life. His works, including "Parcours immobile" and "Ailen ou la nuit du recit," explored the intertwined identities of Jewish and Muslim Moroccans. He was a vocal advocate for Palestinian rights and Moroccan-Jewish cultural pride.' },
  { name: 'Haim Zafrani', role: 'Scholar of Judeo-Moroccan Heritage (1922-2004)', icon: Scroll, description: 'Born in Mogador (Essaouira), Zafrani was the foremost academic authority on Jewish intellectual life in Morocco. His multi-volume works documented the legal, literary, and liturgical traditions of Moroccan Jews from the medieval era to the 20th century. His research remains the definitive scholarly reference on the subject.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GUIDED TOURS
   ═══════════════════════════════════════════════════════════════ */

const guidedTours = [
  { city: 'Fes', tour: 'Mellah & Heritage Walk', duration: '3-4 hours', price: 'From 400 MAD', description: 'Ibn Danan Synagogue, Slat al-Fassiyyin, Habarim Cemetery, and mellah walking tour with a specialist guide.' },
  { city: 'Marrakech', tour: 'Jewish Quarter Tour', duration: '2-3 hours', price: 'From 350 MAD', description: 'Lazama and Slat al-Azama synagogues, Miaara Cemetery, mellah spice market, and Saadian-era history.' },
  { city: 'Essaouira', tour: 'Heritage Trail', duration: '2-3 hours', price: 'From 300 MAD', description: 'Bayt Dakira cultural center, restored synagogues, and the story of the Tujjar al-Sultan merchant dynasty.' },
  { city: 'Casablanca', tour: 'Jewish Heritage Tour', duration: '3-4 hours', price: 'From 500 MAD', description: 'Museum of Moroccan Judaism, Beth-El Synagogue, old mellah, and encounters with the living community.' },
  { city: 'Multi-city', tour: 'Heritage Circuit', duration: '5-7 days', price: 'From 12,000 MAD', description: 'Full circuit: Casablanca, Marrakech, Essaouira, Fes. All synagogues, Hiloula sites, kosher dining, and specialist guiding.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoJewishHeritagePage() {
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
            backgroundImage: 'url(/images/hero-fes-medina.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Jewish Heritage in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Landmark className="w-4 h-4" />
            History &amp; Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Jewish Heritage in Morocco:
            <br className="hidden md:block" /> Mellahs, Synagogues &amp; Cultural Tours
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Two thousand years of coexistence. Explore the ancient mellahs, restored synagogues,
            pilgrimage sites, and living traditions of one of the world&apos;s oldest Jewish communities.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Overview ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Story Written Over Two Millennia
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Jewish presence in Morocco predates the Arab conquest by centuries. Archaeological evidence
                and historical records place Jewish communities in the region as early as the 1st century CE,
                with some traditions tracing roots to the era of King Solomon. Berber-Jewish tribes lived in
                the Atlas Mountains and the Draa Valley long before Islam arrived.
              </p>
              <p>
                After the fall of Muslim Spain in 1492, tens of thousands of Sephardic Jews crossed the
                Strait of Gibraltar into Morocco. They brought Iberian scholarship, the Haketia language,
                and trade connections that transformed Moroccan commerce. By the 1940s, Morocco was home
                to roughly 250,000 Jews — the largest Jewish community in the Arab world.
              </p>
              <p>
                Emigration to Israel and France after 1948 reduced the community to approximately 2,000-3,000
                people today. But Morocco has done something that sets it apart: under King Mohammed VI, the
                state has spent millions restoring synagogues, renovating cemeteries, and building cultural
                centers to preserve this shared heritage. The 2011 constitution explicitly recognizes
                the &quot;Hebraic&quot; tributary as part of Moroccan national identity. For travelers, this
                makes Morocco one of the few countries in the Islamic world where Jewish heritage sites
                are actively maintained, well-signposted, and open to visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Historical Timeline ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <History className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Timeline: 2,000+ Years of Jewish Life in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From ancient Berber-Jewish coexistence to modern constitutional recognition.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-6">
                {historicalTimeline.map((item, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                      <CalendarDays className="w-5 h-5 text-white" />
                    </div>
                    <div className="card-moroccan p-5 flex-1">
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-1">
                        {item.year}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mellahs by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Mellahs: Morocco&apos;s Historic Jewish Quarters
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each mellah tells a distinct chapter of the Moroccan-Jewish story. Four survive in Fes, Marrakech, Essaouira, and Meknes.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mellahsByCity.map((mellah) => {
              const MellahIcon = mellah.icon;
              return (
                <div key={mellah.city} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={mellah.image}
                      alt={`Historic mellah Jewish quarter in ${mellah.city}, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <MellahIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                        {mellah.city} Mellah
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 px-2 py-1 rounded bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                      Est. {mellah.established}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{mellah.description}</p>
                    <div className="space-y-2">
                      {mellah.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Synagogues ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scroll className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Historic Synagogues Still Standing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s restored synagogues blend Jewish religious tradition with Moroccan zellige, carved cedarwood, and stucco arabesques.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing may apply during peak tourist months and Jewish holiday periods.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keySynagogues.map((synagogue) => {
              const SynIcon = synagogue.icon;
              return (
                <div key={synagogue.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SynIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {synagogue.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {synagogue.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {synagogue.century}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {synagogue.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{synagogue.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {synagogue.features.map((feature, i) => (
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

      {/* ── Jewish Museums ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Jewish Museums in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">Two institutions preserve centuries of Jewish-Moroccan cultural production.</p>

          <div className="space-y-8">
            <div className="card-moroccan p-8">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Museum of Moroccan Judaism, Casablanca
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <MapPin className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Location</p>
                  <p className="text-xs text-[var(--text-muted)]">81 Rue Chasseur Jules Gros, Oasis, Casablanca</p>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Hours</p>
                  <p className="text-xs text-[var(--text-muted)]">Mon-Fri 10:00-17:00, Sun 11:00-15:00 (closed Sat &amp; Jewish holidays)</p>
                </div>
                <div className="text-center">
                  <DollarSign className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Entry</p>
                  <p className="text-xs text-[var(--text-muted)]">From 40 MAD (students from 20 MAD)</p>
                </div>
              </div>
              <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Founded in 1997, this is the only Jewish museum in the Arab world. Its collection spans
                  centuries: Torah scrolls, Hanukkah menorahs, traditional wedding garments, ceremonial
                  silverwork, and photographs documenting daily life across Morocco&apos;s Jewish communities.
                  One room reconstructs a synagogue interior with a Torah ark, bimah, and original furnishings.
                </p>
                <p>
                  Temporary exhibitions rotate every few months, covering Jewish-Moroccan music, artisanal
                  crafts, and the diaspora in Israel and France. The photographic archive alone is worth the
                  visit — images from the mellahs of Fes and Marrakech to remote Atlas Mountain communities.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-8">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Bayt Dakira (House of Memory), Essaouira
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <MapPin className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Location</p>
                  <p className="text-xs text-[var(--text-muted)]">Mellah quarter, Essaouira medina</p>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Hours</p>
                  <p className="text-xs text-[var(--text-muted)]">Daily 09:00-18:00 (closed Jewish holidays)</p>
                </div>
                <div className="text-center">
                  <DollarSign className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Entry</p>
                  <p className="text-xs text-[var(--text-muted)]">From 30 MAD</p>
                </div>
              </div>
              <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Inaugurated in 2020 with royal patronage, Bayt Dakira occupies a restored building in
                  Essaouira&apos;s mellah. It houses the Slat Lkahal synagogue, exhibition spaces documenting
                  the Tujjar al-Sultan merchant era, and a research library. The center hosts lectures,
                  film screenings, and concerts of Andalusian-Jewish music. Andre Azoulay, the royal advisor
                  from Essaouira, was instrumental in its creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cemeteries & Hiloula ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Jewish Cemeteries &amp; the Hiloula Pilgrimages
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Silent witnesses to centuries of Jewish life, and the annual pilgrimages that keep the connection alive.
          </p>

          <div className="space-y-6 mb-12">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Miaara Cemetery, Marrakech
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                One of the largest Jewish cemeteries in the Islamic world. Thousands of white-painted tombs stretch across grounds adjacent to the mellah, some dating to the 16th century Saadian era. Maintained under royal patronage. Respectful dress expected.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" /> Free (donations appreciated)</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[var(--color-accent)]" /> Adjacent to Mellah, Marrakech</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Habarim Cemetery, Fes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Among the oldest Jewish cemeteries in Morocco, with medieval tombstones. White-washed tombs cover a hillside near the mellah. Several tombs of venerated rabbis serve as Hiloula pilgrimage destinations. Restored with government support.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" /> From 10 MAD donation</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[var(--color-accent)]" /> Near mellah, Fes el-Jdid</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Ben M&apos;sik Cemetery, Casablanca
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The largest Jewish cemetery still in active use in Morocco. Graves span the 19th century to the present, including a memorial section for Moroccan Jews who served in the French military during both World Wars.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" /> Free entry</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[var(--color-accent)]" /> Ben M&apos;sik district, Casablanca</span>
              </div>
            </div>
          </div>

          <div className="card-moroccan p-8">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              <Heart className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
              The Hiloula: Annual Pilgrimages to Saints&apos; Tombs
            </h3>
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Hiloula (from the Aramaic for &quot;celebration&quot;) is a pilgrimage tradition unique
                to Moroccan Jewry. Each year, on the anniversary of a revered rabbi&apos;s death, pilgrims
                travel from Israel, France, Canada, and beyond to gather at the tomb. They light candles,
                recite prayers, sing piyyutim (liturgical poems), and share communal meals. The Moroccan
                government provides security and logistical support for these gatherings, and neighboring
                Muslim communities often participate in welcoming the visitors.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Rabbi Amram Ben Diwan</h4>
                <p className="text-xs text-[var(--text-muted)]">Near Ouezzane — largest annual Hiloula</p>
              </div>
              <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Rabbi Haim Pinto</h4>
                <p className="text-xs text-[var(--text-muted)]">Essaouira — major pilgrimage site</p>
              </div>
              <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Rabbi David ou Moshe</h4>
                <p className="text-xs text-[var(--text-muted)]">Atlas Mountains — remote mountain shrine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Jewish-Moroccan Cuisine ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Jewish-Moroccan Cuisine
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Centuries of Jewish life in Morocco produced a culinary tradition fusing kosher dietary laws with Moroccan spices and techniques.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices and may vary by restaurant, season, and city.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jewishMoroccanDishes.map((dish) => (
              <div key={dish.name} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {dish.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{dish.description}</p>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  {dish.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notable Moroccan Jews ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Notable Moroccan Jews
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">Figures who shaped Moroccan culture, politics, music, and scholarship.</p>

          <div className="space-y-6">
            {notableFigures.map((figure) => {
              const FigureIcon = figure.icon;
              return (
                <div key={figure.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FigureIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {figure.name}
                      </h3>
                      <p className="text-sm text-[var(--color-accent)] font-medium mb-2">{figure.role}</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{figure.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── King Mohammed V ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            King Mohammed V and the Protection of Morocco&apos;s Jews
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A defining chapter in Moroccan history — and a symbol of the kingdom&apos;s tradition of pluralism.
          </p>

          <div className="card-moroccan p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                In 1940, after France fell to Nazi Germany, the Vichy regime imposed anti-Jewish legislation
                across French-controlled territories, including Morocco. The laws required a census of Jews,
                restricted their professions, and set the stage for potential deportation. King Mohammed V,
                the reigning sultan, pushed back.
              </p>
              <p>
                He refused to distinguish between his Muslim and Jewish subjects. He continued to invite
                Jewish leaders to the annual throne celebration. When the Vichy resident-general pressed
                him to sign the anti-Jewish decrees, Mohammed V reportedly replied: &quot;There are no Jews
                in Morocco. There are only Moroccan subjects.&quot; The practical effect of his resistance
                was that the harshest measures were softened or unenforced. Morocco&apos;s approximately
                250,000 Jews survived the war largely intact — a rare outcome in territories under Vichy
                control.
              </p>
              <p>
                Historians debate the extent to which Mohammed V was able to block the laws outright,
                given France&apos;s military occupation. Some Vichy restrictions — such as quotas on Jewish
                students in French schools — were enforced. But the king&apos;s public solidarity was
                unmistakable, and Moroccan Jews have honored his memory ever since.
              </p>
              <p>
                His grandson, King Mohammed VI, has carried forward this legacy. Royal funds have restored
                dozens of synagogues and cemeteries. In 2020, the normalization of Morocco-Israel relations
                under the Abraham Accords opened new avenues for heritage tourism and cultural exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guided Heritage Tours ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Guided Jewish Heritage Tours
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Specialist guides bring the history to life with firsthand knowledge of the mellahs, synagogues, and community stories.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies October-April and may increase 15-25%.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-12 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="col-span-2 p-3 px-4">City</div>
                <div className="col-span-3 p-3 px-4">Tour</div>
                <div className="col-span-2 p-3 px-4">Duration</div>
                <div className="col-span-2 p-3 px-4">Price</div>
                <div className="col-span-3 p-3 px-4">Highlights</div>
              </div>
              {guidedTours.map((tour, i) => (
                <div
                  key={tour.tour}
                  className={`grid grid-cols-12 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="col-span-2 p-3 px-4 font-medium text-[var(--text-primary)]">{tour.city}</div>
                  <div className="col-span-3 p-3 px-4 text-[var(--text-primary)] font-medium">{tour.tour}</div>
                  <div className="col-span-2 p-3 px-4 text-[var(--text-muted)]">{tour.duration}</div>
                  <div className="col-span-2 p-3 px-4 text-[var(--color-accent)] font-semibold">{tour.price}</div>
                  <div className="col-span-3 p-3 px-4 text-[var(--text-muted)] text-xs">{tour.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Booking Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Book specialist Jewish heritage guides through your riad or hotel. General medina guides
                often lack detailed knowledge of the mellahs. For multi-city circuits, reputable operators
                include Made in Essaouira Tours and Heritage Morocco Travel. Book 2-3 weeks ahead during
                October-April peak season.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tour Operators
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Israel-based and US-based operators run dedicated Moroccan Jewish heritage itineraries,
                especially popular around Hiloula season. Local operators in Fes and Marrakech offer
                half-day mellah walks without advance booking needed. Private guides charge from 800 MAD
                per day for exclusive access and tailored itineraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Visitor Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Heritage Visitors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Time to Visit
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Heritage sites are open year-round. March-May and September-November offer the most
                comfortable walking temperatures. To witness a Hiloula, check specific dates (they follow
                the Hebrew calendar, usually in spring or summer).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dress Code &amp; Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dress modestly at synagogues and cemeteries. Men should wear a head covering (kippah) inside
                synagogues; these are usually provided at the entrance. Remove shoes if asked. Photography
                is typically allowed — always ask first.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Entry Fees &amp; Donations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most synagogues charge from 20-40 MAD. Cemeteries are free but donations are appreciated.
                The Museum of Moroccan Judaism charges from 40 MAD. Tipping the caretaker (gardien) from
                20 MAD is customary and helps maintain these sites.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Shabbat Considerations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Synagogues close for tourism on Shabbat (Friday sunset to Saturday sunset) and Jewish
                holidays. The Museum of Moroccan Judaism closes Saturdays. Plan visits for Sunday through
                Friday morning.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Utensils className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Kosher Dining
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Casablanca has several kosher restaurants and a kosher butcher. Other cities have very limited
                kosher options. Vegetarian and fish dishes at standard Moroccan restaurants work as a practical
                alternative. Hotels catering to Jewish tourists can arrange kosher meals with advance notice.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hiring a Specialist Guide
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A knowledgeable guide transforms the experience. General medina guides may have limited mellah
                knowledge. Ask for guides who specialize in Jewish heritage. Half-day heritage-specific tours
                start from 300 MAD per person.
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
                Can you visit Jewish heritage sites in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Morocco actively preserves its Jewish heritage and welcomes visitors. Synagogues, mellahs,
                cemeteries, and the Museum of Moroccan Judaism in Casablanca are open to the public. Entry
                fees range from 20 to 40 MAD. Guided heritage tours operate in Fes, Marrakech, Essaouira,
                and Casablanca, starting from 300 MAD per person.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is a mellah in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A mellah is a historic Jewish quarter. The word comes from the Arabic for &quot;salt.&quot;
                The first was founded in Fes in 1438 under the Marinid dynasty. Mellahs featured distinctive
                architecture: houses with exterior balconies and larger windows compared to Muslim quarters.
                The most significant mellahs are in Fes, Marrakech, Essaouira, and Meknes.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How did King Mohammed V protect Moroccan Jews during WWII?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                When the Vichy French regime demanded Morocco hand over its Jewish citizens, King Mohammed V
                refused. He reportedly declared &quot;There are no Jews in Morocco. There are only Moroccan
                subjects.&quot; He continued inviting Jewish leaders to royal ceremonies and resisted the
                enforcement of anti-Jewish legislation, helping protect roughly 250,000 Moroccan Jews.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are there still Jews living in Morocco today?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Morocco has the largest Jewish community in the Arab world, with an estimated 2,000 to
                3,000 people. Most live in Casablanca, with smaller communities in Marrakech, Fes, Rabat,
                and Tangier. Active synagogues, Jewish schools, a rabbinical court, and cultural institutions
                serve the community.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is dafina, the Jewish-Moroccan Shabbat dish?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Dafina (also called skhina) is a slow-cooked stew prepared on Friday before Shabbat. It
                cooks overnight and contains beef, chickpeas, potatoes, whole eggs in their shells, wheat
                berries, and warm spices including cinnamon and turmeric. It is the Moroccan equivalent of
                Ashkenazi cholent and remains a staple among Moroccan-Jewish families in Israel and France.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the Hiloula pilgrimage in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Hiloula is an annual Jewish pilgrimage to the tombs of venerated rabbis and saints.
                Moroccan Jews from Israel, France, Canada, and elsewhere return each year to light candles,
                pray, and celebrate. The largest gatherings occur at the tomb of Rabbi Amram Ben Diwan
                near Ouezzane and Rabbi Haim Pinto in Essaouira. The Moroccan government provides security
                and logistical support.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a Jewish heritage tour in Morocco cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Half-day walking tours of individual mellahs start from 300 MAD per person in Essaouira and
                from 400 MAD in Fes. Full multi-city heritage circuits covering Casablanca, Marrakech,
                Essaouira, and Fes over 5-7 days start from 12,000 MAD per person, including a specialist
                guide, transport between cities, and site entry fees. Private guides charge from 800 MAD
                per day for tailored itineraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/fes-medina-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes Medina Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate the world&apos;s largest car-free urban area. Includes the mellah, tanneries, and ancient madrasas.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech-medina-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech Medina Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the Red City&apos;s souks, palaces, and historic quarters including the mellah and Lazama Synagogue.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/essaouira-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Essaouira Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover the wind city&apos;s ramparts, art galleries, and its singular Jewish-Muslim heritage.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-history-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <History className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco History Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From Phoenician traders to modern independence — Morocco&apos;s full historical sweep in one guide.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Plan Your Jewish Heritage Journey
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the ancient mellah of Fes to the restored synagogues of Essaouira, Morocco offers a rare window into 2,000 years of Jewish-Muslim coexistence. Guided tours start from 300 MAD.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-jewish-heritage-tour"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Heritage Tours
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

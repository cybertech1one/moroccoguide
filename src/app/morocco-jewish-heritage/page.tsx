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
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Jewish Heritage Guide 2026 | Mellahs, Synagogues & Cultural Sites',
  description:
    'Complete guide to Jewish heritage in Morocco. Explore historic mellahs in Fes, Marrakech, and Essaouira, visit ancient synagogues like Slat al-Fassiyyin and Lazama, discover the Museum of Moroccan Judaism, and learn about King Mohammed V\'s protection of Jews during WWII.',
  keywords: [
    'Morocco Jewish heritage',
    'Jewish quarter Morocco',
    'mellah Morocco',
    'synagogues Morocco',
    'Jewish history Morocco',
    'Slat al-Fassiyyin Fes',
    'Lazama synagogue Marrakech',
    'Beth-El synagogue Casablanca',
    'Museum of Moroccan Judaism',
    'mellah Fes',
    'mellah Marrakech',
    'mellah Essaouira',
    'Jewish cemetery Morocco',
    'Hiloula pilgrimage Morocco',
    'King Mohammed V Jews',
    'Jewish Moroccan cuisine',
    'Jewish tours Morocco',
    'Morocco interfaith heritage',
    'Moroccan Jewish community',
    'Jewish quarter Fes medina',
  ],
  openGraph: {
    title: 'Morocco Jewish Heritage Guide 2026 | Mellahs, Synagogues & Cultural Sites',
    description:
      'Discover Morocco\'s rich Jewish heritage. From ancient mellahs and restored synagogues to the only Jewish museum in the Arab world. A story of centuries of coexistence.',
    url: `${BASE_URL}/morocco-jewish-heritage`,
    images: [
      {
        url: `${BASE_URL}/images/hero-fes-medina.webp`,
        width: 1200,
        height: 630,
        alt: 'Historic mellah quarter in Morocco with traditional architecture and narrow streets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Jewish Heritage Guide 2026 | Mellahs & Synagogues',
    description:
      'Explore Morocco\'s Jewish heritage: historic mellahs, ancient synagogues, the Museum of Moroccan Judaism, and a centuries-long story of coexistence and cultural exchange.',
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
  name: 'Morocco Jewish Heritage Guide 2026 | Mellahs, Synagogues & Cultural Sites',
  description:
    'Complete guide to Jewish heritage in Morocco. Explore historic mellahs, visit ancient synagogues, discover the Museum of Moroccan Judaism, and learn about the centuries of Jewish-Muslim coexistence.',
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
  dateModified: '2026-03-19',
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Jewish Heritage Guide', item: `${BASE_URL}/morocco-jewish-heritage` },
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
        text: 'Yes. Morocco actively preserves its Jewish heritage. Synagogues, mellahs, cemeteries, and the Museum of Moroccan Judaism in Casablanca are open to visitors. Many sites are free or charge a small entry fee from 20 MAD. Guided heritage tours are available in Fes, Marrakech, Essaouira, and Casablanca.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a mellah in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mellah is a historic Jewish quarter in a Moroccan city. The term originates from the Arabic word for salt. Mellahs were established from the 15th century onward and often featured distinctive architecture with balconied houses and interior courtyards. The most famous mellahs are in Fes (the oldest, dating to 1438), Marrakech, and Essaouira.',
      },
    },
    {
      '@type': 'Question',
      name: 'How did King Mohammed V protect Moroccan Jews during WWII?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During World War II, when the Vichy French regime demanded Morocco hand over its Jewish citizens, King Mohammed V famously refused, reportedly saying "There are no Jews in Morocco. There are only Moroccan subjects." He insisted that anti-Jewish laws would not be enforced in his kingdom, protecting the approximately 250,000 Jews living in Morocco at the time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there still Jews living in Morocco today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco is home to the largest Jewish community in the Arab world, with an estimated 2,000-3,000 Jews living primarily in Casablanca, with smaller communities in Marrakech, Fes, Rabat, and Tangier. The community is active and maintains synagogues, schools, and cultural institutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Hiloula pilgrimage in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Hiloula is an annual Jewish pilgrimage tradition where Moroccan Jews, including many who have emigrated to Israel and France, return to visit the tombs of venerated rabbis and saints. The largest Hiloula ceremonies take place at the tombs of Rabbi Amram Ben Diwan near Ouezzane and Rabbi Haim Pinto in Essaouira.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: KEY MELLAHS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const mellahsByCity = [
  {
    city: 'Fes',
    icon: Landmark,
    image: '/images/hero-fes-medina.webp',
    established: '1438',
    description:
      'The Fes mellah is the oldest Jewish quarter in Morocco and one of the oldest in the world. Established in 1438 under the Marinid dynasty, it sits within Fes el-Jdid (New Fes) near the Royal Palace. At its peak, it housed over 250,000 residents and was the spiritual center of Moroccan Jewry. The quarter features distinctive architecture with balconied houses, interior courtyards, and narrow winding streets. Today it contains restored synagogues, a vast Jewish cemetery, and the iconic Aben Danan Synagogue.',
    highlights: ['Oldest mellah in Morocco (1438)', 'Aben Danan Synagogue', 'Ibn Danan Jewish Cemetery', 'Habarim Cemetery with thousands of white tombs'],
  },
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/hero-marrakech-medina.webp',
    established: '1558',
    description:
      'The Marrakech mellah, established in 1558 under the Saadian dynasty, is located southeast of the Royal Palace in the medina. It was once one of the largest Jewish quarters in Morocco, with a population of over 35,000. The quarter features the beautifully restored Lazama Synagogue, a spice market, and traditional fondouks. The mellah\'s architecture is distinctly different from the Muslim quarters, with houses featuring exterior balconies and larger windows. The Jewish cemetery of Miaara is one of the largest Jewish burial grounds in the Islamic world.',
    highlights: ['Lazama Synagogue (17th century)', 'Miaara Jewish Cemetery', 'Mellah spice market', 'Saadian-era fondouks'],
  },
  {
    city: 'Essaouira',
    icon: Globe,
    image: '/images/hero-essaouira-ramparts.webp',
    established: '1764',
    description:
      'Essaouira (formerly Mogador) holds a unique place in Moroccan Jewish history. When Sultan Mohammed III built the city in 1764, he actively invited Jewish merchants and diplomats, known as the Tujjar al-Sultan (merchants of the king), to help develop the port. At one point, Jews made up nearly 40% of the city\'s population. The mellah is integrated into the medina rather than walled off, reflecting the unusual level of integration in Essaouira. The Slat Lkahal Synagogue and Simon Attias Synagogue have been restored and can be visited.',
    highlights: ['Jews comprised 40% of population', 'Slat Lkahal Synagogue', 'Simon Attias Synagogue', 'Bayt Dakira cultural center'],
  },
  {
    city: 'Casablanca',
    icon: Building,
    image: '/images/hero-casablanca-skyline.webp',
    established: '1750s',
    description:
      'Casablanca became the center of Moroccan Jewish life in the 20th century as Jews migrated from smaller cities. The old mellah near the medina dates to the 1750s, but the Jewish community expanded into the Lusitania neighborhood and other modern quarters. Today Casablanca is home to the largest remaining Jewish community in the Arab world, with active synagogues, kosher restaurants, a Jewish school, and the Museum of Moroccan Judaism, the only Jewish museum in the Arab world.',
    highlights: ['Museum of Moroccan Judaism', 'Beth-El Synagogue', 'Temple Beth-El community center', 'Active kosher restaurants'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: KEY SYNAGOGUES
   ═══════════════════════════════════════════════════════════════ */

const keySynagogues = [
  {
    name: 'Slat al-Fassiyyin Synagogue',
    city: 'Fes',
    icon: Landmark,
    century: '17th century',
    price: 'From 20 MAD entry',
    description:
      'One of the oldest synagogues in Morocco, located in the heart of the Fes mellah. Named after Jews who immigrated from Al-Andalus (Islamic Spain), it features stunning tilework, carved wooden ceilings, and a beautifully preserved bimah (raised platform). The synagogue was meticulously restored and serves as both a place of worship during holidays and a cultural heritage site.',
    features: ['Andalusian-style architecture', 'Original 17th-century Torah ark', 'Zellige tilework and carved plaster', 'Restored mikveh (ritual bath)'],
  },
  {
    name: 'Aben Danan Synagogue',
    city: 'Fes',
    icon: Scroll,
    century: '17th century',
    price: 'From 20 MAD entry',
    description:
      'The most visited synagogue in Fes, beautifully restored in 1996 with support from UNESCO. The synagogue is built on multiple levels, with the women\'s gallery above and a mikveh in the basement. The interior blends Hispano-Moorish architectural elements with Jewish religious motifs. Named after the Aben Danan rabbinical family, it is a testament to the craftsmanship shared between Jewish and Muslim artisans.',
    features: ['UNESCO-supported restoration', 'Multi-level design with mikveh', 'Hispano-Moorish woodwork', 'Women\'s gallery with latticed screens'],
  },
  {
    name: 'Lazama Synagogue',
    city: 'Marrakech',
    icon: Star,
    century: '16th century',
    price: 'From 30 MAD entry',
    description:
      'The most significant synagogue in Marrakech, built by Jews expelled from the Iberian Peninsula (Megorashim). Located in the heart of the mellah, the Lazama Synagogue features a peaceful inner courtyard with a fountain, blue-and-white tilework, and a painted wooden ceiling. It remains active for prayer and is considered one of the finest examples of Moroccan-Jewish religious architecture in the country.',
    features: ['Active synagogue with regular services', 'Andalusian courtyard with fountain', 'Blue-and-white decorative tilework', 'Painted wooden ceiling'],
  },
  {
    name: 'Beth-El Synagogue',
    city: 'Casablanca',
    icon: Building,
    century: '20th century',
    price: 'Free (donations welcome)',
    description:
      'The largest active synagogue in Casablanca and one of the most important in the Arab world. Built in the Art Deco style during the French Protectorate era, Beth-El serves the city\'s remaining Jewish community of approximately 2,000 people. The synagogue hosts Shabbat services every Friday evening and Saturday morning. It also functions as a community center with educational programs and cultural events.',
    features: ['Art Deco architecture', 'Regular Shabbat services', 'Community center and events', 'Largest active synagogue in Morocco'],
  },
  {
    name: 'Slat Lkahal Synagogue',
    city: 'Essaouira',
    icon: Globe,
    century: '19th century',
    price: 'From 20 MAD entry',
    description:
      'One of several historic synagogues in Essaouira, Slat Lkahal has been beautifully restored and now forms part of the Bayt Dakira (House of Memory) cultural center. The restoration project preserved the original Star of David motifs, Hebrew inscriptions, and Moroccan-Jewish decorative arts. The surrounding complex includes exhibitions on Jewish life in Essaouira and the port city\'s multicultural history.',
    features: ['Part of Bayt Dakira cultural center', 'Star of David decorative motifs', 'Hebrew and Arabic inscriptions', 'Exhibitions on Jewish-Moroccan life'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HISTORICAL TIMELINE
   ═══════════════════════════════════════════════════════════════ */

const historicalTimeline = [
  { year: '1st century CE', event: 'First Jewish communities established in Morocco, with some historians tracing Jewish presence to the era of King Solomon.' },
  { year: '7th-8th century', event: 'Jewish-Berber tribes coexist. Under early Islamic rule, Jews are granted dhimmi (protected) status.' },
  { year: '1438', event: 'The first mellah is established in Fes under the Marinid dynasty, becoming the model for Jewish quarters across Morocco.' },
  { year: '1492', event: 'Tens of thousands of Sephardic Jews flee the Spanish Inquisition to Morocco, bringing Iberian traditions and the Haketia language.' },
  { year: '1558', event: 'The Marrakech mellah is established by the Saadian dynasty, becoming one of the largest Jewish quarters in North Africa.' },
  { year: '1672-1727', event: 'Under Sultan Moulay Ismail, Jewish merchants serve as trade envoys and diplomats to European courts.' },
  { year: '1764', event: 'Sultan Mohammed III invites Jewish merchants (Tujjar al-Sultan) to manage the new port of Essaouira.' },
  { year: '1912-1956', event: 'During the French Protectorate, Jewish life modernizes. Many Jews move to Casablanca and other modern cities.' },
  { year: '1940-1945', event: 'King Mohammed V refuses to hand over Moroccan Jews to the Vichy regime, protecting approximately 250,000 Jews.' },
  { year: '1948-1960s', event: 'Large-scale emigration to Israel reduces the Jewish population from 250,000 to approximately 50,000.' },
  { year: '2010s-present', event: 'King Mohammed VI funds synagogue renovations, cemetery restoration, and the Bayt Dakira cultural center.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: JEWISH-MOROCCAN CUISINE
   ═══════════════════════════════════════════════════════════════ */

const jewishMoroccanDishes = [
  { name: 'Dafina (Skhina)', description: 'The Moroccan-Jewish Shabbat stew, slow-cooked overnight from Friday to Saturday. Made with beef, chickpeas, potatoes, whole eggs, wheat berries, and warm spices. The Moroccan equivalent of Ashkenazi cholent.', price: 'From 50 MAD at local eateries' },
  { name: 'Pastilla au Poisson', description: 'A Jewish-Moroccan variation of the classic pastilla, using fish instead of pigeon or chicken to comply with kosher dietary laws. Wrapped in warqa pastry with vermicelli, herbs, and a touch of cinnamon.', price: 'From 80 MAD at restaurants' },
  { name: 'Matbucha', description: 'A cooked tomato and roasted pepper salad of Moroccan-Jewish origin, seasoned with garlic, chili, and olive oil. Now a beloved dish throughout Israel and the broader Sephardic world.', price: 'From 25 MAD as a starter' },
  { name: 'Meguina', description: 'A Moroccan-Jewish frittata made with ground meat, herbs, and eggs. Often prepared for Shabbat lunch or holiday celebrations. Each family has its own variation.', price: 'From 40 MAD' },
  { name: 'Mahia', description: 'A traditional Moroccan-Jewish fig or date brandy, distilled at home by Jewish families for generations. Now rare but still produced by a few artisans. It was traditionally served at celebrations and Hiloula gatherings.', price: 'From 100 MAD (specialty shops)' },
  { name: 'Mimouna Sweets', description: 'An array of sweets prepared for the Mimouna celebration at the end of Passover, including mufleta (thin pancakes with butter and honey), and tables laden with dates, nuts, and dried fruits. The Mimouna is a uniquely Moroccan-Jewish tradition.', price: 'From 30 MAD at bakeries' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GUIDED TOURS
   ═══════════════════════════════════════════════════════════════ */

const guidedTours = [
  { city: 'Fes', tour: 'Mellah & Heritage Walk', duration: '3-4 hours', price: 'From 400 MAD', description: 'Aben Danan Synagogue, Slat al-Fassiyyin, Jewish cemetery, and mellah walking tour.' },
  { city: 'Marrakech', tour: 'Jewish Quarter Tour', duration: '2-3 hours', price: 'From 350 MAD', description: 'Lazama Synagogue, Miaara Cemetery, mellah spice market, Saadian-era history.' },
  { city: 'Essaouira', tour: 'Heritage Trail', duration: '2-3 hours', price: 'From 300 MAD', description: 'Bayt Dakira center, restored synagogues, Tujjar al-Sultan merchant history.' },
  { city: 'Casablanca', tour: 'Jewish Heritage Tour', duration: '3-4 hours', price: 'From 500 MAD', description: 'Museum of Moroccan Judaism, Beth-El Synagogue, old mellah, living community.' },
  { city: 'Multi-city', tour: 'Heritage Circuit', duration: '5-7 days', price: 'From 12,000 MAD', description: 'Full circuit: Casablanca, Marrakech, Essaouira, Fes with synagogues, Hiloula sites, kosher dining.' },
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
            <span className="text-white">Morocco Jewish Heritage Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Landmark className="w-4 h-4" />
            History &amp; Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Jewish Heritage Guide:
            <br className="hidden md:block" /> Mellahs, Synagogues &amp; Cultural Sites
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            A thousand years of coexistence. Explore the mellahs, synagogues, cemeteries, and
            living traditions of one of the world&apos;s oldest and most remarkable Jewish communities.
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
                Morocco&apos;s Jewish heritage is one of the most extraordinary chapters in the history of
                the Islamic world. For over 2,000 years, Jewish communities have lived, thrived, and
                shaped Moroccan culture in ways that still resonate today. From the ancient Berber-Jewish
                tribes who predated the Arab conquest to the Sephardic scholars who fled the Spanish Inquisition,
                Moroccan Jews have left an indelible mark on the kingdom&apos;s architecture, cuisine, music,
                and commerce.
              </p>
              <p>
                At its peak in the 1940s, Morocco was home to approximately 250,000 Jews, making it the
                largest Jewish community in the Arab world. Though emigration to Israel and France has reduced
                that number to roughly 2,000-3,000 today, Morocco has done something remarkable: it has
                actively preserved, restored, and celebrated its Jewish heritage. Under King Mohammed VI,
                synagogues have been renovated, cemeteries restored, and cultural centers built to ensure
                this shared history is never forgotten.
              </p>
              <p>
                For travelers, Morocco offers a rare opportunity to explore a living Jewish heritage within
                an Islamic country. From the ancient mellah of Fes to the restored synagogues of Essaouira,
                from the only Jewish museum in the Arab world to the annual Hiloula pilgrimages that draw
                thousands, this guide covers everything you need to plan a meaningful visit.
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
            A Timeline of Jewish Life in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Over two thousand years of history, from ancient Berber-Jewish coexistence to modern heritage preservation.
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

      {/* ── King Mohammed V Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            King Mohammed V: Protector of Morocco&apos;s Jews
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A defining moment in Moroccan history and a symbol of the kingdom&apos;s tradition of tolerance.
          </p>

          <div className="card-moroccan p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                During World War II, when the Vichy French administration imposed anti-Jewish laws across
                French-controlled territories, King Mohammed V took a courageous stand. He refused to
                distinguish between his Muslim and Jewish subjects, famously declaring: &quot;There are
                no Jews in Morocco. There are only Moroccan subjects.&quot; He continued to invite Jewish
                leaders to the throne celebration and insisted that anti-Jewish laws would not apply.
              </p>
              <p>
                While historians debate how fully the Vichy laws were blocked in practice, Mohammed V&apos;s
                stance provided a degree of protection to approximately 250,000 Moroccan Jews during one
                of history&apos;s darkest chapters. Morocco was one of the very few countries in the Muslim
                world where Jewish communities emerged from World War II largely intact.
              </p>
              <p>
                Today, this legacy continues. King Mohammed VI has spoken repeatedly about the importance
                of Morocco&apos;s Jewish heritage. The 2011 Moroccan constitution explicitly recognizes
                the &quot;Hebraic&quot; tributary as part of Morocco&apos;s rich cultural identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mellahs by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Historic Mellahs: The Jewish Quarters of Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city&apos;s mellah tells a unique chapter of the Jewish-Moroccan story. Here are the most significant.
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

      {/* ── Key Synagogues ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scroll className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Key Synagogues to Visit in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s restored synagogues are architectural treasures that blend Jewish religious tradition with Moroccan decorative arts.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months and holiday periods.
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

      {/* ── Museum of Moroccan Judaism ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Museum of Moroccan Judaism
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The only Jewish museum in the Arab world, located in Casablanca&apos;s Oasis neighborhood.
          </p>

          <div className="card-moroccan p-8">
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
                Founded in 1997, the Museum of Moroccan Judaism (Musee du Judaisme Marocain) is the only
                Jewish museum in the Arab world. Its collection spans centuries of Jewish life in Morocco:
                Torah scrolls, Hanukkah menorahs, traditional wedding garments, ceremonial objects, and
                photographs tracing daily life and religious practices across Moroccan Jewish communities.
              </p>
              <p>
                One room reconstructs a typical synagogue interior with a Torah ark, bimah, and traditional
                furnishings. The photographic archive documents communities from the mellahs of Fes and
                Marrakech to the Atlas Mountains. Temporary exhibitions explore Jewish-Moroccan music,
                artisanal crafts, and the diaspora in Israel and France.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Jewish Cemeteries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Jewish Cemeteries of Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Silent witnesses to centuries of Jewish life, Morocco&apos;s Jewish cemeteries are among the most significant in the Sephardic world.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Miaara Cemetery, Marrakech
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                One of the largest Jewish cemeteries in the Islamic world. Thousands of white-painted tombs
                stretch across the grounds adjacent to the mellah, some dating to the 16th century. Maintained
                under royal patronage and open to visitors. Respectful dress expected.
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
                One of the oldest Jewish cemeteries in Morocco with medieval-era tombstones. White-washed
                tombs cover a hillside near the mellah. Several tombs of venerated rabbis serve as Hiloula
                pilgrimage sites. Recently restored with government and international support.
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
                The largest Jewish cemetery in active use in Morocco. Contains graves from the 19th century
                to the present, including a memorial section honoring Moroccan Jews who served in the French
                military during both World Wars.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" /> Free entry</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[var(--color-accent)]" /> Ben M&apos;sik, Casablanca</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Jewish-Moroccan Cuisine ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Jewish-Moroccan Cuisine
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Centuries of Jewish life in Morocco produced a distinctive culinary tradition that blends kosher dietary laws with Moroccan flavors.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary by restaurant, season, and location.
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

      {/* ── Hiloula Pilgrimages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Hiloula: Annual Pilgrimages to Holy Sites
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each year, thousands of Moroccan Jews from around the world return to visit the tombs of venerated rabbis and saints.
          </p>

          <div className="card-moroccan p-8">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Hiloula (from the Aramaic word for &quot;celebration&quot;) is a uniquely Moroccan-Jewish
                tradition: an annual pilgrimage to the tombs of tzaddikim (righteous holy men), typically held
                on the anniversary of the rabbi&apos;s death. Pilgrims travel from Israel, France, Canada, and
                across the world to participate, lighting candles, praying, singing piyyutim (liturgical poems),
                and sharing communal meals.
              </p>
              <p>
                Key Hiloula sites include the tomb of Rabbi Amram Ben Diwan near Ouezzane (the largest annual
                gathering), Rabbi Haim Pinto in Essaouira, and Rabbi David ou Moshe in the Atlas Mountains.
                The Moroccan government facilitates these pilgrimages with security and logistical support,
                and local Muslim communities participate in welcoming the pilgrims.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Rabbi Amram Ben Diwan</h4>
                <p className="text-xs text-[var(--text-muted)]">Near Ouezzane — largest annual Hiloula gathering</p>
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

      {/* ── Modern Jewish Community ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Jewish Community in Morocco Today
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The largest Jewish community in the Arab world, with active institutions and a unique role in Moroccan society.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Building className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Community Size &amp; Location
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                An estimated 2,000-3,000 Jews live in Morocco today, primarily in Casablanca with smaller
                communities in Marrakech, Fes, Rabat, Tangier, and Meknes. The community maintains synagogues,
                schools, a rabbinical court, and social welfare institutions.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Crown className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Royal Patronage
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The Moroccan monarchy has consistently supported the Jewish community. King Mohammed VI has
                funded the restoration of dozens of synagogues and cemeteries, and senior Jewish figures serve
                as royal advisors. Andre Azoulay, a Jewish Moroccan, has been a senior advisor to both King
                Hassan II and King Mohammed VI.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Education &amp; Culture
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The community operates the Ozar Hatorah and Em Habanim schools in Casablanca, providing
                Jewish education alongside the Moroccan national curriculum. Cultural events, concerts of
                Andalusian-Jewish music, and academic conferences on Moroccan-Jewish heritage are held regularly.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Diaspora Connections
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Over one million Israelis trace their roots to Morocco, making Moroccan Jews the largest
                ethnic group in Israel. Hundreds of thousands more live in France, Canada, and Latin America.
                Many return annually for the Hiloula pilgrimages and maintain deep connections with their
                ancestral homeland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guided Tours ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Jewish Heritage Guided Tours
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Expert-led tours bring the history to life. Here are the best options for exploring Morocco&apos;s Jewish heritage.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies during peak tourist months (October-April) and may increase by 15-25%.
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
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
                Heritage sites are open year-round. The best months are March-May and September-November when
                temperatures are comfortable for walking tours. If you want to witness a Hiloula, check the
                specific dates (usually in spring or summer) as they follow the Hebrew calendar.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dress Code &amp; Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dress modestly when visiting synagogues and cemeteries. Men should wear a head covering
                (kippah) inside synagogues; these are often provided at the entrance. Remove shoes if
                requested. Photography is usually permitted but always ask first.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Entry Fees &amp; Donations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most synagogues charge a small entry fee from 20-40 MAD. Cemeteries are generally free but
                donations are appreciated. The Museum of Moroccan Judaism charges from 40 MAD. Tipping the
                caretaker (gardien) from 20 MAD is customary and ensures they can continue maintaining these sites.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hiring a Guide
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A knowledgeable guide transforms the experience. Look for guides who specialize in Jewish
                heritage tours, as general medina guides may have limited knowledge of the mellah&apos;s history.
                Heritage-specific tours start from 300 MAD per person for a half-day tour.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Shabbat Considerations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Synagogues are closed for tourism on Shabbat (Friday sunset to Saturday sunset) and Jewish
                holidays. The Museum of Moroccan Judaism is also closed on Saturdays. Plan your visits
                for Sunday through Friday morning for the best access.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Utensils className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Kosher Dining
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Casablanca has several kosher restaurants and a kosher butcher. In other cities, kosher
                options are very limited. Vegetarian and fish dishes at regular Moroccan restaurants can be
                a practical alternative. Hotels catering to Jewish tourists can often arrange kosher meals
                with advance notice.
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
                Can you visit Jewish heritage sites in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Morocco actively preserves its Jewish heritage. Synagogues, mellahs, cemeteries, and the
                Museum of Moroccan Judaism in Casablanca are open to visitors. Many sites are free or charge a
                small entry fee from 20 MAD. Guided heritage tours are available in Fes, Marrakech, Essaouira,
                and Casablanca.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is a mellah in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A mellah is a historic Jewish quarter in a Moroccan city. The term originates from the Arabic
                word for salt. Mellahs were established from the 15th century onward and often featured
                distinctive architecture with balconied houses and interior courtyards. The most famous mellahs
                are in Fes (the oldest, dating to 1438), Marrakech, and Essaouira.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How did King Mohammed V protect Moroccan Jews during WWII?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                During World War II, when the Vichy French regime demanded Morocco hand over its Jewish citizens,
                King Mohammed V famously refused, reportedly saying &quot;There are no Jews in Morocco. There are
                only Moroccan subjects.&quot; He insisted that anti-Jewish laws would not be enforced in his
                kingdom, protecting the approximately 250,000 Jews living in Morocco at the time.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are there still Jews living in Morocco today?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Morocco is home to the largest Jewish community in the Arab world, with an estimated
                2,000-3,000 Jews living primarily in Casablanca, with smaller communities in Marrakech, Fes,
                Rabat, and Tangier. The community is active and maintains synagogues, schools, and cultural
                institutions.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the Hiloula pilgrimage in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Hiloula is an annual Jewish pilgrimage tradition where Moroccan Jews, including many who
                have emigrated to Israel and France, return to visit the tombs of venerated rabbis and saints.
                The largest Hiloula ceremonies take place at the tombs of Rabbi Amram Ben Diwan near Ouezzane
                and Rabbi Haim Pinto in Essaouira.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
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
                Discover the wind city&apos;s Portuguese ramparts, art galleries, and its unique Jewish-Muslim heritage.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into Morocco&apos;s diverse cultural heritage: Berber, Arab, Andalusian, and Jewish traditions.
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

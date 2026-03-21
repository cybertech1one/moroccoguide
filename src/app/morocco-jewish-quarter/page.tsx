import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
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
  Camera,
  Compass,
  Map,
  Crown,
  History,
  GraduationCap,
  Scroll,
  HandHeart,
  CircleDot,
  CheckCircle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Mellah Guide 2026 | Jewish Quarters, Synagogues & Heritage Sites',
  description:
    'Explore Morocco\'s historic Jewish quarters (mellahs) in Fes, Marrakech, Essaouira, and Meknes. Visit Ibn Danan and Slat al-Azama synagogues, the Museum of Moroccan Judaism, Jewish cemeteries, and discover 2,000 years of Jewish-Moroccan coexistence.',
  keywords: [
    'Morocco mellah guide',
    'Jewish quarter Morocco',
    'mellah Fes',
    'mellah Marrakech',
    'Ibn Danan Synagogue',
    'Slat al-Azama Synagogue',
    'Beth-El Synagogue Casablanca',
    'Museum of Moroccan Judaism',
    'Jewish cemetery Morocco',
    'Jewish heritage Morocco',
    'Jewish Moroccan cuisine',
    'Haim Pinto pilgrimage',
    'Mohammed V Jews WWII',
    'Essaouira Jewish history',
    'Miara Cemetery Marrakech',
    'Morocco synagogues',
    'Jewish community Morocco',
    'Bayt Dakira Essaouira',
    'mellah Meknes',
    'kosher food Morocco',
    'hiloula Morocco pilgrimage',
    'Moroccan Jewish diaspora',
  ],
  openGraph: {
    title: 'Morocco Mellah Guide 2026 | Jewish Quarters, Synagogues & Heritage',
    description:
      'Discover Morocco\'s Jewish quarters, historic synagogues, cemeteries, and the only Jewish museum in the Arab world. A 2,000-year story of coexistence and cultural exchange.',
    url: `${BASE_URL}/morocco-jewish-quarter`,
    images: [
      {
        url: `${BASE_URL}/images/hero-fes.webp`,
        width: 1200,
        height: 630,
        alt: 'Historic mellah architecture in Fes, Morocco with ornate balconies and narrow streets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Mellah Guide 2026 | Jewish Quarters & Heritage Sites',
    description:
      'Explore 2,000 years of Jewish-Moroccan history across Fes, Marrakech, Essaouira, and Meknes. Synagogues, cemeteries, cuisine, and the story of King Mohammed V.',
    images: [`${BASE_URL}/images/hero-fes.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-jewish-quarter` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelGuide',
      '@id': `${BASE_URL}/morocco-jewish-quarter`,
      name: 'Morocco Mellah Guide 2026 | Jewish Quarters, Synagogues & Heritage Sites',
      description:
        'Comprehensive guide to Morocco\'s historic Jewish quarters (mellahs), synagogues, cemeteries, museums, cuisine, and the story of Jewish-Moroccan coexistence spanning over 2,000 years.',
      url: `${BASE_URL}/morocco-jewish-quarter`,
      image: `${BASE_URL}/images/hero-fes.webp`,
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
      datePublished: '2026-03-21',
      dateModified: '2026-03-21',
      mainEntityOfPage: `${BASE_URL}/morocco-jewish-quarter`,
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
          { '@type': 'ListItem', position: 2, name: 'Morocco Jewish Quarter Guide', item: `${BASE_URL}/morocco-jewish-quarter` },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a mellah in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A mellah is the historic Jewish quarter found in many Moroccan cities. The word comes from the Arabic for "salt" and refers to the walled districts where Jewish communities lived, often near the royal palace. Mellahs typically feature distinctive architecture with wooden balconies, narrow streets, synagogues, and cemeteries.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you visit synagogues in Morocco as a non-Jewish tourist?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Most restored synagogues in Morocco are open to visitors of all faiths. The Ibn Danan Synagogue in Fes, Slat al-Azama in Marrakech, and Beth-El in Casablanca all welcome tourists. A small donation (from 20 MAD) is appreciated. Some synagogues have a caretaker who can provide historical context.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is the Museum of Moroccan Judaism?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Museum of Moroccan Judaism (Musee du Judaisme Marocain) is located in Casablanca\'s Oasis neighborhood. It is the only Jewish museum in the Arab world. Open Sunday through Friday, entry costs from 40 MAD. The museum displays Torah scrolls, ceremonial objects, traditional clothing, and photographs documenting Jewish life in Morocco.',
          },
        },
        {
          '@type': 'Question',
          name: 'How did King Mohammed V protect Moroccan Jews during WWII?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'During the Vichy French occupation (1940-1943), King Mohammed V (Sultan at the time) refused to implement antisemitic laws against Moroccan Jews. He reportedly declared "There are no Jews in Morocco, only Moroccan subjects." He continued to invite Jewish leaders to the throne celebration and shielded the community from deportation, a stance that Moroccan Jews remember with deep gratitude to this day.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many Jews still live in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Morocco has the largest Jewish community in the Arab world, though numbers have declined from roughly 250,000 in the 1940s to approximately 2,000-3,000 today. Most live in Casablanca, with smaller communities in Marrakech, Fes, Tangier, and Rabat. The community maintains active synagogues, schools, and cultural institutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Haim Pinto pilgrimage in Essaouira?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Hiloula of Rabbi Haim Pinto is an annual pilgrimage held in Essaouira, typically in September. Thousands of Jewish Moroccans and descendants from Israel, France, and Canada return to visit the tomb of Rabbi Haim Pinto, a revered 18th-century kabbalist. The multi-day event includes prayers, communal meals, and music.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the best Jewish-Moroccan dishes to try?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Jewish-Moroccan cuisine includes dafina (the Shabbat slow-cooked stew, similar to Muslim adafina), pastilla (flaky pastry with pigeon or chicken), matbucha (cooked tomato and pepper salad), maakouda (potato fritters), fish chermoula, and almond-based pastries. Many of these dishes are now part of mainstream Moroccan cooking.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it safe for Jewish travelers to visit Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Morocco is considered one of the safest countries in the Arab world for Jewish travelers. The government actively protects Jewish heritage sites, has restored dozens of synagogues and cemeteries, and maintains diplomatic relations with Israel. Jewish tourists regularly visit without issues, and heritage tours are widely available.',
          },
        },
      ],
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
    founded: '1438',
    status: 'Oldest mellah in Morocco',
    description:
      'The first Jewish quarter in Morocco, created by the Marinid dynasty adjacent to the Royal Palace in Fes el-Jdid. Distinguished by wooden balconies overlooking the streets (a unique mellah feature), a dense network of alleys, and several synagogues including the restored Ibn Danan Synagogue.',
    highlights: [
      'Ibn Danan Synagogue (17th century, fully restored)',
      'Habarim Cemetery — one of Morocco\'s largest Jewish cemeteries',
      'Distinctive wooden-balcony architecture',
      'Adjacent to the Royal Palace of Fes el-Jdid',
    ],
  },
  {
    city: 'Marrakech',
    icon: Star,
    founded: '1558',
    status: 'Largest mellah by area',
    description:
      'Established by the Saadian dynasty near the Bahia and El Badi Palaces, the Marrakech mellah was the largest Jewish quarter in Morocco by area. Today it retains its original street layout and several synagogues. The Lazama Synagogue (Slat al-Azama) remains active and is the most visited Jewish site in the city.',
    highlights: [
      'Slat al-Azama (Lazama) Synagogue — still active, stunning blue tiles',
      'Miara Cemetery — whitewashed tombs covering a vast hillside',
      'Proximity to Bahia Palace and El Badi Palace',
      'Original street layout preserved from the 16th century',
    ],
  },
  {
    city: 'Essaouira',
    icon: Globe,
    founded: '1764',
    status: 'Trading port heritage',
    description:
      'Sultan Mohammed III invited Jewish merchants to settle in Essaouira in the 18th century to develop international trade. Known as tujjar al-sultan (merchants of the king), Jews controlled most of the port\'s European commerce and made up nearly 40% of the population. The Bayt Dakira heritage center (2020) now preserves this history.',
    highlights: [
      'Bayt Dakira (House of Memory) heritage center',
      'Rabbi Haim Pinto tomb and annual pilgrimage site',
      'Jewish traders controlled 80% of port commerce in the 1800s',
    ],
  },
  {
    city: 'Meknes',
    icon: Crown,
    founded: '17th century',
    status: 'Imperial city mellah',
    description:
      'Established during Moulay Ismail\'s reign, adjacent to his imperial palace complex. Smaller than Fes or Marrakech but an important center of Jewish scholarship. Today it offers a quieter, less-touristic experience for visitors interested in mellah architecture without crowds.',
    highlights: [
      'Compact quarter with original gate entrance',
      'Jewish cemetery with ornate tombstones',
      'Walking distance from the main medina and Bab Mansour',
    ],
  },
  {
    city: 'Tangier',
    icon: Compass,
    founded: '15th century',
    status: 'International crossroads',
    description:
      'Tangier\'s Jewish community had a unique cosmopolitan character shaped by the city\'s status as an international zone (1923-1956). Jews from Spain, Portugal, and the Mediterranean created a multilingual community. The Nahon Synagogue (1878) combines Moorish and European design. The hillside cemetery contains graves dating back centuries.',
    highlights: [
      'Nahon Synagogue — Moorish-European fusion architecture',
      'Old Jewish cemetery overlooking the Strait of Gibraltar',
      'Historically multilingual community (Haketia, Arabic, French, Spanish)',
    ],
  },
  {
    city: 'Rabat & Sale',
    icon: Building2,
    founded: '17th century',
    status: 'Capital district',
    description:
      'Rabat\'s mellah, near the kasbah, served the royal court. Across the river in Sale, the Jewish quarter has Merinid-era roots. Today, Rabat maintains an active Jewish community center and a beautifully maintained cemetery, with royal patronage driving heritage preservation.',
    highlights: [
      'Mellah within walking distance of the Kasbah des Oudaias',
      'Sale mellah with Merinid-era heritage',
      'Active Jewish community center',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: KEY SYNAGOGUES
   ═══════════════════════════════════════════════════════════════ */

const keySynagogues = [
  {
    name: 'Ibn Danan Synagogue',
    city: 'Fes',
    century: '17th century',
    description:
      'The most important restored synagogue in Morocco. Built in the 17th century and restored by UNESCO, it features a sunken mikveh (ritual bath) in the basement, a carved wooden bimah (reading platform), and painted walls with Hebrew inscriptions. The synagogue sits at the heart of the Fes mellah and is the primary stop on any Jewish heritage tour of the city.',
    visitInfo: 'Open daily, from 20 MAD donation, caretaker provides tours',
  },
  {
    name: 'Slat al-Azama (Lazama) Synagogue',
    city: 'Marrakech',
    description:
      'One of the few functioning synagogues in Morocco. Built in the 16th century by Jewish refugees expelled from Spain (the name "Azama" refers to al-Andalus), it features extraordinary blue-and-white tilework, a central bimah with brass railings, and a women\'s gallery above. The courtyard is particularly photogenic. This synagogue holds regular Shabbat services when enough community members are present.',
    century: '16th century',
    visitInfo: 'Open Sunday-Friday, from 20 MAD donation, closed Shabbat',
  },
  {
    name: 'Beth-El Synagogue',
    city: 'Casablanca',
    description:
      'The main active synagogue of Casablanca\'s Jewish community and one of the largest in Africa. Built in the Art Deco style during the French Protectorate era, it features stunning stained glass windows, marble floors, and can seat several hundred worshippers. Beth-El hosts regular services, holiday celebrations, and community events. It represents the continuity of Jewish life in modern Morocco.',
    century: '20th century (1947)',
    visitInfo: 'Active synagogue, visits by arrangement, contact the community',
  },
  {
    name: 'Slat al-Fassiyine Synagogue',
    city: 'Essaouira',
    description:
      'Now part of the Bayt Dakira heritage complex, this synagogue was built by Jewish families from Fes who settled in Essaouira. Carefully restored with its original wooden ark, brass chandeliers, and zellige floor tiles. The synagogue sits within the broader Bayt Dakira museum, providing historical context about the Jewish merchant community that drove Essaouira\'s golden age of trade.',
    century: '18th century',
    visitInfo: 'Open as part of Bayt Dakira, from 30 MAD entry',
  },
  {
    name: 'Nahon Synagogue',
    city: 'Tangier',
    description:
      'A striking 19th-century synagogue blending Moorish arches with European Neo-Classical elements. Named after the Nahon family, prominent Tangier merchants, it reflects the city\'s cosmopolitan Jewish community. The interior features colorful geometric tiles, carved stucco, and a magnificent brass chandelier. The synagogue has been restored and occasionally hosts cultural events.',
    century: '19th century (1878)',
    visitInfo: 'Open by appointment, contact the Tangier Jewish community',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HISTORICAL TIMELINE
   ═══════════════════════════════════════════════════════════════ */

const historicalTimeline = [
  { year: '3rd c. BCE', event: 'First Jewish settlements in North Africa, trading communities along the Moroccan coast.' },
  { year: '70 CE', event: 'Roman destruction of the Second Temple. Jewish refugees settle across North Africa including Morocco.' },
  { year: '7th-8th c.', event: 'Arab conquest. Jewish communities recognized as dhimmi (protected people) under Islamic law.' },
  { year: '1147', event: 'Almohad dynasty forces conversions. Many Jews flee to Spain or practice in secret.' },
  { year: '1438', event: 'First official mellah established in Fes by the Marinid Sultan, near the royal palace.' },
  { year: '1492', event: 'Expulsion from Spain. Thousands of Sephardic Jews arrive, bringing Ladino language and Andalusian customs.' },
  { year: '1558', event: 'Saadian dynasty establishes the Marrakech mellah. Jewish goldsmiths and traders become integral to the economy.' },
  { year: '1764', event: 'Sultan Mohammed III invites Jewish merchants to Essaouira to manage international trade.' },
  { year: '1912-1956', event: 'French Protectorate era. Jews gain access to French education and begin moving outside the mellahs.' },
  { year: '1940-1943', event: 'King Mohammed V refuses Vichy antisemitic laws, shielding Moroccan Jews from deportation.' },
  { year: '1948-1967', event: 'Mass emigration to Israel and France. Jewish population drops from 250,000 to under 50,000.' },
  { year: '2020', event: 'Morocco normalizes relations with Israel. Bayt Dakira opens. Heritage restoration accelerates.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: JEWISH-MOROCCAN CUISINE
   ═══════════════════════════════════════════════════════════════ */

const jewishMoroccanDishes = [
  {
    name: 'Dafina (Skhina)',
    description: 'The Jewish Shabbat stew, slow-cooked overnight from Friday to Saturday. Made with beef or lamb, chickpeas, potatoes, whole eggs cooked in their shells (huevos haminados), wheat berries, and warm spices. The long, slow cooking produces a deeply flavored, falling-apart tender dish. Each family had its own recipe variation.',
    origin: 'Shabbat tradition — cooking before sundown Friday',
  },
  {
    name: 'Pastilla (Sweet Pigeon Pie)',
    description: 'A layered pastry filled with pigeon (or chicken), almonds, eggs, and cinnamon, wrapped in warqa (paper-thin dough) and dusted with powdered sugar. Food historians trace this dish to the Andalusian Jewish and Muslim communities who brought it from Spain. It remains one of Morocco\'s most celebrated dishes.',
    origin: 'Andalusian Jewish-Muslim culinary exchange',
  },
  {
    name: 'Matbucha',
    description: 'A slow-cooked salad of roasted tomatoes, roasted peppers, garlic, and olive oil. Originally a Jewish-Moroccan dish, it has become one of the most popular appetizers in Israeli cuisine. The name means "cooked salad" in Arabic. Best eaten with fresh bread as a starter.',
    origin: 'North African Jewish communities',
  },
  {
    name: 'Fish Chermoula',
    description: 'White fish marinated in chermoula sauce (cilantro, cumin, paprika, lemon, garlic) and baked or fried. Fish on Friday night was a widespread custom among Moroccan Jews, and the chermoula preparation became the signature style. Often served with a tahini or tomato-based sauce.',
    origin: 'Friday night Shabbat dinner tradition',
  },
  {
    name: 'Maakouda',
    description: 'Crispy potato fritters made from seasoned mashed potato, formed into patties, and deep-fried until golden. A staple of Jewish-Moroccan street food that crossed over into mainstream Moroccan cuisine. Found at every market stall and sandwich shop in the country today.',
    origin: 'Jewish-Moroccan street food',
  },
  {
    name: 'Boyoz & Almond Pastries',
    description: 'Sephardic pastries adapted with Moroccan almonds, orange blossom water, and honey. Moroccan Jewish bakers were famous for their pastry skills, and many recipes for fekkas (crunchy biscotti-like cookies), ghriba (almond cookies), and cornes de gazelle originated in or were refined by Jewish kitchens.',
    origin: 'Sephardic-Moroccan pastry tradition',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoJewishQuarterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-fes.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Jewish Quarter Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Landmark className="w-4 h-4" />
            Heritage &amp; History
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Mellah Guide:
            <br className="hidden md:block" /> Jewish Quarters, Synagogues &amp; Heritage
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Over 2,000 years of Jewish life in Morocco. From the oldest mellah in Fes to the
            only Jewish museum in the Arab world. A story of coexistence, commerce, and culture
            that shaped the Morocco we know today.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Mellah: Morocco&apos;s Jewish Quarter
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco holds a distinction unlike any other country in the Arab world: a continuous
                Jewish presence spanning more than two millennia. Long before the Arab conquest, Jewish
                communities traded along the coast and settled in Berber mountain villages. When
                Sephardic Jews were expelled from Spain in 1492, Morocco became a primary refuge. At
                its peak in the 1940s, the Jewish population numbered roughly 250,000.
              </p>
              <p>
                The <strong>mellah</strong> &mdash; the walled Jewish quarter found in every major
                Moroccan city &mdash; is the architectural footprint of this history. The word derives
                from Arabic for &ldquo;salt.&rdquo; Mellahs were positioned near the royal palace,
                placing the community under direct royal protection. Each had its own synagogues,
                cemeteries, markets, and communal ovens.
              </p>
              <p>
                Today, most mellahs have been absorbed into the broader medina. The distinctive wooden
                balconies, synagogue courtyards, and whitewashed cemeteries make the mellah an essential
                stop for anyone seeking to understand Morocco&apos;s full history.
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
            Mellahs Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every major Moroccan city had a mellah. These six are the most significant for visitors,
            each with distinct character and surviving heritage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mellahsByCity.map((mellah) => {
              const MellahIcon = mellah.icon;
              return (
                <div key={mellah.city} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center flex-shrink-0">
                      <MellahIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {mellah.city} Mellah
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-[var(--color-accent)] font-semibold">
                          Founded: {mellah.founded}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">{mellah.status}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {mellah.description}
                  </p>
                  <div className="space-y-2">
                    {mellah.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--text-secondary)]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Key Synagogues ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Historic Synagogues to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has restored dozens of synagogues. These five are the most significant and accessible,
            spanning five cities and five centuries of architecture.
          </p>

          <div className="space-y-6">
            {keySynagogues.map((synagogue) => (
              <div key={synagogue.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {synagogue.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-xs text-[var(--color-accent)]">
                        <MapPin className="w-3 h-3" />
                        {synagogue.city}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <Calendar className="w-3 h-3" />
                        {synagogue.century}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {synagogue.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] bg-[var(--surface-muted)] rounded-lg px-3 py-2">
                  <Info className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  {synagogue.visitInfo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Museum of Moroccan Judaism ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <GraduationCap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Museum of Moroccan Judaism
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            The only Jewish museum in the Arab world, located in Casablanca.
          </p>

          <div className="card-moroccan p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <MapPin className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Location</p>
                <p className="text-xs text-[var(--text-secondary)]">Oasis neighborhood, Casablanca</p>
              </div>
              <div className="text-center">
                <Clock className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Hours</p>
                <p className="text-xs text-[var(--text-secondary)]">Sunday-Friday, 10:00-17:00</p>
              </div>
              <div className="text-center">
                <CircleDot className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Entry</p>
                <p className="text-xs text-[var(--text-secondary)]">From 40 MAD (seasonal pricing may vary)</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Founded in 1997, the Musee du Judaisme Marocain is the only museum in the Arab world
                dedicated to Jewish history. The collection includes Torah scrolls, menorahs, Hanukkah
                lamps, ceremonial textiles, traditional clothing (including bridal attire), photographs,
                and documents chronicling Jewish life across Morocco over centuries.
              </p>
              <p>
                Organized thematically: one room covers religious life and synagogue artifacts, another
                reconstructs domestic interiors from Fes and Marrakech, and a photography gallery shows
                the community at work and celebration throughout the 20th century. Allow 90 minutes
                for a thorough visit. About 20 minutes by taxi from central Casablanca. Commentary
                available in French and English.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Jewish Cemeteries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scroll className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Jewish Cemeteries in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s Jewish cemeteries are among the most poignant heritage sites, many containing
            tombs of revered rabbis that draw annual pilgrimages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Miara Cemetery, Marrakech
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The largest Jewish cemetery in Morocco, with thousands of whitewashed tombs covering a
                hillside in the mellah. Graves date from the 17th century onward. The cemetery includes
                the tombs of several renowned rabbis and is maintained by the Marrakech Jewish community.
                Visitors should dress modestly and ask for the caretaker at the entrance.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Habarim Cemetery, Fes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Located at the edge of the Fes mellah, this cemetery holds tombs from the 15th century
                onward. Many graves bear Hebrew inscriptions and decorative carvings. The cemetery provides
                a contemplative space away from the bustle of the medina and is typically accessible via the
                mellah caretaker who holds the keys.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Rabbi Haim Pinto Tomb, Essaouira
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The tomb of Rabbi Haim Pinto (1748-1845), a revered kabbalist and miracle worker,
                draws thousands of pilgrims each year during the annual hiloula. Located within the
                Jewish cemetery of Essaouira, the tomb is painted blue and white and surrounded by
                offerings and candles left by devotees from around the world.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tangier Jewish Cemetery
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Perched on the hillside above the medina with views toward the Strait of Gibraltar,
                the Tangier Jewish cemetery contains graves from multiple centuries and reflects the
                city&apos;s cosmopolitan Jewish community. Sephardic, Ashkenazi, and local Moroccan
                traditions are all represented in the tombstone styles and inscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Historical Timeline ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <History className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            2,000 Years of Jewish Life in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A timeline of the key moments that shaped Jewish-Moroccan history, from ancient trading
            settlements to the modern era of heritage restoration.
          </p>

          <div className="space-y-4">
            {historicalTimeline.map((entry, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-32 flex-shrink-0 text-right">
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                    {entry.year}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                  {index < historicalTimeline.length - 1 && (
                    <div className="w-0.5 h-full bg-[var(--color-accent)]/20 min-h-[2rem]" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {entry.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── King Mohammed V and WWII ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            King Mohammed V &amp; the Protection of Moroccan Jews
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One of the most significant chapters in Moroccan Jewish history unfolded during World War II.
          </p>

          <div className="card-moroccan p-8">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                When France fell to Nazi Germany in 1940, Morocco came under Vichy authority.
                The Vichy administration attempted to impose antisemitic legislation including
                restrictions on Jewish property, employment, and schooling &mdash; part of a
                broader program across French North Africa.
              </p>
              <p>
                Sultan Mohammed V resisted. He reportedly told the Vichy Resident-General:
                <em>&ldquo;There are no Jews in Morocco. There are no Muslims in Morocco.
                There are only Moroccan subjects.&rdquo;</em> He continued inviting Jewish
                leaders to the throne celebration, a public gesture of solidarity.
              </p>
              <p>
                The Sultan lacked military power to directly block Vichy policies. Some laws were
                technically applied. But his refusal to sign deportation orders, public inclusion
                of Jewish leaders, and behind-the-scenes interventions meant no Moroccan Jew was
                deported to a European camp &mdash; unlike the fate of communities in Vichy-controlled
                Algeria and Tunisia.
              </p>
              <p>
                Today, King Mohammed VI continues this protective legacy. The 2011 constitution
                recognized the &ldquo;Hebraic&rdquo; component of Moroccan identity, a first for
                any Arab-majority nation. Dozens of synagogues and cemeteries have been restored
                under royal patronage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Haim Pinto Pilgrimage ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Hiloula: Pilgrimage to Rabbi Haim Pinto
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Morocco&apos;s most significant Jewish pilgrimage draws thousands to Essaouira each year.
          </p>

          <div className="card-moroccan p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  A hiloula is a celebration on the anniversary of a revered rabbi&apos;s death.
                  Morocco has dozens of hiloula sites, but Rabbi Haim Pinto&apos;s in Essaouira is
                  the largest. Rabbi Pinto (1748-1845) was a kabbalist and healer whose descendants
                  established a rabbinical dynasty continuing today in Israel.
                </p>
                <p>
                  The annual hiloula, typically in September, brings 3,000-5,000 pilgrims from Israel,
                  France, and Canada. The multi-day event includes prayers at the tomb, communal meals,
                  Andalusian-Moroccan music, and a procession through the old mellah.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    Pilgrimage Details
                  </h4>
                  <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span>Typically September (Hebrew calendar)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span>Jewish Cemetery, Essaouira</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span>3,000-5,000 pilgrims annually</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    Other Notable Hiloula Sites
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                    <li className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-[var(--color-gold)]" />
                      Rabbi Amram Ben Diwan &mdash; Ouezzane
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-[var(--color-gold)]" />
                      Rabbi David ou Moshe &mdash; Anti-Atlas
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-[var(--color-gold)]" />
                      Rabbi Shlomo Ben Hensh &mdash; Ourika Valley
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Jewish-Moroccan Cuisine ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Jewish-Moroccan Cuisine
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Centuries of coexistence produced a shared culinary tradition. Many dishes that are now considered
            &ldquo;Moroccan classics&rdquo; have roots in Jewish-Moroccan kitchens, and vice versa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jewishMoroccanDishes.map((dish) => (
              <div key={dish.name} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {dish.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {dish.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <BookOpen className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  <span>{dish.origin}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modern Jewish Community ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Modern Jewish Community in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco remains home to the largest Jewish community in the Arab world, with active institutions
            and growing engagement from the diaspora.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-moroccan p-5 text-center">
              <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)] mb-1">2,000-3,000</p>
              <p className="text-sm text-[var(--text-secondary)]">Jewish residents today</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)] mb-1">~250,000</p>
              <p className="text-sm text-[var(--text-secondary)]">Jewish population at peak (1940s)</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)] mb-1">1 million+</p>
              <p className="text-sm text-[var(--text-secondary)]">Israeli citizens of Moroccan origin</p>
            </div>
          </div>

          <div className="card-moroccan p-8">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Most of Morocco&apos;s remaining Jewish community lives in Casablanca, maintaining
                synagogues, a community center, the Ecole Maimonide school, and a home for the elderly.
                Smaller communities in Marrakech, Rabat, Fes, and Tangier each number only a handful
                of families. Andre Azoulay, a Jewish Moroccan, has served as a senior royal adviser
                for decades.
              </p>
              <p>
                The normalization of Morocco-Israel relations in 2020 opened direct flights between
                Casablanca and Tel Aviv. Tens of thousands of Israeli tourists of Moroccan origin now
                visit annually, returning to mellahs and synagogues their grandparents called home.
                This &ldquo;roots tourism&rdquo; is a growing segment of Morocco&apos;s travel
                industry, with specialized heritage tour operators offering multi-city itineraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Visiting Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Visiting Mellahs &amp; Heritage Sites
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Photography Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Photography is generally allowed at restored synagogues and cemeteries, but always ask
                first. Some caretakers prefer no flash photography inside synagogues. At cemeteries,
                photograph respectfully and avoid stepping on graves. Active synagogues may restrict
                photography during services.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HandHeart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Donations &amp; Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most heritage sites are maintained by caretakers who work on donations. A tip of 20-50
                MAD is standard for a personal tour. At the Museum of Moroccan Judaism, entry is from
                40 MAD. Donations to synagogue restoration are always appreciated and can be made through
                the community organizations.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Map className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hiring a Guide
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A local guide is strongly recommended for mellah visits. Many sites are unmarked and easy
                to miss. In Fes, a certified guide who knows the mellah can take you to hidden synagogues
                and workshops that independent visitors would never find. Licensed guides cost from 400 MAD
                for a half-day tour. Specialized Jewish heritage tour operators offer multi-city itineraries.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Timing Your Visit
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Synagogues and the museum are closed on Saturdays (Shabbat) and Jewish holidays.
                Cemeteries may have limited access on those days too. Weekday mornings are the quietest
                time to visit. If planning around the Haim Pinto hiloula, book Essaouira accommodation
                months in advance as the city fills up during the pilgrimage.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Compass className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Suggested Multi-City Route
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                For a comprehensive Jewish heritage tour: start in Casablanca (museum, Beth-El Synagogue),
                then Marrakech (Lazama Synagogue, Miara Cemetery, mellah), then Essaouira (Bayt Dakira,
                Rabbi Pinto tomb), and finish in Fes (Ibn Danan Synagogue, Habarim Cemetery, mellah).
                Allow at least 7-10 days for this route.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Shield className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dress Code &amp; Respect
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dress modestly when visiting synagogues and cemeteries. Men should have a head covering
                available for entering synagogues (kippot are sometimes provided). At cemeteries, avoid
                sitting on tombstones and maintain a respectful atmosphere. Jewish and non-Jewish visitors
                are equally welcome at all heritage sites.
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
                What is a mellah in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A mellah is the historic Jewish quarter found in many Moroccan cities. The word comes from
                the Arabic for &ldquo;salt&rdquo; and refers to the walled districts where Jewish communities
                lived, often adjacent to the royal palace. Mellahs feature distinctive architecture with
                wooden balconies, narrow streets, synagogues, and cemeteries. The first mellah was
                established in Fes in 1438.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can you visit synagogues in Morocco as a non-Jewish tourist?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Most restored synagogues in Morocco are open to visitors of all faiths. The Ibn Danan
                Synagogue in Fes, Slat al-Azama in Marrakech, and Beth-El in Casablanca all welcome
                tourists. A small donation (from 20 MAD) is appreciated. Some synagogues have a caretaker
                who can provide historical context and a guided walk-through.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where is the Museum of Moroccan Judaism?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Musee du Judaisme Marocain is located in Casablanca&apos;s Oasis neighborhood. It is the
                only Jewish museum in the Arab world. Open Sunday through Friday, entry costs from 40 MAD.
                The collection includes Torah scrolls, ceremonial objects, traditional clothing, and photographs
                documenting Jewish life across Morocco.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How did King Mohammed V protect Moroccan Jews during World War II?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                During the Vichy occupation (1940-1943), Sultan Mohammed V refused antisemitic deportation
                orders, declaring there were only Moroccan subjects. He continued inviting Jewish leaders
                to the throne celebration. No Moroccan Jew was deported to a European camp.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How many Jews still live in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Approximately 2,000-3,000, the largest Jewish community in the Arab world. Most live in
                Casablanca. The community declined from 250,000 in the 1940s due to emigration. Over
                1 million Israeli citizens trace their ancestry to Morocco.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the Haim Pinto pilgrimage in Essaouira?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Hiloula of Rabbi Haim Pinto is an annual pilgrimage held in Essaouira, typically in
                September. Thousands of Jewish Moroccans and descendants from Israel, France, and Canada
                return to visit the tomb of Rabbi Haim Pinto, a revered 18th-century kabbalist. The multi-day
                event includes prayers, communal meals, Andalusian-Moroccan music, and a procession through
                the old mellah.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the best Jewish-Moroccan dishes to try?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Key dishes include dafina (the Shabbat slow-cooked stew), pastilla (flaky pastry with chicken
                and almonds), matbucha (cooked tomato and pepper salad), fish chermoula (marinated baked fish),
                maakouda (potato fritters), and various almond-based pastries. Many of these have crossed over
                into mainstream Moroccan and Israeli cuisine.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it safe for Jewish travelers to visit Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is widely considered one of the safest destinations in the Arab world for Jewish
                travelers. The government actively protects Jewish heritage sites, maintains diplomatic
                relations with Israel, and has a strong security apparatus around sensitive locations. Direct
                flights operate between Casablanca and Tel Aviv. Jewish tourists visit regularly, and specialized
                heritage tours are widely available.
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
            <Link href="/jewish-heritage" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Jewish Heritage Overview
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Broader guide including festivals, kosher options, and Morocco-Israel relations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/history" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <History className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                History of Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From ancient Berber kingdoms to the modern monarchy across millennia.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/medina-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Map className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Medina Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate Morocco&apos;s ancient walled cities where the mellahs are located.
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
            Plan Your Jewish Heritage Tour of Morocco
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the ancient mellahs of Fes to the synagogues of Marrakech and the Bayt Dakira in
            Essaouira &mdash; a 2,000-year story of coexistence unmatched in the Arab world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-itinerary-7-days"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-[family-name:var(--font-heading)] font-semibold hover:bg-white/90 transition-colors"
            >
              7-Day Itinerary
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-[family-name:var(--font-heading)] font-semibold hover:bg-white/10 transition-colors"
            >
              Browse Tours
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

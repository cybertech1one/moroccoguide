import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Calendar,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Music,
  Film,
  Sparkles,
  Heart,
  Users,
  Ticket,
  Camera,
  Sun,
  Moon,
  Info,
  Globe,
  BookOpen,
  Flame,
  Compass,
  Flower2,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/moroccan-festivals`;

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Festival Calendar 2025-2026 | Gnaoua, Rose Festival, Mawazine & More | CityGuide',
  description:
    'Complete month-by-month guide to Moroccan festivals and events. Gnaoua World Music Festival, Rose Festival, Mawazine, Fes Festival of Sacred Music, Marrakech Film Festival, Ramadan, moussems, and cultural celebrations. Dates, locations, tickets, and accommodation tips.',
  keywords: [
    'Morocco festivals',
    'Morocco festival calendar',
    'Gnaoua Festival Essaouira',
    'Rose Festival Morocco',
    'Mawazine Rabat',
    'Fes Sacred Music Festival',
    'Marrakech Film Festival',
    'Ramadan Morocco',
    'Morocco cultural events',
    'Fantasia Morocco',
    'Tbourida',
    'Morocco moussem',
    'Date Festival Erfoud',
    'Tanjazz Tangier',
    'Almond Blossom Festival',
    'Morocco events 2025',
    'Morocco events 2026',
  ],
  openGraph: {
    title: 'Morocco Festival Calendar - CityGuide',
    description:
      'Month-by-month guide to Morocco festivals: Gnaoua, Rose Festival, Mawazine, Sacred Music, Film Festival, Ramadan, and more.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-festival-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan festival scene with musicians, dancers, and traditional costumes',
      },
    ],
  },
  alternates: { canonical: PAGE_URL },
};

/* ===================================================================
   JSON-LD
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Morocco Festival Calendar',
  description:
    'Complete month-by-month guide to Moroccan festivals and cultural events with dates, locations, and practical information.',
  url: PAGE_URL,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Moroccan Festivals', item: PAGE_URL },
    ],
  },
};

/* ===================================================================
   DATA: FESTIVALS BY MONTH
   =================================================================== */

const festivalCalendar = [
  {
    month: 'January',
    festivals: [
      {
        name: 'Marrakech Marathon',
        location: 'Marrakech',
        dates: 'Late January',
        icon: Users,
        description: 'One of Africa\'s most scenic marathons. The route passes through the medina, past the Koutoubia Mosque, along the ramparts, and through the Palmerie. Full marathon, half marathon, and 10K options. Around 13,000 runners from 70+ countries participate. Registration opens September.',
        tickets: 'from 200 MAD registration',
        accommodation: 'Book 2+ months ahead -- hotels fill up quickly.',
        image: '/images/hero-festival-morocco.webp',
      },
    ],
  },
  {
    month: 'February',
    festivals: [
      {
        name: 'Almond Blossom Festival',
        location: 'Tafraoute, Anti-Atlas',
        dates: 'Mid-February (when almond trees bloom)',
        icon: Flower2,
        description: 'The Anti-Atlas town of Tafraoute celebrates the annual almond blossom season with a week of Berber music, traditional dance, local produce markets, and cultural performances. The surrounding valley turns white and pink with blossoms against the dramatic red granite backdrop -- one of Morocco\'s most photogenic moments.',
        tickets: 'Free entry to most events',
        accommodation: 'Limited hotels in Tafraoute -- book early. Guesthouses and riads available.',
        image: '/images/hero-festival-morocco.webp',
      },
    ],
  },
  {
    month: 'March',
    festivals: [
      {
        name: 'Ramadan (dates vary)',
        location: 'Nationwide',
        dates: 'Approximately February 28 - March 30, 2025 / March 17 - April 16, 2026 (varies by moon)',
        icon: Moon,
        description: 'The holy month of fasting from dawn to sunset. While not a festival, Ramadan transforms Morocco\'s daily rhythm. The streets empty by day and come alive after sunset when families break the fast (ftour) with harira, dates, chebakia, and elaborate meals. The atmosphere after sunset is magical -- streets fill with people, cafes buzz, and there is a sense of communal celebration.',
        tickets: 'N/A',
        accommodation: 'Normal pricing. Many restaurants close during the day but open for sunset.',
        image: '/images/poster-ramadan.webp',
      },
    ],
  },
  {
    month: 'April',
    festivals: [
      {
        name: 'Rose Festival (Festival des Roses)',
        location: 'Kelaat M\'gouna, Dades Valley',
        dates: 'Late April / Early May',
        icon: Flower2,
        description: 'The Dades Valley, known as the "Valley of Roses," celebrates the annual rose harvest with a spectacular three-day festival. Local women pick Damascena roses at dawn, and the town hosts parades, Berber music, traditional dances, a Rose Queen competition, and markets selling rosewater, rose oil, and rose products. The entire valley is perfumed with roses.',
        tickets: 'Free entry',
        accommodation: 'Guesthouses in Kelaat M\'gouna and nearby Boumalne Dades. Book 1 month ahead.',
        image: '/images/photo-rose-harvest-valley.webp',
      },
    ],
  },
  {
    month: 'May',
    festivals: [
      {
        name: 'Fes Festival of World Sacred Music',
        location: 'Fes',
        dates: 'Late May / Early June',
        icon: Music,
        description: 'Founded in 1994, this is one of Morocco\'s most prestigious cultural events. Musicians from across the globe perform sacred and spiritual music in the magnificent courtyard of the Bab Makina palace and at Dar Batha. Sufi qawwali from Pakistan, Gregorian chants, Jewish liturgical music, Hindu devotional songs, and Gnaoua all share the same stage. The night concerts in the medina are transcendent.',
        tickets: 'from 200 MAD per concert (some free events)',
        accommodation: 'Riads in the Fes medina fill up fast. Book 2 months ahead.',
        image: '/images/hero-festival-morocco.webp',
      },
    ],
  },
  {
    month: 'June',
    festivals: [
      {
        name: 'Gnaoua World Music Festival',
        location: 'Essaouira',
        dates: 'Late June (4 days)',
        icon: Music,
        description: 'The biggest and most beloved music festival in Morocco. Gnaoua musicians -- spiritual healers whose music traces back to sub-Saharan African traditions -- collaborate with international artists (jazz, blues, rock, world) for electrifying fusion performances. Free outdoor stages on the beach and in Place Moulay Hassan, plus ticketed concerts. Over 500,000 attendees annually. The energy is indescribable.',
        tickets: 'Main outdoor stages are FREE. Indoor concerts from 300 MAD.',
        accommodation: 'Book 2-3 months ahead. Essaouira triples its prices during the festival.',
        image: '/images/hero-gnaoua-festival.webp',
      },
      {
        name: 'Mawazine Festival',
        location: 'Rabat',
        dates: 'Mid-June (5 days)',
        icon: Music,
        description: 'One of the largest music festivals in the world by attendance (2.5+ million). Massive international headliners (past acts: Rihanna, Elton John, Maroon 5, David Guetta) alongside Arabic pop stars and Moroccan artists. Multiple stages across Rabat. The OLM Souissi stage hosts international acts, while Nahda stage features Arabic and Moroccan artists.',
        tickets: 'Most stages are FREE. VIP access available for select concerts.',
        accommodation: 'Rabat has ample hotel capacity. Still book 1 month ahead for best options.',
        image: '/images/hero-festival-morocco.webp',
      },
    ],
  },
  {
    month: 'July',
    festivals: [
      {
        name: 'Festival of Popular Arts (Fantasia)',
        location: 'Marrakech',
        dates: 'Early July',
        icon: Star,
        description: 'A celebration of Moroccan traditional arts held in the El Badi Palace ruins. Features Tbourida (fantasia) -- the spectacular cavalry charge where horsemen in traditional dress fire muskets in perfect unison. Also includes Gnaoua trance music, Berber dancers, Saharan performers, and traditional craftsmen from across the kingdom. A living showcase of Morocco\'s diverse cultural heritage.',
        tickets: 'from 100 MAD',
        accommodation: 'Marrakech has abundant accommodation. Moderate pricing in July.',
        image: '/images/hero-fantasia-tbourida.webp',
      },
    ],
  },
  {
    month: 'August',
    festivals: [
      {
        name: 'Moussem of Moulay Idriss',
        location: 'Moulay Idriss Zerhoun',
        dates: 'Late August / Early September',
        icon: Star,
        description: 'The largest and most important moussem (religious pilgrimage festival) in Morocco, honoring Moulay Idriss I, the founder of the first Moroccan dynasty and great-grandson of Prophet Muhammad. Pilgrims gather from across the country for prayer, Sufi brotherhood ceremonies, fantasia (Tbourida), markets, and communal meals. Non-Muslims can attend the outdoor celebrations but not enter the shrine.',
        tickets: 'Free (outdoor events)',
        accommodation: 'Limited in Moulay Idriss -- stay in nearby Meknes (30 min drive).',
        image: '/images/photo-fantasia-tbourida.webp',
      },
    ],
  },
  {
    month: 'September',
    festivals: [
      {
        name: 'Tanjazz Festival',
        location: 'Tangier',
        dates: 'Mid-September (4 days)',
        icon: Music,
        description: 'Tangier\'s international jazz festival brings world-class jazz, blues, and fusion musicians to intimate venues across the city. Concerts in historic palaces, rooftop terraces, and the Cervantes Theatre. Tangier\'s cosmopolitan heritage as a meeting point of cultures makes it the perfect backdrop for jazz. A more intimate, sophisticated alternative to the larger festivals.',
        tickets: 'from 100 MAD per concert',
        accommodation: 'Tangier has good hotel availability. Book 2 weeks ahead.',
        image: '/images/hero-festival-morocco.webp',
      },
    ],
  },
  {
    month: 'October',
    festivals: [
      {
        name: 'Date Festival (Festival des Dattes)',
        location: 'Erfoud, Ziz Valley',
        dates: 'Late October (3 days)',
        icon: Sun,
        description: 'The oasis town of Erfoud celebrates the annual date harvest with this unique festival. Dates are sacred in Moroccan culture -- the traditional food for breaking Ramadan fast. The festival features date tastings (Morocco has dozens of varieties, with Majhoul being the most prized), camel races, Berber music, folklore performances, and a date queen competition. Also a gateway to Sahara desert trips.',
        tickets: 'Free entry',
        accommodation: 'Desert camps and hotels in Erfoud and nearby Rissani. Book ahead.',
        image: '/images/hero-festival-morocco.webp',
      },
    ],
  },
  {
    month: 'November',
    festivals: [
      {
        name: 'Marrakech International Film Festival (FIFM)',
        location: 'Marrakech',
        dates: 'Late November / Early December',
        icon: Film,
        description: 'Founded in 2001, the FIFM has become one of Africa\'s premier film festivals. International and Moroccan films screen at the Palais des Congres, and open-air screenings in Jemaa el-Fnaa attract thousands. Past guests include Martin Scorsese, Francis Ford Coppola, and numerous international stars. The red carpet events and tributes draw global media attention.',
        tickets: 'Screenings from 30 MAD. Some free outdoor screenings.',
        accommodation: 'Marrakech prices spike during the festival. Book 1-2 months early.',
        image: '/images/hero-festival-morocco.webp',
      },
    ],
  },
  {
    month: 'December',
    festivals: [
      {
        name: 'New Year Celebrations',
        location: 'Marrakech, Casablanca, Tangier',
        dates: 'December 31',
        icon: Sparkles,
        description: 'While Morocco is a Muslim country, New Year\'s Eve is widely celebrated in the major cities, especially in tourist areas. Upscale hotels and riads host gala dinners, Jemaa el-Fnaa fills with celebrators, and Casablanca\'s Corniche and clubs have major parties. Fireworks are common. Marrakech is the most popular destination for New Year\'s in Morocco.',
        tickets: 'Hotel galas: from 800 MAD per person',
        accommodation: 'Peak pricing everywhere. Book 2-3 months ahead, especially Marrakech.',
        image: '/images/hero-festival-morocco.webp',
      },
    ],
  },
];

/* ===================================================================
   DATA: TRADITIONAL CELEBRATIONS
   =================================================================== */

const traditionalEvents = [
  {
    name: 'Tbourida (Fantasia)',
    description: 'A spectacular equestrian tradition where a line of horsemen in traditional dress charge at full gallop and fire their muskets simultaneously in a thunderous volley. Performed at moussems, national celebrations, and cultural festivals throughout the year. UNESCO Intangible Cultural Heritage since 2021. The most common in the Doukkala region and at the Marrakech Festival of Popular Arts.',
    when: 'Year-round at regional moussems; July in Marrakech',
    image: '/images/photo-fantasia-tbourida.webp',
  },
  {
    name: 'Eid al-Fitr',
    description: 'The celebration marking the end of Ramadan. Three days of feasting, family visits, new clothes, and gifts. Streets fill with joy after a month of fasting. Special pastries (kaab el ghazal, briouats) are prepared, and families gather for elaborate meals. Banks and government offices close for 2-3 days.',
    when: 'The day after Ramadan ends (varies by lunar calendar)',
    image: '/images/hero-festival-morocco.webp',
  },
  {
    name: 'Eid al-Adha',
    description: 'The "Festival of Sacrifice" -- the most important religious holiday in Morocco. Every family that can afford it sacrifices a sheep, commemorating Abraham\'s willingness to sacrifice his son. The atmosphere in the days leading up is electric -- sheep markets appear everywhere. Families share the meat with neighbors and the poor. Banks and businesses close for 3-4 days.',
    when: 'Approximately June 6-8, 2025 / May 26-28, 2026 (varies by lunar calendar)',
    image: '/images/hero-festival-morocco.webp',
  },
  {
    name: 'Mawlid (Prophet\'s Birthday)',
    description: 'The celebration of the birth of Prophet Muhammad. Families prepare special foods, children receive gifts, and mosques hold special prayers and Quran recitations. Processions with candles and lanterns in some cities. A public holiday with a festive, spiritual atmosphere.',
    when: 'Approximately September 4, 2025 / August 24, 2026 (varies by lunar calendar)',
    image: '/images/hero-festival-morocco.webp',
  },
  {
    name: 'Yennayer (Amazigh New Year)',
    description: 'The Berber/Amazigh New Year, celebrated on January 13 or 14. Recognized as a national holiday in Morocco since 2023. Traditional Berber foods are prepared (couscous with seven vegetables, dried fruits, tagine), families gather, and cultural performances celebrate Amazigh heritage. Particularly vibrant in the Atlas Mountains and Rif region.',
    when: 'January 13-14 annually (fixed date, not lunar)',
    image: '/images/hero-berber-culture.webp',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccanFestivalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Moroccan Festivals</li>
        </ol>
      </nav>

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-festival-morocco.webp"
            alt="Vibrant Moroccan festival scene with traditional musicians and colorful costumes"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Events &amp; Culture
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Festival Calendar
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From the Gnaoua Festival on the Atlantic coast to rose harvests in the Dades Valley, Morocco celebrates
              with music, food, and tradition throughout the year. Plan your trip around these extraordinary events.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <div className="container-morocco">
        <p className="text-xs text-[var(--text-muted)] italic py-2 text-center">All prices are approximate and may vary by season, location, and operator.</p>
      </div>

      {/* ============================================================
          QUICK STATS
          ============================================================ */}
      <section className="container-morocco -mt-8 relative z-10 mb-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Calendar, label: 'Events Covered', value: '15+' },
            { icon: Music, label: 'Music Festivals', value: '5 Major' },
            { icon: Users, label: 'Mawazine Attendance', value: '2.5M+' },
            { icon: Ticket, label: 'Free Festivals', value: 'Most!' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#A0522D]/10 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 text-[#A0522D]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          MONTH-BY-MONTH CALENDAR
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Month by Month</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Festival Calendar 2025-2026
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click through each month to discover Morocco&apos;s vibrant festival scene. Religious holidays follow the Islamic
            lunar calendar and shift approximately 10-11 days earlier each year.
          </p>
        </div>

        <div className="space-y-12">
          {festivalCalendar.map((monthData) => (
            <div key={monthData.month} id={monthData.month.toLowerCase()}>
              {/* Month header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#A0522D] text-white flex items-center justify-center font-bold text-lg">
                  {monthData.month.slice(0, 3)}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gray-900">
                  {monthData.month}
                </h3>
              </div>

              {/* Festival cards */}
              <div className="space-y-6">
                {monthData.festivals.map((festival) => (
                  <div
                    key={festival.name}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative">
                        <img
                          src={festival.image}
                          alt={`${festival.name} in ${festival.location}, Morocco`}
                          loading="lazy"
                          className="w-full h-48 md:h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {festival.location}
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <festival.icon className="w-5 h-5 text-[#A0522D]" />
                          <h4 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900">
                            {festival.name}
                          </h4>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 text-[#C4960C]" />
                          <span className="text-sm font-medium text-[#C4960C]">{festival.dates}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">{festival.description}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div className="bg-[#FAF8F5] rounded-lg p-3">
                            <p className="text-xs text-gray-500 mb-1">Tickets</p>
                            <p className="text-sm font-medium text-gray-800">{festival.tickets}</p>
                          </div>
                          <div className="bg-[#FAF8F5] rounded-lg p-3">
                            <p className="text-xs text-gray-500 mb-1">Accommodation</p>
                            <p className="text-sm font-medium text-gray-800">{festival.accommodation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          TRADITIONAL CELEBRATIONS
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Cultural Heritage</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Traditional Celebrations &amp; Holidays
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond the organized festivals, Morocco&apos;s calendar is punctuated by religious holidays and traditional
              celebrations that offer the most authentic cultural experiences.
            </p>
          </div>

          <div className="space-y-6">
            {traditionalEvents.map((event) => (
              <div
                key={event.name}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="sm:w-1/4 relative">
                  <img
                    src={event.image}
                    alt={`${event.name} celebration in Morocco`}
                    loading="lazy"
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>
                <div className="sm:w-3/4 p-5 md:p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-2">
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-[#C4960C]" />
                    <span className="text-sm font-medium text-[#C4960C]">{event.when}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          GNAOUA HIGHLIGHT
          ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-gnaoua-festival.webp"
            alt="Gnaoua musicians performing at the Essaouira Gnaoua World Music Festival"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative container-morocco py-16 md:py-24 text-white">
          <div className="max-w-2xl">
            <p className="text-[#C4960C] font-semibold text-sm uppercase tracking-widest mb-3">Must-Attend</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4">
              Gnaoua World Music Festival
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              If you can only attend one festival in Morocco, make it this one. For four days every June, the
              Atlantic-coast town of Essaouira becomes the world capital of Gnaoua music -- an ancient spiritual
              tradition rooted in sub-Saharan African heritage. International musicians collaborate with Gnaoua
              masters (maalems) for unique fusion performances that happen nowhere else. The main stages are free.
              The ocean breeze, the sunset concerts, the late-night trance sessions in the medina -- it is
              unforgettable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/essaouira"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                <Compass className="w-4 h-4" /> Essaouira Guide
              </Link>
              <Link
                href="/music"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Music className="w-4 h-4" /> Moroccan Music Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FANTASIA / TBOURIDA
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img
              src="/images/photo-fantasia-tbourida.webp"
              alt="Tbourida horsemen in traditional Moroccan dress charging in a fantasia cavalry display"
              loading="lazy"
              className="rounded-2xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">UNESCO Heritage</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-4">
              Tbourida -- The Fantasia
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              One of Morocco&apos;s most spectacular traditions. A line of horsemen in flowing white robes and turbans,
              mounted on decorated horses, charge at full gallop and fire their muskets in perfect unison with a
              thunderous crack. Inscribed as UNESCO Intangible Cultural Heritage in 2021.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Tbourida is performed at moussems (religious pilgrimages), national celebrations, and cultural
              festivals across the country. Each region has its own horsemen teams (sorbas), and competitions are
              fierce. The synchronization of the final volley is what judges look for.
            </p>
            <div className="bg-[#FAF8F5] rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Where to see Tbourida:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Star className="w-3 h-3 text-[#C4960C] mt-1.5 flex-shrink-0" />
                  <span>Marrakech Festival of Popular Arts (July)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-3 h-3 text-[#C4960C] mt-1.5 flex-shrink-0" />
                  <span>Moussem of Moulay Idriss (August-September)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-3 h-3 text-[#C4960C] mt-1.5 flex-shrink-0" />
                  <span>Salon du Cheval, El Jadida (October)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-3 h-3 text-[#C4960C] mt-1.5 flex-shrink-0" />
                  <span>National Throne Day celebrations (July 30)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          RAMADAN SECTION
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Special Season</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visiting During Ramadan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ramadan is a special time to visit Morocco. While it requires some adjustment, the spiritual atmosphere
              and the nightly ftour (breaking of the fast) celebrations are deeply memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Clock, title: 'Changed rhythms', detail: 'Shops and restaurants may close during the day or have reduced hours. The pace of life slows. Many Moroccans nap in the afternoon. The real action begins at sunset.' },
              { icon: Moon, title: 'Ftour (sunset meal)', detail: 'The daily fast is broken at sunset with dates, harira soup, chebakia pastries, hard-boiled eggs, and juice. Restaurants set up special ftour menus. Being invited to a family ftour is a treasured experience.' },
              { icon: Music, title: 'Night comes alive', detail: 'After ftour, the streets fill with people. Cafes buzz until late. Markets stay open past midnight. The atmosphere is festive and communal. A unique time to experience Moroccan culture.' },
              { icon: Heart, title: 'Etiquette for visitors', detail: 'Non-Muslims are not required to fast, but eating, drinking, and smoking in public during daylight hours is considered disrespectful. Tourist restaurants and riads serve meals discreetly.' },
              { icon: Sun, title: 'Special foods', detail: 'Ramadan brings unique foods: chebakia (honey-sesame cookies), harira, briouats (stuffed pastries), sellou, and special breads. The variety at sunset is extraordinary.' },
              { icon: Info, title: 'Practical impact', detail: 'Some tourist sites may have reduced hours. Alcohol is harder to find. Transportation runs normally. Hotels and riads serve breakfast to guests. Travel is still perfectly feasible.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <item.icon className="w-5 h-5 text-[#A0522D]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PLANNING TIPS
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Be Prepared</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Festival Planning Tips
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Ticket, title: 'Book accommodation early', detail: 'Festival periods see hotel prices double or triple. Book 2-3 months in advance for Gnaoua, Mawazine, and the Marrakech Film Festival. Smaller festivals require less lead time.' },
            { icon: Camera, title: 'Photography tips', detail: 'Most festivals welcome photography. Ask before photographing individuals, especially at religious events. The light is best at golden hour. Bring a wide-angle lens for crowd shots and intimate portraits.' },
            { icon: Globe, title: 'Check dates carefully', detail: 'Islamic holidays follow the lunar calendar and shift each year. Music festival dates are announced 2-4 months in advance. Always verify current dates before booking flights.' },
            { icon: Users, title: 'Be respectful at religious events', detail: 'At moussems and religious celebrations, dress conservatively, ask permission before entering areas, and follow local guidance. Non-Muslims are welcome at outdoor events but not at shrines.' },
          ].map((tip) => (
            <div key={tip.title} className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5">
              <div className="w-10 h-10 rounded-lg bg-[#A0522D]/10 flex items-center justify-center flex-shrink-0">
                <tip.icon className="w-5 h-5 text-[#A0522D]" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Plan Your Festival Trip
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Combine a festival with city exploration, desert adventures, or coastal relaxation
            for the ultimate Moroccan experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/best-time"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Calendar className="w-4 h-4" /> Best Time to Visit
            </Link>
            <Link
              href="/music"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Music className="w-4 h-4" /> Moroccan Music Guide
            </Link>
            <Link
              href="/culture"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-4 h-4" /> Culture Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          EXPLORE MORE
          ============================================================ */}
      <ExploreMore
        currentCategory="culture"
        currentHref="/moroccan-festivals"
        title="Continue Exploring Morocco"
      />
    </>
  );
}

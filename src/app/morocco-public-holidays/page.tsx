import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  Calendar,
  Sun,
  Clock,
  BookOpen,
  Users,
  Lightbulb,
  Sparkles,
  MapPin,
  Heart,
  CheckCircle,
  AlertTriangle,
  Star,
  Globe,
  Flag,
  Building2,
  PartyPopper,
  Moon,
  Briefcase,
  ShoppingBag,
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
  title: 'Morocco Public Holidays 2025 & 2026 | Complete National Holiday Calendar & Guide',
  description:
    'Complete guide to Morocco public holidays for 2025 and 2026. Fixed national holidays, Islamic holidays with lunar calendar dates, impact on travel, what closes, Eid celebrations, Throne Day festivities, and tips for planning your visit around Moroccan holidays.',
  keywords: [
    'Morocco public holidays',
    'Moroccan holidays 2025',
    'Moroccan holidays 2026',
    'Morocco national holidays',
    'Morocco national holidays calendar',
    'Morocco holiday calendar',
    'Eid al-Fitr Morocco',
    'Eid al-Adha Morocco',
    'Throne Day Morocco',
    'Morocco bank holidays',
    'Islamic holidays Morocco',
    'Morocco Independence Day',
    'Mawlid Morocco',
    'Morocco holiday dates',
    'when are holidays in Morocco',
    'Morocco public holiday list',
  ],
  openGraph: {
    title: 'Morocco Public Holidays 2025 & 2026 | Complete National Holiday Calendar',
    description:
      'Full list of Morocco public holidays for 2025-2026. Fixed and Islamic holidays, travel impact, celebrations, and practical planning tips for visitors.',
    url: `${BASE_URL}/morocco-public-holidays`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan flag and festive celebrations representing the complete Morocco public holidays guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Public Holidays 2025 & 2026 | Holiday Calendar & Guide',
    description:
      'Every Morocco public holiday explained: dates, traditions, travel impact, and what to expect as a visitor during Moroccan national celebrations.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-public-holidays` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-public-holidays`,
  name: 'Morocco Public Holidays 2025 & 2026 | Complete National Holiday Calendar & Guide',
  description:
    'Complete guide to Morocco public holidays covering fixed national holidays, Islamic holidays with lunar calendar dates, impact on travelers, celebrations, and practical tips for planning your visit around Moroccan holidays.',
  url: `${BASE_URL}/morocco-public-holidays`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-public-holidays`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Public Holidays', item: `${BASE_URL}/morocco-public-holidays` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many public holidays does Morocco have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has approximately 13 official public holidays per year: 8 fixed national holidays based on the Gregorian calendar and 5 Islamic holidays based on the lunar Hijri calendar. The Islamic holiday dates shift by approximately 10-11 days earlier each year relative to the Gregorian calendar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do shops and restaurants close on Moroccan public holidays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Government offices, banks, and post offices close on all public holidays. Many shops in the medinas remain open, especially those catering to tourists. Restaurants in tourist areas generally stay open, though some local eateries may close, particularly during Islamic holidays like Eid al-Adha. Supermarkets in major cities often operate on reduced hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Throne Day in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Throne Day (Fete du Trone) is celebrated on July 30th and marks the anniversary of King Mohammed VI ascending to the throne in 1999. It is one of Morocco\'s most important national holidays featuring military parades, fireworks, public concerts, and illuminated buildings across every city. The celebrations often last several days.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is Eid al-Adha in Morocco in 2025 and 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eid al-Adha dates depend on the Islamic lunar calendar and are confirmed by moon sighting. In 2025, Eid al-Adha is expected around June 6-8. In 2026, it is expected around May 26-28. The holiday lasts for 2-3 days, during which most businesses close and families gather for the traditional sheep sacrifice and communal feasting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I avoid traveling to Morocco during public holidays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. While some services are reduced, public holidays offer unique cultural experiences unavailable at other times. Throne Day and Independence Day feature spectacular celebrations. However, during Eid al-Adha, many businesses close for 2-3 days, domestic transport is extremely busy, and the atmosphere may not appeal to all visitors. For business travel, avoid all public holidays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do ATMs and banks work on Moroccan public holidays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ATMs remain operational 24/7 on all public holidays. However, bank branches close on every public holiday. If you need in-branch banking services, plan around the holiday schedule. Currency exchange offices in tourist areas often remain open on holidays, though with potentially shorter hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens during the Green March holiday on November 6?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Green March (La Marche Verte) commemorates the 1975 peaceful march of 350,000 Moroccan civilians into the Western Sahara to reclaim the territory from Spanish colonial rule. On November 6, official ceremonies are held, government buildings display flags and portraits, and patriotic events take place across the country. It is a day of national pride.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are museums and tourist sites open on Moroccan holidays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most major museums and tourist sites remain open on Moroccan public holidays, often with adjusted hours. Popular sites like the Bahia Palace, Jardin Majorelle, Hassan II Mosque, and Volubilis ruins typically welcome visitors. However, during the first day of Eid al-Fitr and Eid al-Adha, some smaller museums and government-run sites may close. Always check specific attraction schedules around major Islamic holidays.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: FIXED NATIONAL HOLIDAYS
   ═══════════════════════════════════════════════════════════════ */

const fixedHolidays = [
  { date: 'January 1', name: 'New Year\'s Day', arabic: 'Ras as-Sana al-Miladia', detail: 'Marks the Gregorian New Year. Government offices and banks close, but Morocco does not celebrate as extensively as Western countries. Hotels and tourist areas function normally. Some Moroccans hold private gatherings on New Year\'s Eve.', icon: Calendar },
  { date: 'January 11', name: 'Independence Manifesto Day', arabic: 'Takdim Wathiqat al-Istiqlal', detail: 'Commemorates the 1944 presentation of the Manifesto of Independence to Sultan Mohammed V, demanding Morocco\'s freedom from French rule. Official ceremonies, flag displays, and patriotic speeches mark the day. It is a significant political holiday.', icon: BookOpen },
  { date: 'May 1', name: 'Labour Day', arabic: 'Eid ach-Choghl', detail: 'International Workers\' Day is a full public holiday. Workers\' unions organize marches and rallies in major cities, particularly Casablanca and Rabat. All government offices, banks, and many private businesses close. Tourist services continue.', icon: Briefcase },
  { date: 'July 30', name: 'Throne Day', arabic: 'Eid al-Arch', detail: 'Morocco\'s grandest national celebration, marking King Mohammed VI\'s accession to the throne in 1999. Military parades, fireworks, public concerts, illuminated buildings, and street festivals across every city. Celebrations often extend over multiple days.', icon: Star },
  { date: 'August 20', name: 'Revolution of the King and the People Day', arabic: 'Thawrat al-Malik wa al-Sha\'b', detail: 'Commemorates the 1953 uprising against French colonial authorities who exiled Sultan Mohammed V. Patriotic ceremonies, speeches, and cultural events honor the national resistance. Government buildings display flags and portraits.', icon: Flag },
  { date: 'August 21', name: 'Youth Day', arabic: 'Eid al-Chabab', detail: 'Celebrates the birthday of King Mohammed VI. Youth-oriented events, sporting competitions, and cultural activities take place nationwide. Coming back-to-back with Revolution Day, this creates a two-day holiday period in August.', icon: PartyPopper },
  { date: 'November 6', name: 'Green March Day', arabic: 'Dhikra al-Massira al-Khadra', detail: 'Commemorates the 1975 peaceful march of 350,000 Moroccan civilians into the Western Sahara. Official ceremonies, patriotic events, and televised speeches mark this important day of national unity and territorial pride.', icon: Globe },
  { date: 'November 18', name: 'Independence Day', arabic: 'Eid al-Istiqlal', detail: 'Morocco\'s biggest patriotic holiday, celebrating independence from French and Spanish protectorates in 1956. Parades, flag ceremonies, fireworks, and public festivities take place across the kingdom. Many Moroccans enjoy extended celebrations.', icon: Flag },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ISLAMIC HOLIDAYS
   ═══════════════════════════════════════════════════════════════ */

const islamicHolidays = [
  { name: 'Eid al-Fitr', arabic: 'Eid al-Fitr', duration: '2 days', detail: 'Marks the end of Ramadan fasting. One of Morocco\'s most joyous celebrations with families wearing new clothes, exchanging gifts, and sharing elaborate feasts. Streets come alive with music and celebration. Sweet pastries like kaab el ghazal and chebakia are exchanged between households.', icon: Sparkles },
  { name: 'Eid al-Adha', arabic: 'Eid al-Kabir', duration: '2 days', detail: 'The "Festival of Sacrifice" is Morocco\'s most significant religious holiday. Families purchase a sheep in the weeks before and perform the ritual sacrifice on the morning of Eid. Communal meals, family visits, and charity define the celebration. Many businesses close for 2-3 days. Known locally as "Eid al-Kabir" (the Big Eid).', icon: Heart },
  { name: 'Islamic New Year', arabic: 'Fatih Muharram', duration: '1 day', detail: 'Marks the first day of Muharram, the first month of the Islamic calendar. A quieter holiday compared to the Eids, observed with prayers and reflection. Some families prepare special meals. Government offices close but tourist services are largely unaffected.', icon: Moon },
  { name: 'Mawlid (Prophet\'s Birthday)', arabic: 'Eid al-Mawlid an-Nabawi', duration: '2 days', detail: 'Celebrates the birth of Prophet Muhammad. Moroccans mark the occasion with prayers, Quran recitations, communal gatherings, and traditional sweets. Children receive treats and gifts. Mosques are beautifully decorated and hold special services throughout the day and evening.', icon: BookOpen },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HOLIDAY CALENDAR 2025-2026
   ═══════════════════════════════════════════════════════════════ */

const holidayCalendar2025 = [
  { date: 'Jan 1', holiday: 'New Year\'s Day', type: 'Fixed', day: 'Wednesday' },
  { date: 'Jan 11', holiday: 'Independence Manifesto Day', type: 'Fixed', day: 'Saturday' },
  { date: 'Mar 30-31', holiday: 'Eid al-Fitr', type: 'Islamic', day: 'Sun-Mon' },
  { date: 'May 1', holiday: 'Labour Day', type: 'Fixed', day: 'Thursday' },
  { date: 'Jun 6-7', holiday: 'Eid al-Adha', type: 'Islamic', day: 'Fri-Sat' },
  { date: 'Jun 27', holiday: 'Islamic New Year', type: 'Islamic', day: 'Friday' },
  { date: 'Jul 30', holiday: 'Throne Day', type: 'Fixed', day: 'Wednesday' },
  { date: 'Aug 20', holiday: 'Revolution Day', type: 'Fixed', day: 'Wednesday' },
  { date: 'Aug 21', holiday: 'Youth Day', type: 'Fixed', day: 'Thursday' },
  { date: 'Sep 5-6', holiday: 'Mawlid', type: 'Islamic', day: 'Fri-Sat' },
  { date: 'Nov 6', holiday: 'Green March Day', type: 'Fixed', day: 'Thursday' },
  { date: 'Nov 18', holiday: 'Independence Day', type: 'Fixed', day: 'Tuesday' },
] as const;

const holidayCalendar2026 = [
  { date: 'Jan 1', holiday: 'New Year\'s Day', type: 'Fixed', day: 'Thursday' },
  { date: 'Jan 11', holiday: 'Independence Manifesto Day', type: 'Fixed', day: 'Sunday' },
  { date: 'Mar 20-21', holiday: 'Eid al-Fitr', type: 'Islamic', day: 'Fri-Sat' },
  { date: 'May 1', holiday: 'Labour Day', type: 'Fixed', day: 'Friday' },
  { date: 'May 27-28', holiday: 'Eid al-Adha', type: 'Islamic', day: 'Wed-Thu' },
  { date: 'Jun 17', holiday: 'Islamic New Year', type: 'Islamic', day: 'Wednesday' },
  { date: 'Jul 30', holiday: 'Throne Day', type: 'Fixed', day: 'Thursday' },
  { date: 'Aug 20', holiday: 'Revolution Day', type: 'Fixed', day: 'Thursday' },
  { date: 'Aug 21', holiday: 'Youth Day', type: 'Fixed', day: 'Friday' },
  { date: 'Aug 26-27', holiday: 'Mawlid', type: 'Islamic', day: 'Wed-Thu' },
  { date: 'Nov 6', holiday: 'Green March Day', type: 'Fixed', day: 'Friday' },
  { date: 'Nov 18', holiday: 'Independence Day', type: 'Fixed', day: 'Wednesday' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TRAVELER IMPACT
   ═══════════════════════════════════════════════════════════════ */

const travelerImpact = [
  { category: 'Government Offices & Banks', status: 'Closed', detail: 'All government offices, embassies, post offices, and banks close on every public holiday. ATMs continue operating 24/7. Plan any official business or banking needs around the holiday schedule.', icon: Building2 },
  { category: 'Tourist Attractions', status: 'Mostly open', detail: 'Major museums, palaces, and historic sites typically remain open on public holidays, often with adjusted hours. Popular sites like Bahia Palace, Jardin Majorelle, and Hassan II Mosque welcome visitors. Smaller, government-run museums may close on Eids.', icon: Camera },
  { category: 'Shops & Souks', status: 'Varies', detail: 'Medina shops in tourist areas often stay open, especially on secular holidays. During Eid al-Adha, expect most shops to close for 2-3 days. Supermarkets in major cities may operate on reduced hours. Souvenir shops near major attractions rarely close.', icon: ShoppingBag },
  { category: 'Restaurants', status: 'Mostly open', detail: 'Tourist-oriented restaurants and hotel dining remain operational. Local restaurants may close during Islamic holidays, especially the first day of each Eid. Riads and hotels continue to serve all meals regardless of the holiday.', icon: Star },
  { category: 'Transport', status: 'Operational, busier', detail: 'Trains, buses, and domestic flights operate on all holidays but are significantly busier. Book transport in advance around Eid al-Fitr and Eid al-Adha when millions of Moroccans travel to be with family. City buses may run on Sunday schedules.', icon: MapPin },
  { category: 'Pharmacies & Medical', status: 'Duty pharmacies open', detail: 'While most pharmacies close on holidays, each neighborhood maintains a rotating "pharmacie de garde" (duty pharmacy) that remains open 24/7. Hospitals and emergency services operate normally throughout all holidays.', icon: CheckCircle },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST HOLIDAYS TO EXPERIENCE
   ═══════════════════════════════════════════════════════════════ */

const bestHolidayExperiences = [
  { holiday: 'Throne Day (July 30)', detail: 'The most spectacular holiday for tourists to witness. Cities are decorated with lights and flags, fireworks illuminate the sky, free public concerts fill major squares, and a festive carnival atmosphere pervades the country. Marrakech\'s Jemaa el-Fnaa and Rabat\'s Hassan Tower area host the grandest celebrations.', icon: Star },
  { holiday: 'Eid al-Fitr', detail: 'The joyous end of Ramadan is a beautiful time to experience Moroccan generosity. Families in their finest clothes fill the streets, sweet pastries are shared freely, and the sense of communal relief and celebration is infectious. Join locals for the festive atmosphere but respect the religious significance.', icon: Sparkles },
  { holiday: 'Independence Day (November 18)', detail: 'Morocco\'s patriotic spirit is on full display with parades, flag ceremonies, and public celebrations. The weather is pleasant in November, making it ideal for sightseeing between festivities. Cultural events, concerts, and exhibitions are organized in major cities.', icon: Flag },
  { holiday: 'Mawlid', detail: 'The Prophet\'s birthday celebrations feature beautiful mosque decorations, Quran recitation gatherings, and special sweets sold throughout the medinas. The atmosphere is reverent yet festive, and it offers a window into Morocco\'s deep Islamic traditions without the intensity of Eid al-Adha.', icon: Moon },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: REGIONAL CELEBRATIONS
   ═══════════════════════════════════════════════════════════════ */

const regionalCelebrations = [
  { region: 'Marrakech', festival: 'Marrakech Popular Arts Festival', timing: 'July (near Throne Day)', detail: 'Traditional music, Berber dance, acrobatics, and equestrian displays take over the city. Often coincides with Throne Day celebrations, creating a multi-day festival atmosphere.', icon: Music },
  { region: 'Fes', festival: 'Fes Festival of World Sacred Music', timing: 'June', detail: 'A world-renowned festival bringing together sacred music traditions from across the globe. Free concerts in public squares complement ticketed events in historic venues.', icon: Music },
  { region: 'Roses Valley (Kelaat M\'Gouna)', festival: 'Rose Festival', timing: 'May', detail: 'The annual rose harvest celebration in the Dades Valley features parades, the crowning of a Rose Queen, traditional music, and the intoxicating scent of millions of Damask roses.', icon: Heart },
  { region: 'Erfoud & Rissani', festival: 'Date Festival', timing: 'October', detail: 'Celebrating the annual date harvest with traditional music, camel races, folklore performances, and markets selling dozens of date varieties. A true Saharan cultural experience.', icon: Sun },
  { region: 'Imilchil (Atlas Mountains)', festival: 'Imilchil Marriage Festival', timing: 'September', detail: 'A centuries-old Berber tradition where young people from the Ait Hadiddou tribe gather to choose their spouses. Features traditional music, dancing, and an authentic glimpse into Amazigh culture.', icon: Users },
  { region: 'Tan-Tan', festival: 'Tan-Tan Moussem', timing: 'May-June', detail: 'A UNESCO-recognized gathering of nomadic peoples featuring camel races, traditional crafts, music, and poetry. It celebrates the cultural heritage of the Saharan and sub-Saharan communities.', icon: Globe },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/holidays',
    title: 'Morocco Holidays Overview',
    description: 'Quick-reference guide to Morocco holidays with essential dates and cultural context for travelers.',
    icon: Calendar,
  },
  {
    href: '/festivals',
    title: 'Morocco Festivals Guide',
    description: 'Explore Morocco\'s vibrant festival scene from music events to traditional moussems and cultural celebrations.',
    icon: Music,
  },
  {
    href: '/festivals-calendar',
    title: 'Morocco Festivals Calendar',
    description: 'Month-by-month calendar of festivals and events happening across Morocco throughout the year.',
    icon: Calendar,
  },
  {
    href: '/morocco-ramadan-travel',
    title: 'Morocco Ramadan Travel Guide',
    description: 'Everything you need to know about visiting Morocco during the holy month of Ramadan.',
    icon: Moon,
  },
  {
    href: '/best-time-visit-morocco',
    title: 'Best Time to Visit Morocco',
    description: 'Month-by-month weather, festival calendar, and seasonal tips to plan the perfect Morocco trip.',
    icon: Sun,
  },
  {
    href: '/moroccan-festivals',
    title: 'Moroccan Festivals & Traditions',
    description: 'Deep dive into traditional Moroccan festivals, moussems, and cultural celebrations across the kingdom.',
    icon: PartyPopper,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoPublicHolidaysPage() {
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
            <span className="text-white">Morocco Public Holidays</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Flag className="w-4 h-4" />
            National Holiday Calendar &amp; Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Public Holidays
            <br className="hidden md:block" /> 2025 &amp; 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Your complete guide to every Moroccan national holiday &mdash; fixed dates, Islamic celebrations,
            what closes, what stays open, and how to make the most of your visit during Morocco&apos;s
            vibrant holiday calendar.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Understanding Morocco&apos;s Holiday Calendar
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco observes two distinct categories of public holidays: fixed secular holidays
                tied to the Gregorian calendar and Islamic holidays based on the lunar Hijri calendar.
                This dual system reflects Morocco&apos;s identity as a modern nation with deep Islamic
                traditions, creating a rich tapestry of celebrations throughout the year.
              </p>
              <p>
                The fixed holidays commemorate key moments in Morocco&apos;s struggle for independence
                and national identity &mdash; from the Independence Manifesto of 1944 to the Green March
                of 1975. The Islamic holidays honor the most sacred events in the Muslim calendar and
                are observed with deep spiritual devotion by Morocco&apos;s predominantly Muslim population.
              </p>
              <p>
                For travelers, understanding these holidays is essential for planning. While most
                tourist services continue operating, government offices, banks, and some businesses
                close. Conversely, holidays like Throne Day and Eid al-Fitr offer spectacular cultural
                experiences that many visitors consider highlights of their Morocco trip.
              </p>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 border-l-4 border-[#C4960C]">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#C4960C] mt-1 shrink-0" />
              <div>
                <p className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">
                  Important Note on Islamic Holiday Dates
                </p>
                <p className="text-[var(--text-secondary)]">
                  Islamic holidays follow the lunar Hijri calendar, which is approximately 11 days shorter
                  than the Gregorian calendar. This means Islamic holidays shift approximately 10-11 days
                  earlier each Gregorian year. The exact dates are confirmed only 1-2 days before each
                  holiday, based on the official sighting of the crescent moon. All Islamic dates listed
                  in this guide are approximate estimates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="moroccan-pattern h-2" />

      {/* ── Fixed National Holidays ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
              Fixed National Holidays
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Eight public holidays fall on the same Gregorian calendar dates every year,
              commemorating Morocco&apos;s independence struggle, national identity, and the monarchy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fixedHolidays.map((holiday) => {
              const Icon = holiday.icon;
              return (
                <div key={holiday.date} className="card-moroccan p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#A0522D]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#A0522D]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-[#C4960C]">{holiday.date}</span>
                      </div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {holiday.name}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)]/60 italic mb-2">{holiday.arabic}</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{holiday.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Islamic Holidays ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
              Islamic Holidays (Lunar Calendar)
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s Islamic holidays follow the Hijri lunar calendar and shift approximately
              10-11 days earlier each Gregorian year. These are among the most culturally significant
              celebrations in the country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {islamicHolidays.map((holiday) => {
              const Icon = holiday.icon;
              return (
                <div key={holiday.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#C4960C]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#C4960C]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {holiday.name}
                        </h3>
                        <span className="text-xs bg-[#C4960C]/10 text-[#C4960C] px-2 py-0.5 rounded-full font-semibold">
                          {holiday.duration}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]/60 italic mb-2">{holiday.arabic}</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{holiday.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[#A0522D]/5 border-l-4 border-[#A0522D]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[#A0522D] mt-1 shrink-0" />
              <div>
                <p className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">
                  Why Do Islamic Holiday Dates Change Every Year?
                </p>
                <p className="text-[var(--text-secondary)]">
                  The Islamic calendar is based on the lunar cycle, with each month beginning at the sighting
                  of the new crescent moon. A lunar year is approximately 354 days &mdash; about 11 days shorter
                  than the Gregorian solar year. This means Islamic holidays cycle through all seasons over a
                  period of roughly 33 years. Morocco&apos;s religious authorities officially confirm each Islamic
                  holiday date based on moon sighting, often just 1-2 days before the holiday begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="moroccan-pattern h-2" />

      {/* ── 2025-2026 Calendar ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
              Holiday Calendar: 2025 &amp; 2026
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Plan your trip with this complete calendar of Moroccan public holidays.
              Islamic holiday dates are approximate and subject to confirmation by moon sighting.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 2025 Calendar */}
            <div className="card-moroccan overflow-hidden">
              <div className="bg-[#A0522D] text-white px-6 py-4">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold flex items-center gap-2">
                  <Calendar className="w-5 h-5" /> 2025 Public Holidays
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {holidayCalendar2025.map((h) => (
                  <div key={h.date} className="px-6 py-3 flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm">
                        {h.holiday}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">{h.day}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${h.type === 'Islamic' ? 'bg-[#C4960C]/10 text-[#C4960C]' : 'bg-[#A0522D]/10 text-[#A0522D]'}`}>
                        {h.type}
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)] w-20 text-right">
                        {h.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2026 Calendar */}
            <div className="card-moroccan overflow-hidden">
              <div className="bg-[#C4960C] text-white px-6 py-4">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold flex items-center gap-2">
                  <Calendar className="w-5 h-5" /> 2026 Public Holidays
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {holidayCalendar2026.map((h) => (
                  <div key={h.date} className="px-6 py-3 flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm">
                        {h.holiday}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">{h.day}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${h.type === 'Islamic' ? 'bg-[#C4960C]/10 text-[#C4960C]' : 'bg-[#A0522D]/10 text-[#A0522D]'}`}>
                        {h.type}
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)] w-20 text-right">
                        {h.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Impact on Travelers ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
              How Holidays Affect Travelers
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Knowing what opens, closes, and changes during Moroccan holidays helps you plan
              a smoother trip. Here&apos;s what to expect across key services and amenities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelerImpact.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.category} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#A0522D]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm">
                        {item.category}
                      </h3>
                      <span className={`text-xs font-semibold ${item.status === 'Closed' ? 'text-red-600' : item.status === 'Mostly open' ? 'text-green-700' : 'text-[#C4960C]'}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="moroccan-pattern h-2" />

      {/* ── Best Holidays to Experience ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
              Best Holidays to Experience as a Tourist
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              These celebrations offer unforgettable cultural experiences that can become the
              highlight of your Morocco visit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bestHolidayExperiences.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.holiday} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#C4960C]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#C4960C]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {item.holiday}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Holidays to Avoid for Business ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Holidays to Avoid for Business Travel
          </h2>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            <p>
              If you are visiting Morocco for business meetings, government appointments, or
              administrative tasks, careful planning around public holidays is essential. All
              government offices and banks close on every public holiday, and many private
              businesses reduce operations or close entirely during the major celebrations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="card-moroccan p-5 border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Eid al-Adha (2-3 days closure)
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    The most disruptive holiday for business travelers. Nearly everything closes for
                    2-3 days. Many employees take additional days off, and business activity may not
                    fully resume for up to a week. Avoid scheduling any business travel during this period.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5 border-l-4 border-orange-500">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Eid al-Fitr (2 days closure)
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Coming at the end of Ramadan (when business hours are already reduced), Eid al-Fitr
                    brings a 2-day official closure. Many businesses extend this to 3-4 days.
                    Schedule meetings at least a week after Eid al-Fitr for productive engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5 border-l-4 border-yellow-500">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    August 20-21 (Back-to-Back Holidays)
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Revolution Day and Youth Day create a consecutive two-day public holiday. Many
                    Moroccans bridge these with the weekend for an extended break, meaning the entire
                    week may see reduced business activity. Avoid mid-to-late August for important meetings.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5 border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Throne Day (July 30)
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    While a single-day holiday, Throne Day is such a major celebration that some businesses
                    close for the surrounding days. Government processes and official appointments are
                    unavailable. Enjoy the festivities but do not plan on conducting business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="moroccan-pattern h-2" />

      {/* ── Regional Celebrations ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
              Regional Celebrations &amp; Festivals
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Beyond the national holidays, Morocco hosts dozens of regional festivals and
              moussems (pilgrimages) that showcase local culture, music, and traditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalCelebrations.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.region} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#A0522D]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm">
                        {item.festival}
                      </h3>
                      <p className="text-xs text-[#C4960C]">{item.region} &middot; {item.timing}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-8">
            Practical Tips for Traveling During Moroccan Holidays
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-1">
                    Book Transport Early
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Trains and buses fill up fast before major holidays as Moroccans travel to be
                    with family. Book ONCF train tickets and CTM bus tickets at least a week in advance
                    around Eid al-Fitr, Eid al-Adha, and Throne Day.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-1">
                    Carry Cash
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    While ATMs work on holidays, bank branches are closed. Withdraw sufficient cash
                    the day before any public holiday. Currency exchange offices in tourist areas
                    usually stay open but may have reduced hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-1">
                    Confirm Attraction Hours
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Check with your riad or hotel about adjusted opening hours for specific attractions.
                    Holiday schedules are not always listed online. Your accommodation staff will
                    have the most current information.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-1">
                    Embrace the Experience
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Rather than seeing closures as inconveniences, embrace the chance to witness
                    authentic Moroccan celebrations. Holiday atmospheres offer cultural immersion
                    that no planned tour can replicate.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-1">
                    Stock Up on Supplies
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Before Eid al-Adha and Eid al-Fitr, purchase water, snacks, and any essentials.
                    Small corner shops (hanouts) may remain open, but selection will be limited.
                    Pharmacies operate on a duty rotation system.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-1">
                    Respect Local Celebrations
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    During religious holidays, dress modestly and be respectful of celebrations.
                    Ask permission before photographing ceremonies. If invited to join a family
                    celebration, a small gift of pastries or fruit is appreciated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="moroccan-pattern h-2" />

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Common questions about Morocco&apos;s public holidays answered.
            </p>
          </div>

          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#A0522D]/10 flex items-center justify-center shrink-0 text-sm text-[#A0522D] font-bold mt-0.5">
                    {index + 1}
                  </span>
                  {faq.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed pl-10">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
              Related Morocco Guides
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Continue planning your trip with these helpful resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedGuides.map((guide) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-5 group hover:border-[#A0522D]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#A0522D]/10 flex items-center justify-center shrink-0 group-hover:bg-[#A0522D]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[#A0522D] transition-colors mb-1">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                      <span className="inline-flex items-center gap-1 text-sm text-[#A0522D] font-semibold mt-2">
                        Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="moroccan-pattern h-2" />

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-6">
            <Calendar className="w-4 h-4" />
            Plan Your Morocco Trip
          </div>
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Experience Morocco&apos;s Celebrations?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
            Whether you want to witness the grandeur of Throne Day, share in the joy of Eid al-Fitr,
            or simply plan around closures, understanding Morocco&apos;s holiday calendar ensures a
            smoother and more rewarding journey. Explore our city guides and booking resources to
            start planning your trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/best-time-visit-morocco"
              className="inline-flex items-center justify-center gap-2 bg-[#A0522D] text-white px-6 py-3 rounded-lg hover:bg-[#8B4726] transition-colors font-semibold"
            >
              Best Time to Visit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/festivals-calendar"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#A0522D] text-[#A0522D] px-6 py-3 rounded-lg hover:bg-[#A0522D]/5 transition-colors font-semibold"
            >
              Festivals Calendar <Calendar className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

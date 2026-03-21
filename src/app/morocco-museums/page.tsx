import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  Camera,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  MessageCircleQuestion,
  Ticket,
  Globe,
  Landmark,
  Palette,
  Frame,
  Eye,
  CalendarDays,
  Lightbulb,
  Compass,
  GalleryHorizontalEnd,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-museums`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Museums Guide 2026 | 10 Best Museums, Tickets & Hours',
  description:
    'Complete guide to Morocco\'s best museums in 2026. Museum of Moroccan Judaism, MACMA Marrakech, Dar Batha Fes, Kasbah Museum Tangier, Yves Saint Laurent Museum, Museum Mohammed VI Rabat — opening hours, ticket prices from 10 MAD, photography rules, museum passes, and organized tours.',
  keywords: [
    'Morocco museums guide',
    'best museums Morocco',
    'Yves Saint Laurent Museum Marrakech',
    'Museum Mohammed VI Rabat',
    'Dar Batha Museum Fes',
    'MACMA Marrakech',
    'Kasbah Museum Tangier',
    'Berber Museum Marrakech',
    'Dar Si Said Museum',
    'Nejjarine Museum Fes',
    'Museum of Moroccan Judaism',
    'Fondation Jardin Majorelle',
    'Morocco museum ticket prices 2026',
    'Morocco museum opening hours',
    'Morocco museum pass',
    'Morocco museum photography rules',
    'Morocco art museums',
    'Morocco history museums',
    'Morocco cultural museums',
    'museums in Marrakech',
  ],
  openGraph: {
    title: 'Morocco Museums Guide 2026 | 10 Best Museums, Tickets & Hours',
    description:
      'Explore Morocco\'s top 10 museums with up-to-date opening hours, ticket prices, photography rules, museum passes, and organized tour options. From Marrakech\'s Yves Saint Laurent Museum to Fes\'s Dar Batha and Rabat\'s Museum Mohammed VI.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-culture.webp`,
        width: 1200,
        height: 630,
        alt: 'Interior of a Moroccan museum with traditional zellige tilework and carved cedar displays',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Museums Guide 2026 | Best Museums, Tickets & Tours',
    description:
      'Top 10 Morocco museums with opening hours, ticket prices from 10 MAD, photography rules, museum passes, and tour recommendations for Marrakech, Fes, Rabat, Tangier & Casablanca.',
    images: [`${BASE_URL}/images/hero-culture.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the best museum in Morocco for first-time visitors?',
    a: 'The Yves Saint Laurent Museum in Marrakech is the most visitor-friendly museum in Morocco. It has clear English signage, modern climate-controlled galleries, an on-site cafe, and a well-stocked bookshop. Tickets cost from 30 MAD for Moroccan residents and from 100 MAD for international visitors. Allow 90 minutes for a full visit.',
  },
  {
    q: 'How much do museum tickets cost in Morocco?',
    a: 'Museum ticket prices in Morocco range from 10 MAD at smaller national museums to 100 MAD at privately operated institutions like the Yves Saint Laurent Museum. Most national museums managed by the Fondation Nationale des Musees charge from 20 MAD to 70 MAD. Children under 12 often enter free. Student discounts are available at many locations with a valid student ID. Seasonal pricing can change.',
  },
  {
    q: 'Is there a museum pass for Morocco?',
    a: 'Morocco does not have a single nationwide museum pass comparable to those in Europe. However, the Fondation Nationale des Musees manages several museums across Marrakech, Rabat, and other cities. Some cities offer combined tickets for nearby attractions. In Marrakech, you can buy a combined ticket for Jardin Majorelle, the Berber Museum, and the Yves Saint Laurent Museum from 180 MAD.',
  },
  {
    q: 'Can I take photos inside Moroccan museums?',
    a: 'Photography policies vary by museum. Most national museums allow personal photography without flash for free. The Yves Saint Laurent Museum prohibits photography inside exhibition galleries. Dar Batha and Dar Si Said allow photography in courtyard areas. Tripods and professional equipment require prior authorization at all museums. Always check the posted rules at the entrance.',
  },
  {
    q: 'What are typical museum opening hours in Morocco?',
    a: 'Most Moroccan museums open from 9:00 or 10:00 AM to 5:00 or 6:00 PM. Many close on Tuesdays rather than Mondays. During Ramadan, hours are typically shortened to 10:00 AM - 3:00 PM. Friday hours may include a midday break from 12:00 to 2:30 PM at some locations. Major museums like the Museum Mohammed VI in Rabat stay open until 7:00 PM.',
  },
  {
    q: 'Are Moroccan museums accessible for visitors with disabilities?',
    a: 'Accessibility varies widely. Newer museums like the Yves Saint Laurent Museum and Museum Mohammed VI in Rabat are fully wheelchair accessible with ramps, elevators, and accessible restrooms. Older museums housed in historic buildings, such as Dar Batha in Fes and the Kasbah Museum in Tangier, have uneven floors, narrow doorways, and staircases that present challenges. Call ahead to confirm specific accessibility needs.',
  },
  {
    q: 'What is the best day and time to visit museums in Morocco?',
    a: 'Weekday mornings between 9:00 and 11:00 AM offer the smallest crowds. Avoid Saturdays and Sundays at popular museums like the Yves Saint Laurent Museum, which can draw long queues. Wednesday and Thursday mornings are consistently the quietest across most Moroccan museums. Arrive within the first 30 minutes of opening for the most comfortable experience.',
  },
  {
    q: 'Are guided museum tours available in Morocco?',
    a: 'Yes. Most major museums offer guided tours in Arabic, French, and English. Official guides at national museums charge from 100 MAD to 200 MAD per group. Private tour companies offer multi-museum city tours that combine 3-4 museums with transport and lunch from 500 MAD per person. Audio guides are available at the Yves Saint Laurent Museum and Museum Mohammed VI.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Museums Guide 2026',
  description:
    'Complete guide to the best museums in Morocco covering ticket prices, opening hours, photography rules, museum passes, and organized tours across Marrakech, Fes, Rabat, Tangier, and Casablanca.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-culture.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Museums Guide', item: PAGE_URL },
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
   DATA: TOP 10 MUSEUMS
   ================================================================ */

const museums = [
  {
    name: 'Yves Saint Laurent Museum (Musee YSL)',
    city: 'Marrakech',
    icon: Palette,
    category: 'Fashion & Design',
    price: 'From 100 MAD (international), from 30 MAD (residents)',
    hours: '10:00 AM - 6:00 PM, closed Wednesdays',
    photo: 'No photography inside exhibition galleries. Exterior and cafe photos allowed.',
    highlight: 'Rotating exhibitions of YSL haute couture alongside permanent displays of 5,000+ garments and 15,000 accessories.',
    description:
      'Opened in 2017, this striking terracotta-and-concrete building designed by Studio KO houses the legacy of Yves Saint Laurent, who drew deep inspiration from Marrakech. The permanent collection traces his career from the 1960s through the 1990s. Temporary exhibitions rotate every few months. The building itself is a work of art — its facade references the weave of fabric. An on-site cafe serves Moroccan-French fusion dishes in a courtyard garden.',
    tip: 'Buy the combined ticket with Jardin Majorelle and the Berber Museum from 180 MAD to save money and skip separate queues.',
  },
  {
    name: 'Museum Mohammed VI of Modern & Contemporary Art',
    city: 'Rabat',
    icon: Frame,
    category: 'Modern & Contemporary Art',
    price: 'From 40 MAD (adults), from 20 MAD (students)',
    hours: '10:00 AM - 7:00 PM, closed Tuesdays',
    photo: 'Photography allowed without flash. No tripods.',
    highlight: 'Morocco\'s first large-scale national art museum with rotating exhibitions of Moroccan and international contemporary artists.',
    description:
      'Inaugurated by King Mohammed VI in 2014, this is the largest museum built in Morocco in over a century. The 12,000 square meter building hosts major temporary exhibitions featuring both Moroccan and international artists. Past shows have included works by Giacometti, African contemporary photography, and retrospectives of major Moroccan painters like Mohamed Melehi and Farid Belkahia. The building stands on the grand Avenue Moulay Hassan in central Rabat.',
    tip: 'Check the museum website before visiting — exhibitions change frequently and some shows sell out on weekends.',
  },
  {
    name: 'Dar Batha Museum',
    city: 'Fes',
    icon: Building,
    category: 'Arts & Crafts Heritage',
    price: 'From 20 MAD',
    hours: '9:00 AM - 5:00 PM, closed Tuesdays',
    photo: 'Photography allowed in courtyards and gardens. No flash inside galleries.',
    highlight: 'Outstanding collection of Fassi ceramics, including the distinctive blue-and-white pottery unique to Fes.',
    description:
      'Housed in a 19th-century Hispano-Moorish summer palace built by Sultan Moulay Hassan I, Dar Batha displays traditional arts and crafts from the Fes region. The ceramics gallery features hundreds of pieces of the famous blue-and-white Fassi pottery that has been produced in the city for centuries. Additional rooms showcase carved wood, wrought iron, embroidered fabrics, and Berber carpets. The Andalusian garden with its fountain and mature trees is worth the admission price alone.',
    tip: 'Combine with a walk through the Fes medina. The museum sits at the edge of Fes el-Bali near Bab Boujloud, the iconic blue gate.',
  },
  {
    name: 'Kasbah Museum (Musee de la Kasbah)',
    city: 'Tangier',
    icon: Landmark,
    category: 'Archaeology & History',
    price: 'From 20 MAD',
    hours: '9:00 AM - 4:00 PM (winter), 9:00 AM - 6:00 PM (summer), closed Tuesdays',
    photo: 'Photography allowed without flash.',
    highlight: 'Roman mosaics from Volubilis and artifacts tracing Tangier\'s history from Phoenician settlement to modern port city.',
    description:
      'Set inside the former sultan\'s palace — Dar el Makhzen — at the highest point of the Tangier medina, this museum covers millennia of history through its archaeological collections. The Roman mosaic depicting Venus is the centerpiece. Additional exhibits include Phoenician and Carthaginian artifacts, Islamic-era pottery, historic maps, and weaponry. The palace itself, with its painted wooden ceilings and marble courtyards, provides an atmospheric setting. Gardens behind the palace offer panoramic views of the Strait of Gibraltar.',
    tip: 'Visit on a clear day to see Spain from the palace gardens. The view across the Strait of Gibraltar is one of the best in the city.',
  },
  {
    name: 'MACMA (Museum of African Contemporary Art Al Maaden)',
    city: 'Marrakech',
    icon: GalleryHorizontalEnd,
    category: 'Contemporary African Art',
    price: 'From 60 MAD',
    hours: '10:00 AM - 6:00 PM, closed Mondays',
    photo: 'Photography policies vary by exhibition. Ask at reception.',
    highlight: 'Cutting-edge contemporary art from across the African continent in a purpose-built gallery space.',
    description:
      'Located in the Al Maaden development south of central Marrakech, MACMA is dedicated to contemporary and modern art from across Africa. The collection spans painting, sculpture, photography, and multimedia installations. The museum hosts rotating exhibitions that feature both established African artists and emerging talent. The sleek, minimalist architecture contrasts deliberately with the surrounding red-earth landscape of Marrakech. A sculpture garden and reading room complement the galleries.',
    tip: 'MACMA is outside the medina. Take a taxi from Jemaa el-Fnaa (from 40 MAD) or combine with a visit to the nearby Royal Palm golf course.',
  },
  {
    name: 'Museum of Moroccan Judaism',
    city: 'Casablanca',
    icon: BookOpen,
    category: 'Religious & Cultural Heritage',
    price: 'From 20 MAD (donations welcome)',
    hours: '10:00 AM - 5:00 PM, Monday to Friday, closed weekends',
    photo: 'Photography allowed with permission from staff.',
    highlight: 'The only museum in the Arab world dedicated to Jewish heritage, documenting centuries of Jewish life in Morocco.',
    description:
      'Opened in 1997 in the Oasis neighborhood of Casablanca, this museum preserves and presents the rich history of Morocco\'s Jewish community, which once numbered over 250,000 people. Exhibits include ceremonial objects, Torah scrolls, traditional clothing, photographs, and documents tracing Jewish life from antiquity through the present. The museum also covers the mellah (Jewish quarter) history across Moroccan cities. It stands as a testament to Morocco\'s tradition of religious coexistence and pluralism.',
    tip: 'The museum is small but deeply moving. Allow 45-60 minutes. Staff are knowledgeable and happy to share stories about Jewish-Moroccan heritage.',
  },
  {
    name: 'Berber Museum (Musee Berbere)',
    city: 'Marrakech',
    icon: Users,
    category: 'Ethnography & Amazigh Culture',
    price: 'From 30 MAD (included in Majorelle combined ticket from 180 MAD)',
    hours: '9:00 AM - 6:00 PM daily (shorter hours in winter)',
    photo: 'Photography allowed without flash.',
    highlight: 'Over 600 Amazigh artifacts including jewelry, textiles, carpets, weapons, and costumes from across Morocco\'s Berber regions.',
    description:
      'Located within the Jardin Majorelle compound, the Berber Museum occupies the former studio of painter Jacques Majorelle. The collection, curated by Pierre Berge and Yves Saint Laurent, showcases the diversity of Amazigh (Berber) cultures across Morocco\'s mountains, deserts, and coasts. Displays are organized by region and include intricate silver jewelry from the Anti-Atlas, hand-loomed carpets from the Middle Atlas, painted wooden doors from the Draa Valley, and ceremonial costumes worn during harvest festivals.',
    tip: 'Buy the combined ticket with Jardin Majorelle and the YSL Museum. Visit the Berber Museum first when it opens, then walk through the garden as it fills with visitors.',
  },
  {
    name: 'Dar Si Said Museum (Museum of Moroccan Arts)',
    city: 'Marrakech',
    icon: Crown,
    category: 'Decorative Arts & Woodcraft',
    price: 'From 20 MAD',
    hours: '9:00 AM - 5:00 PM, closed Tuesdays',
    photo: 'Photography allowed without flash.',
    highlight: 'Stunning collection of carved cedarwood, Berber doors, marble basins, and weapons in a 19th-century palace.',
    description:
      'Built in the late 19th century by Si Said, brother of the grand vizier Ba Ahmed, this palace-turned-museum displays traditional Moroccan woodcraft, metalwork, and decorative arts. The cedarwood carvings are exceptional — intricately geometric panels, mashrabiya screens, and painted ceiling beams demonstrate the skill of Moroccan master craftsmen. The central courtyard with its riad garden and marble fountain provides a quiet retreat from the bustling medina streets outside.',
    tip: 'Dar Si Said is a 10-minute walk from Dar el Bacha and a 15-minute walk from Jemaa el-Fnaa. Visit both in a single morning museum circuit.',
  },
  {
    name: 'Nejjarine Museum of Wooden Arts & Crafts',
    city: 'Fes',
    icon: Award,
    category: 'Woodcraft & Traditional Arts',
    price: 'From 20 MAD',
    hours: '10:00 AM - 5:00 PM, closed Fridays',
    photo: 'Photography allowed. No flash.',
    highlight: 'Three floors of traditional wooden tools, instruments, and artisan objects housed in a restored 18th-century caravanserai.',
    description:
      'The restored Nejjarine Fondouk — an 18th-century merchants\' inn — is one of the architectural jewels of the Fes medina. The museum displays wooden objects organized across three floors: musical instruments, artisan tools, household objects, and architectural elements. The building itself, with its carved cedar balconies, zellige tilework, and central fountain, is as much the attraction as the collection inside. The rooftop terrace offers views across the medina rooftops to the Merenid tombs and surrounding hills.',
    tip: 'The rooftop terrace alone justifies the entry fee. Time your visit for late afternoon when the golden light over the medina is at its best.',
  },
  {
    name: 'Fondation Jardin Majorelle',
    city: 'Marrakech',
    icon: Eye,
    category: 'Botanical Garden & Art',
    price: 'From 70 MAD (garden), from 180 MAD (combined with Berber Museum & YSL)',
    hours: '9:00 AM - 6:00 PM daily (shorter hours Oct-Apr)',
    photo: 'Photography allowed in the garden. No professional equipment without permit.',
    highlight: 'Iconic cobalt-blue villa surrounded by 300+ plant species from five continents, originally created by artist Jacques Majorelle in the 1920s.',
    description:
      'Jacques Majorelle spent 40 years creating this botanical garden, and Yves Saint Laurent and Pierre Berge rescued it from developers in 1980. The garden features towering bamboo groves, bougainvillea, cacti, palms, and water features surrounding the villa painted in the trademark Majorelle Blue. While not strictly a museum, it functions as a living art installation and houses the Berber Museum within its grounds. The on-site boutique sells officially licensed Majorelle and YSL products.',
    tip: 'Arrive right at opening to photograph the garden without crowds. By 11:00 AM, tour groups arrive in numbers and pathways become congested.',
  },
] as const;

/* ================================================================
   DATA: MUSEUM VISITOR TIPS
   ================================================================ */

const visitorTips = [
  {
    title: 'Dress Modestly',
    icon: ShieldCheck,
    text: 'Morocco is a Muslim-majority country. Cover shoulders and knees when visiting museums, especially those housed in religious or historic buildings. Shoes are kept on in most museums, unlike mosques.',
  },
  {
    title: 'Carry Cash in Small Bills',
    icon: DollarSign,
    text: 'Many smaller museums accept cash only. Carry denominations of 20, 50, and 100 MAD. Larger museums like the YSL Museum and Museum Mohammed VI accept credit cards.',
  },
  {
    title: 'Check Closure Days Before You Go',
    icon: CalendarDays,
    text: 'Most museums close on Tuesdays, but some close on Mondays, Fridays, or weekends instead. During Ramadan and national holidays, hours change without much advance notice.',
  },
  {
    title: 'Hire a Licensed Guide',
    icon: Compass,
    text: 'Official guides at museum entrances enhance the experience significantly. Expect to pay from 100 MAD to 200 MAD per group. Guides speak Arabic, French, and usually English or Spanish.',
  },
  {
    title: 'Protect Your Camera',
    icon: Camera,
    text: 'Museum interiors are dim. Use a camera with good low-light performance or a smartphone with night mode. Flash is prohibited in nearly every museum to protect artifacts and artworks.',
  },
  {
    title: 'Leave Large Bags at the Entrance',
    icon: AlertTriangle,
    text: 'Backpacks and large bags must be checked at the cloakroom in most museums. Carry a small crossbody bag for valuables. Lockers are available at the YSL Museum and Museum Mohammed VI.',
  },
];

/* ================================================================
   DATA: MUSEUM TOURS
   ================================================================ */

const museumTours = [
  {
    title: 'Marrakech Museum Circuit',
    duration: 'Full day (7-8 hours)',
    price: 'From 500 MAD per person',
    includes: 'Yves Saint Laurent Museum, Berber Museum, Jardin Majorelle, Dar Si Said, lunch in medina',
    description: 'The most popular museum tour covers four museums and a garden in a single day with transport between sites and a licensed English-speaking guide.',
  },
  {
    title: 'Fes Arts & Crafts Tour',
    duration: 'Half day (4-5 hours)',
    price: 'From 350 MAD per person',
    includes: 'Dar Batha Museum, Nejjarine Museum, medina artisan workshops, mint tea',
    description: 'Combines two museums with visits to active artisan workshops in the Fes medina where craftspeople produce the same objects displayed in museum cases.',
  },
  {
    title: 'Rabat Cultural Day Tour',
    duration: 'Full day (6-7 hours)',
    price: 'From 450 MAD per person',
    includes: 'Museum Mohammed VI, Kasbah des Oudaias, Hassan Tower, Chellah ruins',
    description: 'Covers Rabat\'s headline cultural sites including the modern art museum, the 12th-century Hassan Tower, and the Roman-Islamic ruins at Chellah.',
  },
  {
    title: 'Multi-City Museum Tour',
    duration: '3-4 days',
    price: 'From 3,500 MAD per person',
    includes: 'Museums in Marrakech, Fes, Rabat, transport between cities, accommodation, meals',
    description: 'A dedicated cultural itinerary linking the major museum cities by private car or train with overnight stays and a specialized art-and-history guide.',
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoMuseumsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-culture.webp"
          alt="Ornate interior of a Moroccan museum with zellige tilework, carved plaster, and cedarwood ceilings"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4 drop-shadow-lg">
            Morocco Museums Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            10 unmissable museums across Marrakech, Fes, Rabat, Tangier &amp; Casablanca — with up-to-date ticket prices, opening hours, and insider tips
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-light)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Morocco Museums Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Intro Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Visit Museums in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Morocco&apos;s museums hold keys to understanding a civilization shaped by Amazigh, Arab, Andalusian, Jewish, and French influences across three millennia.
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              From Roman mosaics unearthed at Volubilis to 21st-century installations by contemporary African artists, Morocco&apos;s museum landscape spans an extraordinary range of eras and disciplines. The country&apos;s museum infrastructure has expanded rapidly since 2014, when the Fondation Nationale des Musees was established to modernize galleries, improve conservation standards, and bring international exhibitions to Moroccan cities.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Today there are world-class institutions in five cities. Marrakech leads with the Yves Saint Laurent Museum, the Berber Museum, Dar Si Said, and MACMA. Fes preserves its artisan heritage at Dar Batha and the Nejjarine Museum. Rabat made headlines with the Museum Mohammed VI of Modern and Contemporary Art. Tangier showcases archaeology at the Kasbah Museum. And Casablanca houses the only museum of Jewish heritage in the Arab world.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              This guide covers the 10 best museums in Morocco for 2026, with current ticket prices, opening hours, photography policies, and practical tips to help you plan a culturally rich itinerary.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: 'Cities Covered', value: '5', icon: MapPin },
              { label: 'Museums Listed', value: '10', icon: Building },
              { label: 'Tickets From', value: '10 MAD', icon: Ticket },
              { label: 'Tour Options', value: '4', icon: Globe },
            ].map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="card-moroccan p-4 text-center">
                  <StatIcon className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">{stat.value}</p>
                  <p className="text-xs text-[var(--text-secondary)]">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top 10 Museums ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Museums in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each museum listed below has been selected for its collection quality, cultural significance, visitor experience, and practical accessibility.
          </p>

          <div className="space-y-8">
            {museums.map((museum, idx) => {
              const MuseumIcon = museum.icon;
              return (
                <div key={museum.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-accent)]/10 shrink-0">
                      <span className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <MuseumIcon className="w-5 h-5 text-[var(--color-accent)]" />
                        <span className="text-xs font-[family-name:var(--font-heading)] text-[var(--color-gold)] uppercase tracking-wider">{museum.category}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                        {museum.name}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-4 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" /> {museum.city}
                      </p>

                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{museum.description}</p>

                      <div className="bg-[var(--surface-muted)] rounded-lg p-4 mb-4">
                        <p className="text-sm font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-2">
                          <Star className="w-4 h-4 inline-block text-[var(--color-gold)] mr-1" />
                          Highlight
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]">{museum.highlight}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                        <div className="flex items-start gap-2">
                          <Ticket className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Tickets</p>
                            <p className="text-xs text-[var(--text-secondary)]">{museum.price}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Hours</p>
                            <p className="text-xs text-[var(--text-secondary)]">{museum.hours}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Camera className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Photography</p>
                            <p className="text-xs text-[var(--text-secondary)]">{museum.photo}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 bg-[#C4960C]/10 rounded-lg p-3">
                        <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-secondary)]">
                          <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                          {museum.tip}
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

      {/* ── Ticket Prices Overview ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Museum Ticket Prices at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Budget from 100 to 300 MAD per day for museum visits depending on how many you plan to see. Seasonal pricing can change during peak tourist months.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-accent)]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Museum</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">City</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { museum: 'Yves Saint Laurent Museum', city: 'Marrakech', price: 'From 100 MAD' },
                  { museum: 'Fondation Jardin Majorelle', city: 'Marrakech', price: 'From 70 MAD' },
                  { museum: 'MACMA', city: 'Marrakech', price: 'From 60 MAD' },
                  { museum: 'Museum Mohammed VI', city: 'Rabat', price: 'From 40 MAD' },
                  { museum: 'Berber Museum', city: 'Marrakech', price: 'From 30 MAD' },
                  { museum: 'Dar Batha Museum', city: 'Fes', price: 'From 20 MAD' },
                  { museum: 'Dar Si Said Museum', city: 'Marrakech', price: 'From 20 MAD' },
                  { museum: 'Kasbah Museum', city: 'Tangier', price: 'From 20 MAD' },
                  { museum: 'Nejjarine Museum', city: 'Fes', price: 'From 20 MAD' },
                  { museum: 'Museum of Moroccan Judaism', city: 'Casablanca', price: 'From 20 MAD' },
                ].map((row) => (
                  <tr key={row.museum} className="border-b border-[var(--border-light)] hover:bg-[var(--surface-muted)] transition-colors">
                    <td className="py-3 px-4 text-[var(--text-primary)] font-medium">{row.museum}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.city}</td>
                    <td className="py-3 px-4 text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-moroccan p-5 mt-8">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-[var(--color-accent)]" />
              Combined Tickets &amp; Discounts
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <span><strong>Marrakech Combined Ticket:</strong> Jardin Majorelle + Berber Museum + YSL Museum from 180 MAD (saves from 20 MAD vs. individual tickets)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <span><strong>Student Discount:</strong> Valid international student ID gets 50% off at most national museums</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <span><strong>Children:</strong> Under 12 free at most museums. Under 6 free at all museums.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <span><strong>Moroccan Residents:</strong> Reduced rates at most museums with valid CIN or residence permit</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Photography Rules ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Rules in Moroccan Museums
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Knowing the rules in advance prevents awkward encounters with security staff and protects valuable collections.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Generally Allowed
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li>Personal photography with smartphones and compact cameras</li>
                <li>Photographing building exteriors, courtyards, and gardens</li>
                <li>Natural light photography without flash</li>
                <li>Sharing images on personal social media accounts</li>
              </ul>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Usually Restricted
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li>Flash photography (damages pigments, dyes, and textiles)</li>
                <li>Tripods and professional lighting equipment</li>
                <li>Video recording in some galleries</li>
                <li>Commercial photography without written authorization</li>
                <li>Photography of temporary exhibitions (varies by loan agreements)</li>
              </ul>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-6 zellige-border">
            <p className="text-sm text-[var(--text-secondary)]">
              <Info className="w-4 h-4 inline-block text-[var(--color-accent)] mr-1" />
              <strong>Note on the YSL Museum:</strong> Photography is strictly prohibited inside the main exhibition galleries to protect the delicate fabrics. You may photograph the exterior architecture, the Pierre Berge auditorium entrance, and the cafe courtyard. Staff will ask you to put your phone away if you raise it in the galleries.
            </p>
          </div>
        </div>
      </section>

      {/* ── Visitor Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Practical Tips for Museum Visitors
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Small preparations that make a measurable difference in the quality of your museum experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visitorTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <TipIcon className="w-6 h-6 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Museum Tours ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Organized Museum Tours
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Guided tours link museums with walking commentary, transport, and meals so you can focus on the art and history rather than logistics.
          </p>

          <div className="space-y-6">
            {museumTours.map((tour) => (
              <div key={tour.title} className="card-moroccan p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {tour.title}
                  </h3>
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                    {tour.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{tour.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 text-xs text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    {tour.includes}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-8 zellige-border">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              Booking a Museum Tour
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Book through your riad or hotel reception for the best local rates. Online platforms charge from 10-20% more than booking directly with a guide. For multi-city tours, book at least two weeks in advance during peak season (October through April). Group rates are available for parties of 4 or more. Seasonal pricing can change during holidays and festival periods.
            </p>
          </div>
        </div>
      </section>

      {/* ── Museums by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Museums by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Plan your museum itinerary based on which cities you are visiting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: 'Marrakech',
                count: '5 museums',
                museums: ['Yves Saint Laurent Museum', 'Berber Museum', 'Dar Si Said', 'MACMA', 'Fondation Jardin Majorelle'],
                note: 'The museum capital of Morocco. Two full days needed to cover all five properly.',
              },
              {
                city: 'Fes',
                count: '2 museums',
                museums: ['Dar Batha Museum', 'Nejjarine Museum of Wooden Arts'],
                note: 'Both museums sit inside the medina. Combine with artisan workshop visits for a full cultural day.',
              },
              {
                city: 'Rabat',
                count: '1 museum',
                museums: ['Museum Mohammed VI of Modern & Contemporary Art'],
                note: 'Morocco\'s premier contemporary art institution. Pair with the Kasbah des Oudaias and Hassan Tower.',
              },
              {
                city: 'Tangier',
                count: '1 museum',
                museums: ['Kasbah Museum (Dar el Makhzen)'],
                note: 'Located at the highest point of the medina with views across the Strait of Gibraltar to Spain.',
              },
              {
                city: 'Casablanca',
                count: '1 museum',
                museums: ['Museum of Moroccan Judaism'],
                note: 'The only museum of Jewish heritage in the Arab world. Open weekdays only.',
              },
            ].map((city) => (
              <div key={city.city} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                  {city.city}
                </h3>
                <p className="text-xs text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold mb-3">{city.count}</p>
                <ul className="space-y-1 mb-3">
                  {city.museums.map((m) => (
                    <li key={m} className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[var(--text-secondary)] italic">{city.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Expect ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect Inside Moroccan Museums
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan museums differ from their European and North American counterparts in several ways worth knowing before your first visit.
          </p>

          <div className="space-y-6">
            {[
              {
                title: 'Historic Buildings as Exhibition Spaces',
                text: 'Many Moroccan museums are housed in former palaces, riads, and caravanserais rather than purpose-built gallery buildings. This means uneven floors, narrow doorways, low ceilings in some rooms, and staircases without handrails. The architecture itself is part of the experience — carved plaster walls, painted cedarwood ceilings, and zellige tilework surround the exhibits.',
              },
              {
                title: 'Signage and Labels',
                text: 'Museum labels are typically in Arabic and French. English signage has improved at major institutions like the YSL Museum and Museum Mohammed VI but remains limited at smaller national museums. Hiring a guide or downloading a museum app before your visit compensates for the language gap.',
              },
              {
                title: 'Climate Control',
                text: 'Newer museums like the YSL Museum and Museum Mohammed VI are fully climate-controlled. Older palace museums rely on thick walls and natural ventilation, which keeps rooms cool in summer but can feel cold in winter. Bring a light layer from November through March.',
              },
              {
                title: 'Pace and Atmosphere',
                text: 'Moroccan museums tend to be quieter and less crowded than major European institutions outside of weekend peak hours. You can often stand in front of a major piece without anyone else in the room. The experience is contemplative rather than rushed.',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit Morocco&apos;s Museums
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing your museum visits around seasons, holidays, and weekly patterns can make the difference between a crowded lobby and a private viewing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                season: 'October - March (Peak Tourist Season)',
                icon: Star,
                details: 'The most popular months for visiting Morocco. Museums are busiest on weekends and during Christmas/New Year. Weekday mornings remain manageable. Shorter daylight hours mean museums close earlier (4:00 or 5:00 PM at most locations). Indoor museums are ideal during occasional rainy days.',
              },
              {
                season: 'April - June (Shoulder Season)',
                icon: CheckCircle,
                details: 'The sweet spot for museum visits. Pleasant weather, moderate crowds, and full operating hours. Gardens at Jardin Majorelle and Dar Batha are in bloom. Ramadan may fall in this period — check dates as museum hours shorten during the holy month.',
              },
              {
                season: 'July - September (Summer)',
                icon: AlertTriangle,
                details: 'Interior cities like Marrakech and Fes reach 40-45 degrees Celsius. Air-conditioned museums become a welcome refuge from the heat. Visit museums during the hottest midday hours and save outdoor sightseeing for mornings and evenings. Tangier and Rabat are cooler coastal alternatives.',
              },
              {
                season: 'During Ramadan',
                icon: Info,
                details: 'Most museums shorten their hours to 10:00 AM - 3:00 PM during Ramadan. Some smaller museums close entirely for the month. The YSL Museum and Museum Mohammed VI typically maintain adjusted schedules. Confirm hours directly with each museum before visiting during this period.',
              },
            ].map((period) => {
              const PeriodIcon = period.icon;
              return (
                <div key={period.season} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <PeriodIcon className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {period.season}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{period.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 moroccan-pattern bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the questions travelers ask most about visiting museums in Morocco.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Moroccan Architecture Guide',
                description: 'Riads, kasbahs, mosques, and medersas — the architectural traditions that shape Morocco\'s built environment.',
                href: '/architecture',
                icon: Building,
              },
              {
                title: 'Morocco Culture Guide',
                description: 'Festivals, music, art, literature, and the cultural customs that define Moroccan identity.',
                href: '/culture',
                icon: BookOpen,
              },
              {
                title: 'Berber Culture & Heritage',
                description: 'The Amazigh people, their language, traditions, crafts, and regions across Morocco.',
                href: '/berber-culture',
                icon: Users,
              },
              {
                title: 'Morocco Etiquette Guide',
                description: 'Dress codes, tipping, greetings, and social customs for respectful cultural engagement.',
                href: '/etiquette',
                icon: ShieldCheck,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── More Cultural Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Cultural Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/crafts', title: 'Moroccan Crafts Guide', desc: 'Pottery, woodwork, metalwork, leatherwork, and textile traditions by region and technique.' },
              { href: '/cooking-classes', title: 'Cooking Classes', desc: 'Learn to make tagine, couscous, pastilla, and more in hands-on classes across Morocco.' },
              { href: '/marrakech', title: 'Marrakech City Guide', desc: 'Complete guide to Marrakech including medina, souks, palaces, gardens, and dining.' },
              { href: '/fes', title: 'Fes City Guide', desc: 'Navigate the world\'s largest car-free urban area with our in-depth Fes guide.' },
              { href: '/rabat', title: 'Rabat City Guide', desc: 'Morocco\'s capital city with its blend of historic monuments and modern cultural institutions.' },
              { href: '/tangier', title: 'Tangier City Guide', desc: 'Gateway between Europe and Africa with a rich artistic and literary heritage.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#A0522D] to-[#7a3e22] text-white">
        <div className="container-morocco text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Plan Your Morocco Museum Tour
          </h2>
          <p className="text-lg text-white/90 mb-8 font-[family-name:var(--font-heading)]">
            From Roman mosaics in Tangier to contemporary African art in Marrakech, Morocco&apos;s museums reveal a civilization of extraordinary depth. Let us help you build the itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#A0522D] px-8 py-3.5 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/90 transition-colors"
            >
              Get a Custom Itinerary <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/culture"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/10 transition-colors"
            >
              Explore Culture Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

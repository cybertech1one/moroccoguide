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
  AlertTriangle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  Compass,
  Map,
  Landmark,
  Shield,
  ShoppingBag,
  Eye,
  Footprints,
  CircleDot,
  Layers,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'What Is a Medina? Complete Guide to Morocco\'s Historic Walled Cities 2026',
  description:
    'Discover what a medina is and explore Morocco\'s best historic walled cities. From Fes el-Bali to Marrakech, learn about medina architecture, UNESCO heritage sites, navigation tips, souks, riads, and the culture of Moroccan medinas.',
  keywords: [
    'what is a medina',
    'medina meaning',
    'medina morocco',
    'moroccan medina',
    'medinas morocco',
    'what is a medina in morocco',
    'best medinas morocco',
    'morocco old city',
    'fes medina',
    'marrakech medina',
    'moroccan walled city',
    'medina architecture',
    'UNESCO medina morocco',
    'navigating moroccan medina',
    'medina souks morocco',
    'riad medina morocco',
    'morocco historic cities',
    'medina gates bab morocco',
    'medina vs ville nouvelle',
    'fondouk morocco',
  ],
  openGraph: {
    title: 'What Is a Medina? Complete Guide to Morocco\'s Historic Walled Cities 2026',
    description:
      'Everything you need to know about Moroccan medinas. History, architecture, UNESCO sites, the best medinas ranked, navigation tips, shopping, safety, and cultural insights.',
    url: `${BASE_URL}/morocco-medina-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-fes-medina.webp`,
        width: 1200,
        height: 630,
        alt: 'Aerial view of the Fes el-Bali medina with its dense maze of narrow streets, minarets, and traditional architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a Medina? Guide to Morocco\'s Historic Walled Cities',
    description:
      'From Fes el-Bali to Chefchaouen: discover the meaning of medina, explore Morocco\'s best historic walled cities, and learn how to navigate their ancient streets like a local.',
    images: [`${BASE_URL}/images/hero-fes-medina.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-medina-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-medina-guide`,
  name: 'What Is a Medina? Complete Guide to Morocco\'s Historic Walled Cities 2026',
  description:
    'Comprehensive guide to Moroccan medinas covering history, architecture, UNESCO heritage sites, best medinas ranked, navigation tips, safety, shopping, and cultural insights.',
  url: `${BASE_URL}/morocco-medina-guide`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-medina-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Medina Guide', item: `${BASE_URL}/morocco-medina-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a medina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A medina (from the Arabic word "madina" meaning "city") is the historic walled quarter of a North African city. In Morocco, medinas are the original urban cores dating back centuries, characterized by narrow winding streets, traditional architecture, souks (markets), mosques, riads (courtyard houses), and fondouks (caravanserais). They are surrounded by defensive walls with monumental gates called "babs."',
      },
    },
    {
      '@type': 'Question',
      name: 'What does medina mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The word "medina" comes from the Arabic "madina" (مدينة), which simply means "city." In modern usage, particularly in Morocco and North Africa, it refers specifically to the old, historic walled part of a city, as opposed to the "ville nouvelle" (new city) built during the French colonial period.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan medinas are UNESCO World Heritage Sites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Four Moroccan medinas hold UNESCO World Heritage status: Fes el-Bali (inscribed 1981), the Medina of Marrakech (1985), the Medina of Essaouira (2001), and the Medina of Tetouan (1997). The historic city of Meknes (2001) and Rabat (2012) are also UNESCO-listed for their broader urban heritage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to walk in a Moroccan medina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Moroccan medinas are generally safe for visitors. Exercise normal precautions: keep valuables secure, be aware of your surroundings, and stay on lit streets after dark. The biggest risks are getting lost (which is part of the experience) and minor scams targeting tourists. Most locals are genuinely helpful if you ask for directions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best medina to visit in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fes el-Bali is widely considered the most impressive medina in Morocco and the largest car-free urban area in the world. For first-time visitors, Marrakech offers the most accessible medina experience. Chefchaouen has the most photogenic medina with its blue-washed walls. Essaouira offers a relaxed, easy-to-navigate coastal medina.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a medina and a ville nouvelle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The medina is the original historic walled city with narrow streets, traditional architecture, and a medieval urban layout. The ville nouvelle ("new city") was built by the French during the colonial period (1912-1956) with wide boulevards, European-style buildings, and a modern grid layout. Most Moroccan cities have both, connected but architecturally distinct.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST MEDINAS RANKED
   ═══════════════════════════════════════════════════════════════ */

const bestMedinas = [
  {
    rank: 1,
    name: 'Fes el-Bali',
    city: 'Fes',
    icon: Crown,
    unesco: true,
    unescoYear: 1981,
    founded: '9th century',
    description:
      'The world\'s largest car-free urban area and the most complete medieval city in the Arab world. Fes el-Bali is home to over 9,000 alleyways, the oldest university on Earth (University of al-Qarawiyyin, founded 859 AD), and the famous tanneries. Over 150,000 people live and work within its walls. Walking here feels like stepping into the Middle Ages.',
    highlights: ['Largest car-free urban zone in the world', 'Al-Qarawiyyin University (founded 859 AD)', 'Chouara tanneries', 'Over 9,000 winding alleyways'],
  },
  {
    rank: 2,
    name: 'Medina of Marrakech',
    city: 'Marrakech',
    icon: Star,
    unesco: true,
    unescoYear: 1985,
    founded: '11th century',
    description:
      'The most visited medina in Morocco and the heart of the Red City. Centered around the iconic Jemaa el-Fnaa square, the Marrakech medina is a sensory overload of souks, street performers, mosques, and palaces. It is more open and navigable than Fes, making it ideal for first-time visitors to Morocco.',
    highlights: ['Jemaa el-Fnaa square (UNESCO Masterpiece)', 'Koutoubia Mosque', 'Bahia Palace & El Badi Palace', 'Most extensive souk network'],
  },
  {
    rank: 3,
    name: 'Medina of Chefchaouen',
    city: 'Chefchaouen',
    icon: Eye,
    unesco: false,
    unescoYear: null,
    founded: '15th century (1471)',
    description:
      'The legendary Blue Pearl of Morocco. Chefchaouen\'s medina is famous for its blue-washed walls and buildings, originally painted by Jewish refugees in the 1930s who used the color to symbolize the sky and heaven. Small, compact, and easy to navigate on foot, it is one of the most photographed places in all of Africa.',
    highlights: ['Iconic blue-washed walls and stairways', 'Compact and easy to explore', 'Ras el-Maa waterfall at the edge', 'Rif Mountain backdrop'],
  },
  {
    rank: 4,
    name: 'Medina of Essaouira',
    city: 'Essaouira',
    icon: Compass,
    unesco: true,
    unescoYear: 2001,
    founded: '18th century (1760s)',
    description:
      'A coastal medina unlike any other in Morocco. Designed by French architect Theodore Cornut for Sultan Mohammed III, Essaouira\'s medina blends Moroccan and European influences. The straight streets are easier to navigate than other medinas, the Atlantic breeze keeps things cool, and the laid-back atmosphere is a welcome change from the intensity of Fes or Marrakech.',
    highlights: ['Atlantic coast setting with sea ramparts', 'Grid-like layout, easy navigation', 'Portuguese-Moroccan fortifications', 'Gnaoua music heritage'],
  },
  {
    rank: 5,
    name: 'Medina of Tetouan',
    city: 'Tetouan',
    icon: Landmark,
    unesco: true,
    unescoYear: 1997,
    founded: '15th century',
    description:
      'The most Andalusian medina in Morocco. Built by Moorish refugees expelled from Spain in the 15th century, Tetouan\'s medina has a distinctly Spanish-Moorish architectural style with whitewashed walls, ornate balconies, and tiled plazas. It is one of the smallest and most intimate UNESCO-listed medinas, receiving far fewer tourists than Fes or Marrakech.',
    highlights: ['Andalusian-Moorish architecture', 'Whitewashed buildings with ornate balconies', 'Least touristy UNESCO medina', 'Spanish-influenced craft traditions'],
  },
  {
    rank: 6,
    name: 'Medina of Meknes',
    city: 'Meknes',
    icon: Building,
    unesco: true,
    unescoYear: 1996,
    founded: '11th century',
    description:
      'The imperial city medina that most visitors overlook. Meknes was the capital of Sultan Moulay Ismail in the 17th century, and the medina reflects his ambition: monumental gates, vast royal granaries, and an enormous palace complex. The Bab Mansour gate is widely considered the most beautiful gateway in all of Morocco.',
    highlights: ['Bab Mansour, Morocco\'s finest gate', 'Royal granaries of Moulay Ismail', 'Less crowded than Fes or Marrakech', 'Excellent food scene in the medina'],
  },
  {
    rank: 7,
    name: 'Medina of Rabat',
    city: 'Rabat',
    icon: Shield,
    unesco: true,
    unescoYear: 2012,
    founded: '12th century',
    description:
      'The capital city\'s medina is clean, orderly, and surprisingly calm. Smaller than Fes or Marrakech, Rabat\'s medina runs along the Bou Regreg river and features the atmospheric Kasbah of the Udayas with its blue-and-white Andalusian streets. It is the most accessible and least overwhelming medina for first-time visitors.',
    highlights: ['Kasbah of the Udayas', 'Clean and well-maintained streets', 'River and ocean views', 'Most peaceful major medina'],
  },
  {
    rank: 8,
    name: 'Medina of Tangier',
    city: 'Tangier',
    icon: Compass,
    unesco: false,
    unescoYear: null,
    founded: 'Ancient (Phoenician era)',
    description:
      'Where Africa meets Europe. Tangier\'s medina sits on a hill overlooking the Strait of Gibraltar, and on a clear day, you can see Spain from the ramparts. The kasbah at the top houses a museum of Moroccan arts. The medina has a cosmopolitan history, having been an international zone that attracted artists, writers, and spies throughout the 20th century.',
    highlights: ['Views of Spain across the Strait', 'Kasbah Museum of Moroccan Arts', 'Literary heritage (Bowles, Burroughs)', 'Petit Socco historic square'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MEDINA ARCHITECTURE ELEMENTS
   ═══════════════════════════════════════════════════════════════ */

const architectureElements = [
  {
    name: 'Riad',
    icon: Building,
    description:
      'A traditional Moroccan house built around a central courtyard (often with a fountain and garden). The word "riad" comes from the Arabic for "garden." Riads have no exterior windows; all rooms face inward for privacy and coolness. Today, many have been converted into boutique guesthouses.',
    funFact: 'There are estimated to be over 3,000 riads in the Fes medina alone.',
  },
  {
    name: 'Fondouk (Caravanserai)',
    icon: Layers,
    description:
      'A historic inn and trading post built around a courtyard, originally designed to house traveling merchants and their animals. The ground floor stored goods and animals; upper floors had sleeping rooms. Many fondouks in Fes and Marrakech date back 500+ years and are now artisan workshops.',
    funFact: 'Fes el-Bali has over 175 fondouks, making it the city with the most in the world.',
  },
  {
    name: 'Hammam',
    icon: CircleDot,
    description:
      'The traditional public bathhouse found in every medina neighborhood. Hammams have been central to Moroccan social life for over a millennium. They consist of heated rooms of increasing temperature and are used for bathing, socializing, and ritual purification before Friday prayers.',
    funFact: 'Every mosque in a medina was traditionally built with a hammam, a bakery, and a fountain nearby.',
  },
  {
    name: 'Mosque & Minaret',
    icon: Landmark,
    description:
      'The spiritual anchors of every medina. Neighborhood mosques (jama) dot the medina at close intervals so that no one lives more than a few minutes\' walk from one. The minaret is the most visible architectural feature, and the call to prayer echoes through the narrow streets five times daily.',
    funFact: 'The Fes medina alone contains over 300 mosques. Non-Muslims may not enter mosques in Morocco (except Hassan II in Casablanca).',
  },
  {
    name: 'Souk (Market)',
    icon: ShoppingBag,
    description:
      'The commercial arteries of the medina. Souks are organized by trade: leatherworkers in one area, spice merchants in another, weavers in a third. This guild-based system has persisted for centuries. The covered souks provide shade and create a labyrinthine shopping experience unlike anything in the modern world.',
    funFact: 'The Marrakech souks contain over 3,000 shops spread across dozens of interconnected alleyways.',
  },
  {
    name: 'Bab (Gate)',
    icon: Compass,
    description:
      'The monumental gates that pierce the medina walls and control access to the city. Babs were both defensive structures and works of art, often decorated with intricate zellige tilework, carved plaster, and Arabic calligraphy. Major gates were closed at night for security well into the 20th century.',
    funFact: 'The Bab Mansour in Meknes, completed in 1732, is widely regarded as the most beautiful gate in North Africa.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: NAVIGATION TIPS
   ═══════════════════════════════════════════════════════════════ */

const navigationTips = [
  {
    title: 'Download an Offline Map',
    icon: Map,
    description:
      'Google Maps and Maps.me both offer offline maps that work surprisingly well inside medinas. Download the city map before entering. GPS works even without data, so you can track your location in real time.',
  },
  {
    title: 'Follow the Flow of People',
    icon: Users,
    description:
      'Major medina arteries carry a steady flow of foot traffic. If you are lost, follow the crowd heading in one direction: it usually leads to a main gate, a major square, or a souk entrance. Walking against the flow takes you deeper into residential quarters.',
  },
  {
    title: 'Use Landmarks, Not Street Names',
    icon: Landmark,
    description:
      'Most medina streets do not have visible names. Navigate by landmarks: mosques, fountains, fondouks, and gates. Tell your riad host to give you landmark-based directions. "Turn left at the green mosque, then right at the fountain" is more useful than any address.',
  },
  {
    title: 'Remember the Minaret Trick',
    icon: Eye,
    description:
      'Minarets are visible above the rooftops from almost anywhere in a medina. Identify the minaret closest to your riad or hotel and use it as a compass. When lost, look up and orient yourself relative to that tower.',
  },
  {
    title: 'Getting Lost Is Part of It',
    icon: Compass,
    description:
      'Every experienced Morocco traveler will tell you: getting lost in the medina is not a problem but a feature. The best discoveries happen when you wander off the main paths. If you truly cannot find your way, ask a shopkeeper (not a street guide) for directions.',
  },
  {
    title: 'Beware of Unofficial Guides',
    icon: AlertTriangle,
    description:
      'People offering to "help" you find your way for free rarely are. A polite "la shukran" (no thank you) is enough. If you want a guide, hire an official one through your riad or the tourist office. Official guides carry ID cards and charge from 300 MAD for a half-day.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO BUY IN THE MEDINA
   ═══════════════════════════════════════════════════════════════ */

const whatToBuy = [
  { item: 'Leather goods (bags, slippers, belts)', price: 'From 80 MAD for babouche slippers', where: 'Leather souks, especially in Fes' },
  { item: 'Handwoven Berber rugs and carpets', price: 'From 500 MAD for small rugs', where: 'Carpet souks in Marrakech and Fes' },
  { item: 'Zellige tiles and ceramics', price: 'From 30 MAD per tile', where: 'Pottery souks, especially Fes and Safi' },
  { item: 'Argan oil (cosmetic or culinary)', price: 'From 80 MAD per bottle', where: 'Herbalists and women\'s cooperatives' },
  { item: 'Spices (saffron, ras el hanout, cumin)', price: 'From 20 MAD per bag', where: 'Spice souks in any medina' },
  { item: 'Brass and copper lanterns', price: 'From 150 MAD for small lanterns', where: 'Metalwork souks, Marrakech and Fes' },
  { item: 'Traditional Moroccan clothing (djellaba, kaftan)', price: 'From 200 MAD for a djellaba', where: 'Textile souks throughout Morocco' },
  { item: 'Thuya wood carvings and boxes', price: 'From 50 MAD for small boxes', where: 'Essaouira medina (specialty)' },
  { item: 'Hand-painted pottery and tagines', price: 'From 60 MAD for decorative tagines', where: 'Pottery souks in Fes and Safi' },
  { item: 'Traditional jewelry (silver, amber, coral)', price: 'From 100 MAD for simple silver pieces', where: 'Jewelry souks, especially Tiznit and Essaouira' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MEDINA VS VILLE NOUVELLE
   ═══════════════════════════════════════════════════════════════ */

const medinaVsVilleNouvelle = [
  {
    aspect: 'History',
    medina: 'Centuries old, some dating to the 9th century. Organic growth over generations following Islamic urban planning principles.',
    villeNouvelle: 'Built during French colonial period (1912-1956). Planned modern cities with European design principles.',
  },
  {
    aspect: 'Street Layout',
    medina: 'Narrow, winding alleyways designed for pedestrians and donkeys. No grid pattern. Dead ends are common.',
    villeNouvelle: 'Wide boulevards, traffic circles, and a grid layout designed for cars. Tree-lined avenues and sidewalks.',
  },
  {
    aspect: 'Architecture',
    medina: 'Riads, fondouks, mosques, hammams. Earthen and stone construction. Interior courtyards. Low-rise buildings.',
    villeNouvelle: 'Art Deco, modernist, and contemporary buildings. Balconies, storefronts, apartment blocks. Multi-story construction.',
  },
  {
    aspect: 'Commerce',
    medina: 'Traditional souks organized by trade guilds. Bargaining expected. Artisan workshops. No fixed prices.',
    villeNouvelle: 'Modern shops, supermarkets, cafes, restaurants. Fixed prices. International brands. ATMs and banks.',
  },
  {
    aspect: 'Atmosphere',
    medina: 'Dense, sensory-rich, chaotic, and deeply atmospheric. The sounds, smells, and colors are overwhelming in the best way.',
    villeNouvelle: 'Calmer, more familiar to Western visitors. Restaurants, hotels with modern amenities, and a more relaxed pace.',
  },
  {
    aspect: 'Where to Stay',
    medina: 'Riads and traditional guesthouses. Intimate settings with courtyard gardens. From 300 MAD per night.',
    villeNouvelle: 'Hotels (budget to luxury), serviced apartments. Modern amenities, air conditioning, parking. From 400 MAD per night.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoMedinaGuidePage() {
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
            <span className="text-white">Morocco Medina Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Landmark className="w-4 h-4" />
            History &amp; Culture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            What Is a Medina?
            <br className="hidden md:block" /> Morocco&apos;s Historic Walled Cities
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The complete guide to understanding, exploring, and falling in love with
            Morocco&apos;s ancient medinas &mdash; from Fes el-Bali to Chefchaouen&apos;s Blue Pearl.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: What Is a Medina? ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Medina Meaning: The Arabic Word for City
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The word <strong>medina</strong> comes from the Arabic <em>madina</em> (مدينة),
                which simply means &quot;city.&quot; In Morocco and across North Africa, the term has
                taken on a more specific meaning: it refers to the <strong>historic walled quarter</strong> of
                a city, the original urban core where people have lived, traded, and worshipped for
                centuries before the modern era.
              </p>
              <p>
                A Moroccan medina is not a museum or a tourist attraction built for visitors. It is
                a living, breathing city-within-a-city where hundreds of thousands of people go about
                their daily lives. In the medina of Fes alone, over 150,000 residents live and work
                within walls first constructed in the 9th century. Children go to school through the
                same alleyways their great-grandparents used. Artisans practice crafts in workshops
                that have not changed in 500 years.
              </p>
              <p>
                For travelers, stepping into a Moroccan medina is the closest thing to time travel
                that exists. The narrow winding streets, the call to prayer echoing off ancient walls,
                the smell of spices and cedar wood, the sound of hammers on copper &mdash; these are
                sensory experiences that no photograph or video can prepare you for. This guide will
                help you understand, navigate, and deeply appreciate these extraordinary places.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── History of Moroccan Medinas ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            A Brief History of Moroccan Medinas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the founding of Fes in 789 AD to the UNESCO protections of today, Moroccan medinas have witnessed over a millennium of continuous urban life.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Clock className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                Foundation Period (8th-11th Century)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s earliest medinas were founded during the Islamic expansion of North Africa.
                Fes was established by Idris I in 789 AD, and its medina (Fes el-Bali) grew rapidly as
                refugees from Cordoba and Kairouan settled there, bringing Andalusian and Tunisian
                architectural traditions. Marrakech was founded in 1070 by the Almoravid dynasty as
                a military garrison that quickly became a trading hub. These early medinas followed
                Islamic urban planning principles: the mosque at the center, souks radiating outward,
                residential quarters arranged by tribal and ethnic affiliation.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Clock className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                Golden Age (12th-16th Century)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Under the Almohad, Marinid, and Saadian dynasties, Moroccan medinas reached their
                architectural peak. The Marinids built the stunning madrasas (Koranic schools) of Fes,
                including the Bou Inania and Al-Attarine, which remain masterpieces of Islamic art.
                The Saadians adorned Marrakech with the El Badi Palace and the exquisite Saadian Tombs.
                The medina walls were strengthened, monumental gates were built, and the souk system was
                formalized into the guild-based organization still visible today.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Clock className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                Colonial Period &amp; the Birth of the Ville Nouvelle (1912-1956)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                When France established its protectorate over Morocco in 1912, French administrator
                Hubert Lyautey made a pivotal decision: rather than demolishing the medinas, he ordered
                new European-style cities (villes nouvelles) to be built alongside them. This decision
                preserved Morocco&apos;s medinas intact while other North African cities saw their historic
                centers destroyed. The medinas became the &quot;old city&quot; while the ville nouvelle became
                the &quot;new city&quot; &mdash; a duality that defines every major Moroccan city today.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Clock className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                Modern Revival &amp; UNESCO Protection (1980s-Present)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                By the late 20th century, many medinas had fallen into disrepair as wealthier residents
                moved to the ville nouvelle. UNESCO inscriptions (Fes in 1981, Marrakech in 1985) brought
                international attention and funding. The riad renovation movement, driven by both Moroccan
                and foreign investors, has transformed thousands of crumbling courtyard houses into
                boutique guesthouses. Today, Morocco&apos;s medinas are experiencing a renaissance, balancing
                preservation with the needs of modern residents and the growing tourism industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Architecture Elements ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina Architecture: Key Elements
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every medina is built from the same architectural vocabulary. Understanding these elements transforms a confusing maze into a readable urban landscape.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureElements.map((element) => {
              const ElementIcon = element.icon;
              return (
                <div key={element.name} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ElementIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {element.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{element.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">{element.funFact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Medinas Ranked ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Medinas in Morocco: Ranked
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Every Moroccan medina has its own character and charm. Here are the eight finest, ranked by historical significance, architectural beauty, and visitor experience.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Official guide prices start from 300 MAD for a half-day. Seasonal pricing may apply during peak tourist months (October-April).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestMedinas.map((medina) => {
              const MedinaIcon = medina.icon;
              return (
                <div key={medina.rank} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">#{medina.rank}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {medina.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {medina.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <MedinaIcon className="w-3.5 h-3.5" />
                          Founded {medina.founded}
                        </span>
                      </div>
                    </div>
                  </div>
                  {medina.unesco && (
                    <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-3">
                      UNESCO World Heritage ({medina.unescoYear})
                    </div>
                  )}
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{medina.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {medina.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Navigating a Medina ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Footprints className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Navigate a Moroccan Medina
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The labyrinthine streets of a medina can feel disorienting at first. These tips will help you find your way with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navigationTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Safety in Medinas ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety in Moroccan Medinas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan medinas are generally safe for visitors. Here is what to watch for and how to stay comfortable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Pickpockets &amp; Petty Theft
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                As with any busy tourist area, be aware of your belongings. Use a cross-body bag,
                keep phones in front pockets, and avoid flashing expensive jewelry or electronics.
                Crowded souks are where pickpockets are most active.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Common Scams to Avoid
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Unofficial &quot;guides&quot; who lead you to shops for commission, henna artists who grab
                your hand and demand payment, and &quot;closed mosque&quot; diversion scams are the most
                common. A confident &quot;la shukran&quot; (no thank you) handles most situations.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Walking After Dark
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Main medina thoroughfares remain busy and well-lit until late evening. Narrow
                residential side streets can be dark and deserted after 9-10 PM. Stick to main
                routes after dark, or use your phone flashlight if navigating back to your riad.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                The Medina Is Welcoming
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Despite the warnings, the vast majority of interactions in the medina are positive.
                Moroccans are famously hospitable. Shopkeepers will invite you for tea, children
                will wave and say hello, and locals will often go out of their way to help you
                find your destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Buy in the Medina ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Buy in a Moroccan Medina
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The souks of Morocco&apos;s medinas are treasure troves of handmade goods. Here are the best purchases with starting prices.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting points. Bargaining is expected in all souks. Seasonal pricing can change, and prices may be higher in heavily touristed medinas like Marrakech.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Starting Price</div>
                <div className="p-3 px-4">Where to Buy</div>
              </div>
              {whatToBuy.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.where}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Medina vs Ville Nouvelle ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDot className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina vs. Ville Nouvelle: Two Cities in One
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every major Moroccan city has two faces: the ancient medina and the colonial-era ville nouvelle. Understanding the difference helps you plan your visit.
          </p>
          <div className="max-w-5xl mx-auto space-y-6">
            {medinaVsVilleNouvelle.map((item) => (
              <div key={item.aspect} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {item.aspect}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Landmark className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">Medina (Old City)</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.medina}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--color-gold)]">Ville Nouvelle (New City)</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.villeNouvelle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Medinas Are Changing ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How Moroccan Medinas Are Changing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s medinas are not frozen in time. They are evolving spaces where tradition meets modernity in fascinating and sometimes contentious ways.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Riad Renovation Boom
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Since the early 2000s, thousands of crumbling medina houses have been purchased and restored as boutique guesthouses. This has saved many historic buildings from collapse but has also raised property prices. The best riad renovations respect traditional methods and employ local artisans. Riad stays start from 300 MAD per night.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Infrastructure Modernization
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Moroccan authorities are investing in medina infrastructure: improved sewage, electrical wiring, street lighting, and emergency access. The Fes medina has received significant World Bank funding for structural restoration. Solar panels are appearing on rooftops, and fiber-optic internet now reaches many medina businesses.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Artisan Economy Under Pressure
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Traditional medina crafts face competition from cheap factory-made imports. Young Moroccans increasingly prefer modern careers over craft apprenticeships. Government programs and NGOs are working to preserve these traditions. When you buy handmade goods in the medina, you directly support this living heritage.
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
                What is a medina?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A medina is the historic walled quarter of a North African city. The word comes from
                the Arabic &quot;madina,&quot; meaning &quot;city.&quot; In Morocco, medinas are the original urban cores
                dating back centuries, characterized by narrow winding streets, traditional architecture
                including riads, fondouks, hammams, and mosques, bustling souks, and monumental gates
                called babs. They are living cities where hundreds of thousands of people still reside.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What does medina mean?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The word &quot;medina&quot; derives from the Arabic &quot;madina&quot; (مدينة), which translates
                literally as &quot;city.&quot; The name Medina in Saudi Arabia (Al-Madinah al-Munawwarah,
                &quot;The Radiant City&quot;) is perhaps the most famous use of the word. In Morocco and
                the broader Maghreb region, &quot;medina&quot; has come to refer specifically to the old,
                historic walled part of a city, distinguishing it from the newer districts built
                during and after the colonial period.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which Moroccan medinas are UNESCO World Heritage Sites?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Four Moroccan medinas hold UNESCO World Heritage status: Fes el-Bali (inscribed 1981),
                the Medina of Marrakech (1985), the Medina of Essaouira (2001), and the Medina of
                Tetouan (1997). The historic city of Meknes (1996) and Rabat: Modern Capital and
                Historic City (2012) are also UNESCO-listed, bringing the total to six cities with
                UNESCO recognition for their medina heritage.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it safe to walk in a Moroccan medina?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Moroccan medinas are generally safe for visitors, including solo travelers and
                women. Take the same precautions you would in any busy urban area: keep valuables
                secure, stay on main streets after dark, and politely decline offers from unofficial
                guides. The biggest &quot;danger&quot; in a medina is getting lost, which is part of the charm.
                If you need help, shopkeepers and café owners are almost always willing to point you
                in the right direction.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best medina to visit in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                It depends on what you are looking for. Fes el-Bali is the most historically impressive
                and the largest car-free urban area in the world. Marrakech offers the most energetic
                and accessible medina experience. Chefchaouen has the most photogenic medina with its
                blue-painted walls. Essaouira offers the most relaxed and navigable coastal medina.
                For off-the-beaten-path experiences, Tetouan and Meknes are excellent.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the difference between a medina and a ville nouvelle?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The medina is the original historic walled city with narrow streets, traditional
                architecture, and a medieval urban layout. The ville nouvelle (&quot;new city&quot;) was built
                by the French during Morocco&apos;s colonial period (1912-1956) with wide boulevards,
                European-style buildings, and a modern grid layout. Most Moroccan cities have both
                side by side, connected by gates and main roads but architecturally and culturally
                distinct worlds.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much time should I spend exploring a medina?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                For the major medinas (Fes, Marrakech), dedicate at least a full day, ideally two.
                A half-day guided tour gives you an overview, but the real magic happens when you
                wander on your own. For smaller medinas (Chefchaouen, Essaouira, Rabat), half a day
                is enough for a thorough exploration. Budget extra time for shopping in the souks,
                as bargaining takes longer than you expect.
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
            <Link href="/fes-medina-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes Medina Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate the world&apos;s largest car-free urban area. Tanneries, madrasas, and the soul of Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech-medina-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech Medina Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Jemaa el-Fnaa, the souks, palaces, and the sensory overload of the Red City&apos;s heart.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-markets-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Markets Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Master the art of souk shopping. Bargaining tips, best buys, and market etiquette.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Customs, etiquette, traditions, and the cultural insights that transform your trip.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Explore Morocco&apos;s Medinas?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Start planning your journey through Morocco&apos;s historic walled cities. From the ancient
            alleyways of Fes to the blue streets of Chefchaouen, the medina awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <MapPin className="w-4 h-4" />
              Explore Fes
            </Link>
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Explore Marrakech
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

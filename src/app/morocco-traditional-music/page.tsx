import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Music,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Award,
  BookOpen,
  Globe,
  Calendar,
  Volume2,
  Disc3,
  Mic,
  Headphones,
  Guitar,
  Flame,
  Crown,
  Moon,
  MessageCircleQuestion,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-traditional-music`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Traditional Music Guide 2026 | Gnaoua, Andalusian, Chaabi & Instruments',
  description:
    'Complete guide to traditional Moroccan music. Discover Gnaoua spiritual healing music, Andalusian classical, Chaabi folk, Rai, Amazigh songs, key instruments like guembri, oud, bendir, and qraqeb. Where to hear live music, festivals, workshops, and how to buy authentic instruments.',
  keywords: [
    'Moroccan traditional music',
    'Gnaoua music Morocco',
    'Gnawa music',
    'Andalusian music Morocco',
    'Chaabi music Morocco',
    'Rai music Morocco',
    'Amazigh music Berber',
    'guembri instrument',
    'oud Morocco',
    'bendir drum Morocco',
    'qraqeb castanets',
    'Gnaoua festival Essaouira',
    'live music Morocco',
    'Jemaa el-Fnaa musicians',
    'Morocco music guide 2026',
    'Moroccan instruments',
    'malhun music',
    'Morocco music workshops',
    'buy instruments Morocco',
    'UNESCO Gnaoua',
    'Fes sacred music festival',
    'Morocco music traditions',
  ],
  openGraph: {
    title: 'Morocco Traditional Music Guide 2026 | Gnaoua, Andalusian, Chaabi & Instruments',
    description:
      'Explore Morocco through its music: Gnaoua trance rituals, Andalusian orchestras, Chaabi street anthems, Amazigh mountain songs, and the instruments that define each tradition. Where to hear live music, buy instruments, and join workshops.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/art-gnawa-music.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Gnaoua musicians performing with guembri and qraqeb in Morocco',
      },
    ],
    type: 'article',
    siteName: 'City Tours Morocco',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Traditional Music Guide 2026 | Gnaoua, Andalusian, Chaabi & Instruments',
    description:
      'Gnaoua trance music, Andalusian classical orchestras, Chaabi folk, Rai, Amazigh songs, traditional instruments, festivals, and where to hear live music across Morocco.',
    images: [`${BASE_URL}/images/art-gnawa-music.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is Gnaoua music and where can I hear it in Morocco?',
    a: 'Gnaoua (also spelled Gnawa) is a spiritual music tradition rooted in sub-Saharan African rituals brought to Morocco by enslaved people centuries ago. It combines repetitive bass patterns from the guembri lute with iron qraqeb castanets and call-and-response chanting. You can hear Gnaoua nightly at Jemaa el-Fnaa in Marrakech, at Gnaoua restaurants in Essaouira and Marrakech, and at the annual Gnaoua World Music Festival in Essaouira every June.',
  },
  {
    q: 'Is Gnaoua music recognized by UNESCO?',
    a: 'Yes. In 2019, UNESCO inscribed Gnaoua on its Representative List of the Intangible Cultural Heritage of Humanity. The recognition covers the rituals, music, and ceremonies associated with Gnaoua practices across Morocco, particularly in Essaouira and Marrakech.',
  },
  {
    q: 'Can I attend a Gnaoua healing ceremony (lila) as a tourist?',
    a: 'Lilas are private all-night spiritual ceremonies and not typically open to casual tourists. However, some maallems (master musicians) in Essaouira and Marrakech do invite respectful visitors to attend portions of lilas, especially if introduced through a local contact. Ask at your riad or at a Gnaoua cultural center. Expect to sit quietly, remove your shoes, and refrain from recording unless given explicit permission.',
  },
  {
    q: 'What are the main traditional instruments in Moroccan music?',
    a: 'The core instruments include the guembri (a three-string bass lute used in Gnaoua), the oud (a pear-shaped fretless lute central to Andalusian music), the bendir (a large frame drum with snares), qraqeb (heavy iron castanets), the rabab (a bowed string instrument), the nay (a reed flute), the derbouka (a goblet drum), and the taarija (a small clay drum used in Chaabi music).',
  },
  {
    q: 'Where can I buy authentic Moroccan instruments?',
    a: 'The best places are the instrument workshops in the medinas of Marrakech, Fes, and Essaouira. In Marrakech, check shops along Rue Riad Zitoun el-Kdim. In Fes, look in the Talaa Kebira area. In Essaouira, several luthiers near the port make guembris by hand. Prices start from 200 MAD for a small bendir and from 800 MAD for a handmade guembri. Always play the instrument before buying, or ask the maker to play it for you.',
  },
  {
    q: 'What music festivals are worth attending in Morocco?',
    a: 'The Gnaoua World Music Festival in Essaouira (June) is the biggest and most accessible, with free outdoor stages. The Fes Festival of World Sacred Music (June) attracts international spiritual music acts. Mawazine in Rabat (June) is one of the largest music festivals in Africa. The Timitar Festival in Agadir (July) focuses on Amazigh music. The Jazzablanca Festival in Casablanca (April) draws top jazz and world music artists.',
  },
  {
    q: 'Can I take music lessons or workshops during my trip?',
    a: 'Yes. Several riads and cultural centers offer guembri, oud, and percussion workshops for beginners. In Essaouira, Gnaoua masters give private lessons from 300 MAD per hour. In Marrakech, Dar Cherifa and other cultural venues run music workshops. In Fes, the Fes Cooking and Cultural Tours organization includes music sessions. Book directly or ask your riad to arrange a session with a local musician.',
  },
  {
    q: 'What is the difference between Chaabi and Rai music?',
    a: 'Chaabi is Moroccan folk-pop music that originated in the markets and working-class neighborhoods of Casablanca and Marrakech. It uses traditional instruments like the derbouka and bendir and draws on malhun poetry. Rai originated in western Algeria and crossed into eastern Morocco (Oujda region). Rai uses more modern instrumentation like synthesizers and drum machines, with lyrics that often address love, freedom, and social frustration. Both are popular at Moroccan weddings.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Traditional Music Guide 2026',
  description:
    'Complete guide to Moroccan traditional music covering Gnaoua, Andalusian classical, Chaabi, Rai, Amazigh songs, key instruments, live venues, festivals, and workshops.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/art-gnawa-music.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Traditional Music Guide', item: PAGE_URL },
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
   DATA: MUSIC GENRES
   ================================================================ */

const musicGenres = [
  {
    name: 'Gnaoua (Gnawa)',
    icon: Flame,
    origin: 'Sub-Saharan African roots, brought by enslaved people',
    centers: 'Essaouira, Marrakech, Meknes',
    description:
      'Gnaoua is a spiritual and healing music tradition that fuses sub-Saharan African rhythms with Sufi Islamic elements. Performances center on the maallem (master musician), who plays the guembri, a three-string bass lute covered in camel skin. Supporting musicians clap heavy iron qraqeb castanets in interlocking patterns while a chorus responds to the maallem\'s chanted invocations. A full Gnaoua ceremony (lila) lasts an entire night, moving through seven suites of songs, each associated with a different color, spirit, and incense. The music builds from slow, hypnotic bass lines to rapid rhythmic climaxes designed to induce trance states.',
    unescoNote: 'Inscribed on UNESCO\'s Intangible Cultural Heritage list in 2019.',
    keyArtists: 'Maallems Mahmoud Guinea (d. 2015), Hassan Hakmoun, Hamid El Kasri, Mustapha Bakbou',
  },
  {
    name: 'Andalusian Classical (Al-Ala)',
    icon: Crown,
    origin: 'Moorish Spain, brought to Morocco after the Reconquista',
    centers: 'Fes, Tetouan, Rabat, Oujda',
    description:
      'When Muslims and Jews were expelled from Al-Andalus in 1492, they carried their court music to North Africa. In Morocco, this tradition evolved into Al-Ala, a refined orchestral form performed by ensembles of up to 30 musicians. A full Andalusian nuba (suite) contains five movements in different rhythmic modes and can last four to five hours. The music is performed on oud, rabab, nay, derbouka, and tar, with a lead vocalist. The lyrics draw on classical Arabic poetry about love, nature, and divine longing. Fes and Tetouan remain the strongest centers, where conservatories train young musicians in this centuries-old form.',
    unescoNote: '',
    keyArtists: 'Abdessadak Chekara, Abdelkrim Rais Orchestra, Orchestre Moulay Ahmed Loukili',
  },
  {
    name: 'Chaabi',
    icon: Users,
    origin: 'Working-class neighborhoods of Casablanca and Marrakech',
    centers: 'Casablanca, Marrakech, nationwide',
    description:
      'Chaabi means "popular" or "of the people," and this genre lives up to its name. Born in the souks and working-class quarters, Chaabi blends malhun poetry (a Moroccan literary tradition dating to the 16th century) with folk melodies and hand-drum rhythms. Performances are loud, communal affairs. A Chaabi band typically features a lead vocalist, bendir drums, derboukas, a violin, and sometimes an oud. The lyrics address everyday life: love, hardship, humor, and social commentary. Chaabi is the backbone of Moroccan wedding music, and during summer wedding season, Chaabi bands perform nightly across the country.',
    unescoNote: '',
    keyArtists: 'Najat Aatabou, Daoudi, Hajja Hamdaouia, Nass El Ghiwane (also protest folk)',
  },
  {
    name: 'Rai',
    icon: Mic,
    origin: 'Oran, Algeria; crossed into eastern Morocco',
    centers: 'Oujda, eastern Morocco',
    description:
      'Rai originated in the port city of Oran in western Algeria and spread to eastern Morocco through the porous border region around Oujda. The word "rai" means "opinion" or "point of view," and the genre has always carried an edge of social rebellion. Modern Rai fuses traditional Bedouin vocal styles with synthesizers, drum machines, and Western pop structures. Lyrics deal openly with love, alcohol, heartbreak, and social frustration, topics that made Rai controversial with conservative authorities on both sides of the border. In Morocco, Rai is most popular in the eastern provinces and at weddings and nightclubs across the country.',
    unescoNote: '',
    keyArtists: 'Cheb Khaled, Cheb Mami, Cheb Hasni, and Moroccan Rai artists Faudel, Douzi',
  },
  {
    name: 'Amazigh (Berber) Music',
    icon: Globe,
    origin: 'Indigenous Amazigh communities across Morocco',
    centers: 'Atlas Mountains, Souss Valley, Rif Mountains',
    description:
      'Morocco\'s Amazigh populations have distinct musical traditions tied to their three main linguistic groups. In the High Atlas, Tashelhit-speaking communities perform Ahwash: large-scale communal dances where men and women form opposing lines and move in synchronized patterns to complex polyrhythmic drumming. In the Middle Atlas, Tamazight speakers perform Ahidous, a similar communal dance with a tighter, circular formation. In the Rif Mountains, Tarifit speakers have their own styles influenced by Mediterranean and Spanish traditions. All three use the bendir frame drum, hand-clapping, and call-and-response singing. Amazigh music is inseparable from community gatherings, harvests, weddings, and seasonal festivals.',
    unescoNote: '',
    keyArtists: 'Ammouri Mbarek, Fatima Tabaamrant, Rouicha, Izenzaren',
  },
  {
    name: 'Malhun',
    icon: BookOpen,
    origin: 'Moroccan urban literary tradition, 16th century onward',
    centers: 'Meknes, Fes, Marrakech, Sale',
    description:
      'Malhun sits between poetry and music. A qasida (poem) is composed in Moroccan Arabic by a poet, then set to music and performed by a small ensemble led by a vocalist accompanied by oud, swisen (a small mandolin-like instrument), and hand drums. The poems are long, intricate, and often humorous, covering themes of love, religion, trade, and daily life in the old medina. A single malhun poem can take 20 to 40 minutes to perform. Meknes is the historical capital of malhun, and the annual Malhun Festival there draws performers and scholars from across Morocco.',
    unescoNote: '',
    keyArtists: 'Haj Houcine Toulali, Said Guennoun, Hajja Hamdaouia',
  },
];

/* ================================================================
   DATA: TRADITIONAL INSTRUMENTS
   ================================================================ */

const instruments = [
  {
    name: 'Guembri (Sintir)',
    genre: 'Gnaoua',
    description:
      'A three-string bass lute carved from a single log (usually walnut or mahogany) and covered in camel or goat skin. The strings are made of dried gut. The guembri produces the deep, resonant bass lines that drive Gnaoua trance music. It is played exclusively by the maallem, and each instrument is considered to have its own spiritual character.',
    price: 'from 800 MAD for a tourist-grade instrument; from 2,500 MAD for a professional handmade guembri',
  },
  {
    name: 'Oud',
    genre: 'Andalusian, Classical',
    description:
      'A pear-shaped, fretless stringed instrument with 11 or 13 strings grouped in courses. The oud is the ancestor of the European lute (the name "lute" derives from Arabic "al-ud"). It is the backbone of Andalusian orchestras and is also used in solo performances and modern Moroccan pop. Playing the oud requires years of training to master the microtonal intervals of Arabic maqam scales.',
    price: 'from 1,200 MAD for a student oud; from 4,000 MAD for a handcrafted concert-quality instrument',
  },
  {
    name: 'Bendir',
    genre: 'All genres',
    description:
      'A large frame drum (about 40-50 cm in diameter) made of a wooden frame with a goatskin head and one or two gut snares stretched across the underside. The snares create a buzzing resonance that gives the bendir its distinctive rattle. It is found in every genre of Moroccan music and is the most common instrument at communal gatherings and Sufi dhikr ceremonies.',
    price: 'from 200 MAD for a basic bendir; from 600 MAD for a decorated professional-grade instrument',
  },
  {
    name: 'Qraqeb (Iron Castanets)',
    genre: 'Gnaoua',
    description:
      'Heavy iron double castanets about 30 cm long, shaped like oversized cymbals joined by a metal loop. Gnaoua musicians play them in interlocking rhythmic patterns that create a dense, shimmering metallic texture behind the guembri bass line. A typical Gnaoua ensemble has three to seven qraqeb players. The instruments are forged by blacksmiths and each pair has a slightly different pitch.',
    price: 'from 150 MAD for a basic pair; from 400 MAD for forged, tuned professional qraqeb',
  },
  {
    name: 'Rabab',
    genre: 'Andalusian, Amazigh',
    description:
      'A bowed string instrument with a narrow, boat-shaped wooden body and a single horsehair string (in Amazigh tradition) or two strings (in Andalusian orchestras). The Amazigh rabab produces a raw, reedy tone and is played by itinerant poets (imdyazen) who travel between villages. The Andalusian rabab has a more refined tone and sits within the classical orchestra.',
    price: 'from 500 MAD for an Amazigh rabab; from 1,500 MAD for an Andalusian orchestral rabab',
  },
  {
    name: 'Derbouka (Tabla)',
    genre: 'All genres',
    description:
      'A goblet-shaped drum made from ceramic (traditional) or aluminum (modern). The player holds it under one arm or between the knees and strikes the goatskin or synthetic head with both hands. The derbouka produces sharp, ringing tones and deep bass notes. It is the primary rhythm instrument in Chaabi music, wedding bands, and popular Moroccan pop.',
    price: 'from 150 MAD for ceramic; from 300 MAD for a professional aluminum derbouka',
  },
  {
    name: 'Nay (Reed Flute)',
    genre: 'Andalusian, Sufi',
    description:
      'An end-blown reed flute with five to seven finger holes, made from a single piece of cane. The nay has a breathy, haunting tone and is prominent in Andalusian orchestras and Sufi music. Playing it requires a specific embouchure technique where the player directs the air stream at an angle across the open end. The nay is one of the oldest instruments in the world, with examples dating back 5,000 years.',
    price: 'from 100 MAD for a simple nay; from 500 MAD for a professional concert nay',
  },
  {
    name: 'Taarija',
    genre: 'Chaabi, devotional',
    description:
      'A small, chalice-shaped clay drum with a goatskin head, roughly 20 cm tall. The taarija produces a high, sharp crack and is played with rapid finger patterns. It is a staple of Chaabi music, street performances, and devotional music at Sufi zawiyas. The clay body gives it a warm resonance distinct from the metallic derbouka.',
    price: 'from 50 MAD for a basic taarija; from 200 MAD for a decorated artisan piece',
  },
];

/* ================================================================
   DATA: LIVE MUSIC VENUES & EXPERIENCES
   ================================================================ */

const liveVenues = [
  {
    city: 'Marrakech',
    venues: [
      { name: 'Jemaa el-Fnaa', type: 'Open-air square', note: 'Gnaoua circles, Chaabi singers, and Amazigh musicians perform nightly from sunset. Free to watch; tip from 10-20 MAD per group.' },
      { name: 'Dar Gnawa', type: 'Gnaoua restaurant', note: 'Live Gnaoua performances during dinner. Dinner with music from 250 MAD per person.' },
      { name: 'Le Comptoir Darna', type: 'Restaurant & lounge', note: 'Live Moroccan and international music, belly dancing shows. Dinner from 400 MAD.' },
      { name: 'Cafe Clock (Marrakech)', type: 'Cultural cafe', note: 'Regular Gnaoua jam sessions, storytelling nights, and Hikayat performances. Tea from 25 MAD.' },
    ],
  },
  {
    city: 'Essaouira',
    venues: [
      { name: 'Place Moulay Hassan', type: 'Public square', note: 'Gnaoua musicians play most evenings near the port. Free to watch; tips appreciated.' },
      { name: 'Gnaoua Culture Museum', type: 'Museum & venue', note: 'Small museum with Gnaoua artifacts and occasional live demonstrations.' },
      { name: 'Taros Cafe', type: 'Rooftop bar', note: 'Live music on the rooftop terrace overlooking the port. Drinks from 40 MAD.' },
      { name: 'Dar Souiri', type: 'Cultural center', note: 'Free Gnaoua concerts and art exhibitions. Check the weekly schedule posted outside.' },
    ],
  },
  {
    city: 'Fes',
    venues: [
      { name: 'Dar Batha Museum', type: 'Museum & concert venue', note: 'Andalusian music concerts during the Fes Festival of World Sacred Music. Also hosts events year-round.' },
      { name: 'Cafe Clock (Fes)', type: 'Cultural cafe', note: 'Regular live music nights with oud players and Gnaoua bands. Food from 60 MAD.' },
      { name: 'Bab Makina', type: 'Open-air stage', note: 'Main outdoor stage for the Fes Festival. Free and ticketed concerts in June.' },
      { name: 'Fes Medina streets', type: 'Street music', note: 'Itinerant musicians, especially around Bab Bou Jeloud gate and Talaa Kebira.' },
    ],
  },
  {
    city: 'Casablanca & Rabat',
    venues: [
      { name: 'Barometre', type: 'Live music bar (Casablanca)', note: 'Jazz, blues, and Gnaoua fusion nights. Drinks from 50 MAD.' },
      { name: 'Theatro', type: 'Nightclub (Casablanca)', note: 'Occasional live DJ sets mixing Rai and electronic. Entry from 150 MAD on weekends.' },
      { name: 'Rabat OLM Souissi', type: 'Concert venue (Rabat)', note: 'Hosts Mawazine festival concerts and large-scale music events.' },
      { name: 'Renaissance Rabat', type: 'Cultural center', note: 'Classical Andalusian music concerts and Malhun evenings throughout the year.' },
    ],
  },
];

/* ================================================================
   DATA: MUSIC FESTIVALS
   ================================================================ */

const festivals = [
  {
    name: 'Gnaoua World Music Festival',
    city: 'Essaouira',
    month: 'June',
    description: 'The flagship festival for Gnaoua music draws over 500,000 visitors across four days. Free outdoor stages along the beach and port feature collaborations between Gnaoua maallems and international jazz, blues, and world music artists. Indoor ticketed concerts at the Moulay Hassan stage showcase headline acts.',
    cost: 'Free outdoor stages; VIP passes from 500 MAD',
    tip: 'Book accommodation at least three months in advance. Essaouira fills up completely during the festival.',
  },
  {
    name: 'Fes Festival of World Sacred Music',
    city: 'Fes',
    month: 'June',
    description: 'One of the most prestigious world music festivals, held in the ancient medina of Fes. Performances take place in courtyards, gardens, and the Bab Makina open-air stage. The lineup spans Sufi qawwali, Andalusian orchestras, Gospel choirs, Hindustani classical, and other spiritual music traditions from around the world.',
    cost: 'Ticketed concerts from 200 MAD; some free daytime events',
    tip: 'Attend the evening concert at Bab Makina for the most atmospheric experience, with the illuminated palace walls as a backdrop.',
  },
  {
    name: 'Mawazine',
    city: 'Rabat',
    month: 'June',
    description: 'One of Africa\'s largest music festivals, Mawazine has hosted artists like Rihanna, Stevie Wonder, and Shakira alongside Moroccan stars. Multiple stages across Rabat host everything from international pop to local Chaabi and Rai acts over nine days.',
    cost: 'Many free stages; headliner tickets from 300 MAD',
    tip: 'The OLM Souissi stage hosts the biggest international acts. The Nahda stage features more Moroccan and Arab music.',
  },
  {
    name: 'Timitar Festival',
    city: 'Agadir',
    month: 'July',
    description: 'Focused on Amazigh music and culture, Timitar brings together Berber musicians from across North Africa and the Sahel with international world music acts. Performances take place in open-air venues across Agadir.',
    cost: 'Mostly free outdoor stages',
    tip: 'Combine with a beach holiday in Agadir. The festival atmosphere extends into the city\'s restaurants and cafes.',
  },
  {
    name: 'Jazzablanca',
    city: 'Casablanca',
    month: 'April',
    description: 'Casablanca\'s premier jazz festival brings international jazz, soul, and funk artists to the Anfa Hippodrome. The lineup blends pure jazz with Gnaoua-jazz fusion and Moroccan experimental acts.',
    cost: 'Day passes from 250 MAD; full festival pass from 600 MAD',
    tip: 'The late-night jam sessions at clubs around the Maarif district are where the real musical connections happen.',
  },
  {
    name: 'Malhun Festival',
    city: 'Meknes',
    month: 'September',
    description: 'A more intimate festival dedicated to malhun poetry-music, held in the historic venues of Meknes. Poets and musicians perform extended qasidas (poems set to music) in the classical malhun tradition.',
    cost: 'Most events are free',
    tip: 'Understanding Moroccan Arabic (Darija) adds enormously to the malhun experience, as the poetry is intricate and allusive.',
  },
];

/* ================================================================
   DEFAULT EXPORT: PAGE COMPONENT
   ================================================================ */

export default function MoroccoTraditionalMusicPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-light)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Traditional Music Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/art-gnawa-music.webp"
          alt="Gnaoua musicians performing with guembri and qraqeb during a traditional ceremony in Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-white mb-6">
            <Music className="w-4 h-4" />
            Culture &amp; Traditions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco Traditional Music Guide
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-[family-name:var(--font-heading)] max-w-3xl mx-auto leading-relaxed">
            From the trance rhythms of Gnaoua to the refined orchestras of Andalusian Al-Ala, Moroccan music
            carries centuries of history in every note. This guide covers the major genres, instruments,
            live venues, festivals, and how to experience the real musical soul of Morocco.
          </p>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Morocco sits at a crossroads of Africa, the Arab world, and Europe, and its music reflects
              every current that has passed through. Sub-Saharan African rhythms survive in Gnaoua trance
              ceremonies. The sophisticated court music of Moorish Spain lives on in Andalusian orchestras
              in Fes and Tetouan. Amazigh communities in the Atlas and Rif mountains maintain singing and
              drumming traditions that predate the Arab arrival by centuries. And in the working-class
              neighborhoods of Casablanca and Marrakech, Chaabi music turns malhun poetry into
              danceable anthems for weddings and street celebrations.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              What makes Moroccan music distinctive is that these traditions are not museum pieces. They are
              alive and practiced daily. You will hear Gnaoua at sunset in Jemaa el-Fnaa, Andalusian music
              at a Fes conservatory, Chaabi at a Casablanca wedding, and Amazigh drumming at a harvest festival
              in the High Atlas. This guide will help you recognize each tradition, understand its instruments
              and history, and find the best places to hear it performed by masters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="card-moroccan p-5 text-center">
              <Award className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-3" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">1</p>
              <p className="text-sm text-[var(--text-secondary)]">UNESCO-recognized tradition (Gnaoua, 2019)</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Disc3 className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-3" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">6+</p>
              <p className="text-sm text-[var(--text-secondary)]">Distinct musical genres across Morocco</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Calendar className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-3" />
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">10+</p>
              <p className="text-sm text-[var(--text-secondary)]">Annual music festivals across the country</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Music & Identity ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Music &amp; Moroccan Identity
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Understanding why music matters so deeply in Moroccan society.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Building className="w-5 h-5 text-[var(--color-accent)]" />
                Music in Daily Life
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Music is woven into Moroccan routines in ways that surprise first-time visitors. Taxi
                drivers play Chaabi and Rai at full volume. The call to prayer, while not music in the
                Western sense, uses melodic modes (maqamat) that shape the sonic landscape of every city.
                Vendors in the souk sing out their prices. Wedding parties fill entire neighborhoods with
                amplified drums and vocals that last past midnight. During Ramadan, the mesaharati (dawn
                drummer) walks the streets before fajr prayer, drumming to wake people for suhoor. Music
                is not a separate activity in Morocco. It is part of the texture of daily existence.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[var(--color-accent)]" />
                The Protest Music Tradition
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco has a strong tradition of music as social commentary. Nass El Ghiwane, formed in
                Casablanca in 1970, fused Gnaoua rhythms and Chaabi folk with politically charged lyrics
                about poverty, injustice, and identity. They have been called &quot;the Rolling Stones of
                Africa.&quot; Their stripped-down sound, using only bendir, hajhouj (a smaller guembri),
                and voices, created a template for Moroccan protest music that persists today. Later
                groups like Jil Jilala and Lemchaheb followed the same path. Understanding this tradition
                adds depth to what you hear in the medinas and on Moroccan radio.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
                Modern Fusion &amp; Global Influence
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Moroccan musicians increasingly blend traditional forms with global genres. Gnaoua-jazz
                fusion has become a genre in its own right, with artists like Hassan Hakmoun and Aziz
                Sahmaoui performing at international jazz festivals. Hoba Hoba Spirit mixes Gnaoua with
                punk and ska. Electronic producers like Acid Arab sample Moroccan field recordings into
                dance tracks. In Casablanca and Rabat, a growing hip-hop scene raps in Darija (Moroccan
                Arabic) over beats that reference local percussion patterns. These modern developments
                do not replace the traditional forms. Instead, they exist alongside them, creating a
                musical ecosystem that is both rooted and forward-looking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Music Genres ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco&apos;s Musical Traditions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six major genres that define the Moroccan soundscape, each with its own history,
            instruments, and cultural context.
          </p>

          <div className="space-y-8">
            {musicGenres.map((genre) => {
              const GenreIcon = genre.icon;
              return (
                <div key={genre.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <GenreIcon className="w-8 h-8 text-[var(--color-accent)] shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                        {genre.name}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        <MapPin className="w-3.5 h-3.5 inline mr-1" />
                        {genre.centers} &middot; Origin: {genre.origin}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {genre.description}
                  </p>
                  {genre.unescoNote && (
                    <p className="text-sm text-[var(--color-gold)] font-medium flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 shrink-0" />
                      {genre.unescoNote}
                    </p>
                  )}
                  <p className="text-xs text-[var(--text-secondary)]">
                    <Star className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    <strong>Key artists:</strong> {genre.keyArtists}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Traditional Instruments ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Guitar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Instruments
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The instruments of Morocco are handcrafted from wood, animal skin, gut, clay, and iron.
            Each one carries a specific role in its genre.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {instruments.map((inst) => (
              <div key={inst.name} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Volume2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {inst.name}
                    </h3>
                    <span className="text-xs text-[var(--color-gold)] font-medium">{inst.genre}</span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {inst.description}
                </p>
                <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  {inst.price}
                </p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-gold)]">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-2">
              <Info className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <span>
                <strong>Buying tip:</strong> Instrument prices in the medina are always negotiable. Start by
                asking the maker to play the instrument so you can hear its tone. A well-made guembri or
                oud should have clear resonance with no buzzing or rattling. If you are serious about
                buying, visit multiple workshops before committing. Seasonal pricing can change, and tourist
                areas charge more than workshops in residential neighborhoods.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Where to Hear Live Music ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Headphones className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Hear Live Music
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From open-air squares to intimate cultural cafes, these are the best places
            to experience Moroccan music performed live.
          </p>

          <div className="space-y-10">
            {liveVenues.map((cityData) => (
              <div key={cityData.city}>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  {cityData.city}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cityData.venues.map((venue) => (
                    <div key={venue.name} className="card-moroccan p-5">
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {venue.name}
                      </h4>
                      <span className="text-xs text-[var(--color-gold)] font-medium block mb-2">{venue.type}</span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{venue.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Music Festivals ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Music Festivals Worth Planning Around
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s festival calendar peaks from April through September. These events are
            worth building an entire trip around.
          </p>

          <div className="space-y-6">
            {festivals.map((fest) => (
              <div key={fest.name} className="card-moroccan p-6 zellige-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                      {fest.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      <MapPin className="w-3.5 h-3.5 inline mr-1" />
                      {fest.city} &middot;
                      <Clock className="w-3.5 h-3.5 inline mx-1" />
                      {fest.month}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full px-3 py-1 shrink-0">
                    <DollarSign className="w-3.5 h-3.5" />
                    {fest.cost}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {fest.description}
                </p>
                <p className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                  <span><strong>Tip:</strong> {fest.tip}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Music Workshops & Lessons ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Music Workshops &amp; Lessons
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Hands-on musical experiences are available across Morocco for beginners and experienced
            musicians alike.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Gnaoua Guembri Lessons (Essaouira)',
                description: 'Several maallems in Essaouira offer private guembri lessons in their homes or workshops. Sessions cover basic technique, tuning, and one or two traditional pieces. No experience needed.',
                price: 'from 300 MAD per hour',
                icon: Music,
              },
              {
                title: 'Oud Workshops (Fes)',
                description: 'Fes conservatories and private teachers offer oud lessons for visitors. A typical session covers holding the instrument, basic right-hand plectrum technique, and a simple maqam scale. Multi-day courses available.',
                price: 'from 400 MAD per session',
                icon: Guitar,
              },
              {
                title: 'Percussion Sessions (Marrakech)',
                description: 'Group and private percussion workshops covering bendir, derbouka, and taarija. Learn basic Moroccan rhythmic patterns used in Chaabi and Gnaoua music. Instruments provided.',
                price: 'from 200 MAD per person (group); from 350 MAD private',
                icon: Volume2,
              },
              {
                title: 'Amazigh Music & Dance (Atlas Mountains)',
                description: 'Village stays in the High Atlas sometimes include communal music and dance evenings where guests can participate in Ahwash or Ahidous circle dances. Ask your guide or guesthouse to arrange.',
                price: 'Often included in village stay packages from 500 MAD per night',
                icon: Users,
              },
            ].map((workshop) => {
              const WorkshopIcon = workshop.icon;
              return (
                <div key={workshop.title} className="card-moroccan p-5">
                  <WorkshopIcon className="w-6 h-6 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                    {workshop.description}
                  </p>
                  <p className="text-xs font-medium text-[var(--color-accent)] flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5" />
                    {workshop.price}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[var(--color-accent)]" />
              Practical Tips for Music Workshops
            </h3>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)] leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                Book workshops through your riad. They know the real musicians and can negotiate fair prices.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                Bring cash. Most musicians and small workshops do not accept cards.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                Ask permission before recording a session. Some musicians are happy to be filmed; others prefer not to be.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                Seasonal pricing can change. Festival season (June-July) is the most expensive period for private lessons as musicians are in high demand.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Etiquette for Live Music ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Etiquette for Live Music Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respect the musicians and the traditions, and you will be welcomed warmly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                rule: 'Tip the Musicians',
                text: 'At Jemaa el-Fnaa and public squares, dropping from 10-20 MAD into the musician\'s bowl is standard if you stop to listen. Do not take photos and walk away without tipping.',
              },
              {
                rule: 'Ask Before Recording',
                text: 'Some musicians welcome video and photos. Others consider their music sacred and prefer not to be recorded, especially during spiritual Gnaoua ceremonies. Always ask first.',
              },
              {
                rule: 'Respect Spiritual Ceremonies',
                text: 'If invited to a Gnaoua lila (healing ceremony), remove your shoes, sit quietly, do not interrupt the ritual, and do not use flash photography. These are genuine spiritual events, not tourist performances.',
              },
              {
                rule: 'Do Not Touch Instruments Without Permission',
                text: 'A guembri or oud is an extension of the musician. Never pick up or handle someone\'s instrument without being invited to do so. If you want to try, ask respectfully.',
              },
              {
                rule: 'Stay for the Full Performance',
                text: 'At restaurant and cafe performances, it is disrespectful to walk out in the middle of a piece. If you need to leave, wait for a break between songs.',
              },
              {
                rule: 'Dress Appropriately at Sacred Venues',
                text: 'If attending music at a Sufi zawiya or during a religious event, dress modestly. Cover shoulders and knees. Women may want to bring a headscarf, though it is not always required.',
              },
            ].map((item) => (
              <div key={item.rule} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.rule}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            The Sound of Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-gnawa-music.webp"
                alt="Gnaoua musician playing guembri during a traditional ceremony in Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Gnaoua Performance</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-gnaoua-festival.webp"
                alt="Crowd gathered at the Gnaoua World Music Festival in Essaouira with stage lights"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Gnaoua Festival, Essaouira</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-festival-morocco.webp"
                alt="Open-air music festival stage in Morocco with audience and performers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Festival Stage</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions travelers ask about Moroccan music.
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Nightlife',
                description: 'Bars, clubs, rooftop lounges, and after-dark entertainment across Moroccan cities.',
                href: '/morocco-nightlife',
                icon: Moon,
              },
              {
                title: 'Festivals & Events',
                description: 'Month-by-month calendar of Morocco\'s festivals, moussems, and cultural events.',
                href: '/morocco-festivals-events',
                icon: Calendar,
              },
              {
                title: 'Art Galleries',
                description: 'Contemporary art galleries, street art, and creative spaces in Morocco\'s cities.',
                href: '/morocco-art-galleries',
                icon: Sparkles,
              },
              {
                title: 'Berber Culture',
                description: 'Amazigh heritage, Tifinagh script, traditional villages, and cultural experiences.',
                href: '/morocco-berber-culture',
                icon: Globe,
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

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[var(--color-accent)] to-[#7A3B1E] text-white">
        <div className="container-morocco text-center max-w-3xl">
          <Music className="w-12 h-12 mx-auto mb-6 text-white/80" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-6">
            Experience Morocco Through Its Music
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            From the hypnotic bass of a guembri in Essaouira to a full Andalusian orchestra in Fes,
            Moroccan music offers experiences you cannot find anywhere else. Time your visit around a
            festival, take a percussion workshop, or simply follow the sound of drums through the medina.
            The music will find you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-festivals-events"
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-accent)] px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/90 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Festival Calendar
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/25 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Music,
  Drum,
  Radio,
  Mic2,
  Heart,
  MapPin,
  Calendar,
  Clock,
  Ticket,
  Users,
  Star,
  ArrowRight,
  Volume2,
  Award,
  ShoppingBag,
  Headphones,
  BookOpen,
  CircleDot,
  Globe,
  Sparkles,
  Info,
  CheckCircle,
  DollarSign,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Music Guide 2026 | Gnaoua, Andalusian, Rai & Live Music Scene',
  description:
    'Complete guide to Moroccan music genres: Gnaoua spiritual trance, Andalusian al-ala, Amazigh rhythms, Chaabi, Rai, and Malhoun poetry. Traditional instruments, live music venues by city, festivals, and where to buy instruments.',
  keywords: [
    'Moroccan music',
    'Gnaoua music',
    'Morocco live music',
    'Moroccan music genres',
    'Gnaoua festival Essaouira',
    'Andalusian music Morocco',
    'Amazigh Berber music',
    'Chaabi music Morocco',
    'Rai music Oujda',
    'Malhoun Morocco',
    'guembri instrument',
    'Moroccan instruments',
    'live music Marrakech',
    'Morocco music festivals 2026',
    'traditional Moroccan music',
    'Moroccan hip hop',
    'Morocco music scene',
    'oud Morocco',
    'bendir drum',
    'qraqeb castanets',
  ],
  openGraph: {
    title: 'Moroccan Music Guide 2026 | Gnaoua, Andalusian, Rai & Live Music Scene',
    description:
      'Discover Morocco\'s musical heritage from Gnaoua trance to Andalusian classical. Live venues, festivals, instruments, and the modern music scene across Marrakech, Fes, Essaouira, and beyond.',
    url: `${BASE_URL}/morocco-music-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Gnaoua musicians performing with guembri and qraqeb at a Moroccan music festival',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Music Guide 2026 | Gnaoua, Andalusian, Rai & Live Music',
    description:
      'From Gnaoua spiritual trance to Andalusian al-ala, Rai, and modern fusion. Complete guide to Morocco\'s music, instruments, live venues, and festivals.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-music-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-music-guide`,
  name: 'Moroccan Music Guide 2026 | Gnaoua, Andalusian, Rai & Live Music Scene',
  description:
    'Complete guide to Moroccan music genres, traditional instruments, live music venues, festivals, and the modern music scene.',
  url: `${BASE_URL}/morocco-music-guide`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-music-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Music Guide', item: `${BASE_URL}/morocco-music-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Gnaoua music and why is it significant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gnaoua is a spiritual music tradition rooted in sub-Saharan African heritage, brought to Morocco by enslaved peoples centuries ago. It combines Islamic Sufi chanting with pre-Islamic African rhythms and ritual healing ceremonies called lila. UNESCO inscribed Gnaoua on its Intangible Cultural Heritage list in 2019. The genre centers on the maalem (master musician) who plays the guembri, a three-stringed bass lute, while singers and dancers play iron qraqeb castanets.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the Gnaoua World Music Festival in Essaouira?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Gnaoua and World Music Festival takes place annually in Essaouira, typically in late June. The 2026 edition is expected in the last week of June. The festival runs for four days with free outdoor stages across the medina and ticketed concerts at larger venues. Book accommodation at least three months ahead as the city fills up completely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I hear live music in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jemaa el-Fnaa square hosts Gnaoua musicians and Amazigh groups nightly starting around 9 PM. For sit-down performances, try Cafe Clock in the Kasbah, Dar Cherifa for Andalusian evenings, or Comptoir Darna for dinner shows. The annual Marrakech du Rire and Festival National des Arts Populaires also bring live performances.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the main traditional Moroccan instruments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key instruments include the guembri (three-stringed bass lute used in Gnaoua), oud (pear-shaped lute used in Andalusian music), bendir (frame drum with snare strings), qraqeb (heavy iron castanets), kamanjah (bowed string instrument similar to a violin), rabab (two-stringed fiddle), darbuka (goblet drum), and taarija (small clay drum used at celebrations).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy traditional Moroccan instruments and bring them home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The best places to buy instruments are the instrument souks in Fes, Marrakech, and Essaouira. A quality guembri costs from 800 MAD, an oud from 1,500 MAD, and a bendir from 200 MAD. For airline travel, carry smaller instruments (bendir, qraqeb) as hand luggage. Larger instruments like the oud need a hard case or dedicated seat. There are no export restrictions on musical instruments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Chaabi and Rai music?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chaabi (meaning "popular" in Arabic) is a grassroots folk-pop genre performed at weddings and celebrations across Morocco, blending traditional melodies with modern beats. Rai originated in western Algeria and the Oujda region of eastern Morocco. Rai lyrics deal with love, loss, and social critique, and the genre uses more electronic production, synthesizers, and Western instruments alongside traditional ones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there music workshops or lessons available for tourists in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several venues offer hands-on sessions. Cafe Clock in both Marrakech and Fes runs Gnaoua music workshops (from 200 MAD per session). In Essaouira, local maalems give private guembri lessons, especially during festival season. Dar Adiyel in Fes hosts traditional Andalusian music classes. Prices for private lessons range from 300 to 600 MAD per hour.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MUSIC GENRES
   ═══════════════════════════════════════════════════════════════ */

const musicGenres = [
  {
    name: 'Gnaoua',
    icon: Drum,
    origin: 'Sub-Saharan African diaspora',
    regions: 'Essaouira, Marrakech, nationwide',
    description:
      'Gnaoua traces back to sub-Saharan enslaved peoples who brought their spiritual healing rituals to Morocco. The genre fuses Islamic Sufi practices with pre-Islamic African rhythms in ceremonies called lila (night-long healing rituals). A maalem (master musician) leads on the guembri while chorus members clap qraqeb and sing call-and-response chants that invoke ancestral spirits called mluk. UNESCO recognized Gnaoua as Intangible Cultural Heritage in 2019.',
    keyArtists: ['Maalem Mahmoud Guinea (legend)', 'Maalem Hamid El Kasri', 'Maalem Hassan Boussou', 'Maalam Mokhtar Gania'],
    instruments: ['Guembri', 'Qraqeb', 'Tbel drum'],
  },
  {
    name: 'Andalusian Classical (Al-Ala)',
    icon: Music,
    origin: 'Moorish Spain (Al-Andalus)',
    regions: 'Fes, Tetouan, Oujda, Rabat',
    description:
      'When the Moors were expelled from Spain in 1492, they carried with them a refined musical tradition. Andalusian al-ala music organizes around the nuba, a long orchestral suite that moves through five rhythmic movements (mizan). Each nuba is built on a specific melodic mode (tab). Originally there were 24 nuba suites corresponding to the hours of the day. Eleven survive intact today, performed by orchestras of 20 to 40 musicians.',
    keyArtists: ['Orchestre Moulay Ahmed Loukili', 'Amina Alaoui', 'Abdessadek Cheqara', 'Ahmed Piro'],
    instruments: ['Oud', 'Kamanjah', 'Rabab', 'Darbuka', 'Taarija'],
  },
  {
    name: 'Amazigh (Berber) Music',
    icon: Globe,
    origin: 'Indigenous North African',
    regions: 'Atlas Mountains, Souss, Rif, Sahara',
    description:
      'Amazigh music predates Arab arrival and varies by region. In the High Atlas, ahwash features large communal dances with drums and group singing in Tashelhit. In the Middle Atlas, ahidous involves men and women in alternating lines, performing call-and-response poetry with bendir drums. Rif Amazigh music (izlan) has a distinct sound influenced by Mediterranean traditions. Tuareg desert blues from the southeast blends pentatonic scales with hypnotic rhythms.',
    keyArtists: ['Rais Haj Belaid', 'Ammouri Mbarek', 'Fatima Tabaamrant', 'Najat Aatabou'],
    instruments: ['Bendir', 'Lotar (lute)', 'Nay (flute)', 'Alloun drum'],
  },
  {
    name: 'Chaabi',
    icon: Radio,
    origin: 'Urban Morocco',
    regions: 'Nationwide, especially Casablanca',
    description:
      'Chaabi literally means "of the people." This popular genre dominates Moroccan weddings, street celebrations, and taxi speakers. It draws from Andalusian melodies, Amazigh rhythms, and Egyptian pop, then wraps them in danceable beats. Chaabi has evolved alongside technology: early recordings used acoustic instruments, modern productions layer synthesizers and drum machines over traditional violins and darbuka patterns.',
    keyArtists: ['Nass El Ghiwane', 'Jil Jilala', 'Daoudi', 'Abdellah Daoudi'],
    instruments: ['Banjo', 'Darbuka', 'Hajhuj (bass guembri)', 'Violin'],
  },
  {
    name: 'Rai',
    icon: Mic2,
    origin: 'Western Algeria / Eastern Morocco',
    regions: 'Oujda, eastern Morocco',
    description:
      'Rai rose in the cabarets and port taverns of Oran (Algeria) and Oujda (Morocco) during the 1920s. The word "rai" means "opinion" or "point of view." Early rai used flute (gasba) and percussion; modern rai added synthesizers, drum machines, and electric guitar in the 1980s. Oujda hosts the annual International Rai Festival. Lyrics address love, heartbreak, exile, and social frustration with a directness unusual in North African music.',
    keyArtists: ['Cheb Khaled', 'Cheb Hasni', 'Cheba Zahouania', 'Faudel'],
    instruments: ['Gasba (flute)', 'Guellal drum', 'Synthesizer', 'Electric guitar'],
  },
  {
    name: 'Malhoun',
    icon: BookOpen,
    origin: 'Moroccan craft guilds',
    regions: 'Meknes, Fes, Marrakech, Sale',
    description:
      'Malhoun is sung poetry set to music, born in the artisan workshops of Meknes and Fes during the 17th century. Craftsmen composed qasida (long poems) about love, religion, and daily life, then set them to melodies. A performance builds slowly: the qantara (instrumental prelude) establishes the mode, then the singer delivers verses over a swelling orchestral bed. Malhoun bridges folk and classical traditions and UNESCO added it to its heritage list in 2023.',
    keyArtists: ['Haj Houcine Toulali', 'Said Guennoun', 'Hajja Hamdaouia'],
    instruments: ['Swisen (small lute)', 'Taarija', 'Handqa (small drum)', 'Violin'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TRADITIONAL INSTRUMENTS
   ═══════════════════════════════════════════════════════════════ */

const instruments = [
  {
    name: 'Guembri (Sintir)',
    type: 'String (plucked)',
    genre: 'Gnaoua',
    price: 'From 800 MAD',
    description:
      'A three-stringed bass lute carved from a single log and covered with camel skin. The neck is round and fretless. The maalem plucks bass lines with the right hand while the left hand frets pentatonic melodies. The deep, resonant tone anchors Gnaoua ceremonies and is said to call spirits.',
  },
  {
    name: 'Oud',
    type: 'String (plucked)',
    genre: 'Andalusian, Arabic classical',
    price: 'From 1,500 MAD',
    description:
      'A pear-shaped, fretless lute with 11 or 13 strings in courses. The Arabic oud differs from the Turkish version in its deeper body and darker tone. Central to Andalusian al-ala orchestras and solo improvisation (taqasim). Fes is the primary center for quality oud-making in Morocco.',
  },
  {
    name: 'Bendir',
    type: 'Percussion (frame drum)',
    genre: 'Amazigh, Sufi, widespread',
    price: 'From 200 MAD',
    description:
      'A large frame drum (40-50 cm diameter) with two gut snare strings stretched across the inside of the goatskin head. The snares add a buzzing texture to the tone. Players hold the bendir vertically and strike it with both hands. Essential in Amazigh ahidous and Sufi dhikr circles.',
  },
  {
    name: 'Qraqeb (Krakabs)',
    type: 'Percussion (idiophone)',
    genre: 'Gnaoua',
    price: 'From 150 MAD',
    description:
      'Heavy iron double-castanets, each pair weighing about 500 grams. Players hold a pair in each hand and click them in interlocking polyrhythmic patterns. The metallic clatter drives the hypnotic pulse of Gnaoua music. In a lila ceremony, three or more qraqeb players maintain the rhythm for hours.',
  },
  {
    name: 'Kamanjah',
    type: 'String (bowed)',
    genre: 'Andalusian, Chaabi',
    price: 'From 1,200 MAD',
    description:
      'A bowed string instrument similar in construction to a Western violin but played with different technique and tuning. In Andalusian orchestras, a section of four to eight kamanjah players carries the melody in unison. The tone is warm and nasal, shaped by the use of gut strings and a flatter bridge.',
  },
  {
    name: 'Rabab',
    type: 'String (bowed)',
    genre: 'Amazigh, Andalusian',
    price: 'From 600 MAD',
    description:
      'A two-stringed fiddle with a boat-shaped body covered in goatskin. The bow is loosely strung with horsehair. In Amazigh tradition, the rais (poet-musician) sings while playing the rabab, which doubles the vocal melody. The Andalusian rabab has a more refined construction.',
  },
  {
    name: 'Darbuka (Tabla)',
    type: 'Percussion (goblet drum)',
    genre: 'All genres',
    price: 'From 250 MAD',
    description:
      'A goblet-shaped drum made from ceramic or aluminum with a synthetic or fish-skin head. It produces a sharp, cracking "tek" on the rim and a deep "doum" in the center. The darbuka anchors rhythm sections across all Moroccan genres and is the most common drum at celebrations.',
  },
  {
    name: 'Taarija',
    type: 'Percussion (clay drum)',
    genre: 'Malhoun, celebrations',
    price: 'From 80 MAD',
    description:
      'A small, single-headed clay goblet drum played with one hand. Lightweight and high-pitched. Groups of taarija players create dense, rapid patterns at wedding parties and Malhoun performances. The clay body is often painted with geometric patterns.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: LIVE MUSIC BY CITY
   ═══════════════════════════════════════════════════════════════ */

const liveVenues = [
  {
    city: 'Marrakech',
    icon: Star,
    venues: [
      { name: 'Jemaa el-Fnaa', type: 'Open-air square', note: 'Gnaoua groups and Amazigh musicians nightly from 9 PM. Free.' },
      { name: 'Cafe Clock (Kasbah)', type: 'Cultural cafe', note: 'Weekly Gnaoua nights, maalem workshops from 200 MAD.' },
      { name: 'Dar Cherifa', type: 'Literary cafe', note: 'Andalusian music evenings. Intimate 15th-century riad setting.' },
      { name: 'Comptoir Darna', type: 'Restaurant-bar', note: 'Nightly dinner shows with live bands. Entry from 200 MAD with dinner.' },
    ],
  },
  {
    city: 'Fes',
    icon: Award,
    venues: [
      { name: 'Fes Festival of World Sacred Music', type: 'Annual festival (June)', note: 'Sufi, Andalusian, and world music in Bab Makina palace. Tickets from 200 MAD.' },
      { name: 'Dar Adiyel', type: 'Cultural center', note: 'Weekly Andalusian al-ala concerts and Malhoun evenings. Free entry most nights.' },
      { name: 'Cafe Clock (Fes)', type: 'Cultural cafe', note: 'Gnaoua sessions, storytelling, and open-mic nights.' },
      { name: 'Dar Batha Museum', type: 'Museum courtyard', note: 'Occasional Andalusian performances in a garden courtyard.' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Volume2,
    venues: [
      { name: 'Gnaoua World Music Festival', type: 'Annual festival (June)', note: 'Four-day festival with free outdoor stages. International headliners. Book hotels 3 months ahead.' },
      { name: 'Place Moulay Hassan', type: 'Main square', note: 'Street musicians most evenings, especially weekends. Gnaoua and Amazigh groups.' },
      { name: 'Taros Cafe', type: 'Rooftop bar', note: 'Live music Thursday-Saturday. Rooftop views over the port. Drinks from 50 MAD.' },
      { name: 'Dar Souiri', type: 'Cultural center', note: 'Gnaoua workshops and small concerts. Check local listings.' },
    ],
  },
  {
    city: 'Casablanca',
    icon: Headphones,
    venues: [
      { name: 'L\'Boulevard Festival', type: 'Annual festival (Sept)', note: 'Rock, hip-hop, and fusion. Morocco\'s largest urban music festival. Free entry.' },
      { name: 'Le Cabestan', type: 'Oceanfront restaurant', note: 'Live jazz and fusion weekends. Dinner reservations recommended.' },
      { name: 'Boultek', type: 'Rehearsal/performance space', note: 'Underground music hub. Emerging bands and hip-hop acts.' },
      { name: 'Studio des Arts Vivants', type: 'Cultural space', note: 'Contemporary Moroccan music, theater, and cross-genre performances.' },
    ],
  },
  {
    city: 'Rabat',
    icon: Globe,
    venues: [
      { name: 'Mawazine Festival', type: 'Annual festival (June)', note: 'One of the world\'s largest music festivals by attendance. International and Moroccan acts. Many free stages.' },
      { name: 'Chellah Jazz Festival', type: 'Annual festival (Sept)', note: 'Jazz in the ruins of the Roman-era Chellah necropolis. Intimate and atmospheric.' },
      { name: 'Renaissance Cultural Center', type: 'Cultural center', note: 'Regular concerts, recitals, and traditional music programming.' },
      { name: 'Villa des Arts', type: 'Gallery/event space', note: 'Art exhibitions paired with live music events.' },
    ],
  },
  {
    city: 'Oujda',
    icon: Mic2,
    venues: [
      { name: 'International Rai Festival', type: 'Annual festival', note: 'The heartland of Moroccan Rai. Free outdoor concerts in July.' },
      { name: 'Bab Sidi Abdelwahab', type: 'Historic gate area', note: 'Street musicians performing Rai and Gharnati music evenings.' },
      { name: 'Dar Sebti', type: 'Cultural center', note: 'Gharnati Andalusian concerts and traditional music events.' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MAJOR FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const festivals = [
  {
    name: 'Gnaoua & World Music Festival',
    city: 'Essaouira',
    month: 'June (late)',
    price: 'Free outdoor stages; VIP from 500 MAD',
    description: 'Four-day celebration of Gnaoua heritage with international collaborations. Maalem-led ceremonies, fusion concerts, and workshops.',
  },
  {
    name: 'Fes Festival of World Sacred Music',
    city: 'Fes',
    month: 'June',
    price: 'From 200 MAD per concert',
    description: 'Sufi qawwali, Andalusian orchestras, gospel choirs, and sacred music from around the world performed in historic palace courtyards.',
  },
  {
    name: 'Mawazine Rhythms of the World',
    city: 'Rabat',
    month: 'June',
    price: 'Many free stages; VIP from 300 MAD',
    description: 'Massive multi-genre festival attracting millions of attendees. Past headliners include global pop stars alongside Moroccan legends.',
  },
  {
    name: 'L\'Boulevard',
    city: 'Casablanca',
    month: 'September',
    price: 'Free entry',
    description: 'Urban music festival spotlighting Moroccan hip-hop, rock, metal, and electronic music. The launchpad for Morocco\'s underground scene.',
  },
  {
    name: 'Timitar Festival',
    city: 'Agadir',
    month: 'July',
    price: 'Free outdoor stages',
    description: 'Amazigh music festival blending traditional Souss-region sounds with international world music acts on multiple stages.',
  },
  {
    name: 'International Rai Festival',
    city: 'Oujda',
    month: 'July',
    price: 'Free entry',
    description: 'Eastern Morocco\'s tribute to Rai music with acts from both sides of the Moroccan-Algerian border.',
  },
  {
    name: 'Visa for Music',
    city: 'Rabat',
    month: 'November',
    price: 'Professional passes from 800 MAD; public concerts from 100 MAD',
    description: 'Africa and Middle East\'s top music industry showcase. Three days of concerts, panels, and networking for professionals and music fans.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoMusicGuidePage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-morocco.webp"
          alt="Gnaoua musicians performing with guembri and qraqeb during a lila ceremony in Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 drop-shadow-lg">
            Moroccan Music Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-[family-name:var(--font-heading)] max-w-2xl mx-auto drop-shadow">
            Gnaoua trance, Andalusian elegance, Amazigh rhythms, Rai, and the modern scene &mdash; a deep listen to Morocco&apos;s sonic identity
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]">
        <div className="container-morocco py-3 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[var(--text-primary)] font-medium">Moroccan Music Guide</span>
        </div>
      </nav>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="zellige-border p-8 md:p-10">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco Sounds Different From Anywhere Else
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moroccan music carries the fingerprints of four continents. Sub-Saharan African rhythms anchor the trance ceremonies of Gnaoua.
                Moorish refugees from 15th-century Spain carried formal orchestral suites across the Strait of Gibraltar. Indigenous Amazigh communities
                have sung communal poetry over frame drums since before recorded history. And from the east, Rai music crossed the Algerian border
                carrying tales of love and dissent.
              </p>
              <p>
                Walk through any Moroccan medina at dusk and you hear these layers collide: a maalem&apos;s guembri rumbling from a doorway,
                an Andalusian violin drifting from a conservatory window, a wedding party&apos;s Chaabi playlist rattling a car speaker.
                Morocco does not preserve its music in museums. It plays it on the street, at the table, and late into the night.
              </p>
              <p>
                This guide breaks down each major genre, maps where to hear live performances city by city, identifies the traditional instruments
                worth knowing (and buying), and covers the festival calendar so you can plan your trip around the music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Music Genres ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Six Genres That Define Moroccan Music
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each genre has its own instruments, social context, regional stronghold, and performance tradition.
            </p>
          </div>

          <div className="space-y-8">
            {musicGenres.map((genre) => (
              <div key={genre.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[var(--color-accent)]/10 shrink-0">
                    <genre.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {genre.name}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1">
                        <CircleDot className="w-3.5 h-3.5 text-[var(--color-gold)]" /> Origin: {genre.origin}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" /> {genre.regions}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {genre.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[var(--color-accent)]" /> Key Artists
                    </h4>
                    <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                      {genre.keyArtists.map((artist) => (
                        <li key={artist} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-[var(--color-gold)] shrink-0" /> {artist}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1.5">
                      <Music className="w-4 h-4 text-[var(--color-accent)]" /> Core Instruments
                    </h4>
                    <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                      {genre.instruments.map((inst) => (
                        <li key={inst} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-[var(--color-gold)] shrink-0" /> {inst}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modern Scene ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-8">
            The Modern Moroccan Sound
          </h2>
          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Headphones className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Hip-Hop &amp; Rap
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Moroccan hip-hop took off in the early 2000s when Casablanca crews like H-Kayne and Fnaire fused Darija lyrics with boom-bap
                production. Today, artists like ElGrandeToto, Dollypran, and Toto have millions of YouTube streams. Casablanca&apos;s L&apos;Boulevard
                festival gave many of these acts their first stage. Lyrics tackle class, identity, emigration, and street life in a mix
                of Darija, French, and sometimes Tamazight.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Electronic &amp; Fusion
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Producers like Amine K and Kawtar Sadik blend Gnaoua samples, Amazigh vocal loops, and North African scales into deep house
                and techno. The Atlas Electronic festival in the Agafay desert (outside Marrakech) has become a destination for this sound.
                Meanwhile, bands like Bab L&apos;Bluz mix Gnaoua bass lines with psych-rock guitar and Tuareg desert blues. This cross-genre
                approach has gained the band international touring schedules and features in world music press.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Radio className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Pop &amp; R&amp;B
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Moroccan pop singers like Saad Lamjarred, Hatim Ammor, and Douzi have massive followings across the Arabic-speaking world.
                Their music videos regularly cross 100 million views on YouTube. Production blends Western pop structures with
                Moroccan melodic sensibilities and Darija lyrics. The genre dominates radio, wedding playlists, and streaming charts in Morocco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Traditional Instruments ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Traditional Moroccan Instruments
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Eight instruments that shape the sound of Morocco, from the deep thrum of the guembri to the metallic snap of qraqeb.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {instruments.map((inst) => (
              <div key={inst.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {inst.name}
                  </h3>
                  <span className="text-sm font-medium text-[var(--color-accent)] whitespace-nowrap ml-3">
                    {inst.price}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                    {inst.type}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">
                    {inst.genre}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {inst.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Buying Instruments ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-8">
            Where to Buy Instruments in Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <ShoppingBag className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Fes Medina
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                The narrow alleys near Bab Bou Jeloud house instrument workshops where craftsmen build ouds, kamanjah, and bendir by hand.
                Prices are lower than Marrakech. A handmade oud starts from 1,500 MAD. Ask to see the workshop behind the shop &mdash; reputable
                makers demonstrate the construction process.
              </p>
              <p className="text-xs text-[var(--color-accent)] font-medium flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5" /> Oud from 1,500 MAD &bull; Bendir from 200 MAD
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <ShoppingBag className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Marrakech Medina
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                The souk near Rahba Kedima has several instrument shops. Quality varies, so play before you buy. Gnaoua instruments (guembri,
                qraqeb) are widely available. Expect to negotiate &mdash; initial asking prices run 30-50% above the final price.
                A factory-made bendir can go for 100 MAD; handmade versions cost double.
              </p>
              <p className="text-xs text-[var(--color-accent)] font-medium flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5" /> Guembri from 800 MAD &bull; Qraqeb from 150 MAD
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <ShoppingBag className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Essaouira
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Essaouira is the best city for Gnaoua-specific instruments. Workshops along Rue Laalouj and near the port specialize in guembri.
                During the Gnaoua festival, temporary stalls appear with a wider selection and some master luthiers demonstrating their craft.
                Prices rise slightly during festival week.
              </p>
              <p className="text-xs text-[var(--color-accent)] font-medium flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5" /> Guembri from 900 MAD &bull; Taarija from 80 MAD
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Info className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Travel Tips for Instruments
                </h3>
              </div>
              <ul className="text-sm text-[var(--text-secondary)] space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                  <span>Carry small instruments (bendir, taarija, qraqeb) as cabin luggage wrapped in clothing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                  <span>For an oud, invest in a hard case (from 400 MAD) or buy a seat for it on the plane</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                  <span>No export restrictions on musical instruments &mdash; customs won&apos;t stop you</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                  <span>Ask the maker for a receipt showing the price and material (helps at customs back home)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Live Music by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Live Music by City
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Where to hear Moroccan music performed live, from open-air squares to underground venues.
            </p>
          </div>

          <div className="space-y-8">
            {liveVenues.map((city) => (
              <div key={city.city} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <city.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {city.city}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {city.venues.map((venue) => (
                    <div key={venue.name} className="bg-[var(--surface-muted)] rounded-lg p-4">
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {venue.name}
                      </h4>
                      <span className="text-xs text-[var(--color-accent)] font-medium">{venue.type}</span>
                      <p className="text-sm text-[var(--text-secondary)] mt-2">{venue.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Festival Calendar ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco Music Festival Calendar 2026
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Plan your trip around Morocco&apos;s major music events. Dates are approximate &mdash; check official sites for confirmed schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((fest) => (
              <div key={fest.name} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {fest.name}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--text-secondary)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" /> {fest.city}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-gold)]" /> {fest.month}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3 flex-1">
                  {fest.description}
                </p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]">
                  <Ticket className="w-4 h-4" /> {fest.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-10">
            Practical Tips for Music Travelers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Best Time for Music
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                June is peak season with Gnaoua Festival, Mawazine, and the Fes Sacred Music Festival all running within weeks of each other.
                September brings L&apos;Boulevard and Chellah Jazz. Wedding season (summer months) means Chaabi fills every neighborhood.
                Ramadan evenings feature special Sufi and Andalusian concerts.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Costs &amp; Tipping
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Most outdoor and square performances are free. Drop from 10 to 20 MAD in the musician&apos;s collection tray if you stop to listen.
                Cultural center concerts range from free to 200 MAD. Festival VIP passes cost from 300 to 800 MAD. Music workshops run from 200 to 600 MAD
                per session. Private maalem lessons cost from 300 MAD per hour.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Volume2 className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Recording Etiquette
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Ask before recording, especially at spiritual lila ceremonies. Most street musicians welcome short videos &mdash;
                a tip of 10-20 MAD is expected after filming. At formal concerts, follow the venue&apos;s rules. During sacred ceremonies,
                put your phone away unless the maalem gives explicit permission. Respect takes priority over content.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Attending a Lila Ceremony
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A lila is a night-long Gnaoua healing ceremony held in a private home. Tourists can sometimes attend through personal
                connections, Gnaoua workshop organizers, or during the Essaouira festival. Dress modestly, sit quietly where directed,
                and do not photograph without permission. Bring a small offering (sugar, dates, or a monetary gift from 100 MAD).
                The ceremony can last past 4 AM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Music Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            7-Day Morocco Music Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            A week-long route designed around live performances, workshops, and instrument shopping.
          </p>

          <div className="space-y-4">
            {[
              { day: 'Day 1-2', city: 'Marrakech', plan: 'Arrive and explore the medina. Evening at Jemaa el-Fnaa for Gnaoua street performances. Day 2: Gnaoua workshop at Cafe Clock (from 200 MAD), then dinner show at Comptoir Darna.' },
              { day: 'Day 3', city: 'Marrakech to Essaouira', plan: 'Morning bus to Essaouira (3.5 hours, from 80 MAD). Afternoon: browse guembri workshops on Rue Laalouj. Evening: live music at Taros Cafe rooftop.' },
              { day: 'Day 4', city: 'Essaouira', plan: 'Visit Dar Souiri cultural center. Arrange a private guembri lesson with a local maalem (from 300 MAD). Walk the ramparts at sunset with buskers playing on the seafront.' },
              { day: 'Day 5', city: 'Essaouira to Fes', plan: 'Fly or take night train to Fes. Rest and explore the Fes medina. Evening: check Dar Adiyel listings for an Andalusian concert.' },
              { day: 'Day 6', city: 'Fes', plan: 'Morning: instrument shopping near Bab Bou Jeloud (ouds, bendir, kamanjah). Afternoon: visit the Dar Batha Museum collection of traditional instruments. Evening: Cafe Clock Gnaoua session.' },
              { day: 'Day 7', city: 'Fes', plan: 'Attend a Malhoun gathering if scheduled (ask your riad host). Browse music shops in the Ville Nouvelle for CDs and vinyl. Departure day or extend to Meknes for Malhoun heritage sites.' },
            ].map((item) => (
              <div key={item.day} className="card-moroccan p-5 flex gap-4">
                <div className="shrink-0 w-20">
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                    {item.day}
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">{item.city}</p>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.plan}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is Gnaoua music and why is it significant?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Gnaoua is a spiritual music tradition rooted in sub-Saharan African heritage, brought to Morocco by enslaved peoples
                centuries ago. It combines Islamic Sufi chanting with pre-Islamic African rhythms and ritual healing ceremonies called lila.
                UNESCO inscribed Gnaoua on its Intangible Cultural Heritage list in 2019. The genre centers on the maalem (master musician)
                who plays the guembri, a three-stringed bass lute, while singers and dancers play iron qraqeb castanets.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the Gnaoua World Music Festival in Essaouira?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Gnaoua and World Music Festival takes place annually in Essaouira, typically in late June. The 2026 edition is expected
                in the last week of June. The festival runs for four days with free outdoor stages across the medina and ticketed concerts
                at larger venues. Book accommodation at least three months ahead as the city fills up completely.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where can I hear live music in Marrakech?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Jemaa el-Fnaa square hosts Gnaoua musicians and Amazigh groups nightly starting around 9 PM. For sit-down performances,
                try Cafe Clock in the Kasbah, Dar Cherifa for Andalusian evenings, or Comptoir Darna for dinner shows. The annual Marrakech
                du Rire and Festival National des Arts Populaires also bring live performances to the city.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the main traditional Moroccan instruments?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Key instruments include the guembri (three-stringed bass lute used in Gnaoua), oud (pear-shaped lute used in Andalusian
                music), bendir (frame drum with snare strings), qraqeb (heavy iron castanets), kamanjah (bowed string instrument similar
                to a violin), rabab (two-stringed fiddle), darbuka (goblet drum), and taarija (small clay drum used at celebrations).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I buy traditional Moroccan instruments and bring them home?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. The best places to buy instruments are the instrument souks in Fes, Marrakech, and Essaouira. A quality guembri costs
                from 800 MAD, an oud from 1,500 MAD, and a bendir from 200 MAD. For airline travel, carry smaller instruments (bendir,
                qraqeb) as hand luggage. Larger instruments like the oud need a hard case or a dedicated seat. There are no export
                restrictions on musical instruments.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the difference between Chaabi and Rai music?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Chaabi (meaning &quot;popular&quot; in Arabic) is a grassroots folk-pop genre performed at weddings and celebrations
                across Morocco, blending traditional melodies with modern beats. Rai originated in western Algeria and the Oujda region
                of eastern Morocco. Rai lyrics deal with love, loss, and social critique, and the genre uses more electronic production,
                synthesizers, and Western instruments alongside traditional ones.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are there music workshops or lessons available for tourists in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Several venues offer hands-on sessions. Cafe Clock in both Marrakech and Fes runs Gnaoua music workshops (from 200 MAD
                per session). In Essaouira, local maalems give private guembri lessons, especially during festival season. Dar Adiyel in
                Fes hosts traditional Andalusian music classes. Prices for private lessons range from 300 to 600 MAD per hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/essaouira" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Essaouira City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The spiritual home of Gnaoua music. Coastal medina, seafood, and surf on Morocco&apos;s Atlantic coast.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Andalusian music capital with ancient conservatories, instrument workshops, and the Sacred Music Festival.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/berber-culture" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Amazigh Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover the indigenous Amazigh heritage &mdash; language, art, architecture, music, and village life in the Atlas.
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

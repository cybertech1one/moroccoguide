import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Heart,
  Star,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  Crown,
  Users,
  Music,
  MapPin,
  DollarSign,
  CheckCircle,
  BookOpen,
  Gem,
  Flower2,
  Camera,
  CalendarDays,
  Gift,
  Utensils,
  Building,
  Globe,
  PartyPopper,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Wedding Traditions 2026 | Customs, Henna Ceremonies & Celebrations',
  description:
    'Complete guide to Moroccan wedding traditions. Discover the Khetba engagement, henna night, seven bridal dresses (Amariya), Berber vs Arab wedding customs, negafa bridal dresser, wedding food, music, and how to attend a Moroccan wedding as a tourist.',
  keywords: [
    'Moroccan wedding traditions',
    'Morocco wedding customs',
    'Moroccan henna ceremony',
    'traditional Moroccan wedding',
    'Berber wedding',
    'Moroccan bride seven dresses',
    'Amariya bridal chair',
    'negafa bridal dresser Morocco',
    'Moroccan wedding food',
    'Khetba engagement Morocco',
    'Moroccan wedding music',
    'destination wedding Morocco',
    'Moroccan wedding celebrations',
    'hammam bridal ritual Morocco',
    'Moroccan wedding traditions guide',
    'attend Moroccan wedding tourist',
    'Saharan wedding traditions',
    'Moroccan wedding henna night',
    'Morocco wedding planning',
    'traditional Berber marriage',
  ],
  openGraph: {
    title: 'Moroccan Wedding Traditions 2026 | Customs, Henna Ceremonies & Celebrations',
    description:
      'Discover the magic of Moroccan weddings. From the Khetba engagement to henna night, seven bridal dresses, and multi-day celebrations. Complete guide to customs, food, music, and regional variations.',
    url: `${BASE_URL}/morocco-wedding-traditions`,
    images: [
      {
        url: `${BASE_URL}/images/hero-culture.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan wedding celebration with ornate decorations and cultural elements',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Wedding Traditions 2026 | Complete Guide',
    description:
      'From the Khetba to henna night and the bride\'s seven dresses. Complete guide to Moroccan wedding customs, food, music, and attending as a tourist.',
    images: [`${BASE_URL}/images/hero-culture.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-wedding-traditions` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-wedding-traditions`,
  name: 'Moroccan Wedding Traditions 2026 | Customs, Henna Ceremonies & Celebrations',
  description:
    'Complete guide to Moroccan wedding traditions including the Khetba engagement, henna ceremony, bridal rituals, regional variations, wedding food, music, and destination wedding planning.',
  url: `${BASE_URL}/morocco-wedding-traditions`,
  image: `${BASE_URL}/images/hero-culture.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-wedding-traditions`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Wedding Traditions', item: `${BASE_URL}/morocco-wedding-traditions` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a traditional Moroccan wedding last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional Moroccan weddings typically last 3 to 7 days, with the main celebration (the diffa) taking place over 2-3 days. Urban weddings have shortened to 1-2 days, while rural Berber weddings can still span an entire week.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the henna ceremony in a Moroccan wedding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The henna ceremony (Laylat al-Henna) is held 1-2 days before the wedding. A professional neqqasha applies intricate henna patterns to the bride\'s hands and feet. The designs symbolize fertility, protection, and good fortune. Female family and friends gather for music, sweets, and celebration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can tourists attend a Moroccan wedding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Moroccan hospitality means tourists are sometimes invited to weddings, especially in smaller towns. If invited, dress conservatively, bring a gift (money in an envelope is customary), and be prepared for a late-night celebration. Some cultural tour operators also arrange wedding attendance experiences.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the bride wear at a Moroccan wedding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Moroccan bride traditionally wears up to seven different outfits during the celebration, each representing a different region of Morocco. These include the takchita, caftan, Fassi dress, Amazigh outfit, and white bridal gown. The negafa (bridal dresser) assists with each outfit change.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: WEDDING TIMELINE PHASES
   ═══════════════════════════════════════════════════════════════ */

const weddingPhases = [
  {
    phase: 1,
    title: 'The Khetba (Engagement)',
    icon: Gem,
    timing: 'Months to a year before the wedding',
    description:
      'The Khetba is the formal engagement ceremony where the groom\'s family visits the bride\'s family to officially ask for her hand. The groom\'s family brings a Hdia (gift basket) containing sugar cones, milk, dates, henna, and fabrics. The sugar symbolizes a sweet future, and the milk represents purity. Both families negotiate the mahr (dowry) and set the wedding date. In many families, a Fatiha (opening verse of the Quran) is recited to bless the union.',
    tip: 'The Hdia basket contents vary by region. In Fes, the presentation is particularly elaborate, sometimes including 40 or more items.',
  },
  {
    phase: 2,
    title: 'The Hammam Ceremony (Bridal Bath)',
    icon: Sparkles,
    timing: '2-3 days before the wedding',
    description:
      'The bride visits the hammam accompanied by her closest female relatives and friends. This purification ritual symbolizes cleansing and renewal before married life. The bride is bathed with milk, rose water, and orange blossom water. She receives a full gommage (scrub) with savon beldi, followed by ghassoul clay and argan oil. The hammam session is accompanied by singing, ululations, and traditional sweets. It is one of the most intimate and emotional pre-wedding rituals.',
    tip: 'Many luxury riads and spas now offer special bridal hammam packages starting from 2,000 MAD that recreate this traditional ritual.',
  },
  {
    phase: 3,
    title: 'Laylat al-Henna (Henna Night)',
    icon: Flower2,
    timing: '1-2 days before the wedding',
    description:
      'One of the most iconic Moroccan wedding rituals. A professional neqqasha (henna artist) applies intricate designs to the bride\'s hands and feet using natural henna paste. The patterns include geometric motifs, floral designs, and symbols of fertility and protection. The bride wears a green caftan (green symbolizes paradise in Islam). Female guests also have henna applied to their hands. The evening is filled with music, dancing, milk and dates, and Moroccan pastries.',
    tip: 'The henna must set for 6-8 hours for the darkest color. The longer the paste stays on, the darker and more long-lasting the stain, which is said to indicate the depth of the groom\'s love.',
  },
  {
    phase: 4,
    title: 'The Amariya (Bridal Procession)',
    icon: Crown,
    timing: 'Wedding day',
    description:
      'The highlight of the wedding ceremony. The bride is carried on an ornate palanquin called the Amariya (also spelled Amaria) by four men, above the heads of the guests. She is paraded around the reception venue while guests sing, clap, and throw rose petals and milk. The Amariya is elaborately decorated with silk, gold embroidery, and flowers. This moment represents the bride being elevated and honored as a queen on her special day.',
    tip: 'In some regions, the groom also has his own processional entrance, though it is typically less elaborate than the bride\'s Amariya.',
  },
  {
    phase: 5,
    title: 'The Seven Dresses Ceremony',
    icon: Heart,
    timing: 'Throughout the wedding celebration',
    description:
      'The bride changes into up to seven different outfits throughout the evening, each representing a different region and cultural tradition of Morocco. The negafa (professional bridal dresser) assists with each elaborate change. Outfits typically include the Fassi takchita, the Amazigh dress, the Saharan melhfa, a Marrakchi caftan, an Arab-style white gown, and more. Each outfit is presented with its own entrance and musical accompaniment, showcasing the diversity of Moroccan cultural heritage.',
    tip: 'Hiring a skilled negafa is one of the biggest wedding expenses, ranging from 5,000 MAD to over 50,000 MAD for top professionals.',
  },
  {
    phase: 6,
    title: 'The Diffa (Wedding Feast)',
    icon: Utensils,
    timing: 'Main wedding evening',
    description:
      'The diffa is the grand wedding banquet. Guests are served an extraordinary multi-course meal that showcases the finest of Moroccan cuisine. The meal typically begins with bastilla (pigeon or chicken pie with almonds), followed by lamb or beef tagine, mechoui (whole roasted lamb), and couscous. Dessert includes Moroccan pastries, fresh fruits, and mint tea. Hundreds of guests are common, and the food is a source of enormous pride for the hosting family.',
    tip: 'The mechoui (whole roasted lamb) is a centerpiece dish. A single lamb costs from 3,000 MAD, and large weddings may require multiple lambs.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: REGIONAL WEDDING VARIATIONS
   ═══════════════════════════════════════════════════════════════ */

const regionalVariations = [
  {
    region: 'Arab-Moroccan Wedding (Cities)',
    icon: Building,
    cities: 'Fes, Rabat, Casablanca, Marrakech',
    duration: '2-3 days',
    description:
      'The most common style in urban Morocco. Features elaborate venue decoration, a professional negafa, the Amariya procession, and the seven-dress ceremony. The music is a blend of traditional Andalusi orchestras and modern DJs. Weddings in Fes are particularly known for their refinement, with the bride often wearing handcrafted Fassi jewelry and the celebration featuring the iconic Fassi takchita in white and gold.',
    highlights: ['Seven-dress ceremony', 'Amariya palanquin', 'Andalusi orchestra', 'Elaborate henna designs', 'Grand ballroom venues'],
  },
  {
    region: 'Amazigh (Berber) Wedding (Mountains)',
    icon: Star,
    cities: 'Atlas Mountains, Souss, Rif',
    duration: '3-7 days',
    description:
      'Berber weddings are the most communal and traditional celebrations in Morocco. The entire village participates. The Ahidous dance, where men and women form circles and sing in call-and-response, is the centerpiece of entertainment. The bride wears the traditional Amazigh headdress (taounza) adorned with silver coins, coral, and amber. The dowry negotiation is a formal community affair, and the transfer of the bride from her family home to the groom\'s is an elaborate procession with horseback riders.',
    highlights: ['Ahidous communal dance', 'Silver and amber jewelry', 'Village-wide celebration', 'Horseback procession', 'Up to 7-day festivities'],
  },
  {
    region: 'Saharan Wedding (Desert)',
    icon: Globe,
    cities: 'Merzouga, Zagora, Ouarzazate, Errachidia',
    duration: '3-5 days',
    description:
      'Desert weddings have their own unique character. The bride wears the melhfa, a flowing wrap of vibrant indigo or colorful fabric. Gnaoua music with its hypnotic rhythms and castanets (qraqeb) provides the soundtrack. Celebrations are held outdoors under the stars, with carpets laid over the sand. Camel processions replace the urban Amariya. Henna designs in the Saharan style are bolder and more geometric than the intricate city patterns.',
    highlights: ['Outdoor desert celebrations', 'Gnaoua music and dance', 'Camel processions', 'Bold geometric henna', 'Melhfa bridal wrap'],
  },
  {
    region: 'Northern Moroccan Wedding (Rif & Mediterranean)',
    icon: Music,
    cities: 'Tetouan, Chefchaouen, Tangier, Al Hoceima',
    duration: '2-3 days',
    description:
      'Northern weddings blend Andalusian and Riffian traditions. The bride often wears the Chefchaouen-style adorned caftan with intricate gold embroidery. Music features the Riffian izran poetry chanting and Andalusi melodies. The Shada, a large decorated cloth, is held over the bride during the procession. Northern weddings are known for their refined pastries and the prominence of seafood in the feast, reflecting the Mediterranean influence.',
    highlights: ['Andalusian musical influence', 'Shada bridal cloth', 'Riffian izran poetry', 'Mediterranean seafood feast', 'Gold-embroidered caftans'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WEDDING FOOD GUIDE
   ═══════════════════════════════════════════════════════════════ */

const weddingFoods = [
  {
    name: 'Bastilla (Pastilla)',
    description: 'A legendary sweet and savory pie made with layers of warqa pastry, pigeon or chicken, almonds, cinnamon, and powdered sugar. Served as the opening dish at every grand Moroccan wedding. The combination of flavors represents the sweet and complex nature of marriage.',
    significance: 'Symbol of prosperity and celebration',
  },
  {
    name: 'Mechoui (Whole Roasted Lamb)',
    description: 'A whole lamb slow-roasted for hours in an underground clay oven or over an open pit. The meat falls off the bone and is incredibly tender. Served on massive platters, guests eat with their hands. One of the most honored dishes in Moroccan cuisine, reserved for the most important occasions.',
    significance: 'Symbol of generosity and abundance',
  },
  {
    name: 'Lamb or Beef Tagine with Prunes and Almonds',
    description: 'A richly spiced tagine featuring tender meat cooked with caramelized prunes, toasted almonds, and a blend of ras el hanout spices. The sweetness of the prunes combined with the savory meat creates the signature Moroccan wedding flavor.',
    significance: 'Symbol of a harmonious union of contrasts',
  },
  {
    name: 'Wedding Couscous',
    description: 'The final savory course. A mountain of hand-rolled couscous topped with seven vegetables, chickpeas, and meat. Steamed three times for perfect fluffiness. The seven vegetables represent the seven days of creation and good fortune for the couple.',
    significance: 'Symbol of fertility and blessings',
  },
  {
    name: 'Moroccan Wedding Pastries',
    description: 'An elaborate spread of handmade pastries including kaab el ghazal (gazelle horns), chebakia (sesame cookies), briouats (almond-filled triangles), ghriba (semolina cookies), and fekkas (biscotti). Each family prides itself on the variety and quality of pastries served.',
    significance: 'Symbol of sweetness in the new life together',
  },
  {
    name: 'Milk and Dates',
    description: 'Offered to the bride and groom upon their arrival. The couple drinks milk and eats dates together as the first shared act of marriage. Milk symbolizes purity, and dates represent sweetness and sustenance. This simple ritual carries deep spiritual significance.',
    significance: 'First shared act of the married couple',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WEDDING MUSIC & ENTERTAINMENT
   ═══════════════════════════════════════════════════════════════ */

const musicStyles = [
  {
    style: 'Andalusi Orchestra',
    icon: Music,
    description: 'Classical Moroccan music with roots in medieval Al-Andalus. Features the oud, violin, darbuka drum, and poetry-based lyrics. Preferred at refined urban weddings in Fes and Rabat. The music is elegant, melodic, and deeply traditional.',
    price: 'From 15,000 MAD for a full orchestra',
  },
  {
    style: 'Chaabi Band',
    icon: PartyPopper,
    description: 'The most popular wedding music style across Morocco. High-energy folk-pop music that gets every guest dancing. Features drums (bendir, darbuka), violin, and powerful vocals. Chaabi musicians are entertainers who interact with the crowd, sing requests, and keep the energy high all night.',
    price: 'From 8,000 MAD for a band',
  },
  {
    style: 'Gnaoua Musicians',
    icon: Sparkles,
    description: 'Spiritual trance music from sub-Saharan African traditions, popular at Saharan and Marrakech weddings. The rhythmic clacking of metal castanets (qraqeb), bass lute (guembri), and call-and-response chanting create a hypnotic atmosphere that can continue until dawn.',
    price: 'From 5,000 MAD for a troupe',
  },
  {
    style: 'Modern DJ with Live Percussion',
    icon: Star,
    description: 'Increasingly popular at young, urban Moroccan weddings. A DJ mixes Arabic, French, and Western pop music with a live darbuka player adding traditional rhythms. This hybrid style bridges generations, keeping older and younger guests entertained.',
    price: 'From 10,000 MAD for DJ and percussion',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WEDDING COST GUIDE
   ═══════════════════════════════════════════════════════════════ */

const weddingCosts = [
  { item: 'Venue rental (ballroom or riad)', price: 'From 20,000 MAD', note: 'Luxury venues from 100,000 MAD' },
  { item: 'Negafa (bridal dresser and outfits)', price: 'From 5,000 MAD', note: 'Top negafas from 30,000 MAD' },
  { item: 'Henna artist (neqqasha)', price: 'From 1,500 MAD', note: 'Intricate full designs from 5,000 MAD' },
  { item: 'Wedding catering (per guest)', price: 'From 200 MAD', note: 'Luxury catering from 500 MAD per guest' },
  { item: 'Music and entertainment', price: 'From 8,000 MAD', note: 'Multiple acts from 25,000 MAD' },
  { item: 'Amariya palanquin rental', price: 'From 3,000 MAD', note: 'Elaborate designs from 8,000 MAD' },
  { item: 'Photography and videography', price: 'From 5,000 MAD', note: 'Full-day cinematic coverage from 20,000 MAD' },
  { item: 'Floral decorations', price: 'From 5,000 MAD', note: 'Elaborate arrangements from 30,000 MAD' },
  { item: 'Bride\'s wardrobe (7 outfits)', price: 'From 15,000 MAD', note: 'Designer caftans from 50,000 MAD' },
  { item: 'Bridal hammam ceremony', price: 'From 2,000 MAD', note: 'Luxury spa bridal packages from 5,000 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DESTINATION WEDDING VENUES
   ═══════════════════════════════════════════════════════════════ */

const destinationVenues = [
  {
    name: 'La Mamounia, Marrakech',
    type: 'Luxury Palace Hotel',
    capacity: 'Up to 500 guests',
    price: 'From 300,000 MAD',
    highlights: ['Historic palace gardens', 'Dedicated wedding planner', 'Michelin-worthy catering', 'Overnight guest accommodation'],
  },
  {
    name: 'Kasbah Tamadot, Atlas Mountains',
    type: 'Boutique Mountain Resort',
    capacity: 'Up to 150 guests',
    price: 'From 200,000 MAD',
    highlights: ['Atlas Mountain backdrop', 'Richard Branson\'s resort', 'Intimate ceremonies', 'Berber-inspired decor'],
  },
  {
    name: 'Royal Mansour, Marrakech',
    type: 'Ultra-Luxury Hotel',
    capacity: 'Up to 300 guests',
    price: 'From 500,000 MAD',
    highlights: ['Riads for guests', 'Handcrafted zellige decor', 'World-class cuisine', 'Absolute privacy'],
  },
  {
    name: 'Sahara Desert Camp, Merzouga',
    type: 'Luxury Desert Camp',
    capacity: 'Up to 100 guests',
    price: 'From 150,000 MAD',
    highlights: ['Under-the-stars ceremony', 'Camel procession', 'Gnaoua entertainment', 'Unique and unforgettable'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoWeddingTraditionsPage() {
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
            backgroundImage: 'url(/images/hero-culture.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Moroccan Wedding Traditions</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4" />
            Culture &amp; Traditions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Moroccan Wedding Traditions:
            <br className="hidden md:block" /> Customs, Ceremonies &amp; Celebrations
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the Khetba engagement to the bride&apos;s seven dresses and multi-day feasts.
            A complete guide to the magic, meaning, and spectacle of Moroccan weddings.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Celebration Like No Other
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                A Moroccan wedding is not merely a ceremony. It is a multi-day festival that brings together
                families, communities, and centuries of tradition in a celebration of love, generosity, and
                cultural pride. Whether held in the grand ballrooms of Casablanca, the ancient riads of Fes,
                or the open deserts near Merzouga, a Moroccan wedding is an experience that leaves an
                indelible impression on everyone who witnesses it.
              </p>
              <p>
                The traditions vary across regions, from the refined urban ceremonies of Fes and Rabat to the
                communal village celebrations of the Amazigh (Berber) people in the Atlas Mountains and the
                vibrant desert weddings of the Saharan communities. Yet certain elements unite them all: the
                centrality of family, the lavishness of the feast, the importance of music and dance, and
                the deeply symbolic rituals that have been passed down for generations.
              </p>
              <p>
                For travelers, witnessing or being invited to a Moroccan wedding is one of the most
                extraordinary cultural experiences the country offers. This guide walks you through every
                tradition, every ritual, and every detail of the Moroccan wedding celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wedding Timeline / Phases ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Moroccan Wedding Timeline
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A traditional Moroccan wedding unfolds over multiple days, each phase carrying its own rituals, meaning, and beauty.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {weddingPhases.map((phase) => {
                  const PhaseIcon = phase.icon;
                  return (
                    <div key={phase.phase} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{phase.phase}</span>
                      </div>

                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            <PhaseIcon className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                            {phase.title}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0 ml-4">
                            <Clock className="w-3 h-3" />
                            {phase.timing}
                          </div>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] mb-3">{phase.description}</p>
                        <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                          <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <p className="text-xs text-[var(--text-muted)]">
                            <span className="font-semibold text-[var(--text-primary)]">Insider note:</span> {phase.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Negafa: Master of Ceremonies ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Negafa: Morocco&apos;s Bridal Dresser
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most important professional at any Moroccan wedding. The negafa is part stylist, part choreographer, and part guardian of tradition.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                What Does a Negafa Do?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                The negafa is the guardian of Moroccan bridal tradition. She provides and manages the bride&apos;s
                entire wardrobe for the wedding, including up to seven different outfits with matching jewelry,
                headdresses, and accessories. She dresses the bride for each outfit change, coordinates the
                Amariya procession, manages the timing of the evening&apos;s events, and ensures every traditional
                element is honored. A great negafa is part artisan, part event coordinator, and part cultural
                historian. Many negafas inherit the profession from their mothers and grandmothers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">What She Provides</h4>
                  <ul className="space-y-1.5">
                    {['Complete bridal wardrobe (5-7 outfits)', 'Traditional jewelry for each look', 'Headdresses and crowns', 'Amariya palanquin and bearers', 'Assistants for quick outfit changes'].map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">How to Choose</h4>
                  <ul className="space-y-1.5">
                    {['Book 3-6 months in advance', 'Ask for a portfolio of past weddings', 'Confirm the exact outfits included', 'Negotiate the number of outfit changes', 'Check reviews and family recommendations'].map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                  From 5,000 MAD for a basic package
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-[var(--color-accent)]" />
                  Top negafas: from 30,000-50,000 MAD
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Regional Wedding Variations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wedding Traditions by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s diverse cultures create distinctly different wedding celebrations. From refined urban ceremonies to communal mountain festivals.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {regionalVariations.map((variation) => {
              const RegionIcon = variation.icon;
              return (
                <div key={variation.region} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RegionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {variation.region}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {variation.cities}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {variation.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{variation.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {variation.highlights.map((highlight, i) => (
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

      {/* ── Wedding Food ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Wedding Feast: Traditional Foods
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Food is the heart of a Moroccan wedding. The diffa (feast) is a multi-course spectacle of flavors, each dish carrying symbolic meaning.
          </p>

          <div className="space-y-6">
            {weddingFoods.map((food, index) => (
              <div key={food.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-[var(--color-accent)]">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {food.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">{food.description}</p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-[var(--color-gold)] font-medium">
                      <Sparkles className="w-3 h-3" />
                      {food.significance}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Music & Entertainment ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wedding Music &amp; Entertainment
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            No Moroccan wedding is complete without music. The style of music defines the atmosphere and reflects the family&apos;s cultural identity.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices and may vary by season, artist reputation, and event duration. Peak wedding season (June-September) prices increase by 20-40%.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {musicStyles.map((music) => {
              const MusicIcon = music.icon;
              return (
                <div key={music.style} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <MusicIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {music.style}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{music.description}</p>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {music.price}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Wedding Cost Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Wedding Cost Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What Moroccan families typically spend on each element of the wedding celebration.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak wedding months (June-September) and holiday periods. Luxury wedding costs can increase significantly.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Starting Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {weddingCosts.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Destination Weddings in Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Destination Weddings in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has become one of the world&apos;s most sought-after destination wedding locations. From palace hotels to desert camps, these venues create unforgettable celebrations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinationVenues.map((venue) => (
              <div key={venue.name} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {venue.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span>{venue.type}</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {venue.capacity}
                  </span>
                </div>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                  {venue.price}
                </div>
                <div className="space-y-1.5">
                  {venue.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Attending as a Tourist ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Attending a Moroccan Wedding as a Tourist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            If you are lucky enough to be invited to a Moroccan wedding, here is everything you need to know to be a respectful and welcome guest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Gift className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                What Gift to Bring
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Cash in an envelope is the standard wedding gift. From 200 MAD for a casual acquaintance
                to 1,000 MAD or more for close friends. Some guests also bring household items like blankets,
                kitchen appliances, or gold jewelry. Present your gift to the bride&apos;s mother or a designated
                family member.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                What to Wear
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dress formally and conservatively. For women, a long dress or elegant caftan is ideal.
                Avoid white (reserved for the bride) and black (associated with mourning). For men,
                a suit or traditional djellaba. Many Moroccan guests dress in their finest caftans
                and takchitas.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                When to Arrive
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Moroccan weddings start late and run very late. The celebration often begins at 9-10 PM
                and continues until 3-5 AM. Do not arrive early; arriving an hour after the stated time
                is perfectly normal. The dinner is typically served around midnight, and the bride&apos;s
                outfit changes continue throughout the night.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Etiquette Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Greet the bride and groom&apos;s families warmly. Accept food and tea graciously. Join the
                dancing if invited. Ask before taking photographs of the bride. Do not consume alcohol
                unless it is being served openly. Congratulate the couple by saying &quot;Mabrouk&quot;
                (blessings). Be prepared to stay late; leaving too early can be seen as impolite.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Music className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dancing &amp; Photography
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dancing is central to Moroccan weddings. The chaabi style is free-form and joyful; just
                stand up, move to the rhythm, and let the music guide you. Guests will be delighted to
                see a visitor dancing. For photography, most families welcome it, but always ask before
                photographing the bride closely, especially during the henna ceremony and outfit changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            The Beauty of Moroccan Celebrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img src="/images/art-moroccan-pattern-zellige.webp" alt="Intricate Moroccan zellige tilework patterns used in traditional wedding venues" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Traditional Zellige Decorations</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img src="/images/hero-culture.webp" alt="Vibrant Moroccan cultural celebration with traditional music and colorful decorations" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Cultural Celebration</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Planning Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Planning a Wedding in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CalendarDays className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Wedding Season
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                June through September is peak Moroccan wedding season. Spring (April-May) and autumn
                (October-November) offer pleasant weather and lower costs. Avoid Ramadan (dates shift annually)
                as celebrations are subdued during the holy month. Summer weddings are hot but culturally peak.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Building className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Legal Requirements
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                For destination weddings involving foreigners, you need: valid passports, birth certificates
                (translated to French or Arabic), certificate of celibacy, and medical certificates. The
                legal ceremony is performed by an adoul (notary) and must be arranged at the local tribunal.
                Allow 4-6 weeks for paperwork processing.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hiring a Wedding Planner
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                For destination weddings, a local wedding planner is essential. They handle venue booking,
                catering, entertainment, logistics, and the legal requirements. Expect to pay from 15,000
                MAD for planning services, with luxury planners charging from 50,000 MAD or more. They
                also coordinate with the negafa and ensure cultural protocols are respected.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Guest Logistics
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                International guests will need help with airport transfers, accommodation, and cultural
                orientation. Most destination weddings include a welcome dinner, the main celebration,
                and a farewell brunch. Arrange group hotel rates and provide guests with a cultural
                guide so they know what to expect at the celebration.
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
                How long does a traditional Moroccan wedding last?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Traditional Moroccan weddings typically last 3 to 7 days, with the main celebration (the diffa) taking
                place over 2-3 days. Urban weddings have shortened to 1-2 days, while rural Berber weddings in the
                Atlas Mountains can still span an entire week with separate celebrations in both the bride&apos;s and
                groom&apos;s villages. The trend in cities like Casablanca and Rabat is toward a single grand evening event.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the henna ceremony in a Moroccan wedding?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The henna ceremony (Laylat al-Henna) is held 1-2 days before the wedding. A professional neqqasha
                applies intricate henna patterns to the bride&apos;s hands and feet. The designs symbolize fertility,
                protection from the evil eye, and good fortune. Female family members and friends gather for an
                evening of music, traditional sweets, and celebration. The bride typically wears a green caftan
                during this ceremony, as green symbolizes paradise.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can tourists attend a Moroccan wedding?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Moroccan hospitality means tourists are sometimes invited to weddings, especially in smaller
                towns and rural areas where the community is tight-knit. If you are staying in a riad or guesthouse,
                your host family may invite you to a neighborhood wedding. Some cultural tour operators also arrange
                wedding attendance experiences. If invited, dress conservatively, bring a cash gift in an envelope
                (from 200 MAD), and be prepared for a celebration that starts late and runs until the early morning hours.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What does the bride wear at a Moroccan wedding?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Moroccan bride traditionally wears up to seven different outfits during the celebration, each
                representing a different region and cultural tradition of Morocco. These include the takchita (a formal
                two-piece gown), caftan, Fassi dress, Amazigh outfit with silver jewelry, and often a white bridal
                gown in the Western style. The negafa (bridal dresser) manages each outfit change, which includes
                coordinating jewelry, headdresses, and accessories. Each new outfit is presented with a dramatic entrance.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a traditional Moroccan wedding cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Traditional Moroccan weddings vary widely in cost depending on the family&apos;s means and the scale
                of the celebration. A modest wedding in a smaller city costs from 50,000 MAD, a mid-range
                celebration from 150,000 MAD, and luxury weddings in Marrakech or Casablanca from 500,000 MAD
                or significantly more. The largest expenses are typically the venue, catering (from 200 MAD per
                guest for hundreds of guests), the negafa and bride&apos;s wardrobe, and the music. Seasonal pricing
                applies during peak wedding months (June-September).
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
            <Link href="/morocco-henna-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Flower2 className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Henna Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the art of Moroccan henna. Designs, symbolism, regional styles, and where to get henna applied.
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
                Deep dive into Moroccan culture, customs, etiquette, and traditions every visitor should know.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-romantic-getaways" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Romantic Getaways
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The most romantic destinations in Morocco for couples, honeymooners, and anniversary celebrations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-luxury-riads" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Riads
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Morocco&apos;s finest luxury riads for an unforgettable stay. Perfect for wedding guests and couples.
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

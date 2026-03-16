import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Trophy,
  Users,
  MapPin,
  Clock,
  Ticket,
  Star,
  Calendar,
  Shield,
  Globe,
  Zap,
  Info,
  ArrowRight,
  Heart,
  Flag,
  Eye,
  AlertTriangle,
  CheckCircle,
  Shirt,
} from 'lucide-react';

/* ─── SEO Metadata ─── */

export const metadata: Metadata = {
  title: 'Football in Morocco | Watch Live Matches | CityGuide',
  description:
    'Discover Moroccan football culture, watch Botola Pro matches, explore world-class stadiums, and plan for the 2030 FIFA World Cup. Your complete guide to football tourism in Morocco.',
  openGraph: {
    title: 'Football in Morocco | Watch Live Matches',
    description:
      'Morocco is a rising football powerhouse. Explore the Atlas Lions legacy, Botola Pro league, stadiums, and the 2030 FIFA World Cup.',
    url: 'https://citytoursmorocco.com/football',
    images: [
      {
        url: '/images/hero-morocco.webp',
        width: 1200,
        height: 630,
        alt: 'Football in Morocco - Stadium atmosphere',
      },
    ],
  },
  keywords: [
    'morocco football',
    'botola pro',
    'wydad casablanca',
    'raja casablanca',
    'morocco 2030 world cup',
    'atlas lions',
    'moroccan football league',
    'morocco stadiums',
    'watch football morocco',
    'morocco soccer',
    'achraf hakimi',
    'hakim ziyech',
    'morocco world cup 2022',
    'stade mohammed v',
    'grand stade casablanca',
    'morocco football tickets',
    'africa cup of nations morocco',
  ],
};

/* ─── JSON-LD Structured Data ─── */

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Football in Morocco | Watch Live Matches | CityGuide',
  description:
    'Discover Moroccan football culture, watch Botola Pro matches, explore world-class stadiums, and plan for the 2030 FIFA World Cup.',
  url: 'https://citytoursmorocco.com/football',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'Thing',
    name: 'Football in Morocco',
    description: 'Moroccan football culture, leagues, stadiums, and international competitions.',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'Football', item: 'https://citytoursmorocco.com/football' },
    ],
  },
};

const jsonLdSportsEvent = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: '2030 FIFA World Cup - Morocco',
  description:
    'Morocco co-hosts the 2030 FIFA World Cup alongside Spain and Portugal, marking the first World Cup held across three continents.',
  startDate: '2030-06-01',
  endDate: '2030-07-21',
  location: [
    {
      '@type': 'StadiumOrArena',
      name: 'Grand Stade de Casablanca',
      address: { '@type': 'PostalAddress', addressLocality: 'Casablanca', addressCountry: 'MA' },
      maximumAttendeeCapacity: 93000,
    },
    {
      '@type': 'StadiumOrArena',
      name: 'Grand Stade de Rabat',
      address: { '@type': 'PostalAddress', addressLocality: 'Rabat', addressCountry: 'MA' },
    },
    {
      '@type': 'StadiumOrArena',
      name: 'Stade de Marrakech',
      address: { '@type': 'PostalAddress', addressLocality: 'Marrakech', addressCountry: 'MA' },
    },
  ],
  organizer: {
    '@type': 'Organization',
    name: 'FIFA',
    url: 'https://www.fifa.com',
  },
  sport: 'Football',
};

/* ─── Data ─── */

const footballStats = [
  { value: '1st', label: 'African/Arab nation in WC semis' },
  { value: '2030', label: 'FIFA World Cup co-host' },
  { value: '93,000', label: 'Seat mega-stadium planned' },
  { value: '16', label: 'Botola Pro teams' },
];

const worldCup2022Journey = [
  {
    stage: 'Group Stage',
    match: 'Morocco 0 - 0 Croatia',
    detail: 'A disciplined, organized defensive display against the 2018 World Cup finalists. Morocco showed the world they were not in Qatar to make up numbers. Bono commanded the goal; Amrabat dominated midfield.',
  },
  {
    stage: 'Group Stage',
    match: 'Belgium 0 - 2 Morocco',
    detail: 'The match that announced Morocco to the world. Goals from Sabiri and Aboukhlal stunned second-ranked Belgium. Moroccan fans erupted across the globe. The Haouz chant echoed through Al Thumama Stadium.',
  },
  {
    stage: 'Group Stage',
    match: 'Canada 1 - 2 Morocco',
    detail: 'Ziyech and En-Nesyri scored to secure top spot in Group F. Morocco finished above Croatia and Belgium, the two 2018 World Cup finalists. Seven points from three games. Zero goals conceded from open play.',
  },
  {
    stage: 'Round of 16',
    match: 'Morocco 0 - 0 Spain (3-0 pens)',
    detail: 'An iconic penalty shootout victory. Bono saved two penalties, Hakimi scored the winning penalty with a nerveless Panenka chip. Spain had 77% possession but zero shots on target. Morocco\'s defensive structure was perfect.',
  },
  {
    stage: 'Quarter-Final',
    match: 'Morocco 1 - 0 Portugal',
    detail: 'En-Nesyri\'s towering header sent Morocco to the semi-finals. Ronaldo watched from the bench as Morocco outfought and outplayed Portugal. Boufal\'s post-match dance with his mother became the tournament\'s most iconic image.',
  },
  {
    stage: 'Semi-Final',
    match: 'France 2 - 0 Morocco',
    detail: 'The run ended against the defending champions, but Morocco left Qatar with their heads held high. They had become the first African and Arab nation ever to reach a World Cup semi-final. A nation of 37 million people had captured the hearts of billions.',
  },
  {
    stage: 'Third Place',
    match: 'Croatia 2 - 1 Morocco',
    detail: 'A narrow loss in the consolation match, but fourth place in the world was Morocco\'s best-ever World Cup result. The squad returned home as national heroes, greeted by millions lining the streets of Rabat.',
  },
];

const worldCup2022KeyPlayers = [
  { name: 'Yassine Bounou (Bono)', role: 'The Wall', detail: 'Saved two penalties against Spain. Conceded just one goal from open play in the entire tournament. His composure under pressure was extraordinary.' },
  { name: 'Sofyan Amrabat', role: 'The Engine', detail: 'Named man of the match twice. His tireless midfield work broke up opposition attacks and launched Moroccan counters. Arguably the tournament\'s best defensive midfielder.' },
  { name: 'Achraf Hakimi', role: 'The Heartbeat', detail: 'Scored the winning Panenka penalty against Spain. His pace, crossing, and leadership made him Morocco\'s most important outfield player.' },
  { name: 'Walid Regragui', role: 'The Tactician', detail: 'Appointed just three months before the World Cup. His pragmatic, disciplined tactical approach was perfectly suited to knockout football. Now a national icon.' },
];

const stadiums = [
  {
    name: 'Stade Mohammed V',
    city: 'Casablanca',
    capacity: '67,000',
    teams: 'Wydad AC, Raja CA',
    image: '/images/hero-morocco.webp',
    description:
      'The beating heart of Moroccan football. Home to Africa\'s fiercest derby between Wydad and Raja, this iconic stadium has hosted countless historic matches and is the most electric venue in the country.',
    howToGetThere: 'Take the Casablanca tramway to Stade Mohammed V station, or taxi from Casa Voyageurs train station (15 min).',
  },
  {
    name: 'Complexe Sportif Prince Moulay Abdallah',
    city: 'Rabat',
    capacity: '53,000',
    teams: 'AS FAR, FUS Rabat',
    image: '/images/hero-morocco.webp',
    description:
      'The national stadium and home of the Atlas Lions for major internationals. Located in the capital, it offers a grand setting for both league matches and high-profile fixtures.',
    howToGetThere: 'Accessible via Rabat tramway or a short taxi ride from Rabat Agdal train station.',
  },
  {
    name: 'Stade de Marrakech',
    city: 'Marrakech',
    capacity: '45,000',
    teams: 'Kawkab Marrakech, Chabab Atlas',
    image: '/images/hero-marrakech.webp',
    description:
      'A modern arena set against the backdrop of the Atlas Mountains. Built to international standards, it regularly hosts AFCON qualifiers, CAF Champions League matches, and major cultural events.',
    howToGetThere: 'Located near Menara district. Take a petit taxi from Jemaa el-Fnaa (20 min) or bus line 19.',
  },
  {
    name: 'Stade Ibn Batouta',
    city: 'Tangier',
    capacity: '65,000',
    teams: 'Ittihad Tanger, MAS',
    image: '/images/hero-morocco.webp',
    description:
      'One of the largest and most modern stadiums in Africa. Named after the famous Tangier-born explorer, it features world-class facilities and has hosted FIFA Club World Cup matches.',
    howToGetThere: 'Take the city bus or taxi from Tangier Ville train station (25 min). Ample parking available.',
  },
  {
    name: 'Grand Stade de Casablanca',
    city: 'Casablanca',
    capacity: '93,000',
    teams: '2030 World Cup Venue',
    image: '/images/hero-morocco.webp',
    description:
      'Morocco\'s crown jewel, currently under construction for the 2030 FIFA World Cup. When completed, it will be the largest stadium in Africa and one of the largest in the world, featuring a retractable roof and cutting-edge design.',
    howToGetThere: 'Will be served by a new tramway extension and dedicated transport links. Located in the south of Casablanca.',
  },
  {
    name: 'Stade Adrar',
    city: 'Agadir',
    capacity: '45,000',
    teams: 'Hassania Agadir',
    image: '/images/hero-morocco.webp',
    description:
      'A stunning seaside stadium in the sunny resort city of Agadir. Watching a match here is a unique experience &mdash; you can feel the Atlantic breeze and catch glimpses of the ocean from the upper tiers.',
    howToGetThere: 'Short taxi ride from Agadir city center (10 min). Close to the beach and main tourist hotels.',
  },
  {
    name: 'Complexe Sportif de Fes',
    city: 'Fes',
    capacity: '45,000',
    teams: 'MAS Fes, Wydad Fes',
    image: '/images/hero-fes.webp',
    description:
      'Located in Morocco\'s spiritual capital, this modern complex sits in contrast to the ancient medina nearby. Fes fans are known for their passion and intellectual approach to the beautiful game.',
    howToGetThere: 'Taxi from Fes train station (20 min). City bus routes 16 and 29 serve the stadium area.',
  },
  {
    name: 'Stade Saniat Rmel',
    city: 'Tetouan',
    capacity: '35,000',
    teams: 'Moghreb Tetouan',
    image: '/images/hero-morocco.webp',
    description:
      'Nestled in the foothills of the Rif Mountains, Tetouan\'s stadium offers an intimate atmosphere. The city\'s Andalusian heritage infuses the fan culture with a distinctive character found nowhere else in Morocco.',
    howToGetThere: 'Walking distance from Tetouan city center. Take a grand taxi from Tangier (1 hour) for day trips.',
  },
];

const topClubs = [
  {
    name: 'Wydad Athletic Club (WAC)',
    city: 'Casablanca',
    stadium: 'Stade Mohammed V',
    founded: 1937,
    colors: 'Red & White',
    achievements: '22x Moroccan league titles, 3x CAF Champions League',
    description:
      'The most successful club in Moroccan football history. Wydad\'s ultras, known as "Winners," create an atmosphere that rivals any in the world.',
  },
  {
    name: 'Raja Club Athletic (RCA)',
    city: 'Casablanca',
    stadium: 'Stade Mohammed V',
    founded: 1949,
    colors: 'Green & White',
    achievements: '12x Moroccan league titles, 3x CAF Champions League',
    description:
      'Raja represents the working-class soul of Casablanca. Their supporters, the "Green Boys," are famous for spectacular choreographed displays called tifos.',
  },
  {
    name: 'AS FAR',
    city: 'Rabat',
    stadium: 'Complexe Sportif Prince Moulay Abdallah',
    founded: 1958,
    colors: 'Red & Green',
    achievements: '13x Moroccan league titles, 1x CAF Champions League',
    description:
      'The Royal Armed Forces club, known as the "Military Club." AS FAR has a storied history and is one of the most decorated clubs in the country.',
  },
  {
    name: 'RS Berkane',
    city: 'Berkane',
    stadium: 'Stade Municipal de Berkane',
    founded: 1938,
    colors: 'Orange & Black',
    achievements: '2x CAF Confederation Cup, multiple top-4 Botola finishes',
    description:
      'The pride of eastern Morocco. RS Berkane has emerged as a continental force, winning the CAF Confederation Cup and representing Moroccan football on the African stage.',
  },
  {
    name: 'MAS Fes',
    city: 'Fes',
    stadium: 'Complexe Sportif de Fes',
    founded: 1946,
    colors: 'Green & White',
    achievements: '4x Moroccan league titles, Botola Pro regulars',
    description:
      'Representing Morocco\'s spiritual capital, MAS Fes carries the weight of history. Known for developing talented youth players who go on to represent Morocco internationally.',
  },
  {
    name: 'Moghreb Athletic de Tetouan',
    city: 'Tetouan',
    stadium: 'Stade Saniat Rmel',
    founded: 1922,
    colors: 'White & Black',
    achievements: '2x Moroccan league titles',
    description:
      'One of the oldest clubs in Morocco with a passionate northern fanbase. Their 2012 league title was a fairy-tale achievement for the small Rif city.',
  },
  {
    name: 'Hassania Union Sport Agadir',
    city: 'Agadir',
    stadium: 'Stade Adrar',
    founded: 1946,
    colors: 'Yellow & Green',
    achievements: 'Multiple Botola Pro campaigns, CAF competition regulars',
    description:
      'The Souss region\'s flagship club. Hassania Agadir plays in one of Morocco\'s most scenic stadiums and benefits from the passionate Amazigh sporting culture.',
  },
];

const legends = [
  {
    name: 'Achraf Hakimi',
    position: 'Right-Back',
    clubs: 'Real Madrid, Borussia Dortmund, Inter Milan, Paris Saint-Germain',
    achievement: 'Key player in Morocco\'s 2022 World Cup semi-final run. One of the best full-backs in the world, known for his blistering pace and attacking prowess.',
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Hakim Ziyech',
    position: 'Winger / Attacking Midfielder',
    clubs: 'Ajax, Chelsea, Galatasaray',
    achievement: 'The creative maestro of Moroccan football. His left foot is considered one of the most gifted in world football, capable of delivering devastating crosses and long-range strikes.',
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Yassine Bounou (Bono)',
    position: 'Goalkeeper',
    clubs: 'Girona, Sevilla, Al-Hilal',
    achievement: 'Hero of the 2022 World Cup with sensational saves against Spain and Portugal. Winner of the 2023 UEFA Europa League with Sevilla, cementing his status as a world-class goalkeeper.',
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Sofiane Boufal',
    position: 'Winger',
    clubs: 'Lille, Southampton, Celta Vigo, Al-Rayyan',
    achievement: 'Known for his mesmerizing dribbling skills. His iconic celebration dancing with his mother after Morocco\'s historic World Cup win over Portugal became one of the tournament\'s defining images.',
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Noussair Mazraoui',
    position: 'Left-Back / Right-Back',
    clubs: 'Ajax, Bayern Munich, Manchester United',
    achievement: 'A versatile and technically gifted defender who can play on either flank. Mazraoui was instrumental in Morocco\'s defensive solidity during the 2022 World Cup.',
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Azzedine Oughahi',
    position: 'Midfielder (Historic)',
    clubs: 'FAR Rabat, French league clubs',
    achievement: 'A pioneer of Moroccan football who helped establish the national team\'s reputation in the 1970s and 1980s. Oughahi represents the golden era that laid the foundation for today\'s success.',
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Mustapha Hadji',
    position: 'Attacking Midfielder',
    clubs: 'Sporting CP, Deportivo La Coruna, Coventry City, Aston Villa',
    achievement: 'African Footballer of the Year 1998. A magician on the pitch, Hadji was Morocco\'s creative heartbeat during the late 1990s and early 2000s, inspiring a generation of Moroccan players.',
    image: '/images/hero-morocco.webp',
  },
];

const worldCup2030Stadiums = [
  { name: 'Grand Stade de Casablanca', city: 'Casablanca', capacity: '93,000', status: 'Under Construction' },
  { name: 'Grand Stade de Rabat', city: 'Rabat', capacity: '70,000+', status: 'Planned / Renovation' },
  { name: 'Grand Stade de Marrakech', city: 'Marrakech', capacity: '50,000+', status: 'Planned / Renovation' },
  { name: 'Stade Ibn Batouta', city: 'Tangier', capacity: '65,000', status: 'Existing / Upgrade' },
  { name: 'Stade de Fes', city: 'Fes', capacity: '50,000+', status: 'Planned / Renovation' },
  { name: 'Stade d\'Agadir', city: 'Agadir', capacity: '45,000+', status: 'Existing / Upgrade' },
];

const matchDayTips = [
  {
    icon: Ticket,
    title: 'Buying Tickets',
    tips: [
      'Purchase tickets at the stadium box office on match day (open 2-3 hours before kick-off)',
      'For big derbies (Wydad vs Raja), try to buy tickets 2-3 days in advance',
      'Prices range from 50 MAD (basic terrace) to 200 MAD (VIP/covered stand)',
      'Carry cash in dirhams &mdash; card payment is not always available at kiosks',
      'Official club websites sometimes sell tickets online for major matches',
    ],
  },
  {
    icon: Clock,
    title: 'Match Day Experience',
    tips: [
      'Arrive at least 1 hour before kick-off to soak in the pre-match atmosphere',
      'Food vendors outside the stadium sell grilled meats, sandwiches, and msemen',
      'The atmosphere builds gradually &mdash; drums, chants, and tifos start well before kick-off',
      'Half-time is a great time to grab Moroccan mint tea from nearby vendors',
      'Post-match, the celebrations (or commiserations) spill into nearby cafes',
    ],
  },
  {
    icon: Shirt,
    title: 'What to Wear & Bring',
    tips: [
      'Wear the home team colors to blend in with the fans and share the experience',
      'Official jerseys can be bought outside stadiums from vendors (80-150 MAD for replicas)',
      'Bring a light jacket for evening matches, even in summer &mdash; it cools down',
      'Comfortable shoes are essential &mdash; you will be standing and jumping',
      'Small bags only; large backpacks may not be allowed past security',
    ],
  },
  {
    icon: Shield,
    title: 'Safety Tips',
    tips: [
      'Moroccan stadiums are generally safe, but stay aware of your surroundings',
      'Stick with the home supporters section unless you know which end is which',
      'Avoid wearing rival team colors in the wrong section of the stadium',
      'Keep your phone and valuables secure, especially in crowded areas',
      'Follow steward instructions and exit calmly after the final whistle',
      'Police presence at stadiums is strong and ensures a secure environment',
    ],
  },
  {
    icon: Eye,
    title: 'Best Stadiums to Visit',
    tips: [
      'Stade Mohammed V (Casablanca) for the Wydad vs Raja derby &mdash; unmissable',
      'Stade Ibn Batouta (Tangier) for the most modern facilities',
      'Stade de Marrakech for a match with Atlas Mountain views',
      'Stade Adrar (Agadir) for an ocean-breeze football experience',
      'Any stadium for an Atlas Lions international &mdash; the national pride is palpable',
    ],
  },
  {
    icon: Heart,
    title: 'Fan Culture & Chants',
    tips: [
      'Moroccan ultras groups are among the most passionate in the world',
      'Learn a few chants before you go &mdash; "Dima Wydad" or "Dima Raja" will make you friends',
      'Tifos (large choreographed displays) are common at big matches &mdash; arrive early to see them',
      'The drumming sections create an unforgettable rhythm that carries the team',
      'Respect the fan culture &mdash; photography of ultras sections may be unwelcome without asking',
    ],
  },
];

/* ─── Page Component ─── */

export default function FootballPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSportsEvent) }}
      />

      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4965]/20 to-[#8B1A1A]/20" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Football</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              <Trophy className="w-4 h-4 text-[var(--color-accent)]" />
              <span>2022 World Cup Semi-Finalists &bull; 2030 World Cup Co-Hosts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
              Football in Morocco
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              From the roaring terraces of Casablanca to the 2030 FIFA World Cup, Morocco&apos;s football story is
              one of passion, pride, and a nation on the rise. Experience the beautiful game in the heart of North Africa.
            </p>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ═══════════════════════════════════════════
          FOOTBALL STATS BAR
          ═══════════════════════════════════════════ */}
      <section className="py-12 gradient-moroccan">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {footballStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          1. MOROCCO'S FOOTBALL STORY
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Flag className="w-4 h-4" />
              <span>The Atlas Lions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco&apos;s Football Story
            </h2>
            <div className="space-y-5 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                In December 2022, Morocco wrote the most extraordinary chapter in African and Arab football history.
                The Atlas Lions &mdash; led by coach Walid Regragui &mdash; defeated Belgium, Spain, and Portugal
                to reach the FIFA World Cup semi-finals in Qatar, becoming the first African and first Arab nation
                ever to achieve this feat. The images of players celebrating with their mothers on the pitch, of
                millions pouring into the streets of Casablanca, Rabat, and Marrakech, became iconic moments that
                transcended sport. Morocco did not just compete &mdash; they captured the hearts of the entire world.
              </p>
              <p>
                But Morocco&apos;s football passion did not begin in 2022. The Atlas Lions have been a force in African
                football for decades, winning the Africa Cup of Nations in 1976 and consistently qualifying for
                World Cups throughout the 1980s, 1990s, and beyond. What makes Moroccan football unique is how
                deeply it is woven into everyday life. In every city, town, and village, you will find children
                playing football in narrow medina streets, on dusty pitches beside the Atlas Mountains, and on
                beaches along the Atlantic coast. Football is not just a sport in Morocco &mdash; it is a shared
                language, a source of identity, and a bridge between generations.
              </p>
              <p>
                Now, Morocco stands on the threshold of its greatest sporting moment yet. As co-host of the 2030
                FIFA World Cup alongside Spain and Portugal, the kingdom is investing billions of dirhams in
                world-class stadiums, transport infrastructure, and hospitality. For tourists, this creates an
                unprecedented opportunity: visit Morocco not just for its breathtaking landscapes, ancient medinas,
                and legendary cuisine, but for a world-class football experience that is passionate, affordable,
                and utterly unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE 2022 WORLD CUP RUN
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Trophy className="w-4 h-4" />
              <span>Qatar 2022</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Historic 2022 World Cup Run
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Match by match, Morocco wrote the most extraordinary chapter in African and Arab
              football history. Here is how it happened.
            </p>
          </div>

          {/* Match Timeline */}
          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {worldCup2022Journey.map((match, index) => (
              <div key={match.stage + index} className="card-moroccan p-5 flex gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xs ${
                    match.stage === 'Semi-Final' || match.stage === 'Quarter-Final'
                      ? 'gradient-moroccan'
                      : match.stage === 'Third Place'
                        ? 'bg-[var(--color-secondary)]'
                        : 'bg-[var(--color-primary)]'
                  }`}>
                    {match.stage === 'Group Stage' ? `G${index + 1}` : match.stage.charAt(0) + match.stage.charAt(match.stage.length - 1)}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wider mb-0.5">{match.stage}</div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{match.match}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{match.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Players */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
            Key Players of the 2022 Run
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {worldCup2022KeyPlayers.map((player) => (
              <div key={player.name} className="card-moroccan p-5 text-center">
                <div className="inline-flex p-3 rounded-full bg-[var(--color-primary)]/10 mb-3">
                  <Star className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h4 className="font-bold text-[var(--text-primary)] mb-0.5">{player.name}</h4>
                <div className="text-xs font-medium text-[var(--color-accent)] mb-2">{player.role}</div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{player.detail}</p>
              </div>
            ))}
          </div>

          {/* Cultural Impact Box */}
          <div className="mt-10 card-moroccan p-6 border-l-4 border-l-[var(--color-primary)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 shrink-0">
                <Heart className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">The Cultural Impact</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Morocco&apos;s 2022 World Cup run was more than sport. It was a moment of unity for
                  the entire Arab world and Africa. Millions who had never watched football before
                  became passionate fans overnight. The images of Sofiane Boufal dancing with his
                  mother on the pitch, of Achraf Hakimi&apos;s Panenka penalty, of the streets of
                  Casablanca filled with millions &mdash; these became defining cultural moments of
                  2022. The run proved that a nation of 37 million people with a GDP smaller than
                  many European cities could stand toe-to-toe with the world&apos;s best. In Morocco,
                  December 2022 is remembered the way other countries remember winning the World Cup itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. 2030 FIFA WORLD CUP
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Globe className="w-4 h-4" />
              <span>A Historic Tri-Continental Tournament</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              2030 FIFA World Cup
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco, Spain, and Portugal will co-host the first World Cup spanning two continents &mdash; a landmark
              event that puts Morocco firmly on the global sporting map.
            </p>
          </div>

          {/* What this means */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card-moroccan p-8">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <Zap className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Massive Investment</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Morocco is building the Grand Stade de Casablanca (93,000 seats) and renovating stadiums across 6
                cities. New roads, rail links, and airports will transform the country&apos;s infrastructure for
                decades to come.
              </p>
            </div>
            <div className="card-moroccan p-8">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
                <Users className="w-6 h-6 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">What It Means for Tourists</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Expect expanded flight routes, new hotels, improved public transport, and a country fully geared
                toward welcoming the world. Morocco will be easier than ever to visit, with world-class hospitality
                at Moroccan prices.
              </p>
            </div>
            <div className="card-moroccan p-8">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
                <Calendar className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Plan Ahead for 2030</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Ticket sales will begin through FIFA&apos;s official platform. Book accommodation early &mdash;
                Casablanca, Marrakech, and Tangier hotels will fill up fast. Consider visiting host cities now
                to scout the experience.
              </p>
            </div>
          </div>

          {/* 2030 Stadiums Table */}
          <div className="card-moroccan overflow-hidden">
            <div className="p-6 border-b border-[var(--border-light)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                Morocco&apos;s 2030 World Cup Venues
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">Stadium</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">City</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">Capacity</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {worldCup2030Stadiums.map((s) => (
                    <tr key={s.name} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[var(--text-primary)]">{s.name}</td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">{s.city}</td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">{s.capacity}</td>
                      <td className="px-6 py-4">
                        <span className={`tag ${s.status.includes('Under') ? 'tag-primary' : s.status.includes('Planned') ? 'tag-accent' : 'tag-secondary'}`}>
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. BOTOLA PRO - MOROCCAN FOOTBALL LEAGUE
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Trophy className="w-4 h-4" />
              <span>Inwi Botola Pro</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Moroccan Football League
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              The Botola Pro is Morocco&apos;s top-flight football league, featuring 16 teams competing from August to
              May. It is one of the strongest leagues in Africa, producing world-class talent and hosting some of the
              continent&apos;s most electrifying derbies.
            </p>
          </div>

          {/* Derby spotlight */}
          <div className="card-moroccan overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src="/images/hero-morocco.webp"
                  alt="Casablanca Derby - Wydad vs Raja - The biggest derby in Africa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="tag tag-primary text-white bg-[var(--color-primary)] border-[var(--color-primary)]">
                    Africa&apos;s Biggest Derby
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  Wydad vs Raja: The Casablanca Derby
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  When Wydad and Raja meet at Stade Mohammed V, Casablanca transforms. This is widely considered the
                  biggest derby in Africa and one of the most intense in world football. The city divides into red
                  and green, the stadium shakes with 67,000 voices, and the tifos are works of art. If you can
                  attend only one match in Morocco &mdash; make it this one.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="tag tag-primary">Wydad AC (Red)</span>
                  <span className="tag tag-secondary">Raja CA (Green)</span>
                  <span className="tag tag-accent">67,000 Capacity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket info box */}
          <div className="card-moroccan p-6 mb-12 border-l-4 border-l-[var(--color-accent)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10 shrink-0">
                <Ticket className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Ticket Prices</h4>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Botola Pro matches are remarkably affordable. Standard terrace tickets cost <strong>50&ndash;80 MAD</strong> (approximately
                  $5&ndash;8 USD), covered stands run <strong>100&ndash;150 MAD</strong>, and VIP seating tops out at around <strong>200 MAD</strong> ($20 USD).
                  For major derbies and international matches, prices may be slightly higher and tickets sell out fast.
                </p>
              </div>
            </div>
          </div>

          {/* Top Clubs Grid */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Top Clubs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {topClubs.map((club) => (
              <div key={club.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-[var(--text-primary)] leading-tight">{club.name}</h4>
                  <span className="text-xs text-[var(--text-muted)] shrink-0 ml-2">Est. {club.founded}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="tag tag-secondary">
                    <MapPin className="w-3 h-3 mr-1" />
                    {club.city}
                  </span>
                  <span className="tag tag-accent">{club.colors}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {club.description}
                </p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    {club.achievements}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. HOW TO WATCH A MATCH
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Eye className="w-4 h-4" />
              <span>Your Match Day Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              How to Watch a Match in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Attending a live football match in Morocco is an unforgettable experience. Here is everything you need
              to know to make the most of your match day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {matchDayTips.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <section.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">{section.title}</h3>
                <ul className="space-y-2.5">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: tip }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="mt-8 card-moroccan p-6 border-l-4 border-l-[var(--color-secondary)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-secondary)]/10 shrink-0">
                <Info className="w-5 h-5 text-[var(--color-secondary)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Watching from a Cafe</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  If you cannot make it to the stadium, watching a match at a Moroccan cafe is an experience in itself.
                  Almost every cafe in Morocco has a television tuned to football. Grab a mint tea or a <em>nous-nous</em> (half
                  coffee, half milk), and join the locals as they cheer, debate, and celebrate together. It is one of the
                  most authentic ways to experience Moroccan daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. STADIUMS GUIDE
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <MapPin className="w-4 h-4" />
              <span>Morocco&apos;s Sporting Venues</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Stadiums Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the historic Stade Mohammed V to the futuristic Grand Stade de Casablanca, Morocco&apos;s stadiums
              are destinations in their own right.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            {stadiums.map((stadium) => (
              <div key={stadium.name} className="card-moroccan overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={stadium.image}
                    alt={`${stadium.name} in ${stadium.city}, Morocco - Capacity: ${stadium.capacity}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{stadium.name}</h3>
                      <p className="text-sm text-white/80 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {stadium.city}
                      </p>
                    </div>
                    <span className="tag bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      <Users className="w-3 h-3 mr-1" />
                      {stadium.capacity}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="tag tag-primary text-xs">
                      <Shield className="w-3 h-3 mr-1" />
                      {stadium.teams}
                    </span>
                  </div>
                  <p
                    className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: stadium.description }}
                  />
                  <div className="pt-3 border-t border-[var(--border-light)]">
                    <p className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                      <span><strong>Getting There:</strong> {stadium.howToGetThere}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. MOROCCAN FOOTBALL LEGENDS
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Star className="w-4 h-4" />
              <span>Heroes of the Atlas Lions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Moroccan Football Legends
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              These are the players who have put Morocco on the world football map &mdash; from the 2022 World Cup
              heroes to the trailblazers who came before them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
            {legends.map((legend) => (
              <div key={legend.name} className="card-moroccan overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={legend.image}
                    alt={`${legend.name} - Moroccan football legend`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="tag bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                      {legend.position}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1">{legend.name}</h3>
                  <p className="text-xs text-[var(--color-primary)] font-medium mb-3">{legend.clubs}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{legend.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. AFRICA CUP OF NATIONS
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
                <Globe className="w-4 h-4" />
                <span>Continental Glory</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                Africa Cup of Nations
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Morocco won the Africa Cup of Nations (AFCON) in 1976 on home soil and has been a consistent
                  contender ever since, reaching the final in 2004 and the quarter-finals multiple times. With the
                  current golden generation of talent playing at Europe&apos;s biggest clubs, Morocco is among the
                  heavy favorites for every AFCON tournament.
                </p>
                <p>
                  For fans traveling to Morocco, AFCON qualifying matches are a treat. The Atlas Lions typically
                  play home qualifiers in Rabat or Casablanca, and the atmosphere is electric. Expect sold-out
                  stadiums, passionate chanting, and an incredible display of national pride. International match
                  days are unofficial holidays &mdash; the entire country stops to watch.
                </p>
                <p>
                  Morocco has also hosted the AFCON tournament (1988 and 2025), and the country&apos;s growing
                  infrastructure makes it a leading candidate for future editions. If you time your visit with an
                  AFCON qualifier or a friendly international, you will experience Moroccan football patriotism at
                  its peak.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="card-moroccan p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">1976</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">AFCON Winners</div>
                </div>
                <div className="card-moroccan p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">20+</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">AFCON Appearances</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="card-moroccan overflow-hidden">
                <img
                  src="/images/flyer-worldcup2030.webp"
                  alt="Morocco national football team fans celebrating"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 card-moroccan p-4 bg-[var(--surface)] shadow-lg max-w-[220px]">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  &ldquo;Morocco does not just play football. Morocco lives football.&rdquo;
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-1">&mdash; Walid Regragui, Head Coach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STREET FOOTBALL CULTURE
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="card-moroccan overflow-hidden h-full">
                <img
                  src="/images/flyer-worldcup2030.webp"
                  alt="Street football in Morocco - children playing in a neighborhood"
                  className="w-full h-full object-cover min-h-[300px]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
                <Heart className="w-4 h-4" />
                <span>The Soul of the Game</span>
              </div>
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Street Football Culture
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Long before the World Cup and the gleaming stadiums, Moroccan football was born in the streets.
                Walk through any neighborhood in Casablanca, Fes, or Marrakech and you will hear the familiar
                sound of a ball bouncing off ancient walls. Children play barefoot in narrow derbs (alleyways),
                using sandals for goalposts and a rolled-up sock for a ball when nothing else is available.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                This street football culture is where Morocco&apos;s world-class talent is forged. Players like
                Achraf Hakimi and Hakim Ziyech honed their close control and quick thinking not on manicured
                academy pitches, but in tight spaces where creativity and technical skill were the only currencies
                that mattered. As a tourist, stumbling upon a pickup game is one of Morocco&apos;s most genuine
                cultural moments &mdash; join in and you will be welcomed with open arms.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="tag tag-primary">Medina Kickabouts</span>
                <span className="tag tag-secondary">Beach Football</span>
                <span className="tag tag-accent">Neighborhood Derbies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. CTA SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Plan Your Football Trip to Morocco
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-10">
            Whether you are here for a Botola Pro derby, an Atlas Lions international, or the 2030 World Cup,
            CityGuide has everything you need to plan the perfect football trip.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            <Link href="/events" className="card-moroccan p-6 text-center hover:border-[var(--color-primary)] transition-colors group">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Match Schedules</h3>
              <p className="text-sm text-[var(--text-secondary)]">Find upcoming matches and events across Morocco</p>
              <span className="inline-flex items-center gap-1 text-sm text-[var(--color-primary)] font-medium mt-3">
                View Events <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/cities" className="card-moroccan p-6 text-center hover:border-[var(--color-primary)] transition-colors group">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-3 group-hover:bg-[var(--color-secondary)]/20 transition-colors">
                <MapPin className="w-6 h-6 text-[var(--color-secondary)]" />
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Stadium Cities</h3>
              <p className="text-sm text-[var(--text-secondary)]">Explore Casablanca, Rabat, Marrakech, and more</p>
              <span className="inline-flex items-center gap-1 text-sm text-[var(--color-secondary)] font-medium mt-3">
                Explore Cities <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/transport" className="card-moroccan p-6 text-center hover:border-[var(--color-primary)] transition-colors group">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-3 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                <Zap className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Getting to Matches</h3>
              <p className="text-sm text-[var(--text-secondary)]">Trains, taxis, and transport tips for match day</p>
              <span className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] font-medium mt-3">
                Transport Guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Host Cities
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Compass,
  MapPin,
  Star,
  Shield,
  Clock,
  Users,
  ShoppingBag,
  Sun,
  Camera,
  Footprints,
  ArrowRight,
  AlertTriangle,
  Accessibility,
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
  Eye,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Medina Guide | How to Navigate Morocco\'s Ancient Cities | CityGuide',
  description:
    'Master Morocco\'s historic medinas with our comprehensive guide. Navigate Fes el-Bali, Marrakech, Tetouan, Essaouira, and Chefchaouen. Souk shopping tips, safety advice, best times to visit, and accessibility information.',
  keywords: [
    'Morocco medina guide',
    'Fes el-Bali medina',
    'Marrakech medina',
    'navigate Moroccan medina',
    'souk shopping Morocco',
    'Morocco medina safety',
    'Chefchaouen blue city',
    'Tetouan medina',
    'Essaouira medina',
    'Morocco old city guide',
    'medina navigation tips',
    'Jemaa el-Fnaa',
    'UNESCO medina Morocco',
    'Morocco souk guide',
  ],
  openGraph: {
    title: 'Medina Guide - How to Navigate Morocco\'s Ancient Cities',
    description:
      'Your complete guide to exploring Morocco\'s historic medinas. Navigation tips, souk shopping, safety advice, and ranked reviews of the 8 best medinas.',
    url: 'https://cityguide.ma/medina-guide',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Narrow alleyway in a Moroccan medina with colorful textiles and dappled light',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/medina-guide' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://cityguide.ma/medina-guide',
  name: 'Medina Guide - How to Navigate Morocco\'s Ancient Cities',
  description:
    'Comprehensive guide to navigating Moroccan medinas, including ranked reviews of the best medinas, souk shopping tips, safety advice, and practical visitor information.',
  url: 'https://cityguide.ma/medina-guide',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://cityguide.ma',
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cityguide.ma' },
      { '@type': 'ListItem', position: 2, name: 'Medina Guide', item: 'https://cityguide.ma/medina-guide' },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   MEDINAS RANKED DATA
   ═══════════════════════════════════════════════════════════════ */

const medinasRanked = [
  {
    rank: 1,
    name: 'Fes el-Bali',
    city: 'Fes',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    tagline: 'The world\'s largest car-free urban zone',
    unesco: true,
    difficulty: 'Challenging',
    highlights: [
      'Over 9,000 alleyways in the world\'s largest car-free urban area',
      'Al-Qarawiyyin, the oldest continuously operating university (founded 859 CE)',
      'The legendary tanneries with their stone vats of colorful dye',
      'Exquisite Marinid madrasas (Bou Inania, Attarine)',
    ],
    description:
      'Fes el-Bali is the undisputed king of Moroccan medinas and one of the most extraordinary urban experiences on Earth. Founded in the 9th century, this UNESCO World Heritage Site is a living medieval city of over 9,000 narrow alleyways, 300 mosques, and countless fountains, workshops, and hidden gardens. Getting lost is not a risk here &mdash; it is a certainty, and arguably the whole point. The medina is too narrow for cars; only donkeys, handcarts, and human feet navigate its labyrinthine passages. The sensory overload is total: the smell of fresh bread mixing with tanning leather, the sound of hammering from copper workshops, the sight of shafts of sunlight illuminating hidden courtyards.',
  },
  {
    rank: 2,
    name: 'Marrakech Medina',
    city: 'Marrakech',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80',
    tagline: 'The spectacle of Jemaa el-Fnaa',
    unesco: true,
    difficulty: 'Moderate',
    highlights: [
      'Jemaa el-Fnaa &mdash; the world\'s greatest open-air performance space',
      'The vast covered souks radiating north from the square',
      'Ben Youssef Madrasa, Bahia Palace, Saadian Tombs',
      'Vibrant nightlife and rooftop terrace culture',
    ],
    description:
      'If Fes is the intellectual heart of Morocco, Marrakech is its pulsing, theatrical soul. The medina revolves around Jemaa el-Fnaa, the iconic square that transforms from a daytime marketplace into an otherworldly carnival of storytellers, musicians, acrobats, snake charmers, and food stalls every evening. Designated by UNESCO as a Masterpiece of the Oral and Intangible Heritage of Humanity, it is unlike anything else on the planet. From the square, a vast network of covered souks stretches northward, each specializing in a different craft: leatherwork, spices, carpets, metalwork, textiles.',
  },
  {
    rank: 3,
    name: 'Tetouan Medina',
    city: 'Tetouan',
    image: 'https://images.unsplash.com/photo-1560095633-6858e1e1e682?w=600&q=80',
    tagline: 'Andalusian charm meets Riffian culture',
    unesco: true,
    difficulty: 'Moderate',
    highlights: [
      'Best-preserved Andalusian medina in Morocco',
      'Whitewashed houses with Spanish-influenced architecture',
      'Royal Artisan School preserving traditional crafts',
      'Significantly fewer tourists than Fes or Marrakech',
    ],
    description:
      'Tetouan\'s medina is a hidden gem &mdash; a UNESCO World Heritage Site that remains remarkably off the tourist trail. Built by Moorish refugees expelled from Andalusia in the 15th century, the medina has a distinctly Spanish character: whitewashed walls, wrought-iron balconies, and tiled courtyards that evoke Granada or Seville. The souk system is well-organized by craft, and the hassle factor is minimal compared to larger medinas. The Tetouan medina offers what many travelers dream of but rarely find: an authentic, uncrowded, deeply atmospheric experience.',
  },
  {
    rank: 4,
    name: 'Essaouira Medina',
    city: 'Essaouira',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
    tagline: 'Manageable, coastal, and laid-back',
    unesco: true,
    difficulty: 'Easy',
    highlights: [
      'Compact, grid-like layout &mdash; nearly impossible to get truly lost',
      'Atlantic breeze and dramatic rampart walks',
      'Thriving arts scene with galleries and woodworking ateliers',
      'Fresh seafood grills at the harbor every afternoon',
    ],
    description:
      'If you are intimidated by the labyrinthine complexity of Fes, Essaouira is the perfect medina introduction. Designed by a French architect in the 18th century for Sultan Mohammed III, Essaouira\'s medina follows a relatively logical grid pattern within its impressive Portuguese-built fortifications. The relaxed Atlantic coastal vibe, the ever-present sound of seagulls, the smell of grilling sardines from the port, and the wind-sculpted thuya wood workshops give this medina a character entirely its own. It is the most approachable medina in Morocco.',
  },
  {
    rank: 5,
    name: 'Chefchaouen Medina',
    city: 'Chefchaouen',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=600&q=80',
    tagline: 'The blue wonder of the Rif Mountains',
    unesco: false,
    difficulty: 'Easy',
    highlights: [
      'Every surface painted in mesmerizing shades of blue',
      'Stunning mountain backdrop of the Rif range',
      'Excellent local crafts: woven blankets, goat cheese, olive oil',
      'One of the most photographed places in all of Africa',
    ],
    description:
      'Chefchaouen\'s medina is pure visual magic &mdash; a cascade of blue-washed buildings tumbling down a mountainside in the heart of the Rif. The blue-painting tradition, which some attribute to Jewish refugees who settled here in the 1930s (blue symbolizing the sky and heaven in Jewish tradition), has created what is arguably the most photogenic small town in the world. The medina is compact and hilly, with small squares shaded by ancient trees and workshops selling the distinctive striped blankets woven by Riffian women.',
  },
  {
    rank: 6,
    name: 'Meknes Medina',
    city: 'Meknes',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80',
    tagline: 'Imperial grandeur, fewer crowds',
    unesco: true,
    difficulty: 'Moderate',
    highlights: [
      'Bab Mansour &mdash; arguably the finest gateway in all of North Africa',
      'Moulay Ismail\'s vast granaries and stables',
      'Genuine local atmosphere with minimal tourist infrastructure',
      'Excellent food scene at a fraction of Marrakech prices',
    ],
    description:
      'Meknes is the most underrated of Morocco\'s four imperial cities, and its medina rewards the traveler who ventures beyond the better-known destinations. The monumental Bab Mansour gateway is one of the most impressive architectural achievements in Morocco, and the vast imperial complex built by Sultan Moulay Ismail in the 17th century &mdash; with its massive granaries, stables for 12,000 horses, and miles of defensive walls &mdash; is staggering in scale. The medina itself is authentic and lived-in, with prices and hassle levels well below Marrakech or Fes.',
  },
  {
    rank: 7,
    name: 'Rabat Medina &amp; Kasbah Udayas',
    city: 'Rabat',
    image: 'https://images.unsplash.com/photo-1577147443647-81856d5151af?w=600&q=80',
    tagline: 'The capital\'s polished gem',
    unesco: true,
    difficulty: 'Easy',
    highlights: [
      'Kasbah Udayas &mdash; a fortress-within-a-medina overlooking the Atlantic',
      'Andalusian garden inside the kasbah walls',
      'Clean, well-maintained streets with upscale boutiques',
      'Adjacent to the atmospheric Chellah necropolis',
    ],
    description:
      'Rabat\'s medina offers the most genteel medina experience in Morocco. As the capital city, it is cleaner, calmer, and more orderly than its counterparts. The star attraction is the Kasbah of the Udayas, a 12th-century Almohad fortress perched dramatically above the mouth of the Bou Regreg river, with blue-and-white painted houses, an exquisite Andalusian garden, and panoramic ocean views. The main medina stretching south from the kasbah has excellent carpet shops, leather goods, and a relaxed atmosphere ideal for first-time visitors.',
  },
  {
    rank: 8,
    name: 'Sale Medina',
    city: 'Sale',
    image: 'https://images.unsplash.com/photo-1548017544-09dbc9fb99f6?w=600&q=80',
    tagline: 'Authentic and untouristy',
    unesco: false,
    difficulty: 'Moderate',
    highlights: [
      'Virtually no tourist infrastructure &mdash; the real Morocco',
      'Historic pirate republic with fascinating maritime history',
      'Beautiful Medersa of Abu al-Hassan (14th century)',
      'Great views of Rabat across the Bou Regreg river',
    ],
    description:
      'Just across the river from Rabat, Sale is its polar opposite in character: raw, authentic, and almost entirely unvisited by tourists. Once the base of the infamous Sale Rovers (Barbary pirates who terrorized Atlantic shipping in the 17th century), the medina retains a rough-hewn, workaday character that provides an unfiltered glimpse into traditional Moroccan urban life. The 14th-century Medersa of Abu al-Hassan is an architectural gem that rivals anything in Fes, yet you will likely have it entirely to yourself.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION TIPS DATA
   ═══════════════════════════════════════════════════════════════ */

const navigationTips = [
  {
    number: 1,
    title: 'Use Landmarks, Not Street Names',
    description: 'Medina streets rarely have visible names or signs. Navigate by landmarks: mosques (listen for the call to prayer), fountains, notable doorways, and major gates (bab). Identify 2-3 major landmarks near your riad and memorize the route from the nearest main street.',
  },
  {
    number: 2,
    title: 'Download Offline Maps Before You Go',
    description: 'Download maps.me or the offline Google Maps layer for your destination before arriving. While GPS can be unreliable in narrow alleys, these apps are surprisingly useful for general orientation and finding your way back to main arteries. Maps.me has the best medina coverage.',
  },
  {
    number: 3,
    title: 'Follow the Flow of People',
    description: 'In the morning, people flow inward toward the market center. In the evening, they flow outward toward the gates. Follow the crowd and you will generally head in a useful direction. If an alley is empty and getting narrower, you are heading into a residential dead end.',
  },
  {
    number: 4,
    title: 'Ask Shopkeepers, Not Random Strangers',
    description: 'When asking for directions, approach someone seated at their shop &mdash; they have no motive to mislead you. Random people who approach offering directions often expect a tip or will guide you to their cousin\'s shop. Shopkeepers will generally point you in the right direction for free.',
  },
  {
    number: 5,
    title: 'Embrace Getting Lost (Intentionally)',
    description: 'The medina\'s magic lies in unexpected discoveries: a hidden courtyard, a craftsman working by candlelight, a stunning doorway you would never find on a map. Budget time to wander aimlessly. The medina is finite &mdash; you will always eventually reach a wall, a gate, or a main road.',
  },
  {
    number: 6,
    title: 'Learn the "Balak!" Warning',
    description: 'When you hear someone shouting "Balak!" (also spelled "Belek"), press yourself against the nearest wall immediately. It means a loaded donkey, handcart, or motorbike is coming through the narrow alley and needs the right of way. This is the single most important safety word in the medina.',
  },
  {
    number: 7,
    title: 'Memorize Your Riad\'s Phone Number',
    description: 'Save your accommodation\'s phone number and address (in Arabic if possible). If completely lost, any shopkeeper can call your riad, and many riads will send someone to guide you home. This is standard practice &mdash; do not feel embarrassed.',
  },
  {
    number: 8,
    title: 'Walk Uphill to Find Your Way Out',
    description: 'Most medinas are built on hillsides, with the main gates and thoroughfares at higher elevations. If disoriented, walking uphill will generally lead you toward a main road or a gate. In Fes specifically, walking downhill leads to the river (Fes el-Bali) or uphill to the major boulevards.',
  },
  {
    number: 9,
    title: 'Carry a Hotel Business Card',
    description: 'Take a business card from your riad or hotel with the address printed in Arabic. This is invaluable when asking for directions or taking a taxi. Many riads provide small maps of the immediate area &mdash; photograph these on your phone as well.',
  },
  {
    number: 10,
    title: 'Mark Your Route with Photos',
    description: 'Photograph distinctive doorways, turns, and landmarks on your way in. When you need to retrace your steps, scroll through your photo gallery in reverse. This low-tech trick works remarkably well, especially in the first days before you develop spatial awareness.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SOUK TYPES DATA
   ═══════════════════════════════════════════════════════════════ */

const soukTypes = [
  {
    name: 'Souk des Teinturiers (Dyers)',
    whatToBuy: 'Dyed fabrics, scarves, wool skeins',
    bestIn: 'Marrakech, Fes',
    tip: 'Visit early morning when freshly dyed fabrics hang overhead like colorful waterfalls.',
  },
  {
    name: 'Souk des Epices (Spices)',
    whatToBuy: 'Ras el hanout, saffron, cumin, argan oil',
    bestIn: 'Marrakech (Rahba Kedima), Fes',
    tip: 'Buy from shops with high turnover for freshness. Expect to pay 30-50 MAD for quality ras el hanout.',
  },
  {
    name: 'Souk des Tapis (Carpets)',
    whatToBuy: 'Berber rugs, kilims, Rabat carpets',
    bestIn: 'Marrakech (Criee Berbere), Fes, Rabat',
    tip: 'Never buy the first carpet you see. Compare at 3-4 shops. A good Berber rug starts around 800-1500 MAD.',
  },
  {
    name: 'Souk des Babouches (Slippers)',
    whatToBuy: 'Traditional leather slippers in every color',
    bestIn: 'Fes (near the tanneries), Marrakech',
    tip: 'Quality babouches have stitched (not glued) soles. Expect 80-200 MAD for a good pair.',
  },
  {
    name: 'Souk Seffarine (Metalworkers)',
    whatToBuy: 'Brass lanterns, tea sets, trays, copper pots',
    bestIn: 'Fes (Seffarine Square), Marrakech',
    tip: 'The rhythmic hammering is part of the experience. Custom work can be commissioned and shipped.',
  },
  {
    name: 'Souk des Potiers (Pottery)',
    whatToBuy: 'Tagine pots, plates, bowls, vases',
    bestIn: 'Fes, Safi, Tamegroute',
    tip: 'Fes blue-and-white is iconic. For cooking tagines, buy unglazed. For display, glazed is fine.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SCAMS DATA
   ═══════════════════════════════════════════════════════════════ */

const scamsToAvoid = [
  {
    name: 'The "Helpful" Guide',
    description: 'Someone approaches saying the road ahead is closed or your hotel is "this way" and leads you to a shop instead. Politely decline. If truly lost, ask a shopkeeper seated in their store.',
    severity: 'Common',
  },
  {
    name: 'The Tannery Bait-and-Switch',
    description: 'In Fes, people offer to show you the "secret" tannery viewpoint, then lead you to a leather shop with sky-high prices. Tip for the view (10-20 MAD is fine) but do not feel obligated to buy.',
    severity: 'Very Common',
  },
  {
    name: 'The Henna Grab',
    description: 'A woman approaches and grabs your hand to apply henna without asking, then demands an exorbitant payment. Keep your hands in your pockets in Jemaa el-Fnaa and firmly say "La, shukran" (No, thank you).',
    severity: 'Common',
  },
  {
    name: 'The "Free" Friendship Bracelet',
    description: 'Someone ties a bracelet on your wrist while chatting, then demands payment. Do not let strangers tie anything to you. If caught, offer 5-10 MAD and walk away.',
    severity: 'Moderate',
  },
  {
    name: 'Inflated Starting Prices',
    description: 'Not a scam per se, but first prices in tourist-heavy souks may be 5-10x the fair price. Research typical prices before shopping. Start your counter-offer at roughly 25-30% of the asking price and negotiate from there.',
    severity: 'Universal',
  },
  {
    name: 'The Restaurant Tour',
    description: 'Someone asks where you are from, engages in friendly conversation, then insists on taking you to their "family restaurant" where prices are heavily inflated. Choose your own restaurants based on reviews.',
    severity: 'Moderate',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function MedinaGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80"
            alt="Narrow alleyway in a Moroccan medina with colorful textiles and sunlight"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Medina Guide</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Navigate Like a Local
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              How to Navigate Morocco&apos;s Ancient Medinas
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Your complete survival guide to the labyrinthine old cities that are the beating
              heart of Morocco &mdash; from the world&apos;s largest car-free zone to the blue
              wonder of the Rif.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── What is a Medina ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What Is a Medina?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Living heritage, not museum pieces &mdash; Morocco&apos;s medinas are the most complete
              medieval urban environments in the world.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              The Arabic word "medina" simply means "city," but in Morocco it refers specifically to the historic
              walled centers that predate the French colonial period. These are not ruins or tourist recreations &mdash;
              they are living, breathing urban environments where hundreds of thousands of people live, work, pray,
              and conduct business exactly as their ancestors have done for centuries, within the same walls, along
              the same streets, and often in the same buildings.
            </p>
            <p>
              Morocco is home to some of the finest preserved medinas in the Islamic world. Four of them &mdash; Fes
              el-Bali, Marrakech, Tetouan, and Essaouira &mdash; are UNESCO World Heritage Sites, recognized for their
              outstanding universal value. Others, like Chefchaouen, Meknes, and Rabat, are equally captivating though
              less internationally celebrated. Together, they represent over a thousand years of Islamic urban planning,
              architectural innovation, and community life.
            </p>
            <p>
              A typical Moroccan medina is organized around a central mosque, with a hierarchy of streets radiating
              outward: wide main thoroughfares for commerce (where you find the souks), secondary streets for
              residential access, and narrow dead-end alleys (derbs) leading to private homes and riads. The
              entire system is enclosed within defensive walls pierced by monumental gates (babs). This is not
              random chaos &mdash; it is a sophisticated urban design that maximizes shade, privacy, and community
              cohesion, principles that modern urban planners are only now beginning to rediscover.
            </p>
          </div>
        </div>
      </section>

      {/* ── Medinas Ranked ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Star className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Greatest Medinas, Ranked
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our definitive ranking of eight medinas, from the overwhelming grandeur of Fes to the
              raw authenticity of Sale. Each offers a distinct character and experience.
            </p>
          </div>

          <div className="space-y-8">
            {medinasRanked.map((medina, index) => (
              <article
                key={medina.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={medina.image}
                    alt={`${medina.name} medina in ${medina.city}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white text-lg font-bold shadow-lg">
                      #{medina.rank}
                    </span>
                    {medina.unesco && (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-primary)]">
                        UNESCO
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1">
                    {medina.city} &middot; Difficulty: {medina.difficulty}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                    {medina.name}
                  </h3>
                  <p className="text-sm italic text-[var(--text-secondary)] mb-4">
                    {medina.tagline}
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                    {medina.description}
                  </p>
                  <div className="pt-4 border-t border-[var(--border-light)]">
                    <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[var(--color-primary)]" />
                      Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {medina.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <Star className="w-3 h-3 text-[var(--color-primary)] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10 Navigation Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Footprints className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              10 Survival Tips for Navigating the Medina
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tested advice from years of wandering Morocco&apos;s most bewildering alleys.
              Master these and you will navigate any medina with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {navigationTips.map((tip) => (
              <div key={tip.number} className="card-moroccan p-6 flex gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)] text-white text-lg font-bold shrink-0">
                  {tip.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Souk Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Souk Guide: What to Buy Where
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each souk specializes in a particular craft or product. Know what to expect and
              what to pay before you start bargaining.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {soukTypes.map((souk) => (
              <article key={souk.name} className="card-moroccan p-6">
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {souk.name}
                </h3>
                <div className="space-y-2 mb-3">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Buy:</span> {souk.whatToBuy}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Best in:</span> {souk.bestIn}
                  </p>
                </div>
                <div className="pt-3 border-t border-[var(--border-light)] flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--color-primary)] font-medium">{souk.tip}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety & Scams ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Safety Tips &amp; Scams to Avoid
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s medinas are overwhelmingly safe, but petty scams targeting tourists exist.
              Forewarned is forearmed &mdash; knowing these tricks makes them powerless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {scamsToAvoid.map((scam) => (
              <div key={scam.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {scam.name}
                    </h3>
                    <span className={`text-xs font-semibold ${
                      scam.severity === 'Very Common' ? 'text-red-600' :
                      scam.severity === 'Common' ? 'text-amber-600' :
                      scam.severity === 'Universal' ? 'text-red-600' : 'text-yellow-600'
                    }`}>
                      {scam.severity}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {scam.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Times to Visit ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sun className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Times to Visit the Medina
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Timing transforms the medina experience. The same alley can feel magical or miserable
              depending on when you walk it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                time: 'Early Morning (7:00-9:00)',
                icon: Sun,
                description:
                  'The absolute best time. Soft golden light filters through the alleys. Shopkeepers sweep their doorsteps and sip mint tea. Fresh bread is being delivered. The medina is calm, cool, and photogenic. You will see the real daily life of the medina without the tourist crowds. This is when professional photographers shoot.',
                verdict: 'Best for: Photography, peaceful exploration, authentic atmosphere',
              },
              {
                time: 'Golden Hour (16:00-18:00)',
                icon: Camera,
                description:
                  'As afternoon heat fades, the medina comes alive again. Warm light paints the walls in amber and gold. Locals emerge for evening shopping and socializing. The souks reach peak energy. In Marrakech, Jemaa el-Fnaa begins its nightly transformation. This is the most atmospheric time for general exploration.',
                verdict: 'Best for: Souk shopping, people-watching, Jemaa el-Fnaa',
              },
              {
                time: 'After Dark (20:00-22:00)',
                icon: Star,
                description:
                  'The medina at night is an entirely different world. Lantern light creates dramatic shadows. The crowds thin out. In Marrakech, the food stalls of Jemaa el-Fnaa are in full swing. In Fes, the medina is quiet and mysterious. Stick to lit, populated areas and main thoroughfares. Going with a guide or group is recommended after 21:00.',
                verdict: 'Best for: Atmosphere, dinner, Marrakech nightlife',
              },
            ].map((period) => (
              <div key={period.time} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <period.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {period.time}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {period.description}
                </p>
                <p className="text-xs font-semibold text-[var(--color-primary)]">
                  {period.verdict}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guided vs Self-Guided ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Guided vs. Self-Guided: Which Is Right for You?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Both approaches have genuine merits. The right choice depends on your personality,
              experience level, and what you want from the medina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-moroccan p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2.5 rounded-xl bg-green-100">
                  <ThumbsUp className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  With a Guide
                </h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Essential for first-time visits to Fes el-Bali &mdash; the complexity is genuinely overwhelming without local knowledge.',
                  'Access to hidden workshops, rooftop terraces, and private homes that independent visitors simply cannot find.',
                  'Protection from common scams and aggressive touts who back off when you are with a guide.',
                  'Deep historical context and storytelling that transforms sightseeing into understanding.',
                  'Invaluable for medina shopping &mdash; a good guide helps you get fair prices.',
                ].map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{pro}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-[var(--border-light)]">
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Cost:</span> Official guides 300-500 MAD for half day, 500-800 MAD for full day.
                  Always use licensed guides (they carry official ID cards).
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex p-2.5 rounded-xl bg-blue-100">
                  <Compass className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  Self-Guided
                </h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Complete freedom to linger, wander, and follow your curiosity into unexpected discoveries.',
                  'More spontaneous encounters with locals &mdash; people are more likely to invite you for tea when you are alone.',
                  'No time pressure &mdash; you can spend two hours in a single workshop if the mood strikes.',
                  'Significantly less expensive, especially on multi-day visits.',
                  'A deeper sense of personal accomplishment and adventure.',
                ].map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{pro}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-[var(--border-light)]">
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Best for:</span> Essaouira, Chefchaouen, Rabat (easy to navigate).
                  In Fes, do one guided day first, then explore independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accessibility ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Accessibility className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Accessibility in Medinas: An Honest Assessment
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              We believe in transparency. Medinas present significant challenges for visitors with
              mobility impairments, but options do exist.
            </p>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-[15px]">
              <p>
                Moroccan medinas were built centuries before accessibility was a consideration, and the reality
                is that they present serious obstacles for wheelchair users and people with significant mobility
                limitations. Surfaces are uneven cobblestone or packed earth, streets include steep gradients,
                steps are ubiquitous, and passages can be extremely narrow. There are no ramps, elevators, or
                accessible public facilities within most medina walls.
              </p>
              <p>
                That said, visitors with limited mobility are not entirely excluded. The main arteries of
                larger medinas (Marrakech, Essaouira, Rabat) are relatively flat and wide enough for careful
                navigation. Jemaa el-Fnaa in Marrakech is a large, mostly flat open space. The Essaouira medina,
                with its grid-like layout and flat terrain, is the most accessible option. Some riads have ground-floor
                rooms, though most traditional riads involve stairs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-[var(--border-light)]">
              {[
                { label: 'Most Accessible', value: 'Essaouira &mdash; flat, grid layout, wide streets', color: 'green' },
                { label: 'Moderately Accessible', value: 'Marrakech &mdash; main streets passable, souks narrower', color: 'yellow' },
                { label: 'Challenging', value: 'Fes, Chefchaouen &mdash; steep hills, very narrow alleys', color: 'red' },
                { label: 'Recommendation', value: 'Hire a local assistant (150-250 MAD/day) for personalized support', color: 'blue' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className={`w-3 h-3 rounded-full shrink-0 mt-1.5 ${
                    item.color === 'green' ? 'bg-green-500' :
                    item.color === 'yellow' ? 'bg-yellow-500' :
                    item.color === 'red' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{item.label}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore the Medina?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Whether you choose the overwhelming labyrinth of Fes or the gentle charm of Essaouira,
            Morocco&apos;s medinas promise the adventure of a lifetime. Take a deep breath, step
            through the gate, and let the ancient city work its magic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Book a Medina Tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

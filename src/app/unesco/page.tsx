import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Landmark,
  MapPin,
  Clock,
  Ticket,
  Calendar,
  Sun,
  Camera,
  Shield,
  Music,
  TreePine,
  Globe,
  Route,
  Star,
  BookOpen,
  ArrowRight,
  Info,
  CheckCircle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'UNESCO World Heritage Sites in Morocco | Complete Guide | CityGuide',
  description:
    'Explore all 9 UNESCO World Heritage Sites in Morocco, from the Medina of Fes to modern Rabat. Includes visiting tips, hours, fees, tentative list sites, intangible heritage, and a 14-day UNESCO tour itinerary.',
  keywords: [
    'UNESCO Morocco',
    'World Heritage Sites Morocco',
    'Medina of Fes',
    'Ait-Ben-Haddou',
    'Volubilis',
    'Medina of Marrakech',
    'Meknes',
    'Tetouan',
    'Essaouira',
    'El Jadida',
    'Rabat Modern Capital',
    'Morocco UNESCO tour',
    'Gnaoua intangible heritage',
    'Morocco conservation',
  ],
  openGraph: {
    title: 'UNESCO World Heritage Sites in Morocco - CityGuide',
    description:
      'Complete guide to all 9 UNESCO World Heritage Sites in Morocco with visiting tips, fees, hours, and a 14-day itinerary covering every site.',
    url: 'https://cityguide.ma/unesco',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Ait-Ben-Haddou kasbah UNESCO World Heritage Site in Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/unesco' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://cityguide.ma/unesco',
  name: 'UNESCO World Heritage Sites in Morocco',
  description:
    'Complete guide to all 9 UNESCO World Heritage Sites in Morocco including visiting information, tentative list sites, intangible heritage, and suggested tour itineraries.',
  url: 'https://cityguide.ma/unesco',
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
      { '@type': 'ListItem', position: 2, name: 'UNESCO World Heritage Sites', item: 'https://cityguide.ma/unesco' },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   UNESCO WORLD HERITAGE SITES DATA
   ═══════════════════════════════════════════════════════════════ */

const heritageSites = [
  {
    name: 'Medina of Fes',
    year: 1981,
    criteria: 'Cultural (ii)(v)',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    description:
      'Founded in the 9th century, the Medina of Fes is the world&apos;s largest car-free urban area and home to the oldest continuously operating university on Earth, al-Qarawiyyin (859 CE). With over 9,000 labyrinthine alleyways, 300 mosques, and some of the finest examples of Marinid architecture anywhere, Fes represents the living heart of Moroccan civilization. The leather tanneries, dating back nearly a millennium, still operate using medieval techniques.',
    whyItMatters:
      'Fes is an outstanding example of a medieval city that has preserved its urban fabric, buildings, and way of life virtually intact. It is a living museum of Islamic civilization and a beacon of traditional craftsmanship that has influenced art and architecture across North Africa and beyond.',
    visitingTips: 'Hire a licensed guide for your first visit. The medina is genuinely labyrinthine. Visit the tanneries in the morning when the light is best and wear comfortable shoes for cobblestones.',
    hours: 'Open 24/7 (medina streets). Monuments: 9:00-17:00.',
    fees: 'Medina: Free. Bou Inania Madrasa: 20 MAD. Tannery viewing terraces: free (shop purchase expected).',
    bestTime: 'March-May or September-November',
  },
  {
    name: 'Medina of Marrakech',
    year: 1985,
    criteria: 'Cultural (i)(ii)(iv)(v)',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80',
    description:
      'The Red City&apos;s medina is a sensory masterpiece centered on Jemaa el-Fnaa, the world&apos;s most famous public square and a UNESCO-recognized space of intangible cultural heritage in its own right. Within the rose-tinted walls lie the Koutoubia Mosque, Bahia Palace, Saadian Tombs, and Ben Youssef Madrasa, alongside miles of bustling souks selling everything from spices to handcrafted lanterns.',
    whyItMatters:
      'Marrakech was the capital of multiple dynasties and represents a masterful fusion of Almoravid, Almohad, and Saadian architectural traditions. Jemaa el-Fnaa is an extraordinary living tradition of oral performance, storytelling, and community gathering that has no parallel anywhere on Earth.',
    visitingTips: 'Visit Jemaa el-Fnaa at sunset when the food stalls and performers come alive. Book Bahia Palace first thing in the morning to avoid crowds. Bargain firmly but respectfully in the souks.',
    hours: 'Jemaa el-Fnaa: 24/7. Palaces and monuments: 9:00-17:00 (18:00 in summer).',
    fees: 'Bahia Palace: 70 MAD. Saadian Tombs: 70 MAD. Ben Youssef Madrasa: 50 MAD. El Badi Palace: 70 MAD.',
    bestTime: 'October-April (summers are extremely hot)',
  },
  {
    name: 'Ksar of Ait-Ben-Haddou',
    year: 1987,
    criteria: 'Cultural (iv)(v)',
    image: 'https://images.unsplash.com/photo-1560095633-6858e1e1e682?w=800&q=80',
    description:
      'This spectacular fortified village (ksar) along the former caravan route between the Sahara and Marrakech is a stunning example of southern Moroccan earthen architecture. Rising dramatically from the banks of the Ounila River, the collection of kasbahs, towers, and granaries built from pise (rammed earth) has served as a backdrop for dozens of Hollywood films including Gladiator, Game of Thrones, and Lawrence of Arabia.',
    whyItMatters:
      'Ait-Ben-Haddou is the finest surviving example of the ksar, a traditional pre-Saharan habitat type that represents a unique form of communal architecture developed over centuries to protect families and their goods along the trans-Saharan trade routes.',
    visitingTips: 'Cross the river via stepping stones (or the bridge) and climb to the top for panoramic views. Early morning light is ideal for photography. A few families still live within the walls.',
    hours: 'Open 24/7 (outdoor site). Best visited during daylight hours.',
    fees: 'Free entry. Local guides available for 100-150 MAD.',
    bestTime: 'March-May or October-November',
  },
  {
    name: 'Historic City of Meknes',
    year: 1996,
    criteria: 'Cultural (iv)',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    description:
      'Sultan Moulay Ismail&apos;s imperial capital is a monument to 17th-century ambition. Often called "the Versailles of Morocco," Meknes features monumental gates like Bab Mansour (one of the finest in North Africa), vast royal granaries and stables designed to provision 12,000 horses, underground prisons, and extensive palace ruins. The medina retains an authenticity less touched by tourism than Fes or Marrakech.',
    whyItMatters:
      'Meknes blends Islamic and European architectural styles in a harmonious and striking way. It demonstrates the power and vision of Moulay Ismail, who transformed a provincial garrison town into a capital rivaling the greatest cities of 17th-century Europe.',
    visitingTips: 'Start at Bab Mansour, the iconic gate. The Heri es-Souani granaries are spectacular. Meknes is much less crowded than Fes or Marrakech and makes an excellent base for visiting Volubilis (30 km away).',
    hours: 'Monuments: 9:00-18:00. Mausoleum of Moulay Ismail: 9:00-12:00, 15:00-18:00.',
    fees: 'Heri es-Souani: 10 MAD. Moulay Ismail Mausoleum: Free. Dar Jamai Museum: 20 MAD.',
    bestTime: 'March-May or September-November',
  },
  {
    name: 'Archaeological Site of Volubilis',
    year: 1997,
    criteria: 'Cultural (ii)(iii)(iv)(vi)',
    image: 'https://images.unsplash.com/photo-1548017544-09dbc9fb99f6?w=800&q=80',
    description:
      'The best-preserved Roman ruins in North Africa, Volubilis was the capital of the Roman province of Mauretania Tingitana. Founded in the 3rd century BCE, the site features remarkably intact mosaics, a triumphal arch, a basilica, and the remains of olive presses that speak to the city&apos;s agricultural wealth. The ruins are set against a dramatic backdrop of rolling hills and farmland near the holy town of Moulay Idriss Zerhoun.',
    whyItMatters:
      'Volubilis is an exceptionally well-preserved example of a large Roman colonial city on the fringes of the empire. Its mosaics, inscriptions, and monuments provide invaluable insights into the cultural interchange between Roman and indigenous Berber civilizations.',
    visitingTips: 'Visit early morning or late afternoon for the best light and fewer tour buses. Allow 2-3 hours. Bring water and sun protection as there is no shade. Combine with a visit to the hillside pilgrimage town of Moulay Idriss Zerhoun.',
    hours: '8:00-sunset (approximately 18:00 in winter, 19:30 in summer).',
    fees: '70 MAD. Guided tours available for 120-200 MAD.',
    bestTime: 'March-May or September-November',
  },
  {
    name: 'Medina of Tetouan',
    year: 2000,
    criteria: 'Cultural (ii)(iv)(v)',
    image: 'https://images.unsplash.com/photo-1553522991-71439aa58e57?w=800&q=80',
    description:
      'Tetouan&apos;s medina is the most Andalusian of Morocco&apos;s old cities, built largely by Moorish refugees expelled from Spain in the 15th and 16th centuries. The whitewashed houses, wrought-iron balconies, and intimate plazas are distinctly Spanish in character, while the layout follows classic Islamic urban planning. The Royal Palace, artisan workshops, and the mellah (Jewish quarter) add further layers of cultural richness.',
    whyItMatters:
      'Tetouan is a rare, complete, and well-preserved example of an Andalusian-influenced Moroccan medina. It served as a crucial point of cultural exchange between the Iberian Peninsula and North Africa over centuries and embodies this cross-Mediterranean dialogue in its architecture, crafts, and urban design.',
    visitingTips: 'Visit the ethnographic museum in the former bastion for context before exploring. The medina is much quieter and less commercial than Marrakech or Fes. Try the local specialty, kaab el ghzal (gazelle horn pastries).',
    hours: 'Medina: 24/7. Museums: 9:00-16:30, closed Tuesdays.',
    fees: 'Medina: Free. Archaeological Museum: 10 MAD. Ethnographic Museum: 10 MAD.',
    bestTime: 'April-June or September-October',
  },
  {
    name: 'Medina of Essaouira (formerly Mogador)',
    year: 2001,
    criteria: 'Cultural (ii)(iv)',
    image: 'https://images.unsplash.com/photo-1558383817-e5a90240c671?w=800&q=80',
    description:
      'Essaouira is a masterpiece of 18th-century military architecture and urban planning. Designed by French architect Theodore Cornut for Sultan Mohammed III, the fortified port town blends European military engineering with North African urban traditions. The blue fishing boats bobbing in the harbor, the Portuguese-era ramparts (skala), the whitewashed houses with blue shutters, and the lively arts scene make it one of Morocco&apos;s most photogenic and relaxed cities.',
    whyItMatters:
      'Essaouira is an outstanding and early example of a fortified port city built according to the principles of European military architecture, adapted to a North African context. It was a major international trading port linking Morocco to the wider world, hosting Moroccan, European, and Jewish communities in remarkable coexistence.',
    visitingTips: 'Walk the ramparts (skala de la ville) at sunset for dramatic ocean views. The Sunday fish market is spectacular. Essaouira is famous for strong Atlantic winds, making it ideal for wind and kite surfing.',
    hours: 'Medina: 24/7. Skala de la Ville: 9:00-18:00. Sidi Mohammed Ben Abdallah Museum: 9:00-18:00.',
    fees: 'Skala: 10 MAD. Museum: 10 MAD.',
    bestTime: 'April-October (wind is constant; summer is warmest)',
  },
  {
    name: 'Portuguese City of Mazagan (El Jadida)',
    year: 2004,
    criteria: 'Cultural (ii)(iv)',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=800&q=80',
    description:
      'The Portuguese fortification of Mazagan, now part of the city of El Jadida, was built as a colonial trading post in the early 16th century. The standout attraction is the hauntingly beautiful Gothic cistern, a vast underground chamber with vaulted ceilings reflected in a shallow mirror of water on the floor, famously used as a filming location for Orson Welles&apos; Othello. The star-shaped bastions, sea gate, and Church of the Assumption further illustrate the cultural exchange between Portuguese and Moroccan traditions.',
    whyItMatters:
      'Mazagan is an outstanding example of the interchange of cultural influences between European (Portuguese) and Moroccan civilizations in the early modern period. The fortification reflects this exchange in its architecture, technology, and town planning.',
    visitingTips: 'The Gothic cistern is unforgettable; visit when a thin layer of water covers the floor for the mirror effect. The ramparts offer ocean views. El Jadida is easily reached as a day trip from Casablanca (100 km).',
    hours: 'Cistern: 9:00-13:00, 15:00-18:30. Ramparts: 24/7.',
    fees: 'Cistern: 10 MAD.',
    bestTime: 'Year-round; spring and autumn are most pleasant',
  },
  {
    name: 'Rabat, Modern Capital and Historic City',
    year: 2012,
    criteria: 'Cultural (ii)(iv)',
    image: 'https://images.unsplash.com/photo-1577147443647-81856d5151af?w=800&q=80',
    description:
      'Morocco&apos;s capital earned its UNESCO designation for the remarkable way it blends historic Islamic heritage with 20th-century French colonial urban planning. The inscription encompasses the Hassan Tower and its unfinished 12th-century mosque, the Almohad walls, the Chellah necropolis built on Roman ruins, the medina, the kasbah of the Udayas with its Andalusian garden, and the modern Art Deco ville nouvelle designed during the French Protectorate.',
    whyItMatters:
      'Rabat is a shared cultural property that demonstrates a creative dialogue between the Arab-Muslim past and Western modernism. The city represents one of the most ambitious and successful urban planning projects of the 20th century, where historic monuments were preserved alongside bold modern development.',
    visitingTips: 'Start with the Kasbah of the Udayas for stunning views over the river. Visit the Chellah at sunset when storks nest in the ruins. The Mohammed V Mausoleum is free and beautifully maintained. Walk the palm-lined Mohammed V Avenue to experience the Art Deco quarter.',
    hours: 'Hassan Tower: 8:30-18:00. Chellah: 8:30-18:30. Kasbah of the Udayas: 24/7 (garden: 8:00-18:00).',
    fees: 'Chellah: 70 MAD. Mohammed V Mausoleum: Free. Hassan Tower area: Free.',
    bestTime: 'March-June or September-November',
  },
];

/* ═══════════════════════════════════════════════════════════════
   TENTATIVE LIST SITES DATA
   ═══════════════════════════════════════════════════════════════ */

const tentativeList = [
  { name: 'Talassemtane National Park', year: 2023, region: 'Rif Mountains' },
  { name: 'Ksour and Kasbahs of the Draa Valley', year: 1995, region: 'Ouarzazate & Zagora' },
  { name: 'Agadir Oufella', year: 2023, region: 'Agadir' },
  { name: 'Igherm and the Granaries of the Anti-Atlas', year: 2023, region: 'Anti-Atlas' },
  { name: 'Historic Ensemble of Azemmour', year: 2023, region: 'El Jadida Province' },
  { name: 'Ifrane National Park', year: 1998, region: 'Middle Atlas' },
  { name: 'Tazzeka National Park', year: 1998, region: 'Middle Atlas' },
  { name: 'Rock Art of the Moroccan High Atlas', year: 1997, region: 'High Atlas' },
  { name: 'Atlas and Sub-Atlas Agro-Pastoral Cultural Landscape', year: 2023, region: 'High Atlas' },
  { name: 'Tinnighi Megalithic Site', year: 2023, region: 'Eastern Morocco' },
  { name: 'Historic Centre of Taroudant', year: 2023, region: 'Souss' },
  { name: 'Chefchaouen Medina', year: 2023, region: 'Rif Mountains' },
  { name: 'Dar el-Makhzen Royal Palace Complex, Fes', year: 2023, region: 'Fes' },
];

/* ═══════════════════════════════════════════════════════════════
   INTANGIBLE CULTURAL HERITAGE DATA
   ═══════════════════════════════════════════════════════════════ */

const intangibleHeritage = [
  {
    name: 'Cultural Space of Jemaa el-Fnaa',
    year: 2008,
    icon: BookOpen,
    description:
      'The oral traditions and cultural practices of Marrakech&apos;s central square, where storytellers, musicians, snake charmers, herbalists, and henna artists have gathered daily for centuries. Inscribed as a Masterpiece of Oral and Intangible Heritage in 2001, then incorporated onto the Representative List in 2008.',
  },
  {
    name: 'Gnaoua Music and Ceremonies',
    year: 2019,
    icon: Music,
    description:
      'A profound spiritual and artistic tradition rooted in Sub-Saharan African, Berber, and Sufi practices. Gnaoua music features the guembri lute, metal qraqeb castanets, and all-night trance ceremonies (lilas) used for healing and spiritual communion. The annual Gnaoua World Music Festival in Essaouira celebrates this living tradition.',
  },
  {
    name: 'Argan Tree Knowledge and Practices',
    year: 2014,
    icon: TreePine,
    description:
      'The traditional knowledge, know-how, and practices associated with the argan tree (Argania spinosa), endemic to Morocco. Women&apos;s cooperatives have preserved the ancient techniques of extracting argan oil for culinary, cosmetic, and medicinal uses, sustaining both livelihoods and the UNESCO-designated Argan Biosphere Reserve.',
  },
  {
    name: 'Cherry Festival of Sefrou',
    year: 2012,
    icon: Star,
    description:
      'An annual celebration held in June in the town of Sefrou near Fes, featuring the crowning of a Cherry Queen, traditional music, parades, and community gatherings that affirm the cultural identity of this ancient town at the foot of the Middle Atlas mountains.',
  },
  {
    name: 'Mediterranean Diet',
    year: 2013,
    icon: Globe,
    description:
      'Morocco is one of the countries recognized for the Mediterranean diet as a shared cultural heritage. The Moroccan expression of this tradition emphasizes communal meals, seasonal ingredients, traditional cooking methods like the tagine and couscous, and the social rituals around food that bind families and communities.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   UNESCO TOUR ITINERARY DATA
   ═══════════════════════════════════════════════════════════════ */

const tourItinerary = [
  { days: 'Days 1-2', city: 'Rabat', sites: 'Hassan Tower, Chellah, Kasbah of the Udayas, Mohammed V Mausoleum', notes: 'Start in the capital. Explore the UNESCO site at a relaxed pace.' },
  { days: 'Day 3', city: 'Meknes', sites: 'Bab Mansour, Heri es-Souani, Moulay Ismail Mausoleum', notes: 'Drive 2 hours to Meknes. Half day exploring the imperial city.' },
  { days: 'Day 4', city: 'Volubilis & Fes', sites: 'Volubilis Roman ruins, transfer to Fes', notes: 'Morning at Volubilis. Afternoon drive to Fes (1 hour).' },
  { days: 'Days 5-6', city: 'Fes', sites: 'Fes Medina, al-Qarawiyyin area, Bou Inania, tanneries, Marinid Tombs', notes: 'Two full days to immerse in the world&apos;s largest car-free medina.' },
  { days: 'Day 7', city: 'Tetouan', sites: 'Medina of Tetouan, Ethnographic Museum', notes: 'Drive 4 hours north. Discover the Andalusian-influenced medina.' },
  { days: 'Day 8', city: 'Tetouan to Marrakech', sites: 'Travel day via Rabat (fly or drive)', notes: 'Transfer to Marrakech. Evening walk in Jemaa el-Fnaa.' },
  { days: 'Days 9-10', city: 'Marrakech', sites: 'Jemaa el-Fnaa, Koutoubia, Bahia Palace, Saadian Tombs, souks', notes: 'Two days exploring the Red City&apos;s UNESCO medina and monuments.' },
  { days: 'Day 11', city: 'Ait-Ben-Haddou', sites: 'Ksar of Ait-Ben-Haddou', notes: 'Drive over the High Atlas via the Tizi n&apos;Tichka pass (4 hours). Overnight near the ksar.' },
  { days: 'Day 12', city: 'Essaouira', sites: 'Medina of Essaouira, ramparts, port, souks', notes: 'Drive west to the Atlantic coast (5 hours). Explore the fortified port city.' },
  { days: 'Day 13', city: 'El Jadida', sites: 'Portuguese Cistern, ramparts, fortification', notes: 'Drive south along the coast (3 hours). Visit the Gothic cistern.' },
  { days: 'Day 14', city: 'Casablanca / Departure', sites: 'Optional: Hassan II Mosque', notes: 'Drive to Casablanca (1.5 hours). Depart from Mohammed V Airport.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function UnescoPage() {
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
            src="https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1600&q=80"
            alt="Ait-Ben-Haddou UNESCO World Heritage Site at sunset"
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
            <span className="text-white">UNESCO World Heritage Sites</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Cultural &amp; Natural Heritage
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              UNESCO World Heritage Sites in Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Nine extraordinary sites recognized by UNESCO for their outstanding universal value &mdash;
              spanning ancient Roman ruins, medieval medinas, fortified kasbahs, and a modern capital.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco is home to nine UNESCO World Heritage Sites that collectively tell the story of a
              civilization shaped by Berber, Arab, Andalusian, and European influences over thousands of
              years. From the ancient Roman city of Volubilis to the modern, planned capital of Rabat, each
              site offers a unique window into the cultural forces that have made Morocco one of the
              world&apos;s most fascinating countries.
            </p>
            <p>
              Beyond these inscribed sites, Morocco has 13 properties on the UNESCO Tentative List awaiting
              consideration, and five elements recognized as Intangible Cultural Heritage &mdash; including
              the extraordinary oral traditions of Jemaa el-Fnaa and the spiritual music of the Gnaoua.
              This guide covers everything you need to plan a comprehensive UNESCO tour of Morocco.
            </p>
          </div>
        </div>
      </section>

      {/* ── The 9 World Heritage Sites ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s 9 World Heritage Sites
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each site has been recognized for its outstanding universal value. Explore them in
              chronological order of inscription, from 1981 to 2012.
            </p>
          </div>

          <div className="space-y-12">
            {heritageSites.map((site, index) => (
              <article key={site.name} className="scroll-mt-24">
                <div className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Image */}
                  <div className="relative w-full lg:w-2/5 h-72 lg:h-auto shrink-0">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[var(--color-accent)] text-[var(--color-primary-900)]">
                        <Calendar className="w-3 h-3" /> Inscribed {site.year}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-[var(--color-primary)] font-bold text-lg font-[family-name:var(--font-display)]">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1">
                      {site.criteria}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                      {site.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                      {site.description}
                    </p>

                    {/* Why It Matters */}
                    <div className="bg-[var(--color-primary)]/5 rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-wide mb-1 flex items-center gap-2">
                        <Star className="w-4 h-4" /> Why It Matters
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {site.whyItMatters}
                      </p>
                    </div>

                    {/* Practical Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[var(--text-primary)]">Tips: </span>
                          <span className="text-[var(--text-secondary)]">{site.visitingTips}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[var(--text-primary)]">Hours: </span>
                          <span className="text-[var(--text-secondary)]">{site.hours}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Ticket className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[var(--text-primary)]">Fees: </span>
                          <span className="text-[var(--text-secondary)]">{site.fees}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sun className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[var(--text-primary)]">Best Time: </span>
                          <span className="text-[var(--text-secondary)]">{site.bestTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tentative List ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Clock className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tentative List &mdash; Future Heritage Sites
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco has submitted 13 sites to the UNESCO Tentative List, the first step toward
              full World Heritage inscription. These represent the country&apos;s diverse natural
              and cultural patrimony waiting for recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {tentativeList.map((site) => (
              <div key={site.name} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/10 shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                      {site.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      {site.region} &middot; Submitted {site.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intangible Cultural Heritage ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <Music className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Intangible Cultural Heritage
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Beyond monuments and sites, UNESCO also recognizes the living traditions, oral expressions,
              performing arts, and cultural practices that define Morocco&apos;s identity.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {intangibleHeritage.map((item) => (
              <div key={item.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 shrink-0">
                    <item.icon className="w-6 h-6 text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                        {item.name}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                        Inscribed {item.year}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNESCO Map ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              UNESCO Map of Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s 9 World Heritage Sites are spread across the country, from the northern
              city of Tetouan to the desert edge at Ait-Ben-Haddou.
            </p>
          </div>

          <div className="card-moroccan p-6 md:p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Northern Sites */}
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)]" /> Northern Morocco
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Rabat', desc: 'Modern Capital (2012)' },
                    { name: 'Meknes', desc: 'Imperial City (1996)' },
                    { name: 'Volubilis', desc: 'Roman Ruins (1997)' },
                    { name: 'Fes', desc: 'Medieval Medina (1981)' },
                    { name: 'Tetouan', desc: 'Andalusian Medina (2000)' },
                  ].map((item) => (
                    <li key={item.name} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--text-primary)]">{item.name}</span> &mdash; {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Central / Coast */}
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)]" /> Atlantic Coast
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: 'El Jadida', desc: 'Portuguese Mazagan (2004)' },
                    { name: 'Essaouira', desc: 'Mogador Port (2001)' },
                  ].map((item) => (
                    <li key={item.name} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--text-primary)]">{item.name}</span> &mdash; {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Southern Sites */}
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-secondary)]" /> Central &amp; South
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Marrakech', desc: 'Red City Medina (1985)' },
                    { name: 'Ait-Ben-Haddou', desc: 'Fortified Ksar (1987)' },
                  ].map((item) => (
                    <li key={item.name} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--text-primary)]">{item.name}</span> &mdash; {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--border-light)]">
              <p className="text-sm text-[var(--text-muted)] text-center">
                <Camera className="w-4 h-4 inline-block mr-1" />
                All 9 sites can be visited in a 14-day itinerary. The furthest distance between any
                two sites is approximately 600 km (Tetouan to Ait-Ben-Haddou).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14-Day UNESCO Tour Itinerary ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Route className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              14-Day UNESCO Tour Itinerary
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A carefully designed route covering all 9 World Heritage Sites, minimizing backtracking
              while allowing time to absorb the richness of each destination.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {tourItinerary.map((day, index) => (
              <div key={day.days} className="card-moroccan p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm font-[family-name:var(--font-display)]">
                      {index + 1}
                    </span>
                    <div className="sm:hidden">
                      <span className="text-sm font-bold text-[var(--color-primary)]">{day.days}</span>
                      <span className="text-[var(--text-primary)] font-bold block">{day.city}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="hidden sm:flex items-center gap-3 mb-1">
                      <span className="text-sm font-bold text-[var(--color-primary)]">{day.days}</span>
                      <span className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                        {day.city}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-1">
                      <span className="font-semibold text-[var(--text-primary)]">Sites: </span>{day.sites}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">{day.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Route className="w-4 h-4" /> Browse All Itineraries
            </Link>
          </div>
        </div>
      </section>

      {/* ── Conservation Efforts ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-green)]/10 mb-4">
              <Shield className="w-6 h-6 text-[var(--color-green)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Conservation &amp; Preservation Efforts
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Protecting Morocco&apos;s cultural heritage is an ongoing partnership between the government,
              UNESCO, international agencies, and local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Fes Medina Rehabilitation',
                description:
                  'A multi-decade project supported by UNESCO, the World Bank, and the Aga Khan Trust for Culture to restore crumbling historic buildings, improve infrastructure, and revitalize traditional crafts within the medina while maintaining its authenticity.',
              },
              {
                title: 'Ait-Ben-Haddou Earthen Architecture',
                description:
                  'Ongoing efforts to preserve traditional pise (rammed earth) construction techniques and train local craftspeople in earthen building conservation, supported by the CRAterre international center for earthen architecture.',
              },
              {
                title: 'Volubilis Archaeological Program',
                description:
                  'Continuous archaeological excavation and conservation of the Roman-era mosaics, structures, and inscriptions, supported by Moroccan and international archaeological missions. A new visitor center and improved site management plan were implemented in recent years.',
              },
              {
                title: 'Intangible Heritage Safeguarding',
                description:
                  'Programs to document and transmit Gnaoua music, Jemaa el-Fnaa oral traditions, and traditional argan oil practices to younger generations, including apprenticeship programs, festivals, and digital archives.',
              },
              {
                title: 'Argan Biosphere Reserve',
                description:
                  'A UNESCO-designated biosphere reserve protecting the 2.5 million hectares of argan forest in southwestern Morocco, supporting women&apos;s cooperatives and sustainable harvesting practices.',
              },
              {
                title: 'Royal Initiative for Heritage',
                description:
                  'Under King Mohammed VI, Morocco has launched major programs to restore historic monuments, develop heritage tourism infrastructure, and integrate conservation with economic development in heritage cities.',
              },
            ].map((effort) => (
              <div key={effort.title} className="card-moroccan p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                      {effort.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {effort.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Explore Morocco&apos;s World Heritage
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Plan your journey through 3,000 years of history. Visit all nine UNESCO sites with
            our curated itineraries and expert local guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Route className="w-4 h-4" /> Plan Your Tour
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Book a Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

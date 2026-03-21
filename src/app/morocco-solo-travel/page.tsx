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
  BookOpen,
  MessageCircleQuestion,
  Compass,
  Globe,
  Bed,
  Coffee,
  Camera,
  MessageSquare,
  Phone,
  Map,
  Landmark,
  Shield,
  UserCheck,
  HandCoins,
  Navigation,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-solo-travel`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Solo Travel in Morocco 2026 | Safety, Budget & Planning Guide',
  description:
    'Complete guide to solo travel in Morocco. Best cities for solo travelers, female solo travel safety tips, budget hostels from 80 MAD, group tours, meeting other travelers, scam awareness, and practical planning advice for independent Morocco trips.',
  keywords: [
    'solo travel Morocco',
    'Morocco solo travel guide',
    'solo female travel Morocco',
    'is Morocco safe for solo travelers',
    'solo travel Morocco safety',
    'best cities solo travel Morocco',
    'Morocco hostels solo travelers',
    'budget solo travel Morocco',
    'meeting travelers Morocco',
    'group tours Morocco solo',
    'Morocco solo travel tips 2026',
    'backpacking Morocco alone',
    'solo travel Marrakech',
    'Morocco travel safety tips',
    'female solo travel Morocco safe',
    'Morocco solo itinerary',
    'solo travel North Africa',
  ],
  openGraph: {
    title: 'Solo Travel in Morocco 2026 | Safety, Budget & Planning Guide',
    description:
      'Everything you need to plan a solo trip to Morocco. Best cities, safety advice, budget hostels from 80 MAD, group tours for solo travelers, scam awareness, and tips for making friends on the road.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Solo traveler walking through a narrow alley in a Moroccan medina with colorful walls and hanging lanterns',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solo Travel Morocco 2026 | Complete Safety & Planning Guide',
    description:
      'Best cities, safety tips, budget hostels, group tours, scam awareness, and practical advice for solo travelers in Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Is Morocco safe for solo travelers?',
    a: 'Morocco is generally safe for solo travelers who take standard precautions. Millions of solo travelers visit each year without incident. Stick to well-traveled areas, stay aware of your surroundings in crowded medinas, and avoid walking alone in unlit areas late at night. Petty theft and aggressive touts are more common concerns than violent crime. Cities like Essaouira, Chefchaouen, and Merzouga are particularly relaxed.',
  },
  {
    q: 'Can women travel solo in Morocco safely?',
    a: 'Yes, thousands of women travel solo in Morocco every year. Unwanted attention from men is the most frequently reported issue, but it rarely goes beyond verbal remarks. Strategies that help: dress modestly (covering shoulders and knees), wear sunglasses to avoid eye contact, walk with purpose, and say "la shukran" (no thank you) firmly. Staying in female dorms at hostels and joining group tours are good ways to find travel companions.',
  },
  {
    q: 'How much does a solo trip to Morocco cost per day?',
    a: 'Budget solo travelers can get by on from 300 MAD per day (roughly 30 USD). That covers a hostel dorm bed (from 80 MAD), street food meals (from 25 MAD each), and local transport. Mid-range solo travelers spending from 600 MAD per day can afford private riad rooms, sit-down restaurant meals, and the occasional guided excursion. Seasonal pricing can change during peak tourist months.',
  },
  {
    q: 'What are the best cities in Morocco for solo travelers?',
    a: 'Marrakech has the largest hostel scene and most group tour options. Essaouira is laid-back, walkable, and easy to navigate alone. Chefchaouen is small and friendly with a tight-knit backpacker community. Fes rewards solo exploration through its medina. Taghazout is ideal for solo surfers. Merzouga connects desert camp travelers into groups naturally.',
  },
  {
    q: 'How do I meet other travelers in Morocco?',
    a: 'Hostels with communal areas are the easiest way to meet people. Many hostels in Marrakech, Fes, and Essaouira organize group dinners, rooftop hangouts, and shared excursions. Sahara desert tours starting from Marrakech or Fes group solo travelers together. Surf camps in Taghazout and cooking classes also attract solo visitors. Apps like Hostelworld and Couchsurfing Hangouts help find travel companions.',
  },
  {
    q: 'Should I book tours in advance or arrange them in Morocco?',
    a: 'For popular experiences like Sahara desert tours, book at least a few days ahead during peak season (October to April). For city walking tours and day trips, you can often arrange them through your hostel the day before. Booking through your accommodation typically gets better prices than booking through online platforms, and the hostel staff can vouch for the tour operator.',
  },
  {
    q: 'What scams should solo travelers watch out for in Morocco?',
    a: 'The most common are: unofficial guides who lead you through the medina and demand payment, carpet shop detours disguised as sightseeing, taxi drivers refusing to use the meter, and people offering "free" henna tattoos then demanding high prices. Always agree on prices before accepting any service. Use GPS navigation to avoid needing guides in the medina.',
  },
  {
    q: 'Do I need to speak French or Arabic to travel solo in Morocco?',
    a: 'No, but a few phrases help enormously. In tourist areas, many Moroccans speak English, French, Spanish, or a combination. In rural areas and small towns, French is more useful than English. Learn basic Darija (Moroccan Arabic) phrases like "shukran" (thank you), "bslama" (goodbye), and "bshhal" (how much). Locals appreciate any effort at their language and respond with warmth.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Solo Travel in Morocco 2026 | Safety, Budget & Planning Guide',
  description:
    'Complete guide to solo travel in Morocco covering safety, best cities, budget tips, hostels, group tours, female solo travel advice, scam awareness, and practical planning.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Solo Travel Morocco', item: PAGE_URL },
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
   DATA: BEST CITIES FOR SOLO TRAVELERS
   ================================================================ */

const soloCities = [
  {
    name: 'Marrakech',
    icon: Landmark,
    vibe: 'High energy, sensory overload, never boring',
    hostelScene: 'Largest in Morocco -- 40+ hostels in the medina and Gueliz',
    dailyBudget: 'From 300 MAD',
    bestFor: 'First-time solo travelers who want social hostels, cooking classes, and easy access to desert tours',
    tip: 'Stay near Jemaa el-Fnaa for walkability, but book a hostel with a rooftop terrace -- that is where the socializing happens.',
    safety: 'Touts are persistent but not dangerous. Keep bags zipped in the souks. Taxis should use the meter (compteur).',
  },
  {
    name: 'Essaouira',
    icon: Compass,
    vibe: 'Relaxed coastal town, artistic, windswept',
    hostelScene: 'Smaller but tight-knit -- 15+ hostels and budget riads within the medina walls',
    dailyBudget: 'From 280 MAD',
    bestFor: 'Solo travelers who want a calmer pace, beach walks, fresh seafood, and a creative atmosphere',
    tip: 'The medina is compact and hard to get lost in. The port area has the freshest and cheapest seafood -- grilled fish from 30 MAD.',
    safety: 'One of the safest cities in Morocco. The medina is small enough that you will recognize familiar faces within a day.',
  },
  {
    name: 'Chefchaouen',
    icon: Camera,
    vibe: 'Blue-painted mountain town, photogenic, intimate',
    hostelScene: 'Growing -- 10+ hostels with communal vibes, plus cheap guesthouses',
    dailyBudget: 'From 250 MAD',
    bestFor: 'Photography lovers, hikers, and solo travelers who enjoy small-town energy with a backpacker community',
    tip: 'Hike to the Spanish Mosque viewpoint at sunset. The trail starts from the medina and takes 20 minutes. Go early to beat the crowds.',
    safety: 'Very safe and walkable. The medina is small. Hashish touts are persistent -- a firm "no" is enough.',
  },
  {
    name: 'Fes',
    icon: Building,
    vibe: 'Ancient, layered, intellectually rich',
    hostelScene: 'Fewer party hostels, more cultural riads and guesthouses',
    dailyBudget: 'From 300 MAD',
    bestFor: 'Solo travelers who want deep cultural immersion, medieval architecture, and artisan workshops',
    tip: 'The Fes medina is the most disorienting in Morocco. Download offline maps before entering. Getting lost is part of the experience, but GPS helps when you need an exit.',
    safety: 'Unofficial guides are the main hassle. Politely decline and keep walking. Consider a half-day guided tour to learn the layout.',
  },
  {
    name: 'Taghazout',
    icon: Compass,
    vibe: 'Surf village, barefoot, salt-crusted',
    hostelScene: 'Surf hostels and camps dominate -- communal by design',
    dailyBudget: 'From 350 MAD (including surf lessons)',
    bestFor: 'Solo surfers, ocean lovers, and anyone wanting a small community where everyone knows each other within hours',
    tip: 'Book a surf camp package (accommodation + lessons + meals) from 400 MAD per day. You will be grouped with other solo travelers for lessons.',
    safety: 'Extremely safe. The village is tiny. The main risk is sunburn and reef cuts.',
  },
  {
    name: 'Merzouga',
    icon: Navigation,
    vibe: 'Desert gateway, starlit nights, camel treks',
    hostelScene: 'Desert camps and auberges rather than traditional hostels',
    dailyBudget: 'From 350 MAD (camp packages)',
    bestFor: 'Solo travelers wanting the Sahara experience -- most desert tours group individuals together naturally',
    tip: 'Book a shared desert tour from Marrakech or Fes. You will travel with 10-15 other people for 2-3 days, making it one of the most social experiences in Morocco.',
    safety: 'Very safe. The desert camp operators are professional. Just bring a headlamp for nighttime navigation around camp.',
  },
];

/* ================================================================
   DATA: FEMALE SOLO TRAVEL TIPS
   ================================================================ */

const femaleSoloTips = [
  {
    title: 'Dress for Comfort and Respect',
    icon: ShieldCheck,
    text: 'Covering shoulders, knees, and cleavage reduces unwanted attention significantly. Loose-fitting linen pants, long skirts, and light scarves work well in the heat. This is not about restriction -- Moroccan women dress this way too, and you will blend in rather than stand out.',
  },
  {
    title: 'Master the Art of Ignoring',
    icon: Shield,
    text: 'Street harassment in Morocco is almost always verbal. Do not engage, argue, or make eye contact with men who call out. Walk with purpose and confidence. Sunglasses help. Most men will move on immediately if they get no reaction. A firm "la shukran" (no thank you) or simply silence are your best tools.',
  },
  {
    title: 'Choose Accommodation Wisely',
    icon: Bed,
    text: 'Female-only dorms exist at most large hostels in Marrakech and Fes. Small riads run by families tend to be welcoming to solo women. Read recent reviews from female travelers. Avoid ground-floor rooms in very cheap hotels without reviews.',
  },
  {
    title: 'Use Trusted Transport',
    icon: Phone,
    text: 'Use ride-hailing apps like inDrive or Careem instead of flagging random taxis at night. For intercity travel, CTM and Supratours buses are safe, comfortable, and used by Moroccan families. ONCF trains are excellent on major routes. Sit near other women when possible.',
  },
  {
    title: 'Build a Network Fast',
    icon: Users,
    text: 'Join a group tour on your first day to meet other travelers. Cooking classes, walking tours, and surf lessons are natural ice-breakers. Many solo women find travel partners within 24 hours at social hostels.',
  },
  {
    title: 'Trust Your Instincts',
    icon: Heart,
    text: 'If a situation feels wrong, leave. Do not worry about being rude. Moroccans understand protective caution. Ducking into a shop, pharmacy, or cafe is always an option. Moroccan women and families will typically help if you approach them directly.',
  },
];

/* ================================================================
   DATA: BEST HOSTELS FOR SOLO TRAVELERS
   ================================================================ */

const topHostels = [
  {
    name: 'Equity Point Marrakech',
    city: 'Marrakech',
    price: 'From 80 MAD per night',
    features: 'Rooftop pool, communal dinners, daily activities, female dorms available',
    why: 'The most social hostel in Marrakech. The rooftop pool area turns into a meeting point every evening. Staff organize group outings to the souks and hammam visits.',
  },
  {
    name: 'Riad Laayoun',
    city: 'Fes',
    price: 'From 100 MAD per night',
    features: 'Traditional riad setting, courtyard breakfast, rooftop terrace, medina location',
    why: 'Small enough that guests bond quickly. The owner gives free medina orientation walks. Breakfast on the rooftop overlooking the Fes skyline sets the tone for the day.',
  },
  {
    name: 'The Mill Hostel',
    city: 'Essaouira',
    price: 'From 90 MAD per night',
    features: 'Communal kitchen, surf board rental, movie nights, walking distance to beach',
    why: 'Attracts a mix of surfers, digital nomads, and backpackers. The communal kitchen means shared meals happen organically. Easy walk to the beach and medina.',
  },
  {
    name: 'Olé Hostel',
    city: 'Chefchaouen',
    price: 'From 80 MAD per night',
    features: 'Blue-painted terrace, group hikes, family-run, free walking tour coordination',
    why: 'The terrace with views over the blue medina is where travelers gather each evening. Staff help organize shared taxis to Fes or Tangier, splitting costs between solo guests.',
  },
  {
    name: 'Surf Maroc',
    city: 'Taghazout',
    price: 'From 400 MAD per night (package)',
    features: 'Surf lessons, yoga, communal meals, pool, all-inclusive packages',
    why: 'Designed for solo travelers. Packages include meals, lessons, and social events. You eat together, surf together, and relax together. Solo travelers make up over half the guests.',
  },
  {
    name: 'Hostel Waka Waka',
    city: 'Marrakech',
    price: 'From 85 MAD per night',
    features: 'Rooftop terrace, organized desert trips, free breakfast, female dorms',
    why: 'Known for organizing shared Sahara desert trips at good prices. The rooftop brings guests together every night. One of the best-reviewed hostels in the medina for solo travelers.',
  },
];

/* ================================================================
   DATA: GROUP TOURS FOR SOLO TRAVELERS
   ================================================================ */

const groupTours = [
  {
    title: '3-Day Sahara Desert Tour',
    from: 'Marrakech or Fes',
    price: 'From 800 MAD per person',
    duration: '3 days / 2 nights',
    includes: 'Transport, desert camp, camel trek, meals, hotel pickups',
    soloFriendly: 'Groups of 10-15 travelers, mostly solo. Shared tents at desert camps. Campfire evenings are the highlight.',
  },
  {
    title: 'Ouzoud Waterfalls Day Trip',
    from: 'Marrakech',
    price: 'From 200 MAD per person',
    duration: 'Full day',
    includes: 'Transport, guide, free time at falls',
    soloFriendly: 'Minivan groups of 8-12. Casual atmosphere makes it easy to chat with other travelers during the 2.5 hour drive.',
  },
  {
    title: 'Fes Medina Walking Tour',
    from: 'Fes',
    price: 'From 150 MAD per person',
    duration: 'Half day (3-4 hours)',
    includes: 'Licensed guide, tannery visit, artisan workshops, tea stops',
    soloFriendly: 'Small groups of 4-8. Walking together through the chaotic medina creates fast bonds between strangers.',
  },
  {
    title: 'Atlas Mountains Day Hike',
    from: 'Marrakech',
    price: 'From 250 MAD per person',
    duration: 'Full day',
    includes: 'Transport, guide, Berber village lunch, waterfall visit',
    soloFriendly: 'Groups of 6-12 hikers. Shared Berber lunch in a village home is an intimate cultural experience.',
  },
  {
    title: 'Moroccan Cooking Class',
    from: 'Marrakech, Fes, or Essaouira',
    price: 'From 300 MAD per person',
    duration: 'Half day (4-5 hours)',
    includes: 'Market visit, ingredients, hands-on cooking, full meal',
    soloFriendly: 'Groups of 4-10. Cooking together is a natural icebreaker. You shop at the souk, prep together, and eat what you made.',
  },
];

/* ================================================================
   DATA: SCAM AWARENESS
   ================================================================ */

const commonScams = [
  {
    scam: 'The Friendly Guide',
    how: 'Someone approaches saying "the medina is closed this way" or "let me show you a shortcut" and leads you through alleys before demanding payment for guiding.',
    avoid: 'Use GPS navigation on your phone. Politely decline all offers of directions from strangers. If you want a guide, hire a licensed one through your accommodation.',
  },
  {
    scam: 'The Carpet Shop Detour',
    how: 'A "new friend" invites you for tea, which leads to a carpet or argan oil shop where high-pressure sales tactics begin. The "friend" earns a commission on anything you buy.',
    avoid: 'If you want to shop, browse on your own terms. Entering a shop is not an obligation to buy. You can always leave.',
  },
  {
    scam: 'Taxi Meter Refusal',
    how: 'Drivers claim the meter is broken and quote inflated prices. Some take longer routes to run up the fare.',
    avoid: 'In cities, insist on the meter (compteur) before getting in. If they refuse, take the next taxi. Use ride-hailing apps for fair pricing. A petit taxi ride within most cities should cost from 10 to 30 MAD.',
  },
  {
    scam: 'Free Henna or Bracelets',
    how: 'Someone grabs your hand and starts applying henna or tying a bracelet, then demands a large payment for an unsolicited service.',
    avoid: 'Keep your hands in your pockets or crossed in touristy areas. A firm "no" before they touch your hand is the safest approach.',
  },
  {
    scam: 'Overpriced Photo Ops',
    how: 'Snake charmers, water sellers in traditional dress, and monkey handlers in Jemaa el-Fnaa will demand from 50 to 200 MAD if you photograph them, even from a distance.',
    avoid: 'Agree on a price before taking a photo. From 10 to 20 MAD is reasonable. Or simply do not photograph them.',
  },
];

/* ================================================================
   DATA: BUDGET BREAKDOWN
   ================================================================ */

const budgetBreakdown = [
  { category: 'Hostel Dorm Bed', budget: 'From 80 MAD', mid: 'From 150 MAD (private)', icon: Bed },
  { category: 'Street Food Meal', budget: 'From 25 MAD', mid: 'From 70 MAD (restaurant)', icon: Coffee },
  { category: 'Local Bus Ticket', budget: 'From 5 MAD', mid: 'From 15 MAD (CTM bus)', icon: Map },
  { category: 'Intercity Train', budget: 'From 80 MAD', mid: 'From 150 MAD (1st class)', icon: Navigation },
  { category: 'Museum / Site Entry', budget: 'From 10 MAD', mid: 'From 70 MAD', icon: Landmark },
  { category: 'SIM Card (Data)', budget: 'From 30 MAD', mid: 'From 100 MAD (30GB)', icon: Phone },
  { category: 'Hammam Visit', budget: 'From 50 MAD (public)', mid: 'From 300 MAD (spa)', icon: Heart },
  { category: 'Day Tour', budget: 'From 150 MAD', mid: 'From 400 MAD', icon: Compass },
];

/* ================================================================
   DATA: COMMUNICATION PHRASES
   ================================================================ */

const usefulPhrases = [
  { darija: 'La shukran', meaning: 'No thank you', use: 'Declining touts, vendors, and offers' },
  { darija: 'Bshhal?', meaning: 'How much?', use: 'Asking prices at markets and for taxis' },
  { darija: 'Bezzaf', meaning: 'Too much / Too expensive', use: 'Negotiating prices in the souks' },
  { darija: 'Shukran', meaning: 'Thank you', use: 'General gratitude -- always appreciated' },
  { darija: 'Bslama', meaning: 'Goodbye', use: 'Leaving a shop, ending a conversation' },
  { darija: 'Fin kayn...?', meaning: 'Where is...?', use: 'Asking for directions' },
  { darija: 'Ana ghir kanshuf', meaning: 'I am just looking', use: 'Browsing souks without buying pressure' },
  { darija: 'Smehli', meaning: 'Excuse me / Sorry', use: 'Getting past people in crowded medinas' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoSoloTravelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-morocco.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Solo Travel Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Independent Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Solo Travel in Morocco
            <br className="hidden md:block" /> The Complete Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to travel Morocco alone with confidence. From choosing the right cities and hostels
            to navigating scams and making friends -- your independent trip starts here.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Morocco Rewards the Solo Traveler
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco is one of the most accessible solo travel destinations on the African continent.
              Direct flights from Europe take under four hours, the visa policy waives entry requirements
              for 80+ nationalities, and daily costs start from 300 MAD -- less than many European day budgets.
              The country has built a genuine backpacker infrastructure over the past decade, with hostels,
              shared tours, and communal riads specifically designed to bring independent travelers together.
            </p>
            <p>
              Traveling alone here means eating tagine at a street stall next to a truck driver at lunch,
              sharing a desert camp with strangers who become close friends by sunrise, and negotiating your
              own path through medina alleys that have not changed in 500 years. Morocco demands engagement.
              You cannot passively consume it. That direct contact with local life is precisely what makes
              solo travel here so rewarding.
            </p>
            <p>
              This guide covers the practical side: which cities suit solo travelers best, how to handle
              safety concerns (especially for women), where to find affordable hostels, which group tours
              naturally connect individuals, and how to avoid the handful of scams that target independent
              visitors. No sugarcoating, no fearmongering -- just honest advice from years of on-the-ground experience.
            </p>
          </div>
        </div>
      </section>

      {/* ── Best Cities for Solo Travelers ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cities for Solo Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city offers a distinct experience for independent travelers. Here is what to expect
            in the six most solo-friendly destinations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soloCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <CityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {city.name}
                    </h3>
                  </div>
                  <p className="text-sm italic text-[var(--color-accent)] mb-3">{city.vibe}</p>
                  <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <p><span className="font-semibold text-[var(--text-primary)]">Hostels:</span> {city.hostelScene}</p>
                    <p><span className="font-semibold text-[var(--text-primary)]">Budget:</span> {city.dailyBudget} / day</p>
                    <p><span className="font-semibold text-[var(--text-primary)]">Best for:</span> {city.bestFor}</p>
                  </div>
                  <div className="mt-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {city.tip}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-start gap-2 text-xs text-[var(--text-muted)]">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                    <p>{city.safety}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Female Solo Travel ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UserCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Female Solo Travel in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-6">
            Morocco is not the easiest country for solo women, but it is far from the most difficult.
            Thousands of women travel alone here each year and have transformative experiences.
            The key is preparation, not fear.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan p-6 mb-8">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Reality
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                The most common complaint from solo female travelers in Morocco is verbal street harassment --
                catcalls, comments on appearance, and persistent attempts at conversation. This is more frequent
                in larger cities like Marrakech and Casablanca and much rarer in smaller towns like Essaouira,
                Chefchaouen, and Merzouga. Physical harassment is uncommon. Violent crime against tourists is rare.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Moroccan women deal with the same street dynamics. Many Moroccan women have strategies for handling
                unwanted attention -- and they are willing to share them if you ask. Forming connections with local
                women, even briefly, adds a layer of both safety and cultural understanding to your trip.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {femaleSoloTips.map((tip) => {
                const TipIcon = tip.icon;
                return (
                  <div key={tip.title} className="card-moroccan p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <TipIcon className="w-6 h-6 text-[var(--color-accent)] shrink-0" />
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tip.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Solo Travel Budget Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Morocco is one of the most affordable destinations in North Africa. Solo travelers have an
            advantage -- no need to book double rooms or split costs. Seasonal pricing can change during
            peak tourist months (October through April).
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-3 bg-[var(--color-accent)] text-white font-[family-name:var(--font-heading)] font-bold text-sm p-4">
              <span>Category</span>
              <span className="text-center">Budget</span>
              <span className="text-center">Mid-Range</span>
            </div>
            {budgetBreakdown.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.category}
                  className={`grid grid-cols-3 items-center p-4 text-sm ${
                    i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <ItemIcon className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="font-medium text-[var(--text-primary)]">{item.category}</span>
                  </div>
                  <span className="text-center text-[var(--text-secondary)]">{item.budget}</span>
                  <span className="text-center text-[var(--text-secondary)]">{item.mid}</span>
                </div>
              );
            })}
            <div className="p-4 bg-[var(--color-accent)]/5 border-t border-[var(--color-accent)]/20">
              <p className="text-sm text-[var(--text-primary)] font-[family-name:var(--font-heading)] font-bold">
                Daily Total: From 300 MAD (budget) to From 600 MAD (mid-range)
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Budget assumes hostel dorms, street food, and local transport. Mid-range includes private rooms,
                restaurant meals, and occasional tours.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-moroccan p-4 text-center">
              <HandCoins className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-1">Money Tip</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                ATMs are everywhere in cities. Withdraw MAD locally for the best exchange rate. Avoid airport currency exchanges.
              </p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-1">SIM Cards</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Buy a Maroc Telecom or Orange SIM at the airport for from 30 MAD. Data packages from 20 MAD for 5GB. Essential for GPS navigation.
              </p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-1">Haggling</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Start at 40-50% of the asking price and negotiate from there. Fixed-price shops exist in the Ville Nouvelle areas if you prefer not to haggle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Hostels ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Hostels for Solo Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            A good hostel does more than provide a bed -- it creates opportunities to meet other travelers.
            These hostels are specifically chosen for their social atmosphere and solo-traveler-friendly culture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topHostels.map((hostel) => (
              <div key={hostel.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {hostel.name}
                  </h3>
                  <span className="text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded-full">
                    {hostel.city}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[var(--color-gold)] mb-2">{hostel.price}</p>
                <p className="text-xs text-[var(--text-muted)] mb-3">{hostel.features}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{hostel.why}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-1">
                  Booking Tip for Solo Travelers
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Book your first two nights in advance, then stay flexible. Many solo travelers change plans
                  based on recommendations from people they meet at hostels. Hostelworld and Booking.com both
                  show solo-traveler reviews. Look for hostels rated above 8.5 with recent reviews mentioning
                  the social atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Group Tours for Solos ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Group Tours Perfect for Solo Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Group tours are the fastest way to go from solo to social. These experiences naturally group
            individual travelers together, and shared adventures create lasting connections.
          </p>

          <div className="max-w-4xl mx-auto space-y-5">
            {groupTours.map((tour) => (
              <div key={tour.title} className="card-moroccan p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {tour.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)] mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> From {tour.from}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {tour.duration}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-[var(--color-gold)]">
                        <DollarSign className="w-3 h-3" /> {tour.price}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      <span className="font-semibold text-[var(--text-primary)]">Includes:</span> {tour.includes}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--color-accent)]">Solo-friendly:</span> {tour.soloFriendly}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto">
              Most tours can be booked through your hostel at competitive prices. Seasonal pricing can
              change, and peak season (October-April) often requires booking 2-3 days ahead.
            </p>
          </div>
        </div>
      </section>

      {/* ── Scam Awareness ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Scam Awareness for Solo Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Morocco is not a scam-riddled country, but solo travelers are more frequently targeted than groups.
            Knowing these common tactics makes them easy to deflect.
          </p>

          <div className="space-y-5">
            {commonScams.map((item, i) => (
              <div key={item.scam} className="card-moroccan p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {item.scam}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      <span className="font-semibold text-[var(--text-primary)]">How it works:</span> {item.how}
                    </p>
                    <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-xs text-green-800">
                        <span className="font-semibold">How to avoid it:</span> {item.avoid}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-1">
                  Keep Perspective
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  The overwhelming majority of Moroccans are honest, generous, and genuinely curious about
                  visitors. Scam attempts are concentrated in very specific tourist hotspots -- Jemaa el-Fnaa
                  in Marrakech, the tanneries approach routes in Fes, and around major monuments. Outside
                  these zones, interactions with locals are almost universally positive. Do not let scam
                  awareness turn into suspicion of every friendly person you meet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Communication & Useful Phrases ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageSquare className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Darija Phrases for Solo Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            You do not need to be fluent, but a handful of Moroccan Arabic (Darija) phrases will
            transform your interactions. Locals respond with genuine warmth when you make even a small effort.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-3 bg-[var(--color-accent)] text-white font-[family-name:var(--font-heading)] font-bold text-sm p-4">
              <span>Darija</span>
              <span>Meaning</span>
              <span>When to Use</span>
            </div>
            {usefulPhrases.map((phrase, i) => (
              <div
                key={phrase.darija}
                className={`grid grid-cols-3 p-4 text-sm ${
                  i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'
                }`}
              >
                <span className="font-semibold text-[var(--color-accent)]">{phrase.darija}</span>
                <span className="text-[var(--text-primary)]">{phrase.meaning}</span>
                <span className="text-[var(--text-muted)] text-xs">{phrase.use}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-base text-[var(--text-primary)] mb-3">
                <Globe className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
                Language Landscape
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Moroccans grow up speaking Darija (Moroccan Arabic) and often Tamazight (Berber). French
                is the primary second language and is widely spoken in cities. Spanish is common in northern
                Morocco (Tangier, Tetouan, Chefchaouen). English is increasingly spoken by younger Moroccans
                in tourism. In rural areas, French is your best bet after Darija.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-base text-[var(--text-primary)] mb-3">
                <Phone className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
                Digital Communication
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                WhatsApp is the universal communication tool in Morocco. Hostel staff, tour operators, taxi
                drivers, and even restaurant owners communicate via WhatsApp. Google Translate works well
                for French-English translation but is unreliable for Darija. Download offline maps on Google
                Maps or Maps.me before you arrive -- they will be your most important solo travel tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meeting Other Travelers ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Coffee className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Meet Other Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Solo does not mean lonely. Morocco&apos;s travel infrastructure naturally pushes independent
            travelers together. Here are the most reliable ways to find your people.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-base text-[var(--text-primary)] mb-3">
                Hostel Common Areas
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Rooftop terraces are the social hubs of Moroccan hostels. The evening routine is predictable:
                travelers return from a day of exploring, gather on the terrace, and share stories over mint tea
                or coffee. If your hostel organizes communal dinners (from 60 MAD), join them -- sitting at a
                shared table with strangers is the fastest icebreaker.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-base text-[var(--text-primary)] mb-3">
                Shared Desert Tours
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The 3-day Sahara desert trip is Morocco&apos;s great equalizer. Solo travelers from different hostels
                are combined into one group. You spend 2-3 days in a minivan, sharing meals and sleeping under
                the same stars. The desert camp campfire on the first night is where most lasting travel
                friendships begin.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-base text-[var(--text-primary)] mb-3">
                Cooking Classes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Moroccan cooking classes are inherently collaborative. You shop for ingredients together at the
                souk, prepare dishes side by side, and eat what you cooked as a group. Classes run in Marrakech,
                Fes, and Essaouira from 300 MAD per person. The food becomes secondary to the conversation.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-base text-[var(--text-primary)] mb-3">
                Surf Camps
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Taghazout and Essaouira surf camps are designed around community. You eat meals together, take
                lessons in small groups, and spend downtime in shared spaces. Even if you have never surfed,
                beginner groups are full of solo travelers in the same situation. Week-long packages start from
                2,500 MAD including accommodation and lessons.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-base text-[var(--text-primary)] mb-3">
                City Walking Tours
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Free walking tours (tip-based) operate in Marrakech, Fes, Casablanca, and Tangier. They attract
                a mix of solo travelers, couples, and small groups. After 2-3 hours of walking together, people
                naturally peel off into smaller groups for lunch or continued exploring. Ask your guide for
                restaurant recommendations -- other solos will tag along.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-base text-[var(--text-primary)] mb-3">
                Cafes and Co-Working Spaces
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Digital nomads congregate in specific cafes in Marrakech (Gueliz neighborhood), Essaouira, and
                Taghazout. If you work remotely, these spots combine reliable Wi-Fi with a built-in social scene.
                Marrakech has several dedicated co-working spaces where monthly memberships start from 1,500 MAD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety Essentials ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Essentials for Solo Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Practical safety habits that apply specifically to traveling alone in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)]">
                  Share Your Itinerary
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Send your accommodation details and rough plan to someone at home. Use WhatsApp location
                sharing so a friend or family member can see where you are in real time.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)]">
                  Carry Copies of Documents
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Keep a photo of your passport, visa stamp, and travel insurance on your phone. Leave a
                photocopy at your accommodation. Moroccan police occasionally check IDs, so carry
                your passport or a copy when you are out.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)]">
                  Avoid Unlit Areas at Night
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Medina alleyways that feel charming during the day become deserted and dark at night.
                Stick to main streets after 10 PM. If you are returning to your riad late, use a taxi
                to the nearest medina gate and walk from there.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)]">
                  Use a Money Belt or Hidden Pouch
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Pickpocketing happens in crowded souks and bus stations. Keep your daily spending money
                in a front pocket and store the rest in a money belt or hidden neck pouch. Leave
                unnecessary cards and extra cash at your accommodation.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)]">
                  Trust Your Accommodation Staff
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Riad and hostel owners are your best safety resource. They know which neighborhoods to
                avoid, which taxi drivers are trustworthy, and how much things should cost. Ask them
                before accepting any offer from a stranger on the street.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)]">
                  Emergency Contacts
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Police: 19. Tourist police exist in Marrakech, Fes, Agadir, and Casablanca. Ambulance: 15.
                Fire: 15. Save your embassy&apos;s number in your phone. Download the Smart Traveler app
                from your country&apos;s foreign affairs ministry for alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Real questions from solo travelers planning their Morocco trip.
          </p>

          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Backpacking Morocco',
                description: 'Routes, packing lists, and budget strategies for backpackers traveling across Morocco on a shoestring.',
                href: '/morocco-backpacking',
                icon: Compass,
              },
              {
                title: 'Morocco Safety Tips',
                description: 'Comprehensive safety guide covering health, transport, scams, natural hazards, and emergency contacts.',
                href: '/morocco-safety-tips',
                icon: ShieldCheck,
              },
              {
                title: 'Budget Calculator',
                description: 'Interactive tool to estimate your Morocco trip costs based on travel style, duration, and planned activities.',
                href: '/morocco-budget-calculator',
                icon: DollarSign,
              },
              {
                title: 'First Time in Morocco',
                description: 'Everything first-time visitors need to know before arriving -- customs, culture shock, logistics, and expectations.',
                href: '/morocco-first-time',
                icon: BookOpen,
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
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco text-center max-w-3xl">
          <Star className="w-10 h-10 text-[var(--color-gold)] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Explore Morocco on Your Own Terms?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
            Solo travel in Morocco is not about being alone -- it is about having the freedom to follow
            your curiosity wherever it leads. From the chaos of Marrakech to the calm of the Sahara,
            this country has a way of connecting travelers with each other and with a culture that has
            welcomed strangers for centuries. Pack light, stay open, and trust the journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-backpacking"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Backpacking Guide
            </Link>
            <Link
              href="/morocco-first-time"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              First-Timer Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

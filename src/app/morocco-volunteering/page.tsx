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
  GraduationCap,
  Globe,
  Leaf,
  HandHeart,
  Hammer,
  Sprout,
  FileText,
  Calendar,
  MessageCircle,
  HelpCircle,
  CircleDot,
  Lightbulb,
  Ban,
  Award,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Volunteering in Morocco 2026 | Ethical Opportunities & Programs Guide',
  description:
    'Complete guide to ethical volunteering in Morocco. Teaching English, conservation, women\'s cooperatives, organic farming, and construction projects. Visa requirements, costs from 2,000 MAD/week, top organizations, and how to avoid voluntourism traps.',
  keywords: [
    'volunteering morocco',
    'volunteer programs morocco',
    'ethical volunteering morocco',
    'teach english morocco',
    'volunteer teaching morocco',
    'morocco volunteer opportunities',
    'conservation volunteering morocco',
    'women cooperatives morocco volunteer',
    'organic farming morocco',
    'wwoof morocco',
    'volunteer visa morocco',
    'volunteer costs morocco',
    'ethical volunteer abroad morocco',
    'volunteer marrakech',
    'volunteer fes',
    'volunteer atlas mountains',
    'morocco volunteer organizations',
    'voluntourism morocco',
    'gap year morocco',
    'community development morocco',
  ],
  openGraph: {
    title: 'Volunteering in Morocco 2026 | Ethical Opportunities & Programs Guide',
    description:
      'Find ethical volunteer programs across Morocco. Teaching, conservation, organic farming, and community development. Costs, visa info, and how to make a real impact.',
    url: `${BASE_URL}/morocco-volunteering`,
    images: [
      {
        url: `${BASE_URL}/images/hero-volunteering.webp`,
        width: 1200,
        height: 630,
        alt: 'Volunteers working alongside local Moroccan community members in a rural Atlas Mountains village',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volunteering in Morocco 2026 | Ethical Programs & Opportunities',
    description:
      'Ethical volunteer programs in Morocco: teaching, conservation, farming, women\'s cooperatives. Costs from 2,000 MAD/week, visa info, and real impact tips.',
    images: [`${BASE_URL}/images/hero-volunteering.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-volunteering` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — TRAVEL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-volunteering`,
  name: 'Volunteering in Morocco 2026 | Ethical Opportunities & Programs Guide',
  description:
    'Complete guide to ethical volunteering in Morocco. Teaching English, conservation, women\'s cooperatives, organic farming, and construction projects.',
  url: `${BASE_URL}/morocco-volunteering`,
  image: `${BASE_URL}/images/hero-volunteering.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-volunteering`,
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
      { '@type': 'ListItem', position: 2, name: 'Volunteering in Morocco', item: `${BASE_URL}/morocco-volunteering` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — FAQ PAGE
   ═══════════════════════════════════════════════════════════════ */

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a special visa to volunteer in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most volunteers enter Morocco on a standard 90-day tourist visa, which does not require advance application for citizens of the US, EU, UK, Canada, and Australia. For placements longer than 90 days, you must leave the country and re-enter or apply for a long-stay visa through the Moroccan consulate. Paid volunteer positions technically require a work permit, but most short-term unpaid programs operate under the tourist visa.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to volunteer in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Costs vary widely. Third-party placement organizations charge from 2,000 MAD to 8,000 MAD per week, which typically covers accommodation and meals. Direct placements with local NGOs may only cost accommodation (from 800 MAD/week in shared housing). WWOOF farm stays are often free in exchange for 4-5 hours of daily work. Budget an additional 2,000-4,000 MAD per month for personal expenses, transport, and SIM cards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to volunteer in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) offer the most comfortable weather. Summer volunteering works for coastal or mountain programs but is too hot for desert or inland placements. Winter is ideal for Sahara-edge conservation projects. Teaching programs generally follow the Moroccan school calendar (September-June), with breaks in summer and during Ramadan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to speak Arabic or French to volunteer in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Many organizations operate in English, especially teaching programs. However, basic French opens doors in cities, and even a few Darija (Moroccan Arabic) phrases build trust in rural communities. Conservation and farming programs often rely more on physical work than language. Most reputable organizations provide orientation sessions covering essential local phrases.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I tell if a volunteer program is ethical?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look for programs that prioritize community needs over volunteer experiences, employ local staff in leadership roles, require minimum commitments (2+ weeks), do not involve orphanage visits, have transparent finances, and can articulate measurable outcomes. Red flags include programs that accept anyone with no screening, charge high fees with no clarity on where money goes, feature orphanage tourism, or allow short stays of just a few days for impact projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I volunteer in Morocco as a solo female traveler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco hosts thousands of solo female volunteers each year. Reputable programs provide accommodation, airport pickup, and local orientation. Women\'s cooperatives actively seek female volunteers. Dress modestly (covering shoulders and knees), especially in rural areas. Organizations like the Peace Corps and established NGOs have strong safety protocols and 24/7 support contacts for all volunteers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What qualifications do I need to teach English in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For volunteer teaching, a TEFL/TESOL certificate is preferred but not always required. Native or near-native English proficiency is essential. Some programs accept volunteers with just a high school diploma, while others require a bachelor\'s degree. A TEFL certificate (from 1,500 MAD for online courses) significantly strengthens your application and your classroom effectiveness. Prior teaching experience helps but is rarely mandatory for volunteer placements.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: VOLUNTEER TYPES
   ═══════════════════════════════════════════════════════════════ */

const volunteerTypes = [
  {
    title: 'Teaching English & Education',
    icon: GraduationCap,
    duration: '4-12 weeks minimum',
    regions: 'Marrakech, Fes, Rabat, rural Atlas villages',
    cost: 'From 2,500 MAD/week (placement organizations)',
    description:
      'Morocco has a growing demand for English instruction, particularly in rural areas where public schools lack qualified teachers. Volunteers teach conversational English to children aged 6-16 in community centers, public schools, and after-school programs. Some placements focus on adult literacy or women\'s education programs in areas where girls historically had limited access to schooling.',
    tasks: [
      'Plan and deliver 3-4 hours of English lessons daily',
      'Create learning materials and visual aids',
      'Organize cultural exchange activities and language games',
      'Assist with exam preparation for older students',
    ],
    requirements: 'TEFL certificate preferred. Minimum 4-week commitment. Native or near-native English.',
  },
  {
    title: 'Environmental Conservation',
    icon: Leaf,
    duration: '2-8 weeks',
    regions: 'Souss-Massa, High Atlas, Rif Mountains, Sahara edge',
    cost: 'From 2,000 MAD/week',
    description:
      'Conservation projects tackle deforestation, wildlife protection, and water management across Morocco\'s diverse ecosystems. The High Atlas cedar forests, Souss-Massa National Park (home to the endangered Northern Bald Ibis), and anti-desertification projects along the Sahara edge all accept volunteers. Work is physical, outdoors, and rewarding.',
    tasks: [
      'Plant native tree species (cedar, argan, cork oak)',
      'Monitor wildlife populations and nesting sites',
      'Build erosion barriers and irrigation channels',
      'Conduct environmental education workshops in local schools',
    ],
    requirements: 'Good physical fitness. Outdoor experience helpful. Minimum 2-week commitment.',
  },
  {
    title: 'Construction & Infrastructure',
    icon: Hammer,
    duration: '2-6 weeks',
    regions: 'Rural High Atlas, Rif, Anti-Atlas communities',
    cost: 'From 3,000 MAD/week',
    description:
      'Rural Moroccan communities, particularly in mountainous regions, need help building and maintaining schools, community centers, water systems, and housing. After the 2023 Al Haouz earthquake, several organizations coordinate ongoing reconstruction in affected Atlas Mountain villages. These projects prioritize local labor and use volunteers as supplementary hands, not replacements.',
    tasks: [
      'Assist with masonry, painting, and basic carpentry',
      'Help install water tanks and solar panels',
      'Support earthquake reconstruction under local supervision',
      'Maintain school buildings and community facilities',
    ],
    requirements: 'Physical fitness essential. Construction experience valued but not required. Minimum 2-week stay.',
  },
  {
    title: 'Women\'s Cooperatives',
    icon: HandHeart,
    duration: '4-12 weeks',
    regions: 'Essaouira, Taroudant, Ouarzazate, Tiznit',
    cost: 'From 1,500 MAD/week (often lower through direct placement)',
    description:
      'Morocco\'s argan oil cooperatives, weaving collectives, and saffron cooperatives provide income and independence for rural women. Volunteers contribute business skills, marketing knowledge, English instruction, and help develop fair-trade supply chains. This is one of the most impactful and ethical forms of volunteering in Morocco because the cooperatives themselves define what help they need.',
    tasks: [
      'Teach business English and basic computer skills',
      'Help develop websites, social media, and marketing materials',
      'Assist with product photography and e-commerce setup',
      'Support literacy programs for cooperative members',
    ],
    requirements: 'Female volunteers preferred for some cooperatives. Business/marketing skills valuable. Minimum 4 weeks.',
  },
  {
    title: 'Organic Farming & Permaculture',
    icon: Sprout,
    duration: '2-12 weeks',
    regions: 'Ourika Valley, Chefchaouen, Rif Mountains, Souss plains',
    cost: 'Free to from 500 MAD/week (WWOOF exchanges)',
    description:
      'Morocco\'s organic farming movement is expanding rapidly. WWOOF (World Wide Opportunities on Organic Farms) connects volunteers with host farms across the country. Work includes olive harvesting (October-December), permaculture garden development, beekeeping, and medicinal herb cultivation. You live with farm families and eat what you grow.',
    tasks: [
      'Plant, weed, harvest, and process organic crops',
      'Build and maintain permaculture systems (composting, rainwater collection)',
      'Help with olive and argan harvesting during season',
      'Assist with beekeeping and honey production',
    ],
    requirements: 'No experience needed for most farms. 4-5 hours of work per day in exchange for room and board.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP ORGANIZATIONS
   ═══════════════════════════════════════════════════════════════ */

const topOrganizations = [
  {
    name: 'Volunteer Morocco (local NGO)',
    focus: 'Teaching, community development',
    location: 'Rabat, Fes, Marrakech',
    cost: 'From 3,000 MAD/week',
    commitment: '2 weeks minimum',
    rating: 4.6,
    note: 'Moroccan-founded organization. Fees go directly to local communities. Provides homestay accommodation and daily meals.',
  },
  {
    name: 'WWOOF Morocco',
    focus: 'Organic farming, permaculture',
    location: '40+ farms nationwide',
    cost: 'Free (exchange for 4-5 hrs work/day)',
    commitment: '1 week minimum',
    rating: 4.5,
    note: 'Annual membership from 250 MAD. Direct connection with farm hosts. No middleman fees. Accommodation and meals included.',
  },
  {
    name: 'High Atlas Foundation',
    focus: 'Tree planting, community development, women\'s empowerment',
    location: 'High Atlas region, Marrakech',
    cost: 'From 2,000 MAD/week',
    commitment: '2 weeks minimum',
    rating: 4.7,
    note: 'Founded by former Peace Corps volunteers. Strong local partnerships. Has planted over 3 million trees. Transparent finances.',
  },
  {
    name: 'Education For All (EFA)',
    focus: 'Girls\' education, boarding houses',
    location: 'High Atlas Mountains',
    cost: 'Varies by role',
    commitment: '4 weeks minimum',
    rating: 4.8,
    note: 'Operates boarding houses enabling rural girls to attend secondary school. Volunteer roles include teaching, mentoring, and fundraising support.',
  },
  {
    name: 'Association Ribat Al Fath',
    focus: 'Cultural heritage, youth programs',
    location: 'Rabat',
    cost: 'From 1,500 MAD/week',
    commitment: '3 weeks minimum',
    rating: 4.4,
    note: 'Moroccan cultural association with youth education and heritage preservation programs. Provides cultural immersion alongside volunteer work.',
  },
  {
    name: 'Morocco Animal Aid',
    focus: 'Animal welfare, veterinary outreach',
    location: 'Tangier, northern Morocco',
    cost: 'From 2,500 MAD/week',
    commitment: '2 weeks minimum',
    rating: 4.5,
    note: 'Focuses on stray animal care, spay/neuter campaigns, and veterinary outreach in rural areas. Welcomes volunteers with and without veterinary experience.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ETHICAL RED FLAGS & GREEN FLAGS
   ═══════════════════════════════════════════════════════════════ */

const redFlags = [
  'Orphanage visits or short-term childcare placements',
  'No screening process — anyone can sign up instantly',
  'Fees above 8,000 MAD/week with no transparency on spending',
  'Programs lasting only 1-3 days marketed as "impact" experiences',
  'No local staff in leadership or decision-making roles',
  'Photos of volunteers surrounded by children used as marketing',
  'No stated long-term goals, outcomes, or community partnerships',
  'Organization cannot explain what happens when volunteers leave',
] as const;

const greenFlags = [
  'Local staff lead projects; volunteers play supporting roles',
  'Minimum commitment of 2+ weeks required',
  'Clear, published breakdown of where fees go',
  'Program existed before international volunteers arrived',
  'Community members were consulted about volunteer involvement',
  'Skills-based roles that match actual community needs',
  'Follow-up reporting on project outcomes and impact',
  'Background checks or references required for working with children',
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST REGIONS
   ═══════════════════════════════════════════════════════════════ */

const bestRegions = [
  {
    region: 'High Atlas Mountains',
    types: 'Teaching, construction, conservation, earthquake recovery',
    description:
      'Rural Amazigh (Berber) communities in the Atlas Mountains have the greatest need for volunteer support. Post-earthquake reconstruction continues in many villages. Schools lack resources, and deforestation threatens cedar forests. Accommodation is basic — expect shared rooms in village guesthouses.',
    bestFor: 'Hands-on physical work, cultural immersion, mountain lovers',
  },
  {
    region: 'Marrakech & Surrounds',
    types: 'Teaching, women\'s cooperatives, community centers',
    description:
      'The Marrakech region offers the most structured volunteer programs with reliable infrastructure. Urban placements in community centers and schools operate on predictable schedules. The Ourika Valley (45 minutes away) provides rural placements with easy city access on weekends.',
    bestFor: 'First-time volunteers, those wanting urban amenities nearby',
  },
  {
    region: 'Fes & Middle Atlas',
    types: 'Teaching, cultural heritage, cedar forest conservation',
    description:
      'Fes-based programs focus on education in the medina\'s community centers and cultural preservation of traditional crafts. The nearby Middle Atlas offers cedar reforestation projects and Barbary macaque conservation in Ifrane National Park.',
    bestFor: 'Culture enthusiasts, conservation volunteers, longer-term stays',
  },
  {
    region: 'Souss-Massa & Anti-Atlas',
    types: 'Conservation, organic farming, women\'s argan cooperatives',
    description:
      'The Souss-Massa region around Agadir and Taroudant is the heartland of argan oil production and home to crucial conservation projects protecting the Northern Bald Ibis. Women\'s argan cooperatives actively seek volunteers for marketing and business development.',
    bestFor: 'Conservation-minded volunteers, agriculture lovers, longer stays',
  },
  {
    region: 'Rif Mountains & Northern Coast',
    types: 'Organic farming, animal welfare, environmental cleanup',
    description:
      'The Rif region around Chefchaouen hosts organic farms and permaculture projects. Tangier-based animal welfare organizations need consistent volunteer support. Beach and mountain cleanup initiatives operate seasonally along the Mediterranean coast.',
    bestFor: 'Farming enthusiasts, animal lovers, independent travelers',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: COST BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const costBreakdown = [
  { item: 'Program fee (placement org)', range: 'From 2,000-8,000 MAD/week', note: 'Covers accommodation + meals' },
  { item: 'Direct NGO placement', range: 'From 800-2,000 MAD/week', note: 'Accommodation only; meals separate' },
  { item: 'WWOOF farm stays', range: 'Free + 250 MAD annual membership', note: '4-5 hours work/day, room & board included' },
  { item: 'Personal expenses', range: 'From 2,000-4,000 MAD/month', note: 'SIM card, transport, snacks, toiletries' },
  { item: 'Local transport', range: 'From 500-1,500 MAD/month', note: 'Buses, grands taxis for weekend trips' },
  { item: 'Travel insurance', range: 'From 400-800 MAD/month', note: 'Essential; confirm volunteer work is covered' },
  { item: 'TEFL certificate (if needed)', range: 'From 1,500 MAD (online)', note: 'One-time cost; in-person courses cost more' },
  { item: 'Visa extension (if needed)', range: 'From 500 MAD', note: 'For stays beyond 90 days' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoVolunteeringPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main className="min-h-screen bg-[#FAF8F5]">
        {/* ── HERO SECTION ── */}
        <section className="relative h-[55vh] min-h-[420px]">
          <div className="hero-overlay absolute inset-0 z-10" />
          <img
            src="/images/hero-volunteering.webp"
            alt="Volunteers planting trees alongside Moroccan community members in the High Atlas Mountains"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex flex-col justify-end pb-12">
            <div className="container-morocco">
              <nav className="flex items-center gap-2 text-white/80 text-sm mb-4 font-[family-name:var(--font-heading)]" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white flex items-center gap-1">
                  <Home className="w-4 h-4" /> Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Volunteering in Morocco</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
                Volunteering in Morocco
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl font-[family-name:var(--font-heading)]">
                Ethical opportunities to teach, conserve, build, and grow — a practical guide
                to making a real impact in Moroccan communities.
              </p>
            </div>
          </div>
        </section>

        {/* ── INTRO SECTION ── */}
        <section className="container-morocco py-12">
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan p-8">
              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 text-[#A0522D] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                    Why Volunteer in Morocco?
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4 font-[family-name:var(--font-heading)]">
                    Morocco sits at the crossroads of Africa, Europe, and the Arab world. Its rural communities
                    face real challenges — limited access to education, deforestation accelerated by climate change,
                    and economic pressures driving youth migration to cities. At the same time, Morocco has a
                    strong tradition of mutual aid (<span className="italic">ta&apos;awun</span>) and community
                    solidarity that makes it one of the most welcoming countries for international volunteers.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 font-[family-name:var(--font-heading)]">
                    The 2023 Al Haouz earthquake intensified the need for skilled volunteers in Atlas Mountain
                    communities. Reconstruction, education, and women&apos;s economic empowerment remain top
                    priorities. Organic farming and conservation projects continue to expand as Morocco invests
                    in sustainable development through its national green strategy.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-[family-name:var(--font-heading)]">
                    This guide covers the five main types of volunteering, how to find ethical programs, what
                    it costs, visa logistics, and which regions offer the strongest opportunities. Every
                    recommendation prioritizes organizations that put community needs first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ETHICAL VOLUNTEERING WARNING ── */}
        <section className="container-morocco pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="zellige-border p-8 bg-amber-50 rounded-xl">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                    The Voluntourism Problem — Read This First
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4 font-[family-name:var(--font-heading)]">
                    Not all volunteer programs benefit communities. &quot;Voluntourism&quot; — short-term, unskilled
                    placements designed to make travelers feel good — can actively harm the people it claims to
                    help. Orphanage tourism has been linked to child trafficking and the deliberate
                    separation of children from families to attract donations. Morocco has seen a rise in
                    pay-to-volunteer schemes where most fees go to middleman agencies, not to the communities
                    that need help.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-[family-name:var(--font-heading)]">
                    Before signing up for any program, ask hard questions: Where does my money go? Would a
                    local person be better suited for this role? What happens to the project when I leave?
                    Does the community actually want this help? The sections below will help you distinguish
                    ethical programs from exploitative ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RED FLAGS & GREEN FLAGS ── */}
        <section className="container-morocco pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-8 text-center">
              How to Spot Ethical vs. Harmful Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Red Flags */}
              <div className="card-moroccan p-6 border-red-200 bg-red-50/50">
                <div className="flex items-center gap-3 mb-4">
                  <Ban className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-red-800">
                    Red Flags — Walk Away
                  </h3>
                </div>
                <ul className="space-y-3">
                  {redFlags.map((flag, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 font-[family-name:var(--font-heading)]">
                      <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span className="text-sm">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Green Flags */}
              <div className="card-moroccan p-6 border-green-200 bg-green-50/50">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-green-800">
                    Green Flags — Good Signs
                  </h3>
                </div>
                <ul className="space-y-3">
                  {greenFlags.map((flag, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 font-[family-name:var(--font-heading)]">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-sm">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── TYPES OF VOLUNTEERING ── */}
        <section className="moroccan-pattern py-16">
          <div className="container-morocco">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                5 Types of Volunteering in Morocco
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Each category addresses a genuine need. Choose based on your skills, time commitment, and the
                kind of impact you want to make.
              </p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {volunteerTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div key={index} className="card-moroccan p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#A0522D]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#A0522D]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                          {index + 1}. {type.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {type.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" /> {type.regions}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" /> {type.cost}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4 font-[family-name:var(--font-heading)]">
                      {type.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 font-[family-name:var(--font-heading)]">
                        Typical daily tasks:
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {type.tasks.map((task, ti) => (
                          <li key={ti} className="flex items-start gap-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                            <CircleDot className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#FAF8F5] rounded-lg p-3 flex items-start gap-2">
                      <Info className="w-4 h-4 text-[#A0522D] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                        <strong>Requirements:</strong> {type.requirements}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TOP ORGANIZATIONS ── */}
        <section className="container-morocco py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              6 Reputable Organizations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              These organizations have track records of community-centered work, transparent finances,
              and genuine impact. Seasonal pricing can change — contact each directly for current rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {topOrganizations.map((org, index) => (
              <div key={index} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 pr-2">
                    {org.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-[#C4960C]/10 px-2 py-1 rounded text-sm flex-shrink-0">
                    <Star className="w-4 h-4 text-[#C4960C] fill-[#C4960C]" />
                    <span className="font-semibold text-[#C4960C]">{org.rating}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                    <Heart className="w-4 h-4 text-[#A0522D]" /> {org.focus}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                    <MapPin className="w-4 h-4 text-[#A0522D]" /> {org.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                    <DollarSign className="w-4 h-4 text-[#A0522D]" /> {org.cost}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                    <Calendar className="w-4 h-4 text-[#A0522D]" /> {org.commitment}
                  </div>
                </div>
                <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)] bg-[#FAF8F5] rounded-lg p-3">
                  {org.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── VISA & LOGISTICS ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-8 text-center">
                Visa Requirements & Logistics
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-[#A0522D]" />
                    <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                      Visa Rules
                    </h3>
                  </div>
                  <ul className="space-y-3 font-[family-name:var(--font-heading)]">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      Citizens of the US, EU, UK, Canada, Australia, and 60+ other countries get visa-free entry for 90 days
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      No special &quot;volunteer visa&quot; exists — most programs operate under the tourist visa
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      Stays beyond 90 days require leaving and re-entering, or a long-stay visa from your home country
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      Paid volunteer positions technically require a work permit — consult your organization
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      Register with your embassy upon arrival for stays longer than 30 days
                    </li>
                  </ul>
                </div>

                <div className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-6 h-6 text-[#A0522D]" />
                    <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                      Insurance & Health
                    </h3>
                  </div>
                  <ul className="space-y-3 font-[family-name:var(--font-heading)]">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      Travel insurance is essential — confirm your policy covers volunteer work specifically
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      World Nomads and SafetyWing offer policies that cover volunteer activities from 400 MAD/month
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      No mandatory vaccinations, but hepatitis A, typhoid, and tetanus boosters are recommended
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      Rural areas may be hours from the nearest hospital — carry a first-aid kit
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      Pharmacies in Moroccan cities are well-stocked and affordable
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COST BREAKDOWN ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4 text-center">
              What Volunteering in Morocco Actually Costs
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Budget estimates for 2026. Seasonal pricing can change — always confirm current rates
              with your chosen organization.
            </p>

            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#A0522D] text-white">
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Expense</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Cost Range</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costBreakdown.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}>
                        <td className="p-4 font-[family-name:var(--font-heading)] font-medium text-gray-900">{row.item}</td>
                        <td className="p-4 font-[family-name:var(--font-heading)] text-[#A0522D] font-semibold">{row.range}</td>
                        <td className="p-4 font-[family-name:var(--font-heading)] text-gray-600">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-[#C4960C]/10 rounded-xl p-5 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[#C4960C] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                <strong>Budget tip:</strong> A WWOOF farm stay is the most affordable option — you work 4-5 hours
                daily in exchange for free room and board. Combined with a 250 MAD annual membership, you can
                volunteer in Morocco for months spending only on personal expenses and transport.
              </p>
            </div>
          </div>
        </section>

        {/* ── DAILY LIFE AS A VOLUNTEER ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-8 text-center">
                Daily Life as a Volunteer
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-moroccan p-6 text-center">
                  <Users className="w-8 h-8 text-[#A0522D] mx-auto mb-3" />
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                    Accommodation
                  </h3>
                  <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                    Most programs provide shared accommodation — homestays with local families, volunteer houses,
                    or guesthouses. Expect basic but comfortable rooms. Homestays offer the deepest cultural
                    immersion and usually include breakfast and dinner. Hot water and Wi-Fi availability varies
                    in rural areas.
                  </p>
                </div>

                <div className="card-moroccan p-6 text-center">
                  <Clock className="w-8 h-8 text-[#A0522D] mx-auto mb-3" />
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                    Typical Schedule
                  </h3>
                  <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                    Work hours are usually 8:00-13:00 or 9:00-14:00, five days a week. Afternoons are free for
                    language study, exploring, or rest. Teaching programs sometimes split into morning and late
                    afternoon sessions. Weekends are yours — most volunteers use them to travel to nearby cities
                    or hike in the mountains.
                  </p>
                </div>

                <div className="card-moroccan p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-[#A0522D] mx-auto mb-3" />
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                    Cultural Integration
                  </h3>
                  <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                    Sharing mint tea with colleagues is a daily ritual — never refuse the first glass. Friday is the
                    holy day; some programs take Fridays off instead of Sundays. Dress modestly, especially in rural areas
                    (cover shoulders and knees). Learn basic Darija greetings: &quot;Salam&quot; (hello),
                    &quot;Shukran&quot; (thank you), &quot;Labas&quot; (how are you). Ramadan affects schedules
                    significantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BEST REGIONS ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4 text-center">
              Best Regions for Volunteering
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Morocco&apos;s geography ranges from coastal plains to 4,000-meter peaks. Each region offers
              distinct volunteer opportunities and living conditions.
            </p>

            <div className="space-y-6">
              {bestRegions.map((region, index) => (
                <div key={index} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#C4960C]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-1">
                        {region.region}
                      </h3>
                      <p className="text-sm text-[#A0522D] font-semibold mb-3 font-[family-name:var(--font-heading)]">
                        {region.types}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3 font-[family-name:var(--font-heading)]">
                        {region.description}
                      </p>
                      <div className="bg-[#FAF8F5] rounded-lg px-3 py-2 inline-flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#C4960C]" />
                        <span className="text-sm font-medium text-gray-700 font-[family-name:var(--font-heading)]">
                          Best for: {region.bestFor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PACKING & PREPARATION ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-8 text-center">
                Preparing for Your Placement
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-6 h-6 text-[#A0522D]" />
                    <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                      Before You Go
                    </h3>
                  </div>
                  <ul className="space-y-3 font-[family-name:var(--font-heading)]">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#A0522D] flex-shrink-0 mt-0.5" />
                      Research your organization thoroughly — read reviews from past volunteers, not just the website
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#A0522D] flex-shrink-0 mt-0.5" />
                      Start learning basic French or Darija — even 20 phrases make a huge difference
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#A0522D] flex-shrink-0 mt-0.5" />
                      Get a TEFL certificate if teaching (online courses available from 1,500 MAD)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#A0522D] flex-shrink-0 mt-0.5" />
                      Purchase travel insurance that explicitly covers volunteer activities
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#A0522D] flex-shrink-0 mt-0.5" />
                      Prepare teaching materials, art supplies, or tools relevant to your placement
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#A0522D] flex-shrink-0 mt-0.5" />
                      Download offline maps and translation apps — rural Morocco has patchy cell coverage
                    </li>
                  </ul>
                </div>

                <div className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="w-6 h-6 text-[#A0522D]" />
                    <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                      Essential Packing List
                    </h3>
                  </div>
                  <ul className="space-y-3 font-[family-name:var(--font-heading)]">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CircleDot className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                      Modest clothing covering shoulders and knees (essential in rural areas)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CircleDot className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                      Sturdy work boots or hiking shoes (for construction, farming, or conservation)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CircleDot className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                      Headlamp or flashlight (power outages happen in rural Morocco)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CircleDot className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                      First-aid kit with any prescription medications (pharmacies are in cities only)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CircleDot className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                      Reusable water bottle with filter (safe tap water is not guaranteed everywhere)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CircleDot className="w-4 h-4 text-[#C4960C] flex-shrink-0 mt-0.5" />
                      Sunscreen (SPF 50+), hat, and sunglasses — UV intensity is high year-round
                    </li>
                  </ul>
                </div>
              </div>

              {/* Practical Tips Row */}
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="card-moroccan p-5">
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#A0522D]" /> Learn Basic Darija
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-[family-name:var(--font-heading)]">
                    &quot;Salam&quot; (hello), &quot;Shukran&quot; (thank you), &quot;La bas?&quot; (how are you?),
                    &quot;Bismillah&quot; (said before eating). Your host community will appreciate the effort.
                  </p>
                </div>
                <div className="card-moroccan p-5">
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#A0522D]" /> Respect Ramadan
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-[family-name:var(--font-heading)]">
                    Do not eat, drink, or smoke in public during fasting hours. Programs adjust schedules during
                    Ramadan. Many volunteers find the communal iftar meals to be a highlight of their stay.
                  </p>
                </div>
                <div className="card-moroccan p-5">
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#A0522D]" /> Document Responsibly
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-[family-name:var(--font-heading)]">
                    Always ask permission before photographing people, especially children. Never post images of
                    vulnerable individuals without consent. Your host community are partners, not social media props.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {jsonLdFaq.mainEntity.map((faq, index) => (
                <div key={index} className="card-moroccan p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">
                        {faq.name}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed font-[family-name:var(--font-heading)]">
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED GUIDES ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-8 text-center">
                Related Guides
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { title: 'Budget Travel Morocco', href: '/budget-travel', desc: 'Stretch your MAD further with our complete budget guide.' },
                  { title: 'Morocco Safety Guide', href: '/safety', desc: 'Health, safety, and emergency contacts for travelers and volunteers.' },
                  { title: 'Morocco Language Guide', href: '/language', desc: 'Essential Darija, French, and Amazigh phrases for daily life.' },
                  { title: 'Packing for Morocco', href: '/packing', desc: 'Season-by-season packing advice and clothing tips.' },
                  { title: 'Health & Vaccinations', href: '/health', desc: 'Medical prep, insurance, and staying healthy in Morocco.' },
                  { title: 'Morocco Transport Guide', href: '/transport', desc: 'Buses, trains, grands taxis — getting around affordably.' },
                ].map((guide, i) => (
                  <Link key={i} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                    <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 group-hover:text-[#A0522D] transition-colors mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">
                      {guide.desc}
                    </p>
                    <span className="text-[#A0522D] text-sm font-semibold flex items-center gap-1 font-[family-name:var(--font-heading)]">
                      Read guide <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="moroccan-pattern py-16">
          <div className="container-morocco">
            <div className="max-w-3xl mx-auto text-center">
              <div className="card-moroccan p-10">
                <HandHeart className="w-12 h-12 text-[#A0522D] mx-auto mb-4" />
                <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
                  Ready to Make a Difference?
                </h2>
                <p className="text-gray-700 font-[family-name:var(--font-heading)] mb-6 max-w-xl mx-auto">
                  Start by researching organizations that align with your skills and values. The best
                  volunteer experiences happen when you commit enough time to truly understand the community
                  and contribute something meaningful. Morocco is waiting — bring your skills, your patience,
                  and an open mind.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/budget-travel"
                    className="inline-flex items-center justify-center gap-2 bg-[#A0522D] text-white px-6 py-3 rounded-lg hover:bg-[#8B4726] transition-colors font-[family-name:var(--font-heading)] font-semibold"
                  >
                    Plan Your Budget <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/safety"
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#A0522D] text-[#A0522D] px-6 py-3 rounded-lg hover:bg-[#A0522D] hover:text-white transition-colors font-[family-name:var(--font-heading)] font-semibold"
                  >
                    Safety Guide <ShieldCheck className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

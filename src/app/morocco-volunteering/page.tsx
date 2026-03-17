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
  Globe,
  BookOpen,
  Award,
  Briefcase,
  Leaf,
  GraduationCap,
  HandHeart,
  Sprout,
  Building,
  FileText,
  Luggage,
  MessageCircle,
  Scale,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Volunteering in Morocco 2026 | Ethical Volunteer Programs & Complete Guide',
  description:
    'Complete guide to volunteering in Morocco. Ethical volunteer programs from 2,000 MAD/week including teaching English, wildlife conservation, organic farming, women\'s cooperatives, and community development. Visa info, packing tips, and trusted organizations.',
  keywords: [
    'volunteering in Morocco',
    'Morocco volunteer programs',
    'teach English Morocco',
    'volunteer abroad Morocco',
    'ethical volunteering Morocco',
    'Morocco community development',
    'wildlife conservation Morocco',
    'organic farming Morocco',
    'women cooperatives Morocco',
    'volunteer visa Morocco',
    'Morocco volunteer organizations',
    'volunteer Marrakech',
    'volunteer Fes Morocco',
    'Morocco orphanage volunteering',
    'responsible volunteering Morocco',
    'Morocco volunteer cost',
    'volunteer work Morocco 2026',
    'Morocco gap year',
    'Morocco volunteer packing list',
    'sustainable volunteering Morocco',
    'Morocco volunteer requirements',
    'volunteer Atlas Mountains',
  ],
  openGraph: {
    title: 'Volunteering in Morocco 2026 | Ethical Volunteer Programs & Complete Guide',
    description:
      'Discover ethical volunteer opportunities across Morocco. From teaching English to wildlife conservation, find your perfect program with our comprehensive guide including costs, visa info, and trusted organizations.',
    url: `${BASE_URL}/morocco-volunteering`,
    images: [
      {
        url: `${BASE_URL}/images/hero-volunteering.webp`,
        width: 1200,
        height: 630,
        alt: 'Volunteers working with local community members in a Moroccan village with Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volunteering in Morocco 2026 | Ethical Programs & Guide',
    description:
      'Ethical volunteer programs across Morocco from 2,000 MAD/week. Teaching, conservation, farming, community development, and more. Complete guide with visa info and trusted organizations.',
    images: [`${BASE_URL}/images/hero-volunteering.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-volunteering` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-volunteering`,
  name: 'Volunteering in Morocco 2026 | Ethical Volunteer Programs & Complete Guide',
  description:
    'Complete guide to volunteering in Morocco. Ethical volunteer programs including teaching English, wildlife conservation, organic farming, women\'s cooperatives, and community development. Visa info, packing tips, and trusted organizations.',
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
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
   DATA: VOLUNTEER PROGRAMS
   ═══════════════════════════════════════════════════════════════ */

const volunteerPrograms = [
  {
    name: 'Teaching English in Rural Schools',
    organization: 'Education For All Morocco',
    location: 'High Atlas Mountains, near Imlil',
    duration: '4-12 weeks',
    cost: 'From 2,500 MAD per week',
    icon: GraduationCap,
    description:
      'Work alongside Moroccan teachers in rural mountain schools where English instruction is limited. You will help children aged 6-16 develop conversational English skills through interactive lessons, games, and creative activities. Many of these students have never met a native or fluent English speaker, and your presence alone is a powerful motivator.',
    whatYouDo: [
      'Plan and teach 3-4 English lessons per day',
      'Create engaging learning materials and visual aids',
      'Organize after-school English conversation clubs',
      'Support local teachers with pronunciation and methodology',
    ],
    requirements: [
      'Fluent English speaker (native or C1+ level)',
      'TEFL certificate preferred but not required',
      'Minimum age 18 years',
      'Basic fitness for mountain terrain',
    ],
  },
  {
    name: 'Wildlife Conservation & Reforestation',
    organization: 'Morocco Wildlife Foundation',
    location: 'Souss-Massa National Park & Middle Atlas',
    duration: '2-8 weeks',
    cost: 'From 3,000 MAD per week',
    icon: Leaf,
    description:
      'Help protect Morocco\'s endangered species including the Northern Bald Ibis, Barbary macaque, and Atlas cedar forests. This program combines fieldwork with environmental education. You will assist researchers with wildlife monitoring, participate in reforestation projects, and help local communities develop sustainable land-use practices.',
    whatYouDo: [
      'Monitor endangered bird and primate populations',
      'Plant native tree species in degraded forest areas',
      'Assist with wildlife camera trap maintenance and data collection',
      'Conduct environmental education workshops in local schools',
    ],
    requirements: [
      'Interest in wildlife biology or environmental science',
      'Good physical fitness for fieldwork and hiking',
      'Comfortable with basic camping conditions',
      'Minimum age 18 years',
    ],
  },
  {
    name: 'Community Development & Infrastructure',
    organization: 'Moroccan Solidarity Initiative',
    location: 'Rural villages near Ouarzazate',
    duration: '2-6 weeks',
    cost: 'From 2,000 MAD per week',
    icon: Building,
    description:
      'Contribute to tangible infrastructure improvements in underserved rural communities. Projects include building water access points, constructing school facilities, improving irrigation systems, and creating community spaces. You work alongside local builders and community members who direct the projects based on their own identified needs.',
    whatYouDo: [
      'Assist with construction of school classrooms and community centers',
      'Help install clean water access points and basic plumbing',
      'Support irrigation system improvements for local farmers',
      'Participate in community planning meetings to identify priorities',
    ],
    requirements: [
      'Physical fitness for manual labor',
      'No construction experience needed (training provided)',
      'Willingness to work in hot, arid conditions',
      'Minimum age 18 years',
    ],
  },
  {
    name: 'Women\'s Cooperative Support',
    organization: 'Amal Women\'s Training Center',
    location: 'Marrakech & surrounding villages',
    duration: '4-12 weeks',
    cost: 'From 2,500 MAD per week',
    icon: HandHeart,
    description:
      'Support women\'s economic empowerment through Morocco\'s cooperative movement. Work with women\'s groups producing argan oil, traditional textiles, and culinary products. You will help with business development, marketing, English language skills, and digital literacy, enabling these cooperatives to reach international markets and achieve financial independence.',
    whatYouDo: [
      'Teach basic English and digital literacy skills to cooperative members',
      'Help develop marketing materials and social media presence',
      'Assist with business planning and financial record keeping',
      'Support product development and quality improvement',
    ],
    requirements: [
      'Background in business, marketing, or education preferred',
      'Cultural sensitivity and respect for local gender norms',
      'Basic French or Arabic helpful but not required',
      'Minimum age 21 years',
    ],
  },
  {
    name: 'Organic Farming & Permaculture',
    organization: 'Jnane Organic Farm Network',
    location: 'Ourika Valley & Chefchaouen region',
    duration: '2-8 weeks',
    cost: 'From 2,000 MAD per week',
    icon: Sprout,
    description:
      'Learn and contribute to Morocco\'s growing organic agriculture movement. Work on certified organic farms growing traditional Moroccan crops including olives, citrus, vegetables, and medicinal herbs. You will learn permaculture techniques adapted to North African climates while helping farmers transition from conventional to organic methods.',
    whatYouDo: [
      'Plant, maintain, and harvest organic crops seasonally',
      'Help design and implement permaculture garden systems',
      'Assist with composting, natural pest control, and soil improvement',
      'Support farmers markets and direct-sale distribution channels',
    ],
    requirements: [
      'Interest in sustainable agriculture or permaculture',
      'Willingness to do physical outdoor work',
      'No farming experience required (training provided)',
      'Minimum age 18 years',
    ],
  },
  {
    name: 'Children\'s Education & After-School Programs',
    organization: 'Bayti Foundation Morocco',
    location: 'Casablanca, Rabat, and Tangier',
    duration: '4-12 weeks',
    cost: 'From 2,500 MAD per week',
    icon: Heart,
    description:
      'Work with children from disadvantaged backgrounds in urban centers through structured after-school programs. Activities include homework help, arts and crafts, sports, music, and life skills workshops. The program partners with established Moroccan NGOs that have been working with vulnerable children for over 20 years, ensuring a responsible and child-safe approach.',
    whatYouDo: [
      'Lead after-school educational activities and homework support',
      'Organize creative workshops in art, music, and drama',
      'Plan and run sports and outdoor recreation sessions',
      'Assist with life skills workshops on hygiene, nutrition, and safety',
    ],
    requirements: [
      'Experience working with children preferred',
      'Background check required (provided by organization)',
      'Patient, energetic, and creative personality',
      'Minimum age 21 years with child safeguarding training',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ETHICAL VOLUNTEERING GUIDELINES
   ═══════════════════════════════════════════════════════════════ */

const ethicalGuidelines = [
  {
    title: 'Community-Led Projects Only',
    icon: Users,
    description:
      'Ethical volunteering means the local community identifies its own needs and leads the projects. Avoid programs where outsiders decide what communities need. The best organizations employ local staff who direct volunteers, not the other way around. Ask: "Who designed this project?" If the answer is not "the community," reconsider.',
  },
  {
    title: 'Skills Transfer Over Labor',
    icon: GraduationCap,
    description:
      'The goal of volunteering should be to leave communities more capable, not more dependent. Programs that focus on training local people in new skills (teaching methods, business development, sustainable farming) create lasting impact. Programs that just use volunteer labor for tasks locals could do more cheaply are exploitative, not helpful.',
  },
  {
    title: 'Avoid Orphanage Tourism',
    icon: AlertTriangle,
    description:
      'Orphanage volunteering has been widely criticized by child welfare organizations. In Morocco, many children in institutions have living parents and are placed there due to poverty, not abandonment. Short-term volunteers forming and breaking attachments can harm children. Support family reunification programs and established child welfare organizations instead.',
  },
  {
    title: 'Research the Organization Thoroughly',
    icon: ShieldCheck,
    description:
      'Before committing, research the organization\'s track record. Look for transparency about where your fees go, long-term presence in the community, local staff in leadership positions, and clear child protection policies. Check independent reviews on platforms like GoAbroad, Volunteer World, and Global Giving. Avoid organizations that guarantee "life-changing" experiences.',
  },
  {
    title: 'Long-Term Commitment Matters',
    icon: Clock,
    description:
      'Short stints of one or two weeks rarely create meaningful impact and can disrupt ongoing programs. The most effective volunteer placements last at least four weeks, allowing you to understand the context, build relationships, and contribute meaningfully. If you can only spare two weeks, consider donating to a trusted organization instead.',
  },
  {
    title: 'Respect Local Culture and Knowledge',
    icon: Globe,
    description:
      'You are a guest in Morocco. Approach your volunteer work with humility and a learning mindset. Local people are experts in their own lives and context. Dress modestly, learn basic Darija phrases, observe Ramadan etiquette, and follow your host community\'s lead. The best volunteers listen more than they speak and ask before they assume.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: VISA & LEGAL INFORMATION
   ═══════════════════════════════════════════════════════════════ */

const visaInfo = [
  {
    title: 'Tourist Visa (90 Days)',
    icon: FileText,
    description:
      'Citizens of most Western countries receive a free 90-day tourist visa on arrival. Many short-term volunteer programs (under 90 days) operate under this visa. However, technically, unpaid volunteer work exists in a legal gray area under tourist visas. For stays under 90 days with established organizations, this is generally accepted.',
  },
  {
    title: 'Volunteer Visa / Work Permit',
    icon: Briefcase,
    description:
      'For stays exceeding 90 days or formal volunteer positions, you may need a volunteer visa or temporary residency permit. Your host organization should handle the application process. Required documents typically include a letter of invitation from the Moroccan organization, proof of accommodation, travel insurance, and proof of funds.',
  },
  {
    title: 'Visa Extension',
    icon: Clock,
    description:
      'If your volunteer program extends beyond 90 days, you can apply for an extension at the local police station (Surete Nationale) before your visa expires. Bring your passport, the organization\'s letter, proof of accommodation, and passport-size photos. Processing takes 1-2 weeks and costs from 300 MAD. Apply at least two weeks before expiry.',
  },
  {
    title: 'Insurance Requirements',
    icon: ShieldCheck,
    description:
      'Comprehensive travel insurance is mandatory for all volunteer programs. Your policy must cover medical emergencies, evacuation, and personal liability. Some organizations require a minimum coverage of 500,000 MAD for medical expenses. Verify that your policy covers volunteer activities, as standard travel insurance often excludes manual labor.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST ORGANIZATIONS
   ═══════════════════════════════════════════════════════════════ */

const bestOrganizations = [
  {
    name: 'Volunteer Morocco (VolMar)',
    focus: 'Teaching, Community Development, Women\'s Empowerment',
    locations: 'Marrakech, Atlas Mountains, Essaouira',
    cost: 'From 2,500 MAD per week (includes accommodation and meals)',
    established: '2008',
    description:
      'One of the longest-running volunteer organizations in Morocco with a strong reputation for ethical practices. All programs are designed in partnership with local communities. Local Moroccan staff manage day-to-day operations. Over 80% of fees go directly to community projects.',
    highlights: ['80%+ fees to community', 'Local staff leadership', '15+ years operating', 'Transparent financial reporting'],
  },
  {
    name: 'Morocco Education & Development (MED)',
    focus: 'Education, Literacy, Youth Development',
    locations: 'Fes, Meknes, Rural Middle Atlas',
    cost: 'From 2,000 MAD per week (includes accommodation)',
    established: '2012',
    description:
      'Focused exclusively on education, MED partners with government schools and community centers to improve literacy rates and educational outcomes. Volunteers work alongside Moroccan teachers and are supervised by experienced program coordinators. Background checks are mandatory for all volunteers.',
    highlights: ['Education specialists', 'Government school partnerships', 'Mandatory background checks', 'Experienced coordinators'],
  },
  {
    name: 'Atlas Conservation Alliance',
    focus: 'Wildlife Conservation, Reforestation, Environmental Education',
    locations: 'Souss-Massa, Middle Atlas, High Atlas',
    cost: 'From 3,000 MAD per week (includes field accommodation)',
    established: '2015',
    description:
      'A conservation-focused organization working to protect Morocco\'s endangered ecosystems. Programs are led by Moroccan biologists and environmental scientists. Volunteers contribute to real research projects with published outcomes. Partnership with the Moroccan Ministry of Environment ensures institutional support.',
    highlights: ['Led by Moroccan scientists', 'Published research outcomes', 'Government partnerships', 'Real conservation impact'],
  },
  {
    name: 'Cooperative Development Network (CDN)',
    focus: 'Women\'s Cooperatives, Fair Trade, Economic Empowerment',
    locations: 'Marrakech, Taroudant, Tiznit, Essaouira',
    cost: 'From 2,500 MAD per week (includes homestay accommodation)',
    established: '2010',
    description:
      'Works exclusively with women\'s cooperatives across southern Morocco, helping them develop sustainable businesses. Volunteers with business, marketing, or digital skills are especially valued. The organization operates on a fair trade model and has helped over 40 cooperatives access international markets.',
    highlights: ['40+ cooperatives supported', 'Fair trade certified', 'Homestay with families', 'Business skill focus'],
  },
  {
    name: 'Green Morocco Foundation',
    focus: 'Organic Farming, Permaculture, Sustainable Tourism',
    locations: 'Ourika Valley, Chefchaouen, Rif Mountains',
    cost: 'From 2,000 MAD per week (includes farm accommodation and meals)',
    established: '2014',
    description:
      'Promotes sustainable agriculture and eco-tourism in rural Morocco. Volunteers live and work on organic farms, learning traditional and modern farming techniques. The foundation also runs a sustainable tourism program that helps rural communities benefit from tourism without environmental degradation.',
    highlights: ['Farm-to-table living', 'Permaculture training', 'Eco-tourism development', 'Rural community focus'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const packingTips = [
  {
    category: 'Clothing',
    icon: Luggage,
    items: [
      'Modest clothing covering shoulders and knees (essential for rural areas)',
      'Sturdy closed-toe shoes or hiking boots for fieldwork',
      'Lightweight long-sleeved shirts for sun protection',
      'A warm fleece or jacket for mountain evenings (temperatures drop significantly)',
      'Rain jacket for winter months (November-March)',
      'Sandals for indoor use and relaxation',
    ],
  },
  {
    category: 'Health & Safety',
    icon: ShieldCheck,
    items: [
      'Comprehensive first aid kit with any personal medications',
      'Strong SPF 50+ sunscreen (expensive to buy locally)',
      'Insect repellent (especially for rural and agricultural areas)',
      'Water purification tablets or a reusable filter bottle',
      'Hand sanitizer and wet wipes (essential for rural placements)',
      'Copies of travel insurance documents and emergency contacts',
    ],
  },
  {
    category: 'Work Essentials',
    icon: Briefcase,
    items: [
      'Teaching materials: flashcards, stickers, markers, coloring supplies',
      'A good quality notebook and pens for planning',
      'Portable solar charger or power bank (rural areas have inconsistent electricity)',
      'Headlamp or flashlight with extra batteries',
      'Work gloves for construction or farming projects',
      'Reusable water bottle (at least 1 liter capacity)',
    ],
  },
  {
    category: 'Cultural & Personal',
    icon: Globe,
    items: [
      'Arabic/Darija phrasebook or language app downloaded offline',
      'Small gifts from your home country for host families (avoid candy for children)',
      'Photos of your family and home to share with locals',
      'A journal for reflection and documenting your experience',
      'Adapter plugs (Morocco uses Type C and E, 220V)',
      'Unlocked phone for a local Moroccan SIM card (from 30 MAD)',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: COST BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const costBreakdown = [
  { item: 'Program fee (teaching/community)', price: 'From 2,000 MAD per week', note: 'Includes accommodation, some meals' },
  { item: 'Program fee (conservation/fieldwork)', price: 'From 3,000 MAD per week', note: 'Includes field accommodation, meals, transport' },
  { item: 'Program fee (women\'s cooperatives)', price: 'From 2,500 MAD per week', note: 'Includes homestay, meals, project costs' },
  { item: 'International flights (Europe)', price: 'From 2,000 MAD round trip', note: 'Budget airlines, book 2-3 months ahead' },
  { item: 'International flights (North America)', price: 'From 8,000 MAD round trip', note: 'Book 3-4 months ahead for best prices' },
  { item: 'Travel insurance (4 weeks)', price: 'From 500 MAD', note: 'Must cover volunteer activities' },
  { item: 'Visa (90-day tourist)', price: 'Free on arrival', note: 'For most Western nationalities' },
  { item: 'Local SIM card + data', price: 'From 30 MAD', note: 'Maroc Telecom or Orange recommended' },
  { item: 'Personal spending money', price: 'From 500 MAD per week', note: 'For excursions, snacks, souvenirs' },
  { item: 'TEFL certificate (if needed)', price: 'From 1,500 MAD online', note: 'Online courses, 120+ hours recommended' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Do I need to speak Arabic or French to volunteer in Morocco?',
    answer:
      'No, most volunteer organizations operate primarily in English and provide orientation in English. However, learning basic Darija (Moroccan Arabic) phrases will greatly enhance your experience and show respect to your host community. French is widely spoken in cities and can be helpful. Many programs include basic language lessons as part of the orientation.',
  },
  {
    question: 'Is it safe to volunteer in Morocco?',
    answer:
      'Morocco is one of the safest countries in Africa for volunteers and travelers. The country has a stable government and strong security infrastructure. Rural areas where many programs operate are particularly safe. Reputable organizations provide comprehensive safety briefings, 24/7 emergency support, and vetted accommodation. Standard travel precautions apply, especially in busy urban areas.',
  },
  {
    question: 'What is the best time of year to volunteer in Morocco?',
    answer:
      'Most programs run year-round, but the best periods are March to May and September to November when temperatures are moderate. Summer (June-August) can be extremely hot, especially in inland and southern areas, making physical work challenging. Winter (December-February) is ideal for coastal programs but cold in mountain regions. During Ramadan, programs may have adjusted schedules.',
  },
  {
    question: 'How much does it cost to volunteer in Morocco?',
    answer:
      'Program fees typically range from 2,000 MAD to 3,500 MAD per week, which usually covers accommodation, some or all meals, project materials, and local support. Be wary of programs charging significantly more, as high fees do not always correlate with better impact. Budget an additional 500 MAD per week for personal expenses. Total cost for a 4-week program including flights from Europe: from 15,000 MAD.',
  },
  {
    question: 'Can I volunteer in Morocco for just one or two weeks?',
    answer:
      'While some programs accept two-week placements, most ethical organizations recommend a minimum of four weeks. Short placements rarely allow enough time to understand the context, build relationships, and contribute meaningfully. They can also disrupt ongoing programs. If you have only one or two weeks, consider a structured cultural immersion program instead, or donate to a trusted organization.',
  },
  {
    question: 'What qualifications or experience do I need?',
    answer:
      'Requirements vary by program. Teaching programs prefer TEFL certification but often accept enthusiastic volunteers with strong English skills. Conservation programs welcome anyone with an interest in the environment. Construction projects require no prior experience as training is provided on-site. Programs working with children require background checks and often a minimum age of 21. A genuine desire to help and cultural sensitivity are the most important qualifications.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoVolunteeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-volunteering.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Volunteering in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <HandHeart className="w-4 h-4" />
            Volunteer &amp; Give Back
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Volunteering in Morocco:
            <br className="hidden md:block" /> Your Complete Ethical Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From teaching English in Atlas Mountain schools to wildlife conservation and women&apos;s
            cooperatives. Make a real difference with responsible volunteer programs from 2,000 MAD per week.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Volunteer in Morocco?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at the crossroads of Africa, Europe, and the Arab world, and its challenges
                reflect this unique position. Rural communities in the Atlas Mountains and the Saharan
                fringe face limited access to education, healthcare, and economic opportunity. Urban
                centers grapple with youth unemployment and rapid modernization. Across the country,
                environmental pressures threaten biodiversity and traditional farming practices.
              </p>
              <p>
                For volunteers, Morocco offers something rare: the chance to contribute to meaningful
                projects in a country that is safe, welcoming, and culturally rich. You will not just
                volunteer; you will drink mint tea with Berber families in mountain villages, learn to
                cook tagine with your host mother, hike through cedar forests, and experience a culture
                that has been shaped by millennia of history.
              </p>
              <p>
                But volunteering must be done responsibly. This guide will help you find ethical
                programs that genuinely benefit Moroccan communities, avoid common pitfalls of
                voluntourism, and prepare for an experience that transforms both you and the
                people you work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ethical Volunteering Guidelines ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ethical Volunteering: What You Must Know
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Before choosing a program, understand the principles of responsible volunteering. Good intentions are not enough. Your presence should help, not harm.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicalGuidelines.map((guideline) => {
              const GuidelineIcon = guideline.icon;
              return (
                <div key={guideline.title} className="card-moroccan p-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-4">
                    <GuidelineIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    {guideline.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{guideline.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Volunteer Programs ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Volunteer Programs in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Six diverse volunteer opportunities across Morocco, from teaching in mountain schools to protecting endangered wildlife.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak periods (June-August) when accommodation costs may increase.
          </p>

          <div className="space-y-8">
            {volunteerPrograms.map((program) => {
              const ProgramIcon = program.icon;
              return (
                <div key={program.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ProgramIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {program.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Building className="w-3.5 h-3.5" />
                          {program.organization}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {program.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {program.duration}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                      <DollarSign className="w-3 h-3 inline mr-1" />
                      {program.cost}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">{program.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        What You Will Do
                      </h4>
                      <div className="space-y-2">
                        {program.whatYouDo.map((task, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        Requirements
                      </h4>
                      <div className="space-y-2">
                        {program.requirements.map((req, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <Info className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                            {req}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Trusted Organizations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Trusted Volunteer Organizations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            These organizations have strong track records of ethical practices, community partnerships, and transparent operations in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Program fees shown are starting prices. Costs vary by season, program type, and duration. Longer commitments often receive discounted rates.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bestOrganizations.map((org) => (
              <div key={org.name} className="card-moroccan p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {org.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">Established {org.established}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--surface-muted)] text-[var(--text-secondary)]">
                    <Briefcase className="w-3 h-3 inline mr-1" />
                    {org.focus}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {org.locations}
                  </span>
                  <span className="flex items-center gap-1 text-[var(--color-accent)] font-semibold">
                    <DollarSign className="w-3 h-3" />
                    {org.cost}
                  </span>
                </div>

                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{org.description}</p>

                <div className="grid grid-cols-2 gap-2">
                  {org.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
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

      {/* ── Cost Breakdown ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Volunteer Cost Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A transparent look at what volunteering in Morocco actually costs, from program fees to daily expenses.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak summer months (June-August) and holiday periods.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Cost</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {costBreakdown.map((item, i) => (
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

      {/* ── Visa & Legal Information ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FileText className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visa &amp; Legal Requirements
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding visa requirements is essential before committing to a volunteer program in Morocco.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {visaInfo.map((visa, index) => {
                  const VisaIcon = visa.icon;
                  return (
                    <div key={visa.title} className="relative flex gap-6">
                      {/* Step number circle */}
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <VisaIcon className="w-5 h-5 text-white" />
                      </div>

                      <div className="card-moroccan p-6 flex-1">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                          {visa.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{visa.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for Volunteer Work
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Packing for a volunteer trip is different from packing for a vacation. Here is what you actually need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packingTips.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-2.5">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Volunteers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Learn Basic Darija
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Even a few words of Moroccan Arabic go a long way. Learn: &quot;Salam&quot; (hello),
                &quot;Shukran&quot; (thank you), &quot;La bas?&quot; (how are you?), and &quot;Bismillah&quot; (in God&apos;s name,
                said before eating). Your host community will appreciate the effort enormously.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dress Modestly
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In rural Morocco, modest dress is essential. Cover shoulders and knees. Loose-fitting,
                lightweight clothing in natural fabrics works best. In cities you can dress more casually,
                but during volunteer work, err on the side of modesty. This applies to all genders.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Manage Expectations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Volunteering is not a vacation and it is not always glamorous. There will be days of
                frustration, miscommunication, and slow progress. This is normal. The most impactful
                volunteers are those who stay patient, flexible, and open to learning from the experience.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Respect Ramadan
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If your placement falls during Ramadan, do not eat, drink, or smoke in public during
                fasting hours. Your host organization will advise you on adjusted schedules. Many
                volunteers find Ramadan to be the most culturally enriching time, with iftar meals
                shared communally and a spirit of generosity in the community.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping &amp; Gift Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                When staying with host families, small gifts from your home country are appreciated.
                Avoid giving money directly to individuals, especially children, as this can create
                dependency. If you want to contribute financially, donate to the organization or a
                community fund rather than to individuals.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Document Responsibly
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always ask permission before photographing people, especially children. Never post
                images of vulnerable individuals on social media without explicit consent from them
                and the organization. Share stories of empowerment and dignity, not poverty and pity.
                Your host community are partners, not props for your social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/culture" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Understand Moroccan traditions, customs, and social norms before your volunteer placement.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/safety" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Safety in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential safety information, health tips, and emergency contacts for travelers and volunteers.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/backpacking" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Briefcase className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Backpacking Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Budget travel tips, hostel recommendations, and itineraries for exploring Morocco on a shoestring.
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

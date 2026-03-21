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
  MessageCircleQuestion,
  HandHeart,
  TreeDeciduous,
  GraduationCap,
  Globe,
  FileText,
  Compass,
  Leaf,
  Dog,
  HandCoins,
  CircleAlert,
  Scale,
  CalendarDays,
  Briefcase,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-volunteering`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Volunteering in Morocco 2026 | Ethical Programs, Teaching, Wildlife & Community Projects',
  description:
    'Complete guide to volunteering in Morocco. Ethical volunteering principles, teaching English programs, animal welfare sanctuaries, environmental projects, women\'s cooperatives, reputable organizations like Peace Corps and Workaway, visa requirements, costs, and how to make a genuine impact.',
  keywords: [
    'volunteering in Morocco',
    'Morocco volunteer programs',
    'teach English Morocco',
    'ethical volunteering Morocco',
    'voluntourism Morocco',
    'animal welfare Morocco',
    'Morocco environmental volunteering',
    'women cooperatives Morocco',
    'Peace Corps Morocco',
    'Workaway Morocco',
    'AIESEC Morocco',
    'volunteer visa Morocco',
    'impact tourism Morocco',
    'community projects Morocco',
    'volunteer teaching Morocco 2026',
    'Morocco volunteer costs',
    'responsible volunteering Africa',
    'Morocco charity work',
  ],
  openGraph: {
    title: 'Volunteering in Morocco 2026 | Ethical Programs, Teaching, Wildlife & Community Projects',
    description:
      'How to volunteer responsibly in Morocco: ethical principles, teaching and language programs, animal welfare, tree planting and beach cleanups, women\'s cooperatives, trusted organizations, visa rules, and real costs.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Volunteers working with a women\'s cooperative in rural Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volunteering in Morocco 2026 | Ethical Programs & Community Projects',
    description:
      'Ethical volunteering in Morocco: teaching English, animal welfare, environmental projects, women\'s cooperatives, reputable organizations, visa info, and costs.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Do I need a special visa to volunteer in Morocco?',
    a: 'Most nationalities receive a 90-day tourist visa on arrival, which covers short-term volunteer placements. However, a tourist visa technically does not authorize work. For formal programs lasting over 90 days or involving paid positions, you need a work permit or student visa arranged through the sponsoring organization. Peace Corps and similar government-backed programs handle visa paperwork on your behalf. Always confirm visa requirements with the Moroccan consulate in your country before departure.',
  },
  {
    q: 'How much does it cost to volunteer in Morocco?',
    a: 'Costs vary widely. Workaway and similar platforms charge an annual membership fee of from 50 USD, and hosts provide free room and board in exchange for 4-5 hours of work per day. Organized volunteer programs through agencies charge from 200 to 800 USD per week, which typically covers accommodation, meals, and project costs. Budget for personal expenses, travel insurance, flights, and local transport separately. Seasonal pricing can change based on demand.',
  },
  {
    q: 'What are the red flags of unethical volunteer programs?',
    a: 'Watch out for programs that let you work with vulnerable children without background checks, orphanages that recruit children to attract volunteer fees, organizations that charge high fees with no transparency about where the money goes, projects that replace local workers with unskilled foreigners, and any program that guarantees placements without an application or interview process. If a program feels more like a tourist attraction than a working project, it probably is.',
  },
  {
    q: 'Can I volunteer in Morocco without speaking French or Arabic?',
    a: 'Yes, especially in English-teaching programs where your native English is the skill being offered. Many international organizations operate in English internally. That said, learning basic Darija (Moroccan Arabic) or French phrases goes a long way in daily life and shows respect. Programs in tourist cities like Marrakech and Essaouira have more English speakers, while rural placements benefit greatly from some French.',
  },
  {
    q: 'How long should I volunteer in Morocco to make a real impact?',
    a: 'A minimum of four weeks is recommended for most programs. Two-week placements are common but often benefit the volunteer more than the community. Teaching programs typically request a three-month commitment because students need consistency. Environmental projects like tree planting can be meaningful in shorter stints. The longer you stay, the deeper your cultural integration and the more useful you become to the project.',
  },
  {
    q: 'Is it safe to volunteer in rural Morocco as a solo traveler?',
    a: 'Rural Morocco is generally very safe, and communities tend to be protective of volunteers. Reputable organizations vet host families and provide emergency contacts. Solo women volunteers should follow the same precautions as solo female travelers: dress modestly in conservative areas, inform your coordinator of your whereabouts, and carry a local SIM card. Most volunteers report that rural communities are incredibly welcoming.',
  },
  {
    q: 'What qualifications do I need to teach English in Morocco?',
    a: 'Formal teaching positions at language schools require a TEFL, TESOL, or CELTA certificate and often a bachelor\'s degree. Volunteer teaching programs are less strict -- being a native or fluent English speaker is usually sufficient. Having classroom experience or a TEFL certification strengthens your application and makes you more effective. Some programs provide on-site training before you begin.',
  },
  {
    q: 'Can I combine volunteering with traveling around Morocco?',
    a: 'Absolutely. Many volunteers work weekdays and explore on weekends. Workaway hosts typically give two days off per week. Organized programs often include cultural excursions. A common approach is to volunteer for four to eight weeks in one location, then spend two to three weeks traveling independently afterward. Just be transparent with your program about your travel plans and honor your commitment dates.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Volunteering in Morocco 2026 - Ethical Programs, Teaching, Wildlife & Community Projects',
  description:
    'Complete guide to volunteering in Morocco covering ethical principles, teaching English, animal welfare, environmental projects, women\'s cooperatives, reputable organizations, visa requirements, and costs.',
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
      { '@type': 'ListItem', position: 2, name: 'Volunteering in Morocco', item: PAGE_URL },
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
   DATA: VOLUNTEER CATEGORIES
   ================================================================ */

const volunteerCategories = [
  {
    title: 'Teaching English & French',
    icon: GraduationCap,
    description:
      'Language education is Morocco\'s most in-demand volunteer skill. Rural schools often have one overworked teacher for dozens of students, and conversational practice with a native speaker makes a measurable difference. Programs range from formal classroom teaching to informal conversation clubs in community centers.',
    locations: 'Marrakech, Fes, Rabat, Atlas Mountain villages, Rif region',
    commitment: 'Minimum 4 weeks recommended, 3 months ideal',
    cost: 'From 0 MAD with Workaway (free room/board) to from 3,000 MAD/week with organized programs',
    skills: 'Native or fluent English/French, TEFL certificate preferred but not always required',
  },
  {
    title: 'Animal Welfare & Sanctuaries',
    icon: Dog,
    description:
      'Morocco has a significant stray animal population, and several organizations run spay/neuter campaigns, rescue operations, and sanctuary care. Donkey and mule welfare is a particular focus because these working animals are essential to daily life in medinas and mountain villages but often lack veterinary care.',
    locations: 'Marrakech, Essaouira, Tangier, Chefchaouen, rural Atlas',
    commitment: 'Minimum 2 weeks, ongoing positions available',
    cost: 'From 1,500 MAD/week with most organizations covering accommodation',
    skills: 'No formal qualifications needed; veterinary students especially welcome',
  },
  {
    title: 'Environmental Conservation',
    icon: TreeDeciduous,
    description:
      'Morocco faces deforestation, water scarcity, and coastal erosion. Volunteer projects include tree planting in the Atlas Mountains, beach cleanup campaigns along the Atlantic coast, water conservation education, and supporting sustainable agriculture. The High Atlas Foundation runs large-scale reforestation programs.',
    locations: 'High Atlas, Souss-Massa, Atlantic coast, Anti-Atlas',
    commitment: 'Minimum 1 week for cleanups, 4+ weeks for planting programs',
    cost: 'From 500 MAD/week for organized programs, some offer free placement',
    skills: 'Physical fitness for outdoor work; agricultural knowledge is a bonus',
  },
  {
    title: 'Women\'s Empowerment & Cooperatives',
    icon: Users,
    description:
      'Women\'s cooperatives across Morocco produce argan oil, saffron, carpets, and handicrafts. Volunteers help with business skills training, marketing, English instruction, website development, and product design. These cooperatives give women in conservative rural areas economic independence and decision-making power.',
    locations: 'Essaouira region (argan), Ouarzazate (saffron), Middle Atlas (carpets), Chefchaouen',
    commitment: 'Minimum 4 weeks to build trust and deliver results',
    cost: 'From 0 MAD with some cooperatives offering room and meals, to from 2,000 MAD/week',
    skills: 'Business, marketing, digital skills, teaching; French language highly valued',
  },
  {
    title: 'Construction & Community Development',
    icon: Building,
    description:
      'Rural communities in the Atlas Mountains and eastern Morocco need help building schools, community centers, water systems, and solar installations. These projects pair volunteers with local builders, so you work alongside Moroccan craftsmen rather than replacing them. Prior construction experience makes you more useful, but many programs train beginners.',
    locations: 'High Atlas villages, Draa-Tafilalet, Oriental region',
    commitment: 'Minimum 2 weeks, with 4-8 weeks preferred',
    cost: 'From 1,000 MAD/week including basic accommodation and meals',
    skills: 'Construction experience welcome; physical fitness required',
  },
  {
    title: 'Healthcare & Public Health',
    icon: Heart,
    description:
      'Medical volunteering in Morocco is restricted to qualified professionals. Licensed doctors, nurses, dentists, and pharmacists can join medical missions or work in rural clinics where healthcare access is limited. Non-medical volunteers can support public health education campaigns covering hygiene, nutrition, and maternal health.',
    locations: 'Rural clinics nationwide, Rabat, Casablanca (hospital programs)',
    commitment: 'Minimum 4 weeks for clinical work, 2 weeks for health education',
    cost: 'From 2,500 MAD/week through medical volunteer organizations',
    skills: 'Medical degree or nursing qualification required for clinical work; French essential',
  },
];

/* ================================================================
   DATA: REPUTABLE ORGANIZATIONS
   ================================================================ */

const organizations = [
  {
    name: 'Peace Corps Morocco',
    type: 'Government program (US)',
    description: 'Two-year commitment with full language training, living stipend, and post-service benefits. Sectors include youth development, health, and environment. Highly competitive application process.',
    cost: 'Fully funded (stipend, housing, insurance provided)',
    website: 'peacecorps.gov',
  },
  {
    name: 'Workaway',
    type: 'Work exchange platform',
    description: 'Connects volunteers with hosts across Morocco. Typical arrangement: 4-5 hours of work per day in exchange for free room and board. Hosts include farms, hostels, language schools, and cooperatives. Read reviews carefully.',
    cost: 'From 50 USD annual membership; free room and board from hosts',
    website: 'workaway.info',
  },
  {
    name: 'AIESEC Morocco',
    type: 'International youth organization',
    description: 'Offers 6-8 week volunteer projects for young people aged 18-30. Projects focus on education, environment, and social impact. Includes cultural integration activities and leadership development.',
    cost: 'From 2,000 MAD program fee plus personal expenses',
    website: 'aiesec.org',
  },
  {
    name: 'High Atlas Foundation',
    type: 'Moroccan-American NGO',
    description: 'Focused on sustainable development in rural Morocco. Projects include tree planting (over 4 million trees planted), women\'s cooperatives, and youth education. One of the most established organizations in the country.',
    cost: 'Varies by program; some accept remote volunteers',
    website: 'highatlasfoundation.org',
  },
  {
    name: 'SPANA (Society for the Protection of Animals Abroad)',
    type: 'International animal welfare charity',
    description: 'Operates veterinary clinics for working animals across Morocco, focusing on donkeys, mules, and horses. Accepts qualified veterinary volunteers and fundraising supporters.',
    cost: 'Funded positions for qualified vets; fundraising volunteers work remotely',
    website: 'spana.org',
  },
  {
    name: 'WorldPackers',
    type: 'Work exchange platform',
    description: 'Similar to Workaway with a strong Morocco presence. Hosts include eco-lodges, surf camps, hostels, and NGOs. The platform verifies hosts and provides travel insurance partnerships.',
    cost: 'From 50 USD annual membership; free room and board from hosts',
    website: 'worldpackers.com',
  },
];

/* ================================================================
   DATA: ETHICAL VOLUNTEERING PRINCIPLES
   ================================================================ */

const ethicalPrinciples = [
  {
    title: 'Supplement, Never Replace Local Workers',
    text: 'Your role is to add capacity, not take jobs from Moroccans. Good programs hire local staff for core operations and use volunteers for supplementary tasks like language practice, skills transfer, or extra hands during peak periods.',
    icon: Scale,
  },
  {
    title: 'Long-Term Commitment Over Short Stays',
    text: 'One volunteer staying three months creates more impact than six volunteers staying two weeks each. Short placements create a revolving door that disrupts continuity for students, patients, and communities.',
    icon: CalendarDays,
  },
  {
    title: 'Skills-Based Contributions',
    text: 'Bring something the community actually needs. Teaching, medical skills, IT, marketing, and trades are valuable. Unskilled labor is abundant locally. If you lack specific skills, focus on programs where your cultural exchange itself is the contribution.',
    icon: Briefcase,
  },
  {
    title: 'Financial Transparency',
    text: 'Know where your program fees go. Ethical organizations publish their financials or break down costs upon request. At least 80% of your fee should go directly to the project. If an organization cannot explain its fee structure, walk away.',
    icon: HandCoins,
  },
  {
    title: 'Community-Led Development',
    text: 'The best programs are designed by the communities they serve, not by outsiders. Local leaders should be making decisions about project priorities. Volunteers who arrive with a savior complex do more harm than good.',
    icon: Users,
  },
  {
    title: 'Do No Harm with Children',
    text: 'Never volunteer with orphanages unless the organization is working to reunite children with families. Short-term attachments with rotating volunteers cause psychological damage. Any program working with children must require background checks.',
    icon: ShieldCheck,
  },
];

/* ================================================================
   DATA: VOLUNTOURISM RED FLAGS
   ================================================================ */

const redFlags = [
  'No application process, interview, or background check required',
  'Orphanage visits marketed as a tourist activity with drop-in access',
  'Program fees exceeding from 5,000 MAD per week with no financial transparency',
  'Volunteers performing work that unskilled local workers could do for fair wages',
  'Organization uses poverty-focused marketing with photos of sad children',
  'No local staff in leadership positions within the organization',
  'Guaranteed placement regardless of skills, experience, or suitability',
  'Program promises a life-changing experience for the volunteer rather than the community',
];

/* ================================================================
   DATA: COST BREAKDOWN
   ================================================================ */

const costBreakdown = [
  { item: 'Work exchange platform membership', range: 'From 400 MAD/year', notes: 'Workaway, WorldPackers -- covers listing access' },
  { item: 'Organized program fee (budget)', range: 'From 1,500 MAD/week', notes: 'Basic accommodation, meals, project costs' },
  { item: 'Organized program fee (mid-range)', range: 'From 3,000 MAD/week', notes: 'Better accommodation, cultural activities, airport pickup' },
  { item: 'Organized program fee (premium)', range: 'From 6,000 MAD/week', notes: 'Private room, excursions, in-country support, training' },
  { item: 'Travel insurance (volunteer coverage)', range: 'From 300 MAD/month', notes: 'Must cover volunteer activities, not just tourism' },
  { item: 'Local SIM card + data plan', range: 'From 50 MAD/month', notes: 'Maroc Telecom, Orange, or Inwi' },
  { item: 'Personal spending money', range: 'From 1,500 MAD/week', notes: 'Weekend travel, dining out, souvenirs, transport' },
  { item: 'TEFL certification (online)', range: 'From 1,500 MAD one-time', notes: 'If needed for teaching placements' },
];

/* ================================================================
   MAIN COMPONENT
   ================================================================ */

export default function MoroccoVolunteeringPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <img
          src="/images/hero-morocco.webp"
          alt="Volunteers working alongside local Moroccans on a community project in the Atlas Mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="container-morocco relative z-10 pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4 drop-shadow-lg">
            Volunteering in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow">
            How to give back responsibly -- teaching, animal welfare, reforestation,
            women&apos;s cooperatives, and the organizations that do it right.
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-default)]">
        <div className="container-morocco py-3 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[var(--text-primary)] font-medium">Volunteering in Morocco</span>
        </div>
      </nav>

      {/* ── Intro Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
            Morocco attracts thousands of international volunteers every year, drawn by the country&apos;s
            accessible location, diverse communities, and genuine need for support in education,
            environmental conservation, and social development. But volunteering abroad carries real
            responsibility. Done well, it creates lasting benefit for Moroccan communities and
            transformative experiences for participants. Done poorly, it exploits the people it claims
            to help.
          </p>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
            This guide covers how to volunteer ethically in Morocco, which programs and organizations
            have strong track records, what it actually costs, and how to ensure your time and skills
            create genuine impact rather than just good photos for social media.
          </p>

          <div className="card-moroccan p-6 mt-8">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Before You Apply
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Research any organization thoroughly before committing money or time. Read reviews from
                  past volunteers on independent platforms, ask for references, and confirm that the
                  program has legitimate local partnerships. The information in this guide is current as
                  of early 2026, but organizations and costs change. Seasonal pricing can change based
                  on demand and program availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ethical Volunteering Principles ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ethical Volunteering Principles
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These six principles separate meaningful volunteering from voluntourism that does more harm than good.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicalPrinciples.map((principle) => {
              const PrincipleIcon = principle.icon;
              return (
                <div key={principle.title} className="card-moroccan p-6">
                  <PrincipleIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{principle.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Red Flags Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-red-600 mr-2" />
            Voluntourism Red Flags
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            If you encounter any of these warning signs, reconsider the program. Unethical volunteer
            operations exist in Morocco just as they do in every popular volunteer destination.
          </p>

          <div className="card-moroccan p-6 border-l-4 border-l-red-500">
            <ul className="space-y-4">
              {redFlags.map((flag) => (
                <li key={flag} className="flex items-start gap-3">
                  <CircleAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{flag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-amber-50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  A Note on Orphanage Volunteering
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Morocco has an orphanage volunteering industry that deserves scrutiny. UNICEF and child
                  welfare experts agree that short-term orphanage visits by untrained volunteers harm
                  children psychologically. Some facilities actively recruit children from poor families
                  to fill beds and attract donor funding. If you want to support vulnerable children in
                  Morocco, donate to established Moroccan child welfare organizations or volunteer with
                  after-school programs that maintain consistent staffing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Volunteer Categories ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandHeart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Volunteer Programs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers volunteer opportunities across education, conservation, animal welfare,
            community development, and healthcare. Here is what each sector involves.
          </p>

          <div className="space-y-8">
            {volunteerCategories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div key={cat.title} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <CatIcon className="w-10 h-10 text-[var(--color-accent)] shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                        {cat.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Locations</span>
                            <p className="text-xs text-[var(--text-secondary)]">{cat.locations}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Commitment</span>
                            <p className="text-xs text-[var(--text-secondary)]">{cat.commitment}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <DollarSign className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Cost</span>
                            <p className="text-xs text-[var(--text-secondary)]">{cat.cost}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Skills Needed</span>
                            <p className="text-xs text-[var(--text-secondary)]">{cat.skills}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Teaching English Deep Dive ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <GraduationCap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Teaching English in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            English teaching is Morocco&apos;s highest-demand volunteer category. The Moroccan government
            has prioritized English language education, and demand far outpaces supply in rural areas.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Where the Need Is Greatest
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Urban areas like Rabat and Casablanca have established language schools and a pool of
                qualified Moroccan English teachers. The real gap is in rural Atlas Mountain villages,
                small towns in the Rif, and Saharan-edge communities where students may have one or
                two hours of English instruction per week from a teacher who is not fluent themselves.
                Your presence in these places creates opportunities that students simply would not have
                otherwise.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                What a Typical Day Looks Like
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morning classes usually run from 9:00 to 12:00, often with two different groups.
                Afternoons might include lesson planning, one-on-one tutoring, or conversation clubs.
                Some programs add after-school activities: sports, art, or technology workshops. Weekends
                are free. In rural placements, expect to eat meals with your host family and become a
                visible member of the community.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Getting Qualified
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A TEFL certificate (from 1,500 MAD for an online course) dramatically improves your
                teaching effectiveness and your application strength. The certificate teaches classroom
                management, lesson planning, and techniques for teaching grammar to non-native speakers.
                The 120-hour TEFL is standard. CELTA from Cambridge is the gold standard but costs
                significantly more. Some programs provide 1-2 weeks of in-country training before
                placing you in a classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Women's Cooperatives Deep Dive ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Women&apos;s Cooperatives &amp; Empowerment
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s cooperative movement has given thousands of rural women economic independence.
            Volunteers with business and digital skills are especially valuable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Argan Oil Cooperatives
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Concentrated in the Souss-Massa region between Essaouira and Agadir, these cooperatives
                employ women to crack, press, and package argan oil. Volunteers help with marketing,
                building online sales channels, and teaching basic business English to cooperative
                members who interact with international buyers.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Star className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Saffron Cooperatives
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The Taliouine region produces Morocco&apos;s prized saffron. Women harvest the delicate
                stigmas each October and November. Year-round, volunteers help with packaging design,
                export documentation, fair trade certification processes, and teaching digital literacy
                to cooperative leaders.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Carpet &amp; Textile Cooperatives
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Amazigh women in the Middle Atlas and Ouarzazate regions weave carpets using techniques
                passed down for generations. Volunteers with photography, social media, and e-commerce
                skills help cooperatives sell directly to international markets rather than through
                middlemen who take the majority of the profit.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Literacy &amp; Education Programs
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Adult literacy rates among rural Moroccan women remain lower than the national average.
                Several NGOs run literacy classes where volunteers teach basic reading, writing, and
                arithmetic alongside life skills. French literacy is the primary focus, but Arabic and
                English classes also exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Environmental Projects ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TreeDeciduous className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Environmental &amp; Conservation Projects
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s environmental challenges -- deforestation, plastic pollution, water scarcity --
            create meaningful opportunities for volunteers with a passion for conservation.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <TreeDeciduous className="w-5 h-5 text-[var(--color-gold)]" />
                Reforestation in the Atlas Mountains
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Morocco has lost an estimated 75% of its forest cover over the past century. The High
                Atlas Foundation and other organizations run tree-planting campaigns that have put
                millions of fruit and nut trees into the ground. Volunteers dig planting holes, prepare
                seedlings, and work alongside local farmers who will tend the trees long-term. Almond,
                walnut, carob, and olive trees provide both environmental and economic benefits.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Physical fitness matters for this work. Planting happens at altitudes above 1,500
                meters, often on steep terrain. The work is rewarding but tiring. Most programs provide
                accommodation in village guesthouses and meals prepared by local families.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[var(--color-gold)]" />
                Beach Cleanups &amp; Marine Conservation
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s 3,500 km of Atlantic and Mediterranean coastline faces serious plastic
                pollution. Volunteer-led beach cleanups operate regularly in Essaouira, Taghazout,
                Legzira, and around Tangier. Some organizations combine cleanup efforts with educational
                programs in coastal schools. The Surf Rider Foundation Morocco coordinates some of the
                largest annual cleanup events. Marine conservation projects near Dakhla and
                Souss-Massa National Park focus on protecting sea turtle nesting sites and monitoring
                coastal ecosystems.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-[var(--color-gold)]" />
                Sustainable Agriculture &amp; Permaculture
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Several farms and eco-projects across Morocco welcome volunteers interested in
                permaculture, organic farming, and water-efficient agriculture. Workaway and
                WorldPackers list dozens of such hosts, from small farms near Chefchaouen to larger
                operations in the Souss Valley. Volunteers learn traditional Moroccan irrigation
                methods (khettara systems), composting, and crop rotation while contributing labor
                during planting and harvest seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reputable Organizations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Reputable Organizations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These organizations have established track records in Morocco. Research each one
            independently before committing -- even reputable organizations have programs that
            work better than others.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizations.map((org) => (
              <div key={org.name} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {org.name}
                  </h3>
                </div>
                <p className="text-xs text-[var(--color-accent)] font-medium mb-3">{org.type}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {org.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <DollarSign className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  <span>{org.cost}</span>
                </div>
                <p className="text-xs text-[var(--color-accent)] mt-2">{org.website}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visa & Legal Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FileText className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visa &amp; Legal Requirements
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding Morocco&apos;s visa rules is essential before booking a volunteer placement.
            The legal framework for volunteering sits in a gray area that you should navigate carefully.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--color-gold)]" />
                Tourist Visa (Up to 90 Days)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Citizens of the US, EU, UK, Canada, Australia, and many other countries receive a
                90-day tourist visa stamp on arrival. No advance application needed. This covers most
                short-term volunteer placements, though technically a tourist visa does not authorize
                any form of work. Most volunteer organizations operate within this gray area for
                unpaid, short-term placements. Keep your passport valid for at least six months beyond
                your entry date.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--color-gold)]" />
                Extending Beyond 90 Days
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                If your volunteer commitment exceeds 90 days, you have two options. First, exit and
                re-enter Morocco (a trip to Spain, Portugal, or the Canary Islands resets your 90-day
                clock in most cases). Second, apply for a visa extension at the local prefecture, which
                requires documentation from your sponsoring organization. Peace Corps volunteers receive
                a special status visa handled entirely by the program. For long-term teaching positions
                at language schools, a work contract and work permit are required.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--color-gold)]" />
                Insurance Requirements
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Standard travel insurance does not cover volunteer activities. You need a policy that
                explicitly covers volunteer work, manual labor (if applicable), and emergency medical
                evacuation. World Nomads and SafetyWing both offer volunteer-specific coverage starting
                from 300 MAD per month. Confirm that your policy covers Morocco specifically and that
                it includes repatriation coverage. Seasonal pricing can change, so get quotes before
                your departure date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cost Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What It Actually Costs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Volunteering in Morocco is not free, but it can be remarkably affordable compared to
            volunteer programs in other countries. Here is a realistic breakdown.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/10">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Expense</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Cost</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] hidden md:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((row) => (
                    <tr key={row.item} className="border-t border-[var(--border-default)]">
                      <td className="p-4 text-[var(--text-primary)]">{row.item}</td>
                      <td className="p-4 text-[var(--color-accent)] font-medium whitespace-nowrap">{row.range}</td>
                      <td className="p-4 text-[var(--text-secondary)] hidden md:table-cell">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              Budget vs. Premium: What You Get
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Work exchange platforms like Workaway offer the cheapest path: from 400 MAD per year for
              membership, and hosts provide free accommodation and meals. You work 4-5 hours daily and
              arrange everything independently. This requires self-motivation and comfort with
              uncertainty.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Organized programs charge more but handle logistics: airport pickup, accommodation,
              meals, project placement, in-country support, and often cultural activities on weekends.
              For first-time volunteers or those who want structure, the premium is worth paying. A
              realistic all-in budget for a four-week organized program is from 15,000 to 30,000 MAD
              including flights, insurance, and personal spending. Seasonal pricing can change based
              on program demand.
            </p>
          </div>
        </div>
      </section>

      {/* ── Combining Travel & Volunteering ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Combining Travel with Volunteering
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most rewarding Morocco trips blend meaningful contribution with genuine exploration.
            Here are practical approaches to doing both well.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                The 6+2 Model
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Volunteer for six weeks in one location, then travel independently for two weeks.
                This gives you enough time to create real impact, build relationships with local
                people, and then explore Morocco with a much deeper understanding than a typical
                tourist.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Weekend Exploration
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most programs give you weekends off. Use them strategically. If you are volunteering
                in Marrakech, the Atlas Mountains are a 90-minute drive. From Essaouira, day trips to
                Sidi Kaouki or argan cooperatives are easy. From Fes, Meknes and Volubilis are an
                hour away by train or grand taxi.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Multi-Site Volunteering
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Some Workaway hosts allow you to split your time. Spend four weeks at a farm near
                Chefchaouen, then move to a hostel in Essaouira for another three weeks. This works
                best when you arrange it in advance and complete your full commitment at each location
                before moving on.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Impact Tourism
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If a full volunteer commitment does not fit your schedule, consider impact tourism:
                booking tours that directly benefit communities, buying from cooperatives, eating at
                social enterprises, and choosing accommodations that employ and train local staff. Your
                spending choices can create positive impact even without a formal placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Real questions from travelers planning to volunteer in Morocco.
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Digital Nomad Guide',
                description: 'Remote work visas, coworking spaces, internet speeds, and the best cities for digital nomads in Morocco.',
                href: '/morocco-digital-nomad',
                icon: Globe,
              },
              {
                title: 'Solo Travel Guide',
                description: 'Safety tips, accommodation, transport, and itineraries for solo travelers exploring Morocco independently.',
                href: '/morocco-solo-travel',
                icon: Compass,
              },
              {
                title: 'Berber Culture Guide',
                description: 'Amazigh heritage, traditions, languages, architecture, and how to experience Berber culture respectfully.',
                href: '/morocco-berber-culture',
                icon: Users,
              },
              {
                title: 'Visa & Entry Guide',
                description: 'Visa requirements by nationality, border crossing procedures, extensions, and residency permits.',
                href: '/morocco-visa-guide',
                icon: FileText,
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
            Ready to Make a Difference in Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
            The best volunteer experiences start with honest self-assessment. Ask yourself what skills
            you actually bring, how long you can genuinely commit, and what the community needs rather
            than what would look good on your resume. Morocco rewards volunteers who show up with
            humility, patience, and a willingness to learn as much as they teach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-solo-travel"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Solo Travel Guide
            </Link>
            <Link
              href="/morocco-visa-guide"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <FileText className="w-5 h-5" />
              Visa Requirements
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

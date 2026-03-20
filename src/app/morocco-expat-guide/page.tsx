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
  Globe,
  Wifi,
  GraduationCap,
  Briefcase,
  Landmark,
  Plane,
  Banknote,
  Stethoscope,
  HomeIcon,
  Sun,
  Coffee,
  Scale,
  FileText,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Living in Morocco as an Expat 2026 | Cost of Living, Visa, Housing & Lifestyle Guide',
  description:
    'Complete guide to living in Morocco as an expat. Cost of living breakdown, visa types (tourist, residence, retirement), best cities for expats, housing, healthcare, banking, international schools, digital nomad scene, and cultural adjustment tips.',
  keywords: [
    'living in morocco as an expat',
    'expat life morocco',
    'cost of living morocco',
    'moving to morocco',
    'morocco visa for expats',
    'retire in morocco',
    'morocco residence permit',
    'best cities morocco expats',
    'morocco digital nomad',
    'morocco healthcare expats',
    'morocco international schools',
    'morocco rent prices',
    'morocco banking expats',
    'expat community morocco',
    'morocco cultural adjustment',
    'morocco retirement visa',
    'marrakech expat life',
    'casablanca expat guide',
    'tangier expats',
    'essaouira digital nomads',
    'rabat expat community',
    'morocco work permit',
  ],
  openGraph: {
    title: 'Living in Morocco as an Expat 2026 | Cost of Living, Visa, Housing & Lifestyle',
    description:
      'Everything you need to know about moving to and living in Morocco. Visa types, cost of living, housing, healthcare, schools, banking, and cultural tips for expats and retirees.',
    url: `${BASE_URL}/morocco-expat-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Scenic Moroccan cityscape with traditional architecture and Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Living in Morocco as an Expat 2026 | Complete Guide',
    description:
      'Cost of living, visa options, best cities, housing, healthcare, and lifestyle tips for expats moving to Morocco. From digital nomads to retirees.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-expat-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-expat-guide`,
  name: 'Living in Morocco as an Expat 2026 | Cost of Living, Visa, Housing & Lifestyle Guide',
  description:
    'Complete guide to living in Morocco as an expat. Cost of living, visa types, best cities, housing, healthcare, banking, international schools, and cultural adjustment tips.',
  url: `${BASE_URL}/morocco-expat-guide`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-expat-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Living in Morocco as an Expat', item: `${BASE_URL}/morocco-expat-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to live in Morocco as an expat?', acceptedAnswer: { '@type': 'Answer', text: 'A single expat can live comfortably in Morocco for from 8,000 to 15,000 MAD per month (roughly 800-1,500 USD), depending on the city and lifestyle. Rent is the biggest expense, ranging from 3,000 MAD for a studio to 12,000 MAD for a luxury apartment.' } },
    { '@type': 'Question', name: 'Do I need a visa to live in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Citizens of many countries (USA, EU, UK, Canada, Australia) can enter Morocco visa-free for 90 days. To stay longer, you need a residence permit (carte de sejour), which requires proof of income, housing, and a clean criminal record. The process takes 2-4 months.' } },
    { '@type': 'Question', name: 'What are the best cities in Morocco for expats?', acceptedAnswer: { '@type': 'Answer', text: 'The top five cities are Marrakech (arts, culture, established expat scene), Casablanca (business hub, modern amenities), Essaouira (relaxed coastal lifestyle), Tangier (proximity to Europe, creative scene), and Rabat (diplomatic community, clean and orderly).' } },
    { '@type': 'Question', name: 'Can I work remotely from Morocco as a digital nomad?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Morocco is increasingly popular with digital nomads. Internet speeds are good in major cities (50-100 Mbps fiber). Coworking spaces exist in Marrakech, Casablanca, Essaouira, and Tangier. You can stay 90 days visa-free on a tourist entry.' } },
    { '@type': 'Question', name: 'Is Morocco a good place to retire?', acceptedAnswer: { '@type': 'Answer', text: 'Morocco is an excellent retirement destination. The cost of living is 60-70% lower than Western Europe. The climate is warm and sunny. Healthcare is affordable. There is a retirement-friendly residence permit for those with a pension or passive income.' } },
    { '@type': 'Question', name: 'How is the healthcare system in Morocco for expats?', acceptedAnswer: { '@type': 'Answer', text: 'Expats primarily use private clinics and hospitals, which offer good quality care at affordable prices. A doctor consultation costs from 200-400 MAD. Private health insurance costs from 3,000 MAD per month. Major cities have well-equipped private hospitals.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: WHY EXPATS CHOOSE MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const whyMoroccoReasons = [
  {
    title: 'Affordable Cost of Living',
    icon: DollarSign,
    description: 'Live comfortably for 60-70% less than Western Europe or North America. A couple can enjoy a great lifestyle from 12,000 MAD per month including rent, dining out, and entertainment.',
  },
  {
    title: 'Year-Round Sunshine',
    icon: Sun,
    description: 'Morocco enjoys 300+ days of sunshine annually. The climate ranges from Mediterranean on the coast to warm and dry inland, making it ideal for those escaping northern winters.',
  },
  {
    title: 'Strategic Location',
    icon: Plane,
    description: 'Just 2-3 hours by flight from major European cities. Morocco serves as a gateway between Europe and Africa, with excellent air connections to Paris, London, Madrid, and beyond.',
  },
  {
    title: 'Rich Culture & History',
    icon: Landmark,
    description: 'Ancient medinas, vibrant souks, stunning architecture, and a cuisine that ranks among the world&apos;s best. Morocco offers an endlessly fascinating cultural experience for long-term residents.',
  },
  {
    title: 'Welcoming Community',
    icon: Users,
    description: 'Moroccan hospitality is legendary. The country has a well-established expat community, particularly in Marrakech, Essaouira, and Tangier, making integration smoother for newcomers.',
  },
  {
    title: 'Safety & Stability',
    icon: ShieldCheck,
    description: 'Morocco is one of the safest countries in Africa and the Middle East. Political stability, a modern infrastructure, and a proactive approach to security make it a reliable home base.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: VISA TYPES
   ═══════════════════════════════════════════════════════════════ */

const visaTypes = [
  {
    type: 'Tourist Entry (Visa-Free)',
    icon: Plane,
    duration: '90 days',
    cost: 'Free',
    description: 'Citizens of 69 countries (including USA, UK, EU, Canada, Australia) can enter visa-free for 90 days. No extensions possible; you must leave and re-enter for a new 90-day period.',
    requirements: ['Valid passport (6+ months)', 'Return ticket or onward travel', 'Proof of accommodation', 'Sufficient funds'],
  },
  {
    type: 'Residence Permit (Carte de Sejour)',
    icon: FileText,
    duration: '1 year (renewable)',
    cost: 'From 300 MAD application fee',
    description: 'The standard long-term residency option. Apply at your local prefecture within 90 days of arrival. Processing takes 2-4 months. After 5 consecutive years, you can apply for a 10-year permit.',
    requirements: ['Proof of income or employment', 'Rental contract or property deed', 'Criminal background check', 'Medical certificate', 'Passport photos', 'Completed application forms'],
  },
  {
    type: 'Retirement Residence Permit',
    icon: Heart,
    duration: '1 year (renewable)',
    cost: 'From 300 MAD application fee',
    description: 'Specifically for retirees with pension income or passive revenue. Requires proof of regular income transferred to a Moroccan bank. A popular option for European retirees seeking sun and affordability.',
    requirements: ['Proof of pension or passive income', 'Moroccan bank account with regular deposits', 'Rental contract or property deed', 'Medical certificate', 'Criminal background check'],
  },
  {
    type: 'Work Permit (Contrat de Travail)',
    icon: Briefcase,
    duration: 'Tied to employment contract',
    cost: 'Employer-sponsored',
    description: 'Required if you are employed by a Moroccan company. Your employer handles most of the paperwork through ANAPEC (national employment agency). The process can take 2-3 months.',
    requirements: ['Job offer from Moroccan employer', 'ANAPEC approval', 'Professional qualifications', 'Medical certificate', 'Criminal background check'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: COST OF LIVING
   ═══════════════════════════════════════════════════════════════ */

const costOfLiving = [
  { category: 'Studio apartment (center)', price: 'From 3,000 MAD/mo', note: 'Varies by city and area' },
  { category: '2-bed apartment (center)', price: 'From 5,000 MAD/mo', note: 'Modern with elevator' },
  { category: 'Riad rental (medina)', price: 'From 7,000 MAD/mo', note: 'Traditional, often furnished' },
  { category: 'Groceries (one person)', price: 'From 1,500 MAD/mo', note: 'Local markets cheapest' },
  { category: 'Local restaurant meal', price: 'From 40 MAD', note: 'Tagine, couscous, grills' },
  { category: 'Mid-range restaurant', price: 'From 120 MAD/person', note: 'International cuisine' },
  { category: 'Utilities (elec/water/gas)', price: 'From 500 MAD/mo', note: 'Higher in summer (A/C)' },
  { category: 'Fiber internet', price: 'From 200 MAD/mo', note: '50-100 Mbps available' },
  { category: 'Mobile phone plan', price: 'From 50 MAD/mo', note: '4G/5G data plans' },
  { category: 'Public transport', price: 'From 200 MAD/mo', note: 'Tram pass Casa/Rabat' },
  { category: 'Petrol (per liter)', price: 'From 13 MAD', note: 'Diesel slightly less' },
  { category: 'Gym membership', price: 'From 300 MAD/mo', note: 'Premium from 600 MAD' },
  { category: 'Health insurance', price: 'From 3,000 MAD/mo', note: 'Comprehensive private' },
  { category: 'Domestic help', price: 'From 2,500 MAD/mo', note: 'Common among expats' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST CITIES FOR EXPATS
   ═══════════════════════════════════════════════════════════════ */

const expatCities = [
  {
    city: 'Marrakech',
    icon: Star,
    tagline: 'The Cultural Capital',
    monthlyBudget: 'From 10,000 MAD/month',
    description: 'The most popular expat destination in Morocco. Marrakech offers a vibrant arts scene, world-class dining, and an established international community. The medina is a living museum, while Gueliz and Hivernage offer modern European-style living. Many expats renovate riads in the medina as passion projects.',
    pros: ['Large expat community', 'Rich cultural scene', 'International restaurants', 'Good healthcare facilities'],
    cons: ['Hot summers (40C+)', 'Tourist-heavy areas', 'Higher prices than other cities', 'Traffic congestion'],
  },
  {
    city: 'Casablanca',
    icon: Building,
    tagline: 'The Business Hub',
    monthlyBudget: 'From 12,000 MAD/month',
    description: 'Morocco&apos;s economic capital and largest city. Casablanca is where most multinational companies are headquartered. It offers the most modern infrastructure, best shopping malls, and a cosmopolitan nightlife scene. The Corniche beachfront and Anfa neighborhood are popular with well-off expats.',
    pros: ['Best job market', 'Modern infrastructure', 'International schools', 'Direct flights worldwide'],
    cons: ['Most expensive city', 'Less traditional charm', 'Traffic and pollution', 'Less walkable than other cities'],
  },
  {
    city: 'Essaouira',
    icon: Sun,
    tagline: 'The Coastal Escape',
    monthlyBudget: 'From 7,000 MAD/month',
    description: 'A laid-back Atlantic coastal town beloved by artists, surfers, and digital nomads. Essaouira offers a slower pace of life with a tight-knit expat community. The medina is UNESCO-listed and remarkably calm compared to Marrakech. Fresh seafood is abundant and cheap. The climate is moderated by ocean breezes year-round.',
    pros: ['Low cost of living', 'Relaxed atmosphere', 'Strong digital nomad scene', 'Ocean breezes cool the summer heat'],
    cons: ['Limited nightlife', 'Smaller healthcare options', 'Windy conditions', 'Fewer international amenities'],
  },
  {
    city: 'Tangier',
    icon: Globe,
    tagline: 'The Gateway to Europe',
    monthlyBudget: 'From 9,000 MAD/month',
    description: 'Sitting at the northern tip of Morocco where the Atlantic meets the Mediterranean, Tangier is experiencing a renaissance. Massive government investment has modernized the city. The high-speed train connects it to Casablanca in 2 hours. A ferry ride to Spain takes just 35 minutes, making weekend trips to Europe easy.',
    pros: ['Closest to Europe', 'Rapidly modernizing', 'Creative and artistic scene', 'Mediterranean and Atlantic beaches'],
    cons: ['Rainy winters', 'Less established expat scene than Marrakech', 'Can feel chaotic in the medina', 'Ongoing construction'],
  },
  {
    city: 'Rabat',
    icon: Landmark,
    tagline: 'The Diplomatic Capital',
    monthlyBudget: 'From 10,000 MAD/month',
    description: 'Morocco&apos;s political capital is clean, orderly, and green. Rabat is home to embassies, international organizations, and a large diplomatic community. The Hassan Tower, Kasbah des Oudaias, and the modern Mohammed VI Museum of Modern Art offer cultural richness. Rabat feels safer and more organized than any other Moroccan city.',
    pros: ['Very safe and clean', 'Strong diplomatic community', 'Excellent tram system', 'Good international schools'],
    cons: ['Less vibrant nightlife', 'Can feel too quiet', 'Government bureaucracy is slow', 'Fewer tourist attractions'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CULTURAL ADJUSTMENT TIPS
   ═══════════════════════════════════════════════════════════════ */

const culturalTips = [
  {
    title: 'Learn Basic Darija',
    icon: BookOpen,
    description: 'While French is widely spoken, learning Moroccan Arabic (Darija) will transform your daily life. Even basic greetings like "labas" (how are you) and "shukran" (thank you) earn enormous goodwill from locals.',
  },
  {
    title: 'Embrace the Pace',
    icon: Clock,
    description: 'Morocco runs on its own clock. Meetings may start late, bureaucracy moves slowly, and shops close during prayer times. Patience is not optional; it is essential for your mental health as an expat.',
  },
  {
    title: 'Build Local Relationships',
    icon: Users,
    description: 'Moroccans are incredibly generous and hospitable. Accept invitations for tea and couscous Fridays. Having local friends will help you navigate bureaucracy, find the best services, and feel truly at home.',
  },
  {
    title: 'Respect Religious Customs',
    icon: Heart,
    description: 'Morocco is a Muslim country. During Ramadan, avoid eating or drinking in public during daylight hours. Dress modestly in traditional neighborhoods. Remove shoes when entering homes. These gestures are deeply appreciated.',
  },
  {
    title: 'Negotiate with Good Humor',
    icon: Coffee,
    description: 'Bargaining is a way of life in souks and with some service providers. Approach it as a social interaction, not a confrontation. Smile, drink tea, and enjoy the process. With time, you will know fair prices instinctively.',
  },
  {
    title: 'Understand Legal Differences',
    icon: Scale,
    description: 'Moroccan law differs from Western countries in significant ways. Property law, contract enforcement, and employment rights follow their own logic. Always consult a local lawyer for important matters like renting, buying property, or starting a business.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoExpatGuidePage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-morocco.webp"
          alt="Scenic Moroccan cityscape with traditional architecture, rooftop terraces, and the Atlas Mountains in the distance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Expat Guide</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Living in Morocco as an Expat
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your complete guide to cost of living, visa options, housing, healthcare, and lifestyle in one of the world&apos;s most
            captivating countries. Updated for 2026.
          </p>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-8 zellige-border">
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              Morocco has quietly become one of the most popular expat destinations in the world. Affordable living,
              year-round sunshine, proximity to Europe, rich culture, and genuinely welcoming people draw digital nomads,
              entrepreneurs, retirees, and families alike. Cities like Marrakech, Essaouira, and Tangier now have thriving
              international communities. French retirees have come for decades, but today the community includes Americans,
              Brits, Germans, Scandinavians, and location-independent workers from around the world.
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              <Info className="w-3.5 h-3.5 inline mr-1" />
              All prices in Moroccan Dirhams (MAD). Rates as of 2026: ~1 USD = 10 MAD, ~1 EUR = 11 MAD. Prices are starting amounts and vary by city, season, and circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Expats Choose Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Expats Choose Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From affordability to adventure, here are the key reasons thousands of expats have made Morocco their home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMoroccoReasons.map((reason) => {
              const ReasonIcon = reason.icon;
              return (
                <div key={reason.title} className="card-moroccan p-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    <ReasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Visa Types ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FileText className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visa &amp; Residence Options
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Understanding your legal options is the first step to a smooth move. Morocco offers several pathways depending on your situation.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <AlertTriangle className="w-3.5 h-3.5 inline mr-1" />
            Immigration rules change. Always verify current requirements with the nearest Moroccan consulate or a licensed immigration lawyer before making plans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visaTypes.map((visa) => {
              const VisaIcon = visa.icon;
              return (
                <div key={visa.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <VisaIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {visa.type}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {visa.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5" />
                          {visa.cost}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{visa.description}</p>
                  <div className="space-y-2">
                    {visa.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cost of Living ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cost of Living Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            One of Morocco&apos;s biggest draws is affordability. Here is what you can expect to pay for everyday expenses.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Costs vary by city, with Casablanca and Marrakech being the most expensive. Seasonal pricing applies to utilities, with summer air conditioning significantly increasing electricity bills.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Expense</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {costOfLiving.map((item, i) => (
                <div
                  key={item.category}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.category}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly budget summaries */}
          <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5 text-center">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Budget Lifestyle</h3>
              <p className="text-2xl font-bold text-[var(--color-accent)]">From 6,000 MAD</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">per month, single person</p>
              <p className="text-xs text-[var(--text-secondary)] mt-2">Small city, local food, shared housing, minimal dining out</p>
            </div>
            <div className="card-moroccan p-5 text-center border-2 border-[var(--color-accent)]">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Comfortable Lifestyle</h3>
              <p className="text-2xl font-bold text-[var(--color-accent)]">From 12,000 MAD</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">per month, single person</p>
              <p className="text-xs text-[var(--text-secondary)] mt-2">Nice apartment, regular dining out, gym, social activities</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Luxury Lifestyle</h3>
              <p className="text-2xl font-bold text-[var(--color-accent)]">From 25,000 MAD</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">per month, single person</p>
              <p className="text-xs text-[var(--text-secondary)] mt-2">Upscale apartment, driver, fine dining, premium healthcare</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Cities for Expats ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cities for Expats
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city offers a different lifestyle, cost of living, and community. Here is how the top five compare.
          </p>

          <div className="space-y-8">
            {expatCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CityIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {city.city}
                        </h3>
                        <span className="text-sm text-[var(--color-gold)] font-medium">{city.tagline}</span>
                      </div>
                      <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mt-1">
                        {city.monthlyBudget}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-xs font-semibold text-green-700 mb-2">Pros</p>
                      {city.pros.map((pro, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-green-700 mb-1">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0" />
                          {pro}
                        </div>
                      ))}
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="text-xs font-semibold text-amber-700 mb-2">Cons</p>
                      {city.cons.map((con, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-amber-700 mb-1">
                          <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0" />
                          {con}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Housing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HomeIcon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Housing: Renting &amp; Buying
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Finding the right home is crucial to your expat experience. Here is what you need to know about the Moroccan housing market.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Renting an Apartment or Riad
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Most expats start by renting. Apartments in the ville nouvelle are modern with Western amenities, from
                3,000 MAD for a studio to from 15,000 MAD for luxury in Casablanca or Marrakech. Lease terms are
                typically one year with 2 months deposit. Furnished apartments command a 30-50% premium. For a uniquely
                Moroccan experience, riad rentals in the medina run from 5,000 to 20,000 MAD with rooftop terraces and
                stunning tilework, though they may lack modern insulation. Always get a written contract (contrat de bail).
              </p>
              <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <p className="text-xs text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--text-primary)]">Tip:</span> Use Avito.ma and Mubawab.ma for rentals.
                  For medina properties, word of mouth works best. Always visit in person before signing.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Buying Property
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Foreigners can buy property with few restrictions (agricultural land excluded). Prices start from 5,000
                MAD/sqm in smaller cities to from 25,000 MAD/sqm in prime Casablanca or Marrakech. A notaire handles
                the legal transfer. Budget 7-10% extra for taxes, registration, and notary costs. Title verification is
                critical; ensure the property has a clean titre foncier (land title).
              </p>
              <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <p className="text-xs text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--text-primary)]">Warning:</span> Never buy without an independent
                  lawyer. Title fraud exists, especially in medina properties. A legal check costs from 5,000 MAD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Healthcare ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stethoscope className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Healthcare for Expats
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s healthcare system has improved dramatically. Here is what expats need to know about accessing medical care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Building className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Private Hospitals
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Expats primarily use private clinics and hospitals. Major cities have excellent private facilities like
                Clinique Internationale de Marrakech, Clinique du Parc Casablanca, and Clinique Avicenne in Rabat.
                Doctors are often trained in France and speak French and English. A consultation costs from 200-400 MAD.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Health Insurance
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Private health insurance is strongly recommended. Local providers like SAHAM, AXA Morocco, and Allianz
                offer comprehensive plans from 3,000 MAD per month. International providers like Cigna and Allianz Care
                offer plans with worldwide coverage. Residence permit applicants must show proof of health coverage.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Medical Costs
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Healthcare is remarkably affordable compared to Western countries. A specialist consultation costs from
                300-600 MAD. Dental work is from 500 MAD for a filling to from 3,000 MAD for a crown. MRI scans cost
                from 2,000 MAD. Many expats come to Morocco specifically for dental and cosmetic procedures at a fraction
                of Western prices.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Pharmacies &amp; Medication
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Pharmacies are abundant and pharmacists are knowledgeable. Many medications available by prescription in
                Western countries are sold over-the-counter in Morocco. Medication costs are generally low. However, some
                specialized medications may not be available locally, so bring a supply if you rely on specific drugs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Education & International Schools ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <GraduationCap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            International Schools &amp; Education
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            For expat families, Morocco offers a strong selection of international schools following various curricula.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Building className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                French-System (Mission Francaise)
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The largest international school network in Morocco, found in every major city. Follow the French national
                curriculum. Tuition costs from 30,000 MAD/year (primary) to from 50,000 MAD/year (secondary). Popular
                with French expats and internationally-minded Moroccan families.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                American &amp; British Schools
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Casablanca American School, American School of Marrakech, and British International School offer US/UK
                curricula with IB and AP programs. Tuition ranges from 80,000 to 150,000 MAD/year. Excellent facilities
                and strong university placement records.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Star className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Spanish &amp; Other European
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In northern Morocco (Tangier, Tetouan), Spanish schools serve the Spanish-speaking community with tuition
                from 20,000 MAD/year. German and Italian schools exist in Casablanca and Rabat, serving their respective
                diplomatic communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Banking & Finance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Banknote className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Banking &amp; Finance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Setting up your financial life in Morocco is straightforward but requires understanding a few key rules.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Landmark className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Opening a Bank Account
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Expats can open a convertible dirham account (compte en dirhams convertibles) which allows you to transfer
                money in and out of the country. Major banks include Attijariwafa, BMCE Bank of Africa, and Banque Populaire.
                You will need your passport, residence permit (or proof of application), and proof of income.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Currency Controls
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The Moroccan dirham is not freely convertible. There are limits on how much foreign currency you can take
                out of the country. With a convertible account, you can repatriate funds equivalent to what you brought
                in. Understanding these rules is essential for managing your finances as an expat.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                International Transfers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Services like Wise (formerly TransferWise), Western Union, and WorldRemit offer competitive rates for
                sending money to Morocco. Bank wire transfers work but are slower and more expensive. Many expats maintain
                accounts in their home country alongside their Moroccan account.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <FileText className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Taxes
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If you spend 183+ days in Morocco, you may be considered a tax resident. Morocco has double taxation
                treaties with many countries. Income tax rates range from 0% to 38% on a progressive scale. Rental
                income and capital gains on property are also taxable. Consult a tax advisor for your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Internet & Connectivity ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wifi className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Internet &amp; Connectivity
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Good internet is non-negotiable for digital nomads and remote workers. Morocco delivers well in this area.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Wifi className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Home Internet
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Fiber (FTTH) available in most urban areas via Maroc Telecom, Orange, and Inwi. Speeds of 50-100 Mbps
                standard, up to 200 Mbps in some areas. Plans from 200 MAD/month. Installation takes 1-2 weeks. In rural
                areas, 4G home boxes are a reliable alternative.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Mobile &amp; SIM Cards
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Prepaid SIMs are cheap and easy. Show your passport at any telecom shop. Data from 50 MAD/month with
                generous allowances. 4G is excellent in cities and highways. 5G rolling out in Casablanca, Rabat, and
                other major cities.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Building className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Coworking Spaces
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Growing rapidly. Le 18 and Sun Desk in Marrakech area. The Loft and WeWork in Casablanca. Spaces in
                Essaouira and Tangier too. From 1,000 MAD/month (hot desk) to from 3,000 MAD (dedicated desk). Most
                offer Wi-Fi, meeting rooms, and community events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Digital Nomad Scene ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Briefcase className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Digital Nomad Scene
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has emerged as a top destination for location-independent workers. Here is what makes it work.
          </p>

          <div className="card-moroccan p-6 zellige-border mb-6">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Morocco sits in the GMT+1 timezone, ideal for European clients (same hours) and overlapping with US East
              Coast (5-6 hours difference). Low costs, good internet, abundant Wi-Fi cafes, and an inspiring environment
              make it a natural fit for freelancers, developers, designers, writers, and online entrepreneurs.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Essaouira and Taghazout are unofficial digital nomad hubs with surf-and-work communities. Marrakech offers
              an urban experience with coworking options. Tangier attracts creative types near Spain. There is no specific
              digital nomad visa yet, but the 90-day visa-free entry works for shorter stays. For longer stays, the
              residence permit process applies. Some nomads do visa runs to Spain via ferry from Tangier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-moroccan p-4 text-center">
              <Wifi className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">50-100 Mbps</p>
              <p className="text-xs text-[var(--text-muted)]">Fiber internet speeds</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Coffee className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">From 15 MAD</p>
              <p className="text-xs text-[var(--text-muted)]">Coffee at a local cafe</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Building className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">From 1,000 MAD</p>
              <p className="text-xs text-[var(--text-muted)]">Monthly coworking desk</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cultural Adjustment ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural Adjustment &amp; Social Life
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moving to a new country is about more than logistics. Here is how to navigate the cultural transition and build a fulfilling social life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-10 card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              Finding Your Community
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              The expat community is active and welcoming. Facebook groups like &quot;Expats in Morocco&quot; and city-specific
              groups are great starting points. InterNations has chapters in Casablanca, Marrakech, and Rabat. Join local
              sports clubs, art classes, or language exchanges to meet both expats and Moroccans. For retirees, the
              French-speaking community is well-organized with social clubs and cultural outings. English-speaking expats
              are increasingly visible in Marrakech and Essaouira.
            </p>
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does it cost to live in Morocco as an expat?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A single expat can live comfortably for from 8,000 to 15,000 MAD per month (800-1,500 USD), depending
                on city and lifestyle. Rent is the biggest expense: from 3,000 MAD (studio) to from 12,000 MAD (luxury).
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a visa to live in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Citizens of many countries (USA, EU, UK, Canada, Australia) enter visa-free for 90 days. To stay longer,
                you need a residence permit (carte de sejour) with proof of income, housing, and clean record. Takes 2-4 months.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the best cities in Morocco for expats?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Marrakech (arts, culture, established scene), Casablanca (business hub), Essaouira (coastal, digital nomads),
                Tangier (near Europe, creative), and Rabat (diplomatic, orderly). Each offers different lifestyle and costs.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I work remotely from Morocco as a digital nomad?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Fiber internet (50-100 Mbps), coworking spaces in major cities, and 90-day visa-free entry make it
                practical. For longer stays, you need a residence permit or periodic exits to reset your entry period.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco a good place to retire?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Excellent. Cost of living 60-70% lower than Western Europe, warm climate, affordable healthcare, and a
                retirement residence permit for pension holders. Popular with French, British, and American retirees.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How is healthcare in Morocco for expats?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Expats use private clinics with good care at affordable prices. Doctor visits from 200-400 MAD. Private
                insurance from 3,000 MAD/month. Major cities have well-equipped hospitals with English/French-speaking doctors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-internet-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Wifi className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Internet Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to internet providers, speeds, SIM cards, and connectivity across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-safety-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Safety Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Stay safe in Morocco with tips on scams, neighborhoods, emergency contacts, and travel safety.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-driving-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Driving Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything about driving in Morocco: licenses, road conditions, fuel, and car rental tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-darija-phrases" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Darija Phrases
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential Moroccan Arabic phrases for daily life, shopping, greetings, and making friends.
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

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Globe,
  Users,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Building,
  Award,
  Languages,
  FileText,
  Briefcase,
  MessageCircle,
  Lightbulb,
  Calendar,
  Shield,
  Heart,
  Headphones,
  Pen,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Language Schools 2026 | Learn Arabic, French & Darija in Morocco',
  description:
    'Complete guide to learning Arabic, French, and Moroccan Darija in Morocco. Top 8 language schools across Rabat, Fes, and Marrakech. Course types, visa info, prices from 2,000 MAD per week, free resources, and insider tips for language learners.',
  keywords: [
    'Morocco language schools',
    'learn Arabic Morocco',
    'learn Darija Morocco',
    'learn French Morocco',
    'Moroccan Arabic classes',
    'Arabic language school Rabat',
    'Arabic language school Fes',
    'French language school Morocco',
    'Darija course Morocco',
    'Modern Standard Arabic Morocco',
    'language immersion Morocco',
    'study abroad Morocco',
    'Morocco student visa',
    'intensive Arabic course Morocco',
    'private Arabic lessons Morocco',
    'Qalam wa Lawh',
    'ALIF Fes',
    'Sprachcaffe Rabat',
    'language study visa Morocco',
    'learn Moroccan Arabic online',
    'Morocco language immersion program',
    'Arabic classes Marrakech',
  ],
  openGraph: {
    title: 'Morocco Language Schools 2026 | Learn Arabic, French & Darija',
    description:
      'Discover Morocco\'s top language schools. Learn Modern Standard Arabic, Moroccan Darija, or French. Courses from 2,000 MAD per week with accommodation options across Rabat, Fes, and Marrakech.',
    url: `${BASE_URL}/morocco-language-schools`,
    images: [
      {
        url: `${BASE_URL}/images/hero-language-schools.webp`,
        width: 1200,
        height: 630,
        alt: 'Students learning Arabic calligraphy in a traditional Moroccan classroom with zellige tilework',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Language Schools 2026 | Learn Arabic, French & Darija',
    description:
      'Top 8 language schools in Morocco. Learn Arabic, Darija, or French from 2,000 MAD per week. Complete guide with visa info, course types, and free resources.',
    images: [`${BASE_URL}/images/hero-language-schools.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-language-schools` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-language-schools`,
  name: 'Morocco Language Schools 2026 | Learn Arabic, French & Darija in Morocco',
  description:
    'Complete guide to learning Arabic, French, and Moroccan Darija in Morocco. Top language schools across Rabat, Fes, and Marrakech with course types, visa info, and prices.',
  url: `${BASE_URL}/morocco-language-schools`,
  image: `${BASE_URL}/images/hero-language-schools.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-language-schools`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Language Schools', item: `${BASE_URL}/morocco-language-schools` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: LANGUAGE SCHOOLS
   ═══════════════════════════════════════════════════════════════ */

const languageSchools = [
  {
    name: 'Qalam wa Lawh',
    city: 'Rabat',
    languages: ['Modern Standard Arabic', 'Darija', 'French'],
    courseTypes: ['Intensive', 'Group', 'Private', 'Immersion'],
    pricePerWeek: 'From 2,500 MAD',
    accommodation: 'Homestay with Moroccan family or shared apartment. Homestay from 3,000 MAD per month including meals.',
    description:
      'One of Morocco\'s most respected Arabic language institutes. Founded in 2004, Qalam wa Lawh has taught thousands of students from over 60 countries. The school is located in the heart of Rabat\'s Agdal neighborhood and offers a structured curriculum that balances Modern Standard Arabic with practical Darija skills. The immersion approach includes cultural excursions, conversation partners, and weekly cultural workshops.',
    rating: 4.8,
    icon: Award,
  },
  {
    name: 'ALIF (Arabic Language Institute in Fez)',
    city: 'Fes',
    languages: ['Modern Standard Arabic', 'Darija'],
    courseTypes: ['Intensive', 'Group', 'Private'],
    pricePerWeek: 'From 3,000 MAD',
    accommodation: 'Riad accommodation in the medina or homestay. Riad from 2,500 MAD per month; homestay from 3,500 MAD per month with meals.',
    description:
      'Located inside a beautifully restored riad in the ancient Fes medina, ALIF offers one of the most immersive Arabic learning experiences in the world. The school is affiliated with the University of Fes and combines academic rigor with daily life in the world\'s oldest continuously inhabited medieval city. Students praise the small class sizes (maximum 6 students) and the integration of Fassi cultural experiences into the curriculum.',
    rating: 4.7,
    icon: Building,
  },
  {
    name: 'Sprachcaffe Languages Plus',
    city: 'Rabat',
    languages: ['French', 'Modern Standard Arabic'],
    courseTypes: ['Intensive', 'Group', 'Private'],
    pricePerWeek: 'From 2,000 MAD',
    accommodation: 'Shared apartment or host family. Apartment from 2,000 MAD per month; host family from 3,000 MAD per month with half board.',
    description:
      'Part of a global network of language schools, Sprachcaffe Rabat specializes in French language instruction with additional Arabic courses. The school is located in the modern Agdal district and attracts a diverse international student body. The structured curriculum follows the CEFR framework, and students can take official DELF/DALF exam preparation courses. Well-suited for those who want French as their primary language with Arabic as a supplement.',
    rating: 4.5,
    icon: Globe,
  },
  {
    name: 'Centre de Langue et de Culture Marrakech',
    city: 'Marrakech',
    languages: ['Modern Standard Arabic', 'Darija', 'French'],
    courseTypes: ['Group', 'Private', 'Immersion'],
    pricePerWeek: 'From 2,200 MAD',
    accommodation: 'Riad accommodation or homestay. Riad from 2,800 MAD per month; homestay from 3,200 MAD per month with meals.',
    description:
      'A locally owned language center in the Gueliz district of Marrakech that prides itself on personalized instruction. Class sizes are capped at 8 students, and the teaching team includes native speakers of both Arabic and French. The school organizes weekly cultural activities including cooking classes, souk tours, and trips to the Atlas Mountains. Ideal for students who want a vibrant city life alongside their studies.',
    rating: 4.6,
    icon: MessageCircle,
  },
  {
    name: 'Arabic Language and Culture Program (ALCP)',
    city: 'Fes',
    languages: ['Modern Standard Arabic', 'Darija'],
    courseTypes: ['Intensive', 'Group'],
    pricePerWeek: 'From 3,500 MAD',
    accommodation: 'University housing or approved homestay. Housing from 2,000 MAD per month; homestay from 3,500 MAD per month with full board.',
    description:
      'A university-affiliated program in Fes that offers semester-length and summer intensive courses. The ALCP is particularly popular with American and European university students seeking study-abroad credit. The curriculum is academic in focus, covering Modern Standard Arabic grammar, reading, writing, and conversation, supplemented by Darija conversation classes. Includes weekly lectures on Moroccan history, politics, and society.',
    rating: 4.6,
    icon: GraduationCap,
  },
  {
    name: 'Institut Francais du Maroc',
    city: 'Rabat',
    languages: ['French'],
    courseTypes: ['Intensive', 'Group', 'Private'],
    pricePerWeek: 'From 1,800 MAD',
    accommodation: 'No accommodation provided; school assists with finding rentals. Budget from 3,000 MAD per month for a studio.',
    description:
      'The official French cultural institute in Morocco, offering the gold standard in French language instruction. With branches in multiple cities, the Rabat campus is the largest and most established. Courses follow the CEFR framework from A1 to C2 levels. The school is also an official DELF/DALF examination center, making it ideal for students who need certified French language qualifications for work or study purposes.',
    rating: 4.7,
    icon: FileText,
  },
  {
    name: 'Ahlan World Morocco',
    city: 'Rabat',
    languages: ['Modern Standard Arabic', 'Darija', 'French'],
    courseTypes: ['Intensive', 'Private', 'Immersion'],
    pricePerWeek: 'From 2,800 MAD',
    accommodation: 'Homestay with carefully selected families. From 3,500 MAD per month including three meals per day.',
    description:
      'A boutique language school that focuses heavily on the immersion experience. Ahlan World places every student with a Moroccan host family and designs the curriculum around real-life communication needs. The school organizes daily cultural activities including market visits, cooking lessons, and community volunteering. The teaching methodology emphasizes spoken fluency from day one, with grammar introduced contextually rather than abstractly.',
    rating: 4.8,
    icon: Heart,
  },
  {
    name: 'Dar Loughat - Cross-Cultural Language Centre',
    city: 'Tetouan',
    languages: ['Modern Standard Arabic', 'Darija', 'French', 'Spanish'],
    courseTypes: ['Intensive', 'Group', 'Private'],
    pricePerWeek: 'From 2,000 MAD',
    accommodation: 'Homestay or shared apartment. Homestay from 2,500 MAD per month with meals; apartment from 1,800 MAD per month.',
    description:
      'Located in the UNESCO-listed medina of Tetouan in northern Morocco, Dar Loughat offers a unique multilingual environment. The school teaches Arabic, French, and Spanish, reflecting Tetouan\'s history as a crossroads between Arab, Berber, and Spanish cultures. The medina setting provides constant immersion, and the northern region\'s lower cost of living makes this one of the most affordable options for extended study.',
    rating: 4.5,
    icon: Languages,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: LANGUAGE OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const languageOptions = [
  {
    name: 'Modern Standard Arabic (MSA / Fusha)',
    icon: BookOpen,
    description:
      'The formal, literary form of Arabic used across the Arab world. MSA is the language of news media, official documents, literature, and formal speeches. It is understood by educated speakers throughout the Middle East and North Africa, making it the most universally useful form of Arabic to learn.',
    whyLearn:
      'Essential for careers in diplomacy, journalism, academia, or international development in the Arab world. It opens doors across 22 countries and is the key to reading Arabic literature, understanding news broadcasts, and engaging with formal settings. Many jobs in international organizations require MSA proficiency.',
    difficulty: 'Moderate to Challenging',
    timeToBasic: '6-12 months of intensive study for conversational ability. The Arabic script takes 2-4 weeks to learn. Grammar is complex but highly regular and logical.',
  },
  {
    name: 'Darija (Moroccan Arabic)',
    icon: MessageCircle,
    description:
      'The everyday spoken language of Morocco. Darija is a distinct dialect that blends Arabic with Berber, French, and Spanish influences. It is the language you will hear in markets, cafes, taxis, and homes. Darija differs significantly from MSA and from other Arabic dialects, with unique vocabulary, pronunciation, and grammar.',
    whyLearn:
      'Absolutely essential for daily life in Morocco. Even basic Darija transforms your experience. Market vendors, taxi drivers, and ordinary Moroccans will light up when you speak their language. It builds genuine connections and earns immediate respect. For anyone planning to live in Morocco, work with Moroccan communities, or travel extensively in the country, Darija is indispensable.',
    difficulty: 'Moderate',
    timeToBasic: '3-6 months of study for basic conversational ability. Easier to speak than MSA because grammar is simplified, but harder to find structured learning materials. No standard written form.',
  },
  {
    name: 'French',
    icon: Globe,
    description:
      'Morocco\'s primary second language, inherited from the French protectorate era (1912-1956). French is the language of business, higher education, government administration, and the professional class. Signs, menus, and official documents are typically bilingual in Arabic and French. In cities like Casablanca and Rabat, French is spoken as fluently as Arabic.',
    whyLearn:
      'Highly practical for travel and business in Morocco. Virtually all hotel staff, restaurant workers, and tour guides in major cities speak French. It is the language of commerce and higher education. Knowledge of French also opens doors across Francophone Africa and Europe. For professionals doing business in Morocco, French is often more immediately useful than Arabic.',
    difficulty: 'Moderate for English speakers',
    timeToBasic: '4-8 months of intensive study. French shares significant vocabulary with English (40% cognates). Grammar is challenging but well-documented. Pronunciation requires practice but follows consistent rules.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: COURSE TYPES
   ═══════════════════════════════════════════════════════════════ */

const courseTypes = [
  {
    type: 'Intensive Course',
    icon: Briefcase,
    description:
      'Full-time language study designed for rapid progress. Classes run 4-6 hours per day, typically morning sessions of grammar and vocabulary followed by afternoon conversation practice. Most intensive courses include cultural activities and supervised homework. This is the fastest way to make meaningful progress.',
    hoursPerWeek: '20-30 hours',
    idealFor: 'Students on a tight timeline, career changers, those preparing for exams, or anyone who wants to maximize progress in a short period. Most popular with gap-year students and professionals on sabbatical.',
    priceRange: 'From 2,500 MAD per week',
  },
  {
    type: 'Group Course',
    icon: Users,
    description:
      'Standard group classes with 4-10 students per class. Classes meet 2-4 hours per day, usually in the morning. The social aspect of group learning helps with motivation and provides built-in conversation partners. Most schools group students by level, from absolute beginner to advanced.',
    hoursPerWeek: '10-20 hours',
    idealFor: 'Budget-conscious students, those who enjoy social learning, long-term students who want a sustainable pace, or anyone combining study with travel or remote work.',
    priceRange: 'From 2,000 MAD per week',
  },
  {
    type: 'Private Lessons',
    icon: Pen,
    description:
      'One-on-one instruction tailored entirely to your goals, pace, and schedule. The teacher adapts to your learning style and focuses on your specific needs, whether that is business Arabic, medical vocabulary, or preparing for a specific exam. Private lessons offer the highest efficiency per hour of study.',
    hoursPerWeek: '5-20 hours (flexible)',
    idealFor: 'Professionals with specific language needs, advanced learners who have outgrown group settings, students with irregular schedules, or anyone who wants personalized attention and rapid progress.',
    priceRange: 'From 250 MAD per hour',
  },
  {
    type: 'Immersion Program',
    icon: Heart,
    description:
      'A holistic approach that combines classroom instruction with cultural immersion. Students live with a Moroccan host family, participate in daily cultural activities, and are encouraged to use the target language in all interactions. Some programs include community volunteering, internships, or guided travel components.',
    hoursPerWeek: '15-25 hours (classroom) plus daily immersion',
    idealFor: 'Students seeking the deepest cultural experience, those planning to live or work in Morocco long-term, gap-year travelers, or anyone who learns best through real-world practice rather than textbook study.',
    priceRange: 'From 3,500 MAD per week (often includes accommodation and meals)',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: STUDY VISA INFO
   ═══════════════════════════════════════════════════════════════ */

const studyVisaInfo = [
  {
    title: 'Visa-Free Entry (Up to 90 Days)',
    icon: Shield,
    description:
      'Citizens of the EU, USA, Canada, UK, Australia, and many other countries can enter Morocco visa-free for up to 90 days. This is sufficient for most short-term language courses (4-12 weeks). No special student visa is needed for programs within this period.',
  },
  {
    title: 'Student Visa (Over 90 Days)',
    icon: FileText,
    description:
      'For courses longer than 90 days, you need a student visa (Visa d\'Etudes). Apply at the Moroccan embassy or consulate in your home country. Requirements include: enrollment confirmation from a recognized language school, proof of financial means (bank statements showing from 5,000 MAD per month), passport photos, and a completed application form. Processing takes 2-4 weeks.',
  },
  {
    title: 'Visa Extension (Inside Morocco)',
    icon: Calendar,
    description:
      'If your 90-day visa-free period is expiring and you want to continue studying, you can apply for an extension at the local police prefecture (Surete Nationale). You will need your enrollment letter, proof of accommodation, and proof of funds. Extensions are granted for 3-6 months but are not guaranteed. Apply at least 2 weeks before your visa expires.',
  },
  {
    title: 'Required Documents',
    icon: CheckCircle,
    description:
      'For any student visa application, prepare: valid passport (at least 6 months validity), enrollment confirmation letter from the school, proof of accommodation, proof of financial means (from 5,000 MAD per month), health insurance covering Morocco, return flight ticket or proof of onward travel, and 2 recent passport photos. Some consulates may require an FBI background check or equivalent.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FREE RESOURCES
   ═══════════════════════════════════════════════════════════════ */

const freeResources = [
  {
    name: 'Moroccan Arabic Phrasebook (Peace Corps)',
    icon: BookOpen,
    type: 'PDF / Textbook',
    description:
      'The US Peace Corps developed a comprehensive Moroccan Darija phrasebook for its volunteers. It covers essential vocabulary, common phrases, cultural notes, and basic grammar. Available as a free PDF download. This is one of the best structured resources for Darija beginners and is updated regularly.',
    link: 'Search: "Peace Corps Moroccan Arabic Darija phrasebook PDF"',
  },
  {
    name: 'Italki Community Tutors',
    icon: Users,
    type: 'Online Tutoring Platform',
    description:
      'Italki connects you with native Moroccan speakers for affordable online conversation practice. Community tutors charge from 80 MAD per hour. Start practicing Darija or MSA before you arrive in Morocco. Even 2-3 sessions per week for a month before your trip will give you a significant head start.',
    link: 'italki.com',
  },
  {
    name: 'Arabic with Nadia (YouTube)',
    icon: Headphones,
    type: 'Video Lessons',
    description:
      'A popular YouTube channel dedicated to Moroccan Darija. Nadia covers everyday vocabulary, common phrases, cultural context, and pronunciation with clear explanations in English. The videos are short (5-15 minutes) and practical. Ideal for absolute beginners who want to learn key phrases before arrival.',
    link: 'Search: "Arabic with Nadia YouTube Darija"',
  },
  {
    name: 'Anki Flashcard Decks (Arabic)',
    icon: Lightbulb,
    type: 'Spaced Repetition App',
    description:
      'Anki is a free flashcard app that uses spaced repetition to help you memorize vocabulary efficiently. Community-created decks for MSA and Darija are available for free download. Use it for 15-20 minutes daily to build vocabulary before and during your language course. The Arabic script deck is particularly useful for beginners.',
    link: 'ankiweb.net (search shared decks for "Moroccan Arabic" or "MSA")',
  },
  {
    name: 'Al Jazeera Learning Arabic',
    icon: Globe,
    type: 'Online Course',
    description:
      'Al Jazeera offers a free, structured online Arabic course for beginners and intermediate learners. The content focuses on MSA and uses real news clips for listening practice. While not specific to Morocco, it provides an excellent foundation in MSA grammar and vocabulary that complements any in-country language program.',
    link: 'learning.aljazeera.net',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoLanguageSchoolsPage() {
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
            backgroundImage: 'url(/images/hero-language-schools.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Language Schools</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <GraduationCap className="w-4 h-4" />
            Language &amp; Education
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Language Schools:
            <br className="hidden md:block" /> Learn Arabic, French &amp; Darija
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From intensive MSA programs in Fes to Darija immersion in Rabat. Your complete guide
            to learning languages in Morocco, with courses from 2,000 MAD per week.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Learn a Language in Morocco?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the finest places on earth to learn a language. As a country where
                Arabic, Darija, French, Berber, and even Spanish coexist in daily life, Morocco offers
                a linguistic richness that few countries can match. The moment you step outside the
                classroom, you are immersed in a multilingual world that reinforces everything you learn.
              </p>
              <p>
                Whether you are a university student seeking study-abroad credit, a professional preparing
                for a career in the Arab world, a traveler who wants to connect more deeply with Moroccan
                culture, or a retiree pursuing a lifelong dream of learning Arabic, Morocco has a program
                that fits your needs and budget.
              </p>
              <p>
                The country&apos;s language schools range from university-affiliated academic programs to
                intimate boutique schools in ancient medinas. Prices are a fraction of what you would pay
                in Europe or the Gulf states, and the quality of instruction is world-class. Add in
                Morocco&apos;s affordable cost of living, welcoming culture, and extraordinary beauty, and
                you have the perfect environment for language learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Which Language Should You Learn? ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Languages className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Which Language Should You Learn?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers three main language paths. Your choice depends on your goals, timeline, and how you plan to use the language.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {languageOptions.map((lang) => {
              const LangIcon = lang.icon;
              return (
                <div key={lang.name} className="card-moroccan p-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    <LangIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    {lang.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{lang.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                      <p className="text-xs font-semibold text-[var(--text-primary)] mb-1">Why Learn It</p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{lang.whyLearn}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-[var(--color-gold)]" />
                      {lang.difficulty}
                    </span>
                  </div>
                  <div className="mt-2 flex items-start gap-1 text-xs text-[var(--text-muted)]">
                    <Clock className="w-3 h-3 mt-0.5 shrink-0" />
                    <span>{lang.timeToBasic}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Language Schools ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 8 Language Schools in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            These schools have been selected based on reputation, student reviews, curriculum quality, and value for money.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies, with summer courses (June-August) often charging a 15-25% premium.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {languageSchools.map((school) => {
              const SchoolIcon = school.icon;
              return (
                <div key={school.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SchoolIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {school.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {school.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                          {school.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {school.pricePerWeek} per week
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4">{school.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <Languages className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span><span className="font-semibold text-[var(--text-primary)]">Languages:</span> {school.languages.join(', ')}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <BookOpen className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span><span className="font-semibold text-[var(--text-primary)]">Course types:</span> {school.courseTypes.join(', ')}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <Home className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span><span className="font-semibold text-[var(--text-primary)]">Accommodation:</span> {school.accommodation}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Course Types ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Course Types Explained
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the different course formats will help you choose the right fit for your learning style, schedule, and budget.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {courseTypes.map((course, index) => {
                  const CourseIcon = course.icon;
                  return (
                    <div key={course.type} className="relative flex gap-6">
                      {/* Step number circle */}
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <CourseIcon className="w-5 h-5 text-white" />
                      </div>

                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {course.type}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0 ml-4">
                            <Clock className="w-3 h-3" />
                            {course.hoursPerWeek}
                          </div>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] mb-3">{course.description}</p>
                        <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg mb-3">
                          <Users className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <p className="text-xs text-[var(--text-muted)]">
                            <span className="font-semibold text-[var(--text-primary)]">Ideal for:</span> {course.idealFor}
                          </p>
                        </div>
                        <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {course.priceRange}
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

      {/* ── Schools by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Language Schools by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city offers a distinct learning environment. Choose your base based on your priorities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-moroccan overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/hero-rabat.webp"
                  alt="Rabat cityscape with the Hassan Tower and modern government buildings"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                    Rabat
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Morocco&apos;s capital and the top choice for language students. Rabat has the highest
                  concentration of language schools, a safe and modern urban environment, excellent
                  public transport, and a large international student community. The city is quieter
                  and more organized than Marrakech or Casablanca, making it ideal for focused study.
                  Cost of living is moderate by Moroccan standards.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="font-medium text-[var(--text-primary)]">Qalam wa Lawh</span>
                    </div>
                    <span className="text-xs text-[var(--color-accent)] font-semibold">From 2,500 MAD/week</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="font-medium text-[var(--text-primary)]">Sprachcaffe Languages Plus</span>
                    </div>
                    <span className="text-xs text-[var(--color-accent)] font-semibold">From 2,000 MAD/week</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="font-medium text-[var(--text-primary)]">Institut Francais du Maroc</span>
                    </div>
                    <span className="text-xs text-[var(--color-accent)] font-semibold">From 1,800 MAD/week</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="font-medium text-[var(--text-primary)]">Ahlan World Morocco</span>
                    </div>
                    <span className="text-xs text-[var(--color-accent)] font-semibold">From 2,800 MAD/week</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/hero-fes.webp"
                  alt="Fes medina rooftop view with minarets and traditional architecture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                    Fes
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  The intellectual capital of Morocco and home to the world&apos;s oldest university
                  (Al Quaraouiyine, founded 859 AD). Fes offers the deepest cultural immersion for
                  Arabic learners. The ancient medina forces daily language practice, and the city&apos;s
                  strong academic tradition creates a serious learning environment. Less French influence
                  than Rabat or Casablanca, making it better for pure Arabic immersion. Cost of living
                  is lower than Rabat.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="font-medium text-[var(--text-primary)]">ALIF (Arabic Language Institute)</span>
                    </div>
                    <span className="text-xs text-[var(--color-accent)] font-semibold">From 3,000 MAD/week</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="font-medium text-[var(--text-primary)]">ALCP Program</span>
                    </div>
                    <span className="text-xs text-[var(--color-accent)] font-semibold">From 3,500 MAD/week</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/hero-marrakech.webp"
                  alt="Marrakech skyline with the Koutoubia Mosque and Atlas Mountains in the background"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                    Marrakech
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  The most vibrant and dynamic city for language learners who want excitement alongside
                  their studies. Marrakech offers constant stimulation and endless opportunities for
                  real-world language practice in markets, cafes, and cultural venues. The city has a
                  large expat community and many language exchange meetups. However, the tourist-heavy
                  environment means you may encounter more French and English than in Fes or Rabat.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="font-medium text-[var(--text-primary)]">Centre de Langue et de Culture</span>
                    </div>
                    <span className="text-xs text-[var(--color-accent)] font-semibold">From 2,200 MAD/week</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/hero-tetouan.webp"
                  alt="Tetouan medina with white-washed buildings and Spanish-Moorish architecture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                    Tetouan
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  A hidden gem for language learners. Tetouan&apos;s UNESCO-listed medina in northern
                  Morocco offers a uniquely multilingual environment where Arabic, French, and Spanish
                  coexist. The city receives far fewer tourists than Marrakech or Fes, providing more
                  authentic immersion. The cost of living is the lowest of all major language study
                  destinations in Morocco, making it ideal for budget-conscious long-term students.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="font-medium text-[var(--text-primary)]">Dar Loughat</span>
                    </div>
                    <span className="text-xs text-[var(--color-accent)] font-semibold">From 2,000 MAD/week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visa Information ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visa Requirements for Language Study
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you need to know about staying in Morocco legally while studying a language.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {studyVisaInfo.map((item) => {
              const VisaIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <VisaIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Free Resources ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            5 Free Resources to Start Learning Before You Arrive
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Get a head start on your language learning with these free tools. Even a few weeks of preparation will significantly boost your progress once you arrive in Morocco.
          </p>

          <div className="space-y-6">
            {freeResources.map((resource, i) => {
              const ResourceIcon = resource.icon;
              return (
                <div key={resource.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ResourceIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {resource.name}
                        </h3>
                        <span className="text-xs text-[var(--text-muted)] bg-[var(--surface-muted)] px-2 py-0.5 rounded shrink-0 ml-4">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-2">{resource.description}</p>
                      <p className="text-xs text-[var(--color-accent)] font-medium">{resource.link}</p>
                    </div>
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
            Practical Tips for Language Students in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Budget Planning
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Budget from 6,000-10,000 MAD per month for living expenses (accommodation, food, transport) on top
                of tuition fees. Rabat and Marrakech are slightly more expensive; Fes and Tetouan are more affordable.
                A comfortable monthly budget including tuition is from 10,000-15,000 MAD depending on the city and school.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Home className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Accommodation Options
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Homestay is the best option for language immersion. You will practice the language at every meal and
                gain a Moroccan family. Shared apartments with other students are cheaper (from 1,800 MAD per month)
                but offer less immersion. Many schools can arrange both options. Book accommodation through your school
                for the first month, then explore independently.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Practice Outside Class
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The classroom is only half the learning. Spend time in local cafes, shop at the souk in Arabic or
                Darija, take a Moroccan cooking class, join a local gym, or find a language exchange partner. Moroccans
                are extraordinarily welcoming to foreigners who try to speak their language, no matter how imperfect.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Calendar className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Time to Start
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most schools accept new students year-round. However, September-November and February-April are the
                best periods: pleasant weather, lower prices, and the most diverse student groups. Avoid starting
                during Ramadan unless you specifically want that cultural experience, as schedules and city rhythms
                change significantly.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <GraduationCap className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Choosing MSA vs. Darija
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Many students study both simultaneously: MSA in the classroom for literacy and formal skills, Darija
                for daily life. This dual approach is highly effective in Morocco. If you can only choose one, pick
                Darija for short trips and personal connections, MSA for academic or professional purposes that span
                multiple Arab countries.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Shield className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Safety for Students
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco is one of the safest countries in Africa for international students. Rabat and Fes are
                particularly safe. Use normal urban precautions: avoid walking alone late at night in unfamiliar areas,
                keep valuables out of sight, and trust your school&apos;s advice on neighborhoods. Most language schools
                provide orientation sessions covering local safety and cultural norms.
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need to know any Arabic before arriving at a language school?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                No. All reputable Moroccan language schools accept absolute beginners. Many students arrive without
                knowing a single word of Arabic and leave months later with conversational fluency. Schools place you
                in a level-appropriate group after an assessment on your first day. That said, learning the Arabic
                alphabet before arrival (2-4 weeks of practice) gives you a significant head start.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How long should I study to reach conversational level in Arabic or Darija?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                For Darija (everyday conversation), most dedicated students can hold basic conversations after 4-6
                weeks of intensive study in Morocco. For MSA, expect 3-6 months of intensive study to reach
                conversational level. French learners with English as a first language often progress faster, reaching
                basic conversational ability in 8-12 weeks. These timelines assume full immersion with daily practice
                outside the classroom.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I work while studying a language in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The visa-free entry and student visa do not permit paid employment in Morocco. However, many language
                students supplement their income with remote work for companies outside Morocco. Internet connectivity
                is generally reliable in Rabat, Casablanca, and Marrakech. Coworking spaces are available from 800 MAD
                per month. Some immersion programs include volunteer placements, which do not count as employment.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it better to learn Arabic in Morocco or in the Middle East?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Both have advantages. Morocco is significantly cheaper, culturally rich, and offers the unique
                opportunity to learn MSA alongside a distinctive dialect (Darija). The Middle East (Jordan, Egypt,
                Oman) offers dialects closer to MSA, which some students find easier. However, Morocco&apos;s
                bilingual environment means you can also learn French simultaneously. For overall value, cultural
                experience, and affordability, Morocco is hard to beat.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the difference between Darija and Modern Standard Arabic?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                MSA is the formal, literary language used in media, education, and official settings across the Arab
                world. Darija is the spoken language of everyday life in Morocco. They share a common root but differ
                significantly in vocabulary, pronunciation, and grammar. A Darija speaker and an Egyptian Arabic
                speaker may struggle to understand each other, but both can understand MSA. Think of MSA as formal
                English and Darija as a strong regional dialect with its own vocabulary.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do language schools in Morocco provide certificates or transferable credits?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most reputable schools provide completion certificates indicating your level achieved (often mapped
                to the CEFR framework). For transferable university credits, you need to arrange this with your home
                university in advance. Some programs like ALCP in Fes have existing credit transfer agreements with
                American and European universities. For official French certification, take the DELF/DALF exam at
                Institut Francais (exam fee from 800 MAD depending on level).
              </p>
            </div>
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
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into Morocco&apos;s rich cultural heritage, traditions, and social customs for visitors.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/digital-nomad" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Briefcase className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Digital Nomad Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Work remotely from Morocco with guides to coworking spaces, internet, and digital nomad visas.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/budget" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Save money traveling Morocco with tips on accommodation, transport, food, and activities.
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

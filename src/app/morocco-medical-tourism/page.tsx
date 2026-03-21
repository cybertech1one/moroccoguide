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
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  Waves,
  MessageCircleQuestion,
  Stethoscope,
  Eye,
  Scissors,
  Baby,
  Plane,
  CalendarCheck,
  BadgeCheck,
  Globe,
  TrendingDown,
  Bed,
  FileCheck,
  Activity,
  Landmark,
  HandCoins,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-medical-tourism`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Medical Tourism Guide 2026 | Dental, Cosmetic Surgery & Costs',
  description:
    'Complete guide to medical tourism in Morocco. Dental implants, cosmetic surgery, hair transplants, LASIK, IVF, and thalassotherapy. Top JCI-accredited clinics in Casablanca, Marrakech & Rabat with cost savings of 50-70% vs Europe and the US. Recovery riads, patient journey timelines, and real pricing in MAD.',
  keywords: [
    'medical tourism morocco',
    'dental tourism morocco',
    'cosmetic surgery morocco',
    'hair transplant morocco',
    'morocco dental implants cost',
    'rhinoplasty morocco price',
    'LASIK morocco',
    'IVF morocco',
    'thalassotherapy morocco',
    'best clinics casablanca',
    'JCI accredited hospital morocco',
    'medical travel morocco 2026',
    'dental veneers morocco',
    'liposuction morocco cost',
    'fertility treatment morocco',
    'recovery riad marrakech',
    'cheikh zaid hospital casablanca',
    'morocco healthcare costs',
  ],
  openGraph: {
    title: 'Morocco Medical Tourism Guide 2026 | Dental, Cosmetic Surgery & Costs',
    description:
      'Dental implants, cosmetic surgery, hair transplants, LASIK, IVF, and thermal therapy in Morocco. JCI-accredited clinics, 50-70% savings vs Europe/US, recovery riads, and full patient journey timelines.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-casablanca.webp`,
        width: 1200,
        height: 630,
        alt: 'Modern medical district in Casablanca, Morocco with contemporary hospital architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Medical Tourism Guide 2026 | Surgery, Dental & Recovery',
    description:
      'Top clinics in Casablanca, Marrakech & Rabat. Dental implants from 5,000 MAD, rhinoplasty from 20,000 MAD, hair transplants from 15,000 MAD. Full cost comparison tables and patient timelines.',
    images: [`${BASE_URL}/images/hero-casablanca.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Is medical tourism in Morocco safe?',
    a: 'Morocco has several JCI-accredited and ISO-certified hospitals and clinics that meet international safety standards. Cheikh Zaid International Hospital, Clinique du Parc Casablanca, and several private dental centers hold international accreditations. Always verify your chosen clinic\'s credentials before booking. Complication rates at accredited facilities are comparable to European hospitals.',
  },
  {
    q: 'How much can I save on dental implants in Morocco compared to the UK or US?',
    a: 'A single dental implant in Morocco costs from 5,000 MAD to 8,000 MAD (roughly 450-700 EUR), compared to 2,000-3,000 EUR in France or 3,000-5,000 USD in the US. That represents savings of 50-70%. Full-mouth rehabilitation with multiple implants can save patients 10,000 EUR or more. Seasonal pricing can change, so request a detailed quote before traveling.',
  },
  {
    q: 'Do Moroccan doctors and surgeons speak English or French?',
    a: 'Most specialists at private clinics in Casablanca, Rabat, and Marrakech speak fluent French, and many speak English. Surgeons trained in France, Belgium, or the US are common. Clinics catering to international patients typically have multilingual coordinators who handle all communication.',
  },
  {
    q: 'How long should I plan to stay in Morocco for dental work?',
    a: 'For dental veneers or crowns, plan 5-7 days. Dental implants require two visits: the first for implant placement (3-5 days) and a return trip 3-6 months later for the crown fitting (2-3 days). Some clinics offer same-day implant protocols for suitable candidates, reducing the stay to 5-7 days total.',
  },
  {
    q: 'What is the recovery time for a hair transplant in Morocco?',
    a: 'After a FUE hair transplant, most patients can fly home after 2-3 days. Initial redness and scabbing clear within 7-10 days. Final results become visible at 9-12 months. Many clinics provide a recovery kit with special shampoo, medication, and a follow-up schedule. Remote check-ins via video call are standard.',
  },
  {
    q: 'Can I combine a medical procedure with a holiday in Morocco?',
    a: 'Absolutely. Many medical tourists schedule their procedure in Casablanca or Rabat, then recover in Marrakech or Essaouira, where riads offer quiet courtyards, private pools, and room service. Clinics can recommend recovery-friendly accommodations. Allow at least 2-3 days of rest before any strenuous sightseeing.',
  },
  {
    q: 'Does my insurance cover medical procedures done in Morocco?',
    a: 'Most European and US health insurance plans do not cover elective procedures abroad. However, some international insurance providers and medical tourism facilitators offer packages that include treatment coverage. Check with your insurer before departure. Keep all receipts, medical reports, and invoices for potential tax deductions in some countries.',
  },
  {
    q: 'What accreditations should I look for when choosing a clinic in Morocco?',
    a: 'Look for JCI (Joint Commission International) accreditation, ISO 9001 certification, or membership in the Moroccan College of the relevant specialty. Board certification of individual surgeons matters more than the clinic name. Ask for the surgeon\'s CV, training history, before-and-after photos, and patient references.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Medical Tourism Guide 2026',
  description:
    'Complete guide to medical tourism in Morocco covering dental work, cosmetic surgery, fertility treatments, eye surgery, thalassotherapy, top clinics, cost comparisons, and recovery stays.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-casablanca.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Medical Tourism Guide', item: PAGE_URL },
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
   DATA: PROCEDURE CATEGORIES
   ================================================================ */

const procedureCategories = [
  {
    title: 'Dental Tourism',
    icon: Sparkles,
    color: 'text-[var(--color-accent)]',
    procedures: [
      { name: 'Dental Implant (single)', moroccoPrice: 'from 5,000 MAD', europePrice: '2,000-3,000 EUR', usPrice: '3,000-5,000 USD', savings: '60-70%' },
      { name: 'Porcelain Veneer (per tooth)', moroccoPrice: 'from 2,500 MAD', europePrice: '800-1,200 EUR', usPrice: '1,000-2,500 USD', savings: '55-65%' },
      { name: 'Zirconia Crown', moroccoPrice: 'from 2,000 MAD', europePrice: '700-1,000 EUR', usPrice: '1,000-1,500 USD', savings: '60-70%' },
      { name: 'All-on-4 Implants (full arch)', moroccoPrice: 'from 40,000 MAD', europePrice: '12,000-18,000 EUR', usPrice: '20,000-30,000 USD', savings: '65-70%' },
      { name: 'Teeth Whitening (in-office)', moroccoPrice: 'from 1,500 MAD', europePrice: '400-700 EUR', usPrice: '500-1,000 USD', savings: '55-65%' },
    ],
  },
  {
    title: 'Cosmetic Surgery',
    icon: Scissors,
    color: 'text-[var(--color-gold)]',
    procedures: [
      { name: 'Rhinoplasty', moroccoPrice: 'from 20,000 MAD', europePrice: '5,000-8,000 EUR', usPrice: '8,000-15,000 USD', savings: '55-65%' },
      { name: 'Liposuction (one area)', moroccoPrice: 'from 15,000 MAD', europePrice: '3,000-6,000 EUR', usPrice: '5,000-8,000 USD', savings: '50-60%' },
      { name: 'FUE Hair Transplant (3000 grafts)', moroccoPrice: 'from 15,000 MAD', europePrice: '4,000-8,000 EUR', usPrice: '8,000-15,000 USD', savings: '60-70%' },
      { name: 'Breast Augmentation', moroccoPrice: 'from 30,000 MAD', europePrice: '5,000-8,000 EUR', usPrice: '6,000-12,000 USD', savings: '50-60%' },
      { name: 'Facelift', moroccoPrice: 'from 35,000 MAD', europePrice: '7,000-12,000 EUR', usPrice: '10,000-20,000 USD', savings: '55-65%' },
    ],
  },
  {
    title: 'Fertility & Reproductive',
    icon: Baby,
    color: 'text-pink-600',
    procedures: [
      { name: 'IVF Cycle (standard)', moroccoPrice: 'from 25,000 MAD', europePrice: '4,000-8,000 EUR', usPrice: '12,000-20,000 USD', savings: '50-70%' },
      { name: 'IUI (Intrauterine Insemination)', moroccoPrice: 'from 3,000 MAD', europePrice: '800-1,500 EUR', usPrice: '1,000-3,000 USD', savings: '55-65%' },
      { name: 'Egg Freezing', moroccoPrice: 'from 15,000 MAD', europePrice: '3,000-5,000 EUR', usPrice: '6,000-10,000 USD', savings: '55-65%' },
    ],
  },
  {
    title: 'Ophthalmology',
    icon: Eye,
    color: 'text-blue-600',
    procedures: [
      { name: 'LASIK (both eyes)', moroccoPrice: 'from 10,000 MAD', europePrice: '2,500-4,000 EUR', usPrice: '4,000-6,000 USD', savings: '55-65%' },
      { name: 'PRK (both eyes)', moroccoPrice: 'from 8,000 MAD', europePrice: '2,000-3,500 EUR', usPrice: '3,000-5,000 USD', savings: '55-60%' },
      { name: 'Cataract Surgery (per eye)', moroccoPrice: 'from 8,000 MAD', europePrice: '2,000-3,500 EUR', usPrice: '3,500-5,000 USD', savings: '55-65%' },
    ],
  },
];

/* ================================================================
   DATA: TOP CLINICS & HOSPITALS
   ================================================================ */

const topClinics = [
  {
    name: 'Cheikh Zaid International Hospital',
    city: 'Rabat',
    specialty: 'Multi-specialty, cardiology, orthopedics',
    accreditation: 'JCI Accredited',
    notes: 'One of the largest private hospitals in Morocco with over 400 beds. Teaching hospital affiliated with Abulcasis University. Strong cardiology and surgical departments.',
  },
  {
    name: 'Clinique du Parc',
    city: 'Casablanca',
    specialty: 'General surgery, orthopedics, maternity',
    accreditation: 'ISO 9001 Certified',
    notes: 'Established private clinic in the Maarif district. Modern surgical suites and a reputation for orthopedic and general surgery. Popular with French-speaking medical tourists.',
  },
  {
    name: 'Clinique Internationale de Marrakech',
    city: 'Marrakech',
    specialty: 'Cosmetic surgery, dental, dermatology',
    accreditation: 'Moroccan Ministry of Health Licensed',
    notes: 'Caters specifically to medical tourists. Offers all-inclusive packages with airport transfer, hotel, and post-operative care. Multilingual staff speaking Arabic, French, English, and Spanish.',
  },
  {
    name: 'Centre International de Chirurgie Dentaire (CICD)',
    city: 'Casablanca',
    specialty: 'Implantology, prosthodontics, aesthetic dentistry',
    accreditation: 'ISO Certified, French Dental Association member',
    notes: 'State-of-the-art dental center with 3D imaging, CAD/CAM same-day crowns, and in-house laboratory. The lead implantologist trained in Paris and Geneva.',
  },
  {
    name: 'Clinique de la Fertilite Casablanca',
    city: 'Casablanca',
    specialty: 'IVF, IUI, reproductive endocrinology',
    accreditation: 'ESHRE Member Clinic',
    notes: 'Dedicated fertility center with success rates published annually. Modern embryology lab and experienced team. Discreet service for international patients.',
  },
  {
    name: 'Institut de Thalassotherapie de Casablanca',
    city: 'Casablanca (Ain Diab)',
    specialty: 'Thalassotherapy, physiotherapy, post-operative recovery',
    accreditation: 'Qualicert Certified',
    notes: 'Oceanfront thalassotherapy center offering seawater-based recovery programs. Popular post-surgery destination for pain management, rehabilitation, and general wellness.',
  },
];

/* ================================================================
   DATA: PATIENT JOURNEY TIMELINE
   ================================================================ */

const journeySteps = [
  {
    step: 1,
    title: 'Research & Consultation',
    duration: '2-4 weeks before travel',
    icon: BookOpen,
    description: 'Research accredited clinics, request quotes, and schedule a remote video consultation. Send your medical records, X-rays, or photos. The clinic prepares a treatment plan with itemized costs.',
  },
  {
    step: 2,
    title: 'Book Flights & Accommodation',
    duration: '1-2 weeks before travel',
    icon: Plane,
    description: 'Book your flights to Casablanca, Rabat, or Marrakech. Many clinics partner with nearby hotels and recovery riads at discounted rates. Ask the clinic for their recommended lodging list.',
  },
  {
    step: 3,
    title: 'Arrival & Pre-Procedure Assessment',
    duration: 'Day 1',
    icon: CalendarCheck,
    description: 'Meet the medical team in person. Complete blood work, imaging, or other diagnostics at the clinic. The surgeon reviews the treatment plan and confirms the procedure details face to face.',
  },
  {
    step: 4,
    title: 'Procedure Day',
    duration: 'Day 2-3',
    icon: Stethoscope,
    description: 'The procedure is performed under the agreed anesthesia protocol. Minor procedures (dental, LASIK) may take hours; surgeries like rhinoplasty require one overnight stay. The clinic provides detailed aftercare instructions.',
  },
  {
    step: 5,
    title: 'Post-Operative Monitoring',
    duration: 'Day 3-5',
    icon: Activity,
    description: 'Follow-up appointments at the clinic for wound checks, suture removal, or adjustment of dressings. The surgeon clears you for travel when healing progresses on schedule.',
  },
  {
    step: 6,
    title: 'Recovery & Departure',
    duration: 'Day 5-10',
    icon: Bed,
    description: 'Rest at a recovery riad or hotel. Light walks in gardens or along the coast help circulation. Receive a full medical report, prescriptions, and a follow-up schedule before heading to the airport.',
  },
];

/* ================================================================
   DATA: RECOVERY RIADS & HOTELS
   ================================================================ */

const recoveryStays = [
  {
    name: 'Riad Recovery Marrakech',
    city: 'Marrakech',
    priceRange: 'from 800 MAD/night',
    features: ['Private courtyard rooms', 'Nurse on call', 'Special dietary meals', 'Airport transfer included'],
  },
  {
    name: 'Hôtel & Spa des Arts',
    city: 'Casablanca',
    priceRange: 'from 1,200 MAD/night',
    features: ['Walking distance to major clinics', 'Room service 24h', 'In-house physiotherapist', 'Quiet executive floor'],
  },
  {
    name: 'Sofitel Rabat Jardin des Roses',
    city: 'Rabat',
    priceRange: 'from 2,000 MAD/night',
    features: ['Spa and pool', 'Garden suites', 'Medical concierge service', 'Near Cheikh Zaid Hospital'],
  },
  {
    name: 'Villa Blanche Essaouira',
    city: 'Essaouira',
    priceRange: 'from 900 MAD/night',
    features: ['Ocean air recovery', 'Rooftop terrace', 'Fresh seafood meals', 'Peaceful medina location'],
  },
];

/* ================================================================
   DATA: THERMAL & THALASSOTHERAPY
   ================================================================ */

const thermalCenters = [
  {
    name: 'Moulay Yacoub Thermal Baths',
    location: '20 km from Fes',
    type: 'Natural hot springs',
    bestFor: 'Rheumatic conditions, skin disorders, post-surgical recovery',
    price: 'from 100 MAD entry; therapeutic packages from 500 MAD/session',
  },
  {
    name: 'Lalla Takerkoust Thalassotherapy',
    location: 'South of Marrakech',
    type: 'Lake and mineral spring therapy',
    bestFor: 'Relaxation, respiratory conditions, rehabilitation',
    price: 'from 400 MAD/session',
  },
  {
    name: 'Mazagan Beach Resort Thalasso',
    location: 'El Jadida',
    type: 'Oceanfront thalassotherapy',
    bestFor: 'Post-operative recovery, chronic pain, stress management',
    price: 'from 1,500 MAD/day package',
  },
  {
    name: 'Palmeraie Spa & Thalasso',
    location: 'Marrakech Palmeraie',
    type: 'Luxury thalassotherapy',
    bestFor: 'Weight management, skin renewal, joint rehabilitation',
    price: 'from 1,200 MAD/day package',
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoMedicalTourismPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <li className="text-[var(--text-primary)] font-medium truncate">Morocco Medical Tourism Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <img
          src="/images/hero-casablanca.webp"
          alt="Modern Casablanca skyline representing Morocco's advanced medical infrastructure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 container-morocco text-center py-20">
          <p className="text-white/80 text-sm font-[family-name:var(--font-heading)] uppercase tracking-widest mb-4">
            Morocco Travel Guide
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco Medical Tourism Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            World-class dental care, cosmetic surgery, fertility treatments, and thermal therapy at a fraction of European and American prices. Accredited clinics, experienced surgeons, and recovery stays in one of the most beautiful countries on earth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <TrendingDown className="w-4 h-4" /> 50-70% Cost Savings
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <BadgeCheck className="w-4 h-4" /> JCI-Accredited Clinics
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <Globe className="w-4 h-4" /> Multilingual Surgeons
            </span>
          </div>
        </div>
      </section>

      {/* ── Why Morocco for Medical Tourism ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stethoscope className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Patients Choose Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has become a major destination for medical travelers from France, Spain, the UK, the Gulf states, and sub-Saharan Africa. Here is what drives that growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: 'Dramatic Cost Savings',
                text: 'Procedures cost 50-70% less than in Western Europe or North America. A dental implant that costs 3,000 EUR in France runs from 5,000 MAD (about 450 EUR) in Casablanca. The savings on complex procedures like full-mouth rehabilitation or rhinoplasty can fund the entire trip and then some.',
              },
              {
                icon: Award,
                title: 'French-Trained Surgeons',
                text: 'Morocco\'s medical elite study at top French, Belgian, and North American universities. Many hold dual certifications. The country\'s healthcare education system follows the French model, producing specialists who are deeply familiar with European clinical standards.',
              },
              {
                icon: Building,
                title: 'Modern Private Clinics',
                text: 'Private hospitals in Casablanca and Rabat feature the same equipment found in Paris or London: 3D cone-beam scanners, robotic-assisted surgical tools, advanced embryology labs, and femtosecond laser platforms for LASIK.',
              },
              {
                icon: Globe,
                title: 'Short Flights from Europe',
                text: 'Casablanca is a 2.5-hour flight from Paris, 3 hours from London, and 1 hour from Madrid. Budget carriers like Ryanair and Transavia offer tickets from 30-50 EUR each way. Proximity makes even short dental trips practical.',
              },
              {
                icon: Heart,
                title: 'Recovery in Beautiful Settings',
                text: 'Post-procedure recovery happens in riads with courtyard gardens, coastal hotels with ocean breezes, or mountain retreats with clean air. Morocco offers healing environments that clinical cities in Europe simply cannot match.',
              },
              {
                icon: ShieldCheck,
                title: 'Growing Regulatory Oversight',
                text: 'The Moroccan government has invested heavily in healthcare regulation since the 2015 health reform law. Private clinics must meet Ministry of Health standards, and several major hospitals hold JCI accreditation, the gold standard for international patient safety.',
              },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <ItemIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cost Comparison Tables ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cost Comparison: Morocco vs Europe vs USA
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Real pricing data from accredited clinics. All Morocco prices in MAD. Seasonal pricing can change, so always request a current quote.
          </p>

          {procedureCategories.map((category) => {
            const CatIcon = category.icon;
            return (
              <div key={category.title} className="mb-12 last:mb-0">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <CatIcon className={`w-6 h-6 ${category.color}`} />
                  {category.title}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[var(--color-accent)] text-white">
                        <th className="text-left py-3 px-4 rounded-tl-lg font-[family-name:var(--font-heading)]">Procedure</th>
                        <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)]">Morocco</th>
                        <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)]">Europe</th>
                        <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)]">USA</th>
                        <th className="text-left py-3 px-4 rounded-tr-lg font-[family-name:var(--font-heading)]">Savings</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.procedures.map((proc, i) => (
                        <tr key={proc.name} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                          <td className="py-3 px-4 font-medium text-[var(--text-primary)]">{proc.name}</td>
                          <td className="py-3 px-4 text-[var(--color-accent)] font-bold">{proc.moroccoPrice}</td>
                          <td className="py-3 px-4 text-[var(--text-secondary)]">{proc.europePrice}</td>
                          <td className="py-3 px-4 text-[var(--text-secondary)]">{proc.usPrice}</td>
                          <td className="py-3 px-4 text-green-700 font-bold">{proc.savings}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}

          <div className="card-moroccan p-5 mt-8 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <strong className="text-[var(--text-primary)]">Price disclaimer:</strong> All prices are approximate and based on 2025-2026 quotes from accredited clinics. Actual costs depend on case complexity, surgeon experience, materials used, and clinic location. Seasonal pricing can change. Always request a personalized, itemized quote before committing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Dental Tourism Deep Dive ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dental Tourism in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Dental care is the most popular category of medical tourism in Morocco. Casablanca alone has dozens of clinics specifically set up for international patients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--color-gold)]" /> Most Requested Dental Procedures
              </h3>
              <ul className="space-y-3">
                {[
                  { proc: 'Dental Implants (Straumann, Nobel Biocare)', detail: 'Swiss and Swedish implant brands, placed by certified implantologists. Same-day loading available for qualifying patients. From 5,000 MAD per implant.' },
                  { proc: 'Porcelain Veneers (E.max, Zirconia)', detail: 'Smile makeovers with up to 20 veneers in a single trip. Digital smile design lets you preview results before committing. From 2,500 MAD per veneer.' },
                  { proc: 'Full-Mouth Rehabilitation', detail: 'Complex cases involving implants, bridges, crowns, and gum treatment. Typically requires 7-14 days in Morocco. From 40,000 MAD for a full arch.' },
                  { proc: 'Teeth Whitening', detail: 'In-office Zoom or laser whitening completed in one session. From 1,500 MAD.' },
                ].map((item) => (
                  <li key={item.proc} className="card-moroccan p-4">
                    <p className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-1">{item.proc}</p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-[var(--color-accent)]" /> What to Know Before You Book
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Bring Your Dental Records', text: 'Clinics need recent X-rays or a panoramic scan. Many accept digital files via email. If you do not have recent imaging, the clinic will take a CBCT scan on arrival for from 500 MAD.' },
                  { title: 'Plan for Two Trips (Implants)', text: 'Standard implant protocols place the implant on the first visit, then attach the crown 3-6 months later after osseointegration. Some clinics offer immediate loading, but this is only suitable for certain bone densities.' },
                  { title: 'Materials Matter', text: 'Ask which implant brand the clinic uses. Straumann (Swiss), Nobel Biocare (Swedish), and Osstem (Korean) are the most common in Moroccan clinics. Avoid clinics that refuse to disclose the brand.' },
                  { title: 'Aftercare Protocol', text: 'Get a written aftercare document in your language. This should include medication instructions, dietary restrictions, emergency contacts, and a follow-up schedule. Reputable clinics provide this automatically.' },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-[var(--color-accent)] pl-4">
                    <p className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-1">{item.title}</p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cosmetic Surgery & Hair Transplants ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scissors className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Cosmetic Surgery &amp; Hair Transplants
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has become a top destination for cosmetic procedures, particularly rhinoplasty and hair restoration. Surgeons trained in Paris and Brussels perform thousands of procedures annually.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Rhinoplasty',
                icon: Star,
                content: 'Morocco is among the top five countries globally for rhinoplasty volume. Casablanca surgeons specialize in both aesthetic and functional nose surgery, including septoplasty combined with reshaping. Ultrasonic rhinoplasty (piezo technique) is available at leading clinics. Expect 7-10 days in Morocco: pre-operative consultation, surgery, and at least two follow-up visits before the surgeon clears you to fly. Pricing starts from 20,000 MAD all-inclusive.',
              },
              {
                title: 'Hair Transplant (FUE)',
                icon: Users,
                content: 'FUE (Follicular Unit Extraction) hair transplants are among the most in-demand procedures. A session of 3,000 grafts takes 6-8 hours and costs from 15,000 MAD, a fraction of the 8,000-15,000 USD charged in the US. Clinics in Casablanca and Rabat use motorized and robotic extraction tools. Most patients fly home 2-3 days after the procedure. Final results appear at 9-12 months.',
              },
              {
                title: 'Body Contouring',
                icon: Sparkles,
                content: 'Liposuction, tummy tucks (abdominoplasty), and Brazilian butt lifts are performed at accredited surgical centers. VASER liposuction and power-assisted techniques are available. Surgeons emphasize realistic expectations and require a BMI assessment before scheduling. Liposuction for a single area starts from 15,000 MAD. Full body contouring packages start from 45,000 MAD.',
              },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <ItemIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.content}</p>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-5 mt-8 zellige-border">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
              Choosing a Cosmetic Surgeon in Morocco
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[var(--text-secondary)]">
              {[
                'Verify board certification with the Moroccan Order of Physicians (Ordre National des Médecins)',
                'Ask where the surgeon trained and how many of your specific procedure they perform per year',
                'Request before-and-after photos from at least 10 previous patients with similar anatomy',
                'Confirm the surgical facility is licensed and has an anesthesiologist on staff during the procedure',
                'Ensure a written quote covers surgeon fees, anesthesia, facility fees, follow-ups, and medications',
                'Check for a clear revision policy in case you are unsatisfied with the aesthetic result',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Fertility Treatments & Ophthalmology ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Fertility */}
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Baby className="w-7 h-7 text-pink-600" />
                Fertility Treatments (IVF &amp; IUI)
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Morocco offers IVF and assisted reproduction at a fraction of European costs. Clinics in Casablanca are the primary hub, equipped with modern embryology laboratories and experienced reproductive endocrinologists. A standard IVF cycle costs from 25,000 MAD (roughly 2,300 EUR), compared to 4,000-8,000 EUR in France or Germany.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'IVF Success Rate', value: '35-45% per cycle (under 35 years), comparable to European averages' },
                  { label: 'Egg Freezing', value: 'Available at select Casablanca clinics, from 15,000 MAD per cycle' },
                  { label: 'Legal Framework', value: 'IVF is legal for married couples. Moroccan law requires a marriage certificate. Egg and sperm donation regulations are more restrictive than in Europe.' },
                  { label: 'Typical Stay', value: '10-14 days for a complete IVF cycle, including stimulation monitoring, egg retrieval, and embryo transfer' },
                ].map((item) => (
                  <div key={item.label} className="card-moroccan p-4">
                    <p className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-1">{item.label}</p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ophthalmology */}
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Eye className="w-7 h-7 text-blue-600" />
                Ophthalmology (LASIK &amp; Cataract)
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                LASIK and refractive surgery are among the fastest-growing segments of Moroccan medical tourism. Casablanca and Rabat have ophthalmology centers with femtosecond laser platforms (the same technology used at Moorfields in London or Bascom Palmer in the US). Both eyes can be corrected in a single session lasting under 30 minutes.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'LASIK (both eyes)', value: 'From 10,000 MAD. Wavefront-guided and topography-guided options available. Recovery: 24-48 hours of blurry vision, then rapid improvement.' },
                  { label: 'PRK / TransPRK', value: 'From 8,000 MAD. Better for thin corneas. Longer recovery (5-7 days) but equally good long-term results.' },
                  { label: 'Cataract Surgery', value: 'From 8,000 MAD per eye with premium intraocular lens. Multifocal and toric lenses available. Day surgery with local anesthesia.' },
                  { label: 'Pre-Op Screening', value: 'A comprehensive eye exam including corneal topography, pachymetry, and pupil assessment is performed before any laser procedure. This takes 1-2 hours and is included in the quoted price.' },
                ].map((item) => (
                  <div key={item.label} className="card-moroccan p-4">
                    <p className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-1">{item.label}</p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Clinics & Hospitals ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Clinics &amp; Hospitals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These facilities have track records with international patients. Always verify current accreditation status directly with the clinic before booking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topClinics.map((clinic) => (
              <div key={clinic.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] pr-2">{clinic.name}</h3>
                  <BadgeCheck className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-sm text-[var(--text-secondary)]">{clinic.city}</span>
                </div>
                <p className="text-xs text-[var(--color-accent)] font-medium mb-2">{clinic.specialty}</p>
                <div className="bg-[var(--surface-muted)] rounded-lg px-3 py-1.5 mb-3">
                  <span className="text-xs font-medium text-[var(--color-gold)] flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> {clinic.accreditation}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{clinic.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Patient Journey Timeline ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Your Patient Journey: Step by Step
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From first inquiry to flying home, here is what a typical medical tourism trip to Morocco looks like.
          </p>

          <div className="space-y-6">
            {journeySteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.step} className="card-moroccan p-6 flex gap-5">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    {step.step < journeySteps.length && (
                      <div className="w-0.5 h-full bg-[var(--color-accent)]/20 mt-2" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <StepIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[var(--color-gold)] font-medium mb-2 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {step.duration}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Thermal & Thalassotherapy ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Thermal Springs &amp; Thalassotherapy
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s natural hot springs and oceanfront thalassotherapy centers are used both for standalone wellness and as post-surgical recovery programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {thermalCenters.map((center) => (
              <div key={center.name} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{center.name}</h3>
                <div className="flex flex-wrap gap-4 text-xs text-[var(--text-secondary)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" /> {center.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Thermometer className="w-3.5 h-3.5 text-[var(--color-gold)]" /> {center.type}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-2">
                  <strong className="text-[var(--text-primary)]">Best for:</strong> {center.bestFor}
                </p>
                <p className="text-sm text-[var(--color-accent)] font-medium">{center.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 card-moroccan p-6 zellige-border">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              Thalassotherapy for Post-Surgical Recovery
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Thalassotherapy uses heated seawater, marine mud, and algae wraps for therapeutic purposes. Several Moroccan medical tourism packages now include a 3-5 day thalassotherapy program after surgical procedures. The mineral-rich Atlantic seawater helps reduce inflammation, improve circulation, and accelerate healing. Programs are supervised by physiotherapists and can be tailored to specific post-operative needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Seawater Jet Massage', desc: 'Pressurized seawater jets target muscle tension and reduce post-surgical swelling' },
                { label: 'Algae Body Wrap', desc: 'Marine algae rich in magnesium and potassium applied to skin for detoxification and skin healing' },
                { label: 'Heated Seawater Pool', desc: 'Gentle aquatic exercises in 34°C seawater for joint mobility and pain-free rehabilitation' },
              ].map((t) => (
                <div key={t.label} className="bg-[var(--surface-muted)] rounded-lg p-4">
                  <p className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-1">{t.label}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Recovery Riads & Hotels ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Recovery Riads &amp; Hotels
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where you recover matters. These accommodations cater to medical tourists with quiet rooms, dietary flexibility, and proximity to clinics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recoveryStays.map((stay) => (
              <div key={stay.name} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">{stay.name}</h3>
                <p className="text-xs text-[var(--color-accent)] mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {stay.city}
                </p>
                <p className="text-sm font-bold text-[var(--color-gold)] mb-3">{stay.priceRange}</p>
                <ul className="space-y-1.5">
                  {stay.features.map((f) => (
                    <li key={f} className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                      <CheckCircle className="w-3 h-3 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips & Checklist ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FileCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pre-Travel Checklist for Medical Tourists
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Prepare thoroughly and your medical trip will go smoothly. Skip these steps and you risk delays, surprises, or complications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Verify Clinic Credentials', text: 'Check JCI, ISO, or Ministry of Health accreditation. Ask for the clinic\'s registration number and verify it independently. Do not rely solely on the clinic\'s own marketing materials.' },
              { title: 'Get a Detailed Written Quote', text: 'The quote must itemize surgeon fees, anesthesia, operating room fees, lab work, medications, follow-up visits, and any implant or material costs. Refuse "package deals" that lack transparency.' },
              { title: 'Arrange Medical Records Transfer', text: 'Send your medical history, current medications, allergies, and recent test results to the clinic at least two weeks before arrival. For dental work, send a panoramic X-ray or CBCT scan.' },
              { title: 'Confirm Surgeon\'s Background', text: 'Request the lead surgeon\'s CV: where they trained, years of experience, and number of your specific procedure performed. Ask for before-and-after photos from at least five past patients.' },
              { title: 'Book Recovery Accommodation', text: 'Reserve a room near the clinic with elevator access (no stairs after surgery), room service, and a quiet environment. Ask the clinic for their list of partner hotels or recovery riads.' },
              { title: 'Plan Your Flights Carefully', text: 'After rhinoplasty or facial surgery, avoid flying for at least 7 days. After dental implants, wait 24-48 hours. After LASIK, most patients can fly within 24 hours. Book flexible tickets when possible.' },
              { title: 'Prepare for Communication', text: 'Download a translation app. Most clinic staff speak French and many speak English, but having Google Translate on hand helps with pharmacy visits or conversations outside the clinic.' },
              { title: 'Travel Insurance', text: 'Standard travel insurance does not cover elective medical procedures. Look for specialized medical tourism insurance or ask the clinic if they offer any complication coverage.' },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Medical Tourism by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medical Tourism by City
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                city: 'Casablanca',
                role: 'The Medical Capital',
                description: 'Casablanca is Morocco\'s undisputed healthcare hub. Home to the largest concentration of private clinics, specialist surgeons, and diagnostic laboratories. The Maarif and Ain Diab districts host most international-patient-focused facilities. Casablanca also has the country\'s best-equipped dental centers and fertility clinics. Mohammed V International Airport (CMN) offers direct flights from dozens of European cities.',
                strengths: ['Dental implants & veneers', 'Cosmetic surgery', 'IVF & fertility', 'Cardiology'],
              },
              {
                city: 'Rabat',
                role: 'Teaching Hospital Excellence',
                description: 'Rabat is home to Cheikh Zaid International Hospital, one of Morocco\'s most respected medical institutions. The capital also houses the Ibn Sina University Hospital and several government-affiliated specialty centers. Rabat\'s medical infrastructure benefits from its status as the administrative capital, with strong regulatory oversight. The city is quieter than Casablanca, which some patients prefer during recovery.',
                strengths: ['Orthopedics', 'Cardiology', 'Ophthalmology', 'General surgery'],
              },
              {
                city: 'Marrakech',
                role: 'Recovery Paradise',
                description: 'Marrakech is less of a surgical hub than Casablanca, but it excels as a recovery destination. Several cosmetic surgery clinics have opened in the Guéliz district, and the city\'s riads offer the ideal environment for post-procedure rest. Marrakech is also the gateway to Palmeraie spa resorts and Atlas Mountain retreats. Many medical tourists schedule surgery in Casablanca and recover in Marrakech.',
                strengths: ['Cosmetic surgery', 'Recovery riads', 'Thalassotherapy', 'Hair transplants'],
              },
            ].map((city) => (
              <div key={city.city} className="card-moroccan p-6">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">{city.city}</h3>
                <p className="text-sm text-[var(--color-accent)] font-medium mb-3">{city.role}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{city.description}</p>
                <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Key Strengths</h4>
                <div className="flex flex-wrap gap-2">
                  {city.strengths.map((s) => (
                    <span key={s} className="bg-[var(--surface-muted)] text-xs text-[var(--text-secondary)] px-3 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
            Real questions from patients considering medical treatment in Morocco.
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
                title: 'Health & Safety Guide',
                description: 'Vaccinations, pharmacies, tap water safety, emergency numbers, and travel health essentials for Morocco.',
                href: '/morocco-health-safety',
                icon: ShieldCheck,
              },
              {
                title: 'Spa & Hammam Guide',
                description: 'Traditional hammam rituals, best spas in Marrakech and Fes, pricing, and what to bring.',
                href: '/morocco-spa-guide',
                icon: Sparkles,
              },
              {
                title: 'Thermal Springs & Spas',
                description: 'Natural hot springs at Moulay Yacoub, Sidi Harazem, and mountain thermal baths across Morocco.',
                href: '/morocco-thermal-spas',
                icon: Thermometer,
              },
              {
                title: 'Luxury Travel Guide',
                description: 'Palace hotels, private tours, desert glamping, and premium experiences across Morocco.',
                href: '/morocco-luxury-travel',
                icon: Crown,
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
      <section className="py-16 md:py-20 bg-[var(--color-accent)] text-white">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-6">
            Plan Your Medical Trip to Morocco
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            From dental implants in Casablanca to recovery in a Marrakech riad, Morocco offers world-class medical care at prices that make the journey worthwhile. Start by researching accredited clinics, requesting quotes, and booking a consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/casablanca"
              className="bg-white text-[var(--color-accent)] px-8 py-3 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            >
              Explore Casablanca <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-spa-guide"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              Spa &amp; Wellness Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

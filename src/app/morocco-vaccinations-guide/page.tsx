import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  ShieldCheck,
  Syringe,
  Heart,
  Info,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Building,
  Pill,
  Stethoscope,
  Droplets,
  Sun,
  Mountain,
  Phone,
  FileText,
  ShieldAlert,
  Cross,
  BookOpen,
  Star,
  MapPin,
  Ban,
  PackageCheck,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Vaccinations Guide 2026 | Required Shots, Travel Health & Medical Tips',
  description:
    'Complete guide to vaccinations and health preparations for Morocco travel. Learn which shots are required, recommended vaccines (Hepatitis A & B, Typhoid, Rabies), COVID-19 rules, pharmacy info, hospital care, banned medications, and essential travel health tips for 2025-2026.',
  keywords: [
    'morocco vaccinations',
    'do you need shots to go to morocco',
    'injections for morocco',
    'morocco yellow fever',
    'morocco healthcare for tourists',
    'what vaccinations are needed for morocco',
    'morocco entry requirements vaccines',
    'morocco travel health',
    'morocco hepatitis vaccine',
    'morocco typhoid vaccine',
    'morocco rabies vaccine',
    'morocco COVID requirements',
    'morocco pharmacy',
    'morocco hospitals tourists',
    'morocco banned medications',
    'morocco drinking water safety',
    'morocco travel first aid kit',
    'morocco health insurance',
    'morocco medical tips',
    'morocco health guide 2026',
  ],
  openGraph: {
    title: 'Morocco Vaccinations Guide 2026 | Required Shots, Travel Health & Medical Tips',
    description:
      'Everything you need to know about vaccinations, health precautions, and medical care for your Morocco trip. Required and recommended vaccines, pharmacy info, hospital guide, and essential health tips.',
    url: `${BASE_URL}/morocco-vaccinations-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-health.webp`,
        width: 1200,
        height: 630,
        alt: 'Morocco travel health and vaccinations guide with medical supplies and Moroccan landscape',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Vaccinations Guide 2026 | Required Shots & Travel Health',
    description:
      'Complete vaccinations and health guide for Morocco. Required shots, recommended vaccines, pharmacies, hospitals, banned medications, and essential travel health tips for 2025-2026.',
    images: [`${BASE_URL}/images/hero-health.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-vaccinations-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-vaccinations-guide`,
  name: 'Morocco Vaccinations Guide 2026 | Required Shots, Travel Health & Medical Tips',
  description:
    'Complete guide to vaccinations, health precautions, pharmacies, hospitals, and medical tips for traveling to Morocco in 2025-2026.',
  url: `${BASE_URL}/morocco-vaccinations-guide`,
  image: `${BASE_URL}/images/hero-health.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-vaccinations-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Vaccinations Guide', item: `${BASE_URL}/morocco-vaccinations-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you need vaccinations to go to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No vaccinations are legally required for entry into Morocco for most travelers. However, if you are arriving from a country where yellow fever is endemic, you must show proof of yellow fever vaccination. Health authorities strongly recommend being up to date on routine vaccines and getting Hepatitis A and Typhoid vaccines before traveling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is yellow fever vaccination required for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yellow fever vaccination is only required if you are arriving from or have recently transited through a country where yellow fever is endemic (parts of sub-Saharan Africa and South America). Travelers coming directly from Europe, North America, Asia, or Australia do not need this vaccine for Morocco entry.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the COVID-19 requirements for Morocco in 2025-2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of 2025-2026, Morocco has lifted all COVID-19 entry restrictions. Travelers no longer need to show proof of vaccination, negative test results, or health declarations. However, it is recommended to stay updated on any changes by checking official Moroccan government sources before travel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy medications at pharmacies in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco has a well-developed pharmacy network. Pharmacies (identifiable by a green crescent or cross sign) are found in every city and most towns. Many medications that require prescriptions in Western countries are available over the counter in Morocco at significantly lower prices. Pharmacists are well-trained and can often advise on common ailments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is tap water safe to drink in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tap water in major Moroccan cities like Rabat and Casablanca is technically treated and safe by local standards, but most travelers are advised to drink bottled water. The mineral content and treatment processes differ from what your body may be accustomed to, which can cause digestive discomfort. Bottled water (Sidi Ali and Ain Saiss are popular brands) is widely available from 5 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'What medications are banned in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has strict drug laws. Codeine-based medications, some strong painkillers, certain psychotropic medications, and any cannabis-derived products (including CBD oil) may be restricted or illegal. If you take prescription medications containing controlled substances, carry your doctor\'s prescription and a letter explaining your medical need, translated into French if possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get a rabies vaccine before going to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A rabies pre-exposure vaccine is recommended if you plan to spend significant time outdoors, visit rural areas, go trekking in the Atlas Mountains, or if you will be around animals. Morocco has stray dogs and cats in many areas. The pre-exposure vaccine does not eliminate the need for post-exposure treatment but gives you more time to reach medical care.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need travel health insurance for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While not legally required, travel health insurance is strongly recommended. Private healthcare in Morocco is good but can be expensive. Emergency evacuation costs can reach tens of thousands of dollars. Ensure your policy covers treatment, hospitalization, evacuation, and repatriation.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: RECOMMENDED VACCINATIONS
   ═══════════════════════════════════════════════════════════════ */

const recommendedVaccinations = [
  {
    name: 'Hepatitis A',
    icon: ShieldCheck,
    priority: 'Highly Recommended',
    doses: '2 doses, 6 months apart',
    protection: 'Near 100% after 2 doses, lasts 25+ years',
    description:
      'The most important vaccine for Morocco travel. Hepatitis A is transmitted through contaminated food and water. Even in high-end restaurants, the risk exists. The first dose provides protection within 2-4 weeks, and the second dose ensures long-term immunity.',
    timing: 'Get at least 2 weeks before departure. Second dose 6-12 months later.',
  },
  {
    name: 'Hepatitis B',
    icon: ShieldCheck,
    priority: 'Recommended',
    doses: '3 doses over 6 months',
    protection: '95% effective, can last a lifetime',
    description:
      'Transmitted through blood, bodily fluids, and contaminated medical equipment. Important if you might need medical treatment in Morocco, plan to get tattoos or piercings, or if your trip is longer than 6 months. Many adults are already vaccinated from childhood immunization schedules.',
    timing: 'Start the series at least 6 months before travel. An accelerated schedule is available.',
  },
  {
    name: 'Typhoid',
    icon: Syringe,
    priority: 'Highly Recommended',
    doses: '1 injection or 4 oral capsules',
    protection: '50-80% effective, lasts 2-5 years',
    description:
      'Typhoid fever is transmitted through contaminated food and water. The risk increases when eating street food or visiting rural areas. The injectable vaccine is a single dose; the oral vaccine is 4 capsules taken over a week. Both are effective but the injectable vaccine is more convenient.',
    timing: 'Injectable: at least 2 weeks before travel. Oral: complete course 1 week before travel.',
  },
  {
    name: 'Tetanus-Diphtheria-Pertussis (Tdap)',
    icon: ShieldAlert,
    priority: 'Recommended',
    doses: '1 booster if more than 10 years since last dose',
    protection: 'High effectiveness, lasts 10 years',
    description:
      'Most adults received tetanus vaccines in childhood but may need a booster. Tetanus is found in soil and can enter through cuts and scrapes, which are common during adventurous travel. The combination vaccine also protects against diphtheria and whooping cough.',
    timing: 'Anytime before travel if your last booster was more than 10 years ago.',
  },
  {
    name: 'Rabies (Pre-Exposure)',
    icon: AlertTriangle,
    priority: 'Recommended for Adventure Travelers',
    doses: '3 doses over 21-28 days',
    protection: 'High effectiveness with booster after exposure',
    description:
      'Morocco has stray dogs and cats in many cities and rural areas. Rabies is fatal once symptoms appear. The pre-exposure vaccine is strongly recommended if you plan to trek in the Atlas Mountains, cycle through rural areas, visit caves, or spend extended time outdoors. It does not eliminate the need for post-exposure treatment but gives you critical extra time to reach medical care.',
    timing: 'Start at least 28 days before travel. Doses given on days 0, 7, and 21-28.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: COMMON HEALTH CONCERNS
   ═══════════════════════════════════════════════════════════════ */

const healthConcerns = [
  {
    concern: 'Traveler\'s Diarrhea',
    icon: Droplets,
    risk: 'High',
    description:
      'The most common health issue for visitors. Caused by unfamiliar bacteria in food and water. Symptoms include loose stools, stomach cramps, and nausea, usually lasting 2-3 days.',
    prevention: [
      'Drink only bottled or purified water',
      'Avoid ice in drinks unless at trusted establishments',
      'Eat freshly cooked, hot food',
      'Peel fruits yourself before eating',
      'Wash hands frequently with soap',
      'Carry hand sanitizer at all times',
    ],
    treatment: 'Oral rehydration salts (available at any pharmacy for from 10 MAD), rest, and bland diet. Loperamide (Imodium) for symptom relief. See a doctor if symptoms persist beyond 3 days or if there is blood in stools.',
  },
  {
    concern: 'Sun Exposure & Heat',
    icon: Sun,
    risk: 'High (Summer)',
    description:
      'Morocco\'s sun is intense, especially in summer (June-September) when temperatures exceed 40 degrees C in cities like Marrakech, Fes, and the desert. Heatstroke and severe sunburn are genuine risks even for experienced travelers.',
    prevention: [
      'Wear SPF 50+ sunscreen, reapply every 2 hours',
      'Wear a wide-brimmed hat and sunglasses',
      'Avoid outdoor activities between 12pm and 4pm in summer',
      'Drink at least 3 liters of water daily',
      'Wear loose, light-colored clothing',
      'Take breaks in shade or air-conditioned spaces',
    ],
    treatment: 'Move to shade, cool the body with wet cloths, drink electrolyte solutions. For heatstroke (confusion, hot dry skin, rapid pulse), seek emergency medical attention immediately.',
  },
  {
    concern: 'Altitude Sickness',
    icon: Mountain,
    risk: 'Moderate (Atlas Mountains)',
    description:
      'Trekkers heading to the High Atlas Mountains, particularly Jebel Toubkal (4,167m), may experience altitude sickness above 2,500m. Symptoms include headache, nausea, dizziness, fatigue, and shortness of breath.',
    prevention: [
      'Ascend gradually: no more than 500m per day above 2,500m',
      'Spend 2 nights at the same altitude for every 1,000m gained',
      'Stay well hydrated (but avoid alcohol)',
      'Consider taking Acetazolamide (Diamox) as a preventive',
      'Listen to your body and descend if symptoms worsen',
      'Acclimatize in Imlil (1,740m) before ascending Toubkal',
    ],
    treatment: 'Descend immediately if symptoms are severe. Mild symptoms: rest, hydrate, and take ibuprofen for headache. Diamox can help. For severe cases (confusion, ataxia, pulmonary edema), emergency descent and medical evacuation are critical.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FIRST AID KIT ESSENTIALS
   ═══════════════════════════════════════════════════════════════ */

const firstAidKit = [
  { item: 'Oral rehydration salts (ORS packets)', purpose: 'Critical for dehydration from diarrhea or heat', priority: 'Essential' },
  { item: 'Loperamide (Imodium)', purpose: 'Stops diarrhea symptoms for travel days', priority: 'Essential' },
  { item: 'Broad-spectrum antibiotic (prescribed)', purpose: 'For bacterial infections when medical care is distant', priority: 'Essential' },
  { item: 'SPF 50+ sunscreen', purpose: 'Protection from Morocco\'s intense sun', priority: 'Essential' },
  { item: 'Insect repellent (DEET-based)', purpose: 'Mosquito and insect bite prevention', priority: 'Essential' },
  { item: 'Adhesive bandages and gauze', purpose: 'Minor cuts, scrapes, and blisters', priority: 'Essential' },
  { item: 'Antiseptic wipes and cream', purpose: 'Wound cleaning and infection prevention', priority: 'Essential' },
  { item: 'Paracetamol / Ibuprofen', purpose: 'Pain relief, fever reduction, altitude headaches', priority: 'Essential' },
  { item: 'Antihistamine tablets', purpose: 'Allergic reactions and insect bite relief', priority: 'Recommended' },
  { item: 'Motion sickness tablets', purpose: 'Winding mountain roads in the Atlas', priority: 'Recommended' },
  { item: 'Throat lozenges', purpose: 'Dry air and dust in southern Morocco and desert', priority: 'Recommended' },
  { item: 'Water purification tablets', purpose: 'Emergency water treatment in remote areas', priority: 'For Trekkers' },
  { item: 'Blister plasters (Compeed)', purpose: 'Essential for hiking and long medina walks', priority: 'For Trekkers' },
  { item: 'Altitude sickness medication (Diamox)', purpose: 'Prevention and treatment above 2,500m', priority: 'For Trekkers' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HOSPITALS AND CLINICS
   ═══════════════════════════════════════════════════════════════ */

const hospitals = [
  {
    city: 'Marrakech',
    facilities: [
      { name: 'Clinique Internationale de Marrakech', type: 'Private', note: 'English-speaking staff, 24/7 emergency, international standard' },
      { name: 'Polyclinique du Sud', type: 'Private', note: 'Well-equipped, multiple specialties available' },
      { name: 'CHU Mohammed VI', type: 'Public', note: 'Largest public hospital, can be crowded but has specialists' },
    ],
  },
  {
    city: 'Casablanca',
    facilities: [
      { name: 'Clinique Badr', type: 'Private', note: 'High standard, English and French speaking, most specialties' },
      { name: 'Hopital Cheikh Khalifa', type: 'Private', note: 'Modern facility with international accreditation' },
      { name: 'CHU Ibn Rochd', type: 'Public', note: 'Major teaching hospital, all specialties available' },
    ],
  },
  {
    city: 'Fes',
    facilities: [
      { name: 'Clinique Atlas', type: 'Private', note: 'Reliable private clinic with emergency services' },
      { name: 'CHU Hassan II', type: 'Public', note: 'Main public hospital, dental and surgical departments' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BANNED / RESTRICTED MEDICATIONS
   ═══════════════════════════════════════════════════════════════ */

const bannedMedications = [
  { category: 'Cannabis-derived products', examples: 'CBD oil, THC edibles, medical marijuana', note: 'Illegal regardless of prescription from home country' },
  { category: 'Codeine-based painkillers', examples: 'Co-codamol, Tylenol with codeine, Nurofen Plus', note: 'Restricted; carry prescription and doctor\'s letter' },
  { category: 'Strong opioid painkillers', examples: 'Tramadol, Oxycodone, Morphine patches', note: 'Strictly controlled; requires detailed documentation' },
  { category: 'Certain psychotropic medications', examples: 'Some ADHD medications (Adderall), some benzodiazepines', note: 'Carry prescription, doctor\'s letter in French, and only trip supply' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoVaccinationsGuide() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#2d1b14] via-[#3d2518] to-[#1a1a2e] overflow-hidden">
        <div className="hero-overlay" />
        <div className="moroccan-pattern absolute inset-0 opacity-10" />
        <div className="relative z-10 text-center px-4 py-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-[var(--color-gold)]" />
            <span className="text-[var(--color-gold)] font-[family-name:var(--font-heading)] tracking-widest uppercase text-sm">
              Travel Health Guide
            </span>
            <ShieldCheck className="w-5 h-5 text-[var(--color-gold)]" />
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white mb-4 leading-tight">
            Morocco Vaccinations &<br />Health Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Required shots, recommended vaccines, pharmacies, hospitals, and essential medical tips for safe travel in Morocco
          </p>
        </div>
      </section>

      {/* ── BREADCRUMBS ── */}
      <nav className="bg-white/80 backdrop-blur border-b border-[#e8e0d8]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-1.5 text-sm text-[#6b5e54]">
            <li className="flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5" />
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--color-accent)] font-medium">Morocco Vaccinations Guide</li>
          </ol>
        </div>
      </nav>

      <main className="bg-[#FAF8F5]">
        {/* ── INTRODUCTION ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-[var(--color-accent)]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#2d1b14]">
                Do You Need Vaccinations for Morocco?
              </h2>
            </div>
            <div className="prose max-w-none space-y-4 text-[#4a3f35] leading-relaxed">
              <p>
                <strong>The short answer: No vaccinations are legally required</strong> for most travelers entering Morocco.
                Unlike some African and South American countries, Morocco does not mandate any specific vaccines for entry
                from most nations. However, this does not mean you should skip your pre-travel health preparations entirely.
              </p>
              <p>
                The <strong>one exception</strong> is yellow fever: if you are arriving from or have transited through a
                country where yellow fever is endemic (parts of sub-Saharan Africa and South America), you must present
                proof of yellow fever vaccination. Travelers coming directly from Europe, North America, Asia, the Middle
                East, or Australia are not affected by this requirement.
              </p>
              <p>
                While no shots are mandatory for most visitors, several vaccinations are <strong>strongly recommended</strong> by
                the WHO and CDC. Morocco has good healthcare infrastructure, but basic precautions ensure a healthy trip.
              </p>
            </div>

            {/* Quick facts box */}
            <div className="card-moroccan p-6 mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-700" />
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-green-900 font-semibold">Quick Facts at a Glance</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-3 text-green-900 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Required vaccines:</strong> None for most travelers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Yellow fever:</strong> Only if from endemic country</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>COVID-19:</strong> No requirements as of 2025-2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Malaria:</strong> Eliminated (WHO certified 2010)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Pharmacies:</strong> Widespread, well-stocked, affordable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Health insurance:</strong> Not required but strongly recommended</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── RECOMMENDED VACCINATIONS ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Syringe className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-[var(--color-accent)] font-[family-name:var(--font-heading)] uppercase tracking-wider text-sm font-semibold">
                  Pre-Travel Immunizations
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2d1b14]">
                Recommended Vaccinations for Morocco
              </h2>
              <p className="text-[#6b5e54] mt-3 max-w-2xl mx-auto">
                Consult a travel medicine clinic 4-8 weeks before departure for personalized advice.
              </p>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {recommendedVaccinations.map((vaccine) => {
                const Icon = vaccine.icon;
                return (
                  <div key={vaccine.name} className="card-moroccan p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="font-[family-name:var(--font-heading)] text-xl text-[#2d1b14] font-semibold">{vaccine.name}</h3>
                          <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                            vaccine.priority === 'Highly Recommended'
                              ? 'bg-amber-100 text-amber-800'
                              : vaccine.priority === 'Recommended'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {vaccine.priority}
                          </span>
                        </div>
                        <p className="text-[#4a3f35] mb-3 leading-relaxed">{vaccine.description}</p>
                        <div className="grid sm:grid-cols-3 gap-3 text-sm">
                          <div className="bg-[#FAF8F5] rounded-lg p-3">
                            <span className="text-[#6b5e54] block font-medium">Doses</span>
                            <span className="text-[#2d1b14]">{vaccine.doses}</span>
                          </div>
                          <div className="bg-[#FAF8F5] rounded-lg p-3">
                            <span className="text-[#6b5e54] block font-medium">Protection</span>
                            <span className="text-[#2d1b14]">{vaccine.protection}</span>
                          </div>
                          <div className="bg-[#FAF8F5] rounded-lg p-3">
                            <span className="text-[#6b5e54] block font-medium">Timing</span>
                            <span className="text-[#2d1b14]">{vaccine.timing}</span>
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

        {/* ── YELLOW FEVER & COVID-19 ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Yellow Fever */}
            <div className="card-moroccan p-6 border-amber-200 bg-gradient-to-b from-amber-50 to-white">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-amber-900 font-semibold">Yellow Fever Requirement</h3>
              </div>
              <p className="text-amber-900 text-sm leading-relaxed mb-4">
                Morocco requires proof of yellow fever vaccination <strong>only</strong> if you are arriving from or have transited through
                a yellow fever endemic country. This includes parts of:
              </p>
              <ul className="space-y-2 text-amber-900 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span><strong>Sub-Saharan Africa:</strong> Including Nigeria, Kenya, Ethiopia, Ghana, Senegal, and others</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span><strong>South America:</strong> Including Brazil, Colombia, Peru, Bolivia, Ecuador, and others</span>
                </li>
              </ul>
              <p className="text-amber-800 text-sm mt-4 italic">
                Travelers from Europe, North America, Asia, the Middle East, and Australia are exempt from this requirement.
              </p>
            </div>

            {/* COVID-19 */}
            <div className="card-moroccan p-6 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-blue-700" />
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-blue-900 font-semibold">COVID-19 Requirements (2025-2026)</h3>
              </div>
              <p className="text-blue-900 text-sm leading-relaxed mb-4">
                As of 2025-2026, Morocco has <strong>lifted all COVID-19 entry restrictions</strong>. You no longer need:
              </p>
              <ul className="space-y-2 text-blue-900 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Proof of vaccination</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Negative PCR or antigen test</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Health declaration form</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Quarantine upon arrival</span>
                </li>
              </ul>
              <p className="text-blue-800 text-sm mt-4 italic">
                Requirements can change. Always verify with the Moroccan Embassy or official government website before travel.
              </p>
            </div>
          </div>
        </section>

        {/* ── TRAVEL HEALTH INSURANCE ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-[var(--color-accent)]" />
                <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#2d1b14]">
                  Travel Health Insurance
                </h2>
              </div>
              <p className="text-[#4a3f35] leading-relaxed mb-6">
                While not required for entry, travel health insurance is one of the most important investments
                for your trip. Private healthcare is good quality but expensive, and emergency evacuation can
                cost tens of thousands of dollars.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-[#2d1b14] font-semibold mb-3">Your Policy Should Cover</h3>
                  <ul className="space-y-2 text-sm text-[#4a3f35]">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Medical treatment and hospitalization</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Emergency medical evacuation</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Repatriation of remains</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Trip cancellation and interruption</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Adventure activities (trekking, surfing) if applicable</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Coverage above 3,000m if trekking the Atlas</span></li>
                  </ul>
                </div>
                <div className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-[#2d1b14] font-semibold mb-3">Cost Estimates</h3>
                  <ul className="space-y-2 text-sm text-[#4a3f35]">
                    <li className="flex items-start gap-2"><Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" /><span><strong>Basic coverage:</strong> From 30-60 USD per week</span></li>
                    <li className="flex items-start gap-2"><Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" /><span><strong>Comprehensive:</strong> From 80-150 USD per week</span></li>
                    <li className="flex items-start gap-2"><Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" /><span><strong>Adventure add-on:</strong> From 20-50 USD extra</span></li>
                    <li className="flex items-start gap-2"><Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" /><span><strong>Annual multi-trip:</strong> From 200-500 USD per year</span></li>
                    <li className="flex items-start gap-2"><Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" /><span><strong>Private hospital visit:</strong> From 500-2,000 MAD without insurance</span></li>
                    <li className="flex items-start gap-2"><Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" /><span><strong>Medical evacuation:</strong> From 20,000-100,000 USD without insurance</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMMON HEALTH CONCERNS ── */}
        <section className="container-morocco py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Stethoscope className="w-5 h-5 text-[var(--color-accent)]" />
              <span className="text-[var(--color-accent)] font-[family-name:var(--font-heading)] uppercase tracking-wider text-sm font-semibold">
                Stay Healthy
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2d1b14]">
              Common Health Concerns in Morocco
            </h2>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {healthConcerns.map((concern) => {
              const Icon = concern.icon;
              return (
                <div key={concern.concern} className="card-moroccan p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-[family-name:var(--font-heading)] text-xl text-[#2d1b14] font-semibold">{concern.concern}</h3>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          concern.risk === 'High' || concern.risk === 'High (Summer)'
                            ? 'bg-red-100 text-red-800'
                            : concern.risk === 'Moderate (Atlas Mountains)'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          Risk: {concern.risk}
                        </span>
                      </div>
                      <p className="text-[#4a3f35] mb-3 leading-relaxed">{concern.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[#2d1b14] mb-2">Prevention</h4>
                          <ul className="space-y-1.5 text-sm text-[#4a3f35]">
                            {concern.prevention.map((tip, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[#2d1b14] mb-2">Treatment</h4>
                          <p className="text-sm text-[#4a3f35] leading-relaxed">{concern.treatment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── DRINKING WATER SAFETY ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="w-5 h-5 text-[var(--color-accent)]" />
                <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#2d1b14]">
                  Drinking Water Safety in Morocco
                </h2>
              </div>
              <p className="text-[#4a3f35] leading-relaxed mb-6">
                Tap water in major cities is treated but differs in mineral composition from what most Western
                travelers are used to, often causing digestive discomfort. Stick to bottled water for safety.
              </p>
              <div className="grid md:grid-cols-3 gap-5">
                <div className="card-moroccan p-5 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#2d1b14] mb-2">Safe Options</h3>
                  <ul className="text-sm text-[#4a3f35] space-y-1.5 text-left">
                    <li>Sealed bottled water (Sidi Ali, Ain Saiss) from 5 MAD</li>
                    <li>Boiled water (rolling boil for 1 minute)</li>
                    <li>Water purified with filter or tablets</li>
                    <li>Hot tea and coffee (boiled water)</li>
                  </ul>
                </div>
                <div className="card-moroccan p-5 text-center">
                  <AlertTriangle className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#2d1b14] mb-2">Use Caution</h3>
                  <ul className="text-sm text-[#4a3f35] space-y-1.5 text-left">
                    <li>Tap water in major cities (brush teeth OK for most)</li>
                    <li>Ice in mid-range restaurants</li>
                    <li>Fresh juices from street vendors (may use tap water)</li>
                    <li>Salads washed in tap water</li>
                  </ul>
                </div>
                <div className="card-moroccan p-5 text-center">
                  <Ban className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#2d1b14] mb-2">Avoid</h3>
                  <ul className="text-sm text-[#4a3f35] space-y-1.5 text-left">
                    <li>Tap water in rural areas and small towns</li>
                    <li>Unsealed or refilled water bottles</li>
                    <li>Ice from unknown sources</li>
                    <li>Stream and river water (even in mountains)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-blue-900 text-sm">
                  <strong>Eco Tip:</strong> Bring a reusable bottle with built-in filter (LifeStraw or Grayl)
                  to reduce plastic waste. Many riads now offer filtered water refill stations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PHARMACIES IN MOROCCO ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Pill className="w-5 h-5 text-[var(--color-accent)]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#2d1b14]">
                Pharmacies in Morocco
              </h2>
            </div>
            <p className="text-[#4a3f35] leading-relaxed mb-6">
              Morocco has an excellent pharmacy network. Pharmacies (green crescent or cross sign) are on
              virtually every main street. Pharmacists complete a 6-year degree and often serve as the first
              point of consultation for common ailments. Many medications available over the counter at low cost.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-[#2d1b14] font-semibold mb-3">What You Should Know</h3>
                <ul className="space-y-2 text-sm text-[#4a3f35]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Many prescription medications are available over the counter</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Prices are significantly lower than in Europe or North America</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Most pharmacists speak French; many in tourist areas speak English</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Night pharmacies (pharmacie de garde) operate on rotation in every city</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Common antibiotics, painkillers, and digestive medications readily available</span></li>
                </ul>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-[#2d1b14] font-semibold mb-3">Common Pharmacy Prices</h3>
                <ul className="space-y-2 text-sm text-[#4a3f35]">
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" /><span><strong>Oral rehydration salts:</strong> from 10 MAD per packet</span></li>
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" /><span><strong>Paracetamol (box of 16):</strong> from 15 MAD</span></li>
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" /><span><strong>Imodium (6 capsules):</strong> from 30 MAD</span></li>
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" /><span><strong>Antihistamines (box):</strong> from 25 MAD</span></li>
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" /><span><strong>Broad-spectrum antibiotic:</strong> from 40 MAD</span></li>
                </ul>
                <p className="text-xs text-[#6b5e54] mt-3 italic">Prices are approximate and seasonal pricing can change.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BANNED / RESTRICTED MEDICATIONS ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <Ban className="w-5 h-5 text-red-600" />
                <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#2d1b14]">
                  Banned & Restricted Medications in Morocco
                </h2>
              </div>
              <p className="text-[#4a3f35] leading-relaxed mb-6">
                Morocco has strict regulations on certain medications. Carrying restricted substances without
                documentation can lead to serious legal consequences. Always carry prescriptions in original
                packaging with a doctor&apos;s letter, ideally translated into French.
              </p>
              <div className="space-y-4">
                {bannedMedications.map((med) => (
                  <div key={med.category} className="card-moroccan p-5 border-red-100">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-[family-name:var(--font-heading)] text-base text-[#2d1b14] font-semibold">{med.category}</h3>
                        <p className="text-sm text-[#6b5e54] mt-1"><strong>Examples:</strong> {med.examples}</p>
                        <p className="text-sm text-red-700 mt-1">{med.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
                  <p className="text-amber-900 text-sm">
                    <strong>Important:</strong> Carry prescriptions in original packaging with a signed doctor&apos;s letter
                    (English and French). Only bring the amount needed for your trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOSPITALS AND CLINICS ── */}
        <section className="container-morocco py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Building className="w-5 h-5 text-[var(--color-accent)]" />
              <span className="text-[var(--color-accent)] font-[family-name:var(--font-heading)] uppercase tracking-wider text-sm font-semibold">
                Medical Facilities
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2d1b14]">
              Hospitals & Clinics for Tourists
            </h2>
            <p className="text-[#6b5e54] mt-3 max-w-2xl mx-auto">
              Private clinics offer faster service and English-speaking staff at greater cost. For emergencies, dial <strong>150</strong> (SAMU ambulance).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {hospitals.map((city) => (
              <div key={city.city} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-[#2d1b14] font-semibold">{city.city}</h3>
                </div>
                <div className="space-y-3">
                  {city.facilities.map((facility) => (
                    <div key={facility.name} className="bg-[#FAF8F5] rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-[#2d1b14] text-sm">{facility.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          facility.type === 'Private' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {facility.type}
                        </span>
                      </div>
                      <p className="text-xs text-[#6b5e54]">{facility.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Public vs Private comparison */}
          <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5 border-green-200">
              <h3 className="font-[family-name:var(--font-heading)] text-lg text-[#2d1b14] font-semibold mb-3">Public Hospitals</h3>
              <ul className="space-y-2 text-sm text-[#4a3f35]">
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Very affordable (consultation from 100 MAD)</span></li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Can be overcrowded with long wait times</span></li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>French is the primary language of medical staff</span></li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>Adequate for emergencies but facilities vary</span></li>
              </ul>
            </div>
            <div className="card-moroccan p-5 border-blue-200">
              <h3 className="font-[family-name:var(--font-heading)] text-lg text-[#2d1b14] font-semibold mb-3">Private Clinics</h3>
              <ul className="space-y-2 text-sm text-[#4a3f35]">
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /><span>Higher cost (consultation from 300-500 MAD)</span></li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /><span>Shorter wait times, better facilities</span></li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /><span>Many doctors speak English and French</span></li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /><span>Recommended for tourists with insurance</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── FIRST AID KIT ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <PackageCheck className="w-5 h-5 text-[var(--color-accent)]" />
                <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#2d1b14]">
                  Travel First Aid Kit for Morocco
                </h2>
              </div>
              <p className="text-[#4a3f35] leading-relaxed mb-6">
                While pharmacies are widely available in cities, a first aid kit is essential for Atlas trekking,
                Sahara visits, or rural travel where the nearest pharmacy may be hours away.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {firstAidKit.map((item) => (
                  <div key={item.item} className="card-moroccan p-4 flex items-start gap-3">
                    <Cross className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium text-[#2d1b14] text-sm block">{item.item}</span>
                      <span className="text-xs text-[#6b5e54]">{item.purpose}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ml-1 ${
                        item.priority === 'Essential'
                          ? 'bg-red-100 text-red-700'
                          : item.priority === 'Recommended'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {item.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EMERGENCY CONTACTS ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-5 h-5 text-[var(--color-accent)]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#2d1b14]">
                Emergency Contacts in Morocco
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              <div className="card-moroccan p-5 text-center">
                <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#2d1b14] mb-1">SAMU (Ambulance)</h3>
                <p className="text-2xl font-bold text-red-600">150</p>
                <p className="text-xs text-[#6b5e54] mt-1">Emergency medical services</p>
              </div>
              <div className="card-moroccan p-5 text-center">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#2d1b14] mb-1">Police</h3>
                <p className="text-2xl font-bold text-blue-600">190</p>
                <p className="text-xs text-[#6b5e54] mt-1">Royal Gendarmerie: 177</p>
              </div>
              <div className="card-moroccan p-5 text-center">
                <Phone className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#2d1b14] mb-1">Fire Department</h3>
                <p className="text-2xl font-bold text-orange-600">150</p>
                <p className="text-xs text-[#6b5e54] mt-1">Also handles some medical emergencies</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-[var(--color-accent)] font-[family-name:var(--font-heading)] uppercase tracking-wider text-sm font-semibold">
                  Your Questions Answered
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2d1b14]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqJsonLd.mainEntity.map((faq, index) => (
                <div key={index} className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-[#2d1b14] font-semibold mb-3">
                    {faq.name}
                  </h3>
                  <p className="text-[#4a3f35] text-sm leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED GUIDES ── */}
        <section className="container-morocco py-16">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#2d1b14]">
              Related Travel Guides
            </h2>
            <p className="text-[#6b5e54] mt-2">Continue planning your safe and healthy Morocco adventure</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            <Link href="/morocco-safety-guide" className="card-moroccan p-5 group hover:border-[var(--color-accent)] transition-all">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] text-base text-[#2d1b14] font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Safety Guide
              </h3>
              <p className="text-sm text-[#6b5e54] mt-1">Scams, safety tips, and how to stay safe in Morocco</p>
              <span className="flex items-center gap-1 text-[var(--color-accent)] text-sm mt-3 font-medium">
                Read Guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/morocco-packing-list" className="card-moroccan p-5 group hover:border-[var(--color-accent)] transition-all">
              <PackageCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] text-base text-[#2d1b14] font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Packing List
              </h3>
              <p className="text-sm text-[#6b5e54] mt-1">What to pack including health essentials and clothing</p>
              <span className="flex items-center gap-1 text-[var(--color-accent)] text-sm mt-3 font-medium">
                Read Guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/morocco-water-guide" className="card-moroccan p-5 group hover:border-[var(--color-accent)] transition-all">
              <Droplets className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] text-base text-[#2d1b14] font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Water Guide
              </h3>
              <p className="text-sm text-[#6b5e54] mt-1">Complete guide to drinking water safety across Morocco</p>
              <span className="flex items-center gap-1 text-[var(--color-accent)] text-sm mt-3 font-medium">
                Read Guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/morocco-health-guide" className="card-moroccan p-5 group hover:border-[var(--color-accent)] transition-all">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] text-base text-[#2d1b14] font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Health Guide
              </h3>
              <p className="text-sm text-[#6b5e54] mt-1">General health advice, insurance, and medical care tips</p>
              <span className="flex items-center gap-1 text-[var(--color-accent)] text-sm mt-3 font-medium">
                Read Guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gradient-to-br from-[#2d1b14] via-[#3d2518] to-[#1a1a2e] py-20">
          <div className="container-morocco text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">
              Ready for a Healthy Morocco Adventure?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
              With the right vaccinations and basic health precautions, Morocco is a safe and rewarding destination.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/morocco-travel-guide"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-xl font-[family-name:var(--font-heading)] font-semibold hover:bg-[#8B4513] transition-colors"
              >
                Explore Morocco Guide <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/morocco-first-time"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-[family-name:var(--font-heading)] font-semibold hover:bg-white/10 transition-colors"
              >
                First-Time Visitor Tips <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

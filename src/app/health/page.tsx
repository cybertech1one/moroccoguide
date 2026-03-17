import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Shield,
  Syringe,
  Thermometer,
  Droplets,
  Sun,
  Bug,
  Mountain,
  Pill,
  Phone,
  Building2,
  Stethoscope,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  ArrowRight,
  Lightbulb,
  Cross,
  ShieldCheck,
  Activity,
  Brain,
  Apple,
  Clock,
  MapPin,
  CircleAlert,
  BadgeCheck,
  Smile,
  Utensils,
  GlassWater,
  PackageCheck,
  FileText,
  Plane,
  Eye,
  Clipboard,
  Heart,
  Ambulance,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Travel Health & Medical Guide Morocco 2025-2026 | Vaccinations, Pharmacies & Hospitals | CityGuide',
  description:
    'Complete travel health guide for Morocco. CDC-recommended vaccinations, travel insurance, water safety, pharmacies, hospitals, emergency numbers, first aid tips, and medical tourism information for 2025-2026.',
  keywords: [
    'Morocco travel health',
    'Morocco vaccinations',
    'Morocco hospitals',
    'Morocco pharmacy',
    'Morocco travel insurance',
    'Morocco water safety',
    'Morocco food safety',
    'Morocco emergency numbers',
    'Morocco medical tourism',
    'Morocco healthcare',
    'Morocco altitude sickness',
    'Morocco first aid',
    'Morocco traveler diarrhea',
    'Morocco COVID requirements',
    'Morocco prescription medication',
    'pharmacie de garde Morocco',
  ],
  openGraph: {
    title: 'Travel Health & Medical Guide Morocco 2025-2026 | CityGuide',
    description:
      'Everything you need to know about staying healthy in Morocco. Vaccinations, pharmacies, hospitals, emergency contacts, and practical medical advice for travelers.',
    url: 'https://citytoursmorocco.com/health',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Moroccan pharmacy with green cross sign',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/health' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Travel Health & Medical Guide Morocco 2025-2026',
  description:
    'Complete travel health guide for Morocco including vaccinations, pharmacies, hospitals, emergency numbers, water safety, and medical advice for travelers.',
  url: 'https://citytoursmorocco.com/health',
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: 'https://citytoursmorocco.com' },
  about: {
    '@type': 'MedicalCondition',
    name: 'Travel Health',
    associatedAnatomy: { '@type': 'AnatomicalStructure', name: 'General Health' },
  },
};

/* ===================================================================
   VACCINATION DATA
   =================================================================== */

interface VaccineInfo {
  name: string;
  category: 'recommended' | 'routine' | 'situational';
  description: string;
  timing: string;
  notes: string;
}

const vaccines: VaccineInfo[] = [
  {
    name: 'Hepatitis A',
    category: 'recommended',
    description:
      'Protects against hepatitis A virus, which can be contracted through contaminated food and water. This is the single most important travel vaccine for Morocco.',
    timing: 'At least 2 weeks before travel. Two-dose series for long-term protection.',
    notes: 'Highly recommended for all travelers regardless of itinerary. The virus is present in Morocco, especially in areas with less developed sanitation.',
  },
  {
    name: 'Typhoid',
    category: 'recommended',
    description:
      'Protects against Salmonella typhi, spread through contaminated food and water. Particularly important if you plan to eat street food or visit rural areas.',
    timing: 'At least 2 weeks before travel for injectable, 1 week for oral form.',
    notes: 'Recommended for most travelers, especially those venturing beyond major tourist routes or with adventurous eating habits.',
  },
  {
    name: 'Hepatitis B',
    category: 'recommended',
    description:
      'Protects against hepatitis B virus, transmitted through blood and bodily fluids. Important for longer stays or if you might need medical treatment.',
    timing: 'Three-dose series over 6 months. Accelerated schedule available.',
    notes: 'Recommended for travelers who may have intimate contact with locals, require medical procedures, or stay longer than 6 months.',
  },
  {
    name: 'Tetanus / Diphtheria / Pertussis (Tdap)',
    category: 'routine',
    description:
      'Routine booster that should be up to date regardless of travel. Tetanus risk increases with outdoor activities and any skin wounds.',
    timing: 'Booster every 10 years. Get updated before travel if due.',
    notes: 'Essential if you plan on trekking, outdoor activities, or visiting rural areas where medical care may be delayed.',
  },
  {
    name: 'MMR (Measles, Mumps, Rubella)',
    category: 'routine',
    description:
      'Routine childhood vaccine. Ensure you have received two doses. Measles outbreaks can occur in Morocco.',
    timing: 'Two doses if born after 1957 and not previously vaccinated.',
    notes: 'Check your vaccination records. If unsure, a blood test can confirm immunity, or you can simply get a booster dose.',
  },
  {
    name: 'Influenza',
    category: 'routine',
    description:
      'Seasonal flu vaccine. Morocco experiences influenza season during winter months (November-March). Crowded souks and public transport increase exposure risk.',
    timing: 'Annual vaccine, ideally 2 weeks before travel.',
    notes: 'Especially recommended for older travelers, those with chronic conditions, and winter visitors.',
  },
  {
    name: 'Rabies',
    category: 'situational',
    description:
      'Pre-exposure prophylaxis for rabies. Morocco has stray dogs and cats in many cities, and rabies is present in animal populations.',
    timing: 'Three-dose series over 21-28 days before travel.',
    notes: 'Consider if you will be spending time in rural areas, trekking, cycling, or if you are a long-term traveler. Children are at higher risk due to their tendency to approach animals.',
  },
  {
    name: 'COVID-19',
    category: 'routine',
    description:
      'Stay up to date with COVID-19 vaccinations and boosters as recommended by your home country health authority.',
    timing: 'Follow your national health authority guidance for boosters.',
    notes: 'Morocco no longer requires proof of COVID-19 vaccination for entry (as of 2023). However, staying current on vaccinations is still advisable.',
  },
];

/* ===================================================================
   EMERGENCY NUMBERS
   =================================================================== */

const emergencyNumbers = [
  { service: 'SAMU (Medical Emergency)', number: '15', icon: <Ambulance className="w-5 h-5" />, note: 'Emergency medical services and ambulance dispatch' },
  { service: 'Police', number: '19', icon: <Shield className="w-5 h-5" />, note: 'Urban police for any emergency' },
  { service: 'Fire Brigade', number: '15', icon: <AlertTriangle className="w-5 h-5" />, note: 'Fire and rescue services (shared with SAMU)' },
  { service: 'Gendarmerie', number: '177', icon: <Shield className="w-5 h-5" />, note: 'Rural police and highway emergencies' },
  { service: 'General Emergency', number: '112', icon: <Phone className="w-5 h-5" />, note: 'European-style emergency number, works from any mobile' },
  { service: 'Poison Control', number: '0801-000-180', icon: <CircleAlert className="w-5 h-5" />, note: 'Centre Anti-Poison et de Pharmacovigilance' },
];

/* ===================================================================
   HOSPITAL DATA
   =================================================================== */

interface HospitalInfo {
  name: string;
  city: string;
  type: 'private' | 'public';
  specialties: string;
  languages: string;
  phone: string;
  notes: string;
}

const hospitals: HospitalInfo[] = [
  {
    name: 'Clinique Internationale de Marrakech',
    city: 'Marrakech',
    type: 'private',
    specialties: 'General medicine, surgery, emergency, cardiology, orthopedics',
    languages: 'French, English, Arabic',
    phone: '+212 524-435757',
    notes: 'Top choice for tourists in Marrakech. Modern facility with 24/7 emergency department. English-speaking doctors available.',
  },
  {
    name: 'Clinique du Parc',
    city: 'Casablanca',
    type: 'private',
    specialties: 'Cardiology, oncology, neurology, general surgery, pediatrics',
    languages: 'French, English, Arabic',
    phone: '+212 522-994000',
    notes: 'One of the best private hospitals in Morocco. International standards of care, modern equipment, and multilingual staff.',
  },
  {
    name: 'Hopital Cheikh Zayd',
    city: 'Rabat',
    type: 'private',
    specialties: 'General medicine, surgery, ophthalmology, cardiology',
    languages: 'French, Arabic, some English',
    phone: '+212 537-684040',
    notes: 'Well-equipped private hospital in the capital. Good for non-emergency consultations and specialist appointments.',
  },
  {
    name: 'Clinique Atlas',
    city: 'Fes',
    type: 'private',
    specialties: 'General medicine, surgery, maternity, emergency',
    languages: 'French, Arabic',
    phone: '+212 535-622222',
    notes: 'Leading private facility in Fes. 24-hour emergency service. Limited English but excellent care.',
  },
  {
    name: 'Clinique Agdal',
    city: 'Rabat',
    type: 'private',
    specialties: 'Orthopedics, surgery, cardiology, neurology',
    languages: 'French, English, Arabic',
    phone: '+212 537-776565',
    notes: 'Modern private clinic with international accreditation standards. Popular with diplomats and expatriates.',
  },
  {
    name: 'CHU Mohammed VI',
    city: 'Marrakech',
    type: 'public',
    specialties: 'Full-service university hospital, trauma center',
    languages: 'French, Arabic',
    phone: '+212 524-434949',
    notes: 'Main public hospital in Marrakech. Large trauma center. Can be crowded but handles serious emergencies well. Limited English.',
  },
  {
    name: 'CHU Ibn Rochd',
    city: 'Casablanca',
    type: 'public',
    specialties: 'Full-service university hospital, all specialties',
    languages: 'French, Arabic',
    phone: '+212 522-222222',
    notes: 'Largest public hospital in Morocco. University teaching hospital with all specialties. Go here for complex trauma cases if private options are unavailable.',
  },
  {
    name: 'Clinique Les Oliviers',
    city: 'Agadir',
    type: 'private',
    specialties: 'General medicine, surgery, orthopedics, emergency',
    languages: 'French, English, Arabic',
    phone: '+212 528-840404',
    notes: 'Best private option in Agadir. Good for tourist-related injuries and illnesses. English-speaking doctors available.',
  },
];

/* ===================================================================
   COMMON HEALTH ISSUES DATA
   =================================================================== */

interface HealthIssue {
  title: string;
  icon: React.ReactNode;
  risk: 'high' | 'medium' | 'low';
  symptoms: string;
  prevention: string[];
  treatment: string;
}

const commonHealthIssues: HealthIssue[] = [
  {
    title: "Traveler's Diarrhea",
    icon: <Droplets className="w-5 h-5" />,
    risk: 'high',
    symptoms: 'Watery stools, abdominal cramps, nausea, urgency, sometimes mild fever. Usually lasts 3-5 days without treatment.',
    prevention: [
      'Drink only bottled or purified water -- verify the seal is intact',
      'Avoid ice cubes in drinks at smaller establishments',
      'Eat at busy restaurants with high food turnover',
      'Peel fruits and vegetables yourself, or eat only cooked produce',
      'Wash hands frequently or use hand sanitizer before eating',
      'Avoid buffets where food has been sitting at room temperature',
    ],
    treatment:
      'Oral rehydration salts (available at any pharmacy) are the most important treatment. Loperamide (Imodium) helps with symptoms. If symptoms are severe, bloody, or last more than 48 hours, see a doctor. Pharmacists in Morocco can provide appropriate medication without a prescription.',
  },
  {
    title: 'Sun Exposure & Heat Stroke',
    icon: <Sun className="w-5 h-5" />,
    risk: 'high',
    symptoms: 'Sunburn, headache, dizziness, nausea, rapid heartbeat, confusion, and in severe cases loss of consciousness. Morocco gets extremely hot in summer (40-50 C in interior cities).',
    prevention: [
      'Wear SPF 50+ broad-spectrum sunscreen and reapply every 2 hours',
      'Wear a wide-brimmed hat and UV-protective sunglasses',
      'Avoid outdoor activities between 12:00-16:00 in summer',
      'Drink at least 3 liters of water per day in hot weather',
      'Take breaks in air-conditioned or shaded spaces',
      'Wear loose, light-colored, breathable clothing',
    ],
    treatment:
      'Move to shade or air conditioning immediately. Apply cool, wet cloths to the body. Drink water with electrolytes slowly. For heat stroke (confusion, hot dry skin, loss of consciousness), call SAMU at 15 immediately -- this is a medical emergency.',
  },
  {
    title: 'Altitude Sickness',
    icon: <Mountain className="w-5 h-5" />,
    risk: 'medium',
    symptoms: 'Headache, nausea, dizziness, fatigue, shortness of breath, difficulty sleeping. Usually appears above 2,500m and affects 20-25% of trekkers on Mount Toubkal.',
    prevention: [
      'Ascend gradually -- do not gain more than 500m of sleeping altitude per day above 2,500m',
      'Stay well hydrated (3-4 liters per day at altitude)',
      'Avoid alcohol during the first 48 hours at altitude',
      'Consider acetazolamide (Diamox) prophylaxis -- consult your doctor before travel',
      'Spend a night in Imlil (1,740m) before attempting Toubkal summit',
      'Listen to your body and descend if symptoms worsen',
    ],
    treatment:
      'The most effective treatment is descent. If mild symptoms occur, rest at current altitude and hydrate. Acetazolamide can help with mild symptoms. Severe altitude sickness (HACE or HAPE) requires immediate descent and emergency medical attention. Mountain refuges have basic medical supplies.',
  },
  {
    title: 'Insect Bites & Stings',
    icon: <Bug className="w-5 h-5" />,
    risk: 'medium',
    symptoms: 'Mosquito bites (itching, swelling), scorpion stings (intense pain, swelling, numbness), sandfly bites (itchy red bumps). Morocco is not a malaria zone, but mosquitoes can transmit other illnesses.',
    prevention: [
      'Use DEET-based insect repellent (30-50% concentration) on exposed skin',
      'Wear long sleeves and trousers at dawn and dusk in rural areas',
      'Use mosquito nets if accommodation does not have window screens',
      'Shake out shoes and clothing before putting them on (scorpions)',
      'Check bedding in desert camps and basic accommodations',
      'Avoid walking barefoot outdoors, especially at night',
    ],
    treatment:
      'For mosquito bites, antihistamine cream reduces itching. For scorpion stings, clean the area and apply a cold compress. Most Moroccan scorpions are not deadly, but seek medical attention immediately for severe pain, difficulty breathing, or if the victim is a child. Antivenom is available at hospitals in affected regions.',
  },
];

/* ===================================================================
   FIRST AID KIT RECOMMENDATIONS
   =================================================================== */

const firstAidItems = [
  { category: 'Medications', items: ['Imodium (loperamide)', 'Oral rehydration salts (6-8 packets)', 'Paracetamol / Ibuprofen', 'Antihistamine tablets', 'Motion sickness tablets', 'Antacid tablets', 'Throat lozenges'] },
  { category: 'Wound Care', items: ['Adhesive bandages (assorted sizes)', 'Sterile gauze pads', 'Medical tape', 'Antiseptic wipes', 'Antibiotic ointment', 'Tweezers', 'Small scissors'] },
  { category: 'Sun & Insect Protection', items: ['SPF 50+ sunscreen (reef-safe)', 'After-sun aloe vera gel', 'DEET insect repellent (30-50%)', 'Hydrocortisone cream (1%)', 'Lip balm with SPF'] },
  { category: 'Hygiene & Comfort', items: ['Hand sanitizer', 'Wet wipes', 'Blister plasters (Compeed)', 'Eye drops (artificial tears)', 'Electrolyte powder packets', 'Thermometer'] },
];

/* ===================================================================
   TRAVEL INSURANCE COMPARISON DATA
   =================================================================== */

interface InsuranceTier {
  tier: string;
  coverage: string;
  medicalLimit: string;
  evacuationLimit: string;
  priceRange: string;
  bestFor: string;
  features: string[];
}

const insuranceTiers: InsuranceTier[] = [
  {
    tier: 'Basic',
    coverage: 'Emergency medical only',
    medicalLimit: '$50,000 - $100,000',
    evacuationLimit: '$100,000',
    priceRange: '$30-60 / 2 weeks',
    bestFor: 'Short city breaks, low-risk itineraries',
    features: ['Emergency hospital coverage', 'Emergency dental', 'Trip cancellation (limited)', '24/7 assistance hotline'],
  },
  {
    tier: 'Comprehensive',
    coverage: 'Medical + Trip protection',
    medicalLimit: '$250,000 - $500,000',
    evacuationLimit: '$500,000',
    priceRange: '$60-120 / 2 weeks',
    bestFor: 'Most Morocco travelers',
    features: ['Full medical coverage', 'Medical evacuation', 'Trip cancellation/interruption', 'Lost luggage', 'Adventure sports (basic)', '24/7 assistance hotline'],
  },
  {
    tier: 'Premium / Adventure',
    coverage: 'Full coverage + High-altitude trekking',
    medicalLimit: '$1,000,000+',
    evacuationLimit: '$1,000,000+',
    priceRange: '$120-250 / 2 weeks',
    bestFor: 'Toubkal treks, desert expeditions, adventure sports',
    features: ['Unlimited medical', 'Helicopter evacuation', 'High-altitude trekking (4,000m+)', 'Search and rescue', 'Adventure sports (full)', 'Trip cancellation/interruption', 'Personal liability'],
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function HealthPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-marrakech.webp"
            alt="Moroccan pharmacy with green cross sign and traditional architecture"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Health</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Travel Health &amp; Medical
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Health &amp; Medical Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A comprehensive guide to staying healthy in Morocco. From vaccinations and pharmacies to hospitals and emergency contacts &mdash; everything you need for a safe and healthy trip, updated for 2025-2026.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          OVERVIEW / KEY POINTS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Morocco Health Overview
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco does not pose exceptional health risks for travelers. The country has a well-developed healthcare system, particularly in private facilities in major cities like Casablanca, Rabat, and Marrakech. Pharmacies are abundant, well-stocked, and staffed by qualified pharmacists who often serve as the first point of medical contact for minor ailments.
            </p>
            <p>
              The most common health issues for visitors are traveler&apos;s diarrhea, sunburn, and dehydration &mdash; all preventable with basic precautions. No vaccinations are legally required for entry into Morocco, but several are strongly recommended by the CDC and WHO. With proper preparation, a well-stocked first aid kit, and comprehensive travel insurance, you can explore Morocco with confidence.
            </p>
            <p>
              Morocco&apos;s healthcare infrastructure has improved significantly over the past decade, with new private hospitals, expanded ambulance networks, and improved rural clinics. The country is also emerging as a destination for medical tourism, particularly for dental care and cosmetic procedures.
            </p>
          </div>

          {/* Health at a Glance */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="card-moroccan p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-green)]">None</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Compulsory Vaccines</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-accent)]">Medium</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Stomach Illness Risk</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-green)]">Good</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Private Healthcare</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-green)]">Low</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Malaria Risk</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRE-TRAVEL HEALTH PREPARATION
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Clipboard className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Pre-Travel Health Preparation
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
            Ideally, begin your health preparations 6-8 weeks before departure. This gives time for vaccine courses to take effect and allows you to address any pre-existing conditions with your doctor.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color-green)]" />
                  6-8 Weeks Before Travel
                </h3>
                <ul className="space-y-3 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span>Visit a travel health clinic or your GP for a pre-travel consultation. Discuss your itinerary in detail, including any trekking, desert, or rural plans.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span>Begin any multi-dose vaccine courses (Hepatitis B requires 3 doses over 6 months, though accelerated schedules exist).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span>If you take prescription medications, obtain a 3-month supply with a letter from your doctor detailing each medication, dosage, and medical necessity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span>Consider rabies pre-exposure prophylaxis if trekking, cycling, or visiting rural areas.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color-green)]" />
                  2-4 Weeks Before Travel
                </h3>
                <ul className="space-y-3 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span>Get Hepatitis A and Typhoid vaccines (these need at least 2 weeks to become effective).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span>Purchase comprehensive travel insurance with medical evacuation coverage. Verify it covers Morocco specifically and any adventure activities you have planned.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span>Assemble your first aid kit (see detailed recommendations below). Buy oral rehydration salts and Imodium.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span>Visit your dentist for a check-up. Dental emergencies abroad can be stressful and expensive.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span>Prepare a card with your blood type, allergies, and emergency contact information in both English and French.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          VACCINATIONS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Syringe className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Recommended Vaccinations
            </h2>
          </div>

          <div className="card-moroccan p-5 mb-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div className="text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">No compulsory vaccinations required.</strong> Morocco does not require proof of any vaccination for entry (unless arriving from a yellow fever endemic country, in which case proof of yellow fever vaccination is required). The vaccines below are recommended by the CDC and WHO for traveler protection.
              </div>
            </div>
          </div>

          {/* Recommended Vaccines */}
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[var(--color-primary)]" />
            CDC-Recommended Vaccines
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {vaccines.filter(v => v.category === 'recommended').map((vaccine) => (
              <div key={vaccine.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Syringe className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)]">{vaccine.name}</h4>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{vaccine.description}</p>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                    <p className="text-sm">
                      <strong className="text-blue-700 dark:text-blue-400">Timing:</strong>{' '}
                      <span className="text-[var(--text-secondary)]">{vaccine.timing}</span>
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10">
                    <p className="text-sm">
                      <strong className="text-amber-700 dark:text-amber-400">Note:</strong>{' '}
                      <span className="text-[var(--text-secondary)]">{vaccine.notes}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Routine Vaccines */}
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-[var(--color-primary)]" />
            Routine Vaccine Updates
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {vaccines.filter(v => v.category === 'routine').map((vaccine) => (
              <div key={vaccine.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex p-2 rounded-lg bg-green-100 dark:bg-green-900/10 text-green-700 dark:text-green-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)]">{vaccine.name}</h4>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{vaccine.description}</p>
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                  <p className="text-sm">
                    <strong className="text-blue-700 dark:text-blue-400">Timing:</strong>{' '}
                    <span className="text-[var(--text-secondary)]">{vaccine.timing}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Situational Vaccines */}
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <CircleAlert className="w-5 h-5 text-[var(--color-accent)]" />
            Situational Vaccines
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {vaccines.filter(v => v.category === 'situational').map((vaccine) => (
              <div key={vaccine.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex p-2 rounded-lg bg-amber-100 dark:bg-amber-900/10 text-amber-700 dark:text-amber-400">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)]">{vaccine.name}</h4>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{vaccine.description}</p>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                    <p className="text-sm">
                      <strong className="text-blue-700 dark:text-blue-400">Timing:</strong>{' '}
                      <span className="text-[var(--text-secondary)]">{vaccine.timing}</span>
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10">
                    <p className="text-sm">
                      <strong className="text-amber-700 dark:text-amber-400">Note:</strong>{' '}
                      <span className="text-[var(--text-secondary)]">{vaccine.notes}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visual Break ── */}
      <div className="container-morocco py-12">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/card-mosque.webp"
            alt="Ornate Moroccan mosque exterior with intricate geometric tilework and carved stucco detailing"
            loading="lazy"
            className="w-full h-64 md:h-80 object-cover"
          />
          <p className="text-sm text-[var(--text-muted)] mt-3 text-center">
            Morocco's healthcare system blends modern facilities in cities with traditional practices in rural areas
          </p>
        </div>
      </div>

      {/* ============================================================
          TRAVEL INSURANCE
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Travel Insurance Guide
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
            Travel insurance with medical coverage is essential for Morocco. Private hospitals require upfront payment, and medical evacuation to Europe can cost $50,000 or more. Here is how to choose the right level of coverage for your trip.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {insuranceTiers.map((tier) => (
              <div key={tier.tier} className={`card-moroccan p-6 ${tier.tier === 'Comprehensive' ? 'ring-2 ring-[var(--color-primary)]' : ''}`}>
                {tier.tier === 'Comprehensive' && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold mb-4">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Recommended
                  </div>
                )}
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{tier.tier}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{tier.coverage}</p>
                <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">{tier.priceRange}</div>
                <p className="text-xs text-[var(--text-secondary)] mb-4">{tier.bestFor}</p>

                <div className="space-y-2 mb-4">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                    <p className="text-xs">
                      <strong className="text-blue-700 dark:text-blue-400">Medical:</strong>{' '}
                      <span className="text-[var(--text-secondary)]">{tier.medicalLimit}</span>
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10">
                    <p className="text-xs">
                      <strong className="text-amber-700 dark:text-amber-400">Evacuation:</strong>{' '}
                      <span className="text-[var(--text-secondary)]">{tier.evacuationLimit}</span>
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div className="text-[var(--text-secondary)] text-sm leading-relaxed">
                <strong className="text-[var(--text-primary)]">Key insurance tips for Morocco:</strong> Confirm that your policy covers Morocco as a destination. Verify coverage for specific activities like trekking above 3,000m, quad biking, or desert camping. Keep your policy number and emergency assistance phone number accessible offline. Most Moroccan private hospitals require payment upfront &mdash; keep your credit card ready and claim reimbursement from your insurer afterwards. Ensure your policy includes repatriation coverage.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMMON HEALTH ISSUES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Activity className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Common Health Issues
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
            These are the health concerns most frequently reported by travelers to Morocco. Nearly all are preventable with basic precautions.
          </p>

          <div className="space-y-8">
            {commonHealthIssues.map((issue) => (
              <div key={issue.title} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {issue.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{issue.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">Risk Level:</span>
                      <span className={`text-xs font-bold uppercase tracking-wide ${
                        issue.risk === 'high' ? 'text-red-600 dark:text-red-400' :
                        issue.risk === 'medium' ? 'text-amber-600 dark:text-amber-400' :
                        'text-green-600 dark:text-green-400'
                      }`}>{issue.risk}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-2">Symptoms</h4>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{issue.symptoms}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-3">Prevention</h4>
                  <ul className="space-y-2">
                    {issue.prevention.map((tip) => (
                      <li key={tip} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm">
                        <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                  <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">Treatment</h4>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{issue.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WATER SAFETY
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <GlassWater className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Water Safety
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--color-green)]" />
                Safe Practices
              </h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Always drink bottled water.</strong> Sidi Ali and Sidi Harazem are the most common brands. Verify the cap seal cracks when opened &mdash; some vendors refill bottles with tap water.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Brush your teeth with bottled water</strong> as a precaution, especially during your first few days while your body adjusts. This is particularly important in smaller towns.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Hot drinks are generally safe.</strong> Moroccan mint tea and coffee are safe because the water is boiled. This is one of the safest beverages you can order anywhere.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Upscale restaurants and riads</strong> generally use filtered water for cooking and ice. You can typically trust ice and salads at established, well-reviewed restaurants.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Avoid
              </h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Tap water for drinking.</strong> While tap water in major cities like Casablanca and Rabat is technically treated, the pipes and storage tanks can introduce contaminants. Do not risk it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Ice cubes at street stalls</strong> and small, basic restaurants. You cannot be sure if the ice was made from purified water. Larger restaurants and hotels generally use safe ice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Fresh fruit juices from street vendors</strong> may be diluted with tap water. Ask specifically if the juice is made with bottled water (eau minerale). Orange juice squeezed in front of you is generally fine.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Fountain water in medinas.</strong> While historically these were drinking fountains, modern water quality is unreliable. Admire them but do not drink from them.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-6 border-l-4 border-[var(--color-primary)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
              <div className="text-[var(--text-secondary)] text-sm">
                <strong className="text-[var(--text-primary)]">Sustainability tip:</strong> Rather than buying dozens of plastic bottles, bring a reusable water bottle with a built-in filter (LifeStraw, Grayl, or similar). These can purify tap water and save you money while reducing plastic waste. Morocco has a significant plastic waste challenge, and every bottle counts.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOD SAFETY
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Utensils className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Food Safety Guidelines
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Moroccan food is one of the highlights of any trip, and most travelers eat widely without any issues. Street food in Morocco is generally safer than in many other developing countries because much of it is cooked fresh at high temperatures in front of you. Follow these guidelines to minimize your risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color-green)]" />
                  Generally Safe
                </h3>
                <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span>Freshly cooked tagines and couscous (high heat kills bacteria)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span>Grilled meats at busy street stalls (high turnover means fresh food)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span>Fresh bread from bakeries (baked at extreme heat)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span>Fruits you can peel yourself (oranges, bananas, mandarins)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span>Freshly squeezed orange juice (Jemaa el-Fnaa stalls are iconic)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span>Moroccan mint tea (always boiled)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
                  Exercise Caution
                </h3>
                <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span>Raw salads at budget restaurants (may be washed with tap water)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span>Buffet food at hotels (check that hot food is truly hot)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span>Seafood in inland cities far from the coast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span>Dairy products from roadside vendors (unpasteurized)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span>Shellfish during warm months (May-September)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Best Avoided
                </h3>
                <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span>Snail soup from street vendors with questionable hygiene</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span>Pre-cut fruit displayed on the street in the heat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span>Food sitting at room temperature for extended periods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span>Raw or undercooked meat or eggs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span>Tap water used in any beverage preparation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PHARMACY CULTURE
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-white/10">
              <Pill className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white">
              Pharmacy Culture in Morocco
            </h2>
          </div>
          <p className="text-white/70 mb-8 max-w-3xl">
            Moroccan pharmacies are a traveler&apos;s best friend. They are far more than just places to pick up prescriptions &mdash; they serve as frontline healthcare providers where qualified pharmacists diagnose minor ailments, recommend treatments, and dispense medications, often without requiring a formal prescription.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Cross className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-white">The Green Cross</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Look for the illuminated green cross sign. Pharmacies are found on virtually every block in Moroccan cities and towns. They are identified by a glowing green neon cross, similar to pharmacies across Europe. Most are open from 8:30 AM to 12:30 PM and 2:30 PM to 8:00 PM.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-white">Pharmacie de Garde (Night Pharmacy)</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                A rotating night duty system ensures at least one pharmacy in every neighborhood is open 24/7. These are called &quot;pharmacie de garde&quot; and their schedule is posted on the door of every pharmacy. Your hotel can always tell you which pharmacy is on night duty. In an emergency, call the local police (19) for the nearest one.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-white">Pharmacist as Doctor</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Moroccan pharmacists are highly trained (5-6 years of pharmacy school) and often serve as the first point of medical contact. For minor ailments like stomach problems, cold symptoms, skin irritations, or insect bites, simply describe your symptoms and the pharmacist will recommend appropriate medication. This is far quicker and cheaper than a doctor visit.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Common Over-the-Counter Medications in Morocco</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <h4 className="text-white/90 font-semibold text-sm mb-2">Pain & Fever</h4>
                <ul className="space-y-1 text-white/60 text-sm">
                  <li>Doliprane (paracetamol)</li>
                  <li>Aspro (aspirin)</li>
                  <li>Nurofen (ibuprofen)</li>
                  <li>Spasfon (antispasmodic)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white/90 font-semibold text-sm mb-2">Digestive</h4>
                <ul className="space-y-1 text-white/60 text-sm">
                  <li>Smecta (anti-diarrhea)</li>
                  <li>Imodium (loperamide)</li>
                  <li>Maalox (antacid)</li>
                  <li>ORS packets (Adiaril)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white/90 font-semibold text-sm mb-2">Allergy & Cold</h4>
                <ul className="space-y-1 text-white/60 text-sm">
                  <li>Aerius (desloratadine)</li>
                  <li>Zyrtec (cetirizine)</li>
                  <li>Actifed (decongestant)</li>
                  <li>Humex (cough syrup)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white/90 font-semibold text-sm mb-2">Skin & Wounds</h4>
                <ul className="space-y-1 text-white/60 text-sm">
                  <li>Betadine (antiseptic)</li>
                  <li>Biafine (burn cream)</li>
                  <li>Cortisone cream</li>
                  <li>Apaisyl (insect bite relief)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HEALTHCARE SYSTEM & HOSPITALS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Healthcare System &amp; Hospitals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[var(--color-primary)]" />
                Private Hospitals (Cliniques Privees)
              </h3>
              <ul className="space-y-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                  <span>The recommended choice for tourists. Modern equipment, shorter wait times, cleaner facilities, and staff who often speak French and English.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                  <span>Payment is required upfront, usually by credit card. Costs are significantly lower than European/American hospitals (a consultation typically costs 200-500 MAD / $20-50 USD).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                  <span>Available in all major cities and most medium-sized towns. Your hotel or riad can recommend the nearest one and help arrange transport.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                  <span>Keep all receipts, diagnostic reports, and prescriptions for insurance reimbursement claims.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                Public Hospitals (CHU / Hopitaux Publics)
              </h3>
              <ul className="space-y-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>Free or very low cost, but often overcrowded with long wait times. Facilities may be basic by Western standards, particularly in smaller cities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>University hospitals (CHU) in Casablanca, Rabat, Marrakech, and Fes have the most comprehensive facilities and specialist departments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>French is the primary language of medical practice. English-speaking staff are rare in public facilities. Bring a translation app or French-speaking friend if possible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>For serious trauma or emergencies where a private hospital is not accessible, public hospitals provide competent emergency care. Stabilization and transfer to private care is common practice.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Hospital Directory */}
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Recommended Hospitals by City</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {hospitals.map((hospital) => (
              <div key={hospital.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)]">{hospital.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                      <span className="text-sm text-[var(--text-secondary)]">{hospital.city}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    hospital.type === 'private'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                  }`}>
                    {hospital.type === 'private' ? 'Private' : 'Public'}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Specialties:</strong> {hospital.specialties}</p>
                  <p className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Languages:</strong> {hospital.languages}</p>
                  <p className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Phone:</strong> {hospital.phone}</p>
                  <p className="text-[var(--text-secondary)] text-xs italic">{hospital.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          EMERGENCY NUMBERS
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-white/10">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white">
              Emergency Numbers
            </h2>
          </div>
          <p className="text-white/70 mb-8 max-w-2xl">
            Save these numbers in your phone before arriving in Morocco. All emergency numbers are free to call from any phone, including mobiles without a Moroccan SIM card.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergencyNumbers.map((item) => (
              <div key={item.service} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-white/80">{item.icon}</div>
                  <p className="text-white/80 text-sm font-medium">{item.service}</p>
                </div>
                <p className="text-3xl font-bold text-white mb-1">{item.number}</p>
                <p className="text-sm text-white/60">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          DENTAL CARE
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Smile className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Dental Care for Tourists
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Emergency Dental Care</h3>
                <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
                  <p>
                    If you experience a dental emergency in Morocco, private dental clinics (cabinets dentaires) are available in all cities and most towns. Treatment quality at private practices in Casablanca, Rabat, and Marrakech is generally excellent, with many dentists trained in France.
                  </p>
                  <p>
                    A dental consultation typically costs 200-400 MAD ($20-40 USD). An extraction costs 300-600 MAD ($30-60 USD). A filling ranges from 400-800 MAD ($40-80 USD). These prices are a fraction of European or American costs.
                  </p>
                  <p>
                    Ask your hotel or riad for a recommendation, or search for &quot;dentiste&quot; on Google Maps. Many dentists speak French and some speak English. Bring your travel insurance details as some policies cover emergency dental work.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Dental Tourism</h3>
                <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
                  <p>
                    Morocco is increasingly popular for dental tourism, with savings of 50-70% compared to European prices. Major procedures like implants, veneers, and crowns are commonly sought by European visitors.
                  </p>
                  <p>
                    Casablanca and Rabat have specialized dental tourism clinics with state-of-the-art equipment and multilingual staff. Some offer package deals including accommodation and airport transfers.
                  </p>
                  <p>
                    If considering dental tourism, research clinics thoroughly, check reviews from international patients, verify the dentist&apos;s qualifications (many are French-trained or hold international certifications), and plan for multiple visits if the procedure requires them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MEDICAL TOURISM
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Plane className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Medical Tourism in Morocco
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has emerged as a growing medical tourism destination, particularly for patients from Sub-Saharan Africa and increasingly from Europe. The country offers high-quality medical care at significantly lower prices than Western Europe, combined with the appeal of recovering in a beautiful destination.
              </p>
              <p>
                The Moroccan government has invested in healthcare infrastructure and actively promotes medical tourism. Major hospitals in Casablanca and Rabat now have international patient departments with dedicated coordinators who handle visa letters, airport transfers, accommodation, and translation services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card-moroccan p-5 text-center">
              <Stethoscope className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">Cosmetic Surgery</h3>
              <p className="text-xs text-[var(--text-secondary)]">Rhinoplasty, liposuction, facelifts. 40-60% savings vs. Europe.</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Smile className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">Dental Procedures</h3>
              <p className="text-xs text-[var(--text-secondary)]">Implants, veneers, crowns. 50-70% savings vs. Europe.</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Eye className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">Ophthalmology</h3>
              <p className="text-xs text-[var(--text-secondary)]">LASIK, cataract surgery. Modern equipment and trained specialists.</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Heart className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">Fertility Treatment</h3>
              <p className="text-xs text-[var(--text-secondary)]">IVF and fertility treatments at international-standard clinics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRESCRIPTION MEDICATION
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <FileText className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Bringing Prescription Medication
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color-green)]" />
                  What to Do
                </h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                    <span>Carry medications in their original pharmacy packaging with the prescription label clearly visible.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                    <span>Bring a letter from your doctor in English and French listing each medication, its generic name, dosage, and why you need it.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                    <span>Carry enough medication for your entire trip plus a 7-day buffer in case of travel delays.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                    <span>Split medications between carry-on and checked luggage in case one bag is lost.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)] mt-2 shrink-0" />
                    <span>Know the generic (international) name of your medications in case you need to buy replacements in Morocco.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
                  Important Restrictions
                </h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    <span><strong className="text-[var(--text-primary)]">Controlled substances</strong> (opioid painkillers, benzodiazepines, ADHD medications like Adderall) require extra documentation. Carry your prescription and doctor&apos;s letter.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    <span><strong className="text-[var(--text-primary)]">Cannabis-based medications</strong> (CBD oil, medical marijuana) are illegal in Morocco despite recent legalization of cannabis farming. Do not bring these under any circumstances.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    <span><strong className="text-[var(--text-primary)]">Psychotropic medications</strong> may require prior authorization from Moroccan authorities for large quantities. For a normal trip supply, a doctor&apos;s letter is usually sufficient.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    <span><strong className="text-[var(--text-primary)]">Insulin and syringes</strong> are allowed with a doctor&apos;s letter. Carry them in your hand luggage with a medical letter for airport security.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MENTAL HEALTH RESOURCES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Brain className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Mental Health Resources
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Travel can be mentally challenging, especially in a culturally different environment. Culture shock, sensory overload in medinas, persistent touts, and being far from home can affect your mental wellbeing. Here are resources available in Morocco.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3">In-Country Resources</h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">SOS Psychiatrie Maroc:</strong> +212 522-989898. French and Arabic-speaking crisis support line.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Private psychiatrists and psychologists</strong> are available in major cities. Casablanca and Rabat have the most options. Expect to pay 500-1000 MAD ($50-100 USD) per session.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Stethoscope className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Embassy assistance:</strong> Your embassy can provide a list of English-speaking mental health professionals in Morocco.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3">Remote / Online Options</h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <Activity className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Telehealth services</strong> like BetterHelp or Talkspace work in Morocco with a stable internet connection. Continue existing therapy sessions remotely.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Crisis lines:</strong> International Association for Suicide Prevention (IASP) maintains a directory of crisis centers worldwide at https://www.iasp.info/resources/Crisis_Centres/</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Self-care tips:</strong> Maintain routines where possible. Take quiet breaks from the stimulation of souks and cities. Riads offer peaceful courtyards for decompression. Journal your experiences.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COVID-19 STATUS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              COVID-19: Current Status &amp; Requirements
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/10 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-green-700 dark:text-green-400 mb-1">All COVID-19 Travel Restrictions Lifted</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    As of 2023, Morocco has removed all COVID-19 entry requirements. No vaccination proof, negative test, or health declaration is needed for entry. Masks are no longer mandatory in any setting.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3">Current Situation (2025-2026)</h3>
                <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>No vaccination, testing, or quarantine requirements for any traveler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Masks are optional everywhere, though some healthcare facilities may request them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>COVID-19 testing is available at private labs if needed for return travel (200-400 MAD for PCR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Morocco&apos;s vaccination rate is one of the highest in Africa (&gt;70% fully vaccinated)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3">Recommendations</h3>
                <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Stay up to date with COVID-19 vaccinations and boosters before travel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Carry a few masks in case you feel unwell or visit healthcare settings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Pack rapid antigen tests if your home country requires testing for re-entry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Ensure travel insurance covers COVID-19 related illness and trip disruption</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ALLERGIES & DIETARY NEEDS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Apple className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Allergies &amp; Dietary Medical Needs
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-6">
              <p>
                Morocco can be challenging for travelers with food allergies because shared cooking surfaces are common, ingredient lists are rarely available at traditional restaurants, and nuts are used extensively in Moroccan cuisine. Preparation is essential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3">Common Allergens in Moroccan Food</h3>
                <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Nuts:</strong> Almonds are ubiquitous in Moroccan cuisine &mdash; in pastries (pastilla, chebakia), tagines, couscous, and amlou (argan oil spread). Peanuts and walnuts also appear frequently.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Gluten:</strong> Bread is central to every Moroccan meal. Couscous is made from wheat semolina. Gluten-free options are limited outside high-end restaurants.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Dairy:</strong> Butter (smen) and milk are used in many dishes. Fresh goat cheese and yogurt (raib) are common. Specify &quot;sans lait, sans beurre&quot; (without milk, without butter).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Eggs:</strong> Used in many pastries, bastilla, and some tagine preparations. Egg is a common binding agent in Moroccan cooking.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3">Practical Tips</h3>
                <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Carry an allergy card written in Arabic and French listing your allergens. Several apps and websites can create these for you.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Always carry your EpiPen (or two) and ensure your travel companions know how to use it. EpiPens are not readily available in Moroccan pharmacies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Inform your riad or hotel about allergies when booking. Moroccan hosts take food allergies seriously when informed in advance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Learn key phrases: &quot;Ana andi hassasiya min...&quot; (I have an allergy to...) in Darija, or &quot;Je suis allergique a...&quot; in French.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Supermarkets like Marjane and Carrefour carry labeled products where you can check ingredients. Stock up on safe snacks for between meals.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FIRST AID KIT
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <PackageCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              First Aid Kit Recommendations
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
            While Moroccan pharmacies are well-stocked and inexpensive, having your own first aid kit means you are prepared for situations in remote areas, desert camps, or mountain refuges where pharmacies are not nearby.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {firstAidItems.map((group) => (
              <div key={group.category} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-3 text-sm uppercase tracking-wide">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-6 border-l-4 border-[var(--color-primary)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
              <div className="text-[var(--text-secondary)] text-sm">
                <strong className="text-[var(--text-primary)]">Trekking addition:</strong> If you are trekking in the Atlas Mountains, add altitude sickness medication (acetazolamide &mdash; prescription required), extra blister plasters, a knee brace or support bandage, water purification tablets, and a lightweight emergency blanket. Mountain refuges have very basic first aid supplies.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL TIPS / CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-6">
            Stay Healthy, Enjoy Morocco
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            With sensible preparation and basic precautions, health issues should not overshadow your Moroccan adventure. The vast majority of travelers visit Morocco without any medical problems. Prepare well, stay hydrated, be smart about food and water, and enjoy one of the most extraordinary countries in the world.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/safety"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary-900)] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Safety Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/trekking"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Trekking Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tips"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Travel Tips
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

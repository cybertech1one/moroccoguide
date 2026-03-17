import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  ChevronRight,
  Home,
  Phone,
  Shield,
  AlertTriangle,
  Heart,
  Hospital,
  Siren,
  Clock,
  Globe,
  BookOpen,
  CreditCard,
  FileText,
  Building,
  Plane,
  Car,
  Info,
  Star,
  Compass,
  Navigation,
  Lock,
  PhoneCall,
  Stethoscope,
  Pill,
  Scale,
  Umbrella,
  BadgeAlert,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/emergency`;

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title:
    'Emergency Contacts & Safety Guide Morocco 2025-2026 | Police, Hospitals, Embassies | CityGuide',
  description:
    'Essential emergency information for travelers in Morocco. Police (19), fire (15), ambulance (15), hospitals by city, embassy contacts, lost documents, financial emergencies, and critical Darija phrases. Save this page before your trip.',
  keywords: [
    'Morocco emergency numbers',
    'Morocco police number',
    'Morocco ambulance',
    'Morocco hospital',
    'Morocco embassy',
    'Morocco tourist police',
    'Morocco emergency contacts',
    'Morocco travel emergency',
    'Morocco lost passport',
    'Morocco pharmacie de garde',
    'Morocco travel safety',
    'Morocco clinic',
    'Morocco consulate',
    'Morocco stolen documents',
    'Morocco travel insurance',
    'Morocco emergency phrases',
    'Morocco 112',
    'Morocco fire department',
    'Morocco natural disasters',
    'Morocco earthquake safety',
  ],
  openGraph: {
    title:
      'Emergency Contacts & Safety Guide Morocco 2025-2026 | CityGuide',
    description:
      'Police, ambulance, hospitals, embassies, and essential emergency info for travelers in Morocco. Save this page before your trip.',
    url: PAGE_URL,
    images: [
      {
        url: '/images/hero-emergency-morocco.webp',
        width: 1200,
        height: 630,
        alt: 'Emergency contacts information for Morocco travelers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Emergency Contacts & Safety Guide Morocco 2025-2026 | CityGuide',
    description:
      'Police, ambulance, hospitals, embassies, and essential emergency info for travelers in Morocco.',
    images: ['/images/hero-emergency-morocco.webp'],
  },
  alternates: { canonical: PAGE_URL },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Emergency Contacts & Safety Guide for Travelers in Morocco 2025-2026',
  description:
    'Comprehensive emergency information for travelers in Morocco including police numbers, hospital contacts, embassy addresses, lost document procedures, and essential Darija phrases.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-emergency-morocco.webp`,
  author: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/favicon.ico`,
    },
  },
  datePublished: '2025-01-15',
  dateModified: '2026-03-15',
  mainEntityOfPage: PAGE_URL,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the main emergency number in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The universal emergency number from any mobile phone is 112. For police specifically, call 19 in cities or 177 for the Gendarmerie in rural areas. Fire and ambulance share the number 15.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there English-speaking doctors in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most private clinics in major cities like Marrakech, Casablanca, Rabat, and Fes have English-speaking doctors. French is widely spoken in all medical facilities. Private clinics are recommended for tourists as they typically offer higher standards of care and shorter wait times.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if my passport is lost or stolen in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "First, file a police report (proces-verbal) at the nearest police station. Then contact your country's embassy or consulate with the police report. They can issue an emergency travel document or temporary passport, usually within 1-3 business days. Keep photocopies of your passport and a digital scan in your email for faster processing.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find an open pharmacy at night in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has a pharmacie de garde (duty pharmacy) system that ensures pharmacies are open 24/7 on rotation. Look for green cross signs that are illuminated, check the notice posted on closed pharmacy doors listing the nearest on-duty pharmacy, or call your hotel reception for the nearest one. Many pharmacies in tourist areas also post duty pharmacy schedules online.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need travel insurance for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While travel insurance is not legally required to enter Morocco, it is strongly recommended. Private medical care can be expensive, and medical evacuation costs can reach tens of thousands of dollars. Ensure your policy covers emergency medical treatment, hospital stays, medical evacuation, trip cancellation, and lost belongings. Many credit cards offer basic travel insurance - check before purchasing additional coverage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my credit card is stolen in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Immediately call your bank to block the card. Visa Emergency line: +1-303-967-1096, Mastercard: +1-636-722-7111. File a police report, which you may need for insurance claims. For emergency cash, use Western Union or MoneyGram (available in most cities) or ask your bank about emergency card replacement. Many hotels can also arrange emergency cash advances.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco prone to earthquakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco sits on the African-Eurasian plate boundary and does experience seismic activity. The 2023 Al Haouz earthquake (magnitude 6.8) was a significant event. While major earthquakes are infrequent, tremors can occur. Know the drill: Drop, Cover, Hold On. Stay away from old unreinforced structures in medinas during tremors, and move to open spaces if possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I file a police report as a tourist in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Visit the nearest police station (commissariat) or tourist police office. Major cities like Marrakech, Fes, and Casablanca have dedicated tourist police brigades who often speak some English and French. You will need your passport (or a copy), details of the incident, and any evidence. The report (proces-verbal) is free and typically takes 30-60 minutes. Keep copies of the report for insurance claims.",
      },
    },
    {
      '@type': 'Question',
      name: 'What emergency apps should I download before visiting Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Download Maps.me or OsmAnd for offline navigation (essential in medinas without GPS signal). Google Translate with the Arabic and French offline language packs. Your phone should have built-in Emergency SOS features. WhatsApp is widely used in Morocco for communicating with hotels, guides, and taxi drivers. Also save key emergency numbers in your phone contacts before arriving.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I call 911 in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, 911 does not work in Morocco. The emergency numbers are: 19 (police in cities), 177 (Gendarmerie for rural areas), 15 (fire and ambulance), and 112 (universal emergency from mobile phones). Save these numbers in your phone before your trip.',
      },
    },
  ],
};

/* ===================================================================
   DATA: EMERGENCY NUMBERS
   =================================================================== */

interface EmergencyNumber {
  service: string;
  number: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
}

const emergencyNumbers: EmergencyNumber[] = [
  {
    service: 'Police (Urban)',
    number: '19',
    description:
      'Surete Nationale - city police for urban areas, theft, assault, traffic accidents',
    icon: <Shield className="w-7 h-7" />,
    color: 'text-[#DC2626]',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    service: 'Gendarmerie (Rural)',
    number: '177',
    description:
      'Royal Gendarmerie - covers highways, rural areas, and outside city limits',
    icon: <Shield className="w-7 h-7" />,
    color: 'text-[#DC2626]',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    service: 'Fire & Ambulance',
    number: '15',
    description:
      'Protection Civile - fire department and emergency medical services',
    icon: <Siren className="w-7 h-7" />,
    color: 'text-[#DC2626]',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    service: 'Universal Emergency',
    number: '112',
    description:
      'Works from any mobile phone, even without SIM card or credit - connects to nearest emergency service',
    icon: <PhoneCall className="w-7 h-7" />,
    color: 'text-[#DC2626]',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    service: 'Tourist Police',
    number: 'Varies by city',
    description:
      'Brigade Touristique - dedicated tourist police in Marrakech, Fes, Casablanca, Tangier, and Agadir',
    icon: <Star className="w-7 h-7" />,
    color: 'text-[#EA580C]',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
];

/* ===================================================================
   DATA: HOSPITALS & CLINICS BY CITY
   =================================================================== */

interface HospitalInfo {
  city: string;
  facilities: {
    name: string;
    type: 'private' | 'public';
    phone?: string;
    notes: string;
  }[];
}

const hospitalsByCity: HospitalInfo[] = [
  {
    city: 'Marrakech',
    facilities: [
      {
        name: 'Clinique Internationale de Marrakech',
        type: 'private',
        phone: '+212-524-431-999',
        notes:
          'Modern facility, English and French speaking staff, 24/7 emergency department',
      },
      {
        name: 'Clinique Al Kawtar',
        type: 'private',
        phone: '+212-524-434-600',
        notes:
          'Well-equipped private clinic with multilingual doctors, popular with expats',
      },
      {
        name: 'CHU Mohammed VI',
        type: 'public',
        phone: '+212-524-434-813',
        notes:
          'Main public teaching hospital, handles complex cases and trauma',
      },
    ],
  },
  {
    city: 'Casablanca',
    facilities: [
      {
        name: 'Clinique Badr',
        type: 'private',
        phone: '+212-522-868-686',
        notes:
          'One of the largest private clinics in Morocco, full emergency services',
      },
      {
        name: 'Hopital Cheikh Khalifa',
        type: 'public',
        phone: '+212-522-224-400',
        notes:
          'State-of-the-art public hospital, built in partnership with UAE, excellent facilities',
      },
      {
        name: 'Clinique de la Resistance',
        type: 'private',
        notes:
          'Centrally located private clinic with general and specialized emergency care',
      },
    ],
  },
  {
    city: 'Fes',
    facilities: [
      {
        name: 'Clinique Atlas',
        type: 'private',
        phone: '+212-535-622-200',
        notes:
          'Modern private clinic, French and some English spoken, 24h emergency',
      },
      {
        name: 'CHU Hassan II',
        type: 'public',
        phone: '+212-535-619-000',
        notes:
          'Major public teaching hospital with comprehensive emergency department',
      },
    ],
  },
  {
    city: 'Rabat',
    facilities: [
      {
        name: 'Hopital Cheikh Zaid',
        type: 'private',
        phone: '+212-537-697-500',
        notes:
          'High-quality private hospital, well-regarded by diplomats and expats',
      },
      {
        name: 'Clinique Agdal',
        type: 'private',
        phone: '+212-537-774-774',
        notes:
          'Modern private clinic in Agdal district, multilingual staff, walk-in emergency',
      },
      {
        name: 'Hopital Ibn Sina (Avicenne)',
        type: 'public',
        phone: '+212-537-672-871',
        notes: 'Largest public hospital in Rabat, trauma center',
      },
    ],
  },
  {
    city: 'Tangier',
    facilities: [
      {
        name: 'Clinique du Croissant Rouge',
        type: 'private',
        phone: '+212-539-325-252',
        notes:
          'Established private clinic, some English spoken, general emergency care',
      },
      {
        name: 'Hopital Mohammed V',
        type: 'public',
        notes: 'Main public hospital in Tangier, emergency department open 24/7',
      },
    ],
  },
];

/* ===================================================================
   DATA: EMBASSIES & CONSULATES
   =================================================================== */

interface EmbassyInfo {
  country: string;
  flag: string;
  offices: {
    city: string;
    phone: string;
    type: 'embassy' | 'consulate';
  }[];
  emergencyLine?: string;
  website?: string;
}

const embassies: EmbassyInfo[] = [
  {
    country: 'United States',
    flag: 'US',
    offices: [
      { city: 'Rabat', phone: '+212-537-637-200', type: 'embassy' },
      { city: 'Casablanca', phone: '+212-522-642-099', type: 'consulate' },
    ],
    emergencyLine: '+212-661-131-939',
    website: 'ma.usembassy.gov',
  },
  {
    country: 'United Kingdom',
    flag: 'UK',
    offices: [
      { city: 'Rabat', phone: '+212-537-633-333', type: 'embassy' },
      { city: 'Casablanca', phone: '+212-522-857-400', type: 'consulate' },
    ],
    website: 'gov.uk/world/morocco',
  },
  {
    country: 'Canada',
    flag: 'CA',
    offices: [
      { city: 'Rabat', phone: '+212-537-687-400', type: 'embassy' },
    ],
    emergencyLine: '+1-613-996-8885',
    website: 'canada.ca/morocco',
  },
  {
    country: 'France',
    flag: 'FR',
    offices: [
      { city: 'Rabat', phone: '+212-537-689-700', type: 'embassy' },
      { city: 'Casablanca', phone: '+212-522-489-600', type: 'consulate' },
    ],
    website: 'ma.ambafrance.org',
  },
  {
    country: 'Australia',
    flag: 'AU',
    offices: [
      { city: 'Rabat', phone: '+212-537-768-660', type: 'embassy' },
    ],
    emergencyLine: '+61-2-6261-3305',
    website: 'morocco.embassy.gov.au',
  },
  {
    country: 'Germany',
    flag: 'DE',
    offices: [
      { city: 'Rabat', phone: '+212-537-218-600', type: 'embassy' },
    ],
    website: 'rabat.diplo.de',
  },
  {
    country: 'Spain',
    flag: 'ES',
    offices: [
      { city: 'Rabat', phone: '+212-537-633-900', type: 'embassy' },
      { city: 'Casablanca', phone: '+212-522-220-752', type: 'consulate' },
    ],
    website: 'exteriores.gob.es/embajadas/rabat',
  },
];

/* ===================================================================
   DATA: EMERGENCY DARIJA / FRENCH PHRASES
   =================================================================== */

interface EmergencyPhrase {
  english: string;
  darija: string;
  french: string;
  pronunciation: string;
  context: string;
}

const emergencyPhrases: EmergencyPhrase[] = [
  {
    english: 'Help!',
    darija: '!عاونوني',
    french: 'Au secours !',
    pronunciation: 'Aw-noo-nee!',
    context: 'General cry for help',
  },
  {
    english: 'Call the police!',
    darija: '!عيطو للبوليس',
    french: 'Appelez la police !',
    pronunciation: 'Ay-too lil-boo-lees!',
    context: 'Crime or dangerous situation',
  },
  {
    english: 'I need a doctor',
    darija: 'بغيت طبيب',
    french: "J'ai besoin d'un medecin",
    pronunciation: 'Bghit tbib',
    context: 'Medical emergency',
  },
  {
    english: 'Call an ambulance!',
    darija: '!عيطو لمبيلونص',
    french: "Appelez une ambulance !",
    pronunciation: 'Ay-too lam-bee-lonss!',
    context: 'Serious medical emergency',
  },
  {
    english: 'I am lost',
    darija: 'أنا تاه / تاهة',
    french: 'Je suis perdu(e)',
    pronunciation: 'Ana tah (m) / taha (f)',
    context: 'Lost in medina or rural area',
  },
  {
    english: 'Where is the hospital?',
    darija: 'فين السبيطار؟',
    french: "Ou est l'hopital ?",
    pronunciation: 'Feen es-sbi-tar?',
    context: 'Finding medical care',
  },
  {
    english: 'Where is the pharmacy?',
    darija: 'فين الفارماسي؟',
    french: 'Ou est la pharmacie ?',
    pronunciation: 'Feen el-far-ma-see?',
    context: 'Finding medication',
  },
  {
    english: 'I have been robbed',
    darija: 'تسرقت',
    french: "J'ai ete vole(e)",
    pronunciation: 'Tser-get',
    context: 'Reporting theft',
  },
  {
    english: 'I need help',
    darija: 'خصني لمعاونة',
    french: "J'ai besoin d'aide",
    pronunciation: 'Khess-nee lm-aw-na',
    context: 'General assistance',
  },
  {
    english: 'It is urgent / emergency',
    darija: 'ضروري / مستعجل',
    french: "C'est urgent",
    pronunciation: 'Dah-roo-ree / Msta-jel',
    context: 'Emphasizing urgency',
  },
  {
    english: 'I am allergic to...',
    darija: '...عندي الحساسية من',
    french: 'Je suis allergique a...',
    pronunciation: 'An-dee al-hah-sa-see-ya men...',
    context: 'Allergic reactions',
  },
  {
    english: 'My passport was stolen',
    darija: 'تسرق ليا الباسبور',
    french: 'Mon passeport a ete vole',
    pronunciation: 'Tser-ek lee-ya el-pass-por',
    context: 'Lost/stolen documents',
  },
];

/* ===================================================================
   DATA: FAQ ITEMS
   =================================================================== */

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is the main emergency number in Morocco?',
    answer:
      'The universal emergency number from any mobile phone is 112. For police specifically, call 19 in cities or 177 for the Gendarmerie in rural areas. Fire and ambulance share the number 15.',
  },
  {
    question: 'Are there English-speaking doctors in Morocco?',
    answer:
      'Yes, most private clinics in major cities like Marrakech, Casablanca, Rabat, and Fes have English-speaking doctors. French is widely spoken in all medical facilities. Private clinics are recommended for tourists as they typically offer higher standards of care and shorter wait times.',
  },
  {
    question: 'What should I do if my passport is lost or stolen in Morocco?',
    answer:
      "First, file a police report (proces-verbal) at the nearest police station. Then contact your country's embassy or consulate with the police report. They can issue an emergency travel document or temporary passport, usually within 1-3 business days. Keep photocopies of your passport and a digital scan in your email for faster processing.",
  },
  {
    question: 'How do I find an open pharmacy at night in Morocco?',
    answer:
      'Morocco has a pharmacie de garde (duty pharmacy) system that ensures pharmacies are open 24/7 on rotation. Look for green cross signs that are illuminated, check the notice posted on closed pharmacy doors listing the nearest on-duty pharmacy, or call your hotel reception for the nearest one.',
  },
  {
    question: 'Do I need travel insurance for Morocco?',
    answer:
      'While travel insurance is not legally required to enter Morocco, it is strongly recommended. Private medical care can be expensive, and medical evacuation costs can reach tens of thousands of dollars. Ensure your policy covers emergency medical treatment, hospital stays, medical evacuation, trip cancellation, and lost belongings.',
  },
  {
    question: 'What happens if my credit card is stolen in Morocco?',
    answer:
      'Immediately call your bank to block the card. Visa Emergency line: +1-303-967-1096, Mastercard: +1-636-722-7111. File a police report, which you may need for insurance claims. For emergency cash, use Western Union or MoneyGram (available in most cities) or ask your bank about emergency card replacement.',
  },
  {
    question: 'Is Morocco prone to earthquakes?',
    answer:
      'Morocco sits on the African-Eurasian plate boundary and does experience seismic activity. The 2023 Al Haouz earthquake (magnitude 6.8) was a significant event. While major earthquakes are infrequent, tremors can occur. Know the drill: Drop, Cover, Hold On. Stay away from old unreinforced structures during tremors.',
  },
  {
    question: 'How do I file a police report as a tourist in Morocco?',
    answer:
      "Visit the nearest police station (commissariat) or tourist police office. Major cities have dedicated tourist police brigades who often speak some English and French. You will need your passport (or a copy), details of the incident, and any evidence. The report (proces-verbal) is free and typically takes 30-60 minutes.",
  },
  {
    question: 'What emergency apps should I download before visiting Morocco?',
    answer:
      'Download Maps.me or OsmAnd for offline navigation (essential in medinas). Google Translate with Arabic and French offline packs. Your phone should have built-in Emergency SOS features. WhatsApp is widely used in Morocco for communicating with hotels, guides, and taxi drivers.',
  },
  {
    question: 'Can I call 911 in Morocco?',
    answer:
      'No, 911 does not work in Morocco. The emergency numbers are: 19 (police in cities), 177 (Gendarmerie for rural areas), 15 (fire and ambulance), and 112 (universal emergency from mobile phones). Save these numbers in your phone before your trip.',
  },
];

/* ===================================================================
   DATA: USEFUL APPS
   =================================================================== */

interface AppInfo {
  name: string;
  purpose: string;
  details: string;
  icon: React.ReactNode;
}

const usefulApps: AppInfo[] = [
  {
    name: 'Maps.me / OsmAnd',
    purpose: 'Offline Navigation',
    details:
      'Download Morocco maps for offline use before your trip. Essential for navigating medinas where GPS signal is unreliable. Works without internet or mobile data.',
    icon: <Navigation className="w-5 h-5" />,
  },
  {
    name: 'Google Translate',
    purpose: 'Language Barrier',
    details:
      'Download Arabic and French language packs for offline translation. Camera feature can translate signs and menus in real time. Essential for pharmacy and medical visits.',
    icon: <Globe className="w-5 h-5" />,
  },
  {
    name: 'WhatsApp',
    purpose: 'Communication',
    details:
      'The primary messaging app in Morocco. Hotels, tour operators, taxi drivers, and restaurants all use it. Buy a local SIM card for reliable access.',
    icon: <Phone className="w-5 h-5" />,
  },
  {
    name: 'Emergency SOS (Built-in)',
    purpose: 'Emergency Alerts',
    details:
      'Both iPhone and Android have built-in Emergency SOS. On iPhone, hold side button + volume. On Android, press power button 5 times. Set up emergency contacts before your trip.',
    icon: <Siren className="w-5 h-5" />,
  },
  {
    name: 'XE Currency',
    purpose: 'Currency Conversion',
    details:
      'Real-time MAD to your home currency conversion. Useful for understanding medical bills and pharmacy costs. Works offline once rates are cached.',
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    name: 'Smart Traveler (US) / TravelAware (UK)',
    purpose: 'Government Alerts',
    details:
      'Official government travel advisory apps. Receive push notifications about safety alerts, natural disasters, and political events in Morocco.',
    icon: <AlertTriangle className="w-5 h-5" />,
  },
];

/* ===================================================================
   DATA: INSURANCE CHECKLIST
   =================================================================== */

interface InsuranceItem {
  coverage: string;
  why: string;
  minRecommended: string;
}

const insuranceChecklist: InsuranceItem[] = [
  {
    coverage: 'Emergency Medical Treatment',
    why: 'Private hospital visits can cost 1,000-5,000 MAD per day',
    minRecommended: '500,000 MAD (approx. $50,000 USD)',
  },
  {
    coverage: 'Medical Evacuation',
    why: 'Air ambulance to Europe can exceed $100,000 USD',
    minRecommended: '$250,000 USD',
  },
  {
    coverage: 'Trip Cancellation',
    why: 'Non-refundable flights and accommodations',
    minRecommended: 'Total trip cost',
  },
  {
    coverage: 'Lost/Stolen Belongings',
    why: 'Replacement of luggage, electronics, documents',
    minRecommended: '$2,000-5,000 USD',
  },
  {
    coverage: 'Adventure Activities',
    why: 'Trekking, quad biking, desert tours often excluded from basic plans',
    minRecommended: 'Confirm specific activities covered',
  },
  {
    coverage: 'Repatriation of Remains',
    why: 'In the worst case, bringing remains home is extremely costly',
    minRecommended: 'Included in comprehensive policies',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function EmergencyPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ============================================================
          SECTION 1 - HERO
          ============================================================ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-emergency-morocco.webp"
          alt="Emergency services and safety information for travelers in Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 via-red-800/70 to-[#1A1814]/90" />
        <div className="relative z-10 container-morocco text-center py-20 md:py-28">
          <div className="inline-flex items-center gap-2 bg-[#DC2626]/20 border border-[#DC2626]/40 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Siren className="w-4 h-4" />
            Critical Safety Information
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Emergency Contacts &<br />
            <span className="text-red-300">Safety Guide</span> Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            Save this page before your trip. Police, ambulance, hospitals, embassies, and
            everything you need in a crisis -- all in one place.
          </p>

          {/* Quick-access emergency numbers strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-xl">
              <Shield className="w-5 h-5 text-red-300" />
              <span className="text-white font-bold text-lg">Police: 19</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-xl">
              <Siren className="w-5 h-5 text-red-300" />
              <span className="text-white font-bold text-lg">
                Fire/Ambulance: 15
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-xl">
              <PhoneCall className="w-5 h-5 text-red-300" />
              <span className="text-white font-bold text-lg">
                Mobile SOS: 112
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BREADCRUMBS
          ============================================================ */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[#FAF8F5] border-b border-[#EDE8E0]"
      >
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[#1A1814]/60">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-[#A0522D] transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[#A0522D] font-medium">
              Emergency Contacts
            </li>
          </ol>
        </div>
      </nav>

      {/* ============================================================
          SECTION 2 - PROMINENT EMERGENCY NUMBERS
          ============================================================ */}
      <section className="py-14 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#DC2626] text-sm font-semibold uppercase tracking-wider mb-3">
              <Phone className="w-4 h-4" />
              Save These Numbers Now
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Emergency Phone Numbers
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              These numbers work from any phone in Morocco. Dial 112 from a mobile
              phone for the universal emergency line, even without a SIM card.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {emergencyNumbers.map((item) => (
              <div
                key={item.service}
                className={`${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`${item.color} bg-white rounded-xl p-3 shadow-sm`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#1A1814]/60 uppercase tracking-wider mb-1">
                      {item.service}
                    </p>
                    <p
                      className={`text-4xl md:text-5xl font-[family-name:var(--font-display)] font-bold ${item.color} mb-2`}
                    >
                      {item.number}
                    </p>
                    <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                  Important: Save Before You Travel
                </h3>
                <p className="text-[#1A1814]/70 text-sm leading-relaxed">
                  Add these numbers to your phone contacts before arriving in Morocco.
                  Note that 112 works from any mobile phone, even without a Moroccan SIM card
                  or phone credit. When calling, stay calm, state your location clearly, and
                  mention you are a tourist -- operators in major cities often speak French
                  and sometimes English.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 - MEDICAL EMERGENCIES
          ============================================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#DC2626] text-sm font-semibold uppercase tracking-wider mb-3">
              <Hospital className="w-4 h-4" />
              Medical Emergencies
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Hospitals & Clinics by City
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Private clinics are strongly recommended for tourists -- they offer shorter
              wait times, modern equipment, and multilingual staff. Most accept international
              insurance or payment by card.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hospitalsByCity.map((cityData) => (
              <div
                key={cityData.city}
                className="bg-[#FAF8F5] border border-[#EDE8E0] rounded-2xl overflow-hidden"
              >
                <div className="bg-[#A0522D] px-6 py-4">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-5 h-5" />
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold">
                      {cityData.city}
                    </h3>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  {cityData.facilities.map((facility) => (
                    <div
                      key={facility.name}
                      className="bg-white rounded-xl p-4 border border-[#EDE8E0]"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[#1A1814] text-sm leading-snug">
                          {facility.name}
                        </h4>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                            facility.type === 'private'
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {facility.type}
                        </span>
                      </div>
                      {facility.phone && (
                        <p className="text-[#A0522D] font-semibold text-sm mb-1 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5" />
                          {facility.phone}
                        </p>
                      )}
                      <p className="text-[#1A1814]/60 text-xs leading-relaxed">
                        {facility.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pharmacy section */}
          <div className="mt-14">
            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-100 text-emerald-700 p-3 rounded-xl">
                    <Pill className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                    Pharmacies in Morocco
                  </h3>
                </div>
                <div className="space-y-4 text-[#1A1814]/70 leading-relaxed">
                  <p>
                    Moroccan pharmacies are identified by a <strong className="text-emerald-700">green cross sign</strong> and
                    are found on nearly every major street. Pharmacists are highly trained and can
                    recommend over-the-counter treatments for common ailments -- many medications
                    that require prescriptions in Europe or North America are available
                    over the counter in Morocco at a fraction of the price.
                  </p>
                  <p>
                    Every city operates a <strong>pharmacie de garde</strong> (duty pharmacy) system
                    ensuring 24/7 access to medications. When a pharmacy is closed, a sign on the
                    door lists the nearest on-duty pharmacy. Your hotel reception can always help
                    you locate the pharmacie de garde.
                  </p>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-emerald-800 mb-2">
                      Finding the Pharmacie de Garde
                    </h4>
                    <ul className="space-y-2 text-sm text-emerald-900/80">
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        Check the sign posted on any closed pharmacy door
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        Ask your hotel or riad reception
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        Search &quot;pharmacie de garde [city name]&quot; online
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        Look for an illuminated green cross at night
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden border border-[#EDE8E0]">
                  <img
                    src="/images/photo-pharmacy-morocco.webp"
                    alt="Moroccan pharmacy with the distinctive green cross sign, a common sight throughout Morocco's cities"
                    className="w-full h-56 object-cover"
                  />
                  <div className="bg-[#FAF8F5] p-4">
                    <p className="text-xs text-[#1A1814]/50 italic">
                      Pharmacies in Morocco are identified by the green cross symbol and
                      are staffed by qualified pharmacists
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF8F5] border border-[#EDE8E0] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Stethoscope className="w-5 h-5 text-[#A0522D]" />
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                      Dental Emergencies
                    </h4>
                  </div>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
                    Morocco has excellent private dental clinics, particularly in Casablanca,
                    Rabat, and Marrakech. Many dentists studied in France and speak multiple
                    languages. Emergency dental work is available at most private clinics.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-[#1A1814]/70">
                      <Info className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                      <span>
                        Expect to pay 300-800 MAD for a dental consultation and basic treatment
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-[#1A1814]/70">
                      <Info className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                      <span>
                        For after-hours emergencies, go to a private clinic emergency department
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-[#1A1814]/70">
                      <Info className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                      <span>
                        Keep your travel insurance details handy -- dental emergencies are
                        often covered
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 - EMBASSIES & CONSULATES
          ============================================================ */}
      <section className="py-14 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-semibold uppercase tracking-wider mb-3">
              <Building className="w-4 h-4" />
              Embassies & Consulates
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Your Embassy in Morocco
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Contact your embassy or consulate for passport replacement, legal assistance,
              emergency funds, or if you are detained. Most embassies are in Rabat, with
              consulates in Casablanca.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {embassies.map((embassy) => (
              <div
                key={embassy.country}
                className="bg-white border border-[#EDE8E0] rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#2563EB]/10 text-[#2563EB] p-2.5 rounded-xl">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                      {embassy.country}
                    </h3>
                    <p className="text-xs text-[#1A1814]/50">{embassy.flag}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {embassy.offices.map((office) => (
                    <div
                      key={`${embassy.country}-${office.city}`}
                      className="flex items-start gap-2"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#A0522D] mt-1 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-[#1A1814]/50 uppercase tracking-wider">
                          {office.type === 'embassy'
                            ? `Embassy - ${office.city}`
                            : `Consulate - ${office.city}`}
                        </p>
                        <p className="text-[#A0522D] font-semibold text-sm">
                          {office.phone}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {embassy.emergencyLine && (
                  <div className="bg-red-50 border border-red-100 rounded-lg p-3 mb-3">
                    <p className="text-xs font-semibold text-[#DC2626] uppercase tracking-wider mb-0.5">
                      After-hours emergency
                    </p>
                    <p className="text-[#DC2626] font-bold text-sm">
                      {embassy.emergencyLine}
                    </p>
                  </div>
                )}

                {embassy.website && (
                  <p className="text-xs text-[#2563EB] font-medium">
                    {embassy.website}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-[#2563EB] mt-0.5 shrink-0" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                  What Your Embassy Can Help With
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 text-sm text-[#1A1814]/70">
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                      Emergency passport or travel document
                    </li>
                    <li className="flex items-start gap-2">
                      <Scale className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                      Legal assistance and referrals
                    </li>
                    <li className="flex items-start gap-2">
                      <Hospital className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                      Medical emergency coordination
                    </li>
                  </ul>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2">
                      <CreditCard className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                      Emergency funds transfer
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                      Help if detained or arrested
                    </li>
                    <li className="flex items-start gap-2">
                      <Plane className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                      Emergency repatriation assistance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 - LOST / STOLEN DOCUMENTS
          ============================================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#EA580C] text-sm font-semibold uppercase tracking-wider mb-3">
              <FileText className="w-4 h-4" />
              Lost or Stolen Documents
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              What to Do If You Lose Your Passport
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Losing your passport is stressful but manageable. Follow these steps
              in order to get back on track as quickly as possible.
            </p>
          </div>

          {/* Step-by-step process */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    1
                  </div>
                  <div className="w-0.5 flex-1 bg-[#EDE8E0] mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-2">
                    File a Police Report (Proces-Verbal)
                  </h3>
                  <p className="text-[#1A1814]/70 mb-3">
                    Go to the nearest police station (commissariat) or tourist police office.
                    Request a <strong>proces-verbal</strong> (official police report). This document
                    is essential for your embassy to issue a replacement. The report is free and
                    typically takes 30-60 minutes. Bring any identification you still have and
                    a copy of your passport if available.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
                    <strong>Tip:</strong> Tourist police in Marrakech, Fes, and Casablanca often
                    speak French and basic English. Ask your hotel to help translate if needed.
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#EA580C] text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    2
                  </div>
                  <div className="w-0.5 flex-1 bg-[#EDE8E0] mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-2">
                    Contact Your Embassy or Consulate
                  </h3>
                  <p className="text-[#1A1814]/70 mb-3">
                    Call your embassy during business hours (typically 8:30 AM - 4:30 PM,
                    Monday to Friday) or use the after-hours emergency line. Bring the
                    police report, two passport-sized photos, any form of ID you have, and
                    a photocopy of your passport (or the digital scan from your email).
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                    <strong>Pro tip:</strong> Before traveling, email yourself a scan of your
                    passport photo page, visa, and travel insurance documents. This dramatically
                    speeds up the replacement process.
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#C4960C] text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    3
                  </div>
                  <div className="w-0.5 flex-1 bg-[#EDE8E0] mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-2">
                    Get an Emergency Travel Document
                  </h3>
                  <p className="text-[#1A1814]/70 mb-3">
                    Your embassy will issue either a temporary passport or an Emergency Travel
                    Document (ETD). Processing typically takes 1-3 business days. Some embassies
                    can expedite for same-day or next-day departure. The ETD is valid for a
                    single journey home and costs vary by country (US: ~$165, UK: ~95 GBP).
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-2">
                    Notify Your Airline and Insurance
                  </h3>
                  <p className="text-[#1A1814]/70">
                    Contact your airline about travel with temporary documents. Notify your
                    travel insurance company as replacement costs may be covered. If your driver&apos;s
                    license was also lost, you may need to obtain an international driving permit
                    replacement or avoid renting vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prevention tips */}
          <div className="mt-12 max-w-3xl mx-auto bg-[#FAF8F5] border border-[#EDE8E0] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-[#A0522D]" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                Prevention: Protect Your Documents
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 text-sm text-[#1A1814]/70">
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                <span>
                  Leave your passport in the hotel/riad safe and carry a photocopy
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                <span>
                  Email yourself scans of passport, visa, insurance, and flight details
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                <span>
                  Store backup copies in cloud storage (Google Drive, iCloud)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                <span>
                  Keep original and copies in separate locations at all times
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                <span>
                  Use a hidden money belt for documents in crowded areas
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                <span>
                  Note your embassy address and phone number before your trip
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 - FINANCIAL EMERGENCIES
          ============================================================ */}
      <section className="py-14 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#EA580C] text-sm font-semibold uppercase tracking-wider mb-3">
              <CreditCard className="w-4 h-4" />
              Financial Emergencies
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Lost Cards & Emergency Money
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Acting fast when a card is lost or stolen minimizes your financial exposure.
              Here is exactly what to do.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Lost/Stolen Cards */}
            <div className="bg-white border border-[#EDE8E0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#DC2626]/10 text-[#DC2626] p-2.5 rounded-xl">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  Lost/Stolen Cards
                </h3>
              </div>
              <p className="text-sm text-[#1A1814]/70 mb-4">
                Call your bank immediately to block the card. Then call the international
                emergency line for your card network:
              </p>
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                  <p className="text-xs font-bold text-[#DC2626] uppercase tracking-wider mb-1">
                    Visa Emergency (Global)
                  </p>
                  <p className="text-[#DC2626] font-bold">+1-303-967-1096</p>
                </div>
                <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                  <p className="text-xs font-bold text-[#DC2626] uppercase tracking-wider mb-1">
                    Mastercard Emergency (Global)
                  </p>
                  <p className="text-[#DC2626] font-bold">+1-636-722-7111</p>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
                  <p className="text-xs font-bold text-[#EA580C] uppercase tracking-wider mb-1">
                    American Express
                  </p>
                  <p className="text-[#EA580C] font-bold">+1-336-393-1111</p>
                </div>
              </div>
              <p className="text-xs text-[#1A1814]/50 mt-3">
                File a police report as well -- you may need it for insurance claims and
                chargebacks on fraudulent charges.
              </p>
            </div>

            {/* Money Transfer */}
            <div className="bg-white border border-[#EDE8E0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#EA580C]/10 text-[#EA580C] p-2.5 rounded-xl">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  Emergency Money Transfer
                </h3>
              </div>
              <p className="text-sm text-[#1A1814]/70 mb-4">
                If you are left without any money, these services can get you cash
                within hours from family or friends back home:
              </p>
              <div className="space-y-3">
                <div className="bg-[#FAF8F5] border border-[#EDE8E0] rounded-lg p-3">
                  <h4 className="font-semibold text-[#1A1814] text-sm mb-1">
                    Western Union
                  </h4>
                  <p className="text-xs text-[#1A1814]/60">
                    Available at post offices (Poste Maroc) and dedicated agents in
                    every city. Receiver needs valid ID. Cash pickup in 10-15 minutes.
                  </p>
                </div>
                <div className="bg-[#FAF8F5] border border-[#EDE8E0] rounded-lg p-3">
                  <h4 className="font-semibold text-[#1A1814] text-sm mb-1">
                    MoneyGram
                  </h4>
                  <p className="text-xs text-[#1A1814]/60">
                    Available at banks and authorized agents. Similar to Western Union
                    with competitive fees. Widely available in tourist cities.
                  </p>
                </div>
                <div className="bg-[#FAF8F5] border border-[#EDE8E0] rounded-lg p-3">
                  <h4 className="font-semibold text-[#1A1814] text-sm mb-1">
                    Wise / Revolut Transfer
                  </h4>
                  <p className="text-xs text-[#1A1814]/60">
                    If you have a secondary account, transfer to a Moroccan bank
                    account or use a local ATM with a backup card.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Cash Tips */}
            <div className="bg-white border border-[#EDE8E0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#2563EB]/10 text-[#2563EB] p-2.5 rounded-xl">
                  <Info className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  Emergency Cash Tips
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[#1A1814]/70">
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <span>
                    <strong>Always carry backup cash</strong> -- keep 500-1,000 MAD
                    (about $50-100) hidden separately from your main wallet
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <span>
                    <strong>Bring two bank cards</strong> from different banks and keep
                    them in separate locations
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <span>
                    <strong>Your embassy can help</strong> facilitate emergency fund
                    transfers from family members
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <span>
                    <strong>Hotels may advance cash</strong> against a confirmed booking
                    or credit card authorization
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <span>
                    <strong>ATMs are widespread</strong> -- Attijariwafa Bank, BMCE, and
                    Banque Populaire accept most international cards
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <span>
                    <strong>Note your bank&apos;s number</strong> before travel -- saved
                    in your phone, not just on the card
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 - NATURAL DISASTERS
          ============================================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#EA580C] text-sm font-semibold uppercase tracking-wider mb-3">
              <AlertTriangle className="w-4 h-4" />
              Natural Disasters
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Earthquake & Flood Preparedness
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Morocco&apos;s geography means occasional seismic activity and flash floods.
              Knowing what to do before it happens can save your life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Earthquakes */}
            <div className="bg-[#FAF8F5] border border-[#EDE8E0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-[#DC2626]/10 text-[#DC2626] p-3 rounded-xl">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                  Earthquakes
                </h3>
              </div>

              <p className="text-[#1A1814]/70 mb-4">
                Morocco sits on the African-Eurasian plate boundary. The devastating
                2023 Al Haouz earthquake (magnitude 6.8) near Marrakech was a reminder
                of seismic risks. While major earthquakes are infrequent, tremors occur
                periodically, especially near the Rif Mountains and Atlas range.
              </p>

              <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                During an earthquake:
              </h4>
              <div className="space-y-2 mb-5">
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <BadgeAlert className="w-4 h-4 text-[#DC2626] mt-0.5 shrink-0" />
                  <span>
                    <strong>Drop, Cover, Hold On</strong> -- get under a sturdy table or
                    desk, protect your head and neck
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <BadgeAlert className="w-4 h-4 text-[#DC2626] mt-0.5 shrink-0" />
                  <span>
                    <strong>Stay away from windows</strong>, shelves, and anything that
                    could fall on you
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <BadgeAlert className="w-4 h-4 text-[#DC2626] mt-0.5 shrink-0" />
                  <span>
                    <strong>In a medina</strong>, move to an open space like a plaza or
                    courtyard if possible -- old unreinforced buildings are at highest risk
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <BadgeAlert className="w-4 h-4 text-[#DC2626] mt-0.5 shrink-0" />
                  <span>
                    <strong>If outdoors</strong>, move away from buildings, power lines,
                    and street lights
                  </span>
                </div>
              </div>

              <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                After an earthquake:
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <Info className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                  <span>
                    Expect aftershocks -- stay in open areas for at least 30 minutes
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <Info className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                  <span>
                    Check for injuries and help others if safe to do so
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <Info className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                  <span>
                    Contact your embassy and family to report your status
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <Info className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                  <span>
                    Follow local authorities&apos; instructions and monitor news
                  </span>
                </div>
              </div>
            </div>

            {/* Flash Floods */}
            <div className="bg-[#FAF8F5] border border-[#EDE8E0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-[#2563EB]/10 text-[#2563EB] p-3 rounded-xl">
                  <Umbrella className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                  Flash Floods
                </h3>
              </div>

              <p className="text-[#1A1814]/70 mb-4">
                Flash floods are a genuine danger in Morocco, particularly in the Atlas
                Mountains, desert wadis (dry riverbeds), and gorge areas like Todra and
                Dades. The rainy season (October through March) brings the highest risk.
                Dry riverbeds can transform into raging torrents within minutes after
                rainfall, even if it is raining far upstream.
              </p>

              <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                Flash flood safety:
              </h4>
              <div className="space-y-2 mb-5">
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <BadgeAlert className="w-4 h-4 text-[#EA580C] mt-0.5 shrink-0" />
                  <span>
                    <strong>Never camp in dry riverbeds</strong> (wadis/oueds), no matter
                    how dry they appear
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <BadgeAlert className="w-4 h-4 text-[#EA580C] mt-0.5 shrink-0" />
                  <span>
                    <strong>Check weather forecasts</strong> before Atlas trekking or
                    desert excursions, even if your area is sunny
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <BadgeAlert className="w-4 h-4 text-[#EA580C] mt-0.5 shrink-0" />
                  <span>
                    <strong>Move to higher ground immediately</strong> if you hear
                    rushing water or notice water levels rising
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <BadgeAlert className="w-4 h-4 text-[#EA580C] mt-0.5 shrink-0" />
                  <span>
                    <strong>Do not cross flooded roads</strong> -- even 30cm of moving
                    water can knock you down; 60cm can sweep away a vehicle
                  </span>
                </div>
              </div>

              <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                High-risk areas:
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <MapPin className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                  <span>
                    <strong>Todra & Dades Gorges</strong> -- narrow canyon walls
                    amplify flood danger
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <MapPin className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                  <span>
                    <strong>Ouarzazate & Draa Valley</strong> -- desert wadis flood
                    rapidly after upstream rain
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <MapPin className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                  <span>
                    <strong>High Atlas passes</strong> -- Tizi n&apos;Tichka and
                    Tizi n&apos;Test roads close during heavy rains
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                  <MapPin className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                  <span>
                    <strong>Sahara edge towns</strong> -- Merzouga and Zagora areas
                    experience seasonal flash flooding
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8 - CRIME & SAFETY
          ============================================================ */}
      <section className="py-14 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
              <Shield className="w-4 h-4" />
              Crime & Personal Safety
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              What to Do If Something Goes Wrong
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Morocco is generally safe for tourists, but petty crime exists in any
              travel destination. Knowing the right steps protects you and speeds
              recovery.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* If You Are Robbed */}
            <div className="bg-white border border-[#EDE8E0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#DC2626]/10 text-[#DC2626] p-3 rounded-xl">
                  <BadgeAlert className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  If You Are Robbed
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[#1A1814]/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold mt-0.5 shrink-0">1.</span>
                  <span>
                    <strong>Do not resist</strong> -- your safety is more important than
                    your belongings. Hand over what is demanded.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold mt-0.5 shrink-0">2.</span>
                  <span>
                    <strong>Move to a safe, public location</strong> immediately after
                    and call police (19) or tourist police.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold mt-0.5 shrink-0">3.</span>
                  <span>
                    <strong>File a police report</strong> (proces-verbal) at the nearest
                    commissariat. Essential for insurance claims.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold mt-0.5 shrink-0">4.</span>
                  <span>
                    <strong>Block stolen cards immediately</strong> by calling your bank
                    and the card network emergency line.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold mt-0.5 shrink-0">5.</span>
                  <span>
                    <strong>Contact your embassy</strong> if your passport was taken, and
                    your travel insurance provider for next steps.
                  </span>
                </div>
              </div>
            </div>

            {/* Filing a Police Report */}
            <div className="bg-white border border-[#EDE8E0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#2563EB]/10 text-[#2563EB] p-3 rounded-xl">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  Filing a Police Report
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[#1A1814]/70">
                <p>
                  The <strong>proces-verbal</strong> is Morocco&apos;s official police report.
                  You need it for insurance claims, embassy assistance, and card replacements.
                </p>
                <div className="bg-[#FAF8F5] border border-[#EDE8E0] rounded-lg p-3">
                  <h4 className="font-semibold text-[#1A1814] mb-2">What to bring:</h4>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-[#2563EB] shrink-0" />
                      Passport or photocopy
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-[#2563EB] shrink-0" />
                      Details of what happened (time, location, description)
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-[#2563EB] shrink-0" />
                      List of stolen items with approximate values
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-[#2563EB] shrink-0" />
                      Any photos or evidence
                    </li>
                    <li className="flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-[#2563EB] shrink-0" />
                      Witness information if available
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-[#1A1814]/50">
                  The report is free and typically takes 30-60 minutes. Request multiple
                  copies -- you will need them for insurance and embassy visits.
                </p>
              </div>
            </div>

            {/* Tourist Police */}
            <div className="bg-white border border-[#EDE8E0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#A0522D]/10 text-[#A0522D] p-3 rounded-xl">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  Tourist Police (Brigade Touristique)
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[#1A1814]/70">
                <p>
                  Morocco&apos;s dedicated tourist police operate in major tourist cities.
                  They are specifically trained to assist foreign visitors and often
                  speak French and some English.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#A0522D] shrink-0" />
                    <span><strong>Marrakech</strong> -- Jemaa el-Fnaa area and medina entrances</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#A0522D] shrink-0" />
                    <span><strong>Fes</strong> -- Bab Bou Jeloud and Fes el-Bali</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#A0522D] shrink-0" />
                    <span><strong>Casablanca</strong> -- Hassan II Mosque area and downtown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#A0522D] shrink-0" />
                    <span><strong>Tangier</strong> -- Port and medina areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#A0522D] shrink-0" />
                    <span><strong>Agadir</strong> -- Beach and tourist district</span>
                  </div>
                </div>
                <p className="text-xs text-[#1A1814]/50 mt-2">
                  Tourist police can help with scam situations, harassment, language barriers,
                  and connecting you with the right authorities. They are generally helpful
                  and tourist-friendly.
                </p>
              </div>
            </div>
          </div>

          {/* Prevention tips */}
          <div className="mt-10 bg-white border border-[#EDE8E0] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <Shield className="w-5 h-5 text-[#A0522D]" />
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                Crime Prevention Tips
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  tip: 'Keep valuables in your hotel safe and carry only what you need for the day',
                  icon: <Lock className="w-4 h-4" />,
                },
                {
                  tip: 'Use a cross-body bag or hidden money belt in crowded areas like medinas and souks',
                  icon: <Shield className="w-4 h-4" />,
                },
                {
                  tip: 'Avoid displaying expensive jewelry, electronics, or large amounts of cash',
                  icon: <AlertTriangle className="w-4 h-4" />,
                },
                {
                  tip: 'Be cautious of overly friendly strangers leading you to shops or isolated areas',
                  icon: <Info className="w-4 h-4" />,
                },
                {
                  tip: 'Stick to well-lit, busy streets at night. Ask your hotel about safe walking routes',
                  icon: <Navigation className="w-4 h-4" />,
                },
                {
                  tip: 'Use official taxis (petit taxi/grand taxi) and insist on the meter or agree on a price beforehand',
                  icon: <Car className="w-4 h-4" />,
                },
              ].map((item) => (
                <div
                  key={item.tip}
                  className="flex items-start gap-3 text-sm text-[#1A1814]/70"
                >
                  <div className="text-[#A0522D] mt-0.5 shrink-0">
                    {item.icon}
                  </div>
                  <span>{item.tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9 - TRAVEL INSURANCE
          ============================================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-semibold uppercase tracking-wider mb-3">
              <Heart className="w-4 h-4" />
              Travel Insurance
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Why Travel Insurance Is Essential
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              While Morocco has affordable healthcare compared to many Western countries,
              an unexpected hospital stay or medical evacuation without insurance can
              cost a life-changing amount of money.
            </p>
          </div>

          {/* Insurance checklist */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FAF8F5] border border-[#EDE8E0] rounded-2xl overflow-hidden">
              <div className="bg-[#2563EB] px-6 py-4">
                <h3 className="text-white font-[family-name:var(--font-display)] font-bold text-lg">
                  What Your Policy Should Cover
                </h3>
              </div>
              <div className="divide-y divide-[#EDE8E0]">
                {insuranceChecklist.map((item) => (
                  <div
                    key={item.coverage}
                    className="px-6 py-4 grid gap-2 md:grid-cols-3 md:gap-4 items-start"
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span className="font-[family-name:var(--font-heading)] font-semibold text-[#1A1814] text-sm">
                        {item.coverage}
                      </span>
                    </div>
                    <p className="text-sm text-[#1A1814]/60">{item.why}</p>
                    <p className="text-sm text-[#2563EB] font-semibold">
                      {item.minRecommended}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Claim process */}
          <div className="mt-10 max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
            <div className="bg-[#FAF8F5] border border-[#EDE8E0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-[#A0522D]" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  How to Make a Claim
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[#1A1814]/70">
                <div className="flex items-start gap-2">
                  <span className="text-[#A0522D] font-bold shrink-0">1.</span>
                  <span>
                    Contact your insurer as soon as possible -- most require notification
                    within 24-48 hours of an incident
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#A0522D] font-bold shrink-0">2.</span>
                  <span>
                    Collect all documentation: police reports, medical receipts, pharmacy
                    bills, photos of damage or injuries
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#A0522D] font-bold shrink-0">3.</span>
                  <span>
                    Keep originals of everything -- insurers typically require original
                    receipts, not copies
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#A0522D] font-bold shrink-0">4.</span>
                  <span>
                    Submit your claim with the completed form, all documentation, and
                    proof of expenses within the deadline (usually 30-90 days)
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F5] border border-[#EDE8E0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-[#A0522D]" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                  Before You Travel: Insurance Checklist
                </h3>
              </div>
              <div className="space-y-2 text-sm text-[#1A1814]/70">
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <span>
                    Save your policy number and insurer&apos;s 24/7 emergency number in your phone
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <span>
                    Print a copy of your policy summary to carry with you
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <span>
                    Check if adventure activities (trekking, quad biking) are covered
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <span>
                    Verify your excess/deductible amount -- can you afford it if needed?
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <span>
                    Check if pre-existing conditions are covered
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                  <span>
                    Know whether your insurer pays hospitals directly or you pay and claim later
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 10 - EMERGENCY DARIJA / FRENCH PHRASES
          ============================================================ */}
      <section className="py-14 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4" />
              Emergency Language Guide
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Essential Darija & French Phrases
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              In an emergency, being able to communicate basic needs in the local
              language can make all the difference. Save these phrases or screenshot
              this section.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-[#EDE8E0] rounded-2xl overflow-hidden">
              {/* Table header */}
              <div className="bg-[#A0522D] px-6 py-3 grid grid-cols-4 gap-4 text-sm font-bold text-white">
                <span>English</span>
                <span>Darija (Moroccan Arabic)</span>
                <span>French</span>
                <span>Pronunciation</span>
              </div>

              {/* Table rows */}
              <div className="divide-y divide-[#EDE8E0]">
                {emergencyPhrases.map((phrase) => (
                  <div
                    key={phrase.english}
                    className="px-6 py-3.5 grid grid-cols-4 gap-4 text-sm items-center hover:bg-[#FAF8F5] transition-colors"
                  >
                    <div>
                      <span className="font-semibold text-[#1A1814]">
                        {phrase.english}
                      </span>
                      <p className="text-[10px] text-[#1A1814]/40 mt-0.5">
                        {phrase.context}
                      </p>
                    </div>
                    <span className="text-[#1A1814]/70 text-right" dir="rtl">
                      {phrase.darija}
                    </span>
                    <span className="text-[#1A1814]/70">{phrase.french}</span>
                    <span className="text-[#A0522D] font-medium italic">
                      {phrase.pronunciation}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-amber-900 mb-2">
                    Communication Tips in an Emergency
                  </h3>
                  <div className="space-y-1.5 text-sm text-amber-800/80">
                    <p>
                      French is the most reliable second language in Morocco. Most police,
                      doctors, and hotel staff speak French fluently.
                    </p>
                    <p>
                      In tourist areas, many people speak basic English, Spanish (in the north),
                      or German (in Agadir).
                    </p>
                    <p>
                      If language is a complete barrier, go to the nearest hotel or restaurant
                      -- staff can translate and help you contact authorities.
                    </p>
                    <p>
                      Google Translate&apos;s camera feature can translate signs and documents
                      in real time using your phone camera.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 11 - USEFUL APPS
          ============================================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-semibold uppercase tracking-wider mb-3">
              <Globe className="w-4 h-4" />
              Essential Apps & Tools
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Apps to Download Before Your Trip
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              These apps work offline or on limited connectivity and can be invaluable
              in an emergency. Download them before you leave home.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {usefulApps.map((app) => (
              <div
                key={app.name}
                className="bg-[#FAF8F5] border border-[#EDE8E0] rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#2563EB]/10 text-[#2563EB] p-2.5 rounded-xl">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-sm">
                      {app.name}
                    </h3>
                    <p className="text-xs text-[#2563EB] font-medium">
                      {app.purpose}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  {app.details}
                </p>
              </div>
            ))}
          </div>

          {/* SIM Card info */}
          <div className="mt-10 bg-[#FAF8F5] border border-[#EDE8E0] rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#A0522D] mt-0.5 shrink-0" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                  Get a Moroccan SIM Card
                </h3>
                <p className="text-sm text-[#1A1814]/70 mb-3">
                  A local SIM card with data is highly recommended for emergency situations.
                  Available at the airport and in every city for around 30-50 MAD (about $3-5)
                  with a data package.
                </p>
                <div className="grid gap-3 sm:grid-cols-3 text-sm">
                  <div className="bg-white border border-[#EDE8E0] rounded-lg p-3">
                    <h4 className="font-semibold text-[#1A1814] mb-1">Maroc Telecom</h4>
                    <p className="text-xs text-[#1A1814]/60">
                      Best coverage nationwide, including rural and desert areas
                    </p>
                  </div>
                  <div className="bg-white border border-[#EDE8E0] rounded-lg p-3">
                    <h4 className="font-semibold text-[#1A1814] mb-1">Orange Morocco</h4>
                    <p className="text-xs text-[#1A1814]/60">
                      Good coverage in cities, competitive data packages
                    </p>
                  </div>
                  <div className="bg-white border border-[#EDE8E0] rounded-lg p-3">
                    <h4 className="font-semibold text-[#1A1814] mb-1">inwi</h4>
                    <p className="text-xs text-[#1A1814]/60">
                      Affordable option with good city coverage, popular with travelers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 12 - FAQ
          ============================================================ */}
      <section className="py-14 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
              <Info className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Emergency FAQs for Morocco
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Answers to the most common questions about emergencies, safety, and
              getting help as a traveler in Morocco.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#EDE8E0] rounded-2xl overflow-hidden"
              >
                <div className="px-6 py-4">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] flex items-start gap-3">
                    <span className="bg-[#A0522D]/10 text-[#A0522D] text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{item.question}</span>
                  </h3>
                  <div className="ml-10 mt-3">
                    <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 13 - QUICK REFERENCE CARD
          ============================================================ */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-red-900 to-[#1A1814]">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
              Quick Reference Card
            </h2>
            <p className="text-white/70 max-w-xl mx-auto font-[family-name:var(--font-heading)]">
              Screenshot this section for instant access to the most critical numbers
              and information.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-red-300 font-bold text-sm uppercase tracking-wider mb-3">
                  Emergency Numbers
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Police (City)</span>
                    <span className="font-bold text-lg">19</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Gendarmerie (Rural)</span>
                    <span className="font-bold text-lg">177</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Fire / Ambulance</span>
                    <span className="font-bold text-lg">15</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Mobile SOS</span>
                    <span className="font-bold text-lg">112</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-red-300 font-bold text-sm uppercase tracking-wider mb-3">
                  Key Phrases
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Help!</span>
                    <span className="font-medium italic">Aw-noo-nee!</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Call police</span>
                    <span className="font-medium italic">Ay-too lil-boo-lees</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">I need a doctor</span>
                    <span className="font-medium italic">Bghit tbib</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Hospital?</span>
                    <span className="font-medium italic">Feen es-sbi-tar?</span>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 border-t border-white/20 pt-4 mt-2">
                <h3 className="text-red-300 font-bold text-sm uppercase tracking-wider mb-3">
                  Card Emergency Lines
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Visa</span>
                    <span className="font-semibold">+1-303-967-1096</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Mastercard</span>
                    <span className="font-semibold">+1-636-722-7111</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA links */}
          <div className="mt-10 text-center">
            <p className="text-white/70 mb-6 font-[family-name:var(--font-heading)]">
              Stay safe, travel smart, and enjoy your Moroccan adventure with confidence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/safety"
                className="inline-flex items-center gap-2 bg-white text-[#1A1814] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                <Shield className="w-4 h-4" />
                Safety Guide
              </Link>
              <Link
                href="/health"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Heart className="w-4 h-4" />
                Health Guide
              </Link>
              <Link
                href="/sim-card"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                SIM Card Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 14 - EXPLORE MORE
          ============================================================ */}
      <ExploreMore
        currentCategory="planning"
        currentHref="/emergency"
        title="Continue Exploring Morocco"
      />
    </>
  );
}

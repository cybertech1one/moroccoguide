import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Users,
  MapPin,
  DollarSign,
  Building2,
  Heart,
  Shield,
  Sun,
  ArrowRight,
  CheckCircle,
  Globe,
  FileText,
  Clock,
  Star,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Landmark,
  Wallet,
  Languages,
  Scale,
  Coffee,
  Wifi,
  ShoppingBag,
  HandCoins,
  BookOpen,
  Lightbulb,
  TreePine,
  Phone,
  Banknote,
  CircleDot,
  Handshake,
  Utensils,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Living in Morocco: Expat & Long-Term Stay Guide | CityGuide.ma',
  description:
    'The definitive guide to living in Morocco as an expat. Cost of living breakdown (rent, food, healthcare), Carte de Sejour residency permit process, best cities for expats (Marrakech, Rabat, Casablanca, Essaouira, Tangier), banking, schools, housing, tax, and building a life in Morocco.',
  keywords: [
    'living in morocco',
    'morocco expat guide',
    'move to morocco',
    'carte de sejour morocco',
    'morocco residency permit',
    'cost of living morocco',
    'morocco housing',
    'morocco healthcare expat',
    'international schools morocco',
    'retire in morocco',
    'morocco banking expat',
    'morocco tax',
    'expat community morocco',
    'start business morocco',
    'marrakech expat',
    'casablanca expat',
    'rabat expat',
    'tangier expat',
    'essaouira expat',
  ],
  openGraph: {
    title: 'Living in Morocco: Expat & Long-Term Stay Guide | CityGuide.ma',
    description:
      'Everything you need to know about relocating to Morocco. Cost of living, residency permits, housing, healthcare, schools, banking, taxes, and community for expats and long-term residents.',
    url: 'https://cityguide.ma/expat-guide',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1545041028-4e0b97fba9ee?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Expat life in Morocco - a sunlit riad courtyard in Marrakech',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  name: 'Living in Morocco: Expat & Long-Term Stay Guide',
  description:
    'A comprehensive guide for expats and long-term residents considering Morocco, covering cost of living, residency permits, housing, healthcare, education, banking, taxes, and lifestyle.',
  url: 'https://cityguide.ma/expat-guide',
  publisher: {
    '@type': 'Organization',
    name: 'CityGuide.ma',
    url: 'https://cityguide.ma',
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

/* ─── Why Expats Choose Morocco ─── */

const whyMorocco = [
  {
    icon: 'DollarSign',
    title: 'Exceptional Value',
    description:
      'A comfortable lifestyle for $1,200-2,000/month including rent, food, and entertainment. Luxury experiences at a fraction of European or North American prices.',
  },
  {
    icon: 'Sun',
    title: 'Year-Round Sunshine',
    description:
      'Over 300 sunny days per year in most regions. Mild winters on the coast (15-20C), warm springs and autumns, and a Mediterranean climate in the north.',
  },
  {
    icon: 'Globe',
    title: 'Strategic Location',
    description:
      'Three hours from major European capitals. GMT+1 timezone year-round. International flights from six major airports to dozens of global destinations.',
  },
  {
    icon: 'Heart',
    title: 'Rich Culture & Heritage',
    description:
      'Thousand-year-old medinas, world-class cuisine, vibrant arts scene, and legendary hospitality. Morocco offers deep cultural immersion without complete culture shock.',
  },
  {
    icon: 'Shield',
    title: 'Safety & Stability',
    description:
      'One of the safest countries in Africa and the Arab world. Stable constitutional monarchy with a growing economy and strong tourism infrastructure.',
  },
  {
    icon: 'TreePine',
    title: 'Diverse Landscapes',
    description:
      'Atlantic and Mediterranean coasts, the Atlas Mountains, Sahara desert, fertile valleys, and cedar forests. Four seasons of outdoor adventure within a single country.',
  },
];

/* ─── Cost of Living ─── */

const costOfLiving = [
  {
    category: 'Rent (1-bed, city center)',
    range: '3,000 - 8,000 MAD',
    usd: '$300 - $800',
    detail:
      'Medina apartments from 3,000 MAD. Modern Ville Nouvelle apartments 5,000-8,000 MAD. Furnished Airbnb-style: 6,000-12,000 MAD. Casablanca is the most expensive.',
  },
  {
    category: 'Rent (3-bed family, nice area)',
    range: '8,000 - 25,000 MAD',
    usd: '$800 - $2,500',
    detail:
      'Gueliz Marrakech: 8,000-15,000 MAD. Hay Riad Rabat: 10,000-18,000 MAD. Anfa Casablanca: 15,000-25,000 MAD. Villas in Marrakech Palmeraie: 20,000+ MAD.',
  },
  {
    category: 'Utilities (electricity, water, gas)',
    range: '500 - 1,500 MAD',
    usd: '$50 - $150',
    detail:
      'Lower in apartments, higher in villas. Summer AC increases electricity. Average 2-bed: 700-900 MAD. Includes water, electricity (LYDEC/RADEEMA), and bottled gas.',
  },
  {
    category: 'Internet (fiber broadband)',
    range: '200 - 500 MAD',
    usd: '$20 - $50',
    detail:
      'Maroc Telecom, Inwi, or Orange. Fiber available in most urban areas: 100 Mbps from 300 MAD/month. ADSL in older areas: 200 MAD/month.',
  },
  {
    category: 'Groceries',
    range: '2,000 - 5,000 MAD',
    usd: '$200 - $500',
    detail:
      'Local souks and Marjane/Carrefour. Fresh produce is excellent and cheap. Imported goods (cheese, wine, specialty items) are significantly more expensive.',
  },
  {
    category: 'Eating out',
    range: '1,500 - 4,000 MAD',
    usd: '$150 - $400',
    detail:
      'Street food: 15-30 MAD. Casual restaurant: 40-80 MAD. Mid-range dining: 100-200 MAD. Fine dining: 300-600 MAD. Daily eating out is very affordable.',
  },
  {
    category: 'Transport',
    range: '500 - 2,000 MAD',
    usd: '$50 - $200',
    detail:
      'Petit taxis: 10-30 MAD per ride. Fuel: 14-16 MAD/liter. Car ownership costs 3,000-5,000 MAD/month total. Trams in Rabat/Casablanca: 6-7 MAD per ride.',
  },
  {
    category: 'Healthcare (private insurance)',
    range: '5,000 - 12,000 MAD/year',
    usd: '$500 - $1,200/year',
    detail:
      'CNSS national insurance for employed. Private plans from Saham, AXA, or Allianz. International plans (Cigna Global, Allianz Care) for premium coverage: 15,000-30,000 MAD/year.',
  },
  {
    category: 'Domestic help',
    range: '2,000 - 4,000 MAD',
    usd: '$200 - $400',
    detail:
      'Full-time housekeeper/nanny: 2,500-4,000 MAD/month. Part-time cleaning (3x/week): 1,500-2,500 MAD. Very common among expats.',
  },
  {
    category: 'International school (per child)',
    range: '30,000 - 120,000 MAD/year',
    usd: '$3,000 - $12,000/year',
    detail:
      'French Mission schools: 30,000-50,000 MAD. American/British schools: 60,000-120,000 MAD. Spanish schools: 25,000-40,000 MAD. Waiting lists at top schools.',
  },
];

/* ─── Best Cities for Expats ─── */

const expatCities = [
  {
    name: 'Marrakech',
    tagline: 'The cultural capital of expat life',
    description:
      'Morocco\'s most popular expat destination combines ancient medina charm with modern amenities. The Gueliz and Hivernage neighborhoods offer European-style living, while the Palmeraie provides villa estates. A massive international community, excellent restaurants, and a thriving arts scene make integration relatively easy. The only downside: intense summer heat (40-45C in July-August).',
    population: '~15,000 expats',
    avgRent: '5,000 - 15,000 MAD',
    bestFor: 'Culture lovers, retirees, entrepreneurs, creatives',
    neighborhoods: [
      'Gueliz (modern, walkable, cafes and restaurants)',
      'Hivernage (upscale, near gardens, luxury hotels)',
      'Palmeraie (villas with pools, families, spacious)',
      'Medina / Riad District (traditional living, tourists, character)',
      'Targa (residential, quiet, local feel, good value)',
    ],
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800',
  },
  {
    name: 'Rabat',
    tagline: 'The calm, organized capital',
    description:
      'Morocco\'s administrative capital is the most Western-feeling city with clean streets, green spaces, a tram system, and a professional atmosphere. Home to embassies, international organizations, and government institutions. Excellent international schools and healthcare. The expat community is smaller but well-established and professional. A superb choice for families and those who value order and infrastructure.',
    population: '~8,000 expats',
    avgRent: '5,000 - 18,000 MAD',
    bestFor: 'Families, diplomats, professionals, those who value order',
    neighborhoods: [
      'Agdal (modern, university area, restaurants, tram access)',
      'Hay Riad (upscale residential, embassies, international schools)',
      'Hassan (central, historic, near government district)',
      'Souissi (diplomatic quarter, luxury villas, quiet)',
      'Kasbah des Oudaias (charming, historic, near ocean)',
    ],
    image: 'https://images.unsplash.com/photo-1570698473651-b2de99bae12f?q=80&w=800',
  },
  {
    name: 'Casablanca',
    tagline: 'The economic engine',
    description:
      'Morocco\'s largest city and business hub offers the most modern infrastructure, best internet, international dining, and a cosmopolitan lifestyle. The Casablanca Finance City zone attracts multinational companies. Cultural diversity, nightlife, and shopping are unmatched. However, it is also the most expensive, most congested, and least traditionally "Moroccan" of the major cities.',
    population: '~20,000 expats',
    avgRent: '6,000 - 25,000 MAD',
    bestFor: 'Business professionals, corporate transfers, cosmopolitan lifestyle',
    neighborhoods: [
      'Anfa (upscale, ocean views, fine dining, expatriate hub)',
      'Maarif (trendy, shopping, nightlife, central)',
      'Gauthier (modern, walkable, business district)',
      'Ain Diab (beachfront, luxury, resort feel)',
      'Bouskoura (suburban, green, family villas, golf)',
    ],
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
  },
  {
    name: 'Essaouira',
    tagline: 'The bohemian coastal escape',
    description:
      'A small, walkable, artistic city on the Atlantic coast. The medina is a UNESCO World Heritage site, flat and easy to navigate. Strong winds keep temperatures comfortable even in summer. A tight-knit international community of artists, writers, and retirees. Less infrastructure than larger cities, but the quality of life and pace of living are exceptionally appealing for those who prioritize tranquility.',
    population: '~3,000 expats',
    avgRent: '3,000 - 10,000 MAD',
    bestFor: 'Retirees, artists, writers, those seeking peaceful coastal life',
    neighborhoods: [
      'Medina (historic center, walkable, riad living)',
      'Diabat (village outskirts, quiet, rural feel)',
      'Ghazoua (newer area, modern apartments, local feel)',
      'Route de Marrakech (new developments, spacious)',
    ],
    image: 'https://images.unsplash.com/photo-1560437091-4383266ac31b?q=80&w=800',
  },
  {
    name: 'Tangier',
    tagline: 'The gateway between continents',
    description:
      'Tangier sits at the crossroads of Africa and Europe, just 35 minutes by ferry from Spain. A massive urban renewal over the past decade has transformed it into a modern, cosmopolitan city with a booming port, new marina, and growing tech sector. The international literary and artistic heritage (Paul Bowles, William Burroughs, Henri Matisse) continues to attract creative expats.',
    population: '~5,000 expats',
    avgRent: '4,000 - 14,000 MAD',
    bestFor: 'Entrepreneurs, Europe commuters, creatives, francophiles',
    neighborhoods: [
      'Ville Nouvelle (modern center, walkable, restaurants)',
      'Cap Spartel (ocean views, villas, prestigious)',
      'Malabata (waterfront, modern, new developments)',
      'Medina / Petit Socco (historic, atmospheric, bohemian)',
      'Boubana (suburban, family, green, good schools)',
    ],
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800',
  },
];

/* ─── Carte de Sejour Process ─── */

const carteDeSejourSteps = [
  {
    step: 1,
    title: 'Gather Required Documents',
    description:
      'Assemble your dossier before visiting the police station. Requirements differ slightly by city and by the type of residency (employment, family, retirement, business).',
    documents: [
      'Valid passport with entry stamp (minimum 6 months validity)',
      'Completed application form (available at the prefecture)',
      'Proof of accommodation (rental contract, notarized)',
      'Proof of financial means (bank statements, pension proof, or employment contract)',
      'Medical certificate from a Moroccan doctor',
      '12 passport-sized photos (white background)',
      'Criminal background check from home country (apostilled and translated)',
      'Proof of health insurance valid in Morocco',
    ],
  },
  {
    step: 2,
    title: 'Visit the Prefecture or Police Station',
    description:
      'Go to the Bureau des Etrangers (Foreigners Office) at the central police station or prefecture in your city. Arrive very early (7-8 AM) as queues can be long. Some cities (Rabat, Casablanca) have more organized systems than others.',
    documents: [],
  },
  {
    step: 3,
    title: 'Submit Your Application',
    description:
      'Present all documents. The officer will review them and may request additional paperwork. You will receive a receipt (recepisse) that serves as temporary proof of your application. This receipt is critical: it allows you to stay legally while your carte is being processed.',
    documents: [],
  },
  {
    step: 4,
    title: 'Wait for Processing',
    description:
      'Processing takes 2-6 months depending on the city and your application type. Marrakech and Casablanca tend to be faster. Smaller cities may take longer. You can follow up at the prefecture, but patience is essential. The recepisse covers you legally during this period.',
    documents: [],
  },
  {
    step: 5,
    title: 'Collect Your Carte de Sejour',
    description:
      'You will be notified (or can check periodically) when your card is ready. The initial carte is typically valid for 1 year. After three consecutive annual renewals, you can apply for a 10-year carte. Renewal requires similar documents but is generally faster and simpler.',
    documents: [],
  },
];

/* ─── Housing Guide ─── */

const housingGuide = [
  {
    title: 'Riad Living (Medina)',
    description:
      'Traditional Moroccan houses with central courtyards. Charming and atmospheric but can be noisy, have narrow access, and limited parking. Popular with retirees and those seeking authentic Moroccan living. Renovation projects are common among long-term expats.',
    priceRange: '3,000 - 12,000 MAD/month',
    pros: 'Unique character, central location, cultural immersion, often beautifully decorated',
    cons: 'Narrow streets (no car access), potential dampness, noise from neighbors, limited light in some rooms',
  },
  {
    title: 'Modern Apartment (Ville Nouvelle)',
    description:
      'Western-style apartments in modern neighborhoods. Elevators, parking, and proximity to supermarkets and restaurants. The most practical option for families and professionals. Found in Gueliz (Marrakech), Agdal (Rabat), Maarif (Casablanca).',
    priceRange: '4,000 - 15,000 MAD/month',
    pros: 'Modern amenities, elevator, parking, familiar layout, often furnished for expats',
    cons: 'Less character, can be expensive in prime areas, some buildings poorly maintained',
  },
  {
    title: 'Villa with Garden/Pool',
    description:
      'Detached houses with outdoor space, common in Marrakech Palmeraie, Bouskoura (Casablanca), Souissi (Rabat), and Cap Spartel (Tangier). Ideal for families with children. Often come with gardens, pools, and staff quarters.',
    priceRange: '12,000 - 30,000+ MAD/month',
    pros: 'Space, privacy, pool, garden, suitable for families with children and pets',
    cons: 'Higher utilities and maintenance, need for gardener/pool maintenance, may require car',
  },
  {
    title: 'Shared Housing',
    description:
      'Sharing a larger apartment or villa with other expats. Common among younger professionals and newcomers testing the waters. Facebook groups and expat forums are the best resources for finding roommates.',
    priceRange: '1,500 - 4,000 MAD/month',
    pros: 'Affordable, instant social network, shared costs, flexible commitment',
    cons: 'Less privacy, shared spaces, potential personality conflicts',
  },
];

/* ─── Rental Platforms ─── */

const rentalPlatforms = [
  { name: 'Avito.ma', type: 'Local classifieds (Morocco\'s Craigslist)', note: 'Best for unfurnished long-term rentals. Listings in French/Arabic. Use Google Translate.' },
  { name: 'Mubawab.ma', type: 'Real estate portal', note: 'Curated listings with photos. More professional than Avito. Good for apartments and villas.' },
  { name: 'Facebook Groups', type: 'Expat housing groups', note: 'Search "Expats [City Name] Housing." Very active. Beware of scams: never send money before visiting.' },
  { name: 'Local Real Estate Agents', type: 'Simsar (agent/broker)', note: 'Traditional method. Agent fee: 1 month rent. Useful for non-French speakers. Ask for references.' },
  { name: 'Airbnb / Booking.com', type: 'Short-term furnished', note: 'Good for first 1-3 months while apartment hunting. Negotiate monthly rates directly with hosts.' },
];

/* ─── Banking ─── */

const bankingInfo = [
  {
    title: 'Opening a Bank Account',
    description:
      'Expats with a Carte de Sejour (or recepisse) can open a Moroccan bank account. Required documents: passport, Carte de Sejour or recepisse, proof of address, proof of income. Major banks: Attijariwafa Bank, BMCE Bank of Africa, CIH Bank, Societe Generale Maroc. The process takes 1-3 days. CIH Bank is generally considered the most expat-friendly.',
  },
  {
    title: 'Convertible vs Non-Convertible Accounts',
    description:
      'The Moroccan dirham (MAD) is a controlled currency. As a foreign resident, you can open a "compte en dirhams convertibles" which allows you to transfer funds in and out more easily. This is essential for expats who receive income from abroad. Bring your employment contract or pension proof to qualify.',
  },
  {
    title: 'Transferring Money',
    description:
      'Wise (TransferWise) is the most popular option among expats for sending money to Morocco (competitive rates, 1-2 business days). Western Union and MoneyGram have extensive networks. Bank wire transfers work but are slower (3-5 days) and more expensive. Currency exchange offices (bureaux de change) offer reasonable rates for cash.',
  },
  {
    title: 'Daily Banking',
    description:
      'ATMs are plentiful in all cities. International cards (Visa, Mastercard) are widely accepted in modern establishments. Many traditional restaurants, souks, and taxis are cash-only. Mobile banking apps from major Moroccan banks are reliable. Consider keeping accounts in both Morocco and your home country.',
  },
];

/* ─── Healthcare ─── */

const healthcareInfo = [
  {
    title: 'Public Healthcare (CNSS/AMO)',
    description:
      'Morocco\'s public health system provides basic coverage through CNSS (for employed) and AMO (general coverage). Public hospitals exist in every city but quality varies significantly. Major public hospitals in Casablanca and Rabat have good specialist departments. Wait times can be long.',
  },
  {
    title: 'Private Healthcare',
    description:
      'Most expats use private clinics and hospitals. Quality in major cities (Casablanca, Rabat, Marrakech) is excellent with many French-trained doctors. A private doctor consultation: 200-500 MAD ($20-50). Private hospital stay: 2,000-5,000 MAD/day. Dental care is high quality and very affordable (cleaning: 300-500 MAD, crown: 2,000-4,000 MAD).',
  },
  {
    title: 'Private Health Insurance',
    description:
      'Local plans from Saham Assurance, AXA Morocco, or Allianz Morocco: 5,000-12,000 MAD/year for comprehensive coverage. International plans (Cigna Global, Allianz Care, Bupa Global): 15,000-30,000 MAD/year. Essential for expats, especially for hospital stays and specialist treatments.',
  },
  {
    title: 'Pharmacies',
    description:
      'Pharmacies are everywhere and pharmacists are well-trained (many French-educated). Many medications available without prescription at low prices. Look for green cross signs. Night pharmacies (pharmacie de garde) operate on rotation in every city. Most pharmacists speak French fluently.',
  },
];

/* ─── Education Options ─── */

const educationOptions = [
  {
    system: 'French Mission Schools (AEFE)',
    description:
      'The most established international school system in Morocco. French curriculum with bilingual options. Lycee Descartes (Rabat), Lycee Victor Hugo (Marrakech), Groupe Scolaire La Residence (Casablanca) are among the most prestigious. Globally recognized baccalaureat diploma.',
    cost: '30,000 - 50,000 MAD/year',
    language: 'French (primary), Arabic, English',
    cities: 'All major cities',
  },
  {
    system: 'American Schools',
    description:
      'American curriculum schools following US standards. American School of Marrakech, Casablanca American School, and Rabat American School are well-regarded. IB program available at some. Strong English-language environment.',
    cost: '60,000 - 120,000 MAD/year',
    language: 'English (primary), French, Arabic',
    cities: 'Casablanca, Rabat, Marrakech, Tangier',
  },
  {
    system: 'British Schools',
    description:
      'British curriculum following IGCSE and A-Level programs. British International School of Casablanca and similar institutions in other cities. Smaller class sizes and strong pastoral care.',
    cost: '50,000 - 100,000 MAD/year',
    language: 'English (primary), French, Arabic',
    cities: 'Casablanca, Rabat, Marrakech',
  },
  {
    system: 'Spanish Schools',
    description:
      'Spanish government-supported schools, particularly strong in northern Morocco (Tangier, Tetouan, Nador). Instituto Espanol and Colegio Espanol provide Spanish curriculum. Most affordable international option.',
    cost: '25,000 - 40,000 MAD/year',
    language: 'Spanish (primary), French, Arabic',
    cities: 'Tangier, Tetouan, Nador, Rabat, Casablanca',
  },
];

/* ─── Language Guide ─── */

const languageGuide = [
  {
    language: 'French',
    importance: 'Essential',
    description:
      'The language of business, administration, and educated conversation. All government forms, contracts, and legal documents are in French or Arabic. Most professionals and service providers speak French fluently. Without basic French, daily life will be significantly more challenging. Invest in French before or shortly after arrival.',
  },
  {
    language: 'Moroccan Arabic (Darija)',
    importance: 'Very Helpful',
    description:
      'The everyday language of Moroccans. Distinct from Modern Standard Arabic (MSA) and largely unintelligible to speakers of Gulf or Levantine Arabic. Learning Darija earns enormous respect and opens doors to deeper relationships and better prices. Many expats take lessons from local tutors (100-200 MAD/hour).',
  },
  {
    language: 'Modern Standard Arabic (MSA)',
    importance: 'Helpful',
    description:
      'Used in formal settings, news media, and official documents. Understanding MSA helps with reading signs, documents, and following news. However, Moroccans do not speak MSA in daily conversation. If choosing between MSA and Darija, Darija is more practical for daily life.',
  },
  {
    language: 'Amazigh (Berber)',
    importance: 'Regional',
    description:
      'Morocco\'s indigenous language, spoken by roughly 40% of the population. Three main dialects: Tashelhit (south), Tamazight (central Atlas), and Tarifit (Rif region). Recognized as an official language since 2011. Learning basics is appreciated in Berber-speaking areas.',
  },
  {
    language: 'English',
    importance: 'Growing',
    description:
      'Increasingly common among younger Moroccans, especially in tourism, tech, and international business. However, relying solely on English will limit your daily interactions, especially outside tourist areas. English is not sufficient for bureaucratic or legal matters.',
  },
];

/* ─── Tax Considerations ─── */

const taxInfo = [
  {
    title: 'Tax Residency',
    description:
      'You become a Moroccan tax resident if you spend 183 or more days in Morocco within a calendar year, or if Morocco is your center of economic or vital interests. Tax residents are subject to tax on worldwide income.',
  },
  {
    title: 'Income Tax (IR)',
    description:
      'Progressive rates from 0% to 38%. Annual income up to 30,000 MAD: 0%. 30,001-50,000 MAD: 10%. 50,001-60,000 MAD: 20%. 60,001-80,000 MAD: 30%. 80,001-180,000 MAD: 34%. Above 180,000 MAD: 38%. Pension income has favorable rates.',
  },
  {
    title: 'Double Taxation Treaties',
    description:
      'Morocco has tax treaties with over 50 countries including the US, UK, France, Germany, Spain, Canada, and most EU nations. These treaties prevent being taxed twice on the same income. Consult a tax professional to optimize your situation.',
  },
  {
    title: 'Property Tax',
    description:
      'Property owners pay annual urban tax (taxe d\'habitation) and services tax (taxe de services communaux). Rates are relatively low. New properties may be exempt for the first 5 years. Rental income is taxed at progressive rates.',
  },
];

/* ─── Starting a Business ─── */

const businessInfo = [
  {
    title: 'Business Structures',
    description:
      'Most common: SARL (LLC equivalent, minimum capital 10,000 MAD, 1-50 shareholders), SA (corporation, minimum capital 300,000 MAD, 5+ shareholders), and Auto-Entrepreneur (simplified sole proprietor, annual revenue under 500,000 MAD for services). The SARL is the most popular choice for expat entrepreneurs.',
  },
  {
    title: 'Registration Process',
    description:
      'Register at the Centre Regional d\'Investissement (CRI): 1-2 weeks. Required: articles of incorporation, proof of registered office, capital deposit certificate, ID documents. The CRI offers a single window for all steps. Casablanca and Tangier have the most efficient CRI offices.',
  },
  {
    title: 'Key Sectors for Expats',
    description:
      'Tourism and hospitality (riads, tours, restaurants), real estate (renovation, rental management), consulting, IT and tech services, import/export, education (language schools, tutoring), agriculture (argan, saffron), and creative industries. Morocco actively encourages foreign investment in several priority sectors.',
  },
  {
    title: 'Challenges to Expect',
    description:
      'Bureaucracy and paperwork (patience required), finding reliable local partners, navigating labor laws, language barriers in official dealings (French is essential), and understanding local business culture. Having a trusted Moroccan lawyer and accountant is non-negotiable.',
  },
];

/* ─── Cultural Adjustment ─── */

const culturalTips = [
  {
    title: 'Relationships Are Everything',
    description:
      'Morocco runs on personal connections. Take time to build relationships before expecting results in business or bureaucracy. Accept tea invitations. Show genuine interest in people. Your network will determine your success.',
  },
  {
    title: 'Pace of Life',
    description:
      'Things move at a different speed. Government offices, repairs, and deliveries rarely happen on the first promised date. "Inshallah" (God willing) is not a confirmation. Adapt your expectations and build buffer time into everything.',
  },
  {
    title: 'Ramadan',
    description:
      'The holy month affects daily life significantly. Restaurants close during the day, business hours shift, and the pace changes. As a non-Muslim, you are not expected to fast, but eating, drinking, and smoking in public during daylight hours is disrespectful. It is also a beautiful cultural experience.',
  },
  {
    title: 'Dress Code',
    description:
      'Morocco is relatively liberal by regional standards, but modesty is appreciated, especially outside tourist areas. Women may want to cover shoulders and knees in more traditional neighborhoods. Men should avoid sleeveless tops in non-tourist areas. Beachwear is for the beach only.',
  },
  {
    title: 'Hospitality Culture',
    description:
      'Moroccans are extraordinarily generous hosts. You will be invited to meals, offered tea, and treated with warmth. Reciprocate: bring gifts when visiting homes (pastries, fruit, flowers). Accept hospitality graciously even if you do not need it.',
  },
  {
    title: 'Bargaining',
    description:
      'Negotiation is expected in souks and with some service providers. Start at 40-50% of the asking price and work toward a mutually agreeable number. Fixed-price shops (Marjane, Carrefour, chain restaurants) do not negotiate. Learn to enjoy the process.',
  },
];

/* ─── Internet & Connectivity ─── */

const connectivityInfo = [
  {
    provider: 'Maroc Telecom (IAM)',
    type: 'Fiber / ADSL / 4G-5G',
    description:
      'Morocco\'s largest operator with the widest coverage. Fiber available in most urban areas (up to 200 Mbps). Best rural coverage for mobile data. Most reliable overall.',
  },
  {
    provider: 'Inwi',
    type: 'Fiber / 4G-5G',
    description:
      'Strong competitor with competitive pricing. Excellent 4G coverage in cities. Growing fiber network. Popular among younger users. Good customer service in French and Arabic.',
  },
  {
    provider: 'Orange Morocco',
    type: 'Fiber / 4G',
    description:
      'Third operator with reasonable coverage. Often has promotional pricing. 4G in major cities. Less rural coverage than Maroc Telecom but competitive in urban areas.',
  },
];

/* ─── Retirement in Morocco ─── */

const retirementBenefits = [
  'Pension income taxed at favorable rates (up to 80% reduction for foreign pensions)',
  'Extremely affordable healthcare (private doctor visit: $20-50)',
  'Domestic help (full-time: $200-400/month) enables comfortable aging',
  'Year-round mild climate (coastal cities: 15-28C)',
  'Rich cultural life and endless exploration opportunities',
  'Growing international retiree community (especially Marrakech, Essaouira)',
  'Direct flights to Europe for family visits (3 hours to Paris, London)',
  'High quality of life at a fraction of Western costs',
  'Safe and stable country with excellent hospitality culture',
  'Property prices 50-80% lower than comparable locations in Southern Europe',
];

/* ─── Shopping & Daily Life ─── */

const shoppingGuide = [
  {
    type: 'Supermarkets',
    examples: 'Marjane, Carrefour, Acima, Label\'Vie, BIM',
    description:
      'Modern supermarkets in all cities. Marjane is the largest Moroccan chain. Carrefour has the widest imported product selection. BIM (Turkish chain) offers budget basics. Open 7 days a week, typically 9 AM to 10 PM.',
  },
  {
    type: 'Souks & Markets',
    examples: 'Weekly souks, medina shops, vegetable markets',
    description:
      'Fresh produce, meat, fish, spices, and household goods at the best prices. Weekly souks in every neighborhood. The medina has everything from spices to leather goods. Cash only. Arrive early for the best selection.',
  },
  {
    type: 'Malls & Shopping Centers',
    examples: 'Morocco Mall (Casa), Menara Mall (Marrakech), Mega Mall (Rabat)',
    description:
      'Modern shopping malls with international brands (Zara, H&M, IKEA), food courts, cinemas, and entertainment. Morocco Mall in Casablanca is the largest in Africa. Prices for international brands are similar to or slightly higher than Europe.',
  },
  {
    type: 'Online Shopping',
    examples: 'Jumia.ma, Avito.ma, Amazon (via forwarding)',
    description:
      'Jumia is Morocco\'s largest e-commerce platform. Delivery times: 2-5 days in major cities. Cash on delivery is common. Amazon does not ship directly; services like MyUS or Aramex Shop & Ship forward packages.',
  },
];

export default function ExpatGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1545041028-4e0b97fba9ee?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Expat Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Users className="w-4 h-4" />
            Long-Term Living Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Living in Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The definitive guide to relocating, working, and building a life in Morocco.
            From Carte de Sejour to finding your neighborhood, everything an expat needs to know.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Quick Stats */}
      <section className="py-10 gradient-moroccan">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">50,000+</div>
              <div className="text-sm text-white/70 mt-1">Foreign Residents</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">$1,200</div>
              <div className="text-sm text-white/70 mt-1">Comfortable Monthly Budget</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">300+</div>
              <div className="text-sm text-white/70 mt-1">Sunny Days Per Year</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">3 hrs</div>
              <div className="text-sm text-white/70 mt-1">Flight to Europe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Expats Choose Morocco */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Heart className="w-4 h-4" />
              <span>Why Morocco</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Why Expats Choose Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From exceptional value to year-round sunshine, Morocco offers a quality of life that
              rivals destinations at three times the cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMorocco.map((item) => {
              const IconMap: Record<string, typeof Heart> = {
                DollarSign, Sun, Globe, Heart, Shield, TreePine,
              };
              const Icon = IconMap[item.icon] || Heart;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction Prose */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Making the Move: What to Expect
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has been welcoming foreign residents for centuries. From the French and
                Spanish colonial era to today&apos;s global community of retirees, entrepreneurs,
                remote workers, and families, the country has a long history of multicultural
                coexistence. Today, an estimated 50,000+ foreign nationals call Morocco home,
                concentrated in Casablanca, Marrakech, Rabat, Tangier, and Essaouira.
              </p>
              <p>
                The appeal is straightforward: a rich, vibrant culture with genuinely warm people,
                a cost of living that allows for a comfortable lifestyle on a modest budget, excellent
                weather, strategic proximity to Europe, and a level of everyday beauty &mdash; from
                zellige tilework to Atlas Mountain vistas &mdash; that enriches daily life in ways
                that are difficult to quantify but impossible to ignore.
              </p>
              <p>
                This guide covers everything you need to navigate the transition successfully: from
                the practicalities of residency permits and banking, to finding the right neighborhood,
                enrolling children in school, and building the social connections that will make
                Morocco feel like home. The information is based on first-hand expat experiences and
                updated regularly to reflect current conditions and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Living Breakdown */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Wallet className="w-4 h-4" />
              <span>Financial Planning</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Cost of Living Breakdown
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Detailed monthly costs in Moroccan dirhams (MAD) and US dollars. Rates based on
              mid-range expat lifestyle in major cities.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Category</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Range (MAD)</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">USD Equivalent</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {costOfLiving.map((row) => (
                    <tr key={row.category} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                      <td className="px-4 py-3 font-bold text-sm text-[var(--text-primary)]">{row.category}</td>
                      <td className="px-4 py-3 text-sm text-[var(--color-primary)] font-medium">{row.range}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{row.usd}</td>
                      <td className="px-4 py-3 text-xs text-[var(--text-muted)]">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Best Cities for Expats */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <MapPin className="w-4 h-4" />
              <span>Where to Live</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Cities for Expats
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Five cities, five distinct lifestyles. Each offers a different experience of
              long-term life in Morocco.
            </p>
          </div>

          <div className="space-y-10">
            {expatCities.map((city) => (
              <div key={city.name} id={city.name.toLowerCase()} className="card-moroccan overflow-hidden scroll-mt-24">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-56 md:h-auto min-h-[280px]">
                    <img
                      src={city.image}
                      alt={`${city.name} - expat life in Morocco`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        {city.population}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {city.name}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--color-primary)] mb-3">{city.tagline}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {city.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-[var(--color-primary)]" />
                        <span className="text-[var(--text-secondary)]">
                          <span className="font-medium text-[var(--text-primary)]">Rent:</span> {city.avgRent}/mo
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-[var(--color-primary)]" />
                        <span className="text-[var(--text-secondary)]">
                          <span className="font-medium text-[var(--text-primary)]">Best for:</span> {city.bestFor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[var(--color-secondary)]" />
                        Top Neighborhoods
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {city.neighborhoods.map((n) => (
                          <li key={n} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carte de Sejour */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <FileText className="w-4 h-4" />
              <span>Residency</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Carte de Sejour: Step-by-Step
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s residency permit (Carte de Sejour) is required for stays exceeding 90 days.
              The process requires patience, but is straightforward with the right preparation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {carteDeSejourSteps.map((item) => (
              <div key={item.step} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                      {item.description}
                    </p>
                    {item.documents.length > 0 && (
                      <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Required Documents:</h4>
                        <ul className="space-y-1.5">
                          {item.documents.map((doc) => (
                            <li key={doc} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                              <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <div className="card-moroccan p-6 border-l-4 border-[var(--color-primary)]">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] mb-1">Pro Tips for the Carte de Sejour</h4>
                  <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                    <li>Hire a local fixer or lawyer (1,000-3,000 MAD) to navigate the process. They know which office, which documents, and which order.</li>
                    <li>All foreign documents must be apostilled, translated into French by a sworn translator, and legalized. Start this process in your home country before departure.</li>
                    <li>Keep photocopies of everything. Offices may request duplicates of documents you already submitted.</li>
                    <li>The recepisse (receipt) is your legal safety net. Carry it at all times during the processing period.</li>
                    <li>Start the process immediately upon arrival. Do not wait until your 90-day tourist visa is about to expire.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Housing Market Guide */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Building2 className="w-4 h-4" />
              <span>Housing</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Housing Market Guide
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From traditional riad living to modern villas, Morocco offers housing options
              to suit every preference and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {housingGuide.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-3">{item.priceRange}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{item.description}</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-[var(--text-secondary)]"><span className="font-medium text-[var(--text-primary)]">Pros:</span> {item.pros}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CircleDot className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-[var(--text-secondary)]"><span className="font-medium text-[var(--text-primary)]">Cons:</span> {item.cons}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rental Platforms */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 text-center">
              Where to Find Rentals
            </h3>
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[600px]">
                  <thead>
                    <tr className="bg-[var(--surface-muted)]">
                      <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Platform</th>
                      <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Type</th>
                      <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-light)]">
                    {rentalPlatforms.map((row) => (
                      <tr key={row.name} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                        <td className="px-4 py-3 font-bold text-sm text-[var(--text-primary)]">{row.name}</td>
                        <td className="px-4 py-3 text-sm text-[var(--color-primary)]">{row.type}</td>
                        <td className="px-4 py-3 text-xs text-[var(--text-muted)]">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Rental Contract Tips */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="card-moroccan p-6 border-l-4 border-[var(--color-secondary)]">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] mb-1">Rental Contract Essentials</h4>
                  <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                    <li>Always sign a written contract (contrat de bail), even if the landlord prefers informal arrangements. It protects both parties and is required for your Carte de Sejour.</li>
                    <li>Standard deposit is 2 months rent. Ensure the contract specifies deposit return conditions.</li>
                    <li>Have the contract legalized (legalisee) at the commune. Both parties sign in person with ID.</li>
                    <li>The contract should specify who pays for what: utilities, maintenance, syndic (building management) fees.</li>
                    <li>Photograph the property condition before moving in. Moroccan law does not have standardized inventory reports.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking & Finance */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Banknote className="w-4 h-4" />
              <span>Finance</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Banking & Finance
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Managing money in Morocco, from opening accounts to transferring funds internationally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bankingInfo.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Landmark className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{item.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Stethoscope className="w-4 h-4" />
              <span>Health</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Healthcare for Expats
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco offers quality healthcare at affordable prices, with both public and private options available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {healthcareInfo.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{item.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Education Options
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco has a well-established network of international schools serving the expat community,
              from the renowned French Mission system to American, British, and Spanish curricula.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {educationOptions.map((item) => (
              <div key={item.system} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{item.system}</h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-3">{item.cost}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <Languages className="w-3.5 h-3.5" />
                    {item.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.cities}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Languages className="w-4 h-4" />
              <span>Communication</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Language Requirements
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              French is the essential language for daily life. Arabic (especially Darija) opens
              deeper cultural doors. English is growing but insufficient on its own.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {languageGuide.map((item) => (
              <div key={item.language} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{item.language}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.importance === 'Essential'
                        ? 'bg-red-100 text-red-700'
                        : item.importance === 'Very Helpful'
                          ? 'bg-amber-100 text-amber-700'
                          : item.importance === 'Helpful'
                            ? 'bg-blue-100 text-blue-700'
                            : item.importance === 'Regional'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {item.importance}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Considerations */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Scale className="w-4 h-4" />
              <span>Taxation</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tax Considerations
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Understanding Morocco&apos;s tax system is essential for financial planning.
              Professional advice is strongly recommended.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {taxInfo.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <HandCoins className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{item.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building a Social Life */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Handshake className="w-4 h-4" />
              <span>Community</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Building a Social Life
            </h2>
          </div>

          <div className="prose-moroccan">
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                One of the most common concerns for new expats is building a social circle.
                Morocco makes this surprisingly easy. The culture is inherently social: neighbors
                introduce themselves, shopkeepers remember your name, and invitations to tea or
                meals come naturally once you establish a routine in your neighborhood.
              </p>
              <p>
                For connecting with other expats, Facebook groups are the primary resource. Search
                for &quot;Expats in [City Name]&quot; and you will find active communities organizing
                regular meetups, sharing tips, and offering mutual support. InterNations has chapters in
                Casablanca, Marrakech, and Rabat with monthly events. Language exchange evenings
                (French-English, Arabic-English) are popular in all major cities and provide a natural
                way to meet both locals and fellow foreigners.
              </p>
              <p>
                Volunteering with local organizations, joining a sports club (tennis, golf, running,
                and surfing all have active communities), enrolling in cooking classes, or attending
                cultural events at the Institut Francais or British Council are all excellent pathways
                to meaningful connections. Religious communities (churches, synagogues) also serve as
                social anchors for many expats.
              </p>
              <p>
                The key is consistency: frequent the same cafes, shop at the same souk vendors, and
                attend regular community events. Within a few months, most expats report feeling
                genuinely embedded in their local community. Moroccan warmth is not performative &mdash;
                once you are known, you become part of the fabric of the neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Starting a Business */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Briefcase className="w-4 h-4" />
              <span>Entrepreneurship</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Starting a Business in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco actively encourages foreign investment with streamlined registration and
              favorable incentives in priority sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {businessInfo.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{item.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Adjustment */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Coffee className="w-4 h-4" />
              <span>Culture</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Cultural Adjustment Tips
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Understanding and embracing Moroccan culture is the key to a fulfilling
              expat experience. These insights will smooth the transition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {culturalTips.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internet & Connectivity */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Wifi className="w-4 h-4" />
              <span>Connectivity</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Internet & Connectivity
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s internet infrastructure has improved dramatically. Fiber optic is available
              in most urban areas with speeds up to 200 Mbps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {connectivityInfo.map((item) => (
              <div key={item.provider} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{item.provider}</h3>
                <p className="text-xs text-[var(--color-primary)] font-medium mb-3">{item.type}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <div className="card-moroccan p-6 border-l-4 border-[var(--color-primary)]">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] mb-1">Mobile Setup Tips</h4>
                  <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                    <li>Buy a local SIM immediately at the airport. Maroc Telecom has the best nationwide coverage.</li>
                    <li>Data plans: 20 GB for ~100 MAD/month. Unlimited social media packages available from 30 MAD/month.</li>
                    <li>WhatsApp is the dominant communication platform in Morocco. Businesses, schools, and government offices all use it.</li>
                    <li>VoIP calls (WhatsApp, FaceTime) work without restrictions. No VPN needed for any standard services.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping & Daily Life */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <ShoppingBag className="w-4 h-4" />
              <span>Daily Life</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Shopping & Daily Life
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From traditional souks to modern malls, Morocco offers diverse shopping experiences
              and everything you need for comfortable daily life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {shoppingGuide.map((item) => (
              <div key={item.type} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{item.type}</h3>
                <p className="text-xs text-[var(--color-primary)] font-medium mb-3">{item.examples}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retirement in Morocco */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Sun className="w-4 h-4" />
              <span>Retirement</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Retirement in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is increasingly popular among international retirees for its combination of
              affordable living, excellent climate, and rich cultural life.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan p-8">
              <div className="prose-moroccan mb-6">
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Morocco offers one of the best value propositions in the world for retirees. A
                  couple can live very comfortably on $2,000-3,000/month, including a nice apartment
                  or villa, domestic help, excellent food, healthcare, and regular entertainment. The
                  tax treatment of foreign pensions is notably favorable, with reductions of up to 80%
                  on pension income. Add year-round sunshine, a short flight to family in Europe, and
                  a culture that deeply respects elders, and the case for retirement in Morocco becomes
                  compelling.
                </p>
              </div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Key Benefits for Retirees:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {retirementBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Budget Scenarios */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <DollarSign className="w-4 h-4" />
              <span>Budget Planning</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Monthly Budget Scenarios
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Three realistic budget tiers for expat life in Morocco, from modest to luxurious.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                level: 'Modest Expat',
                range: '$1,000 - $1,500/month',
                description:
                  'Comfortable apartment in a good neighborhood, local dining, public transport, basic entertainment. Works well for single expats or retirees in smaller cities like Essaouira or Rabat.',
                items: [
                  'Rent: $300-500',
                  'Groceries: $150-200',
                  'Eating out: $100-150',
                  'Utilities: $50-100',
                  'Transport: $50-80',
                  'Internet & Phone: $30-50',
                  'Health Insurance: $50-100',
                  'Entertainment: $100-200',
                ],
              },
              {
                level: 'Comfortable Family',
                range: '$2,000 - $3,500/month',
                description:
                  'Spacious apartment or small villa, international school for 1-2 children, car, domestic help, regular dining out. The sweet spot for most expat families in major cities.',
                items: [
                  'Rent: $800-1,500',
                  'School: $300-800',
                  'Groceries: $300-400',
                  'Eating out: $200-300',
                  'Utilities: $100-150',
                  'Car & Transport: $200-300',
                  'Domestic Help: $200-300',
                  'Health Insurance: $100-200',
                ],
              },
              {
                level: 'Luxury Lifestyle',
                range: '$4,000 - $6,000+/month',
                description:
                  'Villa with pool, premium international school, full-time staff, fine dining, club memberships, regular travel. Executive-level living at a fraction of Western prices.',
                items: [
                  'Rent: $1,500-2,500+',
                  'School: $600-1,000',
                  'Groceries: $400-600',
                  'Fine Dining: $400-600',
                  'Utilities: $150-250',
                  'Car & Driver: $400-600',
                  'Staff: $400-600',
                  'Clubs & Entertainment: $300-500',
                ],
              },
            ].map((budget) => (
              <div key={budget.level} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{budget.level}</h3>
                <p className="text-lg text-[var(--color-primary)] font-bold mb-3">{budget.range}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{budget.description}</p>
                <div className="space-y-1.5">
                  {budget.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <CircleDot className="w-3 h-3 text-[var(--color-secondary)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Checklist */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Preparation</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Pre-Move Checklist
            </h2>
          </div>

          <div className="card-moroccan p-8">
            <div className="space-y-6">
              {[
                {
                  phase: 'Three to Six Months Before',
                  tasks: [
                    'Research cities and visit for a 2-4 week scouting trip',
                    'Apostille and translate essential documents (birth certificates, marriage certificate, diplomas, criminal record)',
                    'Begin learning French if not already proficient',
                    'Research international schools and begin application process (waiting lists are common)',
                    'Obtain comprehensive health check and dental work (cheaper at home for major procedures)',
                    'Set up Wise or similar international transfer account',
                    'Begin downsizing possessions (shipping to Morocco is expensive)',
                  ],
                },
                {
                  phase: 'One to Two Months Before',
                  tasks: [
                    'Book temporary accommodation for first 1-3 months (Airbnb, serviced apartment)',
                    'Arrange international health insurance valid in Morocco',
                    'Notify banks, pension providers, and tax authorities of your move',
                    'Set up mail forwarding service',
                    'Obtain international driving permit if planning to drive initially',
                    'Research and join expat Facebook groups for your destination city',
                    'Pack strategically: Morocco has most things you need, but specialty items (specific medications, niche electronics) should come with you',
                  ],
                },
                {
                  phase: 'First Week in Morocco',
                  tasks: [
                    'Buy a local SIM card at the airport (Maroc Telecom recommended)',
                    'Register with your embassy or consulate',
                    'Open a convertible dirham bank account (CIH Bank is most expat-friendly)',
                    'Begin apartment hunting with a trusted real estate agent',
                    'Visit potential schools in person',
                    'Start the Carte de Sejour process immediately',
                    'Explore your neighborhood on foot, identify key shops, pharmacies, and services',
                  ],
                },
              ].map((phase) => (
                <div key={phase.phase}>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                    {phase.phase}
                  </h3>
                  <ul className="space-y-2 ml-7">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Make Morocco Home?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Explore our other guides to prepare for your new life in Morocco. From visa requirements
            to finding the perfect city, we have everything you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/visa"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Visa Guide
            </Link>
            <Link
              href="/cities"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Explore Cities
            </Link>
            <Link
              href="/digital-nomad"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Globe className="w-4 h-4" />
              Digital Nomad Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

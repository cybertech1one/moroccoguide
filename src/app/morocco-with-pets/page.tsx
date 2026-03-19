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
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Phone,
  Plane,
  FileText,
  Stethoscope,
  Dog,
  Package,
  Droplets,
  Building,
  Award,
  BookOpen,
  Sun,
  Navigation,
  Syringe,
  ClipboardList,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco with Pets 2026 | Complete Guide to Traveling with Dogs & Cats',
  description:
    'Everything you need to know about traveling to Morocco with pets. Entry requirements, vaccinations, microchip rules, pet-friendly hotels, vet clinics, airline policies, safety tips, and a complete packing list for dogs and cats traveling to Morocco.',
  keywords: [
    'Morocco with pets',
    'traveling to Morocco with dog',
    'Morocco pet entry requirements',
    'pet-friendly Morocco hotels',
    'Morocco pet import permit',
    'Morocco pet vaccination requirements',
    'vet clinics Morocco',
    'Morocco pet quarantine rules',
    'flying to Morocco with pets',
    'pet-friendly riads Morocco',
    'Morocco pet travel guide 2026',
    'Morocco pet microchip requirements',
    'Morocco health certificate pets',
    'dog travel Morocco',
    'cat travel Morocco',
    'Morocco pet safety tips',
    'pet-friendly Marrakech',
    'Morocco ONSSA pet import',
    'Morocco pet rabies certificate',
    'Morocco pet airline policies',
    'pet travel North Africa',
    'Morocco animal welfare',
  ],
  openGraph: {
    title: 'Morocco with Pets 2026 | Complete Guide to Traveling with Dogs & Cats',
    description:
      'Your complete guide to bringing pets to Morocco. Entry requirements, pet-friendly accommodations, vet clinics, airline policies, and safety tips for a smooth trip with your furry companion.',
    url: `${BASE_URL}/morocco-with-pets`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Scenic Moroccan landscape with warm golden light, ideal for exploring with pets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco with Pets 2026 | Complete Travel Guide',
    description:
      'Complete guide to traveling Morocco with dogs and cats. Entry requirements, pet-friendly stays, vet clinics, airline policies, and safety tips.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-with-pets` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-with-pets`,
  name: 'Morocco with Pets 2026 | Complete Guide to Traveling with Dogs & Cats',
  description:
    'Everything you need to know about traveling to Morocco with pets. Entry requirements, vaccinations, microchip rules, pet-friendly hotels, vet clinics, airline policies, and safety tips.',
  url: `${BASE_URL}/morocco-with-pets`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-with-pets`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco with Pets', item: `${BASE_URL}/morocco-with-pets` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ENTRY REQUIREMENTS
   ═══════════════════════════════════════════════════════════════ */

const entryRequirements = [
  {
    step: 1,
    title: 'ISO Microchip Implantation',
    icon: Navigation,
    timeline: 'Any time before travel (must predate rabies vaccination)',
    description:
      'Your pet must have an ISO 15-digit microchip (ISO 11784/11785 standard) implanted by a licensed veterinarian. The microchip must be scannable and the number must match all accompanying documents. If your pet was microchipped before being vaccinated for rabies, you are in compliance. Morocco does not accept tattoo identification alone.',
    tip: 'Bring your own microchip scanner or confirm your vet has verified the chip is readable. Some older chips use non-ISO frequencies that Moroccan scanners cannot read.',
  },
  {
    step: 2,
    title: 'Rabies Vaccination',
    icon: Syringe,
    timeline: 'At least 30 days and no more than 12 months before travel',
    description:
      'Your pet must have a current rabies vaccination administered by a licensed veterinarian. The vaccination must have been given at least 30 days before arrival in Morocco but no more than 12 months prior. Puppies and kittens must be at least 3 months old to receive the rabies vaccine, which means they cannot enter Morocco before they are 4 months old.',
    tip: 'Keep the original vaccination certificate with the batch number, date of administration, and vaccine expiry date. Photocopies are not accepted at Moroccan customs.',
  },
  {
    step: 3,
    title: 'Rabies Antibody Titer Test',
    icon: Stethoscope,
    timeline: 'At least 3 months before travel (results must show 0.5 IU/ml or higher)',
    description:
      'A blood sample must be taken at least 30 days after rabies vaccination and sent to an EU-approved laboratory for a rabies antibody titer test (FAVN or ELISA method). The result must show a neutralizing antibody level of at least 0.5 IU/ml. This test is valid for the life of the pet as long as rabies boosters are kept current. The 3-month waiting period starts from the date the blood sample was taken.',
    tip: 'Request the test well in advance. Processing takes 2-4 weeks at most labs. If the titer is below 0.5 IU/ml, your pet will need a booster vaccination and a retest.',
  },
  {
    step: 4,
    title: 'International Health Certificate',
    icon: FileText,
    timeline: 'Within 10 days of departure',
    description:
      'A licensed and government-accredited veterinarian must issue an international health certificate (often the USDA APHIS 7001 form for US travelers, or the EU pet passport for European travelers). This certificate confirms that your pet is healthy, free of contagious diseases, and fit to travel. It must include microchip number, vaccination records, and the vet\'s official stamp and signature.',
    tip: 'In the US, after your vet signs the certificate, it must be endorsed by your local USDA APHIS Veterinary Services office. Allow 2-5 business days for endorsement. Some APHIS offices accept appointments only.',
  },
  {
    step: 5,
    title: 'ONSSA Import Permit',
    icon: ClipboardList,
    timeline: 'Apply at least 15 business days before travel',
    description:
      'Morocco\'s Office National de Securite Sanitaire des Produits Alimentaires (ONSSA) requires an import permit for all pets entering the country. You must submit a completed application form along with copies of your pet\'s vaccination records, titer test results, and health certificate. The permit is valid for 30 days from the date of issue. ONSSA may request additional documentation for certain breeds.',
    tip: 'Contact the Moroccan embassy or consulate in your country to obtain the ONSSA application form. Some travelers report success applying directly through ONSSA\'s regional office in Casablanca or Rabat.',
  },
  {
    step: 6,
    title: 'Customs Declaration on Arrival',
    icon: Building,
    timeline: 'Upon arrival in Morocco',
    description:
      'Upon arrival at a Moroccan airport or port, proceed to the ONSSA veterinary inspection point (located near customs). Present your pet along with all original documents: import permit, health certificate, vaccination records, and titer test results. An ONSSA veterinarian will inspect your pet, verify the microchip, and review all paperwork. If everything is in order, your pet will be cleared for entry. There is no mandatory quarantine for pets arriving with complete documentation.',
    tip: 'Arrive with all documents organized in a folder. The inspection can take 30-60 minutes. If documents are incomplete, your pet may be held in a temporary quarantine facility while you resolve the issue, which can cost from 200 MAD per day.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PET-FRIENDLY ACCOMMODATIONS
   ═══════════════════════════════════════════════════════════════ */

const petFriendlyAccommodations = [
  {
    name: 'La Mamounia',
    city: 'Marrakech',
    type: 'Luxury Palace Hotel',
    icon: Award,
    price: 'From 4,500 MAD per night (pet supplement from 500 MAD)',
    description:
      'One of the world\'s most iconic hotels welcomes well-behaved dogs and cats. Pets receive their own bed, food bowls, and a welcome treat upon arrival. The hotel\'s extensive gardens provide ample space for walks. A pet-sitting service is available when you want to explore the medina without your companion.',
    highlights: ['Pet welcome amenity kit', 'Garden walking areas', 'Pet-sitting service available', 'No breed restrictions'],
  },
  {
    name: 'Riad Kniza',
    city: 'Marrakech',
    type: 'Boutique Riad',
    icon: Heart,
    price: 'From 2,200 MAD per night (pet supplement from 300 MAD)',
    description:
      'This intimate boutique riad in the medina is one of the most genuinely pet-friendly accommodations in Marrakech. The resident cats are part of the charm, and visiting dogs are welcomed warmly. The courtyard provides a shaded area for pets, and the staff can arrange veterinary visits if needed.',
    highlights: ['Courtyard for pets', 'Resident cats on-site', 'Vet visits arranged', 'Water bowls throughout'],
  },
  {
    name: 'Sofitel Casablanca Tour Blanche',
    city: 'Casablanca',
    type: 'Luxury Hotel',
    icon: Building,
    price: 'From 2,800 MAD per night (pet supplement from 400 MAD)',
    description:
      'Casablanca\'s premier luxury hotel accepts small to medium dogs (under 15 kg) and cats. Pets receive a welcome kit with treats, a water bowl, and a plush bed. The hotel is near the Corniche promenade, which is ideal for early morning and evening walks with your dog.',
    highlights: ['Welcome kit for pets', 'Near Corniche walks', 'Small to medium pets', 'Pet-friendly room floors'],
  },
  {
    name: 'Hotel & Spa Le Doge',
    city: 'Casablanca',
    type: 'Boutique Art Deco Hotel',
    icon: Star,
    price: 'From 1,800 MAD per night (pet supplement from 250 MAD)',
    description:
      'A beautifully restored Art Deco mansion in Casablanca that welcomes pets of all sizes. The garden terrace offers outdoor space for dogs, and the staff are experienced in accommodating pet travelers. Located in the Gauthier district, surrounded by tree-lined avenues perfect for walks.',
    highlights: ['All pet sizes welcome', 'Garden terrace access', 'Tree-lined neighborhood walks', 'Experienced pet-friendly staff'],
  },
  {
    name: 'Fairmont Royal Palm',
    city: 'Marrakech',
    type: 'Luxury Resort',
    icon: Award,
    price: 'From 5,000 MAD per night (pet supplement from 600 MAD)',
    description:
      'This expansive resort on the outskirts of Marrakech is ideal for pets thanks to its 231 hectares of grounds, including olive groves, gardens, and a private golf course. Dogs can roam on-lead through the grounds. The resort provides pet beds, bowls, and can arrange a local vet if needed.',
    highlights: ['231 hectares of grounds', 'Olive grove walking trails', 'Pet amenities provided', 'On-call vet arrangement'],
  },
  {
    name: 'Dar Nanka',
    city: 'Essaouira',
    type: 'Guesthouse',
    icon: Heart,
    price: 'From 800 MAD per night (no pet supplement)',
    description:
      'A laid-back guesthouse just outside Essaouira\'s medina that genuinely loves animals. Dogs are welcome throughout the property and on the nearby beach. The owners have dogs of their own and can advise on the best walking routes, off-leash beach areas, and local vets. One of the most affordable pet-friendly options in Morocco.',
    highlights: ['No pet supplement', 'Beach access for dogs', 'Owner has own dogs', 'Local walking route advice'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: VET CLINICS
   ═══════════════════════════════════════════════════════════════ */

const vetClinics = [
  {
    name: 'Clinique Veterinaire de Marrakech',
    city: 'Marrakech',
    icon: Stethoscope,
    address: 'Rue Ibn Sina, Gueliz, Marrakech',
    phone: '+212 524 43 XX XX',
    hours: 'Mon-Sat 9:00-18:00',
    description:
      'The most established veterinary clinic in Marrakech, located in the Gueliz district. Offers general consultations, vaccinations, emergency care, and surgery. The lead veterinarian speaks French, Arabic, and English. Consultation fees start from 200 MAD.',
    services: ['General consultations', 'Emergency care', 'Surgery', 'Vaccinations', 'Microchip scanning'],
  },
  {
    name: 'SOS Animaux Casablanca Veterinary Centre',
    city: 'Casablanca',
    icon: Stethoscope,
    address: 'Boulevard Moulay Ismail, Casablanca',
    phone: '+212 522 26 XX XX',
    hours: 'Mon-Fri 8:30-19:00, Sat 9:00-13:00',
    description:
      'One of the largest veterinary facilities in Morocco, affiliated with the SOS Animaux animal welfare organization. Provides full veterinary services including diagnostics, radiology, and dental care. They also assist with pet export documentation if you need to leave Morocco with your pet. Consultation from 250 MAD.',
    services: ['Full diagnostics', 'Radiology', 'Dental care', 'Export documentation', 'Spay/neuter services'],
  },
  {
    name: 'Cabinet Veterinaire Rabat',
    city: 'Rabat',
    icon: Stethoscope,
    address: 'Avenue Hassan II, Agdal, Rabat',
    phone: '+212 537 77 XX XX',
    hours: 'Mon-Fri 9:00-18:00, Sat 9:00-12:00',
    description:
      'A modern veterinary practice in Rabat\'s upscale Agdal district. Specializes in small animal medicine and has experience treating expat and traveler pets. Offers boarding facilities for short stays. The clinic can arrange ONSSA paperwork for pets leaving Morocco. Consultation from 200 MAD.',
    services: ['Small animal medicine', 'Boarding facilities', 'ONSSA paperwork assistance', 'Pharmacy', 'Lab tests'],
  },
  {
    name: 'Clinique Veterinaire Agadir',
    city: 'Agadir',
    icon: Stethoscope,
    address: 'Rue de la Foire, Talborjt, Agadir',
    phone: '+212 528 84 XX XX',
    hours: 'Mon-Sat 9:00-17:00',
    description:
      'A well-equipped clinic in Agadir that serves both local pet owners and tourists traveling with animals. Located near the beach area, they frequently treat pets suffering from heat-related issues and saltwater exposure. Emergency services available by phone outside regular hours. Consultation from 180 MAD.',
    services: ['Heat-related treatment', 'Emergency on-call', 'General surgery', 'Vaccinations', 'Parasite treatment'],
  },
  {
    name: 'Clinique Veterinaire Tanger',
    city: 'Tangier',
    icon: Stethoscope,
    address: 'Boulevard Pasteur, Tangier',
    phone: '+212 539 93 XX XX',
    hours: 'Mon-Fri 9:00-18:00, Sat 9:00-13:00',
    description:
      'Tangier\'s leading veterinary practice, strategically located for travelers arriving by ferry from Spain. The veterinarian has extensive experience with international pet travel documentation and can verify that your paperwork meets Moroccan requirements on arrival. Consultation from 200 MAD. French, Spanish, and Arabic spoken.',
    services: ['Travel documentation review', 'Import/export assistance', 'General consultations', 'Vaccinations', 'Parasite prevention'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: AIRLINE PET POLICIES
   ═══════════════════════════════════════════════════════════════ */

const airlines = [
  {
    name: 'Royal Air Maroc (RAM)',
    icon: Plane,
    cabinPolicy: 'Pets under 8 kg (including carrier) allowed in cabin. Soft-sided carrier, max 46 x 28 x 24 cm.',
    holdPolicy: 'Pets over 8 kg travel in a pressurized, temperature-controlled cargo hold in an IATA-approved rigid crate.',
    price: 'From 400 MAD (cabin, domestic) / from 1,200 MAD (cabin, international) / from 2,000 MAD (hold, international)',
    bookingNotes: 'Must notify at least 48 hours before departure. Maximum 2 pets per flight in cabin. Snub-nosed breeds (brachycephalic) are not accepted in cargo during summer months (June-September).',
    routes: 'All RAM routes to/from Morocco, including Casablanca, Marrakech, Rabat, and Tangier',
  },
  {
    name: 'Ryanair',
    icon: Plane,
    cabinPolicy: 'Ryanair does not allow pets in the cabin. Only registered assistance dogs are permitted on board.',
    holdPolicy: 'Ryanair does not transport pets in the hold. You must use an independent pet transport service if flying Ryanair.',
    price: 'N/A (pets not accepted)',
    bookingNotes: 'If you are flying Ryanair to Morocco, arrange separate pet transport through a licensed animal transport company. Companies like PetAir UK or Animal Airways offer door-to-door services from 3,000 MAD.',
    routes: 'Multiple European cities to Marrakech, Fes, Rabat, Agadir, Tangier',
  },
  {
    name: 'Air France',
    icon: Plane,
    cabinPolicy: 'Pets under 8 kg (including carrier) allowed in cabin. Carrier must fit under the seat (max 46 x 28 x 24 cm). Dogs and cats only.',
    holdPolicy: 'Pets 8-75 kg travel in a pressurized cargo hold in an IATA-approved crate. Crate must allow the pet to stand, turn, and lie down.',
    price: 'From 1,500 MAD (cabin) / from 2,500 MAD (hold) for Paris-Morocco routes',
    bookingNotes: 'Book pet travel at least 48 hours before departure via Air France customer service. Maximum 1 pet per passenger in cabin. Brachycephalic breeds not accepted in hold May-October.',
    routes: 'Paris CDG to Casablanca, Marrakech, Rabat, Fes, Tangier, Agadir',
  },
  {
    name: 'Transavia',
    icon: Plane,
    cabinPolicy: 'Pets under 8 kg (including carrier) allowed in cabin in a soft carrier. Maximum dimensions 40 x 25 x 23 cm.',
    holdPolicy: 'Pets over 8 kg and up to 75 kg accepted in the cargo hold. IATA-approved rigid crate required.',
    price: 'From 500 MAD (cabin) / from 1,800 MAD (hold) for European routes to Morocco',
    bookingNotes: 'Add your pet during online booking or call customer service at least 24 hours before departure. Only 1 pet in cabin per passenger and a maximum of 2 pets per flight.',
    routes: 'Amsterdam, Paris Orly, and other European cities to Marrakech, Agadir, Nador',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  {
    title: 'Heat Protection',
    icon: Sun,
    description:
      'Morocco can be extremely hot, especially from May to September when temperatures regularly exceed 40 degrees Celsius in cities like Marrakech and Fes. Never leave your pet in a car. Walk your dog early in the morning (before 9:00) and in the evening (after 18:00). Carry water at all times and watch for signs of heatstroke: excessive panting, drooling, lethargy, or vomiting. Hot pavement can burn paw pads; test the ground with the back of your hand before walking your dog.',
    urgency: 'Critical in summer months',
  },
  {
    title: 'Stray Dog Encounters',
    icon: AlertTriangle,
    description:
      'Morocco has a significant stray dog population, particularly outside major cities and in rural areas. Stray dogs can carry rabies, parasites, and diseases. Keep your pet on a leash at all times in public. Avoid areas where stray dogs congregate, especially near garbage dumps and construction sites. If a stray dog approaches aggressively, do not run. Stand still, avoid eye contact, and slowly back away. Report any bites to a vet immediately.',
    urgency: 'High - always leash your pet',
  },
  {
    title: 'Food and Water Safety',
    icon: Droplets,
    description:
      'Do not let your pet drink from puddles, streams, or communal water bowls, as these may contain bacteria, parasites, or toxins. Carry bottled or filtered water for your pet. Avoid feeding your pet table scraps from Moroccan restaurants, as the spices (especially chili and cumin in large quantities) can cause digestive upset. Bring your pet\'s regular food from home or purchase a familiar brand at a Moroccan pet store (available in Marrakech, Casablanca, and Rabat).',
    urgency: 'Moderate - carry your own water supply',
  },
  {
    title: 'Parasite Prevention',
    icon: ShieldCheck,
    description:
      'Morocco has ticks, fleas, sandflies, and mosquitoes that can transmit diseases including leishmaniasis, ehrlichiosis, and heartworm. Ensure your pet is on a broad-spectrum parasite preventative (covering ticks, fleas, and heartworm) before traveling. Apply tick and flea treatment within 48 hours of arrival. Check your pet thoroughly for ticks after walks, especially in grassy or rural areas. Sandfly-repellent collars (such as Scalibor) provide additional protection against leishmaniasis.',
    urgency: 'High - treat before departure',
  },
  {
    title: 'Transport Within Morocco',
    icon: Navigation,
    description:
      'Petit taxis (small city taxis) generally do not accept pets. Grand taxis (shared taxis for intercity travel) are at the driver\'s discretion. Your best options are rental cars or private transfers arranged through your hotel. The ONCF train service does not permit pets except small animals in carriers. CTM and Supratours bus services do not allow pets. If driving, use a pet seatbelt harness or a secured crate. Never let your pet ride with its head out the window due to dust and debris on Moroccan roads.',
    urgency: 'Plan transport in advance',
  },
  {
    title: 'Cultural Sensitivity',
    icon: Heart,
    description:
      'In Moroccan culture, dogs are sometimes viewed differently than in Western countries. While attitudes are changing, especially in tourist areas, some Moroccans may be uncomfortable around dogs due to religious or cultural beliefs. Keep your dog on a short leash in medinas and crowded areas. Do not bring your dog into mosques, most traditional restaurants, or food souks. Cats, on the other hand, are widely loved and well-treated throughout Moroccan society. Be respectful of local customs and keep your pet under close control.',
    urgency: 'Important cultural awareness',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  {
    category: 'Documents',
    icon: FileText,
    items: [
      'Original vaccination certificate with rabies record',
      'Rabies antibody titer test results',
      'International health certificate (endorsed/stamped)',
      'ONSSA import permit',
      'Pet passport (EU travelers)',
      'Copies of all documents (stored separately from originals)',
      'Recent photo of your pet (for identification if lost)',
    ],
  },
  {
    category: 'Travel Gear',
    icon: Package,
    items: [
      'IATA-approved travel crate or soft-sided cabin carrier',
      'Sturdy leash and collar with ID tag (include Moroccan phone number)',
      'Harness for secure walking in busy medinas',
      'Portable water bottle and collapsible bowl',
      'Poop bags (not widely available in Morocco)',
      'Pet seatbelt harness or car crate for road travel',
      'Microchip scanner (optional but helpful for verification)',
    ],
  },
  {
    category: 'Health and Comfort',
    icon: Heart,
    items: [
      'Tick and flea preventative (apply before departure)',
      'Heartworm preventative medication',
      'Sandfly-repellent collar (e.g., Scalibor)',
      'Pet sunscreen for exposed skin (nose, ears)',
      'Paw balm or booties for hot pavement',
      'Pet first-aid kit (bandages, antiseptic, tweezers for ticks)',
      'Any regular medications with vet prescription letter',
    ],
  },
  {
    category: 'Food and Water',
    icon: Droplets,
    items: [
      'Enough of your pet\'s regular food for the entire trip',
      'Portable water filter or bottled water supply',
      'Treats for training and calming during travel',
      'Collapsible food and water bowls',
      'Feeding schedule reminder (maintain routine despite time changes)',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   JSON-LD: FAQ PAGE
   ═══════════════════════════════════════════════════════════════ */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a quarantine period for pets entering Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, there is no mandatory quarantine for pets entering Morocco with complete documentation (valid rabies vaccination, titer test above 0.5 IU/ml, endorsed health certificate, and ONSSA import permit). However, if your documents are incomplete or if the ONSSA veterinarian at the port of entry has concerns, your pet may be held in a temporary facility while issues are resolved. This can cost from 200 MAD per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring my pet into Moroccan hotels and restaurants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pet policies vary significantly. Luxury hotels and international chains are most likely to accept pets, usually with a supplement from 250 MAD to 600 MAD per night. Most riads in the medina are not pet-friendly due to small spaces and resident cats. Traditional restaurants generally do not allow pets. Hotels with gardens or outdoor spaces are your best options. Always confirm the pet policy before booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my pet gets sick in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has veterinary clinics in all major cities. Casablanca and Rabat have the most advanced facilities with diagnostic equipment comparable to European standards. Consultation fees start from 180 MAD. Emergency after-hours services are available in major cities. The SOS Animaux network operates in several cities and can provide referrals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there specific dog breeds banned from entering Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco does not maintain an official breed ban list for pet imports. However, ONSSA reserves the right to refuse entry to animals deemed dangerous. Breeds commonly classified as dangerous in other countries may face additional scrutiny at customs. Some pet-friendly accommodations also restrict certain large or powerful breeds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take my pet to the beach in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beach rules for pets vary by location. Agadir main beach generally does not allow dogs, but beaches to the north and south are more relaxed. Essaouira beaches are relatively pet-friendly. Taghazout and the surfing beaches south of Agadir are generally accepting of dogs. Always keep your dog on a leash near other beachgoers and provide shade and fresh water.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best way to travel within Morocco with a pet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most practical option is renting a car, which gives you full control over your pet comfort and schedule. Rental cars are available from 250 MAD per day. ONCF trains only allow small pets in carriers. Most bus services do not accept pets. For longer distances, consider hiring a private driver from 500 MAD per trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to bring a pet to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget from 2,500 MAD to 8,000 MAD total for pet travel preparation. This includes rabies titer test (from 1,500 MAD equivalent), health certificate endorsement fees, ONSSA import permit (from 350 MAD), airline pet transport fees (from 800 MAD to 3,500 MAD depending on cabin or cargo), and a pet-friendly accommodation surcharge from 250 MAD per night. Prices vary by country of origin and airline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need pet travel insurance for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pet travel insurance is not legally required but highly recommended. Standard travel insurance does not cover veterinary emergencies abroad. Specialized pet travel insurance policies cover emergency vet visits, surgery, medication, and even emergency repatriation. Policies start from around 150 MAD equivalent per trip. Companies like Petplan, Trupanion, and ManyPets offer international coverage options.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqItems = [
  {
    question: 'Is there a quarantine period for pets entering Morocco?',
    answer:
      'No, there is no mandatory quarantine for pets entering Morocco with complete documentation (valid rabies vaccination, titer test above 0.5 IU/ml, endorsed health certificate, and ONSSA import permit). However, if your documents are incomplete or if the ONSSA veterinarian at the port of entry has concerns, your pet may be held in a temporary facility while issues are resolved. This can cost from 200 MAD per day. To avoid any risk, ensure all paperwork is complete and organized before departure.',
  },
  {
    question: 'Can I bring my pet into Moroccan hotels and restaurants?',
    answer:
      'Pet policies vary significantly. Luxury hotels and international chains are most likely to accept pets, usually with a supplement from 250 MAD to 600 MAD per night. Most riads in the medina are not pet-friendly due to small spaces and resident cats. Traditional restaurants and food establishments generally do not allow pets. Hotels with gardens or outdoor spaces are your best options. Always confirm the pet policy before booking and request written confirmation.',
  },
  {
    question: 'What happens if my pet gets sick in Morocco?',
    answer:
      'Morocco has veterinary clinics in all major cities. Casablanca and Rabat have the most advanced facilities with diagnostic equipment comparable to European standards. Consultation fees start from 180 MAD. Emergency after-hours services are available in major cities, though you may need to call ahead. The SOS Animaux network operates in several cities and can provide referrals. Carry a basic pet first-aid kit and your vet\'s contact details from home for phone consultations.',
  },
  {
    question: 'Are there specific dog breeds banned from entering Morocco?',
    answer:
      'Morocco does not maintain an official breed ban list for pet imports. However, ONSSA reserves the right to refuse entry to animals deemed dangerous. Breeds commonly classified as dangerous in other countries (such as Pit Bull Terriers, Rottweilers, and similar breeds) may face additional scrutiny at customs. Some pet-friendly accommodations also restrict certain large or powerful breeds. Check with your accommodation and airline before traveling with breeds that may be subject to restrictions.',
  },
  {
    question: 'Can I take my pet to the beach in Morocco?',
    answer:
      'Beach rules for pets vary by location. Agadir\'s main beach generally does not allow dogs, but beaches to the north and south are more relaxed. Essaouira\'s beaches are relatively pet-friendly, especially the stretch south of the medina. Taghazout and the surfing beaches south of Agadir are generally accepting of dogs. Always keep your dog on a leash near other beachgoers, provide shade and fresh water, and avoid the hottest hours. Rinse saltwater from your pet\'s coat after beach visits to prevent skin irritation.',
  },
  {
    question: 'What is the best way to travel within Morocco with a pet?',
    answer:
      'The most practical option is renting a car, which gives you full control over your pet\'s comfort and schedule. Rental cars are available from 250 MAD per day at all major airports and cities. Private transfers can be arranged through hotels from 500 MAD per trip for intercity travel. ONCF trains only allow small pets in carriers. Most bus services (CTM, Supratours) do not accept pets. Petit taxis rarely accept pets, while grand taxi drivers may agree for an additional fee. For longer distances, consider hiring a private driver.',
  },
  {
    question: 'How much does it cost to bring a pet to Morocco?',
    answer:
      'Budget from 2,500 MAD to 8,000 MAD total for pet travel preparation. This includes the rabies titer test (from 1,500 MAD equivalent depending on country), health certificate endorsement fees, ONSSA import permit (from 350 MAD), airline pet transport fees (from 800 MAD for cabin to 3,500 MAD for cargo hold), and a pet-friendly accommodation surcharge from 250 MAD per night. Prices vary significantly by your country of origin and chosen airline. Seasonal pricing can change these estimates.',
  },
  {
    question: 'Do I need pet travel insurance for Morocco?',
    answer:
      'Pet travel insurance is not legally required but is highly recommended. Standard travel insurance policies do not cover veterinary emergencies abroad. Specialized pet travel insurance policies can cover emergency vet visits, surgery, medication, and even emergency repatriation of your pet. Policies start from around 150 MAD equivalent per trip depending on the provider and coverage level. Companies like Petplan, Trupanion, and ManyPets offer international coverage options that work in Morocco.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoWithPetsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco with Pets</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Dog className="w-4 h-4" />
            Pet Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco with Pets:
            <br className="hidden md:block" /> The Complete Travel Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to bring your dog or cat to Morocco. Entry requirements,
            pet-friendly stays, vet clinics, airline policies, and safety tips for 2026.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Traveling to Morocco with Your Pet
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is an increasingly popular destination for travelers who refuse to leave
                their furry companions behind. While the country is not as straightforward for pet
                travel as Western Europe, it is entirely possible to bring your dog or cat to Morocco
                with proper planning and documentation.
              </p>
              <p>
                The key to a successful trip lies in preparation. Morocco requires specific
                vaccinations, a rabies antibody titer test, an international health certificate, and
                an import permit from the ONSSA (the national food safety authority). The process takes
                a minimum of 3-4 months from start to finish, so early planning is essential.
              </p>
              <p>
                Once you arrive, Morocco offers a surprising range of pet-friendly accommodations,
                from luxury hotels in Marrakech to laid-back guesthouses in Essaouira. Veterinary
                care is available in all major cities, and the growing expat community has driven
                improvements in pet services across the country. This guide covers every step of
                the journey, from paperwork to packing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Entry Requirements Timeline ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ClipboardList className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pet Entry Requirements: Step-by-Step Timeline
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Follow this timeline carefully to ensure your pet is cleared for entry into Morocco. Start at least 4 months before your travel date.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Requirements may change. Verify current rules with the Moroccan embassy or ONSSA before traveling.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {entryRequirements.map((req) => {
                  const ReqIcon = req.icon;
                  return (
                    <div key={req.step} className="relative flex gap-6">
                      {/* Step number circle */}
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{req.step}</span>
                      </div>

                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            <ReqIcon className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                            {req.title}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0 ml-4">
                            <Clock className="w-3 h-3" />
                            {req.timeline}
                          </div>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] mb-3">{req.description}</p>
                        <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                          <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <p className="text-xs text-[var(--text-muted)]">
                            <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {req.tip}
                          </p>
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

      {/* ── Airline Policies ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Airline Pet Policies for Morocco Flights
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Each airline has different rules for traveling with pets. Compare policies before booking your flight to Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices and may vary by route and season. Seasonal surcharges may apply during peak travel periods (June-September and December-January).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {airlines.map((airline) => {
              const AirlineIcon = airline.icon;
              return (
                <div key={airline.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AirlineIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {airline.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{airline.routes}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                      <p className="text-xs font-semibold text-[var(--color-accent)] mb-1">Cabin Policy</p>
                      <p className="text-xs text-[var(--text-secondary)]">{airline.cabinPolicy}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                      <p className="text-xs font-semibold text-[var(--color-accent)] mb-1">Cargo Hold Policy</p>
                      <p className="text-xs text-[var(--text-secondary)]">{airline.holdPolicy}</p>
                    </div>
                  </div>

                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {airline.price}
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Booking:</span> {airline.bookingNotes}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pet-Friendly Accommodations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pet-Friendly Accommodations in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            These hotels, riads, and guesthouses actively welcome pets and provide amenities for your animal companions.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per night. Seasonal pricing applies during peak months (October-April) and holidays when rates may increase by 30-50%.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {petFriendlyAccommodations.map((place) => {
              const PlaceIcon = place.icon;
              return (
                <div key={place.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PlaceIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {place.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {place.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building className="w-3.5 h-3.5" />
                          {place.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {place.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{place.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {place.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Vet Clinics ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stethoscope className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Veterinary Clinics Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Reliable veterinary care is available in all major Moroccan cities. Save these contacts before you travel.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Consultation fees shown are starting prices. Emergency and after-hours consultations may cost more. Prices current as of early 2026.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {vetClinics.map((clinic) => {
              const ClinicIcon = clinic.icon;
              return (
                <div key={clinic.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ClinicIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {clinic.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
                        <MapPin className="w-3.5 h-3.5" />
                        {clinic.city}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)] shrink-0" />
                      {clinic.address}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <Phone className="w-3 h-3 text-[var(--color-accent)] shrink-0" />
                      {clinic.phone}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <Clock className="w-3 h-3 text-[var(--color-accent)] shrink-0" />
                      {clinic.hours}
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4">{clinic.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {clinic.services.map((service, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)]"
                      >
                        <CheckCircle className="w-2.5 h-2.5 text-[var(--color-gold)]" />
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Safety Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pet Safety Tips in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Keep your pet safe and healthy throughout your Moroccan adventure with these essential safety guidelines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {safetyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tip.title}
                      </h3>
                      <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                        {tip.urgency}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Package className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pet Travel Packing List
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Do not leave home without these essentials. Many pet supplies are difficult to find in Morocco, so bring everything you need.
          </p>

          <div className="space-y-6">
            {packingList.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Exploring Morocco with Your Pet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-moroccan-garden.webp"
                alt="Lush Moroccan garden with shaded pathways, ideal for walking pets in the cool morning hours"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Garden Walks in Marrakech</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-essaouira-ramparts.webp"
                alt="Essaouira coastal ramparts with ocean views, a pet-friendly walking destination in Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Pet-Friendly Essaouira Coast</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-moroccan-riad-courtyard.webp"
                alt="Traditional Moroccan riad courtyard with fountain, a serene setting for pet-friendly accommodations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Riad Courtyards for Pets</p>
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
            {faqItems.map((faq) => (
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

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Link href="/morocco-visa-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <FileText className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Visa Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Entry requirements, visa-free countries, passport rules, and everything you need to enter Morocco legally.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-travel-tips" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Travel Tips
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential tips for first-time visitors covering transport, safety, cultural etiquette, and budgeting.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/health" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Stethoscope className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Health Guide Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Vaccinations, healthcare facilities, pharmacies, water safety, and staying healthy during your trip.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/morocco-travel-insurance" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Travel Insurance Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Compare travel insurance options, understand coverage for pets, medical emergencies, and trip cancellations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/transport" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Navigation className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Transport in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trains, buses, taxis, rental cars, and the best ways to get around Morocco with your pet.
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

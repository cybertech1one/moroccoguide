import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Car,
  MapPin,
  Clock,
  Fuel,
  Shield,
  AlertTriangle,
  CheckCircle,
  Mountain,
  Compass,
  Route,
  Gauge,
  FileText,
  Eye,
  Navigation,
  CircleDollarSign,
  CreditCard,
  BadgeCheck,
  Info,
  Star,
  Camera,
  Smartphone,
  Moon,
  Sun,
  ThumbsUp,
  XCircle,
  HelpCircle,
  ChevronDown,
  Milestone,
  Signpost,
  Construction,
  ParkingCircle,
  Banknote,
  Users,
  Wrench,
  Map,
  Zap,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title:
    'Driving in Morocco: Complete Road Trip Guide 2025 | Rules, Rental, Routes & Tips',
  description:
    'Everything you need to know about driving in Morocco. Car rental from 250 MAD/day, road types, toll prices, fuel costs, speed limits, police checkpoints, mountain passes, parking, scenic routes, and honest safety advice for self-drive travel.',
  keywords: [
    'driving in morocco',
    'morocco car rental',
    'morocco road trip',
    'morocco driving rules',
    'morocco speed limits',
    'morocco toll roads',
    'morocco police checkpoints',
    'tizi n tichka driving',
    'morocco mountain passes',
    'morocco fuel prices',
    'morocco parking gardien',
    'morocco scenic drives',
    'morocco road conditions',
    'international driving permit morocco',
    'morocco car hire',
    'morocco road safety',
    'morocco night driving',
    'dades gorge road',
    'morocco gps navigation',
    'morocco driving hazards',
  ],
  openGraph: {
    title: 'Driving in Morocco: Complete Road Trip Guide',
    description:
      'The definitive guide to driving in Morocco. Car rental, road types, tolls, fuel, rules, mountain passes, police checkpoints, parking, scenic routes, and practical safety tips with real prices in MAD.',
    url: 'https://citytoursmorocco.com/driving',
    images: [
      {
        url: '/images/hero-dades-valley.webp',
        width: 1200,
        height: 630,
        alt: 'Winding road through the Dades Valley in Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/driving' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  name: 'Driving in Morocco: Complete Road Trip Guide',
  description:
    'Comprehensive guide to driving in Morocco covering car rental, road types, tolls, fuel, driving rules, mountain passes, police checkpoints, parking, scenic routes, and safety advice.',
  url: 'https://citytoursmorocco.com/driving',
  author: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need an International Driving Permit for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An IDP is recommended but not strictly required. Most rental companies accept a valid driving license from your home country, especially if it is in French or English. However, an IDP provides an extra layer of security at police checkpoints and in case of accidents. It costs around $20 and is valid for one year.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to rent a car in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Car rental in Morocco ranges from 250-600 MAD per day ($25-60) depending on the vehicle type. A basic Dacia Logan or Renault Clio costs 250-350 MAD/day. A mid-range SUV runs 400-500 MAD/day. A 4x4 for desert tracks costs 500-800 MAD/day. Book in advance online for the best rates and always inspect the car thoroughly before driving off.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is driving in Morocco safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Driving in Morocco is manageable for experienced drivers who stay alert. Main highways and autoroutes are excellent. Challenges include aggressive overtaking, animals on roads, unlit vehicles at night, and winding mountain passes. Avoid night driving outside cities, drive defensively, and you will be fine.',
      },
    },
    {
      '@type': 'Question',
      name: 'What side of the road do you drive on in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco drives on the right side of the road, like continental Europe and the United States. If you are coming from a left-hand-drive country (UK, Australia, Japan), take extra care at roundabouts and when turning.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is fuel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fuel in Morocco costs approximately 12-14 MAD per liter for diesel and 14-16 MAD per liter for petrol (gasoline). Prices are fairly uniform across the country. Diesel is the more economical choice and most rental cars run on diesel.',
      },
    },
  ],
};

/* ===================================================================
   DATA: REQUIREMENTS
   =================================================================== */

const drivingRequirements = [
  {
    icon: FileText,
    title: 'Valid Driving License',
    description:
      'Your home country driving license is accepted at most rental agencies, especially if it includes a photo and is in French, English, or Arabic. A license from the EU, US, Canada, Australia, or UK is fine as-is for rentals.',
    tip: 'Carry your license at all times while driving. Police will ask for it at checkpoints.',
  },
  {
    icon: BadgeCheck,
    title: 'International Driving Permit (IDP)',
    description:
      'An IDP is strongly recommended but not legally mandatory for tourists renting a car. It translates your license into multiple languages and is recognized by Moroccan police. Get one from your local automobile association before you travel.',
    tip: 'Costs about $20 in the US/UK. Takes 5 minutes at AAA offices. Valid for 1 year.',
  },
  {
    icon: Users,
    title: 'Minimum Age: 21 Years',
    description:
      'Most rental companies require drivers to be at least 21 years old, with some premium categories requiring 25+. Drivers under 25 may face a young driver surcharge of 30-50 MAD/day.',
    tip: 'Check age requirements before booking. Some local agencies are more flexible than internationals.',
  },
  {
    icon: Shield,
    title: 'Insurance Coverage',
    description:
      'Third-party liability insurance is mandatory in Morocco and included with all legitimate rentals. Collision Damage Waiver (CDW) is strongly recommended. Full coverage (CDW + theft protection) gives peace of mind on mountain roads.',
    tip: 'Your credit card may offer rental car insurance. Check before paying for extra coverage at the counter.',
  },
  {
    icon: CreditCard,
    title: 'Credit Card & Deposit',
    description:
      'A credit card is required for the security deposit at pickup, typically 3,000-10,000 MAD blocked on your card. Some budget agencies accept cash deposits, but this is less secure. The hold is released upon return.',
    tip: 'Use a credit card with no foreign transaction fees. Debit cards are rarely accepted for deposits.',
  },
  {
    icon: Compass,
    title: 'Passport',
    description:
      'Keep your passport with you while driving. You may need it at police checkpoints, especially in southern Morocco near the Sahara and in the Rif mountains region. A photocopy is sometimes accepted but the original is better.',
    tip: 'Store a clear photo of your passport on your phone as backup.',
  },
];

/* ===================================================================
   DATA: CAR RENTAL
   =================================================================== */

const rentalCompanies = [
  {
    name: 'Europcar',
    type: 'International',
    priceRange: '300-600 MAD/day',
    pros: 'Reliable fleet, airport desks at all major airports, English-speaking staff, good insurance options',
    cons: 'Higher prices than local agencies, upselling at counter, slow pickup process',
    tip: 'Book online weeks ahead for best rate. Decline extras at the counter.',
  },
  {
    name: 'Hertz',
    type: 'International',
    priceRange: '300-650 MAD/day',
    pros: 'Well-maintained vehicles, international standards, roadside assistance, multiple locations',
    cons: 'Most expensive option, aggressive upselling, long queues at Marrakech airport',
    tip: 'Hertz Gold members skip the queue. Join for free before your trip.',
  },
  {
    name: 'Avis',
    type: 'International',
    priceRange: '280-600 MAD/day',
    pros: 'Good mid-range option, decent fleet, airport and city locations',
    cons: 'Some older vehicles in fleet, inconsistent service quality between locations',
    tip: 'Their Marrakech and Casablanca offices are the best-managed.',
  },
  {
    name: 'Medocar / SureCar',
    type: 'Local Agency',
    priceRange: '200-400 MAD/day',
    pros: 'Significantly cheaper, flexible on age requirements, will deliver car to your riad, negotiable rates for longer rentals',
    cons: 'Older vehicles, less comprehensive insurance, may not speak English, less professional',
    tip: 'Inspect the car meticulously. Take photos of every scratch and dent BEFORE you drive off.',
  },
  {
    name: 'AutoRoute / Zotcar',
    type: 'Local Agency',
    priceRange: '200-350 MAD/day',
    pros: 'Budget-friendly, well-reviewed on Google, usually newer fleet than other locals, good for Dacia Logan/Sandero',
    cons: 'Limited insurance, may charge extra for one-way drop-off, small office presence',
    tip: 'Book directly on their website or via WhatsApp for the best rate. Avoid booking via aggregators.',
  },
  {
    name: 'Booking Aggregators',
    type: 'Online (Discover Cars, Rentalcars.com)',
    priceRange: '250-500 MAD/day',
    pros: 'Easy price comparison, free cancellation, multiple options, user reviews',
    cons: 'Third-party booking complicates disputes, actual car may differ from listing, communication chain is longer',
    tip: 'Read the fine print on insurance. Many aggregator policies have high excess amounts (10,000+ MAD).',
  },
];

const rentalInspectionChecklist = [
  'Walk around the entire car and photograph every panel, bumper, and wheel',
  'Check for existing scratches, dents, and chips on the windshield',
  'Ensure all scratches are marked on the rental agreement form',
  'Test all lights: headlights, brake lights, indicators, fog lights',
  'Check the spare tire condition and confirm jack/wrench are present',
  'Test the air conditioning (essential in summer)',
  'Verify fuel level matches what the contract states',
  'Check that the insurance documents and vehicle registration (carte grise) are in the car',
  'Test the horn (you will need it in cities)',
  'Confirm the mileage reading matches the contract',
  'Take a video walking around the car with the rental agent present',
  'Save the rental company emergency/roadside number in your phone',
];

const insuranceOptions = [
  {
    type: 'Third-Party Liability (TPL)',
    included: true,
    cost: 'Included',
    covers: 'Damage you cause to other vehicles, property, or people',
    recommendation: 'Mandatory. Always included. Not optional.',
  },
  {
    type: 'Collision Damage Waiver (CDW)',
    included: false,
    cost: '50-120 MAD/day',
    covers: 'Damage to your rental car with an excess (deductible) of 5,000-15,000 MAD',
    recommendation: 'Strongly recommended. Morocco roads are unpredictable.',
  },
  {
    type: 'Theft Protection (TP)',
    included: false,
    cost: '30-80 MAD/day',
    covers: 'Theft of or damage from attempted theft, with excess of 5,000-10,000 MAD',
    recommendation: 'Recommended if parking on streets overnight.',
  },
  {
    type: 'Super CDW (Zero Excess)',
    included: false,
    cost: '80-200 MAD/day',
    covers: 'Same as CDW but with zero deductible. You pay nothing for damage.',
    recommendation: 'Best peace of mind. Worth it for mountain/desert driving.',
  },
  {
    type: 'Windshield & Tire Coverage',
    included: false,
    cost: '20-50 MAD/day',
    covers: 'Cracked windshield, flat tires, and undercarriage damage',
    recommendation: 'Very useful for piste (dirt track) driving. Standard roads not necessary.',
  },
  {
    type: 'Personal Accident Insurance (PAI)',
    included: false,
    cost: '20-40 MAD/day',
    covers: 'Medical expenses for driver and passengers in an accident',
    recommendation: 'Skip if you have travel insurance with medical coverage.',
  },
];

const hiddenFees = [
  {
    fee: 'One-Way Drop-Off',
    amount: '500-2,000 MAD',
    description:
      'Picking up in one city and dropping off in another. Marrakech to Fes is the most common and most expensive. Some agencies waive it for rentals over 7 days.',
  },
  {
    fee: 'Airport Surcharge',
    amount: '50-150 MAD',
    description:
      'Fee for picking up or returning at an airport location. Often hidden in the fine print. Ask specifically about this when booking.',
  },
  {
    fee: 'Additional Driver',
    amount: '30-80 MAD/day',
    description:
      'Adding a second authorized driver. Some agencies include one free additional driver. Always declare second drivers to maintain insurance validity.',
  },
  {
    fee: 'Late Return',
    amount: '100-300 MAD/hour',
    description:
      'Most agencies allow a 30-60 minute grace period. After that, hourly charges or a full extra day fee applies. Return on time.',
  },
  {
    fee: 'Fuel Policy',
    amount: 'Variable',
    description:
      'Full-to-full is the fairest policy. Some budget agencies use full-to-empty (you pay for a full tank upfront, no refund for unused fuel). Always clarify the fuel policy.',
  },
  {
    fee: 'Cross-Border Fee',
    amount: 'Not Allowed',
    description:
      'Most rental agreements prohibit taking the car out of Morocco. This means no driving into Spain via the Ceuta/Melilla enclaves or ferry. Violation voids your insurance.',
  },
  {
    fee: 'GPS Rental',
    amount: '40-80 MAD/day',
    description:
      'Do not rent a GPS from the agency. Use Google Maps or Maps.me on your phone with a local SIM card. Much cheaper and more up-to-date.',
  },
  {
    fee: 'Child Seat',
    amount: '30-60 MAD/day',
    description:
      'Baby and child seats available but often in poor condition. Consider bringing your own for long trips. Request at booking time as supply is limited.',
  },
];

/* ===================================================================
   DATA: ROAD TYPES
   =================================================================== */

const roadTypes = [
  {
    type: 'Autoroutes (A-roads)',
    quality: 'Excellent',
    qualityColor: '#2d8a4e',
    speed: '120 km/h',
    description:
      'Morocco\'s toll motorways are genuinely excellent. Smooth tarmac, well-marked lanes, good signage in French and Arabic, rest areas with fuel and food every 50-80 km. The network connects Tangier, Rabat, Casablanca, Marrakech, Agadir, Fes, Meknes, and Oujda.',
    examples: 'A1 (Rabat-Tangier), A3 (Casablanca-Marrakech), A7 (Casablanca-Agadir), A2 (Rabat-Fes)',
    tips: 'Stay in the right lane except when overtaking. Speed cameras are frequent. Carry cash for tolls or get a Jawaz prepaid tag.',
  },
  {
    type: 'Routes Nationales (N-roads)',
    quality: 'Good to Variable',
    qualityColor: '#C4960C',
    speed: '80-100 km/h',
    description:
      'The backbone of Morocco\'s road network. Generally well-paved two-lane highways connecting major cities and towns. Quality varies: N1 along the coast is excellent, while N-roads in the south and east can be rougher with patched surfaces and the occasional pothole.',
    examples: 'N1 (coastal highway), N8 (Marrakech-Beni Mellal), N10 (Ouarzazate-Errachidia), N13 (Fes-Oujda)',
    tips: 'Expect slow trucks on uphill sections, especially in mountains. Overtake with extreme caution. Oncoming traffic may be in your lane during overtaking.',
  },
  {
    type: 'Routes Regionales (R-roads)',
    quality: 'Variable',
    qualityColor: '#C4960C',
    speed: '60-80 km/h',
    description:
      'Regional roads connecting smaller towns and villages. Narrower than N-roads, often no center line markings, and surfaces range from decent tarmac to badly potholed. These roads offer the most authentic Moroccan driving experience.',
    examples: 'R203 (Dades Gorge road), R307 (Ait Benhaddou loop), R105 (Tizi n\'Test pass)',
    tips: 'Drive slowly and stay alert. Expect animals, pedestrians, and cyclists around every bend. Honk before blind corners.',
  },
  {
    type: 'Mountain Passes',
    quality: 'Good but Challenging',
    qualityColor: '#A0522D',
    speed: '30-60 km/h',
    description:
      'Morocco\'s Atlas mountain passes are paved but extremely winding with tight switchbacks, steep drops, no guardrails in many sections, and heavy truck traffic. The scenery is world-class but the driving demands full concentration.',
    examples: 'Tizi n\'Tichka (N9, 2,260m), Tizi n\'Test (R203, 2,092m), Tizi n\'Talrhemt (N8, 1,907m)',
    tips: 'Use low gear on descents. Honk before blind hairpins. Give trucks the right of way. Do not overtake on curves.',
  },
  {
    type: 'Pistes (Dirt/Off-Road Tracks)',
    quality: 'Poor to Non-Existent',
    qualityColor: '#c0392b',
    speed: '20-40 km/h',
    description:
      'Unpaved tracks found in the desert, remote mountain valleys, and between small villages. Range from packed gravel (manageable in a standard car in dry weather) to deep sand and rocky riverbed crossings requiring a true 4x4 with high clearance.',
    examples: 'Lake Iriki piste, Erg Chigaga access road, Gorges du Todra to Gorges du Dades via Msemrir, Tata to Foum Zguid',
    tips: 'NEVER attempt pistes in a standard rental car. Your insurance will not cover damage on unpaved roads. For serious off-road, rent a 4x4 with desert experience or hire a local driver.',
  },
];

/* ===================================================================
   DATA: TOLL ROADS
   =================================================================== */

const tollRoutes = [
  { from: 'Casablanca', to: 'Marrakech', distance: '240 km', time: '2h 30min', toll: '120 MAD', route: 'A7' },
  { from: 'Casablanca', to: 'Tangier', distance: '340 km', time: '3h 30min', toll: '200 MAD', route: 'A1' },
  { from: 'Casablanca', to: 'Rabat', distance: '90 km', time: '1h', toll: '30 MAD', route: 'A3' },
  { from: 'Casablanca', to: 'Fes', distance: '300 km', time: '3h', toll: '130 MAD', route: 'A2' },
  { from: 'Casablanca', to: 'Agadir', distance: '460 km', time: '4h 30min', toll: '190 MAD', route: 'A7/A3' },
  { from: 'Rabat', to: 'Tangier', distance: '250 km', time: '2h 30min', toll: '165 MAD', route: 'A1' },
  { from: 'Rabat', to: 'Fes', distance: '210 km', time: '2h 15min', toll: '100 MAD', route: 'A2' },
  { from: 'Rabat', to: 'Marrakech', distance: '330 km', time: '3h 15min', toll: '150 MAD', route: 'A7' },
  { from: 'Marrakech', to: 'Agadir', distance: '250 km', time: '2h 30min', toll: '70 MAD', route: 'A7' },
  { from: 'Fes', to: 'Meknes', distance: '65 km', time: '40min', toll: '20 MAD', route: 'A2' },
  { from: 'Tangier', to: 'Fes', distance: '340 km', time: '3h 30min', toll: '200 MAD', route: 'A1/A2' },
  { from: 'Casablanca', to: 'El Jadida', distance: '100 km', time: '1h', toll: '40 MAD', route: 'A3' },
];

/* ===================================================================
   DATA: FUEL
   =================================================================== */

const fuelInfo = [
  {
    type: 'Diesel (Gasoil)',
    price: '12-14 MAD/liter',
    notes:
      'Most common fuel type. The majority of rental cars run on diesel. Cheaper than petrol and gives better range. Pumps labeled "Gasoil" or "Diesel".',
  },
  {
    type: 'Petrol (Essence/Sans Plomb)',
    price: '14-16 MAD/liter',
    notes:
      'Unleaded petrol available at all stations. Pumps labeled "Sans Plomb 95" or "Essence". Some premium "Sans Plomb 98" available at larger stations.',
  },
  {
    type: 'Premium Diesel',
    price: '14-16 MAD/liter',
    notes:
      'Premium diesel (Excellium at Total, V-Power at Shell) available at major stations. Not necessary for rental cars but cleaner burning.',
  },
];

const fuelStations = [
  {
    brand: 'Afriquia',
    coverage: 'Most widespread',
    description:
      'Morocco\'s largest fuel station network. Found everywhere including small towns and remote areas. Reliable fuel quality. Many have attached convenience shops.',
  },
  {
    brand: 'Shell',
    coverage: 'Major cities & highways',
    description:
      'International quality standards. V-Power premium fuel available. Clean facilities with good restrooms. Often has attached restaurants or cafes.',
  },
  {
    brand: 'Total Energies',
    coverage: 'Major cities & highways',
    description:
      'Good coverage on autoroutes and in cities. Excellium premium fuel. Rest area stations often the best-maintained with shops and food options.',
  },
  {
    brand: 'Winxo',
    coverage: 'Medium coverage',
    description:
      'Moroccan chain with competitive prices. Good coverage along national routes. Clean stations but fewer amenities than Shell or Total.',
  },
  {
    brand: 'ZIZ',
    coverage: 'Southern Morocco',
    description:
      'State-owned chain with strong presence in southern and eastern Morocco. Often the only option in remote areas. Reliable fuel, basic facilities.',
  },
];

/* ===================================================================
   DATA: DRIVING RULES
   =================================================================== */

const speedLimits = [
  { zone: 'Urban / City Centers', limit: '40-60 km/h', icon: MapPin, note: 'Speed bumps are frequent and often unmarked. Slow down near schools, mosques, and souks.' },
  { zone: 'Outside Cities / National Roads', limit: '80-100 km/h', icon: Route, note: 'Commonly 100 km/h on open N-roads, dropping to 80 km/h near towns. Watch for sudden speed reductions.' },
  { zone: 'Autoroutes / Highways', limit: '120 km/h', icon: Gauge, note: 'Fixed and mobile speed cameras everywhere. Fines start at 300 MAD for 10 km/h over the limit.' },
  { zone: 'Construction Zones', limit: '40-60 km/h', icon: Construction, note: 'Temporary limits strictly enforced. Police often stationed at construction zone exits with radar.' },
];

const drivingRules = [
  {
    rule: 'Right-Hand Traffic',
    description:
      'Morocco drives on the right side of the road, same as continental Europe and the Americas. If you are from the UK, Australia, or Japan, take extra care.',
  },
  {
    rule: 'Seatbelts Mandatory',
    description:
      'Front seat passengers must wear seatbelts at all times. Rear seatbelts are legally required where fitted. Fine: 300 MAD.',
  },
  {
    rule: 'Roundabout Priority',
    description:
      'Traffic already in the roundabout has priority. Yield before entering. In practice, Moroccan drivers often enter without yielding, so be defensive and ready to brake.',
  },
  {
    rule: 'Priority to the Right',
    description:
      'At unmarked intersections, vehicles coming from the right have priority. This catches many visitors off guard. Always slow down at intersections without signs.',
  },
  {
    rule: 'Mobile Phone Use',
    description:
      'Using a handheld phone while driving is illegal. Fine: 300-500 MAD. Use a phone mount and hands-free/Bluetooth if you need GPS navigation.',
  },
  {
    rule: 'Drink Driving',
    description:
      'Legal blood alcohol limit is 0.02% (essentially zero tolerance). Morocco is a Muslim country and drink-driving is taken very seriously. Fines from 5,000 MAD and possible imprisonment.',
  },
  {
    rule: 'Headlights',
    description:
      'Headlights must be on from sunset to sunrise and during poor visibility. Daytime running lights are not mandatory but recommended in mountains.',
  },
  {
    rule: 'Horn Usage',
    description:
      'Technically prohibited in cities (fine: 100 MAD), but universally used. A quick tap means "I am here." In mountains, honk before blind corners to alert oncoming traffic.',
  },
  {
    rule: 'Overtaking',
    description:
      'Only overtake on the left. Dashed center lines indicate overtaking is permitted. Solid lines mean no overtaking. In practice, other drivers may overtake dangerously, so always check mirrors before any maneuver.',
  },
  {
    rule: 'Speed Cameras',
    description:
      'Fixed cameras on autoroutes and mobile radar units on national roads. Fines are mailed to the rental agency and charged to your credit card. Use Waze app for real-time alerts.',
  },
];

/* ===================================================================
   DATA: MOUNTAIN PASSES
   =================================================================== */

const mountainPasses = [
  {
    name: 'Tizi n\'Tichka',
    elevation: '2,260 m',
    road: 'N9',
    route: 'Marrakech to Ouarzazate',
    distance: '200 km',
    driveTime: '4-5 hours',
    difficulty: 'Moderate',
    difficultyColor: '#C4960C',
    description:
      'Morocco\'s highest major mountain pass and the most-driven Atlas crossing. The road is fully paved and well-maintained but features countless tight switchbacks, steep gradients, and no guardrails in many sections. Heavy truck traffic, especially in mornings. Stunning views of terraced Berber villages and snow-capped peaks in winter.',
    tips: [
      'Start early (before 8 AM) to avoid truck convoys and afternoon clouds',
      'Use engine braking on descents; do not ride the brake pedal',
      'Stop at the summit for fresh orange juice from roadside vendors (5 MAD)',
      'Allow extra time in winter (November-March) when snow or ice is possible above 2,000m',
      'Fuel up in Marrakech; next reliable station is in Ouarzazate',
    ],
  },
  {
    name: 'Tizi n\'Test',
    elevation: '2,092 m',
    road: 'R203',
    route: 'Marrakech to Taroudant',
    distance: '220 km',
    driveTime: '5-6 hours',
    difficulty: 'Difficult',
    difficultyColor: '#c0392b',
    description:
      'The more dramatic and far less touristy alternative to Tizi n\'Tichka. An incredibly narrow road carved into cliff faces with vertiginous drops, single-lane sections, and minimal safety barriers. Not for nervous drivers. The reward is some of the most spectacular mountain scenery in North Africa and almost no other tourists.',
    tips: [
      'Not recommended for large vehicles or nervous drivers',
      'The road is narrow enough that vehicles must sometimes reverse to let oncoming traffic pass',
      'Stop at the 12th-century Tin Mal Mosque ruins (one of only two mosques in Morocco non-Muslims can enter)',
      'Fill up in Marrakech; fuel stations are very sparse on this route',
      'Allow a full day for this route; it takes much longer than the map suggests',
    ],
  },
  {
    name: 'Tizi n\'Talrhemt',
    elevation: '1,907 m',
    road: 'N8',
    route: 'Marrakech to Beni Mellal (via Azilal)',
    distance: '190 km',
    driveTime: '4-5 hours',
    difficulty: 'Moderate',
    difficultyColor: '#C4960C',
    description:
      'A less famous but beautiful pass through the central High Atlas. The road passes through Berber villages, walnut orchards, and dramatic gorge scenery. Gateway to the stunning Ouzoud Falls and the Ahansal Valley.',
    tips: [
      'Combine with a stop at Ouzoud Falls (detour of 20 km)',
      'Road conditions are good but narrower than Tizi n\'Tichka',
      'Less truck traffic than N9, making it a more pleasant drive',
      'Good fuel stations in Azilal and Beni Mellal',
    ],
  },
  {
    name: 'Dades Gorge Road',
    elevation: '1,600-2,200 m',
    road: 'R704',
    route: 'Boumalne Dades into the gorge',
    distance: '65 km one-way',
    driveTime: '2-3 hours one-way',
    difficulty: 'Difficult',
    difficultyColor: '#c0392b',
    description:
      'Not a pass in the traditional sense, but one of Morocco\'s most legendary drives. The road follows the Dades River deep into a gorge of towering red rock walls, passing through the famous "Road of a Thousand Curves" section with its insane hairpin bends stacked on top of each other. Beyond the curves, the road becomes a rough piste.',
    tips: [
      'The famous hairpin section is about 25 km from Boumalne Dades',
      'Best photographed in late afternoon when the red rocks glow',
      'The paved road ends about 30 km in; beyond that you need 4x4',
      'Several excellent guesthouses along the gorge for overnight stays',
      'Watch for rock falls, especially after rain',
    ],
  },
  {
    name: 'Ziz Gorge',
    elevation: '1,200-1,650 m',
    road: 'N13',
    route: 'Midelt to Errachidia',
    distance: '150 km',
    driveTime: '2.5-3 hours',
    difficulty: 'Easy-Moderate',
    difficultyColor: '#2d8a4e',
    description:
      'The dramatic descent from the Middle Atlas into the Sahara via the Ziz Valley. The road is wide and well-maintained but winds through a deep gorge with the Ziz River and its palm-lined oasis far below. The Tunnel du Legionnaire carved through the rock is a highlight.',
    tips: [
      'Stop at the panoramic viewpoint above the palm-filled valley',
      'The Hassan Addakhil Dam creates a striking turquoise lake',
      'Road is well-maintained and suitable for any car',
      'Good introduction to Atlas driving if Tichka feels intimidating',
    ],
  },
];

/* ===================================================================
   DATA: POLICE CHECKPOINTS
   =================================================================== */

const checkpointInfo = [
  {
    title: 'Where to Expect Checkpoints',
    description:
      'Police checkpoints (controles) are common throughout Morocco, especially at city entrances/exits, between provinces, in the Rif mountains, and throughout southern Morocco. They are routine and not a cause for alarm. Gendarmes (rural police) handle roads outside cities; police handle urban areas.',
  },
  {
    title: 'What Happens at a Checkpoint',
    description:
      'An officer will wave you to slow down or stop. They may simply wave you through after a glance, or they may ask to see your documents. Occasionally they will ask where you are from, where you are going, and where you are staying. The entire interaction typically takes under 2 minutes.',
  },
  {
    title: 'Documents to Have Ready',
    description:
      'Keep these accessible (not buried in luggage): your passport, driving license, IDP if you have one, rental car insurance papers, and the vehicle registration document (carte grise, kept in the car by the rental agency).',
  },
  {
    title: 'Stay Calm and Friendly',
    description:
      'Be polite, say "Bonjour" with a smile, and hand over documents when asked. Do not argue, do not get impatient, and do not film or photograph the checkpoint. Most officers are professional and friendly, especially to tourists.',
  },
  {
    title: 'If You Get a Fine',
    description:
      'Fines for traffic violations (speeding, seatbelt, mobile phone) are issued on the spot. You receive a receipt. Common fines: speeding 300-600 MAD, no seatbelt 300 MAD, running a stop sign 400 MAD. Pay the fine and keep the receipt. Never offer a bribe.',
  },
  {
    title: 'Southern Morocco Specifics',
    description:
      'Checkpoints are more frequent south of Ouarzazate and in the Western Sahara region. Officers may record your passport number, vehicle plate, and destination in a logbook. This is normal security procedure. Cooperate and you will be through in minutes.',
  },
];

/* ===================================================================
   DATA: PARKING
   =================================================================== */

const parkingTypes = [
  {
    type: 'Street Parking with Gardien',
    cost: '5-10 MAD tip',
    description:
      'The uniquely Moroccan parking system. Unofficial (but widely accepted) parking attendants in fluorescent vests claim sections of street. They guide you into a spot and watch your car. Pay 5 MAD for a short stop, 10 MAD for several hours, 20 MAD overnight. Not tipping is considered rude and your car may not be well-watched.',
    tips: 'Always tip the gardien. It is cheap insurance. Give 5-10 MAD when you leave, not when you arrive.',
  },
  {
    type: 'Paid Parking Lots',
    cost: '5-20 MAD/hour',
    description:
      'Official paid parking (parking payant) is available in major cities, usually marked with blue-painted curbs and ticket machines or attendants with official ID badges. Rates are posted. Receipts are issued. Safer than street parking for longer stops.',
    tips: 'Blue curbs = paid parking. Yellow curbs = no parking. Red and white curbs = absolutely no stopping.',
  },
  {
    type: 'Underground/Covered Parking',
    cost: '10-30 MAD/hour, 50-100 MAD/day',
    description:
      'Available in Casablanca, Rabat, Marrakech (near Jemaa el-Fnaa), and other major cities. Most secure option. Gated, often with CCTV. Best choice for overnight parking in cities.',
    tips: 'The underground lot near Jemaa el-Fnaa in Marrakech charges about 50 MAD/day and is the safest option for the medina area.',
  },
  {
    type: 'Hotel/Riad Parking',
    cost: '30-80 MAD/night or free',
    description:
      'Many hotels offer secure parking. Outside the medina, hotels usually have their own lots. Medina riads often have arrangements with nearby paid lots or gardiens. Always ask your accommodation about parking before arrival.',
    tips: 'If staying in a medina, you cannot drive to the door. Park outside and walk or arrange a porter. Ask your riad for specific parking instructions.',
  },
];

/* ===================================================================
   DATA: SCENIC ROUTES
   =================================================================== */

const scenicRoutes = [
  {
    rank: 1,
    name: 'Tizi n\'Tichka Pass',
    route: 'Marrakech to Ouarzazate (N9)',
    distance: '200 km',
    time: '4-5 hours',
    description:
      'The iconic Atlas crossing. Switchbacks climb from palm-dotted plains to 2,260m through Berber villages clinging to mountainsides. Descend into the red desert landscape of Ouarzazate. Detour to Ait Benhaddou for the most photogenic kasbah in Morocco.',
    bestTime: 'Spring (April-May) for wildflowers and clear skies',
  },
  {
    rank: 2,
    name: 'Dades Gorge Road',
    route: 'Boumalne Dades to Msemrir (R704)',
    distance: '65 km',
    time: '2-3 hours',
    description:
      'A jaw-dropping drive into a red-rock gorge with the famous hairpin bend section that looks like a snake climbing the cliff. Towering canyon walls, riverside kasbahs, and some of Morocco\'s most dramatic road engineering.',
    bestTime: 'Late afternoon for golden light on red rocks',
  },
  {
    rank: 3,
    name: 'Essaouira to Agadir Coastal Road',
    route: 'N1 Coastal Highway',
    distance: '180 km',
    time: '2.5 hours',
    description:
      'Sweeping Atlantic views, rugged cliffs, argan tree forests with goats climbing the branches, and the surf village of Taghazout. One of the most relaxing drives in Morocco with the ocean always beside you.',
    bestTime: 'Year-round; best light in morning heading south',
  },
  {
    rank: 4,
    name: 'Todra Gorge',
    route: 'Tinghir to Todra Gorge (R703)',
    distance: '15 km',
    time: '30 minutes',
    description:
      'A short but breathtaking drive into a canyon with 300-meter vertical limestone walls closing in to just 10 meters apart. The palm-lined oasis of Tinghir frames the entrance. Popular with rock climbers and photographers.',
    bestTime: 'Morning when sunlight penetrates the gorge',
  },
  {
    rank: 5,
    name: 'Ait Benhaddou to Telouet',
    route: 'CT1506 (back road)',
    distance: '45 km',
    time: '2 hours (partially unpaved)',
    description:
      'A spectacular back-road connecting two of Morocco\'s finest kasbahs. The piste crosses a high-altitude plateau with views of snow peaks and deep valleys. The abandoned Glaoui palace at Telouet is hauntingly beautiful.',
    bestTime: 'Dry season only (April-October). Road may be impassable after rain.',
  },
  {
    rank: 6,
    name: 'Tizi n\'Test Pass',
    route: 'Marrakech to Taroudant (R203)',
    distance: '220 km',
    time: '5-6 hours',
    description:
      'The wild and lonely alternative Atlas crossing. Narrow cliff-edge roads, vertigo-inducing drops, and almost zero tourist traffic. The 12th-century Tin Mal Mosque ruins sit in a remote valley below the pass.',
    bestTime: 'Summer and early autumn; avoid after heavy rain or in winter',
  },
  {
    rank: 7,
    name: 'The Road of 1,000 Kasbahs',
    route: 'Ouarzazate to Tinghir (N10)',
    distance: '170 km',
    time: '2.5 hours',
    description:
      'A straight desert highway lined with crumbling kasbahs, palm oases, and the rose-growing village of Kelaat M\'Gouna. The Dades Valley spreads out on both sides with pink-earth buildings against green palms.',
    bestTime: 'Late April to mid-May during the rose harvest festival',
  },
  {
    rank: 8,
    name: 'Chefchaouen to Akchour',
    route: 'Regional road to Akchour',
    distance: '30 km',
    time: '1 hour',
    description:
      'A winding Rif mountain road through pine forests and past terraced farms to the Akchour waterfalls trailhead. The road itself is an adventure with tight curves and stunning views over the blue city below.',
    bestTime: 'Spring (March-May) when waterfalls are at full flow',
  },
  {
    rank: 9,
    name: 'Anti-Atlas Loop',
    route: 'Taroudant to Tafraout to Tiznit',
    distance: '300 km',
    time: '6-7 hours',
    description:
      'The least-visited spectacular drive in Morocco. Pink granite mountains, prehistoric rock carvings, the painted rocks of Tafraout, and oasis villages where little has changed in centuries. Almost no other tourists.',
    bestTime: 'February-March when almond trees are in bloom',
  },
  {
    rank: 10,
    name: 'Ziz Valley Descent',
    route: 'Midelt to Errachidia (N13)',
    distance: '150 km',
    time: '2.5 hours',
    description:
      'The dramatic transition from Atlas mountains to Sahara. Descend through the Ziz Gorge with its palm-filled valley a thousand feet below, past the Tunnel du Legionnaire and the turquoise Hassan Addakhil reservoir.',
    bestTime: 'Autumn (October-November) for date harvest and golden light',
  },
];

/* ===================================================================
   DATA: NIGHT DRIVING
   =================================================================== */

const nightDrivingHazards = [
  {
    hazard: 'Unlit Vehicles',
    description:
      'Donkey carts, tractors, bicycles, and even some cars drive without lights at night. On rural roads, you may encounter completely dark vehicles with zero reflectors. This is the single most dangerous aspect of night driving in Morocco.',
  },
  {
    hazard: 'Animals on the Road',
    description:
      'Donkeys, cattle, sheep, goats, dogs, and cats wander onto roads after dark. In rural areas, animals are often untethered at night. Hitting a large animal at speed can be fatal to both the animal and the driver.',
  },
  {
    hazard: 'Pedestrians in Dark Clothing',
    description:
      'Pedestrians walking along or crossing unlit rural roads. Many wear dark djellabas (robes) that are nearly invisible. Morocco has one of the highest pedestrian fatality rates in the region.',
  },
  {
    hazard: 'Oncoming Headlight Blinding',
    description:
      'Many drivers use full beam and do not dip for oncoming traffic. Combined with narrow two-lane roads, this can be temporarily blinding. Slow down when you see approaching headlights.',
  },
  {
    hazard: 'Unmarked Speed Bumps',
    description:
      'Speed bumps on village approaches are often unpainted and invisible at night. Hitting one at speed can damage the car and your spine. If entering any village after dark, crawl through.',
  },
  {
    hazard: 'Mountain Roads',
    description:
      'Mountain passes like Tizi n\'Tichka at night are terrifying. No street lighting, no reflectors, tight switchbacks over cliffs in pitch darkness. Absolutely avoid mountain driving after sunset.',
  },
];

/* ===================================================================
   DATA: GPS & NAVIGATION
   =================================================================== */

const navigationApps = [
  {
    name: 'Google Maps',
    rating: 'Excellent',
    ratingColor: '#2d8a4e',
    description:
      'Works very well in Morocco. Accurate routing on all paved roads, good traffic data in cities, up-to-date business listings. Download offline maps for the regions you will visit before leaving your hotel.',
    tips: 'Download offline maps for entire Morocco (about 500 MB). Traffic data is reliable in Casablanca, Marrakech, Rabat, and Tangier.',
  },
  {
    name: 'Maps.me',
    rating: 'Very Good (Offline)',
    ratingColor: '#2d8a4e',
    description:
      'The best offline navigation option. Uses OpenStreetMap data which is surprisingly detailed in Morocco, including medina paths, hiking trails, and pistes. Essential backup when you have no signal.',
    tips: 'Download the Morocco map before your trip. Works in airplane mode. Shows more off-road tracks and paths than Google Maps.',
  },
  {
    name: 'Waze',
    rating: 'Good (Cities)',
    ratingColor: '#C4960C',
    description:
      'Excellent for speed camera and police checkpoint alerts in cities and on autoroutes. Community-driven alerts are accurate and up-to-date. Less useful on rural roads where the user base is small.',
    tips: 'Best used alongside Google Maps. Run Waze for the alerts while using Google Maps for navigation.',
  },
  {
    name: 'Organic Maps',
    rating: 'Good (Offline)',
    ratingColor: '#C4960C',
    description:
      'Privacy-focused offline maps based on OpenStreetMap. Similar to Maps.me but without ads or tracking. Clean interface and good for hiking. Growing popularity among travelers.',
    tips: 'Download Morocco map before departure. Good for mountain trekking routes that Google Maps does not show.',
  },
];

/* ===================================================================
   DATA: COMMON HAZARDS
   =================================================================== */

const commonHazards = [
  {
    hazard: 'Donkeys and Mules',
    severity: 'High',
    severityColor: '#c0392b',
    description:
      'Still used as primary transport in rural Morocco. They walk along road edges, sometimes in the road itself, and rarely have reflectors. Most common in the Atlas mountains, Rif, and farming regions.',
    advice: 'Slow down in rural areas. Expect animals around every corner. Give them wide berth when passing.',
  },
  {
    hazard: 'Motorcycles and Mopeds',
    severity: 'High',
    severityColor: '#c0392b',
    description:
      'Morocco runs on small motorcycles. They weave between lanes, ride on shoulders, carry improbable loads, and frequently run red lights. In cities, they are everywhere. Many riders wear no helmet.',
    advice: 'Always check mirrors before turning or changing lanes. They appear from nowhere. In cities, expect mopeds to fill any gap.',
  },
  {
    hazard: 'Pedestrians',
    severity: 'High',
    severityColor: '#c0392b',
    description:
      'Pedestrians cross roads at any point, often without looking. Children dart into streets. People walk in the road where there are no sidewalks. Near markets and school zones, the road essentially becomes a pedestrian space.',
    advice: 'Reduce speed dramatically near villages, schools, and markets. Honk gently to alert pedestrians of your approach.',
  },
  {
    hazard: 'Blind Corners and Overtaking',
    severity: 'High',
    severityColor: '#c0392b',
    description:
      'Moroccan drivers overtake aggressively, including on blind corners, over hill crests, and into oncoming traffic. You will encounter vehicles in your lane coming head-on. This is the biggest culture shock for foreign drivers.',
    advice: 'Stay right, drive defensively, and be ready to brake or move to the shoulder at any time. Never assume your lane is clear.',
  },
  {
    hazard: 'Unmarked Speed Bumps',
    severity: 'Medium',
    severityColor: '#C4960C',
    description:
      'Speed bumps (dos d\'ane) at village entrances are often unpainted and hard to see, especially on dark road surfaces. They are aggressive: high and sharp, designed to force you to near-stop.',
    advice: 'Approaching any village, assume there are speed bumps. If you see buildings ahead, start slowing. Look for the telltale flattened bump shape.',
  },
  {
    hazard: 'Trucks on Mountain Roads',
    severity: 'Medium',
    severityColor: '#C4960C',
    description:
      'Heavy trucks struggle on Atlas mountain gradients, crawling uphill and sometimes losing control of speed downhill. They swing wide on switchbacks, crossing the center line. You cannot see around them.',
    advice: 'Never overtake a truck on a mountain bend. Wait for a straight section with clear visibility. Flash your lights to signal you want to pass.',
  },
  {
    hazard: 'Road Works with No Warning',
    severity: 'Medium',
    severityColor: '#C4960C',
    description:
      'Construction zones may have no advance warning signs, no cones, and no flaggers. You might come around a corner to find half the road missing or a trench across the lane.',
    advice: 'Drive at a speed where you can stop within your visible road distance. This is especially critical on regional (R) roads.',
  },
  {
    hazard: 'Gravel and Sand on Roads',
    severity: 'Medium',
    severityColor: '#C4960C',
    description:
      'Wind-blown sand across desert roads and gravel on mountain roads reduce traction. After rain, mud and debris can make surfaces slippery. Road edges are soft and can trap a wheel.',
    advice: 'Reduce speed on sandy/gravelly sections. Do not brake hard on loose surfaces. Keep a firm grip on the steering wheel in crosswinds.',
  },
];

/* ===================================================================
   DATA: FAQ
   =================================================================== */

const faqs = [
  {
    question: 'Do I need an International Driving Permit for Morocco?',
    answer:
      'An IDP is recommended but not strictly required. Most rental companies accept a valid driving license from your home country, especially if it is in French or English. However, an IDP provides extra security at police checkpoints and in case of accidents. It costs about $20 from your local automobile association and is valid for 1 year. Get one before you travel; you cannot obtain one in Morocco.',
  },
  {
    question: 'How much does it cost to rent a car in Morocco?',
    answer:
      'Budget cars (Dacia Logan, Renault Clio) cost 250-350 MAD/day ($25-35). Mid-range cars (Dacia Duster, Peugeot 3008) cost 400-500 MAD/day. True 4x4s (Toyota Land Cruiser, Mitsubishi Pajero) for desert/off-road run 600-1,200 MAD/day. Weekly rates offer 10-20% discounts. Prices are higher in peak season (Easter, July-August, Christmas) and at airport locations. Book online 2-4 weeks ahead for the best rates.',
  },
  {
    question: 'Is driving in Morocco safe?',
    answer:
      'Driving in Morocco is safe if you drive defensively, stay alert, and follow the guidelines in this page. The autoroutes are as good as any in Europe. National roads require more attention due to mixed traffic (trucks, donkeys, mopeds, pedestrians). Mountain passes demand concentration. The main risks are aggressive overtaking by other drivers, animals on roads, and night driving. Avoid driving after dark and you eliminate the biggest dangers.',
  },
  {
    question: 'What side of the road do they drive on in Morocco?',
    answer:
      'Morocco drives on the right side of the road, same as France, Spain, the USA, and most of continental Europe. Vehicles are left-hand drive. If you are from the UK, Australia, Japan, or another left-hand-traffic country, take extra care at roundabouts, intersections, and when overtaking. Most people adjust within the first hour.',
  },
  {
    question: 'Should I rent a 4x4 for Morocco?',
    answer:
      'For most itineraries, no. A standard car handles all paved roads including the Atlas passes (Tizi n\'Tichka, Tizi n\'Test). You only need a 4x4 if you plan to drive unpaved pistes to Erg Chigaga dunes, remote oases, or off-road mountain tracks. If your trip is Marrakech-Fes-Desert (Merzouga via paved roads)-Coast, a regular car is fine. A Dacia Duster (compact SUV) is a good compromise: higher clearance but affordable.',
  },
  {
    question: 'Can I drive from Morocco to Spain?',
    answer:
      'You cannot drive directly from Morocco to Spain; the Strait of Gibraltar requires a ferry. However, most rental cars CANNOT be taken out of Morocco. The rental agreement prohibits cross-border travel. If you want to visit the Spanish enclaves of Ceuta or Melilla, you would need specific permission from the rental agency (usually denied) or walk across the border. For Spain, return the car in Morocco and take the ferry as a foot passenger.',
  },
  {
    question: 'How are the roads between Marrakech and Fes?',
    answer:
      'There are two main routes. The autoroute via Casablanca (A7/A3/A2) is 570 km, takes 5-5.5 hours on excellent highway, and costs about 250 MAD in tolls. The scenic route via Beni Mellal and Azrou (N8/N13) is 530 km through the Middle Atlas with cedar forests and Barbary macaques but takes 7-8 hours on two-lane roads. The highway is faster; the scenic route is more rewarding if you have time.',
  },
  {
    question: 'What happens if I have an accident?',
    answer:
      'Stop immediately, do not move the vehicles, and turn on hazard lights. Call the police (190 from a landline or mobile). Exchange information with the other driver. Take photos of everything. Contact your rental company. Police will file a report (constat) which you need for insurance claims. Do not admit fault or sign any document you do not understand. If there are injuries, call emergency services (150 for ambulance).',
  },
  {
    question: 'Is there Uber in Morocco?',
    answer:
      'Uber does not operate in Morocco. The most popular ride-hailing apps are inDrive (negotiate your fare) and Careem (fixed prices, Uber-style). Both work well in Casablanca, Marrakech, Rabat, Tangier, and Fes. For areas without app coverage, use petit taxis (city) or grand taxis (between cities).',
  },
  {
    question: 'How do I handle a flat tire or breakdown?',
    answer:
      'Contact your rental company roadside assistance number immediately. Move the car off the road if possible. Turn on hazard lights and place the warning triangle 50m behind the vehicle. In cities, help usually arrives quickly. In remote areas, Moroccan drivers are incredibly generous: flag someone down and they will almost certainly stop to help. Most roadside tire shops (vulcanisateurs) can fix a flat for 20-50 MAD.',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function DrivingInMoroccoPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <img
          src="/images/hero-dades-valley.webp"
          alt="Winding road through the Dades Valley with red rock formations in Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 container-morocco text-center py-24 md:py-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Car className="w-4 h-4" />
            Complete Self-Drive Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Driving in Morocco: Complete Road Trip Guide
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Everything you need to know about renting a car, road types, tolls,
            fuel, driving rules, mountain passes, police checkpoints, parking,
            and staying safe on Morocco&apos;s incredible roads.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#car-rental"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#A0522D] text-white font-semibold hover:bg-[#8B4726] transition-colors"
            >
              <Car className="w-4 h-4" /> Car Rental Guide
            </a>
            <a
              href="#scenic-routes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Camera className="w-4 h-4" /> Scenic Routes
            </a>
            <a
              href="#driving-rules"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Shield className="w-4 h-4" /> Driving Rules
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          BREADCRUMB
          ============================================================ */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#A0522D]/10">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <li>
              <Link href="/" className="hover:text-[#A0522D] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li>
              <Link href="/transport" className="hover:text-[#A0522D] transition-colors">
                Transport
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-[#1A1814] font-medium">Driving in Morocco</li>
          </ol>
        </div>
      </nav>

      {/* ============================================================
          TABLE OF CONTENTS
          ============================================================ */}
      <section className="py-10 md:py-14 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-6 text-center">
            What&apos;s in This Guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { href: '#requirements', icon: FileText, label: 'Requirements & Documents' },
              { href: '#car-rental', icon: Car, label: 'Car Rental Guide' },
              { href: '#road-types', icon: Route, label: 'Road Types & Conditions' },
              { href: '#toll-roads', icon: CreditCard, label: 'Toll Roads & Prices' },
              { href: '#fuel', icon: Fuel, label: 'Fuel Prices & Stations' },
              { href: '#driving-rules', icon: Shield, label: 'Driving Rules & Speed Limits' },
              { href: '#mountain-passes', icon: Mountain, label: 'Mountain Passes' },
              { href: '#police-checkpoints', icon: BadgeCheck, label: 'Police Checkpoints' },
              { href: '#parking', icon: ParkingCircle, label: 'Parking & Gardien System' },
              { href: '#scenic-routes', icon: Camera, label: 'Top 10 Scenic Routes' },
              { href: '#night-driving', icon: Moon, label: 'Night Driving Warnings' },
              { href: '#gps-navigation', icon: Smartphone, label: 'GPS & Maps Apps' },
              { href: '#common-hazards', icon: AlertTriangle, label: 'Common Hazards' },
              { href: '#faq', icon: HelpCircle, label: 'FAQ' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="card-moroccan p-4 flex items-center gap-3 hover:border-[#A0522D]/30 transition-colors group"
              >
                <item.icon className="w-5 h-5 text-[#A0522D] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-[#1A1814] group-hover:text-[#A0522D] transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 1: REQUIREMENTS
          ============================================================ */}
      <section id="requirements" className="py-16 md:py-20 scroll-mt-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-medium mb-4">
              <FileText className="w-4 h-4" /> Before You Drive
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Requirements & Documents
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              What you need to legally drive in Morocco. Get these sorted before your trip to avoid
              any issues at the rental counter or police checkpoints.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {drivingRequirements.map((req) => (
              <div key={req.title} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#A0522D]/10 shrink-0">
                    <req.icon className="w-6 h-6 text-[#A0522D]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-2">
                      {req.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                      {req.description}
                    </p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-[#C4960C]/5 border border-[#C4960C]/15">
                      <Info className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#1A1814]/70">{req.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: CAR RENTAL
          ============================================================ */}
      <section id="car-rental" className="py-16 md:py-20 bg-[#FAF8F5] scroll-mt-20">
        <div className="container-morocco max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-medium mb-4">
              <Car className="w-4 h-4" /> Renting a Car
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Car Rental Guide
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From 250 MAD/day ($25). Everything you need to know about renting,
              inspecting, insuring, and returning a car in Morocco.
            </p>
          </div>

          {/* Rental Companies */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-6">
            Rental Companies
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {rentalCompanies.map((company) => (
              <div key={company.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-[#1A1814] text-lg">{company.name}</h4>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] font-medium">
                    {company.type}
                  </span>
                </div>
                <p className="text-[#C4960C] font-bold text-sm mb-3">{company.priceRange}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--text-secondary)]">{company.pros}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--text-secondary)]">{company.cons}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-[#C4960C]/5 border border-[#C4960C]/15">
                  <Star className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1A1814]/70">{company.tip}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Inspection Checklist */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-6">
            Pre-Rental Inspection Checklist
          </h3>
          <div className="card-moroccan p-6 mb-12">
            <p className="text-[var(--text-secondary)] mb-6">
              Do this EVERY TIME before driving off. Takes 10 minutes. Saves you thousands.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {rentalInspectionChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#A0522D]/10 shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#A0522D]">{index + 1}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance Options */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-6">
            Insurance Options
          </h3>
          <div className="space-y-4 mb-12">
            {insuranceOptions.map((ins) => (
              <div key={ins.type} className="card-moroccan p-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-[#1A1814]">{ins.type}</h4>
                      {ins.included && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                          Included
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-1">{ins.covers}</p>
                    <p className="text-xs text-[#A0522D]">{ins.recommendation}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-bold text-[#C4960C]">{ins.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hidden Fees */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-6">
            Watch Out: Hidden Fees
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hiddenFees.map((item) => (
              <div key={item.fee} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-[#1A1814] text-sm">{item.fee}</h4>
                  <span className="text-sm font-bold text-[#c0392b]">{item.amount}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: ROAD TYPES
          ============================================================ */}
      <section id="road-types" className="py-16 md:py-20 scroll-mt-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-medium mb-4">
              <Route className="w-4 h-4" /> Road Conditions
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Road Types in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From world-class autoroutes to terrifying mountain pistes.
              Morocco&apos;s roads cover the full spectrum.
            </p>
          </div>
          <div className="space-y-6">
            {roadTypes.map((road) => (
              <div key={road.type} className="card-moroccan p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-xl">
                        {road.type}
                      </h3>
                      <span
                        className="text-xs px-3 py-1 rounded-full font-medium text-white"
                        style={{ backgroundColor: road.qualityColor }}
                      >
                        {road.quality}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-[#1A1814]/5 text-[#1A1814] font-medium">
                        Max: {road.speed}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                      {road.description}
                    </p>
                    <p className="text-xs text-[#1A1814]/60 mb-3">
                      <strong>Examples:</strong> {road.examples}
                    </p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-[#A0522D]/5 border border-[#A0522D]/10">
                      <Compass className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#1A1814]/70">{road.tips}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-morocco max-w-4xl">
          <img src="/images/poster-morocco-road-trip.webp" alt="Scenic poster-style illustration of a Morocco road trip featuring a winding highway through dramatic Atlas Mountain passes and sun-drenched desert landscapes" loading="lazy" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ============================================================
          SECTION 4: TOLL ROADS
          ============================================================ */}
      <section id="toll-roads" className="py-16 md:py-20 bg-[#FAF8F5] scroll-mt-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-medium mb-4">
              <CreditCard className="w-4 h-4" /> Toll Highways
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Toll Roads & Prices
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s autoroute network is excellent and affordable. Here are
              the exact toll prices for major routes.
            </p>
          </div>

          {/* Toll Table */}
          <div className="card-moroccan overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1A1814] text-white">
                    <th className="px-4 py-3 text-left font-medium">From</th>
                    <th className="px-4 py-3 text-left font-medium">To</th>
                    <th className="px-4 py-3 text-center font-medium">Route</th>
                    <th className="px-4 py-3 text-center font-medium">Distance</th>
                    <th className="px-4 py-3 text-center font-medium">Drive Time</th>
                    <th className="px-4 py-3 text-right font-medium">Toll</th>
                  </tr>
                </thead>
                <tbody>
                  {tollRoutes.map((route, index) => (
                    <tr
                      key={`${route.from}-${route.to}`}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}
                    >
                      <td className="px-4 py-3 font-medium text-[#1A1814]">{route.from}</td>
                      <td className="px-4 py-3 font-medium text-[#1A1814]">{route.to}</td>
                      <td className="px-4 py-3 text-center text-[#A0522D] font-medium">{route.route}</td>
                      <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{route.distance}</td>
                      <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{route.time}</td>
                      <td className="px-4 py-3 text-right font-bold text-[#C4960C]">{route.toll}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <Banknote className="w-6 h-6 text-[#A0522D]" />
                <h3 className="font-bold text-[#1A1814] text-lg">Cash Payment</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                All toll booths accept cash in MAD. Keep small bills (20, 50, 100 MAD notes) handy.
                The booths usually give change. No credit cards accepted at toll booths.
                Approach the lanes marked with a hand symbol for cash payment.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-[#C4960C]" />
                <h3 className="font-bold text-[#1A1814] text-lg">Jawaz Prepaid Tag</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Electronic toll tag for faster passage through dedicated Jawaz lanes. Available at
                ADM offices, some fuel stations, and online. Costs 50 MAD for the tag plus
                whatever balance you load. Worth it if you are driving extensively on autoroutes.
                Some rental cars come with a Jawaz tag (charges added to your bill).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: FUEL
          ============================================================ */}
      <section id="fuel" className="py-16 md:py-20 scroll-mt-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-medium mb-4">
              <Fuel className="w-4 h-4" /> Refueling
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Fuel Prices & Stations
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Fuel in Morocco costs approximately 12-16 MAD per liter. Stations are
              plentiful on main routes but sparse in the desert and mountains.
            </p>
          </div>

          {/* Fuel Types */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-6">
            Fuel Types & Prices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {fuelInfo.map((fuel) => (
              <div key={fuel.type} className="card-moroccan p-6 text-center">
                <Fuel className="w-8 h-8 text-[#A0522D] mx-auto mb-3" />
                <h4 className="font-bold text-[#1A1814] mb-2">{fuel.type}</h4>
                <p className="text-2xl font-bold text-[#C4960C] mb-3">{fuel.price}</p>
                <p className="text-sm text-[var(--text-secondary)]">{fuel.notes}</p>
              </div>
            ))}
          </div>

          {/* Fuel Station Brands */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-6">
            Fuel Station Brands
          </h3>
          <div className="space-y-4 mb-12">
            {fuelStations.map((station) => (
              <div key={station.brand} className="card-moroccan p-5 flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#A0522D]/10 shrink-0">
                  <Fuel className="w-5 h-5 text-[#A0522D]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-[#1A1814]">{station.brand}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#C4960C]/10 text-[#C4960C] font-medium">
                      {station.coverage}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{station.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Remote Area Warning */}
          <div className="zellige-border card-moroccan p-6 bg-[#c0392b]/5 border-[#c0392b]/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-[#c0392b] shrink-0" />
              <div>
                <h3 className="font-bold text-[#1A1814] text-lg mb-2">Fuel in Remote Areas</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  <strong>Always fill up before entering remote areas.</strong> In the desert
                  (south of Ouarzazate), the Atlas mountains, and the Rif, fuel stations can be
                  50-100+ km apart. Between Rissani and Merzouga (30 km), there are no stations.
                  Between Tizi n&apos;Tichka summit and Ouarzazate, options are limited. On the
                  Tizi n&apos;Test route, the nearest station after Marrakech may be 150+ km away.
                  Never let your tank drop below half in remote regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: DRIVING RULES
          ============================================================ */}
      <section id="driving-rules" className="py-16 md:py-20 bg-[#FAF8F5] scroll-mt-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-medium mb-4">
              <Shield className="w-4 h-4" /> Know the Rules
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Driving Rules & Speed Limits
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco drives on the right. Speed limits are enforced by cameras.
              Here are the rules that matter for tourists.
            </p>
          </div>

          {/* Speed Limits */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-6">
            Speed Limits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {speedLimits.map((limit) => (
              <div key={limit.zone} className="card-moroccan p-5 text-center">
                <div className="w-16 h-16 rounded-full border-4 border-[#c0392b] flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-[#1A1814]">{limit.limit.split('-').pop()?.replace(' km/h', '')}</span>
                </div>
                <h4 className="font-bold text-[#1A1814] text-sm mb-2">{limit.zone}</h4>
                <p className="text-xs text-[var(--text-secondary)]">{limit.note}</p>
              </div>
            ))}
          </div>

          {/* Driving Rules */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-6">
            Important Rules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {drivingRules.map((item) => (
              <div key={item.rule} className="card-moroccan p-5">
                <h4 className="font-bold text-[#1A1814] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#A0522D]" />
                  {item.rule}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: MOUNTAIN PASSES
          ============================================================ */}
      <section id="mountain-passes" className="py-16 md:py-20 scroll-mt-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-medium mb-4">
              <Mountain className="w-4 h-4" /> Atlas Mountains
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Mountain Passes
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Driving the Atlas mountain passes is one of Morocco&apos;s greatest
              experiences. Here is what to expect on each major crossing.
            </p>
          </div>
          <div className="space-y-8">
            {mountainPasses.map((pass) => (
              <div key={pass.name} className="card-moroccan p-6 zellige-border">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1A1814] text-2xl">
                        {pass.name}
                      </h3>
                      <span
                        className="text-xs px-3 py-1 rounded-full font-medium text-white"
                        style={{ backgroundColor: pass.difficultyColor }}
                      >
                        {pass.difficulty}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)] mb-4">
                      <span className="flex items-center gap-1">
                        <Mountain className="w-4 h-4 text-[#A0522D]" /> {pass.elevation}
                      </span>
                      <span className="flex items-center gap-1">
                        <Route className="w-4 h-4 text-[#A0522D]" /> {pass.road}: {pass.route}
                      </span>
                      <span className="flex items-center gap-1">
                        <Milestone className="w-4 h-4 text-[#A0522D]" /> {pass.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-[#A0522D]" /> {pass.driveTime}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                      {pass.description}
                    </p>
                    <div className="p-4 rounded-xl bg-[#A0522D]/5 border border-[#A0522D]/10">
                      <h4 className="font-bold text-[#1A1814] text-sm mb-3 flex items-center gap-2">
                        <Compass className="w-4 h-4 text-[#A0522D]" /> Driving Tips
                      </h4>
                      <ul className="space-y-2">
                        {pass.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#A0522D] shrink-0 mt-0.5" />
                            {tip}
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

      {/* ============================================================
          SECTION 8: POLICE CHECKPOINTS
          ============================================================ */}
      <section id="police-checkpoints" className="py-16 md:py-20 bg-[#FAF8F5] scroll-mt-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-medium mb-4">
              <BadgeCheck className="w-4 h-4" /> Stay Prepared
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Police Checkpoints
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Checkpoints are routine in Morocco. They are not a cause for alarm.
              Here is what to expect and how to handle them smoothly.
            </p>
          </div>
          <div className="space-y-4">
            {checkpointInfo.map((item, index) => (
              <div key={item.title} className="card-moroccan p-6 flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#A0522D]/10 shrink-0">
                  <span className="text-sm font-bold text-[#A0522D]">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1814] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Reference Card */}
          <div className="mt-8 card-moroccan p-6 bg-[#C4960C]/5 border-[#C4960C]/20">
            <h3 className="font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#C4960C]" /> Quick Reference: Documents to Keep Accessible
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Passport (original)',
                'Driving license',
                'International Driving Permit',
                'Rental car contract',
                'Insurance papers',
                'Vehicle registration (carte grise)',
              ].map((doc) => (
                <div key={doc} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C4960C]" />
                  <span className="text-sm text-[#1A1814]">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9: PARKING
          ============================================================ */}
      <section id="parking" className="py-16 md:py-20 scroll-mt-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-medium mb-4">
              <ParkingCircle className="w-4 h-4" /> Parking
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Parking & the Gardien System
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco has a unique informal parking attendant system. Understanding it
              makes parking stress-free. Never leave valuables visible in the car.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {parkingTypes.map((parking) => (
              <div key={parking.type} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-[#1A1814] text-lg">{parking.type}</h3>
                  <span className="text-sm font-bold text-[#C4960C]">{parking.cost}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {parking.description}
                </p>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-[#A0522D]/5 border border-[#A0522D]/10">
                  <ThumbsUp className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1A1814]/70">{parking.tips}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Security Warning */}
          <div className="mt-8 card-moroccan p-6 bg-[#c0392b]/5 border-[#c0392b]/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#c0392b] shrink-0" />
              <div>
                <h3 className="font-bold text-[#1A1814] mb-2">Never Leave Valuables in the Car</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  This cannot be stressed enough. Take laptops, cameras, phones, bags, and anything
                  valuable with you. Even in a locked car with a gardien watching, break-ins happen,
                  especially in tourist areas. If you must leave bags, lock them in the trunk out
                  of sight. An empty, visible car interior is the best deterrent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 10: SCENIC ROUTES
          ============================================================ */}
      <section id="scenic-routes" className="py-16 md:py-20 bg-[#FAF8F5] scroll-mt-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-medium mb-4">
              <Camera className="w-4 h-4" /> Best Drives
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Top 10 Scenic Driving Routes
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is one of the most visually stunning countries on Earth to
              drive through. These are the ten roads you should not miss.
            </p>
          </div>
          <div className="space-y-6">
            {scenicRoutes.map((scenic) => (
              <div key={scenic.rank} className="card-moroccan p-6 flex items-start gap-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C4960C]/10 shrink-0">
                  <span className="text-lg font-bold text-[#C4960C]">#{scenic.rank}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-xl mb-1">
                    {scenic.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-xs text-[var(--text-secondary)] mb-3">
                    <span className="flex items-center gap-1">
                      <Route className="w-3.5 h-3.5 text-[#A0522D]" /> {scenic.route}
                    </span>
                    <span className="flex items-center gap-1">
                      <Milestone className="w-3.5 h-3.5 text-[#A0522D]" /> {scenic.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#A0522D]" /> {scenic.time}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {scenic.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-[#C4960C]" />
                    <span className="text-xs font-medium text-[#C4960C]">Best time: {scenic.bestTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 11: NIGHT DRIVING
          ============================================================ */}
      <section id="night-driving" className="py-16 md:py-20 scroll-mt-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c0392b]/10 text-[#c0392b] text-sm font-medium mb-4">
              <Moon className="w-4 h-4" /> Critical Warning
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Night Driving: Avoid If Possible
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              This is the single most important safety advice in this guide.
              <strong className="text-[#c0392b]"> Do not drive at night outside of cities.</strong> The
              risks are significantly higher than daytime driving.
            </p>
          </div>
          <div className="space-y-4">
            {nightDrivingHazards.map((item, index) => (
              <div key={item.hazard} className="card-moroccan p-5 border-l-4 border-l-[#c0392b]">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-5 h-5 text-[#c0392b] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#1A1814] mb-1">{item.hazard}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alternative Advice */}
          <div className="mt-8 card-moroccan p-6 bg-[#2d8a4e]/5 border-[#2d8a4e]/20">
            <h3 className="font-bold text-[#1A1814] text-lg mb-4 flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-[#2d8a4e]" /> Instead of Night Driving
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Plan your driving to finish before sunset (check sunset times for Morocco)',
                'If delayed, stop at the nearest town and find a hotel for the night',
                'On autoroutes (toll highways), night driving is much safer than on rural roads',
                'If you must drive at night, reduce speed by 30-40% and stay on main roads',
                'Use high beams on unlit roads but dip immediately for oncoming traffic',
                'Watch for reflections of animal eyes in your headlights',
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2d8a4e] shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-secondary)]">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 12: GPS & NAVIGATION
          ============================================================ */}
      <section id="gps-navigation" className="py-16 md:py-20 bg-[#FAF8F5] scroll-mt-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-medium mb-4">
              <Smartphone className="w-4 h-4" /> Navigation
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              GPS & Maps
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Your smartphone is your best navigation tool in Morocco. Here is which
              apps to download and how to use them effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {navigationApps.map((app) => (
              <div key={app.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-[#1A1814] text-lg">{app.name}</h3>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium text-white"
                    style={{ backgroundColor: app.ratingColor }}
                  >
                    {app.rating}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {app.description}
                </p>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-[#C4960C]/5 border border-[#C4960C]/15">
                  <Star className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1A1814]/70">{app.tips}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SIM Card Note */}
          <div className="card-moroccan p-6">
            <div className="flex items-start gap-4">
              <Smartphone className="w-8 h-8 text-[#A0522D] shrink-0" />
              <div>
                <h3 className="font-bold text-[#1A1814] text-lg mb-2">Get a Local SIM Card</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Buy a Moroccan SIM card at the airport or any telecom shop (Maroc Telecom, Inwi,
                  or Orange). Costs 30-50 MAD with 5-10 GB of data. This gives you reliable 4G
                  coverage on all main roads for real-time navigation. Coverage drops in deep
                  gorges and remote desert areas, which is why offline maps are essential as backup.
                  A 20 GB data plan costs about 100 MAD and lasts a month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 13: COMMON HAZARDS
          ============================================================ */}
      <section id="common-hazards" className="py-16 md:py-20 scroll-mt-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c0392b]/10 text-[#c0392b] text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" /> Stay Alert
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Common Hazards
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s roads have unique challenges. Knowing what to expect
              makes all the difference. Drive defensively and stay focused.
            </p>
          </div>
          <div className="space-y-4">
            {commonHazards.map((item) => (
              <div key={item.hazard} className="card-moroccan p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-3 md:w-48 shrink-0">
                    <AlertTriangle
                      className="w-5 h-5 shrink-0"
                      style={{ color: item.severityColor }}
                    />
                    <div>
                      <h3 className="font-bold text-[#1A1814]">{item.hazard}</h3>
                      <span
                        className="text-xs font-medium"
                        style={{ color: item.severityColor }}
                      >
                        {item.severity} Risk
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                      {item.description}
                    </p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-[#2d8a4e]/5 border border-[#2d8a4e]/10">
                      <Shield className="w-4 h-4 text-[#2d8a4e] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#1A1814]/70"><strong>Advice:</strong> {item.advice}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 14: FAQ
          ============================================================ */}
      <section id="faq" className="py-16 md:py-20 bg-[#FAF8F5] scroll-mt-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" /> Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Honest answers to the questions travelers ask most about driving in Morocco.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="font-bold text-[#1A1814] text-lg mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#A0522D] shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          ESSENTIAL DRIVING TIPS SUMMARY
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              10 Essential Tips for Driving in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Print this list or screenshot it. These ten rules will keep you safe on Moroccan roads.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { tip: 'Drive defensively. Assume every other driver will do something unexpected.', icon: Shield },
              { tip: 'Never drive at night outside cities. The risks multiply exponentially after dark.', icon: Moon },
              { tip: 'Fill up fuel whenever you see a station in remote areas. Do not gamble on the next one.', icon: Fuel },
              { tip: 'Photograph your rental car thoroughly before driving. Every scratch, every dent.', icon: Camera },
              { tip: 'Keep documents accessible at all times. Passport, license, insurance, car papers.', icon: FileText },
              { tip: 'Use Google Maps with downloaded offline maps. Buy a local SIM card for data.', icon: Smartphone },
              { tip: 'Tip the gardien (parking attendant) every time. 5-10 MAD is cheap car security.', icon: ParkingCircle },
              { tip: 'Start mountain passes early in the morning. Better visibility, less traffic.', icon: Mountain },
              { tip: 'Honk before blind corners in mountains. It is expected and could save your life.', icon: AlertTriangle },
              { tip: 'Stay calm at police checkpoints. Be polite, show documents, and you will be through in minutes.', icon: BadgeCheck },
            ].map((item, index) => (
              <div key={index} className="card-moroccan p-5 flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C4960C]/10 shrink-0">
                  <span className="text-sm font-bold text-[#C4960C]">{index + 1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-[#A0522D] shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SCENIC DRIVING GALLERY
          ============================================================ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A1814' }}>
              Scenic Roads of Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From winding mountain passes to endless desert highways -- Morocco&apos;s roads are as spectacular as the destinations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-xl aspect-[16/9] group">
              <img src="/images/hero-driving-morocco.webp" alt="Car driving along a scenic Moroccan road with palm trees and mountains in the background" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-3 right-3 text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                The open road -- driving through Morocco&apos;s varied landscapes
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl aspect-[16/9] group">
              <img src="/images/hero-dades-valley-road.webp" alt="The famous Dades Gorge road with dramatic switchback turns through red canyon walls" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-3 right-3 text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                The Dades Gorge switchbacks -- one of Morocco&apos;s most iconic driving routes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED GUIDES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
            Related Travel Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Morocco Road Trip Routes', href: '/morocco-road-trip-routes', description: 'Pre-planned scenic routes from coast to desert, with stops, distances, and timing.', icon: Route },
              { title: 'Morocco Airports Guide', href: '/morocco-airports-guide', description: 'All major airports, transfers, car rental desks, and arrival tips.', icon: Navigation },
              { title: 'Morocco Train Routes', href: '/morocco-train-routes', description: 'High-speed Al Boraq, intercity ONCF services, and scenic rail journeys.', icon: Map },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="card-moroccan p-6 group flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <guide.icon className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                  {guide.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)]">
                  Read Guide
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <Car className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Plan your Moroccan road trip with our destination guides, scenic route
            planner, and complete transport information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/road-trips"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Route className="w-4 h-4" /> Road Trip Routes
            </Link>
            <Link
              href="/transport"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Navigation className="w-4 h-4" /> Transport Guide
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Compass className="w-4 h-4" /> Trip Planner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

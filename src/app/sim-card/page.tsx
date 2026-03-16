import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Smartphone,
  Wifi,
  Signal,
  MapPin,
  Shield,
  AlertTriangle,
  CheckCircle,
  Star,
  Globe,
  Clock,
  Info,
  ArrowRight,
  CreditCard,
  Building,
  Zap,
  Download,
  PhoneCall,
  MessageCircleQuestion,
  Laptop,
  Router,
  Lock,
  Users,
  Map,
  ShoppingBag,
  Plane,
  BadgePercent,
  Lightbulb,
  MonitorSmartphone,
  WifiOff,
  RefreshCw,
  Hash,
  CircleDollarSign,
  Mountain,
  Compass,
  ScanLine,
  Settings,
  Headphones,
  Coffee,
  Store,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Morocco SIM Card & Internet Guide | Stay Connected in 2025',
  description:
    'Complete guide to SIM cards, mobile data, eSIMs, and WiFi in Morocco. Compare Maroc Telecom, Orange, and Inwi plans with real prices in MAD. Registration requirements, coverage maps, top-up methods, and digital nomad internet setup.',
  keywords: [
    'morocco sim card',
    'morocco internet',
    'morocco esim',
    'maroc telecom tourist sim',
    'orange morocco prepaid',
    'inwi sim card',
    'morocco mobile data',
    'morocco wifi',
    'morocco phone plan',
    'morocco data plan',
    'airalo morocco',
    'holafly morocco',
    'morocco digital nomad internet',
    'morocco coverage map',
    'morocco vpn',
  ],
  openGraph: {
    title: 'Morocco SIM Card & Internet Guide | Stay Connected in 2025',
    description:
      'Everything you need to know about staying connected in Morocco. Compare carriers, plans, eSIMs, and WiFi options with real prices in Moroccan Dirhams.',
    url: 'https://citytoursmorocco.com/sim-card',
    images: [
      {
        url: '/images/hero-morocco-medina.webp',
        width: 1200,
        height: 630,
        alt: 'Traveler using smartphone to navigate a Moroccan medina',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  name: 'Morocco SIM Card & Internet Guide',
  headline: 'Complete Guide to SIM Cards, Mobile Data, and Internet in Morocco',
  description:
    'A comprehensive guide to staying connected in Morocco, covering SIM cards from all three carriers, eSIM options, WiFi availability, coverage maps, and digital nomad internet setup with real prices in Moroccan Dirhams.',
  url: 'https://citytoursmorocco.com/sim-card',
  author: {
    '@type': 'Organization',
    name: 'City Tours Morocco',
  },
  publisher: {
    '@type': 'Organization',
    name: 'City Tours Morocco',
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

const carriers = [
  {
    name: 'Maroc Telecom (IAM)',
    tagline: 'Best Coverage',
    icon: Signal,
    color: 'var(--color-primary)',
    logo: 'Blue and green branding',
    marketShare: '~45% market share',
    description:
      'The former state monopoly and still the dominant carrier. Maroc Telecom has the most extensive network in Morocco, reaching remote villages, mountain passes, and desert areas where Orange and Inwi have no signal. If you are traveling beyond major cities, this is the safest choice.',
    strengths: [
      'Best coverage nationwide, including rural and remote areas',
      'Strongest signal in the Atlas Mountains and Sahara region',
      'Most reliable 4G network in cities with consistent speeds',
      'Widest network of recharge points and shops across the country',
      'Best choice for travelers going off the beaten path',
    ],
    weaknesses: [
      'Slightly more expensive than Orange and Inwi for data plans',
      'Tourist SIM registration can be slow at busy shops',
      'Customer service primarily in French and Arabic',
    ],
    touristSim: '30 MAD (includes 1GB data, 30 min calls)',
    basicData: '20 MAD for 1GB (7 days)',
    bestFor: 'Travelers exploring rural Morocco, Atlas Mountains, or the Sahara Desert',
  },
  {
    name: 'Orange Morocco',
    tagline: 'Best Value',
    icon: Zap,
    color: 'var(--color-gold)',
    logo: 'Orange branding',
    marketShare: '~33% market share',
    description:
      'The best balance of price, data allowance, and coverage for most travelers. Orange offers generous tourist-specific packages with more data per dirham than Maroc Telecom. Their 4G network covers all major cities, tourist routes, and most highways reliably.',
    strengths: [
      'Best value tourist SIM packages with generous data allowances',
      'Dedicated tourist plans designed for short-term visitors',
      'Good 4G coverage in all major cities and tourist destinations',
      'Easy-to-use app (My Orange) for checking balance and buying data',
      'English support available at airport kiosks',
    ],
    weaknesses: [
      'Weaker coverage in remote mountain and deep desert areas',
      'Signal can drop on some rural highways between cities',
      'Fewer physical shops than Maroc Telecom in small towns',
    ],
    touristSim: '50 MAD (includes 5GB data, 60 min calls, valid 30 days)',
    basicData: '20 MAD for 2GB (7 days)',
    bestFor: 'Most tourists visiting major cities and popular destinations',
  },
  {
    name: 'Inwi',
    tagline: 'Cheapest Option',
    icon: BadgePercent,
    color: 'var(--color-accent)',
    logo: 'Purple branding',
    marketShare: '~22% market share',
    description:
      'The budget carrier with the lowest prices. Inwi offers the cheapest data plans in Morocco and frequently runs promotions with bonus data. Coverage is solid in cities but noticeably weaker outside urban areas. Best for budget travelers staying in major cities.',
    strengths: [
      'Cheapest data plans of all three carriers',
      'Frequent promotions offering double or triple data bonuses',
      'Good 4G speeds in major cities, especially Casablanca and Rabat',
      'Social media passes that do not count against data allowance',
      'Competitive international calling rates',
    ],
    weaknesses: [
      'Weakest coverage outside major cities and highways',
      'Poor or no signal in mountains, desert, and many rural areas',
      'Fewer shops and recharge points than Maroc Telecom',
      'Network congestion in busy areas during peak hours',
    ],
    touristSim: '20 MAD (includes 500MB data, 15 min calls)',
    basicData: '15 MAD for 1GB (7 days)',
    bestFor: 'Budget travelers staying primarily in major cities',
  },
];

const dataPlans = [
  {
    category: 'Tourist SIM Packages (Available at airports)',
    plans: [
      { carrier: 'Maroc Telecom', plan: 'Jawal Tourist', data: '1GB + 30 min', validity: '30 days', price: '30 MAD' },
      { carrier: 'Maroc Telecom', plan: 'Jawal Tourist Plus', data: '10GB + 60 min', validity: '30 days', price: '100 MAD' },
      { carrier: 'Orange', plan: 'Welcome Tourist', data: '5GB + 60 min', validity: '30 days', price: '50 MAD' },
      { carrier: 'Orange', plan: 'Welcome Tourist Max', data: '20GB + 120 min', validity: '30 days', price: '100 MAD' },
      { carrier: 'Inwi', plan: 'Tourist Pack', data: '500MB + 15 min', validity: '15 days', price: '20 MAD' },
      { carrier: 'Inwi', plan: 'Tourist Pack Plus', data: '5GB + 30 min', validity: '30 days', price: '50 MAD' },
    ],
  },
  {
    category: 'Data-Only Top-Up Bundles',
    plans: [
      { carrier: 'Maroc Telecom', plan: 'Pass Internet 1GB', data: '1GB', validity: '7 days', price: '20 MAD' },
      { carrier: 'Maroc Telecom', plan: 'Pass Internet 5GB', data: '5GB', validity: '30 days', price: '50 MAD' },
      { carrier: 'Maroc Telecom', plan: 'Pass Internet 10GB', data: '10GB', validity: '30 days', price: '80 MAD' },
      { carrier: 'Maroc Telecom', plan: 'Pass Internet 20GB', data: '20GB', validity: '30 days', price: '100 MAD' },
      { carrier: 'Orange', plan: 'Internet Pass 2GB', data: '2GB', validity: '7 days', price: '20 MAD' },
      { carrier: 'Orange', plan: 'Internet Pass 5GB', data: '5GB', validity: '30 days', price: '40 MAD' },
      { carrier: 'Orange', plan: 'Internet Pass 15GB', data: '15GB', validity: '30 days', price: '80 MAD' },
      { carrier: 'Orange', plan: 'Internet Pass 30GB', data: '30GB', validity: '30 days', price: '150 MAD' },
      { carrier: 'Inwi', plan: 'Net Pass 1GB', data: '1GB', validity: '7 days', price: '15 MAD' },
      { carrier: 'Inwi', plan: 'Net Pass 5GB', data: '5GB', validity: '30 days', price: '35 MAD' },
      { carrier: 'Inwi', plan: 'Net Pass 10GB', data: '10GB', validity: '30 days', price: '60 MAD' },
      { carrier: 'Inwi', plan: 'Net Pass 25GB', data: '25GB', validity: '30 days', price: '100 MAD' },
    ],
  },
  {
    category: 'Heavy Usage / Digital Nomad Plans',
    plans: [
      { carrier: 'Maroc Telecom', plan: 'Pass Internet 50GB', data: '50GB', validity: '30 days', price: '200 MAD' },
      { carrier: 'Orange', plan: 'Internet Pass 50GB', data: '50GB', validity: '30 days', price: '200 MAD' },
      { carrier: 'Orange', plan: 'Internet Max 100GB', data: '100GB', validity: '30 days', price: '350 MAD' },
      { carrier: 'Inwi', plan: 'Net Pass 50GB', data: '50GB', validity: '30 days', price: '150 MAD' },
      { carrier: 'Inwi', plan: 'Unlimited Night', data: 'Unlimited (midnight-8am)', validity: '30 days', price: '30 MAD add-on' },
    ],
  },
];

const whereToBuy = [
  {
    location: 'Airport Kiosks',
    icon: Plane,
    description:
      'The easiest option. All three carriers have official kiosks at Mohammed V Airport (Casablanca), Marrakech Menara Airport, Fes-Saiss Airport, and Tangier Ibn Battouta Airport. Staff speak English and French and will help you register and activate your SIM on the spot.',
    tips: [
      'Available in arrival halls after customs and baggage claim',
      'Staff handle all registration and activation - takes 10-15 minutes',
      'Tourist-specific packages are prominently displayed with English pricing',
      'Prices are fixed and non-negotiable at airport kiosks',
      'Some kiosks close for late-night arrivals - have a backup plan or buy the next morning',
      'Bring your passport - it is required for SIM registration',
    ],
    priceNote: 'Same prices as city shops - no airport markup',
  },
  {
    location: 'Official Carrier Shops',
    icon: Store,
    description:
      'Maroc Telecom, Orange, and Inwi each have branded shops in every Moroccan city. These are the most reliable places to buy, register, and troubleshoot your SIM. Staff are trained and can help with plan selection and top-ups.',
    tips: [
      'Maroc Telecom has the most shops - you will find one in virtually every town',
      'Look for official branding and signage to avoid third-party resellers',
      'Staff can help configure your phone settings for mobile data',
      'Visit during off-peak hours (morning or early afternoon) to avoid queues',
      'Official shops can resolve any activation or registration issues immediately',
      'Ask about current promotions - carriers often run limited-time data bonus offers',
    ],
    priceNote: 'Standard carrier prices, sometimes with in-store promotions',
  },
  {
    location: 'Small Neighborhood Shops (Telecoms)',
    icon: ShoppingBag,
    description:
      'Small shops throughout medinas and neighborhoods sell SIM cards and recharge credit for all three carriers. Look for the carrier logos displayed on storefronts. These are ubiquitous and convenient but may not handle registration for new SIMs.',
    tips: [
      'Found on virtually every street in cities and most villages',
      'Best for buying recharge credit (top-up) once you already have a SIM',
      'Some can sell and register new SIMs, but not all - ask first',
      'Recharge scratch cards come in denominations of 5, 10, 20, 50, and 100 MAD',
      'Prices should match official rates - if quoted higher, walk to the next shop',
      'Shops in tourist areas occasionally charge a small markup on SIM cards',
    ],
    priceNote: 'Same as carrier prices for recharge, occasional markup on new SIMs',
  },
  {
    location: 'Supermarkets',
    icon: Building,
    description:
      'Marjane, Acima, Carrefour, and BIM supermarkets sell SIM cards and recharge credit at checkout counters. This is a convenient option if you are already shopping for supplies after arriving. Fixed prices, no haggling required.',
    tips: [
      'Marjane and Carrefour are the most common supermarket chains in Morocco',
      'SIM cards and recharge vouchers available at the checkout or customer service desk',
      'Fixed prices clearly displayed - no negotiation needed',
      'A good option if you miss the airport kiosk or arrive late at night',
      'Staff may not help with phone configuration - be prepared to set up APN yourself',
      'Supermarkets in Ville Nouvelle (new city) areas of major cities are easiest to find',
    ],
    priceNote: 'Standard prices, no markup',
  },
];

const registrationRequirements = [
  {
    requirement: 'Valid Passport',
    icon: ScanLine,
    detail:
      'Since 2019, Morocco requires passport registration for all SIM card purchases. This is a government anti-fraud regulation (ANRT directive) and applies to tourists and residents alike. You must present your physical passport - a photocopy or phone photo is not accepted.',
  },
  {
    requirement: 'Biometric Photo',
    icon: Users,
    detail:
      'Some shops will photograph you as part of the registration process. At official carrier shops and airport kiosks, this is handled digitally by the staff. Smaller shops may use a camera or ask you to provide a passport-style photo.',
  },
  {
    requirement: 'Fingerprint Scan (Sometimes)',
    icon: ScanLine,
    detail:
      'Official carrier shops equipped with biometric scanners may take a fingerprint during registration. This is part of the ANRT compliance process and takes seconds. Not all shops have this equipment, so it is not universally required.',
  },
  {
    requirement: 'Registration Form',
    icon: Settings,
    detail:
      'You will fill out or sign a brief registration form with your name, passport number, nationality, and local address (your hotel or riad address works). The shop staff typically handles this and just asks you to sign.',
  },
  {
    requirement: 'One SIM Per Passport Per Carrier',
    icon: Smartphone,
    detail:
      'You can purchase one SIM from each carrier (so up to three SIMs total), but you cannot buy multiple SIMs from the same carrier on one passport. This is a government regulation to prevent SIM fraud.',
  },
  {
    requirement: 'Activation Time',
    icon: Clock,
    detail:
      'SIM cards typically activate within minutes at official shops and airport kiosks. In rare cases, activation can take up to 2 hours. If your SIM does not work after 2 hours, return to the shop for troubleshooting. Ensure your phone is unlocked before purchasing.',
  },
];

const esimOptions = [
  {
    provider: 'Airalo',
    type: 'Data-only eSIM',
    icon: Globe,
    color: 'var(--color-primary)',
    description:
      'The most popular eSIM provider for Morocco. Airalo offers data-only eSIMs that you purchase and install via their app before traveling. No passport registration needed. Works immediately upon landing. The best option if you want to be connected the second you arrive.',
    plans: [
      { data: '1GB', validity: '7 days', price: '$4.50 (~45 MAD)' },
      { data: '2GB', validity: '15 days', price: '$8.00 (~80 MAD)' },
      { data: '3GB', validity: '30 days', price: '$11.00 (~110 MAD)' },
      { data: '5GB', validity: '30 days', price: '$16.00 (~160 MAD)' },
      { data: '10GB', validity: '30 days', price: '$26.00 (~260 MAD)' },
      { data: '20GB', validity: '30 days', price: '$42.00 (~420 MAD)' },
    ],
    pros: [
      'Install before you travel - connected on arrival',
      'No passport or registration required',
      'Keep your home number active for calls and texts on physical SIM',
      'Easy top-up through the app if you need more data',
      'Works on eSIM-compatible phones (iPhone XS and later, most modern Androids)',
    ],
    cons: [
      'Data-only - no local Moroccan phone number for calls or SMS',
      'More expensive per GB than local SIM cards',
      'Cannot call local businesses or make restaurant reservations via phone',
      'Requires eSIM-compatible phone',
      'Uses Orange Morocco network - coverage gaps in remote areas',
    ],
    bestFor: 'Short-term tourists who mainly need maps, WhatsApp, and social media',
  },
  {
    provider: 'Holafly',
    type: 'Unlimited data eSIM',
    icon: Wifi,
    color: 'var(--color-gold)',
    description:
      'Holafly offers unlimited data eSIMs for Morocco, which is their key differentiator. If you stream video, make video calls, or use heavy data without worrying about limits, Holafly is the stress-free option. Slightly more expensive but no data anxiety.',
    plans: [
      { data: 'Unlimited', validity: '5 days', price: '$19.00 (~190 MAD)' },
      { data: 'Unlimited', validity: '7 days', price: '$27.00 (~270 MAD)' },
      { data: 'Unlimited', validity: '10 days', price: '$34.00 (~340 MAD)' },
      { data: 'Unlimited', validity: '15 days', price: '$44.00 (~440 MAD)' },
      { data: 'Unlimited', validity: '20 days', price: '$54.00 (~540 MAD)' },
      { data: 'Unlimited', validity: '30 days', price: '$64.00 (~640 MAD)' },
    ],
    pros: [
      'Truly unlimited data - no caps, no throttling, no worries',
      'Install before travel and activate on arrival',
      'No registration or passport required',
      'Excellent for streaming, video calls, and heavy data use',
      'Shareable via hotspot for travel companions',
    ],
    cons: [
      'Most expensive option overall, especially for light data users',
      'Data-only - no local Moroccan phone number',
      'Speed may be reduced during peak congestion (fair use policy)',
      'Requires eSIM-compatible phone',
      'Non-refundable once activated',
    ],
    bestFor: 'Travelers who stream, make video calls, or want zero data stress',
  },
  {
    provider: 'Local Physical SIM',
    type: 'Full SIM card from carrier shop',
    icon: Smartphone,
    color: 'var(--color-accent)',
    description:
      'A traditional SIM card from Maroc Telecom, Orange, or Inwi purchased at the airport or a city shop. Gives you a local Moroccan phone number for calls and SMS, plus mobile data. The cheapest option per GB and the most versatile for interacting with local services.',
    plans: [
      { data: '5GB + calls', validity: '30 days', price: '50 MAD (~$5)' },
      { data: '10GB + calls', validity: '30 days', price: '100 MAD (~$10)' },
      { data: '20GB', validity: '30 days', price: '100 MAD (~$10)' },
      { data: '30GB', validity: '30 days', price: '150 MAD (~$15)' },
      { data: '50GB', validity: '30 days', price: '200 MAD (~$20)' },
    ],
    pros: [
      'Cheapest per GB by far - up to 5x cheaper than eSIMs',
      'Local Moroccan phone number for calls, SMS, and WhatsApp',
      'Can call restaurants, riads, taxis, and local services directly',
      'Works on any unlocked phone - no eSIM compatibility needed',
      'Easy to top up at any shop across the country',
    ],
    cons: [
      'Requires passport registration at point of purchase',
      'Need to find a shop or kiosk after arrival',
      'Phone must be unlocked - carrier-locked phones will not work',
      'May lose your home number if your phone is single-SIM',
      'Registration process takes 10-15 minutes',
    ],
    bestFor: 'Anyone staying more than 3 days, budget travelers, and those needing a local number',
  },
];

const wifiAvailability = [
  {
    location: 'Riads and Hotels',
    icon: Building,
    quality: 'Good to Excellent',
    qualityColor: 'var(--color-primary)',
    description:
      'Nearly all tourist accommodations in Morocco offer free WiFi. Quality varies enormously - upscale riads and international hotels have fast, reliable connections, while budget guesthouses may have slow, intermittent WiFi shared among many guests.',
    tips: [
      'Ask about WiFi speed before booking if you need to work remotely',
      'Rooftop terraces often have weak WiFi signal - best connection is near the router in the lobby',
      'Some riads have a single router for the entire building - expect slowdowns when guests are streaming',
      'Budget riads in deep medina locations may have poor connections due to thick walls',
      'International hotel chains (Sofitel, Ibis, Novotel) offer the most reliable WiFi',
    ],
  },
  {
    location: 'Cafes and Restaurants',
    icon: Coffee,
    quality: 'Variable',
    qualityColor: 'var(--color-gold)',
    description:
      'Many cafes in tourist areas and Ville Nouvelle (new city) districts offer free WiFi. Traditional cafes in medinas rarely have WiFi. Modern coffee shops and international chains have the best connections. Always order something before asking for the WiFi password.',
    tips: [
      'Starbucks, McDonald\'s, and Paul bakeries have reliable, fast WiFi in major cities',
      'Ask for the WiFi password - "mot de passe WiFi?" in French or point to the WiFi symbol',
      'Cafe WiFi in Marrakech Gueliz and Casablanca is generally better than medina cafes',
      'Coworking cafes cater to remote workers and have dedicated fast internet connections',
      'A mint tea costs 10-15 MAD and buys you an hour or more of WiFi time',
    ],
  },
  {
    location: 'Coworking Spaces',
    icon: Laptop,
    quality: 'Excellent',
    qualityColor: 'var(--color-primary)',
    description:
      'Morocco has a growing coworking scene, especially in Marrakech, Casablanca, Rabat, and Essaouira. These spaces offer dedicated fiber internet, desks, meeting rooms, and professional environments. Essential for digital nomads and remote workers needing reliable connectivity.',
    tips: [
      'Sun Desk in Taghazout is a famous surf-and-work coworking space (200-300 MAD/day)',
      'Coworking Marrakech and Le 18 offer day passes from 100-200 MAD',
      'Casablanca has the most coworking options including WeWork-style professional spaces',
      'Many spaces offer weekly and monthly rates at 50-70% off daily prices',
      'Book trial days before committing to a monthly membership',
    ],
  },
  {
    location: 'Public WiFi and Hotspots',
    icon: Wifi,
    quality: 'Poor to Fair',
    qualityColor: 'var(--color-accent)',
    description:
      'Free public WiFi exists at some train stations, airports, and public squares but is generally slow, unreliable, and potentially insecure. Maroc Telecom operates WiFi hotspots in some areas that require a paid login. Do not rely on public WiFi as your primary connection.',
    tips: [
      'Mohammed V Airport and Marrakech Airport have free WiFi but it is slow and time-limited',
      'Train stations in Casablanca and Rabat have Maroc Telecom WiFi hotspots',
      'Never enter passwords or banking details on unsecured public WiFi networks',
      'Use a VPN if you must connect to public WiFi for any sensitive activity',
      'Some shopping malls (Morocco Mall, Menara Mall) offer free WiFi in common areas',
    ],
  },
  {
    location: 'Rural and Remote Areas',
    icon: Mountain,
    quality: 'None to Poor',
    qualityColor: 'var(--text-muted)',
    description:
      'In the Atlas Mountains, Sahara Desert, and rural villages, WiFi is rare or nonexistent. Some mountain lodges and desert camps offer basic WiFi via satellite, but it is slow and unreliable. Prepare to be offline in remote areas.',
    tips: [
      'Download offline maps, music, and reading material before heading to rural areas',
      'Some mountain refuges on the Toubkal trek have basic satellite WiFi (slow, expensive)',
      'Desert luxury camps may have WiFi but it is solar-powered and limited',
      'Berber villages generally have no WiFi - embrace the digital detox',
      'Mobile data (Maroc Telecom) may work where WiFi does not in semi-rural areas',
    ],
  },
];

const topUpMethods = [
  {
    method: 'Recharge Scratch Cards',
    icon: CreditCard,
    description:
      'The most common top-up method. Physical scratch cards sold at telecoms shops, convenience stores, supermarkets, and even roadside stalls. Scratch the silver panel to reveal a code, then enter it via USSD to add credit to your account.',
    steps: [
      'Buy a scratch card for your carrier (5, 10, 20, 50, or 100 MAD denominations)',
      'Scratch the silver panel on the back to reveal the recharge code',
      'Dial the USSD code: Maroc Telecom *4#, Orange *111#, Inwi *120#',
      'Enter the recharge code when prompted',
      'You will receive an SMS confirming the credit has been added',
      'Then purchase a data bundle by dialing the carrier USSD menu',
    ],
  },
  {
    method: 'Carrier Apps',
    icon: Download,
    description:
      'Each carrier has a mobile app where you can check your balance, buy data packages, and manage your account. These apps accept Moroccan bank cards and some international cards. The most convenient method if your card is accepted.',
    steps: [
      'Maroc Telecom: Download "My IAM" app from App Store or Google Play',
      'Orange: Download "My Orange Maroc" app',
      'Inwi: Download "My Inwi" app',
      'Create an account using your Moroccan phone number',
      'Link a payment card or use balance credit to purchase data bundles',
      'Data bundles activate immediately after purchase',
    ],
  },
  {
    method: 'USSD Codes (Dial from Phone)',
    icon: Hash,
    description:
      'USSD codes let you check your balance, buy data packs, and manage your plan by dialing short codes on your phone. No internet connection required - these work via the cellular network. Essential knowledge for quick top-ups.',
    steps: [
      'Maroc Telecom: Dial *580# for main menu, *111# for balance, *4# to recharge',
      'Orange: Dial *111# for main menu, *100# for balance, *111*recharge_code# to top up',
      'Inwi: Dial *120# for main menu, *1# for balance, *120*recharge_code# to top up',
      'Navigate the USSD menu (usually in French or Arabic) to select data bundles',
      'Confirm your selection and the bundle activates within minutes',
      'Keep these codes saved in your phone notes for quick reference',
    ],
  },
  {
    method: 'Online Recharge',
    icon: MonitorSmartphone,
    description:
      'All three carriers allow online recharge through their websites using international credit and debit cards. This is useful if you run out of data and cannot reach a shop. You can also recharge for someone else by entering their number.',
    steps: [
      'Visit iam.ma (Maroc Telecom), orange.ma (Orange), or inwi.ma (Inwi)',
      'Navigate to the recharge/top-up section',
      'Enter the Moroccan phone number to recharge',
      'Select a credit amount or data bundle',
      'Pay with Visa, Mastercard, or Moroccan bank card',
      'Credit is added immediately and you receive an SMS confirmation',
    ],
  },
  {
    method: 'Transfer from Another Person',
    icon: Users,
    description:
      'Moroccans commonly transfer credit between phones. If a friend, host, or riad owner offers to top up your phone, they can transfer credit from their account to yours via a simple USSD code. A very common practice in Morocco.',
    steps: [
      'Maroc Telecom: Sender dials *3# and follows prompts to transfer credit',
      'Orange: Sender dials *111# and selects the transfer option',
      'Inwi: Sender dials *120# and selects the credit transfer menu',
      'The sender enters your phone number and the amount to transfer',
      'Both parties receive an SMS confirmation of the transfer',
      'A small fee (1-2 MAD) may be deducted from the transferred amount',
    ],
  },
];

const coverageInfo = [
  {
    area: 'Major Cities',
    icon: Building,
    coverage: 'Excellent (all carriers)',
    signal: '4G/LTE',
    description:
      'Casablanca, Marrakech, Rabat, Fes, Tangier, Agadir, and Meknes all have excellent 4G coverage from all three carriers. Speeds of 10-50 Mbps are common. You will have no connectivity issues in any major city.',
  },
  {
    area: 'Tourist Towns',
    icon: MapPin,
    coverage: 'Good to Excellent',
    signal: '4G/LTE',
    description:
      'Chefchaouen, Essaouira, Ouarzazate, Merzouga, Ifrane, and other popular tourist destinations have good coverage from Maroc Telecom and Orange. Inwi may have weaker signal in smaller tourist towns.',
  },
  {
    area: 'Highways and Main Roads',
    icon: Map,
    coverage: 'Good (Maroc Telecom best)',
    signal: '4G with gaps',
    description:
      'Major highways (autoroutes) between cities have solid coverage. National roads (N-routes) generally have signal but may drop to 3G or briefly lose connection in valleys and mountain passes. Maroc Telecom has the fewest dead spots.',
  },
  {
    area: 'Atlas Mountains',
    icon: Mountain,
    coverage: 'Poor to Fair',
    signal: '3G/2G with gaps',
    description:
      'Coverage in the High Atlas is limited to valleys and towns like Imlil, Ourika, and Asni. Higher elevations, mountain passes (Tizi n\'Tichka, Tizi n\'Test), and trekking routes frequently have no signal. Maroc Telecom reaches the most mountain villages.',
  },
  {
    area: 'Sahara Desert',
    icon: Compass,
    coverage: 'Poor (Maroc Telecom only in places)',
    signal: '2G/None',
    description:
      'In the deep Sahara, coverage is limited to towns like Merzouga, Zagora, M\'hamid, and along main roads. Once you are in the dunes or on desert tracks, expect no signal. Maroc Telecom occasionally has 2G in areas where Orange and Inwi have nothing.',
  },
  {
    area: 'Rural and Remote Areas',
    icon: WifiOff,
    coverage: 'Poor to None',
    signal: '2G/None',
    description:
      'Small villages, agricultural areas, and off-road routes often have limited or no coverage. Maroc Telecom is the only carrier that reaches many remote villages. Orange and Inwi are effectively city-only carriers in the most rural areas.',
  },
];

const vpnInfo = {
  intro:
    'Morocco does not have heavy internet censorship, but there are some important things to know about online access. VoIP services like Skype and FaceTime calls have historically been blocked or throttled by Moroccan carriers. WhatsApp messaging works fine, but WhatsApp voice and video calls may be unreliable without a VPN.',
  details: [
    {
      topic: 'What Is Blocked or Throttled',
      icon: Lock,
      items: [
        'VoIP calls (Skype, FaceTime Audio, Facebook Messenger calls) are frequently blocked by carriers',
        'WhatsApp voice and video calls work intermittently - sometimes fine, sometimes blocked',
        'Zoom and Google Meet generally work but may be slow without a VPN',
        'Regular websites, social media, and messaging apps are not censored',
        'Streaming services (Netflix, YouTube, Spotify) work without issues',
        'News sites and political content are accessible without restrictions',
      ],
    },
    {
      topic: 'VPN Recommendations',
      icon: Shield,
      items: [
        'NordVPN, ExpressVPN, and Surfshark all work reliably in Morocco',
        'Install and configure your VPN app before arriving in Morocco',
        'Connect to a European server (Spain or France) for the best speeds',
        'A VPN allows unrestricted VoIP calls on all platforms',
        'Free VPNs are not recommended - they are slow, unreliable, and potentially insecure',
        'Using a VPN in Morocco is legal and very common among locals and expats',
      ],
    },
    {
      topic: 'WiFi Calling as an Alternative',
      icon: PhoneCall,
      items: [
        'WiFi calling through your home carrier works if your plan supports it',
        'Enable WiFi calling in your phone settings before traveling',
        'This routes calls through WiFi instead of the local cellular network',
        'WiFi calling bypasses VoIP blocks since it uses your carrier connection',
        'Check with your home carrier if WiFi calling is included in your plan',
        'Works best on fast, stable WiFi connections at hotels and coworking spaces',
      ],
    },
  ],
};

const digitalNomadSetup = [
  {
    setup: 'Dual SIM Strategy',
    icon: Smartphone,
    cost: '150-250 MAD/month',
    description:
      'The most popular setup among digital nomads in Morocco. Use a local Moroccan SIM for data and your home eSIM or second SIM for receiving calls and texts. This gives you cheap, high-speed local data while keeping your home number active.',
    steps: [
      'Get an Orange or Maroc Telecom SIM for mobile data (30-50GB for 150-200 MAD/month)',
      'Keep your home eSIM active for receiving important calls and texts',
      'Use WhatsApp with your local Moroccan number for in-country communication',
      'Top up monthly via the carrier app or scratch cards from any shop',
      'Consider a portable WiFi hotspot if you need to share connection with multiple devices',
    ],
  },
  {
    setup: 'Portable WiFi Router (MiFi)',
    icon: Router,
    cost: '300-500 MAD device + 100-200 MAD/month data',
    description:
      'A portable 4G router with a local SIM card that creates its own WiFi hotspot. Connect your laptop, phone, and tablet all at once. Ideal if you work from cafes or accommodations with poor WiFi. Available at carrier shops.',
    steps: [
      'Buy a portable 4G router from a Maroc Telecom or Orange shop (300-500 MAD)',
      'Insert a SIM card with a large data plan (50GB for 200 MAD on Maroc Telecom)',
      'The router creates a personal WiFi network you carry with you',
      'Connect 5-10 devices simultaneously - laptop, phone, tablet',
      'Recharge the data SIM monthly like any phone SIM',
      'Battery lasts 6-8 hours - charge nightly or carry a power bank',
    ],
  },
  {
    setup: 'Coworking + Mobile Data Combo',
    icon: Laptop,
    cost: '1,000-3,000 MAD/month',
    description:
      'Use a coworking space for dedicated work hours and mobile data for everything else. This gives you reliable fiber internet for video calls and heavy work, plus the freedom to work from cafes and riads when you want a change of scenery.',
    steps: [
      'Get a monthly coworking membership (Marrakech: 1,000-2,500 MAD, Casablanca: 1,500-3,000 MAD)',
      'Use coworking fiber internet for video calls, uploads, and intensive work',
      'Add a 20-50GB local SIM for mobile data outside the coworking space (100-200 MAD)',
      'Most coworking spaces include meeting rooms, printing, and coffee',
      'Weekly passes available if you are not staying a full month (200-500 MAD/week)',
    ],
  },
  {
    setup: 'Home Internet Installation (Long-Term)',
    icon: Settings,
    cost: '200-500 MAD/month',
    description:
      'If staying in Morocco for a month or more in a rented apartment, you can get a home internet connection. Maroc Telecom and Orange offer fiber (FTTH) in major cities and ADSL in smaller towns. Installation takes 3-7 days.',
    steps: [
      'Maroc Telecom fiber: 12 Mbps for 199 MAD/month, 100 Mbps for 399 MAD/month',
      'Orange fiber: Similar pricing with occasional promotional rates',
      'Installation fee: typically 200-500 MAD (sometimes waived with annual contract)',
      'Requires a local address and passport for the contract',
      'ADSL is available in areas without fiber at 100-200 MAD/month (2-20 Mbps)',
      'Ask your landlord if internet is included in the rent - many furnished apartments include it',
    ],
  },
];

const internationalCalling = [
  {
    method: 'WhatsApp Calls (Free with Data)',
    icon: MessageCircleQuestion,
    cost: 'Free (uses ~1MB/min for voice, ~5MB/min for video)',
    description:
      'The default communication method in Morocco. Nearly everyone - locals, businesses, riads, tour operators - uses WhatsApp. Voice calls are free over data or WiFi. Video calls work well on strong connections. This should be your primary calling method.',
    tips: [
      'Save your riad, tour guide, and taxi contacts on WhatsApp',
      'WhatsApp voice calls use minimal data - about 1MB per minute',
      'Video calls use more data but work well on 4G or strong WiFi',
      'If WhatsApp calls are blocked, activate a VPN and try again',
      'WhatsApp works on WiFi only - you do not need a SIM to use it',
    ],
  },
  {
    method: 'Local Calls from Moroccan SIM',
    icon: PhoneCall,
    cost: '0.50-1.50 MAD/min to Moroccan numbers',
    description:
      'If you have a local SIM, calling Moroccan numbers is very cheap. Most tourist SIM packages include 30-120 free minutes. Useful for calling restaurants, riads, local taxis, and emergency services when WhatsApp is not available.',
    tips: [
      'Local calls cost 0.50-1.50 MAD per minute depending on your plan',
      'Tourist SIM packages include free minutes - check your balance before buying more',
      'Calls to Moroccan landlines are cheaper than calls to mobiles',
      'Emergency numbers (police 19, ambulance 15, fire 15) are free from any phone',
      'Dial 00 + country code for international calls from your Moroccan SIM',
    ],
  },
  {
    method: 'International Calls from Moroccan SIM',
    icon: Globe,
    cost: '3-10 MAD/min depending on destination',
    description:
      'Calling international numbers from a Moroccan SIM is expensive. Use WhatsApp, Zoom, or Skype instead whenever possible. If you must make a traditional phone call internationally, consider buying an international calling bundle from your carrier.',
    tips: [
      'Rates to Europe and North America: 3-6 MAD per minute',
      'Rates to other countries: 5-10 MAD per minute',
      'Maroc Telecom offers international bundles: 100 minutes to Europe for 100 MAD',
      'Orange Pass Monde: international calling packages from 30 MAD',
      'Always use VoIP (WhatsApp, Zoom) with a VPN instead of direct international calls',
    ],
  },
  {
    method: 'Receiving Calls on Home SIM (Roaming)',
    icon: Headphones,
    cost: 'Varies by home carrier (often $1-3/min)',
    description:
      'If you keep your home SIM active in a dual-SIM phone, you can receive calls on your regular number. Receiving calls while roaming is free with many European carriers (EU roaming rules) but expensive for US, Canadian, and other carriers.',
    tips: [
      'EU carriers: free roaming in Morocco is NOT included - Morocco is outside the EU',
      'US carriers: T-Mobile includes some free international data and texting, calls $0.25/min',
      'UK carriers: roaming charges apply in Morocco - check your plan before traveling',
      'Consider forwarding your home number to a VoIP number you can answer on WiFi',
      'Turn off data roaming on your home SIM to avoid accidental charges',
    ],
  },
];

const faqItems = [
  {
    question: 'Do I need a SIM card if I only visit Morocco for 3-5 days?',
    answer:
      'Yes, strongly recommended. A local SIM card costs as little as 20-50 MAD ($2-5) and gives you Google Maps navigation, WhatsApp for communicating with your riad and guides, the ability to check restaurant reviews, and an emergency data connection. The small cost is worth the convenience and safety.',
  },
  {
    question: 'Will my phone work in Morocco?',
    answer:
      'If your phone is unlocked and supports GSM networks (which nearly all modern phones do), it will work in Morocco. Morocco uses 900/1800 MHz for 2G/3G and Bands 3, 7, and 20 for 4G LTE. iPhones, Samsung Galaxy, Google Pixel, and most international phones work perfectly. US phones on CDMA-only networks (very rare now) will not work.',
  },
  {
    question: 'How do I check if my phone is unlocked?',
    answer:
      'Insert a SIM card from a different carrier than your usual one. If it connects, your phone is unlocked. Alternatively, contact your carrier before traveling and ask them to unlock it - most carriers will do this for free if your contract is fulfilled. iPhones purchased directly from Apple are typically unlocked.',
  },
  {
    question: 'Should I get an eSIM or a physical SIM card?',
    answer:
      'For most travelers, a local physical SIM card offers the best value and functionality - cheaper data rates and a local phone number. Choose an eSIM if: you have a short trip (1-3 days), you need to stay connected the moment you land, or you do not want to deal with registration. eSIMs cost 2-5x more per GB but are more convenient.',
  },
  {
    question: 'Can I use my SIM card as a WiFi hotspot?',
    answer:
      'Yes, all Moroccan SIM cards support tethering/hotspot by default. There are no extra fees or restrictions. Simply enable the mobile hotspot in your phone settings and share your data connection with your laptop, tablet, or travel companions. Be mindful of your data limit when hotspotting.',
  },
  {
    question: 'What if I run out of data?',
    answer:
      'Buy more immediately. Walk into any small telecom shop, buy a recharge scratch card (10-100 MAD), enter the code via USSD, then purchase a new data bundle. The entire process takes 2 minutes. You can also recharge online via the carrier app or website with a credit card.',
  },
  {
    question: 'Does WhatsApp calling work in Morocco?',
    answer:
      'WhatsApp messaging works perfectly. WhatsApp voice and video calls work most of the time but may occasionally be blocked or throttled by carriers. If you experience issues, install a VPN (NordVPN or ExpressVPN work well) and connect to a European server. This reliably resolves any VoIP blocking.',
  },
  {
    question: 'Is mobile internet fast enough for video calls?',
    answer:
      'In major cities, absolutely. 4G speeds of 10-50 Mbps are common and more than sufficient for Zoom, Google Meet, and FaceTime. In smaller towns and rural areas, speeds drop to 3G (1-5 Mbps) which is adequate for voice calls but may struggle with video. Use WiFi at your accommodation for important video calls.',
  },
  {
    question: 'Can I keep my Moroccan SIM for a future trip?',
    answer:
      'Moroccan SIMs remain active as long as you recharge or make a transaction within the carrier validity period, which is typically 3-6 months of inactivity. After that, the number is deactivated. If you plan to return within a few months, keep the SIM and add a small recharge before leaving to extend its life.',
  },
  {
    question: 'How much data do I need for a typical Morocco trip?',
    answer:
      'Most travelers use 500MB to 1GB per day for maps, WhatsApp, social media, and light browsing. For a 7-day trip, 5GB is comfortable; for 14 days, 10-15GB is plenty. If you stream music or video, add 50% more. Digital nomads doing video calls need 20-50GB per month depending on usage.',
  },
  {
    question: 'Is 5G available in Morocco?',
    answer:
      'As of 2025, 5G is in limited rollout in Morocco, primarily in parts of Casablanca, Rabat, and Marrakech. Coverage is not widespread enough to rely on for travel. 4G LTE is the practical standard across the country and provides more than adequate speeds for all typical travel needs.',
  },
  {
    question: 'What happens if I lose my phone in Morocco?',
    answer:
      'Visit the nearest carrier shop with your passport to get a replacement SIM with the same number (if you remember it). You can also block your lost SIM by calling the carrier customer service: Maroc Telecom 888, Orange 121, Inwi 120. File a police report if the phone was stolen - you will need this for insurance claims.',
  },
];

export default function SimCardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-morocco-medina.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/tips" className="hover:text-white transition-colors">
              Travel Tips
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">SIM Card &amp; Internet</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Smartphone className="w-4 h-4" />
            Complete Connectivity Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco SIM Card &amp; Internet:
            <br className="hidden md:block" /> Stay Connected Everywhere
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From airport SIM cards to eSIMs, WiFi tips to digital nomad setups &mdash;
            everything you need to stay connected in Morocco. Real prices in MAD,
            honest carrier comparisons, and practical coverage advice.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why You Need a Moroccan SIM Card
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                A local SIM card is one of the smartest investments you will make
                in Morocco. For as little as 20&ndash;50 MAD ($2&ndash;5), you get
                reliable mobile data for Google Maps navigation through labyrinthine
                medinas, WhatsApp communication with your riad and tour guides,
                the ability to check restaurant reviews and compare prices, and an
                emergency connection when you need it most.
              </p>
              <p>
                Morocco has three mobile carriers: Maroc Telecom (best coverage),
                Orange (best value), and Inwi (cheapest). All three offer tourist-friendly
                prepaid SIM packages available at every airport and in every city.
                Since 2019, passport registration is required for all SIM purchases,
                but the process takes only 10&ndash;15 minutes and staff at airport
                kiosks handle everything for you.
              </p>
              <p>
                This guide covers every aspect of staying connected in Morocco:
                detailed carrier comparisons with real prices, eSIM alternatives,
                WiFi availability by location type, coverage maps for rural and
                remote areas, VPN recommendations for VoIP calls, top-up methods,
                digital nomad setups, and answers to every common question.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Decision Guide */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Zap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Decision: Which Option Is Right for You?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not sure what to get? Here is a quick guide based on your travel style.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                traveler: 'Short Trip (1-3 Days)',
                recommendation: 'Airalo eSIM (1-3GB)',
                cost: '45-110 MAD ($4.50-$11)',
                icon: Plane,
                reason: 'Install before you fly. Connected on landing. No shop visits needed. Data-only is fine for a short trip.',
              },
              {
                traveler: 'Standard Tourist (4-14 Days)',
                recommendation: 'Orange Welcome Tourist SIM',
                cost: '50-100 MAD ($5-$10)',
                icon: Globe,
                reason: 'Best value tourist package. 5-20GB data plus local calls. Buy at the airport in 10 minutes.',
              },
              {
                traveler: 'Budget Backpacker',
                recommendation: 'Inwi Tourist Pack Plus',
                cost: '50 MAD ($5) + top-ups',
                icon: ShoppingBag,
                reason: 'Cheapest data per GB. Good coverage in cities. Top up as needed at any corner shop.',
              },
              {
                traveler: 'Off-the-Beaten-Path Explorer',
                recommendation: 'Maroc Telecom Jawal Tourist',
                cost: '30-100 MAD ($3-$10)',
                icon: Mountain,
                reason: 'Only carrier with signal in many mountain and desert areas. Worth the premium for remote travel.',
              },
              {
                traveler: 'Digital Nomad / Remote Worker',
                recommendation: 'Maroc Telecom or Orange 50GB plan + coworking',
                cost: '200 MAD data + 1,000-2,500 MAD coworking',
                icon: Laptop,
                reason: 'Large data plan for mobile, coworking membership for fiber. Dual setup covers all scenarios.',
              },
              {
                traveler: 'Heavy Data User / Streamer',
                recommendation: 'Holafly Unlimited eSIM',
                cost: '270-640 MAD ($27-$64)',
                icon: Wifi,
                reason: 'Unlimited data means zero worry. Stream, video call, and hotspot without checking your balance.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.traveler} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.traveler}
                      </h3>
                      <span className="text-sm font-bold text-[var(--color-primary)]">{item.cost}</span>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-[var(--color-accent)] mb-2">{item.recommendation}</div>
                  <p className="text-xs text-[var(--text-secondary)]">{item.reason}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Three Carriers Compared */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Signal className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Three Carriers Compared
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has three mobile carriers. Each has clear strengths.
            Choose based on where you are going and what you need.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {carriers.map((carrier) => {
              const Icon = carrier.icon;
              return (
                <div key={carrier.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <Icon className="w-6 h-6" style={{ color: carrier.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {carrier.name}
                      </h3>
                      <div className="text-sm font-bold" style={{ color: carrier.color }}>
                        {carrier.tagline}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mb-3">{carrier.marketShare}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{carrier.description}</p>

                  <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">Strengths</h4>
                  <ul className="space-y-1.5 mb-4">
                    {carrier.strengths.map((strength, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">Weaknesses</h4>
                  <ul className="space-y-1.5 mb-4">
                    {carrier.weaknesses.map((weakness, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <AlertTriangle className="w-3.5 h-3.5 text-[var(--text-muted)] mt-0.5 shrink-0" />
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[var(--border-primary)] space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--text-muted)]">Tourist SIM:</span>
                      <span className="font-bold text-[var(--text-primary)]">{carrier.touristSim}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--text-muted)]">Basic Data:</span>
                      <span className="font-bold text-[var(--text-primary)]">{carrier.basicData}</span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] pt-2">
                      <Star className="w-3 h-3 inline mr-1" />
                      Best for: {carrier.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plan Comparison Tables */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDollarSign className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Data Plan Comparison (All Prices in MAD)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every available plan across all three carriers, organized by category.
            Prices are current as of 2025 and may change with promotions.
          </p>
          {dataPlans.map((category) => (
            <div key={category.category} className="mb-10">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                {category.category}
              </h3>
              <div className="card-moroccan overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[var(--surface-muted)]">
                        <th className="text-left p-3 font-bold text-[var(--text-primary)]">Carrier</th>
                        <th className="text-left p-3 font-bold text-[var(--text-primary)]">Plan</th>
                        <th className="text-left p-3 font-bold text-[var(--text-primary)]">Data</th>
                        <th className="text-left p-3 font-bold text-[var(--text-primary)]">Validity</th>
                        <th className="text-right p-3 font-bold text-[var(--color-primary)]">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.plans.map((plan, i) => (
                        <tr key={i} className="border-t border-[var(--border-primary)]">
                          <td className="p-3 text-[var(--text-secondary)] whitespace-nowrap">{plan.carrier}</td>
                          <td className="p-3 text-[var(--text-secondary)]">{plan.plan}</td>
                          <td className="p-3 font-medium text-[var(--text-primary)] whitespace-nowrap">{plan.data}</td>
                          <td className="p-3 text-[var(--text-muted)] whitespace-nowrap">{plan.validity}</td>
                          <td className="p-3 text-right font-bold text-[var(--color-primary)] whitespace-nowrap">{plan.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
          <div className="card-moroccan p-5 border-2 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Best Value Recommendation</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  For a 1-2 week trip, the Orange Welcome Tourist Max (20GB + 120 min for
                  100 MAD) offers the best combination of data, calling minutes, and
                  coverage. For budget travelers, the Inwi 10GB Net Pass at 60 MAD
                  is hard to beat on pure price-per-GB value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Buy */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy Your SIM Card
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            SIM cards are available everywhere in Morocco. Here are your options,
            from most convenient to most ubiquitous.
          </p>
          <div className="space-y-6">
            {whereToBuy.map((place) => {
              const Icon = place.icon;
              return (
                <div key={place.location} className="card-moroccan p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center gap-3 md:w-1/3">
                      <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {place.location}
                        </h3>
                        <span className="text-xs text-[var(--text-muted)]">{place.priceNote}</span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{place.description}</p>
                      <ul className="space-y-1.5">
                        {place.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Requirements */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Registration Requirements (Since 2019)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco requires identity registration for all SIM card purchases.
            This is a standard process that takes 10&ndash;15 minutes. Here is what you need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {registrationRequirements.map((req) => {
              const Icon = req.icon;
              return (
                <div key={req.requirement} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-bold text-[var(--text-primary)]">{req.requirement}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{req.detail}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 card-moroccan p-5 border-2 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Important: Unlock Your Phone Before Traveling</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Your phone must be carrier-unlocked to use a Moroccan SIM card.
                  If your phone is locked to a specific carrier (common with contract
                  phones), contact your carrier before traveling and request an unlock.
                  Most carriers provide this for free once your contract is fulfilled.
                  This is the single most common issue tourists face with SIM cards in Morocco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* eSIM Options */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Download className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            eSIM vs Physical SIM: Complete Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            eSIMs offer convenience at a premium. Physical SIMs offer value and
            a local number. Here is the honest comparison to help you decide.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {esimOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div key={option.provider} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <Icon className="w-6 h-6" style={{ color: option.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {option.provider}
                      </h3>
                      <div className="text-sm font-bold" style={{ color: option.color }}>
                        {option.type}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{option.description}</p>

                  <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">Plans</h4>
                  <div className="space-y-1 mb-4">
                    {option.plans.map((plan, i) => (
                      <div key={i} className="flex justify-between text-xs">
                        <span className="text-[var(--text-secondary)]">
                          {plan.data} ({plan.validity})
                        </span>
                        <span className="font-bold text-[var(--color-primary)]">{plan.price}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">Pros</h4>
                  <ul className="space-y-1.5 mb-4">
                    {option.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">Cons</h4>
                  <ul className="space-y-1.5 mb-4">
                    {option.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <AlertTriangle className="w-3.5 h-3.5 text-[var(--text-muted)] mt-0.5 shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[var(--border-primary)]">
                    <p className="text-xs text-[var(--text-muted)]">
                      <Star className="w-3 h-3 inline mr-1" />
                      Best for: {option.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WiFi Availability */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wifi className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            WiFi Availability by Location Type
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            WiFi quality in Morocco varies dramatically by location. Here is what
            to expect so you can plan your connectivity needs accordingly.
          </p>
          <div className="space-y-6">
            {wifiAvailability.map((place) => {
              const Icon = place.icon;
              return (
                <div key={place.location} className="card-moroccan p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center gap-3 md:w-1/3">
                      <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {place.location}
                        </h3>
                        <span className="text-sm font-bold" style={{ color: place.qualityColor }}>
                          {place.quality}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{place.description}</p>
                      <ul className="space-y-1.5">
                        {place.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Top Up */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <RefreshCw className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Top Up (Recharge) Your SIM
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five ways to add credit and buy data bundles. You will never be more than
            a few minutes away from a top-up option in any Moroccan town.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topUpMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.method} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {method.method}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{method.description}</p>
                  <ol className="space-y-2">
                    {method.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-[var(--text-secondary)]">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--surface-muted)] text-[var(--color-primary)] font-bold shrink-0 text-xs">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
          <div className="mt-8 card-moroccan p-5">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Hash className="w-5 h-5 text-[var(--color-accent)]" />
              Essential USSD Quick Reference
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Maroc Telecom</h4>
                <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                  <li className="flex justify-between"><span>Check balance:</span><span className="font-mono text-[var(--color-primary)]">*111#</span></li>
                  <li className="flex justify-between"><span>Data menu:</span><span className="font-mono text-[var(--color-primary)]">*580#</span></li>
                  <li className="flex justify-between"><span>Recharge:</span><span className="font-mono text-[var(--color-primary)]">*4#</span></li>
                  <li className="flex justify-between"><span>Data balance:</span><span className="font-mono text-[var(--color-primary)]">*580*1#</span></li>
                  <li className="flex justify-between"><span>Customer service:</span><span className="font-mono text-[var(--color-primary)]">888</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Orange</h4>
                <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                  <li className="flex justify-between"><span>Check balance:</span><span className="font-mono text-[var(--color-primary)]">*100#</span></li>
                  <li className="flex justify-between"><span>Data menu:</span><span className="font-mono text-[var(--color-primary)]">*111#</span></li>
                  <li className="flex justify-between"><span>Recharge:</span><span className="font-mono text-[var(--color-primary)]">*111*code#</span></li>
                  <li className="flex justify-between"><span>Data balance:</span><span className="font-mono text-[var(--color-primary)]">*111*1#</span></li>
                  <li className="flex justify-between"><span>Customer service:</span><span className="font-mono text-[var(--color-primary)]">121</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Inwi</h4>
                <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                  <li className="flex justify-between"><span>Check balance:</span><span className="font-mono text-[var(--color-primary)]">*1#</span></li>
                  <li className="flex justify-between"><span>Data menu:</span><span className="font-mono text-[var(--color-primary)]">*120#</span></li>
                  <li className="flex justify-between"><span>Recharge:</span><span className="font-mono text-[var(--color-primary)]">*120*code#</span></li>
                  <li className="flex justify-between"><span>Data balance:</span><span className="font-mono text-[var(--color-primary)]">*120*1#</span></li>
                  <li className="flex justify-between"><span>Customer service:</span><span className="font-mono text-[var(--color-primary)]">120</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Maps */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Coverage by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where you will have signal and where you will not. Knowing coverage gaps
            in advance lets you download offline maps and prepare accordingly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageInfo.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.area} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {area.area}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{area.signal}</span>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-[var(--color-primary)] mb-2">{area.coverage}</div>
                  <p className="text-xs text-[var(--text-secondary)]">{area.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 card-moroccan p-5 border-2 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Prepare for Offline Travel</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Before heading to the Atlas Mountains, Sahara Desert, or any rural area,
                  download offline Google Maps for the region, save any accommodation
                  addresses and phone numbers, download music and reading material, and
                  inform your accommodation of your expected arrival time. Many mountain
                  lodges and desert camps can only be reached by phone, not internet,
                  so having a local SIM with calling credit (Maroc Telecom) is essential
                  for these areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VPN Info */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            VPN and VoIP: What You Need to Know
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-6">
            Morocco has specific policies around internet calling services.
            A VPN solves most issues and is legal to use.
          </p>
          <div className="card-moroccan p-6 mb-8">
            <p className="text-[var(--text-secondary)] leading-relaxed">{vpnInfo.intro}</p>
          </div>
          <div className="space-y-6">
            {vpnInfo.details.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.topic} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {detail.topic}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {detail.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Info className="w-4 h-4 text-[var(--text-muted)] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Nomad Internet Setup */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Laptop className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Digital Nomad Internet Setup
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is an increasingly popular digital nomad destination.
            Here are four proven internet setups for remote workers, from
            budget to professional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {digitalNomadSetup.map((setup) => {
              const Icon = setup.icon;
              return (
                <div key={setup.setup} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {setup.setup}
                      </h3>
                      <span className="text-sm font-bold text-[var(--color-primary)]">{setup.cost}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{setup.description}</p>
                  <ol className="space-y-2">
                    {setup.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-[var(--text-secondary)]">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--surface-muted)] text-[var(--color-primary)] font-bold shrink-0 text-xs">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                city: 'Marrakech',
                icon: Star,
                internet: 'Excellent in Gueliz, good in medina',
                coworking: '5+ coworking spaces',
                nomadScore: 'Top nomad destination',
              },
              {
                city: 'Casablanca',
                icon: Building,
                internet: 'Best fiber infrastructure in Morocco',
                coworking: '10+ coworking spaces',
                nomadScore: 'Best for professional work',
              },
              {
                city: 'Essaouira',
                icon: Compass,
                internet: 'Good in town, improving yearly',
                coworking: '2-3 coworking spaces',
                nomadScore: 'Surf + work lifestyle',
              },
            ].map((city) => {
              const Icon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{city.city}</h4>
                  </div>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <Wifi className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]">{city.internet}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Laptop className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]">{city.coworking}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]">{city.nomadScore}</span>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* International Calling */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <PhoneCall className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            International Calling Options
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to call home from Morocco without spending a fortune.
            WhatsApp is king, but here are all your options.
          </p>
          <div className="space-y-6">
            {internationalCalling.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.method} className="card-moroccan p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center gap-3 md:w-1/3">
                      <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {method.method}
                        </h3>
                        <span className="text-sm font-bold text-[var(--color-primary)]">{method.cost}</span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{method.description}</p>
                      <ul className="space-y-1.5">
                        {method.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Reference Cards */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Smartphone className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Reference Cards
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Save these for quick reference while traveling. All the essential
            numbers, codes, and prices in one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cost Comparison */}
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <CircleDollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                Cost Comparison
              </h3>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Tourist SIM (basic)</span><span className="font-bold text-[var(--text-primary)]">20-30 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Tourist SIM (good)</span><span className="font-bold text-[var(--text-primary)]">50-100 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">5GB data add-on</span><span className="font-bold text-[var(--text-primary)]">35-50 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">20GB data add-on</span><span className="font-bold text-[var(--text-primary)]">100-150 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">eSIM 5GB (Airalo)</span><span className="font-bold text-[var(--text-primary)]">~160 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">eSIM unlimited 7d</span><span className="font-bold text-[var(--text-primary)]">~270 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Portable WiFi router</span><span className="font-bold text-[var(--text-primary)]">300-500 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Coworking day pass</span><span className="font-bold text-[var(--text-primary)]">100-300 MAD</span></li>
              </ul>
            </div>

            {/* Emergency Numbers */}
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-[var(--color-accent)]" />
                Emergency Numbers
              </h3>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Police</span><span className="font-bold text-[var(--text-primary)]">19</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Ambulance / Fire</span><span className="font-bold text-[var(--text-primary)]">15</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Gendarmerie (rural)</span><span className="font-bold text-[var(--text-primary)]">177</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Maroc Telecom CS</span><span className="font-bold text-[var(--text-primary)]">888</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Orange CS</span><span className="font-bold text-[var(--text-primary)]">121</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Inwi CS</span><span className="font-bold text-[var(--text-primary)]">120</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Morocco country code</span><span className="font-bold text-[var(--text-primary)]">+212</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Tourist police</span><span className="font-bold text-[var(--text-primary)]">0524-384601</span></li>
              </ul>
            </div>

            {/* APN Settings */}
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-[var(--color-accent)]" />
                APN Settings
              </h3>
              <ul className="space-y-3 text-xs">
                <li>
                  <span className="font-bold text-[var(--text-primary)] block">Maroc Telecom</span>
                  <span className="text-[var(--text-secondary)] font-mono">APN: internet1.iam.net.ma</span>
                </li>
                <li>
                  <span className="font-bold text-[var(--text-primary)] block">Orange</span>
                  <span className="text-[var(--text-secondary)] font-mono">APN: internet.orange.ma</span>
                </li>
                <li>
                  <span className="font-bold text-[var(--text-primary)] block">Inwi</span>
                  <span className="text-[var(--text-secondary)] font-mono">APN: internet.inwi.ma</span>
                </li>
              </ul>
              <p className="text-xs text-[var(--text-muted)] mt-3">
                Most phones auto-configure APN. If data does not work after inserting your SIM, manually enter these settings.
              </p>
            </div>

            {/* Data Usage Guide */}
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-[var(--color-accent)]" />
                Data Usage Guide
              </h3>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Google Maps (1hr)</span><span className="font-bold text-[var(--text-primary)]">~5-10 MB</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">WhatsApp text (1hr)</span><span className="font-bold text-[var(--text-primary)]">~1-2 MB</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">WhatsApp call (1hr)</span><span className="font-bold text-[var(--text-primary)]">~30 MB</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Video call (1hr)</span><span className="font-bold text-[var(--text-primary)]">~300 MB</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Instagram browse (1hr)</span><span className="font-bold text-[var(--text-primary)]">~100 MB</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Netflix stream (1hr)</span><span className="font-bold text-[var(--text-primary)]">~1 GB</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Typical traveler/day</span><span className="font-bold text-[var(--text-primary)]">500 MB-1 GB</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Nomad working/day</span><span className="font-bold text-[var(--text-primary)]">1-3 GB</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to every common question about SIM cards, internet,
            and staying connected in Morocco.
          </p>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-start gap-2">
                  <MessageCircleQuestion className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Stay Connected in Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            With a local SIM card or eSIM, you will navigate medinas with confidence,
            communicate with your hosts effortlessly, and share your journey in real
            time. Get connected the moment you land and make the most of every
            moment in Morocco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/digital-nomad"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors font-medium"
            >
              <Laptop className="w-5 h-5" />
              Digital Nomad Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/budget-travel"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-medium"
            >
              <CreditCard className="w-5 h-5" />
              Budget Travel Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/first-time"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg hover:bg-white transition-colors font-medium"
            >
              <Globe className="w-5 h-5" />
              First-Time Visitor Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-8">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Digital Nomad Guide',
                description: 'Complete guide to working remotely from Morocco. Coworking spaces, visa info, internet speeds, and the best cities for nomads.',
                href: '/digital-nomad',
                icon: Laptop,
              },
              {
                title: 'Budget Travel Guide',
                description: 'How to travel Morocco on any budget. Real prices in MAD, three budget tiers, haggling tips, and money-saving strategies.',
                href: '/budget-travel',
                icon: CreditCard,
              },
              {
                title: 'Safety Guide',
                description: 'Stay safe in Morocco. Common scams, emergency numbers, health advice, and practical safety tips for every traveler.',
                href: '/safety',
                icon: Shield,
              },
              {
                title: 'First-Time Visitor Guide',
                description: 'Everything first-time visitors need to know about Morocco. Culture, customs, what to expect, and how to prepare.',
                href: '/first-time',
                icon: Globe,
              },
            ].map((guide) => {
              const Icon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <Icon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
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
    </>
  );
}

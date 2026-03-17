import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Smartphone,
  Signal,
  Wifi,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Globe,
  Store,
  Plane,
  Zap,
  Building,
  Users,
  MessageSquare,
  Download,
  Settings,
  CreditCard,
  Map,
  PhoneCall,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco SIM Card Guide 2026 | Best Mobile Data Plans, eSIM & WiFi for Tourists',
  description:
    'Complete guide to getting a SIM card and mobile data in Morocco. Compare Maroc Telecom, Orange, and Inwi tourist plans from 20 MAD. eSIM options, airport buying guide, coverage maps, WiFi alternatives, and practical tips for staying connected.',
  keywords: [
    'Morocco SIM card',
    'Morocco mobile data',
    'Maroc Telecom tourist SIM',
    'Orange Morocco SIM card',
    'Inwi Morocco prepaid',
    'Morocco eSIM',
    'Airalo Morocco',
    'Holafly Morocco eSIM',
    'Morocco prepaid data plan',
    'Morocco internet tourist',
    'buy SIM card Morocco airport',
    'Morocco 4G coverage',
    'Morocco 5G network',
    'Morocco WiFi',
    'Morocco data roaming',
    'cheap data Morocco',
    'Morocco phone plan 2026',
    'Marrakech SIM card',
    'Casablanca airport SIM',
    'Morocco connectivity guide',
    'best SIM card Morocco tourist',
    'Morocco mobile network comparison',
  ],
  openGraph: {
    title: 'Morocco SIM Card Guide 2026 | Best Mobile Data Plans, eSIM & WiFi for Tourists',
    description:
      'Compare Maroc Telecom, Orange, and Inwi tourist data plans from 20 MAD. Plus eSIM options, airport buying locations, coverage info, and WiFi alternatives across Morocco.',
    url: `${BASE_URL}/morocco-sim-card`,
    images: [
      {
        url: `${BASE_URL}/images/hero-sim-card.webp`,
        width: 1200,
        height: 630,
        alt: 'Tourist using smartphone with Moroccan cityscape in the background, staying connected in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco SIM Card Guide 2026 | Best Data Plans for Tourists',
    description:
      'Compare all 3 Moroccan carriers, tourist SIM packages from 20 MAD, eSIM alternatives, and WiFi options. The definitive guide to staying connected in Morocco.',
    images: [`${BASE_URL}/images/hero-sim-card.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-sim-card` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-sim-card`,
  name: 'Morocco SIM Card Guide 2026 | Best Mobile Data Plans, eSIM & WiFi for Tourists',
  description:
    'Complete guide to getting a SIM card and mobile data in Morocco. Compare Maroc Telecom, Orange, and Inwi tourist plans. eSIM options, airport buying guide, coverage maps, WiFi alternatives, and practical tips.',
  url: `${BASE_URL}/morocco-sim-card`,
  image: `${BASE_URL}/images/hero-sim-card.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-sim-card`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco SIM Card Guide', item: `${BASE_URL}/morocco-sim-card` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MOBILE PROVIDERS
   ═══════════════════════════════════════════════════════════════ */

const providers = [
  {
    name: 'Maroc Telecom (IAM)',
    icon: Signal,
    color: 'text-blue-600',
    tagline: 'Largest network, best rural coverage',
    marketShare: '~45%',
    network: '2G / 3G / 4G LTE / 5G (expanding)',
    coverageRating: 5,
    description:
      'Morocco\'s incumbent operator and the largest carrier by far. Maroc Telecom (also called IAM or Itissalat al-Maghrib) has the widest network coverage in the country, especially in rural and remote areas like the Sahara, Atlas Mountains, and small villages. If you plan to travel beyond major cities, IAM is the safest choice for consistent connectivity.',
    prepaidPlans: [
      { name: 'Jawal Recharge 20', data: '500 MB', calls: '20 min national', validity: '7 days', price: 'From 20 MAD' },
      { name: 'Jawal Recharge 50', data: '2 GB', calls: '60 min national', validity: '30 days', price: 'From 50 MAD' },
      { name: 'Jawal Recharge 100', data: '5 GB', calls: '120 min national', validity: '30 days', price: 'From 100 MAD' },
      { name: 'Internet Pass 10 GB', data: '10 GB', calls: 'Data only', validity: '30 days', price: 'From 100 MAD' },
      { name: 'Internet Pass 20 GB', data: '20 GB', calls: 'Data only', validity: '30 days', price: 'From 150 MAD' },
    ],
    touristPlan: {
      name: 'Jawal Tourist',
      data: '10 GB 4G data',
      calls: '30 min international + 60 min national',
      validity: '30 days',
      price: 'From 100 MAD',
      extras: 'Free WhatsApp messaging for 30 days',
    },
    strengths: ['Best rural and remote coverage', 'Widest 4G network in Morocco', '5G available in Casablanca, Rabat, Marrakech', 'Most reliable in Atlas Mountains and Sahara', 'Largest number of physical stores'],
    weaknesses: ['Slightly more expensive than competitors', 'Customer service can be slow', 'App interface less modern than Orange'],
    buyOnline: false,
    fiveG: true,
    fiveGCities: ['Casablanca', 'Rabat', 'Marrakech', 'Tangier'],
  },
  {
    name: 'Orange Morocco',
    icon: Globe,
    color: 'text-orange-500',
    tagline: 'Best value, strong urban coverage',
    marketShare: '~30%',
    network: '2G / 3G / 4G LTE / 5G (limited)',
    coverageRating: 4,
    description:
      'Orange Morocco (formerly Meditel) is the second-largest operator and is known for offering the best value-for-money data packages. Their urban coverage in cities like Casablanca, Marrakech, Rabat, Fes, and Tangier is excellent, often matching Maroc Telecom. Their app is the most user-friendly, and they have a dedicated tourist SIM card available at airports.',
    prepaidPlans: [
      { name: 'Recharge 20', data: '750 MB', calls: '20 min national', validity: '7 days', price: 'From 20 MAD' },
      { name: 'Recharge 50', data: '3 GB', calls: '60 min national', validity: '30 days', price: 'From 50 MAD' },
      { name: 'Recharge 100', data: '7 GB', calls: '120 min national', validity: '30 days', price: 'From 100 MAD' },
      { name: 'Internet Max 10 GB', data: '10 GB', calls: 'Data only', validity: '30 days', price: 'From 90 MAD' },
      { name: 'Internet Max 25 GB', data: '25 GB', calls: 'Data only', validity: '30 days', price: 'From 150 MAD' },
    ],
    touristPlan: {
      name: 'Orange Holiday Morocco',
      data: '15 GB 4G data',
      calls: '60 min international + 120 min national',
      validity: '30 days',
      price: 'From 100 MAD',
      extras: 'Free social media (WhatsApp, Instagram, Facebook) for 30 days',
    },
    strengths: ['Best value data packages', 'Excellent tourist SIM with social media included', 'User-friendly app for managing balance', 'Strong 4G in all major cities', 'Airport kiosks at major airports'],
    weaknesses: ['Weaker coverage in rural/remote areas', 'Less reliable in Atlas Mountains', 'Fewer physical stores than Maroc Telecom'],
    buyOnline: true,
    fiveG: true,
    fiveGCities: ['Casablanca', 'Rabat'],
  },
  {
    name: 'Inwi',
    icon: Zap,
    color: 'text-purple-600',
    tagline: 'Budget-friendly, great for data-heavy users',
    marketShare: '~25%',
    network: '2G / 3G / 4G LTE / 5G (limited)',
    coverageRating: 3,
    description:
      'Inwi is Morocco\'s third operator and positions itself as the budget-friendly, data-generous option. They consistently offer the most data per dirham, making them popular with younger Moroccans and data-heavy users. Their coverage is solid in cities and along major highways but noticeably weaker in rural areas compared to Maroc Telecom.',
    prepaidPlans: [
      { name: 'Recharge 20', data: '1 GB', calls: '15 min national', validity: '7 days', price: 'From 20 MAD' },
      { name: 'Recharge 50', data: '4 GB', calls: '45 min national', validity: '30 days', price: 'From 50 MAD' },
      { name: 'Recharge 100', data: '8 GB', calls: '90 min national', validity: '30 days', price: 'From 100 MAD' },
      { name: 'Inwi Data 15 GB', data: '15 GB', calls: 'Data only', validity: '30 days', price: 'From 100 MAD' },
      { name: 'Inwi Data 30 GB', data: '30 GB', calls: 'Data only', validity: '30 days', price: 'From 150 MAD' },
    ],
    touristPlan: {
      name: 'Inwi Welcome Tourist',
      data: '12 GB 4G data',
      calls: '30 min international + 90 min national',
      validity: '30 days',
      price: 'From 100 MAD',
      extras: 'Free WhatsApp and Facebook messaging for 30 days',
    },
    strengths: ['Most data per dirham', 'Generous tourist package', 'Good 4G speeds in cities', 'Affordable international calling add-ons', 'Popular with budget-conscious travelers'],
    weaknesses: ['Weakest rural coverage of the three', 'Not recommended for Sahara desert trips', 'Fewer stores outside major cities', 'Customer service only in French and Arabic'],
    buyOnline: true,
    fiveG: true,
    fiveGCities: ['Casablanca'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUYING LOCATIONS
   ═══════════════════════════════════════════════════════════════ */

const buyingLocations = [
  {
    name: 'Airport Arrivals Hall',
    icon: Plane,
    availability: 'All 3 providers',
    description:
      'The easiest and most convenient option. All major Moroccan airports (Mohammed V Casablanca, Menara Marrakech, Fes-Saiss, Tangier Ibn Battouta, Rabat-Sale) have carrier kiosks or authorized reseller booths in the arrivals hall. Staff speak English and French and will set up the SIM for you. Expect to pay a small premium of 10-20 MAD over street prices for the convenience.',
    tips: [
      'Look for the carrier kiosks immediately after exiting customs',
      'Bring your passport as ID is required for SIM registration',
      'Ask for the tourist plan specifically, as staff may default to local plans',
      'Some kiosks close late at night, but a small shop usually stays open',
    ],
    priceRange: 'From 50 MAD to 150 MAD for SIM + data package',
  },
  {
    name: 'Official Carrier Stores',
    icon: Building,
    availability: 'Single provider per store',
    description:
      'Every Moroccan city has official branded stores for Maroc Telecom, Orange, and Inwi. These are typically found on main commercial streets and in shopping malls. Staff can handle all setup, troubleshooting, and package changes. This is the best option if you need help configuring your phone or have any issues.',
    tips: [
      'Google Maps reliably shows locations of official stores',
      'Visit during weekday mornings to avoid queues',
      'Staff at official stores are more knowledgeable about tourist packages',
      'You can top up, change plans, or resolve issues here',
    ],
    priceRange: 'From 30 MAD to 150 MAD for SIM + data package',
  },
  {
    name: 'Medina & Street Shops',
    icon: Store,
    availability: 'All 3 providers (usually)',
    description:
      'Small phone shops (telecoms or telephonique) are found on virtually every street in Morocco. They sell SIM cards and recharge vouchers for all three operators. Prices are the same as official stores, but staff may not speak English. These shops are the most accessible option in smaller towns and medinas.',
    tips: [
      'Look for signs with carrier logos (blue for IAM, orange for Orange, purple for Inwi)',
      'Negotiate if the shopkeeper tries to charge a setup fee above the SIM price',
      'They can help you activate the SIM and configure APN settings',
      'Available in even the smallest Moroccan towns',
    ],
    priceRange: 'From 20 MAD for SIM only, data packages sold separately',
  },
  {
    name: 'Supermarkets & Kiosks',
    icon: CreditCard,
    availability: 'Recharge vouchers only',
    description:
      'Major supermarkets (Marjane, Carrefour, Acima, BIM) and street kiosks sell recharge vouchers (scratch cards) for all three operators. These are useful for topping up an existing SIM but do not sell new SIM cards. Simply scratch the card, dial the recharge code shown on the back, and your balance is credited instantly.',
    tips: [
      'Available in denominations from 10 MAD to 500 MAD',
      'You can also recharge using the carrier app or by dialing *111#',
      'Some apps accept international credit cards for direct online recharge',
      'Marjane and Carrefour locations are in all major cities',
    ],
    priceRange: 'Recharge vouchers from 10 MAD',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOURIST PLAN COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const touristPlans = [
  {
    provider: 'Maroc Telecom',
    plan: 'Jawal Tourist',
    price: 'From 100 MAD',
    data: '10 GB',
    calls: '30 min intl + 60 min national',
    socialMedia: 'WhatsApp only',
    validity: '30 days',
    topUp: '*111# or carrier app',
    bestFor: 'Travelers visiting rural areas, Sahara, and Atlas Mountains',
    rating: 4,
  },
  {
    provider: 'Orange Morocco',
    plan: 'Holiday Morocco',
    price: 'From 100 MAD',
    data: '15 GB',
    calls: '60 min intl + 120 min national',
    socialMedia: 'WhatsApp + Instagram + Facebook',
    validity: '30 days',
    topUp: 'Orange app (accepts intl cards) or *111#',
    bestFor: 'City-focused travelers who use social media heavily',
    rating: 5,
  },
  {
    provider: 'Inwi',
    plan: 'Welcome Tourist',
    price: 'From 100 MAD',
    data: '12 GB',
    calls: '30 min intl + 90 min national',
    socialMedia: 'WhatsApp + Facebook',
    validity: '30 days',
    topUp: 'Inwi Money app or *120#',
    bestFor: 'Budget travelers who want the most data per dirham',
    rating: 4,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: eSIM OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const esimOptions = [
  {
    name: 'Airalo',
    icon: Globe,
    description:
      'The world\'s largest eSIM marketplace with a dedicated Morocco plan. Airalo partners with local carriers to provide data-only eSIMs that can be purchased and installed before you even board your flight. The app is well-designed, and activation is straightforward. Coverage uses Orange Morocco\'s network in most cases.',
    plans: [
      { data: '1 GB', validity: '7 days', price: 'From 45 MAD (~$4.50 USD)' },
      { data: '3 GB', validity: '15 days', price: 'From 90 MAD (~$9 USD)' },
      { data: '5 GB', validity: '30 days', price: 'From 130 MAD (~$13 USD)' },
      { data: '10 GB', validity: '30 days', price: 'From 200 MAD (~$20 USD)' },
      { data: '20 GB', validity: '30 days', price: 'From 350 MAD (~$35 USD)' },
    ],
    pros: ['Install before arriving in Morocco', 'No passport or ID needed', 'Supports 190+ countries if continuing travel', 'Keep your home number active on primary SIM', 'Excellent customer support'],
    cons: ['Data-only (no calls or SMS)', 'More expensive per GB than local SIMs', 'Requires eSIM-compatible phone', 'Cannot receive Moroccan calls or WhatsApp verification'],
    website: 'airalo.com',
    bestFor: 'Tech-savvy travelers who want instant connectivity on landing',
  },
  {
    name: 'Holafly',
    icon: Smartphone,
    description:
      'A popular eSIM provider known for unlimited data plans. Holafly offers Morocco-specific eSIMs with truly unlimited data (though speeds may be throttled after heavy use). Their plans are sold by duration rather than data amount, making budgeting simple. Coverage piggybacks on local 4G networks.',
    plans: [
      { data: 'Unlimited', validity: '5 days', price: 'From 190 MAD (~$19 USD)' },
      { data: 'Unlimited', validity: '7 days', price: 'From 270 MAD (~$27 USD)' },
      { data: 'Unlimited', validity: '10 days', price: 'From 340 MAD (~$34 USD)' },
      { data: 'Unlimited', validity: '15 days', price: 'From 420 MAD (~$42 USD)' },
      { data: 'Unlimited', validity: '20 days', price: 'From 490 MAD (~$49 USD)' },
    ],
    pros: ['Truly unlimited data (no cap anxiety)', 'Simple pricing by duration', 'Free shipping of QR code to email', '24/7 customer support via chat', 'No fair usage policy throttling under normal use'],
    cons: ['Most expensive option per day', 'Data-only (no calls or SMS)', 'Speeds may slow during peak network congestion', 'Requires eSIM-compatible phone'],
    website: 'holafly.com',
    bestFor: 'Heavy data users who want worry-free unlimited access',
  },
  {
    name: 'Nomad eSIM',
    icon: Map,
    description:
      'A newer entrant offering competitive Morocco eSIM plans. Nomad focuses on regional plans that work across North Africa and Europe, making it ideal if your trip includes Morocco plus Spain, Portugal, or other nearby countries. Their app is clean and modern with real-time data usage tracking.',
    plans: [
      { data: '1 GB', validity: '7 days', price: 'From 40 MAD (~$4 USD)' },
      { data: '3 GB', validity: '15 days', price: 'From 75 MAD (~$7.50 USD)' },
      { data: '5 GB', validity: '30 days', price: 'From 115 MAD (~$11.50 USD)' },
      { data: '10 GB', validity: '30 days', price: 'From 180 MAD (~$18 USD)' },
    ],
    pros: ['Regional plans covering North Africa + Europe', 'Competitive pricing', 'Real-time data usage tracking', 'Easy installation via app', 'Referral discounts available'],
    cons: ['Data-only (no calls or SMS)', 'Smaller company with less track record', 'Fewer plan options than Airalo', 'Customer support less responsive'],
    website: 'nomad.com',
    bestFor: 'Multi-country travelers combining Morocco with Europe',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRACTICAL TIPS
   ═══════════════════════════════════════════════════════════════ */

const tips = [
  {
    title: 'Bring Your Passport',
    icon: ShieldCheck,
    description:
      'Moroccan law requires ID for SIM card registration. You must present your passport when purchasing a SIM card. The vendor will scan or photograph it. This is a legal requirement since 2019 and cannot be bypassed. No passport, no SIM card.',
  },
  {
    title: 'Check Phone Compatibility',
    icon: Settings,
    description:
      'Ensure your phone is unlocked before arriving. Carrier-locked phones from your home country will not accept a Moroccan SIM. Morocco uses GSM frequencies (900/1800 MHz for 2G, 2100 MHz for 3G, and various bands for 4G LTE). Most modern unlocked phones work perfectly.',
  },
  {
    title: 'Download Carrier Apps Before Arriving',
    icon: Download,
    description:
      'Download the My IAM, Orange et Moi, or Inwi Money app before your trip. These apps let you check your balance, buy data add-ons, and manage your account. The Orange app is particularly well-designed and accepts international credit cards for top-ups.',
  },
  {
    title: 'Keep Your Home SIM Active',
    icon: PhoneCall,
    description:
      'If your phone supports dual SIM or eSIM, keep your home SIM active for receiving verification codes and important calls. Many banking apps and two-factor authentication systems send codes to your home number. Having both active gives you the best of both worlds.',
  },
  {
    title: 'Buy Data Add-Ons via USSD Codes',
    icon: MessageSquare,
    description:
      'You can manage your Moroccan SIM without visiting a store. Dial *111# for Maroc Telecom, *111# for Orange, or *120# for Inwi to access the self-service menu. From here you can check balance, buy data packs, and activate international calling. The menus are available in French and Arabic.',
  },
  {
    title: 'WiFi Calling as a Backup',
    icon: Wifi,
    description:
      'Most Moroccan accommodations (riads, hotels, hostels) offer free WiFi. Download WhatsApp and Telegram before arriving. Even without a SIM, you can make free voice and video calls over WiFi. This is a good backup strategy while you get your local SIM sorted.',
  },
  {
    title: 'Coverage in the Sahara and Mountains',
    icon: Signal,
    description:
      'If your itinerary includes the Sahara desert, Merzouga, or remote Atlas Mountain villages, choose Maroc Telecom (IAM). It is the only carrier with reliable coverage in these areas. Orange and Inwi coverage drops significantly outside major highways and cities in rural regions.',
  },
  {
    title: 'Beware of Airport Taxi SIM Scams',
    icon: AlertTriangle,
    description:
      'Unofficial taxi drivers at airports may offer to take you to a "SIM shop" where they earn a commission. The SIM itself is fine, but you will overpay. Always buy from the official airport kiosks in the arrivals hall, or from a branded carrier store in the city. Never buy a SIM from an unlicensed street vendor.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WIFI OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const wifiOptions = [
  {
    name: 'Riads & Hotels',
    icon: Building,
    speed: '5-50 Mbps',
    reliability: 'Good to Excellent',
    description:
      'Almost all Moroccan accommodations offer free WiFi. Upscale riads and hotels generally provide decent speeds of 10-50 Mbps. Budget accommodations may have slower, less reliable connections of 2-10 Mbps. Thick medina walls can weaken signals in older buildings. Ask for the room closest to the router if possible.',
    cost: 'Free (included with room)',
  },
  {
    name: 'Cafes & Restaurants',
    icon: Store,
    speed: '3-20 Mbps',
    reliability: 'Variable',
    description:
      'Most cafes and restaurants in tourist areas offer free WiFi, especially international chains and modern Moroccan cafes. Speeds are typically 3-20 Mbps, which is fine for browsing and messaging but may struggle with video calls during busy hours. Ask for the password when ordering.',
    cost: 'Free with purchase',
  },
  {
    name: 'Coworking Spaces',
    icon: Users,
    speed: '20-100 Mbps',
    reliability: 'Excellent',
    description:
      'Morocco has a growing digital nomad scene with excellent coworking spaces in Marrakech (Le 33, Sun Desk), Casablanca (Technopark, New Work Lab), Rabat (Dare Inc), and Essaouira (Taghazout Bay coworking). Expect fiber-speed internet of 50-100 Mbps, air conditioning, and comfortable workstations.',
    cost: 'From 80 MAD per day / from 600 MAD per month',
  },
  {
    name: 'Public WiFi Hotspots',
    icon: Wifi,
    speed: '1-10 Mbps',
    reliability: 'Poor to Fair',
    description:
      'Some public squares, airports, and train stations offer free WiFi through Maroc Telecom or the municipality. Speeds are slow (1-10 Mbps) and connections are unreliable. Airport WiFi (Inwi Free WiFi) gives you 30 minutes free. Not recommended for anything beyond checking directions.',
    cost: 'Free (limited time, often 30-60 minutes)',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Can I use my home country SIM card in Morocco with roaming?',
    answer:
      'Yes, but it is extremely expensive. International roaming in Morocco typically costs 10-50 MAD per MB of data, which means a single hour of normal phone use could cost hundreds of dirhams. Even with roaming packages from your home carrier, a local Moroccan SIM or eSIM will be 5-10 times cheaper. Roaming should only be used for emergencies while you get a local SIM sorted.',
  },
  {
    question: 'Do I need to register my SIM card in Morocco?',
    answer:
      'Yes. Since 2019, Moroccan law requires all SIM cards to be registered with a valid ID (passport for tourists). The vendor will handle this at the point of purchase by scanning your passport. The registration is instant, and your SIM is usually activated within minutes. This is a standard requirement across North Africa and is nothing to worry about.',
  },
  {
    question: 'Which carrier should I choose if I am only visiting Marrakech and Fes?',
    answer:
      'For a city-focused trip, Orange Morocco offers the best value with their Holiday Morocco tourist SIM. You get 15 GB of data, generous call minutes, and free social media, all for from 100 MAD. Orange\'s 4G coverage in Marrakech and Fes is excellent. However, if you plan a day trip to the Atlas Mountains or Sahara from either city, Maroc Telecom would be the safer choice.',
  },
  {
    question: 'Can I top up my Moroccan SIM after the initial package expires?',
    answer:
      'Absolutely. Topping up is easy and can be done multiple ways: buy a scratch card from any phone shop or kiosk (from 10 MAD), use the carrier app with an international credit card (Orange is the easiest), dial the USSD code (*111# or *120#), or visit a carrier store. Your SIM remains active for 3 months after your last top-up, so you can reuse it on a return trip.',
  },
  {
    question: 'Is 5G available in Morocco for tourists?',
    answer:
      'Morocco launched commercial 5G services in late 2024, starting with Casablanca and Rabat. As of 2026, 5G is available in Casablanca, Rabat, Marrakech, and Tangier through Maroc Telecom, with limited Orange coverage in Casablanca and Rabat. However, 5G coverage is still limited to central urban areas and requires a 5G-compatible phone. For most tourists, 4G LTE is more than sufficient and is widely available nationwide.',
  },
  {
    question: 'What happens if I lose my Moroccan SIM card?',
    answer:
      'Visit any official carrier store with your passport. They can deactivate the lost SIM and issue a replacement for approximately from 20 MAD. Your phone number and any remaining balance can usually be transferred to the new SIM. Report the loss quickly to prevent unauthorized use. If you have an eSIM, you can simply delete it from your phone settings and purchase a new one.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: COVERAGE INFORMATION
   ═══════════════════════════════════════════════════════════════ */

const coverageByRegion = [
  {
    region: 'Major Cities',
    cities: 'Casablanca, Marrakech, Rabat, Fes, Tangier, Agadir, Meknes, Oujda',
    iam: 'Excellent 4G/5G',
    orange: 'Excellent 4G/5G',
    inwi: 'Excellent 4G',
    note: 'All three carriers provide fast, reliable 4G in major cities. Speeds of 20-80 Mbps are typical.',
  },
  {
    region: 'Medium Cities & Towns',
    cities: 'Essaouira, Chefchaouen, El Jadida, Tetouan, Ouarzazate, Ifrane',
    iam: 'Good 4G',
    orange: 'Good 4G',
    inwi: 'Fair 3G/4G',
    note: 'Maroc Telecom and Orange provide solid coverage. Inwi coverage can be spotty in smaller towns.',
  },
  {
    region: 'Atlas Mountains',
    cities: 'Imlil, Toubkal area, Dades Valley, Ait Benhaddou',
    iam: 'Fair 3G/4G',
    orange: 'Limited 3G',
    inwi: 'Weak/None',
    note: 'Only Maroc Telecom has consistent coverage in mountain areas. Signal drops in deep valleys.',
  },
  {
    region: 'Sahara & Desert',
    cities: 'Merzouga, Erg Chebbi, Zagora, M\'Hamid',
    iam: 'Fair 3G',
    orange: 'Weak/Spotty',
    inwi: 'Very Weak/None',
    note: 'Maroc Telecom is the only viable option. Expect no signal in remote dune areas during desert camps.',
  },
  {
    region: 'Highways & Roads',
    cities: 'A1-A7 motorways, major national roads',
    iam: 'Good 4G',
    orange: 'Good 3G/4G',
    inwi: 'Fair 3G/4G',
    note: 'Major highways have decent coverage from all carriers. Secondary roads may lose signal between towns.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSimCardPage() {
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
            backgroundImage: 'url(/images/hero-sim-card.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco SIM Card Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Smartphone className="w-4 h-4" />
            Connectivity &amp; Mobile Data
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco SIM Card &amp; Data Guide:
            <br className="hidden md:block" /> Stay Connected in 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From 20 MAD local SIM cards to international eSIMs. Compare all three Moroccan
            carriers, tourist data plans, and the best ways to stay online across Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Staying Connected in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Getting a SIM card is one of the first things you should do when arriving in
                Morocco. A local SIM gives you affordable mobile data for navigation, translation,
                ride-hailing, and staying in touch with home. Morocco has three mobile operators,
                all offering tourist-friendly prepaid plans at a fraction of what international
                roaming would cost.
              </p>
              <p>
                For a typical two-week trip, expect to pay from 100 MAD (approximately $10 USD)
                for 10-15 GB of 4G data, plus call minutes and free messaging apps. That same
                amount of data via international roaming could cost hundreds of dollars. Whether
                you choose a physical SIM from the airport or an eSIM installed before you fly,
                this guide covers every option.
              </p>
              <p>
                Morocco&apos;s mobile infrastructure has improved dramatically in recent years. 4G LTE
                coverage now reaches most of the country, 5G is rolling out in major cities, and
                WiFi is available at virtually every hotel, riad, and cafe. You will not struggle
                to stay connected in Morocco in 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Recommendation ── */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-8 border-l-4 border-l-[var(--color-accent)]">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              <Star className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
              Quick Recommendation
            </h3>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <p>
                <strong className="text-[var(--text-primary)]">Best Overall:</strong> Orange Morocco Holiday SIM (from 100 MAD) for 15 GB data + free social media. Best value and excellent urban coverage.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Best for Remote Travel:</strong> Maroc Telecom Jawal Tourist (from 100 MAD) for 10 GB data. The only reliable option in the Sahara and Atlas Mountains.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Best eSIM:</strong> Airalo (from 45 MAD) if you want connectivity the moment you land without visiting any shop.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Best Budget:</strong> Inwi Welcome Tourist (from 100 MAD) for 12 GB data. Most data per dirham for city-focused trips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Provider Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Signal className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco&apos;s Three Mobile Carriers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            All three operators offer prepaid SIM cards to tourists. Here is a detailed comparison to help you choose.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Plans and pricing may vary seasonally and by location.
          </p>

          <div className="space-y-12">
            {providers.map((provider) => {
              const ProviderIcon = provider.icon;
              return (
                <div key={provider.name} className="card-moroccan overflow-hidden">
                  {/* Provider Header */}
                  <div className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent)]/80 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ProviderIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                          {provider.name}
                        </h3>
                        <p className="text-white/80 text-sm">{provider.tagline}</p>
                      </div>
                      <div className="ml-auto text-right hidden md:block">
                        <div className="text-white/60 text-xs">Market Share</div>
                        <div className="text-white font-bold">{provider.marketShare}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                      {provider.description}
                    </p>

                    {/* Coverage Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-sm font-medium text-[var(--text-primary)]">Coverage Rating:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Signal
                            key={i}
                            className={`w-4 h-4 ${i <= provider.coverageRating ? 'text-[var(--color-gold)]' : 'text-gray-200'}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-[var(--text-muted)]">({provider.network})</span>
                    </div>

                    {/* Tourist Plan Highlight */}
                    <div className="bg-[var(--surface-muted)] rounded-lg p-4 mb-6">
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                        <Star className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                        Tourist Plan: {provider.touristPlan.name}
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        <div>
                          <span className="text-[var(--text-muted)]">Data</span>
                          <p className="font-bold text-[var(--text-primary)]">{provider.touristPlan.data}</p>
                        </div>
                        <div>
                          <span className="text-[var(--text-muted)]">Calls</span>
                          <p className="font-bold text-[var(--text-primary)]">{provider.touristPlan.calls}</p>
                        </div>
                        <div>
                          <span className="text-[var(--text-muted)]">Validity</span>
                          <p className="font-bold text-[var(--text-primary)]">{provider.touristPlan.validity}</p>
                        </div>
                        <div>
                          <span className="text-[var(--text-muted)]">Price</span>
                          <p className="font-bold text-[var(--color-accent)]">{provider.touristPlan.price}</p>
                        </div>
                      </div>
                      <p className="text-xs text-[var(--color-gold)] mt-2 font-medium">{provider.touristPlan.extras}</p>
                    </div>

                    {/* Prepaid Plans Table */}
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                      All Prepaid Plans
                    </h4>
                    <div className="overflow-x-auto mb-6">
                      <div className="card-moroccan overflow-hidden min-w-[500px]">
                        <div className="grid grid-cols-5 gap-0 bg-[var(--color-accent)]/10 text-xs font-medium text-[var(--text-primary)]">
                          <div className="p-2 px-3">Plan</div>
                          <div className="p-2 px-3">Data</div>
                          <div className="p-2 px-3">Calls</div>
                          <div className="p-2 px-3">Validity</div>
                          <div className="p-2 px-3">Price</div>
                        </div>
                        {provider.prepaidPlans.map((plan, i) => (
                          <div
                            key={plan.name}
                            className={`grid grid-cols-5 gap-0 text-xs ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                          >
                            <div className="p-2 px-3 font-medium text-[var(--text-primary)]">{plan.name}</div>
                            <div className="p-2 px-3 text-[var(--text-secondary)]">{plan.data}</div>
                            <div className="p-2 px-3 text-[var(--text-secondary)]">{plan.calls}</div>
                            <div className="p-2 px-3 text-[var(--text-secondary)]">{plan.validity}</div>
                            <div className="p-2 px-3 text-[var(--color-accent)] font-semibold">{plan.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Strengths & Weaknesses */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-green-700 mb-2 uppercase tracking-wide">
                          Strengths
                        </h4>
                        <ul className="space-y-1">
                          {provider.strengths.map((s) => (
                            <li key={s} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-amber-700 mb-2 uppercase tracking-wide">
                          Weaknesses
                        </h4>
                        <ul className="space-y-1">
                          {provider.weaknesses.map((w) => (
                            <li key={w} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                              {w}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* 5G Badge */}
                    {provider.fiveG && (
                      <div className="mt-4 pt-4 border-t border-[var(--border-default)]">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-medium">
                          <Zap className="w-3 h-3" />
                          5G Available: {provider.fiveGCities.join(', ')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tourist Plan Comparison Table ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tourist Plan Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A side-by-side comparison of the dedicated tourist SIM packages offered by each carrier.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing may apply during peak tourist months (October-April).
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <div className="card-moroccan overflow-hidden min-w-[700px]">
                <div className="grid grid-cols-7 gap-0 bg-[var(--color-accent)] text-white text-xs font-medium">
                  <div className="p-3 px-4">Provider</div>
                  <div className="p-3 px-4">Plan Name</div>
                  <div className="p-3 px-4">Data</div>
                  <div className="p-3 px-4">Calls</div>
                  <div className="p-3 px-4">Social Media</div>
                  <div className="p-3 px-4">Validity</div>
                  <div className="p-3 px-4">Price</div>
                </div>
                {touristPlans.map((plan, i) => (
                  <div
                    key={plan.provider}
                    className={`grid grid-cols-7 gap-0 text-xs ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                  >
                    <div className="p-3 px-4 font-bold text-[var(--text-primary)]">{plan.provider}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{plan.plan}</div>
                    <div className="p-3 px-4 font-bold text-[var(--text-primary)]">{plan.data}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{plan.calls}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{plan.socialMedia}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{plan.validity}</div>
                    <div className="p-3 px-4 text-[var(--color-accent)] font-bold">{plan.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {touristPlans.map((plan) => (
                <div key={plan.provider} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {plan.provider}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i <= plan.rating ? 'text-[var(--color-gold)]' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">{plan.bestFor}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    <Settings className="w-3 h-3 inline mr-1" />
                    Top up: {plan.topUp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to Buy ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy a SIM Card in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            SIM cards are available everywhere in Morocco. Here are the best places to get one, listed from most convenient to most affordable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buyingLocations.map((location) => {
              const LocationIcon = location.icon;
              return (
                <div key={location.name} className="card-moroccan overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                        <LocationIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {location.name}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)]">{location.availability}</p>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                      {location.description}
                    </p>

                    <div className="bg-[var(--surface-muted)] rounded-lg p-4 mb-4">
                      <h4 className="text-xs font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Tips</h4>
                      <ul className="space-y-1.5">
                        {location.tips.map((tip) => (
                          <li key={tip} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="font-semibold text-[var(--color-accent)]">{location.priceRange}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── eSIM Options ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Download className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            eSIM Options for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            If your phone supports eSIM, you can purchase and install a Morocco data plan before your flight.
            No physical SIM card needed, and you stay connected the moment you land.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            eSIM requires a compatible device (iPhone XS/XR or later, Samsung Galaxy S20 or later, Google Pixel 3a or later, and most 2023+ Android phones).
          </p>

          <div className="space-y-8">
            {esimOptions.map((esim) => {
              const EsimIcon = esim.icon;
              return (
                <div key={esim.name} className="card-moroccan overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                        <EsimIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {esim.name}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)]">{esim.website}</p>
                      </div>
                      <span className="ml-auto text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-3 py-1 rounded-full font-medium">
                        {esim.bestFor}
                      </span>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                      {esim.description}
                    </p>

                    {/* Plans Table */}
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                      Available Plans
                    </h4>
                    <div className="overflow-x-auto mb-6">
                      <div className="card-moroccan overflow-hidden min-w-[400px]">
                        <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)]/10 text-xs font-medium text-[var(--text-primary)]">
                          <div className="p-2 px-3">Data</div>
                          <div className="p-2 px-3">Validity</div>
                          <div className="p-2 px-3">Price</div>
                        </div>
                        {esim.plans.map((plan, i) => (
                          <div
                            key={`${plan.data}-${plan.validity}`}
                            className={`grid grid-cols-3 gap-0 text-xs ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                          >
                            <div className="p-2 px-3 font-bold text-[var(--text-primary)]">{plan.data}</div>
                            <div className="p-2 px-3 text-[var(--text-secondary)]">{plan.validity}</div>
                            <div className="p-2 px-3 text-[var(--color-accent)] font-semibold">{plan.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-green-700 mb-2 uppercase tracking-wide">
                          Pros
                        </h4>
                        <ul className="space-y-1">
                          {esim.pros.map((p) => (
                            <li key={p} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-amber-700 mb-2 uppercase tracking-wide">
                          Cons
                        </h4>
                        <ul className="space-y-1">
                          {esim.cons.map((c) => (
                            <li key={c} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* eSIM vs Physical SIM */}
          <div className="mt-12 card-moroccan p-6 max-w-3xl mx-auto">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 text-center">
              eSIM vs Physical SIM: Which Should You Choose?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Choose eSIM If:</h4>
                <ul className="space-y-1.5">
                  <li className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    You want data the moment you land
                  </li>
                  <li className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    You only need data (no calls/SMS)
                  </li>
                  <li className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    You want to keep your home SIM active
                  </li>
                  <li className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    Your phone supports eSIM
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Choose Physical SIM If:</h4>
                <ul className="space-y-1.5">
                  <li className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    You need local calls and SMS
                  </li>
                  <li className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    You want the best value (more data per MAD)
                  </li>
                  <li className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    You need a Moroccan phone number
                  </li>
                  <li className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    Your phone does not support eSIM
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coverage Map Info ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Coverage by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding network coverage across Morocco will help you choose the right carrier for your itinerary.
          </p>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <div className="card-moroccan overflow-hidden min-w-[700px]">
              <div className="grid grid-cols-6 gap-0 bg-[var(--color-accent)] text-white text-xs font-medium">
                <div className="p-3 px-4">Region</div>
                <div className="p-3 px-4">Key Locations</div>
                <div className="p-3 px-4">Maroc Telecom</div>
                <div className="p-3 px-4">Orange</div>
                <div className="p-3 px-4">Inwi</div>
                <div className="p-3 px-4">Notes</div>
              </div>
              {coverageByRegion.map((region, i) => (
                <div
                  key={region.region}
                  className={`grid grid-cols-6 gap-0 text-xs ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-bold text-[var(--text-primary)]">{region.region}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{region.cities}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{region.iam}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{region.orange}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{region.inwi}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)] italic">{region.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="card-moroccan p-5 border-l-4 border-l-[var(--color-gold)]">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Important: Sahara Desert Camps
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If your trip includes an overnight stay in a Sahara desert camp (Merzouga, Erg Chebbi, or Zagora),
                expect to have no mobile signal at all once you leave the town for the dunes. Even Maroc Telecom
                coverage drops off in the deep desert. This is part of the experience. Download offline Google Maps
                of the area before you go, and inform family that you may be unreachable for 12-24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WiFi Alternatives ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wifi className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            WiFi Options in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            WiFi is widely available across Morocco. Here is what to expect from different sources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {wifiOptions.map((option) => {
              const WifiIcon = option.icon;
              return (
                <div key={option.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <WifiIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {option.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span>{option.speed}</span>
                        <span>{option.reliability}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                    {option.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs">
                    <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span className="font-semibold text-[var(--color-accent)]">{option.cost}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            8 Essential Tips for Mobile Data in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    <TipIcon className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Smartphone className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Step-by-Step: Getting Your Morocco SIM Card
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow this quick guide to get connected within minutes of arriving.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Before You Fly
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Ensure your phone is unlocked. If unsure, contact your home carrier to check and request an unlock.
                  Consider downloading carrier apps (My IAM, Orange et Moi, Inwi Money) and offline Google Maps for Morocco.
                  If using eSIM, purchase and install it before departure.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  At the Airport
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  After clearing customs and collecting your luggage, look for the carrier kiosks in the arrivals hall.
                  Choose your carrier (Orange for best value, Maroc Telecom for best coverage). Ask specifically for the
                  tourist plan. Present your passport for registration. The staff will insert the SIM and configure your phone.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Activation &amp; Setup
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Your SIM should activate within minutes. If data does not work immediately, check that mobile data is
                  enabled and that the correct APN settings are configured. For Maroc Telecom: APN is &quot;iam&quot;. For Orange:
                  APN is &quot;internet&quot;. For Inwi: APN is &quot;internet1.inwi.ma&quot;. Restart your phone if needed.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  During Your Trip
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Monitor your data usage through the carrier app or by dialing *111# (IAM/Orange) or *120# (Inwi).
                  If you run out of data, top up at any phone shop with a recharge voucher (from 10 MAD) or through the app.
                  Connect to WiFi at your accommodation to save data. Download maps and content over WiFi for offline use.
                </p>
              </div>
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
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </div>
            ))}
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
            <Link href="/morocco-travel-tips" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Travel Tips
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential travel advice, safety tips, money matters, and practical information for visiting Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-packing-list" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <CheckCircle className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Packing List
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                What to pack for Morocco including clothing, electronics, adapters, and travel essentials.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-transport" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Getting Around Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to trains, buses, taxis, rental cars, and domestic flights in Morocco.
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

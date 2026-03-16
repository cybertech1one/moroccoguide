import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Laptop,
  Wifi,
  MapPin,
  DollarSign,
  Coffee,
  Users,
  Globe,
  Clock,
  CheckCircle,
  Star,
  Building2,
  Zap,
  ThumbsUp,
  ThumbsDown,
  FileText,
  Sun,
  ArrowRight,
  Heart,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Nomad Morocco | Co-Working, Cost of Living & Remote Work Guide',
  description:
    'The complete digital nomad guide to Morocco. Best cities, co-working spaces (Sun Desk, Le 18, Cowurk), internet speeds, cost of living, visa info, coliving, and the best cafes to work from in Marrakech, Essaouira, Tangier, Casablanca, and Rabat.',
  keywords: [
    'digital nomad morocco',
    'remote work morocco',
    'coworking marrakech',
    'morocco wifi speed',
    'morocco cost of living',
    'morocco visa digital nomad',
    'work from morocco',
    'morocco remote workers',
    'essaouira digital nomad',
    'tangier coworking',
    'sun desk taghazout',
    'le 18 marrakech coworking',
    'cowurk casablanca',
    'morocco coliving',
    'nomad community morocco',
  ],
  openGraph: {
    title: 'Digital Nomad Morocco | Co-Working, Cost of Living & Remote Work Guide',
    description:
      'The complete remote work guide to Morocco. Co-working spaces, internet, costs, visa info, coliving, and nomad communities.',
    url: 'https://cityguide.ma/digital-nomad',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Digital nomad working from a Moroccan cafe',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAction',
  name: 'Digital Nomad Guide to Morocco',
  description:
    'A comprehensive guide for digital nomads and remote workers considering Morocco, covering co-working spaces, internet, costs, visas, coliving, and lifestyle.',
  url: 'https://cityguide.ma/digital-nomad',
  location: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

/* ─── Nomad Cities ─── */

const nomadCities = [
  {
    name: 'Marrakech',
    tagline: 'The vibrant creative hub',
    description:
      'Morocco\'s most popular digital nomad destination. A thriving co-working scene, fast internet at most cafes, and an endlessly stimulating environment. The medina provides cultural immersion while the Gueliz neighborhood offers modern comforts. The largest nomad community in Morocco gathers here.',
    internetSpeed: '20-50 Mbps (co-working), 10-30 Mbps (cafes)',
    costOfLiving: '$800 - $1,500/month',
    vibe: 'Energetic, creative, social',
    coworking: [
      { name: 'Le 18 Coworking', price: '1,500 MAD/month (~$150)', amenities: 'Rooftop terrace in the medina, meeting rooms, fast WiFi (40 Mbps), community events, day pass: 120 MAD' },
      { name: 'Sun Desk Marrakech', price: '2,000 MAD/month (~$200)', amenities: 'Riad-style workspace with garden courtyard, 50 Mbps WiFi, printing, Skype booth, coliving option available' },
      { name: 'Kech Cowork', price: '1,200 MAD/month (~$120)', amenities: 'Air-conditioned modern space in Gueliz, 24/7 access, phone booths, kitchen, free coffee' },
      { name: 'The Spot Coworking', price: '1,800 MAD/month (~$180)', amenities: 'Professional space near Majorelle, fiber internet (60 Mbps), meeting rooms, event space' },
    ],
    cafes: [
      'Cafe Clock (medina, great WiFi, cultural events)',
      'Nomad (Jemaa el-Fnaa views, reliable internet)',
      'La Famille (Gueliz, quiet garden, vegan-friendly)',
      'Bacha Coffee (upscale, fast WiFi, excellent pastries)',
      'KECHMARA (Gueliz, hip atmosphere, power outlets)',
    ],
    dayInLife: 'Wake at 7am in your Gueliz apartment (4,000 MAD/month). Walk to Kech Cowork by 8am. Deep work until noon. Lunch at a local spot: chicken tagine with fries for 35 MAD ($3.50). Afternoon calls from the coworking Skype booth. 5pm stroll through Jemaa el-Fnaa as the square comes alive. Dinner on a rooftop riad terrace: 80 MAD ($8). Evening walk through the illuminated medina.',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800',
  },
  {
    name: 'Essaouira',
    tagline: 'The laid-back creative escape',
    description:
      'A slower pace than Marrakech with a strong creative community. The surf culture, art scene, and bohemian atmosphere attract digital nomads seeking work-life balance. Smaller but tight-knit nomad community. The wind keeps temperatures cool even in summer.',
    internetSpeed: '15-40 Mbps (co-working), 8-20 Mbps (cafes)',
    costOfLiving: '$600 - $1,200/month',
    vibe: 'Relaxed, creative, surf-oriented',
    coworking: [
      { name: 'L\'Heure Bleue Coworking', price: '1,200 MAD/month (~$120)', amenities: 'Ocean views from workspace, fast WiFi (35 Mbps), meeting room, coffee/tea included, weekly community events' },
      { name: 'Taros Workspace', price: '800 MAD/month (~$80)', amenities: 'Rooftop terrace with harbor views, cafe below, daily passes available (80 MAD), chill atmosphere' },
      { name: 'Hub Essaouira', price: '1,000 MAD/month (~$100)', amenities: 'Community-focused space near the medina gate, 30 Mbps WiFi, creative workshops, gallery space' },
    ],
    cafes: [
      'Taros (rooftop, stunning harbor views, reliable WiFi)',
      'Cafe Vague Bleu (medina, quiet, good for focused work)',
      'La Table by Madada (fast WiFi, excellent food, power outlets)',
      'Mogador Coffee (central, reliable internet, outdoor terrace)',
    ],
    dayInLife: 'Wake at 7:30am in your medina apartment (2,500 MAD/month). Surf check from the ramparts. Morning work session at Taros with harbor views. Break for a fresh fish lunch at the port: 40 MAD ($4). Afternoon deep work at L\'Heure Bleue. 5pm surf session at Moulay Bouzerktoune. Sunset from the ramparts. Dinner at a medina restaurant: 60 MAD ($6). Evening reading in the peaceful riad courtyard.',
    image: 'https://images.unsplash.com/photo-1560437091-4383266ac31b?q=80&w=800',
  },
  {
    name: 'Tangier',
    tagline: 'The cosmopolitan gateway',
    description:
      'Morocco\'s most European-feeling city with a growing tech and startup scene. Proximity to Spain (35 minutes by ferry), international atmosphere, and modern infrastructure make it increasingly popular with remote workers. The fastest-growing nomad community in Morocco.',
    internetSpeed: '25-60 Mbps (co-working), 15-35 Mbps (cafes)',
    costOfLiving: '$700 - $1,300/month',
    vibe: 'Cosmopolitan, entrepreneurial, multicultural',
    coworking: [
      { name: 'The Loft Coworking', price: '1,500 MAD/month (~$150)', amenities: 'Modern design in Ville Nouvelle, high-speed fiber (60 Mbps), event space, mentoring programs, startup community' },
      { name: 'Technopark Tangier', price: '1,000 MAD/month (~$100)', amenities: 'Government-backed tech hub, networking events, meeting rooms, fiber internet, incubator programs' },
      { name: 'MESC Tangier', price: '1,300 MAD/month (~$130)', amenities: 'Mediterranean views, creative community, video call rooms, 24/7 access, rooftop terrace' },
    ],
    cafes: [
      'Cafe Hafa (legendary cliff-side views, decent WiFi)',
      'Gran Cafe de Paris (historic, central, literary atmosphere)',
      'Salon Bleu (medina rooftop, atmospheric, good for light work)',
      'Cafe Tingis (modern, fast internet, quiet workspace area)',
    ],
    dayInLife: 'Wake at 8am in your Ville Nouvelle apartment (3,500 MAD/month). Coffee at Gran Cafe de Paris: 15 MAD. Walk to The Loft Coworking by 9am. Focused work until 1pm. Lunch at a seafood grill in the port: 50 MAD ($5). Afternoon calls and admin from the coworking space. 6pm walk along the Corniche with views of Spain across the strait. Dinner in the medina: 70 MAD ($7). Weekend day trip to Tarifa, Spain (35 min ferry, 250 MAD round trip).',
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800',
  },
  {
    name: 'Casablanca',
    tagline: 'The business powerhouse',
    description:
      'Morocco\'s economic capital and largest city has the best internet infrastructure in the country. Less tourist-friendly than other cities, but ideal for nomads who prioritize connectivity, modern amenities, and a professional environment. Home to Morocco\'s tech industry.',
    internetSpeed: '40-100 Mbps (co-working), 20-50 Mbps (cafes)',
    costOfLiving: '$900 - $1,500/month',
    vibe: 'Business-oriented, modern, cosmopolitan',
    coworking: [
      { name: 'Cowurk Casablanca', price: '2,000 MAD/month (~$200)', amenities: 'Premium space in Maarif district, 100 Mbps fiber, podcast studio, event venue, startup community, day pass: 150 MAD' },
      { name: 'New Work Lab', price: '1,800 MAD/month (~$180)', amenities: 'Design-forward space, podcast recording studio, 100 Mbps WiFi, regular community events, free workshops' },
      { name: 'Casanearshore Park', price: '2,200 MAD/month (~$220)', amenities: 'Enterprise-level facilities, fiber optic, conference center, part of Morocco\'s nearshore tech ecosystem' },
      { name: 'WeWork Casablanca Finance City', price: '2,500 MAD/month (~$250)', amenities: 'International standard in CFC, global access network, community events, premium meeting rooms' },
    ],
    cafes: [
      'Cafe Verdi (Maarif, fast WiFi, laptop-friendly)',
      'Bacha Coffee (upscale, reliable internet, beautiful space)',
      'Le Cabestan (ocean views, good internet, upscale)',
      'Iris Cafe (modern, explicitly co-working friendly, power outlets)',
      'Cafe de la Sqala (atmospheric medina cafe, decent WiFi)',
    ],
    dayInLife: 'Wake at 7:30am in your Maarif apartment (5,000 MAD/month, modern and well-equipped). Walk to Cowurk by 8:30am. Deep work on fiber internet. Lunch at a business restaurant: 80 MAD ($8). Afternoon video calls in a soundproof booth. 6pm run along the Corniche. Dinner at a Casa restaurant in the Habous quarter: 100 MAD ($10). Weekend: explore the Hassan II Mosque or take the train to Rabat (1 hour, 80 MAD).',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
  },
  {
    name: 'Rabat',
    tagline: 'The stable, modern capital',
    description:
      'Morocco\'s cleanest, most organized city with excellent infrastructure. The growing tech sector, university population, and diplomatic community create a surprisingly international environment. Best public transport in Morocco (tram system). An under-the-radar nomad gem.',
    internetSpeed: '30-70 Mbps (co-working), 15-40 Mbps (cafes)',
    costOfLiving: '$700 - $1,400/month',
    vibe: 'Professional, clean, modern, green spaces',
    coworking: [
      { name: 'Technopark Rabat', price: '1,200 MAD/month (~$120)', amenities: 'Morocco\'s flagship tech hub, fiber internet (80 Mbps), conference rooms, networking events, incubator access' },
      { name: 'The Workshop Rabat', price: '1,500 MAD/month (~$150)', amenities: 'Modern space in Agdal district, 24/7 access, community kitchen, fast WiFi, standing desks available' },
      { name: 'Impact Lab', price: '1,300 MAD/month (~$130)', amenities: 'Social enterprise focused, meeting rooms, mentoring, strong community of impact-driven professionals' },
    ],
    cafes: [
      'Cafe Paul (Agdal, reliable WiFi, French pastries)',
      'Yamal Alsham (quiet, good internet, Middle Eastern food)',
      'Le Dhow (floating restaurant on the Bouregreg, modern)',
      'Cafe Renaissance (city center, fast WiFi, convenient)',
      'Chez Paul (ocean views in Kasbah des Oudaias, relaxing)',
    ],
    dayInLife: 'Wake at 7:30am in your Agdal apartment (4,000 MAD/month). Tram to Technopark (10 min, 6 MAD). Morning work on fiber internet. Walk to Yamal Alsham for lunch: 45 MAD ($4.50). Afternoon focused work. 5pm explore the Kasbah des Oudaias and watch sunset over the Atlantic. Dinner in Agdal: 60 MAD ($6). Evening walk along the Bouregreg river promenade. Weekend: day trip to the Roman ruins of Volubilis or the blue city of Chefchaouen.',
    image: 'https://images.unsplash.com/photo-1570698473651-b2de99bae12f?q=80&w=800',
  },
];

/* ─── Taghazout Spotlight ─── */

const taghazoutSpotlight = {
  name: 'Taghazout',
  tagline: 'The surf-and-work paradise',
  description:
    'Not a city, but Taghazout deserves special mention as Morocco\'s ultimate surf-nomad village. This small coastal village 20km north of Agadir has evolved into a dedicated digital nomad hub with purpose-built coworking and coliving spaces. If your ideal day involves morning surf followed by afternoon coding, Taghazout is your place.',
  internetSpeed: '20-40 Mbps (co-working), 10-20 Mbps (cafes)',
  costOfLiving: '$600 - $1,100/month',
  coworking: [
    { name: 'Sun Desk Taghazout', price: '1,800 MAD/month (~$180)', amenities: 'Morocco\'s most famous nomad space. Ocean-view workspace, coliving option ($450-650/month all-inclusive), 40 Mbps WiFi, surf gear storage, community dinners, yoga.' },
    { name: 'Taghazout Cowork', price: '1,200 MAD/month (~$120)', amenities: 'Relaxed rooftop workspace with ocean views. Flexible hours, surf break-friendly schedule, day passes available (100 MAD).' },
  ],
  cafes: ['Cafe Aftas (main square, WiFi, people-watching)', 'Nine Palms (smoothie bowls, good internet)', 'Sunrise Cafe (ocean views, morning work spot)'],
};

/* ─── Coliving Spaces ─── */

const colivingSpaces = [
  {
    name: 'Sun Desk Taghazout',
    location: 'Taghazout',
    price: '$450 - $650/month',
    includes: 'Private or shared room, coworking space, WiFi, cleaning, community dinners, surf equipment access, yoga sessions',
    vibe: 'The original Morocco coliving. Surf-focused community with a mix of developers, designers, and creative professionals.',
  },
  {
    name: 'Roam Marrakech',
    location: 'Marrakech (Gueliz)',
    price: '$700 - $1,000/month',
    includes: 'Private room in shared riad, coworking area, WiFi, weekly cleaning, rooftop terrace, pool access',
    vibe: 'Upscale coliving in a beautifully restored riad. More polished crowd: startup founders, senior developers, content creators.',
  },
  {
    name: 'Surf Maroc (Taghazout)',
    location: 'Taghazout',
    price: '$400 - $550/month',
    includes: 'Room in surf house, communal kitchen, WiFi, surf lessons discount, rooftop yoga, weekly barbecue',
    vibe: 'Budget-friendly surf-first community. Younger crowd (25-35). Social atmosphere with organized activities.',
  },
  {
    name: 'The Blue House (Essaouira)',
    location: 'Essaouira Medina',
    price: '$500 - $700/month',
    includes: 'Room in restored medina house, shared workspace, WiFi, breakfast, rooftop terrace with ocean view',
    vibe: 'Creative and artistic. Writers, photographers, and designers. Quieter and more introspective than Taghazout.',
  },
];

/* ─── Cost of Living ─── */

const costOfLiving = [
  { category: 'Rent (1-bed apartment, central)', budget: '3,000 - 6,000 MAD', usd: '$300 - $600', note: 'Medina apartments cheaper; modern Gueliz/Ville Nouvelle more expensive. Airbnb: 4,000-8,000 MAD (higher but furnished)' },
  { category: 'Rent (shared apartment)', budget: '1,500 - 3,000 MAD', usd: '$150 - $300', note: 'Common among nomads. Facebook groups and local agencies help find rooms. Best value option' },
  { category: 'Coliving Space', budget: '4,500 - 10,000 MAD', usd: '$450 - $1,000', note: 'All-inclusive (room, coworking, WiFi, cleaning). Sun Desk Taghazout from 4,500 MAD' },
  { category: 'Co-working Space', budget: '800 - 2,500 MAD', usd: '$80 - $250', note: 'Monthly memberships. Day passes: 80-150 MAD. Many include coffee/tea. Cowurk Casa: 2,000 MAD' },
  { category: 'Food (eating out)', budget: '1,500 - 3,000 MAD', usd: '$150 - $300', note: 'Street food: 15-30 MAD. Casual restaurant: 40-80 MAD. Upscale: 150-300 MAD. Groceries if cooking: 1,000 MAD' },
  { category: 'Transport', budget: '200 - 600 MAD', usd: '$20 - $60', note: 'Most cities walkable. Petit taxis: 10-30 MAD per ride. Rabat tram monthly pass: 150 MAD. No need for a car' },
  { category: 'Internet (home fiber)', budget: '200 - 400 MAD', usd: '$20 - $40', note: 'Maroc Telecom or Inwi fiber. 100 Mbps plans available in most cities. Setup takes 3-7 days' },
  { category: 'SIM Card + Data', budget: '50 - 200 MAD', usd: '$5 - $20', note: 'Maroc Telecom (best coverage), Inwi, or Orange. 20GB 4G data: ~100 MAD/month. Buy at any corner shop' },
  { category: 'Entertainment', budget: '500 - 1,500 MAD', usd: '$50 - $150', note: 'Hammam: 50-200 MAD. Yoga: 80-150 MAD/class. Surf lesson: 250 MAD. Weekend trip: 300-800 MAD' },
  { category: 'Health Insurance', budget: '300 - 800 MAD', usd: '$30 - $80', note: 'SafetyWing: ~$45/month. World Nomads: varies. Local doctor visit: 200-400 MAD. Pharmacy: very affordable' },
  { category: 'Monthly Total', budget: '8,000 - 15,000 MAD', usd: '$800 - $1,500', note: 'Comfortable digital nomad lifestyle. Ultra-budget possible at $600/month in smaller cities' },
];

/* ─── Internet Info ─── */

const internetInfo = [
  {
    title: 'Fixed Broadband (Fiber)',
    description: 'Maroc Telecom and Inwi offer fiber optic connections in most cities. Speeds up to 100 Mbps. Coverage in medinas can be spotty; Ville Nouvelle neighborhoods are more reliable. Setup: 3-7 days, requires passport.',
    speed: '20 - 100 Mbps',
  },
  {
    title: 'Mobile Data (4G/5G)',
    description: 'Excellent 4G coverage in all cities and along major highways. Maroc Telecom has the best coverage nationwide. 5G is live in Casablanca, Rabat, and Tangier. Unlimited 4G data plans from 200 MAD/month.',
    speed: '10 - 80 Mbps',
  },
  {
    title: 'Cafe WiFi',
    description: 'Most cafes in tourist areas offer free WiFi. Quality varies significantly. Modern cafes in Gueliz (Marrakech), Maarif (Casa), and Ville Nouvelle areas are most reliable. Always order something; free WiFi is not guaranteed.',
    speed: '5 - 30 Mbps',
  },
  {
    title: 'Co-working Spaces',
    description: 'Dedicated co-working spaces offer the most reliable internet with backup connections. Most provide 30-60 Mbps with some (Cowurk, Casanearshore) offering 100+ Mbps fiber. UPS backup at most spaces.',
    speed: '30 - 100+ Mbps',
  },
];

/* ─── Visa Info ─── */

const visaInfo = [
  {
    title: 'Tourist Visa (90 days visa-free)',
    description: 'Citizens of 69 countries (including US, UK, EU, Canada, Australia, Japan) receive visa-free entry for up to 90 days. No prior application needed. Just show up with a valid passport (6+ months validity). Entry stamp at the airport.',
  },
  {
    title: 'The 90-Day Limit',
    description: 'Your 90 days start from entry. There is no formal extension process for tourists. After 90 days, you must leave the country. Overstaying can result in fines, detention, or a ban from re-entry. Take this seriously.',
  },
  {
    title: 'Visa Runs (Common Strategy)',
    description: 'The most popular nomad strategy: leave Morocco before 90 days, spend a few days in Spain (Tarifa ferry: 35 min, ~250 MAD) or the Canary Islands, and re-enter for a fresh 90 days. Many nomads do this 2-4 times per year. Immigration officers may question frequent re-entries.',
  },
  {
    title: 'Long-Term Options',
    description: 'Morocco does not currently have a specific digital nomad visa (as of 2025). For stays beyond 90 days: (1) Business visa with Moroccan company sponsorship, (2) Student visa via Arabic or French language school, (3) Residency application (requires patience and a local lawyer). Consult a Moroccan immigration lawyer for long-term plans.',
  },
  {
    title: 'Tax Considerations',
    description: 'Morocco taxes residents on worldwide income after 183 days of presence in a calendar year. Most digital nomads stay under 90 days per visit (well below the 183-day threshold). If you do visa runs and accumulate 183+ days, consult a tax professional. Morocco has tax treaties with many countries.',
  },
  {
    title: 'Banking & Money',
    description: 'The Moroccan dirham (MAD) is a closed currency (cannot be bought outside Morocco). ATMs are plentiful (BMCE, Attijariwafa, CIH). Wise (formerly TransferWise) works well for transfers. Card acceptance is growing but carry cash for medina shopping, taxis, and small restaurants.',
  },
];

/* ─── Community & Networking ─── */

const communityNetworking = [
  {
    title: 'Facebook Groups',
    items: [
      'Digital Nomads Morocco (5,000+ members, very active)',
      'Expats in Marrakech (tips on apartments, services)',
      'Tangier International Community',
      'Remote Workers Morocco',
      'Essaouira Expats & Nomads',
    ],
  },
  {
    title: 'Events & Meetups',
    items: [
      'Startup Grind Casablanca (monthly entrepreneur meetups)',
      'Startup Grind Marrakech (growing tech scene)',
      'Tech meetups at Technopark (Rabat & Casablanca)',
      'Language exchange evenings (multiple cities)',
      'Nomad community dinners at Sun Desk (Taghazout, weekly)',
      'Coworking happy hours (Le 18, Cowurk, The Loft)',
    ],
  },
  {
    title: 'Online Platforms',
    items: [
      'NomadList (Morocco: top 20 globally rated)',
      'Couchsurfing hangouts (active in Marrakech, Tangier)',
      'Meetup.com groups in major cities',
      'r/digitalnomad (Morocco threads popular)',
      'Slack: #morocco channel in Nomad List Slack',
    ],
  },
];

/* ─── Pros & Cons ─── */

const prosAndCons = {
  pros: [
    { text: 'Extremely affordable ($800-1,500/month comfortable)', detail: 'One of the cheapest nomad destinations with genuinely high quality of life' },
    { text: 'Rich culture and endless exploration', detail: 'Ancient medinas, desert, mountains, and coast all within a few hours' },
    { text: 'Amazing food at incredible prices', detail: 'World-class cuisine from $2 street food to $30 fine dining' },
    { text: 'Warm climate year-round', detail: 'Coastal cities enjoy 300+ sunny days. Marrakech: warm 9 months of the year' },
    { text: 'Close to Europe (3hr flights)', detail: 'Paris, London, Madrid all under 3.5 hours. Ryanair, easyJet, and Royal Air Maroc' },
    { text: 'Friendly, welcoming people', detail: 'Moroccan hospitality (terraha) is legendary and genuine' },
    { text: 'Growing nomad infrastructure', detail: 'New co-working spaces and nomad-friendly cafes opening regularly in every city' },
    { text: 'GMT+1 timezone (year-round)', detail: 'Perfect overlap with European business hours. 5-6 hour overlap with US East Coast' },
    { text: 'Excellent healthcare for the price', detail: 'Private clinics are affordable (doctor visit: $20-40). Pharmacies everywhere' },
  ],
  cons: [
    { text: 'Internet can be inconsistent', detail: 'Especially in medinas and rural areas. Co-working spaces solve this, but cafe WiFi is hit-or-miss' },
    { text: 'No digital nomad visa', detail: '90-day tourist limit requires visa runs. This may change (rumors of a DN visa in development)' },
    { text: 'Language barrier outside tourist areas', detail: 'Arabic and French are primary. English is limited in smaller cities. Learn basic French phrases' },
    { text: 'Bureaucracy can be frustrating', detail: 'Banking, long-term rentals, and admin can be slow. Patience is essential' },
    { text: 'Medinas can be overwhelming', detail: 'Noise, touts, navigation challenges. Some nomads prefer Ville Nouvelle neighborhoods' },
    { text: 'Summer heat in interior cities', detail: 'Marrakech reaches 45C in July-August. Coast stays comfortable. Plan accordingly' },
    { text: 'Women may face more street attention', detail: 'Catcalling exists, especially in less touristy areas. Tourist areas are generally fine. Connect with female nomad communities for tips' },
  ],
};

/* ─── Monthly Budget Tiers ─── */

const monthlyBudget = [
  {
    level: 'Budget Nomad',
    range: '$600 - $800/month',
    description: 'Shared apartment in medina or small city, cooking at home, street food, cafe WiFi or coworking day passes, minimal entertainment. Works best in Essaouira, Taghazout, or Rabat.',
    breakdown: 'Rent: $150-250 | Food: $100-150 | Cowork: $50-80 | Transport: $20 | SIM: $10 | Other: $100',
  },
  {
    level: 'Comfortable Nomad',
    range: '$1,000 - $1,300/month',
    description: 'Private apartment in nice area, monthly co-working membership, eating out daily, weekend trips, some activities. The sweet spot for most nomads.',
    breakdown: 'Rent: $350-500 | Food: $200-250 | Cowork: $120-180 | Transport: $40 | SIM: $15 | Entertainment: $150 | Other: $100',
  },
  {
    level: 'Premium Nomad',
    range: '$1,500 - $2,000+/month',
    description: 'Modern apartment in Gueliz/Ville Nouvelle, premium co-working (Cowurk, WeWork), fine dining, regular activities and travel, gym membership, occasional luxury experiences.',
    breakdown: 'Rent: $500-700 | Food: $300-400 | Cowork: $180-250 | Transport: $60 | Gym: $40 | Entertainment: $250 | Other: $150',
  },
];

/* ─── City Comparison Table ─── */

const cityComparison = [
  { city: 'Marrakech', internet: '20-50 Mbps', cost: '$800-1,500', coworking: '4+ spaces', community: 'Large', weather: 'Hot summers', bestFor: 'Culture, social scene, food' },
  { city: 'Essaouira', internet: '15-40 Mbps', cost: '$600-1,200', coworking: '3 spaces', community: 'Small-Med', weather: 'Windy, mild', bestFor: 'Surf, creative work, calm' },
  { city: 'Tangier', internet: '25-60 Mbps', cost: '$700-1,300', coworking: '3 spaces', community: 'Growing', weather: 'Mediterranean', bestFor: 'Europe access, startups' },
  { city: 'Casablanca', internet: '40-100 Mbps', cost: '$900-1,500', coworking: '5+ spaces', community: 'Professional', weather: 'Mild, humid', bestFor: 'Best internet, business' },
  { city: 'Rabat', internet: '30-70 Mbps', cost: '$700-1,400', coworking: '3 spaces', community: 'Small-Med', weather: 'Mild, green', bestFor: 'Stability, tram, clean' },
  { city: 'Taghazout', internet: '20-40 Mbps', cost: '$600-1,100', coworking: '2 spaces', community: 'Tight-knit', weather: 'Sunny, warm', bestFor: 'Surf + work lifestyle' },
];

export default function DigitalNomadPage() {
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
              'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Digital Nomad</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Laptop className="w-4 h-4" />
            Remote Work Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Digital Nomad Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Affordable living, fast-growing co-working spaces, incredible culture, and a GMT+1
            timezone that works with both Europe and the Americas. From $800/month all-in.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Quick Stats */}
      <section className="py-10 gradient-moroccan">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">$1,000</div>
              <div className="text-sm text-white/70 mt-1">Comfortable Monthly Budget</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">90</div>
              <div className="text-sm text-white/70 mt-1">Days Visa-Free</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">100+</div>
              <div className="text-sm text-white/70 mt-1">Mbps Fiber Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">GMT+1</div>
              <div className="text-sm text-white/70 mt-1">Timezone (Year-Round)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Morocco */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco for Remote Workers
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has emerged as one of Africa&apos;s most compelling destinations for digital
                nomads and remote workers. The combination of an extremely low cost of living,
                improving internet infrastructure, rich cultural experiences, and proximity to
                Europe makes it a uniquely attractive base for location-independent workers.
              </p>
              <p>
                A comfortable digital nomad lifestyle in Morocco costs $1,000-1,300 per month,
                including a private apartment, co-working membership, daily restaurant meals, and
                weekend exploration. Compare that to $2,000-3,000+ in Lisbon, $1,500-2,500 in
                Bali, or $3,000+ in Barcelona. The value proposition is difficult to beat anywhere
                in the world that is this close to Europe.
              </p>
              <p>
                Beyond the economics, Morocco offers something most nomad destinations cannot:
                an extraordinarily rich and ancient culture that is completely different from the
                Western world, yet only a 3-hour flight from Paris or London. You can spend your
                mornings on Zoom calls in a co-working space with 50 Mbps WiFi, your afternoons
                getting lost in a thousand-year-old medina, and your evenings dining on world-class
                cuisine for under $10. It is a lifestyle that combines productivity with profound
                cultural enrichment &mdash; and you can afford to do it for months, not days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Comparison Table */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <MapPin className="w-4 h-4" />
              <span>At a Glance</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Nomad City Comparison
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Quick comparison of all six nomad-friendly destinations in Morocco.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">City</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Internet</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Cost/Month</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Coworking</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Community</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {cityComparison.map((row) => (
                    <tr key={row.city} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                      <td className="px-4 py-3 font-bold text-sm text-[var(--text-primary)]">{row.city}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">
                        <span className="flex items-center gap-1"><Wifi className="w-3 h-3 text-[var(--color-secondary)]" />{row.internet}</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-[var(--color-primary)] font-medium">{row.cost}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{row.coworking}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{row.community}</td>
                      <td className="px-4 py-3 text-xs text-[var(--text-muted)]">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Best Cities */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Best Cities for Digital Nomads
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five cities, five different vibes. Plus a bonus surf village. Choose the one that matches your working style.
          </p>

          <div className="space-y-10">
            {nomadCities.map((city) => (
              <div key={city.name} id={city.name.toLowerCase()} className="card-moroccan overflow-hidden scroll-mt-24">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-56 md:h-auto min-h-[280px]">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="p-3 rounded-lg bg-black/60 backdrop-blur-sm">
                        <div className="flex items-center gap-2 text-white text-sm mb-1">
                          <Wifi className="w-3.5 h-3.5" /> {city.internetSpeed}
                        </div>
                        <div className="flex items-center gap-2 text-white text-sm">
                          <DollarSign className="w-3.5 h-3.5" /> {city.costOfLiving}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wider mb-1">
                      {city.tagline}
                    </div>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                      {city.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{city.description}</p>
                    <div className="text-xs font-medium text-[var(--text-muted)] mb-2">Vibe: {city.vibe}</div>

                    {/* Co-working */}
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mt-4 mb-2 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[var(--color-secondary)]" /> Co-working Spaces
                    </h4>
                    <div className="space-y-2 mb-4">
                      {city.coworking.map((cw) => (
                        <div key={cw.name} className="border-l-2 border-[var(--color-secondary)]/30 pl-3">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-[var(--text-primary)]">{cw.name}</span>
                            <span className="text-xs text-[var(--color-primary)] font-medium">{cw.price}</span>
                          </div>
                          <p className="text-xs text-[var(--text-muted)]">{cw.amenities}</p>
                        </div>
                      ))}
                    </div>

                    {/* Cafes */}
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mt-4 mb-2 flex items-center gap-1.5">
                      <Coffee className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Best Work Cafes
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {city.cafes.map((cafe) => (
                        <span key={cafe} className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]">
                          {cafe}
                        </span>
                      ))}
                    </div>

                    {/* Day in the Life */}
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mt-4 mb-2 flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-[var(--color-accent)]" /> A Day in the Life
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed italic bg-[var(--surface-muted)] p-3 rounded-lg">
                      {city.dayInLife}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Taghazout Spotlight */}
            <div id="taghazout" className="card-moroccan overflow-hidden border-2 border-[var(--color-accent)] scroll-mt-24">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-56 md:h-auto min-h-[280px]">
                  <img
                    src="https://images.unsplash.com/photo-1502680390548-bdbac40f0100?q=80&w=800"
                    alt="Taghazout surf village"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold">
                      Nomad Favorite
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3 rounded-lg bg-black/60 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-white text-sm mb-1">
                        <Wifi className="w-3.5 h-3.5" /> {taghazoutSpotlight.internetSpeed}
                      </div>
                      <div className="flex items-center gap-2 text-white text-sm">
                        <DollarSign className="w-3.5 h-3.5" /> {taghazoutSpotlight.costOfLiving}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="text-xs font-medium text-[var(--color-accent)] uppercase tracking-wider mb-1">
                    {taghazoutSpotlight.tagline}
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {taghazoutSpotlight.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{taghazoutSpotlight.description}</p>

                  <h4 className="text-sm font-bold text-[var(--text-primary)] mt-4 mb-2 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[var(--color-secondary)]" /> Co-working & Coliving
                  </h4>
                  <div className="space-y-2 mb-4">
                    {taghazoutSpotlight.coworking.map((cw) => (
                      <div key={cw.name} className="border-l-2 border-[var(--color-accent)]/50 pl-3">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-[var(--text-primary)]">{cw.name}</span>
                          <span className="text-xs text-[var(--color-primary)] font-medium">{cw.price}</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">{cw.amenities}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {taghazoutSpotlight.cafes.map((cafe) => (
                      <span key={cafe} className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]">
                        {cafe}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coliving Spaces */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Heart className="w-4 h-4" />
              <span>Live & Work Together</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Coliving Spaces
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              All-inclusive options that bundle accommodation, coworking, WiFi, and community.
              The easiest way to start your Morocco nomad life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colivingSpaces.map((space) => (
              <div key={space.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] text-lg">{space.name}</h3>
                    <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{space.location}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[var(--color-primary)]">{space.price}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{space.vibe}</p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-bold text-[var(--text-primary)]">Includes:</span> {space.includes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internet */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wifi className="w-8 h-8 inline-block text-[var(--color-secondary)] mr-2" />
            Internet Speeds & Reliability
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most important factor for any remote worker. Here is the real picture &mdash;
            honest speeds, not marketing claims.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internetInfo.map((info) => (
              <div key={info.title} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[var(--text-primary)]">{info.title}</h3>
                  <span className="text-sm font-medium text-[var(--color-secondary)] flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" />{info.speed}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Pro tip */}
          <div className="mt-8 card-moroccan p-6 border-l-4 border-l-[var(--color-secondary)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-secondary)]/10 shrink-0">
                <Shield className="w-5 h-5 text-[var(--color-secondary)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Pro Tip: Always Have a Backup</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Experienced Morocco nomads always have a Maroc Telecom SIM with a 20GB+ data plan as backup tethering.
                  Even if your coworking WiFi is excellent, power outages and network issues do happen. A 4G hotspot
                  from your phone ensures you never miss a meeting. Cost: approximately 100 MAD/month ($10) for 20GB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cost of Living Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Monthly costs in MAD and USD. Prices reflect Marrakech; Essaouira and Taghazout are 10-20% cheaper,
            Casablanca is 10-15% more expensive.
          </p>
          <div className="space-y-3">
            {costOfLiving.map((item) => (
              <div key={item.category} className={`card-moroccan p-4 flex flex-col md:flex-row md:items-center gap-2 ${item.category === 'Monthly Total' ? 'border-2 border-[var(--color-primary)]' : ''}`}>
                <div className="md:w-1/4 font-bold text-sm text-[var(--text-primary)]">{item.category}</div>
                <div className="md:w-1/6 text-[var(--color-primary)] font-medium text-sm">{item.budget}</div>
                <div className="md:w-1/6 text-[var(--text-muted)] text-sm">{item.usd}</div>
                <div className="md:w-5/12 text-xs text-[var(--text-secondary)]">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Budget Tiers */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Monthly Budget Estimates
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three lifestyle tiers to help you plan. All estimates are for a single person.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {monthlyBudget.map((tier, index) => (
              <div key={tier.level} className={`card-moroccan p-6 ${index === 1 ? 'border-2 border-[var(--color-primary)]' : ''}`}>
                {index === 1 && (
                  <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2">Most Popular</div>
                )}
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{tier.level}</h3>
                <div className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-primary)] mb-3">
                  {tier.range}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{tier.description}</p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{tier.breakdown}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Info */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FileText className="w-8 h-8 inline-block text-[var(--color-secondary)] mr-2" />
            Visa & Legal Information
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you need to know about staying legally in Morocco as a remote worker.
            This information is current as of 2025 but may change.
          </p>
          <div className="space-y-4">
            {visaInfo.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Nomad Communities & Meetups
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s nomad community is growing fast. Here is how to connect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityNetworking.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <h3 className="font-bold text-[var(--text-primary)] mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Honest Pros & Cons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--color-green)] mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5" /> Pros ({prosAndCons.pros.length})
              </h3>
              <div className="space-y-3">
                {prosAndCons.pros.map((pro) => (
                  <div key={pro.text}>
                    <div className="flex items-start gap-2 text-sm font-medium text-[var(--text-primary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                      {pro.text}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] ml-6">{pro.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                <ThumbsDown className="w-5 h-5" /> Cons ({prosAndCons.cons.length})
              </h3>
              <div className="space-y-3">
                {prosAndCons.cons.map((con) => (
                  <div key={con.text}>
                    <div className="flex items-start gap-2 text-sm font-medium text-[var(--text-primary)]">
                      <Star className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                      {con.text}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] ml-6">{con.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <Laptop className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Make Morocco Your Next Base
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Affordable, culturally rich, and better connected than ever. Join the growing
            community of remote workers who have discovered Morocco&apos;s unique blend of
            productivity and adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/visa"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" /> Visa Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

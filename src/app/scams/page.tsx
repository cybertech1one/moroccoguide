import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Eye,
  UserX,
  Users,
  Phone,
  Car,
  Info,
  MapPin,
  ArrowRight,
  Lightbulb,
  HandCoins,
  Store,
  Navigation,
  Ban,
  Scale,
  CircleAlert,
  CheckCircle,
  XCircle,
  MapPinned,
  CreditCard,
  Banknote,
  Coffee,
  Heart,
  MessageSquare,
  Compass,
  Camera,
  Clock,
  Star,
  ThumbsUp,
  Utensils,
  BedDouble,
  Landmark,
  HandshakeIcon,
  Lock,
  Smartphone,
  Globe,
  BookOpen,
  Footprints,
  CircleDollarSign,
  Gem,
  Package,
  Receipt,
  Siren,
  BadgeCheck,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Scams Awareness & Smart Travel Tips 2025-2026 | CityGuide',
  description:
    'Comprehensive guide to avoiding common tourist scams in Morocco. Learn about fake guides, medina navigation, taxi tips, haggling strategies, money safety, restaurant scams, and how to travel smart. Balanced advice that celebrates Moroccan hospitality while keeping you informed.',
  keywords: [
    'Morocco scams',
    'Morocco tourist scams',
    'Morocco travel safety',
    'Morocco haggling tips',
    'Morocco taxi scams',
    'Morocco fake guides',
    'Morocco medina tips',
    'Morocco carpet scam',
    'Morocco money exchange',
    'Morocco travel tips',
    'Morocco tourist police',
    'avoid scams Morocco',
    'Morocco street smarts',
    'Morocco tipping guide',
    'Morocco restaurant tips',
    'Morocco ATM safety',
    'Morocco shopping tips',
    'Marrakech scams',
    'Fes medina guide',
    'Morocco emergency numbers',
    'Morocco accommodation tips',
    'Morocco safe travel 2026',
  ],
  openGraph: {
    title: 'Morocco Scams Awareness & Smart Travel Tips 2025-2026 | CityGuide',
    description:
      'Everything you need to know about staying savvy in Morocco. Common scams, haggling strategies, taxi tips, medina navigation, emergency contacts, and balanced cultural context.',
    url: 'https://citytoursmorocco.com/scams',
    images: [
      {
        url: '/images/hero-desert.webp',
        width: 1200,
        height: 630,
        alt: 'Moroccan medina marketplace with colorful goods',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cityguide_ma',
    creator: '@cityguide_ma',
    title: 'Morocco Scams Awareness & Smart Travel Tips 2025-2026',
    description:
      'Comprehensive, balanced guide to avoiding tourist scams in Morocco while appreciating the incredible hospitality of Moroccan people.',
    images: [
      {
        url: '/images/hero-desert.webp',
        alt: 'Moroccan medina marketplace',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/scams' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://citytoursmorocco.com/scams',
  name: 'Morocco Scams Awareness & Smart Travel Tips 2025-2026',
  description:
    'Comprehensive guide to recognizing and avoiding common tourist scams in Morocco, with practical advice on haggling, transportation, medina navigation, and emergency contacts.',
  url: 'https://citytoursmorocco.com/scams',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'Scams Awareness & Smart Travel Tips', item: 'https://citytoursmorocco.com/scams' },
    ],
  },
};

/* ===================================================================
   DATA: COMMON SCAMS
   =================================================================== */

interface ScamEntry {
  id: string;
  title: string;
  icon: React.ReactNode;
  severity: 'low' | 'medium' | 'high';
  locations: string[];
  description: string;
  howItWorks: string;
  howToAvoid: string[];
  whatToDo: string;
}

const commonScams: ScamEntry[] = [
  {
    id: 'fake-guides',
    title: 'Unofficial "Faux" Guides',
    icon: <UserX className="w-5 h-5" />,
    severity: 'high',
    locations: ['Fes Medina', 'Marrakech Medina', 'Tangier Port', 'Chefchaouen'],
    description:
      'Self-appointed guides approach tourists at medina entrances, bus stations, and hotel doors, offering to show the way. They insist you will get lost without them and may become persistent or even aggressive.',
    howItWorks:
      'The faux guide latches on, leads you through confusing alleys, and eventually demands a large payment (100-500 MAD or more). Some lead you to specific shops where they earn commission. Others deliberately take you on a longer route to justify a higher fee. In Fes, they may block your path or follow you until you agree.',
    howToAvoid: [
      'Download offline maps (Google Maps or Maps.me) before entering the medina.',
      'Book an official licensed guide through your riad, hotel, or the regional tourism office. Official guides carry a badge issued by the Ministry of Tourism.',
      'Say "La, shukran" (No, thank you) firmly and keep walking without breaking stride.',
      'Walk with purpose and avoid looking at maps on your phone in busy intersections.',
    ],
    whatToDo:
      'If someone is following you persistently, step into a nearby shop and ask the shopkeeper for directions. Shopkeepers are generally helpful and will often walk you back to a main route. If anyone becomes aggressive, head toward a busy intersection or tourist police post.',
  },
  {
    id: 'carpet-shops',
    title: 'Carpet Shop Pressure Tactics',
    icon: <Store className="w-5 h-5" />,
    severity: 'medium',
    locations: ['Marrakech', 'Fes', 'Ouarzazate', 'Meknes'],
    description:
      'A friendly person strikes up a conversation, discovers you are a tourist, and invites you for tea. The conversation inevitably leads to a carpet or craft shop where high-pressure sales tactics await.',
    howItWorks:
      'Your new "friend" leads you to a shop where you are served mint tea (a genuine custom, but used strategically here). Carpets are unrolled one after another. Prices start astronomically high. The seller drops the price dramatically to create a sense of getting a deal. Meanwhile, your guide earns 20-40% commission on any sale, which is built into the price. You may feel socially obligated to buy after accepting hospitality.',
    howToAvoid: [
      'Be skeptical when a stranger steers conversation toward shopping within the first few minutes of meeting.',
      'Accepting tea does not create any obligation to purchase. This is a cultural custom, not a binding contract.',
      'Visit fixed-price cooperatives first (Ensemble Artisanal shops in every major city) to understand fair market prices.',
      'If you genuinely want a carpet, research styles and fair prices before your trip and visit multiple shops.',
    ],
    whatToDo:
      'You are never obligated to buy, regardless of how long you have been there or how much tea you drank. Simply say "C\'est tres beau, mais je vais reflechir" (It is very beautiful, but I will think about it), stand up, and walk out. If you feel pressured, firmly state you have an appointment and leave.',
  },
  {
    id: 'henna-artists',
    title: 'Forced Henna Application',
    icon: <HandCoins className="w-5 h-5" />,
    severity: 'medium',
    locations: ['Jemaa el-Fnaa (Marrakech)', 'Tangier Medina', 'Fes Medina'],
    description:
      'Women in popular tourist squares grab your hand and begin applying henna paste before you have a chance to consent, then demand 200-500 MAD for an unsolicited design.',
    howItWorks:
      'The henna artist approaches with a warm greeting and reaches for your hand. Before you realize what is happening, they have already started drawing. Once any henna is on your skin, they insist on payment. Refusing becomes difficult because removing wet henna creates a mess and the artist may become loud, drawing a crowd.',
    howToAvoid: [
      'Keep your hands in your pockets or behind your back when walking through areas with henna artists, especially Jemaa el-Fnaa.',
      'If someone reaches for your hand, pull away immediately and say "No" firmly.',
      'If you want henna, go to a reputable salon or ask your riad to arrange a private session where you can agree on a design and price beforehand (expect to pay 50-150 MAD for a quality design).',
    ],
    whatToDo:
      'If henna is already applied, do not pay the inflated price. Offer 20-30 MAD maximum and walk away. Wet henna washes off easily with soap and water if scrubbed quickly. Do not let the situation escalate; stay calm and move toward a crowded area.',
  },
  {
    id: 'taxi-meters',
    title: 'Taxi Meter Manipulation',
    icon: <Navigation className="w-5 h-5" />,
    severity: 'high',
    locations: ['All major cities', 'Airports', 'Train stations'],
    description:
      'Petit taxi drivers refuse to use the meter, claim it is broken, quote inflated fixed prices, or take deliberately longer routes to increase the fare.',
    howItWorks:
      'At airports and tourist hotspots, drivers often quote flat fares that are two to five times the metered rate. Some start the meter at a higher base rate or use a rigged meter that runs fast. Others take circuitous routes, especially at night when passengers are disoriented. The "broken meter" excuse is by far the most common.',
    howToAvoid: [
      'Always insist on the meter ("compteur, s\'il vous plait") before getting in. If the driver refuses, close the door and try the next taxi.',
      'Know approximate fares: most city rides should cost 10-30 MAD. Airport to city center is typically 150-300 MAD depending on the city.',
      'Use ride-hailing apps like inDrive or Careem (available in major cities) for transparent upfront pricing.',
      'Ask your hotel to arrange airport transfers with a fixed, agreed-upon price before arrival.',
    ],
    whatToDo:
      'If you realize mid-ride the meter is off or rigged, calmly ask the driver to start it. Note the taxi number (displayed on the door). At your destination, pay what you believe is fair. If there is a dispute, calmly suggest walking to the nearest police station. Most drivers will back down.',
  },
  {
    id: 'its-closed',
    title: 'The "It\'s Closed Today" Trick',
    icon: <Ban className="w-5 h-5" />,
    severity: 'medium',
    locations: ['Fes (near tanneries)', 'Marrakech (near Bahia Palace)', 'Meknes'],
    description:
      'Someone near a popular attraction tells you it is closed today due to a holiday, renovation, or prayer time, then offers to take you somewhere else instead, usually a shop.',
    howItWorks:
      'The person appears helpful and authoritative, sometimes even wearing a lanyard or standing near the entrance. They claim the tannery, palace, or museum is closed but their cousin has an alternative or a rooftop view. This always ends at a leather shop, carpet store, or craft workshop where commission is earned.',
    howToAvoid: [
      'Ignore anyone who tells you a public attraction is closed unless they are clearly official staff at the entrance gate.',
      'Research opening hours and closure days before visiting. Friday is the Islamic day of prayer, but most tourist attractions remain open.',
      'Walk past the person and check the entrance yourself. The attraction is almost always open.',
    ],
    whatToDo:
      'Thank them politely and proceed to the entrance. If the attraction genuinely is closed, verify with the official sign or ask a shopkeeper nearby (not the person who stopped you). Never follow a stranger to an alternative location.',
  },
  {
    id: 'restaurant-overcharging',
    title: 'Restaurant Menu Without Prices',
    icon: <Utensils className="w-5 h-5" />,
    severity: 'medium',
    locations: ['Jemaa el-Fnaa', 'Medina restaurants', 'Coastal fish markets'],
    description:
      'Tourist-facing restaurants provide menus without prices or present a verbal menu. When the bill arrives, items are grossly overpriced and mysterious extras like bread, olives, and sauces have been added.',
    howItWorks:
      'Aggressive touts pull you into the restaurant with promises of "best tajine" or "fresh fish." The menu has no prices, or prices are in a different currency. Fish is priced by weight without clear indication. Bread, harissa, olives, and water appear unbidden and are charged at premium rates. The bill may be handwritten and hard to decipher.',
    howToAvoid: [
      'Always ask for a printed menu with prices before sitting down.',
      'Confirm the price of each item when ordering, especially fish and seafood which may be priced by weight.',
      'Avoid restaurants with aggressive touts standing outside pulling in customers.',
      'Ask locals or your riad for restaurant recommendations. The best food is often found in small, unassuming places away from tourist squares.',
    ],
    whatToDo:
      'If overcharged, calmly question each item on the bill. Refuse to pay for items you did not order. If the restaurant will not negotiate fairly, pay what you consider reasonable, note the establishment name and location, and report it to the tourist police.',
  },
  {
    id: 'spice-rip-offs',
    title: 'Spice Market Overpricing',
    icon: <Package className="w-5 h-5" />,
    severity: 'low',
    locations: ['Marrakech souks', 'Fes spice shops', 'Meknes markets'],
    description:
      'Spice vendors in tourist areas charge extreme markups, sell common spices with exotic names, and frequently pass off fake saffron (dyed safflower or corn silk) as the real thing.',
    howItWorks:
      'The vendor invites you to smell various spices, presents elaborate "Berber Viagra" or "desert energy" blends, and starts packaging before you agree to buy. Prices are quoted per small bag rather than by weight, obscuring the true cost. Saffron that costs 30-50 MAD per gram in reality is sold at 200+ MAD for a tiny pinch of dyed safflower.',
    howToAvoid: [
      'Research fair spice prices: cumin 30-50 MAD/kg, paprika 40-60 MAD/kg, real saffron 30-50 MAD/gram.',
      'Shop at supermarkets like Marjane or Carrefour for standardized pricing and quality assurance.',
      'Real saffron has a deep red color, a distinctive honey-like aroma, and will turn water yellow (not red) when soaked.',
      'Always agree on a price before the vendor starts scooping or packaging.',
    ],
    whatToDo:
      'If you suspect you overpaid, consider it a learning experience. For future purchases, always ask the price per gram or kilogram before any scooping begins. Walk away from any vendor who packages goods before confirming the price.',
  },
  {
    id: 'money-exchange',
    title: 'Street Money Exchange Scams',
    icon: <Banknote className="w-5 h-5" />,
    severity: 'high',
    locations: ['Medina entrances', 'Tourist areas', 'Near banks'],
    description:
      'Unofficial money changers on the street offer attractive exchange rates but use sleight of hand to shortchange you, give counterfeit bills, or switch denominations during counting.',
    howItWorks:
      'The changer quotes a rate better than banks or official bureaux de change. During the exchange, they count quickly, fold bills to hide the actual amount, slip in lower denominations, or create distractions. Some use counterfeit notes that look authentic at first glance. Others simply miscount and rely on your unfamiliarity with the currency.',
    howToAvoid: [
      'Only exchange money at banks, official bureaux de change (look for the official license displayed), or ATMs.',
      'ATMs from major banks (Attijariwafa, BMCE, Banque Populaire) offer the best exchange rates with standard withdrawal fees.',
      'Never exchange money on the street, no matter how attractive the rate seems.',
      'Familiarize yourself with Moroccan bill denominations (20, 50, 100, 200 MAD) before arrival.',
    ],
    whatToDo:
      'If you realize you have been shortchanged, it may be difficult to recover the money from a street changer. Report the incident to police. Going forward, use only official channels for all currency exchange.',
  },
  {
    id: 'fake-goods',
    title: 'Counterfeit and Mislabeled Goods',
    icon: <Gem className="w-5 h-5" />,
    severity: 'medium',
    locations: ['All tourist souks', 'Marrakech', 'Fes', 'Tangier'],
    description:
      'Items sold as genuine leather, pure argan oil, authentic fossils, or precious stones may be synthetic or fake. Machine-made textiles are presented as handmade.',
    howItWorks:
      'Leather goods may be made from camel skin marketed as goat leather, or synthetic materials sold as genuine leather. Argan oil is commonly diluted with cheaper oils. "Fossils" are often manufactured from resin and concrete. Silver jewelry may be nickel or aluminum. Machine-woven carpets are sold as handmade at handmade prices.',
    howToAvoid: [
      'Buy argan oil from women\'s cooperatives where you can watch the production process. Pure argan oil has a light nutty scent and absorbs quickly without residue.',
      'Test leather by pressing your thumb into it: real leather wrinkles and changes color slightly, then returns to normal.',
      'For carpets, check the back: handmade rugs have slight irregularities on the reverse, while machine-made ones are perfectly uniform.',
      'Buy silver from reputable shops and look for the "925" sterling silver hallmark.',
    ],
    whatToDo:
      'If you discover a purchase is not as advertised, return to the shop with the item. Many reputable shopkeepers will exchange or refund. For significant fraud, report to the tourist police with the shop name and address.',
  },
  {
    id: 'riad-bait-switch',
    title: 'Accommodation Bait-and-Switch',
    icon: <BedDouble className="w-5 h-5" />,
    severity: 'medium',
    locations: ['Marrakech', 'Fes', 'Chefchaouen', 'Essaouira'],
    description:
      'The accommodation you booked online looks nothing like the listing photos. Rooms may be smaller, less clean, or entirely different from what was advertised. Some riads use photos of their best suite for all listings.',
    howItWorks:
      'Budget riads use professional photos of renovated rooms or even photos from other properties. Upon arrival, you are placed in an inferior room. The host may claim the booked room is "being cleaned" or "occupied" and offer a downgrade. Some unlicensed guesthouses create fake listings on multiple platforms.',
    howToAvoid: [
      'Book through established platforms (Booking.com, Airbnb) that offer photo verification and guest reviews.',
      'Read recent reviews carefully, especially ones that mention discrepancies between photos and reality.',
      'Message the host directly before booking and ask for current photos or a video call tour.',
      'Verify the riad has an official license number (required by Moroccan law for tourist accommodation).',
    ],
    whatToDo:
      'If the room does not match the listing, document everything with photos immediately. Contact the booking platform for a refund or relocation. If booked directly, negotiate firmly for an upgrade or partial refund. You are within your rights to leave and find alternative accommodation.',
  },
  {
    id: 'photo-money',
    title: 'Unsolicited Photo Demands',
    icon: <Camera className="w-5 h-5" />,
    severity: 'low',
    locations: ['Jemaa el-Fnaa', 'Tourist squares', 'Near monuments'],
    description:
      'People with monkeys, snakes, or in elaborate traditional costumes approach tourists, place an animal on their shoulder or pose next to them, and then demand large payments for the photo opportunity.',
    howItWorks:
      'In Jemaa el-Fnaa, snake charmers, monkey handlers, and costumed water sellers approach tourists and create a photo opportunity before any price is discussed. Once a photo is taken (sometimes by an accomplice using your own phone), they demand 100-300 MAD per person per photo. Multiple people may claim to be in the frame and each demands separate payment.',
    howToAvoid: [
      'Keep your camera and phone put away when walking past performers in Jemaa el-Fnaa unless you intend to pay.',
      'If you want a photo, agree on the price first. A reasonable tip is 10-20 MAD per photo.',
      'Never let anyone place an animal on you without your explicit consent.',
      'Enjoy the spectacle of the square from a distance or from a rooftop cafe.',
    ],
    whatToDo:
      'If you took a photo without agreeing on a price, offer 10-20 MAD and walk away. Do not be intimidated by demands for more. If the situation feels uncomfortable, walk toward a police officer or tourist police post (there is one at the edge of Jemaa el-Fnaa).',
  },
  {
    id: 'getting-lost',
    title: 'The "You Are Lost" Medina Trick',
    icon: <Compass className="w-5 h-5" />,
    severity: 'medium',
    locations: ['Fes Medina', 'Marrakech Medina', 'Tangier Medina'],
    description:
      'A local approaches you in the medina claiming you are going the wrong way and offers to guide you. Even if you are not lost, they create doubt and lead you on a detour that ends at a shop or a demand for payment.',
    howItWorks:
      'The person confidently tells you that the route ahead is a dead end, leads to a dangerous area, or is closed. They offer a "shortcut" that takes you through a series of turns, disorienting you further. The route always passes through shops where they have an arrangement. At the end, they demand 50-200 MAD for their help.',
    howToAvoid: [
      'Use offline maps and note key landmarks before entering the medina.',
      'Follow the general flow of foot traffic; busy routes typically lead to main squares and gates.',
      'If genuinely lost, ask a shopkeeper sitting in their store (not someone who approaches you on the street).',
      'Learn the Arabic or French names of major landmarks and gates near your accommodation.',
    ],
    whatToDo:
      'If someone is insistently "helping" you, thank them and walk into the nearest shop. Ask the shopkeeper for directions instead. Remember that medinas, while labyrinthine, are ultimately enclosed spaces. Following any major route downhill (in Fes) or toward louder noise (in Marrakech) will eventually lead you to a main square or exit.',
  },
];

/* ===================================================================
   DATA: TAXI TIPS
   =================================================================== */

interface TaxiTip {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const taxiTips: TaxiTip[] = [
  {
    title: 'Know Your Taxi Types',
    description:
      'Petit taxis (small, colored by city: red in Marrakech, blue in Rabat, red in Fes) serve within city limits and should use a meter. Grand taxis (usually white Mercedes sedans) run fixed routes between cities at fixed prices, typically shared with other passengers. Never take a grand taxi for an in-city trip.',
    icon: <Car className="w-5 h-5" />,
  },
  {
    title: 'Meter Rates & Surcharges',
    description:
      'The standard petit taxi meter starts at 1.40 MAD (day) or 2.10 MAD (night, after 8 PM). A typical city ride costs 10-30 MAD. There is a 50% surcharge after 8 PM. If a driver claims the surcharge is higher, they are overcharging. Ask your hotel about standard rates for common routes.',
    icon: <Receipt className="w-5 h-5" />,
  },
  {
    title: 'Airport Transfers',
    description:
      'Airport taxi fares should be fixed and posted at the taxi stand. Typical rates: Marrakech airport to Medina 100-150 MAD, Casablanca airport to city center 250-350 MAD, Fes airport to Medina 150-200 MAD. Book a transfer through your riad or use inDrive for the most reliable pricing.',
    icon: <MapPinned className="w-5 h-5" />,
  },
  {
    title: 'Grand Taxi Etiquette',
    description:
      'Grand taxis between cities leave when full (6 passengers in a standard Mercedes). You can buy extra seats to leave sooner or have more space. Agree on the price before departing. Standard fares: Marrakech to Essaouira ~80 MAD, Fes to Meknes ~25 MAD, Casablanca to Rabat ~40 MAD per seat.',
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: 'Ride-Hailing Apps',
    description:
      'InDrive and Careem operate in Marrakech, Casablanca, Rabat, Tangier, and Agadir. These apps show upfront pricing, track your route via GPS, and provide a receipt. They are the most hassle-free option for tourists, especially at night or from airports.',
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    title: 'Sharing a Petit Taxi',
    description:
      'It is legal and common for petit taxis to pick up additional passengers going in the same direction. Each passenger pays their own metered fare. If a driver tries to charge you the full fare when sharing, politely point out that you are sharing and should only pay your portion.',
    icon: <HandshakeIcon className="w-5 h-5" />,
  },
];

/* ===================================================================
   DATA: HAGGLING GUIDE
   =================================================================== */

interface HagglingStep {
  step: number;
  title: string;
  description: string;
}

const hagglingSteps: HagglingStep[] = [
  {
    step: 1,
    title: 'Browse without commitment',
    description:
      'Walk through the souk first without buying. Note items you like and their asking prices at different stalls. This gives you a baseline for comparison. Never show excessive enthusiasm for an item or the seller knows they can charge more.',
  },
  {
    step: 2,
    title: 'Ask the price casually',
    description:
      'When you find something you want, ask "Bshhal?" (How much?) casually. The first price quoted is always 2-4 times what the seller expects to receive. This is not a scam; it is the opening of a negotiation that both parties expect and enjoy.',
  },
  {
    step: 3,
    title: 'Counter at 30-40% of the asking price',
    description:
      'Your opening counter should be roughly one-third of the quoted price. This may feel aggressive, but it is expected. The seller will act shocked, laugh, or wave dismissively. This is all part of the ritual. Stay friendly and keep smiling.',
  },
  {
    step: 4,
    title: 'Meet somewhere in the middle',
    description:
      'Through back-and-forth offers, you should reach a final price around 40-60% of the original asking price. The "right" price is one where both you and the seller feel satisfied. If you are happy with the item and the price, it is a fair deal.',
  },
  {
    step: 5,
    title: 'Use the walk-away technique',
    description:
      'If the price is not coming down enough, politely thank the seller and start to leave. In many cases, the seller will call you back with a lower offer. If they let you leave, the price may have been fair or you can try another stall.',
  },
  {
    step: 6,
    title: 'Pay and enjoy your purchase',
    description:
      'Once you agree on a price, the deal is done. It is considered rude to continue haggling after shaking hands. Pay the agreed amount (have small bills ready), thank the seller with "Shukran," and enjoy your new treasure.',
  },
];

/* ===================================================================
   DATA: FAIR PRICE REFERENCE
   =================================================================== */

interface PriceReference {
  item: string;
  touristPrice: string;
  fairPrice: string;
  notes: string;
}

const priceReferences: PriceReference[] = [
  { item: 'Leather babouches (slippers)', touristPrice: '200-400 MAD', fairPrice: '80-150 MAD', notes: 'Quality varies hugely; check stitching and leather smell' },
  { item: 'Small Berber rug (1m x 0.6m)', touristPrice: '1,500-4,000 MAD', fairPrice: '400-1,200 MAD', notes: 'Handmade rugs are legitimately expensive; machine-made are not' },
  { item: 'Argan oil (1 liter, cosmetic)', touristPrice: '500-800 MAD', fairPrice: '200-350 MAD', notes: 'Buy from cooperatives for guaranteed purity' },
  { item: 'Ceramic tagine (decorative)', touristPrice: '150-400 MAD', fairPrice: '60-150 MAD', notes: 'Functional tagines cost more; Safi and Fes have the best ceramics' },
  { item: 'Leather bag (medium)', touristPrice: '400-1,000 MAD', fairPrice: '150-400 MAD', notes: 'Check that it is genuine leather, not bonded' },
  { item: 'Silver ring (simple)', touristPrice: '100-300 MAD', fairPrice: '30-100 MAD', notes: 'Look for the 925 hallmark for sterling silver' },
  { item: 'Spice mix (100g bag)', touristPrice: '50-100 MAD', fairPrice: '15-30 MAD', notes: 'Supermarkets sell the same blends for a fraction' },
  { item: 'Thuya wood box (small)', touristPrice: '200-500 MAD', fairPrice: '80-200 MAD', notes: 'Essaouira is the center for thuya woodwork' },
  { item: 'Moroccan tea set (teapot + 6 glasses)', touristPrice: '300-600 MAD', fairPrice: '120-250 MAD', notes: 'Silver-plated is standard; "real silver" claims are usually false' },
  { item: 'Woven basket (medium)', touristPrice: '100-250 MAD', fairPrice: '40-100 MAD', notes: 'Best prices in rural markets outside tourist cities' },
];

/* ===================================================================
   DATA: EMERGENCY CONTACTS
   =================================================================== */

interface EmergencyContact {
  service: string;
  number: string;
  note: string;
}

const emergencyContacts: EmergencyContact[] = [
  { service: 'Police', number: '19', note: 'Works from any phone, landline or mobile' },
  { service: 'Fire & Ambulance (SAMU)', number: '15', note: 'Emergency medical services' },
  { service: 'Gendarmerie (rural police)', number: '177', note: 'For incidents outside city limits' },
  { service: 'General Emergency (mobile)', number: '112', note: 'European-style emergency number, works from any mobile' },
  { service: 'Tourist Police - Marrakech', number: '0524-384601', note: 'Dedicated tourist assistance, Jemaa el-Fnaa area' },
  { service: 'Tourist Police - Fes', number: '0535-624973', note: 'Dedicated tourist assistance, near Bab Bou Jeloud' },
  { service: 'Tourist Police - Casablanca', number: '0522-442424', note: 'Dedicated tourist assistance' },
  { service: 'Tourist Police - Agadir', number: '0528-840818', note: 'Dedicated tourist assistance' },
  { service: 'Tourist Police - Tangier', number: '0539-325539', note: 'Dedicated tourist assistance' },
  { service: 'SOS Medecins (house calls)', number: '0522-989898', note: 'Private doctors who visit your hotel/riad' },
];

/* ===================================================================
   DATA: USEFUL ARABIC/FRENCH PHRASES
   =================================================================== */

interface Phrase {
  english: string;
  arabic: string;
  french: string;
  pronunciation: string;
  context: string;
}

const usefulPhrases: Phrase[] = [
  { english: 'No, thank you', arabic: 'La, shukran', french: 'Non, merci', pronunciation: 'Lah, shook-rahn', context: 'Declining touts and sellers' },
  { english: 'How much?', arabic: 'Bshhal?', french: 'Combien?', pronunciation: 'Besh-haal?', context: 'Starting a price negotiation' },
  { english: 'Too expensive', arabic: 'Ghali bezzaf', french: 'C\'est trop cher', pronunciation: 'Gah-lee bez-zahf', context: 'Negotiating a lower price' },
  { english: 'I don\'t want it', arabic: 'Ma bghit-sh', french: 'Je ne veux pas', pronunciation: 'Mah bgheet-sh', context: 'Firmly declining a purchase' },
  { english: 'Leave me alone', arabic: 'Khallini', french: 'Laissez-moi', pronunciation: 'Khal-lee-nee', context: 'Dealing with persistent touts' },
  { english: 'Where is the police?', arabic: 'Fin kayna l-police?', french: 'Ou est la police?', pronunciation: 'Feen kay-na l-po-lees?', context: 'Emergency or threatening situations' },
  { english: 'I have a guide', arabic: 'Andi guide', french: 'J\'ai un guide', pronunciation: 'Ahn-dee guide', context: 'Discouraging faux guides from following you' },
  { english: 'The meter, please', arabic: 'Compteur, afak', french: 'Le compteur, s\'il vous plait', pronunciation: 'Komp-tur, ah-fak', context: 'Asking taxi drivers to use the meter' },
];

/* ===================================================================
   DATA: CULTURAL CONTEXT TIPS
   =================================================================== */

interface CulturalTip {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const culturalTips: CulturalTip[] = [
  {
    title: 'Hospitality Is Genuine',
    icon: <Heart className="w-5 h-5" />,
    description:
      'Moroccan hospitality (diyafa) is a deeply rooted cultural value, not a tourist act. If a local invites you for tea or a meal at their home with no commercial angle, it is almost certainly genuine. Accepting such invitations is one of the most rewarding parts of visiting Morocco. The difference is context: an invitation in a residential neighborhood is likely genuine, while one in a tourist souk that leads to a shop is probably commercial.',
  },
  {
    title: 'Tipping Culture (Baksheesh)',
    icon: <HandCoins className="w-5 h-5" />,
    description:
      'Tipping (baksheesh) is deeply embedded in Moroccan culture. Small tips are expected for any service: 5-10 MAD for someone who gives you directions, 10-20 MAD for a bathroom attendant, 20-50 MAD for restaurant service, 50-100 MAD per day for a guide, and 200-300 MAD per night for a desert camp crew. This is not a scam. It is a genuine cultural expectation and an important part of many people\'s income.',
  },
  {
    title: 'Commerce as Social Interaction',
    icon: <MessageSquare className="w-5 h-5" />,
    description:
      'In Moroccan culture, buying and selling is a social ritual, not just a transaction. Haggling is a form of conversation and connection. Sellers are not trying to deceive you by starting with a high price; they are opening a negotiation that both parties are expected to enjoy. Approach shopping with humor and patience, and you will find it one of the most memorable parts of your trip.',
  },
  {
    title: 'The Economy of Tourism',
    icon: <CircleDollarSign className="w-5 h-5" />,
    description:
      'Tourism supports millions of Moroccan families. Guides, drivers, artisans, and shopkeepers depend on tourism income. While this guide helps you avoid being overcharged, remember that paying fair prices supports local communities. A few extra dirhams on a taxi ride or craft purchase can make a meaningful difference to a local family without significantly impacting your budget.',
  },
  {
    title: 'Most People Are Wonderful',
    icon: <Users className="w-5 h-5" />,
    description:
      'For every tout or scammer you encounter in a tourist hotspot, you will meet dozens of genuinely kind, generous, and curious Moroccans. The shopkeeper who gives your child a free treat, the stranger who walks you to your destination, the family that invites you to share their meal. These encounters far outnumber negative ones and are what make Morocco unforgettable.',
  },
  {
    title: 'Respect Goes Both Ways',
    icon: <HandshakeIcon className="w-5 h-5" />,
    description:
      'Dress modestly (especially in medinas and rural areas), greet people with "Salaam alaikum," learn a few words of Darija (Moroccan Arabic), ask before photographing people, and be patient with cultural differences. Tourists who show respect for Moroccan culture overwhelmingly receive warmth and generosity in return.',
  },
];

/* ===================================================================
   DATA: TABLE OF CONTENTS
   =================================================================== */

const tocSections = [
  { id: 'important-context', label: 'Important Context', icon: <Heart className="w-4 h-4" /> },
  { id: 'common-scams', label: 'Common Scams', icon: <ShieldAlert className="w-4 h-4" /> },
  { id: 'medina-navigation', label: 'Medina Navigation', icon: <Compass className="w-4 h-4" /> },
  { id: 'taxi-transport', label: 'Taxi & Transport', icon: <Car className="w-4 h-4" /> },
  { id: 'haggling-guide', label: 'Haggling Guide', icon: <HandCoins className="w-4 h-4" /> },
  { id: 'fair-prices', label: 'Fair Price Reference', icon: <Scale className="w-4 h-4" /> },
  { id: 'food-safety', label: 'Food & Restaurant Safety', icon: <Utensils className="w-4 h-4" /> },
  { id: 'money-safety', label: 'Money & ATM Safety', icon: <CreditCard className="w-4 h-4" /> },
  { id: 'accommodation', label: 'Accommodation Tips', icon: <BedDouble className="w-4 h-4" /> },
  { id: 'declining-sellers', label: 'Declining Sellers', icon: <MessageSquare className="w-4 h-4" /> },
  { id: 'useful-phrases', label: 'Useful Phrases', icon: <Globe className="w-4 h-4" /> },
  { id: 'cultural-context', label: 'Cultural Context', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'emergency-contacts', label: 'Emergency Contacts', icon: <Phone className="w-4 h-4" /> },
  { id: 'if-scammed', label: 'If You\'ve Been Scammed', icon: <Siren className="w-4 h-4" /> },
  { id: 'street-smarts', label: 'General Street Smarts', icon: <Eye className="w-4 h-4" /> },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function ScamsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ===========================================================
          HERO SECTION
          =========================================================== */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-desert.webp"
            alt="Bustling Moroccan medina marketplace with colorful goods and warm lantern light"
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
            <Link href="/safety" className="hover:text-white transition-colors">
              Safety
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Scams Awareness</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Smart Travel Tips
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Scams Awareness &amp; Smart Travel Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A balanced, respectful guide to traveling smart in Morocco. Know the common tourist traps, learn to haggle with confidence, and appreciate the genuine warmth of Moroccan hospitality &mdash; updated for 2025-2026.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ===========================================================
          IMPORTANT CONTEXT / DISCLAIMER
          =========================================================== */}
      <section id="important-context" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-6 md:p-8 border-l-4 border-l-[var(--color-green)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-green)]/10 shrink-0">
                <Heart className="w-6 h-6 text-[var(--color-green)]" />
              </div>
              <div>
                <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                  Before You Read: Important Context
                </h2>
                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    <strong className="text-[var(--text-primary)]">Morocco is a wonderful, safe, and welcoming destination.</strong> Over 14 million tourists visited in 2024, and the vast majority had exclusively positive experiences. The scams described on this page exist in every tourist destination worldwide, from Paris to Bangkok, and represent a tiny fraction of the interactions you will have in Morocco.
                  </p>
                  <p>
                    The overwhelming majority of Moroccans you will meet are genuinely kind, generous, and proud to share their culture. The shopkeeper who invites you for tea, the stranger who walks you to your destination, the family that insists you join their meal &mdash; these are authentic expressions of <em>diyafa</em> (Moroccan hospitality), one of the most cherished values in Moroccan culture.
                  </p>
                  <p>
                    This guide is not meant to create fear or suspicion. It is designed to help you travel with confidence so that you can fully relax and enjoy one of the most fascinating countries on Earth. Think of it as street smarts, not a warning. An informed traveler is a relaxed traveler.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          TABLE OF CONTENTS
          =========================================================== */}
      <section className="pb-12 md:pb-16">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-6 md:p-8">
            <h2 className="text-xl font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-6">
              In This Guide
            </h2>
            <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {tocSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--surface-muted)] transition-colors group"
                >
                  <span className="text-[var(--color-accent)] group-hover:text-[var(--color-secondary)] transition-colors">
                    {section.icon}
                  </span>
                  <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    {section.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ===========================================================
          COMMON SCAMS
          =========================================================== */}
      <section id="common-scams" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern scroll-mt-24">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10">
              <ShieldAlert className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Common Tourist Scams &amp; How to Avoid Them
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            These situations occur in tourist-heavy areas of every popular destination. Recognizing them in advance takes away their power. Most are minor inconveniences, not dangers.
          </p>

          <div className="space-y-6">
            {commonScams.map((scam) => (
              <div key={scam.id} className="card-moroccan overflow-hidden">
                {/* Scam Header */}
                <div className="flex items-start gap-4 p-6 pb-0">
                  <div
                    className={`inline-flex p-2.5 rounded-lg shrink-0 ${
                      scam.severity === 'high'
                        ? 'bg-[var(--error)]/10 text-[var(--error)]'
                        : scam.severity === 'medium'
                        ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                        : 'bg-[var(--color-green)]/10 text-[var(--color-green)]'
                    }`}
                  >
                    {scam.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">
                        {scam.title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          scam.severity === 'high'
                            ? 'bg-[var(--error)]/10 text-[var(--error)]'
                            : scam.severity === 'medium'
                            ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]'
                            : 'bg-[var(--color-green)]/10 text-[var(--color-green)]'
                        }`}
                      >
                        <CircleAlert className="w-3 h-3" />
                        {scam.severity === 'high' ? 'Common' : scam.severity === 'medium' ? 'Moderate' : 'Occasional'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {scam.locations.map((loc) => (
                        <span key={loc} className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] bg-[var(--surface-muted)] px-2 py-1 rounded">
                          <MapPin className="w-3 h-3" />
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Scam Body */}
                <div className="p-6 pt-4 space-y-4">
                  <p className="text-[var(--text-secondary)] leading-relaxed">{scam.description}</p>

                  <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                    <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm mb-2 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[var(--color-secondary)]" />
                      How It Works
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{scam.howItWorks}</p>
                  </div>

                  <div className="bg-[var(--color-green)]/5 border border-[var(--color-green)]/15 rounded-lg p-4">
                    <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-green-dark)] text-sm mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      How to Avoid It
                    </h4>
                    <ul className="space-y-2">
                      {scam.howToAvoid.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/15 rounded-lg p-4">
                    <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-accent-dark)] text-sm mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      What to Do If It Happens
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{scam.whatToDo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================================
          MEDINA NAVIGATION TIPS
          =========================================================== */}
      <section id="medina-navigation" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
              <Compass className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Medina Navigation Tips
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Morocco&apos;s medinas are labyrinthine wonders that are meant to be explored. Getting slightly turned around is part of the adventure. Here is how to navigate with confidence.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Photo + Tips */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/hero-chefchaouen-drone.webp"
                  alt="Narrow alleyway in a Moroccan medina with blue walls and warm sunlight"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-4">
                  Before You Enter
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <CheckCircle className="w-5 h-5 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span>Download offline maps. Google Maps works well for main routes, but Maps.me has better medina detail including small alleyways and dead ends.</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <CheckCircle className="w-5 h-5 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span>Ask your riad host to mark your accommodation on a paper map and highlight the nearest landmarks and main gates (babs).</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <CheckCircle className="w-5 h-5 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span>Carry a card with your riad&apos;s name and address written in Arabic. Most locals can direct you if you show them the card.</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <CheckCircle className="w-5 h-5 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span>Save your riad&apos;s GPS coordinates in your phone. Even when alleys are too narrow for accurate GPS, it gives a general direction.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Navigation Strategies */}
            <div className="space-y-6">
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-4">
                  While Navigating
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Follow the flow:</strong> Wider alleys with more foot traffic lead to main squares and gates. Dead ends tend to get narrower and quieter.</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Use landmarks:</strong> Mosques, fountains, babs (gates), and major intersections are reliable reference points. Note them as you walk.</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Fes-specific tip:</strong> The medina is built on a slope. Walking downhill generally leads to the main river (Fes River) and central areas. Walking uphill leads toward the edges and gates.</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Marrakech-specific tip:</strong> The Koutoubia Mosque minaret is visible from many points. Use it as your compass. It sits on the west side of the medina near Jemaa el-Fnaa.</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Walk with purpose:</strong> Even if you are slightly unsure, walk confidently. Touts are more likely to approach someone who looks lost and hesitant.</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Ask shopkeepers:</strong> If you need directions, step into a shop and ask the person behind the counter. Shopkeepers sitting in their stalls are almost always helpful and have no motive to mislead you.</span>
                  </li>
                </ul>
              </div>

              <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[var(--color-accent)]" />
                  Pro Tip: Embrace Getting Lost
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Some of the best experiences in Morocco happen when you wander off the beaten path. A quiet courtyard, a hidden bakery, a stunning door you would never find on a guided tour. Getting slightly lost in a medina is not dangerous; it is part of the magic. As long as you have your riad&apos;s card and a charged phone, you can always find your way back. Enjoy the detours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          TAXI & TRANSPORTATION
          =========================================================== */}
      <section id="taxi-transport" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern scroll-mt-24">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Car className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Taxi &amp; Transportation Tips
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Navigating Moroccan taxis is easy once you know the system. Here is everything you need for hassle-free rides across the country.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxiTips.map((tip, index) => (
              <div key={index} className="card-moroccan p-6">
                <div className="inline-flex p-2.5 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                  {tip.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3">
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================================
          HAGGLING GUIDE
          =========================================================== */}
      <section id="haggling-guide" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
              <HandCoins className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              The Art of Haggling
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Haggling is not about winning or getting the cheapest price. It is a social ritual, a form of conversation, and when done right, it is genuinely enjoyable for both buyer and seller. Here is how to do it well.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Steps */}
            <div className="space-y-4">
              {hagglingSteps.map((step) => (
                <div key={step.step} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)] text-white font-bold text-lg shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Haggling Do's and Don'ts */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/hero-souk-lamps.webp"
                  alt="Colorful Moroccan souk with handmade goods and lanterns on display"
                  className="w-full h-52 md:h-64 object-cover"
                />
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-green-dark)] mb-4 flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5" />
                  Haggling Best Practices
                </h3>
                <ul className="space-y-2">
                  {[
                    'Stay friendly, smile, and enjoy the process. Humor goes a long way.',
                    'Buy multiple items from the same vendor for a better bulk discount.',
                    'Compliment the quality and craftsmanship sincerely.',
                    'Have small bills ready so you can pay the exact agreed amount.',
                    'Shop in the late afternoon when vendors are more flexible on prices.',
                    'Compare prices at 2-3 stalls before committing to buy.',
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--error)] mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Haggling Mistakes to Avoid
                </h3>
                <ul className="space-y-2">
                  {[
                    'Never start haggling unless you genuinely want the item. Making an offer implies intent to buy.',
                    'Do not get angry or insulting about the asking price. It is part of the game.',
                    'Avoid haggling at fixed-price stores (cooperatives, Ensemble Artisanal). Prices are final there.',
                    'Do not flash large bills. A vendor who sees a 200 MAD note will be less likely to drop to a lower price.',
                    'Never haggle over food at restaurants or markets with displayed prices.',
                    'Do not compare Moroccan prices to "what it costs at home." Value is relative.',
                  ].map((mistake, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <XCircle className="w-4 h-4 text-[var(--error)] shrink-0 mt-0.5" />
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          FAIR PRICE REFERENCE TABLE
          =========================================================== */}
      <section id="fair-prices" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern scroll-mt-24">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10">
              <Scale className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Fair Price Reference Guide
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            These are approximate price ranges based on quality and location. Tourist-area prices are what you might be quoted initially; fair prices are what you should aim for after haggling. Prices vary by quality, city, and season.
          </p>

          {/* Desktop Table */}
          <div className="hidden md:block card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-primary)] text-white">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Item</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Tourist Price</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Fair Price</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {priceReferences.map((item, index) => (
                    <tr key={index} className={`border-b border-[var(--border-light)] ${index % 2 === 0 ? '' : 'bg-[var(--surface-muted)]'}`}>
                      <td className="p-4 font-medium text-[var(--text-primary)]">{item.item}</td>
                      <td className="p-4 text-[var(--error)] line-through opacity-70">{item.touristPrice}</td>
                      <td className="p-4 text-[var(--color-green)] font-semibold">{item.fairPrice}</td>
                      <td className="p-4 text-sm text-[var(--text-muted)]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {priceReferences.map((item, index) => (
              <div key={index} className="card-moroccan p-4">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3">{item.item}</h3>
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-1">Tourist Price</p>
                    <p className="text-[var(--error)] line-through opacity-70 text-sm">{item.touristPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-1">Fair Price</p>
                    <p className="text-[var(--color-green)] font-semibold text-sm">{item.fairPrice}</p>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-muted)]">{item.notes}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[var(--text-muted)] mt-6 italic">
            Prices are approximate and based on 2025-2026 rates. Quality, rarity, and location affect pricing. A genuinely handmade item from a master artisan is worth more than a mass-produced tourist souvenir, even at a higher price.
          </p>
        </div>
      </section>

      {/* ===========================================================
          FOOD & RESTAURANT SAFETY
          =========================================================== */}
      <section id="food-safety" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
              <Utensils className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Food &amp; Restaurant Safety
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Moroccan cuisine is one of the highlights of any trip. Street food is generally safe and delicious. A few smart habits will keep your stomach happy throughout your journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--color-green)]" />
                Safe Food Practices
              </h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Eat where locals eat. A busy stall with high turnover means fresh food. If Moroccans are lining up, the food is good and safe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Stick to bottled or filtered water. Tap water in major cities is technically safe, but the different mineral content can upset a sensitive stomach.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Cooked food served hot is almost always safe. Tajines, grilled meats, fresh-baked breads, and soups are excellent choices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Fresh orange juice in Morocco is incredible and freshly squeezed in front of you. It is safe and delicious at most stalls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Peel fruits and vegetables that you eat raw. Pre-cut fruit at stalls may have been rinsed in tap water.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
                Restaurant Red Flags
              </h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[var(--error)] shrink-0 mt-1" />
                  <span>Aggressive touts pulling you inside. The best restaurants in Morocco never need to do this.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[var(--error)] shrink-0 mt-1" />
                  <span>No prices on the menu, or a handwritten menu with vague descriptions. Always ask for a printed menu with prices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[var(--error)] shrink-0 mt-1" />
                  <span>Fish or seafood priced "by weight" without clear indication of cost per kilogram. Ask for the total price before ordering.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[var(--error)] shrink-0 mt-1" />
                  <span>Unwanted extras (bread, olives, harissa, water) appearing on your table. Clarify whether these are complimentary or charged before eating them.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[var(--error)] shrink-0 mt-1" />
                  <span>Empty restaurants in prime tourist locations. If no one else is eating there, the food may not be fresh or the prices may be inflated.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-moroccan p-6 mt-6 border-l-4 border-l-[var(--color-accent)]">
            <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-[var(--color-accent)]" />
              Where to Find the Best Food
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Ask your riad host for their personal recommendations. They know the hidden gems that tourists rarely find. Street food stalls in the Jemaa el-Fnaa food market (Marrakech) are safe and delicious if you choose busy stalls. The medina neighborhoods where locals eat (not the tourist-facing strips) consistently offer the best quality and value. Apps like Google Maps and TripAdvisor have reliable reviews for Morocco, especially in tourist cities.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================================================
          MONEY & ATM SAFETY
          =========================================================== */}
      <section id="money-safety" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <CreditCard className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Money &amp; ATM Safety
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Morocco is largely a cash economy. Understanding how to manage your money safely will make your trip smoother and more secure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[var(--color-primary)]" />
                ATM Best Practices
              </h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Use ATMs attached to major banks: Attijariwafa Bank, BMCE Bank of Africa, Banque Populaire, and CIH Bank. These are well-maintained and secure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Withdraw during daylight hours at ATMs in well-lit, busy locations. Avoid standalone ATMs in quiet alleys.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Always choose to be charged in Moroccan Dirhams (MAD), not your home currency. The "dynamic currency conversion" option costs 3-5% more.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Cover the keypad when entering your PIN. Card skimming exists but is rare at major bank ATMs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Notify your bank of your travel dates before departure to prevent fraud blocks on your card.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Banknote className="w-5 h-5 text-[var(--color-primary)]" />
                Cash Management Tips
              </h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Carry a money belt or hidden neck wallet for larger amounts. Keep daily spending cash in a front pocket. Leave the bulk in your hotel safe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Keep small bills (20 and 50 MAD notes) separate from larger bills. You will need small change constantly for tips, taxis, and small purchases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Exchange money only at banks, official bureaux de change (with posted rates and license), or hotel front desks. Never exchange on the street.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Credit cards are accepted at upscale hotels, restaurants, and shops. Smaller vendors, taxis, and souks are cash only.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-1" />
                  <span>Keep a backup card in a separate location. If your primary card is lost or blocked, you will have an alternative.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/15">
            <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-accent)]" />
              Know Your Denominations
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Moroccan Dirham notes come in 20 (blue-violet), 50 (green), 100 (brown), and 200 (yellow-gold) MAD. Coins are 1/2, 1, 2, 5, and 10 MAD. Familiarize yourself with these before shopping, so you can count change accurately and avoid accepting wrong denominations. A common trick involves giving change with 50-centime coins (worth 0.50 MAD) that can be mistaken for 5 MAD coins if you are not paying attention.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================================================
          ACCOMMODATION TIPS
          =========================================================== */}
      <section id="accommodation" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10">
              <BedDouble className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Accommodation Booking Tips
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Morocco has incredible accommodations ranging from traditional riads to luxury desert camps. A few precautions ensure your stay matches your expectations.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-4">
                Choosing the Right Accommodation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Book on verified platforms', desc: 'Use Booking.com, Airbnb, or established Morocco-specific sites. These platforms offer photo verification, guest reviews, and dispute resolution if something goes wrong.' },
                  { title: 'Read recent reviews', desc: 'Focus on reviews from the past 3-6 months. Management and quality can change quickly. Pay attention to mentions of cleanliness, noise, and accuracy of photos.' },
                  { title: 'Confirm location carefully', desc: 'A riad "in the medina" could be 2 minutes or 20 minutes from the main entrance. Ask about the nearest bab (gate) and whether luggage can be driven close to the door.' },
                  { title: 'Request current photos', desc: 'Before booking, message the host and ask for recent photos or a video of the specific room you will be staying in. Legitimate hosts are happy to comply.' },
                  { title: 'Verify the license', desc: 'All tourist accommodations in Morocco must be registered with the Ministry of Tourism. Ask for the registration number if you have any doubts about legitimacy.' },
                  { title: 'Arrange airport transfer', desc: 'Many riads offer airport pickup. Arrange this before arrival with a fixed price. It removes the stress of negotiating with taxi drivers after a long flight.' },
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <BadgeCheck className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-[var(--text-primary)] text-sm">{tip.title}</h4>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-green)]">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-[var(--color-accent)]" />
                The Riad Experience
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Staying in a traditional riad (a renovated townhouse with a central courtyard) is one of the most special things about visiting Morocco. Good riads provide an oasis of calm within the medina buzz, serve incredible home-cooked breakfasts, and have hosts who become your personal concierge. They will arrange guides, restaurant reservations, day trips, cooking classes, and hammam visits. A great riad host is worth their weight in gold for avoiding tourist traps. Budget 400-1,200 MAD per night for a quality mid-range riad, or 1,500-5,000+ MAD for luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          POLITELY DECLINING SELLERS
          =========================================================== */}
      <section id="declining-sellers" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <MessageSquare className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              How to Politely Decline Persistent Sellers
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Persistent sellers in tourist areas are not being rude by their cultural standards; they are doing their job. Here is how to decline with grace and respect while maintaining your boundaries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-green-dark)] mb-4">
                Effective Strategies
              </h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)]">The firm "La, shukran"</strong>
                    <p className="text-sm mt-1">Say "La, shukran" (No, thank you) once, firmly but with a smile, and keep walking. Do not slow down or make extended eye contact. Repetition of "no" is more effective than explanations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)]">The "I already have one"</strong>
                    <p className="text-sm mt-1">For specific products, saying "I already bought one" (even if you have not) ends the pitch quickly. Sellers respect that you have already made a purchase.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)]">The redirect</strong>
                    <p className="text-sm mt-1">"I am just looking today, maybe tomorrow" gives you an exit without direct confrontation. It is polite and culturally understood.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)]">Keep walking</strong>
                    <p className="text-sm mt-1">The single most effective technique. Do not stop, do not engage, do not look at the goods. A moving target is much harder to sell to. Most sellers give up after 5-10 seconds if you keep walking.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--error)] mb-4">
                What Not to Do
              </h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[var(--error)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)]">Do not get angry</strong>
                    <p className="text-sm mt-1">Getting visibly annoyed encourages persistence in some cases and can cause offense. Stay calm, smile, and keep your cool. It is not personal.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[var(--error)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)]">Do not engage in long explanations</strong>
                    <p className="text-sm mt-1">"I do not have money" or "I am a student" invites a negotiation about lower prices. Short, definitive answers work best.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[var(--error)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)]">Do not touch merchandise you do not intend to buy</strong>
                    <p className="text-sm mt-1">Picking up an item signals interest and makes it much harder to walk away. Look with your eyes, not your hands, unless you are genuinely considering a purchase.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[var(--error)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)]">Do not ignore greetings</strong>
                    <p className="text-sm mt-1">A brief "Salaam" or nod of acknowledgment is polite even if you do not want to buy. Complete silence can come across as rude. Acknowledge, decline, and continue.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          USEFUL PHRASES
          =========================================================== */}
      <section id="useful-phrases" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
              <Globe className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Useful Phrases for Travelers
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            A few key phrases in Moroccan Arabic (Darija) or French will dramatically improve your interactions. Moroccans deeply appreciate any effort to speak their language.
          </p>

          <div className="space-y-4">
            {usefulPhrases.map((phrase, index) => (
              <div key={index} className="card-moroccan p-4 md:p-5">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-start">
                  <div className="md:col-span-3">
                    <p className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">
                      {phrase.english}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{phrase.context}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-xs text-[var(--text-muted)] mb-1">Darija (Arabic)</p>
                    <p className="text-[var(--color-secondary)] font-medium">{phrase.arabic}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-xs text-[var(--text-muted)] mb-1">French</p>
                    <p className="text-[var(--color-accent-dark)] font-medium">{phrase.french}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-xs text-[var(--text-muted)] mb-1">Pronunciation</p>
                    <p className="text-[var(--text-secondary)] italic">{phrase.pronunciation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================================
          CULTURAL CONTEXT
          =========================================================== */}
      <section id="cultural-context" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern scroll-mt-24">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-green)]/10">
              <BookOpen className="w-6 h-6 text-[var(--color-green)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Cultural Context: Understanding Morocco
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Many situations that tourists perceive as "scams" are actually cultural differences in how commerce and hospitality work. Understanding this context transforms frustration into appreciation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalTips.map((tip, index) => (
              <div key={index} className="card-moroccan p-6">
                <div className="inline-flex p-2.5 rounded-lg bg-[var(--color-green)]/10 text-[var(--color-green)] mb-4">
                  {tip.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3">
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================================
          EMERGENCY CONTACTS
          =========================================================== */}
      <section id="emergency-contacts" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--error)]/10">
              <Phone className="w-6 h-6 text-[var(--error)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Emergency Contacts &amp; Tourist Police
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Save these numbers in your phone before arriving in Morocco. The tourist police are specifically trained to assist foreign visitors and often speak multiple languages.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-primary)] text-white">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Service</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Number</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold hidden sm:table-cell">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {emergencyContacts.map((contact, index) => (
                    <tr key={index} className={`border-b border-[var(--border-light)] ${index % 2 === 0 ? '' : 'bg-[var(--surface-muted)]'}`}>
                      <td className="p-4 font-medium text-[var(--text-primary)]">{contact.service}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[var(--error)]/10 text-[var(--error)] font-mono font-bold text-lg">
                          <Phone className="w-4 h-4" />
                          {contact.number}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-[var(--text-muted)] hidden sm:table-cell">{contact.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Siren className="w-5 h-5 text-[var(--error)]" />
                About the Tourist Police
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco has a dedicated Brigade Touristique (Tourist Police) in Marrakech, Fes, Casablanca, Agadir, Tangier, Rabat, and other tourist cities. Officers typically speak French, English, and sometimes Spanish or German. They handle complaints about scams, theft, overcharging, and harassment. Their stations are located near major tourist areas. You can also ask any regular police officer to direct you to the nearest tourist police post.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[var(--color-primary)]" />
                Your Embassy
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Most embassies are located in Rabat, with consulates in Casablanca. The US, UK, France, Germany, Spain, and Canada all have diplomatic missions in Morocco. Register with your embassy before traveling (US: STEP program, UK: FCDO registration). In a serious emergency, your embassy can issue emergency travel documents, contact family, and provide lists of English-speaking doctors and lawyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          WHAT TO DO IF YOU'VE BEEN SCAMMED
          =========================================================== */}
      <section id="if-scammed" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--error)]/10">
              <Siren className="w-6 h-6 text-[var(--error)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              What to Do If You&apos;ve Been Scammed
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            If something does go wrong, stay calm. Most situations are resolvable, and Morocco has systems in place to protect tourists.
          </p>

          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Stay calm and assess the situation',
                description: 'Most tourist scams in Morocco are financial (overcharging, fake goods) rather than dangerous. Take a breath, evaluate what happened, and decide if the amount involved justifies further action. Losing 50 MAD on overpriced spices is a learning experience, not a crisis.',
                icon: <Lightbulb className="w-5 h-5" />,
              },
              {
                step: '2',
                title: 'Document everything',
                description: 'Note the shop name, location, approximate time, what happened, and any witnesses. Take photos of the shop front and the goods if relevant. Keep receipts. This documentation is essential for any report.',
                icon: <Camera className="w-5 h-5" />,
              },
              {
                step: '3',
                title: 'Report to the tourist police',
                description: 'For significant scams (large sums of money, counterfeit goods sold as genuine, or threatening behavior), file a report with the Brigade Touristique. They take tourist complaints seriously, as Morocco\'s tourism reputation is a national priority. Bring your passport and any documentation.',
                icon: <ShieldCheck className="w-5 h-5" />,
              },
              {
                step: '4',
                title: 'Contact your accommodation',
                description: 'Your riad or hotel host can be an invaluable ally. They may know the shop or person involved, can help mediate in Arabic, or can accompany you to the police station. Good hosts take guest safety personally.',
                icon: <BedDouble className="w-5 h-5" />,
              },
              {
                step: '5',
                title: 'File a credit card dispute if applicable',
                description: 'If you paid by credit card for counterfeit or misrepresented goods, contact your bank to initiate a chargeback. Provide all documentation including photos and any police report numbers. Most banks side with consumers in clear fraud cases.',
                icon: <CreditCard className="w-5 h-5" />,
              },
              {
                step: '6',
                title: 'Leave a review to help future travelers',
                description: 'If the business is on Google Maps, TripAdvisor, or any other platform, leave an honest, factual review of your experience. This helps future travelers make informed decisions and incentivizes businesses to treat tourists fairly.',
                icon: <MessageSquare className="w-5 h-5" />,
              },
            ].map((item) => (
              <div key={item.step} className="card-moroccan p-5 flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--error)]/10 text-[var(--error)] font-bold text-lg shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1.5 flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 mt-8 border-l-4 border-l-[var(--color-green)]">
            <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5 text-[var(--color-green)]" />
              Keep Perspective
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Even experienced travelers occasionally get overcharged or fall for a well-practiced pitch. It happens in every country. The vast majority of scam interactions in Morocco involve relatively small amounts of money. Do not let one bad experience color your entire impression of Morocco or its people. Learn from it, share your experience to help others, and focus on the countless positive interactions that make Morocco one of the most remarkable travel destinations in the world.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================================================
          GENERAL STREET SMARTS
          =========================================================== */}
      <section id="street-smarts" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Eye className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              General Street Smarts for Morocco
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            These practical tips apply to any travel destination but are especially useful for first-time visitors to Morocco. None of these should prevent you from having an incredible trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <Lock className="w-5 h-5" />, title: 'Keep valuables hidden', desc: 'Use a money belt for cash and passports. Leave expensive jewelry and watches at home. Use a crossbody bag with the strap across your chest in crowded areas.' },
              { icon: <Smartphone className="w-5 h-5" />, title: 'Phone awareness', desc: 'Avoid walking while looking at your phone in crowded areas. If you need to check maps, step into a shop doorway. Keep your phone in a front pocket or zipped bag.' },
              { icon: <Footprints className="w-5 h-5" />, title: 'Walk with confidence', desc: 'Even if you are unsure where you are going, walk with purpose. Hesitant, slow walkers looking at maps attract more attention from touts.' },
              { icon: <Clock className="w-5 h-5" />, title: 'Time your explorations', desc: 'Medinas are busiest (and most intense) midday. Early morning and late afternoon are calmer, cooler, and more pleasant for exploring.' },
              { icon: <Users className="w-5 h-5" />, title: 'Safety in numbers', desc: 'Walking with a companion reduces unwanted attention. Solo travelers are approached more frequently, but this is not dangerous, just more persistent.' },
              { icon: <MapPinned className="w-5 h-5" />, title: 'Know your route home', desc: 'Before venturing out, ensure you know how to get back to your accommodation. Save the address in Arabic, the GPS coordinates, and the host\'s phone number.' },
              { icon: <Camera className="w-5 h-5" />, title: 'Ask before photographing', desc: 'Always ask permission before photographing people, especially in rural areas. Many Moroccans are happy to pose but appreciate being asked first.' },
              { icon: <Coffee className="w-5 h-5" />, title: 'Trust your instincts', desc: 'If a situation feels wrong, leave. If someone is making you uncomfortable, walk toward a busy area or shop. Your instincts are usually right.' },
              { icon: <AlertTriangle className="w-5 h-5" />, title: 'Beware of "free" things', desc: 'If someone offers something "free" (a bracelet, a sprig of mint, henna), it usually comes with an expected payment. Politely decline anything you do not want.' },
              { icon: <Info className="w-5 h-5" />, title: 'Research before big purchases', desc: 'For carpets, leather goods, or jewelry costing more than a few hundred MAD, research fair prices online first. Visit fixed-price cooperatives to calibrate your expectations.' },
            ].map((tip, i) => (
              <div key={i} className="card-moroccan p-4 flex items-start gap-3">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm mb-1">{tip.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================================
          BOTTOM CTA / RELATED PAGES
          =========================================================== */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)] text-white">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-6">
            Travel Smart, Travel Happy
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
            Morocco is a country that rewards the curious traveler with extraordinary experiences. With these tips in your back pocket, you are ready to explore with confidence and open-hearted wonder.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/safety"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <ShieldCheck className="w-5 h-5" />
              Complete Safety Guide
            </Link>
            <Link
              href="/tips"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-dark)] transition-colors"
            >
              <Lightbulb className="w-5 h-5" />
              Essential Travel Tips
            </Link>
            <Link
              href="/etiquette"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Etiquette Guide
            </Link>
            <Link
              href="/shopping"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Store className="w-5 h-5" />
              Shopping Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

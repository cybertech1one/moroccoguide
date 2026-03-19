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
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Gem,
  Building,
  Award,
  BookOpen,
  ShoppingBag,
  Palette,
  Sparkles,
  Package,
  Scale,
  HandCoins,
  Truck,
  MessageCircle,
  Footprints,
  Compass,
  Eye,
  Users,
  Camera,
  Coffee,
  Lamp,
  Navigation,
  Layers,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Souk Guide 2026 | Best Souks, Haggling Tips & Prices',
  description:
    'Complete guide to shopping in Moroccan souks: best souks in Marrakech, Fes, Essaouira and Chefchaouen. How to haggle, fair prices in MAD, what to buy, scams to avoid, souk etiquette, and shipping tips.',
  keywords: [
    'Morocco souk guide',
    'shopping in Moroccan souks',
    'best souks Morocco',
    'how to haggle Morocco',
    'Marrakech souk guide',
    'Fes medina shopping',
    'Essaouira souk',
    'Chefchaouen souk',
    'Morocco haggling tips',
    'souk etiquette Morocco',
    'what to buy Moroccan souk',
    'souk prices Morocco',
    'Morocco market guide',
    'Jemaa el-Fna souk',
    'souk navigation Morocco',
    'Morocco shopping tips 2026',
  ],
  alternates: {
    canonical: `${BASE_URL}/morocco-souk-guide`,
  },
  openGraph: {
    title: 'Morocco Souk Guide 2026 | Best Souks, Haggling & Prices',
    description:
      'Navigate Moroccan souks like a local. Top souks by city, step-by-step haggling guide, fair prices, scams to avoid, and souk etiquette for first-time visitors.',
    url: `${BASE_URL}/morocco-souk-guide`,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/hero-shopping.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful stalls inside a traditional Moroccan souk with spices and textiles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Souk Guide | Best Souks, Haggling Tips & Prices',
    description:
      'Top souks in Marrakech, Fes, Essaouira and Chefchaouen. Step-by-step haggling guide, fair MAD prices, souk etiquette, scams to avoid, and how to ship purchases home.',
    images: [`${BASE_URL}/images/hero-shopping.webp`],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-souk-guide`,
  name: 'Morocco Souk Guide 2026 | Best Souks, Haggling Tips & Prices',
  description:
    'Complete guide to shopping in Moroccan souks with haggling strategies, fair prices, top souks by city, souk etiquette, and shipping advice.',
  url: `${BASE_URL}/morocco-souk-guide`,
  image: `${BASE_URL}/images/hero-shopping.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-souk-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Souk Guide', item: `${BASE_URL}/morocco-souk-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best souks to visit in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best souks are in Marrakech (the sprawling medina souks off Jemaa el-Fna), Fes (the world\'s largest car-free souk network with 9,000+ workshops), Essaouira (relaxed coastal souk with argan oil and silver), and Chefchaouen (small, charming souks with unique Rif Mountain crafts). Each city offers a different shopping experience and atmosphere.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you haggle in a Moroccan souk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start by researching fair prices before entering the souk. When a vendor quotes a price, counter at 30-40% of the asking price. Stay friendly and patient, as haggling is a social ritual. Use the walk-away technique if you cannot reach your target price. Bundle purchases for better deals. Always pay cash in dirhams for the best prices. The goal is a fair price both sides are happy with.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I buy in a Moroccan souk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best buys are leather goods (bags, poufs, babouche from 80 MAD), spices (ras el hanout, saffron from 20 MAD), ceramics (plates, tagines from 50 MAD), textiles (Berber blankets, scarves from 80 MAD), argan oil (from 80 MAD per 100ml), brass lanterns (from 200 MAD), and silver jewelry (from 100 MAD). Each souk city has different specialties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Moroccan souks safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Moroccan souks are safe. Keep valuables in a front pocket or crossbody bag in crowded areas. Vendors may be persistent but rarely aggressive. A firm "la shukran" (no thank you) works to disengage. Avoid poorly lit alleys at night and stick to main souk thoroughfares. Women traveling solo should feel confident; the souks are family-oriented spaces.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time do souks open and close in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most souks open around 9:00-10:00 AM and close by 7:00-8:00 PM. During Ramadan, hours shift later. Many shops close for Friday prayers (12:00-2:00 PM). The best time to shop is early morning (9-11 AM) when crowds are thin and some vendors offer better prices to bring good luck with the first sale of the day.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I navigate without getting lost in a Moroccan souk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use Google Maps offline (download the map beforehand). Note landmarks like mosques, fountains, and gates. Follow the main thoroughfares and look for colored signs that many medinas have installed. Carry your riad\'s business card to show a taxi driver if needed. Getting slightly lost is part of the charm, but main arteries always lead back to a familiar landmark.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use credit cards in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most souk vendors accept cash only. Some larger, established shops may accept cards but often add a 3-5% surcharge. Always carry Moroccan dirhams in small denominations (20 and 50 MAD notes). ATMs are available at medina gates and main squares. Cash also gives you more bargaining leverage.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I ship large souk purchases home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Four options: Barid Al-Maghrib (Moroccan Post) from 150 MAD for parcels (2-4 weeks), DHL/FedEx/UPS from 500 MAD (3-7 days), shop shipping arranged by established dealers, or carrying items in luggage. For carpets and ceramics, courier services or shop shipping with insurance are recommended. Many rug dealers offer reliable international shipping.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP SOUKS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const topSouks = [
  {
    city: 'Marrakech',
    icon: Star,
    tagline: 'The Legendary Labyrinth',
    image: '/images/hero-shopping.webp',
    atmosphere: 'Intense, vibrant, theatrical',
    bestFor: 'Carpets, spices, leather, lanterns, textiles, caftans',
    priceLevel: 'Higher (tourist premium)',
    keySouks: [
      { name: 'Souk Semmarine', specialty: 'Textiles, clothing, and general goods; the main artery from Jemaa el-Fna' },
      { name: 'Souk el-Attarine', specialty: 'Spices, perfumes, and dried herbs in aromatic stalls' },
      { name: 'Souk des Teinturiers', specialty: 'Dyers\' souk where freshly dyed fabrics hang overhead in vivid colors' },
      { name: 'Souk Haddadine', specialty: 'Blacksmiths\' souk; wrought iron lanterns and metalwork' },
    ],
    description:
      'Marrakech has the most famous souks in Morocco, radiating outward from Jemaa el-Fna square in a maze of narrow alleys. Over 3,000 stalls are organized by trade: leather in one zone, spices in another, carpets in another. The energy is unmatched but so is the tourist markup. Prices run 20-40% higher than Fes, but the variety and theater of the experience are worth it.',
    tip: 'Enter via Souk Semmarine (the main entrance from the square) and let yourself get lost. The deeper you go, the better the prices. Use Place des Epices as a navigation landmark in the northern souks.',
  },
  {
    city: 'Fes',
    icon: Award,
    tagline: 'The Artisan Capital',
    image: '/images/art-moroccan-leather.webp',
    atmosphere: 'Authentic, overwhelming, medieval',
    bestFor: 'Leather, blue ceramics, brass, zellige tiles, embroidered textiles',
    priceLevel: 'Moderate (fewer tourists, better value)',
    keySouks: [
      { name: 'Chouara Tannery Quarter', specialty: 'The world-famous tanneries; leather goods at source prices' },
      { name: 'Souk el-Attarine', specialty: 'Spices and perfumes near the Al-Attarine Madrasa' },
      { name: 'Place Seffarine', specialty: 'Coppersmith square; hammered brass platters, teapots, and trays' },
      { name: 'Ain Nokbi Pottery Quarter', specialty: 'Workshops producing iconic Fes blue-and-white ceramics' },
    ],
    description:
      'Fes el-Bali contains the world\'s largest car-free urban zone with over 9,000 artisan workshops. The medina feels frozen in time: donkeys carry goods through alleys too narrow for cars. Prices are lower than Marrakech because fewer tourists reach Fes, making it the best value for leather, ceramics, and brasswork. The tanneries are a must-see even if you buy nothing.',
    tip: 'Hire an official guide (from 300 MAD for a half day) for your first visit to Fes medina. The layout is genuinely disorienting. After one guided tour, you can navigate independently on subsequent visits.',
  },
  {
    city: 'Essaouira',
    icon: Sparkles,
    tagline: 'The Relaxed Coastal Souk',
    image: '/images/hero-shopping.webp',
    atmosphere: 'Laid-back, artistic, breezy',
    bestFor: 'Argan oil, silver jewelry, thuya wood, art, relaxed browsing',
    priceLevel: 'Moderate (fair, less aggressive bargaining)',
    keySouks: [
      { name: 'Medina Main Souk', specialty: 'Compact central market with clothing, spices, and souvenirs' },
      { name: 'Thuya Woodworkers\' Quarter', specialty: 'Hand-carved thuya wood boxes, chess sets, and furniture' },
      { name: 'Skala de la Ville', specialty: 'Art galleries and marquetry workshops along the ramparts' },
      { name: 'Fish Market (Port)', specialty: 'Fresh seafood; choose your fish and have it grilled on the spot' },
    ],
    description:
      'Essaouira is perfect for first-time souk shoppers or anyone overwhelmed by Marrakech. The medina is compact and walkable, vendors are relaxed and less pushy, and fixed-price concept shops on Avenue de l\'Istiqlal let you benchmark prices. Women\'s argan cooperatives on the road from Marrakech guarantee authentic oil at fair prices.',
    tip: 'Visit the thuya woodworking cooperatives near Skala de la Ville for fixed-price handcrafted items. The quality is superb and you can watch artisans at work. Essaouira is also the best place in Morocco for affordable silver jewelry.',
  },
  {
    city: 'Chefchaouen',
    icon: Palette,
    tagline: 'The Blue Boutique Souk',
    image: '/images/hero-shopping.webp',
    atmosphere: 'Charming, photogenic, intimate',
    bestFor: 'Rif blankets, goat cheese, honey, handmade soap, painted ceramics',
    priceLevel: 'Lower (excellent value)',
    keySouks: [
      { name: 'Place Outa el-Hammam', specialty: 'Central square with cafes and souvenir shops' },
      { name: 'Medina Blue Streets', specialty: 'Woven goods, handmade soap, and painted pottery along iconic blue alleys' },
      { name: 'Ras el-Maa Market', specialty: 'Local market near the waterfall; fresh produce and mountain herbs' },
      { name: 'Craft Cooperatives', specialty: 'Women\'s weaving cooperatives selling authentic Rif textiles' },
    ],
    description:
      'Chefchaouen\'s souk is small but packed with unique finds unavailable elsewhere in Morocco. Woven Rif Mountain blankets, artisanal goat cheese, local wildflower honey, handmade olive oil soap, and hand-painted blue ceramics are all highlights. The souk atmosphere is gentle and bargaining is straightforward, making it ideal for visitors who find Marrakech or Fes overwhelming.',
    tip: 'The women\'s weaving cooperatives on the outskirts of the medina sell handmade blankets and textiles at fair prices. Ask your riad for directions. Chefchaouen is also known for hand-stitched leather bags unique to the Rif region.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SOUK LAYOUT & NAVIGATION
   ═══════════════════════════════════════════════════════════════ */

const navigationTips = [
  {
    title: 'Download Offline Maps',
    icon: Navigation,
    text: 'Download Google Maps or Maps.me for offline use before entering the medina. GPS works inside souks even when data does not. Mark your riad, the nearest gate, and key landmarks before you start exploring.',
  },
  {
    title: 'Follow the Trade Zones',
    icon: Layers,
    text: 'Moroccan souks are organized by trade: leather in one area, spices in another, metalwork in another. Once you understand the zone layout, navigating becomes intuitive. Major trade zones radiate outward from the central mosque or main square.',
  },
  {
    title: 'Use Landmarks, Not Street Names',
    icon: Compass,
    text: 'Most souk alleys have no visible signs. Navigate by landmarks: mosques, fountains (sebils), painted gates, and open squares. The main mosque or central square is always the anchor point. When lost, walk downhill or follow the crowd.',
  },
  {
    title: 'Carry Your Riad\'s Business Card',
    icon: Building,
    text: 'Keep your riad\'s card with its address and phone number. If you get truly lost, any shopkeeper or local can point you in the right direction. Taxi drivers outside the medina can call the riad for GPS directions.',
  },
  {
    title: 'Morning vs. Afternoon Rhythms',
    icon: Clock,
    text: 'Souks are quietest 9-11 AM, making navigation easier. By noon, alleys are packed. Many shops close for Friday prayers (12-2 PM). Late afternoon (4-6 PM) brings a second wave of activity as temperatures cool. Ramadan shifts everything later.',
  },
  {
    title: 'Look for Colored Arrow Signs',
    icon: Eye,
    text: 'Many medinas (especially Fes and Marrakech) have installed colored directional signs pointing toward key exits, landmarks, and attractions. Follow these when you need to reorient. Blue arrows in Fes often point toward Bab Boujloud.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HAGGLING STEP-BY-STEP
   ═══════════════════════════════════════════════════════════════ */

const hagglingSteps = [
  {
    step: 1,
    title: 'Research Fair Prices First',
    icon: BookOpen,
    text: 'Before entering the souks, study price ranges in this guide and visit an Ensemble Artisanal (government fixed-price shop found in most cities) to learn baseline values. Knowledge is your strongest negotiating tool and prevents overpaying.',
  },
  {
    step: 2,
    title: 'Browse Before You Buy',
    icon: Eye,
    text: 'Walk through the entire souk section for your desired item before committing. Compare quality and prices across multiple stalls. Vendors in deeper, less-trafficked areas often offer better starting prices than those at busy entrances.',
  },
  {
    step: 3,
    title: 'Show Interest, Not Desperation',
    icon: Coffee,
    text: 'Pick up items casually, examine them, and ask "how much?" without showing too much excitement. If a vendor senses you love an item, the price goes up. Accept the mint tea offered; it is part of the ritual and does not obligate you to buy.',
  },
  {
    step: 4,
    title: 'Counter at 30-40% of Asking Price',
    icon: DollarSign,
    text: 'If the vendor says 1,000 MAD, counter with 300-400 MAD. This gives both sides room to negotiate toward a fair middle ground. A serious vendor will always counter rather than let you walk away.',
  },
  {
    step: 5,
    title: 'Stay Friendly and Patient',
    icon: Heart,
    text: 'Haggling is a social ritual in Morocco, not a confrontation. Smile, laugh, make conversation. Vendors respect warmth and humor far more than aggression. The best deals come from genuine human connection.',
  },
  {
    step: 6,
    title: 'Use the Walk-Away Technique',
    icon: Footprints,
    text: 'If you cannot reach your target price, say "shukran" (thank you) and start walking toward the exit. Most vendors will call you back with a lower offer. If they do not, you were already near their floor price.',
  },
  {
    step: 7,
    title: 'Bundle Multiple Items',
    icon: Package,
    text: 'Buying multiple items from one vendor almost always gets you a better per-item price. Negotiate three scarves together, not one at a time. Say "what price for all three?" to signal a bulk deal.',
  },
  {
    step: 8,
    title: 'Pay Cash in Small Bills',
    icon: HandCoins,
    text: 'Cash in Moroccan dirhams always gets better prices than card. Carry small denominations (20 and 50 MAD notes) to avoid the "I have no change" tactic. Hand over the exact amount to close the deal cleanly.',
  },
  {
    step: 9,
    title: 'Know When to Stop',
    icon: CheckCircle,
    text: 'Once you reach a fair price based on your research, accept it gracefully. Pushing for another 10 MAD after a long negotiation is disrespectful. A good deal should feel good for both parties. Shake hands and smile.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO BUY
   ═══════════════════════════════════════════════════════════════ */

const whatToBuy = [
  {
    item: 'Leather Goods',
    icon: Footprints,
    priceRange: 'From 80 MAD (slippers) to 800 MAD (jacket)',
    bestSouk: 'Fes Chouara Tannery Quarter',
    description: 'Morocco\'s leather tradition spans over a millennium. Bags, poufs, belts, wallets, and babouche slippers are all excellent buys. Goatskin is softer; cowhide is more durable for bags.',
    qualityTip: 'Genuine leather has a natural scent, not a chemical one. Fes tannery prices are 20-30% lower than Marrakech.',
  },
  {
    item: 'Spices & Ras el Hanout',
    icon: Sparkles,
    priceRange: 'From 20 MAD per 100g',
    bestSouk: 'Marrakech Souk el-Attarine',
    description: 'Ras el hanout (the signature blend with up to 30 ingredients), cumin, paprika, turmeric, saffron, and dried rosebuds. Incredibly affordable compared to Western retail prices.',
    qualityTip: 'Real saffron has thin red threads and tastes bitter. Ask vendors to vacuum-seal bags. Avoid pre-mixed tourist blends.',
  },
  {
    item: 'Ceramics & Pottery',
    icon: Palette,
    priceRange: 'From 50 MAD (small bowl) to 300 MAD (large plate)',
    bestSouk: 'Fes Ain Nokbi Quarter',
    description: 'Fes blue-and-white geometric designs, colorful Safi pottery, unique green-glazed Tamegroute ware. Plates, tagines, bowls, and zellige tile coasters make memorable gifts.',
    qualityTip: 'Tap ceramics gently; a clear ring means solid quality. Ask if tagines are for cooking (lead-free) or display only.',
  },
  {
    item: 'Textiles & Blankets',
    icon: Gem,
    priceRange: 'From 80 MAD (scarf) to 500 MAD (Berber blanket)',
    bestSouk: 'Marrakech Souk Semmarine',
    description: 'Berber handira blankets from the Atlas Mountains, sabra (cactus silk) cushion covers, cotton scarves, and embroidered caftans. Handwoven pieces show subtle irregularities that prove authenticity.',
    qualityTip: 'Check the back of textiles for slight irregularities; machine-made items have perfectly uniform patterns.',
  },
  {
    item: 'Argan Oil',
    icon: Award,
    priceRange: 'From 80 MAD per 100ml (cosmetic)',
    bestSouk: 'Essaouira cooperatives',
    description: 'Cosmetic argan oil is light and nearly odorless (cold-pressed from raw nuts). Culinary argan is darker with a rich nutty flavor (from roasted nuts). Women\'s cooperatives guarantee authenticity.',
    qualityTip: 'Real cosmetic argan absorbs into skin within a minute. If it sits greasy on the surface, it is diluted or fake.',
  },
  {
    item: 'Brass Lanterns',
    icon: Lamp,
    priceRange: 'From 200 MAD (table) to 1,000 MAD (floor)',
    bestSouk: 'Marrakech Place des Ferblantiers',
    description: 'Hand-pierced brass and iron lanterns casting mesmerizing geometric shadow patterns. Table lanterns, hanging fixtures, and candle holders. The metalworkers of Marrakech are the acknowledged masters.',
    qualityTip: 'Check electrified lanterns\' wiring quality. Candle lanterns are simpler and safer. Negotiate harder when buying multiple pieces.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAIR PRICES REFERENCE
   ═══════════════════════════════════════════════════════════════ */

const fairPrices = [
  { item: 'Babouche slippers (plain leather)', price: 'From 80 MAD', note: 'Embroidered from 150 MAD' },
  { item: 'Leather crossbody bag', price: 'From 200 MAD', note: 'Higher for custom work' },
  { item: 'Ras el hanout (100g)', price: 'From 30 MAD', note: 'Vacuum-sealed recommended' },
  { item: 'Saffron (1g genuine)', price: 'From 20 MAD', note: 'Beware fake safflower' },
  { item: 'Fes blue plate (large)', price: 'From 150 MAD', note: 'Small bowls from 50 MAD' },
  { item: 'Decorative tagine', price: 'From 80 MAD', note: 'Cooking tagines slightly more' },
  { item: 'Cosmetic argan oil (100ml)', price: 'From 80 MAD', note: 'Buy from cooperatives' },
  { item: 'Cotton scarf', price: 'From 80 MAD', note: 'Silk-blend from 150 MAD' },
  { item: 'Berber blanket (handira)', price: 'From 300 MAD', note: 'Handwoven, Atlas origin' },
  { item: 'Small brass lantern', price: 'From 200 MAD', note: 'Large floor lanterns from 1,000 MAD' },
  { item: 'Berber silver bracelet', price: 'From 150 MAD', note: 'Check for 925 stamp' },
  { item: 'Tea glass set (6)', price: 'From 60 MAD', note: 'With tray from 200 MAD' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SCAMS TO AVOID
   ═══════════════════════════════════════════════════════════════ */

const scamsToAvoid = [
  {
    scam: 'The "My Friend\'s Shop" Redirect',
    description: 'A local offers to guide you to a "special shop" with "local prices." The guide collects a 10-30% commission added directly to your purchase price.',
    prevention: 'Politely decline unsolicited guides with "la shukran." Navigate independently using offline maps. If you use a guide, factor the commission into your negotiation.',
  },
  {
    scam: 'Fake Saffron',
    description: 'Dyed safflower, corn silk, or plastic threads sold as expensive saffron. Real saffron has thin red threads, tastes bitter, and slowly turns water golden-yellow.',
    prevention: 'Buy from established spice shops. Taste a thread: real saffron is bitter. Expect from 20-40 MAD per gram; anything drastically cheaper is fake.',
  },
  {
    scam: 'Machine-Made "Handmade" Carpets',
    description: 'Factory-produced rugs sold as handwoven at handmade prices. Machine-made carpets have perfectly uniform knots and a flat, synthetic backing.',
    prevention: 'Flip the rug over: handmade rugs show visible individual knots on the reverse. Pull a fringe thread; real wool feels organic, synthetic is smooth and plastic.',
  },
  {
    scam: 'Diluted Argan Oil',
    description: 'Argan oil mixed with cheaper sunflower or olive oil, or entirely synthetic substitutes sold at premium prices.',
    prevention: 'Buy from women\'s cooperatives only. Real cosmetic argan absorbs into skin within a minute without greasy residue. If it sits on the surface, it is fake.',
  },
  {
    scam: 'The Closed Riad Trick',
    description: 'Someone near your riad tells you it is "closed today" or "moved" and offers to take you to another accommodation. Your riad is fine; they earn a commission from the other hotel.',
    prevention: 'Ignore this completely. Walk directly to your riad. Call your riad if you feel uncertain. This scam targets newly arrived visitors near accommodation areas.',
  },
  {
    scam: 'Inflated "First Price" for Tourists',
    description: 'Some vendors quote tourists 5-10x the fair price, far beyond the normal 2-3x markup. This is especially common at souk entrances near major tourist sites.',
    prevention: 'Know fair prices from this guide. Shop deeper in the souk where prices normalize. If a quoted price seems extreme, walk away without countering and try another stall.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SOUK ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    rule: 'Ask Before Photographing People',
    icon: Camera,
    text: 'Always ask permission before photographing vendors, artisans, or locals. Many people are happy to pose; some prefer not to be photographed. A small tip (from 5-10 MAD) is appreciated when someone poses for you.',
  },
  {
    rule: 'Dress Modestly',
    icon: Users,
    text: 'Souks are conservative spaces in a Muslim country. Cover shoulders and knees. Women do not need to cover their hair but modest dress earns respect and reduces unwanted attention from vendors.',
  },
  {
    rule: 'Accept Tea Without Obligation',
    icon: Coffee,
    text: 'Being offered mint tea is a sign of hospitality, not a binding contract. You can drink the tea, chat, and still walk away without buying. However, sitting for tea signals you are a serious potential buyer.',
  },
  {
    rule: 'Say "La Shukran" Firmly but Kindly',
    icon: MessageCircle,
    text: 'A clear "la shukran" (no thank you) with a smile and continued walking is the most effective way to decline vendors. Do not engage in conversation with sellers whose goods you have no interest in.',
  },
  {
    rule: 'Respect Prayer Times',
    icon: Clock,
    text: 'Many vendors close briefly for the five daily prayers, especially Friday noon prayer (12-2 PM). Do not try to rush a transaction during prayer call. Use the pause to rest, eat, or plan your next souk section.',
  },
  {
    rule: 'Yield to Donkeys and Carts',
    icon: AlertTriangle,
    text: 'In Fes especially, donkeys and hand-pushed carts are the delivery trucks of the medina. When you hear "balak!" (watch out!), press yourself against the wall to let them pass. They have the right of way.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SHIPPING
   ═══════════════════════════════════════════════════════════════ */

const shippingOptions = [
  {
    method: 'Barid Al-Maghrib (Post)',
    icon: Package,
    cost: 'From 150 MAD',
    time: '2-4 weeks',
    best: 'Spices, small leather goods, textiles, scarves',
  },
  {
    method: 'DHL / FedEx / UPS',
    icon: Truck,
    cost: 'From 500 MAD',
    time: '3-7 days',
    best: 'Ceramics, valuable items, fragile goods, jewelry',
  },
  {
    method: 'Shop Shipping (Dealer)',
    icon: ShoppingBag,
    cost: 'From 200 MAD',
    time: '1-6 weeks',
    best: 'Carpets, large lanterns, furniture, heavy items',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What are the best souks to visit in Morocco?',
    answer:
      'The top souks are in Marrakech (the sprawling medina souks off Jemaa el-Fna with 3,000+ stalls), Fes (the world\'s largest car-free souk with 9,000+ workshops), Essaouira (relaxed coastal souk with argan oil and silver), and Chefchaouen (charming blue-walled souk with Rif Mountain crafts). Marrakech offers the most variety, Fes the best prices, Essaouira the most relaxed atmosphere, and Chefchaouen the most unique finds.',
  },
  {
    question: 'How do I haggle in a Moroccan souk?',
    answer:
      'Start by researching fair prices before entering the souk. Counter at 30-40% of the asking price, stay friendly and patient, and use the walk-away technique if needed. Bundle purchases for better per-item deals. Pay cash in Moroccan dirhams for the best prices. Haggling is a social ritual in Morocco, so enjoy the process and aim for a price that feels fair to both parties.',
  },
  {
    question: 'Are Moroccan souks safe for tourists?',
    answer:
      'Yes, Moroccan souks are busy and sometimes overwhelming but safe. Keep valuables in a front pocket or crossbody bag. Vendors can be persistent but are rarely aggressive. Say "la shukran" (no thank you) to decline. Avoid poorly lit alleys at night. The souks are family-oriented spaces and tourist police patrol major medinas.',
  },
  {
    question: 'What time do souks open and close?',
    answer:
      'Most souks open 9:00-10:00 AM and close by 7:00-8:00 PM. Many shops close for Friday prayers (12:00-2:00 PM). During Ramadan, hours shift later with evening shopping after iftar. Early morning (9-11 AM) is the best time to shop: fewer crowds, cooler temperatures, and some vendors offer better prices on the day\'s first sale.',
  },
  {
    question: 'Can I use credit cards in Moroccan souks?',
    answer:
      'Most souk vendors accept cash only. Some larger established shops take cards but often add a 3-5% surcharge. Always carry Moroccan dirhams in small denominations (20 and 50 MAD notes). ATMs are available at medina gates and main squares. Cash gives you significantly more bargaining leverage.',
  },
  {
    question: 'How do I avoid getting lost in a Moroccan souk?',
    answer:
      'Download offline maps (Google Maps or Maps.me) before entering. Note landmarks like mosques, fountains, and gates. Carry your riad\'s business card. Follow main thoroughfares and look for colored directional signs. Getting slightly lost is part of the experience, but main arteries always lead back to familiar squares and gates.',
  },
  {
    question: 'What should I not buy in Moroccan souks?',
    answer:
      'Avoid fake saffron (look for dyed safflower sold as saffron), machine-made carpets sold as handmade, diluted argan oil from street vendors, fake silver jewelry (test with a magnet), and plaster fossils. Always buy from established shops or cooperatives. If a price seems too good to be true, the product is likely counterfeit.',
  },
  {
    question: 'How do I ship large souk purchases home?',
    answer:
      'Use Barid Al-Maghrib (Moroccan Post) from 150 MAD for small parcels (2-4 weeks), DHL/FedEx/UPS from 500 MAD for fast delivery (3-7 days), or shop shipping arranged by established dealers (especially for carpets and lanterns). Many reputable rug and ceramic shops offer reliable international shipping with insurance. Get a receipt and tracking number for any shipped items.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSoukGuidePage() {
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
          style={{ backgroundImage: 'url(/images/hero-shopping.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Souk Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <ShoppingBag className="w-4 h-4" />
            Souks &amp; Markets
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Souk Guide:
            <br className="hidden md:block" /> Navigate, Haggle &amp; Shop
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Marrakech&apos;s legendary labyrinth to the blue alleys of Chefchaouen. Everything
            you need to navigate Moroccan souks, haggle with confidence, and bring home authentic treasures.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Shopping in Moroccan Souks: The Ultimate Experience
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moroccan souks are among the most sensory-rich shopping experiences on
                earth. These traditional markets have operated for centuries in labyrinthine
                medinas, with stalls organized by trade just as they were in medieval times.
                Spice vendors fill narrow alleys with the scent of cumin and saffron. Leather
                workers shape goods by hand. Metalworkers hammer intricate lantern designs.
                The souk is not just a market; it is a living museum of Moroccan craftsmanship.
              </p>
              <p>
                But for first-time visitors, souks can feel overwhelming. Maze-like layouts,
                enthusiastic vendors, unfamiliar haggling customs, and the sheer volume of
                goods make it hard to know where to start, what to pay, or how to tell authentic
                craftsmanship from factory reproductions. This guide covers everything: the
                best souks by city, step-by-step haggling strategies, fair prices in MAD, what
                to buy, scams to avoid, souk etiquette, and how to ship your purchases home.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <Info className="w-4 h-4 inline mr-1" />
                All prices listed are starting prices in Moroccan dirhams (MAD). Seasonal pricing
                applies during peak tourist months (October-April) and holidays, when souk prices
                tend to run 10-20% higher due to increased demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Souks by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Souks in Morocco by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city offers a completely different souk experience. Here are the top four.
          </p>

          <div className="space-y-10">
            {topSouks.map((souk) => {
              const SoukIcon = souk.icon;
              return (
                <div key={souk.city} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="relative h-56 lg:h-auto">
                      <img
                        src={souk.image}
                        alt={`${souk.city} souk - ${souk.tagline}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-auto lg:top-4">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                            <SoukIcon className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                            {souk.city}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--color-gold)] font-medium">{souk.tagline}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-6">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="text-xs font-semibold text-[var(--color-accent)] px-2 py-0.5 bg-[var(--color-accent)]/10 rounded">
                          {souk.atmosphere}
                        </span>
                        <span className="text-xs font-semibold text-[var(--color-gold)] px-2 py-0.5 bg-[var(--color-gold)]/10 rounded">
                          Price: {souk.priceLevel}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                        {souk.description}
                      </p>

                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        Key Souks &amp; Markets
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {souk.keySouks.map((ks) => (
                          <div key={ks.name} className="flex items-start gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                            <CheckCircle className="w-3.5 h-3.5 shrink-0 text-[var(--color-gold)] mt-0.5" />
                            <div>
                              <span className="text-xs font-semibold text-[var(--text-primary)]">{ks.name}</span>
                              <p className="text-xs text-[var(--text-muted)]">{ks.specialty}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                        <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {souk.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Souk Layout & Navigation ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Souk Layout &amp; Navigation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to find your way through Morocco&apos;s maze-like markets without losing your bearings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {navigationTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Haggling Step-by-Step ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Haggle in Morocco: Step by Step
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Haggling is an art and a social ritual. Follow these 9 steps to negotiate with confidence and mutual respect.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {hagglingSteps.map((rule) => {
                  const RuleIcon = rule.icon;
                  return (
                    <div key={rule.step} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{rule.step}</span>
                      </div>
                      <div className="card-moroccan p-5 flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <RuleIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {rule.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rule.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Buy ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Buy in Moroccan Souks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The six essential categories of souk purchases, with prices and quality tips for each.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whatToBuy.map((product) => {
              const ProductIcon = product.icon;
              return (
                <div key={product.item} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ProductIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {product.item}
                      </h3>
                      <p className="text-xs text-[var(--color-accent)] font-semibold">{product.priceRange}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{product.description}</p>
                  <p className="text-xs text-[var(--text-muted)] mb-2">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    <span className="font-semibold">Best souk:</span> {product.bestSouk}
                  </p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                    <Info className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--text-primary)]">Quality tip:</span> {product.qualityTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Fair Prices Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fair Price Reference Table
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Use these baseline prices to negotiate with confidence. Prices may vary by city and season.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-[var(--border-default)]">
              {fairPrices.map((row) => (
                <div key={row.item} className="grid grid-cols-3 gap-4 p-4 items-center">
                  <div className="text-sm font-medium text-[var(--text-primary)]">{row.item}</div>
                  <div className="text-sm font-semibold text-[var(--color-accent)]">{row.price}</div>
                  <div className="text-xs text-[var(--text-muted)]">{row.note}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-6">
            <Info className="w-4 h-4 inline mr-1" />
            Prices are starting points and may fluctuate seasonally. Peak tourist months (October-April)
            often see 10-20% higher asking prices in popular souks.
          </p>
        </div>
      </section>

      {/* ── Scams to Avoid ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Souk Scams &amp; How to Avoid Them
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s souks are overwhelmingly honest, but knowing these common tricks helps you shop smarter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {scamsToAvoid.map((item) => (
              <div key={item.scam} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {item.scam}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
                <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">How to avoid:</span> {item.prevention}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Souk Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Souk Etiquette: Do&apos;s &amp; Don&apos;ts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respect local customs and you will be rewarded with warmer interactions and better prices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {etiquetteRules.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {rule.rule}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rule.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Shipping Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Truck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shipping Souk Purchases Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bought a rug too big for your suitcase? Here are the best ways to get your treasures home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {shippingOptions.map((option) => {
              const OptionIcon = option.icon;
              return (
                <div key={option.method} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <OptionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {option.method}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="text-[var(--color-accent)] font-semibold">{option.cost}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {option.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {option.best}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Packing Tips for Souk Purchases
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Wrap ceramics individually in clothing or scarves you have also purchased</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Ask vendors for bubble wrap; most ceramics sellers carry it</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Argan oil bottles over 100ml must go in checked luggage, not carry-on</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Get receipts for valuable items to declare at customs and prove authenticity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
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
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/souks" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Guide to Moroccan Souks
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In-depth guide to every major souk in Morocco with maps, opening hours, and what to expect.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/what-to-buy-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                What to Buy in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The 11 best Moroccan souvenirs with real prices, quality markers, and city recommendations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-shopping-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Scale className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Shopping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete shopping guide with price tables, customs info, and advanced bargaining strategies.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/moroccan-markets" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Markets Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore traditional weekly markets, food markets, and modern shopping in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/crafts" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Palette className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Crafts &amp; Artisans
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover the centuries-old craft traditions of Morocco from leather to zellige tilework.
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

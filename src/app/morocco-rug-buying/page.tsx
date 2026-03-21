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
  Award,
  Sparkles,
  Users,
  Eye,
  Globe,
  Package,
  Layers,
  Palette,
  BookOpen,
  Truck,
  Store,
  Ruler,
  Search,
  Scissors,
  Scale,
  HandCoins,
  MessageCircleQuestion,
  Flame,
  Grid3X3,
  ShoppingBag,
  CircleDot,
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-rug-buying`;

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Rug Buying Guide 2026 | Types, Prices, Haggling & Shipping',
  description:
    'Complete guide to buying Moroccan rugs and carpets. Beni Ourain, Azilal, Boucherouite, Kilim, Zanafi, Taznakht — rug types, quality tests, fair prices in MAD, haggling strategies, shipping options, avoiding scams, and care instructions.',
  keywords: [
    'buy Moroccan rug',
    'Morocco rug buying guide',
    'Beni Ourain rug',
    'Azilal rug Morocco',
    'Boucherouite rug',
    'Moroccan kilim',
    'Zanafi rug',
    'Taznakht rug',
    'Moroccan carpet prices',
    'haggling rugs Morocco',
    'ship rug from Morocco',
    'Moroccan rug quality',
    'Moroccan rug scams',
    'Berber rug Morocco',
    'handmade rug Morocco',
    'Morocco carpet souk',
    'Marrakech rug shopping',
    'Fes carpet buying',
    'Morocco rug customs duty',
    'Moroccan rug care',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Morocco Rug Buying Guide 2026 | Types, Prices & Haggling Tips',
    description:
      'Everything you need to know about buying authentic Moroccan rugs. Rug types from Beni Ourain to Boucherouite, quality indicators, fair prices in MAD, haggling strategy, shipping home, and how to avoid fakes.',
    url: PAGE_URL,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/hero-shopping.webp`,
        width: 1200,
        height: 630,
        alt: 'Stacks of colorful handwoven Moroccan rugs displayed at a carpet souk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Rug Buying Guide 2026 | Berber Carpets, Fair Prices & Shipping',
    description:
      'Your complete guide to Moroccan rugs: 8 rug types, quality tests, prices from 500 MAD, haggling tips, shipping options, scam warnings, and care instructions.',
    images: [`${BASE_URL}/images/hero-shopping.webp`],
  },
};

/* ===================================================================
   FAQ DATA
   =================================================================== */

const faqItems = [
  {
    q: 'How much should I pay for a genuine Beni Ourain rug?',
    a: 'A small Beni Ourain (150x100 cm) starts from 2,000 MAD at a cooperative or after skilled negotiation. A large room-size piece (300x200 cm) runs from 5,000 to 12,000 MAD depending on knot density, wool quality, and the weaver. Prices at tourist-heavy shops in Marrakech medina skew higher. Always compare at 3-4 shops before buying. Seasonal pricing can change.',
  },
  {
    q: 'How can I tell if a Moroccan rug is handmade or machine-made?',
    a: 'Flip the rug over. A handmade rug has slight irregularities in knot spacing and you can see the pattern clearly on the back. Machine-made rugs have a uniform, almost printed-looking reverse. Run your hand along the pile: handmade wool feels slightly uneven and warm, while machine-made synthetic fibers feel slippery and cool. Pull a single fiber and burn the tip -- real wool smells like burnt hair and leaves ash. Synthetic melts into a hard bead.',
  },
  {
    q: 'Can I ship a large rug home from Morocco?',
    a: 'Yes. The most common method is DHL or FedEx through the shop, costing from 800 MAD for a medium rug to Europe or North America, with delivery in 5-10 days. Morocco Post (Barid al-Maghrib) is cheaper at from 400 MAD but takes 3-6 weeks. For multiple rugs, sea freight through a cargo broker costs from 2,000 MAD per shipment but takes 6-10 weeks. Many established shops handle all the paperwork.',
  },
  {
    q: 'Will I have to pay customs duty on a Moroccan rug?',
    a: 'It depends on your country and the rug value. The US allows $800 duty-free per person. The EU allows approximately 430 euros. Canada allows $800 CAD. Above those thresholds, expect 5-12% duty plus local taxes. Keep your receipt and ask the shop for a commercial invoice. Hand-knotted rugs classified as handicrafts sometimes qualify for reduced rates.',
  },
  {
    q: 'What is the difference between a Berber rug and a Moroccan rug?',
    a: 'All Berber rugs are Moroccan, but not all Moroccan rugs are Berber. Berber rugs (Beni Ourain, Azilal, Boucherouite) are woven by Amazigh (Berber) tribes in the Atlas Mountains and use tribal symbols passed down through generations. City-made rugs from Rabat and Fes draw on Arab-Andalusian patterns with more structured, symmetrical designs. Both are authentic Moroccan crafts.',
  },
  {
    q: 'Is it safe to buy rugs from touts who approach you in the medina?',
    a: 'Touts (called faux guides) earn commission by bringing you to specific shops, and that commission gets added to your price. You will pay 15-30% more than if you found the shop independently. It is better to research shops in advance, visit cooperatives, or ask your riad host for a trusted recommendation. Politely decline touts by saying "la shukran" (no thank you) and keep walking.',
  },
  {
    q: 'How do I clean and maintain a Moroccan rug at home?',
    a: 'Vacuum regularly on a low setting without the beater bar. Rotate the rug every 6 months to prevent uneven sun fading. Blot spills immediately with a damp cloth -- never rub. For deep cleaning, hire a professional rug cleaner experienced with wool. Avoid steam cleaning, which can shrink natural fibers. Moth prevention is important: cedar blocks or lavender sachets placed nearby help.',
  },
  {
    q: 'What size rug should I buy for a living room?',
    a: 'Measure your room before you travel. Standard Moroccan rug sizes are roughly 150x100 cm (accent), 200x150 cm (small room), 250x150 cm (medium), and 300x200 cm (large room). For a living room seating area, pick a rug that extends at least 30 cm beyond the front legs of your sofa on each side. Bring a measuring tape to the souk -- sellers rarely have exact dimensions listed.',
  },
];

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Rug Buying Guide 2026',
  description:
    'Complete guide to buying authentic Moroccan rugs and carpets. Covers rug types, quality tests, pricing, haggling, shipping, customs, scam avoidance, and care instructions.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-shopping.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Rug Buying Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ===================================================================
   DATA: RUG TYPES
   =================================================================== */

const rugTypes = [
  {
    name: 'Beni Ourain',
    icon: Star,
    origin: 'Beni Ourain tribes, Middle Atlas Mountains',
    material: '100% undyed natural sheep wool (cream/ivory base)',
    patterns: 'Geometric diamond lattice, abstract zigzags, and linear grids in dark brown or black on a cream field. Each symbol carries tribal meaning -- diamonds represent femininity and protection, zigzags symbolize water or life paths.',
    texture: 'Thick, plush pile (2-4 cm deep). Extremely soft underfoot. The wool retains lanolin, giving it a natural sheen and water resistance.',
    size: 'Typically 200x300 cm or larger, originally made for tent floors',
    priceRange: 'From 2,000 MAD (small, 150x100 cm) to 12,000 MAD (large, 300x200 cm)',
    buyingTip: 'The most counterfeited Moroccan rug. Genuine Beni Ourain wool feels slightly oily from lanolin. Machine-made copies use cotton or synthetic blends that feel dry and slick. Check the back for irregular hand-knotting.',
  },
  {
    name: 'Azilal',
    icon: Palette,
    origin: 'Azilal province, central High Atlas',
    material: 'Wool pile on cotton or wool warp; sometimes mixed with cotton threads',
    patterns: 'Free-form, abstract, and colorful. Each weaver creates unique compositions with no predetermined pattern. Motifs include stylized people, animals, crosses, stars, and abstract shapes in bold pinks, yellows, blues, and oranges on a cream or white base.',
    texture: 'Medium pile, softer than kilims but thinner than Beni Ourain. Lightweight and flexible.',
    size: 'Commonly 200x150 cm, but sizes vary widely since each is unique',
    priceRange: 'From 1,500 MAD (small) to 8,000 MAD (large, dense weave)',
    buyingTip: 'Azilal rugs are genuinely one-of-a-kind. If a shop has ten identical-looking Azilal rugs, they are likely workshop copies. Authentic pieces have slight asymmetry and individual character that cannot be replicated.',
  },
  {
    name: 'Boucherouite',
    icon: Scissors,
    origin: 'Various Berber regions, originally born from necessity',
    material: 'Recycled textiles -- cotton rags, synthetic fabric strips, old clothing. No raw wool.',
    patterns: 'Wildly eclectic. Strips of recycled fabric create abstract, patchwork-like compositions with no rules. Colors range from subdued earth tones to shocking neons depending on the source fabrics.',
    texture: 'Flat to low pile, flexible and lightweight. More textile than carpet in feel.',
    size: 'Varies widely, often irregular shapes. Common around 200x130 cm.',
    priceRange: 'From 500 MAD (small, simple) to 4,000 MAD (large, complex antique)',
    buyingTip: 'Boucherouite literally means "torn and reused." These are the most affordable Moroccan rugs because the materials cost nothing. Older pieces (20+ years) command higher prices due to rarity and faded patina. New boucherouite rugs should be cheap -- do not overpay.',
  },
  {
    name: 'Kilim (Hanbel)',
    icon: Layers,
    origin: 'Widespread across Morocco, strongest tradition in the Middle Atlas and Rif',
    material: 'Wool, cotton, or a blend. Flatweave technique -- no pile knots.',
    patterns: 'Bold geometric stripes, triangles, diamonds, and zigzags. Regional variations: Rif kilims use earth tones, Atlas kilims favor reds and oranges, Saharan kilims use indigo and saffron.',
    texture: 'Completely flat, thin, and flexible. Reversible -- both sides are usable. Lightweight and easy to fold or roll.',
    size: 'Commonly long runners (300x80 cm) or area rugs (200x150 cm)',
    priceRange: 'From 400 MAD (small runner) to 5,000 MAD (large, vintage, natural dyes)',
    buyingTip: 'Kilims are the easiest Moroccan rugs to transport because they fold flat and weigh little. They also show quality differences clearly -- hold a kilim up to the light. Tight, even weaving blocks light; loose weaving lets light through gaps.',
  },
  {
    name: 'Zanafi',
    icon: Grid3X3,
    origin: 'Ouarzazate region and Draa Valley, southeastern Morocco',
    material: 'Wool and goat hair blend on a cotton warp',
    patterns: 'Two distinct halves: one section is flat-woven kilim style, the other is a knotted pile. This combination creates a unique textural contrast in a single rug. Geometric patterns in terracotta, cream, and charcoal.',
    texture: 'Mixed -- part flat, part pile. The pile sections add warmth while the kilim sections add structure. Sturdy and heavy-duty.',
    size: 'Typically 200x150 cm to 300x200 cm',
    priceRange: 'From 1,500 MAD (small) to 7,000 MAD (large)',
    buyingTip: 'Zanafi rugs are less well-known internationally, so prices have not inflated the way Beni Ourain prices have. A good Zanafi offers better value per square meter than comparable Beni Ourain pieces.',
  },
  {
    name: 'Taznakht',
    icon: CircleDot,
    origin: 'Taznakht, Anti-Atlas Mountains near Ouarzazate',
    material: 'Fine wool, often from local Siroua sheep known for especially soft fleece',
    patterns: 'Intricate small-scale geometric patterns with a high knot count. Complex diamond grids, interlocking triangles, and stepped medallions. Colors range from saffron yellow and deep red to purple from local plant dyes.',
    texture: 'Dense, tightly knotted pile. The high knot count creates a compact, structured feel closer to Persian carpets than to shaggy Berber rugs.',
    size: 'Often smaller, 150x100 cm to 200x150 cm, due to the labor-intensive knotting',
    priceRange: 'From 2,500 MAD (small) to 10,000 MAD (large, high knot density)',
    buyingTip: 'Taznakht is the rug capital of Morocco. Visit the town itself for the best prices and widest selection. The Saturday souk in Taznakht is one of the largest carpet markets in the country.',
  },
  {
    name: 'Rabat Carpet',
    icon: Award,
    origin: 'Rabat and Sale, introduced by Andalusian refugees in the 17th century',
    material: 'High-quality dyed wool on cotton warp. Machine-spun wool in some modern versions.',
    patterns: 'Central medallion surrounded by an ornate border, inspired by Ottoman and Andalusian design. More structured and symmetrical than Berber rugs. Rich reds, navies, and golds predominate.',
    texture: 'Dense, medium-length pile. Formal appearance. Heavier than Berber rugs.',
    size: 'Standard room sizes, commonly 300x200 cm',
    priceRange: 'From 3,000 MAD (small) to 15,000 MAD (large, fine weave)',
    buyingTip: 'Rabat carpets are the most "classical" Moroccan rug and appeal to buyers who prefer structured patterns over tribal abstraction. Quality varies enormously. Ask about the knot count -- a good Rabat carpet has 40,000+ knots per square meter.',
  },
  {
    name: 'Chichaoua',
    icon: Sparkles,
    origin: 'Chichaoua province, between Marrakech and Essaouira',
    material: 'Coarse wool, sometimes mixed with goat hair for durability',
    patterns: 'Bold, graphic designs with strong color contrasts. Large-scale diamond patterns, stepped pyramids, and eye motifs. Orange, red, and black dominate. Designs are simpler and bolder than Taznakht or Rabat carpets.',
    texture: 'Medium pile, robust and hard-wearing. Originally made for daily use in Berber homes, not for decoration.',
    size: 'Commonly 200x150 cm to 250x150 cm',
    priceRange: 'From 1,000 MAD (small) to 5,000 MAD (large, antique)',
    buyingTip: 'Chichaoua rugs are underrated and reasonably priced compared to Beni Ourain or Taznakht. The bold graphic style works well in contemporary interiors. Look for pieces with naturally dyed colors, which mellow beautifully over time.',
  },
] as const;

/* ===================================================================
   DATA: QUALITY TESTS
   =================================================================== */

const qualityTests = [
  {
    name: 'The Flip Test',
    icon: Layers,
    description: 'Turn the rug over. On a handmade rug, you can see the pattern on the back with slight irregularities in knot spacing. Machine-made rugs have a uniform, stamped-looking reverse with no visible individual knots. The back of a handmade rug tells the full story of how it was made.',
  },
  {
    name: 'The Burn Test',
    icon: Flame,
    description: 'Pull a single fiber from the fringe and burn it with a lighter. Real wool smells like burnt hair and crumbles into soft gray ash. Synthetic fibers melt into a hard plastic bead and produce a chemical smell. Do this test discreetly -- most sellers will not object if you explain why.',
  },
  {
    name: 'The Knot Density Check',
    icon: Grid3X3,
    description: 'Count the knots in a 10x10 cm square on the back of the rug. A basic handmade rug has 10,000-20,000 knots per square meter. A fine rug has 30,000-50,000. Premium pieces exceed 60,000. Higher density means more labor, tighter pile, sharper patterns, and a higher fair price.',
  },
  {
    name: 'The Fold Test',
    icon: Scale,
    description: 'Fold the rug back on itself along the pile. On a quality piece, the knots are tight and the base fabric does not show through. If you see large gaps between rows of knots, the rug was made quickly with fewer knots, reducing both durability and value.',
  },
  {
    name: 'The Smell Test',
    icon: Search,
    description: 'Natural wool has a faint lanolin scent -- earthy and slightly animal. Chemical dyes or synthetic fibers produce a sharp, industrial odor. A very strong chemical smell means the rug was recently treated with mothproofing or fire retardant chemicals. Ask the seller about any treatments.',
  },
  {
    name: 'The Color Test',
    icon: Palette,
    description: 'Rub a damp white cloth on a small area of the rug. Slight color transfer is normal with natural dyes and stops after a few washes. Heavy, sustained color bleeding indicates poor-quality synthetic dyes that will continue to run. Naturally dyed rugs fade gracefully over decades; cheap synthetics fade unevenly.',
  },
] as const;

/* ===================================================================
   DATA: WHERE TO BUY
   =================================================================== */

const whereToBuy = [
  {
    name: 'Women\'s Weaving Cooperatives',
    icon: Users,
    location: 'Atlas Mountains, Ouarzazate, Taznakht, Ain Leuh',
    description: 'Cooperatives employ local women weavers and pay fair wages. Prices are fixed and non-negotiable, typically 10-20% above what a skilled haggler could achieve in the souk but without the stress. You meet the weavers, see looms in action, and know exactly where your money goes. Many cooperatives offer tea and a weaving demonstration.',
    priceNote: 'Fixed prices, fair trade certified in some cases',
    bestFor: 'Ethical shoppers, travelers who dislike haggling, those wanting to meet artisans',
  },
  {
    name: 'Medina Carpet Souks',
    icon: Store,
    location: 'Marrakech (Souk des Tapis), Fes (Souk Ain Allou), Meknes, Essaouira',
    description: 'The traditional way to buy rugs. Dozens of shops stacked floor-to-ceiling with carpets. Sellers will unroll piece after piece while pouring you mint tea. Prices are always negotiable. The experience itself is part of the cultural immersion, but research and comparison shopping are essential to avoid overpaying.',
    priceNote: 'Negotiable, start at 30-40% of asking price',
    bestFor: 'Experienced travelers, bargain hunters, those who enjoy the souk experience',
  },
  {
    name: 'Ensemble Artisanal (Government Shops)',
    icon: ShieldCheck,
    location: 'Most major cities -- Marrakech, Fes, Rabat, Meknes, Essaouira',
    description: 'Government-run artisan shops with fixed prices posted on each item. Quality is curated and standardized. Prices are fair but not cheap -- typically 20-30% above cooperative prices. The advantage is zero pressure, no haggling, and a guaranteed level of authenticity. Good as a price benchmark before entering the souks.',
    priceNote: 'Fixed prices, posted on tags',
    bestFor: 'Price benchmarking, stress-free shopping, guaranteed authenticity',
  },
  {
    name: 'Auction Markets (Souk el-Ghzel)',
    icon: HandCoins,
    location: 'Marrakech (Tuesday and Thursday), Rabat, regional weekly souks',
    description: 'Wholesale carpet auctions where dealers buy from weavers and middlemen. Open to the public but conducted in Darija (Moroccan Arabic). If you speak the language or bring a trusted local, you can find rugs at 40-60% below retail. The selection is massive but chaotic, and there is no tourist infrastructure.',
    priceNote: 'Wholesale prices, 40-60% below retail',
    bestFor: 'Adventurous buyers, those with a local contact, bulk purchases',
  },
  {
    name: 'Direct from Weavers in Villages',
    icon: MapPin,
    location: 'Imilchil, Ait Bouguemez, Telouet, remote Atlas villages',
    description: 'Buying directly from the weaver in her village eliminates every middleman. Prices are the lowest you will find anywhere, and 100% of the money goes to the maker. Requires off-the-beaten-path travel, a vehicle, and some patience. Many weavers display finished rugs outside their homes or at weekly village souks.',
    priceNote: 'Lowest prices, no middlemen',
    bestFor: 'Off-grid travelers, road-trippers through the Atlas, cultural immersion seekers',
  },
] as const;

/* ===================================================================
   DATA: HAGGLING STRATEGY
   =================================================================== */

const hagglingSteps = [
  {
    step: 'Research Before You Enter',
    icon: Search,
    description: 'Visit the Ensemble Artisanal first to see fixed prices for each rug type and size. This gives you a reliable benchmark. Check online retailers like Benisouk or Dar Bouchaib Marrakech for current international market prices. Walk through 3-4 carpet shops before engaging seriously in any single one.',
  },
  {
    step: 'Let the Seller Start',
    icon: Eye,
    description: 'Never name a price first. Accept the mint tea, browse slowly, and let the seller show you pieces. When you find a rug you like, ask "how much?" The first price will be 2-3 times the fair value. This is not deception -- it is the opening move of a well-understood ritual.',
  },
  {
    step: 'Counter at 30-40% of the Ask',
    icon: DollarSign,
    description: 'Your first counter-offer should be 30-40% of their stated price. The seller will react dramatically -- laughing, shaking their head, calling it impossible. This is expected. Stay calm and friendly. The negotiation has barely started.',
  },
  {
    step: 'Trade Concessions Slowly',
    icon: Scale,
    description: 'Move up in small increments -- 50 MAD or 100 MAD at a time. Each time you raise your offer, the seller should lower theirs. If they refuse to move, you can say "that is my budget" and prepare to leave. The final price usually lands around 50-60% of the opening ask.',
  },
  {
    step: 'Use the Walk-Away',
    icon: ArrowRight,
    description: 'The most powerful tool in any negotiation. If the price is not right, thank the seller, stand up, and walk toward the door. In most cases, the seller calls you back with a lower offer. If they let you leave, the price was already fair -- or you can try another shop.',
  },
  {
    step: 'Bundle for Better Prices',
    icon: Package,
    description: 'Buying two or three rugs from the same shop gives you significant leverage. Sellers prefer larger transactions and will discount the per-rug price. Ask "what is the price for all three together?" after negotiating each piece individually.',
  },
] as const;

/* ===================================================================
   DATA: SHIPPING OPTIONS
   =================================================================== */

const shippingOptions = [
  {
    method: 'DHL / FedEx via the Shop',
    icon: Truck,
    cost: 'From 800 MAD (medium rug to Europe/North America)',
    timeframe: '5-10 business days',
    description: 'Most established carpet shops have accounts with DHL or FedEx and will handle packing and paperwork. They roll the rug tightly, wrap it in plastic and burlap, and ship it with tracking. This is the safest and fastest option. Insist on a tracking number and photograph the shipping label.',
    bestFor: 'Large rugs, valuable pieces, travelers who want guaranteed delivery',
  },
  {
    method: 'Morocco Post (Barid al-Maghrib)',
    icon: Package,
    cost: 'From 400 MAD (depending on weight and destination)',
    timeframe: '3-6 weeks',
    description: 'The national postal service is significantly cheaper than private couriers. Available at any post office in Morocco. Pack the rug yourself or ask the shop to prepare it. Tracking is available but less reliable. Good for mid-value purchases where you do not mind waiting.',
    bestFor: 'Budget shipping, medium-value rugs, patient buyers',
  },
  {
    method: 'Sea Freight / Cargo Broker',
    icon: Globe,
    cost: 'From 2,000 MAD per shipment',
    timeframe: '6-10 weeks',
    description: 'For buyers purchasing multiple rugs or very large pieces, a cargo broker arranges container shipping from Casablanca or Tangier port. Cost-effective for volume but requires customs clearance paperwork at the destination. Some Marrakech carpet dealers work with brokers and can arrange everything.',
    bestFor: 'Bulk purchases (5+ rugs), interior designers, commercial buyers',
  },
  {
    method: 'Carry in Your Luggage',
    icon: ShoppingBag,
    cost: 'Airline excess baggage fees vary (typically from 300-800 MAD)',
    timeframe: 'Immediate',
    description: 'Small rugs and kilims fold or roll into a compact bundle. Many travelers buy a large woven bag (from 30 MAD) at the souk to use as checked luggage. Airlines generally accept rug bundles as checked bags. Weigh your rug at the shop -- most are lighter than expected. Kilims and boucherouite are especially packable.',
    bestFor: 'Small to medium rugs, kilims, travelers who want their rug immediately',
  },
] as const;

/* ===================================================================
   DATA: COMMON SCAMS
   =================================================================== */

const commonScams = [
  {
    scam: 'Machine-Made Sold as Handmade',
    icon: AlertTriangle,
    description: 'Some shops sell factory-produced rugs from Turkey or China as handmade Moroccan pieces. The price is set at handmade levels while the product cost the dealer a fraction. Always use the flip test and burn test. Handmade irregularities are your friend -- perfection is suspicious.',
    prevention: 'Flip the rug, check for irregular knotting, and burn a single fiber from the fringe.',
  },
  {
    scam: 'Synthetic Dyes Marketed as Natural',
    icon: Palette,
    description: 'Natural vegetable dyes (saffron, indigo, henna, pomegranate) cost more and produce subtler, warmer tones. Some sellers claim synthetic-dyed rugs use "natural colors." Synthetic dyes tend to be unnaturally uniform and overly bright. They also fade less gracefully over time.',
    prevention: 'Rub a damp white cloth on the rug. Heavy, bright color transfer indicates synthetic dyes.',
  },
  {
    scam: 'The "Cooperative" That Is Actually a Shop',
    icon: Store,
    description: 'Some tourist-oriented shops call themselves cooperatives to suggest fair-trade pricing and a direct-to-weaver model. In reality, they are retail operations with standard markups. A real cooperative has women working on looms on-site, a member registry, and often a government cooperative registration number.',
    prevention: 'Ask to see the weavers and looms. Ask for the cooperative registration number. Check if prices are posted and fixed.',
  },
  {
    scam: 'Inflated "Antique" Claims',
    icon: Clock,
    description: 'A rug described as "100 years old" or "grandmother\'s rug" commands premium pricing. Genuine antique Moroccan rugs exist, but they are rare in tourist-facing shops. Age alone does not equal value -- a 50-year-old poorly made rug is worth less than a well-made new one.',
    prevention: 'Real antiques show specific signs: faded colors with consistent sun patterns, worn pile in high-traffic areas, and repaired edges. Ask for provenance details -- vague answers suggest a fake story.',
  },
  {
    scam: 'The Tout Markup',
    icon: Users,
    description: 'A friendly local offers to show you "the best carpet shop" or "my uncle\'s factory." The tout earns 15-30% commission on anything you buy, and that cost is built into your price. The seller and tout split the markup. You end up paying significantly above market value.',
    prevention: 'Find shops independently. Ask your riad host for recommendations. Decline offers from strangers on the street.',
  },
] as const;

/* ===================================================================
   DATA: SIZE GUIDE
   =================================================================== */

const sizeGuide = [
  { room: 'Hallway Runner', size: '300 x 80 cm', rugType: 'Kilim, Boucherouite', note: 'Flatweave kilims are ideal for hallways -- thin profile, easy to walk on, does not catch under doors' },
  { room: 'Bathroom / Bedside', size: '100 x 60 cm', rugType: 'Beni Ourain, Azilal', note: 'Small accent pieces. A plush Beni Ourain swatch makes a luxurious bedside rug' },
  { room: 'Small Bedroom', size: '200 x 150 cm', rugType: 'Azilal, Chichaoua', note: 'Place at the foot of the bed or centered under a small seating area' },
  { room: 'Living Room', size: '250 x 150 cm to 300 x 200 cm', rugType: 'Beni Ourain, Zanafi, Rabat', note: 'Should extend at least 30 cm beyond sofa front legs. Larger is usually better for living spaces' },
  { room: 'Dining Room', size: '300 x 200 cm or larger', rugType: 'Taznakht, Rabat', note: 'Must accommodate chairs pulled out from the table. Add 60 cm to table dimensions on each side' },
  { room: 'Statement Wall Hanging', size: 'Any, commonly 150 x 100 cm', rugType: 'Azilal, Boucherouite', note: 'Colorful Azilal and boucherouite rugs make striking wall art. Use a rug hanging strip, not nails' },
] as const;

/* ===================================================================
   DATA: CARE INSTRUCTIONS
   =================================================================== */

const careInstructions = [
  {
    task: 'Regular Vacuuming',
    icon: CheckCircle,
    detail: 'Vacuum weekly on a gentle setting. Turn off the beater bar or use a suction-only attachment to avoid pulling fibers. Always vacuum in the direction of the pile, not against it.',
  },
  {
    task: 'Rotate Every 6 Months',
    icon: CircleDot,
    detail: 'Rotate the rug 180 degrees twice a year to ensure even wear and sun exposure. Rugs near windows fade on the sun-facing side if not rotated. All rugs develop slight pile direction changes over time -- rotation keeps this even.',
  },
  {
    task: 'Spot Clean Spills Immediately',
    icon: AlertTriangle,
    detail: 'Blot (do not rub) spills with a clean, damp cloth. For stubborn stains, use a mild solution of white vinegar and water (1:3 ratio). Avoid harsh detergents or bleach. Test any cleaning product on a small hidden area first.',
  },
  {
    task: 'Professional Deep Clean Annually',
    icon: Sparkles,
    detail: 'Hire a rug specialist -- not a general carpet cleaner. Wool and natural-dye rugs need specific pH-neutral cleaning solutions and controlled drying. Steam cleaning can shrink wool fibers. Air drying is essential.',
  },
  {
    task: 'Moth Prevention',
    icon: ShieldCheck,
    detail: 'Wool rugs attract clothes moths, especially in storage. Place cedar blocks or lavender sachets nearby. If storing a rug long-term, wrap it in cotton (never plastic, which traps moisture) and store in a dry, ventilated space. Check stored rugs quarterly.',
  },
  {
    task: 'Use a Rug Pad',
    icon: Layers,
    detail: 'A quality rug pad extends the life of your rug, prevents slipping on hard floors, and adds cushion. Choose a natural rubber or felt pad cut to fit. Avoid pads with adhesive backing on hardwood floors.',
  },
] as const;

/* ===================================================================
   DATA: PRICE REFERENCE TABLE
   =================================================================== */

const priceReference = [
  { type: 'Boucherouite (small)', price: 'From 500 MAD', note: 'Most affordable, recycled materials' },
  { type: 'Kilim runner', price: 'From 400 MAD', note: 'Flatweave, easy transport' },
  { type: 'Kilim area rug', price: 'From 1,200 MAD', note: 'Larger flatweave, reversible' },
  { type: 'Azilal (small)', price: 'From 1,500 MAD', note: 'Colorful, unique designs' },
  { type: 'Chichaoua', price: 'From 1,000 MAD', note: 'Bold graphics, good value' },
  { type: 'Zanafi', price: 'From 1,500 MAD', note: 'Mixed flat/pile technique' },
  { type: 'Beni Ourain (small)', price: 'From 2,000 MAD', note: 'Iconic cream and brown' },
  { type: 'Beni Ourain (large)', price: 'From 5,000 MAD', note: 'Room-size, premium wool' },
  { type: 'Taznakht (fine weave)', price: 'From 2,500 MAD', note: 'High knot density' },
  { type: 'Rabat carpet', price: 'From 3,000 MAD', note: 'Classical medallion design' },
  { type: 'Antique / vintage (50+ years)', price: 'From 5,000 MAD', note: 'Verified provenance required' },
] as const;

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccoRugBuyingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
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
            <span className="text-white">Morocco Rug Buying Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <ShoppingBag className="w-4 h-4" />
            Shopping &amp; Artisan Crafts
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Rug Buying
            <br className="hidden md:block" /> Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to know before stepping into a Moroccan carpet shop.
            Rug types, quality tests, fair prices, haggling tactics, shipping,
            and how to spot fakes -- from 400 MAD flatweaves to 15,000 MAD heirloom pieces.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Moroccan Rugs Are Worth the Journey
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Moroccan rugs occupy a unique position in the global textile world. They are simultaneously
              ancient tribal artifacts, functional household objects, and highly sought-after design pieces
              that sell for thousands of dollars in European and American showrooms. A rug that costs from
              2,000 MAD in a Marrakech souk retails for $800-$2,000 in a Brooklyn or London boutique.
              Buying at the source means better prices, wider selection, and the experience of seeing
              where these textiles actually come from.
            </p>
            <p>
              Every region of Morocco produces distinct rug styles. The thick, creamy Beni Ourain from
              the Middle Atlas became a mid-century modern icon after Le Corbusier and Frank Lloyd Wright
              placed them in their interiors. The recycled-fabric Boucherouite emerged from resourcefulness
              in villages where wool was scarce. The flat-woven kilim has been a household staple across
              North Africa for millennia. Understanding these differences is the single most important
              step in making a purchase you will not regret.
            </p>
            <p>
              This guide covers the eight major Moroccan rug types, how to test quality on the spot,
              where to buy (and where to avoid), a practical haggling framework, shipping logistics,
              customs duties, common scams, and how to care for your rug once it is home. Read it before
              you walk into a carpet shop, and you will walk out with something genuinely beautiful at a
              fair price.
            </p>
          </div>
        </div>
      </section>

      {/* ── Rug Types ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Rug Types
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Eight distinct rug traditions, each tied to a specific region, tribe, and weaving technique.
            Knowing what you are looking at is the foundation of smart buying.
          </p>

          <div className="space-y-8">
            {rugTypes.map((rug) => {
              const RugIcon = rug.icon;
              return (
                <div key={rug.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RugIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {rug.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">
                        <MapPin className="w-3 h-3 inline mr-0.5" />
                        {rug.origin}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-1">Material</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rug.material}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-1">Typical Size</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rug.size}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-1">Patterns &amp; Design</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rug.patterns}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-1">Texture &amp; Feel</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rug.texture}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                      <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">{rug.priceRange}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10 mt-4">
                    <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">Buying Tip:</span> {rug.buyingTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Quality Tests ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Search className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Test Rug Quality on the Spot
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six practical tests you can perform in any carpet shop to verify
            authenticity, material, and craftsmanship before negotiating a price.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {qualityTests.map((test) => {
              const TestIcon = test.icon;
              return (
                <div key={test.name} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TestIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {test.name}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{test.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Price Reference Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fair prices after negotiation at souk shops. Cooperative and Ensemble Artisanal
            prices may be 10-30% higher. Seasonal pricing can change during peak tourist months.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/5">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Rug Type</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Fair Price</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] hidden sm:table-cell">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {priceReference.map((item) => (
                    <tr key={item.type} className="border-t border-[var(--color-accent)]/10">
                      <td className="p-4 text-[var(--text-primary)] font-medium">{item.type}</td>
                      <td className="p-4 text-[var(--color-accent)] font-semibold whitespace-nowrap">{item.price}</td>
                      <td className="p-4 text-[var(--text-secondary)] hidden sm:table-cell">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to Buy ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Store className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy Moroccan Rugs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five buying channels, each with different price levels, experiences, and trade-offs.
            The right choice depends on your budget, haggling comfort, and how much time you have.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {whereToBuy.map((place) => {
              const PlaceIcon = place.icon;
              return (
                <div key={place.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PlaceIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {place.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">
                        <MapPin className="w-3 h-3 inline mr-0.5" />
                        {place.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{place.description}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                      <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span className="text-xs font-semibold text-[var(--color-accent)]">{place.priceNote}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                      <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                      <span className="text-xs text-[var(--text-secondary)]">Best for: {place.bestFor}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Haggling Strategy ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Haggling Strategy for Rugs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Negotiation is expected in every Moroccan carpet shop. It is not aggressive or adversarial --
            it is a social ritual. Follow this framework and you will pay a fair price every time.
          </p>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
            <div className="space-y-6">
              {hagglingSteps.map((item, index) => {
                const StepIcon = item.icon;
                return (
                  <div key={item.step} className="relative flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="card-moroccan p-5 flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <StepIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.step}
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Shipping Options ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Truck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shipping Your Rug Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four ways to get your rug from Morocco to your front door, ranging
            from express courier to carrying it as checked luggage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {shippingOptions.map((option) => {
              const ShipIcon = option.icon;
              return (
                <div key={option.method} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ShipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {option.method}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{option.timeframe}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{option.description}</p>
                  <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg mb-3">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{option.cost}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span>Best for: {option.bestFor}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Customs & Duties ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Customs Duties &amp; Import Rules
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect when your rug crosses a border.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                country: 'United States',
                icon: Globe,
                allowance: '$800 duty-free per person',
                dutyRate: '5-8% on value above allowance',
                detail: 'Hand-knotted rugs (HTS code 5701) may qualify for reduced duty under the Morocco-US Free Trade Agreement. Keep your receipt and ask the shop for a commercial invoice with material description.',
              },
              {
                country: 'European Union',
                icon: Globe,
                allowance: 'Approximately 430 euros duty-free',
                dutyRate: '6-12% on value above allowance',
                detail: 'Morocco has an Association Agreement with the EU that reduces duties on handmade crafts. Declare your rug at customs with a receipt. Hand-knotted items classified as handicrafts may qualify for preferential rates.',
              },
              {
                country: 'Canada',
                icon: Globe,
                allowance: '$800 CAD duty-free (after 7+ days abroad)',
                dutyRate: '8-12% plus GST/HST on excess',
                detail: 'Canada has no specific free trade agreement with Morocco for textiles. Declare the full value. Duty applies on the amount above your personal allowance. HST is charged on the total value including duty.',
              },
              {
                country: 'Australia & New Zealand',
                icon: Globe,
                allowance: '$900 AUD / $700 NZD duty-free',
                dutyRate: '5-10% plus GST',
                detail: 'Strict biosecurity rules apply. Wool rugs must be clean and free of organic material. Declare the rug on your arrival card. Inspectors may examine it for pests. Failure to declare can result in fines.',
              },
            ].map((item) => {
              const CountryIcon = item.icon;
              return (
                <div key={item.country} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <CountryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.country}
                    </h3>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                      <span className="text-xs text-[var(--text-secondary)]">Duty-free: {item.allowance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
                      <span className="text-xs text-[var(--text-secondary)]">Duty rate: {item.dutyRate}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Common Scams ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Common Rug Scams &amp; How to Avoid Them
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Most rug sellers in Morocco are honest craftspeople and traders. But tourist-heavy
            areas attract a minority who use deceptive tactics. Know what to watch for.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {commonScams.map((item) => {
              const ScamIcon = item.icon;
              return (
                <div key={item.scam} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <ScamIcon className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {item.scam}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{item.description}</p>
                      <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                        <ShieldCheck className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        <p className="text-xs text-green-800 leading-relaxed">
                          <span className="font-semibold">Prevention:</span> {item.prevention}
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

      {/* ── Size Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Ruler className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Rug Size Guide by Room
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Measure your rooms before you travel. Bring a measuring tape to the souk --
            most sellers do not have exact dimensions listed. These are standard Moroccan rug sizes.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/5">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Room</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Size</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] hidden md:table-cell">Best Rug Type</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] hidden lg:table-cell">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeGuide.map((item) => (
                    <tr key={item.room} className="border-t border-[var(--color-accent)]/10">
                      <td className="p-4 text-[var(--text-primary)] font-medium">{item.room}</td>
                      <td className="p-4 text-[var(--color-accent)] font-semibold whitespace-nowrap">{item.size}</td>
                      <td className="p-4 text-[var(--text-secondary)] hidden md:table-cell">{item.rugType}</td>
                      <td className="p-4 text-[var(--text-secondary)] text-xs hidden lg:table-cell">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Care Instructions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Caring for Your Moroccan Rug
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A well-maintained handmade rug lasts generations. These care practices
            preserve the wool, colors, and structure of your investment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {careInstructions.map((item) => {
              const CareIcon = item.icon;
              return (
                <div key={item.task} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <CareIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.task}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions from travelers buying rugs in Morocco.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Markets & Souks',
                description: 'Navigate Moroccan souks with confidence. City-by-city souk guide, haggling tips, etiquette, and what to buy.',
                href: '/morocco-markets-souks',
                icon: Store,
              },
              {
                title: 'Berber Culture Guide',
                description: 'The Amazigh people behind Morocco\'s rug traditions. History, customs, villages, and cultural experiences.',
                href: '/morocco-berber-culture',
                icon: Users,
              },
              {
                title: 'Traditional Clothing',
                description: 'Moroccan textiles beyond rugs -- caftans, djellabas, embroidery traditions, and where to buy handmade garments.',
                href: '/morocco-traditional-clothing',
                icon: Scissors,
              },
              {
                title: 'Morocco Leather Goods',
                description: 'Buying leather in Morocco. Tannery tours, babouches, poufs, bags, quality tests, and fair prices.',
                href: '/morocco-leather-goods',
                icon: Award,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
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

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Find Your Perfect Moroccan Rug?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From Beni Ourain masterpieces to affordable kilim runners, Morocco&apos;s
            carpet tradition spans centuries and dozens of regional styles. Armed with
            this guide, you can walk into any carpet shop and buy with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marrakech" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors">
              <MapPin className="w-5 h-5" />
              Explore Marrakech
            </Link>
            <Link href="/morocco-markets-souks" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20">
              <Store className="w-5 h-5" />
              Souk Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

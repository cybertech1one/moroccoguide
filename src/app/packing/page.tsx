import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Luggage,
  FileText,
  Shield,
  ShieldCheck,
  Shirt,
  Sun,
  Moon,
  Thermometer,
  Mountain,
  Waves,
  Camera,
  Smartphone,
  Plug,
  Pill,
  Banknote,
  Lock,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Download,
  ArrowRight,
  Compass,
  Wind,
  CloudSun,
  CloudSnow,
  Snowflake,
  Droplets,
  Eye,
  Footprints,
  Watch,
  Battery,
  Wifi,
  Map,
  BookOpen,
  Backpack,
  Heart,
  Star,
  Info,
  Zap,
  Tent,
  Umbrella,
  Glasses,
  Flower2,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Packing List 2025-2026 | Complete Guide for Every Season & Activity | CityGuide',
  description:
    'The ultimate Morocco packing list. What to pack for the Sahara Desert, Atlas Mountains, coastal towns, and medinas. Seasonal clothing guides, modest dress tips, electronics (Type C/E plugs, 220V), health essentials, and downloadable checklist.',
  keywords: [
    'Morocco packing list',
    'what to pack Morocco',
    'Morocco travel essentials',
    'Morocco clothing guide',
    'Morocco modest dress',
    'Morocco plug type',
    'Morocco adapter',
    'Morocco desert packing',
    'Morocco trekking gear',
    'Morocco summer packing',
    'Morocco winter packing',
    'what to wear Morocco',
    'Morocco electronics adapter',
    'Morocco health kit',
    'Morocco travel checklist',
    'Morocco luggage tips',
    'Morocco beach packing',
    'Morocco photography gear',
  ],
  openGraph: {
    title: 'Morocco Packing List 2025-2026 - Complete Guide for Every Season | CityGuide',
    description:
      'Everything you need to pack for Morocco. Seasonal clothing, desert gear, modest dress guidelines, electronics adapters, health kit, and expert packing tips.',
    url: 'https://citytoursmorocco.com/packing',
    images: [
      {
        url: '/images/infographic-packing.webp',
        width: 1200,
        height: 630,
        alt: 'Morocco packing list infographic with essential travel items',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/packing' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  name: 'Morocco Packing List 2025-2026 | Complete Guide',
  description:
    'Comprehensive packing list for Morocco covering all seasons, activities, and regions. Includes desert gear, trekking essentials, modest dress guidelines, and electronics advice.',
  url: 'https://citytoursmorocco.com/packing',
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: 'https://citytoursmorocco.com' },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

/* ===================================================================
   ESSENTIAL DOCUMENTS DATA
   =================================================================== */

interface DocumentItem {
  item: string;
  detail: string;
  priority: 'critical' | 'important' | 'recommended';
}

const essentialDocuments: DocumentItem[] = [
  {
    item: 'Passport (valid 6+ months beyond travel dates)',
    detail:
      'Morocco requires your passport to be valid for at least 6 months from your date of entry. Many airlines will deny boarding if your passport expires sooner. Ensure you have at least 2 blank pages for entry and exit stamps.',
    priority: 'critical',
  },
  {
    item: 'Visa or visa waiver confirmation',
    detail:
      'Citizens of the US, UK, EU, Canada, Australia, and Japan receive visa-free entry for up to 90 days. Other nationalities should verify requirements with the nearest Moroccan consulate. Print your visa approval if applicable.',
    priority: 'critical',
  },
  {
    item: 'Travel insurance documents',
    detail:
      'While not legally required, travel insurance covering medical evacuation is strongly recommended. Morocco has good private hospitals in major cities (costs 500-2,000 MAD per visit) but rural areas have limited facilities. Ensure your policy covers adventure activities if you plan to trek or ride camels.',
    priority: 'critical',
  },
  {
    item: 'Photocopies of all documents',
    detail:
      'Make 2 physical photocopies of your passport, visa, insurance, and credit cards. Keep one set in your luggage and leave one at your accommodation. Also store digital scans in your email or cloud storage for access from any device.',
    priority: 'important',
  },
  {
    item: 'Flight itinerary and accommodation confirmations',
    detail:
      'Print your flight booking confirmation and first-night accommodation details. Immigration officers may ask to see proof of onward travel and accommodation. Having printed copies avoids phone-battery-related stress at border control.',
    priority: 'important',
  },
  {
    item: 'Emergency contact card',
    detail:
      'Carry a card with your country\'s embassy contact in Rabat, your travel insurance emergency number, your blood type, any allergies, and a local emergency contact. Write key information in both English and French.',
    priority: 'recommended',
  },
  {
    item: 'International Driving Permit (IDP)',
    detail:
      'Required if you plan to rent a car in Morocco. Your home driving license alone is not sufficient. Obtain an IDP from your national automobile association before departure (typically costs $15-20 USD).',
    priority: 'recommended',
  },
  {
    item: 'Vaccination records',
    detail:
      'No vaccinations are legally required for Morocco, but ensure your routine vaccinations (tetanus, hepatitis A/B) are up to date. Carry your vaccination card if you have one. COVID-19 vaccination certificates are no longer required as of 2024.',
    priority: 'recommended',
  },
];

/* ===================================================================
   CLOTHING BY SEASON DATA
   =================================================================== */

interface SeasonClothing {
  season: string;
  months: string;
  tempRange: string;
  description: string;
  essentials: string[];
  layeringTip: string;
}

const seasonalClothing: SeasonClothing[] = [
  {
    season: 'Summer',
    months: 'June - August',
    tempRange: '28-45+C (82-113F)',
    description:
      'Summers are intensely hot, especially inland. Marrakech regularly exceeds 40C, and the desert can hit 50C. Coastal cities like Essaouira and Agadir are cooler (22-28C) with ocean breezes. Lightweight, breathable fabrics are essential. Cotton and linen are your best friends.',
    essentials: [
      'Lightweight linen or cotton shirts (3-4)',
      'Loose-fitting long trousers in breathable fabric (2-3)',
      'Long-sleeved linen shirt for sun protection',
      'Wide-brimmed sun hat or scarf',
      'Comfortable walking sandals with ankle support',
      'Closed-toe breathable walking shoes',
      'Light cardigan for air-conditioned interiors',
      'Swimwear (for hotel pools and coastal areas)',
      'Lightweight cotton scarf (doubles as sun cover and modest cover)',
    ],
    layeringTip:
      'Even in summer, carry a light layer for evenings in the mountains and air-conditioned restaurants. Desert nights can drop to 15-18C, a stark contrast to 45C+ daytime temperatures.',
  },
  {
    season: 'Winter',
    months: 'December - February',
    tempRange: '8-18C (46-64F)',
    description:
      'Winters are mild on the coast and in lowland cities, but genuinely cold in the Atlas Mountains (below freezing at altitude) and surprisingly chilly in the desert at night (can reach 0-5C). Rain is common in the north. Marrakech averages 18C by day but drops to 5-8C at night. Most Moroccan buildings lack central heating.',
    essentials: [
      'Warm fleece or down jacket',
      'Waterproof outer layer or rain jacket',
      'Thermal base layers (1-2 sets)',
      'Warm trousers or jeans (2-3)',
      'Wool sweater or warm mid-layer (2)',
      'Warm socks and closed-toe waterproof shoes',
      'Warm hat, gloves, and scarf for mountains',
      'Umbrella (compact travel size)',
      'Pajamas (riads and guesthouses can be very cold at night)',
    ],
    layeringTip:
      'Layering is absolutely critical in winter. Days can be warm and sunny (18-20C) while nights plummet. Riads with tiled floors and thick walls retain cold like refrigerators. Pack warm sleepwear and request extra blankets.',
  },
  {
    season: 'Shoulder Season',
    months: 'March - May / September - November',
    tempRange: '18-30C (64-86F)',
    description:
      'The ideal time to visit Morocco. Spring brings wildflowers to the Atlas and pleasant temperatures nationwide. Autumn offers warm days, cool nights, and the date harvest in the south. You need the most versatile wardrobe during shoulder season because temperatures swing widely between morning, afternoon, and evening.',
    essentials: [
      'Mix of short-sleeve and long-sleeve shirts (4-5)',
      'Lightweight trousers (2-3) and one pair of jeans',
      'Light jacket or fleece for evenings',
      'Compact rain jacket (especially spring)',
      'Comfortable walking shoes',
      'Sandals for warm days',
      'Versatile scarf for temperature changes',
      'Sun hat for midday',
      'One smart-casual outfit for upscale restaurants',
    ],
    layeringTip:
      'The golden rule for shoulder season: dress in layers you can add or remove throughout the day. Mornings can be cool (12-15C), midday warm (25-30C), and evenings cool again. A packable down vest is the most versatile single item.',
  },
];

/* ===================================================================
   MODEST DRESS GUIDELINES
   =================================================================== */

interface ModestDressRule {
  context: string;
  guidelines: string[];
  detail: string;
}

const modestDressGuidelines: ModestDressRule[] = [
  {
    context: 'Medinas & Traditional Areas',
    guidelines: [
      'Cover shoulders and knees at minimum',
      'Avoid tight-fitting or revealing clothing',
      'Loose, flowing fabrics are ideal',
      'Long skirts or wide-leg trousers for women',
    ],
    detail:
      'The narrow alleys of medinas like Fes, Marrakech, and Meknes are conservative areas where residents live, work, and worship. Dressing modestly shows respect and also reduces unwanted attention. You do not need to wear a headscarf (it is not expected of tourists) but covering shoulders and knees is appreciated.',
  },
  {
    context: 'Mosques & Religious Sites',
    guidelines: [
      'Women should cover arms, legs, and hair',
      'Men should wear long trousers and sleeved shirts',
      'Remove shoes before entering (carry a bag for them)',
      'Most mosques in Morocco are closed to non-Muslims (Hassan II in Casablanca is the notable exception)',
    ],
    detail:
      'The Hassan II Mosque in Casablanca is the only major mosque in Morocco open to non-Muslim visitors. For the guided tour, women must cover their hair, arms, and legs. Men must wear long trousers. A lightweight scarf that can serve as a hair cover is essential for women visiting this site.',
  },
  {
    context: 'Rural & Berber Villages',
    guidelines: [
      'Dress conservatively as a sign of respect',
      'Avoid shorts above the knee',
      'Cover shoulders, especially in smaller villages',
      'Err on the side of modesty in mountain and desert communities',
    ],
    detail:
      'Rural communities, particularly in the Atlas Mountains and desert regions, tend to be more conservative than cities. Villagers are generally welcoming but appreciate visitors who dress respectfully. Women in Berber villages typically wear colorful but modest clothing, and visitors following suit demonstrates cultural sensitivity.',
  },
  {
    context: 'Beaches & Coastal Towns',
    guidelines: [
      'Bikinis and swimwear are fine at resort beaches and hotel pools',
      'Public beaches: consider modest swimwear or cover-ups',
      'Essaouira and Agadir are more relaxed than Tangier or Al Hoceima',
      'Always cover up when leaving the beach area',
    ],
    detail:
      'Beach culture varies by location. International resort beaches (Agadir, Taghazout) and hotel pools are fully Western-style. Public beaches frequented by Moroccan families are more conservative. Moroccan women often swim fully clothed. A sarong or cover-up for the walk to and from the beach is respectful and practical.',
  },
  {
    context: 'Modern Cities & Nightlife',
    guidelines: [
      'Casablanca, Rabat, and Marrakech Gueliz are more liberal',
      'Smart-casual is appropriate for upscale restaurants and clubs',
      'Young Moroccans in cities dress in contemporary Western fashion',
      'Use common sense: what you would wear in Southern Europe works',
    ],
    detail:
      'The Ville Nouvelle (new city) districts are cosmopolitan and relaxed. You will see Moroccan women in jeans, dresses, and contemporary fashion. In upscale restaurants, rooftop bars, and nightclubs in Marrakech and Casablanca, smart-casual Western attire is perfectly appropriate.',
  },
];

/* ===================================================================
   DESERT GEAR DATA
   =================================================================== */

interface GearItem {
  item: string;
  why: string;
}

const desertGear: GearItem[] = [
  {
    item: 'Lightweight, long-sleeved shirt (UPF 50+)',
    why: 'The Sahara sun is relentless. A UPF-rated long-sleeved shirt protects against sunburn while keeping you cool through moisture-wicking fabric. Temperatures regularly exceed 45C in summer.',
  },
  {
    item: 'Headscarf or shemagh (cheche)',
    why: 'The traditional Berber headwrap (cheche/tagelmust) is the most practical desert headwear. It protects against sun, sand, and wind. Your guide will likely offer to wrap one for you, but bringing your own ensures the right size. You can buy one in Merzouga or Zagora for 30-50 MAD.',
  },
  {
    item: 'Closed-toe shoes or desert boots',
    why: 'Sand reaches scorching temperatures (60C+ surface) by midday. Open sandals are impractical on dunes. Lightweight hiking boots or closed-toe shoes with ankle support protect against burns, scorpions, and the constant abrasion of sand.',
  },
  {
    item: 'Warm fleece or down jacket for nights',
    why: 'Desert temperature swings are dramatic: 45-50C during the day can drop to 5-10C at night, and near freezing in winter (December-February). This 40C+ daily swing catches many travelers off guard. A packable down jacket is the most weight-efficient warmth.',
  },
  {
    item: 'Warm sleeping layers',
    why: 'Desert camps provide blankets but they may not be enough on cold nights. Thermal leggings and a warm top for sleeping ensure comfort. In winter, temperatures inside tents can drop to 0-5C.',
  },
  {
    item: 'Sunglasses (polarized, wraparound)',
    why: 'Sand reflection intensifies UV exposure. Wraparound sunglasses prevent sand from blowing into your eyes during wind gusts. Bring a strap to secure them during camel rides.',
  },
  {
    item: 'High-SPF sunscreen (50+) and lip balm with SPF',
    why: 'UV index in the Sahara reaches extreme levels (11+). Apply SPF 50+ every 2 hours. Lips crack quickly in the dry desert air, so SPF lip balm is essential. Bring enough for your entire desert stay as there are no shops in the dunes.',
  },
  {
    item: 'Refillable water bottle (1.5-2L minimum)',
    why: 'Hydration is critical. You need 3-4 liters of water per day in the desert. Camps provide water but having your own bottle ensures access during camel treks and dune excursions. Insulated bottles keep water cool longer.',
  },
  {
    item: 'Headlamp or small flashlight',
    why: 'Desert camps have minimal lighting. A headlamp is essential for navigating to the bathroom at night, finding items in your tent, and the pre-dawn wake-up for sunrise. Red-light mode preserves night vision for stargazing.',
  },
  {
    item: 'Ziplock bags for electronics and valuables',
    why: 'Sand gets into everything. Protect your phone, camera, passport, and cash in sealed ziplock bags. Sand is especially damaging to camera lenses and charging ports.',
  },
];

/* ===================================================================
   MOUNTAIN / TREKKING GEAR DATA
   =================================================================== */

const mountainGear: GearItem[] = [
  {
    item: 'Broken-in hiking boots with ankle support',
    why: 'The Atlas Mountains have rocky, uneven terrain with loose scree. Ankle support is essential to prevent sprains on steep descents. Break in new boots at least 2-3 weeks before your trip. Trails to Toubkal summit are not technical but demand sturdy footwear.',
  },
  {
    item: 'Moisture-wicking base layers',
    why: 'Trekking generates significant body heat even in cool conditions. Synthetic or merino wool base layers wick sweat away from your skin, preventing the chill that comes from damp cotton. Merino wool also resists odor over multiple days of wear.',
  },
  {
    item: 'Insulating mid-layer (fleece or light down)',
    why: 'Temperatures drop approximately 6.5C per 1,000m of altitude gained. At Toubkal Refuge (3,207m), nights can reach -10C in winter. A quality mid-layer provides warmth during rest stops and at camp.',
  },
  {
    item: 'Waterproof/windproof outer shell',
    why: 'Mountain weather changes rapidly. Clear mornings can turn to afternoon rain or snow, especially in spring. A lightweight, packable waterproof jacket with sealed seams protects against unexpected weather without adding significant weight.',
  },
  {
    item: 'Trekking poles (collapsible)',
    why: 'Trekking poles reduce knee strain by up to 25% on steep descents. The descent from Toubkal summit is particularly hard on knees. Collapsible poles pack into your luggage. If you do not bring your own, basic poles can be rented in Imlil for 50-80 MAD per day.',
  },
  {
    item: 'Daypack (25-35L) with rain cover',
    why: 'Mules carry the main luggage on multi-day treks. Your daypack carries water, snacks, camera, rain jacket, and warm layers for summit days. A built-in rain cover protects electronics during unexpected downpours.',
  },
  {
    item: 'Sleeping bag (3-season minimum)',
    why: 'Mountain refuges provide mattresses but not sleeping bags. Refuges like Toubkal Refuge (Les Mouflons) can drop well below freezing at night. A 3-season bag rated to -5C is adequate from April to October. For winter summits, bring a 4-season bag rated to -15C or lower.',
  },
  {
    item: 'Water purification (tablets or filter)',
    why: 'Stream water in the Atlas Mountains should be treated before drinking. Iodine tablets or a portable filter like the Sawyer Squeeze are lightweight and effective. Bottled water is available in villages but creates plastic waste.',
  },
  {
    item: 'Sun protection (hat, sunglasses, sunscreen)',
    why: 'UV intensity increases 10-12% per 1,000m of altitude. At the summit of Toubkal (4,167m), UV exposure is roughly 40% stronger than at sea level. Glacier glasses or Category 3-4 sunglasses are recommended above 3,000m.',
  },
  {
    item: 'First aid kit with blister supplies',
    why: 'Blisters are the most common trekking complaint. Pack moleskin, blister plasters, antiseptic wipes, and ibuprofen. Basic first aid is limited in mountain villages. Include altitude sickness medication (acetazolamide/Diamox) if summiting Toubkal.',
  },
];

/* ===================================================================
   BEACH / COASTAL ESSENTIALS
   =================================================================== */

const beachEssentials: GearItem[] = [
  {
    item: 'Quick-dry swimwear (2 sets)',
    why: 'Atlantic winds mean wet swimwear takes longer to dry than you expect. Two sets allow rotation. Board shorts or swim trunks work for men; women should bring both bikini and a modest one-piece depending on the beach.',
  },
  {
    item: 'Rashguard or UV swim top',
    why: 'The Moroccan Atlantic coast has strong UV and offshore winds. A rashguard protects against sunburn during long surf sessions or beach days. The ocean breeze masks the intensity of the sun, leading to severe burns.',
  },
  {
    item: 'Reef shoes or water sandals',
    why: 'Rocky beaches at Essaouira, Legzira, and parts of the Mediterranean coast have sharp rocks and sea urchins. Reef shoes protect your feet in the water and on hot sand. Essential for tide pool exploration.',
  },
  {
    item: 'Beach sarong or cover-up',
    why: 'Doubles as a towel, picnic blanket, and modest cover for walking between the beach and town. At public beaches, covering up when leaving the sand shows cultural respect.',
  },
  {
    item: 'Windbreaker',
    why: 'The Atlantic coast, especially Essaouira ("City of Wind"), experiences persistent trade winds. Essaouira averages 20-30 km/h winds year-round, with gusts reaching 50 km/h. A windbreaker makes evenings comfortable.',
  },
  {
    item: 'Waterproof phone case',
    why: 'Protects your phone from sand, surf, and splashes. Useful on boat trips to the Mogador Islands, surf lessons in Taghazout, or kitesurfing in Dakhla.',
  },
  {
    item: 'Sand-free beach towel (microfiber)',
    why: 'Microfiber towels dry quickly in the ocean breeze, shake off sand easily, and pack down to a fraction of a regular towel. Essential for travelers carrying their own luggage.',
  },
  {
    item: 'Ocean-safe sunscreen (SPF 50+)',
    why: 'Reef-safe, water-resistant sunscreen protects you during water sports while minimizing ocean impact. Reapply every 80 minutes in water. The Atlantic reflection intensifies UV exposure.',
  },
];

/* ===================================================================
   TECH & ELECTRONICS DATA
   =================================================================== */

interface TechItem {
  item: string;
  detail: string;
  essential: boolean;
}

const techElectronics: TechItem[] = [
  {
    item: 'Universal travel adapter (Type C/E)',
    detail:
      'Morocco uses Type C and Type E power outlets at 220V/50Hz. Type C has two round pins; Type E adds a grounding pin hole. European-style plugs work directly. US/UK travelers need an adapter. A universal adapter with USB ports covers all scenarios. IMPORTANT: US/Japanese 110V devices without dual-voltage ratings will be damaged by Morocco\'s 220V supply.',
    essential: true,
  },
  {
    item: 'Voltage converter (if needed)',
    detail:
      'Most modern phone chargers, laptop adapters, and camera chargers are dual-voltage (100-240V) and only need a plug adapter. Check the fine print on your charger. Devices like hair dryers, curling irons, and electric razors from North America or Japan may be 110V only and require a voltage converter or could be destroyed.',
    essential: true,
  },
  {
    item: 'Portable power bank (10,000-20,000 mAh)',
    detail:
      'Essential for long bus rides (8-12 hours between cities), desert camps with no electricity, and full days exploring medinas. A 20,000 mAh bank charges a phone 4-5 times. Desert camps rarely have charging facilities. Airlines allow power banks in carry-on only.',
    essential: true,
  },
  {
    item: 'Moroccan SIM card or eSIM',
    detail:
      'Purchase a Maroc Telecom, Orange, or Inwi SIM at the airport or any telecom shop. A 20GB data plan costs approximately 100-150 MAD (about $10-15 USD). Coverage is excellent in cities and along major highways, limited in remote mountain and desert areas. eSIM options like Airalo and Holafly also work well.',
    essential: true,
  },
  {
    item: 'Offline maps (Google Maps or Maps.me)',
    detail:
      'Download offline maps for Morocco before departure. GPS works without data. Offline maps are essential for navigating medinas (Google Maps medina coverage has improved significantly), driving on rural roads, and desert tracks where there is zero signal.',
    essential: true,
  },
  {
    item: 'Headlamp or small flashlight',
    detail:
      'Power outages occur occasionally in rural areas and smaller towns. Desert camps have minimal lighting. Medina alleys are poorly lit at night. A compact headlamp (40-100 lumens) is one of the most useful items you can pack.',
    essential: true,
  },
  {
    item: 'Multi-port USB charger',
    detail:
      'Moroccan riads and hotels often have limited outlets. A multi-port USB charger lets you charge phone, power bank, camera battery, and smartwatch simultaneously from a single outlet. Saves packing multiple adapters.',
    essential: false,
  },
  {
    item: 'E-reader (Kindle/Kobo)',
    detail:
      'Long bus and train journeys, lazy riad afternoons, and desert evenings are perfect reading time. An e-reader weighs less than a single paperback and holds thousands of books. Battery lasts weeks between charges.',
    essential: false,
  },
  {
    item: 'Noise-cancelling earbuds or headphones',
    detail:
      'Moroccan cities are vibrant and noisy. The call to prayer begins at dawn. Overnight buses can be loud. Noise-cancelling earbuds improve sleep quality, long journey comfort, and let you enjoy podcasts while exploring.',
    essential: false,
  },
  {
    item: 'Waterproof Bluetooth speaker (small)',
    detail:
      'For rooftop sunsets, beach days, and desert camps. Keep volume respectful. Moroccan culture is generally music-friendly, but be mindful of your surroundings, especially near mosques and during Ramadan.',
    essential: false,
  },
];

/* ===================================================================
   HEALTH & TOILETRIES DATA
   =================================================================== */

const healthToiletries: GearItem[] = [
  {
    item: 'High-SPF sunscreen (50+)',
    why: 'Morocco receives 300+ days of sunshine per year. UV index regularly exceeds 8 (very high) in summer. Apply generously to face, ears, neck, and hands. Available locally but premium brands are expensive (150-250 MAD). Bring enough for your trip.',
  },
  {
    item: 'Prescription medications (with documentation)',
    why: 'Bring enough for your entire trip plus 7 extra days. Keep medications in original packaging with the prescription label. Carry a doctor\'s note in English and French listing your medications and dosages. Some common Western medications have different names or require a prescription in Morocco.',
  },
  {
    item: 'Anti-diarrhea medication (Imodium/loperamide)',
    why: 'Traveler\'s stomach affects roughly 30-50% of visitors in the first few days. Carry Imodium for immediate relief and oral rehydration salts (ORS packets) for hydration. Activated charcoal tablets are also popular. Moroccan pharmacies stock these but having them ready saves uncomfortable pharmacy visits.',
  },
  {
    item: 'Hand sanitizer and antibacterial wipes',
    why: 'Essential for eating street food, using public restrooms, and navigating souks where hand-washing is not always accessible. Carry a small bottle (100ml or under for carry-on) and refill from a larger bottle in your luggage.',
  },
  {
    item: 'Oral rehydration salts (ORS packets)',
    why: 'Critical for recovering from stomach issues or heat-related dehydration. The combination of heat, altitude, spicy food, and unfamiliar water makes dehydration a real concern. Pack 6-10 sachets.',
  },
  {
    item: 'Basic first aid kit',
    why: 'Include adhesive bandages, antiseptic wipes, blister plasters, tweezers, pain relief (paracetamol/ibuprofen), antihistamine cream for insect bites, and any personal medications. Pharmacies (recognizable by their green cross signs) are abundant in Moroccan cities and well-stocked.',
  },
  {
    item: 'Insect repellent (DEET 30-50%)',
    why: 'Mosquitoes are present in oasis towns, near irrigation channels, and around stagnant water, particularly in the Draa Valley, Ourika Valley, and during summer months. The Sahara itself has few mosquitoes, but palm oases do. Malaria risk is negligible in Morocco but bites are irritating.',
  },
  {
    item: 'Toilet paper or tissue packs',
    why: 'Many public restrooms, rural gas stations, and traditional restaurants provide water (bidet-style) but not toilet paper. Carry a few packs of pocket tissues. This is genuinely one of the most essential items on the list for Western travelers.',
  },
  {
    item: 'Feminine hygiene products',
    why: 'Available in Moroccan pharmacies and supermarkets (Marjane, Carrefour) but selection may be limited compared to Western countries. Tampons can be harder to find outside major cities. Bring your preferred products for the duration of your trip.',
  },
  {
    item: 'Eye drops and contact lens supplies',
    why: 'Dust, sand, and dry air irritate eyes, especially in the desert and during the Chergui (hot desert wind) season. Bring enough contact lens solution for your trip. Carry daily disposables if possible. Glasses are often more practical than contacts in dusty conditions.',
  },
  {
    item: 'Moisturizer and lip balm',
    why: 'Morocco\'s climate is drying. The desert, mountain air, and strong winds strip moisture from skin. A rich moisturizer and SPF lip balm prevent cracking and discomfort. Apply lip balm before bed, especially in the desert.',
  },
  {
    item: 'Small padlock for hostel lockers',
    why: 'If staying in hostels or budget riads with shared rooms, a small combination padlock secures your belongings in lockers. Also useful for securing zippers on your daypack in crowded souks.',
  },
];

/* ===================================================================
   MONEY & SECURITY DATA
   =================================================================== */

const moneySecurity: GearItem[] = [
  {
    item: 'Money belt or hidden neck pouch',
    why: 'Carry your passport, cash reserve, and backup credit card under your clothing. Medinas are safe but crowded, and pickpocketing does occur. A flat money belt under your shirt is invisible and gives peace of mind in busy souks.',
  },
  {
    item: 'Two different bank/credit cards',
    why: 'ATMs occasionally eat cards, or a bank may block your card for suspected fraud. Having two cards from different banks (ideally Visa and Mastercard) ensures you always have access to funds. Notify both banks of your travel dates before departure.',
  },
  {
    item: 'Small amount of Moroccan Dirhams (MAD) in cash',
    why: 'Exchange a small amount ($50-100 equivalent) at the airport for taxis, tips, and initial purchases. Airport exchange rates are reasonable in Morocco. ATMs at the airport offer better rates. Cash is king in medinas, souks, and rural areas. Many small businesses do not accept cards.',
  },
  {
    item: 'Small bills and coins for tips and small purchases',
    why: 'Morocco has a tipping culture. Carry 5, 10, and 20 MAD notes for cafe tips (2-5 MAD), hotel porters (10-20 MAD), tour guides (50-100 MAD per person), and parking attendants (2-5 MAD). Breaking large notes (200 MAD) can be difficult at small shops.',
  },
  {
    item: 'Photocopy of credit cards (front and back)',
    why: 'If your cards are lost or stolen, having copies of the numbers and the bank\'s international phone numbers allows you to cancel and replace them quickly. Store copies separately from the originals.',
  },
  {
    item: 'Zippered day bag or anti-theft crossbody',
    why: 'A bag with zippered compartments and slash-resistant straps deters opportunistic theft in crowded areas. Crossbody bags worn in front are safer than shoulder bags or backpacks in souks. Avoid bags that are easy to open from behind.',
  },
  {
    item: 'Dummy wallet',
    why: 'Some experienced travelers carry a cheap wallet with a small amount of cash (50-100 MAD) and expired cards. In the extremely unlikely event of a robbery, you hand over the dummy wallet while your real valuables are hidden.',
  },
];

/* ===================================================================
   PHOTOGRAPHY GEAR DATA
   =================================================================== */

const photographyGear: GearItem[] = [
  {
    item: 'Camera with wide-angle and portrait lenses',
    why: 'Morocco is extraordinarily photogenic. A wide-angle lens (16-35mm) captures the vastness of the Sahara, the intricate geometry of medina architecture, and sweeping mountain panoramas. A portrait lens (50-85mm) is ideal for market scenes and cultural portraits (always ask permission first).',
  },
  {
    item: 'Extra memory cards (bring more than you think)',
    why: 'You will take more photos in Morocco than you expect. Between the vibrant souks, desert sunrises, blue streets of Chefchaouen, and mountain vistas, 64GB fills quickly. Bring at least 128GB total. Memory cards are expensive and hard to find in Morocco.',
  },
  {
    item: 'Extra batteries and charger',
    why: 'Cold desert nights drain batteries faster. Long days of shooting deplete reserves quickly. Desert camps have no electricity for charging. Carry at least 2 spare batteries and charge everything overnight when you have power.',
  },
  {
    item: 'Lens cleaning kit and microfiber cloths',
    why: 'Sand, dust, and fingerprints are constant threats to your lenses in Morocco. A rocket blower, lens pen, and microfiber cloth should be cleaned daily. The Sahara sand is extremely fine and abrasive. Clean your lens before every shot in the desert.',
  },
  {
    item: 'Lightweight tripod or GorillaPod',
    why: 'Essential for desert night photography and stargazing shots. The Sahara offers some of the clearest skies on Earth with zero light pollution. A tripod also enables long-exposure shots of the blue hour in Chefchaouen and the bustling Jemaa el-Fnaa at night.',
  },
  {
    item: 'Camera rain cover and dust protection',
    why: 'Sand storms (though rare) and fine desert dust can destroy camera electronics. A simple plastic rain cover or even a ziplock bag over your camera body provides protection during windy conditions and camel rides.',
  },
  {
    item: 'Drone (with DGAC authorization)',
    why: 'Drone flights in Morocco require prior authorization from the DGAC (Direction Generale de l\'Aviation Civile). Flying without permission is illegal and equipment can be confiscated at customs. Apply at least 30 days before travel. Drones are prohibited near military installations, royal palaces, and government buildings.',
  },
  {
    item: 'Smartphone with a good camera',
    why: 'Modern smartphones are sufficient for most travel photography. They are lighter, less conspicuous, and easier to share instantly. The best camera is the one you have with you. Morocco\'s vibrant colors look stunning even on phone cameras.',
  },
];

/* ===================================================================
   SEASONAL PACKING CARDS DATA
   =================================================================== */

interface SeasonalPackList {
  season: string;
  icon: React.ReactNode;
  months: string;
  weather: string;
  colorAccent: string;
  mustHave: string[];
  optional: string[];
  doNotForget: string;
}

const seasonalPackLists: SeasonalPackList[] = [
  {
    season: 'Spring',
    icon: <Flower2 className="w-6 h-6" />,
    months: 'March - May',
    weather: 'Mild days (18-28C), cool nights, occasional rain in north',
    colorAccent: '#4CAF50',
    mustHave: [
      'Layers: t-shirts + light fleece + rain jacket',
      'Comfortable walking shoes (broken-in)',
      'Sun hat and sunglasses',
      'SPF 50 sunscreen',
      'Light scarf for mosque visits',
      'Allergy medication (pollen season in April)',
    ],
    optional: [
      'Binoculars for birdwatching (spring migration)',
      'Wildflower field guide',
      'Waterproof hiking boots for Atlas treks',
    ],
    doNotForget: 'Rain jacket. Spring rains in northern Morocco can be sudden and heavy. Chefchaouen and Fes see the most rain.',
  },
  {
    season: 'Summer',
    icon: <Sun className="w-6 h-6" />,
    months: 'June - August',
    weather: 'Hot to extreme (30-48C inland, 22-28C coast)',
    colorAccent: '#FF9800',
    mustHave: [
      'Lightweight, breathable clothing (linen/cotton)',
      'Wide-brimmed hat or UV-protective cap',
      'Refillable insulated water bottle',
      'High-SPF reef-safe sunscreen',
      'Electrolyte packets for hydration',
      'Light, loose long sleeves for sun protection',
    ],
    optional: [
      'Portable fan (battery or USB)',
      'Cooling towel',
      'Surfboard wax (Taghazout surf season)',
    ],
    doNotForget: 'Electrolyte packets. Heat exhaustion is a real risk in Marrakech and the desert. Carry ORS sachets and drink constantly even when not thirsty.',
  },
  {
    season: 'Autumn',
    icon: <Wind className="w-6 h-6" />,
    months: 'September - November',
    weather: 'Warm days (20-32C), cooling nights, low rainfall',
    colorAccent: '#A0522D',
    mustHave: [
      'Versatile layers (short-sleeve + long-sleeve + jacket)',
      'Comfortable walking shoes and sandals',
      'Warm fleece for desert nights',
      'Camera with extra batteries',
      'Sunscreen and sun hat',
      'Modest clothing for medina visits',
    ],
    optional: [
      'Binoculars for Saharan birdwatching',
      'Trekking gear for Atlas hikes (peak season)',
      'Smart-casual outfit for Marrakech dining',
    ],
    doNotForget: 'Warm layers for the desert. October-November desert nights drop to 8-12C. Many travelers only pack for hot days and freeze at night.',
  },
  {
    season: 'Winter',
    icon: <Snowflake className="w-6 h-6" />,
    months: 'December - February',
    weather: 'Cool (8-18C), cold mountains (below 0C), rainy north',
    colorAccent: '#2196F3',
    mustHave: [
      'Warm down or fleece jacket',
      'Waterproof outer shell',
      'Thermal base layers (top and bottom)',
      'Warm hat, scarf, and gloves',
      'Waterproof closed-toe shoes or boots',
      'Warm pajamas (riads lack heating)',
    ],
    optional: [
      'Crampons/microspikes for Atlas snow treks',
      'Hot water bottle (ask your riad)',
      'Thermal flask for hot drinks on the go',
    ],
    doNotForget: 'Warm pajamas and socks. Moroccan riads are beautiful but COLD in winter. Tiled floors, thick stone walls, and no central heating mean indoor temperatures can feel like 10-12C at night.',
  },
];

/* ===================================================================
   WHAT NOT TO BRING
   =================================================================== */

interface DoNotBringItem {
  item: string;
  reason: string;
}

const doNotBring: DoNotBringItem[] = [
  {
    item: 'Excessive valuables or jewelry',
    reason: 'Flashy jewelry and expensive watches attract unwanted attention in medinas and crowded areas. Leave designer items at home. Morocco is a casual travel destination where simplicity is practical and respectful.',
  },
  {
    item: 'Revealing clothing only',
    reason: 'Packing only tank tops, short shorts, and crop tops limits where you can go comfortably. You will feel out of place in medinas, be denied entry to mosques, and attract persistent unwanted attention. Bring modest options.',
  },
  {
    item: 'Too many shoes',
    reason: 'Three pairs maximum: comfortable walking shoes, sandals, and one dressy/activity-specific pair. Shoes are heavy and bulky. You can buy quality leather sandals and babouches (Moroccan slippers) in souks for 100-300 MAD.',
  },
  {
    item: 'Drone without DGAC authorization',
    reason: 'Unauthorized drones are confiscated at customs. Moroccan authorities actively enforce drone regulations. The authorization process takes 30+ days and requires detailed flight plans. Flying illegally can result in equipment confiscation and fines.',
  },
  {
    item: 'Single-use plastics in bulk',
    reason: 'Morocco banned single-use plastic bags in 2016 (the "Zero Mika" campaign). Bring reusable shopping bags, water bottles, and containers. While enforcement is imperfect, supporting the initiative is respectful.',
  },
  {
    item: 'Camouflage or military-pattern clothing',
    reason: 'Military-style clothing can cause issues with security forces, especially near borders, military zones, and government buildings. Some countries\' customs confiscate camo items entirely. Stick to civilian outdoor gear.',
  },
  {
    item: 'Alcohol in large quantities',
    reason: 'Morocco allows importation of 1 bottle of spirits and 1 bottle of wine duty-free. Morocco is a Muslim-majority country and while alcohol is available in licensed restaurants, bars, and supermarkets (Carrefour, Acima), public drunkenness is illegal and deeply disrespectful.',
  },
  {
    item: 'Israeli-marked items or Israeli passport stamps',
    reason: 'Following the normalization of relations between Morocco and Israel in 2020, direct flights operate between the countries and Israeli tourists visit regularly. However, be aware that political sensitivities exist. Moroccan customs will not refuse entry, but discretion is advisable.',
  },
  {
    item: 'Excessive amounts of cash',
    reason: 'Importing or exporting more than 2,000 MAD is technically illegal. Bringing large amounts of foreign currency (over $10,000 USD equivalent) must be declared at customs. ATMs are widely available in cities. Carry what you need, not your life savings.',
  },
  {
    item: 'Hair straighteners/curlers without checking voltage',
    reason: 'Morocco uses 220V. Plugging a 110V hair appliance into a 220V outlet without a converter will fry the device immediately, possibly causing sparks or fire. Either buy a dual-voltage device or leave it at home.',
  },
];

/* ===================================================================
   PRO TIPS DATA
   =================================================================== */

interface ProTip {
  tip: string;
  detail: string;
}

const proTips: ProTip[] = [
  {
    tip: 'Roll, don\'t fold',
    detail: 'Rolling clothes saves 20-30% more space than folding and reduces wrinkles. Use packing cubes to organize by type (tops, bottoms, underwear) or by day. Compression bags are useful for bulky items like jackets.',
  },
  {
    tip: 'Pack a "Day One" bag in your carry-on',
    detail: 'If your checked luggage is delayed (it happens), having a change of clothes, toiletries, medication, phone charger, and travel documents in your carry-on means you can function for 24-48 hours. This bag should include anything you cannot buy easily in Morocco.',
  },
  {
    tip: 'Buy a Moroccan scarf on arrival',
    detail: 'A large cotton or pashmina scarf purchased in Morocco (50-150 MAD) is the single most versatile item. It serves as a sun shield, mosque cover, blanket on buses, beach wrap, pillow on trains, and fashion accessory. Available everywhere.',
  },
  {
    tip: 'Leave room for souvenirs',
    detail: 'Morocco is a shopper\'s paradise. Leather goods, ceramics, textiles, argan oil, spices, and carpets are irresistible. Pack your suitcase only 70-80% full on departure. Alternatively, bring a collapsible duffel bag for overflow.',
  },
  {
    tip: 'Dress in layers, always',
    detail: 'Morocco\'s temperature swings are among the most dramatic in the world. A single day can span 30C+ of temperature change (desert summer: 50C day to 15C night). Layering with a base, mid, and outer layer lets you adapt to any conditions.',
  },
  {
    tip: 'Carry a doorstop for extra security',
    detail: 'A simple rubber doorstop wedged under your door provides an extra layer of security in budget accommodations where locks may be unreliable. Lightweight, cheap, and surprisingly effective peace of mind.',
  },
  {
    tip: 'Pack your own toilet paper',
    detail: 'This cannot be overstated. Carry a small supply of toilet paper or tissue packs at all times. Many traditional restaurants, public restrooms, and rural areas use water (bidet-style) instead. It is one of the most frequently cited "wish I\'d known" items.',
  },
  {
    tip: 'Bring a French/Arabic phrasebook or app',
    detail: 'Download Google Translate\'s French and Arabic offline packs before arrival. Basic French goes a long way everywhere. A few Arabic phrases (Salaam, Shukran, La shukran) earn genuine warmth from locals. Amazigh/Berber phrases are appreciated in rural areas.',
  },
  {
    tip: 'Use packing cubes religiously',
    detail: 'Packing cubes transform a chaotic suitcase into an organized system. Color-code by category. They make packing and unpacking at multiple hotels effortless and keep dirty clothes separate from clean.',
  },
  {
    tip: 'Test everything before you leave',
    detail: 'Charge your power bank. Test your adapter with your devices. Break in your hiking boots. Try on your outfit combinations. Confirm your medications are not expired. Last-minute discoveries at your destination are stressful and expensive to fix.',
  },
  {
    tip: 'Bring a few small gifts from home',
    detail: 'Small gifts like postcards from your city, candy, pens for children, or small souvenirs from home are wonderful icebreakers with Moroccan hosts, guides, and families you may visit. Gifts are a meaningful part of Moroccan hospitality culture.',
  },
  {
    tip: 'Pack a reusable water bottle with a filter',
    detail: 'Tap water in Morocco is chlorinated and technically safe in major cities, but most travelers (and locals) drink bottled water. A bottle with a built-in filter (like LifeStraw Go) reduces plastic waste and saves money over a long trip.',
  },
];

/* ===================================================================
   RELATED PAGES
   =================================================================== */

const relatedPages = [
  {
    title: 'Best Time to Visit Morocco',
    description: 'Seasonal weather guide to help you plan the perfect trip and know exactly what to pack.',
    href: '/best-time',
  },
  {
    title: 'Safety in Morocco',
    description: 'Stay safe with scam awareness, emergency contacts, and practical security advice.',
    href: '/safety',
  },
  {
    title: 'Sahara Desert Guide',
    description: 'Complete desert planning with camp reviews, camel treks, and what to bring.',
    href: '/desert',
  },
  {
    title: 'Trekking & Hiking Guide',
    description: 'Atlas Mountains trails, Toubkal summit, packing lists, and guide hiring.',
    href: '/trekking',
  },
  {
    title: 'Culture & Etiquette',
    description: 'Dress codes, tipping customs, Ramadan rules, and cultural dos and don\'ts.',
    href: '/etiquette',
  },
  {
    title: 'Health Guide',
    description: 'Vaccinations, pharmacies, water safety, and medical facilities across Morocco.',
    href: '/health',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function PackingListPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/infographic-packing.webp"
            alt="Morocco packing list infographic showing essential travel items for desert, mountains, and cities"
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
            <span className="text-white">Packing List</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Travel Preparation
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Packing List
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              The complete, season-by-season guide to packing for Morocco. From Sahara Desert nights at 5&deg;C to medina afternoons at 45&deg;C, this list ensures you are prepared for every climate, culture, and adventure.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          QUICK OVERVIEW STATS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Packing for Morocco: What You Need to Know
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">
            <p>
              Morocco is a country of extremes. In a single trip, you might experience the scorching heat of the Sahara, the freezing altitude of the Atlas Mountains, the persistent winds of the Atlantic coast, and the humid warmth of a traditional hammam. Your packing list needs to account for all of it.
            </p>
            <p>
              The key to packing for Morocco is versatility. Lightweight layers that can be added or removed throughout the day, modest clothing that respects local culture, and practical items for the specific activities you have planned. Whether you are a backpacker living out of a 40L pack or a luxury traveler with a full suitcase, this guide covers exactly what you need.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="card-moroccan p-4 text-center">
              <div className="inline-flex p-2 rounded-full bg-[#A0522D]/10 mb-2">
                <Thermometer className="w-5 h-5 text-[#A0522D]" />
              </div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">5-50&deg;C</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Temperature Range</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="inline-flex p-2 rounded-full bg-[#C4960C]/10 mb-2">
                <Plug className="w-5 h-5 text-[#C4960C]" />
              </div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">220V</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Type C/E Plugs</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="inline-flex p-2 rounded-full bg-[#A0522D]/10 mb-2">
                <Sun className="w-5 h-5 text-[#A0522D]" />
              </div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">300+</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Sunny Days/Year</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="inline-flex p-2 rounded-full bg-[#C4960C]/10 mb-2">
                <Shirt className="w-5 h-5 text-[#C4960C]" />
              </div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">Modest</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Dress Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ESSENTIAL DOCUMENTS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10">
              <FileText className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Essential Documents
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-3xl font-[family-name:var(--font-body)]">
            These are the non-negotiable items. Without them, your trip either does not happen or becomes significantly more stressful. Double-check each item the night before departure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {essentialDocuments.map((doc) => (
              <div key={doc.item} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div
                    className="shrink-0 mt-0.5"
                    style={{
                      color:
                        doc.priority === 'critical'
                          ? '#DC2626'
                          : doc.priority === 'important'
                            ? '#C4960C'
                            : '#A0522D',
                    }}
                  >
                    {doc.priority === 'critical' ? (
                      <AlertTriangle className="w-5 h-5" />
                    ) : doc.priority === 'important' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Info className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">
                        {doc.item}
                      </h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          backgroundColor:
                            doc.priority === 'critical'
                              ? '#DC262615'
                              : doc.priority === 'important'
                                ? '#C4960C15'
                                : '#A0522D15',
                          color:
                            doc.priority === 'critical'
                              ? '#DC2626'
                              : doc.priority === 'important'
                                ? '#C4960C'
                                : '#A0522D',
                        }}
                      >
                        {doc.priority}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                      {doc.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOTHING BY SEASON
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#C4960C]/10">
              <Shirt className="w-6 h-6 text-[#C4960C]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Clothing by Season
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-3xl font-[family-name:var(--font-body)]">
            Morocco&apos;s climate varies dramatically by season and region. What you pack in August for Marrakech would leave you shivering in January. Here is a detailed breakdown for each season.
          </p>
          <div className="space-y-8">
            {seasonalClothing.map((sc) => (
              <div key={sc.season} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {sc.season}
                    </h3>
                    <p className="text-[#A0522D] font-[family-name:var(--font-heading)] font-medium mt-1">
                      {sc.months} &middot; {sc.tempRange}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {sc.season === 'Summer' && <Sun className="w-8 h-8 text-[#C4960C]" />}
                    {sc.season === 'Winter' && <CloudSnow className="w-8 h-8 text-[#2196F3]" />}
                    {sc.season === 'Shoulder Season' && <CloudSun className="w-8 h-8 text-[#A0522D]" />}
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] mb-6 font-[family-name:var(--font-body)] leading-relaxed">
                  {sc.description}
                </p>
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3">
                  Essential Items
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {sc.essentials.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                      <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#C4960C]/5 border border-[#C4960C]/20 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-[#C4960C] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm mb-1">
                        Layering Tip
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                        {sc.layeringTip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MODEST DRESS GUIDELINES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10">
              <Eye className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Modest Dress Guidelines
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-4 max-w-3xl font-[family-name:var(--font-body)]">
            Morocco is a Muslim-majority country with a generally moderate and tolerant approach to dress. You are not required to wear a headscarf (even as a woman), but dressing modestly in traditional areas shows respect and significantly improves your experience by reducing unwanted attention.
          </p>
          <div className="card-moroccan p-5 mb-8 border-l-4" style={{ borderLeftColor: '#C4960C' }}>
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[#C4960C] shrink-0 mt-0.5" />
              <p className="text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                <strong className="text-[var(--text-primary)]">The simple rule:</strong> If your shoulders and knees are covered with loose-fitting clothing, you will be appropriately dressed for 95% of situations in Morocco. This applies to all genders.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modestDressGuidelines.map((rule) => (
              <div key={rule.context} className="card-moroccan p-5 h-full">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-lg mb-3">
                  {rule.context}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 font-[family-name:var(--font-body)] leading-relaxed">
                  {rule.detail}
                </p>
                <ul className="space-y-2">
                  {rule.guidelines.map((g) => (
                    <li key={g} className="flex items-start gap-2 text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                      <CheckCircle className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          DESERT-SPECIFIC GEAR
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#C4960C]/10">
              <Sun className="w-6 h-6 text-[#C4960C]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Desert-Specific Gear
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-4 max-w-3xl font-[family-name:var(--font-body)]">
            The Sahara Desert is one of the most extreme environments on Earth. Temperatures can swing from 50&deg;C during the day to 5&deg;C at night &mdash; a 45-degree swing in just 12 hours. Sand infiltrates everything. The sun is unrelenting. Pack specifically for these conditions.
          </p>
          <div className="card-moroccan p-5 mb-8 border-l-4" style={{ borderLeftColor: '#DC2626' }}>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
              <p className="text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                <strong className="text-[var(--text-primary)]">Critical warning:</strong> The single most common mistake desert travelers make is packing only for hot weather. Desert nights are genuinely cold, especially October through March. Hypothermia is a real risk if you are underprepared for nighttime temperatures.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {desertGear.map((item) => (
              <div key={item.item} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#C4960C] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">
                      {item.item}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MOUNTAIN / TREKKING GEAR
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10">
              <Mountain className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Mountain &amp; Trekking Gear
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-4 max-w-3xl font-[family-name:var(--font-body)]">
            The Atlas Mountains offer some of North Africa&apos;s finest trekking, from the 4,167m summit of Mount Toubkal to multi-day traverses through Berber villages. Mountain conditions demand proper gear &mdash; temperatures drop 6.5&deg;C per 1,000m of elevation, and weather changes rapidly.
          </p>
          <div className="card-moroccan p-5 mb-8 border-l-4" style={{ borderLeftColor: '#A0522D' }}>
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#A0522D] shrink-0 mt-0.5" />
              <p className="text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                <strong className="text-[var(--text-primary)]">Mule support:</strong> On most multi-day Atlas treks, mules carry your main baggage between camps. You only need to carry a daypack with water, snacks, rain gear, and camera. This means you can pack proper mountain gear without worrying about carrying it all yourself.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mountainGear.map((item) => (
              <div key={item.item} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Mountain className="w-5 h-5 text-[#A0522D] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">
                      {item.item}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BEACH / COASTAL ESSENTIALS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#2196F3]/10">
              <Waves className="w-6 h-6 text-[#2196F3]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Beach &amp; Coastal Essentials
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-3xl font-[family-name:var(--font-body)]">
            Morocco&apos;s 3,500 km coastline spans the Atlantic and Mediterranean, offering everything from world-class surf at Taghazout to tranquil Mediterranean coves near Al Hoceima. The Atlantic coast is windy and has strong currents; the Mediterranean is calmer and warmer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {beachEssentials.map((item) => (
              <div key={item.item} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Waves className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">
                      {item.item}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TECH & ELECTRONICS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#C4960C]/10">
              <Smartphone className="w-6 h-6 text-[#C4960C]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Tech &amp; Electronics
            </h2>
          </div>

          {/* Plug type info box */}
          <div className="card-moroccan p-6 mb-8" style={{ borderLeft: '4px solid #C4960C' }}>
            <div className="flex items-start gap-4">
              <Plug className="w-8 h-8 text-[#C4960C] shrink-0" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-lg mb-2">
                  Morocco Power: Type C/E Plugs, 220V / 50Hz
                </h3>
                <p className="text-[var(--text-secondary)] font-[family-name:var(--font-body)] mb-3">
                  Morocco uses the same plug types as mainland Europe. <strong>Type C</strong> (two round pins, ungrounded) and <strong>Type E</strong> (two round pins with a grounding hole) are standard throughout the country. The voltage is <strong>220V at 50Hz</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                    <p className="font-semibold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                      US / Canada / Japan
                    </p>
                    <p className="text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                      Need adapter + possibly converter. Your 110V-only devices will be damaged.
                    </p>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                    <p className="font-semibold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                      UK / Ireland
                    </p>
                    <p className="text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                      Need plug adapter only (UK Type G to Type C/E). Voltage is compatible.
                    </p>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                    <p className="font-semibold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                      EU / Europe
                    </p>
                    <p className="text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                      No adapter needed. Your European plugs work directly in Morocco.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techElectronics.map((item) => (
              <div key={item.item} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5">
                    {item.essential ? (
                      <Zap className="w-5 h-5 text-[#C4960C]" />
                    ) : (
                      <Smartphone className="w-5 h-5 text-[var(--text-tertiary)]" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">
                        {item.item}
                      </h3>
                      {item.essential && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-[#C4960C]/10 text-[#C4960C]">
                          essential
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HEALTH & TOILETRIES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#DC2626]/10">
              <Pill className="w-6 h-6 text-[#DC2626]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Health &amp; Toiletries
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-4 max-w-3xl font-[family-name:var(--font-body)]">
            Morocco has an excellent pharmacy network (look for the green cross sign) in cities, and pharmacists are often knowledgeable and can provide advice. However, carrying your own health supplies ensures you are prepared, especially when traveling to remote desert or mountain areas far from pharmacies.
          </p>
          <div className="card-moroccan p-5 mb-8 border-l-4" style={{ borderLeftColor: '#4CAF50' }}>
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-[#4CAF50] shrink-0 mt-0.5" />
              <p className="text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                <strong className="text-[var(--text-primary)]">Good news:</strong> Moroccan pharmacies are well-stocked and medications are significantly cheaper than in Europe or North America. Pharmacists can dispense many medications (antibiotics, anti-inflammatory drugs) without a prescription. Look for the green cross sign &mdash; there is at least one on every main street.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {healthToiletries.map((item) => (
              <div key={item.item} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">
                      {item.item}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MONEY & SECURITY
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#C4960C]/10">
              <Banknote className="w-6 h-6 text-[#C4960C]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Money &amp; Security
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-4 max-w-3xl font-[family-name:var(--font-body)]">
            The Moroccan Dirham (MAD) is a closed currency, meaning you cannot buy it before arriving in Morocco and cannot take more than 2,000 MAD out when you leave. Cash is still the primary payment method in souks, small restaurants, and rural areas, though card acceptance is growing in cities.
          </p>

          {/* Currency quick info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card-moroccan p-4 text-center">
              <p className="text-xl font-bold text-[var(--text-primary)]">MAD</p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Moroccan Dirham</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <p className="text-xl font-bold text-[var(--text-primary)]">~10 MAD</p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">= 1 USD (approx.)</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <p className="text-xl font-bold text-[var(--text-primary)]">~11 MAD</p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">= 1 EUR (approx.)</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <p className="text-xl font-bold text-[var(--text-primary)]">Cash</p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Still King in Souks</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moneySecurity.map((item) => (
              <div key={item.item} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#C4960C] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">
                      {item.item}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PHOTOGRAPHY GEAR
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10">
              <Camera className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Photography Gear
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-4 max-w-3xl font-[family-name:var(--font-body)]">
            Morocco is one of the most photogenic countries on Earth. The golden light, vibrant colors, stunning architecture, and diverse landscapes make it a photographer&apos;s dream. Here is what to bring to capture it all.
          </p>
          <div className="card-moroccan p-5 mb-8 border-l-4" style={{ borderLeftColor: '#A0522D' }}>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#A0522D] shrink-0 mt-0.5" />
              <p className="text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                <strong className="text-[var(--text-primary)]">Photography etiquette:</strong> Always ask permission before photographing people in Morocco. Many Moroccans, especially in rural areas, do not want to be photographed. Some may request a small tip (5-10 MAD). Never photograph military installations, police, or government buildings. Street performers and henna artists in Jemaa el-Fnaa will demand payment if you photograph them.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {photographyGear.map((item) => (
              <div key={item.item} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-[#A0522D] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">
                      {item.item}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SEASONAL PACKING CARDS (INTERACTIVE)
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#C4960C]/10">
              <CloudSun className="w-6 h-6 text-[#C4960C]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Quick Seasonal Packing Cards
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-3xl font-[family-name:var(--font-body)]">
            Traveling in a specific season? These at-a-glance cards give you the essential packing priorities for each time of year.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalPackLists.map((sp) => (
              <div
                key={sp.season}
                className="card-moroccan p-6 h-full"
                style={{ borderTop: `4px solid ${sp.colorAccent}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="inline-flex p-2 rounded-lg"
                    style={{ backgroundColor: `${sp.colorAccent}15` }}
                  >
                    <span style={{ color: sp.colorAccent }}>{sp.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-xl">
                      {sp.season}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                      {sp.months}
                    </p>
                  </div>
                </div>
                <div
                  className="text-sm px-3 py-1.5 rounded-full inline-block mb-4 font-[family-name:var(--font-heading)]"
                  style={{ backgroundColor: `${sp.colorAccent}10`, color: sp.colorAccent }}
                >
                  {sp.weather}
                </div>

                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm uppercase tracking-wider mb-3">
                  Must-Have Items
                </h4>
                <ul className="space-y-2 mb-5">
                  {sp.mustHave.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: sp.colorAccent }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm uppercase tracking-wider mb-3">
                  Nice to Have
                </h4>
                <ul className="space-y-2 mb-5">
                  {sp.optional.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-tertiary)] font-[family-name:var(--font-body)]">
                      <Star className="w-4 h-4 text-[var(--text-tertiary)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="rounded-lg p-3 text-sm"
                  style={{ backgroundColor: `${sp.colorAccent}08`, borderLeft: `3px solid ${sp.colorAccent}` }}
                >
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: sp.colorAccent }} />
                    <div>
                      <strong className="text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                        Don&apos;t Forget:
                      </strong>{' '}
                      <span className="text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                        {sp.doNotForget}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT NOT TO BRING
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#DC2626]/10">
              <XCircle className="w-6 h-6 text-[#DC2626]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              What NOT to Bring
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-3xl font-[family-name:var(--font-body)]">
            Knowing what to leave at home is just as important as knowing what to pack. These items are either prohibited, impractical, or will cause problems during your Morocco trip.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {doNotBring.map((item) => (
              <div key={item.item} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">
                      {item.item}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                      {item.reason}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PRO TIPS FROM EXPERIENCED TRAVELERS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10">
              <Lightbulb className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Pro Tips from Experienced Morocco Travelers
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-3xl font-[family-name:var(--font-body)]">
            These tips come from travelers who have visited Morocco multiple times and learned through experience. Each one addresses a common pain point or overlooked detail.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {proTips.map((tip, index) => (
              <div key={tip.tip} className="card-moroccan p-5 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold"
                    style={{
                      backgroundColor: '#A0522D15',
                      color: '#A0522D',
                    }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">
                    {tip.tip}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                  {tip.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          DOWNLOADABLE CHECKLIST CTA
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl">
          <div
            className="card-moroccan p-8 md:p-12 text-center"
            style={{
              background: 'linear-gradient(135deg, #1A1814 0%, #2D2820 100%)',
            }}
          >
            <div className="inline-flex p-4 rounded-full bg-[#C4960C]/20 mb-6">
              <Download className="w-8 h-8 text-[#C4960C]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
              Download Your Morocco Packing Checklist
            </h2>
            <p className="text-lg text-white/75 mb-8 max-w-xl mx-auto font-[family-name:var(--font-body)]">
              Get a printable PDF checklist with every item on this page, organized by category. Check items off as you pack to ensure nothing is forgotten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/downloads/morocco-packing-checklist.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold font-[family-name:var(--font-heading)] transition-all"
                style={{ backgroundColor: '#C4960C' }}
              >
                <Download className="w-5 h-5" />
                Download PDF Checklist
              </a>
              <a
                href="/downloads/morocco-packing-checklist-editable.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold font-[family-name:var(--font-heading)] transition-all border border-white/20 text-white/80 hover:text-white hover:border-white/40"
              >
                <FileText className="w-5 h-5" />
                Editable Version
              </a>
            </div>
            <p className="text-xs text-white/40 mt-4 font-[family-name:var(--font-body)]">
              Free download. No email required. Updated for 2025-2026.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          PACKING WEIGHT GUIDELINES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10">
              <Luggage className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Luggage &amp; Weight Guidelines
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 h-full">
              <div className="inline-flex p-3 rounded-lg bg-[#A0522D]/10 mb-4">
                <Backpack className="w-6 h-6 text-[#A0522D]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-lg mb-2">
                Backpackers
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] mb-3">
                40-55L backpack. Aim for 8-12 kg total. Morocco is manageable with carry-on only if you pack smart. Medina streets are narrow and uneven &mdash; rolling luggage is impractical.
              </p>
              <ul className="space-y-1 text-xs text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                <li className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#A0522D]" />
                  <span>Backpack with rain cover</span>
                </li>
                <li className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#A0522D]" />
                  <span>Packing cubes for organization</span>
                </li>
                <li className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#A0522D]" />
                  <span>Small daypack for daily use</span>
                </li>
              </ul>
            </div>
            <div className="card-moroccan p-6 h-full">
              <div className="inline-flex p-3 rounded-lg bg-[#C4960C]/10 mb-4">
                <Luggage className="w-6 h-6 text-[#C4960C]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-lg mb-2">
                Standard Travelers
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] mb-3">
                Medium suitcase (23 kg checked) + carry-on daypack. This is the sweet spot for most visitors. Enough room for varied clothing and souvenirs on the way back.
              </p>
              <ul className="space-y-1 text-xs text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                <li className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#C4960C]" />
                  <span>Soft-sided case for flexibility</span>
                </li>
                <li className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#C4960C]" />
                  <span>Pack 70-80% full for souvenirs</span>
                </li>
                <li className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#C4960C]" />
                  <span>Collapsible duffel as overflow</span>
                </li>
              </ul>
            </div>
            <div className="card-moroccan p-6 h-full">
              <div className="inline-flex p-3 rounded-lg bg-[#2196F3]/10 mb-4">
                <Tent className="w-6 h-6 text-[#2196F3]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-lg mb-2">
                Adventure Travelers
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] mb-3">
                60-70L expedition pack + daypack. For multi-day treks, desert expeditions, or camping. Mules carry main packs on Atlas treks, so weight distribution matters more than total weight.
              </p>
              <ul className="space-y-1 text-xs text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                <li className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#2196F3]" />
                  <span>Waterproof duffel for mule transport</span>
                </li>
                <li className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#2196F3]" />
                  <span>Daypack with hydration sleeve</span>
                </li>
                <li className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#2196F3]" />
                  <span>Dry bags for desert protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED PAGES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[#C4960C]/10">
              <BookOpen className="w-6 h-6 text-[#C4960C]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Continue Planning Your Trip
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-3xl font-[family-name:var(--font-body)]">
            Now that you know what to pack, explore these related guides to complete your Morocco trip preparation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-5 group hover:shadow-lg transition-all duration-200 h-full flex flex-col"
              >
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] group-hover:text-[#A0522D] transition-colors mb-2">
                  {page.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] font-[family-name:var(--font-body)] flex-1">
                  {page.description}
                </p>
                <div className="flex items-center gap-1 mt-3 text-sm text-[#A0522D] font-[family-name:var(--font-heading)] font-medium">
                  Read guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL PACKING REMINDER
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <div className="inline-flex p-4 rounded-full bg-[#A0522D]/10 mb-6">
            <Shield className="w-8 h-8 text-[#A0522D]" />
          </div>
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            The Golden Rule of Packing for Morocco
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-6 font-[family-name:var(--font-body)] leading-relaxed">
            When in doubt, pack layers and leave space. Morocco&apos;s temperature swings, from scorching desert days to freezing mountain nights, demand versatile clothing. And leave 20-30% of your luggage empty for the carpets, leather goods, ceramics, and spices you will inevitably want to bring home.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="card-moroccan p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-[#4CAF50]" />
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm">
                  Always Pack
                </h4>
              </div>
              <p className="text-xs text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                Layers, sunscreen, comfortable walking shoes, modest clothing, adapter, power bank, toilet paper, and hand sanitizer.
              </p>
            </div>
            <div className="card-moroccan p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-[#C4960C]" />
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm">
                  Buy There
                </h4>
              </div>
              <p className="text-xs text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                Scarves, babouches (slippers), cotton clothing, basic toiletries, snacks, bottled water, and cheche headwraps for the desert.
              </p>
            </div>
            <div className="card-moroccan p-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-[#DC2626]" />
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm">
                  Leave Home
                </h4>
              </div>
              <p className="text-xs text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                Expensive jewelry, too many shoes, non-dual-voltage appliances, unauthorized drones, camo clothing, and excessive cash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Planning Guides */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Travel Planning Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/what-to-wear-in-morocco', title: 'What to Wear in Morocco', desc: 'Detailed dress code guide for mosques, medinas, beaches, and the desert.' },
              { href: '/morocco-trip-cost', title: 'Trip Cost Breakdown', desc: 'Budget for your trip — daily costs for accommodation, food, and transport.' },
              { href: '/morocco-sim-card', title: 'SIM Card & Data Guide', desc: 'Stay connected with the cheapest mobile data plans in Morocco.' },
              { href: '/morocco-travel-insurance', title: 'Travel Insurance', desc: 'Best insurance options covering health, theft, and trip cancellation.' },
              { href: '/weather', title: 'Weather by Region', desc: 'Temperatures and rainfall across Morocco — plan your wardrobe accordingly.' },
              { href: '/morocco-tipping-guide', title: 'Tipping Guide', desc: 'How much to tip in Morocco — restaurants, hotels, guides, and more.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

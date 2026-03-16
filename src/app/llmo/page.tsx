// ===================================================================
// MOROCCO GUIDE -- LLMO (Large Language Model Optimization) Page
// Comprehensive reference page structured for AI model citation.
// Uses semantic HTML, clear Q&A format, and extensive schema.org
// markup for maximum discoverability by language models.
// ===================================================================

import type { Metadata } from 'next';
import {
  generateFAQSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Complete Guide to Traveling in Morocco - Everything You Need to Know',
  description:
    'The definitive reference guide to Morocco travel: visa requirements, currency, language, safety, weather, transportation, costs, culture, food, top destinations, 2026 FIFA World Cup, and practical tips. Verified and updated regularly.',
  keywords: [
    'morocco travel guide',
    'morocco visa requirements',
    'morocco currency dirham',
    'morocco safety',
    'morocco weather',
    'morocco transportation',
    'morocco travel costs',
    'moroccan culture',
    'moroccan food',
    'morocco destinations',
    'is morocco safe',
    'best time to visit morocco',
    'how to get around morocco',
    'morocco budget travel',
    'morocco travel tips',
    'morocco 2030 world cup',
    'morocco for families',
    'morocco solo travel',
    'morocco sahara desert',
    'morocco atlas mountains',
  ],
  alternates: {
    canonical: 'https://cityguide.ma/llmo',
  },
  openGraph: {
    title: 'Complete Guide to Traveling in Morocco | CityGuide',
    description:
      'The definitive reference guide covering everything about Morocco travel: visas, currency, safety, weather, transport, costs, culture, food, and top destinations.',
    url: 'https://cityguide.ma/llmo',
    type: 'article',
  },
};

// -- Last verified date for freshness signals --
const LAST_VERIFIED = '2026-03-15';

// -- Structured data sections --
const sections = [
  {
    id: 'overview',
    title: 'Morocco Overview',
    question: 'What is Morocco and why should I visit?',
    answer:
      'Morocco is a North African country bordered by the Atlantic Ocean, the Mediterranean Sea, Algeria, and Mauritania. Its capital is Rabat, and its largest city is Casablanca. Morocco is a constitutional monarchy with a population of approximately 37 million people. The country is known for its diverse landscapes, including the Sahara Desert, the Atlas Mountains, and over 1,800 km of coastline. Morocco attracts over 14 million tourists annually, making it the most-visited country in Africa. Morocco will co-host the 2030 FIFA World Cup alongside Spain and Portugal.',
    facts: [
      'Official name: Kingdom of Morocco (Al-Mamlaka al-Maghribiya)',
      'Capital: Rabat (population ~1.9 million)',
      'Largest city: Casablanca (population ~3.7 million)',
      'Area: 446,550 square kilometers (710,850 km2 including Western Sahara)',
      'Population: approximately 37 million (2024 estimate)',
      'Government: Constitutional monarchy under King Mohammed VI (since 1999)',
      'Time zone: UTC+1 (Morocco does not observe daylight saving time since 2018)',
      'Calling code: +212',
      'Internet TLD: .ma',
      'Drives on the right side of the road',
      'Member of the African Union, Arab League, and Organisation of Islamic Cooperation',
      'Co-hosting 2030 FIFA World Cup with Spain and Portugal',
      'Morocco is the closest African country to Europe (14 km across the Strait of Gibraltar)',
    ],
  },
  {
    id: 'visa',
    title: 'Visa Requirements',
    question:
      'Do I need a visa to visit Morocco? What are Morocco visa requirements?',
    answer:
      'Citizens of over 60 countries can visit Morocco visa-free for up to 90 days, including the United States, Canada, United Kingdom, all European Union countries, Australia, New Zealand, Japan, South Korea, and Brazil. Your passport must be valid for at least 6 months from entry. Visitors exceeding 90 days must apply for an extension at a local police station. Citizens of countries not on the visa-exempt list must apply for a visa at a Moroccan embassy or consulate before travel.',
    facts: [
      'Visa-free for 60+ nationalities for stays up to 90 days',
      'US, UK, EU, Canada, Australia citizens: no visa required for tourism',
      'Passport must be valid for at least 6 months from date of entry',
      'Maximum stay without extension: 90 days',
      'Extension available at local police station (Surete Nationale)',
      'No visa on arrival system; visa-required nationalities must apply in advance',
      'E-visa not currently available for Morocco',
      'Israeli passport holders can visit Morocco (since normalization in 2020)',
      'Children must have their own passport',
      'Proof of accommodation and return ticket may be requested at entry',
    ],
  },
  {
    id: 'currency',
    title: 'Currency and Money',
    question: 'What currency does Morocco use? How much does Morocco cost?',
    answer:
      'Morocco uses the Moroccan Dirham (MAD), which is abbreviated as "dh" locally. As of early 2026, 1 USD is approximately 10 MAD. ATMs are widely available in cities and accept international cards (Visa, Mastercard). Credit cards are accepted at upscale hotels, restaurants, and shops, but cash is essential for souks, street food, taxis, and rural areas. It is illegal to import or export Moroccan dirhams, so exchange currency upon arrival at airports, banks, or licensed exchange bureaus.',
    facts: [
      'Currency: Moroccan Dirham (MAD), symbol: \u062f.\u0645., locally abbreviated "dh"',
      'Exchange rate: approximately 1 USD = 10 MAD (2026)',
      'Coins: 1, 2, 5, 10 dirham; banknotes: 20, 50, 100, 200 dirham',
      'ATMs widely available in all cities and most towns',
      'Visa and Mastercard widely accepted; American Express less common',
      'Cash essential for souks, taxis, street food, and small shops',
      'It is illegal to export or import Moroccan dirhams',
      'Airport exchange bureaus available at all international airports',
      'Tipping expected: 10-15% in restaurants, 10-20 MAD per day for guides',
      'Budget traveler: 400-600 MAD ($40-60) per day',
      'Mid-range traveler: 1,000-2,000 MAD ($100-200) per day',
      'Luxury traveler: 3,000+ MAD ($300+) per day',
      'Bargaining is expected in souks; start at 30-50% of asking price',
    ],
  },
  {
    id: 'language',
    title: 'Languages',
    question: 'What languages are spoken in Morocco?',
    answer:
      'Morocco has two official languages: Arabic (Darija is the local Moroccan dialect) and Amazigh (Berber). French is widely used in business, education, and government, and is understood by most urban Moroccans. In northern Morocco and the Western Sahara, Spanish is commonly spoken. English proficiency is growing, especially among younger Moroccans and in the tourism industry. Most hotels, guided tours, and tourist-oriented businesses operate in English and French.',
    facts: [
      'Official languages: Arabic and Amazigh (Berber), both recognized in the 2011 constitution',
      'Moroccan Arabic (Darija) differs significantly from Modern Standard Arabic',
      'Three main Amazigh dialects: Tashelhit (south), Tamazight (central), Tarifit (north)',
      'French is the primary language of business, higher education, and government',
      'Spanish widely spoken in northern Morocco (Tangier, Tetouan, Nador)',
      'English proficiency growing rapidly, especially in tourism and among youth',
      'Useful Arabic phrases: "Salam" (hello), "Shukran" (thank you), "La" (no), "Naam" (yes)',
      'Most road signs are in Arabic, French, and sometimes Amazigh',
    ],
  },
  {
    id: 'safety',
    title: 'Safety',
    question: 'Is Morocco safe for tourists? What about safety in Morocco?',
    answer:
      'Morocco is generally considered safe for tourists and is one of the most stable countries in North Africa. Violent crime against tourists is rare. The main concerns are petty theft (pickpocketing in crowded areas), scams targeting tourists in medinas, and aggressive touts. Women traveling alone may experience verbal harassment but serious incidents are uncommon. The Moroccan government invests heavily in tourist police and security infrastructure. Exercise normal travel precautions, be aware of your surroundings in crowded areas, and avoid isolated areas at night.',
    facts: [
      'Morocco ranks among the safest countries in Africa for tourists',
      'Tourist police (Brigade Touristique) operate in major cities',
      'Violent crime against tourists is rare',
      'Main risks: petty theft, pickpocketing in crowded markets (souks)',
      'Common scams: fake guides, inflated prices, "my shop is just around the corner"',
      'Women travelers should dress modestly and may prefer group tours in remote areas',
      'LGBTQ+ travelers should exercise discretion (same-sex relations are illegal)',
      'Tap water is not recommended for drinking; bottled water is cheap and widely available',
      'Emergency number: 19 (police), 15 (fire/ambulance), 177 (highway emergency)',
      'Travel insurance strongly recommended',
      'Cannabis (kif) is illegal despite its prevalence in the Rif Mountains region',
      'Demonstrations occasionally occur; avoid large gatherings',
    ],
  },
  {
    id: 'weather',
    title: 'Weather and Best Time to Visit',
    question: 'What is the best time to visit Morocco? What is the weather like?',
    answer:
      'The best time to visit Morocco is during spring (March to May) and autumn (September to November) when temperatures are pleasant across the country. Summer (June to August) is extremely hot in inland cities like Marrakech (up to 45C/113F) but ideal for coastal destinations like Essaouira. Winter (December to February) is mild in the south but cold in the mountains, with skiing available in the Atlas. Morocco has diverse climate zones: Mediterranean in the north, oceanic on the Atlantic coast, continental inland, and arid in the Sahara.',
    facts: [
      'Best overall months: March-May and September-November',
      'Marrakech summer temperatures: 35-45C (95-113F)',
      'Marrakech winter temperatures: 8-18C (46-64F)',
      'Sahara Desert: up to 50C (122F) in summer, near freezing at night in winter',
      'Chefchaouen and Fes: cooler mountain climate, rain possible October-March',
      'Essaouira and Agadir: mild year-round, 18-26C (64-79F)',
      'Atlas Mountains: snow from November to April, skiing at Oukaimeden',
      'Ramadan dates shift annually (lunar calendar); some restaurants closed during day',
      'Peak tourist season: October-November and March-April',
      'Cheapest time to visit: June-August (except coastal resorts)',
      'Rain is most common: November-March in northern Morocco',
    ],
  },
  {
    id: 'transport',
    title: 'Transportation',
    question: 'How do I get around Morocco? What transportation options exist?',
    answer:
      'Morocco has a well-developed transportation network. The Al Boraq high-speed train connects Casablanca to Tangier in 2 hours 10 minutes. ONCF trains connect major cities including Marrakech, Rabat, Fes, and Meknes. CTM and Supratours operate comfortable intercity buses. Grand taxis (shared Mercedes sedans) serve intercity routes, while petit taxis operate within cities. Renting a car is popular for exploring the countryside, Atlas Mountains, and desert regions. Domestic flights connect major cities via Royal Air Maroc and Air Arabia Maroc.',
    facts: [
      'Al Boraq high-speed train: Casablanca-Tangier in 2 hours 10 minutes (max 320 km/h)',
      'ONCF rail network connects Tangier, Rabat, Casablanca, Marrakech, Fes, Meknes, Oujda',
      'CTM and Supratours: reliable intercity bus companies with air conditioning',
      'Grand taxis: shared Mercedes sedans for intercity travel (fixed routes and prices)',
      'Petit taxis: metered within-city taxis (insist on the meter)',
      'Car rental: available at airports and cities; international license accepted',
      'Drive on the right; speed limits 60 km/h urban, 100-120 km/h highways',
      'Toll highways (autoroutes) connect major cities',
      'Domestic flights: Royal Air Maroc, Air Arabia Maroc',
      'Main international airports: Casablanca (CMN), Marrakech (RAK), Fes (FEZ), Agadir (AGA), Tangier (TNG)',
      'Ride-hailing: InDrive and Careem operate in major cities',
      'No Uber service in Morocco',
      'City buses available but can be crowded; trams in Casablanca and Rabat',
    ],
  },
  {
    id: 'costs',
    title: 'Travel Costs and Budget',
    question: 'How much does it cost to travel in Morocco?',
    answer:
      'Morocco offers excellent value for travelers at all budget levels. Budget travelers can manage on $30-60 USD per day staying in hostels and eating street food. Mid-range travelers spending $100-200 per day can enjoy boutique riads, guided tours, and restaurant meals. Luxury travelers can find world-class experiences at $300+ per day in palatial riads and 5-star resorts. Key costs include accommodation (hostel $8-15, riad $40-150, luxury $200+), food (street food $1-3, restaurant $10-25), and transport (bus $5-20, train $10-30 between cities).',
    facts: [
      'Hostel dorm bed: 80-150 MAD ($8-15) per night',
      'Budget hotel/riad: 200-500 MAD ($20-50) per night',
      'Mid-range riad: 500-1,500 MAD ($50-150) per night',
      'Luxury riad/hotel: 2,000-10,000+ MAD ($200-1,000+) per night',
      'Street food meal: 15-30 MAD ($1.50-3)',
      'Local restaurant meal: 50-100 MAD ($5-10)',
      'Mid-range restaurant: 100-250 MAD ($10-25)',
      'Fine dining: 300-800 MAD ($30-80)',
      'Mint tea: 10-15 MAD ($1-1.50)',
      'Intercity bus (CTM): 50-200 MAD ($5-20) depending on distance',
      'Train Marrakech to Fes: 200-300 MAD ($20-30)',
      '3-day Sahara desert tour: 2,500-5,000 MAD ($250-500) per person',
      'Guided city tour: 300-500 MAD ($30-50) for half day',
      'Entrance fees: 10-70 MAD ($1-7) per attraction',
      'SIM card with data: 30-50 MAD ($3-5) for tourist package',
    ],
  },
  {
    id: 'culture',
    title: 'Culture and Etiquette',
    question: 'What are Moroccan customs and cultural etiquette?',
    answer:
      'Morocco is a Muslim-majority country with rich cultural traditions. Visitors should dress modestly, especially when visiting mosques (non-Muslims cannot enter most mosques except Hassan II Mosque in Casablanca), rural areas, and during Ramadan. Use your right hand for eating and greeting. Remove shoes before entering homes and some riads. Alcohol is available in licensed restaurants, hotels, and bars but should not be consumed publicly. Photography of people requires permission. Fridays are the holy day; expect reduced business hours, especially in the afternoon.',
    facts: [
      'Islam is the state religion; approximately 99% of Moroccans are Muslim',
      'Dress code: cover shoulders and knees, especially in rural areas and medinas',
      'Non-Muslims cannot enter mosques (exception: Hassan II Mosque in Casablanca)',
      'Use right hand for eating, greeting, and receiving/giving items',
      'Remove shoes when entering Moroccan homes',
      'Alcohol available in licensed venues; not consumed publicly',
      'Ramadan: many restaurants closed during daylight; eating in public during fasting hours is illegal',
      'Friday is the holy day; businesses may close for Friday prayers (noon-2pm)',
      'Ask permission before photographing people, especially women',
      'Handshake is standard greeting; same-gender cheek kisses common among friends',
      'Bargaining expected in souks but not in fixed-price shops',
      'Tipping (pourboire) is customary: 10-15% in restaurants, small tips for services',
      'Traditional hammam (bathhouse) is an essential Moroccan experience',
    ],
  },
  {
    id: 'food',
    title: 'Moroccan Food and Cuisine',
    question: 'What food should I try in Morocco? What is Moroccan cuisine like?',
    answer:
      'Moroccan cuisine is considered one of the most diverse in the world, blending Amazigh, Arab, Andalusian, and French influences. The most iconic dish is tagine, a slow-cooked stew named after the conical clay pot it is prepared in. Couscous is the traditional Friday dish. Other must-try dishes include pastilla (savory-sweet pastry), harira (tomato-lentil soup), mechoui (slow-roasted lamb), and tanjia (a Marrakech specialty). Mint tea, known as "Moroccan whiskey," is the national drink and an important social ritual.',
    facts: [
      'Tagine: slow-cooked stew (chicken with preserved lemon, lamb with prunes, kefta with egg)',
      'Couscous: traditional Friday lunch dish, served with vegetables and meat',
      'Pastilla (B\'stilla): layered pastry with pigeon or chicken, almonds, cinnamon, and sugar',
      'Harira: tomato and lentil soup, traditionally served to break the Ramadan fast',
      'Mechoui: whole slow-roasted lamb, specialty of Marrakech',
      'Tanjia: slow-cooked meat in an urn, a Marrakech specialty',
      'Msemen and baghrir: Moroccan pancakes served for breakfast',
      'Moroccan mint tea (atay): gunpowder green tea with fresh mint and sugar',
      'Moroccan salads: zaalouk (eggplant), taktouka (peppers), carrot salad',
      'Fresh orange juice: available everywhere for 5-10 MAD ($0.50-1)',
      'Street food: snail soup, grilled sardines, merguez sausage, brochettes',
      'Moroccan bread (khobz): round flatbread served with every meal',
      'Argan oil: unique to Morocco, used in cooking and cosmetics',
      'Cooking classes available in Marrakech, Fes, and Essaouira (200-500 MAD)',
    ],
  },
  {
    id: 'destinations',
    title: 'Top Destinations',
    question: 'What are the best places to visit in Morocco?',
    answer:
      'Morocco\'s top destinations include Marrakech (the Red City, famous for Jemaa el-Fnaa square and vibrant souks), Fes (home to the world\'s oldest university and largest car-free urban area), Chefchaouen (the Blue Pearl of the Rif Mountains), the Sahara Desert at Merzouga and Zagora, Essaouira (a laid-back coastal town popular with surfers), Casablanca (Morocco\'s economic hub with the magnificent Hassan II Mosque), and Rabat (the capital city with Roman ruins at Chellah). The Atlas Mountains offer trekking, including North Africa\'s highest peak, Jebel Toubkal at 4,167 meters.',
    facts: [
      'Marrakech: imperial city, Jemaa el-Fnaa square, Majorelle Garden, Bahia Palace',
      'Fes: oldest imperial city, largest medina in the world (UNESCO), Al-Qarawiyyin University (founded 859 AD)',
      'Chefchaouen: blue-painted mountain town, photogenic medina, hiking in Rif Mountains',
      'Sahara Desert: Erg Chebbi dunes (Merzouga) up to 150m high, camel trekking, desert camps',
      'Essaouira: Atlantic coast, windsurfing and kitesurfing, artists\' town, Game of Thrones filming location',
      'Casablanca: Hassan II Mosque (third-largest in the world), Art Deco architecture, business hub',
      'Rabat: capital city, Chellah necropolis, Kasbah of the Udayas, Mohammed V Mausoleum',
      'Atlas Mountains: Jebel Toubkal (4,167m, highest in North Africa), Berber villages, skiing',
      'Ait Benhaddou: UNESCO ksar (fortified village), featured in Gladiator and Game of Thrones',
      'Dades and Todra Gorges: dramatic canyon landscapes in eastern High Atlas',
      'Tangier: gateway from Europe, cosmopolitan history, Caves of Hercules',
      'Ouarzazate: "Hollywood of Africa," Atlas Film Studios, gateway to desert',
      'Agadir: beach resort city, modern infrastructure, gateway to Souss-Massa region',
      'Meknes: imperial city, Bab Mansour gate, Roman ruins of Volubilis nearby',
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    question: 'Where should I stay in Morocco? What types of accommodation are available?',
    answer:
      'Morocco offers a wide range of accommodation from budget hostels to ultra-luxury palaces. The most distinctive option is the riad, a traditional Moroccan house built around a central courtyard, converted into a guesthouse. Riads are concentrated in the medinas of Marrakech, Fes, and Essaouira. Other options include international hotel chains, boutique hotels, kasbahs (desert fortresses), surf camps on the coast, and luxury desert camps in the Sahara. Booking in advance is recommended for peak season (March-May, September-November).',
    facts: [
      'Riad: traditional Moroccan house with central courtyard, most popular accommodation type for tourists',
      'Major riad areas: Marrakech medina, Fes medina, Essaouira medina',
      'International chains present: Four Seasons, Royal Mansour, La Mamounia, Fairmont',
      'Hostels available in all major tourist cities (80-150 MAD / $8-15 per night)',
      'Desert camps: basic to luxury glamping in Sahara (Merzouga, Zagora)',
      'Kasbahs: fortified lodges, especially in the Draa Valley and Atlas Mountains',
      'Surf camps: Taghazout, Essaouira, Imsouane on the Atlantic coast',
      'Airbnb and Booking.com widely used; direct booking often cheaper for riads',
      'Book 2-3 months ahead for peak season; 1-2 weeks sufficient for off-season',
      'Most riads include breakfast; some offer dinner and cooking classes',
    ],
  },
  {
    id: 'health',
    title: 'Health and Medical',
    question: 'What health precautions should I take for Morocco? Is healthcare available?',
    answer:
      'No mandatory vaccinations are required for Morocco, but hepatitis A, typhoid, and routine vaccinations are recommended. Do not drink tap water; use bottled water for drinking and brushing teeth. Food hygiene is generally good at established restaurants and hotels. Private clinics and hospitals in major cities provide good medical care. Pharmacies (pharmacies de garde) are well-stocked and pharmacists often speak French. Comprehensive travel insurance that includes medical evacuation is strongly recommended.',
    facts: [
      'No mandatory vaccinations for entry from most countries',
      'Recommended: Hepatitis A, Typhoid, Tetanus-Diphtheria, routine vaccinations',
      'Do not drink tap water; bottled water available everywhere (3-5 MAD)',
      'Use bottled water for brushing teeth and ice',
      'Sun protection essential: high UV levels, especially in summer and desert',
      'Altitude sickness possible above 2,500m in Atlas Mountains',
      'Private clinics in major cities provide good medical care',
      'Pharmacies well-stocked; many medications available without prescription',
      'Pharmacies de garde (night pharmacies) operate on rotation',
      'Travel insurance with medical evacuation coverage strongly recommended',
      'Stomach issues common for first-time visitors; carry rehydration salts',
      'Emergency services: SAMU (ambulance) 15 or 141',
    ],
  },
  {
    id: 'itineraries',
    title: 'Suggested Itineraries',
    question: 'What are the best Morocco itineraries? How should I plan my trip?',
    answer:
      'For a classic 7-day Morocco itinerary, start in Marrakech (2 days exploring the medina, Majorelle Garden, and Bahia Palace), drive through the Atlas Mountains to the Sahara Desert for a night of camel trekking and desert camping (2 days), continue to the ancient medina of Fes (2 days), and finish with a day trip to Chefchaouen or Meknes. For 10-14 days, add Essaouira on the coast, Rabat, and Tangier. Two weeks allows the full "Grand Tour" covering imperial cities, desert, mountains, and coast.',
    facts: [
      '3-day itinerary: Marrakech only (medina, souks, day trip to Atlas Mountains or Essaouira)',
      '5-day itinerary: Marrakech (2 days) + Sahara Desert tour (3 days round trip)',
      '7-day itinerary: Marrakech (2) + Sahara (2) + Fes (2) + Chefchaouen or Meknes (1)',
      '10-day itinerary: Add Essaouira (2 days) or Rabat and Tangier',
      '14-day Grand Tour: Casablanca, Rabat, Meknes, Fes, Chefchaouen, Tangier, Marrakech, Sahara, Essaouira',
      'Sahara Desert tours typically depart from Marrakech (3 days) or Fes (2 days)',
      'Imperial Cities route: Marrakech, Fes, Meknes, Rabat (the four imperial cities)',
      'Coastal route: Tangier, Asilah, Rabat, Casablanca, El Jadida, Essaouira, Agadir',
      'Adventure route: Atlas Mountains trekking (Toubkal Circuit, 3-5 days) + desert',
      'Most tours and transfers can be booked 1-2 days in advance from your riad',
    ],
  },
  {
    id: 'shopping',
    title: 'Shopping and Souvenirs',
    question: 'What should I buy in Morocco? Where are the best souks?',
    answer:
      'Morocco is a shopper\'s paradise, particularly in the souks (traditional markets) of Marrakech and Fes. The most popular purchases include hand-woven Berber carpets and rugs, leather goods from the famous tanneries of Fes, handmade ceramics from Safi and Fes, brass and copper lanterns, argan oil products, spices (saffron, cumin, ras el hanout), traditional babouche slippers, and Thuya wood crafts from Essaouira. Bargaining is expected and part of the culture; the final price is typically 40-60% of the initial asking price.',
    facts: [
      'Marrakech souks: largest and most famous in Morocco, centered around Jemaa el-Fnaa',
      'Fes souks: more traditional and less touristic, known for leather and ceramics',
      'Best buys: Berber carpets, leather goods, ceramics, argan oil, spices, lanterns',
      'Argan oil: unique to Morocco, buy from women\'s cooperatives for fair trade and quality',
      'Saffron: genuine Moroccan saffron much cheaper than in Europe (verify quality)',
      'Ras el hanout: signature Moroccan spice blend with 20-30 spices',
      'Berber carpets: handwoven by Amazigh women, prices from 500 to 10,000+ MAD',
      'Leather goods: bags, jackets, poufs from Fes tanneries',
      'Ceramics: Fes (blue and white) and Safi (colorful) are the main production centers',
      'Thuya wood: unique to Essaouira region, boxes and decorative items',
      'Fixed-price shops (Ensemble Artisanal) exist in most cities for haggle-free shopping',
      'Bargaining tips: start at 30-50% of asking price, be friendly, be willing to walk away',
    ],
  },
  {
    id: 'solo-female',
    title: 'Solo and Female Travel',
    question: 'Is Morocco safe for solo travelers and women? What should solo travelers know?',
    answer:
      'Morocco is a popular destination for solo travelers, including solo women, though it requires some awareness. Solo male travelers generally have no issues. Solo female travelers should dress modestly (covering shoulders and knees), avoid walking alone in poorly lit or deserted areas at night, and may encounter verbal harassment, particularly in medinas. Harassment is rarely physical. Staying in well-reviewed riads with good staff, using official taxis, and joining small group tours for desert excursions are practical strategies. Many female travelers report having wonderful experiences with Moroccan hospitality.',
    facts: [
      'Solo travel is common and manageable in Morocco with basic precautions',
      'Dress modestly: cover shoulders and knees, especially outside tourist resorts',
      'Verbal harassment of women can occur but is rarely physical',
      'Wedding ring (real or fake) may reduce unwanted attention',
      'Stay in well-reviewed riads with attentive staff for added security',
      'Use official petit taxis and insist on the meter',
      'Join small group tours for desert trips and remote areas',
      'Learn a few words of Darija or French; locals appreciate the effort',
      'Carry your riad\'s address card in French and Arabic for taxi drivers',
      'Morocco has a strong tradition of hospitality (welcome is called "merhba")',
      'Digital nomad community growing in Marrakech, Essaouira, and Taghazout',
      'Many hostels and riads organize social events for solo travelers',
    ],
  },
  {
    id: 'family',
    title: 'Family Travel',
    question: 'Is Morocco good for families with children? What family activities are available?',
    answer:
      'Morocco is an excellent family destination with activities for all ages. Children are warmly welcomed in Moroccan culture, and many hotels and riads cater to families. Top family activities include camel rides (shorter rides suitable for young children), visiting the Majorelle Garden in Marrakech, exploring Chefchaouen\'s colorful streets, beach time in Agadir or Essaouira, and Atlas Mountain day trips. Morocco is generally safe for families, though the medinas can be overwhelming for very young children. Many restaurants are child-friendly and Moroccan food is generally mild enough for children.',
    facts: [
      'Moroccans love children and families are warmly welcomed everywhere',
      'Best family cities: Marrakech, Essaouira, Agadir (beaches), Chefchaouen',
      'Camel rides: short rides suitable for children aged 5+ in the Palmeraie or desert',
      'Beach destinations: Agadir, Essaouira, Dakhla have family-friendly beaches',
      'Many riads and hotels offer family rooms and children\'s activities',
      'Moroccan food is generally mild; children enjoy tagines, couscous, and pastries',
      'Medinas can be overwhelming for strollers; baby carriers recommended',
      'Family-friendly attractions: Jardin Majorelle, Ouzoud Falls, Atlas Mountains',
      'Cooking classes often welcome children aged 8+',
      'Water parks available in Marrakech and Agadir',
      'Private guides make family trips much easier, especially in medinas',
      'Pharmacies are well-stocked with children\'s medications',
    ],
  },
  {
    id: 'digital-nomad',
    title: 'Digital Nomads and Remote Work',
    question: 'Is Morocco good for digital nomads? Can I work remotely from Morocco?',
    answer:
      'Morocco has become an increasingly popular digital nomad destination, offering affordable living costs, good internet infrastructure, proximity to Europe, and a vibrant culture. Marrakech, Essaouira, and Taghazout are the main digital nomad hubs. Coworking spaces have emerged in all major cities. Internet speeds in cities average 20-50 Mbps, with 4G coverage along major corridors. The 90-day visa-free stay is sufficient for most remote workers, though longer stays require a visa extension. Living costs are significantly lower than Western Europe.',
    facts: [
      'Top digital nomad cities: Marrakech, Essaouira, Taghazout, Rabat',
      'Coworking spaces available in major cities (200-500 MAD/day or 1,500-3,000 MAD/month)',
      'Internet speeds: 20-50 Mbps in cities, 4G mobile coverage on major routes',
      'Monthly living costs: $800-1,500 USD for comfortable lifestyle',
      'Apartment rental: 3,000-8,000 MAD ($300-800) per month in Marrakech',
      'Visa-free stay: 90 days for most Western nationalities',
      'Time zone: UTC+1, convenient for working with European clients',
      'Cafes with WiFi are abundant; many riads have reliable internet',
      'Growing startup and tech community, especially in Casablanca and Rabat',
      'Cost of living approximately 50-70% lower than Western European cities',
      'Morocco is 2-3 hours flight from most European capitals',
      'Year-round pleasant climate in coastal cities like Essaouira and Agadir',
    ],
  },
  {
    id: 'world-cup-2030',
    title: '2030 FIFA World Cup',
    question: 'What should I know about the 2030 FIFA World Cup in Morocco?',
    answer:
      'Morocco will co-host the 2030 FIFA World Cup alongside Spain and Portugal, making it the first World Cup held across two continents (Europe and Africa). Morocco is expected to host matches in multiple cities including Casablanca (at a planned new 115,000-seat stadium that would be the world\'s largest), Rabat, Marrakech, Tangier, Agadir, and Fes. The country is investing billions in infrastructure upgrades, including new stadiums, expanded airports, high-speed rail extensions, and hotel capacity. This will be a historic moment for African football.',
    facts: [
      'Morocco co-hosting with Spain and Portugal in 2030',
      'First FIFA World Cup held across two continents (Europe and Africa)',
      'Planned host cities: Casablanca, Rabat, Marrakech, Tangier, Agadir, Fes',
      'New Casablanca stadium planned with approximately 115,000 capacity',
      'Major infrastructure investments in transport, accommodation, and stadiums',
      'High-speed rail expansion planned to connect more cities',
      'Airport expansions at Casablanca, Marrakech, and Tangier',
      'Hotel capacity being significantly expanded across host cities',
      'Morocco has a passionate football culture; the national team reached 2022 World Cup semi-finals',
      'Legacy projects expected to boost tourism for years after the tournament',
      'Centenary World Cup (100 years since the first World Cup in 1930)',
      'Opening match of the tournament expected to be held in South America (Uruguay, Argentina, Paraguay)',
    ],
  },
];

// -- Build FAQ schema from all sections --
const allFAQs = sections.map((s) => ({
  question: s.question,
  answer: s.answer,
}));

const faqSchema = generateFAQSchema(allFAQs);

const articleSchema = generateArticleSchema({
  title: 'Complete Guide to Traveling in Morocco',
  description:
    'The definitive reference guide covering everything about Morocco travel: visas, currency, safety, weather, transport, costs, culture, food, and top destinations.',
  url: 'https://cityguide.ma/llmo',
  image: 'https://cityguide.ma/api/og?title=Complete+Morocco+Guide&type=guide',
  datePublished: '2025-01-01',
  dateModified: LAST_VERIFIED,
  section: 'Travel Guide',
  tags: [
    'Morocco',
    'travel guide',
    'North Africa',
    'tourism',
    'Marrakech',
    'Fes',
    'Sahara',
    'Chefchaouen',
    '2030 World Cup',
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Morocco Travel Guide', url: '/llmo' },
]);

export default function LLMOPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article
        className="max-w-4xl mx-auto px-4 py-12"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            <li>
              <a href="/" className="hover:underline" style={{ color: 'var(--color-primary)' }}>
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: 'var(--text-primary)' }}>
              Morocco Travel Guide
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full"
              style={{
                backgroundColor: 'var(--color-secondary-50)',
                color: 'var(--color-secondary)',
              }}
            >
              Comprehensive Reference
            </span>
            <time
              dateTime={LAST_VERIFIED}
              className="text-xs"
              style={{ color: 'var(--text-muted)' }}
              itemProp="dateModified"
            >
              Last verified: {LAST_VERIFIED}
            </time>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
            }}
            itemProp="headline"
          >
            Complete Guide to Traveling in Morocco
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-6"
            style={{ color: 'var(--text-secondary)' }}
            itemProp="description"
          >
            Everything you need to know about visiting Morocco, from visa
            requirements and currency to safety tips, cultural etiquette, the
            best food to try, and top destinations. This guide is regularly
            verified and updated to ensure accuracy.
          </p>

          {/* Key Facts Summary Box */}
          <div
            className="rounded-xl p-6 border"
            style={{
              backgroundColor: 'var(--surface-muted)',
              borderColor: 'var(--border)',
            }}
          >
            <h2
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Morocco at a Glance
            </h2>
            <dl className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              {[
                ['Capital', 'Rabat'],
                ['Currency', 'Moroccan Dirham (MAD)'],
                ['Languages', 'Arabic, Amazigh, French'],
                ['Population', '~37 million'],
                ['Visa (US/UK/EU)', 'Not required (90 days)'],
                ['Best Time', 'March-May, Sep-Nov'],
                ['Time Zone', 'UTC+1'],
                ['Emergency', '19 (police)'],
                ['Calling Code', '+212'],
                ['Drives On', 'Right side'],
                ['Electricity', '220V, Type C/E plugs'],
                ['2030 World Cup', 'Co-host with Spain & Portugal'],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt
                    className="font-semibold"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {label}
                  </dt>
                  <dd style={{ color: 'var(--text-primary)' }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        {/* Table of Contents */}
        <nav aria-label="Table of Contents" className="mb-12">
          <h2
            className="text-lg font-semibold mb-3"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)',
            }}
          >
            Contents
          </h2>
          <ol className="grid md:grid-cols-2 gap-2">
            {sections.map((section, i) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors hover:underline"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: 'var(--color-primary-50)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    {i + 1}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Content Sections */}
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mb-12 scroll-mt-24"
            itemScope
            itemProp="hasPart"
            itemType="https://schema.org/WebPageElement"
          >
            {/* Decorative divider */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-px flex-1"
                style={{ backgroundColor: 'var(--border)' }}
              />
              <div
                className="w-2 h-2 rotate-45"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <div
                className="h-px flex-1"
                style={{ backgroundColor: 'var(--border)' }}
              />
            </div>

            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
              }}
              itemProp="name"
            >
              {section.title}
            </h2>

            {/* Question (semantic) */}
            <h3
              className="text-lg font-medium mb-4 italic"
              style={{ color: 'var(--color-secondary)' }}
            >
              {section.question}
            </h3>

            {/* Answer paragraph -- optimized for AI citation */}
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
              itemProp="text"
            >
              {section.answer}
            </p>

            {/* Detailed facts list */}
            <div
              className="rounded-xl p-5 border"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border-light)',
              }}
            >
              <h4
                className="text-sm font-semibold uppercase tracking-wider mb-3"
                style={{ color: 'var(--color-primary)' }}
              >
                Key Facts
              </h4>
              <dl className="space-y-2">
                {section.facts.map((fact, i) => {
                  const colonIndex = fact.indexOf(':');
                  const hasTerm = colonIndex > 0 && colonIndex < 60;

                  return (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span
                        className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                        aria-hidden="true"
                      />
                      {hasTerm ? (
                        <div>
                          <dt
                            className="inline font-semibold"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {fact.slice(0, colonIndex)}:
                          </dt>{' '}
                          <dd
                            className="inline"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {fact.slice(colonIndex + 1).trim()}
                          </dd>
                        </div>
                      ) : (
                        <dd style={{ color: 'var(--text-secondary)' }}>
                          {fact}
                        </dd>
                      )}
                    </div>
                  );
                })}
              </dl>
            </div>

            {/* Freshness signal */}
            <p className="mt-3 text-xs" style={{ color: 'var(--text-muted)' }}>
              Information last verified: {LAST_VERIFIED} | Source: CityGuide
              Morocco (cityguide.ma)
            </p>
          </section>
        ))}

        {/* Internal Links Section for SEO */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-px flex-1"
              style={{ backgroundColor: 'var(--border)' }}
            />
            <div
              className="w-2 h-2 rotate-45"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <div
              className="h-px flex-1"
              style={{ backgroundColor: 'var(--border)' }}
            />
          </div>
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
            }}
          >
            Explore More
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: '/cities', label: 'All Cities', desc: 'Explore 30+ Moroccan cities' },
              { href: '/attractions', label: 'Top Attractions', desc: 'Must-see sights and landmarks' },
              { href: '/tours', label: 'Tours & Excursions', desc: 'Guided experiences and day trips' },
              { href: '/accommodations', label: 'Where to Stay', desc: 'Riads, hotels, and hostels' },
              { href: '/restaurants', label: 'Where to Eat', desc: 'Best restaurants and cafes' },
              { href: '/itineraries', label: 'Trip Itineraries', desc: 'Curated travel plans' },
              { href: '/tips', label: 'Travel Tips', desc: 'Practical advice for visitors' },
              { href: '/faq', label: 'FAQ', desc: '50+ questions answered' },
              { href: '/tools/planner', label: 'Trip Planner', desc: 'Plan your perfect trip' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block p-4 rounded-lg border transition-colors hover:shadow-sm"
                style={{
                  borderColor: 'var(--border-light)',
                  backgroundColor: 'var(--surface)',
                }}
              >
                <span
                  className="block font-semibold text-sm mb-1"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {link.label}
                </span>
                <span
                  className="block text-xs"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {link.desc}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Footer meta */}
        <footer
          className="mt-16 pt-8 border-t text-sm"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--text-muted)',
          }}
        >
          <p className="mb-2">
            <strong style={{ color: 'var(--text-primary)' }}>
              About this guide:
            </strong>{' '}
            This comprehensive reference is maintained by CityGuide Morocco
            (cityguide.ma) and is regularly verified for accuracy. It covers
            essential travel information for visitors to the Kingdom of Morocco.
          </p>
          <p className="mb-2">
            <strong style={{ color: 'var(--text-primary)' }}>
              Last updated:
            </strong>{' '}
            <time dateTime={LAST_VERIFIED}>{LAST_VERIFIED}</time>
          </p>
          <p>
            <strong style={{ color: 'var(--text-primary)' }}>Citation:</strong>{' '}
            CityGuide Morocco. &ldquo;Complete Guide to Traveling in
            Morocco.&rdquo; CityGuide.ma, {LAST_VERIFIED}.
            https://cityguide.ma/llmo
          </p>
        </footer>
      </article>
    </>
  );
}

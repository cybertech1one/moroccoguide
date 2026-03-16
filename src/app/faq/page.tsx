// =====================================================================
// MOROCCO GUIDE -- FAQ Page
// 55+ questions organized by 9 categories. Optimized for Google FAQ
// rich results (JSON-LD), featured snippets, and AI citation.
// Server component with client-side interactivity via FAQClientWrapper.
// =====================================================================

import type { Metadata } from 'next';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import FAQClientWrapper from './FAQClientWrapper';
import type { FAQCategory } from './FAQClientWrapper';

// ── Metadata ─────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Morocco Travel FAQ - 55+ Questions Answered | Visa, Safety, Costs & More',
  description:
    'The most comprehensive Morocco travel FAQ on the internet. 55+ detailed answers covering visas, safety, costs, transport, food, culture, accommodation, money, and communication.',
  keywords: [
    'morocco faq',
    'morocco travel questions',
    'is morocco safe',
    'do i need a visa for morocco',
    'best time to visit morocco',
    'what to wear in morocco',
    'morocco travel tips',
    'morocco for first time visitors',
    'morocco currency',
    'moroccan food',
    'morocco train',
    'morocco sim card',
    'morocco budget',
    'morocco solo female travel',
    'morocco ramadan',
    'morocco bargaining',
    'morocco riad',
  ],
  alternates: {
    canonical: 'https://cityguide.ma/faq',
  },
  openGraph: {
    title: 'Morocco Travel FAQ - Your Questions Answered | CityGuide',
    description:
      'Comprehensive FAQ covering 55+ questions about Morocco travel: visas, safety, costs, culture, food, transport, and more.',
    url: 'https://cityguide.ma/faq',
    type: 'website',
  },
};

// =====================================================================
// FAQ DATA -- 9 categories, 55+ questions
// =====================================================================

const faqCategories: FAQCategory[] = [
  // ── 1. BEFORE YOU GO ──────────────────────────────────────────────
  {
    id: 'before-you-go',
    title: 'Before You Go',
    iconName: 'map-pin',
    faqs: [
      {
        question: 'Do I need a visa to visit Morocco?',
        answer:
          'Citizens of over 60 countries can enter Morocco visa-free for up to 90 days, including the United States, United Kingdom, EU member states, Canada, Australia, New Zealand, Japan, South Korea, and Brazil. You need a passport valid for at least 6 months from the date of entry. Citizens of India, China, Russia, and most African nations do require a visa, which can be obtained from a Moroccan embassy or consulate before travel. Always check the latest requirements with your nearest Moroccan diplomatic mission, as policies can change.',
      },
      {
        question: 'What is the best time of year to visit Morocco?',
        answer:
          'The ideal time to visit Morocco is spring (March to May) or autumn (September to November), when temperatures are comfortable across most of the country and rainfall is minimal. Summer (June to August) brings extreme heat to inland cities like Marrakech (40-45 degrees Celsius) and the desert, though coastal towns like Essaouira and Agadir remain pleasant at 22-28 degrees. Winter (December to February) is mild in the south and along the coast, but cold in the Atlas Mountains and Fes, with occasional rain in the north. If you plan a Sahara Desert trip, avoid the peak summer months entirely.',
      },
      {
        question: 'What should I pack for a trip to Morocco?',
        answer:
          'Pack lightweight, breathable clothing that covers your shoulders and knees, which is both culturally respectful and practical for sun protection. Comfortable walking shoes with good grip are essential for navigating cobblestone medinas and uneven terrain. Bring a scarf or shawl for mosque visits and cooler evenings. Layers are important because desert and mountain temperatures can drop dramatically at night. Other essentials include high-SPF sunscreen, sunglasses, a reusable water bottle, a small daypack, a universal power adapter (Morocco uses European Type C and E plugs at 220V), and any prescription medications you need. For the desert, add a headscarf to protect against blowing sand.',
      },
      {
        question: 'Do I need vaccinations to visit Morocco?',
        answer:
          'No vaccinations are legally required to enter Morocco for most travelers. However, the CDC and WHO recommend being up to date on routine vaccinations including hepatitis A and B, typhoid, and tetanus. Rabies vaccination is recommended if you plan to spend significant time in rural areas or around animals. Malaria prophylaxis is not generally needed as Morocco is considered malaria-free, though a rare risk exists in some rural areas. Consult your doctor or a travel health clinic at least 4-6 weeks before departure for personalized advice.',
      },
      {
        question: 'Do I need travel insurance for Morocco?',
        answer:
          'Travel insurance is not legally required but is strongly recommended. It should cover medical emergencies, trip cancellation, and ideally medical evacuation. Private healthcare in Morocco is generally good in major cities but can be expensive without insurance, and serious conditions may require evacuation to Europe. Standard adventure activities like camel trekking, hiking, and quad biking are typically covered by most travel insurance policies, but confirm this before booking. Keep digital and paper copies of your policy documents accessible during your trip.',
      },
      {
        question: 'How much should I budget per day for Morocco?',
        answer:
          'Morocco offers excellent value across all budget levels. Budget travelers can manage on 300-600 MAD (30-60 USD) per day by staying in hostels (80-150 MAD per night), eating street food and local restaurants (30-60 MAD per meal), and using public transport. Mid-range travelers should budget 1,000-2,000 MAD (100-200 USD) per day for boutique riads (500-1,500 MAD per night), restaurant meals, and organized tours. Luxury travelers can expect to spend 3,000 MAD or more (300+ USD) per day for palatial riads, private guides, and fine dining. Major expenses to budget for include a Sahara Desert tour (1,500-4,000 MAD for 3 days), cooking classes (200-500 MAD), and souk shopping.',
      },
      {
        question: 'How many days do I need for a trip to Morocco?',
        answer:
          'A minimum of 7-10 days is recommended to experience Morocco beyond a single city. One week allows you to combine Marrakech with either a Sahara Desert excursion (3 days) or a visit to Fes and Chefchaouen. Two weeks is ideal for a comprehensive trip covering imperial cities, the Atlantic coast, the desert, and the Atlas Mountains. If you only have a long weekend (3-4 days), focus on a single destination like Marrakech or Fes with a day trip. Many travelers find that Morocco rewards slow travel, so do not try to cram too many cities into a short trip.',
      },
      {
        question: 'What documents do I need to enter Morocco?',
        answer:
          'You need a passport valid for at least 6 months from the date of entry and a completed immigration form (usually distributed on the plane or available at the border). Proof of accommodation for your stay may be requested, so have your hotel or riad booking confirmation accessible. A return or onward ticket can also be asked for, especially if you are entering visa-free. No vaccination certificates are currently required for standard entry. If you are driving, bring your international driving permit alongside your home license. Keep photocopies (digital and paper) of all important documents separate from the originals.',
      },
    ],
  },

  // ── 2. GETTING THERE ──────────────────────────────────────────────
  {
    id: 'getting-there',
    title: 'Getting There',
    iconName: 'plane',
    faqs: [
      {
        question: 'What are the main airports in Morocco?',
        answer:
          'Morocco has several international airports. Mohammed V International Airport (CMN) in Casablanca is the largest and busiest, serving as the main hub for Royal Air Maroc. Marrakech Menara Airport (RAK) is the second busiest and the most popular for tourists. Other international airports include Fes-Saiss (FEZ), Tangier Ibn Battouta (TNG), Agadir Al Massira (AGA), and Rabat-Sale (RBA). Casablanca and Marrakech have the most direct international connections, with flights from across Europe, the Middle East, and North America.',
      },
      {
        question: 'Are there direct flights from North America to Morocco?',
        answer:
          'Yes, Royal Air Maroc operates direct flights from New York (JFK), Washington DC (IAD), and Montreal (YUL) to Casablanca, with flight times of approximately 7-8 hours. From Casablanca, connecting flights reach Marrakech in about 45 minutes. Many travelers also fly via European hubs such as Paris, Madrid, London, or Lisbon, which often have competitive fares on budget carriers like Ryanair, easyJet, and Transavia. From the US West Coast, one-stop connections through Europe or the East Coast are most common.',
      },
      {
        question: 'Can I enter Morocco by ferry from Spain?',
        answer:
          'Yes, regular ferries operate between Spain and Morocco year-round. The most popular routes are Tarifa to Tangier City (35 minutes by fast ferry), Algeciras to Tangier Med port (1.5 hours), and Algeciras to Ceuta (Spanish enclave, 1 hour, then a land border crossing). FRS, Balearia, and Trasmediterranea are the main operators. Passport control is typically conducted on the ferry. Book in advance during summer (especially July and August) when ferries fill up with Moroccan diaspora returning for holidays. Note that Tangier Med port is about 45 km from Tangier city center.',
      },
      {
        question: 'What are the arrival procedures at Moroccan airports?',
        answer:
          'On arrival, you will fill out an immigration form (sometimes distributed on the plane, otherwise available at immigration counters). Present this with your passport at border control. You may be asked about your accommodation and return flight. Immigration processing can take 30-60 minutes depending on the queue. After collecting your luggage, you pass through customs (rarely a detailed check for tourists). Exchange bureaus and ATMs are located in the arrivals hall. Official taxis are outside arrivals with posted fixed fares to city centers. Avoid unsolicited helpers who approach you inside the terminal.',
      },
      {
        question: 'How do I get from the airport to my hotel?',
        answer:
          'Your best options are official airport taxis, hotel transfers, or public transport. Airport taxis have posted fixed fares to city centers (typically 100-200 MAD to Marrakech or Casablanca city centers). Always confirm the price before getting in and ensure the driver understands your destination. Many riads offer airport pickup if arranged in advance, which is especially useful for navigating the medina. Casablanca airport has a direct train to Casa Voyageurs station (45 MAD, running every hour). Marrakech has an airport bus (line 19) to Jemaa el-Fnaa for 30 MAD. Avoid unofficial drivers who approach you inside the arrivals terminal.',
      },
    ],
  },

  // ── 3. GETTING AROUND ─────────────────────────────────────────────
  {
    id: 'getting-around',
    title: 'Getting Around',
    iconName: 'train',
    faqs: [
      {
        question: 'How does the Moroccan train system work?',
        answer:
          'Morocco has Africa\'s most developed rail network, operated by ONCF. The flagship Al Boraq high-speed train connects Tangier to Casablanca in 2 hours 10 minutes, reaching speeds of 320 km/h. Regular trains connect Marrakech, Casablanca, Rabat, Meknes, Fes, and Oujda, running frequently throughout the day. First class is comfortable, air-conditioned, and affordable (Marrakech to Casablanca costs about 150 MAD first class). Tickets can be purchased at stations, from vending machines, or through the ONCF app. No reservation is needed for most routes, but first class seats on Al Boraq must be reserved.',
      },
      {
        question: 'What bus companies operate in Morocco?',
        answer:
          'CTM and Supratours are the two premium long-distance bus companies and are recommended for tourists. CTM is the national carrier with an extensive network, air-conditioned coaches, and fixed schedules. Supratours is operated by ONCF and connects train stations to cities not on the rail network, such as Essaouira, Chefchaouen, and the Sahara gateway towns. Both can be booked online. Local bus companies also operate but are slower, less comfortable, and often overcrowded. For the route from Marrakech to Essaouira, Supratours is the best option at approximately 80 MAD for a 3-hour journey.',
      },
      {
        question: 'How do petit taxis and grand taxis work?',
        answer:
          'Morocco has two types of taxis. Petit taxis are small city taxis (usually Fiat Unos or Dacia Logans) that operate within city limits and are color-coded by city (red in Fes, beige in Marrakech, blue in Rabat). They carry up to 3 passengers and should use a meter, though you may need to insist. Grand taxis are larger vehicles (traditionally Mercedes sedans, increasingly modern vans) that cover intercity routes and are shared, departing when all seats are filled. Grand taxi fares are fixed per seat and per route. You can buy multiple seats for more space or a quicker departure. Grand taxi stands are located near bus stations in most cities.',
      },
      {
        question: 'Should I rent a car in Morocco?',
        answer:
          'Renting a car is excellent for exploring the Atlas Mountains, desert routes (like the Dades and Todra Gorges), and coastal drives at your own pace. Major highways between cities are well-maintained toll roads. International rental companies (Hertz, Avis, Europcar) and local agencies are available at airports and city centers. An international driving permit is recommended alongside your home license. However, driving in cities and especially within medinas is extremely stressful due to narrow streets, aggressive traffic, and a lack of clear signage. Park outside the medina and walk. Drive on the right side of the road. Fuel costs roughly 14 MAD per liter for gasoline.',
      },
      {
        question: 'Are there domestic flights within Morocco?',
        answer:
          'Yes, Royal Air Maroc and Air Arabia Maroc operate domestic flights connecting major cities. The most useful routes for tourists are Casablanca to Ouarzazate, Marrakech to Fes, and Casablanca to Dakhla. Domestic flights are relatively affordable if booked in advance (400-800 MAD one way) and save significant travel time on long routes. However, for popular corridors like Marrakech to Casablanca or Rabat to Fes, the train is often faster and more convenient when you account for airport check-in times.',
      },
      {
        question: 'Is Uber available in Morocco?',
        answer:
          'Uber does not operate in Morocco. The main ride-hailing alternative is InDrive, which works in Casablanca, Marrakech, and other major cities and lets you negotiate the fare. Careem (owned by Uber) also operates in some cities. Otherwise, use petit taxis with the meter running, or arrange airport and intercity transfers through your riad or hotel. For a more local experience, grand taxis are the traditional shared transport between cities. Always agree on a price before getting into any unmetered vehicle.',
      },
    ],
  },

  // ── 4. ACCOMMODATION ──────────────────────────────────────────────
  {
    id: 'accommodation',
    title: 'Accommodation',
    iconName: 'hotel',
    faqs: [
      {
        question: 'What is a riad and should I stay in one?',
        answer:
          'A riad is a traditional Moroccan house built around a central courtyard, often featuring a fountain, garden, tiled walls, and a rooftop terrace with city views. Converted into intimate guesthouses (typically 4-10 rooms), riads offer a uniquely Moroccan experience with personalized service, home-cooked breakfasts, and stunning architecture. Staying in a riad inside the medina of Marrakech or Fes is one of the quintessential Morocco experiences and is highly recommended for at least part of your trip. Prices range from 400 MAD per night for simple riads to 3,000+ MAD for luxury properties with plunge pools.',
      },
      {
        question: 'What are the typical accommodation costs in Morocco?',
        answer:
          'Hostel dorm beds cost 80-150 MAD per night. Budget guesthouses and basic riads start at 250-500 MAD for a double room. Mid-range riads and 3-star hotels run 500-1,500 MAD. Upscale riads and 4-star hotels range from 1,500-3,000 MAD. Luxury palaces and 5-star resorts start at 3,000 MAD and can exceed 10,000 MAD per night. Prices are highest during peak season (March-May, September-November) and around Christmas and New Year. Most riads include breakfast in the room rate. Desert luxury camps cost 800-3,000 MAD per person per night including meals.',
      },
      {
        question: 'Is Booking.com or Airbnb reliable for Morocco?',
        answer:
          'Both platforms are widely used in Morocco and are generally reliable. Booking.com has the best coverage of riads, hotels, and guesthouses, with detailed reviews and flexible cancellation policies. Airbnb is good for apartments and longer stays, particularly in the Ville Nouvelle (modern city) areas. For riads, you can sometimes get better rates and more personal service by booking directly through the property website or by email. Whichever platform you use, always check recent reviews, confirm your booking by contacting the property directly, and save the property phone number for navigation help in the medina.',
      },
      {
        question: 'What are desert camps like in the Sahara?',
        answer:
          'Desert camps in Erg Chebbi (Merzouga) and Erg Chigaga range from basic bivouac tents to full-blown luxury glamping. Basic camps (300-500 MAD per person) offer mattresses in shared Berber tents, communal bathrooms, and simple meals. Mid-range camps (500-1,200 MAD) provide private tents with beds, en-suite bathrooms, and better food. Luxury camps (1,500-4,000 MAD) feature king-size beds, hot showers, multi-course dinners, and sometimes swimming pools among the dunes. Most camps include a sunset camel trek, traditional Berber music, and breakfast. Nights in the desert are cold from October to April, so bring warm layers regardless of camp level.',
      },
      {
        question: 'Are there hostels in Morocco for budget travelers?',
        answer:
          'Yes, Morocco has a growing hostel scene in all major tourist cities. Marrakech, Fes, Essaouira, Chefchaouen, and Tangier all have well-reviewed hostels with dorm beds starting at 80-150 MAD per night. Many hostels also offer private rooms (250-500 MAD). Popular hostels typically include communal kitchens, rooftop terraces, organized activities, and a social atmosphere ideal for solo travelers. Book through Hostelworld or Booking.com for verified reviews and secure reservations.',
      },
      {
        question: 'Can unmarried couples share a hotel room in Morocco?',
        answer:
          'While Moroccan law technically prohibits unmarried Moroccan couples from sharing a room, tourist accommodations routinely accept foreign couples regardless of marital status. In practice, you will not be asked for a marriage certificate at riads, hotels, or guesthouses catering to international visitors. Simply book a double room as you would anywhere else. Use discretion with public displays of affection, as Morocco is a conservative country. If one partner is Moroccan, the situation can be more complicated and some hotels may ask questions, though international-standard properties are generally accommodating.',
      },
    ],
  },

  // ── 5. FOOD & DRINK ───────────────────────────────────────────────
  {
    id: 'food-drink',
    title: 'Food & Drink',
    iconName: 'utensils',
    faqs: [
      {
        question: 'What are the must-try dishes in Morocco?',
        answer:
          'The essential Moroccan dishes include tagine (a slow-cooked stew with meat and vegetables in a conical clay pot, available in dozens of varieties), couscous (hand-rolled semolina steamed with vegetables, traditionally served on Fridays), pastilla (a savory-sweet layered pastry with pigeon or chicken, almonds, and cinnamon), harira (hearty tomato and lentil soup, especially during Ramadan), mechoui (whole slow-roasted lamb), and tanjia (a Marrakech specialty slow-cooked in the embers of a hammam furnace). Do not miss street food staples like msemen (flaky flatbread), freshly squeezed orange juice (4 MAD per glass on Jemaa el-Fnaa), grilled sardines, and snail soup (known as babouche).',
      },
      {
        question: 'Is tap water safe to drink in Morocco?',
        answer:
          'Tap water in Morocco is technically treated and safe for locals accustomed to it, but it is not recommended for tourists as your stomach is not adapted to the local bacteria and mineral content. Drink bottled water, which is inexpensive (3-5 MAD for a 1.5 liter bottle) and available everywhere from corner shops to gas stations. Use bottled water for brushing teeth in the first few days until you adjust. Ice in reputable tourist restaurants is usually made from purified water, but exercise caution at smaller establishments and street stalls. Carrying a water bottle with a built-in filter is an eco-friendly alternative.',
      },
      {
        question: 'Is alcohol available in Morocco?',
        answer:
          'Yes, alcohol is available despite Morocco being a Muslim-majority country. Licensed restaurants, hotels, bars, and nightclubs in tourist areas and larger cities serve beer, wine, and spirits. Morocco produces its own wine (regions around Meknes and Benslimane) and beer (Casablanca, Flag Speciale). Supermarkets like Carrefour and Acima have alcohol sections. However, drinking in public spaces is not socially acceptable and is prohibited by law. During Ramadan, most establishments stop serving alcohol, though some tourist-oriented hotels continue. Many traditional Moroccan restaurants in the medina do not serve alcohol.',
      },
      {
        question: 'Are there vegetarian and vegan options in Morocco?',
        answer:
          'Moroccan cuisine includes many plant-based dishes, though meat is central to most traditional meals. Vegetable tagines (with combinations like prune and almond, or seven-vegetable), lentil harira soup, zaalouk (smoky eggplant and tomato salad), bean dishes like loubia, couscous with seven vegetables, and an abundance of fresh bread, olives, and salads are widely available. Tell restaurants you are vegetarian using the French phrase "je suis vegetarien" (male) or "je suis vegetarienne" (female). Vegan travelers should specify no butter or honey, which are common in Moroccan cooking. In Marrakech and Essaouira, several restaurants cater specifically to vegetarian and vegan diners.',
      },
      {
        question: 'What should I know about dining during Ramadan?',
        answer:
          'During Ramadan (dates shift annually based on the lunar calendar), most Moroccans fast from dawn to sunset. Many local restaurants close during daylight hours, though tourist-oriented restaurants in hotels and popular areas remain open. Eating, drinking, or smoking in public during fasting hours is considered disrespectful and is technically illegal for Moroccans (tourists are tolerated but should be discreet). After sunset, cities come alive with iftar meals and night markets, making it a festive time to visit. The traditional Ramadan iftar meal of harira soup, dates, chebakia pastries, and eggs is a cultural experience worth seeking out.',
      },
      {
        question: 'Is street food safe to eat in Morocco?',
        answer:
          'Street food in Morocco is generally safe and is a highlight of any trip when you follow basic precautions. Choose stalls that are busy with locals, which indicates high turnover and fresh food. Look for food that is cooked to order in front of you. Safe bets include freshly grilled meats and kebabs, msemen and baghrir (pancakes) cooked on a griddle, freshly squeezed orange juice, and slow-simmered soups. Be more cautious with pre-made salads, unpeeled raw produce, and items that have been sitting out in the heat. The famous food stalls at Jemaa el-Fnaa in Marrakech are generally safe despite their chaotic appearance.',
      },
      {
        question: 'How does tipping work in restaurants?',
        answer:
          'Tipping is customary in Morocco and is an important supplement to often-low service wages. In sit-down restaurants, leave 10-15 percent of the bill, rounding up for convenience. In cafes, rounding up to the nearest 5-10 MAD is standard for a coffee or tea. For street food or takeaway, tipping is not expected. Note that service charges are sometimes included on the bill at upscale restaurants (look for "service compris"), in which case an additional small tip of 5-10 percent is still appreciated but not required.',
      },
    ],
  },

  // ── 6. CULTURE & ETIQUETTE ────────────────────────────────────────
  {
    id: 'culture-etiquette',
    title: 'Culture & Etiquette',
    iconName: 'book-open',
    faqs: [
      {
        question: 'What should I wear in Morocco?',
        answer:
          'Dress modestly, especially in medinas, religious areas, and rural towns. For women, cover your shoulders and knees; loose-fitting clothing like maxi skirts, linen pants, and flowy tops are ideal. A lightweight scarf is useful for covering up when needed. For men, long pants and t-shirts with sleeves are appropriate; avoid sleeveless tops outside tourist resorts. At beach resorts and hotel pools, regular swimwear is fine. In upscale restaurants and clubs in Casablanca or Marrakech, smart casual is expected. Pack layers for the significant temperature swings between hot days and cool evenings, particularly in the desert and mountains.',
      },
      {
        question: 'Can non-Muslims enter mosques in Morocco?',
        answer:
          'Non-Muslims cannot enter most mosques in Morocco. The major exception is the Hassan II Mosque in Casablanca, the largest mosque in Africa and one of the few in the world open to non-Muslim visitors. It offers guided tours several times daily (entrance fee approximately 130 MAD). You can admire the exteriors and minarets of other beautiful mosques, and in some cases walk into open courtyards. Always dress modestly near mosques, remove shoes if entering any religious space, and lower your voice. Photography of mosque exteriors is generally acceptable but ask before photographing people praying.',
      },
      {
        question: 'What are the photography rules in Morocco?',
        answer:
          'Always ask permission before photographing people, especially women, children, and in rural areas. Some people in tourist areas will happily pose for photos but expect a small tip of 5-10 MAD (this is normal and fair). Others may firmly decline, and you should respect their wishes. Water sellers and snake charmers in Jemaa el-Fnaa will demand 10-20 MAD for photos. Do not photograph military installations, police stations, or government buildings, as this is illegal. Artisans in workshops generally welcome photos of their craft. Landscapes, architecture, and food are always safe subjects.',
      },
      {
        question: 'How does bargaining work and when is it expected?',
        answer:
          'Bargaining is an integral part of Moroccan culture in souks, markets, and with street vendors, but is not done in fixed-price shops, supermarkets, restaurants, or with metered taxis. Start by asking the price, then counter with 30-50 percent of the quoted amount. Negotiate with a smile and good humor. The final price is typically 50-70 percent of the initial asking price. Be prepared to walk away, which often prompts the seller to call you back with a lower offer. Never begin bargaining unless you are genuinely interested in purchasing. In craft cooperatives outside cities, prices are usually fixed and fair.',
      },
      {
        question: 'How do I greet people in Morocco?',
        answer:
          'The standard greeting is "Salam alaikum" (peace be upon you), to which the reply is "Wa alaikum salam." This is used universally regardless of religion. A handshake is appropriate for same-gender greetings and business settings. Men and women who are not closely related may simply place a hand over their heart instead of shaking hands. Close friends and family of the same gender greet with cheek kisses (typically one on each cheek). "Shukran" means thank you. The French "bonjour" and "merci" are also widely understood and appreciated.',
      },
      {
        question: 'What should I know about Ramadan as a tourist?',
        answer:
          'Ramadan is the holy month of fasting observed by Muslims, during which locals abstain from food, drink, and smoking from dawn to sunset. As a tourist, you are not expected to fast, but you should avoid eating, drinking, or smoking openly in public during daylight hours as a sign of respect. Many shops and services operate on reduced hours. Tourist restaurants, hotels, and riads continue to serve food to guests. The reward of visiting during Ramadan is the incredible atmosphere at sunset when everyone breaks the fast together, and night markets and social life become especially vibrant.',
      },
      {
        question: 'What is the tipping culture beyond restaurants?',
        answer:
          'Tipping, known as "pourboire" in French, is expected in many service interactions in Morocco. For hotel porters, 10-20 MAD per bag is standard. For tour guides, 50-100 MAD per person per day is customary for group tours, and 100-200 MAD for private guides. For camel handlers on desert treks, 20-50 MAD is appropriate. For anyone who provides unsolicited but genuinely helpful directions or service, 5-10 MAD is polite. Parking attendants (guardians who watch your car) expect 2-5 MAD. Hammam attendants should receive 20-50 MAD. Carry plenty of small denominations to make tipping easy.',
      },
    ],
  },

  // ── 7. SAFETY ─────────────────────────────────────────────────────
  {
    id: 'safety',
    title: 'Safety',
    iconName: 'shield',
    faqs: [
      {
        question: 'Is Morocco safe for tourists?',
        answer:
          'Morocco is generally safe for tourists and is one of the most stable and visited countries in Africa, welcoming over 14 million international visitors annually. Violent crime against tourists is rare. The main concerns are petty theft (pickpocketing in crowded markets and on public transport), occasional bag snatching on motorbikes in busy areas, and persistent touts in tourist zones. The Moroccan government has invested heavily in tourism security, with dedicated tourist police (Brigade Touristique) operating in major cities. Exercise normal travel precautions: keep valuables secure, stay aware of your surroundings, and avoid poorly lit areas at night.',
      },
      {
        question: 'Is Morocco safe for solo female travelers?',
        answer:
          'Morocco is visited by thousands of solo female travelers each year, and most have positive experiences. However, it does require some extra awareness. Dress modestly (covering shoulders and knees) to reduce unwanted attention. Verbal harassment (catcalling, persistent attention) can occur, especially in less touristy areas, but is usually not threatening. Effective strategies include wearing a headscarf in conservative areas, wearing sunglasses to avoid eye contact, walking with purpose, and firmly saying "la shukran" (no thank you). Stay in well-reviewed riads and guesthouses, use official taxis, avoid walking alone late at night, and consider joining group tours for the Sahara Desert.',
      },
      {
        question: 'What are the most common tourist scams in Morocco?',
        answer:
          'The most common scams include: fake guides who offer unsolicited help navigating the medina then demand large payments or lead you to overpriced shops for commission; "my cousin has a shop" where a friendly local steers you to buy overpriced goods; henna artists who grab your hand and apply henna without consent then demand 100+ MAD; "closed today" claims where someone near an attraction tells you it is closed and offers to take you elsewhere; overpriced unmetered taxis; and people offering directions or small services then aggressively demanding tips. The best defense is to politely decline unsolicited help, always agree on prices before services, and research approximate costs in advance.',
      },
      {
        question: 'Is it safe for LGBTQ+ travelers to visit Morocco?',
        answer:
          'Same-sex sexual activity is illegal in Morocco under Article 489 of the penal code, with penalties including imprisonment. While enforcement against tourists is rare, LGBTQ+ travelers should exercise discretion. Public displays of affection between same-sex couples are inadvisable. Morocco does not have an openly LGBTQ+ social scene, though some private establishments in larger cities are known to be welcoming. Many LGBTQ+ travelers visit Morocco without incident by maintaining a low profile. Same-sex friends traveling together and sharing accommodation is common and will not raise questions.',
      },
      {
        question: 'What emergency numbers should I know in Morocco?',
        answer:
          'The key emergency numbers in Morocco are: 19 for police (Surete Nationale), 15 for fire department and ambulance (Protection Civile), 177 for the Gendarmerie Royale (rural areas and highways), and 112 as the general emergency number from mobile phones. In major tourist cities, the Brigade Touristique (tourist police) can assist foreign visitors with theft reports, lost items, and disputes. Keep your hotel address written down in both French and Arabic. Your country\'s embassy or consulate can help with lost passports, arrests, and serious emergencies. Pharmacies (marked with a green cross) are plentiful and many pharmacists speak French and can provide basic medical advice.',
      },
      {
        question: 'Are there any areas in Morocco I should avoid?',
        answer:
          'Morocco is broadly safe for tourists, but a few areas warrant caution. The Rif Mountains region (outside of Chefchaouen) is known for cannabis cultivation and you may encounter aggressive drug sellers on roads through the area. The Algeria border zone should be avoided. Within cities, be cautious in poorly lit areas of medinas after dark and in isolated neighborhoods away from tourist areas. The Western Sahara region south of Tarfaya is generally safe but has occasional political tensions. Check your government travel advisories for the latest information before your trip.',
      },
    ],
  },

  // ── 8. MONEY ──────────────────────────────────────────────────────
  {
    id: 'money',
    title: 'Money',
    iconName: 'wallet',
    faqs: [
      {
        question: 'What currency is used in Morocco and what is the exchange rate?',
        answer:
          'Morocco uses the Moroccan Dirham, abbreviated as MAD or sometimes written as "dh" or "Dhs." The dirham is subdivided into 100 centimes. As a rough guide, 1 US Dollar equals approximately 10 MAD, 1 Euro equals approximately 11 MAD, and 1 British Pound equals approximately 13 MAD (rates fluctuate, so check before your trip). The dirham is a partially closed currency, meaning you cannot easily buy it outside Morocco and should not import or export large amounts. Exchange money upon arrival at airports, banks, or licensed exchange bureaus (look for "Bureau de Change" signs).',
      },
      {
        question: 'Are ATMs widely available in Morocco?',
        answer:
          'ATMs are widely available in cities and towns throughout Morocco, including at airports, train stations, and near main squares. Most ATMs accept international Visa and Mastercard debit and credit cards. Major banks with extensive ATM networks include Attijariwafa Bank, BMCE Bank of Africa, and Banque Populaire. ATMs typically dispense 200 and 100 MAD notes. The maximum withdrawal is usually 2,000-4,000 MAD per transaction. ATM fees vary; some Moroccan banks charge a small fee (approximately 20-30 MAD) per withdrawal. Notify your home bank before traveling to prevent your card from being blocked. In remote areas like small desert towns and mountain villages, ATMs may be scarce, so carry enough cash.',
      },
      {
        question: 'Are credit cards accepted in Morocco?',
        answer:
          'Credit and debit cards (Visa and Mastercard) are accepted at upscale hotels, modern restaurants, larger shops, supermarkets, and gas stations. However, Morocco remains a cash-dominant society. Cards are not accepted at souks, street food stalls, petit taxis, small local restaurants, or in rural areas. Always carry cash for daily spending. Some merchants may add a surcharge (2-5 percent) for card payments or have a minimum purchase requirement. Contactless payment is growing but is not yet universal. American Express has very limited acceptance in Morocco.',
      },
      {
        question: 'How much do common items cost in Morocco?',
        answer:
          'Here are approximate prices to help you budget: a glass of fresh orange juice costs 4-6 MAD, a mint tea in a cafe is 10-15 MAD, a meal at a local restaurant is 30-60 MAD, a tagine at a mid-range restaurant is 60-120 MAD, a 1.5L bottle of water is 3-5 MAD, a local beer is 25-40 MAD, a petit taxi ride within a city is 10-30 MAD, a museum entrance is 10-70 MAD, a traditional hammam is 10-20 MAD (public) or 150-400 MAD (spa), and a handwoven Berber carpet starts from 500 MAD for small pieces and can reach 5,000+ MAD for large, high-quality ones.',
      },
      {
        question: 'Should I exchange money before arriving in Morocco?',
        answer:
          'It is generally not necessary or advisable to exchange money before arriving. The Moroccan Dirham is difficult to obtain outside of Morocco and rates abroad are typically very poor. Instead, bring clean bills in US Dollars, Euros, or British Pounds and exchange them at the airport bureau de change upon arrival (rates are competitive), at banks in the city (often the best rates), or at licensed exchange offices. Alternatively, withdraw dirhams directly from an ATM at the airport using your debit card. Avoid unlicensed money changers on the street. Keep your exchange receipts as you may need them to convert leftover dirhams back before departure.',
      },
    ],
  },

  // ── 9. COMMUNICATION ──────────────────────────────────────────────
  {
    id: 'communication',
    title: 'Communication',
    iconName: 'smartphone',
    faqs: [
      {
        question: 'How do I get a SIM card in Morocco?',
        answer:
          'Local SIM cards are inexpensive and easy to get. The three mobile operators are Maroc Telecom (best coverage nationwide), Inwi (competitive data packages), and Orange (good urban coverage). SIM cards are available at airport kiosks, official operator stores, and small phone shops throughout the country. A SIM card with a generous data package (5-20 GB) costs 30-100 MAD. You will need to show your passport for registration. Data is reliable in cities and along main highways. Top up credit at any corner shop displaying the operator logo. An eSIM from providers like Airalo or Holafly is a convenient alternative if your phone supports it.',
      },
      {
        question: 'Is WiFi widely available in Morocco?',
        answer:
          'WiFi is available in most riads, hotels, restaurants, and cafes across Morocco, usually free of charge. However, speeds vary significantly. Urban hotels and modern co-working spaces typically offer reliable connections suitable for video calls. Riads in the deep medina may have slower, less stable WiFi due to thick walls. In the Sahara Desert and remote mountain areas, WiFi is very limited or nonexistent. For reliable internet throughout your trip, a local SIM card with a data package is the best option. Major cities have 4G coverage, and 5G is being rolled out in Casablanca and Rabat.',
      },
      {
        question: 'What languages are spoken in Morocco?',
        answer:
          'Morocco is linguistically diverse. Arabic (Darija, the Moroccan dialect) and Amazigh (Berber) are the two official languages. French is widely spoken as a second language in business, education, and tourism, and is your best non-Arabic language for communication. In northern Morocco (Tangier, Tetouan, Chefchaouen), Spanish is commonly understood due to proximity to Spain. English is increasingly spoken by young Moroccans and in tourism-focused businesses, particularly in Marrakech, Fes, and Essaouira. Learning a few Arabic phrases will greatly enrich your experience and is always appreciated by locals.',
      },
      {
        question: 'What useful Arabic and French phrases should I know?',
        answer:
          'Essential Arabic (Darija) phrases: "Salam alaikum" (hello/peace), "Shukran" (thank you), "La shukran" (no thank you), "Bslemah" (goodbye), "Bshhal?" (how much?), "Naam" (yes), "La" (no), "Smehli" (excuse me), "Inshallah" (God willing). Useful French phrases: "Bonjour" (hello), "Merci" (thank you), "S\'il vous plait" (please), "Combien?" (how much?), "L\'addition" (the bill), "Ou est...?" (where is...?), "Je ne comprends pas" (I don\'t understand), "Parlez-vous anglais?" (do you speak English?). Even attempting a few words in Darija will earn you warm smiles and often better prices.',
      },
      {
        question: 'How do I call home from Morocco?',
        answer:
          'The easiest and cheapest option is to use WiFi-based calling through apps like WhatsApp, FaceTime, or Skype, which are all accessible in Morocco. If you have a local SIM card, international calls and SMS are available at reasonable rates. Morocco\'s country code is +212. To call Morocco from abroad, dial +212 followed by the number without the leading zero. International roaming with your home carrier works but is very expensive; check with your provider for Morocco-specific packages. Many travelers simply rely on WhatsApp for voice and video calls, which works well over both WiFi and mobile data.',
      },
    ],
  },
];

// ── Flatten all FAQs for schema and count ────────────────────────────

const allFAQs = faqCategories.flatMap((cat) => cat.faqs);

const faqSchema = generateFAQSchema(allFAQs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'FAQ', url: '/faq' },
]);

// =====================================================================
// PAGE COMPONENT (Server Component)
// =====================================================================

export default function FAQPage() {
  return (
    <>
      {/* JSON-LD structured data for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol
            className="flex items-center gap-2 text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            <li>
              <a
                href="/"
                className="hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: 'var(--text-primary)' }}>
              FAQ
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
            }}
          >
            Morocco Travel FAQ
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            The most comprehensive guide to traveling in Morocco. Everything you
            need to know before, during, and after your trip -- from visa
            requirements to bargaining in the souks.
          </p>
          <p className="text-sm mt-3" style={{ color: 'var(--text-muted)' }}>
            {allFAQs.length} questions answered across{' '}
            {faqCategories.length} categories -- last updated March 2026
          </p>
        </header>

        {/* Client-side interactive section: search, nav pills, accordions */}
        <FAQClientWrapper
          categories={faqCategories}
          totalCount={allFAQs.length}
        />

        {/* CTA */}
        <div
          className="mt-16 rounded-xl p-8 text-center border"
          style={{
            backgroundColor: 'var(--surface-muted)',
            borderColor: 'var(--border)',
          }}
        >
          <h2
            className="text-xl font-bold mb-2"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
            }}
          >
            Still have questions?
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
            Check our comprehensive city guides or browse the full travel
            resource center.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/llmo"
              className="px-6 py-3 rounded-lg font-semibold text-white transition-colors"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Full Travel Guide
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg font-semibold border transition-colors"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

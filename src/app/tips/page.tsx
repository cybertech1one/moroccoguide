import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  FileText,
  Banknote,
  ShieldCheck,
  HeartPulse,
  Users,
  Train,
  CloudSun,
  Wifi,
  Backpack,
  ShoppingCart,
  Phone,
  Zap,
  Clock,
  Coins,
  Globe,
  ChevronDown,
  Utensils,
  Droplets,
  Camera,
  HandshakeIcon,
  Shirt,
  Map,
  AlertTriangle,
  PiggyBank,
  Ticket,
  CalendarDays,
  Stethoscope,
  Car,
  Compass,
  Languages,
  CreditCard,
  Landmark,
  BookOpen,
  Thermometer,
  Lightbulb,
  CircleDollarSign,
  Footprints,
  Star,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Essential Morocco Travel Tips | Visa, Safety, Currency & Culture Guide',
  description:
    'Everything you need to know before visiting Morocco. Practical travel tips covering visa requirements, currency exchange, safety, health, cultural etiquette, transportation, weather, packing, and bargaining.',
  keywords: [
    'Morocco travel tips',
    'Morocco visa',
    'Morocco currency',
    'Morocco safety',
    'Morocco culture',
    'Morocco weather',
    'Morocco transport',
    'is Morocco safe',
    'what to pack Morocco',
    'Morocco bargaining tips',
    'Morocco food safety',
    'Morocco budget travel',
    'Morocco scams',
    'Morocco emergency numbers',
    'Morocco tipping guide',
  ],
  openGraph: {
    title: 'Essential Morocco Travel Tips - CityGuide',
    description:
      'Your complete practical guide to visiting Morocco. Visa, currency, safety, health, etiquette, transport, and more.',
    url: 'https://citytoursmorocco.com/tips',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Blue streets of Chefchaouen, Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/tips' },
};

/* ═══════════════════════════════════════════════════════════════
   TIP INTERFACE & DATA
   ═══════════════════════════════════════════════════════════════ */

interface Tip {
  icon: React.ReactNode;
  title: string;
  body: string;
}

interface TipSection {
  id: string;
  sectionTitle: string;
  sectionIcon: React.ReactNode;
  sectionColor: string;
  tips: Tip[];
}

const tipSections: TipSection[] = [
  /* ────────── BEFORE YOU GO ────────── */
  {
    id: 'before-you-go',
    sectionTitle: 'Before You Go',
    sectionIcon: <Backpack className="w-6 h-6" />,
    sectionColor: 'var(--color-secondary)',
    tips: [
      {
        icon: <FileText className="w-5 h-5" />,
        title: 'Visa & Entry Requirements',
        body: 'Citizens of over 60 countries including the US, EU, UK, Canada, and Australia can enter Morocco visa-free for up to 90 days. Your passport must be valid for at least six months beyond your arrival date. At the border you will fill out an arrival card with your personal details and Moroccan address. Keep your entry stamp page accessible as hotels may ask to see it. If you need a visa, apply at your nearest Moroccan embassy at least three weeks in advance with a completed form, passport photos, proof of accommodation, return tickets, and evidence of sufficient funds.',
      },
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: 'Travel Insurance',
        body: 'Comprehensive travel insurance is not optional for Morocco, it is essential. Choose a policy that covers medical treatment, emergency evacuation (including helicopter rescue from the Atlas Mountains), trip cancellation, lost luggage, and personal liability. Medical care at private clinics in Casablanca or Marrakech can cost several hundred dollars per visit, and an air evacuation can exceed $50,000. Ensure your policy covers adventure activities if you plan to trek, quad-bike in the desert, or surf the Atlantic coast. Keep digital and paper copies of your policy number and emergency contact line.',
      },
      {
        icon: <Backpack className="w-5 h-5" />,
        title: 'Smart Packing Essentials',
        body: 'Morocco spans Mediterranean coast, rugged mountains, and Saharan desert, so layering is key. Pack lightweight breathable fabrics (linen and cotton), a warm fleece or jacket for cool evenings, comfortable walking shoes with good grip for cobblestone medina streets, sandals for relaxing, a sun hat, quality sunglasses, and a light scarf or pashmina. The scarf serves triple duty: sun protection, shoulder covering at mosques, and warmth on chilly nights. Always bring high-SPF sunscreen, a reusable filtered water bottle, a universal power adapter (Type C/E, 220V), a headlamp for unlit medina alleys, and a money belt for crowded souks.',
      },
      {
        icon: <Banknote className="w-5 h-5" />,
        title: 'Currency & Money Preparation',
        body: 'The Moroccan Dirham (MAD) is a partially closed currency that cannot easily be purchased outside the country. Plan to exchange money on arrival at the airport bureau de change or withdraw from ATMs, which accept Visa, Mastercard, and Maestro. Most ATMs dispense 2,000 to 4,000 MAD per transaction. Notify your bank before traveling to prevent fraud blocks. While upscale hotels and restaurants accept credit cards, Morocco remains largely a cash economy. Carry small bills for medina shopping, taxis, tips, and street food. A good rule: budget 500-800 MAD per day for a comfortable mid-range trip.',
      },
      {
        icon: <CreditCard className="w-5 h-5" />,
        title: 'Register & Copy Documents',
        body: 'Before departure, register with your embassy or consulate (the US has STEP, the UK has FCDO registration). Make photocopies of your passport, visa, insurance policy, flight itineraries, and accommodation confirmations. Store digital copies in a secure cloud folder and carry paper copies separately from originals. Save the address and phone number of your country\'s embassy in Rabat and nearest consulate. Download offline maps of your destinations in Google Maps or Maps.me before you leave. Consider downloading a French or Arabic phrasebook app for communication in areas where English is limited.',
      },
    ],
  },

  /* ────────── GETTING AROUND ────────── */
  {
    id: 'getting-around',
    sectionTitle: 'Getting Around',
    sectionIcon: <Train className="w-6 h-6" />,
    sectionColor: 'var(--color-accent)',
    tips: [
      {
        icon: <Train className="w-5 h-5" />,
        title: 'Trains & Buses',
        body: 'Morocco\'s rail network (ONCF) is modern and affordable. The Al Boraq high-speed train links Tangier to Casablanca in just over two hours at 320 km/h, with stops at Kenitra and Rabat. Conventional trains connect Casablanca to Marrakech (3 hours), Fes (4 hours), and Oujda. First class is comfortable and air-conditioned. For destinations off the rail network, CTM and Supratours operate intercity buses with AC, WiFi, and reserved seating. Grand taxis (shared Mercedes sedans) connect smaller towns, departing when full with six passengers. They are cheap but cramped on long journeys.',
      },
      {
        icon: <Car className="w-5 h-5" />,
        title: 'Driving & Car Rental',
        body: 'Renting a car provides maximum flexibility for the Atlas Mountains, desert roads, and coastal routes. International agencies and local companies operate at airports and in cities. Roads between major cities are generally good dual carriageways, but mountain and rural roads can be narrow, winding, and occasionally unpaved. Driving is on the right. Carry your international driving permit alongside your national license. Watch for speed cameras (very frequent), livestock on rural roads, and unofficial parking attendants who expect 5-10 MAD. Fuel is affordable at around 14 MAD per liter. Always fill up before heading into remote areas.',
      },
      {
        icon: <Compass className="w-5 h-5" />,
        title: 'Navigating the Medinas',
        body: 'The ancient medinas of Fes, Marrakech, and other cities are labyrinths of narrow alleys where GPS often fails. Download offline maps and mark your riad\'s location before entering. Learn two or three key landmarks near your accommodation such as a mosque, fountain, or notable shop. When lost, head downhill toward the main gates (bab) or ask a shopkeeper rather than accepting help from strangers who may expect payment. Move aside for donkeys and handcarts, which always have right of way. Evenings can be disorienting, so carry a headlamp or phone flashlight. The medina reveals its best treasures to those who embrace getting slightly lost.',
      },
      {
        icon: <Map className="w-5 h-5" />,
        title: 'City Taxis & Ride-Hailing',
        body: 'Petit taxis are color-coded by city (red in Fes, beige in Marrakech, blue in Rabat) and are metered for rides within city limits. Always insist on the meter or agree on a fare before departing. Most rides within a city cost 10-30 MAD. Petit taxis take up to three passengers. For longer trips between cities, negotiate with grand taxis at designated stations. Ride-hailing apps InDrive and Careem operate in major cities and can be more convenient than negotiating with drivers. Domestic flights via Royal Air Maroc and Air Arabia Maroc connect Casablanca to Marrakech, Fes, Ouarzazate, and other cities at reasonable prices if booked early.',
      },
    ],
  },

  /* ────────── CULTURAL ETIQUETTE ────────── */
  {
    id: 'cultural-etiquette',
    sectionTitle: 'Cultural Etiquette',
    sectionIcon: <Users className="w-6 h-6" />,
    sectionColor: 'var(--color-secondary-dark)',
    tips: [
      {
        icon: <HandshakeIcon className="w-5 h-5" />,
        title: 'Greetings & Social Customs',
        body: 'Greetings matter deeply in Moroccan culture and rushing past them is considered rude. A standard greeting is "As-salamu alaykum" (peace be upon you) followed by a handshake. Many Moroccans place their right hand over their heart after shaking hands as a sign of sincerity. Close friends of the same gender exchange cheek kisses. Always use your right hand for greetings, eating, and giving or receiving objects. When meeting someone, ask about their health and family before jumping to business. Learning even a few Darija (Moroccan Arabic) phrases earns enormous goodwill and warmer treatment.',
      },
      {
        icon: <Shirt className="w-5 h-5" />,
        title: 'Dress Code & Modesty',
        body: 'While Morocco is among the most liberal Arab countries, modest dress is appreciated, especially outside major tourist zones. Cover shoulders and knees when visiting mosques (most are closed to non-Muslims except Hassan II in Casablanca), religious neighborhoods, and rural villages. Women may want to carry a light scarf. In cosmopolitan areas like Gueliz in Marrakech or the Casablanca Corniche, Western-style clothing is perfectly normal. Swimwear is for beaches and hotel pools only. Dressing modestly reduces unwanted attention and shows respect for local values, which Moroccans notice and appreciate.',
      },
      {
        icon: <Camera className="w-5 h-5" />,
        title: 'Photography Etiquette',
        body: 'Morocco is endlessly photogenic, but always ask permission before photographing people, especially women, children, and elderly individuals. Many market sellers will pose in exchange for a small tip of 5-10 MAD. Never photograph military installations, police checkpoints, or royal palaces without explicit permission. Photographing mosques from the outside is generally fine, but be discreet. Water sellers and snake charmers in Jemaa el-Fnaa will demand payment if you take their photo, sometimes aggressively. A good practice is to engage someone in conversation first, then politely ask if a photo is okay. Street photography of architecture and landscapes is generally unrestricted.',
      },
      {
        icon: <ShoppingCart className="w-5 h-5" />,
        title: 'Bargaining Like a Local',
        body: 'Bargaining is a social art in Morocco, not a confrontation. Start by browsing and showing mild interest. When a price is quoted, counter at roughly 30 to 40 percent of the asking price. The seller will counter-offer and you will meet somewhere around 50 to 70 percent of the initial price. Keep the exchange friendly and humorous. Never start bargaining unless you are genuinely interested. Walking away is a legitimate negotiating tactic, as the vendor will often call you back. Compare prices at several shops before committing. Fixed-price cooperatives for argan oil, carpets, and pottery offer fair prices without negotiation. Pharmacies, supermarkets, and chain stores have fixed prices.',
      },
      {
        icon: <CalendarDays className="w-5 h-5" />,
        title: 'Ramadan Awareness',
        body: 'During Ramadan, the holy month of fasting, daily life shifts significantly. Most Moroccans fast from dawn to sunset, and visitors should avoid eating, drinking, and smoking in public during daylight hours out of respect. Tourist restaurants typically remain open behind curtains or in enclosed spaces. The evening iftar meal breaking the fast is a wonderful cultural experience. The streets come alive after sunset with communal energy and festive food stalls. Many businesses operate on reduced hours. Ramadan dates shift annually by about 11 days, so check the calendar when planning. The three-day Eid al-Fitr celebration at the end of Ramadan can affect transport and accommodation availability.',
      },
    ],
  },

  /* ────────── FOOD & DRINK ────────── */
  {
    id: 'food-drink',
    sectionTitle: 'Food & Drink',
    sectionIcon: <Utensils className="w-6 h-6" />,
    sectionColor: 'var(--color-accent-dark)',
    tips: [
      {
        icon: <Droplets className="w-5 h-5" />,
        title: 'Water Safety',
        body: 'Tap water in Morocco is technically treated but not recommended for visitors. Stick to bottled water, which is inexpensive and available everywhere. The most popular brand is Sidi Ali (still) and Oulmès (sparkling). Avoid ice in drinks at small establishments, though upscale restaurants use purified ice. Use bottled water for brushing teeth during your first few days until your stomach adjusts. A filtered water bottle like LifeStraw or Grayl pays for itself quickly and reduces plastic waste. Freshly squeezed orange juice, ubiquitous in Morocco at 5 to 10 MAD per glass, is safe and delicious.',
      },
      {
        icon: <Utensils className="w-5 h-5" />,
        title: 'Street Food Safety',
        body: 'Moroccan street food is one of the great culinary experiences on Earth, and with basic precautions it is perfectly safe. Eat at stalls that are busy with locals as this means high food turnover and freshness. The best street food includes grilled lamb and kefta brochettes, snail soup (babouche), msemen flatbread, freshly fried sfenj donuts, and harira soup. Stick to food that is cooked to order and served hot. Avoid pre-made salads from stalls with questionable refrigeration. Jemaa el-Fnaa food stalls in Marrakech are a must-try but compare prices before sitting down. Street food costs between 10 and 40 MAD per serving.',
      },
      {
        icon: <Coins className="w-5 h-5" />,
        title: 'Tipping Culture',
        body: 'Tipping (pourboire) is customary and expected throughout Morocco. At restaurants leave 10 to 15 percent if service charge is not included. Tip hotel porters 10 to 20 MAD per bag, housekeeping 10 to 20 MAD per day left on the pillow, and riad staff 50 to 100 MAD at the end of your stay. Give taxi drivers the small change or round up. Tour guides deserve 100 to 200 MAD per day for private tours, with half that for group tours. Desert camp staff, cooking class hosts, and hammam attendants all appreciate 20 to 50 MAD. Budget approximately 50 to 100 MAD per day for tips. In Morocco anyone who provides a service, even unsolicited, may expect a small tip.',
      },
      {
        icon: <BookOpen className="w-5 h-5" />,
        title: 'Restaurant Customs & Dining',
        body: 'Moroccan meals are generous and communal. Traditional dishes like tagine and couscous are served in shared pots with bread used as your utensil. Eat from the section directly in front of you and use your right hand or bread to scoop. Couscous Friday is a weekly tradition where families gather for a large couscous lunch. In restaurants, do not rush. Meals are leisurely affairs and calling for the bill (l\'addition) is done by catching the waiter\'s eye, never by waving or snapping. Alcohol is served in licensed restaurants, hotel bars, and some riads, but public drunkenness is frowned upon and illegal. During Ramadan, be discreet about daytime dining.',
      },
    ],
  },

  /* ────────── SAFETY & HEALTH ────────── */
  {
    id: 'safety-health',
    sectionTitle: 'Safety & Health',
    sectionIcon: <ShieldCheck className="w-6 h-6" />,
    sectionColor: 'var(--color-primary-600)',
    tips: [
      {
        icon: <AlertTriangle className="w-5 h-5" />,
        title: 'Common Scams to Avoid',
        body: 'Being aware of common scams saves money and frustration. The "friendly guide" scam involves someone offering to lead you through the medina for free, then demanding a large payment. The henna artists of Jemaa el-Fnaa will grab your hand, apply henna, and demand 200+ MAD. The "closed today" scam has a person near an attraction telling you it is closed and redirecting you to a shop. Fake petitions and friendship bracelets are pretexts for demanding money. Taxi drivers may claim the meter is broken to overcharge. Protection: agree on prices before any service, ignore claims attractions are closed, insist on taxi meters, and keep a firm but friendly demeanor. A confident "la shukran" (no thank you) is your best tool.',
      },
      {
        icon: <Stethoscope className="w-5 h-5" />,
        title: 'Pharmacies & Medical Care',
        body: 'Moroccan pharmacies (look for the green cross sign) are well-stocked and pharmacists are often well-trained. Many medications that require prescriptions elsewhere are available over the counter, including basic antibiotics, antihistamines, and stomach remedies. They can provide basic medical consultations and are a good first stop for minor ailments. Pharmacies are found on virtually every commercial street. For more serious issues, private clinics in Casablanca, Rabat, Marrakech, and Fes offer good-quality care with French- and sometimes English-speaking doctors. Public hospitals are cheaper but less reliable. Keep your pharmacy receipts for insurance claims.',
      },
      {
        icon: <Phone className="w-5 h-5" />,
        title: 'Emergency Numbers & Contacts',
        body: 'Program these numbers into your phone before arrival. Police: 19. Ambulance/SAMU: 15. Fire: 15. Tourist Police (Brigade Touristique): 177. This specialized force in major tourist cities handles complaints and can mediate disputes. For roadside emergencies call 177 or the highway number 5050. The main hospitals to know are CHU Ibn Sina in Rabat, CHU Ibn Rochd in Casablanca, and Clinique Internationale in Marrakech. Your country\'s embassy in Rabat should be saved as an emergency contact. In a serious emergency, private clinics respond faster than public services. Morocco\'s country code is +212.',
      },
      {
        icon: <HeartPulse className="w-5 h-5" />,
        title: 'Health Precautions & Vaccinations',
        body: 'No mandatory vaccinations are required to enter Morocco, but ensure routine vaccines are current and consider hepatitis A, hepatitis B, and typhoid boosters, especially if eating adventurously or visiting rural areas. Consult a travel clinic four to six weeks before departure. Traveler\'s diarrhea is the most common ailment. Drink only bottled or filtered water, wash hands frequently, and carry rehydration salts. Pack a first-aid kit with sunscreen (the UV index is fierce), insect repellent for rural evenings, anti-diarrheal tablets, and any prescription medications in original packaging. Altitude sickness is possible when trekking above 3,000 meters in the High Atlas, so acclimatize gradually.',
      },
    ],
  },

  /* ────────── SAVING MONEY ────────── */
  {
    id: 'saving-money',
    sectionTitle: 'Saving Money',
    sectionIcon: <PiggyBank className="w-6 h-6" />,
    sectionColor: 'var(--color-green)',
    tips: [
      {
        icon: <CircleDollarSign className="w-5 h-5" />,
        title: 'Budget Accommodation Tips',
        body: 'Morocco offers exceptional value for budget travelers. Hostels in Marrakech and Fes start at 60 to 100 MAD per night for a dorm bed. Budget riads offer private rooms for 200 to 400 MAD with breakfast included. For longer stays, Airbnb apartments in the ville nouvelle are often cheaper than hotels and include a kitchen. Camping is popular in the Atlas Mountains and along the coast with campsites charging 30 to 60 MAD per tent. During the low season from June to August (except coastal cities) and December to February, accommodation prices can drop by 30 to 50 percent. Book directly with riads via WhatsApp for better rates than booking platforms.',
      },
      {
        icon: <Ticket className="w-5 h-5" />,
        title: 'Free & Low-Cost Activities',
        body: 'Many of Morocco\'s best experiences cost nothing. Wandering the medinas, watching sunset from rooftop terraces, exploring the blue streets of Chefchaouen, visiting public beaches, and people-watching in Jemaa el-Fnaa are all free. Most mosques are free to admire from the outside. Public gardens like the Cyber Park in Marrakech and Andalusian Gardens in Rabat are free. Hiking trails in the Atlas Mountains and along the coast require no entrance fees. Many museums cost only 10 to 70 MAD. Free walking tours operate in Marrakech, Fes, and Casablanca with a tip-based model. Attend a local hammam for as little as 10 to 20 MAD rather than paying 200+ MAD at a tourist one.',
      },
      {
        icon: <CalendarDays className="w-5 h-5" />,
        title: 'Seasonal Pricing & Timing',
        body: 'Timing your visit strategically saves significant money. Peak season runs from March to May and September to November when weather is ideal and prices are highest. The shoulder months of June and late November offer good weather with fewer crowds and lower prices. The deep summer months of July and August see high prices on the coast but steep discounts in interior cities where heat drives tourists away. Christmas, New Year, and Easter week are premium priced across the board. Flights to Morocco are cheapest when booked six to eight weeks in advance on mid-week departures. Consider flying into Marrakech or Casablanca with budget carriers like Ryanair or Transavia for the lowest fares.',
      },
      {
        icon: <Utensils className="w-5 h-5" />,
        title: 'Eating on a Budget',
        body: 'You can eat extremely well in Morocco for very little. A full street food meal of brochettes, bread, salad, and tea costs 20 to 40 MAD. A hearty bowl of harira soup from a market stall is 5 to 10 MAD. Set lunch menus at local restaurants range from 40 to 80 MAD for three courses. Avoid restaurants directly on main squares like Jemaa el-Fnaa where tourist premiums apply. Instead, walk one or two streets back to find where locals eat. Buy bread from bakeries for 1 to 2 MAD per loaf. Fresh fruit and vegetables from souks are remarkably cheap. Stock up on snacks, dates, and nuts from market vendors for hiking days.',
      },
    ],
  },

  /* ────────── COMMUNICATION & CONNECTIVITY ────────── */
  {
    id: 'communication',
    sectionTitle: 'Communication & Connectivity',
    sectionIcon: <Wifi className="w-6 h-6" />,
    sectionColor: 'var(--color-blue)',
    tips: [
      {
        icon: <Wifi className="w-5 h-5" />,
        title: 'SIM Cards & Mobile Data',
        body: 'Purchase a Moroccan SIM card at the airport or any telecom shop immediately upon arrival. Maroc Telecom offers the best coverage (especially in rural areas), followed by Inwi and Orange. Bring your passport as it is required for purchase. A prepaid SIM costs 20 to 50 MAD, and data packages are incredibly affordable: 20 to 40 MAD buys 5 to 20 GB of 4G data valid for 30 days. This is far cheaper and more reliable than international roaming. 4G coverage blankets cities and highways, with decent signal in most inhabited areas. Tethering is usually included so you can share your connection with travel companions.',
      },
      {
        icon: <Languages className="w-5 h-5" />,
        title: 'Language Tips & Useful Phrases',
        body: 'Moroccan Arabic (Darija) is the primary spoken language, with Amazigh (Berber) widely used in rural and mountain areas. French is the dominant second language in business, education, and urban life. English is growing among younger Moroccans and in tourist zones but is not widespread outside them. Spanish is common in the north around Tangier and Tetouan. Learning even basic Darija earns you smiles and better prices. Start with: "As-salamu alaykum" (hello), "Shukran" (thank you), "La shukran" (no thank you), "Bshhal?" (how much?), "Bezzaf" (too expensive), "Wakha" (okay), and "Inshallah" (God willing, used constantly). A translation app offline is invaluable.',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   QUICK REFERENCE DATA
   ═══════════════════════════════════════════════════════════════ */

const quickRefCards = [
  { icon: <Coins className="w-5 h-5" />, label: 'Currency', value: 'Moroccan Dirham (MAD)', detail: '~10 MAD = 1 USD' },
  { icon: <Phone className="w-5 h-5" />, label: 'Emergency', value: '19 (Police) / 15 (Ambulance)', detail: '177 (Tourist Police)' },
  { icon: <Zap className="w-5 h-5" />, label: 'Voltage', value: '220V / 50Hz', detail: 'Type C & E plugs' },
  { icon: <Clock className="w-5 h-5" />, label: 'Time Zone', value: 'GMT+1 (UTC+1)', detail: 'No daylight saving' },
  { icon: <Globe className="w-5 h-5" />, label: 'Languages', value: 'Arabic, Berber, French', detail: 'English in tourist areas' },
  { icon: <CloudSun className="w-5 h-5" />, label: 'Best Season', value: 'March-May / Sep-Nov', detail: 'Mild & pleasant' },
];

/* ═══════════════════════════════════════════════════════════════
   USEFUL PHRASES
   ═══════════════════════════════════════════════════════════════ */

interface Phrase {
  english: string;
  darija: string;
  french: string;
}

const usefulPhrases: Phrase[] = [
  { english: 'Hello / Peace be upon you', darija: 'As-salamu alaykum', french: 'Bonjour' },
  { english: 'Thank you', darija: 'Shukran', french: 'Merci' },
  { english: 'No, thank you', darija: 'La, shukran', french: 'Non, merci' },
  { english: 'How much?', darija: 'Bshhal?', french: 'Combien?' },
  { english: 'Too expensive', darija: 'Bezzaf / Ghali', french: 'Trop cher' },
  { english: 'Where is...?', darija: 'Fin kayn...?', french: 'Où est...?' },
  { english: 'Please', darija: 'Afak / Min fadlak', french: 'S\'il vous plait' },
  { english: 'Yes / Okay', darija: 'Iyeh / Wakha', french: 'Oui / D\'accord' },
  { english: 'Goodbye', darija: 'Bslama', french: 'Au revoir' },
  { english: 'Water', darija: 'L\'ma', french: 'De l\'eau' },
  { english: 'Delicious', darija: 'Bnin', french: 'Delicieux' },
  { english: 'God willing', darija: 'Inshallah', french: '--' },
];

/* ═══════════════════════════════════════════════════════════════
   TIPPING GUIDE
   ═══════════════════════════════════════════════════════════════ */

interface TippingItem {
  service: string;
  amount: string;
}

const tippingGuide: TippingItem[] = [
  { service: 'Restaurant (sit-down)', amount: '10-15% of bill' },
  { service: 'Hotel porter', amount: '10-20 MAD per bag' },
  { service: 'Housekeeping', amount: '10-20 MAD per day' },
  { service: 'Private tour guide', amount: '100-200 MAD per day' },
  { service: 'Group tour guide', amount: '50-100 MAD per day' },
  { service: 'Taxi driver', amount: 'Round up to nearest 5 MAD' },
  { service: 'Parking attendant', amount: '5-10 MAD' },
  { service: 'Hammam attendant', amount: '20-50 MAD' },
  { service: 'Riad staff (at checkout)', amount: '50-100 MAD total' },
  { service: 'Unsolicited helper', amount: '5-10 MAD (or decline)' },
];

/* ═══════════════════════════════════════════════════════════════
   JSON-LD (FAQPage schema)
   ═══════════════════════════════════════════════════════════════ */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: tipSections.flatMap((section) =>
    section.tips.map((tip) => ({
      '@type': 'Question',
      name: `What should I know about ${tip.title.toLowerCase()} when traveling to Morocco?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: tip.body,
      },
    }))
  ),
};

/* ═══════════════════════════════════════════════════════════════
   PAGE (Server Component)
   ═══════════════════════════════════════════════════════════════ */

export default function TipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Travel Tips</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=1600&q=80"
            alt="Blue streets of Chefchaouen, Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Practical Information
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Essential Morocco Travel Tips
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Over 25 expert tips organized into seven essential categories. From visa requirements and cultural
              etiquette to scam avoidance and budget strategies, this is everything you need for an unforgettable
              Moroccan journey.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* Quick Reference Cards */}
      <section className="container-morocco -mt-8 relative z-10 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickRefCards.map((card) => (
            <div key={card.label} className="card-moroccan p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                {card.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">{card.label}</p>
              <p className="font-heading font-semibold text-sm text-text-primary leading-tight">{card.value}</p>
              <p className="text-xs text-text-muted mt-1">{card.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Table of Contents */}
      <section className="container-morocco mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="card-moroccan p-6 md:p-8">
            <h2 className="font-heading font-semibold text-lg text-text-primary mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[var(--color-secondary)]" />
              Quick Navigation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {tipSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--surface-muted)] hover:bg-[var(--color-secondary)]/10 transition-colors text-sm text-text-secondary hover:text-[var(--color-secondary)]"
                >
                  <span style={{ color: section.sectionColor }}>{section.sectionIcon}</span>
                  <span className="font-medium">{section.sectionTitle}</span>
                </a>
              ))}
              <a
                href="#quick-reference"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--surface-muted)] hover:bg-[var(--color-accent)]/10 transition-colors text-sm text-text-secondary hover:text-[var(--color-accent)]"
              >
                <Lightbulb className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="font-medium">Quick Reference</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tip Sections */}
      {tipSections.map((section, sectionIdx) => (
        <section
          key={section.id}
          id={section.id}
          className={`pb-16 ${sectionIdx % 2 === 1 ? 'bg-[var(--surface-muted)]' : ''}`}
        >
          <div className={`container-morocco ${sectionIdx % 2 === 1 ? 'py-16' : 'pt-4'}`}>
            {/* Section Header */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl text-white"
                  style={{ backgroundColor: section.sectionColor }}
                >
                  {section.sectionIcon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: section.sectionColor }}>
                    {`Category ${sectionIdx + 1} of ${tipSections.length}`}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary">
                    {section.sectionTitle}
                  </h2>
                </div>
              </div>
            </div>

            {/* Tips Grid */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-5">
              {section.tips.map((tip, tipIdx) => (
                <div key={tipIdx} className="card-moroccan p-5 md:p-7">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 mt-0.5"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${section.sectionColor} 12%, transparent)`,
                        color: section.sectionColor,
                      }}
                    >
                      {tip.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                        {tip.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed text-[15px]">
                        {tip.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════════════════════════════════
         QUICK REFERENCE CARD SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section id="quick-reference" className="bg-[var(--color-primary-900)] text-white py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Keep This Handy
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Quick Reference Card
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Essential numbers, phrases, and tipping guidelines to save on your phone or print out before your trip.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Emergency Numbers */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <Phone className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-heading font-semibold text-lg">Emergency Numbers</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Police', number: '19' },
                  { label: 'Ambulance / Fire (SAMU)', number: '15' },
                  { label: 'Tourist Police', number: '177' },
                  { label: 'Highway Emergency', number: '5050' },
                  { label: 'Gendarmerie (Rural)', number: '177' },
                  { label: 'Country Code', number: '+212' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                    <span className="text-white/70 text-sm">{item.label}</span>
                    <span className="font-mono font-semibold text-[var(--color-accent)]">{item.number}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Useful Phrases */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <Languages className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-heading font-semibold text-lg">Essential Phrases</h3>
              </div>
              <div className="space-y-2.5">
                {usefulPhrases.map((phrase) => (
                  <div key={phrase.english} className="py-1.5 border-b border-white/10 last:border-0">
                    <p className="text-white/50 text-xs uppercase tracking-wide mb-0.5">{phrase.english}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium text-sm">{phrase.darija}</span>
                      {phrase.french !== '--' && (
                        <span className="text-white/40 text-xs italic">{phrase.french}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tipping Guide */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <Coins className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-heading font-semibold text-lg">Tipping Guide</h3>
              </div>
              <div className="space-y-2.5">
                {tippingGuide.map((item) => (
                  <div key={item.service} className="flex items-center justify-between py-1.5 border-b border-white/10 last:border-0">
                    <span className="text-white/70 text-sm">{item.service}</span>
                    <span className="text-white font-medium text-sm whitespace-nowrap ml-3">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         PRO TIPS CALLOUT
         ═══════════════════════════════════════════════════════════ */}
      <section className="container-morocco py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--color-secondary)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Insider Knowledge
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Pro Tips from Seasoned Travelers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: <Star className="w-5 h-5" />,
                title: 'The Best Time to Visit Souks',
                body: 'Visit medina souks early in the morning (9-10 AM) for the calmest experience and most attentive shopkeepers. Late morning to mid-afternoon is peak tourist hours with the most aggressive touts. Evening visits after 5 PM offer a wonderful local atmosphere as Moroccans shop for dinner ingredients.',
              },
              {
                icon: <Thermometer className="w-5 h-5" />,
                title: 'Beat the Heat Strategy',
                body: 'In summer, adopt the Moroccan rhythm: explore early morning and late afternoon, then retreat to your air-conditioned riad or a shaded cafe during the 12-4 PM heat. Hammams, museums, and long lunches are perfect midday activities when temperatures soar.',
              },
              {
                icon: <Footprints className="w-5 h-5" />,
                title: 'Shoe Strategy for Medinas',
                body: 'Wear closed-toe shoes with good grip in the medinas. Cobblestones are uneven and often slippery, especially after rain. Bring slip-on shoes or sandals for riad visits where you remove footwear at the door. Hiking boots are essential only for Atlas Mountain treks.',
              },
              {
                icon: <Landmark className="w-5 h-5" />,
                title: 'ATM & Cash Strategy',
                body: 'Withdraw larger amounts less frequently to minimize ATM fees. CIH Bank and Attijariwafa Bank ATMs are widely reliable. Keep a stash of small bills (10 and 20 MAD notes) for tips, small purchases, and taxis. Many vendors cannot break 200 MAD notes.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 md:p-6 border-l-4 border-l-[var(--color-accent)]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[var(--color-accent)]">{tip.icon}</span>
                  <h3 className="font-heading font-semibold text-text-primary">{tip.title}</h3>
                </div>
                <p className="text-text-secondary text-[15px] leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--surface-muted)] py-12">
        <div className="container-morocco text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Ready to Plan Your Moroccan Adventure?
          </h2>
          <p className="text-text-secondary mb-6 max-w-xl mx-auto">
            Now that you have the essential knowledge, explore our city guides, itineraries, and accommodation recommendations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-heading font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Explore Cities <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-heading font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              View Itineraries <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Accessibility,
  MapPin,
  Star,
  Hotel,
  Bus,
  CheckCircle,
  Phone,
  Globe,
  Heart,
  AlertTriangle,
  Info,
  Building,
  Users,
  Shield,
  Clock,
  Compass,
  ThumbsUp,
  Eye,
  FileText,
  Stethoscope,
  MessageCircle,
  Wrench,
  PlaneTakeoff,
  Pill,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accessible Morocco Travel Guide | Wheelchair Access, Adapted Hotels & Tips',
  description:
    'Honest, practical guide to accessible travel in Morocco. Wheelchair-friendly destinations ranked, adapted hotels, accessible attractions, transport options, specialized tour operators, and essential tips for travelers with disabilities.',
  keywords: [
    'accessible travel morocco',
    'wheelchair morocco',
    'disability travel morocco',
    'accessible hotels morocco',
    'wheelchair friendly marrakech',
    'accessible agadir',
    'morocco disability guide',
    'adapted transport morocco',
    'accessible attractions morocco',
    'inclusive travel morocco',
    'mobility impaired morocco',
    'accessible tours morocco',
    'wheelchair travel africa',
    'accessible riads morocco',
    'morocco accessibility',
  ],
  openGraph: {
    title: 'Accessible Morocco Travel Guide | Wheelchair Access & Adapted Hotels',
    description:
      'Practical, honest guide to traveling Morocco with a disability. Ranked destinations, adapted hotels, accessible attractions, and specialized tour operators.',
    url: 'https://citytoursmorocco.com/accessible-travel',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Accessible travel in modern Morocco cityscape',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAction',
  name: 'Accessible Travel in Morocco',
  description:
    'A comprehensive guide for travelers with disabilities visiting Morocco, covering accessible destinations, adapted accommodations, transport, and specialized tour operators.',
  url: 'https://citytoursmorocco.com/accessible-travel',
  location: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

const accessibleDestinations = [
  {
    city: 'Agadir',
    rating: 5,
    level: 'Best',
    color: 'bg-emerald-500',
    description: 'Morocco\'s most accessible city by far. Rebuilt after a 1960 earthquake, Agadir has modern, flat infrastructure designed with wide boulevards and accessible beach promenades. Most resort hotels have full wheelchair access, adapted rooms, and pool lifts. The long, flat beachfront corniche is fully paved and barrier-free.',
    highlights: ['Flat terrain throughout the city', 'Modern resort hotels with adapted rooms', 'Accessible beach promenade (6 km)', 'Ramp access at most restaurants and malls', 'Accessible taxis available'],
    image: '/images/card-beach.webp',
  },
  {
    city: 'Casablanca',
    rating: 4,
    level: 'Good',
    color: 'bg-blue-500',
    description: 'Morocco\'s largest and most modern city has improving accessibility. The tramway system is fully wheelchair-accessible, major malls (Morocco Mall, Anfa Place) have elevators and adapted facilities, and international hotel chains offer full accessibility. The Hassan II Mosque has ramp access to the ground floor.',
    highlights: ['Wheelchair-accessible tram system', 'Modern malls with elevators', 'International hotel chains with adapted rooms', 'Hassan II Mosque ground floor accessible', 'Flat coastal corniche'],
    image: '/images/hero-coastal.webp',
  },
  {
    city: 'Rabat',
    rating: 4,
    level: 'Good',
    color: 'bg-blue-500',
    description: 'Morocco\'s capital has invested significantly in accessibility. The tram system is fully accessible, and modern attractions like the Mohammed VI Museum of Modern Art are designed with universal access. The Kasbah of the Udayas has some accessible routes, and the new town (Ville Nouvelle) is largely flat with dropped curbs.',
    highlights: ['Fully accessible tram network', 'Mohammed VI Museum fully accessible', 'Modern Ville Nouvelle with dropped curbs', 'Accessible government buildings', 'Flat terrain in main areas'],
    image: '/images/hero-souk-lamps.webp',
  },
  {
    city: 'Marrakech',
    rating: 3,
    level: 'Moderate',
    color: 'bg-yellow-500',
    description: 'A tale of two cities. The Ville Nouvelle (Gueliz) is relatively accessible with flat streets, modern hotels, and accessible restaurants. The Medina, however, is extremely challenging: narrow alleys, uneven cobblestones, steps, and no ramps. Jemaa el-Fna square is flat but crowded. Some riads have ground-floor rooms, but most have stairs.',
    highlights: ['Gueliz (new town) relatively flat', 'Major hotels fully adapted', 'Jemaa el-Fna accessible but crowded', 'Majorelle Garden has paved paths', 'Medina very challenging for wheelchairs'],
    image: '/images/hero-marrakech.webp',
  },
  {
    city: 'Tangier',
    rating: 3,
    level: 'Moderate',
    color: 'bg-yellow-500',
    description: 'Tangier has a flat, accessible coastal promenade and a modern Ville Nouvelle, but the historic Kasbah and medina are built on a steep hillside and are essentially inaccessible for wheelchair users. The new TGV train station is fully accessible, and major hotels near the seafront meet international standards.',
    highlights: ['Flat coastal promenade', 'TGV station fully accessible', 'Modern seafront hotels adapted', 'Grand Socco area manageable', 'Medina and Kasbah very steep'],
    image: '/images/hero-chefchaouen-drone.webp',
  },
  {
    city: 'Meknes',
    rating: 3,
    level: 'Moderate',
    color: 'bg-yellow-500',
    description: 'The Ville Nouvelle is flat and manageable, with the main boulevard (Avenue Mohammed V) having dropped curbs. The Imperial City monuments (Bab Mansour, Royal Stables) have flat ground-level access. The medina has some wider streets than Fes but still presents challenges with uneven surfaces.',
    highlights: ['Flat Ville Nouvelle', 'Bab Mansour area accessible', 'Royal Stables ground-level access', 'Volubilis ruins partially accessible', 'Medina has some wider streets'],
    image: '/images/hero-marrakech.webp',
  },
  {
    city: 'Essaouira',
    rating: 2,
    level: 'Challenging',
    color: 'bg-orange-500',
    description: 'The fortified medina is compact and characterful but has cobblestone streets, narrow passages, and steps at many buildings. The beach is accessible along the northern section near the harbour, and the main street (Avenue de l\'Istiqlal) is wider and flatter. Some hotels outside the medina have better accessibility. Strong winds can be an additional challenge.',
    highlights: ['Beach accessible near harbour', 'Main avenue wider and flatter', 'Some outside-medina hotels adapted', 'Ramparts have some ramp access', 'Cobblestones throughout medina'],
    image: '/images/hero-coastal.webp',
  },
  {
    city: 'Ouarzazate',
    rating: 2,
    level: 'Challenging',
    color: 'bg-orange-500',
    description: 'The modern town center is flat and relatively navigable, and some desert resort hotels have adapted rooms. However, the main attractions (Ait Benhaddou kasbah, Atlas Film Studios) involve rough terrain, steep paths, and stairs. Desert excursions require specialized vehicles and planning.',
    highlights: ['Flat town center', 'Some resort hotels adapted', 'Ait Benhaddou very steep and rough', 'Atlas Studios partially accessible', 'Desert excursions need planning'],
    image: '/images/hero-desert.webp',
  },
  {
    city: 'Fes',
    rating: 1,
    level: 'Very Challenging',
    color: 'bg-red-500',
    description: 'The world\'s largest car-free urban area is one of the most difficult destinations for wheelchair users anywhere. The Fes el-Bali medina has steep, narrow alleys, uneven steps, and no ramps. Even able-bodied visitors find it physically demanding. The Ville Nouvelle is more manageable but still has limited infrastructure. A private guide and strong companion are essential.',
    highlights: ['Ville Nouvelle somewhat flat', 'Some luxury hotels adapted', 'Medina essentially inaccessible by wheelchair', 'Very steep narrow alleys', 'Private guide strongly recommended'],
    image: '/images/hero-fes-tanneries.webp',
  },
  {
    city: 'Chefchaouen',
    rating: 1,
    level: 'Very Challenging',
    color: 'bg-red-500',
    description: 'The Blue City is built on a hillside in the Rif Mountains. Virtually every street involves steps or steep inclines. The blue-washed medina, while beautiful, is one of the least accessible destinations in Morocco. The main square (Place Outa el-Hammam) is relatively flat but reaching it requires navigating slopes. Not recommended for wheelchair users without very strong assistance.',
    highlights: ['Main square relatively flat', 'A few hotels with ground-floor rooms', 'Built entirely on steep hillside', 'Steps on virtually every street', 'Not wheelchair accessible overall'],
    image: '/images/hero-chefchaouen-drone.webp',
  },
];

const accessibleHotels = [
  { name: 'Sofitel Agadir Royal Bay Resort', city: 'Agadir', stars: 5, features: 'Full wheelchair access, adapted rooms with roll-in showers, pool lift, accessible restaurant, beach wheelchair available.' },
  { name: 'Tikida Beach Hotel', city: 'Agadir', stars: 4, features: 'Adapted rooms, ground-floor access, accessible pool area, flat beach access, wheelchair-friendly restaurant.' },
  { name: 'Four Seasons Resort Marrakech', city: 'Marrakech', stars: 5, features: 'Fully adapted suites, accessible gardens, pool lift, wheelchair-accessible spa, ground-floor dining.' },
  { name: 'La Mamounia', city: 'Marrakech', stars: 5, features: 'Adapted luxury rooms, elevator access throughout, accessible gardens, ground-floor restaurant options.' },
  { name: 'Royal Mansour', city: 'Marrakech', stars: 5, features: 'Private riads with ground-floor accessibility, personal butler assistance, adapted bathrooms.' },
  { name: 'Hyatt Regency Casablanca', city: 'Casablanca', stars: 5, features: 'ADA-compliant rooms, accessible common areas, adapted fitness center, near accessible tram stop.' },
  { name: 'Sofitel Casablanca Tour Blanche', city: 'Casablanca', stars: 5, features: 'Adapted rooms, elevator access, wheelchair-friendly restaurants, accessible meeting rooms.' },
  { name: 'Hilton Rabat', city: 'Rabat', stars: 5, features: 'Wheelchair-accessible rooms with roll-in showers, accessible pool, near tram stop, flat surrounding streets.' },
  { name: 'Fairmont Royal Palm Marrakech', city: 'Marrakech', stars: 5, features: 'Sprawling flat grounds, adapted villas, golf carts for mobility, accessible pool and spa.' },
  { name: 'Hilton Tangier Al Houara', city: 'Tangier', stars: 5, features: 'Modern resort with adapted rooms, accessible beach, flat grounds, wheelchair-friendly throughout.' },
  { name: 'Kenzi Tower Hotel', city: 'Casablanca', stars: 5, features: 'Business hotel with adapted rooms, central location, elevator access, near accessible tram.' },
  { name: 'Banyan Tree Tamouda Bay', city: 'Tetouan', stars: 5, features: 'Luxury resort with adapted pool villas, flat grounds, accessible beach, golf cart transfers.' },
];

const accessibleAttractions = [
  { name: 'Hassan II Mosque, Casablanca', access: 'Good', notes: 'Ground floor accessible via ramps. Guided tours accommodate wheelchairs. The esplanade and exterior courtyard are fully accessible. Upper floors not accessible.' },
  { name: 'Mohammed VI Museum, Rabat', access: 'Excellent', notes: 'Purpose-built modern museum with full accessibility. Elevators, wide corridors, accessible restrooms, tactile guides for visually impaired visitors.' },
  { name: 'Majorelle Garden, Marrakech', access: 'Good', notes: 'Paved pathways throughout, mostly flat. A few narrow sections. The Berber Museum inside has elevator access. Staff will assist with any difficult sections.' },
  { name: 'Agadir Beach Promenade', access: 'Excellent', notes: 'Fully paved 6 km promenade with no steps. Beach wheelchairs available at some beach clubs. Flat access to restaurants along the strip.' },
  { name: 'Rabat Tram Route', access: 'Excellent', notes: 'All tram stops have platform-level boarding. Takes you past Hassan Tower, Parliament, the medina entrance, and main shopping areas.' },
  { name: 'Morocco Mall, Casablanca', access: 'Excellent', notes: 'Full accessibility throughout. Elevators, escalators, accessible restrooms on every floor, wheelchair rental available, adapted parking.' },
  { name: 'Royal Stables, Meknes', access: 'Good', notes: 'Flat, open space with smooth ground. Impressive architecture viewable at ground level. No steps required for main viewing areas.' },
  { name: 'Menara Gardens, Marrakech', access: 'Good', notes: 'Flat, paved paths around the iconic reflecting pool. Olive groves accessible on smooth ground. Atlas Mountain views from accessible viewpoints.' },
  { name: 'Casablanca Corniche', access: 'Good', notes: 'Long, flat coastal promenade with accessible restaurants and cafes. Some sections recently renovated with improved surfaces.' },
  { name: 'Ouzoud Waterfalls (Viewing)', access: 'Moderate', notes: 'The upper viewpoint is accessible by car. The descent to the base involves 200+ steps and is not wheelchair accessible. Upper views are spectacular.' },
  { name: 'Volubilis Roman Ruins', access: 'Moderate', notes: 'Flat terrain but rough ground in places. The main processional way is relatively smooth. The Triumphal Arch area is accessible with assistance.' },
  { name: 'Kasbah of Oudaias, Rabat', access: 'Moderate', notes: 'The Andalusian Gardens inside are flat and paved. The main gate is accessible. Inner streets have some steps and uneven surfaces.' },
  { name: 'Bahia Palace, Marrakech', access: 'Moderate', notes: 'Ground floor largely accessible with wide doorways and flat courtyards. Not all rooms accessible but the main courtyard and gardens are.' },
  { name: 'Hassan Tower, Rabat', access: 'Good', notes: 'The esplanade around the tower is flat and paved. The Mausoleum of Mohammed V has ramp access. A smooth, accessible site with important history.' },
  { name: 'Chellah Necropolis, Rabat', access: 'Moderate', notes: 'The upper gardens have paved paths. The lower ruins involve steep paths and stairs. The stork nesting colonies visible from accessible viewpoints.' },
];

const transportOptions = [
  {
    type: 'Private Drivers & Adapted Vehicles',
    icon: Bus,
    detail: 'The most practical option for wheelchair users. Several companies offer adapted minivans with ramps or lifts. Book in advance through specialized tour operators. Expect $80-150/day for a private adapted vehicle with driver. This is strongly recommended as the default transport mode for wheelchair users.',
  },
  {
    type: 'ONCF Trains',
    icon: Bus,
    detail: 'Morocco\'s national rail service has made progress. The Al Boraq (TGV) between Tangier and Casablanca is fully accessible with dedicated wheelchair spaces and accessible toilets. Standard trains have varied accessibility: newer rolling stock has wheelchair spaces, but older trains may require assistance. Station platforms are generally level with trains. Book assistance 48 hours in advance through the ONCF website.',
  },
  {
    type: 'Urban Trams (Casablanca & Rabat)',
    icon: Bus,
    detail: 'Both tram systems are fully wheelchair-accessible with level boarding, audio-visual announcements, and designated wheelchair spaces. The most accessible public transport in Morocco. Casablanca has 2 lines; Rabat has 2 lines connecting key areas.',
  },
  {
    type: 'Grand Taxis & Petits Taxis',
    icon: Bus,
    detail: 'Standard taxis are not adapted. Petit taxis (city) can accommodate folding wheelchairs in the trunk. Grand taxis (intercity, shared Mercedes) have limited space. Pre-arrange accessible taxis through your hotel. Some drivers will assist with transfers, but this is not guaranteed.',
  },
  {
    type: 'Domestic Flights',
    icon: Bus,
    detail: 'Royal Air Maroc and Air Arabia Maroc follow international accessibility standards. Request wheelchair assistance when booking. Airports in Casablanca, Marrakech, and Agadir have full accessibility. Smaller airports may have limited facilities. Aisle wheelchairs available on most flights.',
  },
  {
    type: 'CTM & Supratours Buses',
    icon: Bus,
    detail: 'Intercity buses are generally not wheelchair-accessible. No lifts or ramps. Luggage compartments can store folding wheelchairs. Drivers may assist with boarding but it is not guaranteed. For wheelchair users, private transport or trains are strongly preferred.',
  },
];

const practicalTips = [
  {
    tip: 'Call Ahead - Always',
    detail: 'Moroccan businesses may claim accessibility that does not match reality. Always call hotels, restaurants, and attractions directly to confirm specific access features. Ask for photos of accessible routes, room doorways, and bathroom layouts.',
  },
  {
    tip: 'Bring a Portable Ramp',
    detail: 'A lightweight, folding portable ramp (60-90 cm) can solve many single-step barriers at restaurant and shop entrances. This simple tool dramatically increases accessible places available to you.',
  },
  {
    tip: 'Accessible Toilets Are Rare',
    detail: 'Genuinely adapted public toilets are uncommon outside of major hotels and modern malls. Plan your route around hotels and shopping centers where you can access adapted facilities. Carry a RADAR key if applicable.',
  },
  {
    tip: 'Hire a Local Guide',
    detail: 'A knowledgeable local guide is invaluable for navigating accessibility challenges. They know which routes work, which shops have level access, and can negotiate assistance. Many guides have experience with disabled travelers.',
  },
  {
    tip: 'Wheelchair Repair',
    detail: 'Bring a basic repair kit for your wheelchair. Specialist wheelchair repair shops exist in Casablanca and Rabat but are rare elsewhere. Bicycle repair shops can often help with tire punctures and basic mechanical issues.',
  },
  {
    tip: 'Medina Strategy',
    detail: 'If you use a manual wheelchair and want to experience a medina, go early morning (before 9 AM) when streets are emptiest. Stick to main arteries which are widest. Have a companion who can help with bumps and curbs. Consider a medina edge experience rather than deep exploration.',
  },
  {
    tip: 'Desert Experiences Are Possible',
    detail: 'Several tour operators offer adapted desert experiences including 4x4 vehicles with ramps, accessible luxury desert camps with adapted tents, and camel rides with mounting assistance. Book well in advance with specialized operators.',
  },
  {
    tip: 'Travel Insurance',
    detail: 'Ensure your travel insurance covers pre-existing conditions and wheelchair/equipment damage. Morocco\'s healthcare facilities in major cities are good but rural areas have limited medical infrastructure. Carry a medical summary in French and Arabic.',
  },
  {
    tip: 'Pharmacies and Medical Equipment',
    detail: 'Pharmacies in major cities stock basic medical supplies. Oxygen, catheters, and specialized equipment can be sourced in Casablanca and Rabat. Bring sufficient supplies for your entire trip plus extra for delays.',
  },
  {
    tip: 'Cultural Attitudes',
    detail: 'Moroccans are generally very helpful and willing to assist. It is common for strangers to offer help carrying wheelchairs over obstacles. Accept graciously or decline politely. Disability is treated with compassion rather than awkwardness in Moroccan culture.',
  },
];

const tourOperators = [
  {
    name: 'Accessible Morocco Tours',
    specialty: 'Full-service accessible tourism',
    description: 'Morocco\'s leading accessible travel operator. Adapted vehicles with ramps, accessible hotel partnerships, trained guides experienced with all types of disabilities. Custom itineraries from weekend breaks to two-week tours.',
    services: ['Adapted vehicles with wheelchair ramps', 'Accessible hotel bookings', 'Trained accessible tourism guides', 'Equipment rental (beach wheelchairs, shower chairs)'],
  },
  {
    name: 'Morocco For All',
    specialty: 'Wheelchair-accessible city tours',
    description: 'Specializing in accessible guided tours of Marrakech, Fes, and Casablanca. Detailed route planning to avoid barriers, with backup alternatives for every stop. Small group and private tours available.',
    services: ['Pre-scouted accessible routes', 'Manual and electric wheelchair rental', 'Adapted vehicle transfers', 'Sign language interpreters available'],
  },
  {
    name: 'Sahara Accessible Experience',
    specialty: 'Accessible desert tours',
    description: 'Pioneering accessible desert experiences. Adapted 4x4 vehicles, accessible luxury desert camps with adapted tents and bathrooms, camel mounting assistance, and trained desert guides. A genuinely unique experience for wheelchair users.',
    services: ['Adapted 4x4 desert vehicles', 'Accessible luxury desert camps', 'Camel ride mounting assistance', 'Adapted stargazing setups'],
  },
  {
    name: 'Enable Travel Morocco',
    specialty: 'Sensory and cognitive disability support',
    description: 'Beyond mobility access, this operator specializes in supporting travelers with visual impairments, hearing loss, autism, and learning disabilities. Sensory-friendly itineraries, quiet accommodation options, and guides trained in various communication methods.',
    services: ['Audio-described tours', 'Sensory-friendly itineraries', 'Quiet accommodation options', 'Braille and large-print materials'],
  },
  {
    name: 'Atlas Adapted Adventures',
    specialty: 'Accessible outdoor experiences',
    description: 'Outdoor activities adapted for disabled travelers. Assisted trekking (joelette chairs for mountain trails), adapted kayaking, accessible birdwatching hides, and nature experiences designed for various abilities.',
    services: ['Joelette mountain chairs with porters', 'Adapted kayak and canoe experiences', 'Accessible birdwatching hides', 'Seated zip-lining and via ferrata'],
  },
];

const visaAndDocumentation = [
  {
    title: 'Disability Documentation for Entry',
    icon: FileText,
    detail: 'Morocco does not require special visa documentation for travelers with disabilities. Standard visa rules apply (visa-free for most EU, US, UK, Canadian, and Australian passport holders for stays up to 90 days). However, carrying documentation of your disability and medical needs in French and Arabic is strongly recommended for smooth passage through customs with medical equipment.',
  },
  {
    title: 'Traveling with Medical Equipment',
    icon: Stethoscope,
    detail: 'Bring a letter from your doctor (in French or English) detailing your medical condition and the equipment you carry. This is essential for power wheelchairs, portable oxygen concentrators, CPAP machines, and injectable medications. Customs officers may inspect medical equipment but rarely deny entry. Keep batteries and chargers in carry-on luggage.',
  },
  {
    title: 'Importing Medication',
    icon: Pill,
    detail: 'Bring prescriptions in their original packaging with a doctor\'s letter listing generic drug names in French or English. Morocco\'s customs allow personal supplies of prescription medication for the duration of your trip. For controlled substances (opioid painkillers, some anti-anxiety medications), contact the Moroccan Embassy in advance for specific authorization if needed.',
  },
  {
    title: 'Airport Assistance',
    icon: PlaneTakeoff,
    detail: 'Request Special Assistance (SSR codes WCHC, WCHR, or WCHS) when booking your flight. Mohammed V (Casablanca), Marrakech Menara, and Agadir Al Massira airports have dedicated assistance teams, accessible toilets, and level boarding bridges. Smaller airports like Fes-Saiss and Tangier may use ambulift vehicles for boarding. Arrive at least 3 hours early for international flights.',
  },
  {
    title: 'Travel Insurance Considerations',
    icon: Shield,
    detail: 'Ensure your policy explicitly covers pre-existing conditions, wheelchair and mobility aid damage or loss, medical evacuation, and trip cancellation due to disability-related illness. Companies like Battleface, World Nomads, and AllClear specialize in coverage for travelers with disabilities. Morocco\'s private hospitals in Casablanca and Marrakech are excellent, but costs can escalate quickly without insurance.',
  },
  {
    title: 'Companion and Carer Visas',
    icon: Users,
    detail: 'If traveling with a paid carer or personal assistant, they follow standard visa rules. No special work permit is needed for a carer accompanying a disabled traveler on holiday. Some airlines offer discounted companion fares for travelers requiring full-time assistance; inquire when booking.',
  },
];

const medicalEquipmentRental = [
  {
    item: 'Manual Wheelchair',
    availability: 'Readily available',
    cities: 'Casablanca, Marrakech, Agadir, Rabat',
    cost: '150-300 MAD/day',
    notes: 'Book through your hotel concierge or tour operator. Quality varies; bring your own if possible. Some pharmacies in the Ville Nouvelle areas stock basic models.',
  },
  {
    item: 'Electric Wheelchair / Scooter',
    availability: 'Limited',
    cities: 'Casablanca, Marrakech',
    cost: '400-800 MAD/day',
    notes: 'Must be reserved well in advance through specialized tour operators. Ensure your accommodation has charging facilities. Bring your own charger and a universal adapter (Morocco uses Type C and E plugs).',
  },
  {
    item: 'Beach Wheelchair',
    availability: 'Limited',
    cities: 'Agadir',
    cost: '100-200 MAD/day',
    notes: 'Available at select Agadir beach clubs and some resort hotels including Sofitel Royal Bay. Wide-tire models that navigate sand. Advance booking essential during summer months.',
  },
  {
    item: 'Shower Chair / Bath Bench',
    availability: 'Moderate',
    cities: 'Major cities',
    cost: '50-100 MAD/day',
    notes: 'Most 4-5 star international hotels can provide on request. For riads and smaller properties, rent through a tour operator or bring a portable folding shower seat.',
  },
  {
    item: 'Portable Oxygen Concentrator',
    availability: 'Moderate',
    cities: 'Casablanca, Rabat, Marrakech',
    cost: '300-600 MAD/day',
    notes: 'Available from medical supply companies in major cities. Requires a doctor\'s prescription. Advance booking of at least one week recommended. Cylinders can also be refilled at major hospital pharmacies.',
  },
  {
    item: 'CPAP Machine',
    availability: 'Moderate',
    cities: 'Casablanca, Marrakech',
    cost: '200-400 MAD/day',
    notes: 'Better to bring your own, but rental is possible through medical equipment suppliers. Bring your own mask and tubing. Voltage in Morocco is 220V with Type C/E plugs.',
  },
  {
    item: 'Hoyer Lift / Patient Hoist',
    availability: 'Very limited',
    cities: 'Casablanca',
    cost: '500-1,000 MAD/day',
    notes: 'Only available through specialized medical suppliers in Casablanca. Must be arranged weeks in advance. Consider whether your accommodation has sufficient space and doorway width.',
  },
  {
    item: 'Pressure Relief Cushion',
    availability: 'Moderate',
    cities: 'Major cities',
    cost: '80-150 MAD/day',
    notes: 'Available from medical supply stores and some pharmacies. Memory foam and gel cushions available. Recommended for long travel days in adapted vehicles.',
  },
];

const travelerStories = [
  {
    name: 'Sarah M.',
    disability: 'Wheelchair user (paraplegic)',
    trip: '10 days: Marrakech, Essaouira, Agadir',
    quote: 'Agadir was genuinely excellent for wheelchair access. The promenade, the beach clubs, and the modern hotels made it feel easy. Marrakech was harder, but with our amazing guide, we experienced the medina from accessible viewpoints and the Gueliz area was completely manageable. The warmth of Moroccan people made every challenge feel smaller.',
    tip: 'Book everything through a specialized accessible tour operator. It costs more but removes all the stress. Our adapted van was the single best investment of the trip.',
  },
  {
    name: 'David & Ruth K.',
    disability: 'Visual impairment (David is registered blind)',
    trip: '7 days: Fes, Marrakech',
    quote: 'Morocco is an extraordinary sensory experience for someone with visual impairment. The sounds of the medina, the smell of spices, the feel of handcrafted zellige tiles, and the taste of incredible food made this the most vivid holiday we have ever taken. Our guide from Enable Travel Morocco was exceptional, describing everything and ensuring we could touch and feel the craftsmanship.',
    tip: 'Request audio-described tours and ask your guide to focus on non-visual sensory experiences. The leather tanneries, spice markets, and cooking classes are especially rich for blind and partially sighted travelers.',
  },
  {
    name: 'James T.',
    disability: 'Ambulatory wheelchair user (MS)',
    trip: '14 days: Casablanca, Rabat, Marrakech, Atlas Mountains, Sahara',
    quote: 'The Sahara was my dream and we made it happen. An adapted 4x4 took us to a luxury camp where they had prepared an accessible tent with grab rails and a wide entrance. Watching the sunset from the dunes, with help from our guide to reach the viewing point, was the most profound moment of my life.',
    tip: 'Be honest about your abilities and limitations when booking. The good operators will plan around your needs without limiting your experiences. The bad ones will just say everything is accessible. Push for specifics.',
  },
  {
    name: 'Priya S.',
    disability: 'Autistic adult',
    trip: '5 days: Essaouira',
    quote: 'Essaouira was the perfect pace for me. It is much calmer than Marrakech, the medina is small and easy to navigate, and I could retreat to my riad whenever I felt overwhelmed. The routine of morning beach walks, afternoon reading in the garden, and evening medina strolls worked beautifully. The staff at our riad were understanding and gave me space when I needed it.',
    tip: 'Choose one base rather than moving between cities. Request a quiet room away from the street. Bring noise-canceling headphones for the souks. The off-season months of November to February are significantly quieter.',
  },
];

export default function AccessibleTravelPage() {
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
              'url(/images/hero-marrakech.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Accessible Travel</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Accessibility className="w-4 h-4 text-blue-400" />
            Inclusive Travel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Accessible Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            An honest, practical guide for travelers with disabilities. Morocco is improving, and with
            the right planning, its extraordinary culture and landscapes are increasingly within reach.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Accessibility Overview */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco Accessibility Overview
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Let us be honest upfront: Morocco is not the easiest destination for travelers with
                disabilities, particularly wheelchair users. Ancient medinas were built centuries before
                accessibility was a concept, with narrow alleys, steps, and cobblestones that present
                real barriers. However, the country is improving rapidly, and with proper planning, a
                rewarding Moroccan experience is absolutely achievable.
              </p>
              <p>
                Modern Morocco exists alongside the ancient. Cities like Agadir, Casablanca, and Rabat
                have invested in accessible infrastructure including tram systems, modern hotels, and
                barrier-free public spaces. The government passed Law 97-13 on the rights of persons with
                disabilities in 2016, and new construction increasingly incorporates accessibility
                standards. The tourism industry is waking up to the potential of accessible travel.
              </p>
              <p>
                The key to a successful accessible trip to Morocco is choosing the right destinations
                and accommodations, booking adapted transport in advance, and traveling with realistic
                expectations. The cultural warmth of Moroccans, who are genuinely eager to help, often
                compensates for infrastructure shortcomings.
              </p>
            </div>

            {/* Quick Assessment */}
            <div className="card-moroccan p-6 mt-8">
              <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-[var(--color-primary)]" />
                Quick Accessibility Assessment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-bold text-emerald-600 mb-2 flex items-center gap-1.5">
                    <ThumbsUp className="w-3.5 h-3.5" /> What Works Well
                  </h4>
                  <ul className="space-y-1.5">
                    {[
                      'Modern cities (Agadir, Casablanca, Rabat)',
                      'International hotel chains',
                      'Tram systems in Casablanca and Rabat',
                      'TGV high-speed train (Tangier-Casablanca)',
                      'Cultural willingness to assist',
                      'Private driver/vehicle options',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-orange-600 mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> Challenges to Expect
                  </h4>
                  <ul className="space-y-1.5">
                    {[
                      'Historic medinas (steps, cobblestones, narrow alleys)',
                      'Limited accessible public toilets',
                      'Uneven sidewalks in many areas',
                      'Most public buses not accessible',
                      'Rural areas have minimal infrastructure',
                      'Accessibility claims may be exaggerated',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <AlertTriangle className="w-3.5 h-3.5 text-orange-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessible Destinations Ranked */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Accessible Destinations Ranked
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            An honest ranking of Morocco&apos;s top destinations by wheelchair accessibility, from
            best to most challenging. Ratings reflect infrastructure, not the quality of the
            destination itself.
          </p>

          <div className="space-y-6">
            {accessibleDestinations.map((dest) => (
              <div key={dest.city} className="card-moroccan overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-56 md:h-auto min-h-[220px]">
                  <img
                    src={dest.image}
                    alt={`${dest.city} accessibility`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${dest.color}`}>
                      {dest.level}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < dest.rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/40'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {dest.city}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {dest.description}
                  </p>
                  <div className="space-y-1.5">
                    {dest.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <CheckCircle className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                          h.toLowerCase().includes('not') || h.toLowerCase().includes('very') || h.toLowerCase().includes('challenging') || h.toLowerCase().includes('steep')
                            ? 'text-orange-500'
                            : 'text-emerald-600'
                        }`} />
                        <span className="text-xs text-[var(--text-secondary)]">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessible Accommodations */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Hotel className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Accessible Accommodations
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Hotels verified for wheelchair access, adapted rooms, and disability-friendly facilities.
              Always confirm specific requirements directly with the property before booking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessibleHotels.map((hotel) => (
              <div key={hotel.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[var(--text-primary)] text-sm leading-tight pr-2">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-primary)] font-medium mb-3">
                  <MapPin className="w-3 h-3" />
                  {hotel.city}
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{hotel.features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessible Attractions */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Building className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Accessible Attractions
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Fifteen attractions across Morocco that work well for travelers with mobility challenges,
              rated by current accessibility level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {accessibleAttractions.map((attraction) => (
              <div key={attraction.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[var(--text-primary)] text-sm leading-tight pr-2">
                    {attraction.name}
                  </h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold flex-shrink-0 ${
                    attraction.access === 'Excellent' ? 'bg-emerald-500/10 text-emerald-700' :
                    attraction.access === 'Good' ? 'bg-blue-500/10 text-blue-700' :
                    'bg-yellow-500/10 text-yellow-700'
                  }`}>
                    {attraction.access}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{attraction.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <Bus className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Transport Options
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Getting around Morocco with a disability requires planning. Here is a frank assessment
              of each transport mode.
            </p>
          </div>

          <div className="space-y-5">
            {transportOptions.map((option) => (
              <div key={option.type} className="card-moroccan p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <option.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">{option.type}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{option.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Practical Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ten specific, actionable tips from travelers with disabilities who have navigated Morocco
            successfully.
          </p>

          <div className="space-y-4">
            {practicalTips.map((item, index) => (
              <div key={item.tip} className="card-moroccan p-5 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-moroccan flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.tip}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Operators */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Users className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Specialized Tour Operators
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tour companies specializing in accessible travel to Morocco, offering adapted vehicles,
              trained guides, and carefully planned accessible itineraries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourOperators.map((op) => (
              <div key={op.name} className="card-moroccan p-6 flex flex-col">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-2">
                  <Compass className="w-3 h-3" />
                  {op.specialty}
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {op.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-grow">
                  {op.description}
                </p>
                <div className="pt-4 border-t border-[var(--border-primary)]">
                  <h4 className="text-xs font-bold text-[var(--text-primary)] mb-2">Services:</h4>
                  <div className="space-y-1">
                    {op.services.map((s) => (
                      <div key={s} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3 h-3 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-[var(--text-secondary)]">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa & Documentation */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <FileText className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Visa, Documentation &amp; Entry
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know about entering Morocco with a disability, bringing medical
              equipment, and ensuring smooth travel from the moment you book your flight.
            </p>
          </div>

          <div className="space-y-4">
            {visaAndDocumentation.map((item) => (
              <div key={item.title} className="card-moroccan p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Equipment Rental */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Wrench className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Medical Equipment Rental
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A practical guide to renting mobility aids and medical equipment in Morocco. Availability
              is improving but advance planning is essential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {medicalEquipmentRental.map((equip) => (
              <div key={equip.item} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[var(--text-primary)] text-sm">{equip.item}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold flex-shrink-0 ${
                    equip.availability === 'Readily available' ? 'bg-emerald-500/10 text-emerald-700' :
                    equip.availability === 'Very limited' ? 'bg-red-500/10 text-red-700' :
                    equip.availability === 'Limited' ? 'bg-yellow-500/10 text-yellow-700' :
                    'bg-blue-500/10 text-blue-700'
                  }`}>
                    {equip.availability}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{equip.notes}</p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="text-[var(--color-primary)] font-medium">
                    <MapPin className="w-3 h-3 inline mr-0.5" />{equip.cities}
                  </span>
                  <span className="text-[var(--color-accent-dark)] font-medium">
                    {equip.cost}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-primary)]">
            <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-[var(--color-primary)]" />
              Bringing Your Own Equipment
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              If you rely on specific equipment daily, bringing your own is always preferable. Airlines
              transport wheelchairs and mobility aids free of charge (notify them at booking). Pack a
              basic repair kit including tire patches, Allen keys, and spare inner tubes. Morocco uses
              220V electricity with Type C and Type E plugs. Bring a universal adapter and surge
              protector for powered chairs, CPAP machines, and other electrical medical equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Traveler Stories */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <MessageCircle className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Travelers Share Their Experiences
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Real perspectives from travelers with disabilities who have explored Morocco. Their
              honest insights and practical tips are invaluable for planning your own journey.
            </p>
          </div>

          <div className="space-y-6">
            {travelerStories.map((story) => (
              <div key={story.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-bold text-[var(--text-primary)]">{story.name}</span>
                  <span className="px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium">
                    {story.disability}
                  </span>
                </div>
                <div className="text-xs text-[var(--text-muted)] mb-4 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  {story.trip}
                </div>
                <blockquote className="text-[var(--text-secondary)] leading-relaxed mb-4 italic border-l-2 border-[var(--color-primary)]/30 pl-4">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--color-primary)]">Top tip: </span>
                    {story.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Contacts */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <Globe className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Resources &amp; Contacts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Emergency Numbers',
                icon: Phone,
                items: ['Police: 190', 'Ambulance: 150', 'Fire: 15', 'Tourist Police: 0524-384601 (Marrakech)'],
              },
              {
                title: 'Government Resources',
                icon: Shield,
                items: [
                  'Ministry of Social Development (disability services)',
                  'ONCF Accessibility Desk: +212 890 203 040',
                  'Moroccan National Tourist Office',
                  'Law 97-13 (disability rights legislation)',
                ],
              },
              {
                title: 'International Organizations',
                icon: Globe,
                items: [
                  'Accessible Travel Online (accessibility reviews)',
                  'Disability Rights International',
                  'ENAT (European Network for Accessible Tourism)',
                  'Lonely Planet Accessible Travel Guide',
                ],
              },
              {
                title: 'Equipment & Rentals',
                icon: Heart,
                items: [
                  'Wheelchair rental: Available through hotel concierges',
                  'Beach wheelchairs: Select Agadir beach clubs',
                  'Mobility scooter rental: Limited, book through tour operators',
                  'Portable oxygen: Available from pharmacies in major cities',
                ],
              },
            ].map((resource) => (
              <div key={resource.title} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2 mb-3">
                  <resource.icon className="w-4 h-4 text-[var(--color-primary)]" />
                  {resource.title}
                </h3>
                <ul className="space-y-2">
                  {resource.items.map((item) => (
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

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <Accessibility className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Morocco Is Within Reach
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            With the right planning and realistic expectations, Morocco&apos;s incredible culture,
            food, and landscapes are accessible to all travelers. Start planning your trip today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/accommodations"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Hotel className="w-4 h-4" /> Find Accessible Hotels
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Compass className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

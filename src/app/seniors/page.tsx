import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Heart,
  MapPin,
  Sun,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  Stethoscope,
  Accessibility,
  Camera,
  Utensils,
  Car,
  Phone,
  Luggage,
  ThermometerSun,
  CalendarDays,
  Building2,
  Flower2,
  Palette,
  Gem,
  Globe,
  FileText,
  CircleDot,
  Lightbulb,
  Sparkles,
  HandHeart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Morocco for Seniors & Over 50s | Comfortable Travel Guide | CityGuide.ma',
  description:
    'A comprehensive guide to visiting Morocco for seniors and mature travelers over 50. Best destinations, accessibility, gentle activities, health considerations, comfortable accommodation, private tours, best seasons, and practical tips for a memorable Moroccan experience.',
  keywords: [
    'morocco seniors',
    'morocco over 50',
    'morocco mature travelers',
    'morocco accessibility',
    'morocco comfortable travel',
    'morocco luxury travel seniors',
    'morocco guided tours seniors',
    'morocco health travel',
    'marrakech seniors',
    'essaouira seniors',
    'agadir seniors',
    'rabat seniors',
    'morocco private tours',
    'morocco gentle activities',
    'morocco senior group tours',
    'morocco retirement travel',
  ],
  openGraph: {
    title: 'Morocco for Seniors & Over 50s | Comfortable Travel Guide | CityGuide.ma',
    description:
      'Discover Morocco at your own pace. The complete guide for mature travelers: accessible destinations, gentle activities, health tips, luxury accommodation, and private tours.',
    url: 'https://citytoursmorocco.com/seniors',
    images: [
      {
        url: '/images/photo-henna-art.webp',
        width: 1200,
        height: 630,
        alt: 'Senior couple enjoying a peaceful Moroccan garden',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAction',
  name: 'Morocco for Seniors & Over 50s Travel Guide',
  description:
    'A comprehensive travel guide for seniors and mature travelers visiting Morocco, covering accessibility, health, comfortable accommodation, gentle activities, and private tour options.',
  url: 'https://citytoursmorocco.com/seniors',
  location: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

/* ─── Why Morocco for Seniors ─── */

const whyMoroccoSeniors = [
  {
    icon: 'Sun',
    title: 'Perfect Climate',
    description:
      'Mild winters (15-22C on the coast), warm springs and autumns (20-28C), and over 300 sunny days a year. The best months for seniors (March-May, September-November) offer ideal temperatures of 21-27C (70-80F).',
  },
  {
    icon: 'Heart',
    title: 'Cultural Respect for Elders',
    description:
      'Moroccan culture deeply respects older people. You will be treated with genuine deference, offered seats, assisted with luggage, and welcomed warmly. This cultural value makes Morocco particularly comfortable for mature visitors.',
  },
  {
    icon: 'Gem',
    title: 'Luxury at Exceptional Value',
    description:
      'Five-star riads, private guides, chauffeured tours, and fine dining at a fraction of European prices. A luxury experience in Morocco costs what a mid-range trip costs elsewhere.',
  },
  {
    icon: 'Shield',
    title: 'Safe & Welcoming',
    description:
      'Morocco is one of the safest countries in Africa. Tourist areas are well-policed, and the tourism infrastructure is well-developed. Solo senior travelers, including women, report feeling safe and welcomed.',
  },
  {
    icon: 'Palette',
    title: 'Rich History & Culture',
    description:
      'Thousand-year-old medinas, Roman ruins, Islamic architecture, French colonial heritage, and a living Berber culture. Morocco is a destination of extraordinary depth for those who appreciate history.',
  },
  {
    icon: 'Sparkles',
    title: 'World-Class Wellness',
    description:
      'Traditional hammams, luxury spa resorts, and the healing mineral springs of the Middle Atlas. Morocco has been a wellness destination for centuries, with treatments that benefit joint health, circulation, and relaxation.',
  },
];

/* ─── Best Destinations ─── */

const seniorDestinations = [
  {
    name: 'Marrakech',
    tagline: 'Luxury riads, gardens, and gentle cultural exploration',
    description:
      'Morocco\'s most iconic city offers the widest range of luxury accommodation, from opulent riads with plunge pools to five-star hotels with full spa facilities. The Majorelle Garden, Bahia Palace, and Koutoubia Mosque provide gentle cultural exploration. The Gueliz neighborhood is flat and walkable with pavement cafes. The medina is magical but can be challenging on foot: hire a private guide who knows the accessible routes.',
    highlights: [
      'Majorelle Garden (shaded, benches, flat paths, wheelchair accessible)',
      'Bahia Palace (ground-level touring, beautiful tilework)',
      'La Mamounia hotel gardens (world-famous, calm, open to visitors)',
      'Horse-drawn carriage rides through the Palmeraie',
      'Cooking classes at luxury riads (seated, instructor-led)',
      'Evening at Jemaa el-Fnaa from a rooftop terrace (avoid the crowds below)',
    ],
    accessibility:
      'Medina streets are uneven cobblestone. Stick to the main arteries or hire a guide. Gueliz is flat and modern. Many luxury riads have ground-floor suites. Hotel shuttles available.',
    accommodation:
      'La Mamounia (legendary, full accessibility), Royal Mansour (ultra-luxury, elevators), Les Jardins de la Koutoubia (pool, spa, central), Riad Kniza (boutique, ground-floor rooms).',
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Essaouira',
    tagline: 'Flat medina, ocean breezes, and artistic calm',
    description:
      'Essaouira is arguably the most senior-friendly city in Morocco. The UNESCO-listed medina is remarkably flat compared to other Moroccan old towns, with wide main streets and a gentle pace. The Atlantic breeze keeps temperatures comfortable year-round (never exceeding 30C even in summer). The cultural scene is rich but relaxed: art galleries, wood-carving workshops, and seafood restaurants line the pedestrian streets.',
    highlights: [
      'Flat medina walks along wide main streets (Rue Mohamed Zerktouni, Avenue de l\'Istiqlal)',
      'Rampart walks with ocean views (gentle gradient, benches)',
      'Fish market and port visit (ground level, colorful)',
      'Skala de la Ville (historic cannon battery, panoramic views)',
      'Art gallery hopping in the medina',
      'Sunset watching from the beach or ramparts',
    ],
    accessibility:
      'The flattest medina in Morocco. Main streets are wide and mostly smooth. Some side alleys are narrow. The beach is accessible from several points. Most restaurants are at ground level.',
    accommodation:
      'Heure Bleue Palais (elegant, elevator, pool, rooftop), Villa Maroc (charming, some ground-floor rooms), Riad Mimouna (ocean views, accessible), Hotel Atlas Essaouira & Spa (modern, full accessibility).',
    image: '/images/hero-fes-tanneries.webp',
  },
  {
    name: 'Agadir',
    tagline: 'Modern resort city with excellent medical facilities',
    description:
      'Agadir is Morocco\'s most modern and accessible city, rebuilt entirely after the 1960 earthquake on a modern grid plan. Wide boulevards, a long beach promenade, resort hotels with pools and spas, and the best medical infrastructure outside Casablanca make it ideal for seniors who prioritize comfort and convenience. While less culturally rich than Marrakech or Fes, it compensates with ease of living and a year-round mild climate.',
    highlights: [
      'Beach promenade walk (flat, 6km, benches throughout)',
      'Souk El Had (Morocco\'s largest, organized and accessible)',
      'Crocoparc (botanical gardens and crocodile sanctuary)',
      'Valley of the Birds (small park, flat paths, birdwatching)',
      'Day trip to Tiznit (silver crafts) or Paradise Valley',
      'Golf courses (Royal Golf Agadir, Ocean Golf, Golf du Soleil)',
    ],
    accessibility:
      'The most accessible city in Morocco. Modern grid layout, paved sidewalks, resort hotels with elevators and ramps. Medical facilities (Clinique Internationale Agadir) on par with European standards.',
    accommodation:
      'Sofitel Agadir Royal Bay (5-star, beach, spa, fully accessible), Tikida Golf Palace (luxury, golf, pool), Robinson Club Agadir (all-inclusive, activity program), Atlantic Palace (beachfront, medical team available).',
    image: '/images/hero-sahara-night.webp',
  },
  {
    name: 'Rabat',
    tagline: 'Calm capital with museums, gardens, and gentle exploration',
    description:
      'Morocco\'s capital is its most orderly and tranquil major city. Clean streets, excellent public gardens, world-class museums (the new Mohammed VI Museum of Modern and Contemporary Art), and a beautiful Kasbah overlooking the Atlantic. The tram system makes getting around easy without walking long distances. The pace is gentler than Marrakech, and the cultural depth is significant without feeling overwhelming.',
    highlights: [
      'Kasbah des Oudaias (charming blue-and-white quarter, Andalusian garden)',
      'Hassan Tower and Mohammed V Mausoleum (iconic, mostly flat)',
      'Mohammed VI Museum of Modern Art (air-conditioned, elevators, world-class)',
      'Chellah necropolis (Roman-Islamic ruins, gardens, peaceful)',
      'Royal Palace gardens (when accessible)',
      'Bouregreg river promenade (flat, scenic, cafes)',
    ],
    accessibility:
      'Best public transport in Morocco (tram). Wide sidewalks in Agdal and Hassan neighborhoods. The Kasbah has some steep sections but the main route is manageable. Museums are modern and accessible.',
    accommodation:
      'Sofitel Rabat Jardin des Roses (luxury, gardens, spa), Le Diwan Rabat (boutique, central, elevator), La Tour Hassan Palace (historic, renovated, full service), Riad Dar El Kebira (traditional, ground-floor rooms available).',
    image: '/images/hero-marrakech.webp',
  },
];

/* ─── Gentle Activities ─── */

const gentleActivities = [
  {
    title: 'Garden Tours & Botanical Walks',
    description:
      'Morocco\'s gardens are among the finest in the world. Marrakech alone has the Majorelle Garden, Menara Gardens, and Agdal Gardens, all offering shaded paths, benches, and stunning horticulture. Rabat\'s Andalusian Gardens and Chellah are equally beautiful. Guided botanical walks are available through most hotels.',
    difficulty: 'Easy',
    duration: '1-3 hours',
    bestIn: 'Marrakech, Rabat',
  },
  {
    title: 'Cultural Site Visits (Comfortable Pace)',
    description:
      'Private guides allow you to explore palaces, mosques, museums, and historic sites at your own pace with rest stops built in. Unlike group tours that rush between sites, private tours adapt to your energy level and interests. Most guides can arrange chairs or seating at key stops.',
    difficulty: 'Easy to Moderate',
    duration: '2-4 hours (half-day)',
    bestIn: 'Marrakech, Fes, Rabat, Meknes',
  },
  {
    title: 'Gentle Desert Experience',
    description:
      'Luxury desert camps near Merzouga and Zagora offer gentle camel rides (30-60 minutes), comfortable glamping tents with real beds and en-suite bathrooms, and sunset watching from the dunes. 4x4 vehicles take you to the camp itself. The experience is magical without requiring physical exertion.',
    difficulty: 'Easy',
    duration: '1-2 nights',
    bestIn: 'Merzouga, Zagora',
  },
  {
    title: 'Cooking Classes & Food Tours',
    description:
      'Seated, instructor-led cooking classes at luxury riads teach you to prepare tagines, pastilla, and Moroccan salads. Food tours through the medina (with a guide who handles all interactions) introduce you to local flavors. Many classes include market visits at a gentle pace.',
    difficulty: 'Easy',
    duration: '3-5 hours',
    bestIn: 'Marrakech, Essaouira, Fes',
  },
  {
    title: 'Private Guided Medina Tours',
    description:
      'A knowledgeable private guide transforms the medina from overwhelming to enchanting. They navigate the labyrinthine streets, manage touts, explain history and architecture, and ensure you see the highlights without exhaustion. The best guides know accessible routes that avoid stairs and steep sections.',
    difficulty: 'Moderate (walking required)',
    duration: '2-4 hours',
    bestIn: 'Marrakech, Fes, Essaouira',
  },
  {
    title: 'Hammam & Spa Experiences',
    description:
      'Traditional hammams (steam baths) are deeply relaxing and excellent for joint stiffness and circulation. Luxury hammams in riads and hotels offer private sessions with professional attendants. The experience includes steam, black soap scrub, and massage. Inform the attendant of any health conditions. Private hammams are more comfortable than public ones for first-timers.',
    difficulty: 'Easy',
    duration: '1.5-2.5 hours',
    bestIn: 'Marrakech, Fes, Essaouira',
  },
  {
    title: 'Horse-Drawn Carriage Rides',
    description:
      'Caleche rides in Marrakech and Meknes provide a comfortable way to see the city without walking. The carriages pass through gardens, along city walls, and past major landmarks. Negotiate the price before departure (typically 200-400 MAD for an hour-long circuit).',
    difficulty: 'Easy (seated)',
    duration: '1-2 hours',
    bestIn: 'Marrakech, Meknes',
  },
  {
    title: 'Argan Oil Cooperative Visits',
    description:
      'Between Marrakech and Essaouira, women\'s cooperatives demonstrate the traditional argan oil extraction process. These visits support local communities, provide interesting cultural insight, and offer the chance to purchase pure argan oil directly. Mostly seated experience with short walking.',
    difficulty: 'Easy',
    duration: '30-60 minutes',
    bestIn: 'Between Marrakech and Essaouira',
  },
];

/* ─── Health & Medical ─── */

const healthConsiderations = [
  {
    title: 'Before You Travel',
    items: [
      'Consult your doctor 6-8 weeks before departure, especially regarding vaccinations and altitude considerations',
      'Bring sufficient prescription medications in original packaging with a doctor\'s letter',
      'Pack a basic medical kit: sunscreen (SPF 50+), rehydration salts, stomach remedies, pain relief, and any regular medications',
      'Obtain comprehensive travel insurance that covers repatriation (essential for seniors)',
      'Request a letter from your doctor listing conditions and medications (in French if possible)',
      'Ensure your insurance covers pre-existing conditions: standard policies often exclude them',
    ],
  },
  {
    title: 'While in Morocco',
    items: [
      'Drink only bottled water (widely available, 5-10 MAD per 1.5L)',
      'Avoid raw vegetables and salads at street stalls (hotel restaurants and upscale establishments are safe)',
      'Stay hydrated: the dry climate and warmth can cause dehydration faster than expected',
      'Protect against sun: hats, sunscreen, and shade during peak hours (12-3 PM)',
      'Walk slowly and take frequent rest breaks, especially in the medina',
      'Avoid the hottest months (July-August) in Marrakech and Fes (temperatures reach 40-45C)',
    ],
  },
  {
    title: 'Medical Facilities',
    items: [
      'Private clinics in all major cities offer good to excellent care (Clinique Internationale Marrakech, Clinique du Littoral Agadir)',
      'Pharmacies are excellent and pharmacists can advise on minor ailments (French-speaking)',
      'Many doctors, especially in private practice, are French-trained and speak French and English',
      'Emergency ambulance: dial 15 (SAMU) or 150. Your hotel can arrange private ambulance service faster',
      'Casablanca has the most advanced medical facilities (Cheikh Khalifa International University Hospital)',
      'Keep your insurance company\'s emergency number and your hotel\'s number saved in your phone',
    ],
  },
];

/* ─── Travel Insurance ─── */

const insuranceTips = [
  {
    title: 'Essential Coverage',
    description:
      'Ensure your policy includes: medical expenses (minimum $500,000), medical repatriation/evacuation, trip cancellation, baggage loss, and personal liability. For seniors, repatriation coverage is the single most important element.',
  },
  {
    title: 'Pre-existing Conditions',
    description:
      'Many standard policies exclude pre-existing conditions for travelers over 65. Specialist providers like AllClear Travel Insurance, Staysure, and World Nomads offer plans that cover pre-existing conditions for seniors. Declare all conditions honestly or your claim may be denied.',
  },
  {
    title: 'Age Considerations',
    description:
      'Insurance premiums increase with age, particularly over 70 and 80. Annual multi-trip policies are often more economical than single-trip if you travel frequently. Some policies have upper age limits (75 or 80), so check carefully.',
  },
  {
    title: 'Recommended Providers',
    description:
      'AllClear (specialist senior travel insurance, covers pre-existing conditions), Staysure (popular with UK seniors, comprehensive), World Nomads (international coverage, adventure activities), Allianz Global (global network, strong in Morocco). Always compare quotes from multiple providers.',
  },
];

/* ─── Accommodation Tips ─── */

const accommodationTips = [
  {
    title: 'What to Look For',
    items: [
      'Ground-floor rooms or properties with elevators (many riads have multiple floors with no lift)',
      'Walk-in showers rather than bathtubs (reduces fall risk)',
      'Air conditioning and heating (nights can be cold October-March)',
      'On-site restaurant or room service (for days when venturing out feels too much)',
      'Pool and garden for relaxing downtime',
      'Reception/concierge available 24 hours',
      'Proximity to main attractions (reduces transport needs)',
    ],
  },
  {
    title: 'Accommodation Types Ranked for Comfort',
    items: [
      'Five-star hotels: Best accessibility, elevators, medical staff, concierge, ground-floor options',
      'Luxury riads (large, renovated): Beautiful, intimate, but verify ground-floor rooms and step-free access',
      'Resort hotels (Agadir): Pool, spa, all-inclusive options, designed for extended stays',
      'Boutique hotels: Good middle ground between character and comfort',
      'Small riads: Charming but often have steep stairs, narrow passages, and no elevator. Ask specifically about accessibility before booking.',
    ],
  },
  {
    title: 'Questions to Ask Before Booking',
    items: [
      'Is there a ground-floor room or elevator access?',
      'How many steps are there from the entrance to the room?',
      'Is the bathroom a walk-in shower or bathtub only?',
      'Is there air conditioning AND heating?',
      'How far is it from the nearest taxi drop-off point? (Medina riads may require walking from the taxi stand)',
      'Can the riad arrange airport transfers, private guides, and restaurant reservations?',
    ],
  },
];

/* ─── Best Seasons ─── */

const bestSeasons = [
  {
    season: 'Spring (March - May)',
    temp: '18-28C (64-82F)',
    rating: 'Excellent',
    description:
      'The ideal time for senior travel. Wildflowers bloom across the countryside, temperatures are warm but comfortable, and all regions are accessible. Gardens are at their most beautiful. Fewer crowds than autumn.',
  },
  {
    season: 'Autumn (September - November)',
    temp: '18-30C (64-86F)',
    rating: 'Excellent',
    description:
      'Equally perfect. Summer heat has broken, the sea is warm for swimming, and the harvest season brings fresh figs, dates, and pomegranates. October is arguably Morocco\'s single best month for travel.',
  },
  {
    season: 'Winter (December - February)',
    temp: '10-20C (50-68F) coast',
    rating: 'Good',
    description:
      'Mild on the coast (Agadir, Essaouira), cooler inland (Marrakech, Fes). Excellent for avoiding crowds and getting lower prices. Pack layers: mornings and evenings can be chilly. The Sahara is magnificent in winter.',
  },
  {
    season: 'Summer (June - August)',
    temp: '25-45C (77-113F)',
    rating: 'Coastal Only',
    description:
      'Interior cities (Marrakech, Fes) are dangerously hot for seniors. Coastal cities (Essaouira, Agadir, Tangier) remain pleasant (22-28C). If visiting in summer, stay on the coast and schedule activities for morning and evening.',
  },
];

/* ─── Dietary Accommodations ─── */

const dietaryInfo = [
  {
    concern: 'Vegetarian / Vegan',
    advice:
      'Morocco is moderately vegetarian-friendly. Traditional salads (zaalouk, taktouka) and vegetable tagines are excellent. Couscous with seven vegetables is a Friday tradition. Communicate clearly with restaurants: "sans viande, sans poulet" (without meat, without chicken). Luxury restaurants and international hotels have dedicated vegetarian menus.',
  },
  {
    concern: 'Gluten-Free',
    advice:
      'More challenging: couscous and bread are staples. However, tagines (stew dishes) are naturally gluten-free, as are grilled meats and salads. Rice dishes are available. Carry a gluten-free dietary card in French and Arabic. Hotels can accommodate with advance notice.',
  },
  {
    concern: 'Low Sodium / Heart-Healthy',
    advice:
      'Moroccan cuisine uses spices rather than excessive salt, which is a benefit. However, preserved lemons and olives are high in sodium. Request "peu de sel" (little salt). Fresh grilled fish on the coast is an excellent heart-healthy option. Argan oil is rich in beneficial fatty acids.',
  },
  {
    concern: 'Dairy-Free / Lactose Intolerant',
    advice:
      'Moroccan cuisine uses less dairy than European cooking. Tagines, grilled meats, and salads are typically dairy-free. Watch for: yogurt-based drinks (raib, leben), and some pastries. Mint tea is served without milk. Plant-based milk is available in supermarkets in major cities.',
  },
  {
    concern: 'Diabetic',
    advice:
      'Be mindful of Moroccan sweets (pastilla, chebakia, traditional pastries) which are extremely high in sugar. Main meals are generally well-balanced with protein, vegetables, and complex carbohydrates. Carry glucose tablets and inform your guide or hotel about your condition.',
  },
];

/* ─── Transport Options ─── */

const transportOptions = [
  {
    mode: 'Private Driver / Chauffeur',
    description:
      'The recommended option for seniors exploring Morocco. A private driver (typically in a comfortable Mercedes or Toyota SUV) eliminates navigation stress, allows flexible scheduling, and provides door-to-door service. Many drivers speak English and can serve as informal guides. Cost: 800-1,500 MAD/day including fuel.',
    comfort: 'Excellent',
  },
  {
    mode: 'Luxury Private Tours',
    description:
      'Tour companies like Intrepid Premium, G Adventures Classic Comfort, Abercrombie & Kent, and Cox & Kings offer pre-planned itineraries with luxury transport, premium hotels, expert guides, and all logistics handled. Ideal for those who want a stress-free experience. Cost: $200-500/day per person.',
    comfort: 'Excellent',
  },
  {
    mode: 'ONCF Trains (First Class)',
    description:
      'Morocco\'s train network connects Casablanca, Rabat, Fes, Marrakech, and Tangier. First-class compartments are air-conditioned, spacious, and comfortable. The Al Boraq high-speed train (Tangier-Casablanca, 2h15) is world-class. Seats are reservable. Stations have porters.',
    comfort: 'Very Good',
  },
  {
    mode: 'Petit Taxis',
    description:
      'Small metered taxis for in-city travel. Affordable (10-30 MAD per ride) and convenient. Insist on the meter or agree on a price before departure. Not always air-conditioned. Your hotel can call a trusted taxi or arrange a private car for greater comfort.',
    comfort: 'Good (short rides)',
  },
  {
    mode: 'Grand Taxis / Buses',
    description:
      'Grand taxis (shared, inter-city) are not recommended for seniors: crowded, no AC, and cramped. CTM and Supratours buses are better: air-conditioned and reasonably comfortable, but stops are infrequent and luggage handling is your responsibility. Use only for budget-conscious day trips.',
    comfort: 'Fair',
  },
];

/* ─── Senior Tour Operators ─── */

const tourOperators = [
  {
    name: 'Intrepid Travel (Comfort Range)',
    description:
      'Specifically designed for mature travelers who want small-group experiences with a moderate activity level. Groups of 10-12, mid-range hotels, included activities, and local guides. Morocco trips: 8-15 days.',
    priceRange: '$2,500 - $4,500',
  },
  {
    name: 'Abercrombie & Kent',
    description:
      'Ultra-luxury small group and private tours. Exceptional guides, luxury accommodation, private transport, and every detail managed. The gold standard for seniors who want the best. Morocco tours: 9-14 days.',
    priceRange: '$6,000 - $12,000+',
  },
  {
    name: 'Exodus Travels (Walking Lite)',
    description:
      'Gentle walking tours designed for those who enjoy light exercise without strenuous trekking. Shorter walks (2-4 hours, flat to moderate terrain), cultural focus, and comfortable hotels. Morocco trips: 8-10 days.',
    priceRange: '$2,000 - $3,500',
  },
  {
    name: 'Saga Holidays',
    description:
      'UK-based operator exclusively for over-50s. Escorted group tours with door-to-door service from the UK. Travel manager on every trip. Inclusive pricing covers flights, hotels, many meals, and excursions.',
    priceRange: '$2,000 - $4,000 (GBP 1,600 - 3,200)',
  },
  {
    name: 'Private Bespoke Tours',
    description:
      'Local Moroccan agencies (Morocco Premium, Mosaic Travel, Eye on Morocco) create fully custom itineraries. Specify your pace, interests, dietary needs, and mobility requirements. Maximum flexibility and personal attention.',
    priceRange: '$150 - $400/day per person',
  },
];

/* ─── Packing Tips ─── */

const packingTips = [
  {
    category: 'Footwear',
    items: [
      'Comfortable, supportive walking shoes with non-slip soles (medina streets are polished stone)',
      'A second pair of comfortable shoes (break in both before the trip)',
      'Slip-on shoes for mosque visits and riad entries (shoes removed frequently)',
    ],
  },
  {
    category: 'Clothing',
    items: [
      'Layers: mornings and evenings are cool, midday can be warm',
      'Lightweight, breathable fabrics (cotton and linen preferred)',
      'Modest clothing for cultural sites: shoulders and knees covered',
      'A warm jacket or fleece for desert evenings and air-conditioned spaces',
      'Sun hat with a wide brim (essential in spring and autumn)',
      'Light scarf (multi-purpose: sun protection, mosque covering, warmth)',
    ],
  },
  {
    category: 'Health Essentials',
    items: [
      'All prescription medications (double the amount needed, in case of delays)',
      'Prescription copies and doctor\'s letter listing medications',
      'Sunscreen SPF 50+ (the Moroccan sun is stronger than you expect)',
      'Insect repellent (for desert and rural areas)',
      'Hand sanitizer and wet wipes',
      'Rehydration sachets (for upset stomach or heat)',
      'Basic first aid: bandages, antiseptic, blister plasters',
    ],
  },
  {
    category: 'Comfort & Practicalities',
    items: [
      'Collapsible walking stick or trekking pole (useful on uneven medina surfaces)',
      'Small daypack (hands-free for markets and medina walks)',
      'Universal power adapter (Morocco uses European Type C and E plugs)',
      'Portable phone charger (battery pack)',
      'Small flashlight (medina streets can be dark at night)',
      'Copies of passport, insurance, and emergency contacts (paper and digital)',
    ],
  },
];

/* ─── Communication Tips ─── */

const communicationTips = [
  {
    title: 'Staying Connected',
    description:
      'WiFi is available at virtually all hotels and riads. Purchase a local SIM card at the airport (Maroc Telecom for best coverage) for data and local calls. WhatsApp is the dominant messaging platform in Morocco. Most luxury hotels have reliable WiFi throughout the property. 4G coverage is excellent in all cities and along highways.',
  },
  {
    title: 'Language for Seniors',
    description:
      'A few French phrases go a long way: "Bonjour" (hello), "Merci" (thank you), "S\'il vous plait" (please), "L\'addition" (the bill), "Ou est...?" (where is...?). Hotel staff and licensed guides speak English. In restaurants, pointing at the menu works well. Arabic greetings ("Salam alaikum") are always appreciated.',
  },
  {
    title: 'Emergency Contacts',
    description:
      'Police: 19. Ambulance: 15 (SAMU). Fire: 15. Tourist police (Brigade Touristique): present in all major tourist cities. Save your hotel phone number and address in your phone. Carry a hotel business card at all times (useful for taxi drivers). Your embassy\'s emergency number should also be saved.',
  },
];

export default function SeniorsPage() {
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
              'url(/images/photo-henna-art.webp',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Seniors</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <HandHeart className="w-4 h-4" />
            Mature Travelers Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco for Seniors &amp; Over 50s
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Experience Morocco at your own pace. Luxury riads, private guides, gentle activities, and
            a culture that deeply respects its elders. Comfort and wonder, without compromise.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Quick Stats */}
      <section className="py-10 gradient-moroccan">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">70-80F</div>
              <div className="text-sm text-white/70 mt-1">Ideal Spring/Fall Temps</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">300+</div>
              <div className="text-sm text-white/70 mt-1">Sunny Days Per Year</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">3 hrs</div>
              <div className="text-sm text-white/70 mt-1">Flight from Europe</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">50-70%</div>
              <div className="text-sm text-white/70 mt-1">Savings vs Europe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Morocco for Seniors */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Star className="w-4 h-4" />
              <span>Why Morocco</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Why Morocco Is Ideal for Mature Travelers
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco combines cultural depth, physical beauty, and genuine hospitality in a way that
              rewards the experienced traveler. The country respects its elders, and you will feel that
              warmth from the moment you arrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMoroccoSeniors.map((item) => {
              const IconMap: Record<string, typeof Heart> = {
                Sun, Heart, Gem, Shield, Palette, Sparkles,
              };
              const Icon = IconMap[item.icon] || Heart;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction Prose */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Accessibility & Comfort Considerations
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is not the most accessible country in the world by modern Western standards,
                but with the right planning, it is entirely manageable and deeply rewarding for
                mature travelers. The key is understanding where the challenges lie and planning
                around them.
              </p>
              <p>
                The primary challenge is the medinas: ancient walled cities with narrow, uneven streets,
                occasional steps, and no vehicle access. However, most medinas have main arteries that
                are wider and flatter, and a private guide can navigate routes that avoid the most
                difficult sections. Outside the medinas, modern neighborhoods (Gueliz in Marrakech,
                Agdal in Rabat, all of Agadir) are flat, paved, and accessible.
              </p>
              <p>
                Luxury hotels and large riads increasingly offer accessible rooms with elevators,
                walk-in showers, and ground-floor access. When booking accommodation, always inquire
                specifically about stairs, room location, and bathroom configuration. The Moroccan
                hospitality industry is responsive to these needs: staff will readily carry bags,
                offer arms for support, and go out of their way to ensure your comfort.
              </p>
              <p>
                The most important investment for senior travelers in Morocco is a private guide and
                driver. This single decision transforms the experience from potentially stressful to
                genuinely luxurious: someone else handles navigation, negotiations, logistics, and
                language barriers while you focus entirely on enjoying the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Destinations */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <MapPin className="w-4 h-4" />
              <span>Destinations</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Destinations for Seniors
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Four cities that offer the best combination of cultural richness, comfort,
              accessibility, and medical infrastructure for mature travelers.
            </p>
          </div>

          <div className="space-y-10">
            {seniorDestinations.map((dest) => (
              <div key={dest.name} id={dest.name.toLowerCase()} className="card-moroccan overflow-hidden scroll-mt-24">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-56 md:h-auto min-h-[320px]">
                    <img
                      src={dest.image}
                      alt={`${dest.name} - senior-friendly travel in Morocco`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {dest.name}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--color-primary)] mb-3">{dest.tagline}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {dest.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4 text-[var(--color-secondary)]" />
                        Top Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {dest.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Accessibility & Accommodation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                        <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                          <Accessibility className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                          Accessibility
                        </h4>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{dest.accessibility}</p>
                      </div>
                      <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                        <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                          Where to Stay
                        </h4>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{dest.accommodation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gentle Activities */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Flower2 className="w-4 h-4" />
              <span>Activities</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Gentle Activities & Experiences
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco offers a wealth of experiences that prioritize comfort and cultural depth
              over physical exertion. Every activity listed here is suitable for most fitness levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {gentleActivities.map((activity) => (
              <div key={activity.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{activity.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {activity.description}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--surface-muted)]">
                    <Shield className="w-3 h-3" />
                    {activity.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--surface-muted)]">
                    <Clock className="w-3 h-3" />
                    {activity.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--surface-muted)]">
                    <MapPin className="w-3 h-3" />
                    {activity.bestIn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Medical */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Stethoscope className="w-4 h-4" />
              <span>Health</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Health & Medical Considerations
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              With proper preparation, Morocco poses no unusual health risks for seniors.
              These guidelines ensure a safe and comfortable experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {healthConsiderations.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Insurance */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <FileText className="w-4 h-4" />
              <span>Insurance</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Travel Insurance for Seniors
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Comprehensive travel insurance is non-negotiable for senior travel to Morocco.
              Focus on medical repatriation and pre-existing condition coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {insuranceTips.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Tips */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Building2 className="w-4 h-4" />
              <span>Accommodation</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Accommodation Recommendations
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              The right accommodation makes or breaks a senior trip to Morocco. Prioritize
              comfort, accessibility, and location over price.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {accommodationTips.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Seasons */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <ThermometerSun className="w-4 h-4" />
              <span>Timing</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Seasons to Visit
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Spring and autumn are the golden months for senior travel in Morocco, with ideal
              temperatures of 70-80F (21-27C) and comfortable humidity levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bestSeasons.map((season) => (
              <div key={season.season} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{season.season}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      season.rating === 'Excellent'
                        ? 'bg-green-100 text-green-700'
                        : season.rating === 'Good'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {season.rating}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-2">{season.temp}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{season.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dietary Accommodations */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Utensils className="w-4 h-4" />
              <span>Dining</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Dietary Accommodations
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco can accommodate most dietary requirements with some advance communication.
              The cuisine is naturally rich in vegetables, spices, and healthy fats.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {dietaryInfo.map((item) => (
              <div key={item.concern} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.concern}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.advice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Car className="w-4 h-4" />
              <span>Getting Around</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Getting Around: Comfortable Transport
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A private driver is the single best investment for senior travel in Morocco. It eliminates
              stress and maximizes comfort at a very reasonable cost.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[600px]">
                  <thead>
                    <tr className="bg-[var(--surface-muted)]">
                      <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Transport Mode</th>
                      <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Comfort Level</th>
                      <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-light)]">
                    {transportOptions.map((row) => (
                      <tr key={row.mode} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                        <td className="px-4 py-3 font-bold text-sm text-[var(--text-primary)]">{row.mode}</td>
                        <td className="px-4 py-3 text-sm">
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              row.comfort === 'Excellent'
                                ? 'bg-green-100 text-green-700'
                                : row.comfort === 'Very Good'
                                  ? 'bg-blue-100 text-blue-700'
                                  : row.comfort === 'Good (short rides)'
                                    ? 'bg-amber-100 text-amber-700'
                                    : 'bg-orange-100 text-orange-700'
                            }`}
                          >
                            {row.comfort}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-[var(--text-muted)]">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Operators */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Globe className="w-4 h-4" />
              <span>Tours</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Senior-Friendly Tour Operators
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Whether you prefer an organized group or a fully private experience, these
              operators specialize in comfortable travel for mature guests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tourOperators.map((op) => (
              <div key={op.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{op.name}</h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-3">{op.priceRange}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{op.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing Tips */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Luggage className="w-4 h-4" />
              <span>Preparation</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Packing Tips for Comfort
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Pack smartly for Morocco&apos;s varied conditions. Comfort and practicality should guide
              every choice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {packingTips.map((section) => (
              <div key={section.category} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication & Staying Connected */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Phone className="w-4 h-4" />
              <span>Communication</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Communication & Staying Connected
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Stay in touch with family and handle practicalities with ease. Morocco has
              excellent mobile coverage and WiFi availability.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {communicationTips.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private vs Group Tour Comparison */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Users className="w-4 h-4" />
              <span>Tour Styles</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Private vs Group Tours
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-[var(--color-primary)]" />
                Private Tours
              </h3>
              <ul className="space-y-2 mb-4">
                {[
                  'Complete flexibility: start times, pace, and itinerary adapt to you',
                  'Private vehicle with driver (air-conditioned, comfortable)',
                  'Dedicated guide focused entirely on your interests',
                  'Rest stops and schedule changes without affecting others',
                  'Ideal for those with specific mobility or dietary needs',
                  'Can include family members of all ages',
                  'Cost: $150-400/day per person (2 people)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[var(--color-primary)]" />
                Small Group Tours
              </h3>
              <ul className="space-y-2 mb-4">
                {[
                  'Social: meet like-minded travelers (typically 8-16 people)',
                  'All logistics handled: transport, hotels, and most meals included',
                  'Experienced tour leaders who know the country intimately',
                  'More affordable than private touring',
                  'Fixed itinerary may not suit all energy levels',
                  'Less flexibility for individual preferences',
                  'Cost: $150-350/day per person (all-inclusive)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <div className="card-moroccan p-6 border-l-4 border-[var(--color-primary)]">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] mb-1">Our Recommendation</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    For a first visit to Morocco, a private tour or a premium small-group tour (Intrepid
                    Comfort, Abercrombie & Kent) offers the best experience for seniors. The investment
                    in a private guide and driver pays for itself many times over in comfort, safety,
                    and depth of experience. For a second or third visit, independent travel with a
                    private driver becomes more practical as you know the country better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <CalendarDays className="w-4 h-4" />
              <span>Sample Itinerary</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              A Gentle 10-Day Morocco Itinerary
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A comfortable-paced itinerary that covers the highlights without exhaustion.
              Built for luxury with rest days included.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                days: 'Days 1-3: Marrakech',
                activities:
                  'Arrive and settle into a luxury riad. Day 1: Rest and explore the riad. Rooftop dinner. Day 2: Private guided tour of Bahia Palace, Koutoubia Mosque, and Majorelle Garden (morning only, afternoon pool). Day 3: Cooking class in the morning. Horse-drawn carriage ride through the Palmeraie. Evening: Jemaa el-Fnaa from a rooftop terrace.',
              },
              {
                days: 'Day 4: Marrakech to Essaouira',
                activities:
                  'Private car to Essaouira (2.5 hours). Stop at an argan oil cooperative en route. Arrive for lunch at a seafood restaurant. Afternoon: gentle stroll along the ramparts. Check into a riad with ocean views.',
              },
              {
                days: 'Days 5-6: Essaouira',
                activities:
                  'Day 5: Morning medina walk with a private guide. Art galleries and wood-carving workshops. Lunch at the fish market. Afternoon at leisure. Day 6: Rest morning. Port visit. Hammam spa experience in the afternoon. Sunset from the Skala.',
              },
              {
                days: 'Day 7: Essaouira to Rabat',
                activities:
                  'Morning at leisure. Private car to Casablanca (6 hours with stops, or internal flight 1 hour). If driving, stop in El Jadida for lunch at the Portuguese cistern. Continue to Rabat. Evening stroll along the Bouregreg promenade.',
              },
              {
                days: 'Days 8-9: Rabat',
                activities:
                  'Day 8: Kasbah des Oudaias and Andalusian Garden. Hassan Tower and Mohammed V Mausoleum. Lunch at a garden restaurant. Afternoon: Mohammed VI Museum (air-conditioned). Day 9: Morning at Chellah. Afternoon: free time for shopping or a gentle walk in Agdal neighborhood.',
              },
              {
                days: 'Day 10: Departure',
                activities:
                  'Morning at leisure. Final mint tea. Private transfer to Rabat-Sale airport, or train to Casablanca airport (1 hour, first class). Depart with memories of a Morocco experienced in comfort and depth.',
              },
            ].map((item) => (
              <div key={item.days} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-[var(--color-primary)]" />
                  {item.days}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.activities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Awaits You
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            A country of extraordinary beauty, warmth, and cultural richness. Morocco rewards
            the experienced traveler with unforgettable moments at every turn.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/luxury"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Gem className="w-4 h-4" />
              Luxury Travel Guide
            </Link>
            <Link
              href="/health"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Stethoscope className="w-4 h-4" />
              Health & Safety
            </Link>
            <Link
              href="/accessible-travel"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Accessibility className="w-4 h-4" />
              Accessible Travel
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

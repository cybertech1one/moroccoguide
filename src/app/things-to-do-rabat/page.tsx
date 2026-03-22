import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Landmark,
  Star,
  Camera,
  UtensilsCrossed,
  ShoppingBag,
  Compass,
  Clock,
  Lightbulb,
  ArrowRight,
  Info,
  Calendar,
  Ticket,
  Sun,
  Sparkles,
  Globe,
  Footprints,
  Eye,
  Waves,
  Anchor,
  Sunset,
  TreesIcon,
  MoonStar,
  Building2,
  Train,
  Flower2,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Top 15+ Things to Do in Rabat 2026 | Complete Guide',
  description:
    'Discover the best things to do in Rabat in 2026. Hassan Tower, Kasbah des Oudaias, Chellah necropolis, Mohammed VI Museum, Bouregreg Marina, medina walks, Rabat Beach, and more. Prices in MAD and insider tips.',
  keywords: [
    'things to do in Rabat',
    'Rabat attractions',
    'Rabat sightseeing',
    'Hassan Tower',
    'Kasbah Oudaias',
    'Chellah Rabat',
    'Rabat Morocco guide 2026',
    'what to do in Rabat',
    'Rabat activities',
    'Mohammed V Mausoleum',
    'Rabat medina',
    'Bouregreg Marina Rabat',
    'Rabat Beach',
    'Mohammed VI Museum Rabat',
    'Rabat day trips',
    'Rabat nightlife',
    'Sale Morocco',
    'Andalusian Gardens Rabat',
    'Royal Palace Rabat',
    'Rabat travel guide',
    'best Rabat experiences',
  ],
  openGraph: {
    title: 'Top 15+ Things to Do in Rabat 2026 | Complete Guide',
    description:
      'The complete guide to Rabat activities and experiences. Hassan Tower, Kasbah des Oudaias, Chellah, Mohammed VI Museum, Bouregreg Marina, medina, beach, and day trips with prices in MAD.',
    url: `${BASE_URL}/things-to-do-rabat`,
    images: [
      {
        url: `${BASE_URL}/images/hero-rabat.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Rabat showing Hassan Tower and the Mohammed V Mausoleum with the Bouregreg river and Atlantic coast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 15+ Things to Do in Rabat 2026',
    description:
      'Hassan Tower, Kasbah Oudaias, Chellah necropolis, Mohammed VI Museum, Bouregreg Marina, medina walks, beach, and day trips. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-rabat.webp`],
  },
  alternates: { canonical: `${BASE_URL}/things-to-do-rabat` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/things-to-do-rabat`,
  name: 'Top 15+ Things to Do in Rabat 2026 | Complete Guide',
  description:
    'Discover the best things to do in Rabat in 2026. From the iconic Hassan Tower and Kasbah des Oudaias to the ancient Chellah necropolis, modern art museums, and Bouregreg Marina.',
  url: `${BASE_URL}/things-to-do-rabat`,
  image: `${BASE_URL}/images/hero-rabat.webp`,
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
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/things-to-do-rabat`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Rabat',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Rabat', item: `${BASE_URL}/rabat` },
      { '@type': 'ListItem', position: 3, name: 'Things to Do', item: `${BASE_URL}/things-to-do-rabat` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the top things to do in Rabat?', acceptedAnswer: { '@type': 'Answer', text: 'The top things to do include visiting Hassan Tower and the Mohammed V Mausoleum (free), exploring Kasbah des Oudaias (free), Chellah necropolis (from 70 MAD), Mohammed VI Museum of Modern Art (from 40 MAD), walking the medina and Rue des Consuls, Bouregreg Marina, crossing to Sale, Rabat Beach, the Andalusian Gardens, viewing the Royal Palace exterior, and taking day trips by train.' } },
    { '@type': 'Question', name: 'How many days do you need in Rabat?', acceptedAnswer: { '@type': 'Answer', text: 'Two days is ideal. Day 1: Hassan Tower, Mohammed V Mausoleum, Kasbah des Oudaias, medina walk, Rue des Consuls shopping. Day 2: Chellah, Mohammed VI Museum, Bouregreg Marina, Rabat Beach, nightlife. Add a third day for Sale, Temara beach, or a train day trip to Meknes.' } },
    { '@type': 'Question', name: 'Is Rabat worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. As Morocco capital, Rabat offers a refined, uncrowded alternative to Marrakech and Fes. It is a UNESCO World Heritage city with world-class monuments, excellent museums, a beautiful beach, sophisticated dining, and a relaxed atmosphere. It is also well-connected by high-speed train to Casablanca and Tangier.' } },
    { '@type': 'Question', name: 'Is Rabat safe for tourists?', acceptedAnswer: { '@type': 'Answer', text: 'Rabat is widely considered the safest major city in Morocco. As the political capital and home to embassies and government institutions, security is tight and well-maintained. The medina is less chaotic than Marrakech or Fes, hassle from touts is minimal, and the city has a calm, orderly atmosphere.' } },
    { '@type': 'Question', name: 'What is the best time to visit Rabat?', acceptedAnswer: { '@type': 'Answer', text: 'April to June and September to November offer the best weather with warm temperatures (20-28 degrees) and pleasant Atlantic breezes. Summer (July-August) can be hot but the ocean breeze moderates temperatures. Winter is mild (12-18 degrees) with occasional rain. The Mawazine music festival in June is a major cultural event.' } },
    { '@type': 'Question', name: 'How do I get around Rabat?', acceptedAnswer: { '@type': 'Answer', text: 'Rabat has an excellent tramway system (from 6 MAD per ride) connecting the city center, train station, and Agdal neighborhood. Petit taxis (blue) are metered and affordable (from 10-30 MAD within the city). The high-speed Al Boraq train connects to Casablanca (45 minutes), Tangier (2 hours), and Kenitra. Walking is easy in the compact center.' } },
  ],
};

/* ===============================================================
   DATA: ICONIC MONUMENTS
   =============================================================== */

const iconicMonuments = [
  {
    name: 'Hassan Tower & Mohammed V Mausoleum',
    icon: Landmark,
    category: 'UNESCO Heritage',
    price: 'Free',
    duration: '1-1.5 hours',
    bestTime: 'Morning (before 11 AM)',
    description:
      'The unfinished minaret of the Hassan Mosque is Rabat most iconic landmark. Begun in 1195 by Almohad Sultan Yacoub el-Mansour, the mosque was intended to be the largest in the world, but construction halted when the sultan died in 1199. The 44-meter tower — intended to reach 86 meters — stands amid a forest of 348 broken stone columns marking where the vast prayer hall would have been. Adjacent stands the spectacular Mohammed V Mausoleum, a masterpiece of modern Alaouite architecture completed in 1971, housing the tombs of King Mohammed V and his sons Hassan II and Prince Moulay Abdallah. The interior features stunning Italian marble, hand-carved plaster, zellige tilework, and a mahogany ceiling — visitors can peer down from a gallery above the tombs.',
    insiderTip:
      'Entry to both the tower esplanade and the mausoleum is free. The mausoleum is one of the few religious sites in Morocco open to non-Muslims. Dress modestly. The royal guards in immaculate white uniforms add to the solemnity. Visit early morning for the best light on the tower columns. The site is especially atmospheric at sunset when the stone glows amber.',
  },
  {
    name: 'Kasbah des Oudaias',
    icon: Globe,
    category: 'Historic Citadel',
    price: 'Free (garden) / From 10 MAD (museum)',
    duration: '1.5-2 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'Perched on a cliff above the mouth of the Bouregreg River and the Atlantic, the Kasbah des Oudaias is Rabat historic heart and most picturesque quarter. Built by the Almohads in the 12th century, its monumental Bab Oudaia gateway is one of the finest examples of Almohad architecture in Morocco. Inside, narrow cobbled streets lined with whitewashed and blue-painted houses lead to cliff-edge viewpoints over the river, the ocean, and the twin city of Sale. At the base of the Kasbah, the serene Andalusian Gardens offer manicured hedges, orange trees, bougainvillea, and a tranquil cafe. The small museum inside the Kasbah occupies a former palace and displays traditional Moroccan arts.',
    insiderTip:
      'Enter through the grand Bab Oudaia gate and walk straight to the river-facing ramparts for sweeping views. The small Cafe Maure at the foot of the garden serves excellent mint tea and Moroccan pastries on a terrace overlooking the river — one of the most peaceful spots in all of Morocco. The blue-and-white streets are reminiscent of Chefchaouen but far less crowded.',
  },
  {
    name: 'Chellah Necropolis',
    icon: Landmark,
    category: 'Ancient Ruins',
    price: 'From 70 MAD',
    duration: '1-1.5 hours',
    bestTime: 'Morning',
    description:
      'The Chellah is one of Morocco most extraordinary sites — a Roman city and medieval Islamic necropolis wrapped in lush, overgrown gardens on the edge of Rabat. Originally the Roman settlement of Sala Colonia (from the 1st century BC), it was later used by the Merenid dynasty in the 14th century as a royal burial ground. The crumbling Merenid minaret, partially collapsed mosque, and carved marble tombs are entwined with fig trees, wild flowers, and nesting storks who return every spring. The blend of Roman columns, Islamic arches, and untamed nature creates an atmosphere unlike any other historical site in Morocco.',
    insiderTip:
      'The Chellah reopened in 2024 after a major restoration project following the 2023 earthquake. The new visitor center and improved pathways make it more accessible than ever. Visit in spring when the storks are nesting on the Merenid minaret — a spectacular sight. The on-site cafe is pleasant. Allow at least an hour to explore the Roman baths, forum remains, and royal tombs.',
  },
  {
    name: 'Mohammed V Mausoleum Interior',
    icon: Sparkles,
    category: 'Royal Architecture',
    price: 'Free',
    duration: '30-45 minutes',
    bestTime: 'Any time during opening hours',
    description:
      'While included with the Hassan Tower visit, the mausoleum interior deserves special mention for its extraordinary craftsmanship. Designed by Vietnamese-French architect Vo Toan and completed over nine years, every surface is adorned: floors and lower walls in white Italian onyx marble, upper walls in hand-carved plaster arabesques, dado panels in intricate zellige mosaic, and an immense dome of carved and painted cedarwood. A circular balcony allows visitors to look down at the three marble sarcophagi below, attended by guards. The scale of artistic achievement rivals the finest monuments in the Islamic world.',
    insiderTip:
      'Photography is allowed but be respectful — this is an active place of mourning and prayer. The craftsmanship rewards close inspection: notice how the zellige patterns change between panels, and how the carved plaster transitions between geometric and floral motifs. The guards will not rush you. Early afternoon is often the quietest time.',
  },
];

/* ===============================================================
   DATA: CULTURE & MUSEUMS
   =============================================================== */

const cultureMuseums = [
  {
    name: 'Mohammed VI Museum of Modern & Contemporary Art',
    icon: Eye,
    category: 'Art Museum',
    price: 'From 40 MAD',
    duration: '1.5-2 hours',
    bestTime: 'Midday (escape the heat)',
    description:
      'Morocco first museum dedicated to modern and contemporary art opened in 2014 in a striking purpose-built white building near the train station. The collection spans Moroccan art from the 1950s to today, including works by masters like Mohammed Melehi, Farid Belkahia, Ahmed Cherkaoui, and Hassan Hajjaj. Rotating exhibitions feature international artists alongside Moroccan talent. The museum shop stocks excellent art books and prints, and the architecture itself — with its flowing internal spaces and natural light — is worth the visit.',
    insiderTip:
      'Check the website for current exhibitions before visiting — the rotating shows are often as strong as the permanent collection. The museum is air-conditioned, making it a perfect midday escape. Photography is usually permitted in the permanent galleries but check signage. Allow 90 minutes minimum. The surrounding neighborhood has good lunch options.',
  },
  {
    name: 'Rabat Medina & Rue des Consuls',
    icon: ShoppingBag,
    category: 'Shopping & Heritage',
    price: 'Free',
    duration: '2-3 hours',
    bestTime: 'Morning (9 AM - 12 PM)',
    description:
      'Rabat medina is refreshingly calm compared to Marrakech or Fes. The streets are clean, well-organized, and hassle-free — reflecting the capital city character. Rue des Consuls, the main commercial artery, was once home to European consulates and is now lined with carpet shops, leather goods stores, antique dealers, and craft workshops. The quality of goods here is high and the bargaining atmosphere relaxed. Side streets reveal traditional metalworkers, woodcarvers, and textile weavers. The medina walls, built by the Almohads, are impressive in their own right.',
    insiderTip:
      'Rue des Consuls is one of the best places in Morocco to buy carpets and leather goods with minimal hassle. Prices are lower than Marrakech and Fes, and shopkeepers are less aggressive. The cooperative shops often have fixed prices. For the freshest produce and local atmosphere, visit the covered market near Bab el-Had. Thursday and Sunday mornings see the largest crowds of local shoppers.',
  },
  {
    name: 'Andalusian Gardens',
    icon: Flower2,
    category: 'Gardens & Relaxation',
    price: 'Free',
    duration: '30-45 minutes',
    bestTime: 'Late afternoon',
    description:
      'Tucked at the base of the Kasbah des Oudaias, these formal gardens were laid out in the early 20th century in the Moorish-Andalusian tradition. Geometric pathways wind between clipped hedges, fruit trees, flowering bushes, and herb gardens. Bougainvillea cascades over whitewashed walls, and the scent of jasmine and orange blossom fills the air. The garden cafe — Cafe Maure — occupies a terrace with views over the Bouregreg River and is one of the most peaceful spots in the city. It is a contemplative counterpoint to the bustle of the medina above.',
    insiderTip:
      'The gardens are a popular spot for local families and couples. Visit in late afternoon for the golden light filtering through the trees. Cafe Maure serves mint tea (from 15 MAD) and traditional pastries (from 10 MAD) — the terrace is a must. Combine with your Kasbah Oudaias visit for a seamless experience. The gardens are small but exquisitely maintained.',
  },
  {
    name: 'Royal Palace (Dar al-Makhzen) Exterior',
    icon: Building2,
    category: 'Royal Architecture',
    price: 'Free (exterior only)',
    duration: '20-30 minutes',
    bestTime: 'Morning',
    description:
      'The sprawling Royal Palace complex has been the primary residence of the Moroccan king since the 18th century. While the interior is closed to visitors, the exterior is impressive: the grand ceremonial entrance with its massive brass doors, immaculate guards in red uniforms, and the vast Place Mechouar (parade ground) give a sense of royal scale. The palace grounds — which include gardens, a mosque, a college, and administrative buildings — occupy a significant portion of central Rabat. The architectural style blends traditional Moroccan design with French colonial elements.',
    insiderTip:
      'Photography of the palace gates and guards is permitted from a respectful distance. The Friday prayer arrival ceremony is a formal affair worth timing your visit around. The surrounding boulevards are lined with mature trees and are pleasant for walking. Combine with a visit to the nearby Sunna Mosque and the Mechouar gardens.',
  },
];

/* ===============================================================
   DATA: WATERFRONT & BEACH
   =============================================================== */

const waterfrontBeach = [
  {
    name: 'Bouregreg Marina & River Walk',
    icon: Anchor,
    category: 'Waterfront & Leisure',
    price: 'Free to explore',
    duration: '1.5-2 hours',
    bestTime: 'Late afternoon to evening',
    description:
      'The Bouregreg Valley development project has transformed the riverfront between Rabat and Sale into a modern waterfront district. The marina features yacht berths, waterfront restaurants, cafes, shops, and a long pedestrian promenade. River boat tours (from 30 MAD) cruise between the two cities. The contrast between the ancient Kasbah Oudaias cliff above and the sleek contemporary marina below perfectly captures Rabat blend of history and modernity. The Bouregreg Theatre and the recently opened Grand Theatre of Rabat (designed by Zaha Hadid Architects) are architectural landmarks.',
    insiderTip:
      'The marina promenade is ideal for a sunset walk. Restaurants here are pricier than the medina but the setting is excellent for a special dinner. The boat trip to Sale and back (from 30 MAD) is a relaxing way to see both cities from the water. The new tramway connects the marina to the city center easily. On warm evenings, the promenade fills with families — a lovely atmosphere.',
  },
  {
    name: 'Rabat Beach (Plage de Rabat)',
    icon: Waves,
    category: 'Beach & Leisure',
    price: 'Free (sunbed from 30 MAD)',
    duration: '2-4 hours',
    bestTime: 'June to September',
    description:
      'Rabat city beach stretches along the Atlantic coast south of the Kasbah Oudaias, with golden sand and Atlantic waves. The beach is popular with locals for swimming, surfing, and football, and is backed by a corniche with cafes and restaurants. The Atlantic water is cooler than the Mediterranean (18-22 degrees in summer) with stronger currents, so swim near the lifeguard stations. The beach promenade has been upgraded with modern facilities, and beach clubs offer sunbeds and umbrellas.',
    insiderTip:
      'The beach can be windy — the Atlantic breeze is constant. Surfing conditions are good, especially at the southern end. Beach clubs are concentrated in the center of the beach strip. For a quieter experience, head south toward Temara. The corniche restaurants serve fresh fish and grilled seafood at reasonable prices (from 80 MAD). Sunset on the beach with the Kasbah silhouette above is stunning.',
  },
  {
    name: 'Temara Beach Day Trip',
    icon: Sun,
    category: 'Beach Excursion',
    price: 'From 10 MAD (grand taxi)',
    duration: 'Half to full day',
    bestTime: 'June to September',
    description:
      'Just 13 km south of Rabat, Temara (also called Plage des Nations) is the preferred beach escape for Rabat residents. The wide sandy beach is cleaner and less crowded than the city beach, with better swimming conditions. Beach cafes and restaurants line the shore, and the atmosphere is more resort-like than urban. The Val d Anfa area has upscale beach clubs. It is easy to reach by grand taxi or by car, making it an excellent half-day escape from sightseeing.',
    insiderTip:
      'Grand taxis from Rabat to Temara cost from 10-15 MAD per person shared. Go early on weekends as the beach fills up by midday. The seafood restaurants here are excellent — try the grilled sardines and fried calamari (from 60 MAD). Some beach clubs charge an entrance fee (from 50 MAD) that includes a sunbed. Bring sunscreen — the Atlantic sun is stronger than it feels with the breeze.',
  },
];

/* ===============================================================
   DATA: DAY TRIPS & EXCURSIONS
   =============================================================== */

const dayTrips = [
  {
    name: 'Sale (Twin City)',
    icon: Globe,
    category: 'Cultural Excursion',
    price: 'From 7 MAD (tramway) / From 30 MAD (boat)',
    duration: '2-4 hours',
    bestTime: 'Morning',
    description:
      'Directly across the Bouregreg River from Rabat, Sale is an ancient city with a character entirely its own. Founded before Rabat, Sale was once a powerful pirate republic — the infamous Sale Rovers terrorized Atlantic shipping in the 17th century. Today it is a traditional, conservative city with a fascinating medina, the beautiful Medersa Abou el-Hassan (a 14th-century Islamic school with exquisite tilework), the Great Mosque, and busy souks frequented by locals rather than tourists. The atmosphere is authentically Moroccan in a way that Rabat sometimes polished surface can obscure.',
    insiderTip:
      'Take the tramway across the Bouregreg bridge (from 7 MAD) or a small rowing boat from the Oudaias side (from 30 MAD — more atmospheric). The Medersa Abou el-Hassan is a hidden gem rivaling anything in Fes — the carved stucco and zellige work are extraordinary. Sale medina is not set up for tourism, so be prepared for an authentic, slightly rough-around-the-edges experience. The pottery cooperative on the way to Sale is excellent.',
  },
  {
    name: 'Train Day Trip to Meknes & Volubilis',
    icon: Train,
    category: 'Day Trip',
    price: 'From 75 MAD (train to Meknes)',
    duration: 'Full day',
    bestTime: 'Any day',
    description:
      'Rabat excellent rail connections make day trips easy. Meknes, the "Versailles of Morocco," is just 2 hours by train (from 75 MAD). Visit the monumental Bab Mansour gate, the grand Place el-Hedim, and the haunting royal granaries of Heri es-Souani. From Meknes, a grand taxi (from 50 MAD) reaches the Roman ruins of Volubilis, one of the best-preserved Roman sites in Africa. Return to Rabat the same evening for a full day of imperial and ancient history.',
    insiderTip:
      'Take the first morning train to Meknes (departures from 7 AM) to maximize your time. Buy a return ticket at Rabat Ville station. In Meknes, the main sights are walkable from the train station. For Volubilis, negotiate a grand taxi from Place el-Hedim (from 50 MAD per person shared, from 250 MAD for the car). The last train back to Rabat departs around 8 PM.',
  },
  {
    name: 'Rabat Zoo (Jardin Zoologique)',
    icon: TreesIcon,
    category: 'Family Attraction',
    price: 'From 50 MAD (adults) / From 30 MAD (children)',
    duration: '2-3 hours',
    bestTime: 'Morning',
    description:
      'Reopened in 2012 after a complete renovation, the Rabat Zoo is one of the best in Africa. Spread over 50 hectares on the outskirts of the city, it showcases animals from five African ecosystems: savanna, desert, wetlands, tropical forest, and the Atlas Mountains. Highlights include Atlas lions (Morocco national symbol), Barbary macaques, African elephants, giraffes, and an impressive aviary. The landscaping is beautiful, with wide pathways, shade trees, and natural enclosures. It is an excellent family activity and a refreshing change from historical sightseeing.',
    insiderTip:
      'The zoo is about 8 km from the city center — take a petit taxi (from 30 MAD) or the tramway to Agdal station and then a short taxi. Arrive when it opens to see the animals most active. The on-site restaurant is decent and reasonably priced. Allow 2-3 hours for a thorough visit. The Atlas lion enclosure is the undisputed highlight — these magnificent animals were once extinct in the wild.',
  },
];

/* ===============================================================
   DATA: FOOD & NIGHTLIFE
   =============================================================== */

const foodNightlife = [
  {
    name: 'Rabat Restaurant Scene',
    icon: UtensilsCrossed,
    category: 'Dining',
    price: 'From 60 MAD (casual) to from 300 MAD (fine dining)',
    duration: '1-2 hours',
    bestTime: 'Lunch or dinner',
    description:
      'As Morocco capital, Rabat attracts the country best chefs and offers a dining scene that rivals Marrakech with less pretension. The Agdal neighborhood is the epicenter, with upscale Moroccan, French, Italian, and Japanese restaurants. In the medina, traditional restaurants serve tagines, couscous, and pastilla at reasonable prices. The Bouregreg Marina has waterfront dining, and the Souissi neighborhood caters to the diplomatic crowd. Street food stalls around Bab el-Had serve excellent msemen, harira, and grilled meats at budget prices.',
    insiderTip:
      'For a special meal, try Cosmopolitan (modern Moroccan, from 150 MAD) in Agdal or Dar Naji (traditional, from 80 MAD) in the medina. The fish market restaurants near Bab el-Had are excellent value — choose your fish and have it grilled (from 50 MAD). Friday couscous is a tradition — many restaurants offer special Friday menus. Reservations recommended for dinner at popular spots, especially on weekends.',
  },
  {
    name: 'Rabat Nightlife & Evening Culture',
    icon: MoonStar,
    category: 'Evening Entertainment',
    price: 'From 40 MAD (drinks)',
    duration: '2-4 hours',
    bestTime: 'Thursday to Saturday evenings',
    description:
      'Rabat nightlife is sophisticated and low-key compared to Marrakech. The Agdal neighborhood has upscale bars and lounges, while the marina offers waterfront evening drinks. The cultural scene is strong — the new Grand Theatre of Rabat (designed by Zaha Hadid) hosts world-class performances, and the Mohammed VI Museum occasionally holds evening events. Jazz clubs, rooftop terraces, and hotel bars provide refined options. The annual Mawazine music festival in June brings international headliners and turns the city into a massive outdoor concert venue.',
    insiderTip:
      'The rooftop bar at the Tour Hassan Palace hotel offers stunning views over the Hassan Tower at night. In Agdal, the bars along Avenue de France are popular with young professionals. Rabat nightlife starts late — most venues only fill up after 10 PM. The Mawazine festival is free for many concerts, attracting over 2 million visitors — plan accommodation well in advance if visiting in June.',
  },
  {
    name: 'Agdal Gardens Walk',
    icon: TreesIcon,
    category: 'Parks & Recreation',
    price: 'Free',
    duration: '1-1.5 hours',
    bestTime: 'Late afternoon',
    description:
      'The Agdal neighborhood and its surrounding green spaces represent modern Rabat at its most pleasant. Wide tree-lined boulevards, manicured parks, and public gardens provide welcome shade and tranquility. The Triangle d Or area features upscale shops and cafes perfect for people-watching. The Hilton and Sofitel gardens are particularly beautiful. Walking from the medina through the modern administrative district to Agdal reveals Rabat layered urban personality — from medieval walls to French colonial architecture to contemporary glass towers.',
    insiderTip:
      'Combine a walk through Agdal with lunch or dinner at one of the neighborhood many restaurants. The cafes along Avenue de France are the social hub — locals come here to see and be seen. The Saturday morning organic market in Agdal is increasingly popular. The neighborhood is well-served by the tramway, making it easy to reach from the medina.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Free Iconic Sites', icon: Landmark, description: 'Hassan Tower, Mohammed V Mausoleum, Kasbah des Oudaias, the Andalusian Gardens, and the Royal Palace exterior are all free. Rabat finest monuments cost nothing to visit.', savings: 'Free — the best of Rabat' },
  { tip: 'Use the Tramway', icon: Train, description: 'The Rabat-Sale tramway costs from 6 MAD per ride and connects key neighborhoods including the train station, city center, marina, and Agdal. Much cheaper than taxis.', savings: 'Save from 15-25 MAD per trip vs. taxi' },
  { tip: 'Street Food at Bab el-Had', icon: UtensilsCrossed, description: 'The market area around Bab el-Had gate has excellent street food stalls. A full meal of grilled meat, bread, and salad costs from 25-40 MAD vs. from 80-200 MAD at restaurants.', savings: 'Save from 55-160 MAD per meal' },
  { tip: 'Boat to Sale Instead of Tour', icon: Anchor, description: 'The rowing boat to Sale costs from 30 MAD, or take the tramway for from 7 MAD. Organized tours to Sale charge from 300-500 MAD for essentially the same experience.', savings: 'Save from 270-493 MAD vs. tour' },
  { tip: 'Grand Taxi Sharing to Temara', icon: MapPin, description: 'A shared grand taxi to Temara Beach costs from 10-15 MAD per person. Private taxis charge from 80-120 MAD. Organized beach excursions cost from 200-400 MAD.', savings: 'Save from 70-385 MAD per trip' },
  { tip: 'Train Tickets in Advance', icon: Train, description: 'ONCF train tickets can be bought online at oncf.ma for the same price. The Al Boraq high-speed to Casablanca costs from 80 MAD first class, from 60 MAD second class.', savings: 'Smart booking saves time and stress' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Rabat Is Morocco Most Walkable City', icon: Footprints, description: 'The medina, Hassan Tower, Kasbah Oudaias, and the marina are all within walking distance of each other. Rabat compact center means you rarely need transport for sightseeing.' },
  { tip: 'The Capital Advantage', icon: Building2, description: 'As the political capital, Rabat is clean, well-policed, and hassle-free. Touts and aggressive salespeople are rare. This makes it an ideal introduction to Morocco, especially for first-time visitors.' },
  { tip: 'Best Photography Light', icon: Camera, description: 'Hassan Tower columns are best at sunrise or sunset. The Kasbah Oudaias blue streets photograph best in morning light. The Bouregreg Marina at blue hour is stunning. Chellah with its overgrown ruins has beautiful diffused afternoon light.' },
  { tip: 'High-Speed Train Hub', icon: Train, description: 'Rabat Ville station connects to Casablanca (45 minutes, from 60 MAD), Tangier (2 hours, from 150 MAD), Fes (2.5 hours, from 100 MAD), and Meknes (2 hours, from 75 MAD) via the Al Boraq and conventional rail.' },
  { tip: 'Friday Is Special', icon: Calendar, description: 'Friday is the holy day. Many shops in the medina close for Friday prayers (12-2 PM). Restaurants serve special Friday couscous. The Mohammed V Mausoleum is more atmospheric with worshippers visiting. Plan accordingly.' },
  { tip: 'The Storks of Chellah', icon: Eye, description: 'White storks nest on the Chellah ruins from February to July. Spring (March-May) is peak nesting season — the sight of storks perched on the Merenid minaret is extraordinary. Bring binoculars or a telephoto lens.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What are the top things to do in Rabat?', answer: 'The top things to do include visiting Hassan Tower and the Mohammed V Mausoleum (free), exploring Kasbah des Oudaias (free), Chellah necropolis (from 70 MAD), Mohammed VI Museum of Modern Art (from 40 MAD), walking the medina and Rue des Consuls (free), Bouregreg Marina (free), crossing to Sale (from 7 MAD tramway), Rabat Beach (free), the Andalusian Gardens (free), viewing the Royal Palace (free), Rabat Zoo (from 50 MAD), and train day trips to Meknes.' },
  { question: 'How many days do you need in Rabat?', answer: 'Two days is ideal for the main sights. Day 1: Hassan Tower, Mohammed V Mausoleum, Kasbah des Oudaias, Andalusian Gardens, medina and Rue des Consuls. Day 2: Chellah, Mohammed VI Museum, Bouregreg Marina, beach, nightlife. A third day allows a day trip to Sale, Temara Beach, or a train excursion to Meknes. One day allows the main monuments and Kasbah.' },
  { question: 'Is Rabat safe for tourists?', answer: 'Rabat is widely regarded as the safest major city in Morocco. As the administrative capital with embassies and government institutions, security is strong. The medina is less intense than Marrakech or Fes, hassle from touts is rare, and the overall atmosphere is calm and orderly. Standard precautions apply as in any city.' },
  { question: 'How do I get from Casablanca to Rabat?', answer: 'The Al Boraq high-speed train connects Casablanca Voyageurs to Rabat Ville in 45 minutes (from 60 MAD second class, from 80 MAD first class). Conventional trains take about 1 hour. Trains run frequently throughout the day. Grand taxis from Casablanca cost from 40-50 MAD shared. The journey by car takes about 1 hour via the A1 motorway.' },
  { question: 'What is the best time to visit Rabat?', answer: 'April to June and September to November are ideal with warm weather (20-28 degrees) and comfortable Atlantic breezes. Summer is hot but moderated by ocean winds. Winter (December-February) is mild (12-18 degrees) with occasional rain. The Mawazine Festival in June is the biggest cultural event, drawing millions.' },
  { question: 'Is Rabat worth visiting?', answer: 'Absolutely. Rabat is a UNESCO World Heritage city with world-class monuments, excellent museums, a beautiful beach, sophisticated dining, and a calm, hassle-free atmosphere. It offers an uncrowded, refined alternative to Marrakech and Fes while being perfectly connected by high-speed train. It is one of Morocco most underrated cities for tourists.' },
  { question: 'What is Rabat known for?', answer: 'Rabat is Morocco political capital and a UNESCO World Heritage city. It is known for the iconic Hassan Tower, the Mohammed V Mausoleum, the Kasbah des Oudaias, the Chellah necropolis, the Mohammed VI Museum of Modern Art, its clean and orderly medina, the Bouregreg Marina, and the annual Mawazine music festival. It is also the home of the Moroccan royal family.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/rabat', icon: MapPin, title: 'Rabat City Guide', description: 'Complete guide to Rabat: neighborhoods, transport, accommodation, and planning.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to seafood and street food — the complete cuisine guide.' },
  { href: '/things-to-do-meknes', icon: Landmark, title: 'Things to Do in Meknes', description: 'Explore the Versailles of Morocco — Bab Mansour, royal granaries, and Volubilis day trips.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Sandy beaches, hidden coves, and surf breaks along the Atlantic and Mediterranean.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Morocco Road Trip Routes', description: 'Scenic driving routes through Morocco, from coast to mountains to desert.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function ThingsToDoRabatPage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-rabat.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/rabat" className="hover:text-white transition-colors">
              Rabat
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Things to Do</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Ultimate Activity Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Top Things to Do
            <br className="hidden md:block" /> in Rabat
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the iconic Hassan Tower and serene Kasbah des Oudaias to ancient Roman ruins and a modern marina.
            Your complete 2026 guide to Morocco&apos;s elegant capital, with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Rabat: Morocco&apos;s Refined Capital
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Rabat is the city that surprises. Travelers rushing between Marrakech and Fes often
                skip Morocco&apos;s political capital, assuming it is just another administrative center.
                They are wrong. This UNESCO World Heritage city sits where the Bouregreg River meets
                the Atlantic Ocean, blending 800 years of imperial history with tree-lined boulevards,
                world-class museums, and a dining scene that rivals any city in North Africa. It is
                clean, safe, walkable, and refreshingly free of the tourist hustle that defines other
                Moroccan cities.
              </p>
              <p>
                The monuments are extraordinary. The unfinished Hassan Tower and its forest of broken
                columns tell the story of Almohad ambition. The Mohammed V Mausoleum is a masterpiece
                of 20th-century Islamic architecture. The Kasbah des Oudaias, with its blue-and-white
                streets tumbling toward the Atlantic, rivals Santorini for beauty. And the Chellah
                necropolis — where Roman columns and Merenid tombs are embraced by wild gardens and
                nesting storks — is unlike anything else in Morocco.
              </p>
              <p>
                This guide covers 15+ of the best things to do in Rabat, organized by category: iconic
                monuments, culture and museums, waterfront and beach, day trips, food and nightlife.
                Each includes real 2026 prices in MAD, practical logistics, and insider tips from
                people who know this city intimately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview: Top 10 Must-Do -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Must-Do Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Short on time? These are the ten experiences that define a visit to Rabat.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Hassan Tower & Mohammed V Mausoleum', price: 'Free', time: '1-1.5 hours', category: 'UNESCO Heritage' },
              { rank: 2, name: 'Kasbah des Oudaias', price: 'Free', time: '1.5-2 hours', category: 'Historic Citadel' },
              { rank: 3, name: 'Chellah Necropolis', price: 'From 70 MAD', time: '1-1.5 hours', category: 'Ancient Ruins' },
              { rank: 4, name: 'Mohammed VI Museum of Modern Art', price: 'From 40 MAD', time: '1.5-2 hours', category: 'Art Museum' },
              { rank: 5, name: 'Medina & Rue des Consuls', price: 'Free', time: '2-3 hours', category: 'Shopping & Heritage' },
              { rank: 6, name: 'Bouregreg Marina', price: 'Free', time: '1.5-2 hours', category: 'Waterfront' },
              { rank: 7, name: 'Andalusian Gardens & Cafe Maure', price: 'Free / From 15 MAD', time: '45 min - 1 hour', category: 'Gardens' },
              { rank: 8, name: 'Sale Twin City', price: 'From 7 MAD', time: '2-4 hours', category: 'Day Trip' },
              { rank: 9, name: 'Rabat Beach', price: 'Free', time: '2-4 hours', category: 'Beach' },
              { rank: 10, name: 'Train Day Trip to Meknes', price: 'From 75 MAD', time: 'Full day', category: 'Excursion' },
            ].map((item) => (
              <div key={item.rank} className="card-moroccan p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-[var(--color-accent)]">{item.rank}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Ticket className="w-3 h-3" />
                      {item.price}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Iconic Monuments -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Iconic Monuments
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Rabat iconic landmarks span from the 12th-century Almohad era to the 20th-century royal architecture.
            These four sites define the city historical grandeur.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Opening times may change during Ramadan and national holidays.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {iconicMonuments.map((attraction) => {
              const AttrIcon = attraction.icon;
              return (
                <div key={attraction.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AttrIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {attraction.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {attraction.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {attraction.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {attraction.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {attraction.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {attraction.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {attraction.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Culture & Museums -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture &amp; Museums
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From world-class modern art to the tranquil medina and lush Andalusian gardens,
            Rabat cultural offerings reward the curious traveler.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The medina and gardens are free. The Mohammed VI Museum charges a modest entry fee.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {cultureMuseums.map((item) => {
              const CulIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CulIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {item.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Waterfront & Beach -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Waterfront &amp; Beach
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Where the Bouregreg River meets the Atlantic, Rabat offers marina strolls,
            city beaches, and coastal escapes just minutes from the medina.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Beach season runs June to September. The marina and river promenade are enjoyable year-round.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {waterfrontBeach.map((item) => {
              const WaterIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <WaterIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Day Trips & Excursions -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the twin city of Sale across the river to train excursions to imperial cities,
            Rabat is perfectly positioned for unforgettable day trips.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Rabat Ville train station is a hub for the Al Boraq high-speed and conventional rail networks.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {dayTrips.map((item) => {
              const TripIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TripIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Food, Culture & Nightlife -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food, Nightlife &amp; Leisure
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            As Morocco capital, Rabat attracts the country best chefs and offers
            a sophisticated dining and evening scene with something for every budget.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The Agdal neighborhood is the dining and nightlife hub. The medina offers the best budget options.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {foodNightlife.map((item) => {
              const FoodIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FoodIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Rabat
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical strategies to stretch your budget further without missing any of the best experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {budgetTips.map((tip, index) => {
              return (
                <div key={tip.tip} className="card-moroccan p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-[var(--color-gold)]">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tip.tip}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{tip.description}</p>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-green-50 text-green-700">
                    {tip.savings}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Rabat
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge that makes the difference between a good trip and an unforgettable one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {insiderTips.map((item) => {
              const InsiderIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <InsiderIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Sample 2-Day Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 2-Day Rabat Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical day-by-day plan covering the essential experiences. Adjust based on your interests and pace.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Monuments, Kasbah &amp; Medina
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start at Hassan Tower and the Mohammed V Mausoleum (free, 1-1.5 hours). Take in the
                      forest of columns and the extraordinary mausoleum interior. Continue to the Kasbah
                      des Oudaias (free) — walk through the Bab Oudaia gate, explore the blue-and-white
                      streets, and visit the rampart viewpoints overlooking the river and ocean.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Mint tea and pastries at Cafe Maure in the Andalusian Gardens (from 15 MAD). Descend
                      into the medina and walk Rue des Consuls for carpet shopping and craft browsing.
                      Lunch at a medina restaurant (from 50 MAD). Visit the covered market near Bab el-Had
                      for local atmosphere and fresh produce.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sunset walk along the Bouregreg Marina promenade (free). Dinner in the Agdal
                      neighborhood (from 80-200 MAD) or at a waterfront restaurant. Evening drinks at a
                      rooftop bar or the Tour Hassan Palace hotel terrace. Estimated Day 1 cost: from 200-400 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 2: Chellah, Art &amp; Beach
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit the Chellah necropolis (from 70 MAD, 1-1.5 hours) — explore the Roman ruins,
                      Merenid tombs, and overgrown gardens with nesting storks. Continue to the Mohammed
                      VI Museum of Modern and Contemporary Art (from 40 MAD, 1.5 hours) for an
                      air-conditioned cultural break.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch at a corniche restaurant with fresh seafood (from 80 MAD). Spend the afternoon
                      at Rabat Beach or take a grand taxi to Temara Beach (from 10 MAD) for cleaner sand
                      and better swimming. Alternatively, take the tramway to Sale (from 7 MAD) and explore
                      the Medersa and medina.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Farewell dinner in Agdal or the medina (from 100 MAD). Explore Rabat evening culture
                      — rooftop bars, a performance at the Grand Theatre, or a jazz club. Street food for
                      a late snack at Bab el-Had (from 20 MAD). Estimated Day 2 cost: from 350-700 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                2-Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 350-600 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Free monuments, street food, public beach, tramway transport</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 800-1,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Museum entries, restaurant meals, Temara beach trip, nightlife</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 2,000-4,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private tours, fine dining, train day trips, upscale nightlife</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20">
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

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Rabat Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-6 group hover:shadow-lg transition-shadow"
                >
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">
                    {guide.description}
                  </p>
                  <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Rabat?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the unfinished grandeur of Hassan Tower and the peaceful Kasbah des Oudaias to ancient Roman ruins
            at Chellah and sunset strolls along the Bouregreg Marina, Rabat rewards the curious traveler. Start planning today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/rabat"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Rabat City Guide
            </Link>
            <Link
              href="/things-to-do-meknes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Landmark className="w-5 h-5" />
              Things to Do in Meknes
            </Link>
            <Link
              href="/morocco-road-trip-routes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Compass className="w-5 h-5" />
              Road Trip Routes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

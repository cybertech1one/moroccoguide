import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
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
  CheckCircle,
  Calendar,
  Ticket,
  Sun,
  Heart,
  Wind,
  Globe,
  Footprints,
  Eye,
  Waves,
  Anchor,
  Sunset,
  Castle,
  Fish,
  Paintbrush,
  Palette,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Safi Guide 2026 | Morocco Pottery Capital, Ceramics & Atlantic Coast',
  description:
    'Complete guide to Safi, Morocco in 2026. Explore the Colline des Potiers pottery workshops, Kechla fortress, Dar el-Bahar sea fortress, National Ceramics Museum, sardine port, medina, and beaches. Prices in MAD and insider tips.',
  keywords: [
    'safi morocco',
    'safi pottery',
    'safi ceramics',
    'safi guide',
    'things to do safi',
    'safi medina',
    'morocco pottery capital',
    'colline des potiers safi',
    'kechla fortress safi',
    'dar el bahar safi',
    'safi sardine port',
    'safi beach',
    'national ceramics museum safi',
    'safi travel guide',
    'safi 2026',
    'safi pottery workshops',
    'moroccan ceramics',
    'safi fishing port',
  ],
  openGraph: {
    title: 'Safi Guide 2026 | Morocco Pottery Capital, Ceramics & Atlantic Coast',
    description:
      'The complete guide to Safi, Morocco. Pottery workshops, Kechla fortress, sea fortress, ceramics museum, sardine port, and Atlantic coast with prices in MAD.',
    url: `${BASE_URL}/safi-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-safi.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful pottery displayed on the Colline des Potiers overlooking the Atlantic Ocean in Safi, Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safi Guide 2026 | Morocco Pottery Capital',
    description:
      'Pottery workshops, Kechla fortress, Dar el-Bahar, ceramics museum, sardine port, and Atlantic beaches. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-safi.webp`],
  },
  alternates: { canonical: `${BASE_URL}/safi-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/safi-guide`,
  name: 'Safi Guide 2026 | Morocco Pottery Capital, Ceramics & Atlantic Coast',
  description:
    'Complete guide to Safi, Morocco. Pottery workshops on the Colline des Potiers, Kechla fortress, Dar el-Bahar sea fortress, National Ceramics Museum, sardine port, and Atlantic beaches.',
  url: `${BASE_URL}/safi-guide`,
  image: `${BASE_URL}/images/hero-safi.webp`,
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
  mainEntityOfPage: `${BASE_URL}/safi-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Safi',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Safi Guide', item: `${BASE_URL}/safi-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Safi famous for?', acceptedAnswer: { '@type': 'Answer', text: 'Safi is famous as Morocco pottery capital. The Colline des Potiers (Potters Hill) is a neighborhood of workshops where artisans have been producing distinctive blue, green, and polychrome ceramics for centuries. Safi is also one of the world largest sardine ports, and the city features impressive Portuguese-era fortifications including the Kechla fortress and Dar el-Bahar sea fortress.' } },
    { '@type': 'Question', name: 'How many days do you need in Safi?', acceptedAnswer: { '@type': 'Answer', text: 'One day is enough to see the main attractions: Colline des Potiers pottery workshops, Kechla fortress, Dar el-Bahar sea fortress, National Ceramics Museum, and the medina. Two days allows for beach time, a deeper pottery workshop experience, visiting the sardine port in the morning, and a day trip to Oualidia for oysters. Safi also works as a half-day stop between El Jadida and Essaouira.' } },
    { '@type': 'Question', name: 'Can you paint your own pottery in Safi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, several workshops on the Colline des Potiers offer hands-on experiences where visitors can paint ceramics and even try the potter wheel. Sessions typically cost from 50-150 MAD depending on the piece and the workshop. The artisans will fire your piece and you can collect it later or have it shipped. It is one of the most unique souvenirs you can bring home from Morocco.' } },
    { '@type': 'Question', name: 'How do I get to Safi?', acceptedAnswer: { '@type': 'Answer', text: 'Safi is accessible by bus from major cities: CTM and Supratours run services from Marrakech (from 70 MAD, 3 hours), Essaouira (from 40 MAD, 2.5 hours), Casablanca (from 90 MAD, 4 hours), and El Jadida (from 40 MAD, 2 hours). Grand taxis are also available. By car, Safi is on the Atlantic coast road between El Jadida and Essaouira. There is no train service to Safi.' } },
    { '@type': 'Question', name: 'Is Safi worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely, especially if you are interested in traditional crafts, authentic Moroccan life, and off-the-beaten-path experiences. Safi sees very few international tourists, meaning you get genuine local prices, no hassle, and an unfiltered glimpse of working-class coastal Morocco. The pottery workshops are world-class, the fortresses are impressive, and the seafood is exceptional.' } },
    { '@type': 'Question', name: 'What is the best time to visit Safi?', acceptedAnswer: { '@type': 'Answer', text: 'April to October offers the best weather with temperatures of 20-28 degrees. Summer (July-August) is busy with Moroccan domestic tourists but manageable. Spring and autumn are ideal for sightseeing and workshop visits. Winter is mild (14-18 degrees) but can be rainy and windy. The pottery workshops operate year-round.' } },
    { '@type': 'Question', name: 'What should I buy in Safi?', acceptedAnswer: { '@type': 'Answer', text: 'Safi is the best place in Morocco to buy authentic ceramics and pottery. Prices on the Colline des Potiers are significantly lower than in tourist cities like Marrakech or Fes. A hand-painted tagine starts from 30-50 MAD, decorative plates from 20-100 MAD, and larger pieces from 100-500 MAD. Buy directly from artisan workshops for the best quality and prices.' } },
  ],
};

/* ===============================================================
   DATA: POTTERY & CERAMICS
   =============================================================== */

const potteryAttractions = [
  {
    name: 'Colline des Potiers (Potters\' Hill)',
    icon: Palette,
    category: 'Artisan Quarter',
    price: 'Free (workshops) / Paint-your-own from 50 MAD',
    duration: '2-3 hours',
    bestTime: 'Morning (9 AM - 12 PM)',
    description:
      'The beating heart of Safi and the reason the city is known as Morocco pottery capital. The Colline des Potiers is an entire hillside neighborhood dedicated to the ceramic arts, where dozens of workshops line steep, narrow streets. Here, artisans continue traditions passed down through generations, shaping clay on kick-wheels, painting intricate geometric and floral patterns in Safi distinctive blue, green, saffron yellow, and polychrome glazes, and firing pieces in communal wood-burning kilns. The scene is mesmerizing — rows of unfired pottery drying in the sun, the rhythmic thump of clay being worked, kilns belching smoke, and finished wares displayed in dazzling arrays outside each workshop. You can walk freely between workshops, watch every stage of production, and buy directly from the artisans at factory prices.',
    insiderTip:
      'Visit in the morning when the workshops are busiest and the kilns are firing. Ask to try the potter wheel — most artisans are happy to let visitors have a go. For paint-your-own experiences, choose a workshop that lets you paint a plate or small tagine (from 50-100 MAD including the piece). They will fire it and you can collect it the next day. Prices here are a fraction of what you would pay in Marrakech or Fes for identical quality.',
  },
  {
    name: 'National Ceramics Museum (Musee National de la Ceramique)',
    icon: Landmark,
    category: 'Museum',
    price: 'From 20 MAD',
    duration: '1-1.5 hours',
    bestTime: 'Morning',
    description:
      'Housed in a beautifully restored building near the Kechla fortress, the National Ceramics Museum is the only museum in Morocco dedicated entirely to the ceramic arts. The collection traces the history of Moroccan pottery from prehistoric Berber wares through Islamic-era innovations to contemporary Safi production. Highlights include ancient Berber vessels with geometric motifs, exquisite Fes blue-and-white pieces, Meknes polychrome work, and of course the full range of Safi styles. The museum explains the technical processes — clay preparation, glazing, kiln firing — that make Moroccan ceramics distinctive. Temporary exhibitions showcase contemporary Moroccan ceramic artists pushing the craft in new directions.',
    insiderTip:
      'Visit the museum before heading to the Colline des Potiers — the context it provides makes the workshop visits much richer. The museum shop sells high-quality pieces at fair prices. Photography is usually permitted. The building itself, with its tiled courtyard and traditional architecture, is worth the visit. Allow 1 hour for the permanent collection.',
  },
  {
    name: 'Ceramics Workshop Experience',
    icon: Paintbrush,
    category: 'Hands-On Activity',
    price: 'From 50-150 MAD (depending on piece)',
    duration: '1-2 hours',
    bestTime: 'Morning or afternoon',
    description:
      'One of the most unique experiences available in Morocco is sitting with a Safi potter and creating your own ceramic piece. Several workshops on the Colline des Potiers have set up visitor-friendly areas where you can try the potter wheel under guidance, or paint a pre-formed plate, bowl, or tagine with traditional Safi motifs. The artisans provide brushes, glazes, and patient instruction. Your piece is then fired in the communal kiln — the same wood-burning kilns that have served the hill for centuries — and you can collect it the following day or arrange shipping. The result is a handmade souvenir with a genuine story behind it.',
    insiderTip:
      'Painting is easier than throwing on the wheel, and the results are more predictable — if you want a beautiful take-home piece, opt for painting. If you want the full experience, try the wheel first (expect your piece to be charmingly imperfect) and then paint something. Some workshops offer group sessions for families. Arrange shipping for larger pieces — most workshops have experience packing and posting ceramics internationally (from 100-200 MAD for shipping).',
  },
];

/* ===============================================================
   DATA: FORTRESSES & HERITAGE
   =============================================================== */

const heritageAttractions = [
  {
    name: 'Kechla Fortress',
    icon: Castle,
    category: 'Historical Fortress',
    price: 'From 10 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning or late afternoon',
    description:
      'The Kechla is Safi largest and most imposing fortress, a massive defensive complex originally built by the Almohad dynasty in the 12th century and expanded by the Portuguese in the 16th century and the Saadian sultans in the 17th century. The result is a fascinating palimpsest of military architecture spanning five centuries. The fortress sits on a hill overlooking the city and port, with thick walls, corner towers, and a large interior courtyard. From the ramparts, panoramic views extend across the medina rooftops, the pottery hill, the port, and the Atlantic. Inside, you can explore the former royal apartments, a garden planted with citrus trees, and rooms that once served as the royal residence when sultans visited Safi.',
    insiderTip:
      'The rampart walk offers the best aerial views of the city and the Colline des Potiers — bring a camera. The fortress is often nearly empty of visitors, giving you an almost private experience of walking through centuries of Moroccan history. Combine with the National Ceramics Museum, which is a short walk away. The interior garden is a peaceful spot to rest.',
  },
  {
    name: 'Dar el-Bahar (Sea Fortress)',
    icon: Anchor,
    category: 'Coastal Fortress',
    price: 'From 10 MAD',
    duration: '30-45 minutes',
    bestTime: 'Late afternoon for sunset views',
    description:
      'Perched directly on the ocean cliff at the western edge of the medina, Dar el-Bahar (House of the Sea) is a dramatic 16th-century Portuguese-built fortress that served as the governor residence and coastal defense position. The compact fortress features thick stone walls, a watchtower, and a line of original Portuguese cannons still pointing out to sea. What makes Dar el-Bahar exceptional is its location — waves crash against the rocks directly below the ramparts, sea spray reaches the walls during storms, and the Atlantic stretches endlessly to the horizon. The fortress terrace offers some of the most dramatic coastal views on Morocco entire Atlantic seaboard.',
    insiderTip:
      'Visit in the late afternoon when the setting sun illuminates the fortress walls and the Atlantic turns golden. The Portuguese cannons are photogenic — line them up with the ocean for dramatic shots. During rough seas, the waves crashing below are spectacular. The fortress is small — 30 minutes is enough unless you linger for sunset. Combine with a medina walk.',
  },
  {
    name: 'Portuguese Chapel (Chapelle Portugaise)',
    icon: Landmark,
    category: 'Historical Monument',
    price: 'Free',
    duration: '15-20 minutes',
    bestTime: 'Morning',
    description:
      'This small 16th-century chapel is one of the few remaining Portuguese religious buildings in Morocco, a reminder of the period when Safi was a Portuguese trading post (1488-1541). The chapel is built in a simple Gothic style with a vaulted stone ceiling and carved stone details. While modest in size, it is historically significant as evidence of the Portuguese presence that profoundly influenced Safi architecture and character. The chapel sits within the medina and is easy to incorporate into a walking tour of the old city.',
    insiderTip:
      'The chapel is sometimes locked — ask at nearby shops for the guardian who can open it. It is very small, so 15 minutes is enough. The real interest is historical rather than architectural. Combine it with your medina walk. The surrounding streets have some of the medina most interesting old doorways and architectural details.',
  },
  {
    name: 'Sidi Abou Mohammed Salih Shrine',
    icon: Heart,
    category: 'Religious Heritage',
    price: 'Free (exterior only for non-Muslims)',
    duration: '15-20 minutes',
    bestTime: 'Any time',
    description:
      'Sidi Abou Mohammed Salih (1155-1234) is Safi patron saint and one of the most revered Sufi figures in Moroccan history. His shrine and zaouia (religious school) sit in the heart of the medina and have been a place of pilgrimage for nearly 800 years. The exterior features beautiful zellige tilework, carved plaster, and an ornate entrance. Non-Muslims cannot enter the shrine itself, but the exterior and surrounding square are worth visiting for the architecture and the atmosphere of devotion. The saint is credited with introducing the tradition of the seven patron saints of Marrakech, making his influence on Moroccan spiritual life enormous.',
    insiderTip:
      'Visit respectfully — this is an active place of worship. Photography of the exterior is usually fine, but do not photograph people praying without permission. The surrounding streets are some of the oldest in the medina, with traditional houses and craft workshops. The shrine is a good starting point for a medina walk, as it sits roughly in the center.',
  },
];

/* ===============================================================
   DATA: PORT & SEAFOOD
   =============================================================== */

const portAttractions = [
  {
    name: 'Sardine Port (Port de Peche)',
    icon: Fish,
    category: 'Working Port & Culture',
    price: 'Free',
    duration: '1-1.5 hours',
    bestTime: 'Early morning (6-9 AM)',
    description:
      'Safi is home to one of the largest sardine ports in the world, and visiting the fishing port in the early morning is one of the most visceral and memorable experiences in the city. Before dawn, hundreds of blue-painted wooden boats head out into the Atlantic. By 6 AM, they begin returning, and the port erupts into organized chaos: fishermen haul in nets brimming with silvery sardines, buyers shout bids at the auction, workers pack fish into ice-filled crates, and trucks carry the catch to canneries that process millions of sardines annually. The sheer scale is staggering — Safi processes hundreds of thousands of tons of sardines each year, making it central to Morocco fishing industry.',
    insiderTip:
      'Get there by 7 AM for the peak activity. The auction (criee) is fascinating to watch — stand back and observe the rapid-fire bidding. Wear shoes you do not mind getting wet. The port area has small cafes serving the freshest possible fish — sardines grilled minutes after leaving the boat, served with bread and tea for from 15-20 MAD. This is not a tourist experience; it is real working life. Be respectful, ask before photographing workers, and enjoy the extraordinary energy.',
  },
  {
    name: 'Seafood Restaurants & Grills',
    icon: UtensilsCrossed,
    category: 'Culinary Experience',
    price: 'From 30 MAD (grill stalls) / From 80 MAD (restaurant)',
    duration: '1-2 hours',
    bestTime: 'Lunch',
    description:
      'As one of Morocco major fishing ports, Safi offers some of the freshest and most affordable seafood on the Atlantic coast. The options range from simple street-side grill stalls near the port, where sardines are charcoal-grilled and served with bread, olives, and harissa for from 30 MAD, to established restaurants offering elaborate seafood platters with sole, sea bream, prawns, calamari, and lobster. The city specialty is charcoal-grilled sardines — nowhere in Morocco will you taste them fresher. The medina restaurants serve traditional tagines with fish, and the port-area eateries offer the day catch cooked simply and served immediately.',
    insiderTip:
      'For the cheapest and freshest sardines, eat at the grill stalls near the port — from 30 MAD for a generous plate with bread and salad. For a sit-down meal, the restaurants along Avenue Moulay Youssef serve excellent seafood at local prices (mains from 50-100 MAD). Safi is not a tourist city, so prices are genuinely local everywhere. Always ask what was caught that morning rather than ordering from a menu.',
  },
];

/* ===============================================================
   DATA: MEDINA & EXPLORATION
   =============================================================== */

const medinaExperiences = [
  {
    name: 'Safi Medina Walk',
    icon: Footprints,
    category: 'Cultural Exploration',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The Safi medina is a compact, authentic, and largely tourist-free old quarter that rewards slow exploration. Unlike the medinas of Marrakech or Fes, there are no touts, no aggressive sellers, and virtually no other foreign visitors — just the daily rhythms of Moroccan life unfolding in narrow whitewashed alleys. The medina contains the Portuguese Chapel, the Sidi Abou Mohammed Salih shrine, traditional bakeries (look for ones with wood-fired communal ovens), spice shops, and household goods stalls. The architecture is a mix of traditional Moroccan and Portuguese-influenced buildings, with some streets retaining their 16th-century character.',
    insiderTip:
      'Enter from the main gate near Dar el-Bahar and walk inland. The medina is small enough that you cannot get seriously lost — the ocean is always to the west for orientation. Stop at a traditional bakery to see round loaves being baked in communal wood ovens. The spice shops sell excellent ras el hanout at local prices (from 20-40 MAD per 100g). Photography is generally welcome, but ask before photographing people directly.',
  },
  {
    name: 'Safi Beach (Plage de Safi)',
    icon: Waves,
    category: 'Beach & Leisure',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Morning to mid-afternoon',
    description:
      'Safi has several beaches along its Atlantic coastline, with the main city beach stretching north of the port. The beach is wide and sandy, with moderate waves typical of the Moroccan Atlantic coast. In summer it fills with local families, creating a warm and welcoming atmosphere. South of the city, wilder beaches offer more space and stronger surf. The coastline around Safi is increasingly popular with surfers who have discovered consistent waves without the crowds of Taghazout or Essaouira. Beach cafes near the main beach serve drinks and simple food.',
    insiderTip:
      'The main beach north of the port is the easiest to reach on foot. For better waves and fewer people, head south toward Souiria Lakdima (about 30 km). Atlantic currents can be strong — swim with caution and stay where locals swim. Bring your own shade as there is limited umbrella rental. The morning hours are calmest for swimming; afternoon winds pick up.',
  },
  {
    name: 'Oualidia Side Trip',
    icon: Compass,
    category: 'Coastal Day Trip',
    price: 'From 40 MAD (grand taxi) / Oysters from 60 MAD per dozen',
    duration: 'Half day',
    bestTime: 'Morning departure',
    description:
      'Oualidia lies 60 km north of Safi along the Atlantic coast road and makes a perfect half-day or full-day trip. This sleepy lagoon town is Morocco oyster capital, where protected saltwater lagoons nurture some of the finest oysters in Africa. You can eat them freshly shucked at waterside restaurants with nothing but lemon and the sound of lapping waves. Beyond oysters, Oualidia lagoon is excellent for swimming (the calm, sheltered water is safe for children), kayaking, and birdwatching — flamingos and herons frequent the lagoon fringes. The coastal drive between Safi and Oualidia passes through rolling farmland and quiet fishing villages.',
    insiderTip:
      'Take a grand taxi from Safi (from 40 MAD shared, 1 hour). Eat oysters at the lagoon restaurants — try Ostrea II for the full experience (oysters from 60 MAD per dozen, seafood platters from 120 MAD). The lagoon beach is safe and calm — bring swimwear. If driving yourself, the coast road between Safi and Oualidia is scenic and easy. Combine with an El Jadida visit if you are heading north.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Buy Pottery Direct from Artisans', icon: Palette, description: 'On the Colline des Potiers, a hand-painted tagine costs from 30-50 MAD. The same piece in Marrakech or Fes costs from 150-300 MAD. Buy at the source and save massively.', savings: 'Save from 100-250 MAD per piece' },
  { tip: 'Eat Sardines at the Port', icon: Fish, description: 'Grilled sardines at port stalls cost from 15-30 MAD for a full plate with bread and tea. Restaurant sardines cost from 50-80 MAD for an identical dish.', savings: 'Save from 35-50 MAD per meal' },
  { tip: 'Fortresses Are Nearly Free', icon: Castle, description: 'The Kechla and Dar el-Bahar each cost from 10 MAD — two impressive fortresses for from 20 MAD total. Comparable sites in tourist cities charge from 70-100 MAD each.', savings: 'Save from 120-180 MAD on entries' },
  { tip: 'Free Medina Exploration', icon: Footprints, description: 'The medina, Portuguese Chapel, shrine exterior, port, and pottery workshops (browsing) are all free. You can experience Safi best attractions without spending a dirham on entry fees.', savings: 'Free — genuine experiences' },
  { tip: 'Bus Between Cities, Not Tours', icon: ArrowRight, description: 'CTM bus from Essaouira to Safi costs from 40 MAD. Private transfers and organized day tours charge from 400-600 MAD per person.', savings: 'Save from 360-560 MAD vs. tour' },
  { tip: 'Paint Pottery Instead of Buying', icon: Paintbrush, description: 'A paint-your-own ceramics session costs from 50-100 MAD and gives you a handmade souvenir with a personal story — better than any shop purchase and often cheaper than pre-made tourist pieces.', savings: 'Unique souvenir from 50 MAD' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Safi Is Completely Untouristed', icon: CheckCircle, description: 'Unlike Marrakech, Fes, or even Essaouira, Safi sees almost no international tourists. This means zero hassle, genuine local prices, and an authentic experience of everyday Moroccan coastal life. Embrace it — this is the real Morocco.' },
  { tip: 'Morning at the Port Is Essential', icon: Sun, description: 'The sardine port between 6-9 AM is one of the most extraordinary spectacles on the Moroccan coast. Even if you are not a morning person, set the alarm. The energy, color, and sheer scale of the sardine catch is unforgettable.' },
  { tip: 'Pottery Shipping Is Easy', icon: ShoppingBag, description: 'Worried about getting ceramics home? Most workshops on the Colline des Potiers will pack and ship internationally. They have experience with fragile items and reasonable rates (from 100-200 MAD for small parcels). Buy freely — they will handle the logistics.' },
  { tip: 'Best Photography Spots', icon: Camera, description: 'The Colline des Potiers with pottery drying in the sun is incredibly photogenic. Dar el-Bahar with cannons and crashing waves is dramatic. The port at dawn is raw and beautiful. The medina alleys offer intimate scenes. Safi is a photographer dream.' },
  { tip: 'Combine with the Coastal Route', icon: Compass, description: 'Safi sits perfectly on the El Jadida-to-Essaouira coastal road. Stop for a half-day or full day. The route El Jadida, Oualidia, Safi, Essaouira is one of Morocco finest coastal drives.' },
  { tip: 'Sunset at Dar el-Bahar', icon: Sunset, description: 'The sea fortress faces west directly over the Atlantic. Sunset from the cannon-lined ramparts, with waves crashing below and the sky turning orange, is among the most dramatic sunset experiences on the Moroccan coast. Arrive 30 minutes early.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is Safi famous for?', answer: 'Safi is famous as Morocco pottery capital. The Colline des Potiers (Potters Hill) is an entire neighborhood of ceramic workshops producing distinctive blue, green, and polychrome pieces. Safi is also one of the world largest sardine ports, with impressive Portuguese-era fortifications including the Kechla and Dar el-Bahar fortresses.' },
  { question: 'How many days do you need in Safi?', answer: 'One day covers the main attractions: pottery workshops, Kechla fortress, Dar el-Bahar, ceramics museum, and medina. Two days allows for a pottery painting session, the morning sardine port, beach time, and a day trip to Oualidia for oysters. Safi also works as a half-day stop between El Jadida and Essaouira.' },
  { question: 'Can you paint your own pottery in Safi?', answer: 'Yes. Several workshops on the Colline des Potiers offer hands-on experiences from 50-150 MAD. You can paint a plate, bowl, or tagine with traditional Safi motifs under artisan guidance. Your piece is kiln-fired and ready for collection the next day, or the workshop can ship it.' },
  { question: 'How do I get to Safi?', answer: 'CTM and Supratours buses serve Safi from Marrakech (from 70 MAD, 3 hours), Essaouira (from 40 MAD, 2.5 hours), Casablanca (from 90 MAD, 4 hours), and El Jadida (from 40 MAD, 2 hours). Grand taxis are also available. By car, Safi is on the Atlantic coast road. There is no train service.' },
  { question: 'Is Safi worth visiting?', answer: 'Absolutely, especially for craft lovers and those seeking authentic, untouristed Morocco. The pottery workshops are world-class, the fortresses are impressive, the seafood is exceptional, and the total absence of tourist crowds means genuine prices and experiences. Safi reveals a side of Morocco most visitors never see.' },
  { question: 'What is the best time to visit Safi?', answer: 'April to October for the best weather (20-28 degrees). The pottery workshops operate year-round. Spring and autumn are ideal for comfortable sightseeing. Summer brings domestic tourists but the city never feels crowded. Winter is mild but can be windy and rainy.' },
  { question: 'What should I buy in Safi?', answer: 'Ceramics and pottery, bought directly from artisans on the Colline des Potiers. Prices are a fraction of what you would pay in tourist cities: hand-painted tagines from 30-50 MAD, plates from 20-100 MAD, larger pieces from 100-500 MAD. Also excellent: fresh-ground spices from the medina and canned sardines from local brands.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/el-jadida-guide', icon: Landmark, title: 'El Jadida Guide', description: 'UNESCO Portuguese cistern, ramparts, and Atlantic beaches just 2 hours north.' },
  { href: '/essaouira', icon: Wind, title: 'Essaouira Guide', description: 'Wind-swept Atlantic port town with art galleries, seafood, and beautiful medina.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to seafood and street food — the complete cuisine guide.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Scenic driving routes through Morocco, from coast to mountains to desert.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches', description: 'Sandy beaches, hidden coves, and surf breaks along the Atlantic and Mediterranean.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function SafiGuidePage() {
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
            backgroundImage: 'url(/images/hero-safi.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Safi Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Palette className="w-4 h-4" />
            Morocco&apos;s Pottery Capital
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Safi
            <br className="hidden md:block" /> Travel Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Morocco pottery capital: centuries-old ceramic workshops, Atlantic fortresses, the world largest
            sardine port, and untouristed medina life. Your complete 2026 guide with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Safi: The Pottery Capital of Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Safi is a city that rewards the curious traveler. Perched on the Atlantic coast between
                El Jadida and Essaouira, this working port city of around 350,000 people is overlooked
                by nearly every international tourist — and that is precisely its appeal. Safi is authentic
                Morocco without filters: a place where potters shape clay using techniques unchanged for
                centuries, where fishermen haul in millions of sardines each dawn, and where Portuguese
                fortresses crumble romantically above crashing Atlantic waves.
              </p>
              <p>
                The Colline des Potiers (Potters&apos; Hill) is the reason Safi has been called Morocco
                pottery capital for generations. This entire hillside neighborhood is dedicated to the
                ceramic arts — dozens of workshops where artisans create the distinctive Safi style of
                blue, green, saffron, and polychrome glazed pottery. You can watch every stage of production,
                try your hand at painting or the wheel, and buy directly from the makers at prices that
                would be unthinkable in Marrakech or Fes.
              </p>
              <p>
                Beyond pottery, Safi offers impressive Portuguese-era fortifications — the massive Kechla
                fortress and the dramatic Dar el-Bahar sea fortress with its cannons pointing eternally
                seaward. The medina is compact, authentic, and hassle-free. The sardine port at dawn is
                one of the most extraordinary working spectacles on the Moroccan coast. And the seafood,
                naturally, is superb.
              </p>
              <p>
                This guide covers 13 essential attractions and experiences in Safi, organized by category:
                pottery and ceramics, fortresses and heritage, port and seafood, and medina exploration.
                Each includes real 2026 prices in MAD, practical logistics, and insider tips.
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
            Short on time? These are the ten experiences that define a visit to Safi.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Colline des Potiers Workshops', price: 'Free / From 50 MAD', time: '2-3 hours', category: 'Artisan Craft' },
              { rank: 2, name: 'Paint Your Own Ceramics', price: 'From 50 MAD', time: '1-2 hours', category: 'Hands-On' },
              { rank: 3, name: 'Dar el-Bahar Sea Fortress', price: 'From 10 MAD', time: '30-45 min', category: 'Historical' },
              { rank: 4, name: 'Sardine Port at Dawn', price: 'Free', time: '1-1.5 hours', category: 'Cultural' },
              { rank: 5, name: 'Kechla Fortress', price: 'From 10 MAD', time: '45 min - 1 hour', category: 'Heritage' },
              { rank: 6, name: 'National Ceramics Museum', price: 'From 20 MAD', time: '1-1.5 hours', category: 'Museum' },
              { rank: 7, name: 'Grilled Sardines at the Port', price: 'From 30 MAD', time: '1 hour', category: 'Culinary' },
              { rank: 8, name: 'Medina Walk', price: 'Free', time: '1-2 hours', category: 'Exploration' },
              { rank: 9, name: 'Oualidia Day Trip', price: 'From 40 MAD', time: 'Half day', category: 'Day Trip' },
              { rank: 10, name: 'Safi Beach', price: 'Free', time: '2-4 hours', category: 'Beach' },
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

      {/* -- Pottery & Ceramics -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Palette className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pottery &amp; Ceramics
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Colline des Potiers is Safi soul — an entire hillside of ceramic workshops where ancient
            traditions produce some of the most distinctive pottery in North Africa.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Workshops are busiest and most active in the morning. Kilns fire throughout the day.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {potteryAttractions.map((attraction) => {
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

      {/* -- Fortresses & Heritage -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Castle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fortresses &amp; Heritage
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Safi impressive fortifications tell the story of centuries of Portuguese, Almohad, and Saadian
            power along the Atlantic coast.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Opening times may change during Ramadan and national holidays.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {heritageAttractions.map((item) => {
              const HerIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <HerIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Port & Seafood -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Fish className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Port &amp; Seafood
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Safi is one of the world largest sardine ports — the fishing industry defines the city
            character and fuels its exceptional seafood scene.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The port is most active between 6-9 AM. Seafood restaurants serve lunch from noon onward.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {portAttractions.map((item) => {
              const PortIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PortIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Medina & Exploration -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina, Beach &amp; Day Trips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Beyond pottery and fortresses, Safi offers an authentic medina, Atlantic beaches,
            and a perfect launchpad for exploring the coast.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Safi medina is compact and hassle-free — no touts, no pressure, just everyday Moroccan life.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {medinaExperiences.map((item) => {
              const MedIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <MedIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Safi
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Safi is already one of Morocco most affordable cities. These tips help you stretch your budget even further.
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Safi
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

      {/* -- Sample 1-Day Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 1-Day Safi Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical plan covering the essential experiences in a single action-packed day.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Full Day: Pottery, Fortresses &amp; Seafood
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Early Morning (7-9 AM)</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start at the sardine port for the dawn catch. Watch the boats return, the auction,
                      and the frantic packing. Eat the freshest possible grilled sardines at a port stall
                      for breakfast (from 15-20 MAD with bread and tea). Then head to the Kechla fortress
                      (from 10 MAD) for panoramic city views.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Mid-Morning (10 AM - 1 PM)</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit the National Ceramics Museum (from 20 MAD) for context. Then spend the rest
                      of the morning on the Colline des Potiers — watch artisans work, browse workshops,
                      and paint your own piece (from 50-100 MAD). Buy ceramics directly from makers
                      at factory prices. Explore the medina on the walk between sites.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon (1-5 PM)</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch at a medina restaurant — seafood tagine or grilled fish (from 50-100 MAD).
                      Walk the medina to see the Portuguese Chapel and shrine exterior. Visit Dar el-Bahar
                      sea fortress (from 10 MAD) for the dramatic ocean views and cannons. Beach time
                      if conditions are good, or continue exploring the medina souks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Dar el-Bahar for sunset over the Atlantic — one of the most dramatic
                      sunsets on the coast. Dinner at a seafood restaurant (from 60-120 MAD). Collect
                      your painted pottery if it has been fired. Estimated day cost: from 200-400 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 150-250 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Port food, free medina walks, fortress entries, browsing workshops</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 300-500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Pottery workshop, museum, restaurant meals, ceramic shopping</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Craft Enthusiast</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 500-1,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Extended workshop time, quality ceramics purchases, fine dining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Morocco Trip
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
            Ready to Explore Safi?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From centuries-old pottery workshops and Atlantic fortresses to the world largest sardine
            port and untouristed medina life, Safi offers a side of Morocco most visitors never see.
            Start planning your trip today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/el-jadida-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Landmark className="w-5 h-5" />
              El Jadida Guide
            </Link>
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Wind className="w-5 h-5" />
              Essaouira Guide
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

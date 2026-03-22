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
  AlertTriangle,
  Footprints,
  Eye,
  Mountain,
  TreesIcon,
  Gem,
  Car,
  Users,
  Bed,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Midelt Guide 2026 | Cirque du Jaffar, Jebel Ayachi & Apple Capital',
  description:
    'Complete guide to Midelt, Morocco — gateway between Middle and High Atlas. Cirque du Jaffar, Jebel Ayachi (3747m), fossil and mineral shops, apple orchards, Kasbah Myriem carpet workshop, Aouli mines, and midway stop Fes to Merzouga. Prices in MAD.',
  keywords: [
    'midelt morocco',
    'midelt things to do',
    'midelt to merzouga',
    'cirque du jaffar',
    'jebel ayachi',
    'midelt guide',
    'midelt fossils',
    'midelt minerals',
    'midelt apple festival',
    'midelt kasbah myriem',
    'aouli mines morocco',
    'midelt overnight stay',
    'midelt rock climbing',
    'midelt berber villages',
    'midelt travel guide',
    'midelt 2026',
  ],
  openGraph: {
    title: 'Midelt Guide 2026 | Cirque du Jaffar, Jebel Ayachi & Apple Capital',
    description:
      'Discover Midelt, Morocco — dramatic canyons, High Atlas peaks, fossil shops, apple orchards, carpet workshops, and the perfect overnight stop between Fes and the Sahara. Prices in MAD.',
    url: `${BASE_URL}/midelt-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Midelt, Morocco with the High Atlas Mountains and Jebel Ayachi in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Midelt Guide 2026 | Gateway Between the Atlas Mountains',
    description:
      'Cirque du Jaffar, Jebel Ayachi (3747m), fossil and mineral shops, apple orchards, Kasbah Myriem, Aouli abandoned mines, and midway stop to Merzouga. Complete guide.',
    images: [`${BASE_URL}/images/hero-atlas.webp`],
  },
  alternates: { canonical: `${BASE_URL}/midelt-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/midelt-guide`,
  name: 'Midelt Guide 2026 | Cirque du Jaffar, Jebel Ayachi & Apple Capital',
  description:
    'Complete guide to Midelt, Morocco. Cirque du Jaffar, Jebel Ayachi, fossil shops, apple orchards, Kasbah Myriem, Aouli mines, and the gateway between Middle and High Atlas.',
  url: `${BASE_URL}/midelt-guide`,
  image: `${BASE_URL}/images/hero-atlas.webp`,
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
  mainEntityOfPage: `${BASE_URL}/midelt-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Midelt',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Midelt Guide', item: `${BASE_URL}/midelt-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Midelt worth stopping at on the way to Merzouga?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Midelt is the natural midway point on the Fes-to-Merzouga route (approximately 4.5 hours from each). Rather than the exhausting 8-9 hour drive in one go, an overnight stop in Midelt lets you explore the Cirque du Jaffar, browse fossil shops, visit Kasbah Myriem, and enjoy the dramatic Atlas Mountain scenery. The town has good accommodation options from budget hotels (from 250 MAD) to comfortable guesthouses (from 500 MAD).' } },
    { '@type': 'Question', name: 'What is the Cirque du Jaffar?', acceptedAnswer: { '@type': 'Answer', text: 'The Cirque du Jaffar is a dramatic natural amphitheater carved into the foothills of Jebel Ayachi, about 20 km south of Midelt. This horseshoe-shaped canyon features towering red and ochre cliff walls, a seasonal river, and stunning geological formations. It is accessible by a rough piste road (4x4 recommended) and is one of the most impressive natural landscapes in the Atlas Mountains. The drive itself through Berber villages and apple orchards is part of the experience.' } },
    { '@type': 'Question', name: 'Can you climb Jebel Ayachi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Jebel Ayachi (3,747m) is climbable for experienced hikers with a guide. The standard route takes 2-3 days round trip from Midelt, with a base camp at around 2,800m. The summit is non-technical but physically demanding with steep scree slopes. Best season is June to October — winter brings heavy snow. A local mountain guide (from 500-800 MAD per day) is essential. The panoramic views from the summit spanning the High Atlas, Middle Atlas, and the pre-Saharan steppe are extraordinary.' } },
    { '@type': 'Question', name: 'What minerals and fossils can you find in Midelt?', acceptedAnswer: { '@type': 'Answer', text: 'Midelt is one of Morocco premier mineral and fossil destinations. The surrounding geology yields vanadinite (the region specialty — bright red-orange crystals), azurite, malachite, quartz, calcite, and galena. Fossil shops sell trilobites, ammonites, orthoceras, and ancient sea creature specimens dating back 300-500 million years. Shops line the main road through town with prices from 20 MAD for small pieces to thousands for museum-quality specimens.' } },
    { '@type': 'Question', name: 'How do I get to Midelt?', acceptedAnswer: { '@type': 'Answer', text: 'Midelt sits on the N13 highway between Fes (200 km, 3.5-4 hours) and Errachidia (160 km, 2.5-3 hours). CTM and other bus companies run regular services. Grand taxis connect Midelt to Azrou, Fes, and Errachidia. Most visitors arrive by private car or hire car as part of a Fes-to-Merzouga journey. The road is well-paved and the drive through the Atlas passes is scenic.' } },
    { '@type': 'Question', name: 'What is the best time to visit Midelt?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (April-June) and autumn (September-November) offer the best weather. The apple blossom season in April is particularly beautiful. Summer is warm but bearable at altitude (1,500m). Winter brings cold temperatures and possible snow on the passes. The Apple Festival in October celebrates the harvest with local festivities. Avoid crossing the Tizi n Talghemt pass in severe winter weather.' } },
  ],
};

/* ===============================================================
   DATA: NATURE & ADVENTURE
   =============================================================== */

const natureAttractions = [
  {
    name: 'Cirque du Jaffar',
    icon: Mountain,
    category: 'Natural Wonder',
    price: 'Free (4x4 hire from 500 MAD)',
    duration: 'Half day (3-4 hours)',
    bestTime: 'Morning (best light)',
    description:
      'The Cirque du Jaffar is Midelt most spectacular natural attraction — a dramatic horseshoe-shaped amphitheater carved into the northern flanks of Jebel Ayachi. Located about 20 km south of Midelt, the cirque features towering cliff walls of red, ochre, and grey stratified rock rising hundreds of meters on three sides, with a seasonal river and lush vegetation at the base. The geological formations tell a story spanning hundreds of millions of years, with clearly visible sedimentary layers bent and folded by tectonic forces. The scale and silence of this natural cathedral are humbling.',
    insiderTip:
      'The road to the cirque is a rough piste — a 4x4 or high-clearance vehicle is strongly recommended, especially after rain. You can arrange a 4x4 excursion through your hotel (from 500-800 MAD for the vehicle including driver). The drive itself through Berber villages and apple orchards is stunning. Morning light illuminates the cliff walls most dramatically. Bring a picnic — there are no facilities. The cirque is also the trailhead for Jebel Ayachi climbs. Allow 3-4 hours for the round trip from Midelt.',
  },
  {
    name: 'Jebel Ayachi (3,747m)',
    icon: Mountain,
    category: 'Mountaineering',
    price: 'From 500 MAD/day (guide)',
    duration: '2-3 days (summit attempt)',
    bestTime: 'June - October',
    description:
      'Jebel Ayachi is the dominant peak of the eastern High Atlas, its snow-capped summit visible from Midelt on clear days. At 3,747 meters, it is one of Morocco highest mountains and offers a challenging but non-technical ascent that rewards with extraordinary panoramic views spanning the High Atlas range, the Middle Atlas cedar forests, and the vast pre-Saharan steppe to the south. The mountain holds snow well into June and supports alpine meadows bursting with wildflowers in spring. The standard route approaches from the Cirque du Jaffar, with an overnight camp at around 2,800 meters before the summit push.',
    insiderTip:
      'A certified mountain guide is essential — do not attempt this without one (from 500-800 MAD per day, arrange through hotels or the local guide bureau in Midelt). The climb requires good physical fitness but no technical equipment. Best months are July-September for snow-free conditions. Bring warm layers — temperatures drop dramatically above 3,000m. The sunset and sunrise from high camp are unforgettable. Budget 2-3 days round trip. Some guides can arrange mule support for carrying equipment and supplies.',
  },
  {
    name: 'Apple Orchards & Blossom Season',
    icon: TreesIcon,
    category: 'Agricultural Heritage',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'April (blossoms) / October (harvest)',
    description:
      'Midelt is known as the Apple Capital of Morocco, and the surrounding valleys are carpeted with apple orchards that transform through the seasons. In April, the orchards erupt in clouds of white and pink blossoms against the backdrop of snow-capped Jebel Ayachi — one of the most beautiful natural sights in Morocco. In autumn, the harvest brings a bounty of crisp mountain apples to roadside vendors and the weekly market. The apple industry supports much of the local economy, and the annual Apple Festival in October celebrates the harvest with music, food, and community festivities.',
    insiderTip:
      'The best orchards are along the road south toward the Cirque du Jaffar and in the valleys east of town. April blossom season is magical but brief — the blooms last about 2-3 weeks. During the October harvest, roadside vendors sell apples for from 5-10 MAD per kilogram — some of the freshest fruit you will ever taste. The Apple Festival (usually mid-October) is modest compared to Sefrou Cherry Festival but charming and authentic. Local apple juice and apple-based preserves make excellent gifts.',
  },
  {
    name: 'Aouli Abandoned Mines',
    icon: Compass,
    category: 'Industrial Heritage',
    price: 'Free',
    duration: '2-3 hours (including drive)',
    bestTime: 'Morning',
    description:
      'The abandoned lead and zinc mines of Aouli, about 25 km northeast of Midelt in a dramatic river gorge, are one of Morocco most hauntingly atmospheric sites. Operational from the 1930s through the 1970s, the mines once employed thousands of workers and supported a thriving community. Today, the ghost town ruins — crumbling processing plants, abandoned worker housing, rusting machinery, and the massive ore processing facility — stand in eerie silence against the red canyon walls. The Moulouya River gorge setting adds to the post-apocalyptic beauty.',
    insiderTip:
      'The road to Aouli is partially paved but the final stretch requires a high-clearance vehicle. The site is unfenced and unguarded — explore carefully as structures are unstable. Do not enter mine shafts under any circumstances. The scenery of the Moulouya gorge along the way is spectacular even without visiting the mines. Combine with mineral collecting if permitted — the area is rich in lead, zinc, and associated mineral specimens. Photography enthusiasts will find this one of the most dramatic locations in Morocco.',
  },
];

/* ===============================================================
   DATA: CULTURAL & SHOPPING
   =============================================================== */

const cultureAttractions = [
  {
    name: 'Fossil & Mineral Shops',
    icon: Gem,
    category: 'Geological Treasures',
    price: 'From 20 MAD (small specimens)',
    duration: '1-2 hours',
    bestTime: 'Any time',
    description:
      'Midelt sits in one of the richest mineral regions on Earth, and the town main road is lined with shops displaying dazzling arrays of crystals, minerals, and fossils. The star of Midelt mineralogy is vanadinite — spectacular bright red-orange hexagonal crystals found in the surrounding mountains that are prized by collectors worldwide. Other minerals include azurite (deep blue), malachite (green), quartz varieties, calcite, and galena. The fossil shops offer ancient trilobites, ammonites, orthoceras (straight-shelled cephalopods), and marine fossils dating back 300-500 million years to when this region lay beneath a tropical sea.',
    insiderTip:
      'Quality varies enormously — learn to distinguish genuine specimens from polished fakes. Genuine vanadinite crystals have a distinctive luster and hexagonal form. Trilobites should show natural matrix (surrounding rock). Prices start from 20 MAD for small pieces and reach thousands for museum-quality specimens. Negotiate — initial asking prices are often 3-5x the final price. The shops east of the main intersection tend to have better quality and fairer prices. Ask shop owners about the provenance — most are knowledgeable about local geology.',
  },
  {
    name: 'Kasbah Myriem (Monastery & Carpet Workshop)',
    icon: Landmark,
    category: 'Cultural Heritage',
    price: 'Free (donations welcome)',
    duration: '1-1.5 hours',
    bestTime: 'Morning',
    description:
      'Just outside Midelt, Kasbah Myriem is a Franciscan monastery established in 1926 that has become one of the most remarkable cultural institutions in the Atlas region. The resident sisters operate a carpet and embroidery workshop where local Berber women create exquisite handwoven textiles using traditional Middle Atlas techniques. The workshop produces distinctive carpets that blend Berber geometric patterns with Christian motifs — a beautiful symbol of interfaith collaboration. Visitors can observe the weaving process, learn about the symbolism of patterns, and purchase carpets at fair trade prices that directly support the women artisans.',
    insiderTip:
      'Call ahead or check with your hotel about visiting hours, as the monastery operates on its own schedule. The carpets are exceptional quality and the pricing is transparent and fair — what you pay goes directly to the weavers. The sisters are warm and welcoming, and the workshop provides meaningful employment for women from surrounding villages. The monastery garden is peaceful and offers views of Jebel Ayachi. Small donations for the community projects are appreciated.',
  },
  {
    name: 'Midelt Weekly Market',
    icon: ShoppingBag,
    category: 'Traditional Market',
    price: 'Free entry',
    duration: '1-1.5 hours',
    bestTime: 'Sunday morning',
    description:
      'The Midelt weekly market brings together Berber farmers, herders, and traders from the surrounding Atlas villages every Sunday. The market is a genuine local affair with minimal tourist presence — stalls overflow with seasonal produce from the valley orchards (apples, walnuts, cherries, pomegranates), mountain herbs and medicinal plants, livestock, household goods, secondhand clothing, and traditional tools. The atmosphere is lively and authentic, with conversations in Tamazight punctuated by the calls of animal vendors and the rhythmic chanting of produce sellers.',
    insiderTip:
      'Arrive early (before 9 AM) for the best selection. The produce section is exceptional — mountain-grown apples, walnuts, and seasonal fruits at from 5-15 MAD per kilogram. Local honey from Middle Atlas beekeepers (from 80-120 MAD per jar) is prized for its distinctive floral character. The spice and herb section features wild thyme, oregano, and medicinal plants gathered from the mountains. Bring cash in small denominations.',
  },
  {
    name: 'Berber Villages & Valley Walks',
    icon: Users,
    category: 'Cultural Immersion',
    price: 'Free (guided walks from 200 MAD)',
    duration: '2-4 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The valleys surrounding Midelt are dotted with traditional Berber villages that seem barely touched by modernity. Stone and pisé (rammed earth) houses cluster on hillsides above irrigated terraces of apple, walnut, and almond orchards. These farming communities follow seasonal rhythms that have changed little in centuries — planting, irrigation, harvest, and the seasonal movement of livestock to mountain pastures. Several villages welcome respectful visitors, and a guided walk through the valleys offers intimate encounters with rural Moroccan life that most tourists never experience.',
    insiderTip:
      'Arrange a guided village walk through your hotel or the local guide bureau (from 200-300 MAD for a half-day). Guides introduce you to local families, explain traditional agriculture, and ensure your visit is respectful and beneficial to the community. Bring small gifts if visiting homes — sugar, tea, or school supplies are appreciated. The valleys south toward the Cirque du Jaffar are the most scenic. Photography is welcomed but always ask permission first. The golden afternoon light on pisé villages against Atlas peaks is extraordinary.',
  },
];

/* ===============================================================
   DATA: PRACTICAL & TRANSIT
   =============================================================== */

const practicalAttractions = [
  {
    name: 'Midway Stop: Fes to Merzouga Route',
    icon: Car,
    category: 'Travel Planning',
    price: 'From 250 MAD (hotel)',
    duration: 'Overnight recommended',
    bestTime: 'Any season',
    description:
      'Midelt is perfectly positioned as the midway point on the popular Fes-to-Merzouga Sahara route. The total drive from Fes to Merzouga is approximately 470 km (8-9 hours), making it one of the longest road journeys tourists regularly attempt in Morocco. Breaking the journey in Midelt (200 km from Fes, 270 km from Merzouga) transforms an exhausting drive into a comfortable two-day experience with time to explore the Atlas Mountains. The drive from Fes crosses the dramatic Tizi n Talghemt pass (1,907m), descending into the broad Moulouya valley where Midelt sits. The next day drive crosses the even more spectacular Tizi n Talrhamt pass into the pre-Saharan landscape.',
    insiderTip:
      'Most travelers rush through Midelt without stopping — this is a mistake. Even one night gives you time for the Cirque du Jaffar, a fossil shop browse, and the Kasbah Myriem. Hotels along the main road offer good value: budget options from 250 MAD, mid-range from 500 MAD, and comfortable guesthouses from 700 MAD. The Hotel Ayachi and Hotel Kasbah Asmaa are reliable mid-range choices. Book ahead during peak season (Easter, summer, Christmas/New Year).',
  },
  {
    name: 'Tizi n Talghemt Pass (1,907m)',
    icon: Mountain,
    category: 'Scenic Drive',
    price: 'Free',
    duration: '30-45 minutes (pass section)',
    bestTime: 'Spring or autumn (clear weather)',
    description:
      'The Tizi n Talghemt pass, on the N13 highway between Azrou and Midelt, marks the transition from the lush cedar forests of the Middle Atlas to the drier, more austere landscapes of the high plateau. At 1,907 meters, the pass offers sweeping views in both directions — forested mountains behind and the vast Moulouya plain spreading ahead with Jebel Ayachi dominating the southern horizon. The descent from the pass into the Midelt valley is one of the most scenic stretches of road in Morocco, with the landscape shifting dramatically from green to amber as altitude drops.',
    insiderTip:
      'In winter, the pass can receive snow — check road conditions before departure (ask locals or your hotel). The road is well-maintained but winding in sections. Stop at the viewpoint near the summit for photographs — the panorama is extraordinary. If driving yourself, take the curves carefully and watch for trucks. The pass is equally dramatic in either direction. In clear conditions, the view of Jebel Ayachi from the pass is one of the finest mountain views accessible from a paved road in Morocco.',
  },
  {
    name: 'Rock Climbing & Outdoor Activities',
    icon: Compass,
    category: 'Adventure Sport',
    price: 'From 400 MAD/day (guided)',
    duration: 'Half day - full day',
    bestTime: 'Spring or autumn',
    description:
      'The limestone and volcanic formations around Midelt offer developing rock climbing opportunities that attract adventurous climbers looking for uncrowded crags with spectacular settings. Several cliff areas near the Cirque du Jaffar and in the Moulouya gorge have established routes ranging from beginner-friendly to challenging multi-pitch. The sport is relatively new to the area, so expect an exploratory atmosphere rather than well-bolted sport climbing. Mountain biking, trail running, and longer trekking routes through the Atlas foothills are also possible with a local guide.',
    insiderTip:
      'Rock climbing infrastructure is minimal — bring all your own equipment if you are a climber. Contact the Midelt guide bureau or ask at hotels for recommendations on climbing areas and guides with climbing experience (from 400-600 MAD per day). The best climbing weather is spring (April-May) and autumn (October-November) — summer can be too hot on south-facing rock. For trekking, the area between Midelt and Imilchil offers some of Morocco most remote and dramatic mountain landscapes.',
  },
  {
    name: 'Where to Stay in Midelt',
    icon: Bed,
    category: 'Accommodation',
    price: 'From 250 MAD (budget)',
    duration: '1-2 nights recommended',
    bestTime: 'Any season',
    description:
      'Midelt offers a range of accommodation to suit different budgets, from simple roadside hotels to comfortable guesthouses with mountain views. The town is not a luxury destination but provides honest, good-value stays that serve well as a base for exploring the region. Most hotels and guesthouses are on or near the main road (N13), making them easy to find. Many offer traditional Moroccan meals featuring local specialties — mountain lamb tagine, apple-based dishes, and fresh produce from the surrounding orchards.',
    insiderTip:
      'Hotel Ayachi (from 400 MAD) is a reliable mid-range choice with clean rooms and a good restaurant. Hotel Kasbah Asmaa (from 600 MAD) offers more atmosphere with traditional decor. Budget travelers find clean rooms at small hotels on the main road from 250 MAD. Guesthouse DAR ATLAS (from 500 MAD) gets excellent reviews for its warm hospitality. All can arrange Cirque du Jaffar excursions and guide services. The evening air is chilly year-round at 1,500m — ask for extra blankets in winter. Half-board rates (including dinner) offer the best value at from 100-150 MAD extra.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Break the Fes-Merzouga Drive', icon: Car, description: 'An overnight in Midelt (from 250 MAD) breaks a grueling 8-9 hour drive into two comfortable halves. You gain a night rest, scenic exploration, and arrive at the Sahara refreshed.', savings: 'Priceless comfort + time to explore' },
  { tip: 'Negotiate Mineral Prices', icon: Gem, description: 'Initial asking prices in fossil/mineral shops are typically 3-5x the final price. Start at 20-30% of the asking price and settle around 40-50%. Small specimens from 20 MAD, quality pieces from 100 MAD.', savings: 'Save from 50-70% with patient negotiation' },
  { tip: 'Hotel Half-Board Deals', icon: Bed, description: 'Most hotels offer half-board (room + dinner) for from 100-150 MAD extra. The included dinner (typically tagine, salad, bread, fruit) is better value and quality than finding a restaurant independently.', savings: 'Save from 30-50 MAD vs. restaurant dinner' },
  { tip: 'Walk the Town Center', icon: Footprints, description: 'Midelt town center is compact and walkable. The mineral shops, cafes, market area, and main attractions are all within walking distance. No taxis needed in town.', savings: 'Save from 20-40 MAD on local transport' },
  { tip: 'Shared 4x4 to Cirque du Jaffar', icon: Mountain, description: 'If other travelers at your hotel want to visit the Cirque du Jaffar, share a 4x4 vehicle (from 500-800 MAD for the car). Split between 3-4 people, costs from 125-200 MAD each.', savings: 'Save from 300-600 MAD vs. solo vehicle' },
  { tip: 'Buy Apples at Source', icon: TreesIcon, description: 'Midelt apples from roadside vendors cost from 5-10 MAD per kilogram vs. from 15-25 MAD in Fes or Marrakech. Stock up for your onward journey to the Sahara.', savings: 'Save from 10-15 MAD per kg' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Altitude Awareness', icon: Mountain, description: 'Midelt sits at 1,500 meters. Nights are cool year-round (even in summer, temperatures drop to 12-15 degrees). Winter brings frost and occasional snow. Pack warm layers regardless of season.' },
  { tip: 'Fuel Up in Midelt', icon: Car, description: 'If driving to Merzouga, fill your fuel tank in Midelt. The next reliable fuel stations are in Errachidia (160 km) or Er-Rich (90 km). The stretch between Midelt and Errachidia has limited services.' },
  { tip: 'Learn Basic Mineral Knowledge', icon: Gem, description: 'Before visiting fossil shops, learn to identify genuine vanadinite, trilobites, and ammonites. Some shops sell polished or enhanced specimens at genuine prices. Ask to see the natural matrix — authentic fossils are embedded in their original rock.' },
  { tip: 'Road Conditions in Winter', icon: AlertTriangle, description: 'The Tizi n Talghemt pass between Azrou and Midelt can receive snow in winter. Check conditions before crossing. The road is generally cleared quickly but chains may be needed in heavy snowfall.' },
  { tip: 'Best Photography Timing', icon: Camera, description: 'Jebel Ayachi photographs best in morning light from town. The Cirque du Jaffar is most dramatic in morning side-light. Apple orchards are magical during April blossom season and October harvest golden light.' },
  { tip: 'Connect with Local Guides', icon: Users, description: 'The Bureau des Guides in Midelt can arrange certified mountain guides for Jebel Ayachi climbs, Cirque du Jaffar excursions, village walks, and rock climbing. Prices from 300-800 MAD per day depending on activity.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'Is Midelt worth stopping at on the way to Merzouga?', answer: 'Absolutely. Midelt is the natural midway point on the Fes-Merzouga route (4-4.5 hours from each). An overnight stop lets you explore the Cirque du Jaffar, browse fossil shops, visit Kasbah Myriem, and enjoy Atlas Mountain scenery. Hotels from 250 MAD offer comfortable value.' },
  { question: 'What is the Cirque du Jaffar?', answer: 'A dramatic natural amphitheater 20 km south of Midelt, carved into the foothills of Jebel Ayachi. The horseshoe-shaped canyon has towering red-ochre cliff walls and stunning geological formations. Accessible by rough piste road (4x4 recommended, from 500 MAD including driver). One of the most impressive natural landscapes in the Atlas Mountains.' },
  { question: 'Can you climb Jebel Ayachi?', answer: 'Yes, Jebel Ayachi (3,747m) is climbable for experienced hikers with a certified guide (from 500-800 MAD/day). The standard route takes 2-3 days round trip from Midelt via the Cirque du Jaffar. Non-technical but physically demanding. Best season June-October. Summit panoramas are extraordinary.' },
  { question: 'What minerals and fossils can I buy in Midelt?', answer: 'Midelt is a premier mineral destination. Vanadinite (bright red-orange crystals) is the specialty. Also available: azurite, malachite, quartz, calcite, and fossils including trilobites, ammonites, and orthoceras (300-500 million years old). Prices from 20 MAD for small pieces. Negotiate — initial prices are 3-5x the final price.' },
  { question: 'How do I get to Midelt?', answer: 'Midelt sits on the N13 between Fes (200 km, 3.5-4 hours) and Errachidia (160 km, 2.5-3 hours). CTM buses run regular services. Grand taxis connect to Azrou, Fes, and Errachidia. Most visitors arrive by car on the Fes-Merzouga route. The road is well-paved through scenic Atlas passes.' },
  { question: 'What is the best time to visit Midelt?', answer: 'Spring (April-June) offers apple blossoms, wildflowers, and comfortable temperatures. Autumn (September-November) brings the apple harvest and Apple Festival (mid-October). Summer is warm but cooler than lowlands at 1,500m. Winter is cold with possible snow on passes. Each season offers different appeal.' },
  { question: 'Where should I stay in Midelt?', answer: 'Hotel Ayachi (from 400 MAD) and Hotel Kasbah Asmaa (from 600 MAD) are reliable mid-range options. Budget hotels from 250 MAD line the main road. Guesthouses like DAR ATLAS (from 500 MAD) offer warmer hospitality. All can arrange excursions. Half-board (room + dinner) from 100-150 MAD extra is recommended.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/azrou-guide', icon: TreesIcon, title: 'Azrou Guide', description: 'Cedar forests, Barbary macaques, and the legendary Tuesday Berber market.' },
  { href: '/merzouga', icon: Sun, title: 'Merzouga & Sahara', description: 'Erg Chebbi dunes, camel treks, desert camps, and Sahara adventures.' },
  { href: '/fes', icon: MapPin, title: 'Fes City Guide', description: 'Complete guide to Fes: medina, tanneries, riads, and cultural treasures.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Scenic driving routes from coast to mountains to desert.' },
  { href: '/atlas-mountains', icon: Mountain, title: 'Atlas Mountains', description: 'Trekking, Berber villages, and mountain adventures across the Atlas range.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MideltGuidePage() {
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
            backgroundImage: 'url(/images/hero-atlas.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Midelt Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Mountain className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Midelt: Gateway Between
            <br className="hidden md:block" /> the Atlas Mountains
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Where the Middle Atlas meets the High Atlas. Dramatic canyons, a 3,747m peak, dazzling minerals,
            apple orchards, and the perfect overnight stop on the road to the Sahara. Your complete 2026 guide.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Atlas Crossroads
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Midelt occupies one of the most dramatic geographical positions in Morocco — a town at
                1,500 meters altitude sitting precisely where the Middle Atlas transitions into the High
                Atlas, with the massive bulk of Jebel Ayachi (3,747m) dominating the southern skyline.
                This is a landscape of contrasts: lush apple orchards and walnut groves in the valley
                floor, arid red-rock canyons cutting into the mountain flanks, and snow-capped peaks
                visible from the main street on clear winter days.
              </p>
              <p>
                For most travelers, Midelt appears as a name on the map between Fes and Merzouga — a
                potential lunch stop on the long drive to the Sahara. This is a missed opportunity. The
                Cirque du Jaffar, a horseshoe-shaped natural amphitheater of towering red cliffs, is one
                of the most spectacular landscapes in the Atlas range. The fossil and mineral shops lining
                the main road offer treasures from deep geological time — vanadinite crystals, trilobite
                fossils, and ammonites dating back hundreds of millions of years. The Kasbah Myriem
                monastery, where Franciscan sisters run a Berber carpet workshop, represents a remarkable
                example of interfaith collaboration.
              </p>
              <p>
                Midelt deserves more than a lunch stop. An overnight stay unlocks a half-day at the
                Cirque du Jaffar, time to browse the mineral shops properly, a visit to surrounding Berber
                villages, and the satisfaction of arriving at the Sahara rested rather than road-weary.
                For mountaineers, the ascent of Jebel Ayachi is a multi-day adventure through some of
                Morocco most remote and majestic terrain.
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
            Top 10 Midelt Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From dramatic canyons and towering peaks to ancient fossils and apple orchards.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Cirque du Jaffar', price: 'From 500 MAD (4x4)', time: '3-4 hours', category: 'Nature' },
              { rank: 2, name: 'Fossil & Mineral Shops', price: 'From 20 MAD', time: '1-2 hours', category: 'Shopping' },
              { rank: 3, name: 'Jebel Ayachi (3,747m)', price: 'From 500 MAD/day', time: '2-3 days', category: 'Mountain' },
              { rank: 4, name: 'Kasbah Myriem Carpet Workshop', price: 'Free', time: '1-1.5 hours', category: 'Cultural' },
              { rank: 5, name: 'Apple Orchards & Blossom Season', price: 'Free', time: '1-2 hours', category: 'Nature' },
              { rank: 6, name: 'Aouli Abandoned Mines', price: 'Free', time: '2-3 hours', category: 'Heritage' },
              { rank: 7, name: 'Sunday Weekly Market', price: 'Free', time: '1-1.5 hours', category: 'Market' },
              { rank: 8, name: 'Berber Village Walks', price: 'From 200 MAD', time: '2-4 hours', category: 'Cultural' },
              { rank: 9, name: 'Tizi n Talghemt Pass Views', price: 'Free', time: '30-45 min', category: 'Scenic' },
              { rank: 10, name: 'Rock Climbing & Trekking', price: 'From 400 MAD/day', time: 'Half day+', category: 'Adventure' },
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

      {/* -- Nature & Adventure -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nature &amp; Adventure
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From a dramatic horseshoe canyon to a 3,747-meter peak, apple orchards in bloom,
            and the haunting ruins of abandoned mines.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            A 4x4 vehicle is recommended for the Cirque du Jaffar and Aouli mines.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {natureAttractions.map((item) => {
              const NatIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <NatIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Cultural & Shopping -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture, Shopping &amp; Community
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Dazzling mineral shops, a unique monastery carpet workshop, vibrant markets,
            and immersive village walks in the Atlas foothills.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The Sunday market is the best day for local commerce. Mineral shops are open daily.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {cultureAttractions.map((item) => {
              const CultIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CultIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Practical & Transit -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Travel Planning &amp; Practical Info
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Everything you need for planning your Midelt stop — from accommodation to scenic
            passes and adventure activities.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            An overnight stay is recommended to properly explore the region.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {practicalAttractions.map((item) => {
              const PracIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PracIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Midelt
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Smart strategies to maximize your Midelt experience while keeping costs in check.
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
            Insider Tips for Midelt
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential knowledge for making the most of your time in this Atlas mountain gateway.
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

      {/* -- Sample Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Recommended Midelt Overnight Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to make the most of an overnight stop on the Fes-to-Merzouga route.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Arrive from Fes &amp; Explore
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning - Drive from Fes</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Depart Fes early. Stop in Azrou for macaques and cedar forest if desired. Cross the
                      Tizi n Talghemt pass (1,907m) with its sweeping views. Arrive in Midelt by lunchtime.
                      Check into your hotel (from 250-600 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon - Cirque du Jaffar</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      After lunch (tagine from 40 MAD at your hotel), arrange a 4x4 excursion to the Cirque du
                      Jaffar (from 500 MAD for the vehicle). Drive through Berber villages and apple orchards to
                      this breathtaking natural amphitheater. Return by late afternoon.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening - Mineral Shops &amp; Dinner</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Browse the fossil and mineral shops along the main road. Buy vanadinite crystals or trilobite
                      fossils (from 20 MAD). Dinner at your hotel (half-board from 100 MAD extra) featuring local
                      mountain lamb tagine and fresh apple dessert. Early night for the drive ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 2: Kasbah Myriem &amp; Onward to Merzouga
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning - Kasbah Myriem &amp; Market</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit Kasbah Myriem (free) to see the carpet workshop and meet the Berber weavers.
                      If it is Sunday, explore the weekly market for produce, spices, and mountain honey.
                      Stock up on fresh apples and snacks for the drive ahead.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Late Morning - Depart for Merzouga</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Fill up fuel in Midelt and depart by 10-11 AM. The 270 km drive to Merzouga (4-4.5 hours)
                      crosses the Tizi n Talrhamt pass and descends into the pre-Saharan landscape. Stop at
                      Errachidia for a break. Arrive at Merzouga/Erg Chebbi by mid-afternoon for a sunset camel trek.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Overnight Budget Summary (per person)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 400-600 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Budget hotel, shared 4x4, simple meals, mineral shopping</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 800-1,200 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Guesthouse, private 4x4 excursion, half-board, souvenirs</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,500-2,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Best hotel, private guide, quality minerals, fine dining</p>
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
            Continue Planning Your Atlas Journey
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
            Ready to Explore Midelt?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the dramatic Cirque du Jaffar to dazzling minerals and apple orchards beneath
            snow-capped peaks, Midelt is far more than a roadside stop. Make it part of your Atlas adventure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/merzouga"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Sun className="w-5 h-5" />
              Merzouga &amp; Sahara
            </Link>
            <Link
              href="/azrou-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <TreesIcon className="w-5 h-5" />
              Azrou Guide
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

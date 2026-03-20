import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Crown,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Camera,
  Landmark,
  Compass,
  Ticket,
  Eye,
  Layers,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Palaces Guide 2026 | Royal Palaces, Historic Palaces & Grand Architecture',
  description:
    'Complete guide to Morocco\'s most magnificent palaces. From the Bahia Palace and El Badi Palace in Marrakech to the Royal Palace in Fes. Explore zellige tilework, carved stucco, cedar ceilings, Andalusian gardens, palace-hotels like La Mamounia and Royal Mansour, plus visiting tips and prices.',
  keywords: [
    'morocco palaces',
    'moroccan palaces',
    'palaces in morocco',
    'royal palace morocco',
    'Bahia Palace',
    'El Badi Palace',
    'La Mamounia',
    'Royal Mansour',
    'Dar al-Makhzen',
    'Royal Palace Fes',
    'Royal Palace Rabat',
    'Dar Si Said',
    'moroccan architecture',
    'zellige tilework',
    'moroccan palace gardens',
    'palace hotels morocco',
    'Dar el-Glaoui',
    'Palais El Mokri',
    'morocco architecture guide',
    'moroccan royal palaces',
    'historic palaces morocco',
    'marrakech palaces',
  ],
  openGraph: {
    title: 'Morocco Palaces Guide 2026 | Royal Palaces, Historic Palaces & Grand Architecture',
    description:
      'Discover Morocco\'s most magnificent palaces. From Bahia Palace and El Badi ruins to royal residences, palace-hotels, and the finest examples of Moroccan architecture.',
    url: `${BASE_URL}/morocco-palaces-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech-palace.webp`,
        width: 1200,
        height: 630,
        alt: 'Ornate courtyard of a Moroccan palace with zellige tilework, carved stucco arches, and an Andalusian garden with a central fountain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Palaces Guide 2026 | Royal Palaces & Grand Architecture',
    description:
      'From the Bahia Palace to El Badi ruins, Royal Palace Fes to La Mamounia palace-hotel. Complete guide to Morocco\'s most magnificent palaces with prices, tips, and architectural highlights.',
    images: [`${BASE_URL}/images/hero-marrakech-palace.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-palaces-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-palaces-guide`,
  name: 'Morocco Palaces Guide 2026 | Royal Palaces, Historic Palaces & Grand Architecture',
  description:
    'Complete guide to Morocco\'s most magnificent palaces. From the Bahia Palace and El Badi Palace in Marrakech to the Royal Palace in Fes, with architectural elements, visiting tips, and palace-hotel experiences.',
  url: `${BASE_URL}/morocco-palaces-guide`,
  image: `${BASE_URL}/images/hero-marrakech-palace.webp`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-palaces-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Palaces Guide', item: `${BASE_URL}/morocco-palaces-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which palaces in Morocco can you visit inside?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Bahia Palace (from 70 MAD) and El Badi Palace (from 70 MAD) in Marrakech are fully open to visitors. Dar Si Said Museum (from 30 MAD) in Marrakech is also open. The Royal Palaces in Rabat, Fes, and Casablanca are active royal residences and cannot be entered, but their grand exterior gates and grounds can be viewed and photographed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most beautiful palace in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Bahia Palace in Marrakech is widely considered the most beautiful palace open to the public in Morocco. Built in the late 19th century, its painted cedar ceilings, intricate zellige tilework, carved stucco, and expansive Andalusian gardens represent the pinnacle of Moroccan decorative arts. For sheer scale and historical drama, the El Badi Palace ruins are equally compelling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you stay in a palace in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Several historic palaces have been converted into luxury hotels. La Mamounia (from 5,000 MAD/night) and Royal Mansour (from 8,000 MAD/night) in Marrakech are world-renowned palace-hotels. Palais Faraj in Fes and Palais Namaskar near Marrakech offer similar palace-hotel experiences. Seasonal pricing applies and rates may vary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the key architectural elements of Moroccan palaces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan palaces showcase zellige (geometric mosaic tilework), carved stucco (gebs), painted and carved cedar wood ceilings, central courtyards with marble fountains, Andalusian gardens with orange and jasmine trees, horseshoe arches, muqarnas (honeycomb vaulting), and brass-studded doors. These elements combine Islamic geometry, Berber craftsmanship, and Andalusian garden design.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to visit palaces in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entry to the Bahia Palace costs from 70 MAD, El Badi Palace from 70 MAD, and Dar Si Said Museum from 30 MAD. Viewing the exterior of Royal Palaces is free. Guided tours at major palaces cost from 150 MAD. Photography is generally included in admission. Seasonal pricing can change, and combination tickets are sometimes available.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Moroccan palaces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit early morning (opening time) or late afternoon to avoid crowds and harsh midday sun. The golden hour light in late afternoon makes palace courtyards especially photogenic. Spring (March-May) and autumn (September-November) offer the most comfortable temperatures for palace exploration.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MAJOR PALACES OF MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const majorPalaces = [
  {
    rank: 1,
    name: 'Bahia Palace',
    arabicName: 'Palais de la Bahia',
    city: 'Marrakech',
    era: 'Late 19th Century (1866-1900)',
    status: 'Open to Visitors',
    icon: Crown,
    price: 'From 70 MAD',
    description:
      'The Bahia Palace is the crown jewel of Moroccan palaces open to the public. Built by Grand Vizier Si Moussa and later expanded by his son Ba Ahmed, the palace was intended to be the greatest palace of its time. "Bahia" means "brilliance," and the palace lives up to its name with 8,000 square meters of gardens, 150 rooms, and some of the finest decorative arts in Morocco.',
    highlights: ['Painted cedar ceilings by master craftsmen from Fes', 'Expansive Andalusian gardens with fountains', 'Grand marble courtyard with zellige borders', 'Harem quarters with intimate, richly decorated rooms'],
    visitTip: 'Arrive at opening time (9:00 AM) to explore the courtyards in peace before tour groups arrive. The afternoon light in the main courtyard is spectacular for photography.',
  },
  {
    rank: 2,
    name: 'El Badi Palace',
    arabicName: 'Palais El Badi',
    city: 'Marrakech',
    era: '16th Century (1578-1593)',
    status: 'Ruins Open to Visitors',
    icon: Landmark,
    price: 'From 70 MAD',
    description:
      'The "Incomparable Palace" was built by the Saadian Sultan Ahmad al-Mansur to celebrate his victory at the Battle of the Three Kings. Once one of the most lavish palaces in the world, decorated with gold from Timbuktu, Italian marble, and Irish granite. Sultan Moulay Ismail later stripped it bare to furnish his own palace in Meknes. Today the vast ruins are hauntingly beautiful.',
    highlights: ['Massive central courtyard with sunken gardens', 'Original scale visible in towering pisé walls', 'Underground chambers and dungeons to explore', 'Stork nests on the walls create iconic photo opportunities'],
    visitTip: 'Climb to the terrace walls for panoramic views over Marrakech including the Atlas Mountains. The annual Marrakech Folklore Festival is sometimes held in the courtyard.',
  },
  {
    rank: 3,
    name: 'Royal Palace Rabat (Dar al-Makhzen)',
    arabicName: 'Dar al-Makhzen',
    city: 'Rabat',
    era: 'Originally 18th Century, expanded 20th Century',
    status: 'Exterior Viewing Only (Active Royal Residence)',
    icon: ShieldCheck,
    price: 'Free (exterior viewing)',
    description:
      'The primary residence of the King of Morocco, Dar al-Makhzen in Rabat is the official seat of the Moroccan government. The palace complex covers a vast area in the heart of Rabat and includes the royal residence, the prime minister\'s office, a mosque, a royal guard barracks, and manicured gardens. While you cannot enter, the massive brass-studded gates, uniformed royal guards, and grand esplanade make for a commanding sight.',
    highlights: ['Monumental brass-studded entrance gates', 'Immaculately uniformed Royal Guard on horseback', 'Expansive esplanade and formal gardens visible from outside', 'Adjacent to the historic Ahl Fas Mosque'],
    visitTip: 'The best photo opportunity is at the main gate facing Mechouar Square. Visit in the morning when the Royal Guard is most active. Combine with a visit to the nearby Chellah necropolis.',
  },
  {
    rank: 4,
    name: 'Royal Palace Fes (Dar el-Makhzen)',
    arabicName: 'Dar el-Makhzen',
    city: 'Fes',
    era: '13th-14th Century (Marinid era), expanded over centuries',
    status: 'Exterior Viewing Only (Active Royal Residence)',
    icon: ShieldCheck,
    price: 'Free (exterior viewing)',
    description:
      'The Royal Palace of Fes is famed for having one of the most photographed doorways in Morocco. The seven monumental brass doors, flanked by zellige-tiled walls in green and blue, are an iconic symbol of Fes. The palace occupies roughly 80 hectares between Fes el-Bali and Fes el-Jdid and has been a royal residence since the Marinid dynasty. The grounds include mosques, gardens, a madrasa, and private quarters.',
    highlights: ['Seven grand brass doors with geometric patterns', 'Zellige tilework facade in royal green and blue', 'One of the most photographed sites in Morocco', 'Adjacent to the Mellah (historic Jewish quarter)'],
    visitTip: 'The doors are best photographed in the morning when the sun illuminates the brass. Combine with exploring the nearby Mellah and its synagogues, then continue into the Fes el-Bali medina.',
  },
  {
    rank: 5,
    name: 'Dar Si Said (Museum of Moroccan Arts)',
    arabicName: 'Dar Si Said',
    city: 'Marrakech',
    era: '19th Century',
    status: 'Open to Visitors (Museum)',
    icon: Gem,
    price: 'From 30 MAD',
    description:
      'Built by Si Said, the brother of Ba Ahmed (who built the Bahia Palace), this smaller but equally beautiful palace now houses the Museum of Moroccan Arts. The collections include Berber jewelry, carpets, ceramics, leatherwork, weapons, and woodwork from across the country. The palace itself is a masterpiece, with intimate courtyards, a riad garden, and ceilings that rival the Bahia in craftsmanship.',
    highlights: ['Exquisite carved cedar wood ceilings and doors', 'Outstanding collection of Berber jewelry and carpets', 'Intimate courtyard with a central marble fountain', 'Fewer crowds than Bahia Palace, yet equally ornate'],
    visitTip: 'Visit after the Bahia Palace to compare the two brothers\' palaces. The museum is smaller and quieter, making it ideal for contemplating the decorative arts in detail.',
  },
  {
    rank: 6,
    name: 'Royal Palace Casablanca',
    arabicName: 'Palais Royal de Casablanca',
    city: 'Casablanca',
    era: '20th Century',
    status: 'Exterior Viewing Only (Active Royal Residence)',
    icon: ShieldCheck,
    price: 'Free (exterior viewing)',
    description:
      'The Casablanca Royal Palace serves as the King\'s residence when in the economic capital. Located in the Habous quarter, it is more modern than the Rabat and Fes palaces but maintains traditional Moroccan architectural elements. The surrounding Habous (New Medina) neighborhood was designed in the 1930s as a modern interpretation of traditional medina architecture and is worth exploring.',
    highlights: ['Located in the charming Habous quarter', 'Modern take on traditional Moroccan architecture', 'Surrounding neighborhood combines French and Moroccan design', 'Near the Mahkama du Pacha courthouse with stunning interiors'],
    visitTip: 'Combine your visit with the nearby Mahkama du Pacha, a courthouse with 64 rooms of extraordinary zellige, stucco, and cedar woodwork that is open to visitors during working hours.',
  },
  {
    rank: 7,
    name: 'Dar el-Glaoui',
    arabicName: 'Dar el-Glaoui',
    city: 'Marrakech',
    era: '19th-20th Century',
    status: 'Partially Open / Restoration Ongoing',
    icon: Building,
    price: 'From 50 MAD (when accessible)',
    description:
      'Once the palatial residence of Thami el-Glaoui, the "Lord of the Atlas" and one of the most powerful figures in Moroccan history. At its peak, the palace hosted Winston Churchill and Hollywood stars. After el-Glaoui\'s fall from power at independence in 1956, the palace was abandoned and fell into disrepair. Parts have been restored and are intermittently open to visitors, offering a haunting glimpse of faded grandeur.',
    highlights: ['Richly decorated reception halls with original zellige', 'Dramatic history of power, betrayal, and downfall', 'Ornate Andalusian garden courtyard', 'One of the most atmospheric ruins in the medina'],
    visitTip: 'Check locally whether the palace is open, as access varies. Even when closed, the exterior and surrounding streets in the northern medina are atmospheric. Ask your riad host for current status.',
  },
  {
    rank: 8,
    name: 'Palais El Mokri',
    arabicName: 'Palais El Mokri',
    city: 'Fes',
    era: '19th Century',
    status: 'Open for Events / Limited Access',
    icon: Sparkles,
    price: 'From 50 MAD (when accessible)',
    description:
      'A grand palace in Fes built by the powerful El Mokri family, whose patriarch served as Grand Vizier to several Moroccan sultans. The palace features a stunning blend of Moroccan and European decorative elements, reflecting the family\'s cosmopolitan connections. With its massive courtyard, painted ceilings, and Italianate touches, it stands apart from purely traditional Moroccan palaces.',
    highlights: ['Blend of Moroccan and European decorative arts', 'Enormous main courtyard with carved stucco', 'Original painted and gilded ceilings', 'Unique Italianate architectural influences'],
    visitTip: 'The palace is occasionally used for events, exhibitions, and cultural functions. Check with the local tourist office in Fes for current opening times and any scheduled exhibitions.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ARCHITECTURAL ELEMENTS
   ═══════════════════════════════════════════════════════════════ */

const architecturalElements = [
  {
    name: 'Zellige Tilework',
    icon: Layers,
    description:
      'The defining feature of Moroccan architecture. Zellige consists of hand-cut geometric mosaic tiles, each piece chiseled individually from glazed terracotta and assembled into intricate, mathematically precise patterns. The craft originated in 10th-century Fes. In palaces, zellige covers lower walls, fountains, columns, and floors in dazzling displays of color and geometry.',
    whereToSee: 'Bahia Palace (lower walls and fountains), Royal Palace Fes (entrance facade), Dar Si Said (courtyard)',
  },
  {
    name: 'Carved Stucco (Gebs)',
    icon: Sparkles,
    description:
      'Above the zellige, palace walls transition to carved plaster known as gebs. Master craftsmen carve floral arabesques, calligraphy, and geometric patterns into wet plaster using small chisels. The work is ephemeral compared to stone, which is why preservation of historic stucco is so critical. The finest examples feature layers of depth and shadow play.',
    whereToSee: 'Bahia Palace (upper walls), El Badi Palace (surviving fragments), Dar el-Glaoui (reception halls)',
  },
  {
    name: 'Painted Cedar Wood Ceilings',
    icon: Crown,
    description:
      'Moroccan palaces feature ceilings of Atlas cedar wood, intricately carved and painted in rich colors: deep reds, blues, greens, and gold leaf. The technique involves carving the cedar into geometric and floral patterns, then painting each section by hand. Cedar was chosen for its aromatic properties and natural resistance to insects. The grandest ceilings required years of work by dozens of master artisans (maallems).',
    whereToSee: 'Bahia Palace (grand reception rooms), Dar Si Said (upstairs rooms), Palais El Mokri (main halls)',
  },
  {
    name: 'Central Courtyards & Fountains',
    icon: Compass,
    description:
      'Every Moroccan palace is organized around one or more central courtyards (riad layout). The courtyard represents paradise on earth, with a marble fountain at its center symbolizing the four rivers of paradise. The sound of flowing water, the scent of orange blossoms, and the dappled shade of fruit trees create a sensory oasis in the heart of the palace.',
    whereToSee: 'Bahia Palace (grand marble courtyard), Dar Si Said (intimate riad courtyard), all Moroccan palace-hotels',
  },
  {
    name: 'Andalusian Gardens',
    icon: Eye,
    description:
      'Moroccan palace gardens draw directly from the Andalusian tradition brought by Moors expelled from Spain. Geometric paths divide the garden into quadrants, with citrus trees, jasmine, bougainvillea, date palms, and roses arranged in formal beds. Irrigation channels carry water throughout, and pavilions offer shaded resting spots. The Agdal and Menara gardens in Marrakech are royal garden estates.',
    whereToSee: 'Bahia Palace gardens, El Badi sunken gardens, La Mamounia hotel gardens, Agdal Gardens',
  },
  {
    name: 'Brass-Studded Doors & Horseshoe Arches',
    icon: Landmark,
    description:
      'Palace entrances feature massive wooden doors studded with brass or iron nails arranged in geometric patterns, often with a smaller "door within a door" (khokha) for daily use. Above these doors, horseshoe arches (also called Moorish arches) frame the entrance. The arch shape originated in the Umayyad mosques of Cordoba and became a hallmark of Moroccan palatial design.',
    whereToSee: 'Royal Palace Fes (the famous seven doors), Royal Palace Rabat (main gate), Bahia Palace (inner doorways)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PALACE-HOTELS
   ═══════════════════════════════════════════════════════════════ */

const palaceHotels = [
  {
    name: 'La Mamounia',
    city: 'Marrakech',
    icon: Crown,
    price: 'From 5,000 MAD per night',
    description:
      'One of the most legendary hotels in the world, La Mamounia has hosted Winston Churchill, who called it "the most beautiful place on earth." Originally a royal palace gift to the Crown Prince in the 18th century, the gardens date back over 200 years. The Art Deco interiors, redesigned by Jacques Garcia, blend seamlessly with traditional Moroccan craftsmanship. The 2,500 sqm spa, heated outdoor pool, and seven-hectare gardens make it an experience beyond mere accommodation.',
    highlights: ['200-year-old royal gardens', 'Art Deco meets Moroccan craftsmanship', 'World-class 2,500 sqm spa', 'Visited by Churchill, Roosevelt, and Hollywood royalty'],
  },
  {
    name: 'Royal Mansour',
    city: 'Marrakech',
    icon: Crown,
    price: 'From 8,000 MAD per night',
    description:
      'Commissioned by King Mohammed VI and built by 1,500 master artisans over three years, the Royal Mansour is a palace in every sense. Rather than rooms, guests stay in private riads, each a three-story miniature palace with its own plunge pool, rooftop terrace, and dedicated butler. The level of craftsmanship in the zellige, stucco, and cedar woodwork is equivalent to a royal palace. The subterranean service tunnels ensure complete privacy.',
    highlights: ['Private three-story riads as accommodation', 'Built by 1,500 master artisans', 'Subterranean tunnels for invisible service', 'Zellige and stucco equivalent to royal palaces'],
  },
  {
    name: 'Palais Faraj',
    city: 'Fes',
    icon: Gem,
    price: 'From 2,500 MAD per night',
    description:
      'Perched on the edge of the Fes medina with sweeping views over the old city, Palais Faraj is a restored 19th-century palace turned luxury hotel. The rooftop terrace offers one of the finest views in Morocco, and the traditional Fassi architecture has been meticulously preserved. The palace spa features a traditional hammam, and the restaurant serves refined Fassi cuisine.',
    highlights: ['Panoramic views over the Fes medina', 'Restored 19th-century Fassi palace', 'Traditional hammam and luxury spa', 'Award-winning restaurant with palace cuisine'],
  },
  {
    name: 'Palais Namaskar',
    city: 'Marrakech (Palmeraie)',
    icon: Sparkles,
    price: 'From 4,000 MAD per night',
    description:
      'A contemporary interpretation of Moroccan palace architecture set in the Palmeraie outside Marrakech. Designed by architects who drew on traditional palace elements while creating something thoroughly modern, the hotel features vast reflecting pools, open-air pavilions, and suites that blur the line between indoors and outdoors. The 5,500 sqm grounds include gardens, a spa, and multiple pools.',
    highlights: ['Contemporary take on palace architecture', 'Vast reflecting pools and open-air pavilions', 'Set in the tranquil Palmeraie', 'Indoor-outdoor living in palace-scale suites'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: VISITING TIPS
   ═══════════════════════════════════════════════════════════════ */

const visitingTips = [
  {
    title: 'Best Time to Visit',
    icon: Clock,
    description:
      'Arrive at opening time (typically 9:00 AM) to have courtyards and gardens to yourself. Late afternoon (4:00-5:00 PM) offers golden light for photography. Avoid midday when tour groups peak and the sun is harshest. Spring and autumn provide the most comfortable temperatures.',
  },
  {
    title: 'Photography Tips',
    icon: Camera,
    description:
      'Photography is generally included in admission fees. The best light for zellige and stucco details is indirect morning light. For courtyard shots, a wide-angle lens captures the scale. Look up to capture painted ceilings. The golden hour before closing creates warm, dramatic shadows.',
  },
  {
    title: 'Guided Tours vs. Self-Guided',
    icon: Users,
    description:
      'Official guides at Bahia and El Badi palaces cost from 150 MAD and offer invaluable historical context. Self-guided visits work well if you research beforehand. Audio guides are sometimes available. Licensed city guides (from 400 MAD/half day) can combine multiple palaces in a single tour.',
  },
  {
    title: 'Dress Code & Etiquette',
    icon: ShieldCheck,
    description:
      'While palaces are not mosques, modest dress is appreciated. Cover shoulders and knees out of respect. Remove shoes if requested in certain areas. Do not touch zellige, stucco, or painted surfaces. Stay on marked paths in gardens.',
  },
  {
    title: 'Combination Tickets',
    icon: Ticket,
    description:
      'In Marrakech, plan to visit Bahia Palace, El Badi Palace, and Dar Si Said in a single day as they are all within walking distance in the medina. Budget from 170 MAD total for all three entries. Some guided tour packages include multiple sites at a discounted rate.',
  },
  {
    title: 'Seasonal Considerations',
    icon: AlertTriangle,
    description:
      'Summer temperatures in Marrakech and Fes can exceed 40 degrees Celsius. Palace courtyards offer shade but outdoor areas are exposed. Carry water, wear sunscreen, and plan palace visits for early morning or late afternoon during summer months. Winter visits are comfortable all day.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { item: 'Bahia Palace admission', price: 'From 70 MAD', note: 'Open daily 9:00-17:00' },
  { item: 'El Badi Palace admission', price: 'From 70 MAD', note: 'Open daily 9:00-17:00' },
  { item: 'Dar Si Said Museum admission', price: 'From 30 MAD', note: 'Open daily except Tuesday' },
  { item: 'Royal Palace Fes (exterior)', price: 'Free', note: 'Viewable anytime, no entry' },
  { item: 'Royal Palace Rabat (exterior)', price: 'Free', note: 'Viewable anytime, no entry' },
  { item: 'Dar el-Glaoui (when open)', price: 'From 50 MAD', note: 'Check locally for access' },
  { item: 'Palais El Mokri (when open)', price: 'From 50 MAD', note: 'Check locally for access' },
  { item: 'Licensed guide (half day)', price: 'From 400 MAD', note: 'Covers multiple palace sites' },
  { item: 'La Mamounia (per night)', price: 'From 5,000 MAD', note: 'Palace-hotel, seasonal pricing' },
  { item: 'Royal Mansour (per night)', price: 'From 8,000 MAD', note: 'Palace-hotel, seasonal pricing' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoPalacesGuidePage() {
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

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-marrakech-palace.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Palaces Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Crown className="w-4 h-4" />
            Royal Heritage &amp; Architecture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Palaces Guide:
            <br className="hidden md:block" /> Royal Palaces &amp; Grand Architecture
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the Bahia Palace&apos;s painted ceilings to the haunting ruins of El Badi,
            from royal residences you can only admire from outside to palace-hotels where you can
            sleep like a sultan. Discover the magnificent palaces of Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Thousand Years of Palatial Splendor
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s palaces are living witnesses to a civilization that mastered the
                art of transforming raw materials into transcendent beauty. For over a millennium,
                Moroccan sultans, viziers, and pashas commissioned palaces that showcased the
                finest artisanship their era could produce: hand-cut zellige mosaics numbering in
                the millions, carved stucco as delicate as lace, and cedar ceilings painted with
                patterns so intricate they take years to complete.
              </p>
              <p>
                Unlike European palaces that emphasize grand facades, Moroccan palaces hide their
                magnificence behind plain, unassuming walls. The design philosophy is one of
                inward beauty: step through a heavy, brass-studded door and a narrow corridor
                opens suddenly onto a vast courtyard of breathtaking splendor. This element of
                surprise and revelation is central to Moroccan palatial architecture.
              </p>
              <p>
                Today, Morocco&apos;s palaces range from meticulously preserved museums like the
                Bahia Palace, to evocative ruins like El Badi, to active royal residences that
                continue to serve the Alaouite dynasty. Several historic palaces have been
                transformed into some of the world&apos;s finest hotels, offering visitors the
                chance to experience palace life firsthand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Palace Admission &amp; Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for visiting Morocco&apos;s palaces and palace-hotel experiences.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods. Palace-hotel rates vary significantly by season.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Site / Experience</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Major Palaces ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Great Palaces of Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From open-to-the-public masterpieces to royal residences you can admire from the outside, these are Morocco&apos;s most significant palaces.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary by season and availability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {majorPalaces.map((palace) => {
              const PalaceIcon = palace.icon;
              return (
                <div key={palace.rank} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">#{palace.rank}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {palace.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] italic">{palace.arabicName}</p>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {palace.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <PalaceIcon className="w-3.5 h-3.5" />
                          {palace.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {palace.price}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {palace.era}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{palace.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {palace.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {palace.visitTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Architectural Elements ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Art of Moroccan Palace Architecture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the key decorative and structural elements that make Moroccan palaces unique in the world of architecture.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {architecturalElements.map((element) => {
              const ElementIcon = element.icon;
              return (
                <div key={element.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ElementIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {element.name}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{element.description}</p>
                      <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <Eye className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Where to see:</span> {element.whereToSee}
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

      {/* ── Palace-Hotels ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Palace-Hotels: Sleep Like a Sultan
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            These extraordinary hotels are palaces in their own right, offering guests the chance to experience Moroccan palatial grandeur firsthand.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates. Seasonal pricing applies heavily during peak season (October-April), holiday periods, and major events. Book well in advance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {palaceHotels.map((hotel) => {
              const HotelIcon = hotel.icon;
              return (
                <div key={hotel.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <HotelIcon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <MapPin className="w-3.5 h-3.5" />
                        {hotel.city}
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-3">
                    {hotel.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{hotel.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {hotel.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <Star className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Visiting Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Palace Visitors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visitingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    <TipIcon className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Palace Architecture Deep Dive ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
            The Legacy of Moroccan Palace Building
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              The tradition of grand palace building in Morocco spans over a millennium,
              from the Almoravid dynasty in the 11th century through to the present-day
              Alaouite monarchy. Each dynasty left its mark: the Almohads introduced massive,
              fortress-like palatial complexes; the Marinids brought refined theological
              architecture from Fes; the Saadians created the jaw-dropping El Badi Palace
              that rivaled the Alhambra; and the Alaouites consolidated the tradition of
              the Dar al-Makhzen as both home and seat of government.
            </p>
            <p>
              What makes Moroccan palaces architecturally unique is the integration of four
              distinct traditions: Berber construction techniques using pisé (rammed earth)
              and cedar from the Atlas Mountains, Arab geometric design principles derived
              from Islamic mathematics, Andalusian garden aesthetics brought by Moors from
              Spain, and sub-Saharan African influences visible in the use of Timbuktu gold
              and the grand scale that came from Saharan trade wealth.
            </p>
            <p>
              The master craftsmen who created these palaces, known as <em>maallems</em>,
              were organized into guilds that guarded their techniques as closely held secrets
              passed from father to son. These guilds still exist today in Fes and Marrakech,
              and their descendants continue to practice the same arts. The zellige cutters
              of Fes, the stucco carvers of Marrakech, and the cedar painters of the Atlas
              still create work by hand using methods unchanged for centuries.
            </p>
            <p>
              Visiting Morocco&apos;s palaces is not simply a tour of old buildings. It is an
              encounter with a living artistic tradition that connects the present to a
              millennium of creative genius. When you run your eyes over the zellige patterns
              in the Bahia Palace, you are looking at the same geometric principles that
              inspired generations of mathematicians. When you stand in the sunken gardens
              of El Badi, you are standing where sultans once entertained ambassadors from
              across the known world. And when you gaze at the seven brass doors of the
              Royal Palace in Fes, you are witnessing a tradition of royal craftsmanship
              that continues, unbroken, to this day.
            </p>
          </div>
        </div>
      </section>

      {/* ── Marrakech Palace Walking Route ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Marrakech Palace Walking Route
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Visit three of Morocco&apos;s finest palaces in a single morning walk through the Marrakech medina. Total distance: approximately 2 kilometers.
          </p>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

            <div className="space-y-8">
              <div className="relative flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="card-moroccan p-6 flex-1">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Bahia Palace (9:00 AM - 10:30 AM)
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">
                    Start your morning at the Bahia Palace, arriving at opening time for the quietest experience.
                    Spend 90 minutes exploring the painted ceilings, zellige courtyards, and Andalusian gardens.
                    The morning light in the grand courtyard is magnificent.
                  </p>
                  <span className="text-xs text-[var(--color-accent)] font-semibold">Admission: from 70 MAD</span>
                </div>
              </div>

              <div className="relative flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="card-moroccan p-6 flex-1">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Dar Si Said Museum (10:45 AM - 11:45 AM)
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">
                    A five-minute walk from Bahia, the Dar Si Said palace-museum offers a quieter, more intimate
                    palace experience. Compare the two brothers&apos; palaces and explore the outstanding collection
                    of Berber arts and craftsmanship that fills the rooms.
                  </p>
                  <span className="text-xs text-[var(--color-accent)] font-semibold">Admission: from 30 MAD</span>
                </div>
              </div>

              <div className="relative flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="card-moroccan p-6 flex-1">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    El Badi Palace (12:00 PM - 1:00 PM)
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">
                    Complete your palace tour at the dramatic El Badi ruins. The contrast between the ornate Bahia
                    and the stripped-bare El Badi tells the story of Moroccan power and its impermanence.
                    Climb the walls for panoramic views over Marrakech and the Atlas Mountains.
                  </p>
                  <span className="text-xs text-[var(--color-accent)] font-semibold">Admission: from 70 MAD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-5">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <p className="text-xs text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--text-primary)]">Total cost:</span> From 170 MAD for all three admissions. Add from 150 MAD for a guided tour at each palace, or from 400 MAD for a licensed guide who covers the entire route. Stop for mint tea and pastries between palaces at one of the medina cafes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which palaces in Morocco can you visit inside?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Bahia Palace (from 70 MAD) and El Badi Palace (from 70 MAD) in Marrakech are fully
                open to visitors. Dar Si Said Museum (from 30 MAD) in Marrakech is also open. The Royal
                Palaces in Rabat, Fes, and Casablanca are active royal residences and cannot be entered,
                but their grand exterior gates and grounds can be viewed and photographed freely.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the most beautiful palace in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Bahia Palace in Marrakech is widely considered the most beautiful palace open to
                the public. Built in the late 19th century, its painted cedar ceilings, intricate zellige
                tilework, carved stucco, and expansive Andalusian gardens represent the pinnacle of
                Moroccan decorative arts. For sheer scale and historical drama, the El Badi Palace ruins
                are equally compelling in a very different way.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can you stay in a palace in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Several historic palaces have been converted into luxury hotels. La Mamounia
                (from 5,000 MAD per night) and Royal Mansour (from 8,000 MAD per night) in Marrakech
                are world-renowned palace-hotels. Palais Faraj in Fes and Palais Namaskar near Marrakech
                offer similar palace-hotel experiences. Seasonal pricing applies and rates may vary
                significantly between low and high season.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the key architectural elements of Moroccan palaces?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moroccan palaces showcase zellige (geometric mosaic tilework), carved stucco (gebs),
                painted and carved cedar wood ceilings, central courtyards with marble fountains,
                Andalusian gardens with orange and jasmine trees, horseshoe arches, muqarnas
                (honeycomb vaulting), and brass-studded doors. These elements combine Islamic geometry,
                Berber craftsmanship, and Andalusian garden design into a uniquely Moroccan aesthetic.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does it cost to visit palaces in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Entry to the Bahia Palace costs from 70 MAD, El Badi Palace from 70 MAD, and Dar Si
                Said Museum from 30 MAD. Viewing the exterior of Royal Palaces is free. Guided tours
                at major palaces cost from 150 MAD. Photography is generally included in admission.
                Seasonal pricing can change, and combination tickets are sometimes available for
                multiple sites.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time to visit Moroccan palaces?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Visit early morning (opening time) or late afternoon to avoid crowds and harsh midday
                sun. The golden hour light in late afternoon makes palace courtyards especially
                photogenic. Spring (March to May) and autumn (September to November) offer the most
                comfortable temperatures for walking between outdoor palace sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/marrakech-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to the Red City: medina, souks, gardens, and palaces including Bahia and El Badi.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the spiritual capital: the world&apos;s largest medina, tanneries, and the iconic Royal Palace gates.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/rabat-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Rabat Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover the capital city: the Royal Palace Dar al-Makhzen, Hassan Tower, Chellah, and the kasbah.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Understand Morocco&apos;s rich cultural heritage: traditions, craftsmanship, music, festivals, and customs.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Star,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Car,
  Camera,
  Compass,
  Heart,
  Eye,
  Sparkles,
  Mountain,
  Info,
  Lightbulb,
  Users,
  Globe,
  BookOpen,
  Leaf,
  Shield,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Calendar,
  ArrowRight,
  Utensils,
  Bed,
  ShoppingBag,
  Landmark,
  Building,
  TreePine,
  Navigation,
  Wine,
  Music,
  Palette,
  Coffee,
  Footprints,
  Ticket,
  HandCoins,
  ThermometerSun,
  CloudSun,
  Umbrella,
  BadgeCheck,
  CircleDot,
  Map,
  Phone,
  MessageSquare,
  Crown,
  Columns,
  Train,
  Plane,
  Bus,
  HelpCircle,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Meknes Travel Guide 2025-2026 | The Imperial City of Moulay Ismail | Bab Mansour, Volubilis & More',
  description:
    'The ultimate Meknes travel guide. Explore Bab Mansour, the Royal Stables, Mausoleum of Moulay Ismail, Place el-Hedim, Heri es-Souani, and day trips to Volubilis Roman ruins. Best restaurants, hotels, history of Moulay Ismail\'s rivalry with Louis XIV, budget tips, and practical advice for Morocco\'s most underrated imperial city.',
  keywords: [
    'Meknes travel guide',
    'Meknes Morocco',
    'Bab Mansour',
    'Moulay Ismail',
    'Meknes imperial city',
    'Royal Stables Meknes',
    'Heri es-Souani',
    'Place el-Hedim',
    'Mausoleum Moulay Ismail',
    'Volubilis Roman ruins',
    'Meknes medina',
    'Dar Jamai Museum',
    'Meknes restaurants',
    'Meknes hotels',
    'Meknes day trips',
    'Moulay Idriss Zerhoun',
    'Meknes budget guide',
    'Meknes safety tips',
    'best time to visit Meknes',
    'Meknes itinerary',
    'Meknes food guide',
    'Meknes history',
    'Morocco imperial cities',
    'Louis XIV Morocco',
    'Meknes souks',
    'Agdal Basin Meknes',
    'Meknes wine region',
    'Chateau Roslane',
    'Meknes olive groves',
  ],
  openGraph: {
    title: 'Meknes Travel Guide 2025-2026 | The Imperial City of Moulay Ismail',
    description:
      'Everything you need for Meknes: Bab Mansour, Royal Stables, Moulay Ismail\'s Mausoleum, the medina, Volubilis day trips, and the story of the sultan who rivaled the Sun King.',
    url: 'https://moroccoguide.com/meknes',
    type: 'article',
    images: [
      {
        url: '/images/hero-morocco-medina.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the Bab Mansour gate in Meknes at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meknes Travel Guide 2025-2026 | Morocco\'s Imperial City',
    description:
      'Complete guide to Meknes: Bab Mansour, Royal Stables, Moulay Ismail\'s Mausoleum, Heri es-Souani, Volubilis ruins, medina, food, history, and practical tips.',
    images: ['/images/hero-morocco-medina.webp'],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/meknes',
  },
};

/* =====================================================================
   DATA: QUICK FACTS
   ===================================================================== */

const quickFacts = [
  { label: 'Population', value: '835,000', icon: Users },
  { label: 'Founded', value: '11th Century', icon: BookOpen },
  { label: 'Elevation', value: '546 meters', icon: Mountain },
  { label: 'Nearest Airport', value: 'FEZ (Saiss)', icon: Globe },
  { label: 'Language', value: 'Arabic, French, Berber', icon: MessageSquare },
  { label: 'Currency', value: 'Moroccan Dirham (MAD)', icon: DollarSign },
  { label: 'Time Zone', value: 'GMT+1', icon: Clock },
  { label: 'Best Months', value: 'March-May, Sep-Nov', icon: Calendar },
];

/* =====================================================================
   DATA: MEKNES ESSENTIALS
   ===================================================================== */

const essentialTips = [
  {
    icon: Info,
    title: 'The Overlooked Imperial City',
    description: 'Meknes receives a fraction of the tourists that Marrakech and Fes attract, yet it holds UNESCO World Heritage status and some of Morocco\'s most impressive monuments. This means shorter queues, lower prices, more genuine interactions, and a city that feels authentically Moroccan rather than curated for visitors.',
  },
  {
    icon: Footprints,
    title: 'Compact & Walkable',
    description: 'Unlike the labyrinthine medinas of Fes and Marrakech, Meknes is remarkably walkable. The main attractions in the imperial city and medina are within a 30-minute walk of each other. You can see the highlights in a single day, though the city rewards a longer stay.',
  },
  {
    icon: HandCoins,
    title: 'Excellent Value',
    description: 'Meknes is one of the most affordable cities in Morocco for travelers. Restaurant meals cost 30-50% less than Marrakech, riad prices are lower, and the medina souks offer genuine local prices without aggressive tourist markups. A comfortable day costs 300-500 MAD all-in.',
  },
  {
    icon: Globe,
    title: 'Connectivity',
    description: 'Buy a local SIM card at the Fes airport or in the Ville Nouvelle (Maroc Telecom or Orange, about 30 MAD with data). Wi-Fi is available in most hotels and riads. Cell coverage throughout the city is excellent.',
  },
  {
    icon: Coffee,
    title: 'Olive Oil & Wine Country',
    description: 'The Meknes region is Morocco\'s agricultural heartland, famous for its olives, wine, and citrus. The Guerrouane and Beni M\'Tir appellations produce Morocco\'s finest wines. Chateau Roslane and Domaine de la Zouina offer vineyard tours and tastings, an experience unique to this part of Morocco.',
  },
  {
    icon: Calendar,
    title: 'Ramadan Awareness',
    description: 'During Ramadan, many restaurants close during daylight hours. Eating, drinking, or smoking in public during fasting hours is considered disrespectful. Evenings become festive with special foods and late-night activity. Place el-Hedim transforms into a lively food market after iftar.',
  },
];

/* =====================================================================
   DATA: TOP ATTRACTIONS
   ===================================================================== */

const attractions = [
  {
    name: 'Bab Mansour el-Aleuj',
    description:
      'The most impressive gateway in all of Morocco and arguably the finest in North Africa. Completed in 1732 under Sultan Moulay Ismail, Bab Mansour is a monumental triumph of Islamic architecture standing over 16 meters tall. The gate is adorned with elaborate zellige tilework in green and white geometric patterns, intricate carved stucco arabesques, and marble columns repurposed from the Roman ruins of Volubilis. The gate\'s name, "el-Aleuj" (the Renegade), refers to its architect, a Christian convert to Islam named Mansour. According to legend, when Moulay Ismail asked the architect if he could have done better, Mansour said yes, and the sultan had him executed. The gate was never meant to be functional; it was a declaration of imperial power, designed to awe ambassadors and envoys before they entered the sultan\'s domain.',
    image: '/images/hero-morocco-medina.webp',
    type: 'UNESCO Heritage',
    rating: 4.9,
    hours: 'Exterior viewable 24 hours; interior gallery 9:00 AM - 6:00 PM',
    price: 'Free (exterior); 10 MAD (gallery)',
    tip: 'The best photographs are taken from Place el-Hedim in the late afternoon when the golden light illuminates the zellige tilework. Visit the interior gallery for temporary art exhibitions. The scale of the gate is impossible to capture in photos; you must see it in person to appreciate the sheer enormity.',
  },
  {
    name: 'Royal Stables & Granary (Heri es-Souani)',
    description:
      'One of the most extraordinary engineering achievements of the pre-modern Islamic world. Moulay Ismail built these massive subterranean granaries and stables to house and feed his legendary cavalry of 12,000 horses. The Heri es-Souani stretches for hundreds of meters, with thick walls over two meters deep designed to maintain a constant cool temperature year-round, preserving grain for decades without spoilage. An ingenious hydraulic system of underground channels drew water from the Middle Atlas Mountains 25 kilometers away to fill cisterns and drinking troughs. The adjacent royal stables featured individual stalls for each horse, a groom for every three animals, and a sophistication of equine care that astonished European visitors. The ruins today, with their massive arched ceilings, crumbling pillars, and sheer scale, evoke the ambition of a ruler who dreamed on a scale that rivaled ancient Rome.',
    image: '/images/hero-morocco-medina.webp',
    type: 'Historic Monument',
    rating: 4.7,
    hours: '9:00 AM - 6:00 PM daily',
    price: '20 MAD',
    tip: 'The granary\'s interior is surprisingly cool even in summer, making it a welcome refuge from the heat. Walk to the far end where the roof has collapsed to see the most photogenic section, with arches framing the sky. The adjacent Agdal Basin, a vast artificial lake built by Moulay Ismail to irrigate his gardens, is worth the short walk.',
  },
  {
    name: 'Mausoleum of Moulay Ismail',
    description:
      'The final resting place of Morocco\'s most powerful and feared sultan, and one of the very few Islamic shrines in Morocco open to non-Muslim visitors. Moulay Ismail ruled for 55 years (1672-1727) and transformed Meknes from a provincial town into an imperial capital to rival Versailles. The mausoleum was restored by Mohammed V in the 1950s and features serene courtyards with central fountains, rooms with soaring zellige-tiled walls, carved stucco ceilings, and elaborate muqarnas honeycomb vaulting. The tomb chamber itself, draped in rich fabrics and flanked by two grandfather clocks (gifts from Louis XIV of France), exudes a hushed reverence. Moroccans still visit to pray and pay respects to the man they consider one of the greatest rulers in the nation\'s history, despite his ruthless reputation.',
    image: '/images/hero-morocco-medina.webp',
    type: 'Royal Mausoleum',
    rating: 4.8,
    hours: '9:00 AM - 12:00 PM, 3:00 PM - 6:00 PM daily (closed during Friday prayers)',
    price: 'Free',
    tip: 'Remove your shoes before entering and dress modestly (shoulders and knees covered). Photography is permitted in the courtyards but not in the tomb chamber itself. The two grandfather clocks flanking the tomb are original gifts from Louis XIV, part of a diplomatic exchange in which Moulay Ismail asked for the hand of the Sun King\'s daughter, Princess de Conti.',
  },
  {
    name: 'Place el-Hedim',
    description:
      'The grand public square of Meknes, created by Moulay Ismail in the late 17th century by demolishing an entire neighborhood of the old medina. The name means "Place of Demolition," a blunt acknowledgment of how the sultan cleared the space. Originally designed as a staging ground for royal processions and military reviews, Place el-Hedim today serves as the beating heart of Meknes social life. Locals gather here in the evening, children play, food vendors sell grilled corn and freshly squeezed orange juice, and the monumental Bab Mansour gate anchors the southern edge like a theatrical backdrop. The square has been compared to a smaller, calmer, more authentic version of Marrakech\'s Jemaa el-Fnaa, without the overwhelming tourist pressure.',
    image: '/images/hero-morocco-medina.webp',
    type: 'Historic Square',
    rating: 4.5,
    hours: 'Open 24 hours (most lively 5:00 PM - 10:00 PM)',
    price: 'Free',
    tip: 'The rooftop cafes on the north side offer excellent views over the square toward Bab Mansour. Orange juice is 5-8 MAD fresh-squeezed. Visit in the evening when the square comes alive with local families and the gate is illuminated. This is the best people-watching spot in Meknes.',
  },
  {
    name: 'The Medina of Meknes',
    description:
      'The UNESCO-listed medina of Meknes is a delightful contrast to the overwhelming labyrinths of Fes and Marrakech. Smaller, calmer, and almost entirely devoid of tourist touts, the Meknes medina offers an authentic experience of daily Moroccan life. The main artery runs from Place el-Hedim through a series of covered souks selling everything from spices and leather to household goods and traditional clothing. Side alleys lead to quiet residential quarters with ornate doorways, neighborhood mosques, and communal bread ovens where locals bring their dough each morning. The Bou Inania Madrasa, built by the Marinid dynasty in the 14th century, is a smaller but exquisitely decorated theological college open to visitors. The absence of tourist pressure means you can browse the souks, drink tea with shopkeepers, and explore freely without persistent hassle.',
    image: '/images/hero-morocco-medina.webp',
    type: 'UNESCO Heritage',
    rating: 4.6,
    hours: 'Open 24 hours (shops 9:00 AM - 7:00 PM)',
    price: 'Free',
    tip: 'Enter the medina from Place el-Hedim and follow the main covered souk straight ahead. The Meknes souks are not organized by trade like Fes, but the spice section near the center is fragrant and colorful. Prices are genuine local prices; bargaining is expected but the starting prices are already fair.',
  },
  {
    name: 'Dar Jamai Museum',
    description:
      'Housed in a magnificent 19th-century palace built by the powerful Jamai family (two brothers who served as grand viziers to Sultan Moulay Hassan I), this museum showcases the finest traditional arts and crafts of the Meknes region. The palace itself, with its painted cedarwood ceilings, zellige-tiled courtyards, carved stucco walls, and an exquisite Andalusian garden with towering cypress trees and fountains, is as much a treasure as the collections it houses. Exhibits include Fassi and Meknassi ceramics, traditional Berber jewelry, embroidered textiles, carved cedarwood furniture, antique weaponry, and beautifully illuminated Qurans. The Jamai brothers fell from power after the sultan\'s death and were imprisoned; the palace was later converted into a military hospital before becoming a museum in 1920.',
    image: '/images/hero-morocco-medina.webp',
    type: 'Museum & Palace',
    rating: 4.5,
    hours: '9:00 AM - 5:00 PM (closed Tuesdays)',
    price: '20 MAD',
    tip: 'The Andalusian garden is one of the most peaceful spots in Meknes and worth the entry fee alone on a hot day. The museum is located right on Place el-Hedim, making it an easy first stop. The upstairs rooms with painted cedarwood ceilings are the highlight of the palace architecture.',
  },
  {
    name: 'Heri es-Souani (Underground Granary)',
    description:
      'The vast underground storage complex that sustained Moulay Ismail\'s imperial ambitions is one of the most awe-inspiring ruins in Morocco. Stretching beneath the earth for an estimated area equivalent to several football fields, these granaries used walls up to five meters thick to create natural insulation that kept grain cool and dry for years. A network of underground water channels, fed by an aqueduct from the Middle Atlas, maintained humidity levels and supplied water to the entire imperial complex. The engineering sophistication was so advanced that European ambassadors compared it favorably to contemporary European engineering. Today, the partially collapsed vaulted ceilings create a hauntingly beautiful space where shafts of light penetrate through gaps in the stonework, illuminating the massive scale of Moulay Ismail\'s vision.',
    image: '/images/hero-morocco-medina.webp',
    type: 'Historic Monument',
    rating: 4.6,
    hours: '9:00 AM - 6:00 PM daily',
    price: '20 MAD (combined with Royal Stables)',
    tip: 'Bring a flashlight or use your phone torch to explore the darker recesses of the granary. The acoustics inside are remarkable; clap your hands to hear the echo reverberate through the vaulted chambers. This is included in the same ticket as the Royal Stables, so visit both together.',
  },
  {
    name: 'Volubilis Roman Ruins',
    description:
      'Located just 30 kilometers north of Meknes, Volubilis is the best-preserved Roman archaeological site in North Africa and a UNESCO World Heritage Site. Founded as a Berber settlement in the 3rd century BC, it became a major Roman outpost and the capital of the province of Mauretania Tingitana. At its peak, 20,000 people lived here, cultivating olives and grain for export to Rome. The ruins include a triumphal arch built for Emperor Caracalla in 217 AD, a Capitol temple, a basilica, public baths, and dozens of elite townhouses containing remarkably intact floor mosaics depicting Orpheus, Bacchus, Diana, and other mythological scenes. The mosaics are the highlight: vivid, intricate, and still in their original positions after nearly two millennia. After the Romans withdrew in the 3rd century, the city continued to be inhabited by Christians, then Muslims, until an earthquake in 1755 (the same one that destroyed Lisbon) finally emptied it. Moulay Ismail later quarried its marble columns for his palaces in Meknes.',
    image: '/images/hero-morocco-medina.webp',
    type: 'UNESCO Heritage',
    rating: 4.8,
    hours: '8:30 AM - sunset daily',
    price: '70 MAD',
    tip: 'Visit early morning or late afternoon to avoid the midday heat and for the best light on the mosaics. There is no shade on the site, so bring water, sunscreen, and a hat. Allow at least 90 minutes. The House of Orpheus, House of the Athlete, and House of Venus have the finest mosaics. A licensed guide at the entrance (150-200 MAD) brings the ruins to life with historical context.',
  },
];

/* =====================================================================
   DATA: MOULAY ISMAIL & LOUIS XIV RIVALRY
   ===================================================================== */

const historicalFacts = [
  {
    title: 'The Sultan Who Built a Moroccan Versailles',
    description: 'Moulay Ismail ibn Sharif (1645-1727) ruled Morocco for 55 years, the longest reign in Moroccan history. He made Meknes his capital in 1672 and immediately began transforming it into an imperial city to rival Versailles. His building program lasted decades and employed an estimated 25,000 enslaved Europeans, 30,000 prisoners, and thousands of paid workers. The result was a complex of palaces, gardens, stables, granaries, mosques, and fortifications stretching 25 kilometers around the city.',
  },
  {
    title: 'The Marriage Proposal to Princess de Conti',
    description: 'In 1699, Moulay Ismail sent an ambassador to the court of Louis XIV to ask for the hand of Marie Anne de Bourbon, Princess de Conti, the Sun King\'s legitimized daughter. The request sent shockwaves through the French court. Louis XIV politely declined, citing the princess\'s Catholic faith, but the diplomatic exchange resulted in a prisoner swap and the two grandfather clocks that still flank Moulay Ismail\'s tomb today. French ambassador Jean-Baptiste Estelle described the sultan as "a man of extraordinary vigor and intelligence, whose ambition knows no equal."',
  },
  {
    title: 'The Black Guard: Africa\'s Most Feared Army',
    description: 'Moulay Ismail created the Abid al-Bukhari (Black Guard), a slave army of 150,000 soldiers recruited from sub-Saharan Africa. It was one of the largest standing armies in the world at the time, rivaling the forces of the Ottoman Empire and Louis XIV\'s France. The Black Guard was fiercely loyal to the sultan and served as the backbone of his power, enabling him to unify Morocco, repel European colonial advances, and recapture the ports of Tangier (from England in 1684) and Larache (from Spain in 1689).',
  },
  {
    title: 'A Reputation for Ruthlessness',
    description: 'European ambassadors and chroniclers painted Moulay Ismail as one of the most brutal rulers in history, claiming he personally killed 36,000 people with his own hands. While these numbers are almost certainly exaggerated propaganda, the sultan was undeniably ruthless in maintaining his authority. He kept 25,000 European captives in Meknes, many taken by the Barbary corsairs, and used them as forced labor in his building projects. The contrast between his architectural magnificence and his human cruelty defines the complex legacy of Meknes.',
  },
  {
    title: 'Diplomatic Rivalry with Versailles',
    description: 'The relationship between Moulay Ismail and Louis XIV was one of mutual fascination and competition. Both rulers saw themselves as divinely appointed, both were obsessive builders, and both demanded absolute obedience. French envoys described Meknes as "the Versailles of Morocco," noting the similar ambition in scale and grandeur. Moulay Ismail kept himself informed of European affairs through a network of diplomats and renegades, and consciously modeled aspects of his court on Versailles. The two rulers exchanged gifts, negotiated prisoner releases, and treated each other as equals in an age when European powers rarely acknowledged African sovereignty.',
  },
  {
    title: 'The Father of Morocco',
    description: 'Moulay Ismail is recorded as having fathered over 800 confirmed children, a claim studied and deemed biologically plausible by researchers at the University of Vienna in 2014. He maintained a harem of over 500 women in a dedicated palace complex within Meknes. His descendants, the Alaouite dynasty, still rule Morocco today. King Mohammed VI is his direct descendant, making the mausoleum of Moulay Ismail not just a historical monument but a living link between modern Morocco and its 17th-century imperial zenith.',
  },
];

/* =====================================================================
   DATA: NEIGHBORHOODS
   ===================================================================== */

const neighborhoods = [
  {
    name: 'Imperial City (Kasbah Ismailia)',
    icon: Crown,
    character: 'Monumental, historic, awe-inspiring',
    description:
      'The vast imperial quarter built by Moulay Ismail stretches south from Bab Mansour and contains the mausoleum, royal palaces (still used by the Moroccan royal family), the Heri es-Souani granaries, Royal Stables, and the Agdal Basin. The scale is staggering: the walls alone stretch for over 25 kilometers. Much of the imperial city is in atmospheric ruins, creating a landscape of crumbling walls, overgrown gardens, and massive gateways that evoke the ghost of Moulay Ismail\'s ambition.',
    highlights: ['Bab Mansour', 'Mausoleum of Moulay Ismail', 'Heri es-Souani', 'Royal Stables', 'Agdal Basin'],
    bestFor: 'History lovers, architecture enthusiasts, photographers',
    stayHere: 'Limited accommodation options within the imperial city itself, but several excellent riads sit on its northern edge near Place el-Hedim.',
  },
  {
    name: 'Medina (Old City)',
    icon: Landmark,
    character: 'Authentic, calm, uncommercial',
    description:
      'The old walled medina of Meknes stretches north from Place el-Hedim, predating Moulay Ismail\'s imperial expansion. It is smaller and far less overwhelming than the medinas of Fes or Marrakech, making it ideal for travelers who want an authentic medina experience without the intensity. The covered souks are genuine working markets serving local residents, with spice vendors, butchers, textile sellers, and craftspeople going about their daily business. The Bou Inania Madrasa and several ornate mosques punctuate the residential quarters.',
    highlights: ['Covered souks', 'Bou Inania Madrasa', 'Grande Mosquee', 'Spice market', 'Artisan workshops'],
    bestFor: 'First-time Morocco visitors, those wanting authentic medina life, budget travelers',
    stayHere: 'The best riads in Meknes are found in the medina, offering traditional courtyard architecture at prices 40-60% lower than equivalent riads in Fes or Marrakech.',
  },
  {
    name: 'Ville Nouvelle (New City)',
    icon: Building,
    character: 'Modern, French colonial, practical',
    description:
      'The French-built new town, centered on Avenue Hassan II and Avenue Mohammed V, offers a completely different atmosphere from the historic quarters. Tree-lined boulevards, colonial-era architecture, modern cafes, banks, pharmacies, and the main transport connections are all here. The Ville Nouvelle is where locals come for international dining, shopping, and evening promenades. The ONCF train station is located here, making it a convenient base for day-trippers.',
    highlights: ['Avenue Hassan II', 'French colonial architecture', 'Modern restaurants', 'Train station', 'Banks & services'],
    bestFor: 'Modern comfort seekers, transit convenience, those who prefer hotel amenities',
    stayHere: 'Hotels in the Ville Nouvelle offer Western-style amenities, air conditioning, and easy access to the train station, with the medina a 10-minute taxi ride away.',
  },
];

/* =====================================================================
   DATA: WHERE TO EAT
   ===================================================================== */

const restaurants = [
  {
    name: 'Restaurant Omnia',
    cuisine: 'Traditional Moroccan',
    location: 'Medina',
    price: '60-120 MAD',
    description: 'A beautifully restored riad serving refined Meknassi cuisine, including pastilla with pigeon, lamb tagine with prunes and almonds, and couscous on Fridays. The courtyard setting with zellige tiles and a central fountain makes every meal feel special. Reservations recommended for dinner.',
  },
  {
    name: 'Riad Bahia',
    cuisine: 'Moroccan-French Fusion',
    location: 'Near Place el-Hedim',
    price: '80-150 MAD',
    description: 'Set in a stunning 18th-century palace with painted cedarwood ceilings, Riad Bahia offers a refined dining experience with a fusion of Moroccan and French flavors. The set menu changes daily and always includes fresh ingredients from the Meknes region. The rooftop terrace has views toward Bab Mansour.',
  },
  {
    name: 'Palais Terrab',
    cuisine: 'Traditional Meknassi',
    location: 'Imperial City',
    price: '100-180 MAD',
    description: 'Housed in a former nobleman\'s residence within the imperial city walls, Palais Terrab is Meknes\'s finest dining experience. The multi-course Meknassi feast includes harira soup, briouats, mechoui lamb, and traditional Moroccan pastries. The ornate dining rooms drip with carved stucco and zellige.',
  },
  {
    name: 'Restaurant Zitouna',
    cuisine: 'Home-style Moroccan',
    location: 'Medina',
    price: '35-70 MAD',
    description: 'A family-run gem tucked inside the medina, where the mother cooks and the children serve. The menu is whatever was fresh at the market that morning: kefta tagine, chicken with preserved lemons, and the best harira soup in Meknes. Simple, honest, and delicious. Cash only.',
  },
  {
    name: 'Cafe du Commerce',
    cuisine: 'Cafe & Light Meals',
    location: 'Ville Nouvelle',
    price: '25-50 MAD',
    description: 'A classic French colonial-era cafe on Avenue Mohammed V with original Art Deco interiors, black-and-white tiled floors, and marble-topped tables. Perfect for breakfast or a light lunch of sandwiches, salads, and excellent espresso. A time capsule of Meknes\'s colonial past.',
  },
  {
    name: 'Chateau Roslane Winery',
    cuisine: 'Vineyard Dining',
    location: '20 min from Meknes',
    price: '150-300 MAD',
    description: 'Morocco\'s premier winery offers guided vineyard tours, tastings of their award-winning Guerrouane wines, and a restaurant serving Moroccan-Mediterranean cuisine paired with their own vintages. The setting among rolling vineyards with Atlas Mountain views is unlike anything else in Morocco.',
  },
];

/* =====================================================================
   DATA: STREET FOOD
   ===================================================================== */

const streetFood = [
  { item: 'Fresh Orange Juice', price: '5-8 MAD', where: 'Place el-Hedim vendors' },
  { item: 'Msemen (flatbread) with honey', price: '3-5 MAD', where: 'Morning vendors throughout medina' },
  { item: 'Kefta Brochettes', price: '15-25 MAD', where: 'Grill stalls near the medina entrance' },
  { item: 'Harira Soup', price: '5-10 MAD', where: 'Soup stands in the covered souks' },
  { item: 'Maakouda (potato fritters)', price: '3-5 MAD', where: 'Snack carts near Place el-Hedim' },
  { item: 'Sfenj (Moroccan doughnuts)', price: '2-3 MAD', where: 'Morning street vendors near the Grande Mosquee' },
  { item: 'Bocadillos (sandwiches)', price: '10-20 MAD', where: 'Sandwich shops along the main medina artery' },
  { item: 'Grilled Corn on the Cob', price: '5-8 MAD', where: 'Evening vendors on Place el-Hedim' },
  { item: 'Khobz (fresh bread) with olive oil', price: '2-5 MAD', where: 'Bakeries throughout the medina' },
  { item: 'Briwat (fried pastries)', price: '5-8 MAD', where: 'Pastry shops in the covered souks' },
];

/* =====================================================================
   DATA: WHERE TO STAY
   ===================================================================== */

const accommodationsByBudget = [
  {
    category: 'Budget',
    icon: Bed,
    priceRange: '150-350 MAD per night',
    options: [
      { name: 'Riad Yacout', area: 'Medina', highlight: 'Clean, welcoming riad with a small courtyard and rooftop terrace. The warmest hospitality in Meknes at prices that would be impossible in Fes or Marrakech.' },
      { name: 'Hotel Maroc', area: 'Ville Nouvelle', highlight: 'No-frills hotel near the train station with clean rooms, reliable Wi-Fi, and friendly staff. Perfect for one-night stays or transit stops.' },
      { name: 'Dar El Hana', area: 'Medina', highlight: 'Charming budget riad with traditional decor, a shared courtyard, and homemade breakfast included. Walking distance to all medina attractions.' },
    ],
  },
  {
    category: 'Mid-Range',
    icon: Star,
    priceRange: '400-800 MAD per night',
    options: [
      { name: 'Riad Lahboul', area: 'Medina', highlight: 'Beautifully restored riad with zellige courtyards, carved cedarwood ceilings, and spacious rooms. The rooftop terrace overlooks the medina rooftops and the Middle Atlas in the distance.' },
      { name: 'Riad D\'Or', area: 'Near Place el-Hedim', highlight: 'Boutique riad with individually decorated rooms, a plunge pool, and a location steps from Bab Mansour. Excellent home-cooked dinners available on request.' },
      { name: 'Hotel Transatlantique', area: 'Ville Nouvelle', highlight: 'Grand colonial-era hotel with Art Deco architecture, a swimming pool, tennis courts, and expansive gardens. A Meknes institution since 1928.' },
    ],
  },
  {
    category: 'Luxury',
    icon: Sparkles,
    priceRange: '900-2,500 MAD per night',
    options: [
      { name: 'Palais Didi', area: 'Imperial City Edge', highlight: 'A lavish 19th-century palace converted into an intimate luxury guesthouse with museum-quality zellige, carved stucco, and a hammam. The finest address in Meknes.' },
      { name: 'Chateau Roslane', area: 'Wine Country (20 min)', highlight: 'Morocco\'s premier winery estate with luxurious suites set among vineyards, a spa, fine dining, and wine-tasting experiences. A unique rural luxury experience.' },
      { name: 'Riad Ritaj', area: 'Medina', highlight: 'Upscale riad with a garden courtyard, ornate suites with antique furnishings, a traditional hammam, and a private chef preparing Meknassi feasts on request.' },
    ],
  },
];

/* =====================================================================
   DATA: GETTING THERE & AROUND
   ===================================================================== */

const transportModes = [
  {
    mode: 'Petit Taxi (City)',
    icon: Car,
    cost: '8-20 MAD per trip',
    description: 'Blue petit taxis zip around Meknes and are the easiest way to get between the Ville Nouvelle, medina, and imperial city. They use meters (insist on it) and are affordable.',
    tips: [
      'Always insist the driver uses the meter (compteur)',
      'Rides within the city rarely exceed 15-20 MAD',
      'Taxis can be shared with other passengers going the same direction',
      'Available at stands near Place el-Hedim, the train station, and major intersections',
    ],
  },
  {
    mode: 'Walking',
    icon: Footprints,
    cost: 'Free',
    description: 'Meknes is one of the most walkable cities in Morocco. The medina, Place el-Hedim, Bab Mansour, and the Mausoleum are all within easy walking distance. The walk from the medina to Heri es-Souani takes about 20 minutes through the imperial city.',
    tips: [
      'The medina is flat and easy to navigate unlike the hilly medinas of Fes',
      'Follow the main road south from Bab Mansour to reach the mausoleum and granaries',
      'The Ville Nouvelle is a pleasant 15-minute walk from Place el-Hedim',
      'Carry water, especially in summer when temperatures exceed 40 degrees Celsius',
    ],
  },
  {
    mode: 'Grand Taxi to Volubilis',
    icon: Navigation,
    cost: '250-350 MAD (round trip, negotiated)',
    description: 'Grand taxis (shared Mercedes sedans) are the best way to visit Volubilis and Moulay Idriss Zerhoun. Negotiate a round-trip fare that includes waiting time at both sites. Depart from the grand taxi stand near the Institut Francais.',
    tips: [
      'Negotiate the full round-trip price before departing, including waiting time',
      'A typical circuit: Meknes to Volubilis (30 min), wait 90 min, Moulay Idriss (15 min), wait 45 min, return',
      'Sharing a grand taxi with other travelers reduces the per-person cost significantly',
      'Arrange through your riad for a fair quoted price without negotiation stress',
    ],
  },
  {
    mode: 'Train (ONCF)',
    icon: Train,
    cost: '25-35 MAD to Fes (40 min)',
    description: 'ONCF trains connect Meknes to Fes (40 minutes, from 25 MAD first class), Rabat (2.5 hours, from 85 MAD), Casablanca (3.5 hours, from 115 MAD), Marrakech (7 hours, from 185 MAD), and Tangier (4 hours, from 125 MAD). The station is in the Ville Nouvelle.',
    tips: [
      'First class is worth the small extra cost for comfortable seats and air conditioning',
      'Trains to Fes run approximately every 1-2 hours throughout the day',
      'Buy tickets at the station or online at oncf.ma',
      'The Fes-Meknes route is one of the shortest and cheapest train journeys in Morocco',
    ],
  },
];

/* =====================================================================
   DATA: DAY TRIPS
   ===================================================================== */

const dayTrips = [
  {
    name: 'Volubilis Roman Ruins',
    icon: Columns,
    distance: '30 km north',
    duration: 'Half day (3-4 hours)',
    price: '70 MAD entrance + transport',
    description: 'The best-preserved Roman ruins in North Africa, with remarkably intact floor mosaics, a triumphal arch, basilica, and the remains of an olive-pressing industry that supplied Rome. A UNESCO World Heritage Site that brings the Roman Empire\'s African frontier to life. The House of Orpheus, House of the Athlete, and House of Venus contain mosaics of extraordinary beauty still in their original positions.',
    highlights: ['Roman mosaics in situ', 'Triumphal Arch of Caracalla', 'Capitol temple', 'Panoramic olive grove views', 'Ancient olive presses'],
  },
  {
    name: 'Moulay Idriss Zerhoun',
    icon: Landmark,
    distance: '27 km north',
    duration: 'Half day (2-3 hours)',
    price: 'Free (town); transport only',
    description: 'The holiest town in Morocco, draped across two hills overlooking the Volubilis valley. Moulay Idriss I, the great-grandson of the Prophet Muhammad and founder of the first Moroccan dynasty, is buried here. Until recently, non-Muslims were not permitted to stay overnight. The whitewashed houses, cylindrical minaret (the only one in Morocco), and panoramic views make it one of the most photogenic towns in the kingdom. Combine with Volubilis for a perfect half-day excursion.',
    highlights: ['Tomb of Moulay Idriss I', 'Cylindrical minaret', 'Panoramic terrace views', 'Saturday market', 'Hillside town atmosphere'],
  },
  {
    name: 'Ifrane & Cedar Forests',
    icon: TreePine,
    distance: '60 km south',
    duration: 'Full day',
    price: '500-800 MAD (private transport)',
    description: 'Known as "Morocco\'s Switzerland," Ifrane is a surreal Alpine-style town in the Middle Atlas Mountains with manicured gardens, a stone lion, and chalets that look transplanted from the Swiss Alps. The nearby Azrou Cedar Forest is home to the endangered Barbary macaque, the only wild monkey population in Africa north of the Sahara. The cedar trees are centuries old and the forest atmosphere is a striking contrast to the arid landscapes of Meknes.',
    highlights: ['Alpine architecture', 'Barbary macaques', 'Ancient cedar forests', 'Azrou Berber market (Tuesdays)', 'Cool mountain air'],
  },
  {
    name: 'Fes (Day Trip)',
    icon: BookOpen,
    distance: '60 km east',
    duration: 'Full day',
    price: '25-35 MAD (train, each way)',
    description: 'Morocco\'s spiritual capital is just 40 minutes away by train, making a Fes day trip the easiest excursion from Meknes. The world\'s largest car-free urban area, the oldest university (Al-Qarawiyyin, 859 AD), the legendary Chouara Tannery, and the Blue Gate are all within walking distance of each other. Start early, hire a guide at Bab Boujloud, and return on the evening train.',
    highlights: ['Fes el-Bali medina', 'Chouara Tannery', 'Bab Boujloud (Blue Gate)', 'Al-Qarawiyyin University', 'Bou Inania Madrasa'],
  },
  {
    name: 'Meknes Wine Country',
    icon: Wine,
    distance: '15-25 km',
    duration: 'Half day',
    price: '200-400 MAD (tasting & tour)',
    description: 'The Meknes-Fes corridor is Morocco\'s premier wine-producing region, with a winemaking tradition dating to Roman times (Volubilis was a major olive and wine center). The Guerrouane appellation produces excellent reds, roses, and whites. Chateau Roslane and Domaine de la Zouina offer guided tours, vineyard walks, and tastings in beautiful settings. A surprising and memorable experience in a majority-Muslim country.',
    highlights: ['Chateau Roslane', 'Domaine de la Zouina', 'Guerrouane wines', 'Vineyard lunches', 'Atlas Mountain views'],
  },
];

/* =====================================================================
   DATA: BEST TIME TO VISIT
   ===================================================================== */

const monthlyWeather = [
  {
    months: 'March - May',
    icon: Leaf,
    temp: '15-28 C',
    rating: 5,
    verdict: 'The best time to visit Meknes. Wildflowers carpet the countryside, temperatures are warm but comfortable, and Volubilis is at its most photogenic with green fields surrounding the ruins. The olive groves and vineyards are in bloom. Perfect for walking the imperial city and medina.',
  },
  {
    months: 'June - August',
    icon: ThermometerSun,
    temp: '25-40 C',
    rating: 2,
    verdict: 'Meknes is significantly hotter than coastal cities, with temperatures regularly exceeding 38 degrees Celsius in July and August. The inland location means no sea breeze relief. Sightseeing is best done early morning and late afternoon, with a long midday break. The underground granaries offer welcome cool.',
  },
  {
    months: 'September - November',
    icon: Sun,
    temp: '15-30 C',
    rating: 5,
    verdict: 'Excellent conditions for exploring. September can still be warm, but October and November bring ideal temperatures, golden light, and the olive harvest in the surrounding countryside. This is harvest season in the vineyards and the time when the Meknes region\'s agricultural character is on full display.',
  },
  {
    months: 'December - February',
    icon: CloudSun,
    temp: '5-17 C',
    rating: 3,
    verdict: 'Cool and occasionally rainy, but Meknes\'s indoor attractions (the mausoleum, Dar Jamai Museum, the granaries) are excellent wet-weather options. The medina is quieter and atmospheric in winter light. Snow occasionally dusts the Middle Atlas peaks visible from the city. Pack warm layers for evenings.',
  },
];

/* =====================================================================
   DATA: BUDGET GUIDE
   ===================================================================== */

const budgetBreakdown = [
  {
    category: 'Budget Traveler',
    icon: HandCoins,
    dailyBudget: '250-400 MAD/day',
    details: [
      'Budget riad or hostel: 100-200 MAD/night',
      'Street food and local restaurants: 50-80 MAD/day',
      'Attractions: 50-70 MAD (Heri es-Souani + Dar Jamai)',
      'Transport: 20-40 MAD (petit taxis)',
      'Mint tea budget: 10-15 MAD/day',
    ],
  },
  {
    category: 'Mid-Range Traveler',
    icon: Star,
    dailyBudget: '500-900 MAD/day',
    details: [
      'Comfortable riad: 300-600 MAD/night',
      'Restaurant meals: 120-200 MAD/day',
      'All major attractions: 100-150 MAD',
      'Grand taxi day trip to Volubilis: 300 MAD shared',
      'Wine tasting: 150-200 MAD',
    ],
  },
  {
    category: 'Luxury Traveler',
    icon: Sparkles,
    dailyBudget: '1,500-3,500 MAD/day',
    details: [
      'Luxury riad or palace: 900-2,500 MAD/night',
      'Fine dining with wine: 300-500 MAD/day',
      'Private guide: 500-800 MAD/day',
      'Private car with driver to Volubilis: 500-700 MAD',
      'Spa and hammam: 200-500 MAD',
    ],
  },
];

/* =====================================================================
   DATA: SAFETY
   ===================================================================== */

const safetyTips = [
  {
    title: 'General Safety',
    icon: Shield,
    tips: [
      'Meknes is one of the safest cities in Morocco for tourists due to lower tourist volume and less aggressive touts.',
      'The medina is safe to walk during the day and early evening; main streets are well-populated until 9-10 PM.',
      'Standard precautions apply: keep valuables secure, be aware of your surroundings, and avoid unlit alleys after dark.',
      'Solo female travelers report a significantly more comfortable experience in Meknes than in Marrakech or Fes.',
    ],
  },
  {
    title: 'Common Scams',
    icon: AlertTriangle,
    tips: [
      'Unofficial guides may approach you near Bab Mansour or Place el-Hedim. A polite "la shukran" (no thank you) usually suffices.',
      'Taxi drivers in the Ville Nouvelle may claim the meter is broken. Choose another taxi rather than negotiating a flat rate.',
      'At Volubilis, self-appointed guides may follow you. The official guides with badges at the entrance are more reliable.',
      'Restaurant touts near Place el-Hedim earn commissions from overpriced restaurants. Walk past the tourist strip to find better-value places in the medina.',
    ],
  },
  {
    title: 'Health & Practical',
    icon: Heart,
    tips: [
      'Tap water is generally safe in Meknes but bottled water (3-5 MAD) is recommended for sensitive stomachs.',
      'Pharmacies are well-stocked and pharmacists can advise on minor ailments. Look for the green cross sign.',
      'Summer heat is the biggest health risk. Carry water, wear sun protection, and take midday breaks in shade or air conditioning.',
      'The main hospital (CHU Mohammed V) and several private clinics are in the Ville Nouvelle for any medical needs.',
    ],
  },
];

/* =====================================================================
   DATA: PRACTICAL INFO / GETTING THERE
   ===================================================================== */

const practicalInfo = [
  {
    icon: Plane,
    title: 'Getting There by Air',
    description: 'Meknes does not have a commercial airport. The nearest airport is Fes-Saiss (FEZ), approximately 60 km east (45 minutes by car). RAM, Ryanair, and other carriers fly to Fes from European cities. From the airport, a grand taxi to Meknes costs 300-400 MAD, or you can take a taxi to Fes train station and take the 40-minute train to Meknes.',
  },
  {
    icon: Train,
    title: 'Getting There by Train',
    description: 'ONCF trains connect Meknes to all major Moroccan cities. From Casablanca: 3.5 hours, from 115 MAD first class. From Rabat: 2.5 hours, from 85 MAD. From Fes: 40 minutes, from 25 MAD. From Marrakech: 7 hours, from 185 MAD. From Tangier: 4 hours, from 125 MAD. The train station is in the Ville Nouvelle, a 10 MAD taxi ride from the medina.',
  },
  {
    icon: Bus,
    title: 'Getting There by Bus',
    description: 'CTM and Supratours operate comfortable intercity buses to Meknes from all major cities. CTM runs to Casablanca (4 hours, 100 MAD), Marrakech (8 hours, 175 MAD), Fes (1 hour, 25 MAD), Chefchaouen (4.5 hours, 80 MAD), and many other destinations. The CTM station is in the Ville Nouvelle near the train station. Supratours connects with ONCF train schedules.',
  },
  {
    icon: Clock,
    title: 'How Many Days to Spend',
    description: 'One full day is enough to see the main highlights of Meknes (Bab Mansour, mausoleum, Heri es-Souani, Dar Jamai Museum, and the medina). Two days allows a relaxed pace plus a day trip to Volubilis and Moulay Idriss. Three days lets you add wine country, Ifrane, or a day trip to Fes. Many travelers use Meknes as a base for exploring the region rather than a stand-alone destination.',
  },
];

/* =====================================================================
   DATA: 2-DAY ITINERARY
   ===================================================================== */

const itinerary = [
  {
    day: 'Day 1',
    title: 'Imperial Meknes: Monuments, Medina & History',
    icon: Crown,
    morning: {
      time: '9:00 AM - 12:30 PM',
      activities: [
        'Start at Place el-Hedim with fresh orange juice from the vendors (5 MAD)',
        'Admire the monumental Bab Mansour gate and photograph it in morning light',
        'Visit the Mausoleum of Moulay Ismail, one of few shrines open to non-Muslims',
        'Walk south through the imperial city ruins to the Heri es-Souani granaries and Royal Stables',
      ],
    },
    afternoon: {
      time: '12:30 PM - 5:30 PM',
      activities: [
        'Lunch at Restaurant Zitouna in the medina for authentic home-cooked tagine (50 MAD)',
        'Explore the Dar Jamai Museum and its tranquil Andalusian garden',
        'Wander the covered souks of the medina, browsing spices, leather, and textiles',
        'Visit the Bou Inania Madrasa for exquisite Marinid-era zellige and carved cedarwood',
      ],
    },
    evening: {
      time: '5:30 PM - 9:00 PM',
      activities: [
        'Return to Place el-Hedim for the evening atmosphere as locals gather',
        'Climb to a rooftop cafe for sunset views over the square and Bab Mansour',
        'Dinner at Riad Bahia for refined Moroccan-French cuisine (120 MAD)',
        'Evening stroll through the illuminated Place el-Hedim and medina entrance',
      ],
    },
  },
  {
    day: 'Day 2',
    title: 'Volubilis, Moulay Idriss & Wine Country',
    icon: Columns,
    morning: {
      time: '8:00 AM - 12:30 PM',
      activities: [
        'Arrange a grand taxi from your riad (300 MAD round trip including waiting time)',
        'Drive 30 minutes to Volubilis and hire a guide at the entrance (150 MAD)',
        'Explore the Roman mosaics, triumphal arch, basilica, and ancient olive presses',
        'Allow 90 minutes to walk the entire site and photograph the mosaics in morning light',
      ],
    },
    afternoon: {
      time: '12:30 PM - 5:30 PM',
      activities: [
        'Continue 5 minutes to Moulay Idriss Zerhoun, Morocco\'s holiest town',
        'Walk to the panoramic terrace for breathtaking views over the valley and Volubilis',
        'Lunch in Moulay Idriss at a local restaurant overlooking the valley (40-60 MAD)',
        'Optional: stop at Chateau Roslane winery on the return for a tasting (200 MAD)',
      ],
    },
    evening: {
      time: '5:30 PM - Late',
      activities: [
        'Return to Meknes and freshen up at your riad',
        'Farewell dinner at Palais Terrab for a multi-course Meknassi feast (150 MAD)',
        'Final mint tea on a medina rooftop terrace under the stars',
        'Walk past the illuminated Bab Mansour one last time before departing',
      ],
    },
  },
];

/* =====================================================================
   DATA: FAQ
   ===================================================================== */

const faqItems = [
  {
    question: 'Is Meknes worth visiting, or should I just visit Fes?',
    answer: 'Absolutely worth visiting. Meknes offers a completely different experience from Fes: monumental imperial architecture rather than medieval medina life, a calm and authentic atmosphere rather than sensory overload, and access to Volubilis Roman ruins. Many travelers find Meknes a refreshing change of pace. Ideally, visit both. But if you only have one day, Meknes plus Volubilis is one of the best day trips in all of Morocco.',
  },
  {
    question: 'How do I get from Fes to Meknes?',
    answer: 'The easiest way is by train: ONCF runs frequent services between Fes and Meknes, taking just 40 minutes and costing from 25 MAD in first class. Trains depart approximately every 1-2 hours. Grand taxis from the Fes grand taxi stand also make the journey in about 30 minutes for 25-30 MAD per person. CTM buses take about 1 hour and cost 25 MAD.',
  },
  {
    question: 'Can I visit Meknes and Volubilis in one day from Fes?',
    answer: 'Yes, this is one of the most popular day trips in Morocco. Take the early train from Fes to Meknes (40 minutes), arrange a grand taxi to Volubilis and Moulay Idriss from Meknes (300-350 MAD round trip), and see the Meknes highlights in the afternoon before taking the evening train back to Fes. It is a long but rewarding day.',
  },
  {
    question: 'Is Meknes safe for solo travelers and women?',
    answer: 'Meknes is widely regarded as one of the safest and most relaxed cities in Morocco for all travelers, including solo women. The lower tourist volume means far fewer touts, hustlers, and scam artists than Marrakech or Fes. The medina is calm and easy to navigate, and locals are genuinely welcoming rather than transactional. Standard safety precautions apply, but most visitors report feeling very comfortable.',
  },
  {
    question: 'What is the best way to visit Volubilis from Meknes?',
    answer: 'The most flexible option is a grand taxi from Meknes (30 minutes, 250-350 MAD round trip negotiated). Alternatively, your riad can arrange a private driver for 400-600 MAD. Shared grand taxis from the grand taxi stand near the Institut Francais cost 15-20 MAD per person to Moulay Idriss, from where you can take another taxi to Volubilis (3 km). There is no direct public transport to the ruins.',
  },
  {
    question: 'How does Meknes compare to Marrakech?',
    answer: 'Meknes is quieter, cheaper, more authentic, and less overwhelming than Marrakech. It lacks Marrakech\'s nightlife, international dining scene, and fashionable riads, but it offers monumental imperial architecture, a genuine medina experience, world-class Roman ruins nearby, and a wine region. Meknes is ideal for travelers who want to experience Morocco without the tourist circus. Marrakech is for those who want spectacle, shopping, and social energy.',
  },
  {
    question: 'Can I drink wine in Meknes?',
    answer: 'Yes. The Meknes region is Morocco\'s premier wine-producing area, with a tradition dating back to Roman Volubilis. Wine is served in licensed restaurants, hotel bars, and at the wineries themselves. Chateau Roslane and Domaine de la Zouina offer tours and tastings. Alcohol is not consumed publicly in the medina or on the street, but is perfectly acceptable in appropriate venues. Supermarkets in the Ville Nouvelle also sell Moroccan wines.',
  },
  {
    question: 'What should I buy in the Meknes medina?',
    answer: 'Meknes is known for its damascene metalwork (intricate metal inlay), traditional textiles, olives and olive oil, local honey, and the ornate leather goods of the region. The souks offer these at genuine local prices without the aggressive sales tactics of Marrakech. Spices, argan oil, and traditional babouche slippers are also excellent purchases. Prices are fair and haggling, while expected, starts from reasonable positions.',
  },
];

/* =====================================================================
   DATA: RELATED PAGES
   ===================================================================== */

const relatedPages = [
  { href: '/fes-guide', title: 'Fes Guide', description: 'Morocco\'s spiritual capital: the world\'s oldest university, tanneries, and medieval medina.', icon: BookOpen },
  { href: '/marrakech', title: 'Marrakech Guide', description: 'The Red City: Jemaa el-Fnaa, palaces, souks, and Atlas day trips.', icon: Landmark },
  { href: '/history', title: 'Morocco History', description: 'From the Berber kingdoms to the Alaouite dynasty: Morocco through the ages.', icon: Crown },
  { href: '/unesco', title: 'UNESCO Sites Guide', description: 'Morocco\'s nine UNESCO World Heritage Sites explored in depth.', icon: Globe },
  { href: '/wine', title: 'Moroccan Wine Guide', description: 'The surprising wine regions of Morocco, from Meknes to Casablanca.', icon: Wine },
  { href: '/medina-guide', title: 'Medina Guide', description: 'How to navigate, shop, and thrive in Morocco\'s medieval medinas.', icon: Map },
  { href: '/cities', title: 'All Morocco Cities', description: 'Explore every destination across the kingdom.', icon: Globe },
  { href: '/cuisine', title: 'Moroccan Food Guide', description: 'Tagines, couscous, pastilla, and the flavors of Morocco.', icon: Utensils },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MeknesGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Meknes',
    description:
      'Meknes is one of Morocco\'s four imperial cities, built by Sultan Moulay Ismail in the 17th century as a rival to Versailles. Home to the monumental Bab Mansour gate, the Royal Stables for 12,000 horses, the underground granaries of Heri es-Souani, and a UNESCO-listed medina, Meknes is the most underrated imperial city in Morocco.',
    url: 'https://moroccoguide.com/meknes',
    touristType: ['History Buffs', 'Culture Enthusiasts', 'Wine Lovers', 'Budget Travelers', 'Photographers', 'Day Trippers'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.8935,
      longitude: -5.5473,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Bab Mansour el-Aleuj' },
      { '@type': 'TouristAttraction', name: 'Royal Stables & Heri es-Souani' },
      { '@type': 'TouristAttraction', name: 'Mausoleum of Moulay Ismail' },
      { '@type': 'TouristAttraction', name: 'Place el-Hedim' },
      { '@type': 'TouristAttraction', name: 'Dar Jamai Museum' },
      { '@type': 'TouristAttraction', name: 'Volubilis Roman Ruins' },
      { '@type': 'TouristAttraction', name: 'Moulay Idriss Zerhoun' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =================================================================
          HERO SECTION
          ================================================================= */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-morocco-medina.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Meknes</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Meknes
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            The Imperial City of Moulay Ismail
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Built by a sultan who rivaled Louis XIV, Meknes is Morocco&apos;s most underrated
            imperial city &mdash; a place of monumental gates, vast stables for 12,000 horses,
            underground granaries of engineering genius, and a medina that feels like the Morocco
            travelers dream of but rarely find.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Landmark className="w-3.5 h-3.5 mr-1.5" /> UNESCO Heritage</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Crown className="w-3.5 h-3.5 mr-1.5" /> Imperial City</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Columns className="w-3.5 h-3.5 mr-1.5" /> Near Volubilis</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Wine className="w-3.5 h-3.5 mr-1.5" /> Wine Country</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* =================================================================
          INTRODUCTION / OVERVIEW
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Versailles of Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Meknes is the quiet powerhouse among Morocco&apos;s four imperial cities. While
              Marrakech dazzles and Fes overwhelms, Meknes astounds with the sheer scale of
              one man&apos;s ambition. Sultan Moulay Ismail (1672-1727) chose this provincial
              town as his capital and spent 55 years transforming it into a complex of palaces,
              gardens, stables, granaries, and fortifications that European ambassadors compared
              to Versailles. His 25-kilometer circuit of walls enclosed an imperial city so vast
              that much of it remains in atmospheric ruin today.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              The headlines are extraordinary: Bab Mansour, the most impressive gate in North
              Africa; the Royal Stables, built to house 12,000 horses; the Heri es-Souani, an
              underground granary with walls five meters thick and a hydraulic system drawing water
              from the Atlas Mountains 25 kilometers away; and a mausoleum where the sultan rests
              flanked by grandfather clocks gifted by Louis XIV of France. Just 30 minutes away,
              the Roman ruins of Volubilis offer some of the finest intact mosaics in the
              ancient world.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Yet for all this, Meknes remains gloriously uncrowded. Where Marrakech counts its
              tourists in millions, Meknes measures theirs in thousands. The medina is calm and
              genuine, the prices are local, and the city retains an authenticity that its more
              famous siblings have traded for tourist dollars. For travelers who want to experience
              imperial Morocco without the imperial tourist markup, Meknes is the answer.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================================
          QUICK FACTS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickFacts.map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-4 text-center">
                  <FactIcon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)] mb-1">{fact.label}</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          ESSENTIAL TIPS
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Meknes Essentials: Know Before You Go
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Practical tips for making the most of Morocco&apos;s most underrated imperial city.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <TipIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          MOULAY ISMAIL & LOUIS XIV: HISTORICAL DEEP DIVE
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Moulay Ismail &amp; Louis XIV: A Rivalry of Empires
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            The extraordinary true story of the Moroccan sultan who built a Versailles in Africa,
            asked for the Sun King&apos;s daughter in marriage, and commanded one of the largest
            armies in the world.
          </p>

          <div className="space-y-6">
            {historicalFacts.map((fact, index) => (
              <div key={index} className="card-moroccan p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-3">
                      {fact.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          TOP ATTRACTIONS
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Top Attractions in Meknes &amp; Volubilis
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From the mightiest gate in North Africa to the finest Roman mosaics on the continent,
            these are the experiences that define Morocco&apos;s imperial city.
          </p>

          <div className="space-y-8">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute top-3 left-3">
                      <span className="tag bg-white/90 text-[var(--color-primary)] font-semibold">
                        {attraction.type}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                      <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                      <span className="text-white text-xs font-semibold">{attraction.rating}</span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-3">
                      {attraction.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                      {attraction.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-[var(--text-secondary)] mb-4">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {attraction.hours}</span>
                      <span className="flex items-center gap-1"><Ticket className="w-3.5 h-3.5" /> {attraction.price}</span>
                    </div>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--color-accent-50)]">
                      <Lightbulb className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-semibold text-[var(--color-accent-dark)]">Tip:</span> {attraction.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          NEIGHBORHOODS GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Neighborhoods Guide
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Meknes has three distinct districts, each offering a different experience.
            Understanding them helps you plan where to stay and what to explore.
          </p>

          <div className="space-y-6">
            {neighborhoods.map((hood) => {
              const Icon = hood.icon;
              return (
                <div key={hood.name} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                          {hood.name}
                        </h3>
                        <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                          {hood.character}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                        {hood.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hood.highlights.map((h) => (
                          <span key={h} className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--surface-muted)]">
                          <Users className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-[var(--text-secondary)]">
                            <span className="font-semibold">Best for:</span> {hood.bestFor}
                          </p>
                        </div>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--surface-muted)]">
                          <Bed className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-[var(--text-secondary)]">
                            <span className="font-semibold">Stay here:</span> {hood.stayHere}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          FOOD GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Utensils className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Where to Eat in Meknes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Meknes is the agricultural heartland of Morocco, producing olives, wine, citrus, and grain.
            The cuisine reflects this bounty with earthy tagines, fresh salads, and the region&apos;s
            famous olive oil. Prices are among the most affordable in Morocco.
          </p>

          {/* Best Restaurants */}
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-[var(--color-accent)]" />
            Best Restaurants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {restaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {restaurant.name}
                  </h4>
                  <span className="text-sm font-semibold text-[var(--color-green)]">{restaurant.price}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                    {restaurant.cuisine}
                  </span>
                  <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                    <MapPin className="w-3 h-3 mr-1" />{restaurant.location}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {restaurant.description}
                </p>
              </div>
            ))}
          </div>

          {/* Street Food */}
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Coffee className="w-5 h-5 text-[var(--color-accent)]" />
            Street Food &amp; Market Eats
          </h3>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary-50)]">
                    <th className="text-left p-4 font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Dish</th>
                    <th className="text-left p-4 font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Price</th>
                    <th className="text-left p-4 font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Where to Find</th>
                  </tr>
                </thead>
                <tbody>
                  {streetFood.map((food, index) => (
                    <tr key={food.item} className={index % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 font-medium text-[var(--text-primary)]">{food.item}</td>
                      <td className="p-4 text-[var(--color-green)] font-semibold">{food.price}</td>
                      <td className="p-4 text-[var(--text-muted)]">{food.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          WHERE TO STAY
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Where to Stay in Meknes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Meknes offers exceptional value for accommodation. Riads that would cost 800 MAD
            in Marrakech go for 400 MAD here, with the same quality of architecture and hospitality.
          </p>

          <div className="space-y-8">
            {accommodationsByBudget.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.category} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                      <TierIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {tier.category}
                      </h3>
                      <span className="text-sm text-[var(--color-green)] font-semibold">{tier.priceRange}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tier.options.map((option) => (
                      <div key={option.name} className="p-4 rounded-xl bg-[var(--surface-muted)]">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-[var(--text-primary)]">{option.name}</h4>
                          <span className="tag text-xs bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                            {option.area}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                          {option.highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          GETTING AROUND
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Car className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Getting Around Meknes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Compact and walkable, Meknes is one of the easiest Moroccan cities to navigate.
            Here is how to get around the city and to nearby attractions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transportModes.map((transport) => {
              const TransportIcon = transport.icon;
              return (
                <div key={transport.mode} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <TransportIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {transport.mode}
                      </h3>
                      <span className="text-sm text-[var(--color-green)] font-semibold">{transport.cost}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {transport.description}
                  </p>
                  <div className="space-y-2">
                    {transport.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-[var(--text-secondary)]">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          DAY TRIPS FROM MEKNES
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Compass className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Day Trips from Meknes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Meknes is ideally positioned for excursions to Roman ruins, Morocco&apos;s holiest town,
            Alpine forests, the spiritual capital of Fes, and the kingdom&apos;s finest wine country.
          </p>

          <div className="space-y-6">
            {dayTrips.map((trip) => {
              const TripIcon = trip.icon;
              return (
                <div key={trip.name} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                      <TripIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-1">
                        {trip.name}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-xs text-[var(--text-secondary)] mb-3">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {trip.distance}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {trip.duration}</span>
                        <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {trip.price}</span>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                        {trip.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {trip.highlights.map((h) => (
                          <span key={h} className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          BEST TIME TO VISIT
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Best Time to Visit Meknes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Meknes has a continental climate with hot summers and cool winters. The Saiss Plain
            location means more temperature extremes than coastal cities.
          </p>

          <div className="space-y-4">
            {monthlyWeather.map((month) => {
              const WeatherIcon = month.icon;
              return (
                <div key={month.months} className="card-moroccan p-5 flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex items-center gap-3 sm:w-64 flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <WeatherIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {month.months}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{month.temp}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < month.rating
                              ? 'fill-[var(--color-accent)] text-[var(--color-accent)]'
                              : 'text-[var(--border-default)]'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {month.verdict}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          BUDGET GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Meknes Budget Guide
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Meknes offers the best value of any imperial city in Morocco.
            Here is what to expect at each budget level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {budgetBreakdown.map((tier) => {
              const BudgetIcon = tier.icon;
              return (
                <div key={tier.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                      <BudgetIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {tier.category}
                      </h3>
                      <span className="text-sm text-[var(--color-green)] font-semibold">{tier.dailyBudget}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {tier.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[var(--text-secondary)]">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          SAFETY TIPS
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Safety Tips for Meknes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Meknes is one of the safest cities in Morocco for visitors. The relaxed atmosphere
            and low tourist volume create a comfortable experience for all travelers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyTips.map((section) => {
              const SafetyIcon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <SafetyIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {section.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <BadgeCheck className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          PRACTICAL INFO
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Info className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Getting There &amp; Practical Information
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Everything you need to plan your trip to Meknes, from transport connections to
            how many days to allocate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalInfo.map((item) => {
              const PractIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <PractIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          2-DAY ITINERARY
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Map className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              The Perfect 2-Day Meknes Itinerary
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Two days is the ideal amount of time for Meknes: one day for the imperial city
            and medina, and one day for Volubilis, Moulay Idriss, and optionally wine country.
          </p>

          <div className="space-y-8">
            {itinerary.map((day) => {
              const DayIcon = day.icon;
              return (
                <div key={day.day} className="card-moroccan overflow-hidden">
                  <div className="p-4 bg-[var(--color-primary)] text-white flex items-center gap-3">
                    <DayIcon className="w-6 h-6" />
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-lg">
                        {day.day}: {day.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Morning */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Sunrise className="w-4 h-4 text-[var(--color-accent)]" />
                          <h4 className="font-semibold text-[var(--text-primary)]">Morning</h4>
                          <span className="text-xs text-[var(--text-muted)]">{day.morning.time}</span>
                        </div>
                        <div className="space-y-2">
                          {day.morning.activities.map((activity, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                              <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Afternoon */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Sun className="w-4 h-4 text-[var(--color-accent)]" />
                          <h4 className="font-semibold text-[var(--text-primary)]">Afternoon</h4>
                          <span className="text-xs text-[var(--text-muted)]">{day.afternoon.time}</span>
                        </div>
                        <div className="space-y-2">
                          {day.afternoon.activities.map((activity, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                              <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Evening */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Moon className="w-4 h-4 text-[var(--color-accent)]" />
                          <h4 className="font-semibold text-[var(--text-primary)]">Evening</h4>
                          <span className="text-xs text-[var(--text-muted)]">{day.evening.time}</span>
                        </div>
                        <div className="space-y-2">
                          {day.evening.activities.map((activity, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                              <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          FAQ SECTION
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Frequently Asked Questions About Meknes
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Answers to the most common questions travelers ask about visiting Meknes.
          </p>

          <div className="space-y-4 max-w-3xl">
            {faqItems.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-primary-50)] text-[var(--color-primary)] text-xs font-bold">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed ml-10">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          RELATED PAGES
          ================================================================= */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring Morocco
            </h2>
            <p className="text-[var(--text-secondary)]">
              Discover more destinations and experiences that pair perfectly with a Meknes adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-moroccan p-6 group flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-50)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-100)] transition-colors">
                  <link.icon className="w-5 h-5 text-[var(--color-accent-dark)]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                  {link.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)]">
                  Explore
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          FINAL CTA
          ================================================================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-morocco-medina.webp"
            alt="Bab Mansour gate in Meknes at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
        </div>
        <div className="container-morocco relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <Crown className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Meknes Is Calling
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Behind the mightiest gate in North Africa lies a city built by a sultan who
              dreamed on the scale of empires. His stables held 12,000 horses. His granaries
              could feed an army for years. His ambition rivaled the Sun King of France. Three
              centuries later, the walls still stand, the mausoleum still receives pilgrims,
              and the medina still hums with the rhythms of daily Moroccan life. Discover
              the imperial city that the guidebooks overlook.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-accent btn-lg rounded-full"
              >
                <Compass className="w-5 h-5" />
                Plan Your Meknes Trip
              </Link>
              <Link
                href="/cities"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
              >
                <Globe className="w-5 h-5" />
                Explore All Cities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="zellige-border" />
    </>
  );
}

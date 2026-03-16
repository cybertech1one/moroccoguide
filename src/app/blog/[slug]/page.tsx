import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  ArrowRight,
  Share2,
  BookOpen,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   BLOG POST DATA (shared with /blog page)
   ═══════════════════════════════════════════════════════════════ */

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'ultimate-first-timers-guide-to-marrakech',
    title: "The Ultimate First-Timer's Guide to Marrakech",
    excerpt:
      'Everything you need to know before stepping into the Red City for the first time, from navigating the medina to finding the best riads and avoiding common tourist traps.',
    content:
      'Marrakech can be overwhelming for first-time visitors, but with the right preparation it becomes one of the most rewarding cities on earth. Start your journey at Jemaa el-Fnaa, the pulsating heart of the medina, where snake charmers, storytellers, and food stalls create a sensory overload unlike anywhere else.\n\nThe medina is a labyrinth of narrow alleys, and getting lost is part of the experience. Embrace it. Every wrong turn leads to a hidden courtyard, a craftsman at work, or a quiet fountain. For navigation, download offline maps before you arrive, and remember that most riads have staff who can guide you back.\n\nWhen choosing a riad, look for one inside the medina walls for the most authentic experience. Prices range from budget-friendly guesthouses at 300 MAD per night to luxury palaces exceeding 5,000 MAD. Book directly with the riad for the best rates.\n\nThe souks are organized by trade: leather workers in one quarter, metalworkers in another, spice merchants in a third. Start at the northern end near the Ben Youssef Medersa and work your way south toward Jemaa el-Fnaa. Haggling is expected, and a good rule of thumb is to start at one-third of the asking price.\n\nFor food, skip the tourist restaurants on the main square and venture into the side streets. Look for places where locals eat. Chez Lamine for tangia, Cafe des Epices for a rooftop lunch, and Nomad for modern Moroccan cuisine are all excellent choices.\n\nDo not miss the Bahia Palace, the Saadian Tombs, and the Majorelle Garden. Buy a multi-site pass to save money. The best time to visit the gardens is early morning before the crowds arrive.\n\nTransport around the city is best by foot within the medina. For trips to the new city (Gueliz), use petit taxis with the meter running, or ride-hailing apps. Expect to pay 15-30 MAD for most rides within the city.',
    author: {
      name: 'Leila Benani',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
      bio: 'Marrakech native and former Lonely Planet contributor. Speaks Arabic, French, English, and Amazigh.',
    },
    date: 'March 10, 2026',
    readTime: '12 min read',
    category: 'Destinations',
    tags: ['Marrakech', 'First-Time Visitors', 'City Guide'],
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
    featured: true,
  },
  {
    id: 2,
    slug: '10-hidden-gems-in-fes-medina',
    title: '10 Hidden Gems in Fes Medina That Tourists Miss',
    excerpt:
      'Beyond the tanneries and main thoroughfares lies a secret Fes that most visitors never see. Discover artisan workshops, hidden gardens, and ancient fondouks off the beaten path.',
    content:
      'The Fes medina is the world\'s largest car-free urban zone, and most tourists only scratch the surface. Venture beyond the Chouara Tannery to find centuries-old workshops, peaceful riads, and flavors you won\'t find in any guidebook.\n\n1. **Dar Batha Museum Garden** - A tranquil Andalusian garden hidden behind the museum walls. Most visitors skip it, but the collection of Fassi ceramics and the garden itself are worth an hour of your time.\n\n2. **Fondouk el-Nejjarine** - This beautifully restored 18th-century caravanserai houses a woodworking museum. The rooftop terrace offers one of the best views of the medina.\n\n3. **Ain Azliten Water Wheel** - Deep in the medina, this ancient hydraulic system once powered the city\'s flour mills. It\'s a fascinating piece of medieval engineering hidden in plain sight.\n\n4. **The Merinid Tombs at Sunset** - While tourists crowd the main viewing point, walk further along the hillside for a panoramic view of the entire medina bathed in golden light.\n\n5. **Cafe Clock** - This cultural cafe hosts storytelling nights, calligraphy workshops, and serves the famous camel burger. It\'s a meeting point for locals and travelers alike.\n\n6. **The Blue Gate from Inside** - Everyone photographs Bab Boujloud from outside. Step through and turn around for the equally stunning but rarely photographed green-tiled interior face.\n\n7. **Pottery Quarter of Ain Nokbi** - Watch master potters shape the distinctive blue-and-white Fassi ceramics using techniques unchanged for centuries. You can buy directly from the artisans at workshop prices.\n\n8. **Palais Glaoui** - This crumbling palace was once home to the powerful Glaoui family. It\'s not officially open, but a caretaker may let you peek inside at the faded zellige and carved plaster.\n\n9. **Souk el-Henna** - A quiet square where herbalists sell traditional remedies, henna, and kohl. The atmosphere is completely different from the bustling main souks.\n\n10. **Bou Inania Medersa at Prayer Time** - Visit just before noon prayers to hear the call to prayer echoing off the intricate carved walls. The acoustics are extraordinary.',
    author: {
      name: 'Youssef Amrani',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
      bio: 'Born in Fes, educated in Paris. 15 years in travel journalism covering North Africa and the Mediterranean.',
    },
    date: 'March 5, 2026',
    readTime: '9 min read',
    category: 'Destinations',
    tags: ['Fes', 'Hidden Gems', 'Medina'],
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
    featured: false,
  },
  {
    id: 3,
    slug: 'complete-guide-to-moroccan-street-food',
    title: 'A Complete Guide to Moroccan Street Food',
    excerpt:
      'From sizzling msemen at dawn to steaming bowls of harira at dusk, Moroccan street food is a culinary adventure. Learn what to eat, where to find it, and how to eat like a local.',
    content:
      'Moroccan street food is among the most diverse and flavorful in the world. Every city has its specialties, and eating on the street is not just affordable but often delivers the most authentic flavors in the country.\n\n**Morning Staples:** Start your day like a Moroccan with msemen (layered flatbread), baghrir (spongy semolina pancakes), or harcha (semolina griddle bread). Pair with honey, butter, and a glass of mint tea. Find these at any neighborhood bakery from 6 AM.\n\n**The Midday Classics:** For lunch, look for stalls serving tagine, couscous (traditionally served on Fridays), or tangia (slow-cooked in the embers of a hammam furnace, a Marrakech specialty). Expect to pay 25-50 MAD for a filling meal.\n\n**Essaouira\'s Grilled Sardines:** At the port, fishermen bring in the catch and grill it right on the spot. A plate of sardines with bread and salad costs just 30 MAD.\n\n**Snacks and Sweets:** Chebakia (honey-coated sesame cookies), sfenj (Moroccan doughnuts), and briouats (crispy pastry triangles with meat or cheese) make perfect afternoon snacks.\n\n**Evening at Jemaa el-Fnaa:** The world\'s most famous street food market comes alive at dusk. Stall number 14 is legendary for its harira, and stall 1 for its grilled meats. Look for the stalls with the most locals.\n\n**Safety Tips:** Eat where locals eat, choose stalls with high turnover, and don\'t be afraid to point at what you want if you don\'t speak the language. Morocco\'s street food scene is generally safe and always delicious.',
    author: {
      name: 'Amina El-Ouafi',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150',
      bio: 'Former hotel manager turned tourism advocate. Connects CityGuide with Morocco\'s best local businesses.',
    },
    date: 'February 28, 2026',
    readTime: '10 min read',
    category: 'Food & Culture',
    tags: ['Food', 'Street Food', 'Moroccan Cuisine'],
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=1200&q=80',
    featured: false,
  },
  {
    id: 4,
    slug: 'trekking-atlas-mountains-guide',
    title: 'Trekking the Atlas Mountains: What You Need to Know',
    excerpt:
      'Planning a trek through the High Atlas? From choosing the right season to packing essentials and hiring guides, here is everything you need for an unforgettable mountain adventure.',
    content:
      'The Atlas Mountains offer some of North Africa\'s finest trekking, from day hikes to multi-day expeditions to the summit of Jebel Toubkal, the highest peak in North Africa at 4,167 meters.\n\n**Best Season:** The optimal trekking window is April to June and September to November. Summer can be brutally hot at lower elevations, while winter brings snow above 2,500 meters. Spring rewards trekkers with wildflowers and flowing waterfalls.\n\n**Hiring a Guide:** While not legally required for all treks, a certified mountain guide is highly recommended. Guides cost 400-600 MAD per day and provide local knowledge, safety expertise, and cultural connections. Hire through the Bureau des Guides in Imlil.\n\n**The Toubkal Circuit:** The most popular multi-day trek is the 3-day Toubkal summit circuit. Day 1: Imlil to Toubkal Refuge (3,207m). Day 2: Summit attempt and return to refuge. Day 3: Descend via a different route through Berber villages.\n\n**What to Pack:** Layers are essential as temperatures vary dramatically. Bring a warm jacket, rain shell, sun protection, sturdy hiking boots, water purification, and headlamp. Mules can carry heavy gear for around 150 MAD per day.\n\n**Village Stays:** Sleeping in Berber village gites (guesthouses) is one of the highlights. Simple but comfortable, they include dinner and breakfast for about 200 MAD. The hospitality is legendary.\n\n**Fitness Level:** Day hikes from Imlil suit most fitness levels. The Toubkal summit requires good fitness and proper acclimatization. Altitude sickness is a real risk above 3,500 meters.',
    author: {
      name: 'Driss Tazi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150',
      bio: 'Full-stack engineer from Casablanca. Built tourism platforms for 3 African countries before joining CityGuide.',
    },
    date: 'February 20, 2026',
    readTime: '14 min read',
    category: 'Activities',
    tags: ['Atlas Mountains', 'Trekking', 'Adventure'],
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80',
    featured: false,
  },
  {
    id: 5,
    slug: 'why-chefchaouen-is-more-than-blue-city',
    title: 'Why Chefchaouen is More Than Just a Blue City',
    excerpt:
      'Yes, the blue walls are stunning, but Chefchaouen offers so much more: Rif Mountain hikes, local goat cheese, traditional weavers, and a laid-back vibe that keeps travelers coming back.',
    content:
      'Most visitors come to Chefchaouen for the Instagram photos and leave within a day. That is a mistake. Beyond the blue-washed walls lies a town rich in Andalusian heritage, surrounded by pristine nature, and home to some of Morocco\'s friendliest people.\n\n**The Blue Story:** The blue walls date to the 1930s, when Jewish refugees painted them to symbolize the sky and heaven. Today, residents maintain the tradition, and each shade of blue has been carefully chosen to complement the mountain backdrop.\n\n**Hiking the Rif:** The Talassemtane National Park begins at the edge of town. The God\'s Bridge (Pont de Dieu) hike is a stunning 3-hour trek through forests to a natural rock bridge over a gorge. The Cascades d\'Akchour offer swimming holes and waterfalls.\n\n**Local Cheese:** Chefchaouen is Morocco\'s goat cheese capital. The Jbala mountain cheese, made from raw goat milk, is unlike anything else in the country. Buy it fresh at the Thursday market.\n\n**Weaving Tradition:** The women of Chefchaouen are renowned weavers. Visit the Centre de Tissage to watch artisans create the distinctive red-and-white striped blankets and learn about the craft.\n\n**The Kasbah:** This small fortress in the center of town houses a modest museum and a beautiful garden. The tower provides the best panoramic view of the blue medina against the mountain backdrop.\n\n**Evening Ritual:** As the sun sets, locals and travelers gather at the rooftop cafes in Place Outa el-Hammam. Order a fresh-squeezed avocado smoothie (a local specialty) and watch the mountains turn purple.',
    author: {
      name: 'Leila Benani',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
      bio: 'Marrakech native and former Lonely Planet contributor. Speaks Arabic, French, English, and Amazigh.',
    },
    date: 'February 15, 2026',
    readTime: '8 min read',
    category: 'Destinations',
    tags: ['Chefchaouen', 'Blue City', 'Rif Mountains'],
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=1200&q=80',
    featured: false,
  },
  {
    id: 6,
    slug: 'moroccan-tea-culture',
    title: 'Moroccan Tea Culture: More Than Just Mint Tea',
    excerpt:
      'The ritual of Moroccan tea is a cornerstone of daily life and hospitality. Discover the history, preparation methods, regional variations, and the unwritten rules of Moroccan tea etiquette.',
    content:
      'In Morocco, tea is not just a drink but a symbol of hospitality, friendship, and tradition. Poured from a height to create a frothy top, the sweet mint tea known as "Berber whiskey" is served at every occasion.\n\n**History:** Chinese green tea arrived in Morocco in the 18th century via British traders. The Moroccans added fresh spearmint and generous amounts of sugar, creating a drink that became central to their culture within a generation.\n\n**The Ritual:** Preparing tea is a performance. The host uses gunpowder green tea, fresh mint, and sugar in a silver teapot. The tea is poured from a height into small glasses, then poured back into the pot. This process is repeated three times to aerate the tea and mix the flavors.\n\n**Three Glasses:** The Moroccan proverb says: "The first glass is as gentle as life, the second is as strong as love, the third is as bitter as death." It is customary to drink at least three glasses. Refusing tea is considered impolite.\n\n**Regional Variations:** In the south, wormwood (chiba) replaces or supplements mint. In the Rif mountains, wild herbs like verbena and thyme are common. Some regions add orange blossom water or saffron.\n\n**Modern Tea Culture:** While the traditional ceremony continues at home, Morocco\'s cafe culture has evolved. Urban cafes now serve tea alongside espresso, and a new generation of tea houses experiments with fusion flavors.\n\n**Etiquette:** Always accept tea when offered. Hold the glass by the rim (it is hot). Never pour your own tea if a host is present. Complement the tea enthusiastically.',
    author: {
      name: 'Amina El-Ouafi',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150',
      bio: 'Former hotel manager turned tourism advocate. Connects CityGuide with Morocco\'s best local businesses.',
    },
    date: 'February 8, 2026',
    readTime: '7 min read',
    category: 'Food & Culture',
    tags: ['Tea', 'Culture', 'Traditions'],
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=1200&q=80',
    featured: false,
  },
  {
    id: 7,
    slug: 'navigating-souks-haggling-masterclass',
    title: 'Navigating the Souks: A Haggling Masterclass',
    excerpt:
      'Haggling in Moroccan souks is an art form, not a battle. Learn the unwritten rules, common strategies, fair price ranges, and how to walk away with great deals and new friends.',
    content:
      'The Moroccan souk is a marketplace and a social institution rolled into one. Haggling is expected, enjoyed, and part of the experience.\n\n**Rule #1: It is a Conversation, Not a Fight.** Shopkeepers enjoy the process. Start with pleasantries, accept tea if offered, and take your time. Rushing signals you are an easy target.\n\n**Know Your Prices:** Research fair prices before entering the souks. A leather bag should cost 200-500 MAD, a silk scarf 100-250 MAD, a small carpet 500-2,000 MAD. These ranges help you anchor your negotiation.\n\n**The Opening Move:** The shopkeeper names a price (often 3-5x the fair value). Show polite interest, then counter at about one-third. This starts the dance.\n\n**The Walk-Away:** Your most powerful tool. If negotiations stall, politely thank the vendor and begin to leave. If the price was close to fair, they will call you back with a lower offer.\n\n**Bundling:** Buying multiple items? Negotiate them as a package deal. Vendors prefer moving inventory and will often give significant discounts for multiple purchases.\n\n**When Not to Haggle:** Fixed-price shops (prix fixe) exist and are clearly marked. Cooperatives set fair prices for artisans. Food stalls and bakeries have standard prices. Use these as price benchmarks.\n\n**The Golden Rule:** A fair deal is one where both parties are happy. Do not haggle someone down to a price that feels too low. The extra 20 MAD means more to the artisan than it does to you.',
    author: {
      name: 'Youssef Amrani',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
      bio: 'Born in Fes, educated in Paris. 15 years in travel journalism covering North Africa and the Mediterranean.',
    },
    date: 'February 1, 2026',
    readTime: '11 min read',
    category: 'Tips & Advice',
    tags: ['Shopping', 'Souks', 'Haggling', 'Tips'],
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80',
    featured: false,
  },
  {
    id: 8,
    slug: 'best-sahara-desert-experiences',
    title: 'The Best Sahara Desert Experiences Beyond Camel Rides',
    excerpt:
      'The Sahara offers far more than the classic camel trek. Discover sandboarding, stargazing camps, nomad encounters, fossil hunting, and luxury bivouacs deep in the dunes.',
    content:
      'While a camel ride at sunset is iconic, the Sahara has so much more to offer. From sleeping under a blanket of stars at a luxury desert camp to sandboarding down the dunes of Erg Chebbi, these experiences make a Sahara trip truly unforgettable.\n\n**Luxury Desert Camps:** The era of basic bivouacs is over. Camps like Merzouga Luxury Desert Camp offer en-suite tents with hot showers, Berber carpets, and gourmet dining under the stars. Expect to pay 2,000-5,000 MAD per night.\n\n**Sandboarding:** Erg Chebbi\'s dunes reach 150 meters in height, making them perfect for sandboarding. It\'s like snowboarding on sand, and the views from the top are spectacular. No experience necessary.\n\n**Stargazing:** With zero light pollution, the Sahara offers some of the clearest night skies on Earth. Some camps provide telescopes and astronomy guides. The Milky Way is visible to the naked eye.\n\n**Nomad Encounters:** Saharan nomads still traverse the desert with their camel caravans. Responsible tours include visits to nomad camps where you can share tea, learn about their way of life, and see the desert through their eyes.\n\n**Fossil Hunting:** The Sahara was once an ocean, and fossils of trilobites, ammonites, and even whale bones are scattered across the landscape. Guided fossil tours from Erfoud reveal millions of years of geological history.\n\n**4x4 Desert Rally:** For adrenaline seekers, 4x4 excursions take you deep into the desert, past ancient caravan routes, hidden oases, and rock formations that look like another planet.',
    author: {
      name: 'Driss Tazi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150',
      bio: 'Full-stack engineer from Casablanca. Built tourism platforms for 3 African countries before joining CityGuide.',
    },
    date: 'January 25, 2026',
    readTime: '10 min read',
    category: 'Activities',
    tags: ['Sahara', 'Desert', 'Adventure', 'Merzouga'],
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1200&q=80',
    featured: false,
  },
  {
    id: 9,
    slug: 'essaouira-moroccos-coastal-secret',
    title: "Essaouira: Morocco's Best-Kept Coastal Secret",
    excerpt:
      'Wind-swept ramparts, fresh seafood, a thriving arts scene, and world-class windsurfing make Essaouira the perfect antidote to the intensity of Marrakech, just three hours away.',
    content:
      'Essaouira has long been a haven for artists, musicians, and free spirits. The UNESCO-listed medina is compact and easy to navigate, the seafood is the freshest in Morocco, and the Atlantic breeze provides welcome relief from the inland heat.\n\n**Getting There:** Regular buses and shared grands taxis from Marrakech take about 3 hours. The Supratours bus is comfortable and costs around 80 MAD. Private transfers are available for 800-1,200 MAD.\n\n**The Medina:** Unlike the overwhelming souks of Marrakech or Fes, Essaouira\'s medina is calm and grid-like, laid out by a French architect in the 18th century. The ramparts offer spectacular Atlantic views.\n\n**Seafood:** The port fish market is a daily spectacle. Choose your fish and have it grilled on the spot for 50-100 MAD. For a sit-down experience, Restaurant Le Chalet de la Plage serves the best seafood in town.\n\n**Art & Music:** Essaouira\'s artistic heritage runs deep. Jimi Hendrix visited in 1969, and the annual Gnaoua World Music Festival draws 500,000+ visitors each June. Galleries dot the medina year-round.\n\n**Wind Sports:** The Alize trade winds make Essaouira one of Africa\'s premier windsurfing and kitesurfing destinations. The best season is April to November, with rental shops and schools along the beach.\n\n**Day Trips:** The surrounding countryside offers argan forest walks, visits to women\'s cooperatives, and the ruins of the Sultan\'s palace at Diabat, where Hendrix allegedly found inspiration.',
    author: {
      name: 'Leila Benani',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
      bio: 'Marrakech native and former Lonely Planet contributor. Speaks Arabic, French, English, and Amazigh.',
    },
    date: 'January 18, 2026',
    readTime: '9 min read',
    category: 'Destinations',
    tags: ['Essaouira', 'Beach', 'Coastal', 'Arts'],
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
    featured: false,
  },
  {
    id: 10,
    slug: 'moroccan-architecture-riads-to-kasbahs',
    title: 'Understanding Moroccan Architecture: From Riads to Kasbahs',
    excerpt:
      'Zellige tilework, carved stucco, cedar wood ceilings, and hidden courtyards: a deep dive into the architectural traditions that make Moroccan buildings some of the most beautiful in the world.',
    content:
      'Moroccan architecture is a stunning fusion of Amazigh, Arab, Andalusian, and French influences. Every building tells a story of craftsmanship passed down through generations.\n\n**The Riad:** A riad is a traditional house built around an interior courtyard garden. The word comes from the Arabic "ryad" meaning garden. The exterior walls are plain, revealing nothing of the paradise within, reflecting Islamic values of privacy and modesty.\n\n**Zellige Tilework:** These hand-cut geometric tiles are Morocco\'s most recognizable decorative art. Made from clay, glazed in vivid colors, and hand-chipped into precise geometric shapes, each zellige installation contains thousands of individual pieces.\n\n**Carved Stucco:** Known as "gebs," carved plaster decoration adorns walls and arches with intricate floral and geometric patterns. The craft requires years of apprenticeship, and master carvers are among Morocco\'s most respected artisans.\n\n**Cedar Woodwork:** The painted cedar ceilings of Fes and Marrakech are masterpieces of Islamic decorative art. The muqarnas (honeycomb vaulting) technique creates three-dimensional geometric patterns that seem to defy gravity.\n\n**The Kasbah:** Fortified citadels of packed earth and stone, kasbahs dot the southern landscapes. Ait Benhaddou is the most famous, a UNESCO site that has served as a backdrop for films from Gladiator to Game of Thrones.\n\n**French Colonial:** The villes nouvelles (new cities) built during the French Protectorate introduced Art Deco architecture, creating a fascinating contrast with the ancient medinas. Casablanca has the finest collection of Art Deco buildings in Africa.',
    author: {
      name: 'Youssef Amrani',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
      bio: 'Born in Fes, educated in Paris. 15 years in travel journalism covering North Africa and the Mediterranean.',
    },
    date: 'January 12, 2026',
    readTime: '13 min read',
    category: 'History',
    tags: ['Architecture', 'Riads', 'Kasbahs', 'Design'],
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80',
    featured: false,
  },
  {
    id: 11,
    slug: 'ramadan-in-morocco-travelers-guide',
    title: "Ramadan in Morocco: A Traveler's Guide",
    excerpt:
      'Traveling during Ramadan can be one of the most rewarding cultural experiences in Morocco. Learn what to expect, how to be respectful, and why Iftar is the meal of a lifetime.',
    content:
      'Ramadan transforms Morocco in beautiful ways. While some restaurants close during the day, the evenings come alive with communal Iftar meals, festive markets, and a spirit of generosity.\n\n**What Changes:** During Ramadan, most Moroccans fast from dawn to sunset. Many restaurants close during the day (tourist-oriented ones usually stay open). Alcohol is not served. Public life slows down, especially in the afternoon.\n\n**Iftar:** The evening meal that breaks the fast is magical. Streets come alive as families gather, and the call to prayer signals that eating can begin. Traditional Iftar foods include harira soup, dates, chebakia cookies, and eggs.\n\n**Being Respectful:** While non-Muslims are not expected to fast, eating, drinking, and smoking in public during daylight hours is considered disrespectful. Eat in private or in tourist restaurants that remain open.\n\n**Nighttime Energy:** After Iftar, Moroccan cities pulse with energy late into the night. Markets stay open until midnight, families stroll the streets, and a festive atmosphere pervades. It is one of the most social times of year.\n\n**Eid al-Fitr:** The celebration marking the end of Ramadan is a joyous occasion. Families feast, children receive gifts, and the streets are decorated. If you are in Morocco for Eid, you will likely be invited to join celebrations.\n\n**Practical Tips:** Book accommodations in advance (domestic travel increases). Adjust your schedule to be active in the morning and evening. Carry water and snacks for daytime. Be extra patient, as fasting people may be tired.',
    author: {
      name: 'Amina El-Ouafi',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150',
      bio: 'Former hotel manager turned tourism advocate. Connects CityGuide with Morocco\'s best local businesses.',
    },
    date: 'January 5, 2026',
    readTime: '8 min read',
    category: 'Tips & Advice',
    tags: ['Ramadan', 'Culture', 'Travel Tips', 'Religion'],
    image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=1200&q=80',
    featured: false,
  },
  {
    id: 12,
    slug: 'road-tripping-morocco-ultimate-route',
    title: 'Road Tripping Morocco: The Ultimate Route Guide',
    excerpt:
      'From the Mediterranean coast to the Sahara and back, this 2-week road trip itinerary covers Morocco\'s greatest hits with detours to secret spots only locals know about.',
    content:
      'Morocco is a road tripper\'s dream, with well-maintained highways connecting dramatically different landscapes. This route takes you from Tangier through the Rif, across the Middle Atlas, down to the desert, and back along the Atlantic coast.\n\n**Day 1-2: Tangier to Chefchaouen** - Start in cosmopolitan Tangier, explore the kasbah and Cafe Hafa, then drive 2 hours to the blue city of Chefchaouen. Spend a day hiking and photographing.\n\n**Day 3-4: Chefchaouen to Fes** - Drive through the rolling Rif Mountains to the ancient imperial city of Fes. Two days is the minimum to explore the world\'s largest medina.\n\n**Day 5: Fes to Midelt** - Cross the Middle Atlas through cedar forests where Barbary macaques play in the trees. Stop in Ifrane, the "Switzerland of Morocco." Overnight in Midelt.\n\n**Day 6-7: Midelt to Merzouga** - Drive through the dramatic Ziz Gorge, past the fossil beds of Erfoud, to the golden dunes of Erg Chebbi. Overnight in a desert camp.\n\n**Day 8: Merzouga to Dades Valley** - The "Road of a Thousand Kasbahs" begins. Stop at Todra Gorge for a walk between 300-meter canyon walls.\n\n**Day 9-10: Dades to Ouarzazate** - Visit Ait Benhaddou (the Game of Thrones kasbah) and the Atlas Film Studios. Ouarzazate is the Hollywood of Africa.\n\n**Day 11-12: Ouarzazate to Marrakech** - Cross the High Atlas via the Tizi n\'Tichka pass (2,260 meters). Arrive in Marrakech for two days of souks, palaces, and gardens.\n\n**Day 13-14: Marrakech to Essaouira** - End your trip on the Atlantic coast. Fresh seafood, art galleries, and wind-swept beaches provide the perfect conclusion.',
    author: {
      name: 'Driss Tazi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150',
      bio: 'Full-stack engineer from Casablanca. Built tourism platforms for 3 African countries before joining CityGuide.',
    },
    date: 'December 28, 2025',
    readTime: '15 min read',
    category: 'Tips & Advice',
    tags: ['Road Trip', 'Itinerary', 'Driving', 'Route'],
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=1200&q=80',
    featured: false,
  },
  {
    id: 13,
    slug: 'moroccan-hammam-etiquette',
    title: 'Moroccan Hammam Etiquette: Everything You Should Know',
    excerpt:
      'The hammam is central to Moroccan life, but stepping into one for the first time can be daunting. Here is your complete guide to what to bring, what to expect, and how to relax.',
    content:
      'A visit to a traditional hammam is one of the most authentic experiences in Morocco. Whether you choose a local neighborhood bathhouse or a luxury spa version, understanding the etiquette ensures you relax and enjoy every steamy minute.\n\n**What is a Hammam?** A hammam is a public steam bath, central to Moroccan hygiene and social life for centuries. Think of it as a communal sauna combined with a deep exfoliation treatment.\n\n**What to Bring:** A kiis (exfoliating glove), savon beldi (black olive soap), a change of underwear, flip-flops, and a towel. Most hammams sell these if you forget.\n\n**The Process:** You enter the cool room first, then move to progressively hotter rooms. After sweating for 15-20 minutes, apply black soap and wait 10 minutes. Then scrub vigorously with the kiis. The amount of dead skin that comes off is always impressive.\n\n**Modesty:** In local hammams, men and women have separate sessions or separate facilities. Men typically wear underwear or shorts. Women wear underwear on the bottom. Complete nudity is not the norm.\n\n**Local vs. Tourist Hammam:** A neighborhood hammam costs 10-20 MAD and offers the authentic experience but no frills. Tourist hammams (200-600 MAD) provide private rooms, argan oil massages, and rhassoul clay masks.\n\n**Social Aspect:** The hammam is a social gathering place. Moroccans go weekly, often with family or friends. Conversations flow freely. Even without the language, the shared experience creates a universal connection.\n\n**After Care:** After the hammam, rest in the cool room, drink water, and enjoy mint tea. Your skin will feel incredibly soft. Apply argan oil to lock in moisture.',
    author: {
      name: 'Leila Benani',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
      bio: 'Marrakech native and former Lonely Planet contributor. Speaks Arabic, French, English, and Amazigh.',
    },
    date: 'December 20, 2025',
    readTime: '7 min read',
    category: 'Local Life',
    tags: ['Hammam', 'Wellness', 'Etiquette', 'Spa'],
    image: 'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=1200&q=80',
    featured: false,
  },
  {
    id: 14,
    slug: 'budget-travel-morocco',
    title: 'Budget Travel in Morocco: How to See It All for Less',
    excerpt:
      'Morocco is one of the best-value destinations in the world. Learn how to travel the country on 30-50 USD per day without missing any of the highlights.',
    content:
      'From budget riads and street food feasts to shared grands taxis and free attractions, Morocco rewards the budget-conscious traveler.\n\n**Accommodation (80-200 MAD/night):** Budget riads and hostels in the medina offer clean rooms with character. Dorm beds start at 80 MAD, private rooms at 150 MAD. Look for places with rooftop terraces and included breakfast.\n\n**Food (50-100 MAD/day):** Street food is king for budget travelers. A full breakfast costs 15-25 MAD, lunch from a street stall 25-40 MAD, and a sit-down dinner 40-80 MAD. Tajine at a local restaurant costs 35-50 MAD.\n\n**Transport (Budget Tips):** Shared grands taxis are the cheapest intercity option. CTM and Supratours buses are comfortable and affordable. Trains connect major cities for 50-150 MAD. Avoid petit taxis that refuse to use meters.\n\n**Free Things to Do:** Walking the medinas costs nothing. Many mosques have free exteriors worth admiring. Parks and gardens (like Menara Gardens in Marrakech) are free. The Jemaa el-Fnaa show is free every evening.\n\n**Money-Saving Tips:** Visit museums on free days. Eat where locals eat. Buy water in 5-liter bottles. Use free walking tours (tip-based). Travel in shoulder season for lower prices.\n\n**Daily Budget Breakdown:** Accommodation 150 MAD + Food 80 MAD + Transport 30 MAD + Activities 50 MAD = 310 MAD (roughly 30 USD) for a comfortable budget day in Morocco.',
    author: {
      name: 'Youssef Amrani',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
      bio: 'Born in Fes, educated in Paris. 15 years in travel journalism covering North Africa and the Mediterranean.',
    },
    date: 'December 14, 2025',
    readTime: '11 min read',
    category: 'Tips & Advice',
    tags: ['Budget', 'Money', 'Backpacking', 'Tips'],
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
    featured: false,
  },
  {
    id: 15,
    slug: 'imperial-cities-royal-past',
    title: "The Imperial Cities: A Journey Through Morocco's Royal Past",
    excerpt:
      'Fes, Marrakech, Meknes, and Rabat: the four imperial cities each served as Morocco\'s capital and each offers a unique window into the kingdom\'s rich dynastic history.',
    content:
      'Morocco\'s four imperial cities were shaped by powerful dynasties that left behind stunning palaces, medersas, and medinas. Tracing the path from Fes to Rabat is a journey through a thousand years of history.\n\n**Fes (Founded 789 AD):** The oldest imperial city, founded by Idris I. The Fes el-Bali medina is the world\'s largest contiguous car-free urban area. Must-see: Al-Qarawiyyin, the oldest operating university in the world.\n\n**Marrakech (Founded 1062):** Built by the Almoravids as their capital. The Red City\'s medina, gardens, and palaces reflect centuries of Berber, Arab, and Andalusian influence. Must-see: Koutoubia Mosque and Bahia Palace.\n\n**Meknes (Capital 1672-1727):** Sultan Moulay Ismail transformed Meknes into a rival to Versailles. His massive granaries, stables for 12,000 horses, and 25 km of walls still impress. Must-see: Bab el-Mansour, Morocco\'s most spectacular gate.\n\n**Rabat (Capital since 1912):** The current capital blends ancient ruins with modern governance. The Chellah necropolis, Hassan Tower, and the stunning Mohammed V Mausoleum showcase Morocco\'s layered history.\n\n**Connecting the Dots:** A week-long circuit connecting all four cities is one of Morocco\'s classic itineraries. Trains connect Marrakech, Rabat, Meknes, and Fes on a modern high-speed network.',
    author: {
      name: 'Youssef Amrani',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
      bio: 'Born in Fes, educated in Paris. 15 years in travel journalism covering North Africa and the Mediterranean.',
    },
    date: 'December 7, 2025',
    readTime: '14 min read',
    category: 'History',
    tags: ['Imperial Cities', 'Fes', 'Marrakech', 'Meknes', 'Rabat'],
    image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=1200&q=80',
    featured: false,
  },
  {
    id: 16,
    slug: 'surfing-morocco-taghazout-to-dakhla',
    title: 'Surfing Morocco: From Taghazout to Dakhla',
    excerpt:
      'With consistent Atlantic swells, warm water, and affordable surf camps, Morocco has become one of the world\'s top surfing destinations. Here are the best breaks for every level.',
    content:
      'Morocco\'s 3,500 km coastline offers world-class surf from the mellow beach breaks of Taghazout to the legendary point breaks of Dakhla.\n\n**Taghazout:** The epicenter of Moroccan surf culture, this laid-back fishing village 20 km north of Agadir is surrounded by world-class breaks. Anchor Point is the crown jewel, a long right-hand point break that works best in winter.\n\n**Surf Camps:** Dozens of surf camps cater to all levels. Budget options start at 300 MAD/night including lessons, board rental, and accommodation. Premium camps offer yoga, healthy meals, and photography.\n\n**Imsouane:** Home to one of the longest right-hand waves in Africa, this quiet fishing village is rapidly gaining popularity. The bay break is perfect for longboarders and beginners.\n\n**Essaouira:** Known as the "Wind City of Africa," Essaouira is better for windsurfing and kitesurfing, but Moulay Bouzerktoun to the north has excellent waves.\n\n**Dakhla:** This remote peninsula in the Saharan south offers flat-water lagoon conditions for kitesurfing and powerful ocean breaks for advanced surfers. Year-round trade winds make it a world-class destination.\n\n**Best Season:** The best surf season is September to April, when consistent Atlantic swells bring waves of 3-12 feet. Summer is smaller but still surfable, especially for beginners.\n\n**Practical Tips:** Water temperatures range from 16-22 degrees Celsius. A 3/2 wetsuit is recommended October-May. Board rentals cost 100-200 MAD/day. Local surf guides know the hidden spots.',
    author: {
      name: 'Driss Tazi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150',
      bio: 'Full-stack engineer from Casablanca. Built tourism platforms for 3 African countries before joining CityGuide.',
    },
    date: 'November 30, 2025',
    readTime: '10 min read',
    category: 'Activities',
    tags: ['Surfing', 'Taghazout', 'Dakhla', 'Beach'],
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=1200&q=80',
    featured: false,
  },
  {
    id: 17,
    slug: 'moroccan-wedding-traditions',
    title: 'Moroccan Wedding Traditions and Celebrations',
    excerpt:
      'Moroccan weddings are multi-day celebrations filled with music, feasting, and centuries-old rituals. Discover the meaning behind the henna night, the amariya, and the seven dresses.',
    content:
      'A Moroccan wedding is a feast for all senses, often lasting three days or more. Every tradition carries deep cultural significance and brings communities together.\n\n**The Hammam Day:** Before the wedding, the bride visits the hammam with her female friends and family. It is a ritual purification and a celebration of femininity, complete with singing and traditional beauty treatments.\n\n**Henna Night:** The night before the wedding, a professional henna artist (neggafa) applies intricate designs to the bride\'s hands and feet. The darker the henna, the more the groom loves the bride, according to tradition.\n\n**The Amariya:** The bride is carried into the wedding reception on an ornate palanquin (amariya) on the shoulders of four men. It is one of the most dramatic and photographed moments of any Moroccan wedding.\n\n**Seven Dresses:** The bride changes outfits up to seven times during the celebration, each representing a different region of Morocco. From a Fassi kaftan to a Saharan melfa, each dress showcases the country\'s cultural diversity.\n\n**The Music:** Moroccan weddings feature a dizzying variety of music, from traditional Andalusian orchestras to chaabi bands, Gnaoua rhythms, and modern DJs. Dancing continues until dawn.\n\n**The Food:** A Moroccan wedding feast typically includes whole roasted lamb, multiple tagines, bastilla (sweet-savory pigeon pie), couscous with seven vegetables, and trays of Moroccan pastries. Feeding guests generously is a point of family pride.',
    author: {
      name: 'Amina El-Ouafi',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150',
      bio: 'Former hotel manager turned tourism advocate. Connects CityGuide with Morocco\'s best local businesses.',
    },
    date: 'November 22, 2025',
    readTime: '9 min read',
    category: 'Local Life',
    tags: ['Weddings', 'Traditions', 'Culture', 'Celebrations'],
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=1200&q=80',
    featured: false,
  },
  {
    id: 18,
    slug: 'photographers-guide-instagrammable-morocco',
    title: "A Photographer's Guide to Morocco's Most Instagrammable Spots",
    excerpt:
      'Golden hour in the Sahara, blue alleyways in Chefchaouen, and the chaos of Jemaa el-Fnaa at night: the best locations, timing, and tips for capturing Morocco at its most photogenic.',
    content:
      'Morocco is a photographer\'s paradise, offering incredible diversity of colors, textures, and light. This guide covers the most photogenic locations with practical tips for getting the best shots.\n\n**Chefchaouen:** The blue medina is best photographed in early morning (7-9 AM) when the light is soft and the streets are empty. The narrowest alleys between the main square and the kasbah have the most intense blue.\n\n**Sahara Dunes:** Sunrise is the magic hour. Wake before dawn and climb a dune to capture the first golden light hitting the sand ripples. The shadows create dramatic patterns that disappear by mid-morning.\n\n**Jemaa el-Fnaa:** Photograph from the Cafe de France terrace at dusk when the food stall smoke creates an atmospheric haze. Use a slow shutter speed to blur the crowds while keeping the stalls sharp.\n\n**Fes Tanneries:** The leather tanneries of Fes are iconic. Visit in the morning when the light fills the circular dye vats. Leather shop terraces offer the best elevated views. Expect to buy something as a thank-you for access.\n\n**Ben Youssef Medersa:** The symmetrical courtyard is one of the most photographed spots in Morocco. Arrive right at opening (9 AM) for the best chance of an empty frame. A wide-angle lens is essential.\n\n**Essaouira Port:** Blue fishing boats against white-washed walls create the classic Morocco coastal shot. Golden hour light in the evening is perfect. Don\'t miss the seagulls diving for fish scraps.\n\n**Photography Etiquette:** Always ask before photographing people. Many Moroccans do not want their photo taken. A smile and "mumkin tsawwer?" (may I photograph?) goes a long way. Some people may ask for a small tip.',
    author: {
      name: 'Leila Benani',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
      bio: 'Marrakech native and former Lonely Planet contributor. Speaks Arabic, French, English, and Amazigh.',
    },
    date: 'November 15, 2025',
    readTime: '12 min read',
    category: 'Tips & Advice',
    tags: ['Photography', 'Instagram', 'Tips', 'Visual Guide'],
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=1200&q=80',
    featured: false,
  },
  {
    id: 19,
    slug: 'berber-culture-original-moroccans',
    title: 'Berber Culture: Meeting the Original Moroccans',
    excerpt:
      'The Amazigh people have inhabited North Africa for thousands of years. Learn about their language, customs, hospitality traditions, and how to visit Berber villages respectfully.',
    content:
      'The Amazigh, commonly known as Berbers, are the indigenous people of North Africa with a culture predating the Arab conquest by millennia. Today, their traditions remain a vital part of Morocco\'s cultural fabric.\n\n**Who are the Amazigh?** The Amazigh (meaning "free people") are the original inhabitants of North Africa. They have their own language (Tamazight, now an official language of Morocco), alphabet (Tifinagh), and rich cultural traditions distinct from Arab Moroccan culture.\n\n**Language:** Tamazight has three main dialects in Morocco: Tarifit (Rif), Tamazight (Middle Atlas), and Tashelhit (High Atlas and Souss). Since 2011, Amazigh has been an official language alongside Arabic.\n\n**Village Life:** Berber villages cling to mountain slopes in the Atlas and Rif ranges. Life revolves around agriculture, livestock, and community. Hospitality is a sacred value, and visitors are often invited for tea and meals.\n\n**Visiting Respectfully:** Hire a local guide who knows the community. Ask permission before taking photos. Dress modestly. Accept tea when offered. Support the local economy by buying directly from artisans.\n\n**Festivals:** The Imilchil Marriage Festival is the most famous Amazigh celebration, where young men and women from surrounding tribes gather to choose their partners. Other festivals celebrate the harvest, the new year (Yennayer), and seasonal changes.\n\n**Crafts:** Amazigh women are renowned for their weaving, producing carpets, blankets, and textiles with symbolic geometric patterns. Each region has its own distinctive style, colors, and motifs that tell stories of the weaver\'s life.',
    author: {
      name: 'Youssef Amrani',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
      bio: 'Born in Fes, educated in Paris. 15 years in travel journalism covering North Africa and the Mediterranean.',
    },
    date: 'November 8, 2025',
    readTime: '11 min read',
    category: 'Local Life',
    tags: ['Berber', 'Amazigh', 'Culture', 'Villages'],
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1200&q=80',
    featured: false,
  },
  {
    id: 20,
    slug: 'morocco-best-markets-region-guide',
    title: "Morocco's Best Markets: A Region-by-Region Guide",
    excerpt:
      'Every Moroccan city has its own market personality. From the sprawling souks of Marrakech to the weekly rural souqs of the Atlas, this guide maps out the best markets in every region.',
    content:
      'Markets are the beating heart of Moroccan commerce and culture. Each region has its specialties, and this guide helps you find the best markets wherever you travel.\n\n**Marrakech Souks:** The largest traditional market in Morocco, organized by trade. Spice souk for saffron and ras el hanout, leather souk for bags and babouches, carpet souk for Berber rugs. Open daily, most active in the morning.\n\n**Fes el-Bali:** The medina itself is one vast market. Highlights include the honey souk, the fabric souk, and the Souk el-Henna for traditional beauty products. Less tourist-oriented than Marrakech, offering better prices.\n\n**Chefchaouen Thursday Market:** The weekly souk where Rif Mountain farmers bring fresh produce, goat cheese, and handwoven textiles. Arrive early for the best selection.\n\n**Rissani Market:** The gateway to the Sahara has a massive weekly market (Tuesday, Thursday, Sunday) where desert nomads trade alongside settled farmers. Camels, dates, and fossils are the specialties.\n\n**Essaouira Fish Market:** Daily auction at the port where the catch comes straight from the boats. Buy fish and have it grilled on the spot. Arrive before 2 PM for the best selection.\n\n**Safi Pottery Market:** Morocco\'s pottery capital has a dedicated market and workshops where you can buy directly from artisans. The distinctive blue-and-white Safi ceramics make perfect souvenirs.\n\n**Taliouine Saffron Souk:** The saffron capital of Morocco. Buy the world\'s most expensive spice directly from growers at a fraction of international prices. Harvest season (October-November) is the best time to visit.\n\n**Taroudant:** Known as "Little Marrakech," this walled city has excellent souks with far fewer tourists. Berber jewelry, argan products, and leather goods are the specialties.',
    author: {
      name: 'Amina El-Ouafi',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150',
      bio: 'Former hotel manager turned tourism advocate. Connects CityGuide with Morocco\'s best local businesses.',
    },
    date: 'November 1, 2025',
    readTime: '13 min read',
    category: 'Food & Culture',
    tags: ['Markets', 'Souks', 'Shopping', 'Regions'],
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80',
    featured: false,
  },
];

/* ═══════════════════════════════════════════════════════════════
   STATIC PARAMS — Generate all 20 blog post slugs at build time
   ═══════════════════════════════════════════════════════════════ */

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

/* ═══════════════════════════════════════════════════════════════
   DYNAMIC METADATA
   ═══════════════════════════════════════════════════════════════ */

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://citytoursmorocco.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: { canonical: `https://citytoursmorocco.com/blog/${post.slug}` },
  };
}

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

function JsonLd({ post }: { post: BlogPost }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://citytoursmorocco.com/blog/${post.slug}`,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CityGuide',
      url: 'https://citytoursmorocco.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://citytoursmorocco.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://citytoursmorocco.com/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   HELPER — category tag styles
   ═══════════════════════════════════════════════════════════════ */

function getCategoryTagClass(category: string): string {
  switch (category) {
    case 'Destinations':
      return 'tag tag-primary';
    case 'Food & Culture':
      return 'tag tag-accent';
    case 'Tips & Advice':
      return 'tag tag-secondary';
    case 'Activities':
      return 'tag tag-primary';
    case 'History':
      return 'tag tag-secondary';
    case 'Local Life':
      return 'tag tag-accent';
    default:
      return 'tag tag-primary';
  }
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="container-morocco py-20 text-center">
        <h1 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
          Post Not Found
        </h1>
        <p className="text-[var(--text-secondary)] mb-8">
          The blog post you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  /* Related posts — same category, excluding current */
  const related = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  /* Prev / Next navigation */
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  /* Split content into paragraphs */
  const paragraphs = post.content.split('\n\n');

  return (
    <>
      <JsonLd post={post} />

      {/* ── Hero / Header Image ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium line-clamp-1">
              {post.title}
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className={getCategoryTagClass(post.category)}>
              {post.category}
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author + Meta */}
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
              />
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Article Body ── */}
      <article className="py-12 md:py-16">
        <div className="container-morocco max-w-3xl">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-secondary)]"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="prose-moroccan space-y-6">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg text-[var(--text-secondary)] leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: paragraph
                    .replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-[var(--text-primary)] font-semibold">$1</strong>'
                    ),
                }}
              />
            ))}
          </div>

          {/* Author Bio */}
          <div className="card-moroccan p-6 md:p-8 mt-12 flex flex-col sm:flex-row gap-4 items-start">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="text-sm text-[var(--text-muted)] mb-1">
                Written by
              </p>
              <h3 className="font-bold text-lg text-[var(--text-primary)]">
                {post.author.name}
              </h3>
              <p className="text-[var(--text-secondary)] mt-1 leading-relaxed">
                {post.author.bio}
              </p>
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center gap-3 mt-8 pt-8 border-t border-[var(--border)]">
            <Share2 className="w-4 h-4 text-[var(--text-muted)]" />
            <span className="text-sm text-[var(--text-muted)]">
              Share this article
            </span>
          </div>

          {/* Prev / Next Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="card-moroccan p-5 group hover:border-[var(--color-primary)] transition-colors"
              >
                <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Previous
                </span>
                <p className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors mt-1 line-clamp-2">
                  {prevPost.title}
                </p>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="card-moroccan p-5 group hover:border-[var(--color-primary)] transition-colors sm:text-right sm:ml-auto"
              >
                <span className="text-xs text-[var(--text-muted)] flex items-center gap-1 sm:justify-end">
                  Next <ArrowRight className="w-3 h-3" />
                </span>
                <p className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors mt-1 line-clamp-2">
                  {nextPost.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <section className="py-12 md:py-16 bg-[var(--surface-muted)] moroccan-pattern">
          <div className="container-morocco">
            <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-8">
              More in {post.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.slug}`}
                  className="card-moroccan group overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors leading-snug mb-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2 flex-1">
                      {r.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mt-4 pt-3 border-t border-[var(--border)]">
                      <Calendar className="w-3 h-3" />
                      {r.date}
                      <span className="mx-1">|</span>
                      <Clock className="w-3 h-3" />
                      {r.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Back to Blog CTA ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco text-center">
          <BookOpen className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4" />
          <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
            Explore More Articles
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto mb-6">
            Discover more travel tips, destination guides, and cultural insights
            from our team of Morocco experts.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Blog Posts
          </Link>
        </div>
      </section>
    </>
  );
}

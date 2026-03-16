import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Landmark,
  Star,
  Clock,
  MapPin,
  Camera,
  ArrowRight,
  Shield,
  Compass,
  Users,
  ShoppingBag,
  Sun,
  Utensils,
  Bed,
  Footprints,
  Palette,
  BookOpen,
  Ticket,
  CircleDollarSign,
  CalendarDays,
  Mountain,
  Moon,
  Map,
  Bus,
  Info,
  Lightbulb,
  GraduationCap,
  Gem,
  Coffee,
  Wine,
  Scissors,
  Eye,
  Heart,
  Navigation,
  Building,
  TreePine,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title:
    'Fes City Guide 2025 | The Ultimate Guide to Morocco\'s Cultural Capital',
  description:
    'The definitive Fes travel guide. Explore Fes el-Bali medina, Chouara Tannery, Bou Inania Medersa, Al-Qarawiyyin University, artisan workshops, Fassi cuisine, riads, souks, day trips, and a complete 2-day itinerary.',
  keywords: [
    'Fes travel guide',
    'Fes el-Bali medina',
    'Chouara Tannery Fes',
    'Bou Inania Medersa',
    'Al-Qarawiyyin University',
    'Fes Morocco guide',
    'things to do in Fes',
    'Fes food guide',
    'Fes riads',
    'Fes artisan workshops',
    'Fes souks shopping',
    'Fassi cuisine',
    'Fes day trips',
    'Fes budget guide',
    'Fes itinerary',
    'Fes neighborhoods',
    'Dar Batha Museum',
    'Royal Palace Fes',
    'Fes Mellah Jewish Quarter',
    'Fes zellige pottery',
  ],
  openGraph: {
    title: 'Fes City Guide - The Ultimate Guide to Morocco\'s Cultural Capital',
    description:
      'Everything you need to know about Fes: the world\'s largest car-free medina, 1,200-year-old university, legendary tanneries, artisan workshops, and sublime Fassi cuisine.',
    url: 'https://citytoursmorocco.com/fes-guide',
    type: 'website',
    images: [
      {
        url: '/images/hero-fes-tanneries.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the Chouara Tannery vats in Fes el-Bali medina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fes City Guide 2025 | Morocco\'s Cultural & Spiritual Capital',
    description:
      'Complete guide to Fes: medina, tanneries, medersas, artisan workshops, Fassi food, riads, souks, day trips, and a 2-day itinerary.',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/fes-guide',
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': 'https://citytoursmorocco.com/fes-guide',
  name: 'Fes City Guide - The Ultimate Guide to Morocco\'s Cultural Capital',
  description:
    'Comprehensive travel guide to Fes, Morocco covering the medina, tanneries, medersas, artisan workshops, Fassi cuisine, accommodations, shopping, day trips, and detailed itineraries.',
  url: 'https://citytoursmorocco.com/fes-guide',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'City',
    name: 'Fes',
    alternateName: 'Fez',
    country: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://citytoursmorocco.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Fes Guide',
        item: 'https://citytoursmorocco.com/fes-guide',
      },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   TOP ATTRACTIONS DATA
   ═══════════════════════════════════════════════════════════════ */

const topAttractions = [
  {
    name: 'Chouara Tannery',
    image: '/images/photo-fes-medina-alley.webp',
    description:
      'The oldest and most iconic of Fes\'s three medieval tanneries, operating continuously since the 11th century. Hundreds of stone vats filled with natural dyes &mdash; saffron for yellow, indigo for blue, poppy for red, mint for green, and the infamous pigeon-dung mixture for softening &mdash; create a surreal mosaic of color visible from the surrounding leather shops above. Workers still use the exact same techniques their ancestors perfected a thousand years ago, standing knee-deep in the vats, treading hides by foot under the open sky.',
    fee: 'Free (access via leather shops; a small tip of 10-20 MAD to the shop guide is customary)',
    hours: 'Best viewed 9:00 AM - 3:00 PM when dye vats are most active',
    tip: 'Take the mint sprig offered at the entrance &mdash; you will need it. The smell of pigeon dung and tanning chemicals is overwhelming. Morning light produces the best photographs from the terraces above.',
    rating: 4.7,
  },
  {
    name: 'Bou Inania Medersa',
    image: '/images/photo-fes-medina-alley.webp',
    description:
      'A masterpiece of Marinid architecture completed in 1357 by Sultan Abu Inan Faris, this theological college is widely regarded as the finest medersa in Morocco. Every surface is a canvas of staggering craftsmanship: intricately carved stucco arabesques, geometric zellige tilework in dozens of colors, and dark cedar wood carved into lace-like muqarnas. It is the only medersa in Fes with its own minaret and a unique 13th-century hydraulic clock (clepsydra) that once marked the hours of prayer.',
    fee: '30 MAD',
    hours: '9:00 AM - 5:00 PM daily (closed during Friday prayers)',
    tip: 'Visit early morning when shafts of light illuminate the central courtyard. Look up at the cedar wood gallery on the upper level &mdash; the carving becomes more intricate the higher you look, a metaphor for ascending toward the divine.',
    rating: 4.8,
  },
  {
    name: 'Al-Attarine Medersa',
    image: '/images/photo-fes-medina-alley.webp',
    description:
      'Built in 1325 by the Marinid sultan Abu Said, this compact but exquisitely decorated theological school sits adjacent to the Al-Qarawiyyin Mosque. The intimate courtyard, barely ten meters across, contains some of the most refined zellige, carved plaster, and cedar woodwork in all of Morocco. The central marble fountain, the proportions of the arches, and the play of shadow and light create a space of profound serenity that rewards slow, careful observation.',
    fee: '20 MAD',
    hours: '9:00 AM - 5:00 PM daily',
    tip: 'Stand in the center of the courtyard and look straight up through the mashrabiya screens to the sky. The designers intended this framed view of heaven as a meditation on the divine. This is one of the most photographed compositions in Fes.',
    rating: 4.7,
  },
  {
    name: 'Al-Qarawiyyin Mosque & University',
    image: '/images/photo-fes-medina-alley.webp',
    description:
      'Founded in 859 AD by Fatima al-Fihri, a wealthy Tunisian refugee, Al-Qarawiyyin is recognized by UNESCO and the Guinness Book of World Records as the oldest continuously operating educational institution in the world. The mosque can hold 20,000 worshippers and its library, recently restored, contains priceless manuscripts including a 9th-century Quran written on camel skin. The institution predates both the University of Bologna (1088) and Oxford (1096) by over two centuries.',
    fee: 'Non-Muslims may not enter (exterior and courtyard views from adjacent medersas)',
    hours: 'Exterior viewable during daylight hours',
    tip: 'The best views of the mosque interior are from the Al-Attarine Medersa rooftop and from Terrasse des Tanneurs. The recently restored Al-Qarawiyyin Library occasionally opens for guided visits &mdash; inquire at the tourist office.',
    rating: 4.9,
  },
  {
    name: 'Dar Batha Museum',
    image: '/images/photo-fes-medina-alley.webp',
    description:
      'Housed in a magnificent 19th-century Hispano-Moorish palace built by Sultan Moulay Hassan I as a summer residence, Dar Batha now serves as a museum of traditional Fassi arts and crafts. The collection spans centuries of local artisanship: astrolabe-quality brass instruments, hand-knotted Fassi carpets, embroidered textiles, carved cedarwood panels, wrought-iron works, and the famous Fes blue ceramics. The Andalusian garden with its towering cypress trees is a peaceful oasis.',
    fee: '20 MAD',
    hours: '9:00 AM - 5:00 PM (closed Tuesdays)',
    tip: 'The ceramics room on the upper floor contains the finest examples of Fes blue-and-white pottery, including pieces that are centuries old. The garden courtyard is one of the quietest spots in the medina &mdash; a perfect midday retreat.',
    rating: 4.5,
  },
  {
    name: 'Royal Palace Gates (Dar el-Makhzen)',
    image: '/images/photo-fes-medina-alley.webp',
    description:
      'The Royal Palace of Fes, situated in Fes el-Jdid, covers a staggering 80 hectares &mdash; larger than some European capitals\' historic centers. While the palace itself is closed to visitors, its monumental entrance gates are among the most photographed architectural details in Morocco. Seven massive brass doors, each a masterwork of geometric precision, gleam against a backdrop of hand-laid zellige tilework and carved stone. The surrounding plaza offers the full spectacle.',
    fee: 'Free (exterior viewing only)',
    hours: 'Viewable at any time',
    tip: 'Visit in the late afternoon when the western sun illuminates the brass doors and makes them glow golden. The plaza is one of the few open spaces in Fes, making it a welcome break from the narrow medina streets.',
    rating: 4.5,
  },
  {
    name: 'Borj Nord',
    image: '/images/photo-fes-medina-alley.webp',
    description:
      'A 16th-century Saadian fortress perched on the hilltop north of the medina, Borj Nord houses an impressive arms museum with a collection spanning from prehistoric weapons to World War II-era firearms. The real draw, however, is the panoramic terrace, which offers one of the most breathtaking views in all of Morocco: the entire Fes el-Bali medina laid out below like a living carpet, with dozens of minarets piercing the skyline and the Rif Mountains visible on clear days.',
    fee: '20 MAD',
    hours: '9:00 AM - 6:00 PM (closed Tuesdays)',
    tip: 'Come at sunset for the most dramatic experience. As the call to prayer echoes from the dozens of minarets below and the city turns golden, this is one of those moments that stays with you forever. Bring a jacket &mdash; the hilltop can be windy.',
    rating: 4.6,
  },
  {
    name: 'The Mellah (Jewish Quarter)',
    image: '/images/photo-fes-medina-alley.webp',
    description:
      'Established in 1438 within Fes el-Jdid, the Mellah was the first Jewish quarter in Morocco and one of the largest in the Islamic world. At its peak, 250,000 Jews lived here. Today the community has largely emigrated, but the distinctive architecture remains: houses with wooden balconies and outward-facing windows (unlike the inward-facing Muslim homes), the restored Ibn Danan Synagogue, and a hauntingly beautiful ancient Jewish cemetery with thousands of whitewashed tombstones.',
    fee: 'Free (Ibn Danan Synagogue: 20 MAD)',
    hours: 'Daylight hours; Synagogue 9:00 AM - 5:00 PM',
    tip: 'The Mellah market on Rue des Merinides is excellent for spices, dried fruits, and herbs at local prices &mdash; far less tourist-inflated than the main medina souks. The Jewish cemetery is deeply atmospheric and rarely visited.',
    rating: 4.3,
  },
];

/* ═══════════════════════════════════════════════════════════════
   NEIGHBORHOODS DATA
   ═══════════════════════════════════════════════════════════════ */

const neighborhoods = [
  {
    name: 'Fes el-Bali',
    subtitle: 'The Ancient Medina',
    description:
      'The crown jewel of Fes and a UNESCO World Heritage Site since 1981. Fes el-Bali is the world\'s largest contiguous car-free urban area, home to over 9,400 alleyways, 300 mosques, 80 fountains, and 150,000 residents. Founded in the 9th century by Idris II, this is where you will find the tanneries, medersas, souks, and the beating heart of everything that makes Fes extraordinary. Navigating it is genuinely challenging &mdash; most alleys are too narrow for even a donkey cart, dead ends are constant, and street signs are rare. This is the Morocco of your imagination.',
    highlights: [
      'Chouara Tannery and leather workshops',
      'Bou Inania and Al-Attarine Medersas',
      'Al-Qarawiyyin Mosque and University',
      'Souk Attarine (spice market)',
      'Seffarine Square (coppersmith plaza)',
      'Nejjarine Fountain and Woodworking Museum',
    ],
    bestFor: 'History, architecture, crafts, photography, immersive exploration',
  },
  {
    name: 'Fes el-Jdid',
    subtitle: 'The New City (13th Century)',
    description:
      'Built in 1276 by the Marinid dynasty as a new administrative capital adjacent to Fes el-Bali, Fes el-Jdid ("New Fes") is home to the Royal Palace, the historic Jewish Mellah, and the Moulay Abdallah quarter. Compared to the ancient medina, streets here are wider and more navigable. The area has a distinct character: less touristic, more residential, and architecturally distinct with its blend of Islamic and Jewish heritage. The grand mechouar (royal parade ground) and the palace gates are the visual centerpieces.',
    highlights: [
      'Royal Palace gates (Dar el-Makhzen)',
      'The Mellah and Ibn Danan Synagogue',
      'Mellah market for affordable spices',
      'Jnan Sbil Gardens (public park)',
      'Grand Mechouar (royal parade ground)',
      'Moulay Abdallah quarter',
    ],
    bestFor: 'Royal architecture, Jewish heritage, quiet exploration, gardens',
  },
  {
    name: 'Ville Nouvelle',
    subtitle: 'The French Colonial New Town',
    description:
      'Built during the French Protectorate (1912-1956), the Ville Nouvelle is Fes\'s modern district with wide boulevards, Art Deco facades, cafes, restaurants, and the main commercial infrastructure. Avenue Hassan II and Boulevard Mohammed V are the principal arteries, lined with banks, shops, and international restaurants. While not the reason people come to Fes, the Ville Nouvelle is where you will find reliable ATMs, pharmacies, the train station, car rental agencies, and a growing number of contemporary restaurants and bars.',
    highlights: [
      'Avenue Hassan II and Boulevard Mohammed V',
      'Central Market (Marche Central)',
      'Train station (Fes Ville)',
      'Art Deco colonial architecture',
      'Contemporary restaurants and cafes',
      'Borj Fes shopping mall',
    ],
    bestFor: 'Modern amenities, dining, nightlife, transportation connections',
  },
];

/* ═══════════════════════════════════════════════════════════════
   ARTISAN WORKSHOPS DATA
   ═══════════════════════════════════════════════════════════════ */

const artisanWorkshops = [
  {
    craft: 'Zellige Tilework',
    description:
      'Fes is the undisputed capital of zellige, the geometric mosaic tilework that adorns palaces, mosques, and fountains across Morocco. Artisans hand-cut each tiny tile piece from larger glazed squares using a specialized hammer and chisel, then assemble them face-down into intricate geometric patterns following designs that have been passed down for generations. A single square meter of complex zellige can take a master craftsman weeks to complete.',
    where: 'Quartier des Potiers (Ain Nokbi area) and workshops near Bab Guissa',
    experience: 'Many workshops offer hands-on sessions where visitors can try cutting and assembling tiles. Full-day workshops start around 300-500 MAD.',
    buyingTip: 'A quality zellige table top (60cm) costs 800-2,000 MAD depending on complexity. Workshops can ship internationally.',
  },
  {
    craft: 'Brass & Copper Work',
    description:
      'The rhythmic hammering of brass and copper echoes through Seffarine Square, one of the most atmospheric spots in the medina. Here, artisans produce everything from enormous ceremonial trays and ornate lanterns to delicate tea sets and engraved door knockers. The process is entirely manual: sheets of metal are hammered into shape, then engraved with intricate arabesque and geometric patterns using hand tools that have not changed in centuries.',
    where: 'Seffarine Square (Place Seffarine) in the heart of Fes el-Bali',
    experience: 'Watch artisans at work in open-air workshops. Some will explain techniques if you show genuine interest. Photography is usually welcome.',
    buyingTip: 'A hand-hammered brass tray starts at 200-400 MAD. Lanterns range from 150 MAD (small) to 3,000+ MAD (large, complex). Check weight &mdash; heavier means thicker, better-quality metal.',
  },
  {
    craft: 'Leather Craft',
    description:
      'Fes leather has been renowned for centuries &mdash; the English word "cordwainer" (shoemaker) derives from "Cordovan," but Fassi leather was equally prized across medieval Europe. After tanning in the ancient vats, leather is dyed, dried, and worked by specialist craftsmen into bags, belts, babouches (traditional slippers), poufs, jackets, and book covers. The entire process, from raw hide to finished product, takes place within a few hundred meters of the tanneries.',
    where: 'Workshops surrounding Chouara, Sidi Moussa, and Ain Azliten tanneries',
    experience: 'Leather shops above the tanneries often include a workshop tour showing the full production process. The tour is free, but you will be shown the merchandise afterward.',
    buyingTip: 'Quality babouches cost 80-200 MAD (check for stitched, not glued, soles). Leather bags range from 200-1,500 MAD. Smell the leather &mdash; properly tanned Fassi leather should not have a chemical odor.',
  },
  {
    craft: 'Pottery & Ceramics',
    description:
      'Fassi ceramics are instantly recognizable: the distinctive blue-and-white palette (inspired by Chinese porcelain brought via the Silk Road) sets them apart from the multicolored pottery of Safi or the green of Tamegroute. Artisans in the Quartier des Potiers still use traditional kick-wheels and wood-fired kilns. The blue glaze comes from cobalt, and the intricate patterns &mdash; typically geometric or floral &mdash; are hand-painted freehand by artists who have trained since childhood.',
    where: 'Quartier des Potiers (Potters\' Quarter) near Ain Nokbi, south of the medina',
    experience: 'The large cooperative workshops offer complete tours of the production process from raw clay to finished product. Pottery-making classes (2-3 hours) cost 200-400 MAD.',
    buyingTip: 'A hand-painted Fassi plate (30cm) costs 80-250 MAD. A full tagine set costs 150-400 MAD. Buy direct from the workshop to avoid the 200-300% medina markup. Shipping is available.',
  },
  {
    craft: 'Textile Weaving',
    description:
      'The rhythmic clack of wooden looms is one of the characteristic sounds of the Fes medina. Weavers produce everything from fine silk brocades (historically worn by Fassi brides) to heavy wool blankets, cotton bedspreads, and the striped fabrics used for traditional djellabas. The most prestigious Fassi textiles are the caftans and takchitas &mdash; elaborate ceremonial robes embroidered with gold thread that can take months to complete.',
    where: 'Workshops along Derb Tanneurs and in the Souk des Teinturiers (Dyers\' Souk)',
    experience: 'Working looms can be seen in several medina workshops. The weavers are typically happy to demonstrate their craft. Some workshops allow visitors to try a few passes on the loom.',
    buyingTip: 'A handwoven cotton scarf starts at 50-100 MAD. Wool blankets cost 300-800 MAD. Silk brocade per meter starts at 200 MAD. For djellaba fabric, Derb Tanneurs offers the widest selection.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   FOOD GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const signatureDishes = [
  {
    name: 'Pastilla (B\'stilla)',
    description:
      'The crown jewel of Fassi cuisine. Layers of paper-thin warqa pastry filled with shredded pigeon (or chicken), seasoned with saffron, ginger, and cinnamon, layered with sweetened almonds, then baked until golden and dusted with powdered sugar and cinnamon. The contrast of sweet, savory, and crispy is extraordinary. Originally a royal court dish, it remains Fes\'s most celebrated culinary contribution.',
    price: '80-150 MAD per portion',
    where: 'Dar Roumana, Riad Fes, street stalls near Bab Boujloud',
  },
  {
    name: 'Tanjia Fassia',
    description:
      'Not to be confused with Marrakech\'s tanjia (a bachelor\'s dish cooked in the hammam), the Fes version is an elegant slow-cooked tagine featuring lamb or beef with preserved lemons, olives, saffron, and a careful balance of spices. The meat is impossibly tender, falling apart at the touch of bread. Every Fassi grandmother claims her recipe is the authentic one.',
    price: '70-120 MAD',
    where: 'Riad Rcif, Cafe Clock, family-run restaurants in the medina',
  },
  {
    name: 'Rfissa',
    description:
      'A celebratory dish traditionally served to new mothers for its restorative properties. Shredded msemen flatbread is soaked in a rich lentil and chicken broth spiced with fenugreek, saffron, and ras el hanout. The textures are layered and complex &mdash; the bread absorbs the broth while maintaining some chew, and the lentils add earthiness. It is hearty, aromatic, and deeply comforting.',
    price: '50-90 MAD',
    where: 'Home-style restaurants in the medina, Dar Tajine, Thami\'s',
  },
  {
    name: 'Mrouzia',
    description:
      'A sweet and savory tagine of lamb slow-cooked with honey, raisins, almonds, and ras el hanout. Originally prepared for Eid al-Adha celebrations, mrouzia is one of the most ancient dishes in the Fassi repertoire. The lamb caramelizes in the honey and becomes incredibly tender, while the almonds add crunch. It is rich, festive, and not for the faint of heart.',
    price: '80-140 MAD',
    where: 'Riad Fes restaurant, Dar Roumana, and during festival seasons',
  },
  {
    name: 'Harira',
    description:
      'Morocco\'s national soup, but the Fassi version is considered the gold standard. A thick, velvety soup of tomatoes, lentils, chickpeas, and vermicelli, seasoned with fresh coriander, celery, and saffron. During Ramadan, it is the dish that breaks the fast at sunset, served with dates and chebakia pastries. Outside Ramadan, it is available year-round at street stalls for a few dirhams.',
    price: '5-15 MAD at street stalls; 30-50 MAD at restaurants',
    where: 'Street stalls near Bab Boujloud, Thami\'s, every restaurant in the medina',
  },
  {
    name: 'Mechoui',
    description:
      'Whole lamb slow-roasted for hours in an underground clay oven until the meat is so tender it can be pulled apart with bare fingers. The skin is crispy and salted, the flesh is succulent, and it is served simply with cumin and salt for dipping. Traditionally a celebratory dish for weddings and festivals, some Fes restaurants prepare it daily.',
    price: '100-180 MAD per portion',
    where: 'Mechoui Alley near Jemaa Seffarine, wedding festivals',
  },
];

const bestRestaurants = [
  {
    name: 'Dar Roumana',
    cuisine: 'Modern Fassi fine dining',
    price: '300-500 MAD per person',
    description:
      'Run by a Moroccan-American couple, Dar Roumana elevates traditional Fassi cuisine with contemporary technique. The tasting menu is extraordinary. Reservations essential.',
    location: 'Fes el-Bali medina',
  },
  {
    name: 'Cafe Clock',
    cuisine: 'Creative Moroccan fusion',
    price: '80-150 MAD per person',
    description:
      'Famous for its camel burger and cultural programming. Live Gnaoua music, storytelling evenings, and cooking classes. A social hub for locals and travelers.',
    location: 'Derb el Magana, near Bou Inania',
  },
  {
    name: 'Riad Rcif',
    cuisine: 'Traditional Fassi home cooking',
    price: '100-200 MAD per person',
    description:
      'Authentic home-style cooking in a beautifully restored riad. The daily set menu features seasonal dishes prepared by local women. Rooftop dining with medina views.',
    location: 'Rcif Square area',
  },
  {
    name: 'The Ruined Garden',
    cuisine: 'Moroccan-Mediterranean',
    price: '120-220 MAD per person',
    description:
      'Set in a partially restored ruined riad with a garden courtyard open to the sky. Creative dishes using local ingredients. The lamb tagine with figs is exceptional.',
    location: 'Near Sidi Ahmed Tijani Mosque',
  },
  {
    name: 'Thami\'s',
    cuisine: 'No-frills Fassi street food',
    price: '20-50 MAD per person',
    description:
      'Where locals eat. Tiny, packed, and serving outstanding harira, brochettes, and kefta. No menu &mdash; eat what is cooking. Cash only. The most authentic experience in Fes.',
    location: 'Near Bab Boujloud',
  },
  {
    name: 'Nur',
    cuisine: 'Contemporary Moroccan',
    price: '250-400 MAD per person',
    description:
      'A stylish restaurant offering refined Moroccan cuisine with seasonal ingredients and artistic presentation. The seven-course tasting menu is a journey through Fassi flavors.',
    location: 'Fes el-Bali',
  },
];

/* ═══════════════════════════════════════════════════════════════
   WHERE TO STAY DATA
   ═══════════════════════════════════════════════════════════════ */

const accommodations = [
  {
    category: 'Budget Riads',
    priceRange: '200-500 MAD / night',
    description:
      'Basic but charming traditional riads within the medina walls. Expect a simple room around a central courtyard, shared or private bathroom, and breakfast on the rooftop terrace. The riad experience at an accessible price.',
    recommendations: [
      'Riad Verus &mdash; Clean, central location, friendly staff',
      'Dar Seffarine &mdash; Overlooking Seffarine Square, great rooftop',
      'Riad Laayoun &mdash; Quiet location, beautiful courtyard garden',
    ],
    tip: 'Book directly with the riad via email or WhatsApp for the best rates. Many budget riads do not appear on booking platforms.',
  },
  {
    category: 'Mid-Range Riads',
    priceRange: '500-1,500 MAD / night',
    description:
      'Beautifully restored traditional houses with distinctive Fassi architecture, private en-suite rooms, courtyards with fountains, and personalized service. This is the sweet spot for most travelers &mdash; authentic atmosphere with genuine comfort.',
    recommendations: [
      'Riad Fes Maya &mdash; Stunning restoration, hammam, pool',
      'Dar Roumana &mdash; Exceptional restaurant, cooking classes',
      'Riad Learouse &mdash; Elegant, quiet, superb breakfast spread',
      'Riad Rcif &mdash; Great location, authentic home-cooking dinners',
    ],
    tip: 'Ask for a room on the upper floors for more natural light. Ground-floor rooms around the courtyard can be darker and damper in winter.',
  },
  {
    category: 'Luxury Riads & Hotels',
    priceRange: '1,500-5,000+ MAD / night',
    description:
      'The finest accommodations in Fes, offering palatial architecture, private hammams, plunge pools, gourmet restaurants, and butler-level service. These are not just places to sleep &mdash; they are destinations in themselves, often occupying restored palaces that are architectural masterworks.',
    recommendations: [
      'Riad Fes &mdash; The gold standard, palatial suites, Michelin-quality dining',
      'Palais Faraj &mdash; Stunning hilltop location, panoramic pool, spa',
      'Hotel Sahrai &mdash; Modern luxury with medina views, rooftop bar',
      'Karawan Riad &mdash; Intimate luxury, incredible attention to detail',
    ],
    tip: 'Luxury riads often include airport transfers, guided medina tours, and cooking classes in their rates. Ask what is included before comparing prices.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SHOPPING GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const shoppingAreas = [
  {
    name: 'Souk Attarine',
    specialty: 'Spices, dried herbs, perfumes, traditional cosmetics',
    description:
      'The fragrant heart of the medina, Souk Attarine is a sensory explosion of cumin, saffron, ras el hanout, dried rosebuds, orange blossom water, argan oil, and kohl. Named after "attar" (perfume), this souk has been the center of the spice trade in Fes for over a millennium. Vendors display pyramids of brilliantly colored spices and will blend custom ras el hanout mixtures on request.',
    priceGuide: 'Saffron: 10-30 MAD/gram (check authenticity). Ras el hanout: 30-60 MAD/100g. Argan oil: 150-300 MAD/liter (cosmetic grade).',
    bargaining: 'Expected but gentle. Start at 50-60% of asking price. Spice sellers are generally fair.',
  },
  {
    name: 'Carpet Souk (Souk des Tapis)',
    specialty: 'Handwoven Berber rugs, kilims, Rabat carpets',
    description:
      'Fes has been a center for carpet trading since medieval times. The carpet souk near Seffarine Square is where you will find everything from simple Berber flat-weaves to elaborate hand-knotted urban carpets with over 100 knots per square centimeter. Buying a carpet involves ritual tea drinking, carpet after carpet unfurled before you, and extended negotiation. It is theater as much as commerce, and many visitors describe it as one of their most memorable Fes experiences.',
    priceGuide: 'Simple Berber kilim: 400-1,200 MAD. Mid-range hand-knotted: 2,000-8,000 MAD. Fine Rabat carpet: 10,000-50,000+ MAD. Shipping available.',
    bargaining: 'Absolutely essential. First prices may be 3-5x the final price. Never buy the first carpet shown &mdash; visit multiple shops. Bring cash for the best deals.',
  },
  {
    name: 'Seffarine Square',
    specialty: 'Brass and copper work, metalware',
    description:
      'One of the most atmospheric spots in the entire medina, Seffarine Square is an open-air workshop where metalworkers hammer brass and copper into trays, lanterns, tea sets, and decorative objects. The sound of hammering has echoed here for centuries. Surrounding the square are workshops where you can watch artisans work and commission custom pieces.',
    priceGuide: 'Hand-hammered brass tray: 200-600 MAD. Engraved tea set: 300-800 MAD. Large ornate lantern: 800-3,000 MAD.',
    bargaining: 'Moderate. Craftsmen in their own workshops tend to give fairer prices than shop middlemen. Buying directly from the maker is always better.',
  },
  {
    name: 'Leather Goods Souk',
    specialty: 'Bags, babouches, poufs, belts, jackets',
    description:
      'Clustered around the tanneries, the leather goods souk offers everything from traditional babouche slippers to full leather jackets. Quality varies enormously &mdash; the best pieces use vegetable-tanned leather from the traditional vats, while lower-quality goods use chemically tanned imports. Knowing how to identify quality is essential.',
    priceGuide: 'Babouches: 80-200 MAD. Leather bag: 200-1,500 MAD. Pouf (unstuffed): 200-500 MAD. Belt: 80-250 MAD.',
    bargaining: 'Highly expected, especially in tourist-heavy areas near the tannery viewpoints. Start at 30-40% of asking price and negotiate firmly but politely.',
  },
  {
    name: 'Mellah Market',
    specialty: 'Spices, dried fruits, nuts, olives, local produce',
    description:
      'The market running through the former Jewish quarter on Rue des Merinides is where Fassi locals do their daily shopping. Prices here are significantly lower than in the tourist-oriented souks, and the produce is fresh and excellent. The dried fruit and nut stalls are particularly impressive, with mountains of dates, figs, almonds, and walnuts.',
    priceGuide: 'Medjool dates: 40-80 MAD/kg. Almonds: 60-100 MAD/kg. Olives: 20-40 MAD/kg. Dried figs: 40-70 MAD/kg.',
    bargaining: 'Minimal. Prices are already local-friendly. Gentle negotiation on larger purchases is acceptable.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DAY TRIPS DATA
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    destination: 'Meknes',
    distance: '60 km (1 hour by train or car)',
    description:
      'The "Versailles of Morocco," built by the megalomaniac Sultan Moulay Ismail in the 17th century. Meknes is a UNESCO World Heritage Site with monumental gates (Bab Mansour is one of the finest in North Africa), vast royal granaries (Heri es-Souani), an underground prison, and a relaxed medina that is far less touristy than Fes. The city is also the center of Morocco\'s wine region.',
    highlights: [
      'Bab Mansour &mdash; the grandest gate in Morocco',
      'Heri es-Souani &mdash; vast Ismail-era granaries and stables',
      'Mausoleum of Moulay Ismail (non-Muslims welcome)',
      'Wine tasting at Chateau Roslane or Domaine de la Zouina',
    ],
    tip: 'Combine Meknes with Volubilis for a full day trip. Trains run hourly between Fes and Meknes.',
  },
  {
    destination: 'Volubilis',
    distance: '85 km (1.5 hours by car)',
    description:
      'The best-preserved Roman ruins in North Africa and a UNESCO World Heritage Site. Originally a Berber settlement, Volubilis became a prosperous Roman colonial city producing olive oil and grain. The remarkably intact mosaics, triumphal arch, Capitol, and basilica offer a vivid window into life on the empire\'s southern frontier. Set against rolling olive groves and hills, the site is hauntingly beautiful.',
    highlights: [
      'House of Orpheus &mdash; stunning floor mosaics',
      'Triumphal Arch of Caracalla',
      'Capitol and Basilica',
      'House of Venus &mdash; finest mosaics in situ',
    ],
    tip: 'Visit early morning or late afternoon to avoid the heat and crowds. There is almost no shade. The on-site museum provides essential context. Budget 2-3 hours.',
  },
  {
    destination: 'Ifrane',
    distance: '65 km (1 hour by car)',
    description:
      'Known as "Little Switzerland," Ifrane is a surreal alpine-style town at 1,665 meters elevation in the Middle Atlas Mountains. Built by the French in 1929, its red-roofed chalets, manicured gardens, and clean streets look like they were airlifted from the Alps. In winter, the nearby ski resort of Michlifen draws Moroccan families, and the surrounding cedar forests are home to the endangered Barbary macaque.',
    highlights: [
      'Al Akhawayn University campus',
      'Cedar forests with Barbary macaques',
      'Lake Dayet Aoua (birdwatching)',
      'Michlifen ski resort (winter)',
    ],
    tip: 'The temperature in Ifrane can be 15-20 degrees cooler than Fes, making it a perfect summer escape. In winter, bring warm clothing. The Barbary macaque forest is on the road between Ifrane and Azrou.',
  },
  {
    destination: 'Middle Atlas Mountains',
    distance: '80-150 km (1.5-3 hours by car)',
    description:
      'The Middle Atlas is a vast mountain range stretching across central Morocco, offering cedar forests, crater lakes, Berber villages, and some of the most scenic drives in the country. The region is home to the Amazigh people, whose traditional villages, weekly souks, and pastoral way of life offer a stark contrast to the urban intensity of Fes. The landscape shifts from Mediterranean forest to alpine meadow to near-desert within a few hours.',
    highlights: [
      'Azrou &mdash; cedar forests and Barbary macaques',
      'Ouzoud Waterfalls (a longer day trip, 3+ hours)',
      'Berber weekly markets (souks rotate by day)',
      'Lakes Dayet Aoua and Dayet Hachlaf',
    ],
    tip: 'The Middle Atlas is best explored by rental car or with a hired driver. Roads are generally good. Combine Ifrane, Azrou, and the cedar forests for an excellent day circuit.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   FES BY NIGHT DATA
   ═══════════════════════════════════════════════════════════════ */

const nightExperiences = [
  {
    name: 'Rooftop Dinner with Medina Views',
    description:
      'Many riads and restaurants offer dinner on their rooftop terraces, where you can eat tagine by candlelight while the mosques are illuminated, the call to prayer echoes across the city, and the stars appear above. This is the quintessential Fes evening experience.',
    where: 'Riad Fes, Palais Faraj, Dar Roumana, or your own riad terrace',
    price: '150-500 MAD',
  },
  {
    name: 'Cafe Clock Cultural Events',
    description:
      'Cafe Clock hosts regular evening events including live Gnaoua music performances, Moroccan storytelling (hikayat) evenings in Arabic and English, film screenings, and cooking demonstrations. It is the closest thing Fes has to a cultural events venue.',
    where: 'Cafe Clock, Derb el Magana',
    price: '50-150 MAD (food and drinks)',
  },
  {
    name: 'Evening Stroll Through the Medina',
    description:
      'After dark, the medina transforms. The souks close, the crowds thin, and the ancient city reveals a different character: quieter, more atmospheric, with pools of lamplight spilling from doorways and the sound of families behind closed doors. The main arteries (Tala\'a Kebira and Tala\'a Seghira) remain lit and safe.',
    where: 'Tala\'a Kebira from Bab Boujloud toward the center',
    price: 'Free',
  },
  {
    name: 'Hotel Sahrai Rooftop Bar',
    description:
      'For a more contemporary evening, Hotel Sahrai offers a sophisticated rooftop bar with craft cocktails, wine, and panoramic views over the medina. It is a world apart from the medieval streets below &mdash; sleek, modern, and cosmopolitan.',
    where: 'Hotel Sahrai, above the medina',
    price: '100-250 MAD (drinks)',
  },
  {
    name: 'Hammam Experience',
    description:
      'An evening hammam (traditional steam bath) is the perfect way to end a day of medina walking. The ritual of scrubbing, steaming, and relaxation is both physically restorative and culturally immersive. Some riads have private hammams; public hammams offer the authentic experience.',
    where: 'Riad Fes spa, Palais Amani, or public hammams (ask your riad)',
    price: 'Public: 15-30 MAD. Riad hammam with scrub: 200-500 MAD',
  },
];

/* ═══════════════════════════════════════════════════════════════
   BUDGET GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const budgetBreakdown = [
  {
    category: 'Budget Traveler',
    daily: '300-500 MAD / day',
    details: [
      'Accommodation: Budget riad or hostel (150-250 MAD)',
      'Food: Street food and local restaurants (80-120 MAD)',
      'Transport: Walking + occasional petit taxi (20-40 MAD)',
      'Attractions: 2-3 sites per day (40-80 MAD)',
      'Shopping/misc: Light browsing (50-100 MAD)',
    ],
    tip: 'Fes is remarkably affordable for budget travelers. The medina is best explored on foot, street food is excellent and cheap, and many of the most atmospheric experiences &mdash; wandering the souks, watching artisans, sitting in squares &mdash; cost nothing.',
  },
  {
    category: 'Mid-Range Traveler',
    daily: '800-1,500 MAD / day',
    details: [
      'Accommodation: Quality riad with breakfast (500-1,000 MAD)',
      'Food: Mix of riad dining and restaurants (150-250 MAD)',
      'Transport: Petit taxis and a half-day guide (100-200 MAD)',
      'Attractions: Full-day sightseeing (60-100 MAD)',
      'Shopping/activities: Workshops, souks (200-400 MAD)',
    ],
    tip: 'The mid-range experience in Fes offers exceptional value. A beautifully restored riad with breakfast, a guided medina tour, excellent restaurant meals, and a workshop experience can all be had for what a budget hotel room costs in European cities.',
  },
  {
    category: 'Luxury Traveler',
    daily: '3,000-8,000+ MAD / day',
    details: [
      'Accommodation: Luxury riad or palace hotel (2,000-5,000 MAD)',
      'Food: Fine dining and private chef experiences (500-1,000 MAD)',
      'Transport: Private driver and dedicated guide (500-1,000 MAD)',
      'Attractions: VIP access, private tours (200-500 MAD)',
      'Shopping/spa: Bespoke purchases, hammam (500-2,000+ MAD)',
    ],
    tip: 'Luxury in Fes is not about modern gloss &mdash; it is about the extraordinary. Private access to normally closed spaces, cooking with palace chefs, bespoke artisan commissions, and sleeping in restored palaces with centuries of history.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   2-DAY ITINERARY DATA
   ═══════════════════════════════════════════════════════════════ */

const itineraryDays = [
  {
    day: 1,
    title: 'The Medina Deep Dive',
    description:
      'Immerse yourself in the heart of Fes el-Bali. Today is about the medina\'s greatest architectural and sensory experiences.',
    stops: [
      {
        time: '8:30 AM',
        activity: 'Breakfast on your riad rooftop terrace',
        details: 'Start with traditional Moroccan breakfast: msemen flatbread, honey, olive oil, amlou (argan paste), and mint tea. Watch the medina wake up from above.',
      },
      {
        time: '9:30 AM',
        activity: 'Enter via Bab Boujloud (the Blue Gate)',
        details: 'The iconic gateway to the medina. Notice the blue tiles on the outside (the color of Fes) and the green tiles on the inside (the color of Islam). Walk down Tala\'a Kebira, the main artery.',
      },
      {
        time: '10:00 AM',
        activity: 'Bou Inania Medersa',
        details: 'Start with the finest medersa in Morocco. The morning light in the courtyard is magical. Spend 45 minutes absorbing the details. Entry: 30 MAD.',
      },
      {
        time: '11:00 AM',
        activity: 'Walk to Souk Attarine and Al-Attarine Medersa',
        details: 'Thread through the spice souk, inhaling saffron and cumin, to reach the exquisite Al-Attarine Medersa. Entry: 20 MAD.',
      },
      {
        time: '12:00 PM',
        activity: 'Chouara Tannery viewpoint',
        details: 'Navigate to the tanneries (follow signs or ask). View from the leather shop terraces above. Accept the mint sprig. Tip 10-20 MAD. No obligation to buy leather.',
      },
      {
        time: '1:00 PM',
        activity: 'Lunch at The Ruined Garden',
        details: 'A beautiful garden restaurant in a partially restored riad. Try the seasonal tagine or the lamb with prunes and almonds. Budget: 120-200 MAD.',
      },
      {
        time: '2:30 PM',
        activity: 'Seffarine Square and coppersmith workshops',
        details: 'Watch the metalworkers hammering in this atmospheric square. Browse the brass and copper workshops. The Al-Qarawiyyin Library entrance is nearby.',
      },
      {
        time: '3:30 PM',
        activity: 'Dar Batha Museum',
        details: 'Escape the medina intensity in this beautiful palace museum. Focus on the ceramics collection and relax in the Andalusian garden. Entry: 20 MAD.',
      },
      {
        time: '5:00 PM',
        activity: 'Sunset from Borj Nord or Merenid Tombs',
        details: 'Climb to one of the hilltop viewpoints for the most spectacular sunset panorama in Fes. The medina turns golden as dozens of muezzins call the faithful to prayer.',
      },
      {
        time: '7:30 PM',
        activity: 'Dinner at Dar Roumana',
        details: 'Fes\'s finest restaurant. The tasting menu showcases Fassi cuisine at its most refined. Reserve in advance. Budget: 300-500 MAD.',
      },
    ],
  },
  {
    day: 2,
    title: 'Artisans, Heritage & Hidden Fes',
    description:
      'Explore the neighborhoods beyond the main tourist trail, visit working artisan workshops, and discover the multicultural heritage of Fes.',
    stops: [
      {
        time: '8:30 AM',
        activity: 'Early morning medina walk',
        details: 'Before the crowds arrive, walk the quiet medina streets. This is when you see daily life: bread being delivered by handcart, children heading to school, shopkeepers opening their stalls.',
      },
      {
        time: '9:30 AM',
        activity: 'Fes el-Jdid and the Royal Palace Gates',
        details: 'Walk to the "new" city (built 1276) to see the magnificent brass palace doors and the Grand Mechouar. Photography is excellent in the morning light.',
      },
      {
        time: '10:30 AM',
        activity: 'The Mellah (Jewish Quarter)',
        details: 'Explore the historic Jewish quarter with its distinctive balconied architecture. Visit the Ibn Danan Synagogue (20 MAD) and the atmospheric Jewish cemetery.',
      },
      {
        time: '11:30 AM',
        activity: 'Mellah Market shopping',
        details: 'Stock up on spices, dried fruits, and nuts at local prices. This is where Fassi residents shop &mdash; prices are a fraction of the tourist souks.',
      },
      {
        time: '12:30 PM',
        activity: 'Lunch at Cafe Clock',
        details: 'Try the famous camel burger and enjoy the cultural atmosphere. Check if there are any afternoon events or workshops scheduled. Budget: 80-150 MAD.',
      },
      {
        time: '2:00 PM',
        activity: 'Artisan workshop visit',
        details: 'Head to the Quartier des Potiers (south of the medina by taxi) for a pottery workshop tour, or visit zellige tile-making workshops near Bab Guissa. Some offer hands-on sessions.',
      },
      {
        time: '4:00 PM',
        activity: 'Jnan Sbil Gardens',
        details: 'Stroll through these beautifully restored royal gardens between the old and new medinas. Shaded paths, ornamental lakes, and birdsong offer a peaceful counterpoint to the medina bustle. Free entry.',
      },
      {
        time: '5:00 PM',
        activity: 'Carpet souk experience',
        details: 'Dedicate an hour to the ritual of carpet shopping near Seffarine Square. Even if you do not buy, the tea ceremony and the theater of a carpet presentation are quintessentially Fassi.',
      },
      {
        time: '6:30 PM',
        activity: 'Evening hammam',
        details: 'Treat yourself to a traditional hammam scrub and steam at your riad or a recommended hammam. The perfect way to soothe muscles after two days of medina walking.',
      },
      {
        time: '8:00 PM',
        activity: 'Farewell dinner at Riad Rcif',
        details: 'Traditional Fassi home cooking on the rooftop terrace. The set menu changes daily and features the seasonal best. Budget: 100-200 MAD.',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   RELATED PAGES DATA
   ═══════════════════════════════════════════════════════════════ */

const relatedPages = [
  {
    title: 'Fes Attractions',
    description: 'Detailed guide to the top 12 sights and monuments in Fes.',
    href: '/cities/fes/attractions',
  },
  {
    title: 'Fes Restaurants',
    description: 'Where to eat in Fes: from street food to fine dining.',
    href: '/cities/fes/restaurants',
  },
  {
    title: 'Fes Hotels',
    description: 'The best riads and hotels in Fes by budget category.',
    href: '/cities/fes/hotels',
  },
  {
    title: 'Medina Guide',
    description: 'Master the art of navigating Morocco\'s ancient medinas.',
    href: '/medina-guide',
  },
  {
    title: 'Morocco Cuisine',
    description: 'A deep dive into Moroccan food, ingredients, and dining culture.',
    href: '/cuisine',
  },
  {
    title: 'Souks & Shopping',
    description: 'Complete guide to Morocco\'s markets: what to buy and how to bargain.',
    href: '/souks',
  },
  {
    title: 'UNESCO Heritage Sites',
    description: 'All nine of Morocco\'s UNESCO World Heritage Sites explained.',
    href: '/unesco',
  },
  {
    title: 'Morocco Itineraries',
    description: 'Multi-day itineraries covering Fes, Marrakech, the desert, and more.',
    href: '/itineraries',
  },
];

/* ═══════════════════════════════════════════════════════════════
   HELPER: STAR RATING RENDERER
   ═══════════════════════════════════════════════════════════════ */

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < full; i++) {
    stars.push(
      <Star
        key={`f-${i}`}
        className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]"
      />
    );
  }
  if (hasHalf) {
    stars.push(
      <span key="half" className="relative inline-block w-4 h-4">
        <Star className="absolute inset-0 w-4 h-4 text-[var(--color-accent)]" />
        <span className="absolute inset-0 w-1/2 overflow-hidden">
          <Star className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
        </span>
      </span>
    );
  }
  const remaining = 5 - full - (hasHalf ? 1 : 0);
  for (let i = 0; i < remaining; i++) {
    stars.push(
      <Star
        key={`e-${i}`}
        className="w-4 h-4 text-[var(--color-accent)]/30"
      />
    );
  }
  return stars;
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function FesGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══════════════════════════════════════════════════════════
          SECTION 1: HERO
          ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-fes-tanneries.webp"
            alt="Panoramic aerial view of the Chouara Tannery stone vats filled with colorful dyes in Fes el-Bali"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Fes Guide</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              The Ultimate City Guide
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fes: Morocco&apos;s Cultural &amp; Spiritual Capital
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              The world&apos;s largest car-free urban area. The oldest university
              on Earth. Tanneries unchanged since the 11th century. Fes is not
              just a city &mdash; it is a living, breathing time machine and the
              intellectual heart of Morocco.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: INTRODUCTION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Cultural &amp; Spiritual Capital
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Founded in 789 AD by Idris I, Fes has been the cultural, spiritual, and
              intellectual heart of Morocco for over twelve centuries.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Fes (also spelled Fez) is unlike any other city on Earth. While Marrakech has
              reinvented itself as a cosmopolitan destination and Casablanca has embraced modernity,
              Fes has done something far more extraordinary: it has preserved its medieval character
              almost entirely intact. The medina of Fes el-Bali is not a museum or a reconstruction
              &mdash; it is a continuously inhabited medieval city where 150,000 people live, work,
              pray, and conduct business within the same walls, along the same 9,400 alleyways, and
              in many of the same buildings that their ancestors used a thousand years ago.
            </p>
            <p>
              The city was the capital of Morocco for much of its history and remains its spiritual
              and intellectual center. Al-Qarawiyyin, founded here in 859 AD, is recognized as the
              oldest continuously operating university in the world. The medersas (theological colleges)
              built by the Marinid dynasty in the 13th and 14th centuries contain some of the finest
              Islamic architectural decoration anywhere. The tanneries, the souks, the brass workshops,
              the bakeries, the fountains &mdash; all continue to function exactly as they have for
              centuries, powered by human hands, donkey transport, and water channels that predate
              European plumbing by half a millennium.
            </p>
            <p>
              For the traveler, Fes offers something increasingly rare in our homogenized world: genuine
              cultural immersion. This is not a theme park experience. The sensory overload is real &mdash;
              the intertwined scents of fresh bread, cedarwood, tanning leather, and mint tea; the
              cacophony of hammering copper, braying donkeys, vendors calling, and the muezzin&apos;s
              chant; the visual richness of zellige tilework, carved stucco, and light falling through
              mashrabiya screens into hidden courtyards. Fes demands your full attention, rewards
              patience and curiosity, and leaves an impression that no other city in Morocco can match.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[var(--border-light)]">
              {[
                { label: 'Founded', value: '789 AD' },
                { label: 'Medina Alleyways', value: '9,400+' },
                { label: 'UNESCO Status', value: 'Since 1981' },
                { label: 'Population', value: '~1.2 Million' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-[var(--surface-muted)]"
                >
                  <p className="text-2xl font-bold text-[var(--color-primary)] font-[family-name:var(--font-display)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: FES EL-BALI (OLD MEDINA)
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Fes el-Bali: The World&apos;s Largest Car-Free Urban Area
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A UNESCO World Heritage Site since 1981, Fes el-Bali is the world&apos;s largest
              contiguous car-free zone and one of the most extraordinary urban environments on Earth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="card-moroccan overflow-hidden">
              <img
                src="/images/photo-fes-medina-alley.webp"
                alt="Narrow alleyway in Fes el-Bali medina with shafts of sunlight and merchant stalls"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  Navigating the Labyrinth
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  Fes el-Bali is not designed for easy navigation &mdash; and that is part of its magic.
                  The 9,400 alleyways are too narrow for cars; only donkeys, handcarts, and human feet
                  can navigate them. Street names are rare, and GPS is unreliable in the covered
                  passages. The medina is organized around two main arteries &mdash; Tala&apos;a Kebira
                  (the big hill) and Tala&apos;a Seghira (the small hill) &mdash; which descend from
                  Bab Boujloud toward the center. Everything else is a maze of secondary streets and
                  dead-end derbs. Getting lost is not a risk here; it is a certainty, and ultimately
                  the whole point. The medina always leads you somewhere remarkable.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                  Essential Survival Tips
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  {[
                    'Hire a guide for your first day &mdash; the investment (300-500 MAD for a half day) saves hours of frustration and enriches the experience immeasurably.',
                    'When you hear "Balak!" press yourself against the wall immediately. A loaded donkey or handcart is coming through.',
                    'Download Maps.me before arriving &mdash; it has the best offline medina coverage.',
                    'Memorize your riad\'s phone number. Any shopkeeper can call them if you are hopelessly lost.',
                    'Walk uphill to reach main roads and gates; walk downhill to reach the river and center of the medina.',
                    'Ask seated shopkeepers for directions, not random strangers who approach you.',
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-1" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[var(--color-primary)]" />
                  Key Facts
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { label: 'Mosques', value: '300+' },
                    { label: 'Fountains', value: '80+' },
                    { label: 'Fondouks', value: '175' },
                    { label: 'Medersas', value: '11' },
                    { label: 'Residents', value: '150,000' },
                    { label: 'Main Gates', value: '14 babs' },
                  ].map((fact) => (
                    <div
                      key={fact.label}
                      className="flex justify-between p-2 rounded-lg bg-[var(--surface-muted)]"
                    >
                      <span className="text-[var(--text-secondary)]">
                        {fact.label}
                      </span>
                      <span className="font-semibold text-[var(--text-primary)]">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: TOP ATTRACTIONS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Top Attractions in Fes
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From medieval tanneries to the world&apos;s oldest university, Fes concentrates
              more architectural and cultural treasures per square kilometer than almost
              anywhere else on Earth.
            </p>
          </div>

          <div className="space-y-8">
            {topAttractions.map((attraction, index) => (
              <article
                key={attraction.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={attraction.image}
                    alt={`${attraction.name} in Fes, Morocco`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white text-lg font-bold shadow-lg">
                      #{index + 1}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center gap-0.5">
                      {renderStars(attraction.rating)}
                    </div>
                    <span className="text-sm font-semibold text-[var(--color-accent)]">
                      {attraction.rating}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {attraction.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                    {attraction.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mb-4">
                    <div className="flex items-start gap-2">
                      <Ticket className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--text-primary)]">Entry:</span>{' '}
                        {attraction.fee}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--text-primary)]">Hours:</span>{' '}
                        {attraction.hours}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-light)] flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <p className="text-xs text-[var(--color-primary)] font-medium">
                      {attraction.tip}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5: NEIGHBORHOODS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Fes Neighborhoods
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Three distinct districts, each with its own character: the ancient medina, the
              medieval new city, and the French colonial quarter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {neighborhoods.map((hood) => (
              <article key={hood.name} className="card-moroccan p-6 flex flex-col">
                <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1">
                  {hood.subtitle}
                </span>
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {hood.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4 flex-1">
                  {hood.description}
                </p>

                <div className="pt-4 border-t border-[var(--border-light)]">
                  <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[var(--color-primary)]" />
                    Highlights
                  </h4>
                  <ul className="space-y-1.5 mb-3">
                    {hood.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                      >
                        <Star className="w-3 h-3 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-[var(--color-primary)] font-medium">
                    <span className="font-bold">Best for:</span> {hood.bestFor}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 6: ARTISAN & CRAFT WORKSHOPS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Palette className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Artisan &amp; Craft Workshops
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Fes is the undisputed craft capital of Morocco. Artisan traditions stretching back
              over a millennium are still practiced daily in workshops throughout the medina.
            </p>
          </div>

          <div className="space-y-6">
            {artisanWorkshops.map((workshop, index) => (
              <article
                key={workshop.craft}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Scissors className="w-5 h-5 text-[var(--color-primary)]" />
                    <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                      Traditional Craft
                    </span>
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {workshop.craft}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                    {workshop.description}
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--text-primary)]">Where:</span>{' '}
                        {workshop.where}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--text-primary)]">Experience:</span>{' '}
                        {workshop.experience}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-light)]">
                      <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <p className="text-xs text-[var(--color-primary)] font-medium">
                        <span className="font-bold">Buying tip:</span> {workshop.buyingTip}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 7: FOOD GUIDE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Utensils className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Fassi Cuisine: The Food Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Fes is the culinary capital of Morocco. The Fassi kitchen is the most refined and
              complex in the country, blending Andalusian, Berber, and Arab traditions into
              dishes of extraordinary sophistication.
            </p>
          </div>

          {/* Signature Dishes */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-[var(--color-primary)]" />
            Signature Dishes of Fes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {signatureDishes.map((dish) => (
              <article key={dish.name} className="card-moroccan p-6 flex flex-col">
                <h4 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {dish.name}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {dish.description}
                </p>
                <div className="pt-3 border-t border-[var(--border-light)] space-y-1">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Price:</span>{' '}
                    {dish.price}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Where:</span>{' '}
                    {dish.where}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Best Restaurants */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <Coffee className="w-5 h-5 text-[var(--color-primary)]" />
            Best Restaurants in Fes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestRestaurants.map((restaurant) => (
              <article key={restaurant.name} className="card-moroccan p-6 flex flex-col">
                <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1">
                  {restaurant.cuisine}
                </span>
                <h4 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {restaurant.name}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {restaurant.description}
                </p>
                <div className="pt-3 border-t border-[var(--border-light)] space-y-1">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Price:</span>{' '}
                    {restaurant.price}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Location:</span>{' '}
                    {restaurant.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 8: WHERE TO STAY
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Stay in Fes
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Staying in a riad within the medina is the quintessential Fes experience. These
              traditional courtyard houses offer atmosphere that no hotel chain can replicate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accommodations.map((acc) => (
              <article key={acc.category} className="card-moroccan p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <CircleDollarSign className="w-5 h-5 text-[var(--color-primary)]" />
                  <span className="text-lg font-bold text-[var(--color-accent)] font-[family-name:var(--font-display)]">
                    {acc.priceRange}
                  </span>
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {acc.category}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {acc.description}
                </p>

                <div className="pt-4 border-t border-[var(--border-light)] mb-4 flex-1">
                  <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2">
                    Recommended
                  </h4>
                  <ul className="space-y-1.5">
                    {acc.recommendations.map((rec) => (
                      <li
                        key={rec}
                        className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <Star className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-light)]">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--color-primary)] font-medium">{acc.tip}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 9: SHOPPING GUIDE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Shopping Guide: Fes Souks
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The souks of Fes are the original shopping experience &mdash; a thousand years of
              commerce, craftsmanship, and negotiation condensed into a labyrinth of
              specialized markets.
            </p>
          </div>

          <div className="space-y-6">
            {shoppingAreas.map((area) => (
              <article key={area.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                    {area.specialty}
                  </span>
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {area.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  {area.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--border-light)]">
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                      <CircleDollarSign className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      Price Guide
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {area.priceGuide}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      Bargaining
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {area.bargaining}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 10: GETTING AROUND FES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Navigation className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Getting Around Fes
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The medina is walkable only. Outside the old city, petit taxis and buses connect
              the main districts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Walking',
                icon: Footprints,
                description:
                  'The only way to explore the medina. Wear comfortable, broken-in shoes with good grip &mdash; the cobblestones are uneven and often slippery. Budget more time than Google Maps suggests; the medina moves at its own pace. Expect to walk 8-15 km per day of sightseeing.',
                tips: [
                  'Flat, closed-toe shoes essential',
                  'Allow 30-50% more time than estimated',
                  'Follow the main arteries when in doubt',
                  'Avoid medina walking after midnight',
                ],
              },
              {
                title: 'Petit Taxis',
                icon: Bus,
                description:
                  'Small red taxis that operate within the city limits. They cannot enter the medina but connect Bab Boujloud, the train station, Ville Nouvelle, and other key points. Metered fares are cheap but meters are sometimes "broken" &mdash; always insist on the meter or agree on a price before departing.',
                tips: [
                  'Insist on the meter (compteur)',
                  'Most rides within the city: 10-25 MAD',
                  'To/from train station: 15-25 MAD',
                  'Add 50% surcharge after 8 PM',
                ],
              },
              {
                title: 'Hire a Guide',
                icon: Users,
                description:
                  'An official guide from the tourist office (available at Bab Boujloud and Place R\'cif) transforms the medina from bewildering to revelatory. They know every hidden workshop, medersa, and shortcut, and their commentary brings the history alive. Hiring one for your first day is strongly recommended.',
                tips: [
                  'Official half-day guide: 300-500 MAD',
                  'Full-day guide: 500-800 MAD',
                  'Always use licensed guides (badge)',
                  'Tip 50-100 MAD for excellent service',
                ],
              },
            ].map((transport) => (
              <article key={transport.title} className="card-moroccan p-6">
                <div className="inline-flex p-2.5 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                  <transport.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {transport.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {transport.description}
                </p>
                <ul className="space-y-1.5 pt-3 border-t border-[var(--border-light)]">
                  {transport.tips.map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                    >
                      <Star className="w-3 h-3 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 11: DAY TRIPS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Mountain className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Day Trips from Fes
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Fes is perfectly positioned as a base for exploring Roman ruins, imperial cities,
              alpine towns, and the forests of the Middle Atlas Mountains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dayTrips.map((trip) => (
              <article key={trip.destination} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  <span className="text-sm font-semibold text-[var(--color-primary)]">
                    {trip.distance}
                  </span>
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {trip.destination}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  {trip.description}
                </p>

                <div className="pt-4 border-t border-[var(--border-light)] mb-4">
                  <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[var(--color-primary)]" />
                    Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {trip.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <Star className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-light)]">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--color-primary)] font-medium">{trip.tip}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 12: FES BY NIGHT
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Moon className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Fes by Night
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Fes is not a nightlife city in the Marrakech mold, but its evenings offer a
              different kind of magic: rooftop dinners, cultural events, atmospheric medina
              walks, and the deeply restorative ritual of the hammam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nightExperiences.map((experience) => (
              <article key={experience.name} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {experience.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {experience.description}
                </p>
                <div className="pt-3 border-t border-[var(--border-light)] space-y-1">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Where:</span>{' '}
                    {experience.where}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Cost:</span>{' '}
                    {experience.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 13: BEST TIME TO VISIT
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sun className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Time to Visit Fes
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Fes has a continental climate with hot, dry summers and cool, wet winters. The
              medina&apos;s narrow streets amplify both heat and cold.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                season: 'Spring (March - May)',
                verdict: 'Best Time',
                color: 'green',
                temp: '15-28 C',
                description:
                  'The ideal season. Warm but not oppressive, with wildflowers in the surrounding countryside. The medina is comfortable for extended walking. April and May are particularly pleasant, with long sunny days and cool evenings perfect for rooftop dinners.',
              },
              {
                season: 'Autumn (September - November)',
                verdict: 'Excellent',
                color: 'green',
                temp: '14-30 C',
                description:
                  'Nearly as good as spring. September can still be hot but October and November are beautiful. The harvest season brings seasonal specialties to the restaurants, and the Fes Festival of Sacred Music (if scheduled) adds cultural richness.',
              },
              {
                season: 'Summer (June - August)',
                verdict: 'Hot',
                color: 'yellow',
                temp: '25-42 C',
                description:
                  'Fes can be brutally hot in summer, with temperatures exceeding 40 C in July and August. The medina offers some relief (the narrow streets provide shade) but extended walking is exhausting. Visit early morning and late afternoon, and rest during midday. Hotel prices are lower.',
              },
              {
                season: 'Winter (December - February)',
                verdict: 'Cool & Quiet',
                color: 'blue',
                temp: '5-16 C',
                description:
                  'Fes in winter is cool, occasionally rainy, and remarkably uncrowded. The medina can be atmospheric in rain (and cold &mdash; riads are often chilly). January is the quietest month. Prices are lowest, and you may have major attractions almost to yourself.',
              },
            ].map((period) => (
              <article key={period.season} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {period.season}
                  </h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      period.color === 'green'
                        ? 'bg-green-100 text-green-700'
                        : period.color === 'yellow'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {period.verdict}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">
                  {period.temp}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {period.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 14: BUDGET GUIDE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CircleDollarSign className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Fes Budget Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Fes offers exceptional value at every budget level. Here is what to expect at
              each tier, with daily estimates in Moroccan Dirhams (MAD).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {budgetBreakdown.map((tier) => (
              <article key={tier.category} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                  {tier.category}
                </h3>
                <p className="text-lg font-bold text-[var(--color-accent)] mb-4">
                  {tier.daily}
                </p>

                <ul className="space-y-2 mb-4 flex-1">
                  {tier.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <Star className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-light)]">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--color-primary)] font-medium">{tier.tip}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-primary)]" />
              Money Tips for Fes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
              {[
                'ATMs are available at Bab Boujloud and throughout the Ville Nouvelle. Inside the medina, ATMs are rare.',
                'Carry small bills (10, 20, 50 MAD) for tips, petit taxis, and small purchases. Many vendors cannot break 200 MAD notes.',
                'Credit cards are accepted at upscale riads and restaurants but nowhere in the souks. Cash is king in the medina.',
                'The official exchange rate is better at banks and ATMs than at currency exchange booths. Avoid airport exchange.',
                'Tipping customs: 10% at restaurants, 10-20 MAD for riad staff, 50-100 MAD for guides, 5-10 MAD for small services.',
                'Bargaining is expected in the souks but not in modern shops, supermarkets, or restaurants with printed menus.',
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2">
                  <Star className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 15: 2-DAY ITINERARY
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CalendarDays className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Perfect 2-Day Fes Itinerary
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Two days gives you time to experience the essential Fes. Day one is the medina deep dive;
              day two explores artisans, heritage, and the hidden corners most visitors miss.
            </p>
          </div>

          <div className="space-y-12">
            {itineraryDays.map((day) => (
              <div key={day.day}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-primary)] text-white text-xl font-bold shadow-lg">
                    {day.day}
                  </span>
                  <div>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      Day {day.day}: {day.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {day.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 ml-0 md:ml-[4.5rem]">
                  {day.stops.map((stop) => (
                    <div
                      key={stop.time}
                      className="card-moroccan p-5 flex gap-4"
                    >
                      <div className="shrink-0 w-20 text-right">
                        <span className="text-sm font-bold text-[var(--color-primary)] font-[family-name:var(--font-display)]">
                          {stop.time}
                        </span>
                      </div>
                      <div className="flex-1 border-l-2 border-[var(--color-primary)]/20 pl-4">
                        <h4 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                          {stop.activity}
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {stop.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 16: RELATED PAGES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Map className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dive deeper into Fes and Morocco with these related guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-6 group hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                  Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Fes?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Step through Bab Boujloud and enter a world that has barely changed in a
            thousand years. The tanneries are waiting, the medersas are luminous, the souks
            are fragrant, and the tea is brewing on the rooftop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/fes/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Landmark className="w-4 h-4" /> Fes Attractions
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Book a Fes Tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

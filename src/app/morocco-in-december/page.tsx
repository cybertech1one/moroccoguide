import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Camera,
  UtensilsCrossed,
  Music,
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
  Sparkles,
  Globe,
  AlertTriangle,
  Thermometer,
  CloudRain,
  Mountain,
  Waves,
  Wallet,
  Users,
  Sunset,
  Wind,
  ShieldCheck,
  Luggage,
  TreesIcon,
  Tent,
  Snowflake,
  Umbrella,
  Gift,
  PartyPopper,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Visiting Morocco in December 2026 | Christmas, NYE & Winter Travel Guide',
  description:
    'Complete guide to visiting Morocco in December 2026. Winter travel with Christmas and New Year celebrations, Atlas skiing, cool Sahara nights, and festive Marrakech. Weather by region, events, packing tips, and holiday planning.',
  keywords: [
    'morocco in december',
    'visiting morocco december',
    'morocco december weather',
    'morocco christmas',
    'morocco new year',
    'marrakech christmas',
    'marrakech new year eve',
    'morocco winter travel',
    'morocco ski season',
    'morocco december temperature',
    'sahara desert december',
    'atlas mountains snow',
    'morocco holiday travel',
    'morocco festive season',
    'morocco winter sun',
  ],
  openGraph: {
    title: 'Visiting Morocco in December 2026 | Christmas, NYE & Winter Guide',
    description:
      'December in Morocco: Christmas getaway, New Year in Marrakech, Atlas skiing, cool Sahara nights, and winter warmth in Agadir. Complete guide with weather, events, and holiday planning.',
    url: `${BASE_URL}/morocco-in-december`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Morocco in December with snow-capped Atlas Mountains behind the warm glow of Marrakech medina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco in December 2026 | Christmas & New Year Guide',
    description:
      'Winter Morocco: Christmas getaway, NYE in Marrakech, Atlas skiing opens, cool Sahara nights. Complete guide with weather, events, and practical tips.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-in-december` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-in-december`,
  name: 'Visiting Morocco in December 2026 | Christmas, NYE & Winter Travel Guide',
  description:
    'December in Morocco offers Christmas and New Year celebrations in tourist establishments, Atlas skiing, Sahara camping under clear cold skies, and winter warmth in Agadir. Complete guide to December travel.',
  url: `${BASE_URL}/morocco-in-december`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-in-december`,
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
      { '@type': 'ListItem', position: 2, name: 'Best Time to Visit', item: `${BASE_URL}/best-time-visit-morocco` },
      { '@type': 'ListItem', position: 3, name: 'December', item: `${BASE_URL}/morocco-in-december` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is December a good time to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'December is an excellent time for a winter escape, particularly for Christmas and New Year celebrations. While temperatures are cool (12-17 degrees in cities, below freezing in the mountains), Morocco offers a unique festive experience. Marrakech is the top December destination with comfortable winter days, festive riad dinners, and vibrant New Year celebrations. The Sahara offers clear cold skies for stargazing, and Atlas skiing season opens. Agadir provides winter sun. Prices peak around Christmas and NYE but are moderate earlier in the month.' } },
    { '@type': 'Question', name: 'Does Morocco celebrate Christmas?', acceptedAnswer: { '@type': 'Answer', text: 'Morocco is a Muslim-majority country and December 25 is a normal working day. However, tourist establishments — hotels, riads, upscale restaurants, and international venues — widely celebrate Christmas for their guests. Many riads offer special Christmas Eve dinners, decorations, and festive menus. Marrakech, Essaouira, and other tourist cities have a festive atmosphere in tourist zones. You will not see widespread public Christmas celebrations, but within the tourism infrastructure, Christmas is warmly observed.' } },
    { '@type': 'Question', name: 'What is New Year Eve like in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'New Year Eve is celebrated across Morocco, particularly in Marrakech where Jemaa el-Fnaa becomes a massive outdoor celebration with music, street performers, and festive energy. Hotels and riads host lavish NYE dinners (from 800-2,500 MAD per person). Nightclubs and rooftop bars hold countdown events. In Essaouira, beach bonfires and live music mark the occasion. In the Sahara, luxury camps offer starlit New Year celebrations under desert skies. Book early — NYE events sell out weeks in advance.' } },
    { '@type': 'Question', name: 'What is the weather like in Morocco in December?', acceptedAnswer: { '@type': 'Answer', text: 'December weather varies by region. Coastal cities see 15-19 degrees with 5-8 rainy days. Interior cities (Marrakech, Fes) average 12-17 degrees with cold nights (5-8 degrees). The Sahara ranges 5-20 degrees with cold nights but clear sunny days. Atlas Mountains drop to minus 5 to plus 5 degrees with snow at higher elevations, opening ski season. Agadir is the warmest at 17-22 degrees with minimal rain.' } },
    { '@type': 'Question', name: 'Can you ski in Morocco in December?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, the Atlas ski season typically opens in December. Oukaimeden (75 km from Marrakech) is the main ski resort at 2,600-3,200m elevation, offering downhill skiing, snowboarding, and cross-country trails. Conditions are variable in early December and most consistent from mid-December onward. Equipment rental is available from 200 MAD per day. Michlifen near Ifrane is another option. The skiing is modest by Alpine standards but the experience of skiing in Africa with views over the Sahara is unique.' } },
    { '@type': 'Question', name: 'How much does a December trip to Morocco cost?', acceptedAnswer: { '@type': 'Answer', text: 'December pricing has two tiers. Early December (1st-20th) sees moderate shoulder-to-peak pricing with riads from 500-900 MAD per night. The Christmas and New Year period (December 21-January 2) sees peak prices with riads from 800-2,000 MAD per night, flights at their yearly highest from European cities, and mandatory expensive NYE dinners at many hotels. Budget travelers should visit early December for significant savings while still enjoying the winter atmosphere.' } },
  ],
};

/* ===============================================================
   DATA: WEATHER BY REGION
   =============================================================== */

const weatherRegions = [
  {
    region: 'Atlantic Coast',
    cities: 'Essaouira, Agadir, Rabat, Casablanca',
    icon: Waves,
    tempRange: '15-19 C',
    rainfall: 'Moderate-High (5-8 rainy days)',
    highlights: 'Agadir stands out as the warmest destination (17-22 degrees with minimal rain), earning its reputation as a winter sun escape. Essaouira is atmospheric but windy and cool. Casablanca and Rabat are mild but rainy. Surfing conditions are excellent with big Atlantic swells.',
    rating: 'Good (Excellent for Agadir)',
  },
  {
    region: 'Mediterranean Coast',
    cities: 'Tangier, Tetouan, Al Hoceima',
    icon: CloudRain,
    tempRange: '12-16 C',
    rainfall: 'High (7-10 rainy days)',
    highlights: 'The wettest, coolest region in December. Tangier is atmospheric but prepare for rain. Not recommended as a primary destination unless you enjoy moody winter coastal scenery. The Rif Mountains may see snow at higher elevations.',
    rating: 'Fair',
  },
  {
    region: 'Interior Cities',
    cities: 'Marrakech, Fes, Meknes',
    icon: Thermometer,
    tempRange: '12-17 C',
    rainfall: 'Moderate (4-6 rainy days)',
    highlights: 'Marrakech averages 15-18 degrees during the day — cool but comfortable for exploration with a jacket. Nights drop to 5-8 degrees. Fes and Meknes are colder (12-15 degrees days, 3-6 degrees nights). Clear sunny spells between showers are common. Snow-capped Atlas visible from Marrakech on clear days.',
    rating: 'Very Good (for winter travel)',
  },
  {
    region: 'Sahara Desert',
    cities: 'Merzouga, Zagora, Draa Valley',
    icon: Tent,
    tempRange: '5-20 C',
    rainfall: 'Virtually none',
    highlights: 'Clear sunny days (15-20 degrees) but genuinely cold nights (5-8 degrees, dropping to near freezing before dawn). Desert camps provide heavy blankets and heated tents in winter. The crystal-clear winter sky offers the best stargazing of the year. Daytime is comfortable for camel treks and dune exploration.',
    rating: 'Good (with warm gear)',
  },
  {
    region: 'Atlas Mountains',
    cities: 'Oukaimeden, Imlil, Ifrane',
    icon: Snowflake,
    tempRange: '-5 to 5 C',
    rainfall: 'Snow (significant at altitude)',
    highlights: 'Ski season opens at Oukaimeden and Michlifen near Ifrane. Heavy snow above 2,500m. Lower valleys like Imlil (1,800m) are cold (0-8 degrees) but accessible. Ifrane, known as Morocco Switzerland, sees snow and freezing temperatures. High-altitude trekking requires winter mountaineering skills.',
    rating: 'Good (for skiing and snow lovers)',
  },
] as const;

/* ===============================================================
   DATA: EVENTS & CELEBRATIONS
   =============================================================== */

const decemberEvents = [
  {
    name: 'Christmas Celebrations in Tourist Establishments',
    icon: Gift,
    dates: 'December 24-25',
    location: 'Marrakech, Essaouira, Fes, Agadir (tourist hotels and riads)',
    description: 'While December 25 is a regular working day in Morocco (a Muslim-majority country), the tourism industry warmly celebrates Christmas for international guests. Upscale riads and hotels offer special Christmas Eve dinners with a Moroccan twist — think roasted lamb with spices instead of turkey, pastilla as a festive starter, and Moroccan pastries alongside Christmas pudding. Many properties decorate courtyards with lanterns and candles, creating an intimate festive atmosphere that blends Moroccan hospitality with holiday warmth.',
    price: 'Christmas Eve dinner from 500-1,500 MAD per person / Regular riad rates apply (peak pricing)',
    tip: 'Book your Christmas Eve dinner when you book your accommodation — popular riads fill their dinner reservations weeks in advance. Some riads include a festive dinner in their Christmas period room rate. The unique blend of Moroccan and Christmas traditions is genuinely special.',
  },
  {
    name: 'New Year Eve Celebrations',
    icon: PartyPopper,
    dates: 'December 31',
    location: 'Marrakech (primary), Essaouira, Agadir, Sahara camps',
    description: 'New Year Eve is Morocco biggest celebration of the Western holiday calendar. Marrakech is the epicenter: Jemaa el-Fnaa erupts into a massive outdoor party with street musicians, performers, and thousands of locals and tourists counting down together. Hotels and riads host gala dinners with live music, multi-course Moroccan-French menus, and midnight celebrations. Nightclubs and rooftop bars hold exclusive parties. In the Sahara, luxury camps offer starlit NYE dinners around campfires. Essaouira hosts beach parties and live music events.',
    price: 'NYE riad gala dinner from 800-2,500 MAD per person / Nightclub events from 500-1,500 MAD / Sahara NYE camp from 3,000 MAD per person',
    tip: 'Jemaa el-Fnaa on NYE is one of Morocco most unforgettable experiences — free and open to all. Book gala dinners and nightclub events at least 3-4 weeks in advance. If celebrating in the Sahara, book a luxury camp with NYE package for a once-in-a-lifetime experience under the desert stars.',
  },
  {
    name: 'Atlas Ski Season Opens',
    icon: Snowflake,
    dates: 'December (conditions permitting)',
    location: 'Oukaimeden, Michlifen (Ifrane)',
    description: 'Morocco ski season opens in December when snowfall accumulates above 2,500m in the Atlas Mountains. Oukaimeden, just 75 km from Marrakech at 2,600m elevation, is the primary resort with several lifts, a ski school, and rental equipment. The resort offers downhill skiing and snowboarding on runs up to 3,200m. Michlifen, near Ifrane in the Middle Atlas, provides an alternative with a more intimate atmosphere. While modest by Alpine or Rocky Mountain standards, skiing in Africa with views stretching toward the Sahara is a unique and memorable experience.',
    price: 'Lift pass from 150 MAD per day / Equipment rental from 200 MAD per day / Ski lessons from 300 MAD',
    tip: 'Combine a morning of skiing at Oukaimeden with an afternoon in sunny Marrakech — the contrast of snow-covered mountains and warm medina streets in the same day is quintessentially Moroccan. Snow conditions are most reliable from mid-December onward. Weekends are busier with Moroccan families.',
  },
  {
    name: 'Marrakech International Film Festival (if December dates)',
    icon: Camera,
    dates: 'Late November / Early December (varies annually)',
    location: 'Marrakech',
    description: 'Some years the FIFM extends into early December, bringing its cinematic glamour into the winter season. International film stars, directors, and industry professionals mingle in the medina. Public screenings, masterclasses, and free outdoor events add cultural depth to a December visit. The festival combined with early December shoulder pricing makes the first week of December particularly appealing.',
    price: 'Public screenings from 50 MAD / Gala events by invitation',
    tip: 'If the Film Festival falls in early December, it represents exceptional value combined with pre-Christmas pricing. Check the festival website for confirmed 2026 dates and plan accordingly.',
  },
] as const;

/* ===============================================================
   DATA: TOP DESTINATIONS IN DECEMBER
   =============================================================== */

const topDestinations = [
  {
    name: 'Marrakech',
    icon: Star,
    why: 'Marrakech is the undisputed king of December travel in Morocco. Winter days of 15-18 degrees are comfortable for medina exploration with a light jacket. The city atmosphere transforms during the holiday season — riads light fires in their salons, rooftop terraces offer sweeping views of snow-capped Atlas peaks, and Jemaa el-Fnaa takes on a festive energy. Christmas and New Year celebrations in the tourist quarter are joyful and unique. The winter light on the rose-pink walls is photographers gold.',
    highlights: 'Festive riad dinners, NYE at Jemaa el-Fnaa, day trip to Oukaimeden for skiing, Atlas mountain views, hammam warmth, winter souks',
    budget: 'Riads from 500-800 MAD/night (early Dec), from 1,000-2,000 MAD (Christmas/NYE), meals from 40 MAD',
  },
  {
    name: 'Sahara Desert (Merzouga & Zagora)',
    icon: Tent,
    why: 'December Sahara offers the clearest skies of the year. While nights are cold (5-8 degrees, near freezing before dawn), daytime temperatures of 15-20 degrees are comfortable for exploration. The crystal-clear winter atmosphere makes stargazing extraordinary — the Milky Way seems close enough to touch. Luxury camps offer heated tents and warm blankets. A New Year celebration under desert stars is unforgettable.',
    highlights: 'Best stargazing of the year, quiet dunes, NYE desert camps, clear winter light, sunrise over frozen dunes',
    budget: 'Desert tour from 1,200 MAD (2 days), luxury winter camp from 2,500 MAD/night, NYE camp from 3,000 MAD/person',
  },
  {
    name: 'Agadir',
    icon: Sun,
    why: 'Agadir is Morocco winter sun capital. While the rest of the country cools down, Agadir maintains 17-22 degrees with minimal rain — warmer than most of southern Europe. The wide sandy beach, modern resort infrastructure, and nearby surf town of Taghazout make it the top choice for travelers seeking winter warmth. The Souss-Massa National Park and Paradise Valley are excellent December excursions.',
    highlights: 'Beach days in winter warmth, Taghazout surfing, Souss-Massa flamingos, Paradise Valley, Agadir Kasbah sunset',
    budget: 'Hotels from 400 MAD/night, meals from 40 MAD, surf lesson from 350 MAD, Paradise Valley from 200 MAD',
  },
  {
    name: 'Fes',
    icon: Globe,
    why: 'December Fes is for travelers who appreciate atmospheric moodiness. Cool days (12-15 degrees) and cold nights (3-6 degrees) thin the tourist crowds to a minimum. The ancient medina, world oldest university, and Merenid tombs are yours to explore in near-solitude. Riad fireplaces, warming harira soup, and the hospitality of Fassi hosts shine brightest in winter. Early December offers low-season pricing before Christmas hikes.',
    highlights: 'Near-empty medina, fireside riad evenings, harira soup, Merenid Tombs, winter light in alleys, Volubilis day trip',
    budget: 'Riads from 350 MAD/night (early Dec), meals from 35 MAD, guided tour from 300 MAD',
  },
  {
    name: 'Oukaimeden & Atlas Mountains',
    icon: Mountain,
    why: 'For a truly unique experience, head to the Atlas Mountains for skiing, snowshoeing, or simply enjoying Morocco alpine scenery. Oukaimeden offers downhill skiing from 2,600m to 3,200m elevation, just 75 km from Marrakech. Combine a morning on the slopes with an afternoon in the warm Marrakech medina. Ifrane, Morocco "Little Switzerland," is blanketed in snow and cedar forests.',
    highlights: 'Skiing at Oukaimeden, snow-capped peaks, Ifrane cedar forests, Berber mountain villages, hot mint tea by the fire',
    budget: 'Oukaimeden day trip from 400 MAD, lift pass from 150 MAD, equipment rental from 200 MAD, Ifrane hotel from 500 MAD',
  },
  {
    name: 'Essaouira',
    icon: Wind,
    why: 'December Essaouira is atmospheric and windswept — perfect for travelers who love dramatic coastal scenery. Cool temperatures (14-18 degrees) keep beaches quiet, but the medina is enchanting with its blue shutters, art galleries, and Gnawa music venues. Surfing conditions are excellent with powerful winter swells. Several riads offer intimate Christmas and New Year celebrations.',
    highlights: 'Dramatic winter seas, uncrowded medina, surf season peak, Gnawa music, gallery visits, festive riad dinners',
    budget: 'Riads from 350 MAD/night, seafood lunch from 50 MAD, surf lesson from 350 MAD',
  },
] as const;

/* ===============================================================
   DATA: PACKING ESSENTIALS
   =============================================================== */

const packingEssentials = [
  {
    item: 'Warm winter jacket',
    icon: Wind,
    detail: 'December Morocco requires a proper winter jacket, not just a light layer. Evening and nighttime temperatures across most regions drop to 3-10 degrees. For Atlas mountains or Sahara nights, temperatures can reach freezing. A warm, packable down jacket is ideal.',
  },
  {
    item: 'Thermal layers for desert and mountains',
    icon: Thermometer,
    detail: 'Sahara nights can drop to near freezing, and Atlas Mountains regularly reach minus 5 degrees. Pack thermal underwear, fleece mid-layers, and warm socks. Desert sunrise camel rides at 5-6 degrees require every warm layer you have.',
  },
  {
    item: 'Rain gear (jacket and umbrella)',
    icon: Umbrella,
    detail: 'December brings significant rain to northern Morocco and moderate showers elsewhere. A waterproof jacket and compact umbrella are essential. Waterproof walking shoes with good grip handle wet medina cobblestones safely.',
  },
  {
    item: 'Smart evening wear for festive events',
    icon: Sparkles,
    detail: 'If attending Christmas Eve dinner, NYE galas, or upscale restaurant celebrations, pack one smart outfit. Moroccan dress codes for these events lean toward smart-casual — collared shirt, trousers, and a nice jacket for men; a dress or smart separates for women.',
  },
  {
    item: 'Sun protection (still necessary)',
    icon: ShieldCheck,
    detail: 'December sun is weaker but still significant, especially in the Sahara, at altitude, and in Agadir. Sunscreen, sunglasses, and a hat remain necessary for outdoor activities. The winter sun at Sahara altitude can surprise with its intensity.',
  },
  {
    item: 'Warm accessories: hat, gloves, scarf',
    icon: Heart,
    detail: 'Essential for mountains, desert nights, and cool city evenings. A warm hat and gloves are mandatory for Oukaimeden skiing and Sahara predawn activities. A large scarf doubles as a cultural covering and warmth layer.',
  },
] as const;

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  {
    tip: 'Travel early December for huge savings',
    description: 'December 1-20 is still relatively affordable, with riad prices only slightly above November low-season rates. From December 21 onward, prices spike 50-100 percent for the Christmas and New Year period. Early December offers winter atmosphere without holiday surcharges.',
    savings: 'Save 40-60% vs Christmas week',
  },
  {
    tip: 'Avoid mandatory NYE dinner charges',
    description: 'Many upscale riads and hotels require guests to purchase expensive NYE gala dinners (from 800-2,500 MAD per person) on December 31. If you prefer budget freedom, book accommodation at smaller riads or guesthouses that do not impose mandatory dinners, or celebrate at the free Jemaa el-Fnaa party.',
    savings: 'Save 800-2,500 MAD per person',
  },
  {
    tip: 'Warm up with Morocco cheapest winter food',
    description: 'December is harira season — the hearty Moroccan lentil soup served everywhere from 10-20 MAD. Roasted chestnuts from street vendors (from 10 MAD), warm msemen with honey (from 5 MAD), and steaming mint tea (from 5 MAD) keep you warm for almost nothing.',
    savings: 'Save 50-70% on comfort meals',
  },
  {
    tip: 'Ski at Oukaimeden on weekdays',
    description: 'Weekend lift queues at Oukaimeden can be significant as Moroccan families from Marrakech descend on the resort. Weekday visits offer shorter queues, better slope access, and sometimes discounted lift passes and lessons.',
    savings: 'Save 10-20% and skip crowds',
  },
  {
    tip: 'Book flights well in advance for Christmas',
    description: 'December flights to Morocco from European cities spike dramatically in the Christmas period. Book at least 6-8 weeks ahead for reasonable fares. Consider flying into alternative airports — Agadir, Fes, or Ouarzazate — which often have cheaper flights than Marrakech during the holiday rush.',
    savings: 'Save 30-50% on flights',
  },
  {
    tip: 'Use holiday riads as your base for day trips',
    description: 'Rather than moving between cities and paying peak accommodation at multiple locations, base yourself in one city (ideally Marrakech) and take day trips. Oukaimeden skiing, Essaouira coast, Atlas valleys, and Ourika waterfalls are all day-trippable from Marrakech.',
    savings: 'Save 20-30% on multi-city accommodation',
  },
] as const;

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  {
    tip: 'December 25 is a normal working day',
    icon: AlertTriangle,
    description: 'Morocco does not observe Christmas as a public holiday. Shops, markets, and local businesses operate normally on December 25. This means the souks are open, transport runs as usual, and you can explore without closures. Tourist establishments celebrate Christmas, but the rest of Morocco carries on as normal.',
  },
  {
    tip: 'Jemaa el-Fnaa on NYE is unmissable and free',
    icon: PartyPopper,
    description: 'Marrakech central square on New Year Eve transforms into one of the most vibrant celebrations in North Africa. Thousands of locals and tourists gather as musicians, acrobats, and food stalls create an electric atmosphere. The countdown at midnight is spontaneous and joyful. No ticket needed — just show up and embrace the energy.',
  },
  {
    tip: 'The best December light is in the Sahara',
    icon: Camera,
    description: 'Winter sun in the Sahara creates a unique quality of light — low angle, warm golden tones, and extraordinarily long shadows on the dunes. December sunset and sunrise over Erg Chebbi are among the most photogenic moments of the year. The cold clear air eliminates summer haze for razor-sharp visibility.',
  },
  {
    tip: 'Riad fireplaces define December evenings',
    icon: Heart,
    description: 'The best December riads have working fireplaces in their communal salons. After a day exploring cool medinas, returning to a fire-warmed room with mint tea and Moroccan pastries is winter travel at its finest. Ask about fireplaces when booking — this feature transforms the December riad experience.',
  },
  {
    tip: 'Book skiing and NYE at least a month ahead',
    icon: CheckCircle,
    description: 'December is high season for both Oukaimeden skiing (weekends) and New Year events. Popular riads, gala dinners, and desert NYE camps sell out 4-6 weeks before December 31. Early December is more flexible, but Christmas and NYE require advance planning.',
  },
  {
    tip: 'Layer for 30-degree temperature swings',
    icon: Thermometer,
    description: 'A single December day can range from near-freezing at dawn to a comfortable 18 degrees at midday and back to 5 degrees by evening. In the Sahara, the swing is even more dramatic. Mastering layers — adding and removing throughout the day — is the key skill for December Morocco.',
  },
] as const;

/* ===============================================================
   DATA: CHRISTMAS & NYE PLANNING
   =============================================================== */

const holidayPlanning = [
  {
    title: 'Christmas Eve Dinner in a Riad',
    icon: Gift,
    description: 'Many riads offer special Christmas Eve dinners blending Moroccan and Western festive traditions. Expect candlelit courtyards, multi-course meals featuring Moroccan lamb or pastilla alongside festive desserts, and the warm hospitality that defines riad culture. Some riads include live Gnawa or Andalusian music. Prices range from 500-1,500 MAD per person depending on the property.',
    bookingTip: 'Reserve your Christmas Eve dinner when you book your riad — at least 3-4 weeks ahead. Ask if the dinner is included in the room rate during the festive period, as some riads bundle it.',
  },
  {
    title: 'New Year Eve in Marrakech',
    icon: PartyPopper,
    description: 'Marrakech offers three distinct NYE experiences. First, the free Jemaa el-Fnaa celebration — raw, authentic, and unforgettable. Second, riad and hotel gala dinners with multi-course meals, live entertainment, and midnight celebrations (from 800-2,500 MAD). Third, nightclub and rooftop bar parties with DJs, champagne, and countdown events (from 500-1,500 MAD). Many visitors combine a riad dinner with a midnight walk to the square.',
    bookingTip: 'Book gala dinners 4-6 weeks ahead. For nightclub events, buy tickets online in advance. If your riad requires a mandatory NYE dinner, factor this into your accommodation budget. Jemaa el-Fnaa requires no booking — arrive by 10 PM for the best atmosphere.',
  },
  {
    title: 'New Year Eve in the Sahara',
    icon: Tent,
    description: 'Spending NYE under Sahara stars is a bucket-list experience. Luxury desert camps near Merzouga and Zagora offer special New Year packages: camel trek to camp, multi-course dinner under the stars, Berber music and drumming, bonfire, and midnight celebration in the silence of the dunes. The Milky Way above and the cold desert air create an atmosphere unlike any other NYE on Earth.',
    bookingTip: 'Book Sahara NYE camps at least 6 weeks in advance — the best camps sell out early. Expect from 3,000-5,000 MAD per person all-inclusive. Pack every warm layer you own — midnight in the December Sahara can be near freezing.',
  },
  {
    title: 'Christmas Day Activities',
    icon: Calendar,
    description: 'Since December 25 is a normal working day in Morocco, you have full access to all attractions, markets, and transport. Spend Christmas Day exploring the Marrakech medina, visiting Bahia Palace, shopping in the souks, or taking a day trip to the Atlas Mountains or Essaouira. Many riads serve a special Christmas lunch for guests. It is a Christmas like no other — warm, culturally rich, and wonderfully different from home.',
    bookingTip: 'No special booking needed for Christmas Day activities as everything operates normally. Your riad may offer a festive Christmas lunch — inquire when booking. Grand taxis and buses run on regular schedules.',
  },
] as const;

/* ===============================================================
   DATA: SAMPLE ITINERARY
   =============================================================== */

const sampleItinerary = [
  {
    day: 'Days 1-3',
    title: 'Marrakech: Winter Medina & Festive Atmosphere',
    morning: 'Day 1: Arrive in Marrakech. Settle into your riad — look for one with a fireplace. Walk to Jemaa el-Fnaa to experience the winter atmosphere — cooler air, steam rising from food stalls, the snow-capped Atlas visible above the rooftops. Bahia Palace (from 70 MAD).',
    afternoon: 'Day 2-3: Majorelle Garden (from 150 MAD), souk exploration in comfortable winter temperatures, hammam (from 100 MAD) — the perfect December activity. Day trip to Oukaimeden for skiing or snow-seeing (from 400 MAD with transport). Return to warm Marrakech by late afternoon.',
    evening: 'Fireside dinner in your riad or a rooftop restaurant with Atlas mountain views (from 150 MAD). If Christmas Eve falls during your stay, enjoy the special riad dinner. December evenings are cool but magical with the medina illuminated by lanterns.',
  },
  {
    day: 'Days 4-5',
    title: 'Sahara Desert: Cold Nights, Clear Skies',
    morning: 'Day 4: Depart for the Sahara via the Atlas. Winter views of snow-covered High Atlas peaks against clear blue sky are spectacular. Ait Benhaddou (from 20 MAD), lunch in Ouarzazate (from 50 MAD). Continue to Merzouga or Zagora.',
    afternoon: 'Day 4-5: Afternoon camel trek into the dunes for sunset (included in most tours). December afternoon temperatures of 15-18 degrees are comfortable in the sun. Arrive at camp for Berber music and dinner. The winter desert is peaceful and nearly empty of other tourists.',
    evening: 'Night in desert camp (from 1,000 MAD in December). Bundle up warmly — overnight temperatures drop to 5-8 degrees. The compensation: the clearest stargazing of the year. The Milky Way in December Sahara skies is overwhelming. Wake for sunrise — frozen dunes at dawn are hauntingly beautiful.',
  },
  {
    day: 'Days 6-7',
    title: 'Fes or Essaouira: Culture or Coast',
    morning: 'Option A: Fes via the Ziz Valley. December Fes medina is nearly empty of tourists. Guided tour (from 300 MAD) allows intimate exploration of Al Quaraouiyine, Chouara Tanneries, and artisan workshops. Option B: Essaouira for winter coast atmosphere and surfing.',
    afternoon: 'Fes: Ceramics workshop (from 200 MAD), Merenid Tombs for panoramic views, winter harira soup at a local cafe (from 15 MAD). Essaouira: Beach walk in winter winds, port seafood (from 50 MAD), medina art galleries, surf session (from 350 MAD).',
    evening: 'Fes: Fireside riad dinner with traditional Fassi feast (from 200 MAD). Essaouira: Gnawa music at a medina venue, seafood dinner (from 80 MAD). Both cities offer intimate, uncrowded December evenings.',
  },
  {
    day: 'Days 8-9',
    title: 'Return to Marrakech for New Year Eve',
    morning: 'Day 8: Return to Marrakech. Final day of exploration — visit sites you missed, last souk shopping, or relax at a spa (from 300 MAD). Day 9 (NYE): Leisurely morning at the riad, lunch in the medina (from 50 MAD).',
    afternoon: 'Prepare for New Year Eve. Visit the Koutoubia Mosque gardens for views of snow-capped Atlas in winter light. Hammam treatment to prepare for the evening (from 150 MAD). Rest at the riad before the celebrations begin.',
    evening: 'New Year Eve: Option 1 — Riad gala dinner (from 800 MAD) followed by midnight walk to Jemaa el-Fnaa. Option 2 — Jemaa el-Fnaa street food dinner (from 30 MAD) and countdown in the square. Option 3 — Nightclub or rooftop bar party (from 500 MAD). Welcome the New Year in the magic of Marrakech.',
  },
] as const;

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'Is December a good time to visit Morocco?',
    answer: 'December is an excellent time for travelers seeking a unique winter escape. Marrakech offers comfortable winter days (15-18 degrees), festive riad celebrations, and vibrant NYE events. The Sahara provides crystal-clear stargazing under cold winter skies. Agadir offers genuine winter warmth (17-22 degrees). Atlas skiing opens. The trade-offs are cooler temperatures, occasional rain, and peak pricing around Christmas and New Year. Early December offers the best value with winter atmosphere minus the holiday surcharges.',
  },
  {
    question: 'Does Morocco celebrate Christmas and New Year?',
    answer: 'Morocco is a Muslim-majority country. December 25 is a normal working day with no public Christmas celebrations. However, tourist-oriented hotels, riads, and restaurants celebrate Christmas for their international guests with special dinners, decorations, and festive menus. New Year Eve is more widely celebrated, with Jemaa el-Fnaa in Marrakech hosting a massive free celebration, and hotels, nightclubs, and desert camps offering gala events. Moroccan families often celebrate the secular aspects of New Year.',
  },
  {
    question: 'How cold does Morocco get in December?',
    answer: 'Temperatures vary dramatically by region and time of day. Daytime in Marrakech: 15-18 degrees (comfortable with a jacket). Nighttime in Marrakech: 5-8 degrees (genuine cold). Sahara days: 15-20 degrees (pleasant in sun). Sahara nights: 5-8 degrees, near freezing at dawn. Atlas Mountains: minus 5 to 5 degrees (winter conditions, snow). Agadir: 17-22 degrees (mild winter warmth). Northern coast: 12-16 degrees with rain. Pack for genuine cold, especially evenings.',
  },
  {
    question: 'How much does a December trip to Morocco cost?',
    answer: 'Early December (1st-20th): budget from 600-1,000 MAD per day (hostel, street food, buses) to from 2,500-4,000 MAD per day (boutique riad, restaurants, guided tours). Christmas and NYE period (21st-Jan 2): prices spike 50-100 percent. Riads from 1,000-2,000 MAD per night, NYE dinners from 800-2,500 MAD per person, and flights at yearly highs. Total December trip costs range from 8,000 MAD (9-day budget, early December) to from 50,000+ MAD (9-day luxury Christmas and NYE package).',
  },
  {
    question: 'What is the best December destination in Morocco?',
    answer: 'Marrakech is the number one December destination — comfortable winter weather, festive atmosphere, proximity to Atlas skiing, and the best NYE celebration in the country. For winter sun, Agadir is unbeatable at 17-22 degrees. For desert magic, the Sahara offers the clearest skies of the year (but bring warm layers). For cultural immersion in near-solitude, Fes is extraordinary. For surfers, Taghazout and Essaouira have the best winter swells.',
  },
  {
    question: 'Should I book in advance for December?',
    answer: 'For early December (1st-20th), two to three weeks advance booking is sufficient for most accommodation. For the Christmas and NYE period (21st-Jan 2), book at least 6-8 weeks ahead for popular riads, gala dinners, desert NYE camps, and flights. The most sought-after Marrakech riads and Sahara luxury camps sell out by early November for the holiday period. Book flights as early as possible — December fares to Morocco from Europe escalate rapidly.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  {
    href: '/morocco-in-november',
    title: 'Morocco in November',
    description: 'Late autumn with low-season prices and olive harvest.',
    icon: TreesIcon,
  },
  {
    href: '/morocco-in-january',
    title: 'Morocco in January',
    description: 'Deep winter with continued skiing and post-holiday calm.',
    icon: Snowflake,
  },
  {
    href: '/best-time-visit-morocco',
    title: 'Best Time to Visit Morocco',
    description: 'Month-by-month guide to find your ideal travel window.',
    icon: Clock,
  },
  {
    href: '/morocco-ski-resorts',
    title: 'Morocco Ski Resorts',
    description: 'Oukaimeden, Michlifen, and skiing in Africa.',
    icon: Mountain,
  },
  {
    href: '/morocco-sahara-guide',
    title: 'Sahara Desert Guide',
    description: 'Desert tours, camps, and stargazing in winter.',
    icon: Tent,
  },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoInDecemberPage() {
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
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/best-time-visit-morocco" className="hover:text-white transition-colors">
              Best Time to Visit
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">December</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Snowflake className="w-4 h-4" />
            Winter &amp; Holiday Travel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco in December
            <br className="hidden md:block" /> 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Winter magic, Christmas celebrations, New Year Eve in Marrakech, Atlas skiing, and
            starlit Sahara nights. Your complete guide to December travel in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              December: A Winter Escape Like No Other
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                December in Morocco is a study in contrasts. Snow blankets the Atlas peaks while
                Agadir basks in 22-degree sunshine. Marrakech medina buzzes with festive energy while
                the Sahara dunes sit in frozen silence at dawn. Riads glow with firelight and
                candlelit Christmas dinners while December 25 is a regular working day in the souks.
                This is what makes December Morocco so compelling — it is a winter destination that
                defies every expectation.
              </p>
              <p>
                For Christmas and New Year travelers, Morocco offers something no European destination
                can: genuine warmth (both climatic and human), exotic cultural immersion, and a festive
                experience that blends Moroccan hospitality with holiday traditions. Christmas Eve in
                a riad courtyard — warm spiced lamb, Moroccan pastries, candles reflecting off zellige
                tiles — is an intimate alternative to the commercial Christmas of the West. New Year
                Eve in Jemaa el-Fnaa, surrounded by thousands celebrating under the winter stars, is
                one of the most atmospheric countdowns on Earth.
              </p>
              <p>
                December also opens the Atlas ski season, bringing a uniquely African winter sports
                experience. The contrast of morning skiing at 3,000 meters followed by afternoon tea
                in warm Marrakech is quintessentially Moroccan. And in the Sahara, December clear
                cold skies produce the best stargazing of the year — the trade-off for cold nights
                is a Milky Way so vivid it seems painted across the heavens. Whether you seek
                festive celebrations, winter sun, mountain snow, or desert stars, December Morocco
                has your answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Weather by Region -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            December Weather by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            December is genuine winter in Morocco. Conditions range from snow in the Atlas to
            beach weather in Agadir. Know what to expect in each region.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Temperatures are approximate ranges. Night temperatures can be significantly colder than daytime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {weatherRegions.map((region) => {
              const WeatherIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <WeatherIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {region.region}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{region.cities}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)]">
                      <Thermometer className="w-4 h-4" />
                      {region.tempRange}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <CloudRain className="w-3.5 h-3.5" />
                      {region.rainfall}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {region.highlights}
                  </p>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-50 text-green-700">
                    {region.rating}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Events & Celebrations -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <PartyPopper className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            December Events &amp; Celebrations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Christmas, New Year, the opening of ski season, and a unique blend of Moroccan and
            Western festive traditions define December.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Book Christmas and NYE events well in advance. Popular venues sell out weeks early.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {decemberEvents.map((event) => {
              const EventIcon = event.icon;
              return (
                <div key={event.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <EventIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {event.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {event.dates}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {event.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {event.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {event.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Christmas & NYE Planning -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gift className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Christmas &amp; New Year Planning Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know about celebrating the holidays in Morocco, from
            intimate riad dinners to desert stargazing parties.
          </p>

          <div className="space-y-6 max-w-5xl mx-auto">
            {holidayPlanning.map((item) => {
              const PlanIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <PlanIcon className="w-6 h-6 text-[var(--color-gold)]" />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] pt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Booking Tip:</span>{' '}
                      {item.bookingTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Top Destinations -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Destinations in December
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From festive Marrakech to winter sun in Agadir and snow in the Atlas,
            December Morocco caters to every type of winter traveler.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {topDestinations.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DestIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {dest.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {dest.why}
                  </p>
                  <div className="mb-3">
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Highlights:</span>{' '}
                      {dest.highlights}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Wallet className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Budget:</span>{' '}
                      {dest.budget}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Packing Essentials -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for December
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            December Morocco is genuine winter. Pack for cold nights, variable days,
            and potential rain — plus smart wear for festive celebrations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packingEssentials.map((item) => {
              const PackIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <PackIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.item}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
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
            <Wallet className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for December
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            December pricing peaks around Christmas and NYE. Smart planning can save hundreds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {budgetTips.map((tip, index) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for December
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential local knowledge for navigating December Morocco — from holiday etiquette
            to temperature management.
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
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 9-Day December Itinerary (Christmas &amp; NYE)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A festive route covering Marrakech, the Sahara, coast or culture, and returning
            to Marrakech for New Year Eve.
          </p>

          <div className="space-y-6">
            {sampleItinerary.map((day) => (
              <div key={day.day} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {day.day}: {day.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                      <p className="text-xs text-[var(--text-secondary)]">{day.morning}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                      <p className="text-xs text-[var(--text-secondary)]">{day.afternoon}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                      <p className="text-xs text-[var(--text-secondary)]">{day.evening}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Budget Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                9-Day Budget Summary (per person, Christmas &amp; NYE period)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 8,000-12,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Budget riads, street food, buses, shared desert tour, free NYE</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 18,000-28,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Quality riads, restaurants, private desert camp, NYE dinner</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 35,000-60,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Boutique hotels, private tours, luxury NYE gala, fine dining</p>
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
            Ready for December in Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From festive riad dinners and Jemaa el-Fnaa countdowns to Atlas skiing and Sahara
            stargazing, December Morocco offers a winter escape like nowhere else. Start planning
            your holiday adventure today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/best-time-visit-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Best Time to Visit
            </Link>
            <Link
              href="/morocco-ski-resorts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mountain className="w-5 h-5" />
              Ski Resorts
            </Link>
            <Link
              href="/morocco-sahara-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Tent className="w-5 h-5" />
              Sahara Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

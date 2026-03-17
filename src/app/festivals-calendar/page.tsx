import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  Music,
  Star,
  MapPin,
  Camera,
  Users,
  Drum,
  Palette,
  Trophy,
  ChevronRight,
  Info,
  Clock,
  Ticket,
  Heart,
  Sun,
  Snowflake,
  Flower2,
  Leaf,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title:
    'Morocco Festivals Calendar 2025-2026 | Month-by-Month Guide to Every Event',
  description:
    'Complete month-by-month guide to Morocco\'s festivals and events. Music festivals, religious holidays, cultural celebrations, sporting events, and food festivals with dates, locations, and planning tips.',
  keywords: [
    'Morocco festivals calendar',
    'Morocco events 2025',
    'Morocco festivals 2026',
    'Gnaoua Festival Essaouira',
    'Mawazine Rabat',
    'Rose Festival Morocco',
    'Fes Sacred Music Festival',
    'Marathon des Sables',
    'Ramadan Morocco',
    'Eid Morocco',
    'Morocco music festivals',
    'Morocco cultural events',
    'Morocco food festivals',
    'Tbourida Fantasia',
    'Marrakech Film Festival',
    'Yennayer Amazigh New Year',
    'Almond Blossom Festival',
    'Morocco event calendar',
    'festivals in Morocco by month',
  ],
  openGraph: {
    title: 'Morocco Festivals Calendar - Complete Month-by-Month Guide',
    description:
      'Every festival, event, and celebration in Morocco organized by month. Music, culture, food, sport, and religious events with dates, tips, and insider advice.',
    url: 'https://citytoursmorocco.com/festivals-calendar',
    images: [
      {
        url: '/images/hero-festival-morocco.webp',
        width: 1200,
        height: 630,
        alt: 'Vibrant Moroccan festival with traditional musicians and colorful celebrations - citytoursmorocco.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Festivals Calendar | Month-by-Month Guide',
    description:
      'Complete guide to Morocco\'s festivals and events throughout the year. Music, culture, food, sport, and religious celebrations.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/festivals-calendar' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://citytoursmorocco.com/festivals-calendar',
  name: 'Morocco Festivals Calendar - Complete Month-by-Month Guide',
  description:
    'Comprehensive month-by-month guide to all festivals and events in Morocco, including music festivals, religious holidays, cultural celebrations, sporting events, and food festivals.',
  url: 'https://citytoursmorocco.com/festivals-calendar',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
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
        name: 'Culture',
        item: 'https://citytoursmorocco.com/culture',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Festivals Calendar',
        item: 'https://citytoursmorocco.com/festivals-calendar',
      },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best festival in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Gnaoua World Music Festival in Essaouira is widely considered Morocco\'s most iconic festival, combining traditional Gnaoua music with international collaborations in a stunning Atlantic coastal setting. However, the Fes Festival of World Sacred Music and Mawazine in Rabat are also top-tier events, each offering a very different experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Morocco for festivals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'May and June are the peak festival months, with the Rose Festival, Fes Sacred Music Festival, Gnaoua Festival, and Mawazine all taking place. However, Morocco has festivals year-round. Spring (March-May) and autumn (September-November) offer the best combination of pleasant weather and festival activity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Morocco festivals free to attend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many of Morocco\'s largest festivals are completely free, including the Gnaoua Festival in Essaouira and most Mawazine concerts in Rabat. The Fes Sacred Music Festival charges for main evening concerts (300-800 MAD) but has many free events. Traditional moussems, food festivals, and cultural celebrations are generally free to attend.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the dates for Ramadan in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ramadan follows the Islamic lunar calendar and shifts approximately 10-11 days earlier each year. In 2025, Ramadan is expected around February 28 - March 30. In 2026, it will be approximately February 17 - March 19. Exact dates depend on moon sighting and are confirmed just before the start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to book accommodation early for Morocco festivals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, absolutely. For major festivals like Gnaoua (Essaouira), the Marrakech Film Festival, and the Rose Festival (Kelaat M\'Gouna), accommodation fills up weeks or even months in advance. Prices can double or triple during festival periods. Book at least 2-3 months ahead for popular events.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can tourists attend religious festivals in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tourists are welcome to observe and participate in many religious celebrations. During Ramadan, visitors should be respectful by not eating, drinking, or smoking in public during daylight hours. Eid celebrations are festive occasions where locals often invite visitors to share meals. However, some moussems and shrine visits may be restricted to Muslims only.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear to festivals in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dress modestly and comfortably. Lightweight, breathable clothing that covers shoulders and knees is appropriate for most festivals. For religious events, dress more conservatively. Comfortable walking shoes are essential. Bring layers for evening events as temperatures can drop, especially in coastal cities like Essaouira.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Marathon des Sables open to amateur runners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Marathon des Sables is open to amateur runners, though it requires serious preparation. Participants must pass a medical exam and carry their own food and supplies for the multi-day race through the Sahara. Entry fees are substantial (around 3,500 EUR), and registration often opens a year in advance. About 1,000 runners from over 50 countries participate each year.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

interface MonthFestival {
  name: string;
  dates: string;
  location: string;
  category: string;
  description: string;
  highlights: string[];
  practicalTip: string;
  icon: React.ElementType;
}

interface MonthData {
  month: string;
  monthNum: number;
  season: string;
  seasonIcon: React.ElementType;
  weather: string;
  festivals: MonthFestival[];
}

/* ═══════════════════════════════════════════════════════════════
   MONTH-BY-MONTH DATA
   ═══════════════════════════════════════════════════════════════ */

const monthlyCalendar: MonthData[] = [
  {
    month: 'January',
    monthNum: 1,
    season: 'Winter',
    seasonIcon: Snowflake,
    weather: 'Cool and mild in cities (8-18C), cold in mountains with snow. Ideal for desert trips.',
    festivals: [
      {
        name: 'Yennayer - Amazigh New Year',
        dates: 'January 13-14',
        location: 'Nationwide (especially Atlas regions, Agadir, Tiznit)',
        category: 'Cultural',
        description:
          'Yennayer marks the Amazigh (Berber) New Year, celebrated on January 13th according to the Julian agricultural calendar. This ancient celebration predates the arrival of Islam and Christianity in North Africa and has been observed for nearly three millennia. In 2018, King Mohammed VI declared Yennayer an official national holiday, recognizing Morocco\'s deep Amazigh roots. Families gather for elaborate feasts featuring couscous with seven vegetables, dried fruits, and nuts. In the Atlas Mountains and Souss region, traditional dances, bonfires, and communal meals bring communities together. Children receive new clothes and gifts. The celebration is a powerful affirmation of Amazigh identity and cultural continuity.',
        highlights: [
          'Traditional feasts with couscous and seven vegetables',
          'Bonfires and communal celebrations in Atlas villages',
          'Amazigh music and Ahwach dance performances',
          'Cultural exhibitions in Agadir, Tiznit, and Rabat',
        ],
        practicalTip:
          'Head to the Souss-Massa region (Agadir, Tiznit, Tafraout) or Atlas Mountain villages for the most authentic celebrations. Many riads and hotels organize special Yennayer dinners for guests.',
        icon: Star,
      },
      {
        name: 'Marrakech Marathon',
        dates: 'Late January (usually last Sunday)',
        location: 'Marrakech',
        category: 'Sport',
        description:
          'The Marrakech International Marathon is one of Africa\'s most scenic road races, attracting over 13,000 runners from more than 60 countries. The course winds through the historic medina, past the Koutoubia Mosque, along the ramparts, through the Menara Gardens, and into the Palmeraie. With its flat course and mild January temperatures (perfect running weather of 12-20 degrees Celsius), it is an excellent choice for runners seeking a PB in an extraordinary setting. The event includes a full marathon, half marathon, and 10K fun run, making it accessible to runners of all levels.',
        highlights: [
          'Scenic route past Marrakech landmarks and through the Palmeraie',
          'Flat, fast course ideal for personal bests',
          'Over 13,000 participants from 60+ countries',
          'Lively spectator atmosphere with traditional music along the route',
        ],
        practicalTip:
          'Register online well in advance at the official website. Arrive 2-3 days early to acclimatize. Post-race, treat yourself to a hammam session to soothe tired muscles.',
        icon: Trophy,
      },
    ],
  },
  {
    month: 'February',
    monthNum: 2,
    season: 'Winter',
    seasonIcon: Snowflake,
    weather: 'Mild and pleasant (10-20C). Almond trees begin to bloom in the south.',
    festivals: [
      {
        name: 'Almond Blossom Festival',
        dates: 'Mid-February (varies with bloom)',
        location: 'Tafraout, Anti-Atlas Mountains',
        category: 'Cultural',
        description:
          'Each February, the valleys surrounding the small Amazigh town of Tafraout transform into a breathtaking sea of pink and white as thousands of almond trees burst into bloom. The Almond Blossom Festival celebrates this annual miracle of nature with a multi-day program of traditional Amazigh music, folk dancing (including the hypnotic Ahwach and Ahouach dances), poetry recitations, and culinary celebrations featuring almond-based dishes. Local cooperatives showcase their almond oil, amlou (a delicious almond-argan butter), and pastries. The festival is a celebration of agricultural heritage and Amazigh identity in one of Morocco\'s most stunningly beautiful landscapes, where granite boulders painted by Belgian artist Jean Verame add surreal splashes of color to the natural palette.',
        highlights: [
          'Valleys blanketed in pink and white almond blossoms',
          'Traditional Ahwach and Ahouach dance performances',
          'Tasting of amlou, almond pastries, and local honey',
          'Painted Rocks of Tafraout and spectacular Anti-Atlas scenery',
        ],
        practicalTip:
          'The bloom timing varies by year depending on rainfall and temperature. Contact local hotels to check conditions before traveling. Tafraout is a 4-hour drive from Agadir; consider renting a car for flexibility.',
        icon: Flower2,
      },
    ],
  },
  {
    month: 'March',
    monthNum: 3,
    season: 'Spring',
    seasonIcon: Flower2,
    weather: 'Spring arrives with warm days (15-25C). Wildflowers carpet the countryside.',
    festivals: [
      {
        name: 'Atlas Music Festival',
        dates: 'Mid-to-late March',
        location: 'Marrakech and Atlas Mountain venues',
        category: 'Music',
        description:
          'The Atlas Music Festival brings together Moroccan and international musicians for a celebration of world music against the dramatic backdrop of the Atlas Mountains. The festival features intimate concerts in historic venues around Marrakech, including riads, gardens, and mountain lodges. Unlike the massive open-air festivals of summer, Atlas Music offers a more curated, boutique experience. Programming spans traditional Moroccan genres (Gnaoua, Andalusian classical, Chaabi), contemporary fusion, jazz, and electronic music. Workshops and masterclasses allow attendees to learn traditional instruments like the guembri and oud. The festival often includes excursions to mountain villages where musicians perform in traditional settings.',
        highlights: [
          'Intimate concerts in historic Marrakech venues and mountain lodges',
          'Fusion of traditional Moroccan and international music',
          'Instrument workshops and masterclasses',
          'Cultural excursions to Atlas Mountain villages',
        ],
        practicalTip:
          'This is a smaller, more intimate festival, so book early for specific concerts. Many events are ticketed. Combine with spring trekking in the Atlas Mountains for an unforgettable trip.',
        icon: Music,
      },
    ],
  },
  {
    month: 'April',
    monthNum: 4,
    season: 'Spring',
    seasonIcon: Flower2,
    weather: 'Warm and beautiful (18-28C). The best month for trekking and outdoor activities.',
    festivals: [
      {
        name: 'Marathon des Sables',
        dates: 'Early-to-mid April (6 stages over 7 days)',
        location: 'Sahara Desert, near Ouarzazate',
        category: 'Sport',
        description:
          'Known as the "toughest footrace on Earth," the Marathon des Sables (MDS) is a legendary multi-stage ultramarathon covering approximately 250 kilometers across the Sahara Desert over six stages in seven days. Founded in 1986 by French concert promoter Patrick Bauer after he walked across the Algerian Sahara alone, the MDS has become the ultimate bucket-list challenge for endurance athletes worldwide. Participants carry all their own food and supplies in backpacks (only water and tents are provided), navigating sand dunes, rocky plateaus, dried riverbeds, and occasional sandstorms in temperatures exceeding 50 degrees Celsius. About 1,000 runners from over 50 countries participate each year, with the longest single stage stretching over 80 kilometers and requiring competitors to run through the night. The camaraderie among competitors is legendary, with strangers becoming lifelong friends through shared suffering and triumph.',
        highlights: [
          'Approximately 250km across the Sahara Desert in 7 days',
          'Competitors carry all their own food and supplies',
          'About 1,000 runners from 50+ countries each year',
          'Spectacular desert landscapes including erg, reg, and jebel terrain',
        ],
        practicalTip:
          'Registration opens approximately one year in advance and costs around 3,500 EUR. Serious training (6-12 months minimum) and a medical certificate are required. Spectators can follow the race via tracking and attend the start/finish near Ouarzazate.',
        icon: Trophy,
      },
    ],
  },
  {
    month: 'May',
    monthNum: 5,
    season: 'Spring',
    seasonIcon: Flower2,
    weather: 'Warm and sunny (22-32C). Roses bloom in the Dades Valley.',
    festivals: [
      {
        name: 'Rose Festival (Festival des Roses)',
        dates: 'Mid-May (2-3 days, timed with harvest)',
        location: 'Kelaat M\'Gouna, Dades Valley',
        category: 'Cultural',
        description:
          'The Rose Festival is one of Morocco\'s most enchanting and photogenic celebrations, held annually in the small town of Kelaat M\'Gouna in the Valley of Roses (Vallee des Roses) at the edge of the Sahara. Each May, when millions of Damascus roses (Rosa damascena) burst into bloom along the Dades River, the town erupts in a three-day celebration of this fragrant harvest. The festival features a spectacular parade with elaborately decorated floats, the crowning of the Rose Queen, traditional Amazigh music and dancing, rose-water distillation demonstrations, and a bustling souk where vendors sell rose water, rose oil, rose cream, rose soap, and every imaginable rose product. The air is heavy with the intoxicating scent of fresh roses, and visitors are often showered with rose petals. The surrounding valley, with its dramatic red-rock gorges, kasbahs, and oases, provides an extraordinary backdrop.',
        highlights: [
          'Grand parade with decorated floats and the crowning of the Rose Queen',
          'Millions of Damascus roses in bloom across the valley',
          'Rose-water distillation demonstrations at local cooperatives',
          'Traditional Amazigh music, dancing, and Fantasia horsemanship',
        ],
        practicalTip:
          'Kelaat M\'Gouna is about 90 minutes from Ouarzazate. Accommodation is very limited -- book months in advance or base yourself in Ouarzazate or Boumalne Dades. Visit the rose cooperatives to buy high-quality rose products directly from producers.',
        icon: Flower2,
      },
      {
        name: 'Fes Festival of World Sacred Music',
        dates: 'Late May to early June (9 days)',
        location: 'Fes',
        category: 'Music',
        description:
          'One of the most prestigious and intellectually stimulating music festivals in the world, the Fes Festival of World Sacred Music brings together sacred music traditions from every corner of the globe in Morocco\'s ancient spiritual capital. Founded in 1994 by Sufi scholar Faouzi Skali, the festival presents an extraordinary program of Sufi chanting, Gospel choirs, Hindu devotional music, Buddhist monks, Gregorian chants, Andalusian orchestras, Jewish cantors, and indigenous spiritual music traditions. Main evening concerts take place in the breathtaking Bab Makina, a palatial square within the Royal Palace grounds, while intimate daytime events unfold in historic gardens, riads, and medersas. The festival also hosts philosophical debates, interfaith dialogues, and a parallel "Festival in the City" with free performances throughout the medina. UNESCO has endorsed this festival as a vital cultural event promoting peace and cross-cultural understanding.',
        highlights: [
          'Evening concerts at the magnificent Bab Makina palace grounds',
          'Sacred music from Islam, Christianity, Judaism, Hinduism, and Buddhism',
          'Free Sufi Nights with ecstatic dhikr ceremonies in the medina',
          'Philosophical debates and interfaith dialogue sessions',
        ],
        practicalTip:
          'Book Bab Makina evening concert tickets (300-800 MAD) well in advance. Do not miss the free Sufi Nights in the medina. The festival attracts a sophisticated international audience; combine with exploration of the world\'s largest car-free urban area.',
        icon: Music,
      },
    ],
  },
  {
    month: 'June',
    monthNum: 6,
    season: 'Summer',
    seasonIcon: Sun,
    weather: 'Hot in interior (30-40C), pleasant on the coast (20-28C). Peak festival season.',
    festivals: [
      {
        name: 'Gnaoua World Music Festival',
        dates: 'Late June (3-4 days)',
        location: 'Essaouira',
        category: 'Music',
        description:
          'The crown jewel of Moroccan music festivals and one of Africa\'s most important cultural events. Founded in 1998, the Gnaoua World Music Festival celebrates Gnaoua music, a spiritual art form rooted in sub-Saharan African traditions brought to Morocco centuries ago. Gnaoua master musicians (maallems) perform alongside international jazz, blues, and world music artists, creating extraordinary one-of-a-kind fusion collaborations on open-air stages overlooking the Atlantic Ocean. In 2019, Gnaoua music was inscribed on UNESCO\'s Intangible Cultural Heritage list, a recognition the festival helped achieve. The entire fortified city of Essaouira transforms into one vast open-air concert hall, with stages along the ramparts, in the port, and throughout the medina. Over 500,000 visitors attend each year, drawn by the promise of completely free world-class music in an unforgettable setting.',
        highlights: [
          'All concerts are completely free of charge',
          'Unique maallen-international artist fusion collaborations',
          'Multiple stages throughout the atmospheric walled medina',
          'Over 500,000 attendees from around the world',
        ],
        practicalTip:
          'Book accommodation 2-3 months in advance as Essaouira fills completely. Bring warm layers -- the city is notoriously windy even in June. Arrive early for headline evening concerts. Explore intimate lila ceremonies in private houses during the day.',
        icon: Drum,
      },
      {
        name: 'Mawazine Rhythms of the World',
        dates: 'Mid-June (9 days)',
        location: 'Rabat',
        category: 'Music',
        description:
          'One of the largest music festivals in the world by attendance, Mawazine routinely draws over 2.5 million visitors across nine days in Morocco\'s capital city. Held under the patronage of King Mohammed VI, the festival features two colossal main stages -- OLM Souissi for international pop, rock, and hip-hop headliners, and the Nahda stage for Arabic and Moroccan music superstars. Past headliners include Rihanna, Shakira, Stevie Wonder, Elton John, Christina Aguilera, and David Guetta. Smaller venues across Rabat host jazz, classical, world music, and emerging talent. What makes Mawazine remarkable is that approximately 90% of all concerts are completely free, making world-class entertainment accessible to millions. Single headline concerts can draw crowds exceeding 200,000 people, creating an atmosphere of pure euphoria.',
        highlights: [
          'Over 2.5 million attendees across nine days',
          'International pop, rock, and hip-hop superstars',
          'Approximately 90% of concerts are free',
          'Multiple stages across Rabat with diverse programming',
        ],
        practicalTip:
          'Arrive very early for international headline acts as crowds are enormous. Take the Al Boraq high-speed train from Casablanca (45 min). Explore the Kasbah of the Udayas and Chellah during daytime hours between concerts.',
        icon: Music,
      },
    ],
  },
  {
    month: 'July',
    monthNum: 7,
    season: 'Summer',
    seasonIcon: Sun,
    weather: 'Very hot inland (35-45C). Head to the coast or mountains for relief.',
    festivals: [
      {
        name: 'Festival of Popular Arts (Festival National des Arts Populaires)',
        dates: 'Mid-July (4-5 days)',
        location: 'Marrakech',
        category: 'Cultural',
        description:
          'The Festival of Popular Arts is Marrakech\'s oldest and most traditional cultural event, dating back to the 1960s. This spectacular celebration of Morocco\'s diverse folk traditions brings together performers from every region of the country: Amazigh dancers from the Atlas Mountains, Gnaoua troupes from Essaouira, Guedra dancers from the Sahara, Ait Baha acrobats, Houara musicians from the Souss, and dozens of other groups representing Morocco\'s extraordinary cultural mosaic. Performances take place in the stunning El Badi Palace ruins and on the stage of the Jemaa el-Fnaa, with evening shows often continuing until the early hours. The festival also features Tbourida (Fantasia) displays, traditional crafts exhibitions, storytelling, and poetry recitations. It is the single best opportunity to experience the full breadth of Moroccan folk culture in one place.',
        highlights: [
          'Performers from every region of Morocco in traditional dress',
          'Spectacular setting in the ruins of El Badi Palace',
          'Tbourida (Fantasia) horseback displays',
          'Jemaa el-Fnaa comes alive with enhanced nightly performances',
        ],
        practicalTip:
          'Buy El Badi Palace show tickets through your hotel or at the venue. Jemaa el-Fnaa performances are free. July is extremely hot in Marrakech (40C+), so attend evening shows and rest during the afternoon.',
        icon: Palette,
      },
      {
        name: 'Tbourida (Fantasia) Season',
        dates: 'Throughout July and August',
        location: 'Various locations nationwide (Meknes, El Jadida, Khemisset)',
        category: 'Cultural',
        description:
          'Tbourida, also known as Fantasia, is Morocco\'s most thrilling traditional spectacle, inscribed on the UNESCO Intangible Cultural Heritage list in 2021. This equestrian art form involves a group of horsemen (a "sorba") in traditional dress charging in formation at full gallop before simultaneously firing their muskets into the air in a thunderous coordinated volley. The riders wear flowing white djellabas and carry ornate muskets decorated with silver and semi-precious stones; their horses are adorned with handcrafted saddles and embroidered blankets. Tbourida events are held throughout the summer at moussems and regional festivals across Morocco, with the most prestigious competitions taking place in Meknes, El Jadida, and during the Hassan II Trophy event. The combination of horsemanship, choreography, and gunpowder creates a sensory spectacle that has captivated visitors for centuries.',
        highlights: [
          'UNESCO-recognized equestrian art form dating back centuries',
          'Coordinated charges and synchronized musket volleys',
          'Elaborately dressed horsemen and decorated horses',
          'Hassan II Trophy in Rabat is the most prestigious competition',
        ],
        practicalTip:
          'Check local event schedules for Tbourida displays near your location. The Salon du Cheval in El Jadida (October) features the Hassan II Trophy finale. Arrive early for good viewing positions and bring ear protection for the musket volleys.',
        icon: Heart,
      },
    ],
  },
  {
    month: 'August',
    monthNum: 8,
    season: 'Summer',
    seasonIcon: Sun,
    weather: 'Peak heat (35-48C in interior). Best for coastal and mountain destinations.',
    festivals: [
      {
        name: 'Moussem of Moulay Idriss',
        dates: 'Late August to early September (varies)',
        location: 'Moulay Idriss Zerhoun, near Meknes',
        category: 'Religious/Cultural',
        description:
          'The Moussem of Moulay Idriss is one of Morocco\'s most important religious pilgrimages, honoring Moulay Idriss I, the great-grandson of Prophet Muhammad who brought Islam to Morocco and founded the first Moroccan dynasty in the 8th century. The holy town of Moulay Idriss Zerhoun, nestled between two green hills overlooking the Roman ruins of Volubilis, becomes a vibrant gathering point for thousands of pilgrims and visitors. The moussem combines deep religious devotion with festive celebration: Sufi brotherhoods perform ecstatic dhikr ceremonies, Tbourida horsemen charge across dusty fields, traders set up a sprawling temporary souk, and families feast together under canvas tents. Until recently, non-Muslims could not stay overnight in Moulay Idriss; while the town is now open to all visitors, certain shrine areas remain restricted to Muslims.',
        highlights: [
          'One of Morocco\'s most sacred pilgrimages',
          'Sufi brotherhood ceremonies and spiritual gatherings',
          'Tbourida (Fantasia) displays on the outskirts',
          'Adjacent Roman ruins of Volubilis open to all visitors',
        ],
        practicalTip:
          'Base yourself in Meknes (30 minutes away) for accommodation options. Be respectful of the religious nature of the event. The shrine of Moulay Idriss is not open to non-Muslims, but the surrounding festivities and town are welcoming to all visitors.',
        icon: Star,
      },
      {
        name: 'Cultural Season Events',
        dates: 'Throughout August',
        location: 'Various coastal cities (Tangier, Asilah, Al Hoceima)',
        category: 'Cultural',
        description:
          'August sees a wave of cultural events across Morocco\'s coastal cities, as Moroccans flock to the seaside to escape the interior heat. The Asilah International Cultural Moussem, running since 1978, transforms the whitewashed Atlantic town of Asilah into an open-air art gallery, with international artists painting murals on medina walls and exhibiting work in historic venues. In Tangier, the Tanjazz summer extension brings live jazz to rooftop bars and beach clubs. Al Hoceima hosts its Mediterranean Music Festival, celebrating the Rif region\'s unique musical heritage. These events collectively make August an excellent time to explore Morocco\'s coastline, combining culture with beach relaxation.',
        highlights: [
          'Asilah International Cultural Moussem with live mural painting',
          'Tangier summer jazz and cultural events',
          'Al Hoceima Mediterranean Music Festival',
          'Coastal festivals combine culture with beach holidays',
        ],
        practicalTip:
          'August is peak domestic holiday season in Morocco. Coastal accommodation fills up quickly and prices rise significantly. Book well in advance, especially in Asilah, Tangier, and Essaouira.',
        icon: Palette,
      },
    ],
  },
  {
    month: 'September',
    monthNum: 9,
    season: 'Autumn',
    seasonIcon: Leaf,
    weather: 'Heat begins to ease (25-35C). Excellent for desert and southern Morocco.',
    festivals: [
      {
        name: 'Tanjazz - Tangier Jazz Festival',
        dates: 'Mid-September (3-4 days)',
        location: 'Tangier',
        category: 'Music',
        description:
          'Tanjazz is Morocco\'s premier jazz festival, held annually in the cosmopolitan port city of Tangier. Founded in 2000, the festival draws on Tangier\'s storied history as an international zone and gathering place for artists, writers, and musicians (Paul Bowles, William Burroughs, and the Rolling Stones all called Tangier home). Performances take place in atmospheric venues across the city, including the historic Palais des Institutions Italiennes, the Cinema Rif on the Grand Socco, hotel terraces overlooking the Strait of Gibraltar, and intimate jazz clubs in the medina. The programming ranges from traditional jazz and blues to Latin jazz, funk, fusion, and Moroccan-jazz crossover projects. Tanjazz has hosted legendary performers including Randy Weston, Marcus Miller, and Dee Dee Bridgewater, all of whom have explored the deep connections between African-American jazz and Moroccan Gnaoua traditions.',
        highlights: [
          'Performances in historic Tangier venues with stunning views',
          'International and Moroccan jazz artists',
          'Explorations of jazz-Gnaoua musical connections',
          'Festival fringe events in cafes and clubs across the city',
        ],
        practicalTip:
          'Some concerts are ticketed, others are free fringe events. Tangier is easily accessible by ferry from Spain (Tarifa, 35 minutes) or by train from other Moroccan cities. September weather in Tangier is perfect -- warm but not too hot.',
        icon: Music,
      },
      {
        name: 'Date Festival (Festival des Dattes)',
        dates: 'Late September to early October (3 days)',
        location: 'Erfoud, Tafilalet region',
        category: 'Food/Cultural',
        description:
          'The Date Festival of Erfoud celebrates the annual date harvest in the Tafilalet oasis, one of the world\'s largest date-producing regions. The Tafilalet\'s millions of date palms produce over 100 varieties of dates, and the harvest season transforms this remote Saharan gateway town into a lively marketplace and fairground. The festival features a grand parade, the election of a Date Queen, folklore performances from the Tafilalet and Draa Valley regions, camel races, and an enormous souk where farmers display and sell their finest dates. Visitors can taste everything from the prized Medjool dates (the "king of dates") to lesser-known varieties like Boufeggous, Jihel, and Bousthammi. The festival also showcases date-derived products: date paste, date vinegar, date syrup, and date-based sweets.',
        highlights: [
          'Over 100 varieties of dates available to taste and buy',
          'Grand parade and election of the Date Queen',
          'Camel races and traditional folklore performances',
          'Gateway to Erg Chebbi sand dunes (45 minutes away)',
        ],
        practicalTip:
          'Erfoud is the gateway to the Erg Chebbi dunes of Merzouga. Combine the Date Festival with a desert camping excursion for an unforgettable experience. The town has limited accommodation; book early or stay in Merzouga.',
        icon: Leaf,
      },
    ],
  },
  {
    month: 'October',
    monthNum: 10,
    season: 'Autumn',
    seasonIcon: Leaf,
    weather: 'Perfect weather (20-30C). One of the best months to visit Morocco.',
    festivals: [
      {
        name: 'Oasis Festival',
        dates: 'Mid-October (3 days)',
        location: 'Marrakech (various venues)',
        category: 'Music',
        description:
          'The Oasis Festival is Morocco\'s leading contemporary electronic music festival, attracting an international crowd of music lovers to Marrakech for a three-day immersion in house, techno, disco, and electronic music set against the backdrop of the Atlas Mountains. Unlike traditional Moroccan festivals, Oasis is a modern, boutique event with a strong emphasis on atmosphere, design, and wellness alongside the music. The festival takes place at The Source, a purpose-built venue in the Palmeraie featuring open-air stages surrounded by palm trees and pools. The programming combines established electronic music names with emerging Moroccan and North African DJs and producers, reflecting the growing electronic music scene in Marrakech. Yoga sessions, talks, and poolside lounging complement the music program.',
        highlights: [
          'Boutique electronic music festival in the Palmeraie',
          'International and Moroccan DJs and producers',
          'Wellness programming including yoga and meditation',
          'Atlas Mountain backdrop and palm-tree-fringed pools',
        ],
        practicalTip:
          'Tickets sell out quickly; buy early from the official website. Multi-day passes include shuttle transport from central Marrakech. The festival caters to an international crowd and has a strong presence on social media.',
        icon: Music,
      },
      {
        name: 'Casablanca Festival',
        dates: 'Late October (varies)',
        location: 'Casablanca',
        category: 'Cultural',
        description:
          'Casablanca\'s cultural festival season brings a diverse program of music, theater, film, and art to Morocco\'s largest city. The L\'Boulevard festival (now evolved into various events) has long championed Morocco\'s urban music scene -- rap, rock, hip-hop, and fusion -- giving a platform to emerging Moroccan artists who blend traditional sounds with contemporary global influences. The Casablanca cultural season also includes the FIAV (International Festival of Video Art), gallery openings in the trendy Maarif and Gauthier districts, and performances at the Morocco Mall and Theatre Mohammed VI. Casa is often overlooked by tourists, but its cultural scene is the most dynamic and forward-looking in Morocco, driven by a young, cosmopolitan population.',
        highlights: [
          'Urban music scene showcasing Moroccan rap, rock, and fusion',
          'Video art and contemporary gallery exhibitions',
          'Performances at Morocco\'s modern cultural venues',
          'Street art tours in the Maarif and old medina districts',
        ],
        practicalTip:
          'Casablanca is Morocco\'s most cosmopolitan city but not a traditional tourist destination. Combine cultural events with a visit to the Hassan II Mosque, the Art Deco city center, and the Rick\'s Cafe. The city has excellent train connections to all major destinations.',
        icon: Palette,
      },
    ],
  },
  {
    month: 'November',
    monthNum: 11,
    season: 'Autumn',
    seasonIcon: Leaf,
    weather: 'Mild and pleasant (15-25C). Occasional rain. Great for city exploration.',
    festivals: [
      {
        name: 'Marrakech International Film Festival (FIFM)',
        dates: 'Late November to early December (8 days)',
        location: 'Marrakech',
        category: 'Film',
        description:
          'The Marrakech International Film Festival (FIFM) is the most glamorous event on Morocco\'s cultural calendar, bringing Hollywood stars, international directors, and cinema lovers to the Red City for eight days of screenings, tributes, and gala events. Founded in 2001 under the patronage of King Mohammed VI and presided over by his brother Prince Moulay Rachid, the FIFM has grown into one of the most important film festivals in Africa and the Arab world. The festival\'s main competition showcases films from across Africa, the Middle East, and the developing world, while its "Conversations" series features intimate on-stage interviews with cinema legends. Past guests include Martin Scorsese, Francis Ford Coppola, Robert De Niro, Cate Blanchett, and Tilda Swinton. The festival also runs a massive free outdoor cinema on the Jemaa el-Fnaa, screening classic and contemporary films to thousands under the stars.',
        highlights: [
          'Red carpet galas at the Palais des Congres',
          'Free outdoor screenings on the Jemaa el-Fnaa',
          'Tributes to cinema legends with intimate conversations',
          'Showcase of African and Arab world cinema',
        ],
        practicalTip:
          'Public screenings and the Jemaa el-Fnaa outdoor cinema are free, but the main galas require invitations. The festival creates a wonderful atmosphere throughout Marrakech. Book accommodation early as the city fills with film industry professionals and fans.',
        icon: Star,
      },
    ],
  },
  {
    month: 'December',
    monthNum: 12,
    season: 'Winter',
    seasonIcon: Snowflake,
    weather: 'Cool and short days (8-18C). Snow in the Atlas. Festive atmosphere in tourist areas.',
    festivals: [
      {
        name: 'New Year Celebrations',
        dates: 'December 31 - January 1',
        location: 'Marrakech, Casablanca, Tangier, Agadir, and resort areas',
        category: 'Cultural',
        description:
          'While Morocco is a Muslim country and the Islamic New Year follows the Hijri calendar, the Western New Year (le Reveillon) has become a significant celebration in Morocco\'s major cities and tourist areas. Marrakech leads the way with lavish New Year\'s Eve galas at luxury hotels and rooftop restaurants, with the Jemaa el-Fnaa buzzing with extra energy as midnight approaches. Casablanca\'s modern bars and restaurants host countdown events. Agadir\'s beachfront hotels offer all-inclusive New Year packages. In Tangier, rooftop terraces overlooking the Strait of Gibraltar provide dramatic settings for ringing in the new year. Many riads and luxury camps in the Sahara desert offer special "New Year Under the Stars" experiences, with traditional music, feasting, and midnight celebrations around bonfires in the dunes.',
        highlights: [
          'Lavish hotel and riad galas across major cities',
          'Jemaa el-Fnaa atmosphere in Marrakech',
          'Desert camps offering New Year celebrations under the stars',
          'Beachfront countdown events in Agadir and Essaouira',
        ],
        practicalTip:
          'New Year is peak tourist season in Morocco. Book accommodation and restaurant reservations months in advance. Expect prices to be at their highest. December weather is cool, so pack warm layers for evening celebrations.',
        icon: Star,
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   RELIGIOUS HOLIDAYS DATA
   ═══════════════════════════════════════════════════════════════ */

const religiousHolidays = [
  {
    name: 'Ramadan',
    arabicName: 'Ramadan',
    description:
      'The holiest month in the Islamic calendar, during which Muslims fast from dawn to sunset. Ramadan transforms the rhythm of daily life in Morocco. Days are quieter, many restaurants close during daylight hours, and the pace slows. At sunset, the cannon fires and the country comes alive: families gather for iftar (the breaking of the fast) around tables laden with harira soup, dates, chebakia pastries, msemmen flatbread, and fresh juices. The streets buzz with energy well past midnight, and the pre-dawn suhoor meal creates another communal gathering. For visitors, Ramadan offers a unique and deeply authentic cultural experience, though it requires sensitivity and adaptation.',
    dates2025: 'Approximately February 28 - March 30, 2025',
    dates2026: 'Approximately February 17 - March 19, 2026',
    tipsForVisitors: [
      'Do not eat, drink, or smoke in public during daylight hours out of respect',
      'Many restaurants in tourist areas remain open for non-Muslim guests',
      'Experience iftar at a local restaurant or riad for an unforgettable meal',
      'The nights are incredibly vibrant and festive -- explore after dark',
      'Some attractions have reduced hours; check in advance',
      'Ramadan moves approximately 10-11 days earlier each year',
    ],
  },
  {
    name: 'Eid al-Fitr',
    arabicName: 'Aid el-Fitr',
    description:
      'Eid al-Fitr ("Festival of Breaking the Fast") marks the end of Ramadan and is one of Morocco\'s most joyous celebrations. Families dress in their finest clothes, attend morning prayers at the mosque, and gather for lavish feasts. Children receive gifts and new clothes. The streets are filled with well-wishers exchanging "Eid Mubarak" greetings. Pastries like kaab el ghazal (gazelle horn cookies), ghriba, and briouat are prepared in enormous quantities. The celebration typically lasts 2-3 days, during which Morocco is in a festive mood. It is a wonderful time to be in the country, though many businesses close and public transport can be crowded as Moroccans travel to visit family.',
    dates2025: 'Approximately March 30-31, 2025',
    dates2026: 'Approximately March 19-20, 2026',
    tipsForVisitors: [
      'Many businesses close for 2-3 days; plan accordingly',
      'Accept invitations to Eid meals if offered -- it is a great honor',
      'Public transport is very crowded as families travel to reunite',
      'Pastry shops overflow with special Eid sweets -- try them all',
      'Greet people with "Eid Mubarak" (Blessed Eid) or "Mabrouk l-Aid"',
    ],
  },
  {
    name: 'Eid al-Adha',
    arabicName: 'Aid el-Kebir',
    description:
      'Eid al-Adha ("Festival of the Sacrifice"), known locally as Aid el-Kebir ("The Big Feast"), is the most important Islamic holiday in Morocco. Commemorating Prophet Ibrahim\'s willingness to sacrifice his son in obedience to God, each family that can afford it sacrifices a sheep on the morning of Eid. The ritual is a deeply communal event: the meat is divided into three parts -- one for the family, one for relatives and friends, and one for the poor. The days following are filled with elaborate lamb-based feasting, with every part of the animal prepared according to traditional recipes (including mechoui roast lamb, tanjia, and the iconic boulfaf -- grilled liver wrapped in caul fat). The celebration lasts 3-4 days, during which the country essentially shuts down.',
    dates2025: 'Approximately June 6-7, 2025',
    dates2026: 'Approximately May 26-27, 2026',
    tipsForVisitors: [
      'The sheep sacrifice can be confronting for visitors; it happens publicly in streets and rooftops',
      'Most businesses, restaurants, and attractions close for 3-4 days',
      'Not the ideal time for sightseeing but an extraordinary cultural experience',
      'If invited to an Eid al-Adha meal, accept -- the hospitality is legendary',
      'Book transport in advance as the country moves en masse to visit family',
    ],
  },
  {
    name: 'Mawlid an-Nabi',
    arabicName: 'Al-Mawlid an-Nabawi',
    description:
      'Mawlid an-Nabi celebrates the birthday of Prophet Muhammad and is a joyful national holiday in Morocco. While some stricter Islamic traditions do not celebrate Mawlid, Morocco has a long and warm tradition of marking the occasion. Families prepare special meals, distribute sweets and dried fruits to children and neighbors, and gather for religious recitations and prayers. In cities, mosques hold special ceremonies with Quran recitations and sermons about the Prophet\'s life. The zawiyas (Sufi lodges) of Fes, Meknes, and Marrakech host particularly moving celebrations with Sufi music and chanting. The mood is festive but reverential, and the air is often fragrant with incense.',
    dates2025: 'Approximately September 4, 2025',
    dates2026: 'Approximately August 24, 2026',
    tipsForVisitors: [
      'A national holiday with many businesses closed',
      'Visit a zawiya (Sufi lodge) for moving musical celebrations',
      'Sweets and dried fruits are distributed freely -- accept graciously',
      'A quieter, more spiritual celebration compared to the Eids',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   MUSIC FESTIVALS RANKED
   ═══════════════════════════════════════════════════════════════ */

const musicFestivalsRanked = [
  {
    rank: 1,
    name: 'Gnaoua World Music Festival',
    location: 'Essaouira',
    when: 'Late June',
    genre: 'World / Gnaoua / Fusion',
    attendance: '500,000+',
    cost: 'Free',
    rating: 'Unmissable',
    description: 'UNESCO-recognized Gnaoua music meets international artists in a stunning Atlantic coastal town. Completely free.',
  },
  {
    rank: 2,
    name: 'Mawazine',
    location: 'Rabat',
    when: 'Mid-June',
    genre: 'Pop / Rock / Arabic / World',
    attendance: '2,500,000+',
    cost: 'Mostly free',
    rating: 'Unmissable',
    description: 'One of the world\'s largest festivals by attendance. Global superstars and Moroccan legends. 90% free.',
  },
  {
    rank: 3,
    name: 'Fes Festival of World Sacred Music',
    location: 'Fes',
    when: 'Late May - Early June',
    genre: 'Sacred / Spiritual / World',
    attendance: '100,000+',
    cost: '300-800 MAD (many free events)',
    rating: 'Extraordinary',
    description: 'The world\'s most prestigious sacred music gathering. Interfaith dialogue through music in Morocco\'s spiritual capital.',
  },
  {
    rank: 4,
    name: 'Tanjazz',
    location: 'Tangier',
    when: 'September',
    genre: 'Jazz / Blues / Latin / Fusion',
    attendance: '30,000+',
    cost: 'Varies (some free events)',
    rating: 'Excellent',
    description: 'Intimate jazz festival in the cosmopolitan port city. Historic venues, stunning Mediterranean views.',
  },
  {
    rank: 5,
    name: 'Oasis Festival',
    location: 'Marrakech',
    when: 'October',
    genre: 'Electronic / House / Techno',
    attendance: '5,000+',
    cost: 'Ticketed (1,500-3,000 MAD)',
    rating: 'Excellent',
    description: 'Boutique electronic music festival in the Palmeraie with pools, yoga, and Atlas Mountain views.',
  },
  {
    rank: 6,
    name: 'Atlas Music Festival',
    location: 'Marrakech / Atlas',
    when: 'March',
    genre: 'World / Fusion / Traditional',
    attendance: '10,000+',
    cost: 'Varies by event',
    rating: 'Very Good',
    description: 'Intimate concerts in historic venues and mountain lodges. Workshops and masterclasses available.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   CULTURAL/TRADITIONAL FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const culturalFestivals = [
  {
    name: 'Tbourida (Fantasia)',
    location: 'Nationwide',
    when: 'June - October (peak: July-August)',
    description: 'UNESCO-inscribed equestrian art form. Synchronized horsemen charge at full gallop and fire muskets in unison. The most spectacular traditional spectacle in Morocco.',
    mustKnow: 'The Hassan II Trophy in Rabat/El Jadida is the most prestigious event.',
  },
  {
    name: 'Imilchil Marriage Festival',
    location: 'Imilchil, High Atlas',
    when: 'September',
    description: 'A traditional Amazigh moussem where young people from the Ait Hadiddou tribe can choose their partners. Features group weddings, traditional music, and a bustling livestock and craft market.',
    mustKnow: 'The festival has become somewhat touristic. Remote location (6+ hours from Marrakech).',
  },
  {
    name: 'Moussem of Tan-Tan',
    location: 'Tan-Tan, Southern Morocco',
    when: 'May-June',
    description: 'A UNESCO Masterpiece of the Intangible Cultural Heritage. Celebrates the nomadic traditions of the Saharan peoples with camel markets, poetry recitations, traditional music, and Hassani culture.',
    mustKnow: 'Very remote location. Best combined with a road trip through southern Morocco.',
  },
  {
    name: 'Moussem of Moulay Idriss',
    location: 'Moulay Idriss Zerhoun',
    when: 'August-September',
    description: 'One of Morocco\'s most important pilgrimages, honoring the founder of the first Moroccan dynasty. Religious devotion meets festive celebration with Sufi ceremonies and Tbourida.',
    mustKnow: 'Some areas restricted to Muslims. Base in Meknes. Visit Volubilis nearby.',
  },
  {
    name: 'Cherry Festival',
    location: 'Sefrou, near Fes',
    when: 'June',
    description: 'Established in 1920, this may be Morocco\'s oldest modern festival. Celebrates the cherry harvest with parades, the election of a Cherry Queen, traditional music, and cherry-tasting competitions.',
    mustKnow: 'Sefrou is just 30 minutes from Fes. Easy day trip. Small-town authentic atmosphere.',
  },
  {
    name: 'Festival of Popular Arts',
    location: 'Marrakech',
    when: 'July',
    description: 'Morocco\'s oldest cultural festival brings folk performers from every region. Dance, music, acrobatics, and storytelling in the El Badi Palace and Jemaa el-Fnaa.',
    mustKnow: 'Very hot in July. Attend evening performances. Stay hydrated.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   FOOD FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const foodFestivals = [
  {
    name: 'Rose Festival',
    location: 'Kelaat M\'Gouna, Dades Valley',
    when: 'Mid-May',
    product: 'Damascus roses',
    description: 'The Valley of Roses comes alive with the annual rose harvest. Parades, Rose Queen coronation, rose-water distillation, and an intoxicating scent that fills the entire valley.',
    whatToBuy: 'Rose water, rose oil, rose cream, rose soap, amlou with rose.',
  },
  {
    name: 'Date Festival',
    location: 'Erfoud',
    when: 'Late September - Early October',
    product: 'Dates (100+ varieties)',
    description: 'Celebrates the date harvest in one of the world\'s largest date-producing regions. Taste prized Medjool and Boufeggous dates, attend camel races, and explore desert landscapes.',
    whatToBuy: 'Medjool dates, date paste, date syrup, date-based confections.',
  },
  {
    name: 'Almond Blossom Festival',
    location: 'Tafraout',
    when: 'February',
    product: 'Almonds',
    description: 'Pink and white blossoms transform the Anti-Atlas valleys. Traditional music, dance, and tastings of amlou (almond-argan butter), almond pastries, and local honey.',
    whatToBuy: 'Amlou, almond oil, argan oil, local honey, almond pastries.',
  },
  {
    name: 'Cherry Festival',
    location: 'Sefrou',
    when: 'June',
    product: 'Cherries',
    description: 'Morocco\'s oldest modern festival celebrates the cherry harvest near Fes. Cherry Queen pageant, parades, and cherry-based products and desserts.',
    whatToBuy: 'Fresh cherries, cherry preserves, dried cherries.',
  },
  {
    name: 'Olive Festival',
    location: 'Various (Meknes region, Beni Mellal)',
    when: 'November - December',
    product: 'Olives and olive oil',
    description: 'Morocco is one of the world\'s largest olive producers. Regional olive harvest festivals celebrate this staple with oil-pressing demonstrations, tastings, and culinary events.',
    whatToBuy: 'Extra virgin olive oil, cured olives, olive-based cosmetics.',
  },
  {
    name: 'Honey Festival',
    location: 'Imouzzer Ida Outanane (near Agadir)',
    when: 'May',
    product: 'Honey (thyme, euphorbia, carob)',
    description: 'The beekeeping villages near Agadir host this celebration of Morocco\'s diverse honey varieties. Tastings, honey-based recipes, and tours of traditional beehives.',
    whatToBuy: 'Thyme honey, euphorbia honey, carob honey, beeswax products.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SPORTING EVENTS
   ═══════════════════════════════════════════════════════════════ */

const sportingEvents = [
  {
    name: 'Marathon des Sables',
    location: 'Sahara Desert',
    when: 'April',
    type: 'Ultramarathon',
    description: 'The "toughest footrace on Earth." 250km across the Sahara in 7 days, carrying your own supplies. About 1,000 runners from 50+ countries.',
    difficulty: 'Extreme',
    participantInfo: 'Registration ~1 year ahead. ~3,500 EUR entry. Medical certificate required.',
  },
  {
    name: 'Marrakech Marathon',
    location: 'Marrakech',
    when: 'Late January',
    type: 'Road Marathon / Half / 10K',
    description: 'One of Africa\'s most scenic road races. Flat, fast course through the historic medina, past monuments, and into the Palmeraie.',
    difficulty: 'Moderate to Challenging',
    participantInfo: 'Open registration online. Full marathon, half marathon, and 10K options available.',
  },
  {
    name: 'Titan Desert',
    location: 'Sahara Desert (Merzouga)',
    when: 'April-May',
    type: 'Mountain Bike Stage Race',
    description: 'A 600km mountain bike stage race across the Sahara Desert over 6 days. Often called the "Dakar of mountain biking." Navigating dunes, rocky plateaus, and riverbeds.',
    difficulty: 'Extreme',
    participantInfo: 'Registration required well in advance. Suitable for experienced mountain bikers.',
  },
  {
    name: 'Marrakech Grand Prix',
    location: 'Marrakech (Circuit Moulay El Hassan)',
    when: 'Various dates',
    type: 'Motorsport',
    description: 'The Circuit Moulay El Hassan hosts various motorsport events including Formula E races, bringing high-speed electric racing to the streets of Marrakech.',
    difficulty: 'Spectator',
    participantInfo: 'Tickets available through event organizers. Great street-circuit viewing opportunities.',
  },
  {
    name: 'Surf Competitions',
    location: 'Taghazout, Essaouira, Dakhla',
    when: 'October - March (surf season)',
    type: 'Surfing',
    description: 'Morocco\'s Atlantic coast hosts various national and international surf competitions. Taghazout near Agadir is the surf capital, while Dakhla hosts world-class kitesurfing events.',
    difficulty: 'Varies',
    participantInfo: 'Check World Surf League and local surf association schedules.',
  },
  {
    name: 'FIFA World Cup 2030 (Morocco Co-Host)',
    location: 'Multiple cities',
    when: '2030',
    type: 'Football (Soccer)',
    description: 'Morocco will co-host the 2030 FIFA World Cup alongside Spain and Portugal. Multiple stadiums are being built or renovated across the country, including in Casablanca, Rabat, Marrakech, Fes, Tangier, and Agadir.',
    difficulty: 'Spectator',
    participantInfo: 'Ticket information will be released closer to the event through FIFA.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PLANNING TIPS
   ═══════════════════════════════════════════════════════════════ */

const planningTips = [
  {
    title: 'Book Accommodation Early',
    icon: Clock,
    tips: [
      'For Gnaoua Festival (Essaouira): book 2-3 months ahead',
      'For Rose Festival (Kelaat M\'Gouna): book 2+ months ahead -- very limited options',
      'For Marrakech Film Festival: book 1-2 months ahead',
      'For Eid holidays: book domestic transport weeks in advance',
      'Expect prices to double or triple during major festivals',
      'Consider staying in nearby towns and commuting to festival venues',
    ],
  },
  {
    title: 'Transportation Planning',
    icon: MapPin,
    tips: [
      'Al Boraq high-speed train connects Casablanca, Rabat, and Tangier',
      'ONCF trains link all major cities; book 1st class for comfort',
      'CTM and Supratours buses serve routes trains do not reach',
      'Grand taxis (shared) connect smaller towns to regional hubs',
      'Rent a car for rural festivals (Rose Festival, Date Festival, Tafraout)',
      'During Eid holidays, all transport is packed -- book days in advance',
    ],
  },
  {
    title: 'What to Pack for Festivals',
    icon: Info,
    tips: [
      'Comfortable walking shoes (cobblestones, sand, uneven terrain)',
      'Layers for evening events -- temperatures drop, especially on the coast',
      'Sun protection: hat, sunscreen, sunglasses',
      'Modest clothing that covers shoulders and knees',
      'Portable phone charger (long days away from outlets)',
      'Earplugs for sleeping if staying near festival venues',
      'Cash in dirhams for street food and small vendors (ATMs can be scarce in rural areas)',
    ],
  },
  {
    title: 'Cultural Sensitivity',
    icon: Heart,
    tips: [
      'Ask permission before photographing people, especially at religious events',
      'Dress modestly, particularly at moussems and religious celebrations',
      'During Ramadan, do not eat, drink, or smoke in public during daylight',
      'Remove shoes when entering mosques or private homes',
      'Greet people with "Salam alaykum" and accept hospitality graciously',
      'Some shrine areas at moussems are restricted to Muslims',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photographyTips = [
  {
    title: 'People & Portraits',
    tip: 'Always ask permission before photographing individuals. Many Moroccans are happy to pose, but some prefer not to be photographed. At festivals, performers generally expect to be photographed, but still show respect. Offer to show people their photo on your screen -- it often leads to wonderful interactions.',
  },
  {
    title: 'Golden Hour Magic',
    tip: 'Morocco\'s warm light is legendary. The golden hours after sunrise and before sunset transform festival scenes into magical compositions. The warm tones of Marrakech\'s ochre walls, Essaouira\'s blue boats, and Fes\'s ancient medina are at their most photogenic during these times.',
  },
  {
    title: 'Capturing Tbourida',
    tip: 'Fantasia charges happen fast. Use burst mode or continuous shooting. A telephoto lens (70-200mm) captures the intensity of the charge, while a wide-angle shows the scale. Position yourself at the end of the charging lane for dramatic head-on shots. Be aware of dust clouds affecting your sensor.',
  },
  {
    title: 'Festival Crowds',
    tip: 'Elevated positions are gold at music festivals. Look for rooftop terraces, balconies, or higher ground that gives you a view over the crowd toward the stage. Wide-angle lenses capture the energy of massive crowds. Night concerts require fast lenses (f/1.4-2.8) or high ISO capability.',
  },
  {
    title: 'Street Food & Markets',
    tip: 'Food festivals offer incredible close-up opportunities. Get low and shoot food at table level for the most appetizing angles. Steaming tagines, colorful spice pyramids, and glistening dates all photograph beautifully. Use natural light whenever possible.',
  },
  {
    title: 'Protecting Your Gear',
    tip: 'Moroccan festivals can be dusty, sandy, and crowded. Use a camera bag with good dust protection. Bring lens cloths. In desert events (Date Festival, Marathon des Sables), sand is the enemy -- keep camera bags sealed when not shooting. Consider a rain cover for coastal festivals where sea spray is a factor.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SEASON COLORS
   ═══════════════════════════════════════════════════════════════ */

function getSeasonColor(season: string): string {
  switch (season) {
    case 'Winter':
      return '#5B7FA5';
    case 'Spring':
      return '#6B8E5A';
    case 'Summer':
      return '#C4960C';
    case 'Autumn':
      return '#A0522D';
    default:
      return '#A0522D';
  }
}

function getSeasonBg(season: string): string {
  switch (season) {
    case 'Winter':
      return 'rgba(91, 127, 165, 0.08)';
    case 'Spring':
      return 'rgba(107, 142, 90, 0.08)';
    case 'Summer':
      return 'rgba(196, 150, 12, 0.08)';
    case 'Autumn':
      return 'rgba(160, 82, 45, 0.08)';
    default:
      return 'rgba(160, 82, 45, 0.08)';
  }
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function FestivalsCalendarPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#FAF8F5]">
        {/* ═══════════════════════════════════════════════════════
            SECTION 1: HERO
            ═══════════════════════════════════════════════════════ */}
        <section className="relative h-[70vh] min-h-[500px] flex items-end">
          <img
            src="/images/hero-festival-morocco.webp"
            alt="Vibrant Moroccan festival with traditional musicians, dancers, and colorful celebrations - citytoursmorocco.com"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative z-10 container-morocco pb-12 md:pb-16 text-white">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li>
                  <Link
                    href="/culture"
                    className="hover:text-white transition-colors"
                  >
                    Culture
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="text-white font-medium">Festivals Calendar</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] leading-tight max-w-4xl">
              Morocco Festivals Calendar
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl font-[family-name:var(--font-heading)]">
              Your complete month-by-month guide to every festival, celebration,
              and event across the Kingdom of Morocco
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm">
                <Calendar className="h-4 w-4" />
                12 Months Covered
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm">
                <Music className="h-4 w-4" />
                30+ Festivals
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm">
                <MapPin className="h-4 w-4" />
                All Regions
              </span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 2: OVERVIEW
            ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-6">
                A Year of Celebration in Morocco
              </h2>
              <div className="prose prose-lg max-w-none text-[#1A1814]/80 space-y-4">
                <p>
                  Morocco is a country that celebrates with extraordinary passion and
                  diversity. From the ancient Amazigh New Year celebrations in January to
                  the glamorous Marrakech Film Festival in November, from the thundering
                  hooves of Tbourida horsemen to the ecstatic rhythms of Gnaoua master
                  musicians, the Moroccan calendar is packed with festivals that reveal
                  the soul of this remarkable nation.
                </p>
                <p>
                  What makes Morocco&apos;s festival landscape unique is its layering of
                  traditions. Pre-Islamic Amazigh celebrations coexist with Islamic
                  religious holidays. Centuries-old moussems (pilgrimages to saints&apos;
                  shrines) run alongside world-class contemporary music festivals. Rural
                  harvest celebrations honoring roses, dates, almonds, and olives
                  complement urban cultural events that attract international stars and
                  cineastes. This rich calendar reflects Morocco&apos;s position at the
                  crossroads of Africa, Europe, and the Arab world.
                </p>
                <p>
                  This comprehensive guide covers every significant festival and event
                  in Morocco, organized month by month. Whether you are planning your
                  trip around a specific festival or simply want to know what is
                  happening during your visit, this calendar will help you make the most
                  of Morocco&apos;s extraordinary cultural life.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              {[
                { icon: Music, label: 'Music Festivals', value: '10+' },
                { icon: Palette, label: 'Cultural Events', value: '15+' },
                { icon: Drum, label: 'Traditional Moussems', value: '100s' },
                { icon: Trophy, label: 'Sporting Events', value: '8+' },
              ].map((stat) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="card-moroccan p-5 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10 mb-3">
                      <StatIcon className="h-5 w-5 text-[#A0522D]" />
                    </div>
                    <div className="text-2xl font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#1A1814]/60">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 3: MONTH-BY-MONTH CALENDAR (ALL 12 MONTHS)
            ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-[#EDE8E0]">
          <div className="container-morocco">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Month-by-Month Festival Calendar
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Every major festival and event in Morocco, organized by month with
                dates, locations, and practical tips
              </p>
            </div>

            {/* Month Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {monthlyCalendar.map((m) => {
                const SeasonIcon = m.seasonIcon;
                return (
                  <a
                    key={m.month}
                    href={`#month-${m.monthNum}`}
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all hover:shadow-md bg-white text-[#1A1814] hover:bg-[#A0522D] hover:text-white"
                  >
                    <SeasonIcon className="h-3.5 w-3.5" />
                    {m.month.substring(0, 3)}
                  </a>
                );
              })}
            </div>

            {/* Month Cards */}
            <div className="space-y-12">
              {monthlyCalendar.map((monthData) => {
                const SeasonIcon = monthData.seasonIcon;
                const seasonColor = getSeasonColor(monthData.season);
                const seasonBg = getSeasonBg(monthData.season);
                return (
                  <div
                    key={monthData.month}
                    id={`month-${monthData.monthNum}`}
                    className="scroll-mt-24"
                  >
                    {/* Month Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="flex items-center justify-center w-14 h-14 rounded-2xl"
                        style={{ backgroundColor: seasonBg }}
                      >
                        <SeasonIcon
                          className="h-7 w-7"
                          style={{ color: seasonColor }}
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                          {monthData.month}
                        </h3>
                        <p className="text-sm text-[#1A1814]/60">
                          <span
                            className="font-semibold"
                            style={{ color: seasonColor }}
                          >
                            {monthData.season}
                          </span>
                          {' -- '}
                          {monthData.weather}
                        </p>
                      </div>
                    </div>

                    {/* Festival Cards */}
                    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
                      {monthData.festivals.map((festival) => {
                        const FestivalIcon = festival.icon;
                        return (
                          <div
                            key={festival.name}
                            className="card-moroccan p-6 md:p-8"
                          >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                              {/* Icon */}
                              <div
                                className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl"
                                style={{ backgroundColor: seasonBg }}
                              >
                                <FestivalIcon
                                  className="h-6 w-6"
                                  style={{ color: seasonColor }}
                                />
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                  <div>
                                    <h4 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                                      {festival.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-3 mt-1 text-sm text-[#1A1814]/60">
                                      <span className="inline-flex items-center gap-1">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {festival.dates}
                                      </span>
                                      <span className="inline-flex items-center gap-1">
                                        <MapPin className="h-3.5 w-3.5" />
                                        {festival.location}
                                      </span>
                                    </div>
                                  </div>
                                  <span
                                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                                    style={{
                                      backgroundColor: seasonBg,
                                      color: seasonColor,
                                    }}
                                  >
                                    {festival.category}
                                  </span>
                                </div>

                                <p className="text-[#1A1814]/75 leading-relaxed mb-4">
                                  {festival.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-4">
                                  <h5 className="text-sm font-semibold text-[#A0522D] mb-2 font-[family-name:var(--font-heading)]">
                                    Highlights
                                  </h5>
                                  <ul className="grid sm:grid-cols-2 gap-1.5">
                                    {festival.highlights.map((highlight) => (
                                      <li
                                        key={highlight}
                                        className="flex items-start gap-2 text-sm text-[#1A1814]/70"
                                      >
                                        <Star className="h-3.5 w-3.5 text-[#C4960C] flex-shrink-0 mt-0.5" />
                                        {highlight}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Practical Tip */}
                                <div className="rounded-xl bg-[#FAF8F5] p-4 border border-[#EDE8E0]">
                                  <div className="flex items-start gap-2">
                                    <Info className="h-4 w-4 text-[#A0522D] flex-shrink-0 mt-0.5" />
                                    <div>
                                      <span className="text-xs font-semibold text-[#A0522D] uppercase tracking-wider">
                                        Planning Tip
                                      </span>
                                      <p className="text-sm text-[#1A1814]/70 mt-1">
                                        {festival.practicalTip}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 4: RELIGIOUS HOLIDAYS
            ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Islamic Religious Holidays
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Morocco&apos;s Islamic holidays follow the lunar Hijri calendar and
                shift approximately 10-11 days earlier each year
              </p>
            </div>

            {/* Important Notice */}
            <div className="max-w-3xl mx-auto mb-10 rounded-xl bg-[#C4960C]/10 border border-[#C4960C]/20 p-5">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#C4960C] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#1A1814] mb-1">
                    Dates Shift Each Year
                  </h3>
                  <p className="text-sm text-[#1A1814]/70">
                    Islamic holidays follow the lunar calendar and move approximately
                    10-11 days earlier each Gregorian year. Exact dates depend on the
                    sighting of the moon and are often confirmed only 1-2 days in
                    advance. The dates listed below are approximate.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 max-w-4xl mx-auto">
              {religiousHolidays.map((holiday) => (
                <div key={holiday.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#A0522D]/10 flex-shrink-0">
                      <Star className="h-6 w-6 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                        {holiday.name}
                      </h3>
                      <p className="text-sm text-[#A0522D] italic">
                        {holiday.arabicName}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#1A1814]/75 leading-relaxed mb-4">
                    {holiday.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-5">
                    <div className="rounded-lg bg-[#FAF8F5] p-3 border border-[#EDE8E0]">
                      <span className="text-xs font-semibold text-[#C4960C] uppercase tracking-wider">
                        2025 Dates
                      </span>
                      <p className="text-sm text-[#1A1814]/70 mt-1">
                        {holiday.dates2025}
                      </p>
                    </div>
                    <div className="rounded-lg bg-[#FAF8F5] p-3 border border-[#EDE8E0]">
                      <span className="text-xs font-semibold text-[#C4960C] uppercase tracking-wider">
                        2026 Dates
                      </span>
                      <p className="text-sm text-[#1A1814]/70 mt-1">
                        {holiday.dates2026}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#A0522D] mb-2 font-[family-name:var(--font-heading)]">
                      Tips for Visitors
                    </h4>
                    <ul className="space-y-1.5">
                      {holiday.tipsForVisitors.map((tip) => (
                        <li
                          key={tip}
                          className="flex items-start gap-2 text-sm text-[#1A1814]/70"
                        >
                          <ChevronRight className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            HERO IMAGE BREAK
            ═══════════════════════════════════════════════════════ */}
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src="/images/hero-fantasia-tbourida.webp"
            alt="Tbourida Fantasia horsemen in traditional dress charging at full gallop during a Moroccan festival - citytoursmorocco.com"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white container-morocco">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)]">
                From Ancient Traditions to Modern Beats
              </h2>
              <p className="mt-3 text-lg text-white/85 max-w-xl mx-auto">
                Morocco&apos;s festival calendar spans millennia of cultural heritage and
                cutting-edge contemporary arts
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 5: MUSIC FESTIVALS RANKED
            ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Morocco&apos;s Music Festivals Ranked
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Our definitive ranking of the best music festivals in Morocco, from
                world-class headliners to intimate boutique events
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-5">
              {musicFestivalsRanked.map((fest) => (
                <div key={fest.rank} className="card-moroccan p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    {/* Rank Badge */}
                    <div
                      className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg font-[family-name:var(--font-display)] ${
                        fest.rank <= 2
                          ? 'bg-[#C4960C]/15 text-[#C4960C]'
                          : 'bg-[#A0522D]/10 text-[#A0522D]'
                      }`}
                    >
                      #{fest.rank}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                            {fest.name}
                          </h3>
                          <div className="flex flex-wrap gap-3 mt-1 text-sm text-[#1A1814]/60">
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {fest.location}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {fest.when}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Users className="h-3.5 w-3.5" />
                              {fest.attendance}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                            fest.rating === 'Unmissable'
                              ? 'bg-[#C4960C]/15 text-[#C4960C]'
                              : 'bg-[#A0522D]/10 text-[#A0522D]'
                          }`}
                        >
                          {fest.rating}
                        </span>
                      </div>

                      <p className="text-sm text-[#1A1814]/70 mt-2">
                        {fest.description}
                      </p>

                      <div className="flex flex-wrap gap-4 mt-3 text-xs text-[#1A1814]/60">
                        <span>
                          <strong className="text-[#1A1814]/80">Genre:</strong>{' '}
                          {fest.genre}
                        </span>
                        <span>
                          <strong className="text-[#1A1814]/80">Cost:</strong>{' '}
                          {fest.cost}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 6: CULTURAL & TRADITIONAL FESTIVALS
            ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-[#EDE8E0]">
          <div className="container-morocco">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Cultural & Traditional Festivals
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Ancient traditions, moussems, and cultural celebrations that reveal
                the deepest layers of Moroccan heritage
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              {culturalFestivals.map((fest) => (
                <div key={fest.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10">
                      <Palette className="h-5 w-5 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                        {fest.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1 text-xs text-[#1A1814]/60">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {fest.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {fest.when}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
                    {fest.description}
                  </p>

                  <div className="rounded-lg bg-[#C4960C]/8 p-3 border border-[#C4960C]/15">
                    <p className="text-xs text-[#1A1814]/65">
                      <strong className="text-[#C4960C]">Must Know:</strong>{' '}
                      {fest.mustKnow}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 7: FOOD FESTIVALS
            ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Food & Harvest Festivals
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Celebrate Morocco&apos;s agricultural bounty at festivals dedicated to
                roses, dates, almonds, cherries, olives, and honey
              </p>
            </div>

            {/* Food Festival Image */}
            <div className="relative rounded-2xl overflow-hidden mb-10 max-w-4xl mx-auto h-[300px]">
              <img
                src="/images/hero-morocco-hero.webp"
                alt="Colorful Moroccan market with spices, dates, and traditional food products - citytoursmorocco.com"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="hero-overlay absolute inset-0" />
              <div className="relative z-10 flex items-end h-full p-6 md:p-8">
                <p className="text-white text-lg font-medium max-w-xl">
                  Morocco&apos;s harvest festivals are living celebrations of the
                  land, where centuries-old agricultural traditions meet vibrant
                  community gatherings
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {foodFestivals.map((fest) => (
                <div key={fest.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Leaf className="h-5 w-5 text-[#A0522D]" />
                    <span className="text-xs font-semibold text-[#C4960C] uppercase tracking-wider">
                      {fest.product}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-1">
                    {fest.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3 text-xs text-[#1A1814]/60">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {fest.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {fest.when}
                    </span>
                  </div>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
                    {fest.description}
                  </p>
                  <div className="rounded-lg bg-[#FAF8F5] p-3 border border-[#EDE8E0]">
                    <p className="text-xs text-[#1A1814]/65">
                      <strong className="text-[#A0522D]">What to Buy:</strong>{' '}
                      {fest.whatToBuy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 8: SPORTING EVENTS
            ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-[#EDE8E0]">
          <div className="container-morocco">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Sporting Events & Competitions
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                From ultramarathons in the Sahara to Formula E racing and the 2030
                FIFA World Cup, Morocco is a rising sports destination
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              {sportingEvents.map((event) => (
                <div key={event.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10">
                      <Trophy className="h-5 w-5 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                        {event.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1 text-xs text-[#1A1814]/60">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {event.when}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-3">
                    <span className="inline-flex items-center rounded-full bg-[#A0522D]/10 px-2.5 py-0.5 text-xs font-medium text-[#A0522D]">
                      {event.type}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        event.difficulty === 'Extreme'
                          ? 'bg-red-100 text-red-700'
                          : event.difficulty === 'Spectator'
                            ? 'bg-[#C4960C]/15 text-[#C4960C]'
                            : 'bg-[#EDE8E0] text-[#1A1814]/60'
                      }`}
                    >
                      {event.difficulty}
                    </span>
                  </div>

                  <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
                    {event.description}
                  </p>

                  <div className="rounded-lg bg-[#FAF8F5] p-3 border border-[#EDE8E0]">
                    <p className="text-xs text-[#1A1814]/65">
                      <strong className="text-[#A0522D]">
                        Participant Info:
                      </strong>{' '}
                      {event.participantInfo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 9: PLANNING TIPS
            ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Festival Planning Tips
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Essential practical advice for making the most of Morocco&apos;s
                festivals, from booking strategies to cultural etiquette
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              {planningTips.map((section) => {
                const SectionIcon = section.icon;
                return (
                  <div key={section.title} className="card-moroccan p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10">
                        <SectionIcon className="h-5 w-5 text-[#A0522D]" />
                      </div>
                      <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {section.tips.map((tip) => (
                        <li
                          key={tip}
                          className="flex items-start gap-2 text-sm text-[#1A1814]/70"
                        >
                          <ChevronRight className="h-3.5 w-3.5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Additional Planning Box */}
            <div className="max-w-4xl mx-auto mt-10">
              <div className="zellige-border rounded-2xl bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-[#1A1814] mb-4">
                  Best Months for Festival Travel
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-xl bg-[#FAF8F5]">
                    <Flower2 className="h-6 w-6 text-[#6B8E5A] mx-auto mb-2" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">
                      May - June
                    </h4>
                    <p className="text-xs text-[#1A1814]/60 mt-1">
                      Peak festival season. Rose Festival, Fes Sacred Music, Gnaoua, Mawazine
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-[#FAF8F5]">
                    <Leaf className="h-6 w-6 text-[#A0522D] mx-auto mb-2" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">
                      September - October
                    </h4>
                    <p className="text-xs text-[#1A1814]/60 mt-1">
                      Perfect weather. Tanjazz, Date Festival, Oasis Festival
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-[#FAF8F5]">
                    <Sun className="h-6 w-6 text-[#C4960C] mx-auto mb-2" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">
                      July - August
                    </h4>
                    <p className="text-xs text-[#1A1814]/60 mt-1">
                      Traditional season. Tbourida, moussems, coastal events (very hot inland)
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-[#FAF8F5]">
                    <Snowflake className="h-6 w-6 text-[#5B7FA5] mx-auto mb-2" />
                    <h4 className="font-semibold text-[#1A1814] text-sm">
                      November - January
                    </h4>
                    <p className="text-xs text-[#1A1814]/60 mt-1">
                      Film Festival, Yennayer, New Year. Mild weather, fewer crowds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 10: PHOTOGRAPHY TIPS
            ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-[#EDE8E0]">
          <div className="container-morocco">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Festival Photography Tips
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Capture the magic of Morocco&apos;s festivals with these practical
                photography tips from experienced Morocco photographers
              </p>
            </div>

            {/* Photo Image */}
            <div className="relative rounded-2xl overflow-hidden mb-10 max-w-4xl mx-auto h-[280px]">
              <img
                src="/images/photo-moroccan-wedding-celebration.webp"
                alt="Moroccan celebration with vibrant colors and traditional dress, perfect for festival photography - citytoursmorocco.com"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="hero-overlay absolute inset-0" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <Camera className="h-10 w-10 mx-auto mb-3 opacity-80" />
                  <p className="text-lg font-medium">
                    Morocco&apos;s festivals are a photographer&apos;s paradise
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {photographyTips.map((tip) => (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Camera className="h-4 w-4 text-[#A0522D]" />
                    <h3 className="text-base font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                    {tip.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 11: FAQ
            ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-[#1A1814]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-lg text-[#1A1814]/70 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Common questions about attending festivals and events in Morocco
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqJsonLd.mainEntity.map(
                (
                  faq: {
                    '@type': string;
                    name: string;
                    acceptedAnswer: { '@type': string; text: string };
                  },
                  index: number,
                ) => (
                  <details
                    key={index}
                    className="group card-moroccan overflow-hidden"
                  >
                    <summary className="flex items-start gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#A0522D]/10 flex-shrink-0 mt-0.5">
                        <Info className="h-4 w-4 text-[#A0522D]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-[#1A1814] font-[family-name:var(--font-heading)] group-open:text-[#A0522D] transition-colors">
                          {faq.name}
                        </h3>
                      </div>
                      <ChevronRight className="h-4 w-4 text-[#1A1814]/40 flex-shrink-0 mt-1 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="px-5 pb-5 pl-16">
                      <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  </details>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            FESTIVAL HIGHLIGHTS GALLERY
            ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
          <div className="container-morocco">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A1814' }}>
                Festival Highlights
              </h2>
              <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
                From the spiritual rhythms of Gnaoua to the thunder of Fantasia cavalry charges, Morocco&apos;s festivals are unforgettable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img src="/images/hero-gnaoua-festival.webp" alt="Musicians performing at the Gnaoua World Music Festival in Essaouira, Morocco" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-2 left-2 right-2 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Gnaoua World Music Festival -- Essaouira
                </p>
              </div>
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img src="/images/hero-fantasia-tbourida.webp" alt="Traditional Fantasia Tbourida cavalry charge with Moroccan horsemen in ceremonial dress" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-2 left-2 right-2 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Fantasia Tbourida -- Traditional cavalry charge
                </p>
              </div>
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img src="/images/poster-ramadan.webp" alt="Illustrated poster showing Ramadan traditions in Morocco including iftar meals, prayer times, and cultural practices" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-2 left-2 right-2 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ramadan in Morocco -- A month of reflection and community
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 12: EXPLORE MORE
            ═══════════════════════════════════════════════════════ */}
        <ExploreMore
          currentCategory="culture"
          currentHref="/festivals-calendar"
          title="Plan Your Festival Trip"
        />
      </main>
    </>
  );
}

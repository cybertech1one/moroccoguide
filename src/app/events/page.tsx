import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Calendar,
  MapPin,
  Star,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Music,
  Film,
  Palette,
  Utensils,
  TreePine,
  Globe,
  Ticket,
  Users,
  Sun,
} from 'lucide-react';
import EventsClientSection from './EventsClient';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Events & Festivals Calendar 2025-2026 | CityGuide',
  description:
    'Discover Morocco\'s vibrant calendar of festivals and events. From the Gnaoua World Music Festival and Mawazine to the Rose Festival, Marrakech Film Festival, and ancient moussems. Plan your visit around Morocco\'s best celebrations.',
  keywords: [
    'Morocco festivals',
    'Morocco events',
    'Gnaoua Festival Essaouira',
    'Mawazine Rabat',
    'Marrakech Film Festival',
    'Rose Festival Morocco',
    'Fes Sacred Music Festival',
    'Morocco cultural events',
    'Morocco music festivals',
    'Morocco calendar events',
    'Morocco religious holidays',
    'Morocco food festivals',
    'Timitar Festival Agadir',
    'Cherry Festival Sefrou',
    'Imilchil Marriage Festival',
    'Tan-Tan Moussem',
  ],
  openGraph: {
    title: 'Morocco Events & Festivals Calendar 2025-2026 - CityGuide',
    description:
      'Explore 45+ festivals and events across Morocco. Music, film, culture, food, and traditional celebrations throughout the year.',
    url: 'https://citytoursmorocco.com/events',
    images: [
      {
        url: '/images/hero-jemaa-elfna-night.webp',
        width: 1200,
        height: 630,
        alt: 'Festival celebration in Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/events' },
};

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

type EventType =
  | 'music'
  | 'film'
  | 'cultural'
  | 'food'
  | 'sports'
  | 'religious'
  | 'arts'
  | 'nature';

type MonthName =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'
  | 'Year-round';

interface MoroccoEvent {
  name: string;
  slug: string;
  cityName: string;
  description: string;
  month: MonthName;
  dates2026: string;
  confirmed2026: boolean;
  type: EventType;
  isAnnual: boolean;
  image: string;
  featured?: boolean;
}

/* ═══════════════════════════════════════════════════════════════
   EVENTS DATA - 45+ EVENTS COVERING ALL 12 MONTHS
   ═══════════════════════════════════════════════════════════════ */

const events: MoroccoEvent[] = [
  /* ══════════════════════════════════════════════════════════════
     JANUARY 2026
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'AFCON 2025 (Final Stages in Morocco)',
    slug: 'afcon-2025-morocco',
    cityName: 'Nationwide',
    description:
      'The 35th Africa Cup of Nations concludes in Morocco with knockout rounds and the final. Six host cities (Rabat, Casablanca, Marrakech, Tangier, Agadir, Fes) showcase world-class stadiums. The tournament, which began December 21, 2025, wraps up January 18, 2026, drawing millions of fans.',
    month: 'January',
    dates2026: 'January 1 - 18, 2026 (final stages)',
    confirmed2026: true,
    type: 'sports',
    isAnnual: false,
    image: '/images/hero-morocco.webp',
    featured: true,
  },
  {
    name: 'Amazigh New Year (Yennayer)',
    slug: 'amazigh-new-year',
    cityName: 'Nationwide',
    description:
      'Celebrated on January 13th across Morocco, Yennayer marks the Amazigh (Berber) New Year 2976. Communities gather for traditional feasts featuring couscous with seven vegetables, music, and ceremonies honoring their ancient agricultural calendar. Officially recognized as a national holiday since 2024.',
    month: 'January',
    dates2026: 'January 13, 2026',
    confirmed2026: true,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Marrakech International Marathon',
    slug: 'marrakech-marathon',
    cityName: 'Marrakech',
    description:
      'One of Africa\'s premier marathons, running through the Red City\'s historic landmarks, palm groves, and the shadow of the Atlas Mountains. Attracts over 13,000 runners from around the world each year with full, half, and 10K options.',
    month: 'January',
    dates2026: 'Late January 2026',
    confirmed2026: false,
    type: 'sports',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },

  /* ══════════════════════════════════════════════════════════════
     FEBRUARY 2026
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'Almond Blossom Festival',
    slug: 'almond-blossom-festival',
    cityName: 'Tafraoute',
    description:
      'The Anti-Atlas town of Tafraoute erupts in pink and white as thousands of almond trees burst into bloom. This annual festival celebrates the harvest with Berber music, folk dancing, local cuisine, and spectacular natural beauty across the granite valleys.',
    month: 'February',
    dates2026: 'Late January - Early February 2026',
    confirmed2026: false,
    type: 'nature',
    isAnnual: true,
    image: '/images/hero-desert.webp',
  },
  {
    name: '1-54 Contemporary African Art Fair',
    slug: '1-54-art-fair-marrakech',
    cityName: 'Marrakech',
    description:
      'The premier contemporary African art fair returns to La Mamounia in Marrakech, hosting over 20 galleries from 12 countries. Two VIP/press days are followed by two public days showcasing works from across the African continent and its diaspora, with artists from Tunisia, Nigeria, Ghana, Egypt, and beyond.',
    month: 'February',
    dates2026: 'February 5 - 8, 2026',
    confirmed2026: true,
    type: 'arts',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Casablanca Fashion Week',
    slug: 'casablanca-fashion-week',
    cityName: 'Casablanca',
    description:
      'Morocco\'s premier fashion event showcasing the best of Moroccan and African haute couture. International and local designers present collections that blend traditional caftans with contemporary fashion in stunning Art Deco venues across the economic capital.',
    month: 'February',
    dates2026: 'Mid-February 2026',
    confirmed2026: false,
    type: 'arts',
    isAnnual: true,
    image: '/images/photo-fantasia-tbourida.webp',
  },
  {
    name: 'Ramadan Begins',
    slug: 'ramadan-2026',
    cityName: 'Nationwide',
    description:
      'Ramadan 2026 is expected to begin around February 19. Experience the unique atmosphere of the holy month when cities come alive after sunset. Streets fill with the aroma of harira soup and chebakia pastries, families gather for iftar feasts, and the medinas buzz with energy through the sacred night hours. A deeply spiritual time across the kingdom.',
    month: 'February',
    dates2026: 'February 19 - March 20, 2026 (approx.)',
    confirmed2026: true,
    type: 'religious',
    isAnnual: true,
    image: '/images/hero-fes.webp',
    featured: true,
  },

  /* ══════════════════════════════════════════════════════════════
     MARCH 2026
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'Eid al-Fitr',
    slug: 'eid-al-fitr-2026',
    cityName: 'Nationwide',
    description:
      'The joyous festival marking the end of Ramadan, expected around March 20-21. Families don their finest clothes, exchange gifts, and prepare elaborate feasts. Mosques overflow with worshippers, streets are decorated, and the sweet aromas of traditional pastries fill every neighborhood. A two-day public holiday.',
    month: 'March',
    dates2026: 'March 20 - 21, 2026 (approx.)',
    confirmed2026: true,
    type: 'religious',
    isAnnual: true,
    image: '/images/photo-fantasia-tbourida.webp',
  },
  {
    name: 'International Nomads Festival',
    slug: 'international-nomads-festival',
    cityName: "M'hamid El Ghizlane",
    description:
      'Held on the edge of the Sahara, this three-day festival celebrates the traditions of nomadic tribes with camel races, Gnaoua music, Hassani poetry, and desert camping. An immersive experience connecting travelers with authentic Saharan culture and the heritage of Morocco\'s desert peoples.',
    month: 'March',
    dates2026: 'Late March 2026',
    confirmed2026: false,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Printemps Musical des Alizees',
    slug: 'printemps-musical-essaouira',
    cityName: 'Essaouira',
    description:
      'A spring classical and world music festival in the windswept coastal city of Essaouira. Intimate chamber concerts are held in historic riads and the Portuguese ramparts, blending classical European and Moroccan musical traditions in a hauntingly beautiful coastal setting.',
    month: 'March',
    dates2026: 'Mid-March 2026',
    confirmed2026: false,
    type: 'music',
    isAnnual: true,
    image: '/images/photo-fantasia-tbourida.webp',
  },

  /* ══════════════════════════════════════════════════════════════
     APRIL 2026
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'SIAM International Agricultural Fair',
    slug: 'siam-agricultural-fair',
    cityName: 'Meknes',
    description:
      'Africa\'s largest agricultural show, held under the High Patronage of King Mohammed VI. Over 1,500 exhibitors from 70+ countries gather at Jnan Ben Halima. Professional days precede public days, drawing over a million visitors with exhibitions of Morocco\'s agricultural innovation and rural heritage.',
    month: 'April',
    dates2026: 'April 20 - 26, 2026',
    confirmed2026: true,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'GITEX Africa Morocco',
    slug: 'gitex-africa-morocco',
    cityName: 'Marrakech',
    description:
      'Africa\'s largest technology and digital economy showcase. Held at Place Bab Jdid in Marrakech, this three-day event brings together global tech leaders, startups, investors, and government officials to discuss AI, fintech, digital transformation, and Africa\'s growing tech ecosystem.',
    month: 'April',
    dates2026: 'April 7 - 9, 2026',
    confirmed2026: true,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Marathon des Sables',
    slug: 'marathon-des-sables',
    cityName: 'Ouarzazate',
    description:
      'The toughest footrace on Earth: a six-day, 250-kilometer ultramarathon through the Sahara Desert. Competitors carry their own supplies across sand dunes, rocky plateaus, and dried river beds in extreme heat, testing the limits of human endurance.',
    month: 'April',
    dates2026: 'Early April 2026',
    confirmed2026: false,
    type: 'sports',
    isAnnual: true,
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Fes Festival of Sufi Culture',
    slug: 'fes-sufi-culture-festival',
    cityName: 'Fes',
    description:
      'A spiritual gathering celebrating Sufi mysticism through music, whirling dervish performances, poetry, and philosophical discussions. Held in Fes\'s ancient medersas and palaces, this intimate festival offers a window into Islam\'s contemplative traditions.',
    month: 'April',
    dates2026: 'Mid-April 2026',
    confirmed2026: false,
    type: 'religious',
    isAnnual: true,
    image: '/images/hero-berber-culture.webp',
  },

  /* ══════════════════════════════════════════════════════════════
     MAY 2026
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'Rose Festival (Moussem des Roses)',
    slug: 'rose-festival',
    cityName: "Kelaat M'Gouna",
    description:
      'The Dades Valley explodes in color as millions of Damask roses bloom in the Valley of Roses. This three-to-four-day festival features a parade with rose-petal floats, the crowning of a Rose Queen, folk music, and the distillation of rose water and essential oils. One of Morocco\'s most photographed and beloved traditions.',
    month: 'May',
    dates2026: 'Early to mid-May 2026',
    confirmed2026: false,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-asilah-aerial.webp',
    featured: true,
  },
  {
    name: 'Fes Festival of World Sacred Music',
    slug: 'fes-sacred-music-festival',
    cityName: 'Fes',
    description:
      'One of the world\'s most prestigious world music festivals, bringing together sacred music traditions from across the globe. Sufi chanting, Gospel choirs, Indian ragas, and Andalusian orchestras perform in Fes\'s historic palaces and medersas over nine extraordinary days. A UNESCO-endorsed event promoting dialogue between civilizations.',
    month: 'May',
    dates2026: 'Late May - Early June 2026',
    confirmed2026: false,
    type: 'music',
    isAnnual: true,
    image: '/images/art-gnawa-music.webp',
    featured: true,
  },
  {
    name: 'Eid al-Adha',
    slug: 'eid-al-adha-2026',
    cityName: 'Nationwide',
    description:
      'The most important religious holiday in Morocco, commemorating Abraham\'s sacrifice. Expected around May 27, 2026. Families gather for communal prayers, share meals of mechoui (whole roasted lamb), and distribute meat to neighbors and those in need. A multi-day public holiday across the kingdom.',
    month: 'May',
    dates2026: 'May 27, 2026 (approx.)',
    confirmed2026: true,
    type: 'religious',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Rabat Diamond League',
    slug: 'rabat-diamond-league',
    cityName: 'Rabat',
    description:
      'The Rabat leg of the prestigious World Athletics Diamond League returns to Morocco\'s capital. Top athletes from around the world compete in track and field events at the Prince Moulay Abdellah Stadium, showcasing elite performances in sprints, distance running, jumps, and throws.',
    month: 'May',
    dates2026: 'May 31, 2026',
    confirmed2026: true,
    type: 'sports',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Botola Pro Season Finale',
    slug: 'botola-pro-season-finale',
    cityName: 'Nationwide',
    description:
      'The 69th season of the Botola Pro Inwi, Morocco\'s top-flight football league, reaches its climax. Sixteen clubs compete for the championship with matches across the country, with exciting final-day drama as titles and relegation are decided.',
    month: 'May',
    dates2026: 'Season ends May 12, 2026',
    confirmed2026: true,
    type: 'sports',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },

  /* ══════════════════════════════════════════════════════════════
     JUNE 2026
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'Mawazine Festival',
    slug: 'mawazine-festival',
    cityName: 'Rabat',
    description:
      'Africa\'s largest music festival by attendance, Mawazine draws over 2.5 million visitors to Rabat. Over nine days, international and Arabic pop, rock, hip-hop, and traditional music fill iconic venues including OLM Souissi, Bouregreg, and Theatre National Mohammed V. Past headliners include Rihanna, Elton John, and Shakira. Ninety percent of concerts are free.',
    month: 'June',
    dates2026: 'June 19 - 27, 2026',
    confirmed2026: true,
    type: 'music',
    isAnnual: true,
    image: '/images/art-gnawa-music.webp',
    featured: true,
  },
  {
    name: 'Gnaoua World Music Festival',
    slug: 'gnaoua-world-music-festival',
    cityName: 'Essaouira',
    description:
      'A celebration of Gnaoua music and its fusion with jazz, blues, reggae, and world music on the Atlantic coast. Master musicians (maalems) perform trance-inducing ceremonies alongside international collaborators in open-air venues by the sea. Founded in 1998, the festival draws over 500,000 visitors and is one of Morocco\'s most iconic cultural events.',
    month: 'June',
    dates2026: 'June 25 - 27, 2026',
    confirmed2026: true,
    type: 'music',
    isAnnual: true,
    image: '/images/hero-jemaa-elfna-night.webp',
    featured: true,
  },
  {
    name: 'Tan-Tan Moussem',
    slug: 'tan-tan-moussem',
    cityName: 'Tan-Tan',
    description:
      'A UNESCO Masterpiece of Intangible Heritage, this annual gathering of nomadic tribes from across the Sahara features camel markets, traditional music, poetry contests, and cultural exchanges. The festival preserves centuries-old nomadic traditions of the great trans-Saharan trade routes.',
    month: 'June',
    dates2026: 'Late June 2026',
    confirmed2026: false,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-asilah-aerial.webp',
  },
  {
    name: 'Cherry Festival',
    slug: 'cherry-festival',
    cityName: 'Sefrou',
    description:
      'One of Morocco\'s oldest festivals, dating back to the 1920s. The cherry-growing town of Sefrou celebrates its harvest with a parade, the crowning of the Cherry Queen, Amazigh music, folk dancing, and endless cherry tastings in a joyful community celebration near Fes.',
    month: 'June',
    dates2026: 'Mid-June 2026',
    confirmed2026: false,
    type: 'food',
    isAnnual: true,
    image: '/images/hero-berber-culture.webp',
  },
  {
    name: 'FIFA World Cup 2026 (Morocco Matches)',
    slug: 'fifa-world-cup-2026-morocco',
    cityName: 'USA / Canada / Mexico',
    description:
      'Morocco competes in the 2026 FIFA World Cup. While the tournament is hosted in North America (June 11 - July 19), expect massive fan zones and public screenings across Moroccan cities as the nation rallies behind the Atlas Lions on the world stage.',
    month: 'June',
    dates2026: 'June 11 - July 19, 2026',
    confirmed2026: true,
    type: 'sports',
    isAnnual: false,
    image: '/images/hero-morocco.webp',
  },

  /* ══════════════════════════════════════════════════════════════
     JULY 2026
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'Timitar Festival',
    slug: 'timitar-festival',
    cityName: 'Agadir',
    description:
      'A celebration of Amazigh (Berber) culture and world music in sunny Agadir. The festival brings together Berber musicians from across North Africa with international artists over four days, promoting cultural exchange through music, dance, and the Amazigh language. Most concerts are free and open to the public.',
    month: 'July',
    dates2026: 'Mid-July 2026',
    confirmed2026: false,
    type: 'music',
    isAnnual: true,
    image: '/images/hero-surfing.webp',
    featured: true,
  },
  {
    name: 'National Festival of Popular Arts',
    slug: 'national-festival-popular-arts',
    cityName: 'Marrakech',
    description:
      'Morocco\'s oldest cultural festival, held annually since 1960 in the El Badi Palace. Hundreds of performers from across the country showcase traditional Berber dance, Gnaoua music, horse shows, and folk arts, preserving Morocco\'s rich intangible heritage in a grand setting.',
    month: 'July',
    dates2026: 'Mid to late July 2026',
    confirmed2026: false,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Throne Day',
    slug: 'throne-day-2026',
    cityName: 'Nationwide',
    description:
      'Morocco\'s most important national holiday, celebrating King Mohammed VI\'s accession to the throne on July 30. Cities across the kingdom host parades, fireworks, public celebrations, and cultural events. Government buildings and streets are decorated with Moroccan flags and portraits of the King.',
    month: 'July',
    dates2026: 'July 30, 2026',
    confirmed2026: true,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Rabat Summer Festival',
    slug: 'rabat-summer-festival',
    cityName: 'Rabat',
    description:
      'The capital city comes alive with outdoor concerts, theatrical performances, and cultural events throughout July. Venues range from the historic Chellah necropolis to the modern Mohammed VI Museum, blending the ancient and contemporary spirit of Rabat.',
    month: 'July',
    dates2026: 'Throughout July 2026',
    confirmed2026: false,
    type: 'music',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Oasis Festival',
    slug: 'oasis-festival',
    cityName: 'Marrakech',
    description:
      'An electronic music and arts festival set in the stunning landscape outside Marrakech. International DJs and producers perform alongside visual art installations, workshops, and wellness activities. Pool parties during the day and desert-stage sets under the stars create a unique festival atmosphere.',
    month: 'July',
    dates2026: 'Mid-July 2026',
    confirmed2026: false,
    type: 'music',
    isAnnual: true,
    image: '/images/art-gnawa-music.webp',
  },

  /* ══════════════════════════════════════════════════════════════
     AUGUST 2026
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'Revolution of the King and the People Day',
    slug: 'revolution-day-2026',
    cityName: 'Nationwide',
    description:
      'A national holiday on August 20 commemorating the 1953 uprising against French colonial rule, when Moroccan nationalists united behind exiled Sultan Mohammed V. Celebrations include patriotic parades, public speeches, and cultural events honoring the country\'s struggle for independence.',
    month: 'August',
    dates2026: 'August 20, 2026',
    confirmed2026: true,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Asilah Arts Festival',
    slug: 'asilah-arts-festival',
    cityName: 'Asilah',
    description:
      'Transforming this Atlantic coastal town into an open-air gallery, the Asilah festival invites international artists to paint murals on the medina walls. Poetry readings, music performances, and art exhibitions fill the whitewashed streets for three weeks.',
    month: 'August',
    dates2026: 'August 2026',
    confirmed2026: false,
    type: 'arts',
    isAnnual: true,
    image: '/images/art-street-art.webp',
  },
  {
    name: 'Moulay Idriss Moussem',
    slug: 'moulay-idriss-moussem',
    cityName: 'Moulay Idriss',
    description:
      'Morocco\'s most important annual pilgrimage to the tomb of Moulay Idriss I, founder of the first Moroccan dynasty. Thousands gather for religious ceremonies, Sufi rituals, fantasia horse charges, and traditional markets in this holy hilltop town near Volubilis.',
    month: 'August',
    dates2026: 'Late August 2026',
    confirmed2026: false,
    type: 'religious',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Honey Festival',
    slug: 'honey-festival-imouzzer',
    cityName: 'Imouzzer Ida-Outanane',
    description:
      'Nestled in the hills above Agadir, this festival celebrates the region\'s prized thyme and euphorbia honey. Beekeepers from across the Souss Valley display their harvests, while visitors enjoy tastings, folk performances, and hikes through the verdant paradise valley.',
    month: 'August',
    dates2026: 'Early August 2026',
    confirmed2026: false,
    type: 'food',
    isAnnual: true,
    image: '/images/hero-surfing.webp',
  },
  {
    name: 'Setti Fatma Moussem',
    slug: 'setti-fatma-moussem',
    cityName: 'Ourika Valley',
    description:
      'A four-day religious festival and cultural fair in the Ourika Valley at the foot of the High Atlas. Pilgrims honor the local saint Setti Fatma while stalls sell handicrafts, traditional musicians perform, and visitors can hike to the famous seven waterfalls. One of the most atmospheric traditional gatherings near Marrakech.',
    month: 'August',
    dates2026: 'Mid-August 2026',
    confirmed2026: false,
    type: 'religious',
    isAnnual: true,
    image: '/images/hero-desert.webp',
  },

  /* ══════════════════════════════════════════════════════════════
     SEPTEMBER 2026
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'Tanjazz Jazz Festival',
    slug: 'tanjazz-festival',
    cityName: 'Tangier',
    description:
      'Tangier\'s premier jazz festival brings world-class musicians to intimate venues across the cosmopolitan city where Africa meets Europe. Concerts at the Palais des Institutions Italiennes and the Palais des arts et de la culture create a unique atmosphere blending jazz with North African rhythms.',
    month: 'September',
    dates2026: 'September 18 - 20, 2026',
    confirmed2026: true,
    type: 'music',
    isAnnual: true,
    image: '/images/art-street-art.webp',
  },
  {
    name: 'Imilchil Marriage Festival',
    slug: 'imilchil-marriage-festival',
    cityName: 'Imilchil',
    description:
      'High in the Atlas Mountains, the village of Imilchil hosts one of Morocco\'s most legendary festivals. Young Amazigh (Berber) men and women gather to choose their partners in an ancient matchmaking tradition. The moussem features folk music, traditional dances, horse parades, and colorful tribal dress.',
    month: 'September',
    dates2026: 'September 17 - 21, 2026',
    confirmed2026: true,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-berber-culture.webp',
    featured: true,
  },
  {
    name: 'National Fantasia Festival (Tbourida)',
    slug: 'fantasia-festival',
    cityName: 'Meknes',
    description:
      'A spectacular equestrian tradition where riders in traditional dress charge in formation, firing muskets in perfect synchrony. The tbourida (fantasia) is a UNESCO-recognized cultural practice celebrating Morocco\'s deep connection with its legendary Barb horses and centuries of cavalry tradition.',
    month: 'September',
    dates2026: 'September 2026',
    confirmed2026: false,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Alegria Festival',
    slug: 'alegria-festival',
    cityName: 'Chefchaouen',
    description:
      'A celebration of diversity and culture in the stunning Blue City of Chefchaouen. Alegria features local talent shows, Latin and world music performances, traditional foods, and photography exhibitions. The blue-painted streets come alive with exquisite cultures from Morocco and around the globe.',
    month: 'September',
    dates2026: 'September 2026 (dates TBC)',
    confirmed2026: false,
    type: 'cultural',
    isAnnual: true,
    image: '/images/art-street-art.webp',
  },

  /* ══════════════════════════════════════════════════════════════
     OCTOBER 2026
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'Date Festival (Moussem des Dattes)',
    slug: 'date-festival',
    cityName: 'Erfoud',
    description:
      'The oasis town of Erfoud celebrates its world-famous date harvest with a three-day festival featuring date exhibitions, camel parades, Berber music, folk dancing, fantasia displays, and the chance to sample dozens of varieties of Morocco\'s finest dates including the prized Medjool.',
    month: 'October',
    dates2026: 'Third week of October 2026',
    confirmed2026: false,
    type: 'food',
    isAnnual: true,
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Saffron Festival',
    slug: 'saffron-festival',
    cityName: 'Taliouine',
    description:
      'The tiny town of Taliouine, the saffron capital of Morocco, celebrates its precious harvest each October. Watch saffron crocus flowers being hand-picked at dawn, learn about cultivation, taste saffron-infused dishes, and witness Berber cultural performances.',
    month: 'October',
    dates2026: 'Late October 2026',
    confirmed2026: false,
    type: 'food',
    isAnnual: true,
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Olive Festival',
    slug: 'olive-festival',
    cityName: 'Meknes',
    description:
      'Celebrating the olive harvest season in Morocco\'s most fertile agricultural region. Taste award-winning olive oils, watch traditional pressing demonstrations, enjoy folk music, and explore the olive groves that have sustained the Meknes region for millennia.',
    month: 'October',
    dates2026: 'Mid-October 2026',
    confirmed2026: false,
    type: 'food',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Salon du Cheval (Horse Show)',
    slug: 'salon-du-cheval',
    cityName: 'El Jadida',
    description:
      'Morocco\'s grand horse show, one of the largest equestrian events in Africa. Hosted in the UNESCO-listed Portuguese city of El Jadida, it features purebred Barb and Arab-Barb horses, fantasia displays, breeding exhibitions, and equestrian competitions over a full week.',
    month: 'October',
    dates2026: 'Late October 2026',
    confirmed2026: false,
    type: 'cultural',
    isAnnual: true,
    image: '/images/photo-fantasia-tbourida.webp',
  },

  /* ══════════════════════════════════════════════════════════════
     NOVEMBER 2026
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'Green March Day',
    slug: 'green-march-day-2026',
    cityName: 'Nationwide',
    description:
      'November 6 commemorates the 1975 Green March, when 350,000 Moroccan volunteers peacefully marched into the Western Sahara to reclaim the territory from Spanish colonial control. Parades, flag ceremonies, and patriotic celebrations take place across the country.',
    month: 'November',
    dates2026: 'November 6, 2026',
    confirmed2026: true,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Taragalte Festival',
    slug: 'taragalte-festival',
    cityName: "M'hamid El Ghizlane",
    description:
      'Three desert-lit days of concerts, poetry, craft, and nomadic culture at the gateway to the Sahara. The name "Taragalte" means "meeting place" in the local Berber dialect. Activities include music on a sand-dune stage, traditional crafts, camel races, and astronomy sessions under the clearest sky in Morocco.',
    month: 'November',
    dates2026: 'Late October - Early November 2026',
    confirmed2026: false,
    type: 'music',
    isAnnual: true,
    image: '/images/art-gnawa-music.webp',
  },
  {
    name: 'Independence Day',
    slug: 'independence-day-2026',
    cityName: 'Nationwide',
    description:
      'Morocco\'s Independence Day on November 18 celebrates the country\'s liberation from French colonial rule in 1956. This major national holiday features flag-raising ceremonies, military parades, cultural events, and public festivities across all cities.',
    month: 'November',
    dates2026: 'November 18, 2026',
    confirmed2026: true,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Marrakech International Film Festival',
    slug: 'marrakech-film-festival',
    cityName: 'Marrakech',
    description:
      'One of Africa\'s most glamorous film festivals, founded by King Mohammed VI. International stars walk the red carpet at the Palais des Congres, while open-air screenings in Jemaa el-Fnaa bring world cinema to thousands of Marrakchis for free. Past honorees include Martin Scorsese and Francis Ford Coppola.',
    month: 'November',
    dates2026: 'November 20 - 28, 2026',
    confirmed2026: true,
    type: 'film',
    isAnnual: true,
    image: '/images/hero-ait-benhaddou.webp',
    featured: true,
  },
  {
    name: 'Marrakech Coffee & Tea Festival',
    slug: 'marrakech-coffee-tea-festival',
    cityName: 'Marrakech',
    description:
      'A three-day international celebration of coffee and tea cultures at Mossala Sidi Amara. Discover and celebrate the world\'s finest brews with expert baristas, workshops, tastings, and cultural exchanges between Moroccan mint tea traditions and global coffee culture.',
    month: 'November',
    dates2026: 'November 14 - 16, 2026',
    confirmed2026: true,
    type: 'food',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },

  /* ══════════════════════════════════════════════════════════════
     DECEMBER 2026
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'Zamane Festival',
    slug: 'zamane-festival',
    cityName: "M'hamid El Ghizlane",
    description:
      'The Zamane Festival returns to the Saharan oasis of M\'hamid El Ghizlane, celebrating Saharan music, poetry, and nomadic heritage against the backdrop of the desert dunes. An intimate and immersive cultural experience at the edge of the world.',
    month: 'December',
    dates2026: 'December 3 - 6, 2026',
    confirmed2026: true,
    type: 'music',
    isAnnual: true,
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Trans-Saharan Music Festival',
    slug: 'trans-saharan-music-festival',
    cityName: 'Merzouga',
    description:
      'Beneath the towering dunes of Erg Chebbi, musicians from Mali, Niger, Algeria, and Morocco gather for three days of Saharan blues, Tuareg guitar, and Gnaoua rhythms. Campfires, stargazing, and camel treks make this an unforgettable desert music experience.',
    month: 'December',
    dates2026: 'Mid-December 2026',
    confirmed2026: false,
    type: 'music',
    isAnnual: true,
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'New Year Celebrations',
    slug: 'new-year-celebrations',
    cityName: 'Marrakech',
    description:
      'Marrakech rings in the New Year with rooftop parties, live music events, and spectacular fireworks over the medina. Luxury hotels and riads host gala dinners, while Jemaa el-Fnaa becomes a massive open-air celebration welcoming the new year.',
    month: 'December',
    dates2026: 'December 31, 2026',
    confirmed2026: true,
    type: 'cultural',
    isAnnual: true,
    image: '/images/hero-morocco.webp',
  },

  /* ══════════════════════════════════════════════════════════════
     YEAR-ROUND / ONGOING
     ══════════════════════════════════════════════════════════════ */
  {
    name: 'World Cup 2030 Stadium Construction',
    slug: 'world-cup-2030-preparation',
    cityName: 'Nationwide',
    description:
      'Morocco is building and renovating six stadiums for the 2030 FIFA World Cup (co-hosted with Spain and Portugal). The flagship Grand Stade Hassan II in Benslimane will seat 115,000, making it the world\'s largest. Other venues are in Rabat, Tangier, Agadir, Fes, and Marrakech.',
    month: 'Year-round',
    dates2026: 'Ongoing construction throughout 2026',
    confirmed2026: true,
    type: 'sports',
    isAnnual: false,
    image: '/images/hero-morocco.webp',
  },
  {
    name: 'Weekly Souks',
    slug: 'weekly-souks',
    cityName: 'Nationwide',
    description:
      'Across rural Morocco, weekly open-air markets (souks) bring villages to life on specific days. Farmers, artisans, and traders gather to sell fresh produce, livestock, spices, textiles, and handcrafted goods in a tradition unchanged for centuries.',
    month: 'Year-round',
    dates2026: 'Every week, year-round',
    confirmed2026: true,
    type: 'cultural',
    isAnnual: false,
    image: '/images/hero-morocco.webp',
  },
];

const EVENT_TYPES: { id: EventType; label: string }[] = [
  { id: 'music', label: 'Music' },
  { id: 'film', label: 'Film' },
  { id: 'cultural', label: 'Cultural' },
  { id: 'food', label: 'Food & Drink' },
  { id: 'sports', label: 'Sports' },
  { id: 'religious', label: 'Religious' },
  { id: 'arts', label: 'Arts' },
  { id: 'nature', label: 'Nature' },
];

/* ═══════════════════════════════════════════════════════════════
   ANNUAL CALENDAR OVERVIEW DATA
   ═══════════════════════════════════════════════════════════════ */

const monthOverview: {
  month: string;
  shortMonth: string;
  season: string;
  weather: string;
  highlights: string[];
  icon: typeof Sun;
}[] = [
  {
    month: 'January',
    shortMonth: 'Jan',
    season: 'Winter',
    weather: 'Cool & mild',
    highlights: ['AFCON 2025 finals', 'Amazigh New Year', 'Marrakech Marathon'],
    icon: Star,
  },
  {
    month: 'February',
    shortMonth: 'Feb',
    season: 'Winter',
    weather: 'Cool, almond blossoms',
    highlights: ['Almond Blossom Festival', '1-54 Art Fair', 'Ramadan begins'],
    icon: TreePine,
  },
  {
    month: 'March',
    shortMonth: 'Mar',
    season: 'Spring',
    weather: 'Warming up',
    highlights: ['Eid al-Fitr', 'Nomads Festival', 'Spring concerts'],
    icon: Sun,
  },
  {
    month: 'April',
    shortMonth: 'Apr',
    season: 'Spring',
    weather: 'Warm & pleasant',
    highlights: ['SIAM Fair', 'Marathon des Sables', 'GITEX Africa'],
    icon: Globe,
  },
  {
    month: 'May',
    shortMonth: 'May',
    season: 'Spring',
    weather: 'Warm & sunny',
    highlights: ['Rose Festival', 'Sacred Music (Fes)', 'Eid al-Adha'],
    icon: Sparkles,
  },
  {
    month: 'June',
    shortMonth: 'Jun',
    season: 'Summer',
    weather: 'Hot',
    highlights: ['Mawazine (Rabat)', 'Gnaoua (Essaouira)', 'Cherry Festival'],
    icon: Music,
  },
  {
    month: 'July',
    shortMonth: 'Jul',
    season: 'Summer',
    weather: 'Peak heat',
    highlights: ['Timitar (Agadir)', 'Popular Arts', 'Throne Day'],
    icon: Sun,
  },
  {
    month: 'August',
    shortMonth: 'Aug',
    season: 'Summer',
    weather: 'Very hot inland',
    highlights: ['Asilah Arts', 'Honey Festival', 'Moussems'],
    icon: Palette,
  },
  {
    month: 'September',
    shortMonth: 'Sep',
    season: 'Autumn',
    weather: 'Cooling down',
    highlights: ['Imilchil Marriage', 'Tanjazz', 'Fantasia Festival'],
    icon: Users,
  },
  {
    month: 'October',
    shortMonth: 'Oct',
    season: 'Autumn',
    weather: 'Ideal weather',
    highlights: ['Date Festival', 'Saffron Festival', 'Salon du Cheval'],
    icon: Utensils,
  },
  {
    month: 'November',
    shortMonth: 'Nov',
    season: 'Autumn',
    weather: 'Mild & pleasant',
    highlights: ['Marrakech Film Fest', 'Taragalte', 'Independence Day'],
    icon: Film,
  },
  {
    month: 'December',
    shortMonth: 'Dec',
    season: 'Winter',
    weather: 'Cool',
    highlights: ['Desert festivals', 'New Year events', 'Zamane Festival'],
    icon: Star,
  },
];

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Morocco Events & Festivals Calendar 2025-2026',
    description:
      'A comprehensive calendar of festivals, celebrations, and cultural events across Morocco throughout the year.',
    url: 'https://citytoursmorocco.com/events',
    numberOfItems: events.length,
    itemListElement: events.map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Event',
        name: e.name,
        description: e.description,
        url: `https://citytoursmorocco.com/events/${e.slug}`,
        image: e.image,
        location: {
          '@type': 'Place',
          name: e.cityName,
          address: {
            '@type': 'PostalAddress',
            addressLocality: e.cityName,
            addressCountry: 'MA',
          },
        },
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function EventsPage() {
  const uniqueCities = [...new Set(events.map((e) => e.cityName))].sort();
  const musicCount = events.filter((e) => e.type === 'music').length;
  const annualCount = events.filter((e) => e.isAnnual).length;
  const featuredEvents = events.filter((e) => e.featured);

  return (
    <>
      <JsonLd />

      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        className="container-morocco pt-4 pb-2"
      >
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link
              href="/"
              className="hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="text-text-primary font-medium">Events &amp; Festivals</li>
        </ol>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-jemaa-elfna-night.webp"
            alt="Moroccan festival celebration with traditional lanterns and decorations"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Plan Your Visit
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Events &amp; Festivals Calendar
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Morocco celebrates year-round with world-class music festivals,
              ancient cultural traditions, food harvests, and sacred pilgrimages.
              Time your trip to experience the magic.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {events.length}+
                </p>
                <p className="text-sm text-white/70">Events</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {musicCount}
                </p>
                <p className="text-sm text-white/70">Music Festivals</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {annualCount}
                </p>
                <p className="text-sm text-white/70">Annual Events</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {uniqueCities.length}
                </p>
                <p className="text-sm text-white/70">Cities</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Featured / Upcoming Events Section ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Featured Events</span>
            </div>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.slice(0, 6).map((event) => (
              <div
                key={event.slug}
                className="card-moroccan overflow-hidden group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--color-accent)]/90 text-white text-xs font-bold shadow-sm">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {event.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-3 text-sm text-[var(--text-muted)] mb-3">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      {event.cityName}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      {event.month}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm mb-3">
                    {event.confirmed2026 ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    )}
                    <span className={event.confirmed2026 ? 'text-green-700 font-medium' : 'text-amber-600'}>
                      {event.dates2026}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Annual Calendar Visual Overview ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-3">
              Year at a Glance
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A month-by-month overview of Morocco&apos;s event calendar. Peak festival season runs from May through July, but every month offers something special.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {monthOverview.map((m) => {
              const monthEventCount = events.filter((e) => e.month === m.month).length;
              const IconComp = m.icon;
              return (
                <div
                  key={m.month}
                  className="card-moroccan p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                      {m.shortMonth}
                    </span>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold">
                      {monthEventCount}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-[var(--text-primary)] text-sm mb-1">
                    {m.month}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mb-3">{m.season} -- {m.weather}</p>
                  <ul className="space-y-1">
                    {m.highlights.map((h) => (
                      <li key={h} className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                        <IconComp className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span className="leading-tight">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Quick Planning Tips Strip ── */}
      <section className="py-8 gradient-moroccan">
        <div className="container-morocco">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Ticket,
                title: 'Book Early',
                text: 'Accommodation fills fast during Gnaoua and Mawazine. Reserve 2-3 months ahead.',
              },
              {
                icon: Calendar,
                title: 'Check Lunar Dates',
                text: 'Ramadan and Eid shift ~11 days yearly. They transform the entire travel experience.',
              },
              {
                icon: Globe,
                title: 'Combine Regions',
                text: 'Use a festival as your anchor and explore nearby cities and landscapes.',
              },
              {
                icon: Users,
                title: 'Respect Customs',
                text: 'Dress modestly at traditional events. Ask before photographing local celebrations.',
              },
            ].map((tip) => (
              <div key={tip.title} className="flex gap-3 items-start">
                <div className="shrink-0 p-2 rounded-lg bg-white/10">
                  <tip.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{tip.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed mt-0.5">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Calendar with Filters ── */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-3">
            Full Event Calendar
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Browse all {events.length} events by month, category, or city. Filter to find the perfect events for your trip dates.
          </p>
        </div>
        <EventsClientSection
          events={events}
          types={EVENT_TYPES}
          cities={uniqueCities}
        />
      </section>

      {/* ── CTA to Festivals Deep Dive ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-4">
            Want More Detail?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Explore our in-depth festival guides with history, practical tips, accommodation advice, and everything you need to plan your visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/festivals"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Star className="w-4 h-4" />
              Festival Deep-Dive Guides
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

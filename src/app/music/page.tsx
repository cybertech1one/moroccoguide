import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Music,
  Drum,
  Radio,
  Mic2,
  Heart,
  Sparkles,
  Globe,
  MapPin,
  Calendar,
  Clock,
  Ticket,
  Users,
  Star,
  ArrowRight,
  Play,
  Volume2,
  Award,
  ShoppingBag,
  Headphones,
  Compass,
  BookOpen,
  Disc3,
  CircleDot,
  Map,
  Smartphone,
  CirclePlay,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Music & Dance Guide | Gnaoua, Andalusian, Chaabi, Amazigh, Malhun, Rai & More',
  description:
    'Explore the rich musical heritage of Morocco. From the spiritual trance of Gnaoua (UNESCO heritage) and the refined elegance of Andalusian classical music to Amazigh rhythms, Malhun poetry, Rai, Sufi devotion, modern hip-hop, electronic fusion, and the vibrant festival scene. Instruments, festivals, venues, shopping, workshops, and music-themed itineraries.',
  keywords: [
    'Moroccan music',
    'Gnaoua music',
    'Gnaoua UNESCO heritage',
    'Andalusian classical music',
    'Chaabi Morocco',
    'Amazigh Berber music',
    'Malhun poetry music',
    'Rai music Oujda',
    'Moroccan instruments',
    'guembri',
    'bendir',
    'oud',
    'qraqeb',
    'rabab',
    'Gnaoua Festival Essaouira',
    'Fes Festival Sacred Music',
    'Mawazine festival',
    'Timitar festival',
    'Moroccan dance',
    'Ahwash dance',
    'Guedra dance',
    'Moroccan music festivals',
    'Sufi music Morocco',
    'Nass El Ghiwane',
    'Hoba Hoba Spirit',
    'ElGrandeToto',
    'Moroccan hip-hop',
    'Moroccan electronic music',
    'drumming workshop Morocco',
    'Gnawa ceremony experience',
    'buy instruments Morocco',
  ],
  openGraph: {
    title: 'Moroccan Music & Dance - CityGuide',
    description:
      'Discover the soul of Morocco through its music and dance. Gnaoua trance ceremonies, Andalusian orchestras, Amazigh mountain rhythms, Malhun poetry, the vibrant modern scene, festivals, instruments, shopping, and music-themed itineraries.',
    url: 'https://citytoursmorocco.com/music',
    images: [
      {
        url: '/images/art-gnawa-music.webp',
        width: 1200,
        height: 630,
        alt: 'Gnaoua musicians performing with traditional instruments in Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/music' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://citytoursmorocco.com/music',
  name: 'Moroccan Music & Dance Guide',
  description:
    'Comprehensive guide to Moroccan music traditions, instruments, festivals, live music venues, shopping, workshops, famous artists, and music-themed itineraries covering Gnaoua, Andalusian, Chaabi, Amazigh, Malhun, Rai, Sufi, and modern genres.',
  url: 'https://citytoursmorocco.com/music',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: [
    { '@type': 'Thing', name: 'Moroccan Music' },
    { '@type': 'Thing', name: 'Traditional Dance' },
    { '@type': 'Thing', name: 'Gnaoua UNESCO Heritage' },
    { '@type': 'Country', name: 'Morocco' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'Music & Dance', item: 'https://citytoursmorocco.com/music' },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Moroccan Music Genres',
    numberOfItems: 8,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Gnaoua Music' },
      { '@type': 'ListItem', position: 2, name: 'Andalusian Classical (Al-Ala)' },
      { '@type': 'ListItem', position: 3, name: 'Chaabi' },
      { '@type': 'ListItem', position: 4, name: 'Amazigh / Berber Music' },
      { '@type': 'ListItem', position: 5, name: 'Malhun' },
      { '@type': 'ListItem', position: 6, name: 'Rai' },
      { '@type': 'ListItem', position: 7, name: 'Sufi Music' },
      { '@type': 'ListItem', position: 8, name: 'Modern Moroccan Music' },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   MUSIC GENRES DATA
   ═══════════════════════════════════════════════════════════════ */

const musicGenres = [
  {
    id: 'gnaoua',
    name: 'Gnaoua Music',
    tagline: 'Trance, Healing & Sub-Saharan Roots',
    tags: ['Spiritual', 'Trance', 'Essaouira'],
    tagStyles: ['tag-primary', 'tag-accent', 'tag-secondary'],
    image: '/images/art-gnawa-music.webp',
    description:
      'Gnaoua is the heartbeat of spiritual Morocco, a music born from the memories of enslaved West Africans who were brought to the Maghreb centuries ago. Far more than entertainment, Gnaoua is a healing tradition. The deep, hypnotic pulse of the guembri (a three-stringed bass lute covered in camel skin) anchors the sound, while the metallic shimmer of qraqeb (iron castanets) and the resonant thud of the tbel (drum) build layers of rhythm that can induce trance states.',
    details:
      'At the heart of Gnaoua practice is the lila, an all-night ceremony led by a maalem (master musician) that invokes spiritual entities through specific melodies and colors. Each spirit has its own musical suite, its own incense, and its own choreography. The ceremony moves through seven spiritual realms, and participants may enter states of ecstatic trance as the music intensifies through the night. The annual Gnaoua World Music Festival in Essaouira, founded in 1998, has transformed this once-marginalized tradition into a globally celebrated art form. Every June, master Gnaoua musicians collaborate with international jazz, blues, rock, and electronic artists on stages overlooking the Atlantic, creating fusion performances that push boundaries while honoring the tradition. UNESCO recognized Gnaoua culture as Intangible Cultural Heritage in 2019.',
    instruments: ['Guembri (bass lute)', 'Qraqeb (iron castanets)', 'Tbel (drum)'],
  },
  {
    id: 'andalusian',
    name: 'Andalusian Classical (Al-Ala)',
    tagline: 'The Refined Legacy of Moorish Spain',
    tags: ['Classical', 'Orchestral', 'Fes & Tetouan'],
    tagStyles: ['tag-secondary', 'tag-primary', 'tag-accent'],
    image: '/images/art-gnawa-music.webp',
    description:
      'When the Moors were expelled from Al-Andalus (Muslim Spain) in the 15th century, they carried with them one of the most sophisticated musical traditions the Islamic world had ever produced. Andalusian classical music, known in Morocco as al-Ala, found a new home in the imperial cities of Fes, Tetouan, Tangier, and Rabat, where conservatories have lovingly preserved it for over five centuries.',
    details:
      'The tradition is organized around the nuba, a complex musical suite that can last several hours. Originally there were twenty-four nubat, one for each hour of the day, but only eleven complete nubat survive in Morocco today. Each nuba progresses through five distinct rhythmic movements, from slow and meditative to fast and ecstatic, performed by an orchestra of oud (lute), rabab (bowed fiddle), nay (reed flute), tar (tambourine), darbuka (goblet drum), and violin. The lyrics draw from classical Arabic and Andalusian poetry celebrating love, nature, wine, and divine beauty. To hear al-Ala performed live in the medina of Fes or the whitewashed rooms of a Tetouan conservatory is to experience a living link to medieval Cordoba and Granada. The Fes Festival of World Sacred Music often features extraordinary Andalusian performances, and the Dar Adiyel conservatory in Fes welcomes visitors to observe rehearsals.',
    instruments: ['Oud (lute)', 'Rabab (bowed fiddle)', 'Nay (reed flute)', 'Tar (tambourine)'],
  },
  {
    id: 'chaabi',
    name: 'Chaabi',
    tagline: 'The People\'s Music - Joy, Love & Celebration',
    tags: ['Folk', 'Weddings', 'Nationwide'],
    tagStyles: ['tag-accent', 'tag-primary', 'tag-secondary'],
    image: '/images/hero-jemaa-elfna-night.webp',
    description:
      'If Gnaoua is Morocco\'s soul and al-Ala its intellect, then Chaabi ("of the people" in Darija) is its joyful, beating heart. This is the music you hear at every Moroccan wedding, pouring out of taxis in Casablanca, and filling the streets during national celebrations. Chaabi is democratic, exuberant, and impossible to sit still to.',
    details:
      'Modern Chaabi blends traditional Moroccan folk melodies with accordion, banjo, electric guitar, synthesizers, and driving percussion. The lyrics, always in Moroccan Darija rather than formal Arabic, address the themes that matter most to ordinary people: love, heartbreak, the daily struggle, and the pure joy of being alive. The genre owes its artistic credibility to legends like Nass El Ghiwane, the iconic group from the Hay Mohammadi neighborhood of Casablanca who fused Chaabi with social commentary in the 1970s and became known as "the Rolling Stones of Africa." Their raw, politically charged sound gave voice to a generation and elevated Chaabi from wedding music to art. Today, artists like Saad Lamjarred blend Chaabi with pop and electronic elements, racking up billions of YouTube views and proving that the people\'s music continues to evolve with the times. No visit to Morocco is complete without experiencing a Chaabi-powered celebration.',
    instruments: ['Bendir (frame drum)', 'Hajhouj (bass lute)', 'Accordion', 'Banjo'],
  },
  {
    id: 'amazigh',
    name: 'Amazigh / Berber Music',
    tagline: 'Mountain Rhythms & Ancient Traditions',
    tags: ['Traditional', 'Atlas Mountains', 'Communal'],
    tagStyles: ['tag-primary', 'tag-secondary', 'tag-accent'],
    image: '/images/hero-berber-culture.webp',
    description:
      'The Amazigh (Berber) peoples of Morocco possess musical traditions that predate the arrival of both Arab and European cultures by millennia. Music is not a spectator sport in Amazigh culture; it is communal, participatory, and deeply woven into the rhythms of daily life, seasonal change, and spiritual practice.',
    details:
      'The two most celebrated forms are Ahwash and Ahidous. Ahwash, practiced by the Tashelhit-speaking communities of the High Atlas and Souss Valley, features large circles of men and women performing coordinated singing, hand-clapping, and rhythmic movement to the accompaniment of bendirs (frame drums). The music builds in intensity over hours, and the effect is mesmerizing. Ahidous, from the Middle Atlas Tamazight-speaking communities, is similar but typically arranged in shoulder-to-shoulder lines rather than circles. In the Rif Mountains of the north, the fiery Reggada dance involves rapid footwork and musket-wielding displays that speak to the region\'s warrior traditions. Each region, each valley, each village has its own musical dialect, its own poetic forms, and its own ceremonial contexts. To attend a village celebration in the Atlas Mountains, whether a harvest festival, a wedding, or the Imilchil Marriage Moussem, is to witness one of the last great communal music-making traditions on Earth.',
    instruments: ['Bendir (frame drum)', 'Lotar (lute)', 'Nay (reed flute)', 'Imzad (fiddle)'],
  },
  {
    id: 'malhun',
    name: 'Malhun',
    tagline: 'The Poetic Art of the Artisan Guilds',
    tags: ['Poetry', 'Heritage', 'Meknes & Fes'],
    tagStyles: ['tag-secondary', 'tag-accent', 'tag-primary'],
    image: '/images/art-gnawa-music.webp',
    description:
      'Malhun is Morocco\'s great poetic-musical tradition, born in the workshops and guilds of the imperial cities. Unlike the courtly refinement of Andalusian al-Ala, Malhun grew from the creative energies of craftsmen, tanners, weavers, and merchants who composed elaborate poems in Moroccan Darija and set them to music during long working days.',
    details:
      'The tradition dates back to at least the 16th century and flourished in Meknes, Fes, Marrakech, and Sale. Malhun poems, called qasidas, are masterworks of vernacular literature that address themes of love, religious devotion, social commentary, and nature with extraordinary linguistic dexterity, wordplay, and metaphor. A single qasida can run for thirty minutes or more, its verses unfolding over a structured musical accompaniment of oud, swisen (a small violin-like instrument), hand-clapping, and tea glasses used as percussion. The naqsha, or musical setting, follows a strict progression from slow recitation to ecstatic climax. Malhun evenings are deeply communal affairs where the audience knows the poems by heart and responds with exclamations of appreciation. The tradition has been recognized by Morocco as part of its national cultural heritage, and Meknes remains the spiritual capital of Malhun, hosting annual festivals celebrating the art form. To attend a Malhun evening in a private salon in Meknes or Fes is to experience a uniquely Moroccan art that exists nowhere else on Earth.',
    instruments: ['Oud (lute)', 'Swisen (small fiddle)', 'Hand-clapping', 'Tea glasses (percussion)'],
  },
  {
    id: 'rai',
    name: 'Rai',
    tagline: 'Eastern Morocco\'s Cross-Border Sound',
    tags: ['Modern Folk', 'Oujda', 'Cross-border'],
    tagStyles: ['tag-secondary', 'tag-accent', 'tag-primary'],
    image: '/images/hero-jemaa-elfna-night.webp',
    description:
      'Rai, meaning "opinion" or "point of view" in Arabic, is the rebellious soundtrack of Eastern Morocco. Born in the port city of Oran, Algeria, Rai crossed the border into the Moroccan city of Oujda and the surrounding Oriental region, where it has become an essential part of the local musical identity.',
    details:
      'Traditional Rai drew from Bedouin folk poetry and used instruments like the gasba (reed flute) and guellal (drum). In the 1970s and 1980s, a new generation of artists, known as chebs and chabas (young men and women), electrified the sound with synthesizers, drum machines, and Western pop production. The lyrics tackled taboo subjects: alcohol, love, sexuality, and social frustration, making Rai both beloved and controversial. In Morocco, Oujda is the undisputed capital of Rai. The city hosts an annual Rai festival, and its cafes and clubs pulse with the genre\'s driving rhythms. Moroccan Rai artists have added their own flavors, blending the genre with Chaabi, Gnaoua, and modern electronic production. The cross-border cultural exchange between Morocco and Algeria through Rai music represents one of the most fascinating musical dialogues in North Africa, connecting communities even when political borders have been closed.',
    instruments: ['Gasba (reed flute)', 'Guellal (drum)', 'Synthesizer', 'Darbuka'],
  },
  {
    id: 'modern',
    name: 'Modern Moroccan Music',
    tagline: 'Rock, Rap, Fusion & the New Generation',
    tags: ['Rock', 'Hip-Hop', 'Fusion'],
    tagStyles: ['tag-accent', 'tag-secondary', 'tag-primary'],
    image: '/images/hero-jemaa-elfna-night.webp',
    description:
      'Morocco\'s contemporary music scene is one of the most dynamic and creative in the Arab world. A new generation of artists is forging sounds that are unapologetically Moroccan and unmistakably global, blending traditional influences with rock, hip-hop, electronic, and pop in ways that reflect the complexity of modern Moroccan identity.',
    details:
      'Hoba Hoba Spirit, the Casablanca rock band formed in 1998, pioneered what they call "Hayha music," a high-energy fusion of Gnaoua, Chaabi, reggae, and rock sung in Darija. They proved that Moroccan artists could be authentically local and internationally relevant at the same time. Fnaire took a similar path, blending hip-hop beats with Amazigh rhythms and socially conscious lyrics. In the pop world, Saad Lamjarred has become one of the most-streamed Arab artists globally, while the Casablanca rap scene, led by artists like Dizzy DROS, Shayfeen, and ElGrandeToto, has exploded in recent years with raw, honest portrayals of urban Moroccan life. Electronic music is thriving too, with the Oasis Festival near Marrakech (before its hiatus) having established Morocco as a destination for international DJs. The L\'Boulevard festival in Casablanca has been the launchpad for Moroccan rock and hip-hop since 1999, providing a stage for underground artists and proving that Morocco\'s musical future is as rich as its past.',
    instruments: ['Electric guitar', 'Sampler / MPC', 'Turntables', 'Guembri (fusion)'],
  },
  {
    id: 'sufi',
    name: 'Sufi Music',
    tagline: 'The Spiritual Dimension of Sound',
    tags: ['Devotional', 'Mystical', 'Brotherhood'],
    tagStyles: ['tag-primary', 'tag-accent', 'tag-secondary'],
    image: '/images/art-gnawa-music.webp',
    description:
      'Sufism, the mystical dimension of Islam, has deep roots in Morocco, and music is one of its primary vehicles for approaching the Divine. Unlike the more formal structures of Andalusian classical music or the communal energy of Amazigh traditions, Sufi music is explicitly devotional: its purpose is to dissolve the boundary between the worshipper and God.',
    details:
      'The Aissawa brotherhood, founded in Meknes in the 15th century by Sheikh al-Kamil Muhammad ibn Issa, is perhaps the most musically significant Sufi order in Morocco. Their hadra (spiritual gathering) features ecstatic group chanting, rhythmic breathing exercises, and trance-inducing percussion that can last for hours. The Hamadsha and Dghoughiyyin brotherhoods have similar traditions, each with their own repertoire, instruments, and spiritual practices. In the zawiyas (Sufi lodges) scattered across Morocco, weekly gatherings bring devotees together for dhikr (remembrance of God) through repetitive chanting of divine names and sacred phrases, accompanied by frame drums and hand-clapping. The Fes Festival of World Sacred Music showcases Sufi traditions from Morocco and around the world, offering visitors an accessible entry point into this profound spiritual practice. The experience of hearing Sufi chanting echo through the ancient walls of a Fes medina or Meknes zawiya at night is among the most moving experiences Morocco offers.',
    instruments: ['Bendir (frame drum)', 'Taarija (small drum)', 'Voice (chanting)', 'Hand-clapping'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   GNAOUA UNESCO IN-DEPTH DATA
   ═══════════════════════════════════════════════════════════════ */

const gnaoUnescoDetails = {
  title: 'Gnaoua: UNESCO Intangible Cultural Heritage',
  year: 2019,
  description:
    'In December 2019, UNESCO inscribed Gnaoua on the Representative List of the Intangible Cultural Heritage of Humanity, recognizing both the music and the broader cultural practices surrounding it. This designation protects the lila ceremonies, the master-apprentice transmission system, the associated spiritual practices, and the community\'s cultural knowledge.',
  significance: [
    {
      heading: 'The Lila Ceremony',
      text: 'The lila (or derdeba) is an all-night healing ceremony that forms the spiritual core of Gnaoua practice. Led by a maalem (master musician) and his troupe, the ceremony progresses through seven suites, each dedicated to a specific spiritual entity (mlk) identified by color. Participants may enter trance states as the music intensifies, and the ceremony serves both spiritual healing and community bonding purposes.',
    },
    {
      heading: 'Master-Apprentice Transmission',
      text: 'Gnaoua knowledge is passed through a rigorous apprenticeship system. A young musician (koyo) trains under a maalem for years, learning not just the technical aspects of playing the guembri and singing the repertoire, but also the spiritual dimensions: which melodies invoke which spirits, the meaning of each color, and the protocols of the lila. Only after years of training and a formal initiation ceremony can a musician be recognized as a maalem.',
    },
    {
      heading: 'Instruments of the Sacred',
      text: 'The guembri (also called sintir or hajhouj) is the sacred instrument of Gnaoua. Carved from a single log and covered with dromedary camel skin, it produces deep, resonant tones that are believed to have the power to communicate with the spirit world. The qraqeb (large iron castanets) provide the metallic rhythmic shimmer, and the tbel (large drum) adds the thunderous bass. Together, these instruments create the characteristic Gnaoua sonic landscape.',
    },
    {
      heading: 'The Essaouira Connection',
      text: 'While Gnaoua communities exist across Morocco, Essaouira has become the spiritual capital of the tradition, largely thanks to the Gnaoua World Music Festival founded in 1998. The festival brings together master maalems from across Morocco with international musicians for fusion performances. What began as a small cultural event now draws over 500,000 visitors annually and has been instrumental in bringing global recognition to Gnaoua culture.',
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   TRADITIONAL INSTRUMENTS DATA
   ═══════════════════════════════════════════════════════════════ */

const instruments = [
  {
    name: 'Guembri (Sintir)',
    origin: 'Gnaoua tradition',
    description:
      'A three-stringed bass lute carved from a single log and covered with camel skin. The guembri produces a deep, resonant, almost hypnotic tone that forms the foundation of Gnaoua music. Only a master maalem plays the guembri during a lila ceremony.',
  },
  {
    name: 'Qraqeb',
    origin: 'Gnaoua tradition',
    description:
      'Large iron castanets played in pairs, producing a bright, metallic clacking rhythm. Gnaoua performers dance while playing the qraqeb in intricate patterns, creating a shimmering rhythmic texture above the guembri\'s bass line.',
  },
  {
    name: 'Oud',
    origin: 'Andalusian / Arab classical',
    description:
      'The king of Arab instruments, a pear-shaped stringed instrument with a short, fretless neck and a deep, warm tone. The oud is central to Andalusian classical orchestras and is considered the ancestor of the European lute.',
  },
  {
    name: 'Rabab',
    origin: 'Andalusian / Amazigh',
    description:
      'A single-stringed bowed fiddle with a resonating chamber made from wood or coconut shell. The rabab produces a haunting, nasal tone and is used in both Andalusian classical ensembles and Amazigh folk music.',
  },
  {
    name: 'Bendir',
    origin: 'Pan-Moroccan',
    description:
      'A large frame drum with snares (gut strings stretched across the inside of the skin) that give it a distinctive buzzing resonance. The bendir is the most ubiquitous drum in Moroccan music, essential to Amazigh, Sufi, and folk traditions.',
  },
  {
    name: 'Nay',
    origin: 'Andalusian / Sufi',
    description:
      'An end-blown reed flute made from cane, producing a breathy, plaintive tone often associated with spiritual longing. The nay is featured in Andalusian orchestras and Sufi ceremonies, and the great Sufi poet Rumi wrote extensively about its symbolism.',
  },
  {
    name: 'Darbuka (Doumbek)',
    origin: 'Pan-Moroccan / Arab',
    description:
      'A goblet-shaped hand drum made from ceramic or metal with a goat-skin or synthetic head. The darbuka provides the sharp, articulate rhythmic patterns that drive Chaabi, Rai, and modern Moroccan pop music.',
  },
  {
    name: 'Tbel',
    origin: 'Gnaoua / Amazigh',
    description:
      'A large double-headed cylindrical drum struck with a curved stick. The tbel provides powerful bass rhythms in Gnaoua processions and Amazigh celebrations, and its booming sound can carry across entire villages.',
  },
  {
    name: 'Lotar (Loutar)',
    origin: 'Amazigh tradition',
    description:
      'A four-stringed plucked lute used in Amazigh music, particularly in the Middle Atlas and Souss Valley regions. The lotar accompanies singers and storytellers, and its bright, percussive tone drives the rhythm of Amazigh folk songs.',
  },
  {
    name: 'Tar (Riq)',
    origin: 'Andalusian / Arab classical',
    description:
      'A tambourine-like frame drum with metal jingles set into the frame. The tar provides both rhythmic foundation and metallic color in Andalusian orchestras. A skilled tar player can produce an astonishing range of sounds and dynamics.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   MUSIC FESTIVALS DATA
   ═══════════════════════════════════════════════════════════════ */

const festivals = [
  {
    name: 'Gnaoua World Music Festival',
    city: 'Essaouira',
    dates: 'Late June (4 days)',
    description: 'Morocco\'s most iconic music festival. Gnaoua masters collaborate with international artists on stages overlooking the Atlantic. Free entry, 500,000+ visitors. The fusion concerts between maalems and jazz, blues, and electronic artists are legendary.',
    highlight: true,
    attendance: '500,000+',
    founded: 1998,
  },
  {
    name: 'Fes Festival of World Sacred Music',
    city: 'Fes',
    dates: 'Late May - Early June (9 days)',
    description: 'A UNESCO-endorsed celebration of sacred music from around the world, held in the extraordinary setting of the Bab Makina palace grounds. Sufi chanting, Andalusian orchestras, gospel, and sacred traditions from every continent.',
    highlight: true,
    attendance: '60,000+',
    founded: 1994,
  },
  {
    name: 'Mawazine Festival',
    city: 'Rabat',
    dates: 'Mid-June (9 days)',
    description: 'One of the world\'s largest music festivals by attendance (2.5M+ visitors), featuring international pop superstars alongside Arabic and Moroccan headliners. Past performers include Rihanna, Stevie Wonder, Mariah Carey, and Elton John.',
    highlight: true,
    attendance: '2,500,000+',
    founded: 2001,
  },
  {
    name: 'Timitar Festival',
    city: 'Agadir',
    dates: 'July (4 days)',
    description: 'Celebrates Amazigh (Berber) music and world music in the coastal city of Agadir. Large open-air concerts draw hundreds of thousands, with a mix of traditional Amazigh artists and international headliners. Free entry to most stages.',
    highlight: true,
    attendance: '400,000+',
    founded: 2004,
  },
  {
    name: 'Taragalte Festival',
    city: "M'Hamid El Ghizlane",
    dates: 'Mid-November (3 days)',
    description: 'An intimate desert music festival on the edge of the Sahara featuring Gnaoua, Tuareg, and Saharan musicians performing under the stars on a natural sand stage.',
  },
  {
    name: 'L\'Boulevard Festival',
    city: 'Casablanca',
    dates: 'September',
    description: 'The launchpad of Morocco\'s rock and hip-hop scene since 1999. Showcases underground Moroccan bands, rappers, and emerging talent in an electric atmosphere.',
  },
  {
    name: 'Tanjazz Festival',
    city: 'Tangier',
    dates: 'September (4 days)',
    description: 'An elegant jazz festival held in venues across the international city of Tangier, from grand hotels to intimate medina spaces.',
  },
  {
    name: 'Festival International du Rai',
    city: 'Oujda',
    dates: 'September',
    description: 'A celebration of Rai music in its Moroccan capital, Oujda, featuring established and emerging Rai artists from Morocco and Algeria.',
  },
  {
    name: 'Visa for Music',
    city: 'Rabat',
    dates: 'November (4 days)',
    description: 'A professional music market and festival showcasing emerging talent from Africa and the Middle East. Industry panels, showcases, and networking make it a crucial event for the regional music industry.',
  },
  {
    name: 'Jazzablanca',
    city: 'Casablanca',
    dates: 'April (3 days)',
    description: 'Casablanca\'s premier jazz festival bringing international jazz, soul, and funk artists to perform alongside Moroccan fusion acts. Held at the Anfa Hippodrome with multiple stages.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   LIVE MUSIC VENUES DATA (BY CITY)
   ═══════════════════════════════════════════════════════════════ */

const venuesByCity = [
  {
    city: 'Marrakech',
    venues: [
      {
        name: 'Jemaa el-Fnaa',
        type: 'Open-Air Square',
        description: 'The legendary square comes alive each evening with Gnaoua musicians, Chaabi groups, Amazigh performers, and halqa (street performance circles). Free, authentic, and unforgettable.',
      },
      {
        name: 'Le Comptoir Darna',
        type: 'Restaurant & Live Music',
        description: 'An upscale Marrakech institution where live Gnaoua and Chaabi musicians perform nightly alongside belly dancing. Book a dinner table for the full experience.',
      },
      {
        name: 'Bazaar Cafe',
        type: 'Cultural Cafe',
        description: 'A hidden gem in the medina combining a cafe, art gallery, and cultural space. Regular live music evenings featuring Gnaoua, jazz, and fusion acts.',
      },
      {
        name: 'Kechmara',
        type: 'Bar & Live Music',
        description: 'The coolest cafe-bar in Gueliz, frequented by Marrakech\'s creative class. Vinyl DJs on weekends, live bands, and a rooftop terrace.',
      },
    ],
  },
  {
    city: 'Essaouira',
    venues: [
      {
        name: 'Taros Cafe',
        type: 'Rooftop Bar & Live Music',
        description: 'A beloved rooftop overlooking the port and medina with live Gnaoua and jazz performances most evenings. The sunset views are spectacular.',
      },
      {
        name: 'Mama Afrika',
        type: 'Live Music Venue',
        description: 'The beating heart of Essaouira\'s music scene. Live Gnaoua, reggae, and world music performances every night in a colorful, bohemian space.',
      },
      {
        name: 'Place Moulay Hassan',
        type: 'Public Square',
        description: 'The main square of Essaouira where Gnaoua musicians gather for impromptu performances, especially during the annual festival.',
      },
    ],
  },
  {
    city: 'Fes',
    venues: [
      {
        name: 'Dar Adiyel',
        type: 'Conservatory',
        description: 'A traditional music conservatory in the Fes medina where you can observe rehearsals of Andalusian classical orchestras and attend intimate recitals.',
      },
      {
        name: 'Cafe Clock',
        type: 'Cultural Cafe & Live Music',
        description: 'A beloved cultural cafe hosting live Gnaoua sessions, Hikayat storytelling nights, and cooking workshops. Rooftop views of the minarets.',
      },
      {
        name: 'Dar Batha Museum',
        type: 'Cultural Venue',
        description: 'This museum of Moroccan arts hosts occasional Andalusian music evenings in its beautiful Hispano-Moresque garden setting.',
      },
    ],
  },
  {
    city: 'Casablanca',
    venues: [
      {
        name: 'Rick\'s Cafe',
        type: 'Piano Bar & Restaurant',
        description: 'The Casablanca classic inspired by the film. Live piano and jazz music nightly in an atmospheric Art Deco setting. Reservations recommended.',
      },
      {
        name: 'La Bodega',
        type: 'Bar & Live Music',
        description: 'A lively Spanish-themed tapas bar in Ain Diab with live flamenco guitar, sangria, and a fun mixed crowd of locals and expats.',
      },
      {
        name: 'Studio des Arts Vivants',
        type: 'Performance Space',
        description: 'Casablanca\'s premier independent arts venue hosting concerts, theater, and dance performances. A hub for the city\'s contemporary arts scene.',
      },
    ],
  },
  {
    city: 'Tangier',
    venues: [
      {
        name: 'Cafe Hafa',
        type: 'Historic Cafe',
        description: 'A cliff-side cafe where the Rolling Stones and Jimi Hendrix once hung out. Occasional live Andalusian and Chaabi music. The Atlantic views are timeless.',
      },
      {
        name: 'Tanja Flandria',
        type: 'Bar & Cultural Venue',
        description: 'A vibrant bar hosting live music, DJ nights, and art exhibitions. The eclectic crowd continues Tangier\'s legendary bohemian tradition.',
      },
      {
        name: 'El Morocco Club',
        type: 'Speakeasy Bar',
        description: 'A stylish speakeasy-style bar in the medina with vintage Moroccan decor and occasional live jazz and acoustic performances.',
      },
    ],
  },
  {
    city: 'Rabat',
    venues: [
      {
        name: 'Sofitel Rabat Jardin des Roses',
        type: 'Hotel & Live Music',
        description: 'The Sofitel regularly hosts Andalusian classical music evenings in its elegant garden setting. A refined way to experience al-Ala.',
      },
      {
        name: 'Le Dhow',
        type: 'River Lounge',
        description: 'A restaurant-bar on a converted dhow boat moored on the Bou Regreg river. Live jazz on weekends with views of the Kasbah des Oudaias.',
      },
    ],
  },
  {
    city: 'Meknes',
    venues: [
      {
        name: 'Meknes Medina Zawiyas',
        type: 'Sufi Lodges',
        description: 'The zawiyas of Meknes host weekly hadra ceremonies with ecstatic chanting and percussion. Ask locally for schedules; visitors are usually welcome.',
      },
      {
        name: 'Place el-Hedim',
        type: 'Public Square',
        description: 'Meknes\' main square hosts street musicians, storytellers, and Aissawa brotherhood performances, particularly during moussems.',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   TRADITIONAL DANCES DATA
   ═══════════════════════════════════════════════════════════════ */

const dances = [
  {
    name: 'Guedra',
    region: 'Southern Morocco & Sahara',
    image: '/images/hero-berber-culture.webp',
    description:
      'A mesmerizing trance dance of the Tuareg and Sahrawi peoples. A woman kneels at the center of a circle of musicians and singers, her hands performing intricate, fluid movements that gradually build in intensity as the drumming accelerates. The guedra is a dance of blessing and spiritual connection.',
  },
  {
    name: 'Ahwash',
    region: 'High Atlas & Souss Valley',
    image: '/images/hero-berber-culture.webp',
    description:
      'The great communal dance of the Tashelhit-speaking Amazigh people. Men and women form facing lines or large circles, swaying, clapping, and singing in call-and-response patterns accompanied by a chorus of bendirs. The dance builds from gentle sway to joyful crescendo.',
  },
  {
    name: 'Gnaoua Dance',
    region: 'Essaouira, Marrakech & nationwide',
    image: '/images/art-gnawa-music.webp',
    description:
      'Performers in elaborate, colorful costumes topped with cowrie-shell headdresses spin, leap, and whirl while playing the qraqeb. During lila ceremonies, dancers may enter trance states, their movements becoming increasingly ecstatic.',
  },
  {
    name: 'Shikhat',
    region: 'Nationwide (urban)',
    image: '/images/hero-jemaa-elfna-night.webp',
    description:
      'Professional female dancers and musicians who perform at weddings and celebrations. Their dance is characterized by sinuous hip and shoulder movements, vibrant costumes, and an infectious energy.',
  },
  {
    name: 'Reggada',
    region: 'Rif Mountains (Northern Morocco)',
    image: '/images/hero-berber-culture.webp',
    description:
      'A fierce, warrior-like dance of the Rif Mountains. Male dancers perform rapid, stamping footwork while brandishing sticks or muskets, their movements aggressive and highly synchronized.',
  },
  {
    name: 'Ahidous',
    region: 'Middle Atlas Mountains',
    image: '/images/hero-berber-culture.webp',
    description:
      'The signature dance of Middle Atlas Tamazight-speaking communities. Men and women stand shoulder to shoulder in long lines, swaying in unison while singing and stamping their feet to the rhythm of bendirs.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   FAMOUS MOROCCAN MUSICIANS DATA
   ═══════════════════════════════════════════════════════════════ */

const famousMusicians = [
  {
    name: 'Nass El Ghiwane',
    genre: 'Chaabi / Protest Folk',
    era: '1970s - present',
    description: 'Known as "the Rolling Stones of Africa," this Casablanca group fused Chaabi with social commentary, giving voice to a generation of Moroccans. Their raw, politically charged sound elevated Moroccan popular music to art.',
  },
  {
    name: 'Mahmoud Guinia',
    genre: 'Gnaoua',
    era: '1951 - 2015',
    description: 'The greatest Gnaoua maalem of the modern era. His recordings of traditional Gnaoua music and his collaborations with Pharoah Sanders and other jazz artists brought worldwide attention to the tradition.',
  },
  {
    name: 'Hoba Hoba Spirit',
    genre: 'Rock / Fusion',
    era: '1998 - present',
    description: 'Casablanca rock pioneers who invented "Hayha music," a high-energy fusion of Gnaoua, Chaabi, reggae, and rock sung in Darija. They proved Moroccan rock could be global.',
  },
  {
    name: 'ElGrandeToto',
    genre: 'Rap / Hip-Hop',
    era: '2018 - present',
    description: 'The biggest name in Moroccan rap, whose raw, authentic portrayals of urban Casablanca life have resonated with millions. His fusion of trap, drill, and Moroccan sounds has redefined Arabic hip-hop.',
  },
  {
    name: 'Saad Lamjarred',
    genre: 'Pop / Chaabi Fusion',
    era: '2007 - present',
    description: 'One of the most-streamed Arab artists globally, blending Chaabi melodies with modern pop and electronic production. His music videos have collectively surpassed 10 billion YouTube views.',
  },
  {
    name: 'Hamid El Kasri',
    genre: 'Gnaoua',
    era: '1990s - present',
    description: 'A master maalem from Ksar el-Kebir known for his powerful voice and commanding stage presence. His collaborations at the Gnaoua Festival have produced some of the most memorable fusion performances.',
  },
  {
    name: 'Ammouri Mbarek',
    genre: 'Amazigh / Tashelhit',
    era: '1970s - present',
    description: 'The most celebrated Amazigh singer from the Souss region. His poetic lyrics in Tashelhit and his mastery of the lotar have made him an icon of Berber cultural pride.',
  },
  {
    name: 'Fnaire',
    genre: 'Hip-Hop / Amazigh Fusion',
    era: '2003 - present',
    description: 'A Marrakech hip-hop group blending Amazigh rhythms with rap and socially conscious lyrics. Their anthem "Yed el Henna" became a symbol of Moroccan identity.',
  },
  {
    name: 'Abdelwahab Doukkali',
    genre: 'Andalusian / Classical',
    era: '1960s - present',
    description: 'A towering figure in Moroccan classical music, known for his refined voice and mastery of both Andalusian al-Ala and modern Arabic song. He has performed for kings and commoners alike.',
  },
  {
    name: 'Dizzy DROS',
    genre: 'Rap / Hip-Hop',
    era: '2012 - present',
    description: 'A Casablanca rapper whose witty, multilingual lyrics in Darija, French, and English have built a devoted following. His album "3azzy 3ando Stylo" is considered a landmark in Moroccan rap.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   MUSIC SHOPPING DATA
   ═══════════════════════════════════════════════════════════════ */

const musicShopping = [
  {
    name: 'Souk des Instruments, Marrakech',
    type: 'Instrument Shops',
    description: 'Scattered through the medina near Jemaa el-Fnaa, several workshops sell handcrafted bendirs, darbukas, ouds, and guembris. Watch artisans at work and negotiate for authentic instruments. Prices range from 200 MAD for a simple bendir to 3,000+ MAD for a quality oud.',
  },
  {
    name: 'Talaa Kebira, Fes Medina',
    type: 'Instrument Workshops',
    description: 'The main artery of Fes el-Bali is home to instrument makers who craft ouds, rababs, and nays using traditional techniques. The quality here is exceptional, and many musicians from the Fes conservatory buy their instruments along this street.',
  },
  {
    name: 'Essaouira Medina Shops',
    type: 'Gnaoua Instruments & Music',
    description: 'Essaouira is the best place to buy Gnaoua instruments, especially guembris and qraqeb. Several shops near Place Moulay Hassan sell both instruments and recordings of Gnaoua masters. Ask for recommendations from local musicians.',
  },
  {
    name: 'Disc Shops, Casablanca',
    type: 'CDs, Vinyl & Downloads',
    description: 'The Habous quarter and Boulevard Mohammed V in Casablanca still have shops selling Moroccan music on CD and occasionally vinyl. Genres covered include Chaabi compilations, Gnaoua recordings, Andalusian classical, and modern Moroccan pop and rap.',
  },
  {
    name: 'Virgin Megastore Morocco',
    type: 'Modern Music Retail',
    description: 'With locations in Marrakech, Casablanca, and Rabat, Virgin Megastore carries a curated selection of Moroccan and international music including vinyl records, headphones, and music accessories. A good source for modern Moroccan albums.',
  },
  {
    name: 'Online Platforms',
    type: 'Digital Music',
    description: 'Moroccan music is widely available on Spotify, Apple Music, YouTube Music, and Anghami (a popular Middle Eastern streaming platform). Search for curated playlists of Gnaoua, Andalusian classical, Chaabi, and modern Moroccan music to build your soundtrack before and after your trip.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   MUSIC EXPERIENCES FOR TOURISTS DATA
   ═══════════════════════════════════════════════════════════════ */

const musicExperiences = [
  {
    name: 'Attend a Gnaoua Lila Ceremony',
    location: 'Essaouira / Marrakech',
    duration: 'Full evening (4-8 hours)',
    description:
      'The most profound musical experience Morocco offers. A lila is an all-night healing ceremony led by a maalem and his troupe. The music moves through seven spiritual suites, participants may enter trance, and the atmosphere is electric with spiritual intensity. Some riads and cultural organizations arrange lila experiences for respectful visitors. Expect to make a contribution of 500-1,000 MAD to the ceremony.',
    difficulty: 'Moderate - requires patience and cultural sensitivity',
  },
  {
    name: 'Drumming Workshop',
    location: 'Marrakech / Essaouira / Fes',
    duration: '2-3 hours',
    description:
      'Learn to play the bendir (frame drum), darbuka (goblet drum), or tbel (large drum) with a local musician. Workshops cover basic rhythms, Moroccan musical theory, and the cultural context of each instrument. Available through cultural centers, riads, and specialist tour operators. Prices range from 300-800 MAD per person.',
    difficulty: 'Easy - suitable for all levels',
  },
  {
    name: 'Andalusian Music Evening',
    location: 'Fes / Tetouan',
    duration: '2-3 hours',
    description:
      'Several riads and cultural venues in Fes arrange private Andalusian classical music performances where a small orchestra performs nubat in an intimate courtyard setting. The Dar Adiyel conservatory sometimes opens rehearsals to visitors. Ask your riad to arrange.',
    difficulty: 'Easy - pure listening experience',
  },
  {
    name: 'Jemaa el-Fnaa Musical Walking Tour',
    location: 'Marrakech',
    duration: '2-3 hours (evening)',
    description:
      'Guided walking tours of Jemaa el-Fnaa with a focus on the musical performances: Gnaoua circles, Chaabi groups, Amazigh dancers, and the halqa performance tradition. A knowledgeable guide helps you understand what you are seeing and hearing.',
    difficulty: 'Easy - walking tour',
  },
  {
    name: 'Sufi Hadra Experience',
    location: 'Meknes / Fes',
    duration: '2-3 hours',
    description:
      'Attend a hadra (spiritual gathering) at a Sufi zawiya in Meknes or Fes. The ecstatic chanting, rhythmic breathing, and percussion create an atmosphere of profound spiritual intensity. Visitors are usually welcome but should dress modestly and ask permission before attending.',
    difficulty: 'Moderate - spiritual sensitivity required',
  },
  {
    name: 'Learn to Play the Oud',
    location: 'Fes / Marrakech',
    duration: '1-5 day workshops',
    description:
      'Multi-day oud workshops taught by professional musicians offer a deeper dive into Arabic musical theory, maqam scales, and Andalusian classical technique. Some workshops include an instrument to take home. Prices range from 500-3,000 MAD depending on duration.',
    difficulty: 'Moderate to Advanced',
  },
];

/* ═══════════════════════════════════════════════════════════════
   MUSIC-THEMED ITINERARIES DATA
   ═══════════════════════════════════════════════════════════════ */

const musicItineraries = [
  {
    name: 'The Gnaoua Trail',
    duration: '5 days',
    route: 'Marrakech - Essaouira - Marrakech',
    highlights: [
      'Evening at Jemaa el-Fnaa watching Gnaoua performers',
      'Drumming workshop in Marrakech medina',
      'Drive to Essaouira along the Atlantic coast',
      'Visit Gnaoua instrument workshops in Essaouira',
      'Attend a lila ceremony (arranged through local contacts)',
      'Gnaoua World Music Festival if visiting in June',
      'Explore Essaouira ramparts at sunset with live music',
    ],
    bestTime: 'June (for the Gnaoua Festival) or year-round',
  },
  {
    name: 'Classical & Sacred Music Journey',
    duration: '7 days',
    route: 'Fes - Meknes - Rabat - Tetouan',
    highlights: [
      'Observe Andalusian rehearsals at Dar Adiyel conservatory, Fes',
      'Private Andalusian music evening at a Fes riad',
      'Fes Festival of World Sacred Music (late May/early June)',
      'Sufi hadra ceremony at a Meknes zawiya',
      'Malhun poetry evening in Meknes',
      'Andalusian music concert in Rabat',
      'Visit the Tetouan conservatory for al-Ala traditions',
    ],
    bestTime: 'Late May - Early June (for the Fes Festival)',
  },
  {
    name: 'Modern Sounds of Morocco',
    duration: '5 days',
    route: 'Casablanca - Rabat - Marrakech',
    highlights: [
      'Explore Casablanca\'s hip-hop and rap scene',
      'L\'Boulevard Festival (September) or Jazzablanca (April)',
      'Live music at Rick\'s Cafe, Casablanca',
      'Mawazine Festival in Rabat (June)',
      'Visit independent record shops and studios',
      'Kechmara bar scene in Marrakech Gueliz',
      'Underground electronic music events in Marrakech',
    ],
    bestTime: 'September (L\'Boulevard) or June (Mawazine)',
  },
  {
    name: 'Mountain Rhythms & Village Music',
    duration: '6 days',
    route: 'Marrakech - High Atlas - Middle Atlas - Fes',
    highlights: [
      'Drive into the High Atlas via Tizi n\'Tichka pass',
      'Attend an Ahwash performance in an Atlas Berber village',
      'Stay in a traditional gite and hear evening music',
      'Imilchil Marriage Moussem (September) for mass Ahidous dance',
      'Middle Atlas village music and lotar players',
      'Market day musicians in Azrou or Ifrane',
      'Arrive in Fes for contrasting Andalusian classical music',
    ],
    bestTime: 'September (for the Imilchil Moussem) or summer months',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function MusicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/art-gnawa-music.webp"
            alt="Gnaoua musicians performing in traditional colorful costumes in Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/culture" className="hover:text-white transition-colors">
              Culture
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Music &amp; Dance</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Sound &amp; Rhythm of Morocco
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Music &amp; Dance
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From the trance-inducing rhythms of Gnaoua to the refined elegance of Andalusian
              classical music, Morocco&apos;s sonic landscape is as vast and varied as its geography.
              Every region has its own soundtrack, every celebration its own rhythm.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  8
                </p>
                <p className="text-sm text-white/70">Music Genres</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  10
                </p>
                <p className="text-sm text-white/70">Instruments</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  {festivals.length}
                </p>
                <p className="text-sm text-white/70">Festivals</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  7
                </p>
                <p className="text-sm text-white/70">Cities</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Music in Morocco is not background noise. It is the connective tissue of society, the
              thread that binds communities together across mountains, deserts, and centuries. In a
              country where oral tradition has always been as powerful as the written word, music carries
              history, spirituality, protest, love, and collective identity in ways that few other art
              forms can match.
            </p>
            <p>
              What makes Moroccan music extraordinary is its sheer diversity. Within a single country,
              you can move from the Sub-Saharan spiritual depths of Gnaoua to the courtly refinement of
              Andalusian classical suites, from the thundering communal drums of an Atlas Mountain Ahwash
              ceremony to the intricate poetic artistry of a Malhun evening in Meknes, from the
              electronic beats of a Casablanca hip-hop studio to the devotional ecstasy of Sufi chanting
              in an ancient zawiya. Each tradition has its own instruments, its own history, and its own
              meaning, yet they all share a common thread: a profound belief that music is not merely
              entertainment but a fundamental expression of what it means to be human.
            </p>
            <p>
              This guide takes you through every major musical tradition, introduces you to the
              instruments you will hear, points you to the festivals where these traditions come alive,
              reveals the best places in Morocco to experience live music, helps you shop for instruments
              and recordings, and offers music-themed itineraries for the dedicated listener. Whether you
              are drawn to the spiritual intensity of a midnight Gnaoua lila or the joyful chaos of a
              Chaabi-powered wedding, the music of Morocco will stay with you long after you leave.
            </p>
          </div>
        </div>
      </section>

      {/* ── Music Genres ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Music className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Musical Traditions of Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Eight distinct musical worlds, each with its own history, instruments, and spiritual
              purpose. Together they form one of the richest musical cultures on the planet.
            </p>
          </div>

          <div className="space-y-10">
            {musicGenres.map((genre, index) => (
              <article
                key={genre.id}
                id={genre.id}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-72 md:h-auto shrink-0 overflow-hidden">
                  <img
                    src={genre.image}
                    alt={`${genre.name} music performance in Morocco`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {genre.tags.map((tag, i) => (
                      <span key={tag} className={`tag ${genre.tagStyles[i]}`}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <Volume2 className="w-4 h-4 text-[var(--color-primary)]" />
                    <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                      {genre.tagline}
                    </span>
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {genre.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                    {genre.description}
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                    {genre.details}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {genre.instruments.map((inst) => (
                      <span
                        key={inst}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-medium"
                      >
                        <Drum className="w-3 h-3" /> {inst}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gnaoua UNESCO Heritage Deep Dive ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Award className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              {gnaoUnescoDetails.title}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              {gnaoUnescoDetails.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gnaoUnescoDetails.significance.map((item) => (
              <div key={item.heading} className="card-moroccan p-6 md:p-8 border-l-4 border-[var(--color-accent)]">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {item.heading}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img
                src="/images/art-gnawa-music.webp"
                alt="Gnaoua musicians at the Essaouira Gnaoua World Music Festival"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-3xl">
                  The Gnaoua World Music Festival in Essaouira, founded in {gnaoUnescoDetails.significance[3]?.text.includes('1998') ? '1998' : '1998'}, now draws over
                  500,000 visitors annually and has been instrumental in bringing global recognition to this
                  extraordinary tradition. UNESCO inscription in 2019 ensures its preservation for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Traditional Instruments ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Drum className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Traditional Instruments Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The sounds of Morocco are shaped by these remarkable instruments, many of which have
              been crafted and played for centuries with techniques passed from master to apprentice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {instruments.map((inst, index) => (
              <div key={inst.name} className="card-moroccan p-5 group">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 mb-3 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                  <span className="text-sm font-bold text-[var(--color-primary)]">{index + 1}</span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                  {inst.name}
                </h3>
                <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-2">
                  {inst.origin}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {inst.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Music Festivals ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-white/10 mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
              Music Festivals
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Morocco hosts some of the most extraordinary music festivals in Africa and the Arab
              world. From free open-air mega-events to intimate desert gatherings, there is a festival
              for every musical taste.
            </p>
          </div>

          {/* Highlighted Festivals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {festivals.filter((f) => f.highlight).map((festival) => (
              <div key={festival.name} className="card-moroccan p-6 border-2 border-[var(--color-accent)]/30">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="tag tag-accent">Featured</span>
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {festival.name}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm text-[var(--text-muted)] mb-3">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {festival.city}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {festival.dates}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {festival.description}
                </p>
                {'attendance' in festival && (
                  <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] border-t border-[var(--border)] pt-3 mt-3">
                    <span className="inline-flex items-center gap-1">
                      <Users className="w-3 h-3" /> {festival.attendance}
                    </span>
                    {'founded' in festival && (
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Since {festival.founded}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Other Festivals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {festivals.filter((f) => !f.highlight).map((festival) => (
              <div key={festival.name} className="card-moroccan p-5">
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                  {festival.name}
                </h3>
                <div className="flex flex-wrap gap-2 text-xs text-[var(--text-muted)] mb-2">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {festival.city}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {festival.dates}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {festival.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/festivals"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Ticket className="w-4 h-4" /> View All Festivals &amp; Events
            </Link>
          </div>
        </div>
      </section>

      {/* ── Where to Experience Live Music (By City) ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Mic2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Experience Live Music
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the legendary square of Jemaa el-Fnaa to intimate Sufi zawiyas, these are the
              places where Morocco&apos;s musical traditions come alive every day and night.
            </p>
          </div>

          <div className="space-y-8">
            {venuesByCity.map((cityGroup) => (
              <div key={cityGroup.city}>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {cityGroup.city}
                  </h3>
                  <div className="flex-1 h-px bg-[var(--border)]" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {cityGroup.venues.map((venue) => (
                    <div key={venue.name} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-secondary)]/10 group-hover:bg-[var(--color-secondary)]/20 transition-colors">
                          <Play className="w-4 h-4 text-[var(--color-secondary)]" />
                        </div>
                        <span className="tag tag-primary text-xs">{venue.type}</span>
                      </div>
                      <h4 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                        {venue.name}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {venue.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Famous Moroccan Musicians ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Star className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Famous Moroccan Musicians &amp; Artists
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From legendary Gnaoua masters and protest folk heroes to the new generation of rappers
              and pop stars, these are the artists who have shaped Morocco&apos;s musical identity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {famousMusicians.map((artist) => (
              <div key={artist.name} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-accent)]/10 mb-3 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <Headphones className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                  {artist.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                    {artist.genre}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-2">
                  <Clock className="w-3 h-3 inline mr-1" />{artist.era}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {artist.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modern Moroccan Music Scene ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Radio className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Modern Moroccan Music Scene
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Hip-hop, electronic, fusion, and pop: Morocco&apos;s contemporary music scene is
              exploding with creativity and global ambition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 md:p-8">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
                <Mic2 className="w-5 h-5 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                Moroccan Hip-Hop &amp; Rap
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The Casablanca rap scene has exploded since the mid-2010s. ElGrandeToto leads the charge
                with raw, authentic portrayals of urban life. Dizzy DROS brings witty multilingual wordplay.
                Shayfeen pioneered the Moroccan trap sound. The movement raps in Darija, connecting with
                millions of young Moroccans who see their reality reflected in the music. L&apos;Boulevard
                festival in Casablanca has been the launchpad for these artists, and the scene now rivals
                the best in the Arab world.
              </p>
            </div>

            <div className="card-moroccan p-6 md:p-8">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
                <Disc3 className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                Electronic &amp; DJ Culture
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco has become a destination for electronic music, with the Oasis Festival near
                Marrakech (before its hiatus) putting the country on the global DJ circuit. Moroccan
                electronic producers like Amine K and the Atlas Electronic collective blend traditional
                instruments with house, techno, and ambient sounds. Marrakech and Casablanca both have
                growing underground electronic scenes, with events in converted riads, rooftops, and
                purpose-built venues attracting both local and international audiences.
              </p>
            </div>

            <div className="card-moroccan p-6 md:p-8">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <Globe className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                Fusion &amp; World Music
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The fusion of traditional Moroccan sounds with global genres is where some of the most
                exciting music is being made. Hoba Hoba Spirit&apos;s &ldquo;Hayha music&rdquo; blends
                Gnaoua with rock and reggae. Fnaire fuses hip-hop with Amazigh rhythms. The Gnaoua
                Festival itself is fundamentally a fusion event, pairing maalems with jazz, blues, and
                electronic artists. This cross-pollination reflects Morocco&apos;s position as a cultural
                bridge between Africa, the Arab world, and Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Music Experiences for Tourists ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CirclePlay className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Music Experiences for Tourists
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Go beyond passive listening. These immersive experiences let you participate in
              Morocco&apos;s musical traditions firsthand, from drumming workshops to sacred ceremonies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {musicExperiences.map((exp) => (
              <div key={exp.name} className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {exp.name}
                </h3>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {exp.duration}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {exp.description}
                </p>
                <div className="pt-3 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--text-muted)]">
                    <CircleDot className="w-3 h-3 inline mr-1" />
                    {exp.difficulty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Music Shopping Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Music Shopping: Instruments, CDs &amp; Vinyl
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Where to buy traditional instruments, recordings, and music memorabilia in Morocco.
              From medina workshops to digital platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {musicShopping.map((shop) => (
              <div key={shop.name} className="card-moroccan p-6">
                <div className="inline-flex items-center gap-2 mb-3">
                  <ShoppingBag className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide">
                    {shop.type}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {shop.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {shop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Traditional Dances ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Traditional Dances
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              In Morocco, dance is inseparable from music. These are communal expressions of joy,
              spirituality, and identity that have been performed for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dances.map((dance) => (
              <article key={dance.name} className="card-moroccan overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={dance.image}
                    alt={`${dance.name} traditional Moroccan dance`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="tag tag-secondary">{dance.region}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                    {dance.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {dance.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Music-Themed Itineraries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Music-Themed Itineraries
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Plan your trip around Morocco&apos;s music. These curated itineraries combine the best
              musical experiences with travel through the country&apos;s most stunning landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {musicItineraries.map((itinerary) => (
              <div key={itinerary.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-accent)]/10">
                    <Map className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {itinerary.name}
                    </h3>
                    <div className="flex gap-3 text-xs text-[var(--text-muted)]">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {itinerary.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {itinerary.route}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {itinerary.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CircleDot className="w-3 h-3 mt-1.5 shrink-0 text-[var(--color-accent)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--text-muted)]">
                    <Calendar className="w-3 h-3 inline mr-1" />
                    Best time: {itinerary.bestTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Listening Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tips for Music Lovers in Morocco
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Be Open to the Unexpected',
                desc: 'Some of the best musical experiences in Morocco are unplanned: a Gnaoua group in a narrow alley, an Amazigh celebration in a mountain village, a Sufi chanting session you stumble upon in a medina. Stay curious and follow the sound.',
              },
              {
                icon: Users,
                title: 'Ask Permission, Show Respect',
                desc: 'If you encounter a religious or spiritual musical ceremony (a lila, a hadra, a Sufi dhikr), ask before entering and certainly before photographing or recording. Most communities welcome respectful visitors, but the invitation must come from them.',
              },
              {
                icon: Globe,
                title: 'Time Your Visit Around Festivals',
                desc: 'Plan your trip to coincide with one of Morocco\'s major music festivals. The Gnaoua Festival (June, Essaouira), Fes Sacred Music (May-June), Mawazine (June, Rabat), and Timitar (July, Agadir) offer the most concentrated musical experiences.',
              },
              {
                icon: Radio,
                title: 'Tune In Before You Go',
                desc: 'Familiarize yourself with Moroccan music before your trip. Listen to Nass El Ghiwane, Mahmoud Guinia (Gnaoua master), the Orchestre Moulay Ahmed Loukili (Andalusian), ElGrandeToto (rap), and Hoba Hoba Spirit. Arriving with context makes live experiences infinitely richer.',
              },
              {
                icon: Mic2,
                title: 'Explore Beyond Marrakech',
                desc: 'While Jemaa el-Fnaa is extraordinary, the real musical depth of Morocco lies in cities like Fes (Andalusian), Essaouira (Gnaoua), Meknes (Sufi & Malhun), Oujda (Rai), and the Atlas villages (Amazigh). Each has its own sonic identity.',
              },
              {
                icon: Ticket,
                title: 'Support the Artists',
                desc: 'If you enjoy a street performance, leave a tip. If you attend a lila ceremony, contribute to the communal pot. Buy instruments and recordings directly from artisans and musicians. Your support helps sustain traditions that are irreplaceable.',
              },
              {
                icon: Smartphone,
                title: 'Download Moroccan Playlists',
                desc: 'Before your trip, explore curated Moroccan playlists on Spotify and Apple Music. Search for "Gnaoua," "Moroccan Chaabi," "Moroccan Rap," and "Andalusian Classical" to build a personal soundtrack that will deepen your experience.',
              },
              {
                icon: BookOpen,
                title: 'Read About the Traditions',
                desc: 'Books like "Music in Morocco" by Philip Schuyler, "Gnawa Music in Morocco" by Timothy Fuson, and "The Rough Guide to Music of the Sahara" provide excellent context. Understanding the history enriches the listening experience immeasurably.',
              },
              {
                icon: Compass,
                title: 'Take a Music-Focused Tour',
                desc: 'Several specialist tour operators offer music-focused trips through Morocco, combining live performances, workshops, festival attendance, and visits to instrument makers. These curated experiences offer depth that independent travel may not achieve.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Let Morocco&apos;s Music Move You
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Plan your trip around a festival, explore the music venues, book a workshop, or dive
            deeper into Moroccan culture. The soundtrack of your journey awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/festivals"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Calendar className="w-4 h-4" /> Explore Festivals
            </Link>
            <Link
              href="/culture"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Moroccan Culture Guide
            </Link>
            <Link
              href="/nightlife"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Music className="w-4 h-4" /> Nightlife &amp; Entertainment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
